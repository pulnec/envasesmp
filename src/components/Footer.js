import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">         
                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-800 font-semibold py-1">
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Envases MP
                    </HashLink>. Todos los derechos reversados, Chile.
                    </div>
                </div>
                </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
