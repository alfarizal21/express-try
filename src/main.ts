import { ENV } from "./config/env";
import { createServer } from "./core/server";

createServer().then((app) => {
  app.listen(ENV.PORT, () => {
    console.log(`Server running on port ${ENV.PORT}`);
  });
});
