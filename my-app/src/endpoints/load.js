export const load = () => {
  console.log("load function")
  fetch("/load")
    .then((response) => response.json())
    .then((data) => {
      console.log("LOAD payload:", data);
      return data
    });
}
