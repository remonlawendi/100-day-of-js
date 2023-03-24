window.addEventListener('load', () => {
  const count = document.querySelector('.count')
  const buttons = document.querySelector('.counter-btn-actions')
  buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains("add")) {
      count.innerHTML++
      style()
    }
    else if (e.target.classList.contains("sub")) {
      count.innerHTML--
      style()
    }
    else {
      count.innerHTML = 0
      style()
    }

  })

  function style() {
    if (count.innerHTML < 0) {
      count.style.color = 'red'
    }
    else (
      count.style.color = '#fff'
    )
  }
})
