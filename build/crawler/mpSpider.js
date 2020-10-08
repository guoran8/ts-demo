"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * crawler类只提供公用的操作
 * 每个爬取对象对应不同的爬虫
 * 使用组合设计模式把特定的分析功能拆分出来
 * 方便后期的定制爬取
 */
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var PMSpider = /** @class */ (function () {
    function PMSpider() {
    }
    PMSpider.getInstance = function () {
        if (!PMSpider.instance) {
            PMSpider.instance = new PMSpider();
            return PMSpider.instance;
        }
        return this.instance;
    };
    PMSpider.prototype.start = function (html, filePath) {
        var result = this.parseArticleList(html);
        return JSON.stringify(this.generateJson(result, filePath));
    };
    PMSpider.prototype.parseArticleList = function (rawHtml) {
        var $ = cheerio_1.default.load(rawHtml);
        var articleList = $('.postlist-item');
        var articleCollect = [];
        articleList.map(function (index, element) {
            var article = $(element);
            var detail = article.children('.content');
            var title = detail.children('.post-title').text().trim();
            var content = detail.children('.des').text().trim();
            var author = detail.find('.ui-captionStrong').text().trim();
            var viewNum = parseInt(detail.find('.meta--sup__right').text(), 10);
            articleCollect.push({
                author: author,
                title: title,
                content: content,
                viewNum: viewNum
            });
        });
        return {
            time: (new Date().getTime()),
            data: articleCollect
        };
    };
    PMSpider.prototype.generateJson = function (result, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[result.time] = result.data;
        return fileContent;
    };
    return PMSpider;
}());
exports.default = PMSpider;
