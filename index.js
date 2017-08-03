const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(flash());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
})

