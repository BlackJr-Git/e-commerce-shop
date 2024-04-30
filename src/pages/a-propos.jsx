/* eslint-disable react/prop-types */
import { NawtechTeam } from "@/assets";
import { PageBanner, OurTeam, FollowUs, AnimatedPages } from "@/components";

function APropos() {
  return (
    <AnimatedPages>
      <main className="pt-24">
        <PageBanner title={"A Propos"} />
        <AboutSection />
        <OurTeam />
        <FollowUs />
      </main>
    </AnimatedPages>
  );
}

export default APropos;

function AboutSection({ flexType, id, bgColor }) {
  return (
    <section className={`${bgColor} py-24`} id={id}>
      <div
        className={` ${flexType} max-w-7xl m-auto flex md:flex-row flex-col-reverse items-center justify-center`}
      >
        <div className="md:w-1/2 p-6 ">
          <h2 className="md:text-4xl text-3xl font-bold py-6 text-center md:text-left">
            {" "}
            Qui sommes nous ?
          </h2>
          <p className="py-6">
            Nawtech est une entreprise congolaise de services numériques
            souhaitant apporter une nouvelle manière de faire plus
            professionnels et dynamique dans le monde de l’informatique en RDC.
            Nous mettons à votre dispositions les meilleurs développeurs et les
            meilleurs techniciens pour vos besoins dans les soucis de vous
            satisfaire pleinement.
          </p>
        </div>
        <div className="md:w-1/2 rounded-2xl mx-3">
          <img
            className="drop-shadow-2xl rounded-3xl"
            src={NawtechTeam}
            alt="illustration devellopement web"
          />
        </div>
      </div>
    </section>
  );
}
