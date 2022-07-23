export async function getUsers() {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}users`).then((response) =>
    response.json()
  );
}
