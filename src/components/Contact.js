import React from 'react'

export default function Contact(props) {
  return (
    <div className='Contact-card'>
        <img src={props.img} alt='catphoto'/>
        <h3>{props.name}</h3>
        <div>
            <img src=',/images/phone-icon.png'/>
            <p>{props.phone}</p>
        </div>
        <div>
            <img src='./images/mail-icon.png'/>
            <p>{props.email}</p>
        </div>
    </div>
  )

}

// destructuring our props to taken in the referenced vaule directly
// would look like this
// export default function Contact({img, name, phone, email}) {
//     return (
//       <div className='Contact-card'>
//           <img src={img} alt='catphoto'/>
//           <h3>{name}</h3>
//           <div>
//               <img src=',/images/phone-icon.png'/>
//               <p>{phone}</p>
//           </div>
//           <div>
//               <img src='./images/mail-icon.png'/>
//               <p>{email}</p>
//           </div>
//       </div>
//     )

//   }





























// import React from "react";


// function Contact({image, name, phone, email}) {
//     return(

//         <div className="contacts">
//             <div className="contact-card">
//                 <img src={image}/>
//                 <h3>{name}</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png"/>
//                     <p>{phone}</p>
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png"/>
//                     <p>{email}</p>
//                 </div>
//             </div>
//         </div>

//     );

// }
// export default Contact;
