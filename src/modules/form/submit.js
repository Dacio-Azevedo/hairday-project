import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.querySelector("#client");
const selectedDate = document.querySelector("#date");

//Data atual para o input
const currentDate = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
selectedDate.value = currentDate;
//Define a data mínima como sendo a atual
selectedDate.min = currentDate;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
        //Recuperando o nome do cliente.
        const name = clientName.value.trim();
        
        if(!name) {
            return alert("Informe o nome do cliente!");
        }

        //Recuperar o horário selecionado.
        const hourSelected = document.querySelector(".hour-selected");

        if(!hourSelected) {
            return alert("Selecione a hora.");
        }

        //Recupera somente a hora sem os minutos
        const [hour] = hourSelected.innerText.split(":");

        //Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour");

        //Gera um ID
        const id = new Date().getTime();

        console.log({
            id,
            name,
            when
        })

    } catch (error) {
        alert("Não foi possível realizar o agendamento");
        console.log(error);
    }
});