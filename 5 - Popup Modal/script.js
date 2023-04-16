let modal = document.querySelector('.modal_'),
    modalFire = document.querySelector('.popup_fire'),
    modalClose = document.querySelector('.close');
    console.log(modal,modalFire,modalClose);


    modalFire.addEventListener('click', function(){

      modal.style.display = "flex";
    })
    modalClose.addEventListener('click', function(){

      modal.style.display = "none";
    })
