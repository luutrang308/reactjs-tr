// 1
function(data, numLoop){
  let result = [];
    for(let i = 0; i < numLoop; i++){
	  result.push(data);
    }
    return result;
}

function(data, numLoop){
  let result = [];
   while(numLoop > 0){
	result.push(data);
	numLoop--;
   }
   return result;
}

// 2
function(arrs){
  let reversed = [];
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
