import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

function ContactForm() {
  const sendMessageURI = `${import.meta.env.VITE_API_URI}/api/messages/send`;
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(sendMessageURI, data);
      toast({
        title: "Message envoyé avec succes",
      });
    } catch (error) {
      // console.error("Une erreur s'est produite:", error);
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoie du message",
        description: error.response.data,
      });
    }
    reset();
  };

  return (
    <div className="md:w-1/2 px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-3">
          <div className="flex flex-col w-1/2 py-3">
            <label htmlFor="name">Nom *</label>
            <Input
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
            <Input
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
          <label htmlFor="mail">Mail</label>
          <Input
            {...register("mail", {
              required: "Ce champ est obligatoire",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Ce champ n'est pas un email valide",
              },
            })}
            className="p-1 border border-slate-300"
            type="email"
            name="mail"
          />
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="object">Objet *</label>
          <select
            name="object"
            id=""
            className="p-2 border border-slate-300"
            {...register("object", {
              required: "Ce champ est obligatoire",
            })}
          >
            <option value="Plainte">Plainte</option>
            <option value="Demande de devis">Demande de devis</option>
          </select>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="message">Message </label>
          <textarea
            {...register("message")}
            className="p-1 border border-slate-300"
            // name="message"
            // id="message"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div>
          <Button>Envoyer</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
