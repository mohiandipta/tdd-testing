const request = require('supertest')
const app = require('../index')

if ('return 200 OK when signup requst is valid', ()=>{
    request(app).post('/api/1.0/users').send({
        username:'user1',
        email:'user@gmail.com',
        password:'P4ssw0rd'
    }).expect(200)
});