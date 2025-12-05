import * as React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export const Header = (): React.ReactNode => {
  return (
    <header className="relative text-gray-900 antialiased">
      <div className="absolute inset-0 bg-gradient-to-b from-[#dfdfdf] to-[#efefef]"></div>

      <div className="relative text-lg text-center">
        <div className="py-4">
          <h1 style={{ display: 'none' }}>Lionel Lebon</h1>

          <figure className="rounded-xl m-8 bg-transparent">
            <img
              id="lionellebon"
              src="/assets/img/lionellebon.webp"
              alt="Lionel Lebon"
              title="Lionel Lebon"
              width="512"
              height="512"
              className="w-36 h-36 transition-transform transform-growth rounded-full mx-auto hover:scale-125 duration-1000"
            />

            <figcaption className="font-medium mt-12">
              <div className="text-base italic">👋 Bonjour, je suis</div>

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
            <div className="flex flex-wrap md:flex-row space-x-4 justify-center">
              <div>📸 Photographe</div>
              <div>🌿 Naturaliste</div>
              <div>🐝 Sensibiliser au monde du vivant</div>
            </div>

            <p>
              💻 Product Owner{' '}
              <span className="text-base text-slate-500">@</span> Odoo
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://instagram.com/lebolnobel"
              rel="noopener noreferrer"
              title="instagram/lebolnobel"
              className="text-gray-700 w-11 h-11 rounded-full bg-gray-50 shadow hover:bg-[#dfdfdf] hover:border-gray-300 hover:border hover:border-solid transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-900"
            >
              <FaInstagram
                role="presentation"
                title="Instagram/lebolnobel"
                size="24"
              />
            </a>

            <a
              href="https://github.com/lebolnobel"
              rel="noopener noreferrer"
              title="github/lebolnobel"
              className="text-gray-700 w-11 h-11 rounded-full bg-gray-50 shadow hover:bg-[#dfdfdf] hover:border-gray-300 hover:border hover:border-solid transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-900"
            >
              <FaGithub
                role="presentation"
                title="GitHub/lebolnobel"
                size="24"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/lionellebon"
              rel="noopener noreferrer"
              title="LinkedIn/lionellebon"
              className="text-gray-700 w-11 h-11 rounded-full bg-gray-50 shadow hover:bg-[#dfdfdf] hover:border-gray-300 hover:border hover:border-solid transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-900"
            >
              <FaLinkedin
                role="presentation"
                title="LinkedIn/lionellebon"
                size="24"
              />
            </a>

            <a
              href="mailto:me [AT] lionellebon.eu"
              rel="noopener noreferrer"
              title="Contactez-moi"
              className="text-gray-700 w-11 h-11 rounded-full bg-gray-50 shadow hover:bg-[#dfdfdf] hover:border-gray-300 hover:border hover:border-solid transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-900"
            >
              <FaEnvelope
                role="presentation"
                title="Mail/Contactez-moi"
                size="24"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
