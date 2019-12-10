
let images = [ "kirsikka.png", "omena.png", "päärynä.png", "vesimeloni.png"];
let slots = [0,1,2,3];
let locks = [0,0,0,0];
let saa_lukita = false;
let rahat = 75;


const panokset = [1,2,5];
let panosIndex = 0;

var span = document.getElementsByClassName("close")[0];

function showModal(elemId){
    document.getElementById(elemId).style.display = "block";
    captionTeksti.innerHTML = this.alt;
}

window.onclick = function(event){
    
    let modaali = event.target;
    if (modaali.id == "myModal") {
        modaali.style.display = "none";
    }
    
}

//UI päivitys
tarkistaVoitto();
function updateUi(){

    document.getElementById("rahat").innerHTML = rahat;

    // Panos
    document.getElementById("panos").innerHTML = panokset[panosIndex];
    

    // Slottien kuvat
    document.getElementById('s1').src = "kuvat/" + images[slots[0]];
    document.getElementById('s2').src = "kuvat/" + images[slots[1]];
    document.getElementById('s3').src = "kuvat/" + images[slots[2]];
    document.getElementById('s4').src = "kuvat/" + images[slots[3]];
 
    // Lukkojen kuvat
    if (locks[0] == 0) {
        document.getElementById("btn-lock1").src = "./kuvat/lukko1.png"
    } else {
        document.getElementById("btn-lock1").src = "./kuvat/lukko2.png"
    }

    if (locks[1] == 0) {
        document.getElementById("btn-lock2").src = "./kuvat/lukko1.png"  
    } else {
        document.getElementById("btn-lock2").src = "./kuvat/lukko2.png"
    }
    if (locks[2] == 0) {
        document.getElementById("btn-lock3").src = "./kuvat/lukko1.png"
    } else {
        document.getElementById("btn-lock3").src = "./kuvat/lukko2.png"
    }
    if (locks[3] == 0) {
        document.getElementById("btn-lock4").src = "./kuvat/lukko1.png"
    } else {
        document.getElementById("btn-lock4").src = "./kuvat/lukko2.png"
    }

}

//Play nappulan toiminta
function play(){

    rahat = rahat - panokset[panosIndex]

    if (rahat < panokset[panosIndex]){
        alert("Hävisit!")
        location.reload();
    }
    
    if (locks[0] == 0) {
        slots[0] = Math.floor(Math.random() * 4);
    }    
    if (locks[1] == 0) {
        slots[1] = Math.floor(Math.random() * 4);
    }
    if (locks[2] == 0) {
        slots[2] = Math.floor(Math.random() * 4);
    }
    if (locks[3] == 0) {
        slots[3] = Math.floor(Math.random() * 4);
    }
    

    


    // Jos joku lukoista on lukittu, niin saa_lukita muutetaan falseksi

    if (locks[0] == 1 || locks[1] == 1 || locks[2] == 1 || locks[3] == 1) {
        saa_lukita = false;
    } else {
        saa_lukita = true;
    }

    // muussa tapauksessa saa_lukita muutetaan trueksi
   

    locks[0] = locks[1] = 0;
    locks [2] = locks[3] = 0;

    

    updateUi();
    
    tarkistaVoitto();

}

function tarkistaVoitto(){

    if (slots[0] == slots[1] && slots[1] == slots[2] && slots[2] == slots[3]) {
        rahat = rahat + 10;
        showModal('myModal');
        saa_lukita = false;
    }  
    else if (slots[0] == 0 && slots[1] == 0 && slots[2] == 0 && slots[3] == 0) {
        rahat = rahat + 1;
        showModal('myModal');
        saa_lukita = false;
    }  

    else if (slots[0] == 1 && slots[1] == 1 && slots[2] == 1 && slots[3] == 0){
        rahat = rahat + 3;
        showModal('myModal');
        saa_lukita = false;
    }
    else if (slots[0] == 2 && slots[1] == 2 && slots[2] == 2 && slots[3] == 2){
        rahat = rahat + 6;
        showModal('myModal');
        saa_lukita = false;
    }
    else if (slots[0] == 3 && slots[1] == 3 && slots[2] == 3 && slots[3] == 3){
        rahat = rahat + 10;
        showModal('myModal');
        saa_lukita = false;
    }
 
    updateUi();

}

//Lukituspainikkeen kuvan vaihto

function lukitse(elem) {
    console.log(elem.dataset.lock);
    
    if (saa_lukita == false) {
        return;
    }

    if (locks[elem.dataset.lock] == 0) {

        locks[elem.dataset.lock] = 1;
   
    } else {
        locks[elem.dataset.lock] = 0


    }

    updateUi();
}


//Panoksen vaihtaminen

function asetaPanos () {
    panosIndex++;
    if (panosIndex > panokset.length-1) {
        panosIndex = 0;
    }
    
    updateUi()
}     

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}