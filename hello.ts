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
        public term :string,
        public def :string
    ){}
}

const kimchi = new Word("kimchi", "한국의 음식")

const dict = new Dict()

dict.add(kimchi)
dict.def("kimchi")
*/
// 다음 강의 Interfaces
//js로 바꾸기 => Terminal에 tsc 이름.확장자
