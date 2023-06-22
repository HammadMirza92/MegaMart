export interface IProduct{
    id:string,
    productName:string,
    description:string,
    shortDescription:string,
    image:string,
    productType:ProductType,
    featured:boolean,
    onSale:boolean,
    sku?:string,
    price?:DoubleRange,
    salePrice?:number,
    quantity?:number,
    stock?:number,
    stockStatus?:StockStatus,
    categoryId:number,
    category:any,
    variations?:any
}

export enum ProductType{
    simple = 0,
    variation =1
}


export enum StockStatus{
    inStock = 0,
    outOfStock =1
}