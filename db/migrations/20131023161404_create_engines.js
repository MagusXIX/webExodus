var CreateEngines = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('', '');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('engines', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('engines', callback);
  };
};

exports.CreateEngines = CreateEngines;
