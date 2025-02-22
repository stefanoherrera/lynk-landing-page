import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background"> {/* Changed from bg-white */}
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose lg:prose-lg mx-auto dark:prose-invert prose-headings:text-foreground dark:prose-headings:text-white prose-p:text-muted-foreground prose-li:text-muted-foreground">
          {/* Added dark mode classes */}
          <h1 className="text-3xl font-bold mb-8 pt-16 text-foreground dark:text-white">
            TERMS AND CONDITIONS
          </h1>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>By accessing and using Lynk's booking services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-white">
            2. Service Description
          </h2>
          <p>Lynk provides a digital platform for reserving study rooms. Our service includes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Real-time booking of study spaces</li>
            <li>Email confirmations of bookings</li>
            <li>Management of user accounts and bookings</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-white">
            3. User Responsibilities
          </h2>
          <p>As a user, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and current booking details</li>
            <li>Adhere to the terms of the booked study space</li>
            <li>Update or cancel bookings as needed to allow fair access to resources</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-white">
            4. Account Security
          </h2>
          <p>You are responsible for maintaining the security of your account and password. Lynk cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-white">
            5. Prohibited Uses
          </h2>
          <p>You may not use the Lynk system for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Any illegal or unauthorized purpose.</li>
            <li>Exploiting the booking system to deny access to other legitimate users.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-white">
            6. Changes to Services
          </h2>
          <p>We reserve the right at any time to modify or discontinue, temporarily or permanently, the booking service (or any part thereof) with or without notice.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-white">
            7. Terms Modification
          </h2>
          <p>We may revise these terms of use for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-white">
            8. Contact Information
          </h2>
          <p>If you have any questions or concerns about these Terms, please contact us at: contact@herrerastefano.com</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;