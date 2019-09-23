//Lukituspainikkeen kuvan vaihto
function lukitse(elem) {
console.log(elem);
if (elem.dataset.lock == 'false')  {
    document.getElementById(elem.id).src ="./kuvat/lukko2.png";
    elem.dataset.lock = "true";
}
else {
    document.getElementById(elem.id).src = "./kuvat/lukko1.png"
    elem.dataset.lock = "false";
    }
}

//Panoksen vaihtaminen


const panokset = [1,2,5];
let index = -1;

function asetaPanos () {
    index++;
    if (index > panokset.length-1) {
        index = 0;
    }
    document.getElementById("panos").innerHTML = panokset[index];

}

function update(){
    asetaPanos();
}