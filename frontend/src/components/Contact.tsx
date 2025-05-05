import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "budhdevkaushik1@gmail.com",
      href: "mailto:budhdevkaushik1@gmail.com?subject=Portfolio%20Inquiry",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+91 9896404852",
      href: "tel:+919896404852",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Chandigarh, India",
    },
  ];

  return (
    <section className="px-4 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-medium text-gray-100 mb-3">
          Contact Me
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Feel free to reach out for professional inquiries or collaboration
          opportunities
        </p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="text-gray-400 text-2xl mb-4">{item.icon}</div>
            <h3 className="text-sm text-gray-500 mb-2">{item.title}</h3>
            {item.href ? (
              <a
                href={item.href}
                className="text-gray-100 hover:text-white transition-colors text-lg font-medium"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-gray-100 text-lg font-medium">{item.value}</p>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Additional space for footer */}
      <div className="mt-24"></div>
    </section>
  );
};

export default Contact;
