export type Category = 'MUG' | 'SHIRT' | 'CAP';
export type Discount = '2_FOR_1_PROMO' | '5%_BULK_DISCOUNT' | null;

export interface Product {
  blurHash: string;
  category: Category;
  code: string;
  description: string;
  discount: Discount;
  id: string;
  name: string;
  picture: string;
  price: number;
}

export class Product {
  constructor({ blurHash, code, description, id, name, picture, price }: Product) {
    this.blurHash = blurHash;
    this.code = code;
    this.description = description;
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.price = price;
  }
}
