const request = require('supertest');
const express = require('express');

// Dummy test
test('Dummy test', () => {
    expect(1 + 1).toBe(2);
});

// Test the root endpoint using supertest

// Mock the app for testing
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, this is my demo  CI/CD project!');
});

describe('GET /', () => {
    it('should return the welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, this is my demo  CI/CD project!');
    });
});

// We recommend installing an extension to run jest tests.