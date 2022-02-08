# Procurement Quality Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to 'http://rc.lab-us.ariba.com:4200/'. The app will automatically reload if you change any of the source files.

## Documentation

Run `npm run generate-docs` to generate the documentation.
To view the documentation run `npm run serve-docs` and visit `http://rc.lab-us.ariba.com:8080`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project locally. The build artifacts will be stored in the `dist/` directory.

  Enable the Production Mode with --prod flag 
  ````
    ng build --prod
  ```` 
1. Just Intime Compliation

 Build-only locally
````
ng build 
````
OR 
Build-and-serve locally
````
ng serve 
````


2. Ahead Of Time Compilation(AOT)

For Faster rendering - AOT(Ahead Of Time Compilation)

```
ng build --AOT
```
OR

````
ng serve --AOT
````

## Build Optimizer - Optimize for Production


  ** Enable the prod mode with optimization **
  ````   
    ng build --prod --build-optimizer
  ````  

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Deployment

**nginx**

```
docker run -d -p "8090:80" \
-e RESOLVER_HOST=10.169.48.2 \
-e DOC_HOST_IP=perf-visual.aws.ariba.com \
-e DOC_HOST_PORT=8080 \
-e TPROXY_HOST=tproxy.aws.ariba.com \
-e TPROXY_PORT=8090 \
docker-dev-repo.aws.ariba.com/ariba-cobalt-doc-nginx/doc-nginx:V-376aa06-5

```

**Procurement Quality Dashboard**

```
docker run -d -p "7979:8080" \
-e CRATEDB_HOSTNAME=influxdb-perf0.aws.ariba.com \
-e PERF_INFLUXDB_HOSTNAME=influxdb-perf1.aws.ariba.com \
-e SYSTEM_INFLUXDB_HOSTNAME=influxdb1.aws.ariba.com \
-e ELASTICSEARCH_HOSTNAME=elasticsearch0.aws.ariba.com \
-e AWR_REPORT_HOSTNAME=reports.aws.ariba.com \
```
