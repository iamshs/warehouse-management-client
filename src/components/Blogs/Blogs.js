import React from 'react';

const Blogs = () => {
    return (
        <div>
         <h3>#Difference between javascript and nodejs</h3>
         <p>Node js is a platform what helps to run java script on the server side.Node allow Javascript code to run outside the browser.Node js used on server site development.Node does not has capability to add HTML tag. On the other hand Javascript is a high-level programming language  which mostly use in the client side.we can not run js outside of the browser.Java script can run in any browser.JS has capability to add HTML and can play with DOM. </p>  

         <h3>## Differences between sql and nosql databases.</h3> 
         <p>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.SQL databases have fixed or static or predefined schema.NonSQL has dynamic schema.SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).</p>

         <h3>### What is the purpose of jwt and how does it work</h3>
         <p>JWT or  JSON Web Token, is an open standard used to share security information between two parties — a client and a server.the server generates a token that certifies the user identity, and sends it to the client.The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.If you use the Google APIs, you will use JWT.A JWT split into three section.
             <ol>
                 <li>Section one is the header.</li>
                 <li>Section two is the payload.</li>
                 <li>Section three is the signature.</li>
             </ol>
         </p>

         <h3>ISSUE: https://github.com/react-bootstrap/react-bootstrap/issues/6329 </h3>
        </div>
    );
};

export default Blogs;