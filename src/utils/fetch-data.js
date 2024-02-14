const initialData = "src/data/products.json" 

async function fetchData() {
    try {
      const response = await fetch(initialData);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`) ;
      }
  
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error) ;
      throw error; 
    }
  }

export { fetchData } ; 