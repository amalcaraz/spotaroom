# Spotaroom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
