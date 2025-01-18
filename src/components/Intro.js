import React from 'react';
import img from '../images/dog3.png';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl h-5/6 py-8" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/3 flex flex-col lg:mx-4 justify-end">
                            <img alt="Entranamiento de mascotas" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col md:p-14  my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-2/3 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-[#0a8c44] font-bold">¿Quienes somos?</h3>
                            <div>
                                <p className='my-3 text-lg text-gray-800'>
                                En <b>Envases MP</b>, somos líderes en la venta y distribución de productos para delivery y artículos plásticos, con sede en Santiago de Chile. Nos especializamos en ofrecer soluciones prácticas, innovadoras y de alta calidad para negocios que buscan destacar en el competitivo mundo del delivery.
                                </p>

                                <p>
                                Con años de experiencia en el mercado, hemos construido una sólida reputación basada en nuestro compromiso con la excelencia, la puntualidad en las entregas y la satisfacción de nuestros clientes. Trabajamos con materiales de primera calidad y una amplia variedad de productos diseñados para proteger y presentar tus alimentos de manera impecable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;