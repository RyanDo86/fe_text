import React, { useState } from "react";

const Cart = () => {
  // Danh sách sản phẩm mẫu
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", description: "Discover the ultimate in convenience...", price: 1.0, quantity: 1, image: "https://i.postimg.cc/k4D9cyx4/BUILD4-LESS.png" },
    { id: 2, name: "Product 2", description: "Kitchen appliance that transforms meal prep...", price: 2.0, quantity: 1, image: "https://i.postimg.cc/k4D9cyx4/BUILD4-LESS.png" },
  ]);

  const taxRate = 0.05;
  const shippingRate = 15.0;

  // Hàm cập nhật số lượng
  const updateQuantity = (id, newQty) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: newQty } : p
      )
    );
  };

  // Hàm xóa sản phẩm
  const removeItem = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // Tính toán totals
  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const tax = subtotal * taxRate;
  const shipping = subtotal > 0 ? shippingRate : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="bg-white max-w-[1400px] mx-auto px-10 mt-10 mb-5">
      <h1 className="text-3xl font-light mb-6">Shopping Cart</h1>

      {/* Column labels */}
      <div className="hidden md:flex border-b border-gray-200 pb-3 font-semibold text-gray-500">
        <div className="w-1/5">Image</div>
        <div className="w-[37%]">Product</div>
        <div className="w-[12%]">Price</div>
        <div className="w-[10%]">Quantity</div>
        <div className="w-[9%]">Remove</div>
        <div className="w-[12%] text-right">Total</div>
      </div>

      {/* Product list */}
      {products.map(product => (
        <div key={product.id} className="flex items-start border-b border-gray-200 py-4">
          <div className="w-1/5 text-center">
            <img src={product.image} alt={product.name} className="w-24 mx-auto" />
          </div>
          <div className="w-[37%]">
            <h3 className="font-medium mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
          </div>
          <div className="w-[12%]">${product.price.toFixed(2)}</div>
          <div className="w-[10%]">
            <input
              type="number"
              value={product.quantity}
              min="1"
              onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
              className="w-12 border rounded px-2"
            />
          </div>
          <div className="w-[9%]">
            <button
              onClick={() => removeItem(product.id)}
              className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-2 rounded uppercase"
            >
              Remove
            </button>
          </div>
          <div className="w-[12%] text-right">
            ${(product.price * product.quantity).toFixed(2)}
          </div>
        </div>
      ))}

      {/* Totals */}
      <div className="mt-8">
        <div className="flex justify-between mb-2">
          <label className="w-4/5 text-right">Subtotal</label>
          <div className="w-1/5 text-right">${subtotal.toFixed(2)}</div>
        </div>
        <div className="flex justify-between mb-2">
          <label className="w-4/5 text-right">Tax (5%)</label>
          <div className="w-1/5 text-right">${tax.toFixed(2)}</div>
        </div>
        <div className="flex justify-between mb-2">
          <label className="w-4/5 text-right">Shipping</label>
          <div className="w-1/5 text-right">${shipping.toFixed(2)}</div>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <label className="w-4/5 text-right">Grand Total</label>
          <div className="w-1/5 text-right">${total.toFixed(2)}</div>
        </div>
      </div>

      {/* Checkout button */}
      <div className="flex justify-end">
        <button className="bg-gradient-to-b from-orange-400 
      to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 
      transition-all duration-300 cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
