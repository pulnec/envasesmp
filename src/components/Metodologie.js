import React from 'react';
import { Product } from './Product';
import { productsData } from './data/data';

const Metodologie = () => {
    return (
        <>
        <div id="productos"></div>
        <div className="bg-gray-100">
            <div className="flex justify-center pt-5">
                <h1 className="mb-5 md:text-4xl text-2xl font-bold text-[#0a8c44]">Nuestros productos</h1>
            </div>
            <div className="grid grid-cols-1 place-items-center xl:grid-cols-4 gap-9 px-4 py-3">
                {productsData.map((product) => {
                    return <Product data={product}/>
                })}
            </div>
        </div>
        </>
    )
}

export default Metodologie;