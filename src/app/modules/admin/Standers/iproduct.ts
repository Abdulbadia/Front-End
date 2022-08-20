
export interface IProduct {
    id?: number;
    name: string;
    image: string;
    description: string;
    category: string;
    categoryId: number;
    brand: string;
    price: number;
    quantity: number;
    brandID: number;
    availability: boolean;
    discountPercentage: number;
    imageSrc?:string;
    imageName?:string;
    imageFile?:string;
}
