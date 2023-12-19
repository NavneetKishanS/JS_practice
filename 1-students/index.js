const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');

const students = [
  { "code": "xpzyom", "name": "Buck Oen",           "grades": [4, 4, 2, 4, 4, 4, 4, 3] }, 
  { "code": "ollsxk", "name": "Rakel Hall",         "grades": [2, 2, 2, 3, 3, 2] }, 
  { "code": "fcedpx", "name": "Adrianna Yosevitz",  "grades": [1, 3, 3, 3, 4, 1] }, 
  { "code": "hughay", "name": "Kassi Blaxton",      "grades": [3, 4, 5, 4, 5, 4, 2, 4, 5] }, 
  { "code": "tymclq", "name": "Merrili Hutchison",  "grades": [5, 3, 2, 3, 2, 4] }, 
  { "code": "xrpwmb", "name": "Vittorio Eckhard",   "grades": [5, 5, 5, 5, 5] }, 
  { "code": "tmkhgm", "name": "Jacobo Fidock",      "grades": [1, 1, 4, 1, 1, 1, 2, 2] },
  { "code": "ltfwyu", "name": "Philip Roeby",       "grades": [5, 5, 5, 5, 5, 5, 5, 5, 5] },
  { "code": "gpbqmb", "name": "Kakalina Geraldini", "grades": [5, 4, 3, 4, 5, 3, 5, 3, 3, 3] },
  { "code": "vimrfd", "name": "Sancho Hasty",       "grades": [1, 2, 1, 1, 1, 3] }
];

// ========= Solution =========
// Hogy hívják azt a diákot, akinek a kódja xrpwmb?
// What's the name of the student whose code is "xrpwmb"?
for (let i = 0;i<students.length;i++){
  if(students[i].code === "xrpwmb" ){
    task1.innerHTML = students[i].name;
  }
}

// Kik azok a diákok, akiknek csupa 5-ösük van?
// Who are the students that received no grade other than 5?
let names = [];
for (let i = 0;i<students.length;i++){
  if((sum(students[i].grades)/(students[i].grades.length)) === 5){
    names.push(students[i].name);
  }
}

task2.innerHTML = names.join(",");

function sum(arr){
  let s = 0;
  for(let i of arr){
    s += i;
  }
  return s;
}
// Hány olyan diák van, aki megbukott (legalább 3 darab 1-ese van)?
// How many students have failed (received at least three 1s)?
let failed = [];
for(let i =0;i<students.length;i++){
  if((three1s(students[i].grades)) === true){
    failed.push(students[i].name);
  }
}

task3.innerHTML = failed.length;
function three1s(arr){
  arr.sort();
  if(arr[0] === 1 && arr[1] === 1 && arr[2] === 1){
    return true;
  }
}

// Ki kapta a legtöbb egyest?
// Who received the highest number of 1s?
let ones =[];
for(let i =0;i<students.length;i++){
  ones.push(count1s(students[i].grades));
}
console.log(ones);

maxInd = ones.indexOf(Math.max(...ones))
task4.innerHTML = students[maxInd].name;

function count1s(arr){
  arr.sort();
  c =0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      c++;
    }
  }
  return c;
}
