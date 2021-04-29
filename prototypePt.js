function person(){
    this.eyes = 2;
    this.nose = 1;
};

let kim = new person();
let park = new person();

/* 
    function 과 object의 차이
    차이 없음 = only in JAVASCRIPT

    객체도 function입니다.
*/

// const person2 = {
//     constructor(){},
//     eyes:2,
//     nose:1
// }

// let kim2 = new person2();
// let park2 = new person2();

console.log(kim.eyes);
console.log(kim.nose);
console.log(park.eyes);
console.log(park.nose);

park.eyes = 4;
console.log('--------------');

console.log(kim.eyes);
console.log(kim.nose);
console.log(park.eyes);
console.log(park.nose);  

/*
여기 결과값을 확인해보면 park의 eyes만 바뀐 걸 알 수 있다.
즉 각각의 변수들이 따로따로 논다는 것
*/

function person2(){}

person2.prototype.eyes = 2;
person2.prototype.nose = 1;

let kim2 = new person2();
let park2 = new person2();

console.log('--------------');

console.log(kim2.eyes);
console.log(kim2.nose);
console.log(park2.eyes);
console.log(park2.nose);

park2.__proto__.eyes = 4;  // 데이터를 가져오는게 아니라 참조
park2.eyes = 8;

console.log(park2);

/* // function person(){
//     this.eyes = 2;
//     this.nose = 2;
// }

// let kim = new person(); // 함수를 객체로(?) 만들겠다.
// let park = new person();  

// const person2 = {
//     eyes:2,
//     nose:1
// }

function person(){}

person.prototype.eyes = 2;
person.prototype.nose = 1;

let kim = new person();
let park = new person(); */