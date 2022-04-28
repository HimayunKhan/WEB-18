
    // console.log(arr)
    function render() {
        let arr = JSON.parse(localStorage.getItem('investors')) || []
        document.querySelector("#card").innerHTML = ""
        arr.forEach(function (elem, index) {

            // creating div 
            var box = document.createElement("div");
    
    
            //adding img,inverstor name,investor role,investor company logo in DIV
            var investor_avatar = document.createElement("img");
            investor_avatar.src = elem.img;
            //  set attribute islye likha kyuki img ka SRC(source bhi dena hai)
            var investor_name = document.createElement("h3");
            investor_name.innerText = elem.name;
            var investor_role = document.createElement("p");
            investor_role.innerText = elem.role;
            var investor_company = document.createElement("img");
            investor_company.src = elem.logo;
            btn = document.createElement('button')
            btn.innerText = 'delete'
            btn.addEventListener("click", function () {
                // console.log('claling here')
                deleteitem(elem, index);
                render()
                // window.reload()
            })
    
            //  set attribute islye likha kyuki img ka SRC(source bhi dena hai)
    
            // appending(img,inverstor name,investor role,investor company logo) in that DIV
            box.append(investor_avatar, investor_name, investor_role, investor_company, btn);
    
            // appending DIV into container
            document.querySelector("#card").append(box);
    
    
        });
    
    }render()
   
    // console.log(displaydata)


