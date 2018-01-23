const express = require('express');
const PORT = process.env.PORT || 5000;

const redirect =
  "https://github.com/christianalfoni/webpack-bin/issues/226#issuecomment-299628055";

express()
  .use((_, res) => res.redirect(redirect))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
