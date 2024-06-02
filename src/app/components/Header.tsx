import * as React from 'react';

export const Header = (): React.ReactNode => {
  const [enlarged, setEnlarged] = React.useState<boolean>(false);

  const toggleEnlarged = () => {
    setEnlarged(!enlarged);
  };

  return (
    <>
      <h1 style={{ display: 'none' }}>Lionel Lebon</h1>
      <figure className="rounded-xl p-8 bg-transparent">
        <img
          id="lionellebon"
          src="/assets/img/lionellebon.webp"
          alt="Lionel Lebon"
          title="Lionel Lebon"
          width="512"
          height="512"
          className={`w-${enlarged ? '100' : '36'} h-${enlarged ? '100' : '36'} transition-transform transform-growth cursor-pointer rounded-full mx-auto hover:scale-125 duration-1000`}
          onClick={toggleEnlarged}
        />
        <div className="pt-6 text-center space-y-4">
          <figcaption className="font-medium">
            <div className="text-2xl text-slate-700">Lionel Lebon</div>
            <div>
              <a
                href="https://www.instagram.com/lebolnobel"
                title="instagram/lebolnobel"
                className="hover:underline text-violet-600"
              >
                @lebolnobel
              </a>
            </div>
          </figcaption>

          <blockquote>
            <p className="text-lg center ">
              📸 Photographe 🌿 Naturaliste 🐝 Sensibiliser au monde du vivant
            </p>
            <p className="text-lg center ">
              💻 Product Owner <span className="text-sm text-slate-500">@</span>{' '}
              Odoo
            </p>
          </blockquote>
        </div>
      </figure>
    </>
  );
};
