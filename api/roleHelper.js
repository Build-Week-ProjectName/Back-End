module.exports = function roleHelper(promise) {
  return promise.then(data => [null, data]).catch(err => [err]);
};
