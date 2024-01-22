//? ### Classes
/*
class Player {
  private height;
  public weight;
  constructor(height: number, weight: number, protected power: number) {
    this.height = height;
    this.weight = weight;
  }
  myHeight = () => {
    return this.height;
  };
}
const abhi = new Player(500, 150, 787);
console.log(abhi.myHeight());

*/

interface ProductType {
    name: string;
    price: number;
    stock: number;
    offer?: boolean;
  }
  
  interface GiveId {
    getId: () => string;
  }
                          //* 👇 Multiple type ad 
  class Product implements ProductType, GiveId {
    private id: string = String(Math.random() * 1000);
    constructor(
      public name: string,
      public price: number,
      public stock: number
    ) {}
    getId = () => this.id;
  }
  
  const product1 = new Product("Macbook", 2000, 20);