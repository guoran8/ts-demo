// superagent 是JS语法开发
// ts -> .d.ts -> js
import fs from 'fs';
import path from 'path'
import superagent from 'superagent'

import MPSpider from './mpSpider'

export interface Spider {
  start: (html: string, filePath: string) => string
}

class Crawler {
  private savePath = path.resolve(__dirname, 'result.json')
  constructor(
    private targetUrl: string,
    private spider: Spider) {
    this.startSpider()
  }

  // 避免 getRawHtml和parseArticleList 方法会耦合
  private async startSpider() {
    const html = await this.getRawHtml()
    const result = this.spider.start(html, this.savePath)
    this.saveFile(result)
  }

  private saveFile(writeContent: string) {
    fs.writeFileSync(this.savePath, writeContent)
  }

  private async getRawHtml(): Promise<string>{
    const result = await superagent.get(this.targetUrl)
    return result.text
  }
}

const targetUrl = 'http://www.woshipm.com/category/operate'
const spider = MPSpider.getInstance()
const crawler = new Crawler(targetUrl, spider)
// this is test code block
console.log('guoran1111')
