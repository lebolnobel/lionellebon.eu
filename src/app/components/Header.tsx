import * as React from 'react';

export const Header = (): React.ReactNode => {
  return (
    <figure className="rounded-xl p-8 bg-transparent">
      <img
        id="lionellebon"
        className="w-36 h-36 rounded-full mx-auto hover:scale-125 transition-all duration-1000"
        src="/assets/img/lionellebon.webp"
        alt="Lionel Lebon"
        width="512"
        height="512"
        onClick={() => {
          const image = document.getElementById('lionellebon');
          if (image?.classList.contains('h-36')) {
            image?.classList.remove('h-36', 'w-36');
            image?.classList.add('h-250', 'w-250');
          } else {
            image?.classList.add('h-36', 'w-36');
            image?.classList.remove('h-250', 'w-250');
          }
          image?.classList.toggle('hover:scale-100');
        }}
      />
      <div className="pt-6 text-center space-y-4">
        <figcaption className="font-medium">
          <div className="text-2xl text-slate-700">Lionel Lebon</div>
          <div>
            <a
              href="https://www.instagram.com/lebolnobel"
              title="Instagram/@lebolnobel"
              className="hover:underline text-violet-600"
            >
              @lebolnobel
            </a>
          </div>
        </figcaption>

        <blockquote>
          <p className="text-lg center font-small">
            📸 Photographe 🌿 Naturaliste 🐝 Sensibiliser au monde du vivant
          </p>
          <p className="text-lg center font-small">
            ⌨️ Software engineer 💻 Your future product owner?
          </p>
        </blockquote>
      </div>
    </figure>
  );
};
