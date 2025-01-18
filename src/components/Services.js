import React from 'react';
import img from '../images/servicio1.png'; 
import img2 from '../images/servicio2.png';
import img3 from '../images/servicio3.png';
import img4 from '../images/servicio4.png';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12 pb-16" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-orange-400 uppercase font-bold">Servicios</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-orange-400'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-800">Conoce nuestros servicios especializados.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Entrevista inicial</h2>
                                    <p className="text-md font-medium">
                                        En esta sesión podemos conocernos y resolver dudas acerca del proceso. Es una toma de contacto con el equipo que permite que las dudas específicas de cada familia queden aclaradas para saber con qué servicios contar y cuáles son recomendables para su caso en concreto.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Valoración del proyecto</h2>
                                    <p className="text-md font-medium">
                                    Para comenzar el trabajo específico, es necesario valorar la actitud y aptitudes de tu perro.
                                    Para ello, haremos una valoración presencial que nos permitirá conocerle, ver cómo trabajan juntos y trazar un plan de trabajo personalizado y único para ambos.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Adiestramiento específico</h2>
                                    <p className="text-md font-medium">
                                    Consiste en el servicio profesional de adiestramiento específico de un perro de alerta médica para que sea capaz de identificar el olor emitido por una persona con diabetes minutos antes de una hipo o hiperglucemia o por una persona con epilepsia minutos antes de una crisis.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Curso de formación</h2>
                                    <p className="text-md font-medium">
                                        Se trata de una formación diseñada para garantizar que tanto tú como tu perro de alerta tengan la mejor adaptación posible. La formación se divide en dos partes complementarias: una online y otra presencial y se abordan tanto aspectos de educación y convivencia como el manejo específico del perro de alerta médica y sus avisos
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Services;