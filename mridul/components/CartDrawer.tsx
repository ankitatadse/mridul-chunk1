"use client";
import Link from "next/link";import {AnimatePresence,motion} from "framer-motion";import {X} from "lucide-react";
import {useStore} from "./Providers";import {products} from "@/data/products";import {formatPrice} from "@/lib/format";
export default function CartDrawer(){
 const {open,setOpen,lines,remove,setQty}=useStore();
 const rows=lines.flatMap(l=>{const p=products.find(x=>x.slug===l.slug);return p&&p.price!=null?[{...l,p,price:p.price}]:[]});
 const sub=rows.reduce((a,r)=>a+r.price*r.qty,0);
 return <AnimatePresence>{open&&<>
  <motion.div className="fixed inset-0 z-50 bg-ink/40" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}/>
  <motion.aside role="dialog" aria-label="Shopping bag" className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-cream sm:w-[420px]" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.5,ease:[.22,1,.36,1]}}>
   <div className="flex items-center justify-between border-b border-line p-5"><h2 className="font-serif text-2xl">Your bag</h2><button aria-label="Close bag" onClick={()=>setOpen(false)}><X/></button></div>
   {rows.length===0?<div className="m-auto p-8 text-center"><h3 className="font-serif text-3xl">YOUR BAG IS WAITING.</h3><p className="my-4 text-mute">Discover a saree you&apos;ll want to wear again and again.</p><Link href="/shop" onClick={()=>setOpen(false)} className="btn">Shop the collection</Link></div>:<>
   <ul className="flex-1 space-y-5 overflow-auto p-5">{rows.map(r=><li key={r.slug} className="flex gap-4">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={r.p.images[0]} alt={r.p.name} className="h-28 w-20 object-cover"/>
    <div className="flex-1 text-sm"><p>{r.p.name}</p>{r.colour&&<p className="text-mute">{r.colour}</p>}<p>{formatPrice(r.price)}</p>
     <div className="mt-2 flex items-center gap-3"><button aria-label="Decrease" onClick={()=>setQty(r.slug,r.qty-1)}>−</button><span>{r.qty}</span><button aria-label="Increase" onClick={()=>setQty(r.slug,r.qty+1)}>+</button>
     <button className="ml-auto text-xs underline" onClick={()=>remove(r.slug)}>Remove</button></div></div></li>)}</ul>
   <div className="space-y-3 border-t border-line p-5"><div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(sub)}</span></div>
    <button className="btn w-full" onClick={()=>alert("Connect Shopify checkout here.")}>Checkout</button>
    <button className="btn-o w-full" onClick={()=>setOpen(false)}>Continue shopping</button></div></>}
  </motion.aside></>}</AnimatePresence>}
