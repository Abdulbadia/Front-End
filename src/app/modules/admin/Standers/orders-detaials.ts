import { IProduct } from "./iproduct";
import { Orders } from "./orders";

export class OrdersDetaials {
    orderId: number;
    productId: number;
    quantity: number;
    price: number;
    product: IProduct;
    order: Orders;
}
