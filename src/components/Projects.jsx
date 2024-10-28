import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
    const projectVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visable: {
            opacity: 1,
            scale: [1.1, 0.95, 1],
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                type: "spring",
                bounce: 0.3,
            },
        },
    };

    return (
        <section className="px-6 py-10" id="work">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Work</h1>
            <div className="h-1 w-20 mb-8 bg-white"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-lg overflow-hidden h-[500px] transition transform group"
                        initial="hidden"
                        whileInView="visable"
                        viewport={{ once: true }}
                        variants={projectVariants}
                    >
                        {/* Framsidan med bilden */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                        />

                        {/* Baksidan med rubrik, text och eventuell knapp */}
                        <div className="absolute inset-0 w-full h-full bg-black/30 flex flex-col justify-between transition-opacity duration-300 group-hover:bg-black/70">
                            <div className="relative z-20 p-6 flex flex-col justify-between h-full text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h2 className="text-2xl font-medium mb-4">{project.name}</h2>
                                <div className="flex flex-col justify-between">
                                    <p className="mb-4 flex-grow text-2xl">{project.description}</p>
                                    
                                    {/* Visa GitHub-knappen eller hemsidan */}
                                    {project.showGitHubButton ? (
                                        <a
                                            href={project.githubLink} // Länk till GitHub
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-200 text-center"
                                        >
                                            View on GitHub
                                        </a>
                                    ) : (
                                        <a
                                            href={project.siteLink} // Länk till hemsidan
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-200 text-center"
                                        >
                                            View Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
