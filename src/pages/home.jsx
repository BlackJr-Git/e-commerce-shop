import { useState } from 'react';
import { HeroBanner ,Products, Services, SideCart, WhyUs } from '../components'; 
import { productsData } from '@/data';

function Home() {
  const [ displayCart, setDisplayCart ] = useState(false)
  
  function toggleCart() {
    setDisplayCart(true)
  }

  function removeCart() {
    setDisplayCart(false)
  }

  return (
    <main className='relative'>
      <HeroBanner />
      <Services />
      <Products title={'Nos Produits '} productData={productsData} />
      <WhyUs />
      {displayCart 
        ? <SideCart handleClick={removeCart} className={"ease-in duration-500  h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"} /> 
        : <SideCart handleClick={removeCart} className={"ease-in duration-500 translate-x-full  h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"}/> 
      }
    </main>
  )
}

export default Home ;

