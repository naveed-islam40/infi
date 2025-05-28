export default function Contactmobile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#003262] px-6 py-16">
        <h1 className="text-2xl font-bold text-[#84CC16] mb-6">
          Let's work together
        </h1>
        <div className="space-y-2">
          <p className="text-[#84CC16] text-lg">hello@infinitymesh.com</p>
          <p className="text-[#84CC16] text-lg">infinitymesh.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
            We'd love to hear from you
          </h2>
          <p className="text-[#65A30D] mb-8">
            Contact us regarding any concerns or inquiries.
          </p>

          <form className="space-y-6">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="firstName" className="text-[#1e3a5f] font-medium">
                First Name
              </label>
              <input
                id="firstName"
                className="bg-gray-100 border-0 h-12 text-[#1e3a5f] rounded-lg"
                placeholder=""
              />
            </div>

            <div className="space-y-2 flex flex-col">
              <label htmlFor="lastName" className="text-[#1e3a5f] font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                className="bg-gray-100 border-0 h-12 text-[#1e3a5f] rounded-lg"
                placeholder=""
              />
            </div>

            <div className="space-y-2 flex flex-col">
              <label htmlFor="company" className="text-[#1e3a5f] font-medium">
                Company
              </label>
              <input
                id="company"
                className="bg-gray-100 border-0 h-12 text-[#1e3a5f] rounded-lg"
                placeholder=""
              />
            </div>

            <div className="space-y-2 flex flex-col">
              <label htmlFor="message" className="text-[#1e3a5f] font-medium">
                Additional Message
              </label>
              <textarea
                id="message"
                className="bg-gray-100 border-0 min-h-[120px] text-[#1e3a5f] resize-none rounded-lg"
                placeholder=""
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 text-[#003262] font-medium cursor-pointer"
            >
              Send Message
              <img src="/svg/arrow-top-right.svg" alt="" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003262] px-6 py-12">
        <div className="max-w-md mx-auto">
          <h3 className="text-[#84CC16] text-lg font-bold mb-8 border-b border-[#84CC16] pb-5">
            OUR OFFICES
          </h3>

          <div className="space-y-8">
            <div className="flex gap-4 justify-between border-b border-[#84CC16] pb-5">
              <div>
                <h4 className="text-white font-bold mb-2">
                  Bosnia and Herzegovina
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  Radni 7A, Zmaj od Bosne b.b.,
                  <br />
                  71000 Sarajevo
                </p>
                <p className="text-gray-300 text-sm">+387 62 363 320</p>
              </div>
              <span className="text-[#84CC16] text-5xl font-bold">01</span>
            </div>

            <div className="flex gap-4 justify-between border-b border-[#84CC16] pb-5">
              <div>
                <h4 className="text-white font-bold mb-2">United States</h4>
                <p className="text-gray-300 text-sm mb-2">
                  175 SW 7th St Suite 1517, Miami,
                  <br />
                  FL 33130, USA
                </p>
                <p className="text-gray-300 text-sm">+1 347 851 7152</p>
              </div>
              <span className="text-[#84CC16] text-5xl font-bold">02</span>
            </div>

            <div className="flex gap-4 justify-between border-b border-[#84CC16] pb-5">
              <div>
                <h4 className="text-white font-bold mb-2">United States</h4>
                <p className="text-gray-300 text-sm mb-2">
                  3422 Old Capitol Tr, Wilmington,
                  <br />
                  DE 19808, USA
                </p>
                <p className="text-gray-300 text-sm">+1 347 851 7152</p>
              </div>
              <span className="text-[#84CC16] text-5xl font-bold">03</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
