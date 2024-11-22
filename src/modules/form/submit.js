import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.querySelector("#date");

//Data atual para o input
const currentDate = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
selectedDate.value = currentDate;
//Define a data mínima como sendo a atual
selectedDate.min = currentDate;

form.addEventListener("submit", (event) => {
    event.preventDefault();

});