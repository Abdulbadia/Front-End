
export interface IProduct {
    productId?: number;
    productName: string;
    price: number;
    image: string
    description: string;
    categoryId: number;
    categoryName: string;
    brandId: number;
    brandName: string;
    availability: boolean;
    discountPercentage: number;
    quantity: number;
}
