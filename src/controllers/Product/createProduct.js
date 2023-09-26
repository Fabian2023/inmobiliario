const { Category, Propiedad} = require("../../db");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dfg0dgm9r",
  api_key: "589471853742194",
  api_secret: "uU8OMiDxQdFYnJibegcyC0kzIqw",
});

async function createProduct(req, res) {
  const productsInput = Array.isArray(req.body) ? req.body : [req.body];

  for (const productInput of productsInput) {
    const {
      titulo,
      descripcion,
      categoria,
      direccion,
      capacidad,
      numHabitaciones,
      numBanos,
      precioNoche,
      disponibilidad,
      image,
    } = productInput;

    if (
      !titulo ||
      !descripcion||
      !categoria ||
      !direccion ||
      !capacidad||
      !numHabitaciones ||
      !numBanos ||
      !precioNoche ||
      !disponibilidad ||
      !image
    ) {
      throw new Error("Missing required data");
    }

    const imageUrls = [];
    for (const imageData of image) {
      const result = await cloudinary.uploader.upload(imageData, {
        folder: "productsDetail",
      });
      console.log("result:cloudinary", result);
      imageUrls.push(result.secure_url);
    }

    const newProduct = {
      titulo,
      descripcion,
      categoria,
      direccion,
      capacidad,
      numHabitaciones,
      numBanos,
      precioNoche,
      disponibilidad,
      image: imageUrls,
    };
    console.log(newProduct.image);

    const createdProduct = await Propiedad.create(newProduct);
   
    const categorys = newProduct.categoria;
    if (categorys) {
      const category = await Category.findOne({ where: { name: categorys } });
      if (!categorys) {
        throw new Error(`Categoría "${category}" no encontrada`);
      }
      await createdProduct.setCategory(category);
    }

    // Manejar las relaciones de categoría
    return createdProduct;
  }
}

module.exports = {
  createProduct,
};
