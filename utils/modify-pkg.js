const path = require('path');
const fs = require('fs');

module.exports = (repoInfo) => {
  let pkgJSON;
  const pkgJSONPath = path.resolve(process.cwd(), './package.json');
  try {
    pkgJSON = fs.readFileSync(pkgJSONPath);
    try {
      pkgJSON = JSON.parse(pkgJSON);
    } catch(e) {
      console.log('parse `package.json` error: ', e);
    }
  } catch(e) {
    console.log('read `package.json` error: ', e);
  }

  pkgJSON.name = repoInfo.repoName;
  pkgJSON.repository = {
    type: 'git',
    url: repoInfo.repoUrl
  };

  try {
    fs.writeFileSync(pkgJSONPath, JSON.stringify(pkgJSON, null, '  '));
  } catch(e) {
    console.log('write `package.json` error: ', e);
  }
};
