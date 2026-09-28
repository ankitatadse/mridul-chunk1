import Link from "next/link";import WishlistButton from "./WishlistButton";import PurchaseActions,{PriceLine} from "./PurchaseActions";import type {Product} from "@/types/product";
export default function ProductCard({p}:{p:Product}){
 const sold=p.availabilityStatus==="out_of_stock";
 return <article className="group">
  <div className="relative aspect-[3/4] overflow-hidden bg-line">
   <Link href={`/product/${p.slug}`} aria-label={p.name}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={p.images[0]} alt={`${p.name}${p.colours?.[0]?` in ${p.colours[0]}`:""}`} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"/>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {p.images[1]&&<img src={p.images[1]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"/>}</Link>
   <WishlistButton slug={p.slug} className="absolute right-3 top-3 bg-cream/80 p-2"/>
   {p.newArrival&&<span className="absolute left-3 top-3 bg-cream px-2 py-1 text-[10px] tracking-widest">NEW</span>}
   {p.bestseller&&<span className="absolute left-3 top-3 bg-cream px-2 py-1 text-[10px] tracking-widest">BESTSELLER</span>}
   {sold&&<span className="absolute bottom-3 left-3 bg-ink px-2 py-1 text-[10px] tracking-widest text-cream">SOLD OUT</span>}
  </div>
  <div className="mt-3 text-sm"><Link href={`/product/${p.slug}`} className="block">{p.name}</Link>
   {p.fabric&&<p className="text-mute">{p.fabric}</p>}<p className="mt-1"><PriceLine p={p}/></p></div>
  {p.availabilityStatus!=="coming_soon"&&<div className="mt-3"><PurchaseActions p={p} colour={p.colours?.[0]} compact/></div>}
 </article>}
