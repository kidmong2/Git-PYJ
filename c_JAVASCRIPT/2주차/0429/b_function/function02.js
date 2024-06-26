//! 자바스크립트 함수 구조

// 매개변수와 인자

// 매개변수 (파라미터, parameter)
// : 함수를 정의하고 호출하는 과정에서 함수에 데이터 전달 방식(함수에서 사용할 변수를 의미)
// : 함수 호출 시 괄호 안에 인수(arguments)를 넣어서 전달
// : , 해당 인수는 함수 내부로 전달되어 매개변수(parameters)라는 이름으로 사용

// 인자 (아규먼트, argument)
// : 함수를 호출할 때 전달하는 실제 값
// : 함수 호출 시 소괄호 안에 넣어 함수에 전달

// + 매개변수와 인자를 2개 이상 지정시
// >> 콤마 (,)로 구분

function add(a,b) { // 함수 정의시 소괄호 안의 키워드는 파라미터
  // let a = 3;
  // let b = 4;
  console.log(a+b);
}

add(3,4); // 3,4는 인자값 argument

//? 자바스크립트에서 파라미터와 아규먼트 사용
// 함수 호출 시 전달되는 아규먼트의 수 !== 함수 정의 시 선언된 파라미터의 수

// 파라미터 > argument : 넘기지 않은 파라미터의 값은 undefined로 지정
// 파라미터 < argument : 초과된 아규먼트의 값은 무시

function log(a) { // 파라미터 1개
  console.log(a);
}

log(); // argument 0개
log('안녕'); // argument 1개
log('hello','hi'); // argument 2개
// >> 지정된 파라미터 (1개) 이상의 argument (2개)는 읽히지 않는다.

//! 반환값(return)
// : 입력 받아 처리한 결과를 '반환'
// : return 키워드를 사용해서 지정 가능
// : 함수 내에서 return 키워드를 사용하는 경우
//   , 함수의 실행을 즉시 중단하고 return 뒤에 오는 값을 반환

function subtract (a,b) {
  result = a-b;
  return result;
}

// subtract 함수의 반환값이 outcome 변수에 저장
let outcome = subtract(10,7);

console.log(outcome);


// return이 없는 함수는 undefined를 반환
// : 일반적으로 즉시 콘솔 출력 시 사용


function notValue() {
  console.log('반환값이 없는 함수');
}
let outcome2 = notValue(); // undefined 값이 outcome2 변수에 할당
console.log(outcome2); // undefined;


// 실습 문제
// : 함수 square를 작성하여 파라미터로 x값을 받음
function square (x) {
  return x * x;
}
let outcome3 = square(4)
console.log(outcome3);


 // : 반환 값으로 x의 제곱을 반환
// : 반환 결과를 변수에 담아 해당 변수를 콘솔창에 출력
// - 함수 선언문 형식으로 작성