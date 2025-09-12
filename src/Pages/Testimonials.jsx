import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
 
  function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

  // Fetch data from JSON server
  useEffect(() => {
    axios.get("http://localhost:3000/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);


  // Auto-rotate
  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials]);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 px-6 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">What Our Clients Say</h2>

      <div className="relative w-full max-w-xl">
        {testimonials.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-4 border-primary"
              />
              <p className="text-lg  text-gray-800 mb-4">"{testimonials[current].text}"</p>
              <h4 className="font-semibold text-blue-800 text-lg">{testimonials[current].name}</h4>
              <span className="text-sm text-gray-800">{testimonials[current].role}</span>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button onClick={prevTestimonial} className="btn btn-outline btn-sm">Prev</button>
          <button onClick={nextTestimonial} className="btn btn-outline btn-sm">Next</button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-primary" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}


export default Testimonials