import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-900 hover:text-gray-800" to="/#hero" smooth scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                Inicio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-900 hover:text-gray-800" to="/#about" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                Nosotros
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-900 hover:text-gray-800" to="/#productos" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                Productos
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-900 hover:text-gray-800" to="/contact" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                Contacto
            </HashLink>
        </>
    )
}

export default NavLinks;
