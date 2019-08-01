const glob = require("glob");
const fs = require("fs");
const md5 = require("md5");

/**
 * @param {String} dir public
 * @param {Function} cb callback function(result)
 */

function createManifets(dir) {
  return new Promise((resolve, reject) => {
    glob(`${dir}/**`, (err, files) => {
      reject(err);
      const manifest = files.map(async path => {
        const pathStatus = fs.statSync(path);
        const pathMd5 = pathStatus.isDirectory()
          ? null
          : md5(fs.readFileSync(path));
        return [path, pathStatus.isDirectory(), pathMd5];
      });
      resolve(manifest);
    });
  });
}

module.exports = createManifets;
