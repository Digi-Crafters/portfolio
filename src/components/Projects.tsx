"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import data from "../../src/app/data/projects.json"

const projectsData = data;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Projects per page based on screen size
  const projectsPerPage = isMobile ? 3 : 6;

  // Extract unique categories
  const categories = [
    "All",
    ...Array.from(new Set(projectsData.map((project) => project.category))),
  ];

  // Filter projects by category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) => {
        return project.category === activeCategory;
      });
      setFilteredProjects(filtered);
    }
    // Reset to page 1 when category changes
    setCurrentPage(1);
  }, [activeCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Handle page change
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll to projects section
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Scroll to projects section
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle project click
  const openProjectModal = (projectId: number) => {
    setCurrentProject(projectId);
    setIsModalOpen(true);
  };

  // Close project modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setCurrentProject(null), 300);
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.18, 0.08, 0.18],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#e3f6fd]/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-[#b3e0f7]" />
              Our Portfolio
              <Sparkles className="w-4 h-4 text-[#b3e0f7]" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-lg max-w-2xl mx-auto text-[#e3f6fd]">
            Explore our recent work and see how we
            <span className="text-white font-semibold">
              {" "}
              transform ideas into digital reality
            </span>
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              className={`px-5 py-2 rounded-full border ${
                activeCategory === category
                  ? "bg-white text-black border-white"
                  : "bg-transparent border-white/20 text-[#e3f6fd] hover:bg-white/10"
              } transition-all duration-300`}
              onClick={() => {
                setActiveCategory(category);
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentPage}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => openProjectModal(project.id)}
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                    <div className="absolute inset-0 bg-[#e3f6fd]/30 group-hover:opacity-0 transition-opacity duration-500" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={project.featured}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-[#e3f6fd] text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-white/10 text-[#b3e0f7] rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-white/10 text-[#b3e0f7] rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#e3f6fd]/70">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Gradient */}
                  <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white via-[#e3f6fd] to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-[#e3f6fd] text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            className="flex items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 ${
                currentPage === 1
                  ? "bg-white/5 border-white/10 text-white/30 cursor-not-allowed"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-white/70 text-sm">
                Page {currentPage} of {totalPages}
              </span>
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-white/5 border-white/10 text-white/30 cursor-not-allowed"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {isModalOpen && currentProject && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectModal}
            >
              <motion.div
                className="relative w-full max-w-4xl bg-black border border-white/20 rounded-2xl overflow-hidden"
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  onClick={closeProjectModal}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Project details */}
                {projectsData
                  .filter((p) => p.id === currentProject)
                  .map((project) => (
                    <div key={project.id} className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2 flex items-center justify-center bg-black p-8">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="rounded-xl max-w-full h-auto object-contain bg-black"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                      <div className="w-full md:w-1/2 p-8">
                        <span className="inline-block px-3 py-1 bg-[#e3f6fd]/20 text-[#e3f6fd] text-xs rounded-full mb-4">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-[#e3f6fd] mb-6">
                          {project.description}
                        </p>

                        <div className="mb-8">
                          <h4 className="text-white text-sm font-semibold mb-2">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="text-xs px-2 py-1 bg-white/10 text-[#b3e0f7] rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e3f6fd]/20 transition-all duration-300"
                        >
                          Visit Project <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 text-6xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Zap className="text-white/10" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-4xl"
        animate={{
          rotate: [360, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="text-white/10" />
      </motion.div>
    </section>
  );
};

export default Projects;