import { app } from "./app";
import env from "./config/env";

app.listen(env.PORT, () => console.log(`Listening to port at http://localhost:${env.PORT}`));