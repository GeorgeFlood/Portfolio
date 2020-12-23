const text = document.querySelector('.text');
const stringtext = text.textContent;
const splitText = stringtext.split('');
text.textContent = '';
for(let i = 0; i < splitText.length; i++){
	text.innerHTML += `<span class = 'headerspan'>` + splitText[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 150);

function onTick(){
	const span = text.querySelectorAll('span')[char];
	span.classList.add('jsfade');
	char++
	if(char === splitText.length){
		complete();
		return;
	}
}

function complete(){
	clearInterval(timer);
	timer = null;
}