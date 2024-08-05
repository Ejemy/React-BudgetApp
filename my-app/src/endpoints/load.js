export async function load() {
  console.log("load function")
   await fetch("/load")
    .then((response) => response.json())
    .then((data) => {
      console.log("LOAD payload:", data);
      return data
    });
}


