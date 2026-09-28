export const config={
 announcement:"NEW COLLECTIONS ARE HERE · DISCOVER MRIDUL",
 instagram:"https://instagram.com/mridul_by_mr",
 whatsappNumber:"", // set brand WhatsApp number (digits with country code)
 siteUrl:"https://mridul.example",
};
export const whatsappLink=(text:string)=>`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(text)}`;
// Only fill these once the brand confirms real policies; empty = section hidden.
export const policies={shipping:"",returns:"",care:""};
export const newsletterEndpoint=""; // e.g. Brevo/Shopify form URL
