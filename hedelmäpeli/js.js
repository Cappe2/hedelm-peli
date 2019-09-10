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
