import ShopGrid from "@/components/ShopGrid";import {getProducts} from "@/lib/products";
export default async function Shop(){return <div className="mx-auto max-w-[1440px] px-5 py-12"><h1 className="font-serif text-5xl">THE MRIDUL COLLECTION</h1><p className="mb-8 mt-2 text-mute">Find the saree that feels like you.</p><ShopGrid products={await getProducts()}/></div>}
