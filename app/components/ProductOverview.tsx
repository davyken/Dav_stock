import { ProductOverviewStats } from '@/type'
import React, { useEffect, useState } from 'react'
import { getProductOverviewStats } from '../actions'
import { Box, DollarSign, ShoppingCart, Tag } from 'lucide-react'

const ProductOverview = ({ email }: { email: string }) => {
    const [stats, setStats] = useState<ProductOverviewStats | null>(null)

    const fetchStats = async () => {
        try {
            if (email) {
                const result = await getProductOverviewStats(email)
                if (result) {
                    setStats(result)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    function formatNumber(value: number): string {
        if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + "M";
        if (value >= 1_000) return (value / 1_000).toFixed(1) + "k";
        return value.toFixed(1);
    }


    useEffect(() => {
        if (email)
            fetchStats()
    }, [email])

    return (
        <div>
            {stats ? (
                <div className='grid grid-cols-2 gap-4'>

                    <div className='border-2 p-4 border-base-200 rounded-3xl'>
                        <p className='stat-title'>Produits en stock</p>
                        <div className='flex justify-between items-center'>
                            <div className='stat-value'>{stats.totalProducts}</div>
                            <div className='bg-primary/25 p-3 rounded-full'>
                                <Box className='w-5 h-5 text-primary text-3xl' />
                            </div>
                        </div>
                    </div>

                    <div className='border-2 p-4 border-base-200 rounded-3xl'>
                        <p className='stat-title'>Nombre de catégories</p>
                        <div className='flex justify-between items-center'>
                            <div className='stat-value'>{stats.totalCategories}</div>
                            <div className='bg-primary/25 p-3 rounded-full'>
                                <Tag className='w-5 h-5 text-primary text-3xl' />
                            </div>
                        </div>
                    </div>

                    <div className='border-2 p-4 border-base-200 rounded-3xl'>
                        <p className='stat-title'>Valeur totale du stock</p>
                        <div className='flex justify-between items-center'>
                            <div className='stat-value'>{formatNumber (stats.stockValue)} €</div>
                            <div className='bg-primary/25 p-3 rounded-full'>
                                <DollarSign className='w-5 h-5 text-primary text-3xl' />
                            </div>
                        </div>
                    </div>

                    <div className='border-2 p-4 border-base-200 rounded-3xl'>
                        <p className='stat-title'>Total des transactions</p>
                        <div className='flex justify-between items-center'>
                            <div className='stat-value'>{stats.totalTransactions}</div>
                            <div className='bg-primary/25 p-3 rounded-full'>
                                <ShoppingCart className='w-5 h-5 text-primary text-3xl' />
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <div className='flex justify-center items-center w-full'>
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
            )}
        </div>
    )
}

export default ProductOverview
