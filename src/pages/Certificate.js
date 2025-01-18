import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import tag from '../images/tag.png'
import cer1 from '../images/cer1.png'
import cer2 from '../images/cer2.png'

const Certificate = () => {
    const [petId, setID] = useState('')
    const [name, setName] = useState('')
    const [errors, setErrors] = useState(false)
    const [certificate, setCertificate] = useState(null);

    const clearErrors = () => {
        setErrors(false)
    }

    const clearInput = () => {
        setID('')
        setName('')
    }

    const reset = () => {
        clearInput();
        setErrors(false);
        setCertificate(null);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (petId === '' || name === '') { return }

        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Consultando...';
     
        setTimeout(() => {
            let data = {}; //getInfoCertificate(petId, name);
            if (data) {
                setCertificate(data)
            } else {
                setErrors(true)
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Verificar';
            }
        }, 1400)
    }

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                <form onSubmit={sendEmail}>
                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className=" text-2xl font-bold text-center lg:text-left text-orange-400 uppercase lg:text-4xl">Validar certificado de adiestramiento</h1>
                        </div>
                        {!certificate &&
                        <>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                    <div>
                                        <label>Código certificado:</label>
                                        <input 
                                            name="first_name" 
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            placeholder="Certificado*" 
                                            value={petId}
                                            onChange={(e)=> setID(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.first_name}</p>
                                        }
                                    </div>
                                    
                                    <div>
                                        <label>Nombre de la mascota:</label>
                                        <input 
                                            name="last_name" 
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            placeholder="Nombre de la mascota*"
                                            value={name}
                                            onChange={(e)=> setName(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.last_name}</p>
                                        }
                                    </div>
                            </div>
                            <div className="my-2 w-1/2 lg:w-full mt-4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-800 hover:bg-orange-400 text-gray-100 p-3 rounded-lg w-full 
                                        focus:outline-none focus:shadow-outline">
                                    Verificar
                                </button>
                                {errors &&
                                <div className="flex w-full justify-center mt-7">
                                    <p className="text-red-500 text-sm lg:text-xl">La información consultada no existe o no es valida.</p>
                                </div>}
                            </div>
                        </>
                      }
                      {certificate &&
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div className="lg:col-span-2 w-full flex justify-center">
                                    <div 
                                        className={`w-[250px] h-[250px] bg-orange-200 bg-cover p-2`}>
                                            <img src={`./doggies/${certificate.photo}`} alt="profile" />
                                        </div>
                                </div>
                                <div>
                                    <label>Código certificado:</label>
                                    <input 
                                        name="identity" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Identificador*" 
                                        disabled
                                        value={certificate.id}
                                      
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    }
                                </div>
                                
                                <div>
                                    <label>Nombre:</label>
                                    <input 
                                        name="pet_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Nombre de la mascota*"
                                        value={certificate.name}
                                        disabled
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>

                                <div>
                                    <label>Raza:</label>
                                    <input 
                                        name="raza" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Raza*" 
                                        value={certificate.raza}
                                        disabled
                                    
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    }
                                </div>
                                
                                <div>
                                    <label>Genero:</label>
                                    <input 
                                        name="gender" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Genero*"
                                        value={certificate.gender}
                                        disabled
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>


                                <div>
                                    <label>Número de chip:</label>
                                    <input 
                                        name="raza" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Raza*" 
                                        value={certificate.chip}
                                        disabled
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    }
                                </div>
                                
                                <div>
                                    <label>Adiestrado para:</label>
                                    <input 
                                        name="gender" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Genero*"
                                        value={certificate.adi ? certificate.adi : "ALERTA MEDICA"}
                                        disabled
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>
                                <div className="lg:col-span-2">
                                    <label>Observación:</label>
                                    <input 
                                        name="gender" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Genero*"
                                        value={certificate.obs ? certificate.obs : "Alerta medica"}
                                        disabled
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>
                                <div className="lg:col-span-2 w-full flex flex-col lg:flex-row">
                                    <img alt="Valido" src={tag} className="h-[65px] lg:pr-4"/>
                                    <div className="flex flex-row justify-center">
                                        <img src={cer1} className="h-[80px] w-[80px]" alt="assistance dogs"/>
                                        <img src={cer2} className="h-[80px] w-[80px]" alt="dogs" />
                                    </div>
                                </div>
                        </div>
                    }
                    </div>
                </form>
                </div>
            </div>
    
        </>


    )
}

export default Certificate;