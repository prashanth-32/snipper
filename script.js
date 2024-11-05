const HandleAdd = () =>{
    let Key = document.getElementById("AddSearch").value;
    if(Key == "")
    {
        alert("FileName can't be empty");
        return;
    }
    let Value = document.getElementById("Code").value;
    if(Value == "")
    {
        alert("Snippet can't be empty!");
        return;
    }
    alert(`Successfully added ${Key}`);
    localStorage.setItem(Key,Value);
    document.getElementById("AddSearch").value = "";
    document.getElementById("Code").value = "";
}

const HandleUpdate = () =>{
    let FileName = document.getElementById("SearchSnippet").value;
    let Value = document.getElementById("Code").value;
    if(Value == null)
    {
        alert("Please enter a valid snippet");
        return;
    }
    alert(`Successfully updated  ${FileName}`);
    localStorage.setItem(FileName,Value);
}

const HandleDelete = () =>{
    let FileName = document.getElementById("SearchSnippet").value;
    let Value = localStorage.getItem(FileName);
    if(Value == null)
    {
        alert(`No Snippet with name ${FileName}`);
        return;
    }
    localStorage.removeItem(FileName);
    alert(`Successfully Deleted ${FileName}`);
    document.getElementById("Code").value = "";
}

const HandleSearch = () => {
    let FileName = document.getElementById("SearchSnippet").value;
    let Value = localStorage.getItem(FileName);
    if(Value == null)
    {
        document.getElementById("Code").value = "";
        alert(`No Snippet with name ${FileName}`);
        return;
    }
    document.getElementById("Code").value = Value;
    alert(`Successfully Loaded ${FileName}`);

}