
function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getCrust(runningTotal,text1);
};	

function getCrust (runningTotal, text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	getSauce (runningTotal, text1);
}

function getSauce (runningTotal, text1) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	runningTotal = (runningTotal + sauceTotal);
	getCheese (runningTotal, text1);
}

function getCheese (runningTotal, text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	getMeat (runningTotal, text1);
}

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	getVeggies (runningTotal, text1);
};	

function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
			text1 = text1+veggiesArray[j].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	












