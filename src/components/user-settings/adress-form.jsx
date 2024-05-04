import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useStore } from "@/appStore";

function AdressForm({ closeForm }) {
  const { toast } = useToast();
  const { currentUser, updateUser } = useStore();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URI}/api/users/update/${currentUser.id}`,
        data,
        {
          withCredentials: true,
        }
      );
      updateUser(response.data);
      sessionStorage.setItem("currentUser", JSON.stringify(response.data));
      toast({
        title: "Vos informations on été enregistrée avec succes",
      });
      // reset();
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

  return (
    <form
      className=" flex flex-col gap-6 bg-slate-50 p-12 rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <select
        {...register("country", { required: "Ce champ est obligatoire" })}
        className="p-1 border w-96 h-12 bg-slate-100 rounded-md text-base"
      >
        <option value="Congo-Kinshasa">Congo-Kinshasa</option>
        <option value="Congo-Brazzaville">Congo-Brazzaville</option>
      </select>
      <Input
        {...register("city", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="ex : Kinshasa"
        className={`w-96 h-12 bg-slate-100 ${
          errors.city ? "border-red-500" : ""
        }`}
        defaultValue={currentUser?.city}
      />
      <Input
        {...register("township", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="ex : Ngaliema"
        className={`w-96 h-12 bg-slate-100 ${
          errors.township ? "border-red-500" : ""
        }`}
        defaultValue={currentUser?.township}
      />
      <Input
        {...register("address", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="ex : 6, Av Lumumba Q/Jolie vent"
        className={`w-96 h-12 bg-slate-100 ${
          errors.address ? "border-red-500" : ""
        }`}
        defaultValue={currentUser?.address}
      />
      <Input
        {...register("address2")}
        type="text"
        placeholder="ex : ref - rond point socimat"
        className="w-96 h-12 bg-slate-100"
        defaultValue={currentUser?.address2}
      />

      <div className="flex gap-3 w-full">
        <Button type="button" variant={"outline"} onClick={closeForm}>
          Annuler
        </Button>
        <Button className="w-[80%]">Modifier</Button>
      </div>
    </form>
  );
}

export default AdressForm;
