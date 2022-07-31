/* couleur bleu sur les touches */

const btnLight = document.querySelector('.btn-light');
const body = document.querySelector('body');

btnLight.addEventListener('click', () => {

    
    body.classList.toggle('flash');
    

})

// mettre le curseur sur text area à l'ouverture de la page

window.onload = document.querySelector('.write').focus();


/* animation pour chaque touche du clavier */

// first line
const indexA = document.querySelector('.indexA');
const indexZ = document.querySelector('.indexZ');
const indexE = document.querySelector('.indexE');
const indexR = document.querySelector('.indexR');
const indexT = document.querySelector('.indexT');
const indexY = document.querySelector('.indexY');
const indexU = document.querySelector('.indexU');
const indexI = document.querySelector('.indexI');
const indexO = document.querySelector('.indexO');
const indexP = document.querySelector('.indexP');
// second line
const indexQ = document.querySelector('.indexQ');
const indexS = document.querySelector('.indexS');
const indexD = document.querySelector('.indexD');
const indexF = document.querySelector('.indexF');
const indexG = document.querySelector('.indexG');
const indexH = document.querySelector('.indexH');
const indexJ = document.querySelector('.indexJ');
const indexK = document.querySelector('.indexK');
const indexL = document.querySelector('.indexL');
const indexM = document.querySelector('.indexM');
// third line
const indexW = document.querySelector('.indexW');
const indexX = document.querySelector('.indexX');
const indexC = document.querySelector('.indexC');
const indexV = document.querySelector('.indexV');
const indexB = document.querySelector('.indexB');
const indexN = document.querySelector('.indexN');
const indexVirgule = document.querySelector('.indexVirgule');
const indexPoint = document.querySelector('.indexPoint');
const indexDeuxPoint = document.querySelector('.indexDeuxPoint');
const indexExclam = document.querySelector('.indexExclam');
// fourth line
const indexCtrl = document.querySelector('.indexCtrl');
const indexAlt = document.querySelector('.indexAlt');
const indexSpace = document.querySelector('.indexSpace');
const indexSupp = document.querySelector('.indexSupp');


const write = document.querySelector('.write');

 // touche a

document.onkeydown = function(e) {

    // first line

    if (e.key == "a") {
        indexA.style.transform = "translateY(15px)";
    } 

    if (e.key == "z") {
        indexZ.style.transform = "translateY(15px)"; 
    } 

    if (e.key == "e") {
        indexE.style.transform = "translateY(15px)";  
    } 

    if (e.key == "r") {
        indexR.style.transform = "translateY(15px)";  
    } 

    if (e.key == "t") {
        indexT.style.transform = "translateY(15px)";  
    } 

    if (e.key == "y") {
        indexY.style.transform = "translateY(15px)";  
    } 

    if (e.key == "u") {
        indexU.style.transform = "translateY(15px)";  
    } 

    if (e.key == "i") {
        indexI.style.transform = "translateY(15px)";  
    } 

    if (e.key == "o") {
        indexO.style.transform = "translateY(15px)";  
    } 

    if (e.key == "p") {
        indexP.style.transform = "translateY(15px)";  
    } 
       
    // second line

    if (e.key == "q") {
        indexQ.style.transform = "translateY(15px)";  
    } 

    if (e.key == "s") {
        indexS.style.transform = "translateY(15px)";  
    } 

    if (e.key == "d") {
        indexD.style.transform = "translateY(15px)";  
    } 

    if (e.key == "f") {
        indexF.style.transform = "translateY(15px)";  
    } 

    if (e.key == "g") {
        indexG.style.transform = "translateY(15px)";  
    } 

    if (e.key == "h") {
        indexH.style.transform = "translateY(15px)";  
    } 

    if (e.key == "j") {
        indexJ.style.transform = "translateY(15px)";  
    } 

    if (e.key == "k") {
        indexK.style.transform = "translateY(15px)";  
    } 

    if (e.key == "l") {
        indexL.style.transform = "translateY(15px)";  
    } 

    if (e.key == "m") {
        indexM.style.transform = "translateY(15px)";  
    } 

    // third line

    if (e.key == "w") {
        indexW.style.transform = "translateY(15px)";  
    } 

    if (e.key == "x") {
        indexX.style.transform = "translateY(15px)";  
    } 

    if (e.key == "c") {
        indexC.style.transform = "translateY(15px)";  
    } 

    if (e.key == "v") {
        indexV.style.transform = "translateY(15px)";  
    } 

    if (e.key == "b") {
        indexB.style.transform = "translateY(15px)";  
    } 

    if (e.key == "n") {
        indexN.style.transform = "translateY(15px)";  
    } 

    if (e.keyCode == "188") {
        indexVirgule.style.transform = "translateY(15px)";  
    } 

    if (e.keyCode == "190") {
        indexPoint.style.transform = "translateY(15px)";  
    } 

    if (e.keyCode == "191") {
        indexDeuxPoint.style.transform = "translateY(15px)";  
    } 

    if (e.keyCode == "223") {
        indexExclam.style.transform = "translateY(15px)";  
    } 

    // fourth line

    if (e.ctrlKey == true) {
        indexCtrl.style.transform = "translateY(15px)";  
    } 

    if (e.keyCode == "18") {
        e.preventDefault();
        indexAlt.style.transform = "translateY(15px)";  
    } 

    if (e.keyCode == "32") {
        indexSpace.style.transform = "translateY(15px)";  
    } 

    if (e.keyCode == "8") {
        indexSupp.style.transform = "translateY(15px)";  
    } 



    document.onkeyup = function(e) {

    // first line

        if (e.key == "a") {
            indexA.style.transform = "translateY(0px)";
            
        } 

        if (e.key == "z") {
            indexZ.style.transform = "translateY(0px)";  
        } 

        if (e.key == "e") {
            indexE.style.transform = "translateY(0px)";  
        } 
    
        if (e.key == "r") {
            indexR.style.transform = "translateY(0px)";  
        } 
    
        if (e.key == "t") {
            indexT.style.transform = "translateY(0px)";  
        } 
    
        if (e.key == "y") {
            indexY.style.transform = "translateY(0px)";  
        } 
    
        if (e.key == "u") {
            indexU.style.transform = "translateY(0px)";  
        } 
    
        if (e.key == "i") {
            indexI.style.transform = "translateY(0px)";  
        } 
    
        if (e.key == "o") {
            indexO.style.transform = "translateY(0px)";  
        } 
    
        if (e.key == "p") {
            indexP.style.transform = "translateY(0px)";  
        } 

    // second line

    if (e.key == "q") {
        indexQ.style.transform = "translateY(0px)";  
    } 

    if (e.key == "s") {
        indexS.style.transform = "translateY(0px)";  
    } 

    if (e.key == "d") {
        indexD.style.transform = "translateY(0px)";  
    } 

    if (e.key == "f") {
        indexF.style.transform = "translateY(0px)";  
    } 

    if (e.key == "g") {
        indexG.style.transform = "translateY(0px)";  
    } 

    if (e.key == "h") {
        indexH.style.transform = "translateY(0px)"; 
    } 

    if (e.key == "j") {
        indexJ.style.transform = "translateY(0px)";  
    } 

    if (e.key == "k") {
        indexK.style.transform = "translateY(0px)";  
    } 

    if (e.key == "l") {
        indexL.style.transform = "translateY(0px)";  
    } 

    if (e.key == "m") {
        indexM.style.transform = "translateY(0px)";  
    } 

    // third line

    if (e.key == "w") {
        indexW.style.transform = "translateY(0px)";  
    } 

    if (e.key == "x") {
        indexX.style.transform = "translateY(0px)";  
    } 

    if (e.key == "c") {
        indexC.style.transform = "translateY(0px)";  
    } 

    if (e.key == "v") {
        indexV.style.transform = "translateY(0px)";  
    } 

    if (e.key == "b") {
        indexB.style.transform = "translateY(0px)";  
    } 

    if (e.key == "n") {
        indexN.style.transform = "translateY(0px)"; 
    } 

    if (e.keyCode == "188") {
        indexVirgule.style.transform = "translateY(0px)";  
    } 

    if (e.keyCode == "190") {
        indexPoint.style.transform = "translateY(0px)";  
    } 

    if (e.keyCode == "191") {
        indexDeuxPoint.style.transform = "translateY(0px)";  
    } 

    if (e.keyCode == "223") {
        indexExclam.style.transform = "translateY(0px)";  
    } 

    // fourth line

    if (e.ctrlKey == false) {
        indexCtrl.style.transform = "translateY(0px)";  
    } 

    if (e.keyCode == "18") {
        indexAlt.style.transform = "translateY(0px)";  
    } 

    if (e.keyCode == "32") {
        indexSpace.style.transform = "translateY(0px)";  
    } 

    if (e.keyCode == "8") {
        indexSupp.style.transform = "translateY(0px)";  
    } 

}}


