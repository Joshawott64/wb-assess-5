import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName(human) {
    // TODO: Implement this method
    return `${human.fname} ${human.lname}`
  }
}

// TODO: Human.init()
Human.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    fname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  },
  {
    modelName: 'human',
    sequelize: db
  }
)

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()
Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    species: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    birthYear: {
      type: DataTypes.INTEGER
    }
  },
  {
    modelName: 'animal',
    sequelize: db
  }
)

// TODO: Define Relationship
Human.hasMany(Animal, { foreignKey: 'animalId' })
Animal.belongsTo(Human, { foreignKey: 'humanId' })

export default db;
