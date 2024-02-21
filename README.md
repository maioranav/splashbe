# RadioSplash.it Backend Server

This is a prototype of an ExpressJS Server to serve REST APIs for www.radiosplash.it (with Typescript support).
The project is pre-configured to handle a GET request on the root path ("/") and respond with "Success!".

## Getting Started

Install dependencies:

### npm install

To use this feature, you must have installed global ts-node

### npm i -g ts-node

## Usage:

Start the Server
To start the server in a production environment, use the following command:

### npm run start

## Development Environment

For development purposes, you can use the following command, which includes self-refresh capability:

### npm run dev

This command uses tools like nodemon and ts-node to enable automatic server restarts whenever changes are detected in the source code. It's perfect for a smooth development experience.

## Build

If you need to build the project for deployment, use the following command:

### npm run build

The build will be created in the ./build directory. You can then deploy the contents of this directory to your server.
