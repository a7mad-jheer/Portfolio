"use client";
import emailjs from "@emailjs/browser"
import { useState } from "react";
import { Title } from "../global/Title";


export const Contact = () => {

  const [name , setName] = useState<string >()
  const [email , setEmail] = useState<string>()
  const [message , setMessage] = useState<string>()
  const [status , setStatus] = useState<boolean | null >()
  const [loading , setLoading] = useState<boolean>(false);

  const Server_Id = "service_kfxsd2o";
  const Tamplete_Id = "template_5d5bv8q";
  const Public_Id = "PbfkfTOsqLE6s1Hp2";

  const  handelSendMess  = async (e : React.FormEvent) => {
    e.preventDefault()
    setLoading(true);
    setStatus(null);

    try{
      await emailjs.send(
        Server_Id , Tamplete_Id , {name , email , message} , Public_Id ,
      )

      setStatus(true);
      setName("");
      setEmail("");
      setMessage("");
    }catch(err) {
      console.log("MailJs Error :" , JSON.stringify(err , null , 3))
      setStatus(false);
    }finally{
      setLoading(false)

    }
  }


  return (
    <div className="relative md:my-20 md:py-0 py-10">
      <Title text="Contact Me" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <form onSubmit={handelSendMess} className="bg-black/20 backdrop-blur-2xl sm:w-100 w-full md:my-20 my-5 md:p-10 p-5 flex flex-col items-center gap-5 rounded-2xl shadow-2xl">
          <h1 className="text-2xl text-white font-semibold ">Send a Message</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            required
            className="bg-white py-3 px-3 w-full outline-none rounded-md"
          />

          <input
            type="text"
            placeholder="Exapmle@gmail.com"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            required
            className="bg-white py-3 px-3 w-full outline-none rounded-md"
          />

          <textarea
            placeholder="Enter Your Message..."
            value={message}
            onChange={(e) => {setMessage(e.target.value)}}
            required
            rows={5}
            className="resize-none  bg-white backdrop-blur-2xl  py-3 px-3 w-full outline-none rounded-md"
          />

          {status && <p className="text-white font-semibold my-2 text-md text-center">Thank You For Contact <br/> Message sent. </p>}
                  {status === false && <p className="text-white font-semibold my-2 text-md">Something Was Wrong</p>}

          <button
            type="submit"
            disabled={loading}
            className={`bg-white/20  px-3 py-2 cursor-pointer rounded-xl text-lg mt-5 hover:bg-red-600/20 w-full  shadow-2xl text-white`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

                  

        </form>

        
      </div>
    </div>
  );
};

export default Contact;

