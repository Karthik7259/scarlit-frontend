import React from "react";
import { createOrder } from "../api/Orderapi";
import { toast } from "react-toastify";


const Home = () => {


const handleSubmit = async (e) => {
  e.preventDefault();

  // Grab form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await createOrder(data);

    if (res.data.success) {
      toast.success("✅ Order submitted successfully!");
      e.target.reset(); // clear form
    } else {
      toast.error("❌ Failed: " + res.data.message);
    }
  } catch (error) {
    console.error("Error submitting order:", error);
    toast.error("⚠️ Something went wrong. Please try again.");
  }
};



  return (
    <section className="min-h-screen flex items-stretch text-white">
      {/* Left side */}
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl my-4">
            Capture your personal memory in unique way, anywhere.
          </p>
        </div>
        {/* Social icons */}
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <span>
            {/* Twitter Icon */}
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 ..."></path>
            </svg>
          </span>
          <span>
            {/* Facebook Icon */}
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12 ..."></path>
            </svg>
          </span>
          <span>
            {/* Instagram Icon */}
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 ..."></path>
            </svg>
          </span>
        </div>
      </div>

      {/* Right side */}
      <div
        className="lg:w-1/2 w-full flex items-start justify-center text-center md:px-16 px-0 z-0 pt-6"
        style={{ backgroundColor: "#161616" }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>

        {/* Form container */}
        <div className="w-full z-20">
          <h1 className="my-2">
            {/* Logo SVG */}
            <svg
              viewBox="0 0 247 31"
              className="w-auto h-7 sm:h-8 inline-flex"
            >
              <path
                fill="rgba(99,102,241, .8)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.517 0C18.712 0 ..."
              ></path>
            </svg>
          </h1>

          {/* Company name */}
          <p className="text-gray-100 font-bold text-4xl mb-6">
            Scarlit Solution LLP
          </p>

          {/* Form */}
          <form 
           onSubmit={handleSubmit}
          className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="pb-2 pt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              {/* Email */}
              <div className="pb-2 pt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              {/* Phone */}
              <div className="pb-2 pt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              {/* Product Type */}
              <div className="pb-2 pt-2">
                <select
                  name="productType"
                  id="productType"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                >
                  <option value="">Select Product</option>
                  <option>With Zip Hoodie</option>
                  <option>Without Zip Hoodie</option>
                  <option>Polo-shirt</option>
                  <option>Jacket</option>
                  <option>Bonded Fleece</option>
                  <option>Varsity Jacket</option>
                  <option>Crop-Top</option>
                  <option>Round Neck T-shirt</option>
                  <option>Windcheater</option>
                  <option>Nashville Jacket</option>
                  <option>Asger Hoodie</option>
                  <option>Sweatshirt</option>
                  <option>Austin Hoodie</option>
                  <option>Austin Jacket</option>
                </select>
              </div>
              {/* Brand */}
              <div className="pb-2 pt-2">
                <select
                  name="brand"
                  id="brand"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                >
                  <option value="">Select Brand</option>
                  <option>Adidas</option>
                  <option>Rare Rabbit</option>
                  <option>UCB</option>
                  <option>USPA</option>
                  <option>M&S</option>
                  <option>Stellar</option>
                  <option>G4C</option>
                  <option>Jack & Jones</option>
                  <option>Scott</option>
                  <option>Spinnex</option>
                  <option>UG</option>
                  <option>Xech</option>
                  <option>Oblique</option>
                </select>
              </div>
              {/* Size */}
              <div className="pb-2 pt-2">
                <select
                  name="size"
                  id="size"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                >
                  <option value="">Select Size</option>
                  <option>XS</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>3XL</option>
                </select>
              </div>
              {/* Colour */}
              <div className="pb-2 pt-2">
                <select
                  name="colour"
                  id="colour"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                >
                  <option value="">Select Colour</option>
                  <option>Black</option>
                  <option>Navy Blue</option>
                  <option>Maroon</option>
                  <option>White</option>
                  <option>Grey Melange</option>
                  <option>Dark Grey</option>
                  <option>Petrol</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="pb-2 pt-2">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            {/* Comments */}
            <div className="pb-2 pt-2">
              <textarea
                name="comments"
                id="comments"
                placeholder="Additional Comments (Customisation details)"
                rows="4"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>

            {/* Submit */}
            <div className="px-4 pb-2 pt-4">
              <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;
