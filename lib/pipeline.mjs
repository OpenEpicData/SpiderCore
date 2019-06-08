import { db as lowdb } from '../lib/db.mjs'

class pipeline {
    /**
     * 接收 spider.mjs 核心框架分发值
     * @param body 爬取的响应内容
     * @param dom 要解析的 dom 规则
     * @param pipeline_name 管道名称
     */
    static rule(res, body, dom, pipeline_name) {
        eval(function_name)
    }

    /**
     * 
     * @param $ 分发的响应内容
     * @param dom 分发的 dom 规则
     */
    static popular_new(res, dom) {
        const self = this
        const date = Date.now()
        const $ = res.$
        let data = []
        $(dom).each(function (index, element) {
            let appid = $(element).attr('data-ds-appid')
            if (self.isNumeric(appid)) {
                data.push({ id: index, appid: parseInt(appid), create_at: date })
            }
        })
        lowdb.push('./db/popular_new.json', 'popular_new', data)
    }

    /**
     * 判断是否是 int 类型
     * @param n 接收判断值
     */
    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }
}

export { pipeline }