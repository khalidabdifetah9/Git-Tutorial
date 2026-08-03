let nu = document.querySelectorAll(".inp");
const form = document.querySelector(".formm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    console.log(data);
    
    // for (const value of data.values()) {
    //     console.log(value);
    // }
});