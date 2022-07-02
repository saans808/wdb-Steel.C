// 25
let lottoNumbers = [1, 2, 3, 4, 5, 6];

// 26
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];
leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco';

// 27
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
planets.shift()
planets.push('Saturn')
planets.unshift('Mercury')

// 28
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = 'Hugo';

// 29
let product = {name : "Gummy Bears",
    inStock : true,
    price : 1.99,
    flavors : ["grape", "apple", "cherry"]
}

// 30
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress = restaurant['address']+ restaurant['city']+ restaurant['state']+ restaurant['zipcode'];
