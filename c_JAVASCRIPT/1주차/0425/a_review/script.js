//! 문제 1

//? 0424 / a_review / script.js의 1번 문제 활용
//& 삼항 연산자 사용

// 비가 오는지에 대한 여부인 isRaining 변수의 값에 따라
// , 콘솔창에 다른 텍스트를 출력

// - 비가 올 경우(true)
// EX) 현재 부산의 기온은 20도이며, 비가 오고 있습니다.

// - 비가 오지 않을 경우(false)
// EX) 현재 부산의 기온은 20도이며, 비가 오지 않습니다.

const city = '부산'; // 문자열, 변경되지 않을 값에는 const 사용
let temperature = 20; // 숫자, 변경될 수 있는 값에는 let 사용
let isRaining = true; 

console.log(`현재 ${city}의 기온은 ${temperature}도 이며, 비가 ${isRaining ? '비가 오고 있습니다.' : '비가 오지 않습니다.'}`);

//! 문제 2

//? 숫자 마술 게임
//& 연산자의 우선 순위 & 산술 연산자 사용

// 사용자로부터 하나의 숫자를 입력받아, 그 숫자에 다음 연산을 순서대로 적용하고 결과를 예측하게 하는 스크립트를 작성

let num = Number(prompt('숫자를 입력하세요.')); // 사용자로부터 입력 받은 수
let magic = (num * 2 + 8) / 2 - num; // 연산의 결과

// 입력한 숫자에 아래의 연산을 작성
// 숫자에 2를 곱하기
// 결과에 8을 더하기
// 결과를 2로 나누기
// 처음 입력받은 숫자를 빼기

// 출력: '계산식의 결과는 ${magic}입니다. 항상 4가 출력됩니다.'
console.log(`계산식의 결과는 ${magic} 입니다. 항상 4가 출렵됩니다.`);

//! 문제 3

//? 할인 가격 계산하기
//& 사용자로부터 데이터 입력 받기 & 연산자 우선 순위 & 다양한 연산의 복합적 사용

// 상품의 원가와 할인율을 사용자로부터 입력받아 할인된 가격을 계산하고, 그 결과를 콘솔에 출력하는 스크립트를 작성

// 할인 금액 계산: 원가 X 할인율(%)
// 최종 가격: 원가 - 할인 금액

// let originalPrice; // 원가 입력받음
// let discountRate; // 할인율 입력받음
// let discountAmount; // 할인 금액 계산
// let finalPrice; // 최종 가격 계산

// 사용자로부터 원가와 할인율 입력 받기
let originalPrice = parseFloat(prompt("상품의 원가를 입력하세요:"));
let discountRate = parseFloat(prompt("할인율을 입력하세요(%):"));

// 할인 금액 계산
let discountAmount = originalPrice * (discountRate / 100);

// 최종 가격 계산
let finalPrice = originalPrice - discountAmount;

// 결과 출력
console.log(`할인된 가격은 ${finalPrice} 원입니다.`);



//! 문제 4

//? 명예의 전당 진입 조건 검사기

// 문제: 사용자로부터 게임 플레이어의 점수를 입력받아, 명예의 전당에 들어갈 자격이 있는지를 검사하는 스크립트를 작성

// 명예의 전당에 들어가기 위한 조건은 아래와 같음.

// 1. 플레이어의 점수가 5000점 이상이어야 하고,
// 2. 플레이어가 특별 트로피를 가지고 있거나(A), 또는 플레이어가 3개 이상의 게임에서 우승해야 함(B).
// 1번 && (A || B)

// 단락 평가를 사용하여, 만약 플레이어의 점수가 이미 5000점 이상이면, 추가 조건은 평가하지 않도록 스크립트를 구성

let score = Number(prompt('플레이어 점수를 입력하세요.')) ;
let hasTrophy = prompt('플레이어가 특별 트로피를 가지고 있나요? (Yes/No)') === 'Yes'; // 사용자로부터 트로피를 가지고 있는지 답변을 받아 변수에 저장 (yes/no의 데이터 입력받기 - yes와 동일할 경우 해당 변수에 true값 저장)
let gameWins = Number(prompt('플레이어가 우승한 게임의 수를 입력하세요.'));

let isEligible = (score >= 5000) && (hasTrophy === true || gameWins >=3); 
// 위의 모든 조건을 만족할 경우 해당 변수에 true값 저장



// isEligible의 값을 출력
console.log(`플레이어가 명예의 전당에 들어갈 자격이 있습니까? ${isEligible}`);


