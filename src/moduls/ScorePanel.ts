class ScorePanel {
  score = 0 //分数
  level = 1 //等级
  scoreEle: HTMLElement
  levelEle: HTMLElement

  maxLevel: number //等级上限，默认10级
  upScore: number //多少分升一级 默认10分升一级

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!
    this.levelEle = document.getElementById("level")!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 加分方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ""
    if (this.score % this.upScore === 0) this.levelUp()
  }

  //提升等级 上限10级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ""
    }
  }
}

export default ScorePanel
