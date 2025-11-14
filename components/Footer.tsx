import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 py-6">
      <div className="container mx-auto px-6 md:px-12 text-center text-slate-500">
        <p>&copy; {currentYear} Pandi Jaswanth. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;