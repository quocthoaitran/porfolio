import React from "react";
import { motion } from "framer-motion";
import { TechSkills } from "@/mock/skills";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 
  shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark 
  xs:dark:text-light xs:text-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 xs:text-4xl md:mb-8">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight '
      dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 
          shadow-dark cursor-pointer dark:text-dark dark:bg-light
          lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {TechSkills.map((skill) => (
          <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
        ))}
        {/* <Skill name="HTML" x="-15vw" y="2vh" />
        <Skill name="Javascript" x="30vw" y="-20vh" />
        <Skill name="ReactJS" x="0vw" y="12vh" />
        <Skill name="NextJS" x="-20vw" y="-15vh" />
        <Skill name="GatsbyJS" x="15vw" y="-12vh" />
        <Skill name="Web design" x="25vw" y="-5vh" />
        <Skill name="Figma" x="0vw" y="-10vh" />
        <Skill name="Firebase" x="-25vw" y="18vh" />
        <Skill name="Tailwind CSS" x="18vw" y="18vh" /> */}
      </div>
    </>
  );
};

export default Skills;
