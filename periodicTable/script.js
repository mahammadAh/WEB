  $(document).ready(function(){
    $('#tableDiv').append('<table id="table"></table>');
   $.getJSON("data.json", function(data){
    var row = 0;
	var column = 1;
    for(var i=0 ; i<data.length;) {
	if(column == 1){
	   row++;
       $('#table').append('<tr id=row'+row+'></tr>');
	   }
	if(parseInt(data[i].y) == row && parseInt(data[i].x) == column ){
	   if(data[i].type=='s'){
	   $('#row'+row).append('<td class="'+data[i].type+'ElementsTd" onmousedown="elementsClick(event)" onmouseenter="elementsOver(event)" onmouseleave="elementsOut(event)"><p>' + data[i].number + 
	                        '</p><p>' + data[i].sym  +
							'</p><p>' + data[i].name +
							'</p><p>' + data[i].weight +
	                        '</p><div class = "orbit sElementsOrbit"><div class="electron sElectron sElementsElectron"></div></td>');
	  }
	  else if(data[i].type=='p'){
	   $('#row'+row).append('<td class="'+data[i].type+'ElementsTd" onmousedown="elementsClick(event)" onmouseenter="elementsOver(event)" onmouseleave="elementsOut(event)"><p>' + data[i].number + 
	                        '</p><p>' + data[i].sym  +
							'</p><p>' + data[i].name +
							'</p><p>' + data[i].weight +
	                        '</p><div class = "orbit pElementsOrbit"><div class="electron pElementsElectron sElectron"></div><div class="electron pElementsElectron pElectron"></div></div></td>');
	  }
	  else if(data[i].type=='d'){
	   $('#row'+row).append('<td class="'+data[i].type+'ElementsTd" onmousedown="elementsClick(event)" onmouseenter="elementsOver(event)" onmouseleave="elementsOut(event)"><p>' + data[i].number + 
	                        '</p><p>' + data[i].sym  +
							'</p><p>' + data[i].name +
							'</p><p>' + data[i].weight +
	                        '</p><div class = "orbit dElementsOrbit"><div class="electron dElementsElectron sElectron"></div><div class="electron dElementsElectron pElectron"></div><div class="electron dElementsElectron dElectron"></div></div></td>');
	  }
	  else if(data[i].type=='f'){
	   $('#row'+row).append('<td class="'+data[i].type+'ElementsTd" onmousedown="elementsClick(event)" onmouseenter="elementsOver(event)" onmouseleave="elementsOut(event)"><p>' + data[i].number + 
	                        '</p><p>' + data[i].sym  +
							'</p><p>' + data[i].name +
							'</p><p>' + data[i].weight +
	                        '</p><div class = "orbit fElementsOrbit"><div class="electron fElementsElectron sElectron"></div><div class="electron fElementsElectron pElectron"></div><div class="electron fElementsElectron dElectron"></div><div class="electron fElementsElectron fElectron"></div></div></td>');
	  }

	   i++;
	   column++
	   }
	else {
	   $('#row'+row).append('<td></td>');
	   column++
	   }
	   if(column == 19){
		column = 1;
	}
	}
	
  });
});


function elementsClick(e){
	let element = e.currentTarget;
	element.style.zIndex= '2';
	element.style.transform = 'scale(1.5)';
	let fone = document.getElementById('dark');
	fone.style.zIndex= '1';
	let div = element.children[4];
	div.style.display = 'block';
	for (var i=0 ; i<div.children.length ; i++){
	div.children[i].style.display = 'block';
	}
}

function elementsOver(e){
	let element = e.currentTarget;
	element.style.transform = 'scale(1.2)';
}

function elementsOut(e){
	let element = e.currentTarget;
	element.style.transform = 'scale(1)';
	let fone = document.getElementById('dark');
    element.style.zIndex = '0';
	fone.style.zIndex= '-1';
	let div = element.children[4];
	div.style.display = 'none';
	div.children[0].style.display = 'none';
}
