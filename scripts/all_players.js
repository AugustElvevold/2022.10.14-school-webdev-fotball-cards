import getPlayers from './players.js'

var players;

// Sets players from players.js, or from localstorage if there is any existing
if(localStorage.hasOwnProperty("player")){
    players = JSON.parse(localStorage.getItem("player"));
}else{
    players = getPlayers()
    localStorage.setItem("player", JSON.stringify(players))
}

// Adds a new Property, "age", to each player
// Age is calculated based on birthdate and date when page is loaded (today), and saved as years since birth
const addAgeToPlayers=()=>{
    let today = new Date();
    players.forEach((player)=>{
        let birthDate = new Date(player.birthdate)
        player.age = new Date(today-birthDate).getFullYear()-1970
    })
}

// Formats date to display it like: '1.januar 1970'
const reformatDate=()=>{
    players.forEach((player)=>{
        let birthdate = new Date(player.birthdate);
        const format = {day: 'numeric', month: 'long', year: 'numeric'}
        player.birthdateFormated = birthdate.toLocaleDateString(undefined, format)
    })
}

const allPlayers =()=>{
    addAgeToPlayers();
    reformatDate();
    return(players)
}

export default allPlayers