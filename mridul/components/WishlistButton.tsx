"use client";
import {Heart} from "lucide-react";import {motion} from "framer-motion";import {useStore} from "./Providers";
export default function WishlistButton({slug,className=""}:{slug:string;className?:string}){
 const {wish,toggleWish}=useStore();const on=wish.includes(slug);
 return <button aria-pressed={on} aria-label={on?"Remove from wishlist":"Save to wishlist"} onClick={e=>{e.preventDefault();toggleWish(slug)}} className={className}>
 <motion.span key={String(on)} initial={{scale:.85}} animate={{scale:1}} transition={{duration:.3}} className="block"><Heart size={18} fill={on?"#6B2D3A":"none"} stroke={on?"#6B2D3A":"currentColor"}/></motion.span></button>}
