import React from 'react';
import img from '../images/dog3.png';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl h-5/6 py-8" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/3 flex flex-col lg:mx-4 justify-center">
                            <img alt="Entranamiento de mascotas" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col md:p-14  my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-2/3 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-[#0a8c44] font-bold">¿Quienes somos?</h3>
                            <div>
                                <p className='my-3 text-lg text-gray-800'>
                                Envases MP  es una empresa líder en distribución de artículos especializados para el sector gastronómico y de servicios. Nuestra oferta incluye una amplia gama de productos para restaurantes, delivery y limpieza, diseñados para satisfacer las necesidades de nuestros clientes y ayudarles a mantener altos estándares de calidad y eficiencia.</p>

                                <p className='my-3 text-lg text-gray-800'>Nuestro compromiso es proporcionar servicios de distribución eficientes y personalizados, garantizando la entrega oportuna y confiable de nuestros productos. Nuestro equipo de expertos está siempre disponible para ofrecer asesoramiento y apoyo a nuestros clientes, ayudándoles a encontrar las soluciones más adecuadas para sus necesidades específicas.</p>

                                <p className='my-3 text-lg text-gray-800'>En Envases MP, nos esforzamos por mantener una relación cercana con nuestros clientes, escuchando sus necesidades y trabajando en estrecha colaboración con ellos para ofrecer soluciones innovadoras y efectivas. Nuestra misión es ser el proveedor de confianza para el sector gastronómico y de servicios, y contribuir al éxito y crecimiento de nuestros clientes."
                                </p>

                    
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;