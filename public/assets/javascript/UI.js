export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Helvetica";
    this.livesImage = document.getElementById("lives");
    this.restartButton = document.getElementById("restart");
  }
  draw(context) {
    context.save();
    context.shadowOffsetX = 0.5;
    context.shadowOffsetY = 0.5;
    context.shadowColor = "Black";
    context.shadowBlur = 0;
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    //score
    context.fillText("Score: " + this.game.score, 20, 50);
    // timer
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80);
    // lives
    for (let i = 0; i < this.game.lives; i++) {
      context.drawImage(this.livesImage, 30 * i + 20, 95, 25, 25);
    }
    // game over messages
    if (this.game.gameover) {
      context.context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      if (this.game.score > 50) {
        context.fillText(
          "Good Game!",
          this.game.width * 0.5,
          this.game.height * 0.5
        );
      } else {
        context.fillText(
          "Fail!! Try Again?",
          this.game.width * 0.5,
          this.game.height * 0.5
        );
      }
    }
    context.restore();
  }
}
