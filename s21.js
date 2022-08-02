// 44
let square = function(num) {
  //  return num * num;
    return Math.pow(num, 2);
}

// 45
const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}

// 46 Egg Laying (this)
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}
