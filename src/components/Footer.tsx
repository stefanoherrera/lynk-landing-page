import { Mail, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:order-2">
            <a
              href="mailto:yatinsaireddyseelam@gmail.com"
              className="text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </a>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2"
            >
              <FileText className="h-5 w-5" />
              <span>Terms of Service</span>
            </Link>
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2"
            >
              <Shield className="h-5 w-5" />
              <span>Privacy Policy</span>
            </Link>
          </div>
          <div className="md:order-1 text-center md:text-left">
            <p className="text-sm leading-5 text-gray-600">
              &copy; {new Date().getFullYear()} Startup Launchpad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;