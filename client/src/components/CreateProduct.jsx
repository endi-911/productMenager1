import React, {useState} from 'react'
import axios from 'axios'
const CreateProduct = (props) => {
    const [tittle, setTtittle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {

        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            tittle,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTtittle("");
            setPrice("");
            setDescription("");
        })
        .catch((err) => {
            console.log(err)
        });
    }

    return(
        <>
        <header>Product Menager</header>
        <div>
            <form onSubmit = {submitHandler}>
                <div>
                <label>Tittle</label>
                <input 
                onChange = {(e) => setTtittle(e.target.value)}
                value = {tittle}
                name = "tittle"
                type = "text"
                />
                </div>

                <div>
                <label>Price</label>
                <input 
                onChange = {(e) => setPrice(e.target.value)}
                value = {price}
                name = "price"
                type = "number"
                />
                </div>

                <div>
                <label>Description</label>
                <input 
                onChange = {(e) => setDescription(e.target.value)}
                value = {description}
                name = "description"
                type = "text"
                />
                </div>

                <input type='submit' className='submit-input' value="Create"/>

            </form>
        </div>
        </>
        
    )
}
export default CreateProduct;