import * as React from 'react';

import { Header } from './components/Header.tsx';
import { Title } from './components/Title.tsx';
import { Activity } from './components/Activity.tsx';
import { Footer } from './components/Footer.tsx';

const App = (): React.ReactNode => {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <Header />

      <Title>
        Mon{' '}
        <span className="underline underline-offset-3 decoration-8 decoration-violet-600">
          espace
        </span>
      </Title>

      <Activity
        tag="Carrière"
        title={<div className="leading-none tracking-tight">LinkedIn</div>}
        content={
          <>
            <p>
              Retrouvez l'ensemble de mes activités courantes et passées ainsi
              que mes formations sur LinkedIn. N'hésitez pas à prendre contact
              avec moi pour discuter de vos projets !
            </p>

            <p className="text-sm italic pt-3">
              Vous pouvez également jeter un œil à mon{' '}
              <a
                href="https://github.com/lebolnobel"
                title="github/lebolnobel"
                className="underline text-violet-600"
                rel="noopener noreferrer"
              >
                Github
              </a>{' '}
              !
            </p>
          </>
        }
        link="https://www.linkedin.com/in/lionellebon/"
      />

      <Activity
        tag="Nature"
        title="Photographe"
        content={
          <>
            <p>
              La crise sanitaire liée au COVID m'a permis de développer
              davantage mes passions pour la nature et le regard qu'on porte sur
              elle. J'essaie de la sublimer et de sensibiliser un maximum de
              personnes. Je fais également de nombreux reportages sur le terrain
              ou pour des événements. Jetez un œil à mes posts et mes stories à
              la une sur Instagram.
            </p>

            <p className="text-sm italic pt-3">
              Pour voir mes dernières observations, allez sur{' '}
              <a
                href="https://observations.be/users/306204/"
                title="observations.be/lebolnobel"
                className="underline text-violet-600"
                rel="noopener noreferrer"
              >
                Observations.be
              </a>
              .
            </p>
          </>
        }
        link="https://www.instagram.com/lebolnobel"
      />

      <Activity
        tag="Nature"
        title="Naturaliste/Candidat Guide-Nature"
        content={
          <p>
            A partir de 2025, je serai officiellement Candidat Guide-Nature, une
            formation organisée par les Cercles des Naturalistes de Belgique.
          </p>
        }
        link="https://cercles-naturalistes.be/guide-nature/"
      />

      <Title>
        Mes derniers{' '}
        <span className="underline underline-offset-3 decoration-8 decoration-violet-600">
          projets
        </span>
      </Title>

      <Activity
        description={
          <p>
            2024,{' '}
            <a
              href="https://github.com/lebolnobel/plecotus-quiz"
              title="github/lebolnobel"
              className="underline text-violet-600"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        }
        tag="Nature"
        title="Plecotus"
        content={
          <p>
            Dans le cadre de la formation de Plecotus proposée par Natagora,
            j'ai réalisé un quiz permettant aux bénévoles de revoir ou d'étudier
            les critères d'identifications des Chauves-souris, pendant
            l'hibernation hivernale. Un outil développé à partir du "Mémo pour
            la détermination des chauves-souris en hiver".
          </p>
        }
        link="https://plecotus.netlify.app/"
      />

      <Activity
        description={
          <p>
            2025,{' '}
            <a
              href="https://github.com/lebolnobel/rainne-obs"
              title="github/lebolnobel"
              className="underline text-violet-600"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        }
        tag="Nature"
        title="Raînne"
        content={
          <p>
            Chaque année, à partir du mois de février, les batraciens sortent de
            leur torpeur hivernale pour rejoindre les sites d'accouplement.
            Selon les endroits, ce sont plusieurs centaines, voire plusieurs
            milliers, d'individus qui traversent ainsi les routes en direction
            des mares, des lacs et des étangs. Ces migrations massives ne
            rendent pas le comptage facile. Cet outil a pour but de simplifier
            le comptage et l'encodage sur la plateforme Observations.be.
          </p>
        }
        link="https://rainne.netlify.app/"
      />

      <Footer />
    </main>
  );
};

export default App;
