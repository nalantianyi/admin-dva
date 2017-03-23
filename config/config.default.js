/**
 * Created by nalantianyi on 2017/3/21.
 */
module.exports = {
    keys: "antd--admin",
    view: {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html': 'nunjucks',
        }
    },
    middleware: [
        'compress',
        'gzip',
        'robot',
        'notfoundHandler'
    ],
    robot: {
        ua: [
            /Baiduspider/i,
            /curl/i
        ],
    },
    gzip: {
        threshold: 1024, // 小于 1k 的响应体不压缩
        match: '/public'
    },
    bodyParser: {
        jsonLimit: '10m',
    },
    compress: {
        threshold: 2048
    },
    security: {
        csrf: {
            enable: false,
        },
    },
    session: {
        key: 'DVA_ADMIN',
        maxAge: 1 * 3600 * 1000, // 1小时
        httpOnly: true,
        encrypt: true
    }

}
;