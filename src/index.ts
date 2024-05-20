import { IProduct, IProductService, TCreateProductData, TUpdateProductData } from "./interfaces";

export class ProductList implements IProductService{
    private id: number = 1;
    private productL: IProduct[] = [];

    createProduct(data: TCreateProductData): IProduct {
        const now = new Date();

        const nProduct: IProduct = {
            ...data,
            id: this.id,
            createdAt: now,
            updatedAt: now
        }
        
        this.productL.push(nProduct);
        this.id++;

        return nProduct;
    }

    getProducts(): IProduct[] {
        return this.productL;
    }

    getOneProduct(id: number): IProduct | undefined {
        const currentProduct = this.productL.find((product) => product.id === id);

        if (currentProduct){
            return currentProduct;
        } else {
            return undefined;
        }
    }

    updateProduct(id: number, data: TUpdateProductData): IProduct | string {
        const currentProduct = this.productL.find((product) => product.id === id);

        if (currentProduct){
            const index = this.productL.findIndex((product) => product.id === id);

            const now = new Date();

            const updateProd: IProduct = {...currentProduct, ...data, updatedAt: now }

            this.productL.splice(index, 1, updateProd)

            return updateProd;

        } else {
            return "Produto não encontrado.";
        }
    }

    deleteProduct(id: number): {} | string {
        const currentProduct = this.productL.find((product) => product.id === id);

        if (currentProduct){
            const index = this.productL.findIndex((product) => product.id === id);

            this.productL.splice(index, 1)

            return { message: "Product successfully deleted."};

        } else {
            return "Produto não encontrado.";
        }
    }
}

export const productList = new ProductList();

// Manual tests
// console.log("--CRIANDO produto 1--");
// console.log(productList.createProduct({ name: "produto 1", price: "2000 R$" }));
// console.log("--CRIANDO produto 2--");
// console.log(productList.createProduct({ name: "produto 2", price: "5000 R$" }));
// console.log("--LEITURA--");
// console.log(productList.getProducts());
// console.log("--LEITURA produto 1--");
// console.log(productList.getOneProduct(1));
// console.log("--ATUALIZAR produto 1--");
// console.log(productList.updateProduct(1, {name: "produto 1.1", price: "1800 R$" }));
// console.log("--EXCLUIR produto 2--");
// console.log(productList.deleteProduct(2));
// console.log("--ATUALIZAÇÃO NÃO REALIZADA");
// console.log(productList.updateProduct(123, {name: "produto 1.1",    price: "" }));
// console.log("--EXCLUSSÃO NÃO REALIZADA");
// console.log(productList.deleteProduct(123));
