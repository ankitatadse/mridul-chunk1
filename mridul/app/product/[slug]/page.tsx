import {notFound} from "next/navigation";import type {Metadata} from "next";import ProductInfo from "@/components/ProductInfo";import {getProduct,getProducts} from "@/lib/products";
export const generateStaticParams=async()=>(await getProducts()).map(p=>({slug:p.slug}));
export async function generateMetadata({params}:{params:{slug:string}}):Promise<Metadata>{const p=await getProduct(params.slug);return {title:p?`${p.name} | MRIDUL`:"MRIDUL",description:p?.description}}
export default async function Page({params}:{params:{slug:string}}){
 const p=await getProduct(params.slug);if(!p)notFound();
 const ld={"@context":"https://schema.org","@type":"Product",name:p.name,description:p.description,image:p.images,...(p.price!=null&&{offers:{"@type":"Offer",priceCurrency:"INR",price:p.price,availability:p.availabilityStatus==="in_stock"?"https://schema.org/InStock":"https://schema.org/OutOfStock"}})};
 return <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 md:grid-cols-2">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
  <div className="flex snap-x gap-3 overflow-x-auto md:grid md:overflow-visible">{p.images.map((s,i)=>/* eslint-disable-next-line @next/next/no-img-element */<img key={s} src={s} alt={`${p.name} view ${i+1}`} className="aspect-[3/4] w-full shrink-0 snap-center object-cover"/>)}</div>
  <div className="md:sticky md:top-32 md:self-start"><ProductInfo p={p}/></div></div>}
