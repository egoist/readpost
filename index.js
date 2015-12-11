var yaml = require('js-yaml');

module.exports = function readPost (data) {
  if (!data) {
    return null;
  }
  var index = data.indexOf('---');
  if (index < 0) {
    return null;
  }
  var meta = data.substring(0, index);
  meta = yaml.load(meta);
  var content = data.substring(index + 3);
  return {
    meta: meta,
    content: content
  };
};