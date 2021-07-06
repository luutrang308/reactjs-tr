// 1
function(data, numLoop){
  var result = [];
    for(var i = 0; i < numLoop; i++){
	  result.push(data);
    }
    return result;
}

function(data, numLoop){
  var result = [];
   while(numLoop > 0){
	result.push(data);
	numLoop--;
   }
   return result;
}

// 2
function(arrs){
  var reversed = [];
	arrs.forEach(function(data) {
    reversed.unshift(data);
  });
  return reversed;
}

// 3
function(arrs){
  return arrs.filter(function(data){
	return !!data;
  });
}

// 5
function(arrs){
  return arrs.sort();
}

// 6
function(obj){
  return typeof obj == 'object' && !Array.isArray(obj);
}
