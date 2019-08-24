const url = require('url');


const from = (link) => {
  if (!link) {
    throw new Error('Invalid URL');
  }

  return url.parse(link).hostname;
};


module.exports = {
  from
};