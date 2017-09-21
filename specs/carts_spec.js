const chai = require('chai');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

var assert = chai.assert;

describe('/carts', function () {
    before(() => {
        var id = 0;
    })

    it('get all carts', function (done) {
        request.get('/carts')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function (err, res) {
                if (err) return done(err);
                assert.isArray(res.body, 'return carts object');
                done();
            });
    });

    it('create one item', function (done) {
        request.post('/carts').send({
            "name":"duan",
            "items":[{
                "count":10,
                "_id":"59c21ea2d4f47a60d0af89b9"
            },{
                "count":99,
                "_id":"59c21ea2d4f47a60d0af89b8"
            }]
        }).set('Accept', 'application/json').expect(202)
            .end(function (err, res) {
                    assert.isObject(res.body, 'create cart');
                    id = res.body._id;
                    done();
                }
            )
    })

    it('update a cart', function (done) {
        console.log(id);
        url = '/carts/' + id;
        request.put(url)
            .send({
                "name":"duan",
                "items":[{
                    "count":88,
                    "_id":"59c21ea2d4f47a60d0af89b9"
                },{
                    "count":99,
                    "_id":"59c21ea2d4f47a60d0af89b8"
                }]
            }).expect(204)
            .end(done);
    })

    it('get one cart',function (done) {
        url = '/carts/' + id;
        request.get(url)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                assert.isObject(res.body, 'return items object');
                done();
            });
    })

    it('delete one cart',function (done) {
        url = '/carts/' + id;
        request.delete(url)
            .set('Accept', 'application/json')
            .expect(204)
            .end(done);
    })
})

;