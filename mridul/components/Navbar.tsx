"use client";
import Link from "next/link";import {useEffect,useState} from "react";import {Heart,Menu,ShoppingBag,X} from "lucide-react";
import {useStore} from "./Providers";import {config} from "@/lib/config";
const links=[["Shop","/shop"],["New arrivals","/shop"],["Mul Cotton","/collections/mul-cotton"],["Chikankari","/collections/chikankari"]];
export default function Navbar(){
 const [slim,setSlim]=useState(false);const [menu,setMenu]=useState(false);const {lines,wish,setOpen}=useStore();
 useEffect(()=>{const f=()=>setSlim(scrollY>40);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
 const n=lines.reduce((a,l)=>a+l.qty,0);
 return <header className="sticky top-0 z-40 bg-cream">
  <p className="bg-ink py-2 text-center text-[11px] tracking-widest text-cream">{config.announcement}</p>
  <nav aria-label="Main" className={`mx-auto flex max-w-[1440px] items-center justify-between border-b border-line px-5 transition-all duration-500 ${slim?"py-2":"py-5"}`}>
   <button className="md:hidden" aria-label="Open menu" onClick={()=>setMenu(true)}><Menu/></button>
   <ul className="hidden gap-8 text-xs tracking-widest md:flex">{links.map(([l,h])=><li key={l}><Link href={h} className="uppercase hover:opacity-60">{l}</Link></li>)}</ul>
   <Link href="/" className="font-serif text-3xl tracking-[.25em] md:absolute md:left-1/2 md:-translate-x-1/2">MRIDUL</Link>
   <div className="flex items-center gap-4"><Link href="/shop?saved=1" aria-label={`Wishlist, ${wish.length} saved`}><Heart size={20}/></Link>
    <button aria-label={`Bag, ${n} items`} onClick={()=>setOpen(true)} className="relative"><ShoppingBag size={20}/>{n>0&&<span className="absolute -right-2 -top-2 rounded-full bg-wine px-1.5 text-[10px] text-cream">{n}</span>}</button></div>
  </nav>
  {menu&&<div className="fixed inset-0 z-50 bg-cream p-6"><button aria-label="Close menu" onClick={()=>setMenu(false)}><X/></button>
   <ul className="mt-10 space-y-6 font-serif text-4xl">{links.map(([l,h])=><li key={l}><Link href={h} onClick={()=>setMenu(false)}>{l}</Link></li>)}</ul></div>}
 </header>}
