import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader = async ()=>{
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    // If cart in your database, you have to use asynce
    // storeCart ta hocce  local store ta re manage korar ekta variable. 
    // amra for of marbo array er upor ar for in marbo object er upor.
    const storeCart = getShoppingCart();
    const savedCart = [];
    for(const id in storeCart){
        const adddedProduct = products.find(pd => pd.id === id);
        if(adddedProduct){
            const quantity = storeCart[id];
            adddedProduct.quantity = quantity;
            savedCart.push(adddedProduct);
        }
    }
    console.log(savedCart);
    return savedCart;

}
export default CartProductsLoader