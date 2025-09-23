'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Key, Ticket, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

export default function ApplicantDiscountSection() {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(299); // Base price
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "DANDIYA10") {
      setDiscount(price * 0.1); // 10% off
      alert("Coupon applied! 10% off.");
    } else if (coupon.toUpperCase() === "FEST50") {
      setDiscount(50); // Flat ₹50
      alert("Coupon applied! ₹50 off.");
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const handleRegister = () => {
    if (!name || !email || !phone) {
      setMessage("⚠️ Please fill all fields!");
      return;
    }
    setMessage(`✅ Success! Your final price is ₹${price - discount}`);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FFF8F0] rounded-2xl shadow-xl max-w-5xl mx-auto my-12 border border-[#B21D00]">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center text-[#B21D00] flex flex-col sm:flex-row items-center justify-center gap-2">
    <Gift className="w-8 h-8 text-[#B21D00]" />
    Exclusive Offers & Affiliates
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Left side - Affiliate Logos */}
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      <img src="https://placehold.co/150x50?text=Brand+1" alt="Affiliate 1" className="h-10 sm:h-12" />
      <img src="https://placehold.co/150x50?text=Brand+2" alt="Affiliate 2" className="h-10 sm:h-12" />
      <img src="https://placehold.co/150x50?text=Brand+3" alt="Affiliate 3" className="h-10 sm:h-12" />
    </div>

    {/* Right side - Coupon Box */}
    <div className="p-6 rounded-xl bg-white border border-[#B21D00] shadow-md">
      <p className="font-semibold text-lg mb-2 text-[#B21D00] flex items-center gap-2">
        <Key className="w-5 h-5 text-[#B21D00]" />
        Use Code: <span className="font-bold">EARLYBIRD50</span>
      </p>
      <p className="text-gray-800 mb-4 flex items-center gap-2 text-sm sm:text-base">
        <Ticket className="w-5 h-5 text-gray-600" />
        Get 50% OFF till 30th Sept
      </p>
      <p className="text-[#B21D00] font-semibold mb-6 flex items-center gap-2 text-sm sm:text-base">
        <ArrowRight className="w-5 h-5 text-[#B21D00]" />
        Hurry! Limited Passes
      </p>

      <div className="grid gap-3">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded-lg border border-[#B21D00] bg-white text-gray-800 focus:ring-2 focus:ring-[#B21D00]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg border border-[#B21D00] bg-white text-gray-800 focus:ring-2 focus:ring-[#B21D00]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          className="p-3 rounded-lg border border-[#B21D00] bg-white text-gray-800 focus:ring-2 focus:ring-[#B21D00]"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="p-3 rounded-lg border border-[#B21D00] bg-white text-gray-800 flex-1 focus:ring-2 focus:ring-[#B21D00]"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <Button
            className="w-full sm:w-auto bg-[#B21D00] text-white font-bold px-4 py-3 rounded-lg hover:bg-[#991400]"
            onClick={applyCoupon}
          >
            Apply
          </Button>
        </div>
      </div>

      <p className="mt-4 text-base sm:text-lg font-medium text-gray-800">
        Base Price: ₹{price} | Discount: ₹{discount} | Final Price:{" "}
        <span className="text-[#B21D00] font-bold">₹{price - discount}</span>
      </p>

      <div className="text-center mt-6">
        <Button
          className="w-full sm:w-auto bg-[#B21D00] text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-[#991400] flex items-center gap-2 justify-center"
          onClick={handleRegister}
        >
          <Ticket className="w-5 h-5" />
          Grab Your Discounted Pass Now
        </Button>
        {message && (
          <p className="mt-4 text-gray-800 font-semibold flex items-center gap-2 justify-center text-sm sm:text-base">
            {message.includes("⚠️") ? (
              <AlertCircle className="w-5 h-5 text-yellow-500" />
            ) : (
              <CheckCircle className="w-5 h-5 text-[#B21D00]" />
            )}
            {message.replace("⚠️ ", "").replace("✅ ", "")}
          </p>
        )}
      </div>
    </div>
  </div>
</section>

  );
}
