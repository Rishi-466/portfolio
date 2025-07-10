
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {currentYear} Alex Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
