var p = 89;
			
var usedImages = new Array()
	for (i = 0; i < p; i++){
		var newChoice = Math.round(Math.random()*(p-1));
		while (contains(usedImages, newChoice)){
			newChoice = Math.round(Math.random()*(p-1));
		}
		usedImages[i] = newChoice
	}
		
function contains(arr, value) {
	var i = arr.length;
	while (i--) {
		if (arr[i] === value) return true;
	}
	return false;
}

function showImage(){
	for (i = 0; i < 6; i++){
		document.write('<img src="Pictures/'+usedImages[i]+'.jpg" alt="Image error" width="250" height="250" border="5">');
		}
	}
