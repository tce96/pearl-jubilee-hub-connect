import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

// Import all images
import img1 from "@/assets/resort_image_1.jpeg";
import img2 from "@/assets/resort_image_2.jpeg";
import img3 from "@/assets/resort_image_3.jpeg";
import img4 from "@/assets/resort_image_4.jpeg";
import img5 from "@/assets/resort_image_5.jpeg";
import img6 from "@/assets/resort_image_6.jpeg";
import img7 from "@/assets/resort_image_7.jpeg";
import img8 from "@/assets/resort_image_8.jpeg";
import img9 from "@/assets/resort_image_9.jpeg";
import img10 from "@/assets/resort_image_10.jpeg";
import img11 from "@/assets/resort_image_11.jpeg";
import img12 from "@/assets/resort_image_12.jpeg";
import img13 from "@/assets/resort_image_13.jpeg";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13,
];

export default function ResortPicsPage() {
  return (
    <div className="px-6 py-12 lg:py-16 max-w-6xl mx-auto">

      <SectionHeading
        title="Jungle Stay Resort"
        subtitle="Venue for Friday Evening Celebration & Stay"
      />

      {/* About Section */}
      <div className="glass-card rounded-xl p-8 mt-8 space-y-4">
        <h3 className="text-xl font-serif font-semibold text-primary">
          About the Resort
        </h3>

        <p className="text-foreground/80 leading-relaxed">
          Jungle Stay Resort offers a serene and spacious environment on the outskirts of Madurai,
          providing the perfect setting for our Pearl Jubilee celebration. Surrounded by greenery
          and open spaces, it creates a relaxed atmosphere ideal for reconnecting with batchmates.
        </p>

        <p className="text-foreground/80 leading-relaxed">
          The resort will host the Friday evening celebration, dinner gala, cultural programs,
          and overnight accommodation for registered participants.
        </p>
      </div>

      {/* Accommodation Info */}
      <div className="glass-card rounded-xl p-8 mt-8 space-y-4">
        <h3 className="text-xl font-serif font-semibold text-primary">
          Accommodation Details
        </h3>

        <ul className="list-disc ml-6 space-y-2 text-foreground/80">
          <li>Limited rooms available within the resort.</li>
          <li>July 24 night – Triple sharing allocation at Jungle Stay.</li>
          <li>July 25 night – Optional stay based on participation count.</li>
          <li>Early check-in for limited rooms (subject to final confirmation).</li>
          <li>Final room allocation will be communicated after registrations close.</li>
        </ul>
      </div>

      {/* Facilities */}
      <div className="glass-card rounded-xl p-8 mt-8 space-y-4">
        <h3 className="text-xl font-serif font-semibold text-primary">
          Facilities
        </h3>

        <ul className="list-disc ml-6 space-y-2 text-foreground/80">
          <li>Open-air celebration space</li>
          <li>Dining hall for gala dinner</li>
          <li>Swimming pool area (subject to venue guidelines)</li>
          <li>Spacious lawns for group activities</li>
          <li>Ample parking facilities</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="mt-12">
        <h3 className="text-2xl font-serif font-bold text-center mb-8">
          Resort Gallery
        </h3>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={src}
                alt={`Resort image ${index + 1}`}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final Note */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        Final event layout, transport details, and room allocations will be shared
        closer to the event date.
      </div>

    </div>
  );
}