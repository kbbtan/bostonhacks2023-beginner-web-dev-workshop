function increaseCount () {
	let countString = document.getElementById("counter").innerHTML;
    let count = Number(countString);
	count = count + 1;
	document.getElementById("counter").innerHTML = count;
}
