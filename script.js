// document.write("외부 스크립트 방법"); 

console.log("톤솔창에 나와야 하는 내용");

var num = 10 + 20;
console.log(num);





// let= 변수 선언하는 명령어
let sum = 80 + 1234; //var 보다 let을 더 많이 사용함 // [실습예제도 let을 주로 사용]
console.log(sum);



//--------------------텍스트 변수 -> 출력-----------------------
let string1 = "Hello, world\n";
let string2 = '시네마 웹사이트"Cinema Website"에 오신 것을 환영합니당~~';
let string3 = '시네마 웹사이트\'Cinema Website\'에 오신 것을 환영합니당~~';
console.log(string1, string2);



// --------------구구단----------------
let dan = 3;
let gugu = 8;
let string = `${dan} 곱하기 ${gugu}은/는 ${dan * gugu}입니다.`;
// 변수 가져와서 출력하려면 "백틱"으로 묶기. (따옴표 아님!)
console.log(string);




// -------------배열--------------
let studentScore = [80, 70, 90, 60];
console.log(studentScore);
console.log(studentScore[2]);




// ---------교재 p.352----------
let stdScore = {
   koreanScore: 90,
   englisgScore: 80,
   mathScore: 100,
   scienceScore: 100
};

console.log(stdScore);
console.log(stdScore.koreanScore);




// ======교재 p.357 아주 중요=====

for (let i = 1; i <= 9; i++) {
   for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
   }
   console.log("\n");
}




