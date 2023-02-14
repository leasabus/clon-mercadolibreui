import Image from 'next/image'
import React from 'react'

export const renderImages = () => {

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
