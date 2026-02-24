import { Product } from '@/type'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { readProducts, replenishStockWithTransaction } from '../actions'
import ProductComponent from './ProductComponent'
import { toast } from 'react-toastify'

const Stock = () => {

    const { user } = useUser()
    const email = user?.primaryEmailAddress?.emailAddress as string
    const [products, setProducts] = useState<Product[]>([])
    const [selectedProductId, setSelectedProductId] = useState<string>("")
    const [quantity, setQuantity] = useState<number>(0)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)


    const fetchProducts = async () => {
        try {
            if (email) {
                const products = await readProducts(email)
                if (products) {
                    setProducts(products)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (email)
            fetchProducts()
    }, [email])


    const handleProductChange = (productId: string) => {
        const product = products.find((p) => p.id === productId)
        setSelectedProduct(product || null)
        setSelectedProductId(productId)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedProductId || quantity <= 0) {
            toast.error("Veuillez sélectionner un produit et entrer une quantité valide.")
            return
        }
        try {
            if(email){
                await replenishStockWithTransaction(selectedProductId , quantity , email)
            }
            toast.success("Le stock a été réapprovisionné avec succès.")
            fetchProducts()
            setSelectedProductId('')
            setQuantity(0)
            setSelectedProduct(null)
            const modal = ( document.getElementById("my_modal_stock") as HTMLDialogElement)
            if(modal){
                modal.close()
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_stock" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Gestion du stock</h3>
                    <p className="py-4">Ajoutez des quantités aux produits disponibles dans votre stock.</p>

                    <form className='space-y-2' onSubmit={handleSubmit}>
                        <label className='block' >Sélectionner un produit</label>
                        <select
                            value={selectedProductId}
                            className='select select-bordered w-full'
                            required
                            onChange={(e) => handleProductChange(e.target.value)}
                        >
                            <option value="">Sélectionner un produit</option>
                            {products.map((product) => (
                                <option
                                    key={product.id}
                                    value={product.id}>
                                    {product.name} - {product.categoryName}
                                </option>
                            ))}

                        </select>

                        {selectedProduct && (
                            <ProductComponent product={selectedProduct} />
                        )}

                        <label className='block' >Quantité à ajouter</label>

                        <input
                            type="number"
                            placeholder='Quantité à ajouter'
                            value={quantity}
                            required
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className='input input-bordered w-full'

                        />
                        <button type="submit" className='btn btn-primary w-fit'>
                            Ajouter au stock
                        </button>

                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Stock
