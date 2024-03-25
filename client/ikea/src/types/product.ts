
export interface Product {
    name: string,
    description: string,
    imgUrl?: string,
    imgUrlView?: string,
    series: string,
    price: number,
    priceComments?: string,
    category: string,
    subCategory: string,
    isNew: boolean,
    itemNumber:string
}