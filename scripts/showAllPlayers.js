import getAllPlayers from './all_players.js'

const output = document.getElementById("player-cards-output");

const allPlayers = getAllPlayers();

const printAllPlayers=(playersArray)=>{
    let htmlText = ""

    playersArray.forEach(player=>{
        htmlText += `
            <li id="${player.id}" class="card mx-auto">
                <h3 class="text-center">${player.firstname} ${player.lastname}</h3>
                <img src="${player.imgSrc}" alt="player image">
                <p >Team: ${player.team}</p>
                <p>Born: ${player.birthdateFormated} (age ${player.age})</p>
                <p>Height: ${player.height} cm</p>
                <p>Weight: ${player.weight} kg</p>
            </li>
        `
    })
    output.innerHTML = htmlText;
}
(()=>{
    printAllPlayers(allPlayers);
})();