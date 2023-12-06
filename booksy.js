
    var pop = document.querySelector(".popup");
    var popb = document.querySelector(".popupbox");
    var addb = document.getElementById("add-pop-up");
    var container = document.querySelector(".container");
    var addbook = document.getElementById("add");
    var booktitle = document.getElementById("book-tit");
    var bookauthor = document.getElementById("book-tit-au");
    var bookdess = document.getElementById("book-des");
    var cancelb = document.getElementById("del");

    addb.addEventListener("click", function () {
        popb.style.display = "block";
        pop.style.display = "block";
    });

    cancelb.addEventListener("click", function (event) {
        event.preventDefault();
        popb.style.display = "none";
        pop.style.display = "none";
    });

    addbook.addEventListener("click", function(event) {
        event.preventDefault();

       
        var titleValue = booktitle.value;
        var authorValue = bookauthor.value;
        var descriptionValue = bookdess.value;
        
        // Create a new book container
        var div = document.createElement("div");
        div.setAttribute("id","book-container")

        
        div.innerHTML = `<h2>${titleValue}</h2>
                         <h5>Author: ${authorValue}</h5>
                         <p>${descriptionValue}</p>
                         <button onclick="deletebook(event)">Delete</button>`;

        
        container.appendChild(div);

        
        booktitle.value = "";
        bookauthor.value = "";
        bookdess.value = "";

        popb.style.display = "none";
        pop.style.display = "none";
    });

    
    function closePopup() {
        popb.style.display = "none";
        pop.style.display = "none";
    }

    function deletebook(event){
        event.target.parentElement.remove();
    }


