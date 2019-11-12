var container = document.querySelector('.container');


var but = document.createElement("button");
but.innerText = "Change Number Of Squares "; 
but.style.padding = ("5px 10px");


container.insertAdjacentElement('beforebegin',but);        


function CreateDivfun(num=16){
	var createDiv = document.createElement("div");
	createDiv.style.backgroundColor = "#000";
	createDiv.classList.add('BigDiv');
	createDiv.style.width = "500px";
	createDiv.style.height = "500px";
	createDiv.style.margin = "auto";
	createDiv.style.padding = "0";
	container.appendChild(createDiv);

  
	

	

	for (let j = 1; j <= num; j++) {
		for (let i = 1; i <= num; i++) {
			var div = document.createElement("div");
			div.style.backgroundColor = "#eee";
			div.style.width = `${500/num}px`;
			div.style.height = `${500/num}px`;	
			div.style.float = "left";	
			createDiv.appendChild(div);
		}
	
	}

var Divs = document.querySelectorAll('div');
  	
for (let c = 1; c <= Divs.length-1; c++) {
	Divs[c].addEventListener("mouseover", function() { Divs[c].style.backgroundColor = Get_Random_Color(999999)});
};
	
};
CreateDivfun();




function Get_Random_Color(number) {
    var num = Math.floor(Math.random() * (number) );
        return '#' + num;
  };



function Divs_Number() {

  var BigDiv = document.querySelector('.BigDiv');
  container.removeChild(BigDiv); 

  var Prompt_Message = prompt("Enter number of square on each side." , 16);
  CreateDivfun(Prompt_Message);  
};

but.addEventListener('click', Divs_Number);