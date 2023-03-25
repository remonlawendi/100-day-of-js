window.addEventListener('load', () => {
  const color = document.querySelector('.generated-color')
  const btn_generate = document.querySelector('.generate')
  const colorGenerator = () => {
    const randomColor = Math.random().toString(16).substring(2, 8)
    document.body.style.backgroundColor = `#${randomColor}`
    color.innerHTML = ` #${randomColor} `
  }
  btn_generate.addEventListener('click', () => {
    colorGenerator()
  })
})