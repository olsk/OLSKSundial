const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKSundial: '.OLSKSundial',

	OLSKSundialCircle: '.OLSKSundialCircle',

	OLSKSundialLine: '.OLSKSundialLine',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKSundial_Access', function () {

	const OLSKSundialLineCount = Math.max(1, Date.now() % 10);

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKSundialLineCount,
		});
	});

	it('shows OLSKSundial', function () {
		browser.assert.elements(OLSKSundial, 1);
	});

	it('shows OLSKSundialCircle', function () {
		browser.assert.elements(OLSKSundialCircle, 1);
	});

	it('shows OLSKSundialLine', function () {
		browser.assert.elements(OLSKSundialLine, OLSKSundialLineCount);
	});

});
