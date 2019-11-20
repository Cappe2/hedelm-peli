
let images = [ "kirsikka.png", "omena.png", "päärynä.png", "vesimeloni.png"];
let slots = [0,1,2,3];
let locks = [0,0,0,0];
let saa_lukita = false;
let rahat = 75;


const panokset = [1,2,5];
let panosIndex = 0;

//UI päivitys

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

    if (locks[0] == 1 || locks[1] == 1 || locks[2] == 1 || locks[3] == 1) 

    // muussa tapauksessa saa_lukita muutetaan trueksi
   

    locks[0] = locks[1] = 0;
    locks [2] = locks[3] = 0;

    

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

    }
        

    updateUi();


//Panoksen vaihtaminen

function asetaPanos () {
    panosIndex++;
    if (panosIndex > panokset.length-1) {
        panosIndex = 0;
    }
    
    updateUi()

}

//voiton tarkistus



