import ProductCard from "./ProductCard";import type {Product} from "@/types/product";
export default function ProductCarousel({items}:{items:Product[]}){return <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4">{items.map(p=><div key={p.id} className="w-[60%] shrink-0 snap-start md:w-[24%]"><ProductCard p={p}/></div>)}</div>}
