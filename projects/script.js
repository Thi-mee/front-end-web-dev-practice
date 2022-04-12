

const computerBtn = document.getElementById('computer-button')
const friendBtn = document.getElementById('friend-button')
const nextBtn = document.getElementById('next-button')
const xBtn = document.getElementById('x-button')
const oBtn = document.getElementById('o-button')
const playBtn = document.getElementById('play-button')
const firstScreen = document.querySelector(".first-screen")
const secondScreen = document.querySelector(".second-screen")
const gameBoard = document.querySelector(".game-board")
const player = new Object
let opponent




computerBtn.addEventListener('click', () =>{
  resetButtonColor(computerBtn,friendBtn)
  switchActive(friendBtn,computerBtn)
  opponent = "Computer AI"
})
friendBtn.addEventListener('click', () =>{
  resetButtonColor(computerBtn,friendBtn)
  switchActive(computerBtn,friendBtn)
  opponent = "Friend"
})
nextBtn.addEventListener('click', () =>{
  if(!opponent){
    computerBtn.style.backgroundColor = "rgb(97, 0, 0)"
    friendBtn.style.backgroundColor = "rgb(97, 0, 0)"
    return
  }
  firstScreen.classList.remove("show")
  secondScreen.classList.add("show")
})
xBtn.addEventListener('click', () =>{
  switchActive(oBtn,xBtn)
  player.you = "X"
  if(opponent === "Computer AI")player.computer = "O"
  else if(opponent === "Friend")player.friend = "O"
})
oBtn.addEventListener('click', () =>{
  switchActive(xBtn,oBtn)
  player.you = "X"
  if(opponent === "Friend")player.computer = "X"
  else if(opponent === "Computer AI")player.friend = "X"
})
playBtn.addEventListener('click', () => {
  secondScreen.classList.remove("show")
  gameBoard.classList.add("show")
})



function switchActive(off,on){
  off.classList.remove("active")
  on.classList.add("active")
}
function resetButtonColor(x,y) {
  x.style.backgroundColor = "#18383F"
  y.style.backgroundColor = "#18383F"
}