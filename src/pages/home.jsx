import { HeroBanner ,Products, Services, SideCart, WhyUs } from '../components'; 
import { productsData } from '@/data';


function Home() {
  return (
    <main className='relative'>
      <HeroBanner />
      <Services />
      <Products title={'Nos Produits '} productData={productsData}/>
      <WhyUs />
      <SideCart />
    </main>
  )
}

export default Home ;
