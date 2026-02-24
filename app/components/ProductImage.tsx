import Image from 'next/image'
import React from 'react'

interface ProductImageProps {
    src: string,
    alt: string,
    heightClass?: string,
    widthClass?: string,
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt, heightClass, widthClass }) => {
    return (
        <div className='avatar '>
            <div className={` mask  mask-squircle ${heightClass} ${widthClass}`}>
                <Image
                    src={src}
                    alt={alt}
                    quality={100}
                    className='object-cover'
                    height={500}
                    width={500}
                />
            </div>
        </div>
    )
}

export default ProductImage
