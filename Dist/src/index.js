"use strict";
//? ### 👇 Yah Tarika hai TYPESCRPIT Mein data define karne ka
let a = "Somad";
let b;
let nambo = "hello world";
let surname; //* <-- Ismein sirf Yahi 2 string & number data type assign Kiya Ja sakta hai
surname = "Amir";
let custom = "Custom data type Created";
console.log(a);
console.log(nambo);
const fun = (n, m) => {
    console.log(n, m);
    return n + m;
};
fun("1", "2"); //* 👈 Call this 👆 function
// ? ### 👇 Yah Tarika hai TYPESCRPIT Mein Array mein data type define karne ka
//* 👇 Yeh Hai pahla Tarika Array data type define karne ka
const arr = [10, 55, 88];
const arr2 = ["a", "b", "c"];
const arr3 = ["a", "b", "c", 89, 1099];
//* 👇 Yeh Hai Dusra Tarika Array data type define karne ka
const arr4 = [10, 55, 88];
const arr5 = ["a", "b", "c"];
//* 👇 Yeh Hai Tuple Array create karne ka syntax
const tupleArr = [10, 55, 88]; //* <-- yah Array mein 3 data Se Jyada Nahin Dala Ja Sakta hai
const obj = {
    gender: true,
    height: 180,
    weight: 70,
};
const obj2 = {
    height: 180,
    weight: 70,
};
const grig = {
    height: 180,
    weight: 70,
    scolar: true,
    func(n, m) {
        console.log(n * m);
    },
};
const Kendal = {
    height: 180,
    weight: 70,
    scolar: true,
    func(n, m) {
        console.log(n * m);
    },
};
Kendal.func(5, 20); //* <-- Call Object Function
