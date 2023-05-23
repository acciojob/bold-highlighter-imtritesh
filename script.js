function highlight() {
    //Write your code here
	let strongs = document.querySelectorAll("strong");
	// [strong1, strong2 ,,,,,]
	strongs.forEach((strong)=>{
		strong.style.color = "green";
	})

}


function return_normal() {
    //Write your code here
	let strongs = document.querySelectorAll("strong");// strong1
	strongs.forEach((strong)=>{
		strong.style.color = "black";
	})
    
}
