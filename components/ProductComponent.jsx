import Image from 'next/image'
import React from 'react'
import { useDebugValue } from 'react'



export const ProductComponent = () => {

    const renderImage = () => {
        return (
            <>
                <div>
                    <Image src="/assets/hp1.jpg"></Image>
                </div>
                <div>
                    <Image src="/assets/hp2.jpg"></Image>
                </div>
                <div>
                    <Image src="/assets/hp3.jpg"></Image>
                </div>
            </>
        )
    }

    return (
        <div className='flex flex-row '>
            <div className='flex flex-col gap-6 cursor-pointer  '>

                <img src='/assets/hp1.jpg'
                    id='1'
                    width={60}
                    className="border border-borderColor rounded hover:border-blue hover:border-2">
                </img>
                <img src='assets/hp2.jpg'
                    id='2'
                    width={60}
                    className="border border-borderColor rounded hover:border-blue hover:border-2"
                    alt="#" />
                <img src='assets/hp3.jpg'
                    id='3'
                    width={60}
                    className="border border-borderColor rounded hover:border-blue hover:border-2"
                    alt="#" />
            </div>

            <div className=''>
                {
                    renderImage.map((image) => (
                        <ul>
                            <li>
                                <Image src={image}></Image>
                            </li>
                        </ul>
                    ))
                }

            </div>

            <div>
                <h1>Notebook HP 250 15.6" Core I5 1135G7 8GB 256GB SSD NVMe W11 Home</h1>


            </div>

        </div>
    )
}
