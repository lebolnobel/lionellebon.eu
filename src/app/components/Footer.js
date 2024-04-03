import * as React from "react";

export const Footer = () => {
  return (
    <div className="pt-6 text-center text-sm text-gray-300">
      Fait avec ❤ par{" "}
      <a
        href="mailto:me [AT] lionellebon.eu"
        title="Contactez-moi!"
        className="hover:underline text-violet-600"
      >
        Lionel Lebon
      </a>
      <br />
      Réalisé avec des technologies libres
    </div>
  );
};
