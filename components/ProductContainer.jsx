import React from 'react'
import { ProductComponent } from './ProductComponent'

export const ProductContainer = () => {


    return (
        <div className='h-full max-w-[1200px] shadow-md bg-white   m-auto px-8 py-4 flex items-center justify-center'>

            <ProductComponent />
        </div>
    )
}
