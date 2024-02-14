import { HeroBanner ,Products, Services, WhyUs } from '../components'; 
import { productsData } from '@/data';


function Home() {
  return (
    <main>
      <HeroBanner />
      <Services />
      <Products title={'Nos Produits '} productData={productsData}/>
      <WhyUs />
    </main>
  )
}

export default Home ;
