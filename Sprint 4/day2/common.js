var investors = JSON.parse(localStorage.getItem("investors")) || [];


function deleteitem(elem, index) {
    investors.splice(index, 1);
    localStorage.setItem("investors", JSON.stringify(investors))
    
    // window.location.reload();
}
