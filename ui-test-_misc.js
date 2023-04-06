const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const item = {
	OLSKSundialSize: uRandomInt(),
	OLSKSundialBaseSize: uRandomInt(),
};

[true, undefined].forEach(function (TestServerRender) {

	describe('OLSKSundial_Misc' + (TestServerRender ? 'Server' : 'Client'), function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, Object.assign(item, TestServerRender ? {
				TestServerRender,
			} : {}));
		});

		describe('OLSKSundial', function test_OLSKSundial () {

			it('sets width', function () {
				return browser.assert.attribute(OLSKSundial, 'width', item.OLSKSundialSize);
			});

			it('sets height', function () {
				return browser.assert.attribute(OLSKSundial, 'height', item.OLSKSundialSize);
			});

		});

		describe('OLSKSundialCircle', function test_OLSKSundialCircle () {

			it('sets fill', function () {
				return browser.assert.attribute(OLSKSundialCircle, 'fill', 'transparent');
			});

			it('sets r', function () {
				return browser.assert.attribute(OLSKSundialCircle, 'r', item.OLSKSundialBaseSize);
			});

			it('sets cx', function () {
				return browser.assert.attribute(OLSKSundialCircle, 'cx', item.OLSKSundialSize / 2);
			});

			it('sets cy', function () {
				return browser.assert.attribute(OLSKSundialCircle, 'cy', item.OLSKSundialSize / 2);
			});

		});

		describe('OLSKSundialLine', function test_OLSKSundialLine () {

			it('sets x1', function () {
				return browser.assert.attribute(OLSKSundialLine, 'x1', item.OLSKSundialSize / 2 + item.OLSKSundialBaseSize * 0.725);
			});

			it('sets y1', function () {
				return browser.assert.attribute(OLSKSundialLine, 'y1', item.OLSKSundialSize / 2 + item.OLSKSundialBaseSize * 0.725);
			});

		});

	});
	
});
