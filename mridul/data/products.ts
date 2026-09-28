import type {Product} from "@/types/product";
const MC="120-count Mul Cotton";
const mk=(n:number,slug:string,name:string,o:Partial<Product>):Product=>({id:"p"+n,slug,name,price:null,currency:"INR",fabric:MC,images:[`/img/p${(n-1)%8+1}-1.svg`,`/img/p${(n-1)%8+1}-2.svg`],availabilityStatus:"price_on_request",...o});
const soft="A beautiful 120-count Mul Cotton saree, light and comfortable for everyday and special occasions.";
const floral="A 120-count Mul Cotton saree featuring delicate floral detailing and a scalloped border, finished with contrasting tassels.";
const chik="A Mul Cotton saree featuring machine-embroidered Chikankari detailing and statement tassels.";
export const products:Product[]=[
mk(1,"soft-mul-cotton-saree-rose","Soft Mul Cotton Saree",{price:1799,availabilityStatus:"in_stock",category:"mul-cotton",colours:["Rose"],description:soft,newArrival:true,featured:true}),
mk(2,"soft-mul-cotton-saree-sage","Soft Mul Cotton Saree",{price:1799,availabilityStatus:"in_stock",category:"mul-cotton",colours:["Sage"],description:soft,newArrival:true}),
mk(3,"soft-mul-cotton-saree-ivory","Soft Mul Cotton Saree",{price:1799,availabilityStatus:"in_stock",category:"mul-cotton",colours:["Ivory"],description:soft,featured:true}),
mk(4,"floral-mul-cotton-saree-blue","Floral Mul Cotton Saree",{category:"mul-cotton",colours:["Powder Blue"],description:floral,work:"Floral embroidery",newArrival:true}),
mk(5,"floral-mul-cotton-saree-mustard","Floral Mul Cotton Saree",{category:"mul-cotton",colours:["Mustard"],description:floral,work:"Floral embroidery"}),
mk(6,"scallop-border-mul-cotton-saree-lilac","Scallop Border Mul Cotton Saree",{category:"mul-cotton",colours:["Lilac"],description:floral,work:"Scalloped border",newArrival:true}),
mk(7,"scallop-border-mul-cotton-saree-peach","Scallop Border Mul Cotton Saree",{category:"mul-cotton",colours:["Peach"],description:floral,work:"Scalloped border"}),
mk(8,"mul-cotton-chikankari-saree-white","Mul Cotton Chikankari Saree",{price:1950,availabilityStatus:"in_stock",category:"chikankari",colours:["White"],description:chik,work:"Machine-embroidered Chikankari",newArrival:true,featured:true}),
mk(9,"mul-cotton-chikankari-saree-pink","Mul Cotton Chikankari Saree",{category:"chikankari",colours:["Pink"],description:chik,work:"Machine-embroidered Chikankari"}),
mk(10,"mul-cotton-chikankari-saree-sky","Mul Cotton Chikankari Saree",{category:"chikankari",colours:["Sky Blue"],description:chik,work:"Machine-embroidered Chikankari"}),
mk(11,"mul-cotton-chikankari-saree-mint","Mul Cotton Chikankari Saree",{category:"chikankari",colours:["Mint"],description:chik,work:"Machine-embroidered Chikankari"}),
mk(12,"soft-mul-cotton-saree-sand","Soft Mul Cotton Saree",{category:"mul-cotton",colours:["Sand"],description:soft}),
];
