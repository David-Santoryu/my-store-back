"use strict";

const mongoose = require("../../common/services/mongoose.service").mongoose;
const productsSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
    },
    price: {
      type: mongoose.Schema.Types.Number,
    },
    description: {
      type: mongoose.Schema.Types.String,
    },
  },
  { versionKey: false }
);

productsSchema.set("toJSON", { virtuals: false });
const Products = mongoose.model("products", productsSchema, "products");

exports.getProducts = () => {
  return new Promise((resolve, reject) => {
    Products.find({}).exec((error, result) => {
      if (error) {
        reject(error.message);
        throw error.message;
      }
      if (result) {
        resolve(result);
      }
    });
  }).catch((error) => {
    throw error.message;
  });
};

exports.addProducts = (info) => {
  try {
    const product = new Products(info);

    return product.save().catch((error) => error.message);
  } catch (error) {
    throw error.message;
  }
};

exports.deleteProducts = (id) => {
  return new Promise((resolve, reject) => {
    Products.deleteOne({ _id: id }).exec((error, result) => {
      if (error) {
        reject(error.message);
        throw error.message;
      }
      if (result.deletedCount) {
        resolve(result);
      } else {
        resolve(false);
      }
    });
  }).catch((error) => {
    throw error.message;
  });
};

exports.modifyProducts = (info) => {
  try {
    const product = new Products(info);

    return product.save().catch((error) => error.message);
  } catch (error) {
    throw error.message;
  }
};
