import { Product } from "../types/product";

export const dummyProducts: Product[] = [
    {
        id: "1",
        name: "Unique T-Shirt",
        description: "A bold statement t-shirt that stands out.",
        price: 1000,
        imageUrl: "/products/black tee.png",
        category: "clothing",
        stock: 100,
        slug: "unique-t-shirt"
    },
    {
        id: "2",
        name: "Stylish Hoodie",
        description: "A stylish hoodie for everyday wear.",
        price: 1250,
        imageUrl: "/products/bluelongsleeve.png",
        category: "clothing",
        stock: 50,
        slug: "stylish-hoodie"
    },
    {
        id: "3",
        name: "Trendy Jeans",
        description: "Comfortable and trendy jeans for all occasions.",
        price: 1500,
        imageUrl: "/products/blackjeans.png",
        category: "clothing",
        stock: 75,
        slug: "trendy-jeans"
    },
    {
        id: "4",
        name: "Pants",
        description: "Classic sneakers that never go out of style.",
        price: 1500,
        imageUrl: "/products/longsleeve.png",
        category: "footwear",
        stock: 120,
        slug: "classic-sneakers"
    },
    {
        id: "5",
        name: "Pants",
        description: "Classic sneakers that never go out of style.",
        price: 1500,
        imageUrl: "/products/pants.png",
        category: "footwear",
        stock: 120,
        slug: "classic-sneakers"
    }
]