import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";

function CheckoutForm({ registerFunction }) {
  return (
    <div>
      <div className="flex justify-between gap-3">
        <div className="flex flex-col w-1/2 py-3">
          <label htmlFor="name">Nom *</label>
          <input
            {...registerFunction("name", {
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
            {...registerFunction("firstName", {
              required: "Ce champ est obligatoire",
            })}
            className="p-1 border border-slate-300"
            type="text"
            name="firstName"
          />
        </div>
      </div>
      <div className="flex flex-col py-3">
        <label htmlFor="country">Pays/Region *</label>
        <select
          name="country"
          id=""
          className="p-1 border border-slate-300"
          {...registerFunction("country", {
            required: "Ce champ est obligatoire",
          })}
        >
          <option value="Congo-Kinshasa">Congo-Kinshasa</option>
          <option value="Congo-Brazzaville">Congo-Brazzaville</option>
        </select>
      </div>

      <div className="flex flex-col py-3">
        <label htmlFor="adress">
          Adresse complète ( Numéro, Quartier, Commune ) *
        </label>
        <input
          {...registerFunction("adress", {
            required: "Ce champ est obligatoire",
          })}
          className="p-1 border border-slate-300"
          type="text"
          name="adress"
        />
      </div>

      <div className="flex flex-col py-3">
        <label htmlFor="adress-2">
          Bâtiment, Numéro d'appartement, etc. (facultatif)
        </label>
        <input
          {...registerFunction("adress2")}
          className="p-1 border border-slate-300"
          type="text"
          name="adress2"
        />
      </div>

      <div className="flex flex-col py-3">
        <label htmlFor="city">Ville</label>
        <input
          {...registerFunction("city", {
            required: "Ce champ est obligatoire",
          })}
          className="p-1 border border-slate-300"
          type="text"
          name="city"
        />
      </div>

      <div className="flex flex-col py-3">
        <label htmlFor="township">Province/Commune</label>
        <input
          {...registerFunction("township", {
            required: "Ce champ est obligatoire",
          })}
          className="p-1 border border-slate-300"
          type="text"
          name="township"
        />
      </div>

      <div className="flex flex-col py-3">
        <label htmlFor="phone">Telephone</label>
        <input
          {...registerFunction("phone", {
            required: "Ce champ est obligatoire",
            pattern: {
              value: /^[0-9]{10}$/i,
              message: "Ce champ n'est pas un numero de telephone valide",
            },
          })}
          className="p-1 border border-slate-300"
          type="text"
          name="phone"
        />
      </div>

      <div className="flex flex-col py-3">
        <label htmlFor="email">Mail</label>
        <input
          {...registerFunction("email", {
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
        <label htmlFor="notes">Note de commande (facultatif) </label>
        <textarea
          {...registerFunction("notes")}
          className="p-1 border border-slate-300"
          name="notes"
          id=""
          cols="30"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}

function CheckoutDetails({ registerFunction }) {
  return (
    <div className=" w-2/5">
      <div className="max-w-6xl m-auto p-7 mb-6 border-2 border-slate-300">
        <table className="w-full ">
          <thead className="w-full font-bold border-b border-slate-200">
            <tr colSpan={"2"} className="py-6 text-xl">
              <td colSpan={"2"} className="py-6 text-xl">
                Votre commande{" "}
              </td>
            </tr>
            <tr>
              <td>Produits</td>
              <td>Sous-Total</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200 ">
              <td className="w-40 py-6">Sous-Total</td>
              <td className=" py-6">$ 1000 </td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6">Expedition</td>
              <td className="py-6">Livraison Gratuite</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6">TOTAL</td>
              <td className="py-6">$ 1000 </td>
            </tr>
          </tbody>
          <tfoot>
            {/* <td colSpan={"2"}>
              { <Button className="font-semibold w-full p-6">COMMANDER</Button> }
            </td> */}
          </tfoot>
        </table>
        <p className="py-3">Paiement a la livraison </p>
        <div className="before:content-[''] before:w-5 before:h-5 before:block before:mx-5 before:my-1 before:border-l-[16px] before:border-l-transparent before:border-b-[16px] before:border-b-slate-200 before:border-r-[16px] before:border-r-transparent">
          <p className="bg-slate-200 p-3">
            Payer en argent comptant à la livraison.
          </p>
        </div>

        <div className="flex items-start py-6 gap-3">
          <input
            {...registerFunction("newsletter")}
            className="my-1 w-3 h-3"
            type="checkbox"
            name="newsletter"
            id="newsletter"
          />
          <p className="font-semibold">
            Je voudrais recevoir des e-mails exclusifs avec des réductions et
            des informations sur le produit
          </p>
        </div>
        <p>
          Vos données personnelles seront utilisées pour le traitement de votre
          commande, vous accompagner au cours de votre visite du site web, et
          pour d’autres raisons décrites dans notre politique de
          confidentialité.
        </p>
        <Button className="font-semibold w-full p-6 my-6">COMMANDER</Button>
      </div>
    </div>
  );
}

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    country: "",
    adress: "",
    adress2: "",
    city: "",
    township: "",
    phone: "",
    email: "",
    notes: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    console.log("data :", data);
  };
  return (
    <main className="bg-slate-100">
      <div className="max-w-6xl m-auto">
        <h1 className="text-4xl text-center font-bold py-12">
          Confirmation de la commande
        </h1>
        <div className="flex items-center gap-3 p-6 border-t-4 border-slate-600">
          <ion-icon name="person"></ion-icon>
          <p>Déjà client ?</p>{" "}
          <Link className="font-medium" to={"./"}>
            Cliquez ici pour vous connecter
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-between justify-center"
        >
          <div className="w-3/5 p-6">
            <h2 className="text-xl font-bold py-6">Details de facturation</h2>
            <CheckoutForm registerFunction={register}></CheckoutForm>
          </div>

          <CheckoutDetails registerFunction={register}></CheckoutDetails>
        </form>
      </div>
    </main>
  );
}

export default Checkout;
