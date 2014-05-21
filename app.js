var express= require('express'),
    path= require('path'),
    bodyParser = require('body-parser'),
    gson = require('express-gson'),
    dyngodb = require('express-dyngodb'),
    app= express();

app.use(dyngodb());
app.use(bodyParser());
app.use(gson());

app.post('/data',function (req, res, next)
{
  var a= req.body;

  console.log(a);

  req.db.test.save(a)
             .success(function ()
             {
                res.send(a); // now a has an _id
             })
             .error(next);
});

app.use('/', express.static(path.join(__dirname, 'client')));

app.listen(8080);
