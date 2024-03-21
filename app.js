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

let team1Skill
let team2Skill
let bank = 100

let team1 = []
let team2 = []
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
  team1 = players.filter(team1 => team1.teamNumber == 1)
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
  team2 = players.filter(team2 => team2.teamNumber == 2)
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

function bet5(selectedTeam) {
  console.log("Bet 5")
  let winner = compareSkill()
  if (selectedTeam == winner) {
    bank += 5
  } else if (selectedTeam != winner) {
    bank -= 5
  }
  updateBank()
  draftPlayers()
  drawTeam1()
  drawTeam2()
  teamSkill()
}

function bet25() {
  console.log('Bet 25')
}

function bet100() {
  console.log('Bet 100')
}

function betAll() {
  console.log('Bet All')
}

function updateBank() {
  let updateBankElm = document.getElementById('bank')
  updateBankElm.innerText = bank.toString()

}

// function playerTeam1() {
//   team1 = players.filter(player => player.teamNumber == 1)
//   console.log(team1)
// }


// function playerTeam2() {
//   team2 = players.filter(player => player.teamNumber == 2)
//   console.log(team2)
// }



function teamSkill() {
  team1Skill = 0
  team2Skill = 0
  team1.forEach(player => team1Skill += player.skill)
  team2.forEach(player => team2Skill += player.skill)
  console.log(team1Skill)
}
teamSkill()

function compareSkill() {
  let winningTeam
  if (team1Skill > team2Skill) {
    winningTeam = 'Team1'
  } else if (team2Skill > team1Skill) {
    winningTeam = 'Team2'
  } else {
    winningTeam = 'None'
  }
  return winningTeam
}