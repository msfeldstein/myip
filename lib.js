'use strict';

var os = require('os');

module.exports = function() {
  var ifaces = os.networkInterfaces();
  var address = null;
  Object.keys(ifaces).forEach(function (ifname) {
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      address = iface.address;
    });
  });
  return address;
}
