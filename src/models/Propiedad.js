const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Propiedad",
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      numHabitaciones: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      numBanos: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      precioNoche: {
        type: DataTypes.FLOAT, // Puedes cambiar el tipo de dato según tus necesidades
        allowNull: false
      },
      disponibilidad: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      isPublished: { // Agrega el campo isPublished
        type: DataTypes.BOOLEAN, // Será un booleano
        allowNull: false, // No puede estar vacío
        defaultValue: true, // Por defecto, las publicaciones estarán activas
      },
    },
    {
      timestamps: false,
      freezeTableName: true,

    }
  );
};
