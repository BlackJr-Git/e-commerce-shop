import { useForm } from "react-hook-form";



function ContactForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data :", data);
  };
  return (
    <div className="w-1/2 px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-3">
          <div className="flex flex-col w-1/2 py-3">
            <label htmlFor="name">Nom *</label>
            <input
              {...register("name", {
                required: "Ce champ est obligatoire",
              })}
              className="p-1 border border-slate-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col w-1/2 py-3">
            <label htmlFor="firstName">Prenom *</label>
            <input
              {...register("firstName", {
                required: "Ce champ est obligatoire",
              })}
              className="p-1 border border-slate-300"
              type="text"
              name="firstName"
            />
          </div>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="email">Mail</label>
          <input
            {...register("email", {
              required: "Ce champ est obligatoire",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Ce champ n'est pas un email valide",
              },
            })}
            className="p-1 border border-slate-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="country">Objet *</label>
          <select
            name="country"
            id=""
            className="p-2 border border-slate-300"
            {...register("country", {
              required: "Ce champ est obligatoire",
            })}
          >
            <option value="Congo-Kinshasa">Plainte</option>
            <option value="Congo-Brazzaville">Demande de devis</option>
          </select>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="notes">Message </label>
          <textarea
            {...register("notes")}
            className="p-1 border border-slate-300"
            name="notes"
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
