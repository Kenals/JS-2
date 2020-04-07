let data = [
{principal: 2500, time: 1.8},
{principal: 1000, time: 5},
{principal: 3000, time: 1},
{principal: 2000, time: 3}
];
function interestCalculator (data) { 
let interestData = [];
for (let i = 0; i < data.length; i++) {
    let element = data[i];
    let rate = 0; 
    let interest = 0;

if (element.principal >= 2500 && element.time > 1 && element.time < 3) {rate = 3;
    interest = (element.principal * rate * element.time) / 100
    element.interest = interest;
    element.rate = rate;
    interestData.push(element)
}
            
else if (element.principal >= 2500 && element.time >= 3) {rate = 4;
    interest = (element.principal * rate * element.time) / 100
    element.interest = interest;
    element.rate = rate;
    interestData.push(element)
}

else if (element.principal < 2500 || element.time <= 1) {rate = 2;
    interest = (element.principal * rate * element.time) / 100
    element.interest = interest;
    element.rate = rate;
    interestData.push(element)
}

else {rate = 1;
interest = (element.principal * rate * element.time) / 100
element.interest = interest;
element.rate = rate;
interestData.push(element)
}   

}
console.log(interestData);
return interestData;
}
interestCalculator (data);