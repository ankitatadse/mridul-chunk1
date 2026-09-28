"use client";
import {useState} from "react";import {newsletterEndpoint} from "@/lib/config";
export default function Newsletter(){
 const [done,setDone]=useState(false);const [err,setErr]=useState("");
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const email=String(new FormData(e.currentTarget).get("email")||"");setErr("");
  try{if(newsletterEndpoint){const r=await fetch(newsletterEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email})});if(!r.ok)throw 0}
   setDone(true)}catch{setErr("Something went wrong. Please try again.")}}
 return <section className="mx-auto mt-20 max-w-xl px-5 text-center"><h2 className="font-serif text-4xl md:text-5xl">A LITTLE BEAUTY, IN YOUR INBOX.</h2>
  <p className="mt-3 text-mute">Be the first to discover new collections, restocks and stories from MRIDUL.</p>
  {done?<p role="status" className="mt-6">Thank you. You&apos;re on the list.</p>:
  <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row"><label htmlFor="nl" className="sr-only">Your email address</label>
   <input id="nl" name="email" type="email" required placeholder="YOUR EMAIL ADDRESS" className="flex-1 border border-line bg-transparent px-4 py-3 text-xs tracking-widest"/>
   <button className="btn">SUBSCRIBE</button></form>}
  {err&&<p role="alert" className="mt-2 text-sm text-wine">{err}</p>}</section>}
