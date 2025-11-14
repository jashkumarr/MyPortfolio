import React from 'react';

const HeroSection: React.FC = () => {
  const socialLinks = [
    { href: 'https://github.com/jashkumarr', icon: 'fa-brands fa-github' },
    { href: 'https://www.linkedin.com/in/pandi-jaswanth-87566826b', icon: 'fa-brands fa-linkedin-in' },
    { href: 'https://www.hackerrank.com/profile/jaswanthpandi', icon: 'fa-brands fa-hackerrank' },
  ];
  const animatedWord = "Developer";

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 leading-tight mb-4 break-words">
            Pandi Jaswanth
          </h1>

          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 min-h-[4.5rem] sm:min-h-[6rem] md:min-h-[5rem] flex items-center justify-center md:justify-start flex-wrap">
             <span className="text-white">Web&nbsp;</span>
             <span className="inline-flex overflow-y-hidden">
                {animatedWord.split('').map((char, index) => (
                    <span
                      key={`${char}-${index}`}
                      className="animated-char bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {char}
                    </span>
                ))}
             </span>
          </div>
          
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
            I craft beautiful, responsive, and highly functional web applications.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
             <div className="flex items-center space-x-4">
               {socialLinks.map(link => (
                  <a
                    key={link.icon}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-slate-900/60 text-slate-300 flex items-center justify-center text-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-110"
                    aria-label={`Link to ${link.icon.split('-')[2]}`}
                  >
                    <i className={link.icon}></i>
                  </a>
               ))}
             </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-pulse blur-xl opacity-50"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-slate-800">
              <img
                src="https://image2url.com/images/1763101726752-c84d0e60-88a1-4beb-9cf3-814b20024faf.jpg"
                alt="An illustration of a developer working at a desk with multiple screens showing code."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;