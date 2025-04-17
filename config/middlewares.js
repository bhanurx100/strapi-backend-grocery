module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        "http://localhost:3000", // Allow your local frontend
        "http://localhost:1337"  // Allow the admin panel to talk to itself (if needed)
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];