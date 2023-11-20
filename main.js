'use strict';

const teamArray = [
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        img: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        position: "Chief Editor",
        img: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        position: "Office Manager",
        img: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        img: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        position: "Developer",
        img: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        img: "img/barbara-ramos-graphic-designer.jpg"
    }
];
console.log(teamArray); 

// Visualizzo tutti gli elementi dell'array in console
for(let i = 0 ; i < teamArray.length ;i++){
    for(let key in teamArray[i]){
        console.log(`${key}: ${teamArray[i][key]}`)
    }
}


const teamGrid = document.querySelector(".team-cards-grid"); //Seleziono la griglia delle cards dal DOM
console.log(teamGrid);
for( let i = 0 ; i < teamArray.length ; i++){ //per ogni elemento del mio array

    //creo il mio elemento DIV
    const teamCard = document.createElement("div"); 
    console.log(teamCard); 
    //aggiungo al mio elemento DIV la classe "team-card"
    teamCard.classList.add("team-card"); 
    console.log(teamCard);
    //creo il mio secondo elemento DIV che conterrà le informazioni testuali sotto le immagini
    const teamCardInfo = document.createElement("div"); 
    teamCardInfo.classList.add("team-info"); 
    console.log(teamCardInfo);
    //creo il mio elemento img
    const teamCardImg = document.createElement("img");
    teamCardImg.src = teamArray[i].img;
    teamCard.append(teamCardImg);
    console.log(teamCardImg);
    //creo il mio paragrafo h3
    const teamCardName = document.createElement("h3"); 
    teamCardName.append(teamArray[i].name);
    teamCardInfo.append(teamCardName); 
    console.log(teamCardName);
    //creo il mio paragrafo p
    const teamCardPosition = document.createElement("p"); 
    teamCardPosition.append(teamArray[i].position);
    teamCardInfo.append(teamCardPosition); 

    teamCard.append(teamCardInfo); //appendo tutto al mio div contenente le info testuali completando la card
    teamGrid.append(teamCard); //appendo la card 
}

