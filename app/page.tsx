'use client'
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import { Ticket, Camera, AlertTriangle, CheckCircle, Flame, ArrowRight, } from "lucide-react"
import { useEffect } from 'react'
import ApplicantDiscountSection from "@/components/ApplicantDiscountSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CountdownTimer } from "@/components/countdown-timer"
import { MapPin, Calendar, Music, Users, Utensils, Trophy, Phone, MessageCircle , Clock} from "lucide-react"

export default function DandiyaNightLanding() {
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>('[data-scroll-to]')
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-scroll-to')
        const targetEl = document.getElementById(targetId!)
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' })
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-background scroll-smooth">

      {/* Hero Section */}
      {/* Hero Section */}
<section
  id="hero"
  className="relative min-h-screen flex flex-col items-center justify-center bg-[#FFF8F0] overflow-hidden"
>
  {/* Background Overlay */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('/vibrant-dandiya-garba-dancers-celebration-festival.jpg')] bg-cover bg-center opacity-70"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0]/40 to-[#FFF8F0]/70"></div>

    {/* Floating Bokeh/Particles */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="w-72 h-72 bg-[#FFD9D4] rounded-full opacity-20 absolute top-10 left-10 animate-bounce-slow"></div>
      <div className="w-56 h-56 bg-[#B21D00] rounded-full opacity-10 absolute bottom-20 right-20 animate-bounce-slow"></div>
    </div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
    
    {/* Headline */}
    <h1 className="text-3xl md:text-5xl font-extrabold leading-snug text-[#B21D00] drop-shadow-lg">
      Get Ready Bhubaneswar!
      <br />
      The Biggest Dandiya Night is Here!
    </h1>

    {/* Sub-headline */}
    <p className="text-lg md:text-xl text-white font-semibold text-center drop-shadow-lg">
      Dance | Music | Fun | Unlimited Celebrations – A Night to Remember
    </p>

    {/* IMAGE CAROUSEL */}
    <div className="w-full max-w-4xl mb-6 mt-4">
      <ImageCarousel
        images={[
          '/carousel1.webp',
          '/carousel2.webp',
          '/carousel3.webp',
          '/carousel4.webp',
          '/carousel5.webp',
          '/carousel6.webp',
          '/carousel7.webp',
        ]}
        showCount={3}
        gap={16}
        autoSlideInterval={3000}
        arrows
      />
    </div>

    {/* CTA Button */}
    <div className="flex justify-center mb-6">
      <Button
        size="lg"
        className="text-xl px-6 py-3 bg-gradient-to-r from-[#B21D00] to-[#FF5733] hover:from-[#8a1500] hover:to-[#FF8A65] text-white shadow-lg rounded-lg font-bold transform transition-all duration-300"
        data-scroll-to="tickets"
      >
        Book Your Pass Now
      </Button>
    </div>

    {/* Countdown */}
    <div>
      <h3 className="text-base font-semibold mb-2 text-[#B21D00]">
        Limited Passes – Offer Ends in:
      </h3>
      <CountdownTimer targetDate="2025-09-29T23:59:59" />
    </div>

    {/* Scroll Arrow */}
    <div className="mt-6">
      <span className="block w-5 h-5 border-b-2 border-r-2 border-[#B21D00] transform rotate-45 mx-auto animate-bounce"></span>
    </div>
  </div>
</section>







<section id="details" className="py-20 px-6 bg-[#FFF8F0]">
  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-extrabold mb-4 flex items-center justify-center gap-2 text-[#B21D00]">
        <Music className="h-10 w-10 text-[#B21D00] animate-bounce" /> Event Details
      </h2>
      <p className="text-xl text-gray-800">Everything you need to know about the celebration</p>
    </motion.div>

    {/* Info Cards */}
    <div className="grid md:grid-cols-2 gap-10 mb-16">

      {/* Venue */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Card className="bg-white border-2 border-[#B21D00]/40 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#B21D00] text-xl">
              <MapPin className="h-6 w-6 animate-bounce" /> Venue & Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-bold text-[#B21D00] mb-2">AURA LAWNS</p>
            <p className="text-gray-800 mb-4">Bhubaneswar, Odisha</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14654.09384107365!2d85.80000000000001!3d20.350000000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c24a862da3%3A0xc885b19a4ff55989!2sAura%20Lawns%2C%20Revenue%20plot%20no%203%2C%20infront%20of%20Hotel%2C%20Shubham%20Grand%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1695479865400!5m2!1sen!2sin"
              width="100%"
              height="250"
              loading="lazy"
              className="mt-4 rounded-lg border border-[#B21D00]/30"
            ></iframe>
          </CardContent>
        </Card>
      </motion.div>

      {/* Date & Time */}
      {/* Date & Time */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <Card className="bg-white border-2 border-[#B21D00]/40 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-full">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-[#B21D00] text-xl">
        <Calendar className="h-6 w-6 animate-bounce" /> Date & Time
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      {/* Dropdown */}
      <select
        id="event-day"
        className="w-full px-3 py-2 rounded-lg border border-[#B21D00]/40 bg-white text-gray-900 focus:ring-2 focus:ring-[#B21D00] transition-all"
      >
        <option value="2025-09-29">Sep 29, 2025</option>
        <option value="2025-09-30">Sep 30, 2025</option>
        <option value="2025-10-01">Oct 01, 2025</option>
      </select>

      {/* Time */}
      <p className="text-gray-800 mt-2">7:00 PM Onwards</p>

      {/* Book Now Button */}
      <button
        onClick={() => {
          const daySelect = document.getElementById("event-day") as HTMLSelectElement;
          const selectedDay = daySelect.value;
          window.location.href = `/pass?day=${selectedDay}`;
        }}
        className="px-4 py-2 bg-[#B21D00] text-white font-semibold rounded-lg hover:bg-[#9e1700] transition"
      >
        Book Now
      </button>
    </CardContent>
  </Card>
</motion.div>


    </div>

    {/* Daily Schedule */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold mb-8 text-center text-[#B21D00]">📅 Daily Schedule</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { day: "Day 1 - Sep 29", performers: "Emcee Pinkie, DJ Ryan, Dhol",Food: "Gujarati Thali, Street Snacks"},
          { day: "Day 2 - Sep 30", performers: "Emcee Pupul, DJ Priti, Dhol", Food: "Chats, Fusion Dishes" },
          { day: "Day 3 - Oct 1", performers: "Emcee Rajiv, Partho, Dhol, Live Band",Food: "Multi-cuisine Festival Stalls"  },
        ].map((schedule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-2 border-[#B21D00]/30 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 h-full">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2 text-lg text-[#B21D00]">{schedule.day}</h4>
                <p className="text-gray-800"><b>Performers:</b> {schedule.performers}</p>
                <p className="text-gray-800"><b>Food:</b> {schedule.Food}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {[
          { icon: <Music className="h-12 w-12 text-[#B21D00] mx-auto mb-4 animate-bounce" />, title: "Live DJ + Dandiya Beats", desc: "Non-stop music all night" },
          { icon: <Users className="h-12 w-12 text-[#B21D00] mx-auto mb-4 animate-bounce" />, title: "Traditional Garba Performances", desc: "Authentic cultural shows" },
          { icon: <Utensils className="h-12 w-12 text-[#B21D00] mx-auto mb-4 animate-bounce" />, title: "Food & Beverages Stalls", desc: "Delicious festive treats" },
          { icon: <Trophy className="h-12 w-12 text-[#B21D00] mx-auto mb-4 animate-bounce" />, title: "Exciting Contests & Prizes", desc: "Win amazing rewards" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center bg-white border-2 border-[#B21D00]/30 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 h-full">
              <CardContent className="pt-6">
                {item.icon}
                <h3 className="font-semibold mb-2 text-[#B21D00]">{item.title}</h3>
                <p className="text-gray-800 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>

  </div>
</section>




      {/* Ticket & Offers Section */}
<section id="tickets" className="py-16 px-4 bg-[#FFF8F0]">
  <div className="max-w-4xl mx-auto">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-4 text-[#B21D00] flex items-center justify-center gap-2">
        <Ticket className="h-8 w-8 text-[#B21D00]" /> Ticket & Offers
      </h2>
      <p className="text-xl text-gray-800">Choose your perfect pass</p>
    </motion.div>

    {/* Ticket Cards */}
    <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
      
      {/* Event Pass */}
      <motion.div
        className="border-2 border-[#B21D00]/40 rounded-xl relative flex flex-col justify-between bg-white p-6 shadow-md hover:shadow-lg transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#B21D00] text-white px-3 py-1 rounded-full font-semibold text-sm">
          Early Bird
        </span>
        <div>
          <h3 className="text-2xl font-bold text-[#B21D00] mb-1">Event Pass</h3>
          <p className="text-gray-800 mb-4">Valid till October 1st</p>
          <div className="text-3xl font-bold mb-4">
            <span className="line-through text-gray-500 mr-2">₹1499</span>
            <span className="text-[#B21D00]">₹1299</span>
          </div>
          <ul className="text-gray-700 text-sm space-y-2 mb-6">
            <li>✓ For 1 Person</li>
            <li>✓ Unlimited Food</li>
            <li>✓ Live DJ</li>
            <li>✓ Dreamy Ambience</li>
            <li>✓ Live Games And Prizes</li>
            <li>✓ Open Area Dandiya</li>
            <li>✓ Dandiya Sticks Included</li>
            <li>✓ Photography</li>
          </ul>
        </div>
        <a
          href="https://imjo.in/NeXuTg"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#B21D00] hover:bg-[#991400] text-white font-semibold py-2 rounded-lg text-center inline-block transition-colors"
        >
          Get Event Pass
        </a>
      </motion.div>

      {/* Couple Pass */}
      <motion.div
        className="border-2 border-[#B21D00]/40 rounded-xl flex flex-col justify-between bg-white p-6 shadow-md hover:shadow-lg transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h3 className="text-2xl font-bold text-[#B21D00] mb-1">Couple Pass</h3>
          <p className="text-gray-800 mb-4">Perfect for two</p>
          <div className="text-3xl font-bold mb-4">
            <span className="line-through text-gray-500 mr-2">₹2799</span>
            <span className="text-[#B21D00]">₹2399</span>
          </div>
          <ul className="text-gray-700 text-sm space-y-2 mb-6">
            <li>✓ For Couple</li>
            <li>✓ Unlimited Food</li>
            <li>✓ Live DJ</li>
            <li>✓ Dreamy Ambience</li>
            <li>✓ Live Games And Prizes</li>
            <li>✓ Open Area Dandiya</li>
            <li>✓ Dandiya Sticks Included</li>
            <li>✓ Photography</li>
          </ul>
        </div>
        <a
          href="https://imjo.in/bzr4TP"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#B21D00] hover:bg-[#991400] text-white font-semibold py-2 rounded-lg text-center inline-block transition-colors"
        >
          Get Couple Pass
        </a>
      </motion.div>

      {/* VIP Pass */}
      <motion.div
        className="border-2 border-[#B21D00]/40 rounded-xl relative flex flex-col justify-between bg-white p-6 shadow-md hover:shadow-lg transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#B21D00] text-white px-3 py-1 rounded-full font-semibold text-sm">
          Best Value
        </span>
        <div>
          <h3 className="text-2xl font-bold text-[#B21D00] mb-1">VIP Pass</h3>
          <p className="text-gray-800 mb-4">6 People - Special Discount</p>
          <div className="text-3xl font-bold mb-4">
            <span className="line-through text-gray-500 mr-2">₹15999</span>
            <span className="text-[#B21D00]">₹13999</span>
          </div>
          <ul className="text-gray-700 text-sm space-y-2 mb-6">
            <li>✓ Entry For 6 People</li>
            <li>✓ Unlimited Food</li>
            <li>✓ Live DJ</li>
            <li>✓ Dreamy Ambience</li>
            <li>✓ Live Games And Prizes</li>
            <li>✓ Open Area Dandiya</li>
            <li>✓ Dandiya Sticks Included</li>
            <li>✓ Photography</li>
            <li>✓ Exclusive Lounge Seating</li>
          </ul>
        </div>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#B21D00] hover:bg-[#991400] text-white font-semibold py-2 rounded-lg text-center inline-block transition-colors"
        >
          Get VIP Pass
        </a>
      </motion.div>
    </div>

    {/* Call to Action */}
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-lg font-semibold text-[#B21D00] flex justify-center items-center gap-2 mb-4">
        <Clock className="w-5 h-5" /> Limited Passes Available – Hurry!
      </p>
      
      <a href="#tickets">
        <div className="flex justify-center">
          <button className="bg-[#B21D00] hover:bg-[#991400] text-white font-semibold flex items-center gap-2 px-6 py-3 rounded-lg transition-colors">
            <Ticket className="w-5 h-5" /> Grab Your Pass Now
          </button>
        </div>
      </a>
    </motion.div>
  </div>
</section>







      {/* Applicant Discount Section */}
      <ApplicantDiscountSection />


      {/* Social Proof Section */}
      

{/* Guests & Performers Section */}
<section className="py-20 px-6 bg-[#FFF8F0] text-gray-800">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold mb-14 text-[#B21D00] drop-shadow-md"
    >
      🌟 Special Guests & Performers
    </motion.h2>

    {/* Guest Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
        >
          {/* Image Container without background or padding */}
          <div className="w-full aspect-[4/5] flex items-center justify-center">
            <img
              src={`/guests/guest-${i + 1}.webp`}
              alt={`Guest ${i + 1}`}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

          {/* Guest Name */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <h3 className="text-xl font-bold text-[#B21D00] drop-shadow-md"></h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



{/* Urgency Section */}

<section className="py-16 px-4 bg-[#FFF8F0] text-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-extrabold mb-6 flex items-center justify-center gap-2 text-[#B21D00]"
    >
      <AlertTriangle className="h-8 w-8" /> Passes Selling Out Fast!
    </motion.h2>

    {/* Countdown */}
    <div className="mb-8">
      <h3 className="text-base sm:text-lg font-semibold mb-3 text-[#B21D00]">
        Limited Passes – Offer Ends in:
      </h3>
      <div className="inline-block bg-white rounded-lg px-4 py-2 shadow-sm text-sm sm:text-base font-bold text-[#B21D00]">
        <CountdownTimer targetDate="2025-09-29T23:59:59" />
      </div>
    </div>

    {/* Button */}
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button
          size="lg"
          className="text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 bg-[#B21D00] text-white hover:bg-[#991400] rounded-full shadow-md"
          data-scroll-to="tickets"
        >
          <Flame className="h-6 w-6" /> Book Your Pass Today
        </Button>
      </motion.div>
    </div>
  </div>
</section>





{/* Urgency Section */}



{/* Contact Section */}
{/* Contact & Support Section */}
<section className="py-16 px-4 bg-[#FFF8F0] text-gray-800">
  <div className="max-w-4xl mx-auto">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-[#B21D00]">
        <Phone className="h-8 w-8 text-[#B21D00]" /> Contact & Support
      </h2>
      <p className="text-xl text-gray-700">Need help? We're here for you!</p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-white border border-[#B21D00]/40 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center">
          <CardContent className="pt-6">
            <MessageCircle className="h-12 w-12 text-[#B21D00] mx-auto mb-4" />
            <h3 className="font-semibold mb-4 text-[#B21D00]">WhatsApp Support</h3>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              
              <Button className="bg-[#B21D00] hover:bg-[#991400] text-white">Chat with Us</Button>
            </a>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="bg-white border border-[#B21D00]/40 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center">
          <CardContent className="pt-6">
            <Phone className="h-12 w-12 text-[#B21D00] mx-auto mb-4" />
            <h3 className="font-semibold mb-4 text-[#B21D00]">Call Us</h3>
            <Button className="bg-[#B21D00] hover:bg-[#991400] text-white">+91 9876543210</Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="bg-white border border-[#B21D00]/40 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center">
          <CardContent className="pt-6">
            <MapPin className="h-12 w-12 text-[#B21D00] mx-auto mb-4" />
            <h3 className="font-semibold mb-4 text-[#B21D00]">Location</h3>
            <a
              href="https://www.google.com/maps?q=Kalinga+Stadium+Grounds+Bhubaneswar+Odisha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#B21D00] hover:bg-[#991400] text-white">View on Map</Button>
            </a>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="max-w-3xl mx-auto my-16 px-6">
  <motion.h2
    className="text-3xl font-bold text-center mb-8 text-[#B21D00]"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Frequently Asked Questions
  </motion.h2>

  <div className="space-y-6">
    {[
      {
        question: "Do I need to bring my own dandiya sticks?",
        answer: "Sticks will be available at the venue, but you are welcome to bring your own.",
      },
      {
        question: "Will food be available at the venue?",
        answer: "Yes, a variety of food stalls will be set up at the event.",
      },
      {
        question: "Is there a dress code?",
        answer: "Traditional attire is encouraged, but you can wear whatever makes you comfortable.",
      },
      {
        question: "What about parking facilities?",
        answer: "Free parking is available near the venue for all attendees.",
      },
      {
        question: "How can I contact you if I have more questions?",
        answer: 'You can reach us at <a href="mailto:info@dandiyanight.com" class="text-blue-500 underline">info@dandiyanight.com</a>.',
      },
    ].map((faq, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.15 }}
        viewport={{ once: true }}
        className="p-4 border rounded-lg shadow-md bg-white border-[#B21D00]/40 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
      >
        <h3 className="font-semibold text-lg text-[#B21D00]">{faq.question}</h3>
        <p
          className="mt-2 text-gray-800"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        ></p>
      </motion.div>
    ))}
  </div>
</section>

{/* Footer */}
<footer className="bg-[#FFF8F0] text-gray-800 py-12 px-4">
  <div className="max-w-4xl mx-auto text-center space-y-4">
    <h3 className="text-2xl font-bold mb-2 text-[#B21D00]">Dandiya Night Bhubaneswar 2025</h3>
    <p className="mb-2">The biggest celebration of the year is waiting for you!</p>
    <p className="text-gray-600 mb-4">
      Email:{" "}
      <a
        href="mailto:ringsandknotss@gmail.com"
        className="text-[#B21D00] underline"
      >
        ringsandknotss@gmail.com
      </a>
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4">
      <Button
        variant="outline"
        className="border-[#B21D00] text-[#B21D00] hover:bg-[#B21D00] hover:text-white transition-colors"
      >
        Follow Us
      </Button>

      <Button
        variant="outline"
        className="border-[#B21D00] text-[#B21D00] hover:bg-[#B21D00] hover:text-white transition-colors"
      >
        Share Event
      </Button>

      {/* Contact */}
      <a
        href="https://ringsandknots.com/contact/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="border-[#B21D00] text-[#B21D00] hover:bg-[#B21D00] hover:text-white transition-colors"
        >
          Contact Us
        </Button>
      </a>

      {/* Refund & Cancellation */}
      <a
        href="https://ringsandknots.com/refund-policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="border-[#B21D00] text-[#B21D00] hover:bg-[#B21D00] hover:text-white transition-colors"
        >
          Refund & Cancellation
        </Button>
      </a>

      {/* Terms & Conditions */}
      <a
        href="https://ringsandknots.com/terms-conditions/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="border-[#B21D00] text-[#B21D00] hover:bg-[#B21D00] hover:text-white transition-colors"
        >
          Terms & Conditions
        </Button>
      </a>
    </div>

    <p className="mt-6 text-sm text-gray-600">
      © 2025 Dandiya Night. All rights reserved.
    </p>
  </div>
</footer>

{/* Scroll to Top Button */}
{/* Scroll to Top Button */}
<motion.button
  onClick={() => {
    const heroSection = document.getElementById("hero");
    if (heroSection) heroSection.scrollIntoView({ behavior: "smooth" });
  }}
  className="fixed bottom-6 right-6 p-4 bg-[#B21D00] text-white rounded-full shadow-lg hover:bg-[#8a1500] flex items-center justify-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.95 }}
>
  {/* Upward arrow */}
  <ArrowRight className="w-6 h-6 rotate-[-90deg] animate-bounce" />
</motion.button>




    </div>
  )
}