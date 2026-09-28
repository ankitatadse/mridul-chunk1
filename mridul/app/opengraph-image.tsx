import {ImageResponse} from "next/og";
export const size={width:1200,height:630};export const contentType="image/png";export const alt="MRIDUL | Mul Cotton & Chikankari Sarees";
export default function OG(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#F7F4EF",color:"#171717"}}><div style={{fontSize:140,letterSpacing:30}}>MRIDUL</div><div style={{fontSize:32,letterSpacing:8,marginTop:20,color:"#706D68"}}>MUL COTTON &amp; CHIKANKARI SAREES</div></div>,size)}
