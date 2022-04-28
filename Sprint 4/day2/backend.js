document.querySelector("#abcd").addEventListener("submit", myfunction)

    // common
    // var investors = JSON.parse(localStorage.getItem("investors")) || [];
    displaydata(investors)
    function myfunction(event) {
        event.preventDefault()


        var obj = {
            name: abcd.name.value,
            img: abcd.img1.value,
            logo: abcd.logo.value,
            role: abcd.role.value
        };

        investors.push(obj);


        localStorage.setItem("investors", JSON.stringify(investors))
        event.target.reset()
        displaydata(investors);
    }



    function displaydata(investors) {
        document.querySelector("tbody").innerText = ""
        investors.forEach(function (elem, index) {

            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            td1.innerText = elem.name


            var td2 = document.createElement("td");
            td2.innerText = elem.img

            var td3 = document.createElement("td");
            td3.innerText = elem.logo

            var td4 = document.createElement("td");
            td4.innerText = elem.role

            var td5 = document.createElement("td");
            td5.innerText = "Delete"
            td5.style.backgroundColor = "teal"
            td5.style.color = "black"
            td5.style.cursor = "pointer"
            td5.addEventListener("click", function () {
                deleteitem(elem, index);
                displaydata(investors)
            })

            tr.append(td1, td2, td3, td4, td5)
            console.log(tr)
            document.querySelector("tbody").append(tr)

        });
    }



    //common
    // function deleteitem(elem, index) {
    //     investors.splice(index, 1);
    //     localStorage.setItem("investors", JSON.stringify(investors))
    //     displaydata(investors)
    //     // window.location.reload();
    // }




    //    var a= document.querySelector("#name").value;
    //    var b= document.querySelector("#img1").value;
    //    var c= document.querySelector("#logo").value;
    //    var d= document.querySelector("#role").value;
