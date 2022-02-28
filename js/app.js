const allPlayer =() =>{
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showPlayerDetails(data.player));
    // console.log(data)
}

const showPlayerDetails = players => {
    const parent =document.getElementById('player-container')
    for (const player of players) {
        const div = document.createElement('div')
    div.innerHTML =`
    <div class="card border p-5 mb-3">
                    <div class="pro-pic">
                        <img class="img-fluid" src="${player.strThumb}" alt="">
                    </div>
                    <h2>Name: ${player.strPlayer}</h2>
                    <h5>Country: ${player.strNationality}</h5>
                    <p></p>
                    <div class="allbutton">
                        <button class="btn btn-danger">Delete</button>
                        <button onclick="details(${player.idPlayer})" class="btn btn-success">Details</button>
                    </div>
                </div>
    `
    parent.append(div)
    // console.log(player)
    }
}

const details= (id) =>{
    // console.log(info)
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>setDetails(data.players[0]))
}

const setDetails =(info) =>{
    console.log(info.strThumb)
    if(info.strGender == 'Male') {
        document.getElementById('male').style.display= 'block';
        document.getElementById('female').style.display= 'none';
    }
    else{
        document.getElementById('male').style.display= 'none';
        document.getElementById('female').style.display= 'block';
    }
    document.getElementById('details-container').innerHTML =`
    <div>
    <img class="img-fluid" src="${info.strThumb}" alt="">
    <h1>Name: ${info.strPlayer}</h1>
    `
}