import React, { useState, useEffect } from "react";
import { createOrder } from "../api/Orderapi";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://scarlit-backend.onrender.com/api/products/all");
        if (response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle product selection
  const handleProductChange = (e) => {
    const productId = e.target.value;
    const product = products.find(p => p._id === productId);
    setSelectedProduct(product);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Grab form data
    const formData = new FormData(e.target);
    const rawData = Object.fromEntries(formData.entries());

    // Validate required fields
    if (!rawData.product || !rawData.name || !rawData.email || !rawData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Map frontend field names to backend expected names
    const data = {
      name: rawData.name,
      email: rawData.email,
      phone: rawData.phone,
      product: rawData.product, // This will be the selected product ID
      selectedSize: rawData.size,
      selectedColour: rawData.colour,
      address: rawData.address,
      comments: rawData.comments
    };

    try {
      const res = await createOrder(data);

      if (res.data.success) {
        toast.success("✅ Order submitted successfully!");
        e.target.reset(); // clear form
        setSelectedProduct(null); // reset selected product
      } else {
        toast.error("❌ Failed: " + res.data.message);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("⚠️ Something went wrong. Please try again.");
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-white">Loading products...</div>;
  }

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
          <form onSubmit={handleSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="pb-2 pt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name *"
                  required
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              {/* Email */}
              <div className="pb-2 pt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email *"
                  required
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              {/* Phone */}
              <div className="pb-2 pt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number *"
                  required
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              {/* Product Selection */}
              <div className="pb-2 pt-2">
                <select
                  name="product"
                  id="product"
                  required
                  onChange={handleProductChange}
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                >
                  <option value="">Select Product *</option>
                  {products.map((product) => (
                    <option key={product._id} value={product._id}>
                      {product.name} - {product.brand}
                    </option>
                  ))}
                </select>
              </div>
              {/* Size - only show if product is selected */}
              <div className="pb-2 pt-2">
                <select
                  name="size"
                  id="size"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  disabled={!selectedProduct}
                >
                  <option value="">Select Size</option>
                  {selectedProduct?.sizes?.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              {/* Colour - only show if product is selected */}
              <div className="pb-2 pt-2">
                <select
                  name="colour"
                  id="colour"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  disabled={!selectedProduct}
                >
                  <option value="">Select Colour</option>
                  {selectedProduct?.colours?.map((colour) => (
                    <option key={colour} value={colour}>
                      {colour}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="pb-2 pt-2">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address *"
                required
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
              <button 
                type="submit"
                className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
              >
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
