let productimg = document.getElementById("productimg");
let btn = document.getElementsByClassName("btn");


btn[0].onclick = function(){
    productimg.src = "fashionimage/m1.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    productimg.src = "fashionimage/m2.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");

}
btn[2].onclick = function(){
    productimg.src = "fashionimage/m3.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");

}

