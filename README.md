# express-react-typescript Template

> Simple Starter SPA Template with Typescript on both ends

> Does not use create-react-app for base configuration freedom

> Un-opinionated

This is a jumping-off project, meant to give a faster start on a new project by taking care of the configuration of the frontend and backend.

### Un-opinionated?

There is no style loader/http library/css framework (apart from bass css) or any other bells and whistles so you can use what you want/how you want it. 

Which is also the reason I didn't use create-react-app 

## Development
Run `npm install` to install all the packages plus all @types so Typescript wont yell at you at the start.

To start the client server to begin building your React app (with hot reload), run :

```
npm run client:watch

//--> Runs on port 8080
```

To start the server with nodemon (hot reload): 

```
npm run start:watch

//--> Runs on port 3000
```
 
An Proxy is setup so you can run API requests from the client side, without having to define another port.

```
npm run client:watch
npm run start:watch


http://localhost:8080/api/{endpoint}
```

You can define more proxies in webpack.dev

## Build

When you run `npm build` all the source code (`/src`) will be compiled and bundled into separate directories

```
dist/ <--Complied server-side JS code
public/ <-- Bundled and minified client-side code
```



## Authors

* **Jose Medina**  [bluelouie](https://github.com/bluelouie)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
