var app = require('../server/server');
var Deployment = app.models.Deployment;
var sandbox = require('./util/sandbox');
var sandbox = sandbox.SANDBOX;
var expect = require('chai').expect;

describe('Deploy', function() {
  describe('deploy local app', function () {
    it('should build and deploy the default local app', function (done) {
      Deployment.create({
        type: 'local'
      }, function(err, build) {
        console.log(JSON.stringify(err));
        expect(build).to.not.be.undefined;
      });
    });
  });
});
