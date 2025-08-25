import { Star } from "lucide-react";

export default function Background() {
  return (
    <section className="relative w-full h-[300px] bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Background Icon */}
      <Star
        className="absolute text-blue-200 opacity-20"
        size={300} // makes it big
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Foreground Content */}
      
    </section>
  );
}
