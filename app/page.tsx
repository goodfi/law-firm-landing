import { redirect } from "next/navigation"
import { defaultLocale } from "@/middleware"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Scale, Briefcase, Building, Users, FileText, Phone, Mail, MapPin, ChevronRight } from "lucide-react"

export default function Home() {
  // Redirect to the default locale
  redirect(`/${defaultLocale}`)
}

export function LawFirmLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-blue-900/30 backdrop-blur-sm bg-black/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-xl">ATLAS LAW</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#team" className="text-sm hover:text-blue-400 transition-colors">
              Our Team
            </Link>
            <Link href="#testimonials" className="text-sm hover:text-blue-400 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-none">
            Free Consultation
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 z-[-1]"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Modern Legal Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Complex Challenges
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Our team of experienced attorneys provides exceptional legal representation with a modern approach to law
              practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-none px-8 py-6">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-900/20 px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Legal Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive legal services tailored to meet your specific needs with expertise and dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-10 w-10 text-blue-400" />,
                title: "Corporate Law",
                description:
                  "Comprehensive legal solutions for businesses of all sizes, from startups to established corporations.",
              },
              {
                icon: <Building className="h-10 w-10 text-blue-400" />,
                title: "Real Estate Law",
                description:
                  "Expert guidance through complex real estate transactions, disputes, and regulatory matters.",
              },
              {
                icon: <Users className="h-10 w-10 text-blue-400" />,
                title: "Family Law",
                description:
                  "Compassionate representation for divorce, child custody, and other family-related legal matters.",
              },
              {
                icon: <FileText className="h-10 w-10 text-blue-400" />,
                title: "Intellectual Property",
                description: "Protection for your creative works, innovations, and brand identity in the digital age.",
              },
              {
                icon: <Scale className="h-10 w-10 text-blue-400" />,
                title: "Litigation",
                description: "Strategic advocacy and representation in court proceedings and dispute resolution.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-blue-400" />,
                title: "Tax Law",
                description: "Expert advice on tax planning, compliance, and resolution of tax-related disputes.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-blue-950/20 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:bg-blue-900/30 transition-all hover:shadow-lg hover:shadow-blue-600/10 group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-20 blur-xl"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Law firm office"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Atlas Law</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2010, Atlas Law has established itself as a leading legal practice committed to excellence
                and client satisfaction. Our firm combines deep legal expertise with a modern approach to provide
                effective solutions for our clients.
              </p>
              <p className="text-gray-300 mb-6">
                We believe in building lasting relationships with our clients based on trust, transparency, and results.
                Our team of experienced attorneys is dedicated to understanding your unique needs and delivering
                tailored legal strategies.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-400 mb-2">500+</span>
                  <span className="text-gray-400">Successful Cases</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-400 mb-2">15+</span>
                  <span className="text-gray-400">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-400 mb-2">20+</span>
                  <span className="text-gray-400">Expert Attorneys</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-400 mb-2">98%</span>
                  <span className="text-gray-400">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-b from-black to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Legal Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet our team of experienced attorneys dedicated to providing exceptional legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alexandra Reynolds",
                role: "Managing Partner",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Michael Chen",
                role: "Corporate Law",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Sarah Johnson",
                role: "Litigation Specialist",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "David Williams",
                role: "Real Estate Law",
                image: "/placeholder.svg?height=400&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform z-20">
                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white/10 hover:bg-white/20 rounded-full w-8 h-8"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white/10 hover:bg-white/20 rounded-full w-8 h-8"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with our legal team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Atlas Law provided exceptional legal representation during a complex corporate merger. Their expertise and strategic approach were invaluable.",
                name: "Robert Thompson",
                title: "CEO, Innovate Tech",
              },
              {
                quote:
                  "The team at Atlas Law guided me through a difficult family law case with compassion and professionalism. I couldn't be more grateful for their support.",
                name: "Jennifer Martinez",
                title: "Client",
              },
              {
                quote:
                  "Their knowledge of intellectual property law helped us protect our brand during a critical growth phase. Highly recommended for any business.",
                name: "Mark Anderson",
                title: "Founder, Creative Solutions",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-950/20 backdrop-blur-sm border border-blue-900/30 rounded-xl p-8 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <div className="text-blue-600 opacity-20 text-8xl font-serif">"</div>
                </div>
                <p className="text-gray-300 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-950/30 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Have a legal question or need representation? Contact our team today to schedule a consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Office</h3>
                    <p className="text-gray-400">
                      123 Legal Avenue, Suite 500
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-gray-400">
                      info@atlaslaw.com
                      <br />
                      support@atlaslaw.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-gray-400">
                      (212) 555-1234
                      <br />
                      (800) 555-5678
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-950/20 backdrop-blur-sm border border-blue-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-blue-950/50 border border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-blue-950/50 border border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Legal consultation"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your legal needs..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-none py-6">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950/30 border-t border-blue-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Scale className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-xl">ATLAS LAW</span>
              </div>
              <p className="text-gray-400 mb-6">
                Providing exceptional legal services with a modern approach to law practice.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Practice Areas</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Corporate Law
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Real Estate Law
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Family Law
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Intellectual Property
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Litigation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for legal updates and insights.</p>
              <div className="flex lg:flex-col">
                <input
                  type="email"
                  className="flex-1 px-4 py-2 bg-blue-950/50 border border-blue-900/50 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email"
                />
                <Button className="rounded-l-none bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Atlas Law. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

