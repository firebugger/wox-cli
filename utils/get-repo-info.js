const fs = require('fs-extra');
const path = require('path');

module.exports = () => {
  const gitRepoFile = path.resolve(process.cwd(), './.git');

  try {
    const exists = fs.pathExistsSync(gitRepoFile);

    if (exists) {
      try {
        const data = fs.readFileSync(`${gitRepoFile}/config`);
        const dataStr = data.toString();
        const repoUrl = dataStr.substring(dataStr.indexOf('url = ') + 6, dataStr.indexOf('fetch = ')).replace('\t', '').replace('\n', '');
        const repoName = repoUrl.substring(repoUrl.lastIndexOf('/') + 1, repoUrl.indexOf('.git'));

        return {
          repoUrl,
          repoName
        };
      } catch(e) {
        console.log('read `.git/config` error: ', e);
      }
    }
    return null;
  } catch(e) {
    console.log('check `.git` error: ', e);
  }
};
