let choix = ["Pierre", "Feuille", "Ciseaux"];
const duel = () => {

    let player1choice = choix[Math.floor(Math.random() * 2)]
    let player2choice = choix[Math.floor(Math.random() * 2)]
    console.log(player1choice)
    console.log(player2choice)
    let winner = "Le winner est "
    if (player1choice === player2choice)
        resultat = "Vous avez fait une egalité !";
    else if ((player1choice === "Pierre" && player2choice === "Ciseaux") || (player1choice === "Feuille" && player2choice === "Pierre") || (player1choice === "Ciseaux" && player2choice === "Feuille"))
        resultat = "P1 à gagné !!";
    else
        resultat = "P2 à gagné !!";
 
    return (resultat)
}

const duel2 = (p1,p2) => {

    //let player1choice = choix[Math.floor(Math.random() * 2)]
    //let player2choice = choix[Math.floor(Math.random() * 2)]
    console.log(p1)
    console.log(p2)
    let winner = "Le winner est "
    if (p1 === p2)
        resultat = null;
    else if ((p1 === "Pierre" && p2 === "Ciseaux") || (p1 === "Feuille" && p2 === "Pierre") || (p1 === "Ciseaux" && p2 === "Feuille"))
        resultat = true;
        
    else
        resultat = false;
 
    return (resultat)
}

console.log(duel())
module.exports={duel2}