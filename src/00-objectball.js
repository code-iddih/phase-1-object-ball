// PART 1 | Building the Object

function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Testing the gameObject function
console.log(gameObject());


// Printing in form of a table

const game = gameObject();

// To print Home Team Players in a table

console.table(game.home.players);

// To print Home Team Players in a table

console.table(game.away.players);

// console.table(gameObject());

// PART 2 | Building functions

// <...===============numPointsScored===============...>

// // This function takes a player's name as an argument and 
// returns the number of points scored by that player.

function numPointsScored(playerName) {
    // Access the game object
    const game = gameObject();

    // Iterate over home and away teams
    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            // Iterate over players in each team
            for (let player in game[team].players) {
                if (player === playerName) {
                    // Return points for the matching player
                    return game[team].players[player].points;
                }
            }
        }
    }

    // If player name not found, return null or handle as needed
    return null;
}

console.log(numPointsScored("Alan Anderson"));

// <...===============shoeSize===============...>

// This function takes a player's name as an argument and
// returns the shoe size for that player.

function shoeSize(playerName) {
    const game = gameObject();

    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            for (let player in game[team].players) {
                if (player === playerName) {
                    return game[team].players[player].shoe;
                }
            }
        }
    }

    return null;
}

console.log(shoeSize("Reggie Evans"));

// <...===============teamColors===============...>

// This function takes a team name as an argument and 
// returns an array of that team's colors.

function teamColors(teamName) {
    const game = gameObject();

    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            if (game[team].teamName === teamName) {
                return game[team].colors;
            }
        }
    }

    return null;
}

console.log(teamColors("Brooklyn Nets"));  

// <...===============teamNames===============...>

// This function operates on the game object to 
// return an array of the team names.

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

console.log(teamNames()); 

// <...===============playerNumbers===============...>

// This function takes a team name as an argument and 
// returns an array of the jersey numbers for that team.

function playerNumbers(teamName) {
    const game = gameObject();
    let numbers = [];

    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            if (game[team].teamName === teamName) {
                for (let player in game[team].players) {
                    numbers.push(game[team].players[player].number);
                }
            }
        }
    }

    return numbers;
}

console.log(playerNumbers("Brooklyn Nets"));  // Example

// <...===============playerStats===============...>

// // This function takes a player's name as an argument and 
// returns an object containing that player's stats.

function playerStats(playerName) {
    const game = gameObject();

    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            for (let player in game[team].players) {
                if (player === playerName) {
                    return game[team].players[player];
                }
            }
        }
    }

    return null;
}

console.log(playerStats("Brook Lopez")); // Example

// <...===============bigShoeRebounds===============...>

// This function returns the number of rebounds associated with 
// the player that has the largest shoe size.

function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = -Infinity;
    let playerWithMaxShoe = null;

    // Find player with the largest shoe size
    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            for (let player in game[team].players) {
                if (game[team].players[player].shoe > maxShoeSize) {
                    maxShoeSize = game[team].players[player].shoe;
                    playerWithMaxShoe = game[team].players[player];
                }
            }
        }
    }

    // Return rebounds of the player with the largest shoe size
    return playerWithMaxShoe.rebounds;
}

console.log(bigShoeRebounds()); 

// BONUS QUESTIONS
// Define functions to return the answer to the following questions:

// <...===============mostPointsScored===============...>

// This function finds and returns the player who has scored the most points.

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = -Infinity;
    let playerWithMostPoints = null;

    // Iterate over both teams and their players
    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            for (let player in game[team].players) {
                if (game[team].players[player].points > maxPoints) {
                    maxPoints = game[team].players[player].points;
                    playerWithMostPoints = player;
                }
            }
        }
    }

    return playerWithMostPoints;
}

console.log(mostPointsScored());

// <...===============winningTeam===============...>

// This function determines which team has the most points and returns the team name.

function winningTeam() {
    const game = gameObject();
    let maxPoints = -Infinity;
    let winningTeamName = null;

    // Calculate total points for home team
    let homePoints = 0;
    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    // Calculate total points for away team
    let awayPoints = 0;
    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    // Determine the winning team
    if (homePoints > awayPoints) {
        winningTeamName = game.home.teamName;
    } else {
        winningTeamName = game.away.teamName;
    }

    return winningTeamName;
}

console.log(winningTeam());

// <...===============playerWithLongestName===============...>

// This function finds and returns the player with the longest name.

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    let playerWithLongestName = null;

    // Iterate over both teams and their players
    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            for (let player in game[team].players) {
                if (player.length > longestName.length) {
                    longestName = player;
                    playerWithLongestName = player;
                }
            }
        }
    }

    return playerWithLongestName;
}

console.log(playerWithLongestName()); 

// SUPER BONUS

// <...===============doesLongNameStealATon===============...>

// This function checks if the player with the longest name had the most steals.

function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = "";
    let playerWithLongestName = null;

    // Find player with the longest name
    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            for (let player in game[team].players) {
                if (player.length > longestName.length) {
                    longestName = player;
                    playerWithLongestName = game[team].players[player];
                }
            }
        }
    }

    // Find player with the most steals
    let maxSteals = -Infinity;
    let playerWithMostSteals = null;

    for (let team in game) {
        if (game.hasOwnProperty(team)) {
            for (let player in game[team].players) {
                if (game[team].players[player].steals > maxSteals) {
                    maxSteals = game[team].players[player].steals;
                    playerWithMostSteals = game[team].players[player];
                }
            }
        }
    }

    // Compare if the player with the longest name had the most steals
    return playerWithLongestName === playerWithMostSteals;
}

console.log(doesLongNameStealATon());


