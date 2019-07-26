const fs = require('fs');
const path = require('path');
const { expect } = require('chai');

const build = require('../bin/build');
const pkg = require('../package');

const main = path.join(__dirname, '../', pkg.main);

describe('geolite2.mmdb/build', () => {
  let paths;

  before(done => {
    build().then(result => {
      paths = result;

      done();
    }).catch(err => {
      done(err);
    });
  });

  it('build returns object', () => {
    expect(paths).to.be.an('object');
  });

  it('build creates main', () => {
    expect(fs.existsSync(main)).to.be.true;
  });

  it('main is object', () => {
    expect(require(main)).to.be.an('object');
  });

  it('paths is equals to main', () => {
    expect(paths).to.deep.equal(require(main));
  });

  it('mmdb files exists', done => {
    Object.values(paths).forEach(path => {
      if (typeof path == 'string') {
        expect(fs.existsSync(path)).to.be.true;
      }
    });

    done();
  });
});
