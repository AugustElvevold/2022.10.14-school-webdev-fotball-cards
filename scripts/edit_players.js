import getAllPlayers from './all_players.js'

const allPlayers = getAllPlayers();

const output = document.getElementById("player-cards-output");
const editPlayerPopupMenu = document.getElementById("edit-card-overlay");

const lastId = getAllPlayers().at(-1).id;
const nextId = parseInt(lastId) + 1;

var firstname;
var lastname;
var imgSrc;
var team;
var birthdate;
var height;
var weight;

const getValues = ()=>{    
    firstname = document.getElementById("player-firstname").value;
    lastname = document.getElementById("player-lastname").value;
    imgSrc = document.getElementById("player-imgSrc").value;
    team = document.getElementById("player-team").value;
    birthdate = document.getElementById("player-born").value;
    height = document.getElementById("player-height").value;
    weight = document.getElementById("player-weight").value;
}

const validInputs = ()=>{
    getValues();
    if(
        firstname.length > 0 &&
        lastname.length > 0 &&
        imgSrc.length > 0 &&
        team.length > 0 &&
        birthdate.length > 0 &&
        height.length > 0 &&
        weight.length > 0 
        ){
        return true
    }
    return false
}

const markEmptyFields = ()=>{
    let inputs = document.querySelectorAll(".text-input")
    inputs.forEach((elem)=>{
        if(elem.value == ""){
            elem.classList.add("missing-input")
        }else{
            elem.classList.remove("missing-input")
        }
    })
}

const newPlayerObject =(id)=>{
    return({
        id: id,
        firstname: firstname,
        lastname: lastname,
        imgSrc: imgSrc,
        team: team,
        birthdate: birthdate,
        height: height,
        weight: weight
    })
}

const addToLocalStorage = ()=>{
    if(validInputs()){
        const userAddedPlayer = [newPlayerObject(nextId)];
        const localStoredPlayers = JSON.parse(localStorage.getItem("player"))
        const addPlayers = [...localStoredPlayers,...userAddedPlayer]

        localStorage.setItem("player", JSON.stringify(addPlayers))
        alert(`Added ${firstname} ${lastname}`)
        location.reload();
    }else{
        alert("Fill in missing fields")
        markEmptyFields();
    }
}

const updateLocalStorage = (id)=>{
    if(validInputs()){
        const userUpdatedPlayer = newPlayerObject(id);
        const localStoredPlayers = JSON.parse(localStorage.getItem("player"))
        const updatedPlayers = localStoredPlayers.map(obj => {
            if(obj.id == id){
                return userUpdatedPlayer
            }
            return obj
        })
        localStorage.setItem("player", JSON.stringify(updatedPlayers))
        editPlayerPopupMenu.innerHTML = '';        
        sessionStorage.reloadAfterPageLoad = true;
        location.reload();
    }else{
        alert("Fill in missing fields")
        markEmptyFields();
    }
}

const deleteFromLocalStorage = (id)=>{
    const localStoredPlayers = JSON.parse(localStorage.getItem("player"))
    const updatedPlayers = localStoredPlayers.filter(obj => {
        return obj.id != id
    })
    localStorage.setItem("player", JSON.stringify(updatedPlayers))
    editPlayerPopupMenu.innerHTML = '';
    sessionStorage.reloadAfterPageLoad = true;
    location.reload();
}

const currentPage=()=>{
    const currentPage = document.querySelectorAll('.currentPage');
    return currentPage[0].dataset.edit
}

const showPlayers=(editType)=>{
    let htmlText = ""
    allPlayers.forEach(player=>{
        htmlText += `
            <li id="player-${player.id}" class="card">
                <input data-type="${editType}" data-card-id="${player.id}" type="button" class="button--${editType} button--editcard" value="${editType}"></input>
                <h3 class="text-center">${player.firstname} ${player.lastname}</h3>
                <img src="${player.imgSrc}" alt="player image">
                <p>Team: ${player.team}</p>
                <p>Born: ${player.birthdateFormated} (age ${player.age})</p>
                <p>Height: ${player.height} cm</p>
                <p>Weight: ${player.weight} kg</p>
            </li>
        `
    })
    output.innerHTML = htmlText;
}

const showMenuDeletePlayer=(playerId)=>{
    let player = allPlayers.find(player=>(player.id == playerId))
    editPlayerPopupMenu.innerHTML = `
        <div id="edit-card-overlay-background" class="overlay-menu">
            <div class="card card--edit-player text-center color-backgound">
                <h3>Are you sure you want to delete "${player.firstname} ${player.lastname}"?</h3>
                <div class="flex-center">
                    <div class="card">
                        <h3 class="text-center">${player.firstname} ${player.lastname}</h3>
                        <img src="${player.imgSrc}" alt="player image">
                        <p >Team: ${player.team}</p>
                        <p>Born: ${player.birthdateFormated} (age ${player.age})</p>
                        <p>Height: ${player.height} cm</p>
                        <p>Weight: ${player.weight} kg</p>
                    </div>
                </div>
                <input id="submit-player-delete" data-id="${playerId}" type="button" class="display-flex-center h5 button--Delete" value="Delete"></input>
            </div>
        </div>              
    `;
}

const showMenuUpdatePlayer=(playerId)=>{
    let player = allPlayers.find(player=>(player.id == playerId))
    editPlayerPopupMenu.innerHTML = `
        <div id="edit-card-overlay-background" class="overlay-menu">
            <div class="card card--edit-player">
                <p>
                    <label for="player-firstname">Firstname: </label>
                    <input id="player-firstname" class="text-input" type="text" value="${player.firstname}"></input>
                </p>
                <p>
                    <label for="player-lastname">Lastname: </label>
                    <input id="player-lastname" class="text-input" type="text" value="${player.lastname}"></input>
                </p>
                <p>
                    <label for="player-imgSrc">Select image: </label>
                    <select id="player-imgSrc" name="Image source">
                        <option  value="${player.imgSrc}">Original</option>
                        <option value="images/no-image.png">None</option>
                        <option value="images/Abedi-Pele.webp">Abedi Pele</option>
                        <option value="images/Didier-Drogba.jpeg">Didier Drogba</option>
                        <option value="images/Michel-Essien.jpeg">Michel Essien</option>
                        <option value="images/Nwankwo-Kanu.jpeg">Nwankwo Kanu</option>
                        <option value="images/Riyad-Mahrez.jpeg">Riyad Mahrez</option>
                        <option value="images/Roger-Milla.jpeg">Roger Milla</option>
                        <option value="images/Sadio-Mané.png">Sadio Mané</option>
                        <option value="images/Samuel-Eto'o.jpeg">Samuel Eto'o</option>
                        <option value="images/Yaya-Touré.jpeg">Yaya Touré</option>
                        <option value="images/Joker.jpeg">Joker</option>
                    </select>
                </p>
                <img id="img-preview" src="${player.imgSrc}" alt="insert image">
                <p>
                    <label>Team: </label> 
                    <input id="player-team" class="text-input" type="text" value="${player.team}">
                </p>
                <p>
                    <label>Born:  </label> 
                    <input id="player-born" class="text-input" type="date" value="${player.birthdate}">
                </p>
                <p>
                    <label>Height (cm):  </label> 
                    <input id="player-height" class="text-input" type="number" value="${player.height}">
                </p>
                <p>
                    <label>Weight (kg):  </label> 
                    <input id="player-weight" class="text-input" type="number" value="${player.weight}">
                </p>
                <input id="submit-player-update" data-id="${playerId}" type="button" class="display-flex-center h5" value="Update"></input>
                
            </div>
        </div>
    `;
}

(()=>{
    // Quick workaround is checking if page has output element. So I can use this page on multiple pages. Will fix on exam
    if(output){
        showPlayers(currentPage());
    }
})();


window.addEventListener('click', (e)=>{
    // If clicked element has an id datatag, a popupwindow will be written with the data from the coresponding player id
    if(e.target.dataset.cardId){
        if(e.target.dataset.type == 'Update'){
            showMenuUpdatePlayer(e.target.dataset.cardId)
        }
        if(e.target.dataset.type == 'Delete'){
            showMenuDeletePlayer(e.target.dataset.cardId)
        }
    }
    // Activates add, update, delete in the various menus. Also closes popumenu if user clicks anywhere outside menu
    switch(e.target.id){
        case 'submit-new-player':
            addToLocalStorage();
            break;
        case 'submit-player-update':
            updateLocalStorage(e.target.dataset.id);
            break;
        case 'submit-player-delete':
            deleteFromLocalStorage(e.target.dataset.id);
            break;
        case 'edit-card-overlay-background':
            editPlayerPopupMenu.innerHTML = '';
            break;
    }
})

// Updates preview image in add and update user menus
window.addEventListener('change', (e)=>{
    if(e.target.id == 'player-imgSrc'){
        document.getElementById("img-preview").src = e.target.value
    }
})
