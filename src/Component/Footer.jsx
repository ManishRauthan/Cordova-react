function Footer() {
  return (
    <>
      <ul className="bg-gray-900 text-amber-50 text-center space-x-40 flex justify-center p-4 fixed-bottom">
        <div>
          <h1 className="text-2xl">Contact Us</h1>
          <ul className="mt-4">
            <li>Address</li>
            <li>Phone Number</li>
            <li>E-mail</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl">Browse</h1>
          <ul className="mt-4">
            <li>Courses</li>
            <li>Worksheet</li>
            <li>Kids</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl">CORDOVA</h1>
          <ul className="mt-4">
            <li>+91 1720899</li>
            <li>www.cordova.co.in</li>
            <li>info@cordova.co.in</li>
          </ul>
        </div>
      </ul>
    </>
  );
}

export default Footer;
