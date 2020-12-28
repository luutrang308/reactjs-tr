//bài 1: Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
function copyDataToArray1 (data, numLoop){
  let result = [];
    for(let i = 0; i < numLoop; i++){
	  result.push(data);
	}
	return result;
}
function copyDataToArray2 (data, numLoop){
  let result = [];
    while(numLoop > 0){
      result.push(data);
	  numLoop--;
	}
	return result;
}
function copyDataToArray3 (data, numLoop){
  return Array(numLoop).fill(data); 
}

//bài 2: Viết 1 hàm để đảo ngược 1 mảng
function reverseArray (arrs){
  let reversed = [];
    arrs.forEach(function(data) {
	  reversed.unshift(data);
  	});
  	return reversed;
}

//bài 3: Xóa đi các giá trị được xem là sai
function removeFalseData (arrs){
  return arrs.filter(function(data){
	return !!data;
  });
}

//bài 4: Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
function createObjectFromArrayData (arrs){
  return arrs.reduce(function(result, arr){
    let key = arr[0];
    result[key] = arr[1];
    return result;
  }, {});
}

//bài 5: Sắp xếp mảng tăng dần
function sortAscArray (arrs){
  return arrs.sort();
}

//bài 6: Kiểm tra input đầu vào có phải là object hay không?
function isObject (obj){
  return typeof obj == 'object' && !Array.isArray(obj);
}

//bài 7: Viết 1 hàm trả về các key+value (của 1 object) khác các key truyền vào.
function getDataWithoutArrayKeyInput1 (datas, arrKey){
  for(let keyIngor of arrKey){
	if(typeof datas[keyIngor] != 'undefined'){
	  delete datas[keyIngor];
	}
  }
	return datas;
}

//bài 8: Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa
function deleteIndex2And3InArray (arrs){
  arrs.splice(2, 2);
  return arrs;
}

//bài 9
//Điều kiện Pass: Điểm trên 5.0 và không có chữ Duy là tên đệm
//rule đặt ra là tên student luôn luôn có 3 chữ
function checkPassFailStudent (students){
  return students.reduce(function(result, student){
	let nameStudentSplit = student.name.split(' ');
	switch(true){
	  case nameStudentSplit[1].toLowerCase() == 'duy':
	  case student.score < 5:
		result.push('Fail');
		break;
	  default :
		result.push('Pass');
		break;
	  }
	return result;
  }, []);
}

//bài 10
function getStudentWithCustomScore (students){
  return students.filter(student => {
	let score 					= (student.score + '').split('.');
	let sumScore 				= parseInt(score[0]) + parseInt(score[1]);
	let splitSumScore 			= (sumScore + '').split('');
	let lastCharacterSumScore 	= splitSumScore.pop();
	return parseInt(lastCharacterSumScore) > 5;
  })
}