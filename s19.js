// 31
for (let i=0; i<6; i++) {
    console.log("Da ba dee da ba daa");
}
    
// 32
for (let i = 25; i>=0; i-= 5) {
    console.log(i);
}

// 33
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

// 34
const numbers = [1,2,3,4,5,6,7,8,9]; 

for (let i of numbers) {
    console.log(numbers[i-1]*numbers[i-1])
}
