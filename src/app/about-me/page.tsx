import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutMePage() {
  return (
    <>
      <Header />

      <main className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-4">About Me</h1>
          <div className="prose max-w-none">
            <p>Welcome to Tech Engineer, a blog dedicated to technology news, gadgets, and tech tips.</p>
            <p>This blog is created by a passionate tech enthusiast who loves to explore the latest in technology and share valuable insights with readers.</p>
            <p>Here, you'll find articles about:</p>
            <ul>
              <li>Latest Android apps and themes</li>
              <li>Windows tips and tricks</li>
              <li>Gadget reviews</li>
              <li>Gaming news</li>
              <li>Technology updates</li>
              <li>Web design trends</li>
            </ul>
            <p>Thank you for visiting Tech Engineer. I hope you find the content informative and useful!</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
