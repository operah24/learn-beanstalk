const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello, World!');
  });
});

describe('POST /echo', () => {
  it('should echo the message sent in the request', async () => {
    const res = await request(app)
      .post('/echo')
      .send({ message: 'Hello, Jest!' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello, Jest!');
  });
});
