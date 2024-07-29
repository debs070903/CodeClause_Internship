const color1= document.getElementById('color1');
const color2= document.getElementById('color2');
const gType= document.getElementById('gradientType');
const preview= document.getElementById('preview');
const code= document.getElementById('code');

function setGradient(){
    let gValue;
    if(gType.value === 'to right'){
        gValue=`linear-gradient(to right, ${color1.value}, ${color2.value})`;
    }
    else if(gType.value === 'to left'){
        gValue=`linear-gradient(to left, ${color1.value}, ${color2.value})`;
    }
    else if(gType.value === 'to top'){
        gValue=`linear-gradient(to top, ${color1.value}, ${color2.value})`;
    }
    else if(gType.value === 'to bottom'){
        gValue=`linear-gradient(to bottom, ${color1.value}, ${color2.value})`;
    }
    else{
        gValue= `radial-gradient(circle, ${color1.value}, ${color2.value})`;
    }
    preview.style.background= gValue;
    code.innerText= gValue;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
gType.addEventListener('input', setGradient);

code.addEventListener('click', async function(){
    try {
        await navigator.clipboard.writeText(code.innerText);
        alert('Code copied to clipboard!');
    } catch (error) {
        console.error('Falied to copy', error);
        alert('Failed to copy code!')
    }
});