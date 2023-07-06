import React from 'react'
import { NavLink } from 'react-router-dom';
import { MagnifyingGlass, User, ShoppingBag } from '@phosphor-icons/react';

const Navbar = () => {
    return (
      <nav>
        <div className=" text-white">
          <div>
            <div className="flex ml-5 p-3 text-2xl">Travel</div>
            <ul className="flex mx-auto justify-center  -mt-10">
              <li className="mr-10">
                <NavLink to="/booking">Booking </NavLink>
              </li>
              <li className="mr-10">
                <NavLink to="/booking">Package</NavLink>
              </li>
              <li className="mr-10">
                <NavLink to="/package">Pricing</NavLink>
              </li>
              <li className="mr-10">
                <NavLink tof="/pricing">Shop</NavLink>
              </li>
              <li className="mr-10">
                <NavLink to="/shop">Contact</NavLink>
              </li>
            </ul>
            <div className="flex justify-end -mt-6">
              <div className="mr-10">
                <MagnifyingGlass size={24} />
              </div>
              <div className="mr-10">
                <User size={24} />
              </div>
              <div className="mr-10">
                <ShoppingBag size={24} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar