import { Sequelize } from 'sequelize';

// Create the ORM
const sequelize = new Sequelize(process.env.DB_URI ?? '');

// This isn't really needed in Prod, and it's not wise to have a development only code in what will be a prod codebase
// but since this is a portfolio application, I am leaving it to make development easier.
export const syncDB = async function (): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        if (process.env.NODE_ENV !== 'production') {
            await sequelize.sync({ alter: true });
        }
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default sequelize;
