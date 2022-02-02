export const subtractPoints = (user, value) => {
  fetch(`http://localhost:3000/users/change_points/${user.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ points: user.points - value }),
  });
};
