const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');

const game = [
  "XXOO",
  "O OX",
  "OOO ",
];

//Task1
if(game[0].length === game[1].length && game[0].length === game[2].length){
  task1.innerHTML = "True";
}else{
  task1.innerHTML = "False";
}

//Task2
let arr =[];
for(let i =0;i<game[0].length;i++){
  arr[i]= game[0].charAt(i);
}
console.log(arr);
let res = true;
for(let i in arr){
  if((arr[i] === 'X' || arr[i] === 'O')){
    continue;
  }else{
    res = false;
    break;
  }
}
task2.innerHTML = res;

//Task3
let Xcount = 0;
let Ocount = 0;
let totalArr = [];
for(let i in game){
  for(let j =0;j< game[i].length;j++){
    totalArr.push(game[i].charAt(j));
    if(game[i].charAt(j) === 'X'){
      Xcount++;
    }
    if(game[i].charAt(j)==='O'){
      Ocount++;
    }
  }
}
task3.innerHTML = `X / O = ${Xcount} / ${Ocount}`;
console.log(totalArr,Xcount,Ocount);

//Task4
let ind = -1;

for (let i = 0; i < game.length; i++) {
  for (let j = 0; j < game[i].length - 2; j++) {
    if (game[i][j] === game[i][j + 1] && game[i][j + 1] === game[i][j + 2]) {
      ind = i;
      break;
    }
  }
  if (ind !== -1) {
    break;
  }
}

console.log(ind);
task4.innerHTML = ind;