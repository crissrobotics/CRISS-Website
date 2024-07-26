export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction, delay) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: delay },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
    viewport: { once: true },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.2 },
  },
  whileInView: {
    opacity: 1,
    transition: { ...transition, delay: 0.8 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
  viewport: { once: true },
};

export const HeadAnimation = (direction, delay) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    whileInView: { x: 0, y: 0, opacity: 1 },
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 40,
      restDelta: 0.001,
      duration: 0.3,
      delay: delay,
    },
    viewport: { once: true },
  };
};