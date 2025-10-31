import React from 'react'; // Assuming this is a React component

function Footer() {
  const currentYear = new Date().getFullYear();

  // Define your navigation sections with specific links
  const footerNavigation = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Benefits', href: '/benefits' },
        { name: 'Testimonials', href: '/testimonials' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' }, // Added a blog link as a common resource
        { name: 'Documentation', href: '/docs' },
        { name: 'GitHub', href: 'https://github.com/your-repo' }, // Replace with your actual GitHub URL
      ],
    },
    {
      title: 'Company', // Changed from "Getting Started" to "Company" for a broader category
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Careers', href: '/careers' }, // Added careers as a common company link
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="bg-[#0A1121] text-gray-300 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Tagline Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start">
          <a href="/" className="mb-4">
            <img src="/logo1.png" alt="Automater Logo" className="w-[100px] h-[100px]" /> {/* Changed logo source */}
          </a>
          <p className="text-sm pt-2 text-gray-400">
            Streamline your workflows with powerful automation.
          </p>
        </div>

        {/* Dynamic Navigation Sections */}
        {footerNavigation.map((section, index) => (
          <div key={index} className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {currentYear} Automater. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;