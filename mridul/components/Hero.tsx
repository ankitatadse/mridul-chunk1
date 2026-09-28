"use client";
import Link from "next/link";import {useEffect,useState} from "react";import {AnimatePresence,motion} from "framer-motion";
const slides=[
{h:"SIX YARDS OF BEAUTY.",d:"Premium Mul Cotton sarees designed to bring comfort, colour and effortless elegance to every occasion.",cta:"SHOP NEW ARRIVALS",href:"/shop",img:"/img/p2-1.svg"},
{h:"SOFT. LIGHT. BEAUTIFUL.",d:"Discover our 120-count Mul Cotton sarees in colours made to brighten your wardrobe.",cta:"SHOP MUL COTTON",href:"/collections/mul-cotton",img:"/img/p4-1.svg"},
{h:"DETAILS THAT MAKE THE DRAPE.",d:"From floral details and scalloped borders to statement tassels, discover sarees made to stand out beautifully.",cta:"EXPLORE THE COLLECTION",href:"/shop",img:"/img/p6-1.svg"}];
export default function Hero(){
 const [i,setI]=useState(0);
 useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const t=setInterval(()=>setI(x=>(x+1)%3),6500);return()=>clearInterval(t)},[]);
 const s=slides[i];
 return <section aria-roledescription="carousel" className="relative h-[80vh] min-h-[520px] overflow-hidden bg-line">
  <AnimatePresence mode="wait"><motion.div key={i} className="absolute inset-0" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}>
   {/* eslint-disable-next-line @next/next/no-img-element */}
   <img src={s.img} alt="" className="h-full w-full object-cover"/>
   <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"/>
   <div className="absolute bottom-10 left-5 max-w-xl text-cream md:bottom-16 md:left-12">
    <h1 className="font-serif text-5xl leading-none md:text-7xl">{s.h}</h1><p className="mt-4 max-w-md text-sm">{s.d}</p>
    <div className="mt-6 flex flex-wrap gap-3"><Link href={s.href} className="btn !bg-cream !text-ink">{s.cta}</Link>{i===0&&<Link href="/collections/mul-cotton" className="btn-o !border-cream text-cream">EXPLORE MUL COTTON</Link>}</div>
   </div></motion.div></AnimatePresence>
  <div className="absolute bottom-4 right-5 flex gap-2">{slides.map((_,k)=><button key={k} aria-label={`Slide ${k+1}`} aria-current={k===i} onClick={()=>setI(k)} className={`h-1 w-8 ${k===i?"bg-cream":"bg-cream/40"}`}/>)}</div>
 </section>}
