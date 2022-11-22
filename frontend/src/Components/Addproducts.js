import React from 'react'
import './Addproduct.css'
import { useState } from 'react'

function Addproducts() {
  


    const defaultvalue = {
        id: "",
        name: "",
        category: "",
        product: "",
        price: "",
        brand: ""
    }
 
    const [user, SetUser] = useState(defaultvalue);


    const onvalChange = (e) => {
        SetUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    }

    const addproductsdetails = async (e) => {
        e.preventDefault();

        const { id, name, category, product, price, brand } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id, name, category, product, price, brand
            })
        });



        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid registration");

        }else{
            window.alert(" Registration Succesfull");
            console.log("Succesfull registration");
        }
    }

    return (
        <>

            <div className='body'>


                <div class="container">
                    <div class="title">Add Products</div>
                    <div class="content">
                        <form method='POST'>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">ID</span>
                                    <input type="text" placeholder="Enter your Product ID" required onChange={(e) => onvalChange(e)} name="id" id='id' />
                                </div>
                                <div class="input-box">
                                    <span class="details">Name</span>
                                    <input type="text" placeholder="Enter your Productname" required onChange={(e) => onvalChange(e)} name="name" id='name' />
                                </div>
                                <div class="input-box">
                                    <span class="details">Category</span>
                                    <select class="form-control form-control-sm" onChange={(e) => onvalChange(e)} name="category" id='catagory'>
                                        <option> select</option>
                                        <option>Cloths</option>
                                        <option>Electronics</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Products</span>
                                    <select class="form-control form-control-sm" onChange={(e) => onvalChange(e)} name="product" id='product' >
                                        <option> select</option>
                                        <option>T-shirt</option>
                                        <option>Shirt</option>
                                        <option>Mobile</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Price</span>
                                    <select class="form-control form-control-sm" onChange={(e) => onvalChange(e)} name="price" id='price'>
                                        <option> select</option>
                                        <option>500</option>
                                        <option>1000</option>
                                        <option>2000</option>
                                        <option>4000</option>

                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Brand</span>
                                    <select class="form-control form-control-sm" onChange={(e) => onvalChange(e)} name="brand" id='brand'>
                                        <option> select</option>
                                        <option>ADIDAS</option>
                                        <option>PUMA</option>
                                        <option>Samsung</option>
                                        <option>Realme</option>
                                    </select>
                                </div>
                            </div>
                            <div class="button">
                                <input type="submit" value="Register" onClick={addproductsdetails} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Addproducts