import React from 'react';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1d1419] text-white mt-auto">
      <div className="container mx-auto py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>Created By <Link href="https://www.soratemplates.com/" className="text-green-500 hover:underline">Sora Templates</Link> & <Link href="https://mybloggerthemes.com" className="text-green-500 hover:underline">Blogger Templates</Link></p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-green-500">
              <FaFacebook size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
