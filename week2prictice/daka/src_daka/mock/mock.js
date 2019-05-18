import Mock from "mockjs";

export default Mock.mock({
    "list|10-15": [{
        "title|5-10": "@ctitle",
        "content": "@cname",
        "time": "@date('yyyy/yy/yy')",
        "bool": true,
        "tit|0-3": 1
    }]


})