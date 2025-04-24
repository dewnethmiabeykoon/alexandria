export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-black text-white px-10 py-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and Tagline */}
        <div>
          <img src="/images/logo.png" alt="Logo" className="h-20 w-20 mb-3" />
          <p className="text-white text-xl font-medium">Empowering education with excellence.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-3">Contact Us</h3>
          <p>Email: <a href="mailto:alexandriainstitute.sl@gmail.com" className="underline">alexandriainstitute.sl@gmail.com</a></p>
          <p>Phone: 077-710-0307</p>
          <p>Phone: 077-410-9023</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-3">Social Media</h3>
          <p><a href="https://facebook.com/alexandriabattaramulla" target="_blank" className="underline">Facebook</a></p>
          <p><a href="https://instagram.com/institute_of_alexandria" target="_blank" className="underline">Instagram</a></p>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-3">Location</h3>
          <div className="rounded-md overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=6.9271,79.8612&z=15&output=embed"
              width="100%"
              height="150"
              style={{ border: "0" }}
              loading="lazy"
              title="Map Location"
            ></iframe>
          </div>
        </div>

      </div>
    </footer>
  );
}
