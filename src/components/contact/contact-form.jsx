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
    <div>
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
      </form>
    </div>
  );
}

export default ContactForm;
