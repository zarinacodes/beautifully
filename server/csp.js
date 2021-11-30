const contentSecurityPolicy = require("helmet-csp");

app.use(
  contentSecurityPolicy({
    useDefaults: true,
    directives: {
      scriptSrc: ["img-src 'self'", "http://*hm.com/"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
    reportOnly: false,
  })
);
