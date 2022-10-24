module.exports = (sequelize, DataTypes) => {
  const Emails_Lead = sequelize.define("Emails_Lead", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    emails: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });

  return Emails_Lead;
};
