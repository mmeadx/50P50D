console.log("script.js running");

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {

        //getBoundingClientRect finds attributes of element, including top, bottom, x and y coordinates
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show');
        }
    })
}