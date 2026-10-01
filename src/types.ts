export interface Address {
    id?: string;
    label?: string;
    address: string;
    city: string;
    state?: string;
    zip?: string;
    isDefault?: boolean;
    lat?: number;
    lng?: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role?: string;
    addresses?: Address[];
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

