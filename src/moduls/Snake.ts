class Snake {
  snake: HTMLElement
  head: HTMLElement
  bodies: HTMLCollection

  constructor() {
    this.snake = <HTMLElement>document.getElementById("snake")
    this.head = <HTMLElement>document.querySelector("#snake>div")
    this.bodies = <HTMLCollection>this.snake.getElementsByTagName("div")
  }

  get x() {
    return this.head.offsetLeft
  }
  get y() {
    return this.head.offsetTop
  }

  set x(value: number) {
    this.head.style.left = value + "px"
  }

  set y(value: number) {
    this.head.style.top = value + "px"
  }

  //增加蛇身
  addBody() {
    this.snake.insertAdjacentHTML("beforeend", "<div></div>")
  }
}

export default Snake
