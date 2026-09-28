"use client";
import {useState} from "react";import PurchaseActions,{PriceLine} from "./PurchaseActions";import ProductAccordion from "./ProductAccordion";import WishlistButton from "./WishlistButton";import {whatsappLink} from "@/lib/config";import type {Product} from "@/types/product";
export default function ProductInfo({p}:{p:Product}){
 const [c,setC]=useState(p.colours?.[0]);
 const rows:[string,string|undefined][]=[["Colour",c],["Saree length",p.sareeLength],["Blouse",p.blouseLength]];
 return <div className="space-y-6 pb-16 md:pb-0"><div className="flex justify-between"><h1 className="font-serif text-4xl uppercase">{p.name}</h1><WishlistButton slug={p.slug}/></div>
  <p className="text-xl"><PriceLine p={p}/></p>
  {p.colours&&p.colours.length>0&&<div><p className="mb-2 text-xs tracking-widest">SELECT COLOUR</p><div className="flex flex-wrap gap-2">{p.colours.map(x=><button key={x} aria-pressed={c===x} onClick={()=>setC(x)} className={`border px-3 py-1 text-sm ${c===x?"border-ink":"border-line"}`}>{x}</button>)}</div></div>}
  <PurchaseActions p={p} colour={c}/>
  {p.availabilityStatus!=="coming_soon"&&<div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream p-3 md:hidden"><PurchaseActions p={p} colour={c} compact/></div>}
  <dl className="divide-y divide-line border-y border-line text-sm">{rows.filter(([,v])=>v).map(([k,v])=><div key={k} className="flex justify-between py-3"><dt className="text-mute">{k}</dt><dd>{v}</dd></div>)}</dl>
  <ProductAccordion p={{...p,description:p.description}}/>
  <a href={whatsappLink(`Hi MRIDUL, I have a question about the ${p.name}.`)} target="_blank" rel="noopener" className="block text-xs tracking-widest underline">NOT SURE ABOUT THE COLOUR OR FABRIC? CHAT WITH US ON WHATSAPP →</a></div>}
