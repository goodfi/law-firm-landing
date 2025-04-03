import { type Locale, getDictionary } from '@/lib/i18n/get-dictionary';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Scale,
  Briefcase,
  Building,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import LanguageSwitcher from '@/components/language-switcher';

export default async function LawFirmLanding({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

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
            <Link
              href="#home"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              {dict.navigation.home}
            </Link>
            <Link
              href="#services"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              {dict.navigation.services}
            </Link>
            <Link
              href="#about"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              {dict.navigation.about}
            </Link>
            <Link
              href="#team"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              {dict.navigation.team}
            </Link>
            <Link
              href="#testimonials"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              {dict.navigation.testimonials}
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              {dict.navigation.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={lang} />
            <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-none">
              {dict.cta.consultation}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 z-[-1]"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {dict.hero.title.split(' ').map((word, i, arr) =>
                i >= arr.length - 2 ? (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                  >
                    {word}{' '}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-none px-8 py-6">
                {dict.cta.schedule}
              </Button>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-900/20 px-8 py-6"
              >
                {dict.cta.learnMore}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-black to-blue-950/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.services.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {dict.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.services.items.map((service, index) => {
              const icons = [
                <Briefcase key={0} className="h-10 w-10 text-blue-400" />,
                <Building key={1} className="h-10 w-10 text-blue-400" />,
                <Users key={2} className="h-10 w-10 text-blue-400" />,
                <FileText key={3} className="h-10 w-10 text-blue-400" />,
                <Scale key={4} className="h-10 w-10 text-blue-400" />,
                <Briefcase key={5} className="h-10 w-10 text-blue-400" />,
              ];

              return (
                <div
                  key={index}
                  className="bg-blue-950/20 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:bg-blue-900/30 transition-all hover:shadow-lg hover:shadow-blue-600/10 group"
                >
                  <div className="mb-4">{icons[index]}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors"
                  >
                    {dict.cta.learnMore}{' '}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              );
            })}
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
                  src="/scott-graham-5fNmWej4tAA-unsplash.jpg"
                  alt="Law firm office"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {dict.about.title}
              </h2>
              <p className="text-gray-300 mb-6">{dict.about.description1}</p>
              <p className="text-gray-300 mb-6">{dict.about.description2}</p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-400 mb-2">
                    500+
                  </span>
                  <span className="text-gray-400">
                    {dict.about.stats.cases}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-400 mb-2">
                    15+
                  </span>
                  <span className="text-gray-400">
                    {dict.about.stats.experience}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-400 mb-2">
                    20+
                  </span>
                  <span className="text-gray-400">
                    {dict.about.stats.attorneys}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-400 mb-2">
                    98%
                  </span>
                  <span className="text-gray-400">
                    {dict.about.stats.satisfaction}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 bg-gradient-to-b from-black to-blue-950/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.team.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {dict.team.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.team.members.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
                  <Image
                    src={`/person${index + 1}.jpg`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.testimonials.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {dict.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-950/20 backdrop-blur-sm border border-blue-900/30 rounded-xl p-8 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <div className="text-blue-600 opacity-20 text-8xl font-serif">
                    "
                  </div>
                </div>
                <p className="text-gray-300 mb-6 relative z-10">
                  {testimonial.quote}
                </p>
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
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-blue-950/30 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {dict.contact.title}
              </h2>
              <p className="text-gray-300 mb-8">{dict.contact.subtitle}</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{dict.contact.office}</h3>
                    <p className="text-gray-400 whitespace-pre-line">
                      {dict.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{dict.contact.email}</h3>
                    <p className="text-gray-400 whitespace-pre-line">
                      {dict.contact.emailAddresses}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{dict.contact.phone}</h3>
                    <p className="text-gray-400 whitespace-pre-line">
                      {dict.contact.phoneNumbers}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-950/20 backdrop-blur-sm border border-blue-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                {dict.contact.form.title}
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {dict.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-blue-950/50 border border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={dict.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {dict.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-blue-950/50 border border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={dict.contact.form.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    {dict.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={dict.contact.form.subjectPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {dict.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={dict.contact.form.messagePlaceholder}
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-none py-6">
                  {dict.contact.form.submit}
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
              <p className="text-gray-400 mb-6">{dict.footer.description}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">
                {dict.footer.practiceAreas}
              </h3>
              <ul className="space-y-3">
                {dict.services.items.slice(0, 5).map((service, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">
                {dict.footer.quickLinks}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {dict.navigation.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {dict.navigation.team}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {dict.navigation.testimonials}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {dict.navigation.contact}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden">
              <h3 className="font-bold text-lg mb-6">
                {dict.footer.newsletter}
              </h3>
              <p className="text-gray-400 mb-4">{dict.footer.newsletterText}</p>
              <div className="flex">
                <input
                  type="email"
                  className="flex-1 px-4 py-2 bg-blue-950/50 border border-blue-900/50 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={dict.footer.emailPlaceholder}
                />
                <Button className="rounded-l-none bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-none">
                  {dict.footer.subscribe}
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {dict.footer.copyright}
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {dict.footer.privacy}
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {dict.footer.terms}
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {dict.footer.cookies}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
