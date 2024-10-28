import { motion } from "framer-motion"
import { SKILLS } from "../constants"

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visable: (delay=0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay,
        }
    })
}



const Skills = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-10" id="skills">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Skills
        </h2>
        <div className="h-1 w-20 bg-white mb-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
            {SKILLS.map((skill, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visable"
                    custom={index * 0.2}
                >
                    <img src={skill.image} alt={skill.name} className="w-20 h-20 mb-2" />
                    <p className="text-lg font-semibold">{skill.name}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Skills
