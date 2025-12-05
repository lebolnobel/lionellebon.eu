import * as React from 'react';

import { Header } from './components/Header.tsx';
import { Title } from './components/Title.tsx';
import { Activity } from './components/Activity.tsx';
import { Footer } from './components/Footer.tsx';

const App = (): React.ReactNode => {
  return (
    <>
      <Header />

      <main className="text-lg py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <Title>A propos</Title>

        <div className="text-gray-800 pt-6">
          <div className="container max-w-4xl px-10 pt-10 pb-8 mx-auto bg-gray-50 border-gray-100 rounded-2xl shadow-sm">
            <p className="mb-3">Explorer, observer, transmettre.</p>
            <p className="mb-3">
              Passionné par la biodiversité, j’explore les milieux naturels,
              documente les espèces, conçois des outils pédagogiques et
              contribue à des projets mettant en valeur le vivant.
            </p>
            <p>
              Basé en Wallonie, en Belgique. Actif au sein de Natagora
              (Plecotus, Raînne).
            </p>
          </div>
        </div>

        <Title>
          Mon{' '}
          <span className="underline underline-offset-3 decoration-8 decoration-green-900">
            espace
          </span>
        </Title>

        <Activity
          tag="Carrière"
          title="LinkedIn"
          content={
            <>
              <p className="mb-3">
                Retrouvez l'ensemble de mes activités courantes et passées ainsi
                que mes formations sur LinkedIn. N'hésitez pas à prendre contact
                avec moi pour discuter de vos projets !
              </p>

              <p className="text-base italic">
                Vous pouvez également jeter un œil à mon{' '}
                <a
                  href="https://github.com/lebolnobel"
                  title="github/lebolnobel"
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
              nature à mon entourage, à travers mes posts Instagram ou mes
              stories (<em>à la une</em>). Je fais également de nombreux
              reportages sur le terrain ou pour des événements, mariage ou
              photos de couple/famille.
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
                  rel="noopener noreferrer"
                >
                  Candidat Guide-Nature
                </a>
                , une formation organisée par les Cercles des Naturalistes de
                Belgique.
              </p>

              <p className="text-base italic">
                Pour voir mes dernières observations, allez sur{' '}
                <a
                  href="https://observations.be/users/306204/"
                  title="observations.be/lebolnobel"
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
          <span className="underline underline-offset-3 decoration-8 decoration-green-900">
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
              j'ai réalisé un quiz permettant aux bénévoles de revoir ou
              d'étudier les critères d'identifications des Chauves-souris,
              pendant l'hibernation hivernale. Un outil développé à partir du
              "Mémo pour la détermination des chauves-souris en hiver".
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
              Chaque année, à partir du mois de février, les batraciens sortent
              de leur torpeur hivernale pour rejoindre les sites d'accouplement.
              Selon les endroits, ce sont plusieurs centaines, voire plusieurs
              milliers, d'individus qui traversent ainsi les routes en direction
              des mares, des lacs et des étangs. Ces migrations massives ne
              rendent pas le comptage facile. Cet outil a pour but de simplifier
              le comptage et l'encodage sur la plateforme Observations.be.
            </p>
          }
          link="https://rainne.netlify.app/"
        />
      </main>

      <Footer />
    </>
  );
};

export default App;
