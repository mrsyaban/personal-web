// import { GrMail } from "react-icons/gr";
// const Contact = () => {
//     return (
//         <div className="text-center mb-20">
//             <div className="textContainer absolutemx-10 text-center align-middle text-white">
//             <div className="space-y-4">
//                 <p className="font-bold text-blue">WHATS NEXT</p>
//                 <h3 className="text-4xl font-bold">Lets work together.</h3>
//                 <p className=" text-lightGray ">
//                 If you interested in Technology and Machine Learning
//                 <br />
//                 lets collaborate! contact me at
//                 <span className="font-bold text-white">
//                     {" "}
//                     13521119@std.stei.itb.ac.id
//                 </span>{" "}
//                 <br />
//                 Still new about that stuff but looking for opportunity to
//                 <br />
//                 collaborate with others!
//                 </p>
//                 <div className="flex justify-center">
//                     <a href="13521119@std.stei.itb.ac.id">
                        // <button className="flex items-center gap-8 border-b border-solid border-blue pb-2">
                        //     WRITE ME AN EMAIL
                        //     <GrMail size={26} />
                        // </button>
//                     </a>
//                 </div>
//             </div>
//             </div>
//         </div>
//     )
// };

// export default Contact;

import { useState } from 'react';
import { GrMail } from 'react-icons/gr';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('mrsyaban0810@gmail.com');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const serviceID = 'service_1ew71gi';
    const templateID = 'template_an2ps0k';
    const userID = 'G4A7uoVP9bt9kEKL3';

    // Send the email using EmailJS API
    axios
      .post(`https://api.emailjs.com/api/v1.0/email/send`, {
        service_id: serviceID,
        template_id: templateID,
        user_id: userID,
        template_params: {
          from_name: name,
          from_email: email,
          message: message
        }
      })
      .then((response) => {
        alert('Email sent successfully!');
        // Clear the form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email.');
      });
  };

  return (
    <div className="text-center mb-20">
      <div className="textContainer absolutemx-10 text-center align-middle text-white">
        <div className="space-y-4">
          <p className="font-bold text-blue">WHAT'S NEXT</p>
          <h3 className="text-4xl font-bold">Let's work together.</h3>
          <p className=" text-lightGray ">
            If you're interested in Technology and Machine Learning
            <br />
            let's collaborate! Contact me at
            <span className="font-bold text-white">
              {' '}
              13521119@std.stei.itb.ac.id
            </span>{' '}
            <br />
            Still new to this stuff but looking for an opportunity to
            <br />
            collaborate with others!
          </p>
          <p className="font-bold text-blue">DROP YOUR MESSAGE</p>
          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name or Nick"
                className="p-1 pl-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <textarea
                rows={4}
                className="p-1 pl-2"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-8 border-b border-solid text-white p-2 bg-none hover:bg-slate-800  border-blue pb-2"
              >
                SEND MESSAGE
                <GrMail size={26} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
