
function User(name,age){
    this.name = name;
    this.age = age;
};
const gildong = new User('길동',20);

User.prototype.showName = function(){
    console.log(this.name);
}

class User2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
} /* class로 만들었을때 new가 붙지 않으면 작동자체를 안하고 오류가 난다 */

/*prototype과 __proto__로 아래와 같은 결과치 만들기*/
const dogoo = new User2('dogoo',20)




// class Car{
//     constructor(color){
//         this.color = color;
//         this.wheel = 4;
//     }
//     drive(){
//         console.log('drive');
//     }
//     stop(){
//         console.log('stop');
//     }
// }

// /* 
//     extends => 상속한다. || prototype을 넣는다
//     [자식] extends [부모]
// */
// class avante extends Car{
//     name(){
//         console.log('avante');
//     }
// }

// const 아반떼 = new avante('black');




// const Car2 = {
//     name(){console.log('avante')}
// }

// Car2.__proto__.drive = function(){
//     console.log('drive');
// }
// Car2.__proto__.stop = function(){
//     console.log('stop');
// }

// let 아반떼2 = {
//     color: 'black',
//     wheel: 4
// };
// 아반떼2.__proto__ = Car2




function Car3(){
    this.drive = function(){
        console.log('drive')
    }
    this.stop = function(){
        console.log('stop')
    }
}

function avante(color){
    this.color = color;
    this.wheel = 4;
}

avante.prototype.showName = function(){
    console.log('avante')
}

avante.prototype.__proto__= new Car3();

let 아반떼3 = new avante('black');