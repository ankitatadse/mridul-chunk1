"use client";
import {createContext,useContext,useEffect,useState,ReactNode} from "react";
type Line={slug:string;colour?:string;qty:number};
type Ctx={lines:Line[];add:(s:string,c?:string)=>void;remove:(s:string)=>void;setQty:(s:string,q:number)=>void;open:boolean;setOpen:(b:boolean)=>void;wish:string[];toggleWish:(s:string)=>void};
const C=createContext<Ctx>(null!);
export const useStore=()=>useContext(C);
function usePersist<T>(k:string,init:T){const [v,s]=useState<T>(init);const [ok,setOk]=useState(false);
 useEffect(()=>{try{const r=localStorage.getItem(k);if(r)s(JSON.parse(r))}catch{}setOk(true)},[k]);
 useEffect(()=>{if(ok)try{localStorage.setItem(k,JSON.stringify(v))}catch{}},[k,v,ok]);return [v,s] as const}
export default function Providers({children}:{children:ReactNode}){
 const [lines,setLines]=usePersist<Line[]>("mridul-cart",[]);const [wish,setWish]=usePersist<string[]>("mridul-wish",[]);const [open,setOpen]=useState(false);
 const add=(slug:string,colour?:string)=>{setLines(l=>l.some(x=>x.slug===slug)?l.map(x=>x.slug===slug?{...x,qty:x.qty+1}:x):[...l,{slug,colour,qty:1}]);setOpen(true)};
 const remove=(s:string)=>setLines(l=>l.filter(x=>x.slug!==s));
 const setQty=(s:string,q:number)=>q<1?remove(s):setLines(l=>l.map(x=>x.slug===s?{...x,qty:q}:x));
 const toggleWish=(s:string)=>setWish(w=>w.includes(s)?w.filter(x=>x!==s):[...w,s]);
 return <C.Provider value={{lines,add,remove,setQty,open,setOpen,wish,toggleWish}}>{children}</C.Provider>}
