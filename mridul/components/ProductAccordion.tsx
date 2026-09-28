import {policies} from "@/lib/config";import type {Product} from "@/types/product";
export default function ProductAccordion({p}:{p:Product}){
 const items:[string,string|undefined][]=[["Description",p.description],
  ["Fabric & details",[p.fabric,p.work].filter(Boolean).join(" · ")||undefined],
  ["Shipping",policies.shipping],["Returns",policies.returns],["Care",p.care||policies.care]];
 return <div className="border-t border-line">{items.filter(([,v])=>v).map(([t,v])=><details key={t} className="group border-b border-line py-4" open={t==="Description"}>
  <summary className="flex cursor-pointer list-none justify-between text-xs tracking-widest">{t.toUpperCase()}<span className="group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm text-mute">{v}</p></details>)}</div>}
