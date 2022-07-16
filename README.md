# url-domain-name

[![Build](https://github.com/arshadkazmi42/url-domain-name/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/url-domain-name/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/url-domain-name.svg)](https://www.npmjs.com/package/url-domain-name)
[![NPM Downloads](https://img.shields.io/npm/dt/url-domain-name.svg)](https://www.npmjs.com/package/url-domain-name)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/url-domain-name.svg)](https://github.com/arshadkazmi42/url-domain-name)
[![LICENSE](https://img.shields.io/npm/l/url-domain-name.svg)](https://github.com/arshadkazmi42/url-domain-name/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/url-domain-name.svg)](https://github.com/arshadkazmi42/url-domain-name/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/url-domain-name.svg)](https://github.com/arshadkazmi42/url-domain-name/commits/master)


[![Build](https://img.shields.io/travis/com/arshadkazmi42/url-domain-name.svg)](https://travis-ci.com/arshadkazmi42/url-domain-name/)

Get domain name from url

## Install

```
npm i url-domain-name
```

## Usage

```javascript

const Domain = require('url-domain-name');

domainName = Domain.from('https://github.com/arshadkazmi42');
console.log(domainName);

// Output
// github.com


domainName = Domain.from('https://mail.google.com/arshadkazmi42');
console.log(domainName);

// Output
// mail.google.com

```

## API

- **from(url)**
  - Returns domain name from input url

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/url-domain-name/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
