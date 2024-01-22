"use strict";
// ? ### 👇 Yah Tarika hai TYPESCRPIT Mein Function mein data type define karne ka
const fun = (n, m) => {
    console.log(n, m);
    return n + m;
};
fun("1", "2"); //* 👈 Call this 👆 function
//? ----------------------------------------------------------------
/*
type FuncType2 = (n: number,m:number,l?:number) => number

//*  👇 Optional Parameters
const func2: FuncType2 = (n,m,l) => {

  if(typeof l === "undefined") return n * m

  return m * m * l;
}

func2(30,50);
*/
/*
type FuncType2 = (n: number, m: number, l?: number) => number;

//* 👇 Default Parameters
const func2: FuncType2 = (n, m, l = 20) => {
  return m * m * l;
};

func2(30, 50);
*/
/*
//* 👇 Rest Operator
type FuncType3 = (...m: number[]) => number[];
const func3: FuncType3 = (...m) => {
  return m;
};

func3(30, 50, 36, 70, 44, 77);
*/
/*
function rol(n: number): number {
  return 80;
}
*/
/*


// *  👇 Function with Object

//* 👇 Create Types
interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string; //* <-- readonly 👈 Ka Matlab Hai Isko change nahin kiya Ja Sakta sirf read Kiya ja sakta hai👇
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};

//*  👇 Create Object
const productOne: Product = {
  name: "Samsung s24 Ultra",
  stock: 100,
  price: 1000,
  photo: "https://i.ibb.co/z4z4z4z/1.jpg",
};

getData(productOne);
*/
//* Never Type
/*
const errorHandler = ()  => {
  throw new Error();
}
*/
