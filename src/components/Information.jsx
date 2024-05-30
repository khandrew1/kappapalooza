/* eslint-disable react/prop-types */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section = ({ title, content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <p className="text-6xl text-kappa-orangeyellow flex justify-center">
        {title}
      </p>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center text-center pt-3 font-bowlby text-2xl lg:text-4xl">
        {content.map((e, idx) => (
          <motion.p
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: e.duration || 0.5 },
              },
            }}
            className={`${e.color} flex flex-col w-full text-justify items-center justify-evenly`}
            key={idx}
          >
            {e.name}
          </motion.p>
        ))}
      </div>
    </>
  );
};

const DJs = [
  { name: "KevKev", color: "text-kappa-pinkish", duration: 0.3 },
  { name: "SPECIAL GUEST", color: "text-kappa-lightcyan", duration: 1.5 },
  { name: "Ilan", color: "text-kappa-lime", duration: 1.2 },
  { name: "Ceezee", color: "text-kappa-lightcyan", duration: 0.9 },
];
const activities = [
  { name: "Surprise", color: "text-kappa-lightcyan", duration: 0.3 },
  { name: "Dunk Tank", color: "text-kappa-lime", duration: 1.3 },
  { name: "Water Slide", color: "text-kappa-pinkish", duration: 0.4 },
];
const food = [
  { name: "Burgers", color: "text-kappa-pinkish", duration: 1 },
  { name: "Snow Cones", color: "text-kappa-lightcyan", duration: 0.7 },
  { name: "Hot Dogs", color: "text-kappa-lime", duration: 1.1 },
];
const drinks = [
  { name: "Moscow", color: "text-kappa-lime", duration: 0.5 },
  { name: "Screwdriver", color: "text-kappa-pinkish", duration: 1.3 },
  { name: "Mule & JJ", color: "text-kappa-lightcyan", duration: 0.9 },
];

const Information = () => {
  return (
    <div className="h-fit flex flex-col bg-gradient-to-b from-kappa-bluethree to-kappa-bluefour shadow-none justify-evenly gap-y-4">
      <Section title="Featuring" content={DJs} />
      <Section title="Activities" content={activities} />
      <Section title="Food" content={food} />
      <Section title="Drinks" content={drinks} />
    </div>
  );
};

export default Information;
