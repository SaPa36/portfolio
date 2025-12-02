
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router"; // corrected import

// Import your project images (adjust paths accordingly)
import peakyMotelImg from "../assets/p-4p-1.png";
import bookReviewImg from "../assets/p-1p-1.png";
import busTicketImg from "../assets/p-2p-1.png";


const projects = [
  {
    id: "peakyMotel",
    name: "Peaky Motel",
    image: peakyMotelImg ,
    shortDescription:
     " This is a motel booking web app where users can register, log in, and explore various room options at Peaky Motel. Users can view detailed information about each room, such as amenities, pricing, and availability. ",
  },
  {
    id: "bookReview",
    name: "BookReview",
    image: bookReviewImg,
    shortDescription:
      "This is a book review web app where users can explore various books, read detailed information about each book, and share their reviews. ",
  },
  {
    id: "busTicket",
    name: "Bus Ticket",
    image: busTicketImg,
    shortDescription:
      "A bus ticket booking interface that shows available seats, updates the price as seats are selected, and includes a coupon system to apply discounts.",
  },
  
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-primary text-light font-bricolage py-20 px-6 md:px-20"
    >
      <motion.h2
        className="text-5xl font-extrabold text-secondary mb-16 text-center tracking-wide"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid gap-14 md:grid-cols-3">
        {projects.map(({ id, name, image, shortDescription }, i) => (
          <motion.div
            key={id}
            className="relative rounded-3xl bg-gradient-to-br from-blue-900/70 via-cyan-900/60 to-blue-900/70
              backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-cyan-600/40
              flex flex-col overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 * i }}
            whileHover={{ scale: 1.07, boxShadow: "0 25px 40px rgba(0, 255, 255, 0.35)" }}
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={image}
                alt={`${name} screenshot`}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">{name}</h3>
              <p className="text-gray-300 flex-grow leading-relaxed">{shortDescription}</p>
              <Link
                to={`/projects/${id}`}
                className="mt-8 inline-block bg-gradient-to-r from-cyan-700 to-blue-900 text-white font-bold px-6 py-3 rounded-full text-center hover:scale-105 transition-transform duration-300"
              >
                View More 
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
