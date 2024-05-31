import { setupServer } from 'msw/node';
import { rest } from 'msw';
import '@testing-library/jest-dom';

const server = setupServer(
  // Define handlers for your API endpoints here if needed
  // Example:
  // rest.get('/api/example', (req, res, ctx) => {
  //   return res(ctx.json({ message: 'Hello, world!' }));
  // }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
