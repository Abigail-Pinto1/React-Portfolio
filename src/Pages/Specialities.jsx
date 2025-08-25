import { Smartphone, Palette, Zap, Compass } from "lucide-react";
import Background from './Background'

export default function Specialities() {
  return (
    <>
    
    <section className="py-16 px-4 items-center justify-center text-center">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">My Specialities</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Mobile App */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition p-4 flex flex-col items-center">
          <figure className="p-4">
            <Smartphone size={60} className="text-blue-500" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-lg mb-2">Mobile App</h2>
            <ul className="list-disc text-left ml-6 text-sm space-y-1">
              <li>Design Material</li>
              <li>Creative Teamwork</li>
              <li>Trend & Data Analysis</li>
              <li>Google Payment Detail</li>
            </ul>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition p-4 flex flex-col items-center">
          <figure className="p-4">
            <Palette size={60} className="text-pink-500" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-lg mb-2">UI/UX Design</h2>
            <ul className="list-disc text-left ml-6 text-sm space-y-1">
              <li>Trendy Design</li>
              <li>User Research</li>
              <li>Google Payment Detail</li>
              <li>Develop Friendly</li>
            </ul>
          </div>
        </div>

        {/* Interactive Design */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition p-4 flex flex-col items-center">
          <figure className="p-4">
            <Zap size={60} className="text-yellow-500" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-lg mb-2">Interactive Design</h2>
            <ul className="list-disc text-left ml-6 text-sm space-y-1">
              <li>Experienced Teamwork</li>
              <li>Satisfied Feedback</li>
              <li>Trend & Data Analysis</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>

        {/* Design Strategy */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition p-4 flex flex-col items-center">
          <figure className="p-4">
            <Compass size={60} className="text-green-500" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-lg mb-2">Design Strategy</h2>
            <ul className="list-disc text-left ml-6 text-sm space-y-1">
              <li>Design Framework</li>
              <li>Creative Content</li>
              <li>Customer Satisfaction</li>
              <li>Payment Detail</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
