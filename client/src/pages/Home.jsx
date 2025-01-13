import React from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Wand2, Download } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Image imports from Hero section
import SampleImage1 from "../assets/images/Sample-Image1.jpg";
import SampleImage2 from "../assets/images/Sample-Image2.jpg";
import SampleImage3 from "../assets/images/Sample-Image3.jpg";
import SampleImage4 from "../assets/images/Sample-Image4.jpg";
import SampleImage5 from "../assets/images/Sample-Image5.jpg";

// Image imports from AIGeneratorHero section
import womanwithBioChip from "../assets/images/intro-image-dark-bg.png";
import articonlogo from "../assets/images/Logo-dark-bg.png";
import dallelogo from "../assets/images/dalle-logo-dark-bg.png";
import clipdroplogo from "../assets/images/Clipdrop-logo-dark-bg.png";

// Enhanced FadeInView component with continuous animations
const FadeInView = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: delay,
                ease: "easeOut",
              },
            }
          : {
              opacity: 0,
              y: 50,
              transition: {
                duration: 0.8,
                ease: "easeIn",
              },
            }
      }
    >
      {children}
    </motion.div>
  );
};

// Particle component for MagicCTA
const Particle = ({ style }) => (
  <div
    className="absolute w-8 h-8 rounded-full blur-xl"
    style={{
      ...style,
      background: "rgba(255,255,255,0.3)",
      boxShadow: "0 0 40px 20px rgba(255,255,255, 0.3)",
      backdropFilter: "blur(8px)",
    }}
  />
);

// Enhanced Star component with animation
const Star = () => (
  <motion.svg
    className="inline-block ml-1 transform rotate-12 w-14 h-14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="0.5"
    xmlns="http://www.w3.org/2000/svg"
    animate={{
      rotate: [12, -12, 12],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <path
      d="M7.39804 12.8085C7.57428 12.9328 7.78476 12.9994 8.00043 12.999C8.21633 12.9992 8.42686 12.9317 8.60243 12.806C8.77993 12.6755 8.91464 12.4952 8.98943 12.288L9.43643 10.915C9.55086 10.5707 9.74391 10.2578 10.0003 10.0011C10.2566 9.74436 10.5693 9.55089 10.9134 9.436L12.3044 8.98499C12.4564 8.93064 12.5936 8.84184 12.7055 8.72555C12.8174 8.60926 12.9008 8.46865 12.9492 8.31473C12.9977 8.1608 13.0098 7.99776 12.9847 7.83836C12.9596 7.67897 12.8979 7.52756 12.8044 7.396C12.6703 7.21007 12.4794 7.07283 12.2604 7.005L10.8854 6.558C10.5409 6.44377 10.2278 6.2508 9.97087 5.99441C9.71396 5.73803 9.52035 5.42528 9.40543 5.081L8.95343 3.693C8.88113 3.49069 8.74761 3.31593 8.57143 3.193C8.43877 3.09927 8.28607 3.03779 8.12548 3.01344C7.96489 2.9891 7.80083 3.00256 7.64636 3.05275C7.49188 3.10295 7.35125 3.1885 7.23564 3.3026C7.12004 3.41669 7.03265 3.55619 6.98043 3.71L6.52343 5.11C6.40884 5.44482 6.21967 5.74923 5.97022 6.00025C5.72076 6.25126 5.41753 6.44232 5.08343 6.559L3.69243 7.007C3.54065 7.06139 3.40352 7.15017 3.29177 7.26638C3.18001 7.3826 3.09666 7.5231 3.04824 7.67688C2.99982 7.83067 2.98764 7.99357 3.01265 8.15285C3.03767 8.31213 3.0992 8.46346 3.19243 8.595C3.32027 8.77445 3.50105 8.90942 3.70943 8.981L5.08343 9.42599C5.52354 9.57248 5.90999 9.84682 6.19343 10.214C6.35585 10.4246 6.4813 10.6613 6.56443 10.914L7.01643 12.305C7.08846 12.5083 7.22179 12.6842 7.39804 12.8085ZM7.48343 5.394L8.01043 4.017L8.44943 5.394C8.61312 5.88714 8.88991 6.33516 9.25767 6.70223C9.62544 7.06929 10.074 7.34524 10.5674 7.508L11.9734 8.03699L10.5914 8.48499C10.0987 8.64929 9.65095 8.92616 9.28382 9.29363C8.9167 9.6611 8.64026 10.1091 8.47643 10.602L7.95343 11.98L7.50443 10.601C7.34335 10.1077 7.06943 9.65883 6.70443 9.29C6.3356 8.92196 5.88653 8.64437 5.39243 8.479L4.01443 7.957L5.40043 7.507C5.88672 7.33836 6.32775 7.0602 6.68943 6.694C7.04901 6.32629 7.32049 5.8818 7.48343 5.394Z"
      fill="white"
    />
  </motion.svg>
);

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Dall-E-Studio');
  };{/*when generate now button click , navigate to Dall-E-Studio page*/}
  const [particles, setParticles] = React.useState([]);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  // Particle generation and mouse handling logic remains the same
  const generatePosition = React.useCallback((mouseX, mouseY) => {
    const position = {
      x: Math.random() * 100,
      y: Math.random() * 100,
    };

    const distance = Math.sqrt(
      Math.pow(position.x - mouseX, 2) + Math.pow(position.y - mouseY, 2)
    );

    if (distance < 20) {
      return generatePosition(mouseX, mouseY);
    }

    return position;
  }, []);

  const handleMouseMove = React.useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });

      setParticles((prev) =>
        prev.map((particle) => {
          const distX = x - particle.style.left.replace("%", "");
          const distY = y - particle.style.top.replace("%", "");
          const distance = Math.sqrt(distX * distX + distY * distY);

          if (distance < 20) {
            const newPos = generatePosition(x, y);
            return {
              ...particle,
              style: {
                ...particle.style,
                left: `${newPos.x}%`,
                top: `${newPos.y}%`,
                transition: "all 0.5s ease-out",
              },
            };
          }
          return particle;
        })
      );
    },
    [generatePosition]
  );

  React.useEffect(() => {
    const initialParticles = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0.6 + Math.random() * 0.4,
        transform: `scale(${1.5 + Math.random()})`,
        animation: `pulse ${3 + Math.random() * 2}s infinite`,
        filter: "blur(8px)",
      },
    }));
    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          style: {
            ...particle.style,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${1.5 + Math.random()})`,
            transition: "all 3s ease-in-out",
          },
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black">
      {/* Hero Section with enhanced animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="z-10 absolute pl-48 inset-x-0 bottom-0 h-[1500px] -py-10">
          <motion.div
            className="w-[85%] h-full bg-gradient-to-t from-neutral-800 via-black to-transparent opacity-95 blur-[120px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 1.5 }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto md:py-40">
          <FadeInView>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight">
              TURN YOUR TEXT to{" "}
              <span className="block mt-2">
                IMAGE,
                <span className="text-2xl sm:text-3xl lg:text-4xl font-light mt-2 px-5">
                  in second
                </span>
              </span>
            </h1>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Unleash your creativity with AI. Turn your imagination into visual
              art in seconds — just type, and watch the magic happen.
            </p>
          </FadeInView>

          <FadeInView delay={0.4}>
            <motion.div
              className="relative inline-block group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <button
                className="bg-gray-200/90 backdrop-blur-sm text-black px-6 py-2.5 rounded-full 
                    font-medium text-sm md:text-base
                    transition-all duration-300
                    hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.8)]
                    relative"
                onClick={handleClick}
              >
                Generate Image Now
              </button>
            </motion.div>
          </FadeInView>

          <FadeInView delay={0.6}>
            <div className="mt-16 grid grid-cols-5 sm:grid-cols-5 max-w-3xl mx-auto px-10 gap-4">
              {[
                SampleImage1,
                SampleImage2,
                SampleImage3,
                SampleImage4,
                SampleImage5,
              ].map((img, index) => (
                <motion.div
                  key={index}
                  className="h-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.8 + index * 0.1,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  <img
                    className="h-16 w-16 rounded-xl"
                    src={img}
                    alt={`sample-img-${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-white py-10 pb-0 mb-0 text-xs opacity-50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ delay: 1.3 }}
            >
              Sample generation from ARTICON
            </motion.p>
          </FadeInView>
        </div>
      </section>

      {/* How It Works Section with enhanced animations */}
      <section className="min-h-screen bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-normal mb-2">How It Works?</h2>
              <p className="text-gray-400">
                Transform Words Into Stunning Images
              </p>
            </div>
          </FadeInView>

          <div className="space-y-8">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Describe Your Vision",
                description:
                  "Type a phrase, sentence, or paragraph that describes the image you want to create.",
              },
              {
                icon: <Wand2 className="w-8 h-8" />,
                title: "Watch the Magic",
                description:
                  "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Download & Share",
                description:
                  "Instantly download your creation or share it with the world directly from our platform.",
              },
            ].map((step, index) => (
              <FadeInView key={index} delay={index * 0.2}>
                <motion.div
                  className="flex items-start gap-6 bg-transparent rounded-xl p-6 backdrop-blur-sm border border-white "
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-white text-black p-4 rounded-lg"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="flex-1 ">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* AI Generator Hero Section with enhanced animations */}
      <section className="bg-black min-h-screen flex items-center justify-center text-white relative">
        <div className="max-w-6xl p-5 md:pb-16 md:pt-24 md:mx-24 md:-mr-12 relative">
          <div className="relative md:flex md:flex-row items-center">
            <FadeInView delay={0.2}>
              <motion.div
                className="md:w-full w-full relative py-14"
                whileInView={{
                  x: [50, 0],
                  opacity: [0, 1],
                }}
                transition={{ duration: 1 }}
              >
                <img
                  src={womanwithBioChip}
                  alt="AI Image Generator"
                  className="w-full max-w-xs md:relative md:max-w-full absolute inset-0 opacity-20 md:opacity-100"
                />
              </motion.div>
            </FadeInView>

            <div className="md:w-1/2 relative z-10 text-lg md:text-left p-4">
              <FadeInView delay={0.4}>
                <h1 className="text-4xl md:text-3xl font-normal mb-7">
                  Introducing the AI-Powered Text to Image Generator
                </h1>
              </FadeInView>

              <FadeInView delay={0.6}>
                <p className="mb-4 text-md md:text-sm">
                  Easily bring your ideas to life with our free AI image
                  generator. Whether you need stunning visuals or unique
                  imagery, our tool transforms your text into eye-catching
                  images with just a few clicks.
                </p>
              </FadeInView>

              <FadeInView delay={0.8}>
                <p className="text-md md:text-sm">
                  Simply type in a text prompt, and our cutting-edge AI will
                  generate high-quality images in seconds. From product visuals
                  to character designs and portraits, even concepts that don't
                  yet exist can be visualized effortlessly.
                </p>
              </FadeInView>

              <FadeInView delay={1}>
                <motion.div
                  className="flex items-center justify-center space-x-8 mt-12"
                  whileInView={{
                    x: [50, 0],
                    opacity: [0, 1],
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {[
                    { src: articonlogo, alt: "Articon Logo" },
                    { src: dallelogo, alt: "DALL-E Logo" },
                    { src: clipdroplogo, alt: "ClipDrop Logo" },
                  ].map((logo, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && (
                        <div className="border border-white h-11" />
                      )}
                      <motion.img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-5 md:h-16 pe-1 md:p-5"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </React.Fragment>
                  ))}
                </motion.div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* Magic CTA Section with enhanced animations */}
      <section
        className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-3xl"
        onMouseMove={handleMouseMove}
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
        <motion.div
          className="absolute inset-0 backdrop-blur-3xl bg-black/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {particles.map((particle) => (
          <Particle key={particle.id} style={particle.style} />
        ))}

        <div className="text-center relative z-10">
          <FadeInView>
            <h1 className="text-white text-xl md:text-5xl font-light mb-8">
              See the magic. Try now
              <Star />
            </h1>
          </FadeInView>

          <FadeInView delay={0.2}>
            <motion.button
              className="bg-gray-200/90 backdrop-blur-sm text-black px-6 py-2.5 rounded-full 
                  font-medium text-sm md:text-base
                  transition-all duration-300
                  hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.8)]
                  relative"
              onClick={handleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Generate Image Now
            </motion.button>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default Home;
