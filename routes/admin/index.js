const { Router } = require("express");

const { check } = require("express-validator");
const validationFields = require("../../middlewares/validateFields");
const {
  getAllAdmin,
  createAdmin,
  loginAdmin,
} = require("../../controller/auth/admin");

const router = Router();

router.get("/admin", getAllAdmin);

router.post(
  "/admin/signup",
  [
    check("email", "el email es incorrecto ó está vacío")
      .isEmail()
      .not()
      .isEmpty(),
    check("password", "el password es requerido").not().isEmpty(),
    validationFields,
  ],
  createAdmin
);

router.post(
  "/admin/login",
  [
    check("email", "el email es requerido").isEmail().not().isEmpty(),
    check("password", "el password es requerido").not().isEmpty(),
    validationFields,
  ],
  loginAdmin
);

module.exports = router;
