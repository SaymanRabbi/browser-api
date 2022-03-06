 const inputValue = (id) => {
     let input = document.getElementById(id);
     const inputValueText = input.value;
     if (inputValueText==='') {
         return;
     }
        input.value = '';
        return inputValueText;
    
}
const submit = () => {
    const name = inputValue('name');
    const price = inputValue('price');
    if (typeof name === 'undefined' || typeof price === 'undefined') { 
            return;      
    }
        
    else {
        setItem(name, price);
        addLocalStorages(name,price)
        }
    
}
const submitLocal = () => {
    const localStorages = localStorage.getItem('cart');
    let inputToSubmit;
    if (localStorages) {
        inputToSubmit = JSON.parse(localStorages)
    }
       
    else {
        inputToSubmit = {};
    }
    return inputToSubmit;
};
const setItem = (name,price) => {
    const parent = document.getElementById('setItem');
    const p = document.createElement('p');
    p.style.marginBottom = '0'
    p.innerText = `${name} ${price}`;
    parent.appendChild(p);

} 
const addLocalStorages = (name,price) => {
    const cart = submitLocal();
    if ( cart[name]) {
        cart[name] = parseInt(cart[name]) + parseInt(price);
    }
    else {
        cart[name] = price;
    }
    const stringify = JSON.stringify(cart);
    localStorage.setItem('cart',stringify)
}
const placeOrder = () => {
    localStorage.removeItem('cart');
    document.getElementById('setItem').textContent = '';
    
}
const displayData = ()=>{
    const localStorageData = submitLocal();
    const parent = document.getElementById('setItem');
    
    for(const name in localStorageData) {
        const p = document.createElement('p');
        p.innerText = `${name} ${localStorageData[name]}`;
        parent.appendChild(p)
    }
}
displayData();
