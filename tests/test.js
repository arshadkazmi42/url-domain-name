const { expect } = require('chai');

const Domain = require('../index');


describe('tests domain name fetching from url', () => {
  it('should return github.com as domain name', () => {
    expect(Domain.from('https://github.com/arshadkazmi42')).to.equal('github.com');
    expect(Domain.from('https://mail.google.com/arshadkazmi42')).to.equal('mail.google.com');
    expect(Domain.from('https://medium.com/@vanya_cohen/opengpt-2-we-replicated-gpt-2-because-you-can-too-45e34e6d36dc')).to.equal('medium.com');
  });
  it('should throw error', () => {
    try {
      Domain.from();
    } catch (err) {
      expect(err.message).to.equal('Invalid URL');
    }

    try {
      Domain.from('http://');
    } catch (err) {      
      expect(err.message).to.equal(`Cannot read property '${process.platform}' of undefined`);
    }

    try {
      Domain.from('arshad');
    } catch (err) {      
      expect(err.message).to.equal(`Cannot read property '${process.platform}' of undefined`);
    }
  });
});
