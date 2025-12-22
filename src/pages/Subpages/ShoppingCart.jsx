import React, { useState } from "react";

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 20, quantity: 1 },
    { id: 2, name: "Product B", price: 35, quantity: 2 },
    { id: 3, name: "Smartphone", price: 30000 },
    { id: 4, name: "Keyboard", price: 1500 },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "#f9f9f9",
              }}
            >
              <div>
                <h4 style={{ margin: "0 0 5px" }}>{item.name}</h4>
                <p style={{ margin: 0, color: "gray" }}>
                  ${item.price} × {item.quantity}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  style={{
                    padding: "5px 10px",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  style={{
                    padding: "5px 10px",
                    background: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
                <button
                  style={{
                    padding: "5px 10px",
                    background: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3
            style={{
              textAlign: "right",
              marginTop: "20px",
              borderTop: "2px solid #ccc",
              paddingTop: "10px",
            }}
          >
            Total: ${total}
          </h3>
        </div>
      )}
    </div>
  );
}
