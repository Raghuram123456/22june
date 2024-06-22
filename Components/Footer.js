import React from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Car Website</h3>
          <p className="text-sm">Your go-to source for everything cars!</p>
        </div>
        {/* <div className="flex justify-center md:justify-end">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Cars</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="border-t border-gray-700 mt-4 py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
          <div>
            <p>&copy; {new Date().getFullYear()} Car Website. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="text-gray-400 hover:text-gray-300 mr-4">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
            </p>
          </div>
          <div className="flex mt-2 md:mt-0">
            <div className="mr-6">
              <p className="font-semibold">Feedback</p>
              <a href="#" className="text-gray-400 hover:text-gray-300">Give Feedback</a>
            </div>
            <div className="mr-6">
              <p className="font-semibold">Connect with Us</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                 <a href='https://carspotz.netlify.app/'><FaFacebook className='text-xl'/></a> 
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <FaTwitter className='text-xl'/>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <AiFillGoogleCircle className='text-xl'/>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <AiFillInstagram className='text-xl'/>
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold">Subscribe to Newsletter</p>
              <form className="mt-2 flex">
                <input type="email" placeholder="Your email" className="bg-gray-800 rounded-l-lg px-4 py-2 focus:outline-none focus:bg-gray-700 focus:border-gray-700 border border-gray-700"/>
                <button type="submit" className="bg-gray-800 rounded-r-lg px-4 py-2 focus:outline-none focus:bg-gray-700 focus:border-gray-700 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;