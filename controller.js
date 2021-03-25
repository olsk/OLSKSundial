const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'OLSKSundialStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'), Object.fromEntries(Object.entries(req.query).map(function (e) {
					if (['OLSKSundialLineCount'].includes(e[0])) {
						e[1] = JSON.parse(e[1]);
					}

					return e;
				})));
			},
		}];
	},

};

Object.assign(exports, mod)
