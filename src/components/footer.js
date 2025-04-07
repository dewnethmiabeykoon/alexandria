export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white p-8 mt-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src="/images/logo.png"
            alt="Institute of Alexandria Logo"
            className="w-48 h-auto mb-4" // Adjust size here
          />
          <p className="text-gray-300 text-sm">Empowering education with excellence.</p>
        </div>

        {/* Contact Section */}
        <div className="text-left">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p><a href="mailto:alexandriainstitute.sl@gmail.com" className="underline">alexandriainstitute.sl@gmail.com</a></p>
          <p>077-710-0307</p>
          <p>077-410-9023</p>
        </div>
        
        {/* Social Media Section */}
        <div className="text-left">
          <h3 className="font-bold text-lg mb-2">Social Media</h3>
          <p><a href="#" className="underline">Facebook</a></p>
          <p><a href="#" className="underline">Instagram</a></p>
        </div>
        
        {/* Location Section with Map */}
        <div className="text-left">
          <h3 className="font-bold text-lg mb-2">Location</h3>
          <div className="w-[250px] h-[150px]">
            <iframe
              src="https://maps.google.com/maps?q=6.9271,79.8612&z=15&output=embed"
              width="100%"
              height="100%"
              className="rounded-md shadow-lg"
              loading="lazy"
              style={{ border: "0" }}
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
