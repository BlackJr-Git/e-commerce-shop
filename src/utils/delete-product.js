import axios from "axios";

async function deleteData(postUrl) {
  try {
    const response = await axios.delete(postUrl, {
      withCredentials: true,
    });
    alert("le produit a été supprimer avec succes");
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
    alert("Une erreur s'est produite lors de la suppression des données");
  }
}

export default deleteData;
