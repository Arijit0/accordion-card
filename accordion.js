const accItem = document.getElementsByClassName('accordion-item');
const accbutton = document.getElementsByClassName('accordion-heading');

for (i = 0; i < accbutton.length; i++) {
    accbutton[i].addEventListener('click', toggleItem)
}

function toggleItem() {
    let accItemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion-item close';
    }
    if (accItemClass == 'accordion-item close') {
        this.parentNode.className = 'accordion-item open';
    }
}

console.log('test');