export interface IProduct{
    id: number;
    name: string;
    price: string;
    createdAt: Date;
    updatedAt: Date;
}

// Método de criação
export type TCreateProductData = Pick<IProduct, "name" | "price">;
// Método de atualização
export type TUpdateProductData = Pick<IProduct, "name" | "price">;

export interface IProductService{
    createProduct(data: TCreateProductData): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | undefined;
    updateProduct(id: number, data: TUpdateProductData): IProduct | string;
    deleteProduct(id: number): {} | string;
}