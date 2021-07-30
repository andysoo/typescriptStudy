import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  direction: string = "" //存储用户按键 各浏览器按键名不一致，因此要获取加以保存，以待后用
  isLive = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }

  init() {
    this.food.change()
    //this.keydownHandler中的this指向document,使用bind方法将实例this绑定到keydownHandler上
    document.addEventListener("keydown", this.keydownHandler.bind(this))

    this.run()
  }

  keydownHandler(e: KeyboardEvent) {
    // if(e.key = )
    this.direction = e.key
  }

  /*
    根据direction来改变蛇的位置
    向上 top 减少
    向下 top 增加
    向左 left 减少
    向右 left 增加
  */
  run() {
    let x = this.snake.x
    let y = this.snake.y

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        y -= 10
        break
      case "ArrowDown":
      case "Down":
        y += 10
        break
      case "ArrowLeft":
      case "Left":
        x -= 10
        break
      case "ArrowRight":
      case "Right":
        x += 10
        break
    }

    this.snake.x = x
    this.snake.y = y

    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }
}

export default GameControl
