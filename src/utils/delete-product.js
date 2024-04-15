// mailjet

import axios from "axios";

// let postUrl = "https://twitter-api-6zi0.onrender.com/api/tweets/add";

async function deleteData(postUrl) {
  try {
    const response = await axios.delete(postUrl);
    alert("le produit a été supprimer avec succes");
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
    alert("Une erreur s'est produite lors de la suppression des données");
  }
}

export default deleteData;
