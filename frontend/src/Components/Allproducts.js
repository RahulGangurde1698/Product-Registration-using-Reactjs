import React, { useEffect, useState } from 'react'
import './Allproducts.css';
function Allproducts() {
const [detail,setdetail]=useState([{
  name:'',
  _id:'',
  product:'',
  price:'',
  category:'',
}]);

useEffect(()=>{
  fetch("/register").then(res=>{
    if(res.ok){
      return res.json()
    }
  }).then(jsonRes => setdetail(jsonRes))
  // console.log(detail)
})
// const parse= JSON.stringify(detail);
// console.log(parse)

  return (
    <div>
 
<nav class="navbar navbar-light bg-light justify-content-between">
          <h1 class="navbar-brand">Products</h1>
          <form class="form-inline">
          </form>
        </nav>
        <div className="list">
          <ul class="list-group ">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" >ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Products</th>
                  <th scope="col">Price</th>
                  <th scope="col">category</th>
                </tr>
              </thead>
              <tbody>
                {
                  detail.map(note => (
                    <tr>
                      <th scope="row">{note._id}</th>
                      <td>{note.name}</td>
                      <td>{note.product}</td>
                      <td>{note.price}</td>
                      <td>{note.category}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </ul>
        </div>
</div>

  )
}

export default Allproducts