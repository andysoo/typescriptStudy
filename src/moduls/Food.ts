class Food {
  element: HTMLElement

  constructor() {
    this.element = document.getElementById("food")!
  }

  // 获取食物X轴坐标
  get x() {
    return this.element.offsetLeft
  }

  // 获取食物X轴坐标
  get y() {
    return this.element.offsetTop
  }

  // 修改食物的位置
  change(): void {
    // 坐标范围0-290px且必须为一格（10的整数倍）
    this.element.style.left = this.random() + "px"
    this.element.style.top = this.random() + "px"
  }

  private random(): number {
    return Math.round(Math.random() * 29) * 10
  }
}

export default Food
