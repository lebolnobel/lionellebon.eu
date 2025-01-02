import * as React from 'react';

import { Header } from './components/Header.tsx';
import { Title } from './components/Title.tsx';
import { Activity } from './components/Activity.tsx';
import { Footer } from './components/Footer.tsx';

const App = (): React.ReactNode => {
  return (
    <main className="text-base py-6 px-4 sm:p-6 md:py-10 md:px-8">
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
            <p className="mb-3">
              Retrouvez l'ensemble de mes activités courantes et passées ainsi
              que mes formations sur LinkedIn. N'hésitez pas à prendre contact
              avec moi pour discuter de vos projets !
            </p>

            <p className="text-sm italic">
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
        tag="Activité"
        title="Photographe"
        content={
          <p>
            Chaque instant mérite d’être immortalisé et je ne cesse d’être à
            l’affût de ces moments : un regard ou un sourire qui raconte une
            histoire. Je profite également de mon œil pour sensibiliser la
            nature à mon entourage, à travers mes posts Instagram ou mes stories
            (<em>à la une</em>). Je fais également de nombreux reportages sur le
            terrain ou pour des événements.
          </p>
        }
        link="https://www.instagram.com/lebolnobel"
      />

      <Activity
        tag="Nature"
        title="Naturaliste/Candidat Guide-Nature"
        content={
          <>
            <p className="mb-3">
              La crise sanitaire liée au COVID m'a permis de développer
              davantage ma passion pour la nature et le regard qu'on porte sur
              elle. Depuis lors, je suis bénévole actif chez Natagora, et tout
              particulièrement auprès du Pôle Plecotus (Chauves-souris) et du
              Pôle Raînne (batraciens).
            </p>

            <p className="mb-3">
              A partir de 2025, je serai officiellement{' '}
              <a
                href="https://cercles-naturalistes.be/guide-nature/"
                title="CNB.be"
                className="underline text-violet-600"
                rel="noopener noreferrer"
              >
                Candidat Guide-Nature
              </a>
              , une formation organisée par les Cercles des Naturalistes de
              Belgique.
            </p>

            <p className="text-sm italic">
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
        link="https://www.natagora.be"
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
