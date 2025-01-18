import React from 'react';
import {Link} from 'react-router-dom';
const Cta = () => {
    return ( 
        <div className="w-full flex items-center justify-center text-white cta">
            <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">                    
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className="mb-4">
                        <p className='text-2xl md:text-4xl font-bold mb-4'>Los perros de asistencia son mucho más que compañeros</p>
                        <p className="text-lg md:text-2xl">son aliados fieles que aportan independencia, seguridad y alegría.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cta;