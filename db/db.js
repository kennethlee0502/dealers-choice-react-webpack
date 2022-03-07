const Sequelize = require("sequelize");
const { STRING } = Sequelize.DataTypes;
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/workshop"
);

const Color = sequelize.define("color", {
  name: {
    type: STRING,
  },
});

Color.generateRandom = function () {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return this.create({
    name: `rgb(${r},${g},${b})`,
  });
};

const data = async () => {
  try {
    await sequelize.sync({ force: true });
    await Promise.all([Color.generateRandom()]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  Color,
  data,
};
