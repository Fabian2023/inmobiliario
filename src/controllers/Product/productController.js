
const { Propiedad, Category } = require("../../db");


const getProductByName = async (name) => {
  const productName = await Propiedad.findAll({
    where: { name },
    include: [
      {
        model: Category,
      },
    ],
  });
  return [...productName];
};



const getAll = async (req, res) => {
  const propiedad = await Propiedad.findAll({
    include: [
      {
        model: Category,
        attributes: ["name"],
      },
    ],
  });

  return [...propiedad];
};

const getById = async (id) => {
  const propiedad = await Propiedad.findByPk(id, {
    include: [
      {
        model: Category,
        attributes: ["name"],
      },
    ],
  });
  return propiedad;
};

module.exports = {
  getProductByName,
  getAll,
  getById,
};
