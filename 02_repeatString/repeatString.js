const repeatString = function(str, times) {

    let emptyStr = "";

    if (times < 0) {
        return "ERROR";
    } else if (times === 0) {
        return "";
    } else {
        for (let i = 1; i <= times; i += 1) {
            result = emptyStr += str;
        }
    }
  
    return result;

    // simpler? solution

    // if (num < 0 ) {
    //     return "ERROR";
    // } else {
    //     return str.repeat(num);
    // }

};

// Do not edit below this line
module.exports = repeatString;
