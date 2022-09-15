var a = [10, 20, 30, 40];
// a.forEach((value,i)=>{
//   console.log("Value of array "+value+" index is "+i)
// });
//Rest Parameter function
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(str);
    console.log(item);
}
// display(10,20);
// display(10,20,30,45,80);
// display('Sumit',45,89,90);
// push & pop
// it work on principal on LIFO
// drawback=> u can't push or Pop from particular index value 
var b = [];
// b.push(78);
// console.log(b);
// b.push(45,88,90,3);
// console.log(b);
// let res=b.pop();
// console.log(b);
// console.log("Poped value is "+res);
//splice method
// let c:number[]=[100,45,66,9];
// console.log(c)
// c.splice(1,0,100);
// console.log(c)
// c.splice(2,0,55,90);
// console.log(c);
// c.splice(1,1);
// console.log(c)
// c.splice(1,2)
// console.log(c);
// c.splice(2,1,200);
// console.log(c);
// c.splice(2,1,700,900);
// console.log(c);
//slice
// to copy a section of data from array & return it a copied section of data
//   let d:string[]=["Core java",'Spring','Spring Boot','Angular12','React Js','Vue js','Embber Js','JSP'];
// let res=d.slice(1,6);
// console.log("Original Array "+d);
// console.log("Copied Array "+res);
//map method
// to perform element by element operation
var e = [2, 3, 4, 5, 6];
var temp = e.map(function (myvalue) {
    return (myvalue * myvalue);
});
console.log(e);
console.log(temp);
