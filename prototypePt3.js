/*
    prototype object -> prototype
    prototype link -> __proto__

    prototype 함수로 만들어야지 생성이 됨
    __proto__ 객체라면 다 포함하고 있음
    << link를 위해 사용함 == 연결을 위해 사용함
    없을때까지 계속 참조한다. 타고들어가고 들어가다가 정말 없으면 undefined로 표현한다.
*/

let x = {number1:1};
let y = {number2:2};
/*
let z = {
    'x':x,
    'y':y
}
z.x.number1 = 3; // <<이렇게 하면 x의 값 자체가 3으로 바뀜
*/

let z = {};
x.__proto__ = y;  //  << x가 y의 값을 가져옴
z.__proto__ = y;  // << x가 y의 값을 가지고 있는 상태에서 z에 넣음
/* 객체간의 상속 */
console.log('z number1 :', z.number1);
console.log('z number2 :', z.number);

z.number2 = 4;
// << 위처럼하면 number2가 4로 바뀌는게 아니라 4를 가지고 있는 새로운 number2가 생긴거
// 바꾸려면?
y.number =4; // << 이렇게 직접적으로 바꿔줌