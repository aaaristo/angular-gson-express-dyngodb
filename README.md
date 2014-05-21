angular-gson-express-dyngodb
===========================

Demonstrate angularjs + gson + express + dyngodb

## Installation

```sh
$ git clone git@github.com:aaaristo/angular-gson-express-dyngodb.git
```

## Playing around

```sh
$ cd angular-gson-express-dyngodb
$ npm install
$ npm install -g dyngodb2
$ bower install
$ export AWS_ACCESS_KEY_ID=......
$ export AWS_SECRET_ACCESS_KEY=......
$ export AWS_REGION=eu-west-1
$ dyngodb2
> db.createCollection('test')
> exit
$ node app.js [--local]
```

point your browser to *http://localhost:8080/*, openup the console and refresh...

## Stack

* [AngularJS](https://angularjs.org/)
* [GSON](https://github.com/aaaristo/gson)
* [express](http://expressjs.com/)
* [dyngodb2](https://github.com/aaaristo/dyngodb)
* [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
