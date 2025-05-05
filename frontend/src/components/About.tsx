import { motion } from "framer-motion";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Kurukshetra University",
      year: "2019-2022",
      achievements: [],
    },
  ];

  const experience = [
    {
      position: "Full-Stack Developer",
      company: "TeQ Mavens Pvt Ltd",
      period: "Jul 2023 - May 2025",
      achievements: [
        "Led team that increased user retention by 40%",
        "Reduced page load times by 60% through optimization",
        "Integrated AI-powered recommendation system boosting engagement by 25%",
        "Implemented Unlayer for dynamic email template creation, improving marketing efficiency",
      ],
    },
    {
      position: "Frontend Developer",
      company: "Artzen Technologies Pvt Ltd",
      period: "Mar 2023 - Jul 2023",
      achievements: [
        "Developed and optimized 8+ responsive UI components using ReactJS and Tailwind CSS",
        "Implemented state management using Redux Toolkit for scalable component interaction",
        "Built dynamic pages and optimized routing with Next.js for improved performance",
        "Used TypeScript for type safety and improved code maintainability across the codebase",
        "Collaborated with the team to contribute improvements to a shared React component library",
      ],
    },
    {
      position: "Frontend Trainee",
      company: "ThinkNEXT Technologies Pvt Ltd",
      period: "Aug 2021 - Nov 2021",
      achievements: [
        "Learned and practiced core frontend technologies including HTML5, CSS3, JavaScript, and Bootstrap",
        "Built mini-projects to strengthen understanding of responsive web design and DOM manipulation",
        "Gained hands-on experience in ReactJS fundamentals including components, props, and state",
        "Explored Git and GitHub for version control and collaborative development",
        "Completed certification in Industrial Training with a focus on frontend web development",
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/3"
      >
        <h2 className="text-3xl font-bold mb-6">
          About <span className="text-purple-400">Me</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="md:w-2/3"
      >
        <p className="text-lg mb-4">
          I'm a{" "}
          <span className="text-purple-400 font-medium">
            MERN Stack Developer
          </span>{" "}
          with 2+ years of experience crafting digital experiences that users
          love. I bridge the gap between elegant interfaces and robust backend
          systems.
        </p>

        {/* <p className="text-lg mb-4">
          My coding journey began in college when I built a campus event portal
          that's still used by 5,000+ students annually. That experience taught
          me how{" "}
          <span className="font-medium">
            technology can solve real-world problems
          </span>{" "}
          at scale.
        </p> */}

        <div className="mb-8">
          <h3 className="font-semibold text-purple-400 mb-3">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-purple-500 pl-4">
                <h4 className="font-medium">{edu.degree}</h4>
                <p className="text-gray-400">
                  {edu.institution} • {edu.year}
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  {edu.achievements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold text-purple-400 mb-3">Experience</h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-purple-500 pl-4">
                <h4 className="font-medium">{exp.position}</h4>
                <p className="text-gray-400">
                  {exp.company} • {exp.period}
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
