let soal = database.ref("soal");

function input(){
	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	let c = document.getElementById('c').value;	
	
   /*
	alert("nilai nya");
	alert(a);
	alert(b);
	alert(c);
   */	
   
   a = parseInt(a);
   b = parseInt(b);
   c = parseInt(c);
   
   let hitung = {
		a:a,
		b:b,
		c:c
   };
   
		soal.push(hitung);
		alert("data sudah dimasukan");
		
		const D = b*b - 4 * a * c ;
		
		if(a != 0){
			let  x1 = (-b + Math.sqrt(D))/(2*a);
			let  x2 = (-b + Math.sqrt(D))/(2*a);
			document.write("Karena D = " +" "+ D + " " + ",akar nya yaitu "+" "+ x1.toPrecision(1) +" "+"dan"+" "+x2.toPrecision(1));
		}
		
		else if(D == 0){
			let  x = -b/2*a;
			document.write("Karena D = " + " " + D + " " + ",akar nya yaitu "+ " " +x.toPrecision(1));
		}
		
		else if(D < 0){
			document.write(" akarnya adalah akar imajiner ");
		}
		
		else{
			document.write(" tidak memilki akar ");
		}
		
   
}

  
function reset() {
	
	 document.getElementById('a').value ="";
	 document.getElementById('b').value ="";
	 document.getElementById('c').value ="";
	 
}
/*let persamaanKuadrat = {
	a: 2, 
	b: 1, 
	c: 4 
};
	soal.push(persamaanKuadrat);
	alert("data sudah masuk");
*/