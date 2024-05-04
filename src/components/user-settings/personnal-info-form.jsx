import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useStore } from "@/appStore";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function PersonnalInfoForm({ closeForm }) {
  const { toast } = useToast();
  const { currentUser, updateUser } = useStore();

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URI}/api/users/update/${currentUser.id}`,
        data,
        {
          withCredentials: true,
        }
      );
      toast({
        title: "Vos informations on été enregistrée avec succes",
      });
      // reset();
      console.log(response.data);
      updateUser(response.data);
      sessionStorage.setItem("currentUser", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title:
          "Erreur lors de la modification de vos information ! Veuillez reesayez",
        description: error.response.data,
      });
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  return (
    <form
      className=" flex flex-col gap-6 bg-slate-50 p-12 rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("name", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="ex : Doe"
        className={`w-96 h-12 bg-slate-100 ${
          errors.name ? "border-red-500" : ""
        }`}
        defaultValue={currentUser.name}
      />
      <Input
        {...register("firstName", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="ex : John"
        className={`w-96 h-12 bg-slate-100 ${
          errors.firstName ? "border-red-500" : ""
        }`}
        defaultValue={currentUser.firstName}
      />
      <Input
        {...register("phone", {
          required: "Ce champ est obligatoire",
          pattern: {
            value: /^[0-9]{10}$/i,
            message: "Ce champ n'est pas un numero de telephone valide",
          },
        })}
        type="text"
        placeholder="ex : 085*******"
        className={`w-96 h-12 bg-slate-100 ${
          errors.phone ? "border-red-500" : ""
        }`}
        defaultValue={currentUser.phone}
      />
      <Input
        {...register("email", {
          required: "Ce champ est obligatoire",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Ce champ n'est pas un email valide",
          },
        })}
        type="text"
        placeholder="ex : exemple@mail.com"
        className={`w-96 h-12 bg-slate-100 ${
          errors.email ? "border-red-500" : ""
        }`}
        defaultValue={currentUser.email}
      />
      <div className="flex gap-3 w-full">
        <Button variant={"outline"} type="button" onClick={closeForm}>
          Annuler
        </Button>
        <Button className="w-[80%]">Modifier</Button>
      </div>
    </form>
  );
}

export default PersonnalInfoForm;
