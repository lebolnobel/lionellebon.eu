import "../styles/styles.css";

import * as React from "react";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Activity } from "./components/Activity";
import { Footer } from "./components/Footer";

const Main = () => {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <h1 style={{ display: "none" }}>Lionel Lebon</h1>
      <Header />

      <Title />

      <Activity
        tag="Développement"
        title={
          <div className="leading-none tracking-tight">
            LinkedIn{" "}
            <span class="text-sm underline underline-offset-3 decoration-6 decoration-sky-400">
              En recherche d'emploi
            </span>
          </div>
        }
        content={
          <>
            <p>
              Retrouvez l'ensemble de mes activités courantes et passées ainsi
              que mes formations sur LinkedIn. N'hésitez pas à prendre contact
              avec moi pour discuter de vos projets !
            </p>

            <p>
              Vous pouvez également jeter un œil à mon{" "}
              <a
                href="https://github.com/lebolnobel"
                title="Github/lebolnobel"
                className="hover:underline text-violet-600"
              >
                Github
              </a>{" "}
              !
            </p>
          </>
        }
        link="https://www.linkedin.com/in/lionellebon/"
      />

      <Activity
        tag="Nature"
        title="Photographe/Naturaliste"
        content={
          <p>
            La crise sanitaire liée au COVID m'a permis de développer davantage
            mes passions pour la nature et le regard qu'on porte sur elle.
            J'essaie de la sublimer et de sensibiliser un maximum de personnes.
            Jetez un œil à mes posts et mes stories à la une sur Instagram.
          </p>
        }
        link="https://www.instagram.com/lebolnobel"
      />

      <Footer />
    </main>
  );
};

export default Main;
