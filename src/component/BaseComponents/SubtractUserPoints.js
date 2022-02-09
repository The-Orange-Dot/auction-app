export const subtractPoints = (user, value) => {
  fetch(
    `https://boiling-forest-19458.herokuapp.com/users/change_points/${user.id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ points: user.points - value }),
    }
  );
};
