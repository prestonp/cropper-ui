exports.formatSecs = function(secs) {
  return Math.floor(secs / 60) + ':' + exports.leftpad(secs % 60, 2, 0);
}

exports.leftpad = function(str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  len -= str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}
