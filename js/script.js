const headerMenuIcon = document.querySelector('.menu-icon');
const headerMenu = document.querySelector('.menu');
    if (headerMenuIcon){
        headerMenuIcon.addEventListener("click", function(e){
            headerMenuIcon.classList.toggle('_active');
            headerMenu.classList.toggle("_active");
        });
    };