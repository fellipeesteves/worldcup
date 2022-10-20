const cors = require("cors");
const express = require("express");
const app = express();

console.log(`Server setup: Setting up...`);

(async () => {
  app.use(cors());

  app.get("/", async (_req, res) => {
    res.json({ message: '@worldcup API is alive', status: 200 });
  });

  app.get("/grupos", async (_req, res) => {
    try {
      const grupos = require('./resources/groups.json');

      res.json({
        error: false,
        payload: grupos,
      });
    } catch (error) {
      res.json({
        error: true,
        payload: error,
      });
    }
  });

  app.listen(process.env.PORT || 3000, function(){
    console.log(`Server setup: All done. Listening on port ${this.address().port} mode ${app.settings.env}!`)
  });
})();
