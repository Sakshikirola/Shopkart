import React from 'react'
import logo from '../Images/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => { 
  return (
    <div className='w-full bg-black text-white mt-10'>   
      <div className='max-w-7xl flex gap-16 flex-col md:flex-row'>
        <div className='max-w-6xl mx-6 px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>  
          <div> 
            <h3 className="font-semibold mb-3">Categories</h3> 
            <ul className="space-y-2 text-gray-400 text-sm">  
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Kitchen</li>
              <li>Beauty & Personal Care</li> 
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Customer Service</h3> 
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Contact Us</li>
              <li>Order Tracking</li>
              <li>Returns & Refunds</li> 
              <li>Shipping Info</li> 
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home</li>
              <li>Shop</li>
              <li>Cart</li>
              <li>Wishlist</li>  
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-lg mb-4"> 
              <FaFacebook className="cursor-pointer hover:text-gray-300" />
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
              <FaTwitter className="cursor-pointer hover:text-gray-300" />
              <FaLinkedin className="cursor-pointer hover:text-gray-300" />
            </div>
            <p className="text-gray-400 text-sm">
              Stay connected with us for latest updates and offers. 
            </p>
            <div className="flex flex-col gap-1 mt-3 text-xs text-gray-400">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 mt-4"/>

      <div className='max-w-6xl mx-4 px-6 py-5 flex items-center justify-between flex-col md:flex-row gap-2'> 
        <h1 className="text-2xl font-bold flex items-center">
          <img src={logo} alt="logo" className='w-10 h-10 md:w-12 md:h-12 object-contain'/> 
          <span>ShopKart</span>  
        </h1> 
        <p className="text-xs text-gray-400"> 
          © 2026 ShopKart. All rights reserved. 
        </p>
      </div>

    </div>
  ) 
}

export default Footer