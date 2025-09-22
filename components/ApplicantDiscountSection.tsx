'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ApplicantDiscountSection() {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(299); // Base price example (Early Bird)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "DANDIYA10") {
      setDiscount(price * 0.1); // 10% discount
      alert("Coupon applied! 10% off.");
    } else if (coupon.toUpperCase() === "FEST50") {
      setDiscount(50); // Flat ₹50 discount
      alert("Coupon applied! ₹50 off.");
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const handleRegister = () => {
    if (!name || !email || !phone) {
      setMessage("Please fill all fields!");
      return;
    }
    setMessage(`Success! Your final price is ₹${price - discount}`);
    // You can send form data to backend/API here
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-purple-600 to-yellow-400 text-white rounded-xl shadow-lg max-w-3xl mx-auto my-12">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
        🏷️ Apply Your Discount & Register
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded-lg text-gray-900 font-medium"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg text-gray-900 font-medium"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          className="p-3 rounded-lg text-gray-900 font-medium"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="p-3 rounded-lg text-gray-900 font-medium flex-1"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <Button
            className="bg-yellow-400 text-purple-800 font-bold px-4 rounded-lg hover:scale-105 transition-transform"
            onClick={applyCoupon}
          >
            Apply Coupon
          </Button>
        </div>
      </div>

      <p className="mt-4 text-lg text-center">
        Base Price: ₹{price} | Discount: ₹{discount} | Final Price: ₹{price - discount}
      </p>

      <div className="text-center mt-6">
        <Button
          className="bg-green-400 text-purple-800 font-bold py-3 px-6 rounded-full text-lg hover:scale-105 transition-transform"
          onClick={handleRegister}
        >
          🔥 Register & Get Discounted Pass
        </Button>
        {message && <p className="mt-4 text-yellow-200 font-semibold">{message}</p>}
      </div>
    </section>
  );
}
