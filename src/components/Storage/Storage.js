const HandleStorage = () =>{
    const storageItems = localStorage.getItem("carts");
    let items = [];
    if(storageItems){
        items = JSON.parse(storageItems)
    }else{
        items = []
    }
    return items;
}

export { HandleStorage as UseStorage };

