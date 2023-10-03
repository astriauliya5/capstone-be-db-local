const cartService = require('../services/cartService');

// get all added products
async function getCart(req, res) {
  try {
    const addedProduct = await cartService.getCart();
    res.status(200).json({
      message: "Successfully fetched all added products in cart",
      data: addedProduct
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


// add product to cart
// async function addToCart(req, res) {
//   try {
//     const addedProductId = await cartService.addToCart(req.body);
//     res.status(201).json({ addedProductId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// Get a product by ID
// async function getProductById(req, res) {
//   const { productId } = req.params;
//   try {
//     const product = await productService.getProductById(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'product not found' });
//     }
//     res.status(200).json({
//       message: "Successfully fetched product",
//       data: product
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// Update a product by ID
// async function updateProductById(req, res) {
//   const { productId } = req.params;
//   try {
//     const product = await productService.getProductById(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'product not found' });
//     }

//     if (req.body.productname && req.body.productname !== product.productname) { 
//       product.productname = req.body.productname;
//     }
    
//     if (req.body.price && req.body.price !== product.price) {
//       product.price = req.body.price;
//     }

//     //SIZE/keterangan??--> brand, image, ...

//     await productService.updateProductById(productId, product);
//     res.status(200).json({
//       message: "Successfully update product",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// // Delete a product by ID
// async function deleteProductById(req, res) {
//   const { productId } = req.params;
//   try {
//     const product = await productService.getProductById(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'product not found' });
//     }
//     const deleted = await productService.deleteProductById(productId);
//     res.status(200).json({
//       message: "Successfully delete product",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

module.exports = {
  getCart,
  // addToCart

};