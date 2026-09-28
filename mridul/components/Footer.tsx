import Link from "next/link";import {config} from "@/lib/config";
export default function Footer(){return <footer className="mt-24 border-t border-line px-5 py-16">
 <div className="mx-auto max-w-[1440px]"><p className="font-serif text-[18vw] leading-none tracking-[.1em] md:text-[12vw]">MRIDUL</p><p className="mt-2 text-xs tracking-widest">SAREES MADE TO BE YOURS.</p>
 <div className="mt-12 grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
  <div><h3 className="mb-3 text-xs tracking-widest">SHOP</h3><ul className="space-y-2 text-mute"><li><Link href="/shop">Shop all</Link></li><li><Link href="/collections/mul-cotton">Mul Cotton</Link></li><li><Link href="/collections/chikankari">Chikankari</Link></li></ul></div>
  <div><h3 className="mb-3 text-xs tracking-widest">FOLLOW</h3><ul className="space-y-2 text-mute"><li><a href={config.instagram} target="_blank" rel="noopener">Instagram @mridul_by_mr</a></li></ul></div>
 </div></div></footer>}
