import * as React from 'react';
import { GoHeart } from 'react-icons/go';

export const Footer = (): React.ReactNode => {
  return (
    <footer className="mt-4 pb-8 px-4 md:px-8 text-center text-sm text-gray-900">
      <p>
        Fait avec <GoHeart role="presentation" className="inline-flex mb-0.5" />{' '}
        par{' '}
        <a
          href="https://www.instagram.com/lebolnobel"
          rel="noopener noreferrer"
          title="instagram/lebolnobel"
        >
          Lionel Lebon
        </a>
      </p>
      <p>
        Réalisé avec des technologies libres,
        <br />
        au service du vivant.
      </p>
    </footer>
  );
};
