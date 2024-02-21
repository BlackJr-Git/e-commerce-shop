/* eslint-disable react/prop-types */




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


export default CheckoutForm ;