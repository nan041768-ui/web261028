//--------------------------------------
// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 민윤희 (2651025)


const titles = ["스파이더맨: 브랜드 뉴 데이", "아이언맨", "어벤져스: 엔드게임", "어벤져스: 인피니티 워", "스파이더맨: 홈커밍"];
const ratings = [8.2, 7.8, 8.2, 8.2, 7.3];
const years = [2026, 2008, 2019, 2018, 2017];



let sum = 0;
for (let i = 0; i < ratings.length; i++) {
   sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);



let max = ratings[0];
let maxIndex = 0;

let count=0;

for (let i = 0; i < ratings.length; i++){
   
   if(ratings[i]>=8) count++;
   if(ratings[i]>max){
      max=ratings[i];
      maxIndex=i;
   }
}

for (let i = 0; i < ratings.length; i++){

   let label;
   if(ratings[i]>=8.5){
      label="명작";
   }
   else if(ratings[i]>=7){
      label="추천";
   }
   else{
      label="보통";
   }
   console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}



console.log("8점 이상:", count + "편");
console.log("최고:", titles[maxIndex], max);



const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);




