var config = {

	// HTTP-Bind settings
	http_bind: {
		host: 'localhost',
		port: 80,
		path: '/http-bind/'
	},
	// App setting
	app: {
		port: process.env.OPENSHIFT_INTERNAL_PORT || 8080,
		hostname: process.env.OPENSHIFT_INTERNAL_IP || "localhost"
	}
};

module.exports = config;