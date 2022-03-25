import { UseStorage } from "../Storage/Storage";

const handleCartStorage = (id, setError) =>{
    const itemsFromStorage = UseStorage();
    const isHas = itemsFromStorage.find(item => item === id)
    if(isHas){
        return setError("This Product you already added");
    }
    if(itemsFromStorage.length > 4){
        return setError("you can't add new products anymore.")
    }
    itemsFromStorage.push(id)
    localStorage.setItem("carts", JSON.stringify(itemsFromStorage))
}

export { handleCartStorage };

