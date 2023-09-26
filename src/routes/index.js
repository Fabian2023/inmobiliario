const express = require("express");
const router = express.Router();

const mpRoutes = require("./MpRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const productCreate = require("./productCreateRoute");
const usersRoutes = require("./usersRoutes")
const filterCatRoutes = require("./filterCatRoutes");

const reviewRoutes=require("./reviewRoutes")
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/product", productRoutes);
router.use("/create", productCreate);
router.use("/category", categoryRoutes);
router.use("/users", usersRoutes);
router.use("/filt", filterCatRoutes);
router.use("/mp", mpRoutes);
router.use("/create/review", reviewRoutes)

module.exports = router;
