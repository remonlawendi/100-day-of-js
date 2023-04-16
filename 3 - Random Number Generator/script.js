window.addEventListener('load', () => {
  const randomNum = document.querySelector('.random_number');
  const generateBtn = document.querySelector('#generate');
  generateBtn.addEventListener('click', () => {
    randomNum.textContent = Math.floor(Math.random() * 10 + 1);
  })
})
