import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { UploadImage } from "..";

function AddProductForm({ registerFunction, setImageUrl, imageUrl }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div>
        <label htmlFor="Images">Images</label>
        <div className="flex gap-3">
          {/* <label htmlFor="Images">Images</label> */}
          <UploadImage setImageUrl={setImageUrl} />
          <img className="w-40 rounded-xl" src={imageUrl} alt="" />
        </div>
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          className="bg-slate-100"
          {...registerFunction("name", {
            required: "donner un nom a votre produit",
            maxLength: 180,
            minLenght: 1,
          })}
        />
      </div>

      <div className="flex items-center justify-left gap-3 w-full">
        <div>
          <label className="" type="text" htmlFor="price">
            Price
          </label>
          <Input
            className="bg-slate-100 w-full W-1/2"
            {...registerFunction("price", {
              required: "le prix de votre produit ne peut pas etre vide",
              maxLength: 180,
              minLenght: 1,
              pattern: {
                value: /^\d*\.?\d+$/,
                message: "Ce champ n'est pas un prix valide",
              },
            })}
          />
        </div>

        <div>
          <label type="text" htmlFor="discountPrice">
            discount price
          </label>
          <Input
            className="bg-slate-100 w-full"
            {...registerFunction("discountPrice", {
              maxLength: 180,
              minLenght: 1,
              pattern: {
                value: /^\d*$/,
                message: "Ce champ n'est pas un prix valide",
              },
            })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <Input
          type="text-area"
          className="bg-slate-100"
          {...registerFunction("description", {
            required: "donner une description a votre produit",
            maxLength: 180,
            minLenght: 1,
          })}
        />
      </div>

      <div>
        <label htmlFor="Categories">Category</label>
        <Input
          type="text"
          className="bg-slate-100"
          {...registerFunction("Categories", {
            required: "donner une categorie a votre produit",
            maxLength: 180,
            minLenght: 1,
          })}
        />
      </div>

      <div className="flex gap-3">
        <div>
          <label htmlFor="weigth">weight</label>
          <Input
            type="text"
            className="bg-slate-100"
            {...registerFunction("weigth", {
              maxLength: 180,
              minLenght: 1,
              pattern: {
                value: /^\d*$/,
                message: "Ce champ n'est pas un nombre valide",
              },
            })}
          />
        </div>

        <div>
          <label htmlFor="height">height</label>
          <Input
            type="text"
            className="bg-slate-100"
            {...registerFunction("height", {
              maxLength: 180,
              minLenght: 1,
              pattern: {
                value: /^\d*$/,
                message: "Ce champ n'est pas un nombre valide",
              },
            })}
          />
        </div>

        <div>
          <label htmlFor="width">width</label>
          <Input
            type="text"
            className="bg-slate-100"
            {...registerFunction("width", {
              maxLength: 180,
              minLenght: 1,
              pattern: {
                value: /^\d*$/,
                message: "Ce champ n'est pas un nombre valide",
              },
            })}
          />
        </div>

        <div>
          <label htmlFor="length">lenght</label>
          <Input
            type="text"
            className="bg-slate-100"
            {...registerFunction("length", {
              maxLength: 180,
              minLenght: 1,
              pattern: {
                value: /^\d*$/,
                message: "Ce champ n'est pas un nombre valide",
              },
            })}
          />
        </div>
      </div>

      <div className="flex gap-3 my-3">
        <div className="flex items-center justify-center">
          <Checkbox {...registerFunction("isVisible")} />
          <label className="px-3" htmlFor="visibility">
            visibility
          </label>
        </div>

        <div className="flex items-center justify-center">
          <Checkbox {...registerFunction("isHighlighted")} />
          <label className="px-3" htmlFor="highlights">
            highlight
          </label>
        </div>
      </div>
      {/* <Button type={"submit"}>Mettre a jour</Button>  */}
    </div>
  );
}

export default AddProductForm;
