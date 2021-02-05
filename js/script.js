//Create an empty object to receive the arrays
//let loadedArrays = {};

//Making sure objects that will be loaded are iterable because all operations will require some sort of iteration through the elements of the object
function isIterable(obj) {
	// checks for null and undefined
	if (obj == null) {
		return false;
	} 
	return typeof obj[Symbol.iterator] === "function"; //Will return true if the Symbol.iterator property is found for the obj AND that it is === to the type of Function prototype
}

function getContent(tab){
	$('#contentDiv').html('');
	if(tab == 'OSI'){
		$('#contentHeadling').html('The OSI Model');
		
		for(let [key, value] of Object.entries(arraysOfOSIModel)){
				if(!isIterable(value)){
					throw key + "is not iterable"; 
				}else{
					 $('#contentDiv').append("<div id='"+tab+"-"+key+"'></div>");
					 if(key == 'Definition' || key == 'Source'){
					 	$("#"+tab+"-"+key).html(value);
					 }
					 if(key == 'Layers'){

					 		for(let [key1, value1] of Object.entries(value)){
					 			$("#"+tab+"-"+key).append("<h2>"+value1.name+"</h2><p>"+value1.definition+"</p>");
					 		}
					 		
					 }
				}	
			}
	}else if(tab == 'IP'){
		$('#contentHeadling').html('IP Addressing and Subnetting');
		for(let [key, value] of Object.entries(arraysOfIP)){
				if(!isIterable(value)){
					throw key + "is not iterable"; 
				}else{
					 $('#contentDiv').append("<div id='"+tab+"-"+key+"'></div>");
					 if(key != 'Source'){
					 	$("#"+tab+"-"+key).html("<h2>"+key+"</h2><p>"+value+"</p>");
					 }
					 if(key == 'Source'){
					 	$("#"+tab+"-"+key).html(value);
					 }
				}	
			}	
			
	}else if(tab == 'TCP'){
		$('#contentHeadling').html('TCP and UDP');
		for(let [key, value] of Object.entries(arraysOfTCPModel)){
				if(!isIterable(value)){
					throw key + "is not iterable"; 
				}else{
					 $('#contentDiv').append("<div id='"+tab+"-"+key+"'></div>");
					 if(key == 'Definition' || key == 'Source'){
					 	$("#"+tab+"-"+key).html(value);
					 }
					 if(key == 'Layers'){

					 		for(let [key1, value1] of Object.entries(value)){
					 			$("#"+tab+"-"+key).append("<h3>"+value1.name+"</h3><p>"+value1.definition+"</p>");
					 		}
					 		
					 }
				}	
			}
	}else if(tab == 'DNS'){
		$('#contentHeadling').html('DNS');
		
		for(let [key, value] of Object.entries(arraysOfDNS)){
				if(!isIterable(value)){
					throw key + "is not iterable"; 
				}else{
					 $('#contentDiv').append("<div id='"+tab+"-"+key+"'></div>");
					 if(key == 'Definition' || key == 'Source'){
					 	$("#"+tab+"-"+key).html(value);
					 }
					 if(key == 'Layers'){

					 		for(let [key1, value1] of Object.entries(value)){
					 			$("#"+tab+"-"+key).append("<h3>"+value1.name+"</h3><p>"+value1.definition+"</p>");
					 		}
					 }
				}	
			}
	}else if(tab == 'Networking'){
		$('#contentHeadling').html('Networking Hardware');
		
		for(let [key, value] of Object.entries(arraysOfHardware)){
				if(!isIterable(value)){
					throw key + "is not iterable"; 
				}else{
					 $('#contentDiv').append("<div id='"+tab+"-"+key+"'></div>");
					 if(key == 'Definition' || key == 'Source'){
					 	$("#"+tab+"-"+key).html(value);
					 }
					 if(key == 'Hardware'){
					 		var text ="<h3>Hardwares:</h3><ul>"; 
					 		for(let [key1, value1] of Object.entries(value)){
					 			text = text+"<li>"+value1.name+"</li>";
					 		}
					 		$("#"+tab+"-"+key).append(text+"</li></ul>");
					 }
				}	
			}
	}else if(tab == 'Ports'){
		$('#contentHeadling').html('Ports');
		for(let [key, value] of Object.entries(arraysOfPort)){
				if(!isIterable(value)){
					throw key + "is not iterable"; 
				}else{
					 $('#contentDiv').append("<div id='"+tab+"-"+key+"'></div>");
					 if(key == 'Definition' || key == 'Source'){
					 	$("#"+tab+"-"+key).html(value);
					 }
					 if(key == 'PortNumber'){
					 		var text ="<h3>Notable well-known port numbers:</h3><ul>"; 
					 		for(let [key1, value1] of Object.entries(value)){
					 			text = text+"<li>"+value1.name+"</li>";
					 		}
					 		$("#"+tab+"-"+key).append(text+"</li></ul>");
					 }
				}	
			}
	}else if(tab == 'Software'){
		$('#contentHeadling').html('Software');
		
		for(let [key, value] of Object.entries(arraysOfSoftware)){
				if(!isIterable(value)){
					throw key + "is not iterable"; 
				}else{
					 $('#contentDiv').append("<div id='"+tab+"-"+key+"'></div>");
					 if(key == 'Definition' || key == 'Source'){
					 	$("#"+tab+"-"+key).html(value);
					 }
					 
				}	
			}
	}else if(tab == 'Git'){
		$('#contentHeadling').html('Adding an existing project to GitHub using the command line');
		for(let [key, value] of Object.entries(arraysOfGit)){
				if(!isIterable(value)){
					throw key + "is not iterable"; 
				}else{
					 $('#contentDiv').append("<div id='"+tab+"-"+key+"'></div>");
					 if(key == 'Definition' || key == 'Source'){
					 	$("#"+tab+"-"+key).html(value);
					 }
					 if(key == 'Steps'){
					 		var i =1;
					 		$("#"+tab+"-"+key).append("<h3>Steps:</h3>");
					 		for(let [key1, value1] of Object.entries(value)){
					 			$("#"+tab+"-"+key).append("<p> <b>"+i+"</b>   "+value1.step+"</p>");
					 			if(value1.code){
					 				$("#"+tab+"-"+key).append("<pre><code>"+value1.code+"</code></pre>");
					 			}
					 			i++;
					 		}
					 }
				}	
			}
	}
}