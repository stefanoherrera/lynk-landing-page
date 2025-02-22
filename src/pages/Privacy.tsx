import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose lg:prose-lg mx-auto">
          <h1 className="text-3xl font-bold mb-8 pt-16">PRIVACY POLICY</h1>
          
          <p className="mb-6">At Startup Launchpad, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p>We may collect personal information from you when you use our services, including but not limited to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Payment information (processed securely through Stripe; we do not store payment information)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain our services</li>
            <li>To process your transactions</li>
            <li>To communicate with you, including sending updates and promotional materials</li>
            <li>To improve our services and user experience</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
          <p>We take the security of your personal information seriously and implement reasonable measures to protect it. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing Your Information</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information with trusted third-party service providers to assist us in operating our services, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us using the information provided below.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of our services after any changes to this Privacy Policy will constitute your acknowledgment of the changes and your consent to abide by and be bound by the modified policy.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at: info@boulevardlegacy.com</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;