function myFunction() {
    
    var element = document.getElementById("share");
    element.classList.toggle("show");
    document.getElementById("share").style.transition = "all 0.2s cubic-bezier(1, 1.33, 0, -0.5) 0s"
}