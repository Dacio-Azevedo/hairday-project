import { schedulesDay } from "../schedules/load"

//Seleciona o input de data
const selectedDate = document.querySelector("#date");

//Recarregar a lista de horários quando o input de data mudar.
selectedDate.addEventListener("change", () => {
    schedulesDay();
});