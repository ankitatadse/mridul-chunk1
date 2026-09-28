"use client";
import Link from "next/link";import {useStore} from "./Providers";import {whatsappLink} from "@/lib/config";import type {Product} from "@/types/product";
export default function PurchaseActions({p,colour,compact}:{p:Product;colour?:string;compact?:boolean}){
 const {add,setOpen}=useStore();const s=p.availabilityStatus;
 if(s==="in_stock"&&p.price!=null)return <div className={compact?"":"flex flex-col gap-3 sm:flex-row"}>
  <button className="btn w-full" onClick={()=>add(p.slug,colour)}>Add to bag</button>
  {!compact&&<button className="btn-o w-full" onClick={()=>{add(p.slug,colour);}}>Buy now</button>}</div>;
 if(s==="price_on_request")return <a className="btn w-full text-center" href={whatsappLink(`Hi MRIDUL, I'd like to enquire about the ${p.name}${colour?` in ${colour}`:""}.`)} target="_blank" rel="noopener">Enquire on WhatsApp</a>;
 if(s==="out_of_stock")return <button className="btn w-full" disabled>Sold out</button>;
 return <Link className="btn-o w-full text-center" href={`/product/${p.slug}`}>View details</Link>}
export function PriceLine({p}:{p:Product}){
 if(p.availabilityStatus==="coming_soon")return <span className="text-xs tracking-widest">COMING SOON</span>;
 if(p.price==null||p.availabilityStatus==="price_on_request")return <span className="text-xs tracking-widest">PRICE ON REQUEST</span>;
 return <span>{"₹"+p.price.toLocaleString("en-IN")}</span>}
