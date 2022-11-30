const sumAll = function(num1, num2) {

    let emptySum = 0;

    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            sum = emptySum += i;
        }
    } else if (num2 < num1) {
        for (let i = num2; i <= num1; i++) {
            sum = emptySum += i;
        }
    } else {
        return "ERROR";
    }
   
    if (sum < 0) {
        return "ERROR";
    } else {
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
