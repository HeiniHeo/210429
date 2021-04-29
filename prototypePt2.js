// let foo = {name:'foo'};
// // foo.prototype.a = 'HELLO WORLD!';
// // console.log(foo.a);

// function foo2(){
//     this.name = 'foo';
// }

// foo3 = function(){
//     this.name = 'foo';
// };

// foo4 = ()=>{
//     this.name = 'foo';
// }; // prototype없음 prototype사용하려면 익명함수보다는 함수명이 있는 함수를 
// //사용하는게 좋음

function foo(){}
foo.prototype.txt = "HELLO WORLD!";
//prototype 안에 객체에는 마음대로 속성값(property)을 add/delete가능하다
// 쉬운말로 그냥 객체처럼 사용이 가능하나는 소리.
let obj = new foo();

console.dir(obj.txt);
console.dir(obj.constructor);
console.dir(foo);
console.dir(obj);
console.dir(foo.prototype);
console.log(obj.__proto__);