const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKSundial_Misc', function () {

	const item = {
		OLSKSundialSize: uRandomInt(),
		OLSKSundialBaseSize: uRandomInt(),
	};

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, item);
	});

	describe('OLSKSundial', function test_OLSKSundial () {

		it('sets width', function () {
			browser.assert.attribute(OLSKSundial, 'width', item.OLSKSundialSize);
		});

		it('sets height', function () {
			browser.assert.attribute(OLSKSundial, 'height', item.OLSKSundialSize);
		});

	});

	describe('OLSKSundialCircle', function test_OLSKSundialCircle () {

		it('sets fill', function () {
			browser.assert.attribute(OLSKSundialCircle, 'fill', 'transparent');
		});

		it('sets r', function () {
			browser.assert.attribute(OLSKSundialCircle, 'r', item.OLSKSundialBaseSize);
		});

		it('sets cx', function () {
			browser.assert.attribute(OLSKSundialCircle, 'cx', item.OLSKSundialSize / 2);
		});

		it('sets cy', function () {
			browser.assert.attribute(OLSKSundialCircle, 'cy', item.OLSKSundialSize / 2);
		});

	});

	describe('OLSKSundialLine', function test_OLSKSundialLine () {

		it('sets x1', function () {
			browser.assert.attribute(OLSKSundialLine, 'x1', item.OLSKSundialSize / 2 + item.OLSKSundialBaseSize * 0.725);
		});

		it('sets y1', function () {
			browser.assert.attribute(OLSKSundialLine, 'y1', item.OLSKSundialSize / 2 + item.OLSKSundialBaseSize * 0.725);
		});

	});

});
