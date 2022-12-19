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
