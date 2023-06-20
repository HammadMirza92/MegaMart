export interface ProductModel{
    id:string,
    name:string,
    description:string,
    shirtDescription:string,
    image:string,
    price?:DoubleRange,
    quantity?:number,
    stock?:number,
    productType:ProductType,
    categoryId:number,
    category:any,
    variations:any
}

export enum ProductType{
    simple = 0,
    variation =1
}