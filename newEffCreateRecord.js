"use strict";

var dbb = require("./seqdb");
var Op = dbb.Sequelize.Op;

const Product = dbb.sequelize.define('product', {
    title: dbb.Sequelize.STRING
});

const Customer = dbb.sequelize.define('customer', {
    first_name: dbb.Sequelize.STRING,
    last_name: dbb.Sequelize.STRING
});

const Address = dbb.sequelize.define('address', {
    type: dbb.Sequelize.STRING,
    line_1: dbb.Sequelize.STRING,
    line_2: dbb.Sequelize.STRING,
    city: dbb.Sequelize.STRING,
    state: dbb.Sequelize.STRING,
    zip: dbb.Sequelize.STRING,
});
  
  Product.Customer = Product.belongsTo(Customer);
  Customer.Addresses = Customer.hasMany(Address);

  // Product.sync();
  // Customer.sync();
  // Address.sync();

  return Product.create({
    title: 'Chair',
    customer: {
      first_name: 'Mick',
      last_name: 'Broadstone',
      addresses: [{
        type: 'home',
        line_1: '100 Main St.',
        city: 'Austin',
        state: 'TX',
        zip: '78704'
      },{
        type: 'home new',
        line_1: '100 back St.',
        city: 'Justin',
        state: 'FX',
        zip: '34534'
      }]
    }
  }, {
    include: [{
      association: Product.Customer,
      include: [ Customer.Addresses ]
    }]
  });