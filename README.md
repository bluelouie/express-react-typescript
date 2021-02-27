# express-react-typescript Template

> Simple Starter SPA Template with Typescript on both ends

> Does not use create-react-app for base configuration freedom

> Un-opinionated

This is a jumping-off project, meant to give a faster start on a new project by taking care of the configuration of the frontend and backend.

### Un-opinionated?

There is no style loader, http library, css framework, or  any other bells and whistles so you can use what you want, how you want it with no push back. 

Which is also the reason I didn't use create-react-app 

## Development
Run `npm install` to install all the packages plus all @types so Typescript wont yell at you at the start.

To start the project as a whole, run:

```
npm start
```

A proxy is setup in the webpack configs to allow you to run API requests from the client side, without having to define another port.
You can define more proxies in webpack.config.dev

```
http://localhost:8080/api/{endpoint}
```

To run the server separately:
```
npm run server

//--> Runs on port 3000
```

To run only the client:

```
npm run client


//--> Runs on port 8080
```



## Build

When you run `npm build` all the source code (`/src`) will be compiled and bundled into separate directories

```
dist/ <-- Complied server-side JS code
public/ <-- Bundled and minified client-side code
```



## Authors

* **Jose Medina**  [bluelouie](https://github.com/bluelouie)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

