module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9bca3ef5ce6eda68dbac577e00ef3808'),
  },
});
