require('globals');

var platformModule = require("platform");
var strRender = require('str-render');

module.exports = function (defaultLang) {
  // go!
  var lang = platformModule.device.language;
  var defaults = require('~/i18n/' + defaultLang);
  var strings = {};
  try {
    strings = require('~/i18n/' + lang);
  } catch (e) { }

  // main function
  var _L = function (strName, ...replacers) {
    var res = '';
    if (strings.hasOwnProperty(strName))
      res = strings[strName];
    else if (defaults.hasOwnProperty(strName))
      res = defaults[strName];
    return strRender(res, '%s', ...replacers);
  }

  global._L = _L;
};
