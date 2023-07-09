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
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.storage = {};
    }
    LocalStorage.prototype.set = function (key, value) {
        this.storage[key] = value;
    };
    LocalStorage.prototype.remove = function (key) {
        delete this.storage[key];
    };
    LocalStorage.prototype.get = function (key) {
        return this.storage[key];
    };
    LocalStorage.prototype.clear = function () {
        this.storage = {};
    };
    return LocalStorage;
}());
var stringStorage = new LocalStorage();
stringStorage.get("fkdjsdf");
stringStorage.set("fjkdjakfj", "fdfd");
var booleanStorage = new LocalStorage();
booleanStorage.get("fkdjk");
