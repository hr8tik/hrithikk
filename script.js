const textel = document.getElementById('text');

let idx =1;
const Ntext = 'HI \t\t I \tAM \t\t\tHRITHIK '
writeText()

function writeText(){
    
    textel.innerText = Ntext.slice(0,idx)
    idx++
     setTimeout(writeText,200)

}
const intro = document.querySelector('.intro');
