//* TYPES : string(문자형) number(숫자형) boolean(0,1) null undefinded any(anything | not protect type) void(not return anything) unknown(don't know) never(only return Err)
// if age is uncertainty(불확실) : ?number(있을수도 있고 없을수도 있습니다~) = number | undefinded
// MAKE TYPES(Alias type) : type Exmaple = {name: sting, age:?number} * 일반적인 타입처럼 사용 가능
// return type : function example() : Example {~}
// readonly : Not Fix Only Read //* ex) readonly name : string, readonly : number[]
// Tuple : ex) :readonly[string, number, boolean]
// Callsignatures : type Add = (a:number, b:number) => number (함수가 어떻게 구동될지 선언?)
// Overloading : function have many call signatures //* ex) Type Add = {(a:number, b:number):number (a:number, b:string, c:number):number}
// Polymorphism : many structure
// Generic : 타입 유추 //* ex) type PrintArr = { <T>(arr:T[]) : T }
// #3.4 more Generic

//* Classes
/* 
class Player{
    constructor(
        private firstName:string,
        private lastName:string,
        public nickname:string
    ){}
}

const nico = new Player("nico", "las", "니꼬쌤")
*/

//* abstract class(추상 클래스) : 다른 클래스가 상속 받을 수 있는 클래스
//* mothod class 안에 있는 함수
//* getNickName과 같은 abstract method는 class에서 내용을 구현해야함
/*
abstract class User{
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected nickname:string
    ){}
    abstract getNickName():void
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User{}

const nico = new Player("nico", "las", "니꼬쌤")
nico.getFullName()
*/

//? Recap
//Make Dict
/*
type Words = {
    [key:string]:string
    - Words 타입이 string만을 property로 가짐
    
}

class Dict{
    private words:Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefinded){
            this.words[word.term] = word.def
        }
    }
    def(term:string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public readonly term :string,
        public readonly def :string
    ){}
}

const kimchi = new Word("kimchi", "한국의 음식")

const dict = new Dict()

dict.add(kimchi)
dict.def("kimchi")
*/
//* Interfaces = 오직 오브젝트의 모양을 설명함 / 같은 이름의 interface 만들기 가능 - 알아서 ts에서 합쳐줌
//! type 설정은 type, 모양만 알려줄떄는 interface
// type Team = "red" | "blue" | "yellow";

// interface Player {
//   nickname: string;
//   team: Team;
// };

// const nico: Player = {
//   nickname: "nico",
//   team: "yellow",
// };

// interface User {
//   name: string;
// }

// interface User {
//   age: number;
// }

// interface Player extends User {}

// const nico: Player = {
//   name: "nico",
//   age: 10,
// };
//* interface part two
// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class Player extends User {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string): string {
//     return `Hello ${name}. My name is ${this.fullName}`;
//   }
// }

// interface User {
//   firstName: string;
//   lastName: string;
//   fullName(): string;
//   sayHi(name: string): string;
// }

// interface Human {
//   health: number;
// }

// class Player implements User, Human {
//   constructor(public firstName: string, public lastName: string, public health: number) {}
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string): string {
//     return `Hello ${name}. My name is ${this.fullName}`;
//   }
// }

// function makeUser(user: User) {
//   return "hi";
// }

// makeUser({
//   firstName: "nico",
//   lastName: "las",
//   fullName: () => "XX",
//   sayHi: (name) => "string",
// });

//* Recap
// type PlayerA = {
//   name: string;
// };

// type PlayerAA = PlayerA & {
//   lastName: string;
// };

// const user1: PlayerAA = {
//   name: "nico",
//   lastName: "las",
// };
// interface PlayerB {
//   name: string;
// }

// interface PlayerBB extends PlayerB {
//   lastName: string;
// }
// interface PlayerBB {
//   health: number;
// }
// const user2: PlayerBB = {
//   name: "nico",
//   lastName: "las",
//   health: 10,
// };
// // ------------------------------------
// type PlayerC = {
//   firstName: string;
// };

// interface PlayerD {
//   firstName: string;
// }

// class User implements PlayerD {
//   constructor(public firstName: string) {}
// }
// // type interface 둘다 class에게 상속 가능하다

interface SStorage<T> {
  [key: string]: T;
}
class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();

stringStorage.get("fkdjsdf");
stringStorage.set("fjkdjakfj", "fdfd");

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get("fkdjk");
