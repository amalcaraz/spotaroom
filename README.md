# Spotaroom

This project was generated with:
 - [Angular CLI](https://github.com/angular/angular-cli) v1.4.4
 
 And built with:
 - [Angular](https://github.com/angular/angular-cli) v4.2.4
 - [Bootstrap](https://github.com/twbs/bootstrap) v4.0.0-beta
 - [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) v1.0.0-beta.5
 - [ngrx](https://github.com/ngrx/platform) v4.0.5


## Requirements 

The only thing you need is: 
- NodeJs >= v6.x.x
- npm >= 3.x.x
 
 
## Prepare the local environment

Before start working, you have to clone this repository and install all the dependencies in your local machine by running:
```bash
# Clone the repo and enter inside
git clone https://github.com/amalcaraz/spotaroom.git
cd spotaroom

# install node dependencies
npm install -g yarn
yarn install

# Start the dev server with a watcher running
npm start
```


## Development server

After run `npm start`, navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
In order to fix CORS problems with the API two options are up to you:
- Disable browser [strict origin policy](https://www.thepolyglotdeveloper.com/2014/08/bypass-cors-errors-testing-apis-locally/). (in chrome: --disable-web-security)
- Use [this extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) in chrome, or [this one](https://addons.mozilla.org/es/firefox/addon/cors-everywhere/) in firefox
- Try to modify your hosts configuration file (in linux `/etc/hosts`) an add a accepted by api cors-origin host, for example:
   ```bash
       127.0.0.1    app.spotahome.com 
   ```
- You can use [xip.io](http://xip.io/) too: `app.spotahome.com.127.0.0.1.xip.io`


## Build (AOT compilation)

Exec `npm run build:prod` in console to build the project with AOT and production optimizations.
The build artifacts will be stored in the `dist/`. This is the folder which must be deployed to a static server.

In order to test the production build in local environment, run the next command: `npm run serve:prod`. And visit `http://localhost:4200/`.


## Deploying the app to [GitHub Pages](https://pages.github.com/)

Run `npm run deploy` to deploy the app to github pages (the build deployed is compiled with AOT).
Then you can open it, navigating to: [https://amalcaraz.github.io/spotaroom/madrid](https://amalcaraz.github.io/spotaroom/madrid)


## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io) with watcher.
To produce coverage reports, you have to run the tests with this command: `npm run test:coverage`.
