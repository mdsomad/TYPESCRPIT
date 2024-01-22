// ? ### 👇 Yah Tarika hai TYPESCRPIT Mein Object mein data type define karne ka

type Obj = {
    height: number;
    weight: number;
    gender?: boolean; //* 👈 ? <-- iska matlab yah Hai yah data type optional ban jata hai Dene Se Bhi sahi hai Nahin Dene Se Bhi sahi hai yah error nahin throw Karega
  };
  
  const obj: Obj = {
    gender: true,
    height: 180,
    weight: 70,
  };
  
  const obj2: Obj = {
    height: 180,
    weight: 70,
  };
  
  //* 👇 Yah Dusra Tarika Hai object ko data type define karne ka
  //*     difference yahi hai type ko extends nahin kar sakte Aur interface ko extends kar sakte hain
  
  interface Obj2 {
    height: number;
    weight: number;
    gender?: boolean; //* 👈 ? <-- iska matlab yah Hai yah data type optional ban jata hai Dene Se Bhi sahi hai Nahin Dene Se Bhi sahi hai yah error nahin throw Karega
  }
  
  type FuncType = (n: number, m: number) => void;
  
  // * 👇 interface data define Mein ham log class Ki Tarah isko extends kar sakte hain ()
  interface NewObj extends Obj2 {
    scolar: boolean;
    func: FuncType;
  }
  
  const grig: NewObj = {
    height: 180,
    weight: 70,
    scolar: true,
    func(n, m) {
      console.log(n * m);
    },
  };
  
  const Kendal: NewObj = {
    height: 180,
    weight: 70,
    scolar: true,
    func(n, m) {
      console.log(n * m);
    },
  };
  
  Kendal.func(5, 20); //* <-- Call Object Function