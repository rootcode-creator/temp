import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaYoutube, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Navigation */}
      <div className="bg-[#1d1419] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <Link href="/about-me" className="text-sm hover:text-gray-300">ABOUT ME</Link>
            <Link href="/contact-me" className="text-sm hover:text-gray-300">CONTRACT ME</Link>
            <Link href="/privacy-policy" className="text-sm hover:text-gray-300">PRIVACY POLICY</Link>
          </div>
          <div className="flex gap-4">
            <Link href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-gray-300" />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="text-white hover:text-gray-300" />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <FaYoutube className="text-white hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 relative">
                <Image
                  src="/logo.png"
                  alt="Tech Engineer Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold mt-2 text-[#1d1419]">TECH ENGINEER</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#1d1419] text-white">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="p-4 bg-green-500 text-white">
            <span className="sr-only">Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </Link>

          <nav className="flex-1">
            <ul className="flex">
              <li>
                <Link href="/category/featured" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">Featured</Link>
              </li>
              <li>
                <Link href="/category/android" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">Android</Link>
              </li>
              <li>
                <Link href="/category/windows" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">Windows</Link>
              </li>
              <li>
                <Link href="/category/gadgets" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">Gadgets</Link>
              </li>
              <li>
                <Link href="/category/games" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">Games</Link>
              </li>
              <li>
                <Link href="/category/news" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">News</Link>
              </li>
              <li>
                <Link href="/category/reviews" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">Reviews</Link>
              </li>
              <li>
                <Link href="/category/tips-tricks" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">Tips & Tricks</Link>
              </li>
              <li>
                <Link href="/category/videos" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">Videos</Link>
              </li>
              <li>
                <Link href="/category/web-design" className="px-4 py-4 block hover:bg-gray-800 uppercase text-sm font-medium">Web Design</Link>
              </li>
            </ul>
          </nav>

          <div className="p-4 bg-green-500 text-white">
            <FaSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
