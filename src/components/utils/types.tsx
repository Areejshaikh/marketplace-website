import { StaticImageData } from 'next/image'
export type Product = {
    _id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string[] | string | StaticImageData | undefined | any,
    slug:{
        _type:"slug";
        current: "string";
          
    } ,
    category: string,
    discountPercent: number,
    new: boolean,
    colors: string[],
    sizes: string[],
    quantity:number,
    rating:number
}
export type cart = {
    _id: string,
    name: string,
    price: number,
    description: string,
    image: string[] | string | StaticImageData | undefined | any,
    category: string,
    discountPercent: number,
    new: boolean,
    colors: string[] ,
    sizes: string[] ,
    quantity:number,
    slug: string,
    uuid: string | undefined |number,
    rating:number

}

