

// fonctionnalité 1:

function fonction1()
{
let i = 0;

let c = document.querySelector('footer');


	c.addEventListener("click", change);

	 function change(){ 

	console.log("CLIQUE MOIIIIIIIIIIIII encore!!!");
	console.log(`${i}`);
	i+=1;

		}

}
fonction1()



// fonctionalité 2:

unction burger() {

	var nav = document.getElementById("navbarHeader");
	var menu = document.querySelector("button.navbar-toggler");
	menu.addEventListener('click', add_or_removeCol);

	function add_or_removeCol(){
		nav.classList.toggle("collapse"); //fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente.
	};
}

burger();
	

	
	// fonction 3:

	
function color(){
	let a = document.getElementsByClassName("card-text")[0];

	let b = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];


	b.addEventListener("click",function(){

			 a.style.color = "red";

		});
	}

	color()
	


	 fonction 4 :

	function color1(){
	let a = document.getElementsByClassName("card-text")[1];

	let b = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];


	b.addEventListener("click",function(){

			if (a.style.color === "green"){
			 a.style.color = "";	
			}
			else {
				a.style.color = "green";
			}

		});
}

color1()


// fonction 5:

	function disableNav(){
		let b = document.getElementsByTagName("link")[0];

				addEventListener("dblclick",function(){

 			 	b.disabled = true;
		});
}

disableNav();


// fonction 6:


function zoomm(){

let frame = document.querySelectorAll('div.col-md-4');

let btn= document.querySelectorAll('div.btn-group');

for(let i = 0; i<frame.length;i++){




    	btn[i].firstElementChild.addEventListener('mouseover', zoom)


    		function zoom() {

     		if (frame[i].getElementsByTagName('img')[0].style.width === "20%") {


       			frame[i].getElementsByTagName('img')[0].style.width = "100%";
       			frame[i].querySelectorAll('card-text')[0].style.display = "block";
     		}

   
         		frame[i].getElementsByTagName('img')[0].style.width = "20%";
         		frame[i].querySelectorAll('card-text')[0].style.display = "none";
      		 }

		}
	}


	zoomm();


// fonction 7:



