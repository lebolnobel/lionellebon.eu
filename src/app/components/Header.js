import * as React from "react";

export const Header = () => {
  return (
    <figure className="rounded-xl p-8 dark:bg-slate-800">
      <img
        className="w-36 h-36 rounded-full mx-auto"
        src="/assets/img/lionellebon.jpg"
        alt="Lionel Lebon"
        width="512"
        height="512"
      />
      <div className="pt-6 text-center space-y-4">
        <figcaption className="font-medium">
          <div className="text-2xl text-slate-700">Lionel Lebon</div>
          <div className="text-violet-600">
            <a
              href="https://www.instagram.com/lebolnobel"
              title="Instagram/@lebolnobel"
            >
              @lebolnobel
            </a>
          </div>
        </figcaption>

        <blockquote>
          <p className="text-lg center font-small">
            📸 Photographe 🌿 Naturaliste 🐝 Sensibiliser au monde du vivant
          </p>
        </blockquote>
      </div>
    </figure>
  );
};
