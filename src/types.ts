export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role?: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    unit?: string;
    description?: string;
    category?: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
