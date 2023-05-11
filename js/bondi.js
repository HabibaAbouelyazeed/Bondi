let switcherLi = document.querySelectorAll('.our-work .switcher li');
let imgDiv = document.querySelectorAll('.our-work .projects .proj-elem');

//Our Work Switcher
switcherLi.forEach((li) => {
    li.addEventListener('click', addRemoveActive);
    li.addEventListener('click', manageImgDiv);
});




//remove active class from all and add to one 
function addRemoveActive(){
    switcherLi.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    });
};

//manage Images' Div
function manageImgDiv(){
    imgDiv.forEach((div) => {
        div.style.display = 'none';
    });

    document.querySelectorAll(this.dataset.catg).forEach((divElem) => {
        divElem.style.display = 'block';
    });
};