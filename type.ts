import { StaticImageData } from "next/image";

type Price = Partial<Record<"H" | "F" | "S" | "M" | "L" | "XL", number>>;


export type DummyProducts = {
    _id: string;
    title: string;
    images: (string | StaticImageData)[];
    price: Price;
    description: string;
    category: string;
    type: string;
    sizes: string[];
    date: number;
    popular: boolean;
    inStock: boolean;
}

export type Blogs = {
    title: string;
    category: string;
    image: string | StaticImageData;
    description: string;
}