const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "id",
});

Category.hasMany(Product, {
  foreignKey: "product_name",
});

Product.belongsToMany(ProductTag, {
  foreignKey: "tag_id",
});

Tag.belongsToMany(ProductTag, {
  foreignKey: product_id,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
