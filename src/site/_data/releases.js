const fs = require('fs');

const getReleases = async () => {
  const releases = [];
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  const files = await fs.promises.readdir(`src/site/_data/releases/`);

  for (const file of files) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const releaseDataString = await fs.promises.readFile(`src/site/_data/releases/${file}`);
    const releaseData = JSON.parse(releaseDataString);

    releases.push({
      name: releaseData.name,
      date: new Date(releaseData.date)
    });
  }

  releases.sort((a, b) => {
    return a.name > b.name ? -1 : 1;
  });

  return releases;
};

module.exports = getReleases;
