let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [ hotCake, applePie, eggMuffin, sausageMuffin, hotCoffee, hashBrown ] = order;

function getOrder(product) {
  product.forEach(item => console.log(`${item.quantity}   ${item.itemName}     ${item.unitPrice.toFixed(2)}`));
}
// getOrder(order);



console.log(`QTY    ITEM                   TOTAL`);
console.log(`${hotCake.quantity}     ${hotCake.itemName}               ${hotCake.unitPrice.toFixed(2) * hotCake.quantity}`);
console.log(`${applePie.quantity}     ${applePie.itemName}               ${applePie.unitPrice.toFixed(2) * applePie.quantity}`);
console.log(`${eggMuffin.quantity}     ${eggMuffin.itemName}            ${(eggMuffin.unitPrice * eggMuffin.quantity).toFixed(2)}`);
console.log(`${sausageMuffin.quantity}     ${sausageMuffin.itemName}        ${(sausageMuffin.unitPrice).toFixed(2)}`);
console.log(`${hotCoffee.quantity}     ${hotCoffee.itemName}              ${(hotCoffee.unitPrice * hotCoffee.quantity).toFixed(2)}`);
console.log(`${hashBrown.quantity}     ${hashBrown.itemName}              ${(hashBrown.unitPrice * hashBrown.quantity).toFixed(2)}`);

// for (let i = 0; i < order.length; i++) {
//   console.log(`${order[i].quantity} ${order[i].itemName} ${order[i].unitPrice}`);  
// }

function sumTotal(items) {
  return items.reduce((sum, {quantity, unitPrice}) => sum + quantity * unitPrice, 0);  
}

let total = sumTotal(order);

console.log(`Total: ${total}`);

