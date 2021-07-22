$(() => {
  // when user clicks menu button during the game
  $('.nav-left button').on('click', (event) => {
    $('.modal').fadeIn();
  })

  // when user clicks resume button
  $('.menu-resume-button').on('click', (event) => {
    $('.modal').fadeOut();
    $('.main-content').css('visibility', 'visible')
  })

  // when user clicks new game button
  $('.menu-new-game-button').on('click', (event) => {
    $('.menu-container').fadeOut()
    $('.new-game-board').css('display', 'flex').fadeIn()
  })

  $('.new-game-board-start').on('click', (event) => {
    $('.new-game-board').fadeOut();
    $('.menu-container').fadeIn();
    $('.modal').fadeOut();
    $('.main-content').css('visibility', 'visible').fadeIn();
  })
})