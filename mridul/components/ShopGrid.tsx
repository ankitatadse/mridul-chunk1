"use client";
import {useState} from "react";import ProductCard from "./ProductCard";import type {Product} from "@/types/product";
export default function ShopGrid({products}:{products:Product[]}){
 const [cat,setCat]=useState("");const [col,setCol]=useState("");const [sort,setSort]=useState("new");
 const cats=[...new Set(products.map(p=>p.category).filter(Boolean))] as string[];
 const cols=[...new Set(products.flatMap(p=>p.colours??[]))];
 const list=products.filter(p=>(!cat||p.category===cat)&&(!col||p.colours?.includes(col))).sort((a,b)=>sort==="lh"?(a.price??1e9)-(b.price??1e9):sort==="hl"?(b.price??-1)-(a.price??-1):Number(!!b.newArrival)-Number(!!a.newArrival));
 const [sheet,setSheet]=useState(false);const sel="border border-line bg-transparent px-3 py-2 text-sm";
 const controls=<>
  <select aria-label="Collection" className={sel} value={cat} onChange={e=>setCat(e.target.value)}><option value="">Collection</option>{cats.map(c=><option key={c}>{c}</option>)}</select>
  <select aria-label="Colour" className={sel} value={col} onChange={e=>setCol(e.target.value)}><option value="">Colour</option>{cols.map(c=><option key={c}>{c}</option>)}</select>
  <select aria-label="Sort" className={`${sel} ml-auto`} value={sort} onChange={e=>setSort(e.target.value)}><option value="new">Newest</option><option value="lh">Price: Low to High</option><option value="hl">Price: High to Low</option></select></>;
 return <><div className="mb-8 hidden flex-wrap gap-3 md:flex">{controls}</div>
  <button className="btn-o mb-6 w-full md:hidden" onClick={()=>setSheet(true)}>Filter &amp; sort</button>
  {sheet&&<div className="fixed inset-0 z-50 md:hidden"><div className="absolute inset-0 bg-ink/40" onClick={()=>setSheet(false)}/><div role="dialog" aria-label="Filter and sort" className="absolute inset-x-0 bottom-0 flex max-h-[80%] flex-col gap-3 bg-cream p-5 [&_select]:w-full"><p className="font-serif text-2xl">Filter &amp; sort</p>{controls}<button className="btn" onClick={()=>setSheet(false)}>Show {list.length} sarees</button></div></div>}
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{list.map(p=><ProductCard key={p.id} p={p}/>)}</div></>}
