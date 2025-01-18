import React from 'react';
import img1 from '../images/cer1.png';
import img2 from '../images/cer2.png';

const Want = () => {
    return (
        <>
                <div className="m-auto max-w-6xl h-5/6 py-8" id='about' >

                    <div className="flex flex-col lg:flex-row justify-between lg:text-left" data-aos="fade-up">
                        <div className="flex-col md:p-14  my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="mb-5 text-3xl font-bold text-[#0a8c44]">Donde puedes ubicarnos</h3>
                            <div>
                                <ul>
                                    <li className="text-lg font-semibold">
                                        Portugal 1122, Santiago de Chile
                                    </li>
                                    <li className="text-lg font-semibold">
                                        envasesmp@gmail.com
                                    </li>
                                    <li className="text-lg font-semibold">
                                        +56 9 9975 9376
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-row lg:mx-4 items-center">
                            <div className="w-full"><iframe width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Portugal%201221%20Santaigo+(Envases%20MP)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Want;