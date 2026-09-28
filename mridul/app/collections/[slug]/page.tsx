import {notFound} from "next/navigation";import ProductCard from "@/components/ProductCard";import {collections} from "@/data/collections";import {getByCategory} from "@/lib/products";
export const generateStaticParams=()=>collections.map(c=>({slug:c.slug}));
export default async function Col({params}:{params:{slug:string}}){
 const c=collections.find(x=>x.slug===params.slug);if(!c)notFound();const items=await getByCategory(c.slug);
 return <div className="mx-auto max-w-[1440px] px-5 py-12"><h1 className="font-serif text-5xl">{c.title}</h1><p className="mb-8 mt-2 max-w-xl text-mute">{c.blurb}</p><div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{items.map(p=><ProductCard key={p.id} p={p}/>)}</div></div>}
