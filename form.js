document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    console.log(obj.name);
    // for (let item of formData) {
    //   console.log(item[1]);
    // }
  });
});
