import * as React from 'react';

export const Footer = (): React.ReactNode => {
  return (
    <div className="pt-12 text-center text-xs text-gray-900">
      <p>
        Fait avec 🤍 par{' '}
        <a
          href="mailto:me [AT] lionellebon.eu"
          title="Contactez-moi!"
          className="hover:underline text-violet-600"
        >
          Lionel Lebon
        </a>
      </p>
      <p>Réalisé avec des technologies libres</p>
    </div>
  );
};
