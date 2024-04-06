// to set  an 'Audio' element in  HTML with id 'bgMusic'
let bgMusic = document.getElementById('bgMusic');
let isMuted = false;

document.addEventListener("keydown", function (e) {
    if (e.code === "KeyM") {
        toggleMute();
    }
});

function toggleMute() {
    if (isMuted) {
        bgMusic.play();
        isMuted = false;
    } else {
        bgMusic.pause();
        isMuted = true;
    }
}

// Play the background music after a user interaction (e.g., a click)
document.addEventListener('click', function () {
    bgMusic.play();
});



    
//board
let board;
let boardWidth = 800;
let boardHeight = 700;
let context;

//bird
let birdWidth = 80; //width/height ratio = 408/228 = 17/12
let birdHeight = 50;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImg;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}

//pipes
let pipeArray = [];
let pipeWidth = 64; //width/height ratio = 384/3072 = 1/8
let pipeHeight = 600;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -15; //pipes moving left speed
let velocityY = 10; //bird jump speed
let gravity = 0.6 ;
 
let gameOver = false;
let score = 0;
let highScore = 0;







window.onload = function() 
{
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board

    // draw flappy bird
    // context.fillStyle = "green";
    // context.fillRect(bird.x, bird.y, bird.width, bird.height);

    //load images
    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 800); //every 2 seconds
    document.addEventListener("keydown", moveBird);
}


function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //bird
    velocityY += gravity;
    // bird.y += velocityY;
    bird.y = Math.max(bird.y + velocityY, 0); //apply gravity to current bird.y, limit the bird.y to top of the canvas
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if (bird.y > board.height) {
        gameOver = true;
    }

    //pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5; //0.5 because there are 2 pipes! so 0.5*2 = 1, 1 for each set of pipes
            pipe.passed = true;
        }

        if (detectCollision(bird, pipe)) {
            gameOver = true;
        }
    }

    //clear pipes
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); //removes first element from the array
    }

  

    //score
    context.fillStyle = "red";
    context.font="25px sans-serif";
    context.fillText("Highscore:" + highScore, 5, 40); 
    context.fillText("Your score:" + score, 5, 70);
    if (gameOver) {

        context.font="18px sans-serif";
        context.fillText("Play again? Press 'spaceKey' or 'ArrowUp'", 5, 120);
        context.fillText("Press 'm' to mute or unmute,", 5, 150);

        context.font="100px sans-serif";
        context.fillText("Game Over", 5, 400);
        
   
    }


    // highscore 

    // document.getElementById("highScore").innerText = highScore;
    if (localStorage.getItem("highScore") !== null){
        highScore = parseInt(localStorage.getItem("highScore"));
    }

    if(score > highScore){
        highScore = score;
    }

    localStorage.setItem("highScore", highScore.toString());





   
}


function placePipes() {
    if (gameOver) {
        return;
    }
 
    //(0-1) * pipeHeight/2.
    // 0 -> -128 (pipeHeight/4)
    // 1 -> -128 - 256 (pipeHeight/4 - pipeHeight/2) = -3/4 pipeHeight
    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
    let openingSpace = board.height/4;

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(topPipe);

    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(bottomPipe);
}

function moveBird(e) {


    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        //jump
        velocityY = -7;

        //reset game
        if (gameOver) {
            bird.y = birdY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}



