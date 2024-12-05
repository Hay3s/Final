// Variables
let circleSize, PosX, PosY;
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];  // Array 
let textHeight = 24;  
let textX, textWidthValue, textY;

function setup() {
  createCanvas(600, 600);
  background(0, 0, 0);  

  circleSize = width - 300;  
  PosX = width / 10;  
  PosY = height / 2;  
  
  textX = width - 10;  
  textY = 10; 
  textWidthValue = textWidth('Andrew Chanover'); 

}


//function
function draw() {

  //loop
  for (let i = 0; i < 10; i++) {  
    let circleColor;
    
    let xOffset = i * (circleSize / 3);  
   
    let d = dist(mouseX, mouseY, PosX + xOffset, PosY);

   //condtional 
    if (d < circleSize / 2) {
      let randomIndex = floor(random(colors.length));  
      
      circleColor = colors[randomIndex];  
      
    } else {
      circleColor = color('white');  
    }

    
    fill(circleColor);
    noStroke();
    circle(PosX + xOffset, PosY, circleSize);  
  }
  
  
  
  let textcolor; 

if (mouseX > textX - textWidthValue && mouseX < textX && mouseY > textY && mouseY < textY + textHeight) {
   
    let randomIndex = floor(random(colors.length)); 
    textcolor = colors[randomIndex];  
  } else {
   
    textcolor = color('white');  
  }

  
  fill(textcolor);
  textSize(24);  
  textAlign(RIGHT, TOP);  
  text('Andrew Chanover', width - 10, 10);
  
   
}
