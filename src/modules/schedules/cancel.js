import {schedulesDay} from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
    period.addEventListener("click", async (event) =>{
        if(event.target.classList.contains("cancel-icon")){
            //Obtém a li pai do elemento clicado.
            const item = event.target.closest("li");

            //Obtém o ID do agendamento para remover
            const { id } = item.dataset;
            console.log(id);
            
            //Confirma se quer efetuar o cancelamento
            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?");

                if(isConfirm){
                    await scheduleCancel({ id });
                    //Recarrega os agendamentos.
                    schedulesDay();                
                }
            }

        }
    });
});