import { Logo, Newsletter }from "../";
import {CatalogLinks, AboutLinks} from "./footer-links" ;
import WorkTime from "./work-time";


function Footer() {
  return (
    <section className="bg-slate-200 ">
      <footer className="max-w-7xl py-24 flex flex-wrap justify-between border border-t-slate-300 footer container gap-6">
        <Logo />
        {/* <ToTheBuyerLinks /> */}
        <AboutLinks />
        <CatalogLinks />
        <WorkTime />
        <Newsletter />
      </footer>
      <p className="container">© 2023 <a href="nawtech.net">nawtech</a>. All rights reserved.</p>
    </section>
  );
}

export default Footer ;

