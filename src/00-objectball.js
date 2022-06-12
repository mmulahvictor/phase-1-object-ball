function gameObject(){
return {
    home: {
        teamName: "Brooklyne Nets",
        colors: ['Black', 'White'],
        players: {
            'Alan Anderson':{
                number: 0,
                points: 16,
                shoe: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            'Reggie Evans':{
                number: 30,
                points: 14,
                shoe: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            'Brook Lopez':{
                number: 11,
                points: 17,
                shoe: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
            },
            'Mason Plumlee':{
                number: 1,
                points: 19,
                shoe: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
            },
            'Jason Terry':{
                number: 31,
                points: 15,
                shoe: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
            },
        },
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien':{
                number: 4,
                points: 18,
                shoe: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            'Bismak Biyombo':{
                number: 0,
                points: 16,
                shoe: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            'DeSagna Diop':{
                number: 2,
                points: 14,
                shoe: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            'Ben Gordon':{
                number: 8,
                points: 15,
                shoe: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            'Brendan Haywood':{
                number: 33,
                points: 15,
                shoe: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            },
        },
    },
}
}
function numPointsScored(playerInput){
    const game = gameObject()
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;

    const players = Object.assign({}, homePlayers, awayPlayers)

    for(const playerName in players){
        if (playerName === playerInput){
            return players[playerName].points;
        }
    }
}

numPointsScored('DeSagna Diop');