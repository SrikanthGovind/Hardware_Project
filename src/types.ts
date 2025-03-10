export interface Product {
    quantity?: number;
    isAdded?:boolean | undefined;
    id?: number; 
    name?:string; 
    category?: string; 
    description?:string
    specifications?: {
      [key:string]: string | undefined
    }
    price?: number; 
    brand?: string; 
    ratings?: number;
    availability?: string;
    filters?: string[]; 
    dimensions?: {
      width?: string; 
      height?: string; 
      length?: string; 
    };
    color?:string
    image?: string; 
    key?:string
    values?:string[] | undefined
  }

export interface ProductState {
    items: Product[];
    openOverlay: boolean;   
    overlayItem:Product,
    selectedProduct:number,
    searchedProducts: Product[],
    checkedItems:Product[],
    wishlistItems:Product[]
  }
  export interface CartState {
    items: Product[];
    totalQuantity:number;
    quantitystate:boolean;
  }
  
  export interface RootState {
    product: ProductState;
    cart:CartState
  }

  
  