import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])


    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: {
                'Content-Type':  'multipart/form-data'
            }
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            clearInput()
            //handle success
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay',
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            //handle error
            const { response } = error;
            if(response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay',
                );
            }
            if(response.data.errors !== null) {
                setErrors(response.data.errors)
            }
            
        });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                <form onSubmit={sendEmail}>

                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-[#0a8c44] uppercase text-4xl">Contactanos directo a nuestro Whatsapp</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 mt-5">
                                <div>
                                    <a href="https://wa.link/ylo8ll" className="bg-lime-600 py-3 px-8 rounded-lg text-white text-bold cursor-pointer">ESCRIBIR AL WHATSAPP</a>
                                </div>
                                
                                <div>
                                 <FontAwesomeIcon icon={faLocationDot} /> Calle Portugal 1122, Santiago RM
                                </div>

                                <div>
                                 <FontAwesomeIcon icon={faAt} /> envasesmp@gmail.com
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faPhone} />+56 9 9975 9376
                                </div>


                                <div>
                                    <FontAwesomeIcon icon={faInstagram} /> @envasesmp
                                </div>
                        </div>
                </div>
                </form>
                {/*
                        <div
                            className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-gray-800 rounded-2xl">
                            <div className="flex flex-col text-white">
                                
                                <div className="flex my-4 w-2/3 lg:w-3/4">
                                    <div className="flex flex-col">
                                        <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Correo</h2>
                                        <p className="text-gray-400">contacto@wolftraining.cl</p>
                                    </div>
                                </div>                    
                  
                    </div>
                </div>*/}
                </div>
            </div>
    
        </>


    )
}

export default Contact;