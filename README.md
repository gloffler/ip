# IP API

A tiny Express service that returns the IP address associated with a request.  
It is designed to sit behind a proxy or load balancer and uses the `X-Forwarded-For`
header when present.

## Quick start

- **Prerequisites**: Node.js 18+ and npm.
- **Install dependencies**:

  ```bash
  npm install
  ```

- **Run the server**:

  ```bash
  npm start
  ```

  The API listens on port `3000` by default.

## API

- `GET /`
  - **Description**: Returns the caller's IP address.
  - **Response**:

    ```json
    {
      "ip": "203.0.113.42"
    }
    ```

  - The service inspects `X-Forwarded-For` first (when `trust proxy` is enabled)
    and falls back to the TCP socket's remote address.

### Example request

```bash
curl http://localhost:3000/
```

## Docker

Build a local image and run the container:

```bash
docker build -t ip-api .
docker run --rm -p 3000:3000 ip-api
```

## Development notes

- The application source lives in `src/server.js`.
- No database or persistent storage is required.
- Add HTTPS termination and rate limiting at the proxy layer if you expose this service publicly.
