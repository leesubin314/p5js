let circleX = 150;  // 원의 초기 x 위치
let circleY = 100;  // 원의 초기 y 위치
let speed = 10;      // 원의 이동 속도

function setup() {
  createCanvas(400, 400);
  stroke(0);
  fill(30);
}

function draw() {
  background(200);

  // 키가 눌려져 있으면 원을 움직임
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      circleX -= speed;
    } else if (keyCode === RIGHT_ARROW) {
      circleX += speed;
    } else if (keyCode === UP_ARROW) {
      circleY -= speed;
    } else if (keyCode === DOWN_ARROW) {
      circleY += speed;
    }
  }

  // 원 그리기
  ellipse(circleX, circleY, 50, 50);
}