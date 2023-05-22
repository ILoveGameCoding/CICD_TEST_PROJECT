const request = require('supertest')
const { app, server } = require('../app.js')

describe('app test', () => {
    afterAll(() => server.close())

    test('testapi1 api', (done) => {
        request(app).get('/testapi1').expect(200).end((err, res) => {
            if (err) throw err
            expect(res.body).toMatchObject({
                result: false,
                message: 'Test API 1'
            })
            done()
        })
    })
})