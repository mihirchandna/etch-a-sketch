document.addEventListener("DOMContentLoaded", () => {
    const clearBtn = document.getElementById("clear");
    const eraserBtn=document.getElementById("eraser");
    const colorBtn=document.getElementById("BW");
    const resizeBtn=document.getElementById("resize");
    const grid = document.getElementById('grid');
    let size=16;

    let mouseDown = false;
    let currentMode='BW';

    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);

    function setupSize()
    {
        let aNumber = Number(window.prompt("Enter the New Size", ""));
        if(aNumber>100)
        {
            aNumber=100;
        }
        size=aNumber;
        reloadGrid();
    }

    function setupCurrentMode(newMode)
    {
        currentMode=newMode;
    }

    function changeColor(e)
    {
        if (mouseDown && currentMode=='BW') {
            e.target.style.backgroundColor = '#333333';
        }
        else if(mouseDown && currentMode=='eraser')
        {
            e.target.style.backgroundColor='#FFFFFF';
        }
    }

    function reloadGrid()
    {
        console.log("Check");
        grid.innerHTML='';
        setupGrid();
    }

    function setupGrid()
    {
        grid.style.gridTemplateColumns=`repeat(${size},1fr)`;
        grid.style.gridTemplateRows=`repeat(${size},1fr)`;

        for(let i=0;i<size*size;i++)
        {
            const gridElement=document.createElement('div');
            gridElement.classList.add('grid-element');
            gridElement.addEventListener('mouseover', changeColor);
            grid.appendChild(gridElement);
        }
    }

    clearBtn.onclick = () => reloadGrid();
    eraserBtn.onclick= () => setupCurrentMode('eraser');
    colorBtn.onclick= () => setupCurrentMode('BW');
    resizeBtn.onclick= () => setupSize();
    
    setupGrid();
});
