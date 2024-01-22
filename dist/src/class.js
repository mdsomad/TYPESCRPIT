"use strict";
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
//* 👇 Multiple type ad 
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const product1 = new Product("Macbook", 2000, 20);
