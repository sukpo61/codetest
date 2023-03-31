// let person = {
//   name: "John",
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };

let person = {
  name: "John",
  greet: function () {
    // 화살표 함수 내에서 this는 생성 시점의 컨텍스트, 여기서는 person 객체를 참조합니다.
    function greetFunc() {
      console.log("Hello, my name is " + this.name);
    }
    greetFunc();
  },
};

// 예상대로 'Hello, my name is John'이 출력됩니다.

person.greet();

// this가 전역 객체(window)를 참조하므로, 'Hello, my name is undefined'이 출력됩니다.

let greetFuncs = person.greet;

greetFuncs();

// call 메서드의 첫 번째 인수로 전달된 객체를 this로 지정하므로, 'Hello, my name is Jane'이 출력됩니다.
//   let anotherPerson = { name: 'Jane' };
//   person.greet.call(anotherPerson);
