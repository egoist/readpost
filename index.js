var fs = require('fs');
var yaml = require('js-yaml');

module.exports = function readFromFile (fileLocation) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileLocation, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        var index = data.indexOf('---');
        var meta = data.substring(0, index);
        var content = data.substring(index + 3);
        meta = yaml.load(meta);
        resolve({
          meta: meta,
          content: content
        });
      }
    });
  });
};