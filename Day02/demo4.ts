//Anonymous Function
// function does not have any name

  let temp1=function (){
    console.log("Anonymous function is called.");
  }

  // temp1();

  let temp2=function (a:number,b:number):number{
    return (a+b)
  }

  let res=temp2(8,4);
  // console.log("Result is "+res)

  // Fat arrow function/Arrow function

     let temp3= ()=>{
        console.log("fat arrow function is called ")
      }

      // temp3();

  let temp4=(a:number,b:number):number=>{
    return (a+b);
  }

  // console.log(`Addition is ${temp4(7,7)} `)

  // optional parameter function

  function add1(a:number,b?:number){
      console.log("Value of a is "+a) // 4
      console.log("Value of b is "+b) // undefined
      console.log("Addition of a+b is "+(a+b!)) //NAN=> not a number
  }

//  add1(4);
// add1(4,6);

function add2(a?:number,b?:number){
  console.log("Value of a is "+a) // 4
  console.log("Value of b is "+b) // undefined
  console.log("Addition of a+b is "+(a+b!)) //NAN=> not a number
}

// add2();
// add2(9,2)

// default parameter function

function add3(a:number,b:number=9){
  console.log("Value of a is "+a) // 4
  console.log("Value of b is "+b) // undefined
  console.log("Addition of a+b is "+(a+b!)) //NAN=> not a number
}

// add3(5);
// add3(10,3);

function add4(a:number=7,b:number){
  console.log("Value of a is "+a) // 4
  console.log("Value of b is "+b) // undefined
  console.log("Addition of a+b is "+(a+b!)) //NAN=> not a number
}

// add4(6,5);

function add5(a:number=7,b?:number){
  console.log("Value of a is "+a) // 4
  console.log("Value of b is "+b) // undefined
  console.log("Addition of a+b is "+(a+b!)) //NAN=> not a number
}

// add5()
