import React from 'react';
import { Icon } from '@iconify/react';
import FlipCard from '../Card/FlipCard';

export default function BillBoard() {
  return (
    <div >
        {/* Billboard Header */}
        <h2 className='cartelera text-2xl my-6 text-center tracking-tight'>Cartelera</h2>

        {/* Search and Filter Bar */}
        <div className='flex justify-around items-center bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-lg  shadow-lg'>
            <input
              className='h-8 mx-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent'
              type="text"
              placeholder='Buscar en la cartelera...'
            />
            <div className='flex items-center justify-center gap-2'>
                <p className='text-white text-md -tracking-tighter'>Filtros</p>
                <Icon icon="bxs:down-arrow" color="white" className="text-sm cursor-pointer" />
            </div>
        </div>

        {/* Card Display */}
        <div className='flex justify-center items-center my-6'>
          <FlipCard/>
          {/* Consider adding more cards here if necessary */}
        </div>
    </div>
  );
}