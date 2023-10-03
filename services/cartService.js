
const { prisma } = require('../config/prisma');

//get all added products
async function getCart() {
  try {
    const addedProduct = await prisma.addedProduct.findMany({
      include: {
        products: true
      }
    });
    return addedProduct;
  } catch (error) {
    console.log(error);
  }
}



// async function addToCart(addedProduct) {
//   try {
//     const addProduct = await prisma.addedProduct.create({
//       data: {
//         quantity: Int,
//         products: addedProduct.products
//       }
//     })
//     return addProduct;
//   } catch (error) {
//     throw new Error(error)
//   }
// }



    module.exports = {
        getCart,
        // addToCart
        // getProductById
        // updateProductById,
        // deleteProductById,
      };
  