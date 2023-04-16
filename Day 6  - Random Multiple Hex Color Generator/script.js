window.addEventListener("load", function(){
  const colorgenerator = document.querySelector(".action");
  const pallet = document.querySelectorAll(".pallet");
  colorgenerator.addEventListener("click", function(){

    pallet.forEach(pallet => {
      // pallet.style.backgroundColor = `rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")`;
      pallet.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8)    });
  
    })
  })
