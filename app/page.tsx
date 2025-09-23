'use client'
import { motion } from "framer-motion";
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
      <section className="relative min-h-screen flex items-center justify-center bg-[#FFF8F0] overflow-hidden">
  {/* Background Overlay */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('/vibrant-dandiya-garba-dancers-celebration-festival.jpg')] bg-cover bg-center opacity-80"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0]/40 to-[#FFF8F0]/70"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    {/* Main Badge */}
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Badge className="text-lg px-4 py-2 bg-[#B21D00] text-white shadow-lg rounded-full">
        Bhubaneswar's Biggest Celebration
      </Badge>
    </motion.div>

    {/* Family-Friendly Badge */}
    <motion.div
      className="mb-6 flex justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Badge className="text-base px-3 py-1 bg-[#FFD9D4] text-[#B21D00] shadow-md rounded-full flex items-center gap-2">
        <Users className="w-5 h-5 text-[#B21D00]" /> Family-Friendly Event
      </Badge>
    </motion.div>

    {/* Headline */}
    <motion.h1
      className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-[#B21D00]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Get Ready Bhubaneswar!<br />The Biggest Dandiya Night is Here!
    </motion.h1>

    {/* Sub-headline */}
    <motion.p
      className="text-xl md:text-2xl mb-6 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      Dance | Music | Fun | Unlimited Celebrations – A Night to Remember
    </motion.p>

    {/* CTA Button */}
    <motion.div
  className="flex justify-center mb-10"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  whileHover={{ scale: 1.05 }}
>
  <Button
    size="lg"
    className="text-2xl px-10 py-5 bg-[#B21D00] hover:bg-[#8a1500] text-white shadow-xl rounded-2xl font-bold"
    data-scroll-to="tickets"
  >
    Book Your Pass Now
  </Button>
</motion.div>


    {/* Countdown */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <h3 className="text-lg font-semibold mb-4 text-[#B21D00]">
        Limited Passes – Offer Ends in:
      </h3>
      <CountdownTimer targetDate="2025-10-15T23:59:59" />
    </motion.div>
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
            <p className="text-lg font-bold text-[#B21D00] mb-2">Kalinga Stadium Grounds</p>
            <p className="text-gray-800 mb-4">Bhubaneswar, Odisha</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_LINK"
              width="100%"
              height="250"
              loading="lazy"
              className="mt-4 rounded-lg border border-[#B21D00]/30"
            ></iframe>
          </CardContent>
        </Card>
      </motion.div>

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
          <CardContent>
            <p className="text-lg font-bold text-[#B21D00] mb-2">October 15 – 17, 2025</p>
            <p className="text-gray-800 mb-4">7:00 PM - 12:00 AM</p>
            <input
              type="date"
              className="w-full px-3 py-2 rounded-lg border border-[#B21D00]/40 bg-white text-gray-900 focus:ring-2 focus:ring-[#B21D00] transition-all"
            />
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
          { day: "Day 1 - Oct 15", performers: "DJ Arjun, Garba Troupe", food: "Gujarati Thali, Street Snacks" },
          { day: "Day 2 - Oct 16", performers: "Singer XYZ, Dance Group", food: "Chats, Fusion Dishes" },
          { day: "Day 3 - Oct 17", performers: "Celebrity Guest, Folk Band", food: "Multi-cuisine Festival Stalls" },
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
                <p className="text-gray-800"><b>Food:</b> {schedule.food}</p>
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
      
      {/* Early Bird */}
      <motion.div
        className="border-2 border-[#B21D00]/40 rounded-xl relative flex flex-col justify-between bg-white p-6 shadow-md hover:shadow-lg transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#B21D00] text-white px-3 py-1 rounded-full font-semibold text-sm">Early Bird</span>
        <div>
          <h3 className="text-2xl font-bold text-[#B21D00] mb-1">Early Bird Pass</h3>
          <p className="text-gray-800 mb-4">Valid till October 1st</p>
          <div className="text-4xl font-bold text-[#B21D00] mb-4">₹299</div>
          <ul className="text-gray-700 text-sm space-y-2 mb-6">
            <li>✓ Entry to all events</li>
            <li>✓ Welcome drink</li>
            <li>✓ Dandiya sticks included</li>
          </ul>
        </div>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-[#B21D00] hover:bg-[#991400] text-white font-semibold py-2 rounded-lg transition-colors">
            Get Early Bird Pass
          </button>
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
          <div className="text-4xl font-bold text-[#B21D00] mb-4">₹499</div>
          <ul className="text-gray-700 text-sm space-y-2 mb-6">
            <li>✓ Entry for 2 people</li>
            <li>✓ Welcome drinks</li>
            <li>✓ Dandiya sticks for both</li>
            <li>✓ Couple photo session</li>
          </ul>
        </div>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-[#B21D00] hover:bg-[#991400] text-white font-semibold py-2 rounded-lg transition-colors">
            Get Couple Pass
          </button>
        </a>
      </motion.div>

      {/* Group Pass */}
      <motion.div
        className="border-2 border-[#B21D00]/40 rounded-xl relative flex flex-col justify-between bg-white p-6 shadow-md hover:shadow-lg transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#B21D00] text-white px-3 py-1 rounded-full font-semibold text-sm">Best Value</span>
        <div>
          <h3 className="text-2xl font-bold text-[#B21D00] mb-1">Group Pass</h3>
          <p className="text-gray-800 mb-4">5 People - Special Discount</p>
          <div className="text-4xl font-bold text-[#B21D00] mb-4">₹999</div>
          <ul className="text-gray-700 text-sm space-y-2 mb-6">
            <li>✓ Entry for 5 people</li>
            <li>✓ Welcome drinks for all</li>
            <li>✓ Dandiya sticks included</li>
            <li>✓ Group photo session</li>
            <li>✓ Priority seating</li>
          </ul>
        </div>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-[#B21D00] hover:bg-[#991400] text-white font-semibold py-2 rounded-lg transition-colors">
            Get Group Pass
          </button>
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
      {/* Last Year's Celebration Section */}
<section className="py-16 px-4 bg-[#FFF8F0] text-gray-800">
  <div className="max-w-6xl mx-auto">
    {/* Section Heading */}
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-[#B21D00]">
        <Camera className="h-8 w-8 text-[#B21D00] animate-bounce" /> Last Year's Celebration
      </h2>
      <p className="text-xl text-gray-700">See what you missed!</p>
    </motion.div>

    {/* Gallery Images */}
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {[
        { src: "/dandiya-dance-celebration-crowd-festival.jpg", alt: "Dandiya celebration" },
        { src: "/garba-dancers-traditional-costumes-festival.jpg", alt: "Garba dancers" },
        { src: "/festival-lights-food-stalls-celebration.jpg", alt: "Festival atmosphere" },
      ].map((img, idx) => (
        <motion.div
          key={idx}
          className="relative rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </motion.div>
      ))}
    </div>

    {/* Testimonials */}
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          text: "Best Dandiya Night in Bhubaneswar! Non-stop fun and amazing energy. Can't wait for this year!",
          author: "Priya Sharma",
        },
        {
          text: "Perfect family event! Kids loved it, adults had a blast. Great organization and fantastic music!",
          author: "Rajesh Patel",
        },
      ].map((testimonial, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border border-[#B21D00]/40 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <CardContent className="pt-6">
              <p className="text-gray-800 italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-[#B21D00]">- {testimonial.author}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

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
          className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white"
        >
          <img
            src={`/guests/guest-${i + 1}.jpg`}
            alt={`Guest ${i + 1}`}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <h3 className="text-xl font-bold text-[#B21D00] drop-shadow-md">Guest {i + 1}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Urgency Section */}
<section className="py-16 px-4 bg-[#FFF8F0] text-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-6 flex items-center justify-center gap-2 text-[#B21D00]"
    >
      <AlertTriangle className="h-8 w-8" /> Passes Selling Out Fast!
    </motion.h2>
    <div className="flex justify-center mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button
          size="lg"
          className="text-xl px-8 py-4 flex items-center gap-4 bg-[#B21D00] text-white hover:bg-[#991400]"
          data-scroll-to="tickets"
        >
          <Flame className="h-6 w-6" /> Book Your Pass Today
        </Button>
      </motion.div>
    </div>
  </div>
</section>


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
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-2xl font-bold mb-4 text-[#B21D00]">Dandiya Night Bhubaneswar 2025</h3>
    <p className="mb-4">The biggest celebration of the year is waiting for you!</p>
    <div className="flex justify-center gap-4">
      <Button
        variant="outline"
        className="border-[#B21D00] text-[#B21D00] hover:bg-[#B21D00] hover:text-white bg-transparent transition-colors"
      >
        Follow Us
      </Button>
      <Button
        variant="outline"
        className="border-[#B21D00] text-[#B21D00] hover:bg-[#B21D00] hover:text-white bg-transparent transition-colors"
      >
        Share Event
      </Button>
    </div>
    <p className="mt-6 text-sm text-gray-600">© 2025 Dandiya Night. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}