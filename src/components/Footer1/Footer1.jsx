import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import logo from '../../assets/pngwing.com.png';
import './Footer1.css';  // Import the custom CSS file

export default function Footer1() {
  return (
    <Footer container className="footer-top-shadow bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="w-full flex flex-col items-center p-2">
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between p-2">
          {/* Logo and Links */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <FooterBrand
              src={logo}
              alt="Logo"
              name="Unknown"
              className="text-gray-900 dark:text-white"
            />
            <FooterLinkGroup className="flex gap-4 mt-2 sm:mt-0">
              <FooterLink 
                href="#"
                className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </FooterLink>
              <FooterLink 
                href="#"
                className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </FooterLink>
              <FooterLink 
                href="#"
                className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Licensing
              </FooterLink>
              <FooterLink 
                href="#"
                className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <FooterDivider className="my-2" />
        <FooterCopyright 
          href="#" 
          by="UnKnown" 
          className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          year={2024} 
        />
      </div>
    </Footer>
  );
}
