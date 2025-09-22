'use client'
import { Ticket, Camera, AlertTriangle, CheckCircle, Flame, ArrowRight } from "lucide-react"
import { useEffect } from 'react'
import ApplicantDiscountSection from "@/components/ApplicantDiscountSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CountdownTimer } from "@/components/countdown-timer"
import { MapPin, Calendar, Music, Users, Utensils, Trophy, Phone, MessageCircle } from "lucide-react"

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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 overflow-hidden">
  {/* Background Overlay */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('/vibrant-dandiya-garba-dancers-celebration-festival.jpg')] bg-cover bg-center opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/70"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    {/* Main Badge */}
    <div className="mb-4">
      <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground shadow-lg rounded-full">
        Bhubaneswar's Biggest Celebration
      </Badge>
    </div>

    {/* Family-Friendly Badge */}
    <div className="mb-6 flex justify-center">
  <Badge className="text-base px-3 py-1 bg-secondary text-secondary-foreground shadow-md rounded-full flex items-center gap-2">
    <Users className="w-5 h-5" /> Family-Friendly Event
  </Badge>
</div>


    {/* Headline */}
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
      Get Ready Bhubaneswar!<br />The Biggest Dandiya Night is Here!
    </h1>

    {/* Sub-headline */}
    <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
      Dance | Music | Fun | Unlimited Celebrations – A Night to Remember
    </p>

    {/* CTA Button */}
    <div className="flex justify-center mb-10">
      <Button
        size="lg"
        className="text-xl px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-xl flex items-center gap-2"
        data-scroll-to="tickets"
      >
        <Ticket className="w-5 h-5" /> Book Your Pass Now
      </Button>
    </div>

    {/* Countdown */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground">
        Limited Passes – Offer Ends in:
      </h3>
      <CountdownTimer targetDate="2025-10-15T23:59:59" />
    </div>
  </div>
</section>


      {/* Event Details Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-2">
  <Music className="h-8 w-8 text-primary" /> Event Details
</h2>

            <p className="text-xl text-muted-foreground">Everything you need to know about the celebration</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="h-6 w-6" />
                  Venue & Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">Kalinga Stadium Grounds</p>
                <p className="text-muted-foreground">Bhubaneswar, Odisha</p>
                <a href="https://www.google.com/maps?q=Kalinga+Stadium+Grounds+Bhubaneswar+Odisha" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white mt-4">View on Map</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calendar className="h-6 w-6" />
                  Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">October 15, 2025</p>
                <p className="text-muted-foreground">7:00 PM - 12:00 AM</p>
                <Badge className="mt-4 bg-secondary text-secondary-foreground">Family-Friendly Event</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live DJ + Dandiya Beats</h3>
                <p className="text-sm text-muted-foreground">Non-stop music all night</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Traditional Garba Performances</h3>
                <p className="text-sm text-muted-foreground">Authentic cultural shows</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Food & Beverages Stalls</h3>
                <p className="text-sm text-muted-foreground">Delicious festive treats</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Exciting Contests & Prizes</h3>
                <p className="text-sm text-muted-foreground">Win amazing rewards</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" data-scroll-to="tickets">
  <CheckCircle className="h-5 w-5 mr-2" /> Reserve Your Spot
</Button>

          </div>
        </div>
      </section>

      {/* Ticket & Offers Section */}
      <section id="tickets" className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-2">
  <Ticket className="h-8 w-8 text-primary" /> Ticket & Offers
</h2>

            <p className="text-xl text-muted-foreground">Choose your perfect pass</p>
          </div>

          {/* Ticket Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Early Bird */}
            <Card className="border-2 border-primary/30 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">Early Bird</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Early Bird Pass</CardTitle>
                <CardDescription>Valid till October 1st</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">₹299</div>
                <ul className="text-sm space-y-2 mb-6">
                  <li>✓ Entry to all events</li>
                  <li>✓ Welcome drink</li>
                  <li>✓ Dandiya sticks included</li>
                </ul>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Early Bird Pass</Button>
                </a>
              </CardContent>
            </Card>

            {/* Couple Pass */}
            <Card className="border-2 border-secondary/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Couple Pass</CardTitle>
                <CardDescription>Perfect for two</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-secondary mb-4">₹499</div>
                <ul className="text-sm space-y-2 mb-6">
                  <li>✓ Entry for 2 people</li>
                  <li>✓ Welcome drinks</li>
                  <li>✓ Dandiya sticks for both</li>
                  <li>✓ Couple photo session</li>
                </ul>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Couple Pass</Button>
                </a>
              </CardContent>
            </Card>

            {/* Group Pass */}
            <Card className="border-2 border-accent/30 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">Best Value</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Group Pass</CardTitle>
                <CardDescription>5 People - Special Discount</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-accent mb-4">₹999</div>
                <ul className="text-sm space-y-2 mb-6">
                  <li>✓ Entry for 5 people</li>
                  <li>✓ Welcome drinks for all</li>
                  <li>✓ Dandiya sticks included</li>
                  <li>✓ Group photo session</li>
                  <li>✓ Priority seating</li>
                </ul>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Group Pass</Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-primary mb-4">👉 Limited Passes Available – Hurry!</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground sticky bottom-4" data-scroll-to="tickets">
              🎟️ Grab Your Pass Now
            </Button>
          </div>
        </div>
      </section>

      {/* Applicant Discount Section */}
      <ApplicantDiscountSection />


      {/* Social Proof Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-2">
  <Camera className="h-8 w-8 text-primary" /> Last Year's Celebration
</h2>

            <p className="text-xl text-muted-foreground">See what you missed!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <img src="/dandiya-dance-celebration-crowd-festival.jpg" alt="Dandiya celebration" className="w-full h-64 object-cover" />
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img src="/garba-dancers-traditional-costumes-festival.jpg" alt="Garba dancers" className="w-full h-64 object-cover" />
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img src="/festival-lights-food-stalls-celebration.jpg" alt="Festival atmosphere" className="w-full h-64 object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4">
                  "Best Dandiya Night in Bhubaneswar! Non-stop fun and amazing energy. Can't wait for this year!"
                </p>
                <p className="font-semibold text-primary">- Priya Sharma</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4">
                  "Perfect family event! Kids loved it, adults had a blast. Great organization and fantastic music!"
                </p>
                <p className="font-semibold text-primary">- Rajesh Patel</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
  <AlertTriangle className="h-8 w-8" /> Passes Selling Out Fast!
</h2>
<Button
  size="lg"
  variant="secondary"
  className="text-xl px-8 py-4 flex items-center gap-2"
  data-scroll-to="tickets"
>
  <Flame className="h-6 w-6" /> Book Your Pass Today
</Button>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-2">
  <Phone className="h-8 w-8 text-primary" /> Contact & Support
</h2>

            <p className="text-xl text-muted-foreground">Need help? We're here for you!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-4">WhatsApp Support</h3>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">📲 Chat with Us</Button>
                </a>
              </CardContent>
            </Card>


            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-4">Call Us</h3>
                
                <Button className="bg-green-600 hover:bg-green-700 text-white">+91 9876543210</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-4">Location</h3>
                <a
  href="https://www.google.com/maps?q=Kalinga+Stadium+Grounds+Bhubaneswar+Odisha"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-green-600 hover:bg-green-700 text-white">
    View on Map
  </Button>
</a>

                

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Dandiya Night Bhubaneswar 2025</h3>
          <p className="mb-4">The biggest celebration of the year is waiting for you!</p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-foreground bg-transparent"
            >
              Follow Us
            </Button>
            <Button
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-foreground bg-transparent"
            >
              Share Event
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}