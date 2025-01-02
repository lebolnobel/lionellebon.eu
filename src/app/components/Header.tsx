import * as React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export const Header = (): React.ReactNode => {
  return (
    <div className="text-center space-y-4">
      <h1 style={{ display: 'none' }}>Lionel Lebon</h1>

      <figure className="rounded-xl m-8 bg-transparent">
        <a href="/" rel="noopener noreferrer" title="lionellebon.be">
          <img
            id="lionellebon"
            src="/assets/img/lionellebon.webp"
            alt="Lionel Lebon"
            title="Lionel Lebon"
            width="512"
            height="512"
            className={`w-36 h-36 transition-transform transform-growth rounded-full mx-auto hover:scale-125 duration-1000`}
          />
        </a>
        <figcaption className="font-medium mt-12">
          <div className="text-sm italic">
            👋{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-700 bg-clip-text text-transparent">
              Bonjour, je suis
            </span>
          </div>

          <TypeAnimation
            sequence={[
              'Lionel Lebon',
              1000,
              '@lebolnobel',
              1000,
              'Product Owner',
              1000,
              'Naturaliste',
              1000,
              'Photographe',
              1000,
            ]}
            wrapper="div"
            speed={22}
            repeat={Infinity}
            className="text-4xl font-extrabold text-slate-900"
          />
        </figcaption>
      </figure>

      <div className="text-slate-600 text-center">
        <div className="flex flex-wrap md:flex-row space-x-2 justify-center">
          <div>📸 Photographe</div>
          <div>🌿 Naturaliste</div>
          <div>🐝 Sensibiliser au monde du vivant</div>
        </div>
        <p>
          💻 Product Owner <span className="text-sm text-slate-500">@</span>{' '}
          Odoo
        </p>
      </div>

      <div className="flex justify-center space-y-2 gap-4">
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#cbbfed" offset="0%" />
            <stop stopColor="#534d60" offset="100%" />
          </linearGradient>
        </svg>

        <a
          href="https://instagram.com/lebolnobel"
          rel="noopener noreferrer"
          title="instagram/lebolnobel"
          className="text-zinc-400 hover:bg-violet-200 hover:rounded-lg p-2 transition-all duration-200"
        >
          <FaInstagram
            role="presentation"
            title="Instagram/lebolnobel"
            size="24"
            style={{ fill: 'url(#gradient)' }}
          />
        </a>

        <a
          href="https://github.com/lebolnobel"
          rel="noopener noreferrer"
          title="github/lebolnobel"
          className="text-zinc-400 hover:bg-violet-200 hover:rounded-lg p-2 transition-all duration-200"
        >
          <FaGithub
            role="presentation"
            title="GitHub/lebolnobel"
            size="24"
            style={{ fill: 'url(#gradient)' }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/lionellebon"
          rel="noopener noreferrer"
          title="LinkedIn/lionellebon"
          className="text-zinc-400 hover:bg-violet-200 hover:rounded-lg p-2 transition-all duration-200"
        >
          <FaLinkedin
            role="presentation"
            title="LinkedIn/lionellebon"
            size="24"
            style={{ fill: 'url(#gradient)' }}
          />
        </a>

        <a
          href="mailto:me [AT] lionellebon.eu"
          rel="noopener noreferrer"
          title="Contactez-moi"
          className="text-zinc-400 hover:bg-violet-200 hover:rounded-lg p-2 transition-all duration-200"
        >
          <FaEnvelope
            role="presentation"
            title="Mail/Contactez-moi"
            size="24"
            style={{ fill: 'url(#gradient)' }}
          />
        </a>
      </div>
    </div>
  );
};
