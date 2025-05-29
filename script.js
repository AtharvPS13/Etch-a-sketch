const squareperside=prompt("How many size grid do you need?");

function creategrid(squareperside){
    const container=document.querySelector("#container");
    container.innerHTML = "";
    const boxPercent = 100 / squareperside;

   for (let i = 0; i < squareperside * squareperside; i++) {
        const div = document.createElement('div');
        div.style.cssText = `
            width: ${boxPercent}%;
            aspect-ratio: 1 / 1;
            border: 1px solid black;
            background-color: lightBlue;
        `;
        container.appendChild(div);
    }
}
creategrid(squareperside);