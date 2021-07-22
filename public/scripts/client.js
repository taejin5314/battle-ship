$(() => {
  $('.menu-resume-button').on('click', (event) => {
    $('.modal').fadeOut();
  })

  $('.menu-new-game-button').on('click', (event) => {
    $('.menu-container').fadeOut()
    $('.new-game-board').css('display', 'flex').fadeIn()
  })
})