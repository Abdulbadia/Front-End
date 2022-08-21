
export interface IProduct {
    id?: number;
    name: string;
    image?:string;
    brand?:string;
    description: string;
    category: string;
    categoryId: number;
    brandName?: string;
    price: number;
    quantity: number;
    brandID: number;
    availability: boolean;
    discountPercentage: number;
}
