function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  const img = document.querySelector("#profile img")

  if(html.classList.contains('ligth')) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Arthur Cristian")

  }else{
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", " Cristian")
  }


}
  /*if(html.classList.contains('ligth')) {
    html.classList.remove('ligth')
  }else{
    html.classList.add('ligth')
  }
  O trecho de codigo acima faz toda a parte de substituir a cor de fundo do meu projeto
  */
  