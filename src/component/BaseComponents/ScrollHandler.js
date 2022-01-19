export const scrollHandler = (vertical = 0) => {
  window.scrollBy({ top: vertical, behavior: "smooth" });
};
