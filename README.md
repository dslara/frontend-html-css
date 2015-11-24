# frontend-html-css

Demo [SunWeb](http://death.run/sunweb)

## How to use

Run to install development dependencies:

```sh
$ sudo npm install
```

Run to install bower dependencies:

```sh
$ bower install
```

_All dependencies will be automatically injected into the index.html_

Run to start the server and live reload:

```sh
$ gulp server
```

url: ```http://localhost:3000```

_With the server running, the SASS compiler i'll be running too_


To install a new bower dependency:

```sh
$ bower install dependency-name
```
_The dependency will be automatically injected into the index.html_

To inject all dependencies in index.html:

```sh
$ gulp inject
```
To run the SASS compiler without the server:

```sh
$ gulp watch
```
