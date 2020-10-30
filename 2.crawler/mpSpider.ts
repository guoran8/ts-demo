/**
 * crawler类只提供公用的操作
 * 每个爬取对象对应不同的爬虫
 * 使用组合设计模式把特定的分析功能拆分出来
 * 方便后期的定制爬取
 */
import cheerio from 'cheerio';
import fs from 'fs';

import { Spider } from './index'

interface Result {
  time: number,
  data: Article[]
}

interface Article {
  author: string,
  title: string,
  content: string,
  viewNum: number
}

interface JsonFile {
  [propName: number]: Article[]
}

class PMSpider implements Spider {
  private constructor() {}
  private static instance: PMSpider

  static getInstance(): PMSpider {
    if (!PMSpider.instance) {
      PMSpider.instance = new PMSpider()
      return PMSpider.instance
    }

    return this.instance
  }

  public start(html: string, filePath: string): string {
    const result = this.parseArticleList(html)
    return JSON.stringify(this.generateJson(result, filePath))
  }

  private parseArticleList(rawHtml: string) {
    const $ = cheerio.load(rawHtml)
    const articleList = $('.postlist-item')
    const articleCollect: Article[] = []

    articleList.map((index, element) => {
      const article = $(element)
      const detail = article.children('.content')
      const title = detail.children('.post-title').text().trim()
      const content = detail.children('.des').text().trim()
      const author = detail.find('.ui-captionStrong').text().trim()
      const viewNum = parseInt(detail.find('.meta--sup__right').text(), 10)

      articleCollect.push({
        author,
        title,
        content,
        viewNum
      })
    })
    return {
      time: (new Date().getTime()),
      data: articleCollect
    }
  }

  private generateJson(result: Result, filePath: string): JsonFile {
    let fileContent: JsonFile = {}
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }

    fileContent[result.time] = result.data
    return fileContent
  }
}

export default PMSpider