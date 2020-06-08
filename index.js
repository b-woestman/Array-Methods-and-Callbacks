import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log(fifaData[828]["Home Team Name"]);
console.log(fifaData[828]["Away Team Name"]);
console.log(fifaData[828]["Home Team Goals"]);
console.log(fifaData[828]["Away Team Goals"]);
console.log(fifaData[828]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */



function getFinals(data) {

    const finals = [];

    data.forEach(element => {
        if (element.Stage === "Final"){
            finals.push(element);
        }
    });
console.log(finals);
return finals;

};
getFinals(fifaData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

    const years = [];

    callback(fifaData).forEach(element => {
        years.push(element.Year);
    })
console.log(years);
return years;
};

getYears(getFinals);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    const winners = [];

    callback(fifaData).forEach(element => {
        if (element["Away Team Goals"] > element["Home Team Goals"]){
            winners.push(element["Away Team Name"])
        } else {winners.push(element["Home Team Name"])}
    })
console.log(winners);
return winners;
};

getWinners(getFinals);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1 , callback2) {

    const years = callback1(getFinals);
    const winner = callback2(getFinals);

    for (let i=0 ; i < winner.length ; i++){
        console.log(`In ${years[i]}, ${winner[i]} won the world cup!`);
    } 
};

getWinnersByYear(getYears,getWinners);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    var hometotal = data.reduce((total, data) => {
        return total += data["Home Team Goals"];
    },0);
    var homeaverage = hometotal / data.length;
    
    var awaytotal = data.reduce((total, data) => {
        return total += data["Away Team Goals"];
    },0);
    var awayaverage = awaytotal / data.length;

    console.log(`Average home team goals per match: ${homeaverage}.`);
    console.log(`Average away team goals per match: ${awayaverage}.`);
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
