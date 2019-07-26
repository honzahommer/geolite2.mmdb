# geolite2.mmdb

[![npm version][npm-image]][npm-url]
[![npm download][downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]

> Maxmind's GeoLite2 Free Databases

This product includes GeoLite2 data created by MaxMind, available from [http://www.maxmind.com](http://www.maxmind.com).

## Install

```sh
npm install geolite2.mmdb
```

## Usage

```javascript
const geolite2 = require('geolite2.mmdb');
const maxmind = require('maxmind');

const lookup = maxmind.openSync(geolite2.city); // or geolite2.country or geolite2.asn or geolite2.paths.city or geolite2.paths.country or geolite2.paths.asn
const city = lookup.get('66.6.44.4');
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/geolite2.mmdb.svg
[npm-url]: https://npmjs.org/package/geolite2.mmdb
[travis-image]: https://img.shields.io/travis/honzahommer/geolite2.mmdb/master.svg
[travis-url]: https://travis-ci.org/honzahommer/geolite2.mmdb
[downloads-image]: https://img.shields.io/npm/dm/geolite2.mmdb.svg