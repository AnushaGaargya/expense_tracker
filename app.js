var form = document.getElementById("user-form");
form.addEventListener('submit', addToLocal);



function addToLocal(e){
    e.preventDefault();
    // var x = 1;
    
    var subObj = new Object();
    var amount = document.getElementById('amt').value;
    var desc = document.getElementById('desc').value;
    var cat = document.getElementById('cat').value;
    subObj["amount"] = amount
    subObj["desc"] = desc
    subObj["cat"] = cat
   
    let subObj_serialized = JSON.stringify(subObj);
    localStorage.setItem(amount, subObj_serialized);
 
    //  let subObj_deserialized = JSON.parse(localStorage.getItem("subObj"));

      var paragraph = document.createElement("P");
      paragraph.innerHTML = `${subObj["amount"]} - ${subObj["desc"]} - ${subObj["cat"]}`;
      document.getElementById("test").appendChild(paragraph);
       // create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    paragraph.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", delete_fn);
        // create edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    paragraph.appendChild(editBtn);
    editBtn.addEventListener("click", edit_fn);

    document.getElementById("amt").value = null;
    document.getElementById("desc").value = null;


    function delete_fn(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                var item = e.target.parentElement; //the parent element of delete btn is list item. 
                document.getElementById("test").removeChild(item);
                const first = (item.textContent).split(' ')[0]
                localStorage.removeItem(first);

                document.getElementById("amt").value = null;
                document.getElementById("desc").value = null;
               
            }
        }
    }

    function edit_fn(e){
        if(e.target.classList.contains('edit')){
            
        var item = e.target.parentElement; //the parent element of edit btn is list item. 
        document.getElementById("test").removeChild(item);
        const first = (item.textContent).split(' ')[0]
        x = localStorage.getItem(first)
        const usr_obj = JSON.parse(x);
        console.log(usr_obj["amount"]);
        
        var amt = document.getElementById("amt");
        amt.value = usr_obj["amount"]
        var desc = document.getElementById("desc")
        desc.value = usr_obj["desc"]
        var cat = document.getElementById("cat")
        cat.value = usr_obj["cat"]

        localStorage.removeItem(first);
            
        }
    }
    

}


// console.log("Hi");
// localStorage.setItem("email",x );