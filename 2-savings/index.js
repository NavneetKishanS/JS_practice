const form = document.querySelector("form");
const divContainer = document.querySelector(".container");

//Task1
let M =0;
const inputFields = (document.querySelectorAll('input[data-consumption]'));

//console.log(parseInt(inputFields));
inputFields.forEach(input =>{
    const consumption = parseInt(input.dataset.consumption);
    M+= consumption;
})

console.log("M = " ,M);

//Task2
const consumptionArr = Array.from(inputFields).map(input => parseInt(input.dataset.consumption));
const inputFields2 = (document.querySelectorAll('input[value]'));
const valueArr = Array.from(inputFields2).map(input => parseInt(input.value));
//console.log(valueArr);
const inputFields3 = (document.querySelectorAll('input[max]'));
const maxArr = Array.from(inputFields3).map(input => parseInt(input.max));

let ciArr = [];
function calcCi(value,max,consumption){
    return ((value/max)*consumption);
    //    ((valueArr[i])/(maxArr[i]))*(consumptionArr[i]);
}
//console.log(maxArr.length);
for(let i =0;i<maxArr.length;i++){
    const ci = calcCi(valueArr[i],maxArr[i],consumptionArr[i]);
    ciArr.push(ci);
}
console.log(ciArr);

//Task3
const fe = document.querySelector('label[for="fe"]');
//fe.style.width = '65%';
const inputFields4 = (document.querySelectorAll('input[id]'));
let idArr = Array.from(inputFields4).map(input => input.id);
console.log(idArr);

for(let i =0; i<idArr.length;i++){
    const idVal = document.querySelector(`label[for="${idArr[i]}"]`);
    idVal.style.width = ((ciArr[i]/M)*100)+'%';
}

//Task4
/* CHANGEING WIDTH USING RANGE BAR
const rangeFe = document.getElementById('fe');
rangeFe.addEventListener('input',function(e){
    const currentValue = parseInt(e.target.value);
    fe.style.width = currentValue + '%';
})*/
let newCiArr = [];
for(let i =0;i<idArr.length;i++)
    {const inputEle = document.getElementById(idArr[i]);
    inputEle.addEventListener('input',function(e){
        const currentValue = parseInt(e.target.value);
        fe.style.width = currentValue + '%';
        ciArr[i] = Math.round(calcCi(currentValue,maxArr[i],consumptionArr[i]));
        // for(let i =0;i<maxArr.length;i++){
        //     const ci = calcCi(valueArr[i],maxArr[i],consumptionArr[i]);
        //     newCiArr.push(ci);
        // }
        // console.log(newCiArr);
        console.log(ciArr);
    })}