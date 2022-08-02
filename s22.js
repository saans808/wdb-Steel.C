// 47
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function (n) {
    return n.first;
})

// 48 arrow function
const greet = (x) => {
    return `Hey ${x}!`;
}

// 49 filter
function validUserNames(usernames) {
  return usernames.filter(usernames => usernames.length < 10);
}

const validUserNames = usernames => usernames.filter(usernames => usernames.length < 10);

// 50 some/every
function allEvens(arr) {
    return arr.every(num => num % 2 === 0);
}

const allEvens = (arr) => arr.every(num => num % 2 === 0);
