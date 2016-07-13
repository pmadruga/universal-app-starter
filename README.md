# Universal starter pack
Something to use to bootstrap a project fastly. 
NodeJS serving a React-rendered website.

## Tech stack
* React (Client + Server) rendered
* NodeJS + Express
* Webpack for client bundling
* Bootstrap v4 alpha2

## Install
`npm install`

## Dev environment start
`npm run dev`

## Structure
* The index.html is rendered server-side, with the help from React. 
* Instead of a single page application, the project is made with micro services, organized by route. This means that each route can have its own set of technologies, instead of being stuck to one library/framework.
