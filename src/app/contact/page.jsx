import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="p-12 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-orange-500" />
              <span>email@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-orange-500" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-orange-500" />
              <span>New York, USA</span>
            </div>
          </div>
        </div>

        <form className="space-y-6" data-aos="fade-left">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
