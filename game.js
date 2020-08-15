
const boundry = document.querySelector('.game-container')
const bird = document.querySelector('.bird')
const SPEED = 3
const JUMP = 100
const BLOCK_SPEED_UP = 1
const BLOCK_SPEED_DOWN = 2
let play = true
let birdFly = { y: 400 }

start()

function start() {
    createBlocks()
    window.requestAnimationFrame(playGame)
}

function playGame() {
    bound = boundry.getBoundingClientRect()
    if (birdFly.y > bound.bottom + 30) {
        // play = false
    }
    if (play) {
        birdFly.y += SPEED
        // bird.style.top = birdFly.y + "px"
        moveUpBlocks()
        moveDownBlocks()
        window.requestAnimationFrame(playGame)
    }
}

document.addEventListener("keydown", e => {
    if (e.key == "ArrowUp" && birdFly.y > JUMP) {
        birdFly.y -= JUMP
    }
});

function createBlocks() {
    for (let i = 1; i <= 4; i++) {
        let block = document.createElement('div')
        block.classList.add('block-up')
        block.x = i * 300
        block.style.left = block.x + "px"
        block.style.height = getRandomHeight() + "px"
        boundry.appendChild(block)
    }
    for (let i = 1; i <= 4; i++) {
        let block = document.createElement('div')
        block.classList.add('block-down')
        block.y = i * 400
        block.style.left = block.y + "px"
        block.style.height = getRandomHeight() + "px"
        boundry.appendChild(block)
    }
}

function moveUpBlocks() {
    let blocksUp = document.querySelectorAll('.block-up')
    blocksUp.forEach(item => {
        if (item.x < 50) {
            item.x = 1250
        }
        console.log(item.x)
        item.x -= BLOCK_SPEED_UP
        item.style.left = item.x + "px"
    })
    
}

function moveDownBlocks(){
    let blocksDown = document.querySelectorAll('.block-down')
    blocksDown.forEach(item => {
        if (item.y < -200) {
            item.y = 1300
        }
        item.y -= BLOCK_SPEED_DOWN
        item.style.left = item.y + "px"
    })
}
function getRandomHeight() {
    let height = Math.floor((Math.random() + 1) * 250)
    return height
}