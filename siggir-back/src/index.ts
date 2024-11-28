import { app } from "./app";
import env from "./config/env";
import { sequelize } from "./database";

sequelize.sync({ force: false }).then(() => {
    console.log('Database connected and synchronized');
    app.listen(env.PORT, () => {
        console.log(`Server init at http://localhost:${env.PORT}`)
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});