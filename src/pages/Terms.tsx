import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose lg:prose-lg mx-auto">
          <h1 className="text-3xl font-bold mb-8 pt-16">TERMS AND CONDITIONS</h1>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using Startup Launchpad's services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
          <p>Startup Launchpad provides directory submission services for startups and businesses. Our service includes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Manual submission to various online directories</li>
            <li>Creation and optimization of directory listings</li>
            <li>Tracking and reporting of submissions</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Terms and Conditions Clause</h2>
          <p>By purchasing our service, you acknowledge that you will be directed to a form that must be completed and submitted. By clicking "Submit" on the provided form, you confirm that you have read and agreed to the <strong>Start Up Launchpad Terms of Service</strong>.</p>
          <p>By submitting the form, you reaffirm your acceptance of all terms, conditions, and policies outlined in the <strong>Start Up Launchpad Terms of Service</strong>.</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Email Verification:</strong> Some directories may require email verification, which you are responsible for completing independently.</li>
            <li><strong>Listing Responsibility:</strong> Our role is strictly to submit your company information to various directories. The acceptance or rejection of your submission is determined solely by the respective directories, and we do not have any influence over their decision.</li>
            <li><strong>Permission to Use Information:</strong> By providing your company details, you grant us permission to use and display this information for the purpose of directory listings.</li>
            <li><strong>Payment for Service:</strong> You understand that your payment covers the submission of your company to various directories. However, we do not guarantee the acceptance of any listing by the directories.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and complete information about your startup</li>
            <li>Respond to any verification requests from directories</li>
            <li>Comply with individual directory guidelines and terms</li>
            <li>Maintain accurate contact information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Service Delivery</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>We will begin processing your submission within 24-48 hours of payment confirmation.</li>
            <li>The submission process may take up to 7-10 business days, depending on the package selected.</li>
            <li>A submission report will be provided, which may include details such as submission status, links, and screenshots.</li>
            <li>We do not guarantee acceptance by directories, as their approval policies are beyond our control.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Directory Submission Accounts</h2>
          <p>By purchasing our services, you acknowledge and agree that Startup Launchpad will create and manage directory submission accounts on your behalf using accounts owned and operated by Boulevard Legacy LLC. These accounts will be used exclusively for the purpose of submitting your startup to directories. You do not have any ownership rights over these accounts, and we do not transfer login credentials or account control to you.</p>
          <p>You further acknowledge that by purchasing our service, you authorize us to use our own email addresses and accounts for submission purposes.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Prohibited Uses</h2>
          <p>You may not use Startup Launchpad for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Any illegal, fraudulent, or harmful activities.</li>
            <li>Submitting false or misleading information.</li>
            <li>Violating third-party terms of service.</li>
            <li>Spamming or automated submission attempts.</li>
          </ul>
          <p>We reserve the right to suspend or terminate your access if you engage in prohibited activities.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Payment & Refunds</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Payment is required in full before the submission process begins.</li>
            <li>Due to the nature of our service, all sales are final, and we do not offer refunds once submissions have started.</li>
            <li>If an error occurs on our end, we may, at our discretion, offer a partial or full credit for future services.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Disclaimer & Limitation of Liability</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>We are not responsible for changes in directory policies or the removal of listings by third-party directories.</li>
            <li>We do not guarantee specific outcomes, including but not limited to increased traffic, conversions, or directory approvals.</li>
            <li>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our service.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Right to Refuse Service</h2>
          <p>We reserve the right to decline service to anyone at our discretion, including but not limited to cases where:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>The submitted startup violates our policies or legal requirements.</li>
            <li>The requested service conflicts with our business ethics or interests.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to These Terms</h2>
          <p>We may update these Terms and Conditions from time to time. Any changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the revised Terms.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Information</h2>
          <p>If you have any questions or concerns regarding these Terms, please contact us at: info@boulevardlegacy.com</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
