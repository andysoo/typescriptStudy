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
    if (this.x === value) return
    if (value < 0 || value > 290) throw new Error("蛇撞墙了")
    if (this.bodies[1] && (<HTMLElement>this.bodies[1]).offsetLeft === value) {
      //水平方向发生了调头
      if (value > this.x) {
        //如果value大于x,说明蛇要向右走时调头了，此时应该使蛇继续向左前进，反之亦然
        value = this.x - 10
      } else {
        value = this.x + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + "px"
    this.checkHeadBody()
  }

  set y(value: number) {
    if (this.y === value) return
    if (value < 0 || value > 290) throw new Error("蛇撞墙了")

    if (this.bodies[1] && (<HTMLElement>this.bodies[1]).offsetTop === value) {
      //水平方向发生了调头
      if (value > this.y) {
        //如果value大于x,说明蛇要向右走时调头了，此时应该使蛇继续向左前进，反之亦然
        value = this.y - 10
      } else {
        value = this.y + 10
      }
    }

    this.moveBody()
    this.head.style.top = value + "px"
    this.checkHeadBody()
  }

  //增加蛇身
  addBody() {
    this.snake.insertAdjacentHTML("beforeend", "<div></div>")
  }

  moveBody() {
    //将后面的DIV的位置给前一个DIV，从后往前改
    for (let i = this.bodies.length - 1; i > 0; i--) {
      //获取前一个身体的位置
      let x = (<HTMLElement>this.bodies[i - 1]).offsetLeft
      let y = (<HTMLElement>this.bodies[i - 1]).offsetTop

      //将后一个身体位置改为前一个
      ;(<HTMLElement>this.bodies[i]).style.left = x + "px"
      ;(<HTMLElement>this.bodies[i]).style.top = y + "px"
    }
  }

  checkHeadBody() {
    //检测头和身体坐标是否重叠，重叠说明相撞，游戏结束
    for (let i = 1; i < this.bodies.length; i++) {
      let bodyTop = (<HTMLElement>this.bodies[i]).offsetTop
      let bodyLeft = (<HTMLElement>this.bodies[i]).offsetLeft

      if (this.x === bodyLeft && this.y === bodyTop) {
        throw new Error("撞到自己了！")
      }
    }
  }
}

export default Snake
