module.exports = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,

    RAW_DATA: {
        Item: [{
            '_id': '587f0f2586653d19297d40c2',
            name: '钢笔',
            price: 12
        }, {
            '_id': '587f0f2586653d19297d40c3',
            name: '电脑',
            price: 6000
        }, {
            '_id': '587f0f2586653d19297d40c4',
            name: '手机',
            price: 3000
        }],
        Category:
            [{
                '_id': '587f0f2586653d19297d40c8',
                type: '文具',
                items: [{
                    "_id": "587f0f2586653d19297d40c2"
                }]
            }, {
                '_id': '587f0f2586653d19297d40c9',
                type: '电子产品',
                items: [{
                    "_id": "587f0f2586653d19297d40c4"
                }, {
                    "_id": "587f0f2586653d19297d40c3"
                }]
            }],
        Cart:
            [{
                '_id': '587f0f2586653d19297d40c6',
                name: 'duan',
                items: [
                    {
                        item: '587f0f2586653d19297d40c2',
                        count: 1
                    }, {
                        item: '587f0f2586653d19297d40c3',
                        count: 1
                    },
                    {
                        item: '587f0f2586653d19297d40c4',
                        count: 1
                    }
                ]
            }]
    }

};