const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    status: false
  })
}

module.exports = {
  errorHandler
}