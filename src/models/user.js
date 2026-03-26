'use strict';
import { Model, DataTypes } from 'sequelize';
import db from './index.cjs'; 

class User extends Model {
  static associate(models) {
   
  }
}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
    validate: {
      isEmail: true 
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db.sequelize, 
  modelName: 'User',
  tableName: 'Users' 
});

export default User;
