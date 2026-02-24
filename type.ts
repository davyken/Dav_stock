import { Product as PrismaProduct } from "@prisma/client"
import { Transaction as PrismaTransaction } from "@prisma/client"

export interface Product extends PrismaProduct {
    categoryName: string;
}

export interface FormDataType {
    id?: string;
    name: string;
    description: string;
    price: number;
    quantity?: number;
    categoryId?: string;
    unit?: string;
    categoryName?: string;
    imageUrl?: string;
}

export interface OrderItem {
    productId: string;
    quantity: number;
    unit: string;
    imageUrl: string;
    name: string;
    availableQuantity: number;
};

export interface Transaction extends PrismaTransaction {
    categoryName: string;
    productName: string;
    imageUrl?: string;
    price: number;
    unit: string;
}

export interface ProductOverviewStats {
    totalProducts: number;
    totalCategories: number;
    totalTransactions: number;
    stockValue: number;
}

export interface ChartData {
    name: string;
    value: number;
}

export interface StockSummary {
    inStockCount: number;
    lowStockCount: number;
    outOfStockCount: number;
    criticalProducts: Product[];
  }