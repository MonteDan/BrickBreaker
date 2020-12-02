export function detectCollision(ball, gameObject) {
  let topOfBall = ball.position.y;
  let bottomOfBall = ball.position.y + ball.size;
  let rightSideOfBall = ball.position.x + ball.size;
  let leftSideOfBall = ball.position.x;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    leftSideOfBall >= leftSideOfObject &&
    rightSideOfBall <= rightSideOfObject
  ) {
    return [true, "h"];
  } else if (
    leftSideOfBall <= rightSideOfObject &&
    rightSideOfBall >= leftSideOfObject &&
    topOfBall - 8 <= bottomOfObject &&
    bottomOfBall + 8 >= topOfObject
  ) {
    return false;
  } else {
    return false;
  }
}
