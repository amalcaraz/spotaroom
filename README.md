# Spotaroom

This project was generated with:
 - [Angular CLI](https://github.com/angular/angular-cli) v1.4.4
 
 And built with:
 - [Angular](https://github.com/angular/angular-cli) v4.2.4
 - [Bootstrap](https://github.com/twbs/bootstrap) v4.0.0-beta
 - [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) v1.0.0-beta.5
 - [ngrx](https://github.com/ngrx/platform) v4.0.5
 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
In order to fix CORS problems with the API two options are up to you:
- Disable browser [strict origin policy](https://www.thepolyglotdeveloper.com/2014/08/bypass-cors-errors-testing-apis-locally/). (in chrome: --disable-web-security)
- Use [this extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) in chrome
- Try to modify your hosts configuration file (in linux `/etc/hosts`) an add a accepted by api cors-origin host, for example:
   ```bash
       127.0.0.1    app.spotahome.com 
   ```
- You can use [xip.io](http://xip.io/) too: `app.spotahome.com.127.0.0.1.xip.io`

## Build (AOT compilation)

Exec `npm run build:prod` in console to build the project with AOT and production optimizations.
The build artifacts will be stored in the `dist/`. This is the folder which must be deployed to a static server.

In order to test the production build in local environment, run the next command: `npm run serve:prod`. And visit `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
