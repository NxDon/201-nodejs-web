const chai = require('chai');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

var assert = chai.assert;

describe('/categories', function () {
    before(() => {
        var id = 0;
    })

    it('get all categories', function (done) {
        request.get('/categories')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function (err, res) {
                if (err) return done(err);
                assert.isArray(res.body.item, 'return category object');
                done();
            });
    });
    it('create one category', function (done) {
        request.post('/categories').send({
            "type":"eletric223",
            "items":["59c21ea2d4f47a60d0af89b9","59c21ea2d4f47a60d0af89b8"]
        }).set('Accept', 'application/json').expect(202)
            .end(function (err, res) {
                    assert.isObject(res.body, 'create cate');
                    id = res.body._id;
                    done();
                }
            )
    });
    it('update a category', function (done) {

        url = '/categories/' + id;
        request.put(url)
            .send({
                "type":"Daily",
                "items":["59c21ea2d4f47a60d0af89b9","59c21ea2d4f47a60d0af89b8"]
            }).expect(204)
            .end(done);
    })

    it('get one category',function (done) {
        url = '/categories/' + id;
        request.get(url)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                assert.isObject(res.body, 'return category object');
                done();
            });
    })

    it('delete one category',function (done) {
        url = '/categories/' + id;
        request.delete(url)
            .set('Accept', 'application/json')
            .expect(204)
            .end(done);
    })



})

;