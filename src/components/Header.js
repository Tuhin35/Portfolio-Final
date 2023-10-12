import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-2'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <h1
          className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
         RUT
        </h1>
         <Link to='contact'> <button className='btn btn-sm'>Work with me</button></Link>
      </div>

    </div>
  </header>;
};

export default Header;
