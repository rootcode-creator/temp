import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p>Last updated: May 2023</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
            <p>
              At Tech Engineer, we respect the privacy of our visitors and are committed to
              preserving your online safety by preserving your privacy when you visit or
              communicate with our site.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
            <p>
              We may collect the following information:
            </p>
            <ul>
              <li>Name and contact information including email address</li>
              <li>Demographic information such as preferences and interests</li>
              <li>Other information relevant to customer surveys and/or offers</li>
              <li>Information about your visits to our website including traffic data, location data, and the resources that you access</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Cookies</h2>
            <p>
              A cookie is a small file that asks permission to be placed on your computer's hard drive.
              Once you agree, the file is added, and the cookie helps analyze web traffic or lets you
              know when you visit a particular site.
            </p>
            <p>
              We use traffic log cookies to identify which pages are being used. This helps us analyze
              data about web page traffic and improve our website in order to tailor it to customer needs.
              We only use this information for statistical analysis purposes.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Third-Party Links</h2>
            <p>
              Our website may contain links to other websites of interest. However, once you have used
              these links to leave our site, you should note that we do not have any control over that
              other website. Therefore, we cannot be responsible for the protection and privacy of any
              information which you provide whilst visiting such sites.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Your Information</h2>
            <p>
              We will not sell, distribute, or lease your personal information to third parties unless
              we have your permission or are required by law to do so.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example,
              changes to our practices or for other operational, legal, or regulatory reasons.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us through our contact page.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
