export interface Product {
  blurHash: string;
  code: string;
  description: string;
  id: number;
  name: string;
  picture: string;
  price: number;
  thumbnail: string;
  thumbnailBlurHash: string;
}

export class Product {
  constructor({ blurHash, code, description, id, name, picture, price, thumbnail, thumbnailBlurHash }: Product) {
    this.blurHash = blurHash;
    this.code = code;
    this.description = description;
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.price = price;
    this.thumbnail = thumbnail;
    this.thumbnailBlurHash = thumbnailBlurHash;
  }
}
