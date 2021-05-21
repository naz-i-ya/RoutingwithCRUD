import React from 'react';

const Contact = () =>{
  return(
    <div className= "container">
     <div className="py-4">
       <h1>Contact</h1>
       <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" Name="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
     </div>
    </div>
  );
}
export default Contact;