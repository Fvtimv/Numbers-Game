// isolons l'algorithme ce qu'on a fait en dessous***** dans une fonction dès maintenant 
// La fonction elle-même a été nommée dans le même esprit, pour décrire au mieux sa 
// procédure (elle mélange les enfants d'un élément parent donné, rien d'autre). La fonction 
// est placée en début de code par convention
function shuffleChildren(parent){
    let children = parent.children;
    let i = children.lenght, k , temp;
    while(--i > 0){
        k = Math.floor(Math.random() * (i+1))
        temp = children[k];
        children[k] = children[i];
        parent.appendChild(temp);
    }
}


// En appelant la méthode createElement() de l'objet document, un nouvel objet 
// HTMLElement est instancié, qui sera représenté par la balise spécifiée en argument de 
// cette méthode (ici, "div") . Nous la stockons dans une constante
const box = document.createElement("div");

// Ensuite, nous modifions sa propriété classList (contenant la liste des classes CSS attribuées 
// à l'élément) pour lui ajouter la classe .box (appel de la méthode add() de classList)
box.classList.add("box");


// A ce moment, un élément du DOM nouveau (<div class="box"></div>) est instancié en 
// mémoire mais non-présent sur la page. Il faut, pour cela, lui faire une place dans le 
// DOM Tree. Nous allons le placer en enfant de la div#board en utilisant la méthode 
// appendChild()2 de l'objet document :
const board = document.querySelector("#board");

// Nous effectuons une boucle for, de 1 à 10 (vous pouvez changer ce nombre à votre 
// convenance), pour générer autant de boites à l'écran
for(let i = 1; i <= 10; i++){
    // La particularité ici est qu'il faille créer une nouvelle variable 
    // (let newbox) qui aura pour valeur non pas l'élément box mais une 
    // copie, un clone de celui-ci grâce à la méthode cloneNode().
    let newbox = box.cloneNode();
    // La boite ne comporte pas de numéro, ajoutons-le en écrivant à l'intérieur de l'élément un 
    // nœud de texte :
    newbox.innerText = i;
    board.appendChild(newbox);  //appendChild() est une méthode qui place un élément du DOM à la fin du contenu de l'élément visé. 

    //Pour associer un évènement, JavaScript fournit une méthode appelée "addEventListener"
    // à tout élément du DOM. Le principe est d'ajouter un écouteur d'évènement4
    // sur l'élément, celui-ci exécutera une fonction callback dès lors que cet évènement 
    // survient sur l'élément. 
    // nous plaçons l'appel à addEventListener à l'intérieur de la boucle, ce qui 
    // permet de ne pas avoir à effectuer une autre boucle sur toutes les boites pour leur 
    // adjoindre l'évènement
    newbox.addEventListener("click", function(){
        console.log("Boite n°" + i + "click !")
    })

}

shuffleChildren(board);











// *****This was before it was put on the function shuffleChildren
// let i = board.children.length, k , temp
// while(--i > 0){ //on boucle tant que 1 oté de i est toujours positif
//     //k stocke un nombre aléatoire basé sur i
//     k = Math.floor(Math.random() * (i+1))
//     //temp pointe temporairement l'élément à la position k dans board
//     temp = board.children[k]
//     //remplace l'élément à la position k par l'élément à la position i
//     board.children[k] = board.children[i]
//     //place l'élément k pointé temporairement à la fin du contenu de board
//     board.appendChild(temp)
// }
