
export function clickDisplay(buttons,array){
    buttons.forEach(button =>{
        button.addEventListener('click',() =>{
            const index = parseInt(button.dataset.index);
            const number = array[index];
            return number;
    })
}
