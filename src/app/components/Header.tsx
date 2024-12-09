import * as React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Header = (): React.ReactNode => {
  return (
    <div className="text-center space-y-4">
      <h1 style={{ display: 'none' }}>Lionel Lebon</h1>

      <figure className="rounded-xl m-8 bg-transparent">
        <img
          id="lionellebon"
          src="/assets/img/lionellebon.webp"
          alt="Lionel Lebon"
          title="Lionel Lebon"
          width="512"
          height="512"
          className={`w-36 h-36 transition-transform transform-growth rounded-full mx-auto hover:scale-125 duration-1000`}
        />
        <figcaption className="font-medium pt-6">
          <div className="text-md italic text-slate-500 mt-6">
            👋 Bonjour, je suis
          </div>
          <div className="text-4xl font-extrabold text-slate-900">
            Lionel Lebon
          </div>
          <div>
            <a
              href="https://www.instagram.com/lebolnobel"
              title="instagram/lebolnobel"
              className="hover:underline text-violet-600"
              rel="noopener noreferrer"
            >
              @lebolnobel
            </a>
          </div>
        </figcaption>
      </figure>

      <div className="text-slate-600">
        <p className="text-lg center ">
          📸 Photographe 🌿 Naturaliste 🐝 Sensibiliser au monde du vivant
        </p>
        <p className="text-lg center ">
          💻 Product Owner <span className="text-sm text-slate-500">@</span>{' '}
          Odoo
        </p>
      </div>

      <div className="pt-6 flex justify-center gap-6">
        <a
          href="https://instagram.com/lebolnobel"
          rel="noopener noreferrer"
          title="instagram/lebolnobel"
          className="text-zinc-400 hover:text-violet-600 transition-colors duration-200"
        >
          <FaInstagram title="Instagram" size="24" />
        </a>

        <a
          href="https://github.com/lebolnobel"
          rel="noopener noreferrer"
          title="github/lebolnobel"
          className="text-zinc-400 hover:text-violet-600 transition-colors duration-200"
        >
          <FaGithub title="GitHub" size="24" />
        </a>

        <a
          href="https://www.linkedin.com/in/lionellebon"
          rel="noopener noreferrer"
          title="LinkedIn/lionellebon"
          className="text-zinc-400 hover:text-violet-600 transition-colors duration-200"
        >
          <FaLinkedin title="LinkedIn" size="24" />
        </a>

        <a
          href="mailto:me [AT] lionellebon.eu"
          rel="noopener noreferrer"
          title="Contactez-moi"
          className="text-zinc-400 hover:text-violet-600 transition-colors duration-200"
        >
          <FaEnvelope title="Mail" size="24" />
        </a>
      </div>
    </div>
  );
};
