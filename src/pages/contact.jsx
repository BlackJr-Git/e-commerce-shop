import { PageBanner, ContactInfoCard, ContactForm } from "@/components";

function Contact() {
  return (
    <main className="">
      <div className="bg-slate-100">
        <PageBanner
          title={"Contact"}
          description={
            "Vous avez une préoccupation ? Nous sommes la pour vous aider."
          }
        />
      </div>
      <div className="flex flex-col md:flex-row py-24 items-center justify-center gap-6 bg-slate-50">
        <ContactInfoCard />
        <ContactInfoCard />
        <ContactInfoCard />
        <ContactInfoCard />
      </div>

      <div className="py-24 flex max-w-7xl m-auto flex-col md:flex-row">
        <ContactText />
        <ContactForm />
      </div>
    </main>
  );
}

export default Contact;

function ContactText() {
  return (
    <div className="md:w-1/2 mx-6">
      <p className="text-xl font-semibold py-6">Ne soyez pas timide !</p>
      <h3 className="text-4xl font-bold py-6">Vous nous parlez. Nous vous ecoutons.</h3>
      <p>
        Nous sommes toujours à votre disposition pour répondre à vos besoins et
        vous offrir un service de qualité. N’hésitez pas à nous contacter si
        vous avez des questions ou des demandes particulières.
      </p>
    </div>
  );
}
