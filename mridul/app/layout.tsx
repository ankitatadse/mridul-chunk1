import type {Metadata} from "next";import {Cormorant_Garamond,Inter} from "next/font/google";import "./globals.css";
import Providers from "@/components/Providers";import Navbar from "@/components/Navbar";import Footer from "@/components/Footer";import CartDrawer from "@/components/CartDrawer";
const serif=Cormorant_Garamond({subsets:["latin"],weight:["400","500","600"],variable:"--font-serif"});
const sans=Inter({subsets:["latin"],variable:"--font-sans"});
import {config} from "@/lib/config";
export const metadata:Metadata={metadataBase:new URL(config.siteUrl),title:"MRIDUL | Mul Cotton & Chikankari Sarees",description:"Discover MRIDUL's collection of 120-count Mul Cotton sarees, floral details, scalloped borders, tassels and Chikankari-work sarees in beautiful colours.",openGraph:{title:"MRIDUL | Mul Cotton & Chikankari Sarees",type:"website"}};
export default function Root({children}:{children:React.ReactNode}){return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body><Providers><Navbar/><main>{children}</main><Footer/><CartDrawer/></Providers></body></html>}
