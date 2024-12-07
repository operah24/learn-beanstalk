const request = require('supertest');
const app = require('../app');

describe('Node.js HTTP Server', () => {
  
  it('GET / should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });

  it('POST /echo should return the echoed message', async () => {
    const message = { message: 'This is a test' };
    const response = await request(app)
      .post('/echo')
      .send(message)
      .set('Content-Type', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(message);
  });

  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown');
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ message: 'Not Found' });
  });
});
