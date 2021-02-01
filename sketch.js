var ball,position,database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,50,50);
    ball.shapeColor = "purple";
    database=firebase.database();

    database.ref('ball/position').on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x: position.x+x, y: position.y+y
    })
}
function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function showError(){
    console.log("error")
}
