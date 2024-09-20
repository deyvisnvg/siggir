import * as env from 'dotenv';

env.config();

export default {
    PORT: process.env.PORT || 3000,
}