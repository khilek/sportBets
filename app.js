let bank = 100

const players = [
  {
    name: "D'Marcus Williums",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyroil Smoochie-Wallace",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jackmerius Tacktheratrix",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Javaris Jamar Javarison-Lamar",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "D'Pez Poopsie",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "D'Jasper Probincrux III",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leoz Maxwell Jilliumz",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Hingle McCringleberry",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "L'Carpetron Dookmarriot",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xmus Jaxon Flaxon-Waxon",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggitariutt Jefferspin",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quatro Quatro",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing @Aliciousness",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Bisquiteen Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Scoish Velociraptor Maloish",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Donkey Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J. A.J. R.J. Backslashinfourth V",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Firstname Lastname",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🧍‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]

// select teams at random
// draw players to the players field on HTML

function draftPlayers() {
  console.log('Players')
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    player.teamNumber = (Math.round(Math.random())) + 1
    console.log('Players Name', player)
  }
}

draftPlayers()


function drawTeam1() {
  let team1 = players.filter(team1 => team1.teamNumber == 1)
  console.log('Team 1', team1)
  let playerHTML = ''
  for (let i = 0; i < team1.length; i++) {
    let player = players[i]
    playerHTML += `${player.emoji}`
    console.log(playerHTML)
    const team1Elm = document.getElementById('team-1')
    team1Elm.innerHTML = playerHTML
  }
}

drawTeam1()

function drawTeam2() {
  let team2 = players.filter(team2 => team2.teamNumber == 2)
  console.log('Team 2', team2)
  let playerHTML = ''
  for (let i = 0; i < team2.length; i++) {
    let player = players[i]
    playerHTML += `${player.emoji}`
    console.log(playerHTML)
    const team2Elm = document.getElementById('team-2')
    team2Elm.innerHTML = playerHTML
  }
}

drawTeam2()

