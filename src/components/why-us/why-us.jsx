
function WhysUs() {
  return (
    <section className="bg-slate-100 my-24 ">
      <div className="max-w-7xl m-auto flex justify-center items-center">
        <div className="p-6 flex flex-col items-center gap-14">
            <h3 className="text-4xl font-bold">Pourquoi nous et pas d'autres?</h3>
            <p>"Un bon service client coute moins cher qu'un mauvais service client."</p>
        </div>
        <div className="relative">
            <img className="rounded-xl" src="src/assets/images/hand-trust-nawtech.jpg" alt="" />
        </div>
        <div className="p-6 flex flex-col items-center gap-14">
            <div>
                <h4 className="text-2xl font-bold">Expertise</h4>
                <p>Nous mettons a votre disposition les meilleurs expert nationaux et internationaux sur vos projets.</p>
            </div>
            <div>
                <h4 className="text-2xl font-bold">Fiabilité</h4>
                <p>Nous faisons un suivis de nos travaux pour garantir une meilleurs expériences</p>
            </div>
            <div>
                <h4 className="text-2xl font-bold">Gestion du temps</h4>
                <p>Votre temps est précieux et nous le savons, nos équipes garantisse un services éclaire.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhysUs ; 
