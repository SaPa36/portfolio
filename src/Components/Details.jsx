import React from "react";
import { useParams, Link } from "react-router"; // ✅ Correct import
import bookReview2 from "../assets/p-1p-2.png";
import bookReview3 from "../assets/p-1p-4.png";
import bookReview4 from "../assets/p1-p-3.png";

import bus1 from "../assets/p-2p-1.png";
import bus2 from "../assets/p-2p-2.png";
import bus3 from "../assets/p-2p-3.png";


import peakyMotel1 from "../assets/p-4p-2.png";
import peakyMotel2 from "../assets/p-4p-3.png";
import peakyMotel3 from "../assets/p-4p-4.png";


const projectsDetails = {
  peakyMotel: {
    name: "Peaky Motel",
    images: [
      peakyMotel1,
      peakyMotel2,
      peakyMotel3
    ],
    techStack: [
      "Javascript",
      "Tailwind CSS",
      "DaisyUI",
      "React",
      "Firebase"
    ],
    description:
      "This is a motel booking web app where users can register, log in, and explore various room options at Peaky Motel. Users can view detailed information about each room, such as amenities, pricing, and availability.",
    liveLink: "https://peaky-motel.netlify.app/",
    githubClient: "https://github.com/SaPa36/assignment-9",
    
    challenges:
      "Managing user-selected room information in localStorage and ensuring data persists when the user revisits the app.Handling real-time updates for user preferences and room availability.",
    improvements:
      "Implement a backend with a database to securely store user data and manage authentication.Add features like booking history, payment integration, and admin panel for room management.Enable users to leave reviews and ratings for rooms."
  },
  bookReview: {
    name: "Book Review",
    images: [
      bookReview2,bookReview3,bookReview4
    ],
    techStack: ["React", "Firebase", "Node.js"],
    description:
      "This is a book review web app where users can explore various books, read detailed information about each book, and share their reviews. The app provides two options for organizing your reading journey — “Read” and “Wishlist.” You can easily add books to either section based on your preference.",
    liveLink: "https://heartfelt-wisp-6d3e37.netlify.app/",
    githubClient: "https://github.com/SaPa36/assignment-8?tab=readme-ov-file",
    challenges:
      "Storing user-selected book information in localStorage and ensuring the data persists when the user revisits the web app.",
    improvements:
      "Add a backend with a database to securely store user data and manage authentication.",
  },
  busTicket: {
    name: "Bus Ticket",
    images: [
      bus1,bus2,bus3
      
    ],
    techStack: [
      "JavaScript",
      "TailwindCSS",
      "DaisyUI",
    ],
    description:
      "This project is a bus ticket booking interface where users can view all available seats and select their preferred ones. Each selected seat is added to a price chart, automatically calculating the total cost. A coupon system is also included, allowing users to enter a valid coupon code to receive a discount on the overall price.",
    liveLink: "https://bus-ticket-landing-page3682.netlify.app/",
    githubClient: "https://github.com/SaPa36/Assignment-5",
    challenges:
      "Managing dynamic seat selection and updating the price in real time. Implementing and validating coupon logic correctly.",
    improvements:
      "Add backend support to store bookings. Include user authentication and booking history.",
  },
 
  

};

const Details = () => {
  const { id } = useParams();
  const project = projectsDetails[id];

  if (!project) {
    return (
      <div className="text-center p-16 bg-primary text-light">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Project Not Found
        </h2>
        <Link
          to="/"
          className="text-cyan-400 underline hover:text-cyan-600"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-primary py-20">
      <div className="bg-[#1E1E2F] text-white rounded-3xl shadow-xl py-16 px-6 md:px-20 max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">{project.name}</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {project.images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`${project.name} screenshot ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mb-8 text-lg leading-relaxed text-gray-300">
          {project.description}
        </p>

        {/* Tech Stack */}
        <h3 className="text-2xl font-semibold mb-2 text-cyan-300">Technology Stack</h3>
        <ul className="list-disc list-inside mb-8 text-gray-300">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-700 hover:bg-cyan-800 px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Live Project
          </a>
          <a
            href={project.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            GitHub (Client)
          </a>
        </div>

        {/* Challenges */}
        <h3 className="text-2xl font-semibold mb-2 text-cyan-300">Challenges Faced</h3>
        <p className="mb-8 text-gray-300">{project.challenges}</p>

        {/* Improvements */}
        <h3 className="text-2xl font-semibold mb-2 text-cyan-300">
          Potential Improvements & Future Plans
        </h3>
        <p className="text-gray-300">{project.improvements}</p>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mt-12 text-cyan-400 underline hover:text-cyan-600"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Details;
