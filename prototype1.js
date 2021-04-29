let a = {
    number1:1,
}

let b = {
    number2:2,
}

let c = {
    number3:3,
}

a.__proto__ = b;
c.__proto__ = a;

console.log(c.number1);
console.log(c.number2);

let user = {
    name: 'heini',
    hasOwnProperty:function(){
        console.log('HELLO');
    }
} // 자기 기준으로 가까운 부분부터 보여짐

// user.hasOwnProperty('name')  // 결과값은 boolean형태로 반환됩니다.

const car = {
    wheel : '4',
    drive(){
        console.log('시동');
    }
};

const avante = {
    color : 'blue',
    navigation:true,
    __proto__:car
};

const sonata = {
    color : 'red',
    navigation:false,
    __proto__:car
};

const genesis = {
    color : 'black',
    navigation:true,
    __proto__:car
};

// avante.__proto__ = car;
// sonata.__proto__ = car;
// genesis.__proto__= car;
/*
const 자동차 = function(컬러,네비게이션){
    this.컬러 = 컬러;
    this.네비게이션 = 네비게이션
}
*/
/* = 뒤에 컬러랑 네비게이션은 인자값으로 받았던 값을 말하는 거고 
this.뒤에 컬러랑 네비게이션은 자동차안에서 쓸 변수이름을 설정해준거*/
/*
자동차.prototype.휠 =4;
자동차.prototype.drive = function(){
    console.log('drive');
}

let 아반테 = new 자동차('블루',true);
let 소나타 = new 자동차('레드',false);
let 제네시스 = new 자동차('블랙',true);
*/

function 자동차(색상,네비게이션){
    this.색상 = 색상;
    this.네비게이션 = 네비게이션;
}

자동차.prototype.휠 = 4;
자동차.prototype.drice = function(){
    console.log('drive')
}

let 아반떼 = new 자동차('블루',true);
let 소나타 = new 자동차('레드',false);
let 제네시스 = new 자동차('검정',true);

let 그랜저 = 자동차.__proto__ = {name:'heini'};