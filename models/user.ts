import { INTEGER, STRING } from 'sequelize';
import type { Optional, Model } from 'sequelize';

import sequelize from '../util/database.js';

interface UserAttributes {
    id: number;
    email: string;
    password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>,
        UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

// Leverage sequelize to create the user table for the PG DB
export const User = sequelize.define<UserInstance>('user', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: STRING,
        allowNull: false,
    },
    password: {
        type: STRING,
        allowNull: false,
    },
});
