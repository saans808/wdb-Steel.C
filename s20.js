// 35
function printHeart(){
    console.log("<3")
}
printHeart()

// 36
function rant(message){
    console.log(`${message}`.toUpperCase())
    console.log(`${message}`.toUpperCase())    
    console.log(`${message}`.toUpperCase())
}
rant("I hate beets")

// 37
function isSnakeEyes(num1, num2) {
    if (num1 == 1 && num2 == 1) {
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}

// 38
function multiply(num1, num2) {
    let result = num1 * num2
    return result
}

// 39
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true
} return false
}

// 40
function lastElement(array) {
    let result = array[array.length -1];
    if (array.length === 0) {
        return null
    }
    return result
}

// 41
function capitalize(string) {
    let result = string.replace(string[0], string[0].toUpperCase());
    return result
}

// 42
function sumArray(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result
}

// 43
function returnDay(num) {
    let dic = { 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday" };

    if (num === 0 || num > 7 || num < 1) {
        return null;
    } 
        return dic[num];
}
