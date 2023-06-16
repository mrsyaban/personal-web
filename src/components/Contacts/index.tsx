
import { GrMail } from "react-icons/gr";
const Contact = () => {
    return (
        <div className="text-center mb-20">
            <div className="textContainer absolutemx-10 text-center align-middle text-white">
            <div className="space-y-4">
                <p className="font-bold text-blue">WHATS NEXT</p>
                <h3 className="text-4xl font-bold">Lets work together.</h3>
                <p className=" text-lightGray ">
                If you interested in Technology and Machine Learning
                <br />
                lets collaborate! contact me at
                <span className="font-bold text-white">
                    {" "}
                    13521119@std.stei.itb.ac.id
                </span>{" "}
                <br />
                Still new about that stuff but looking for opportunity to 
                <br />
                collaborate with others!
                </p>
                <div className="flex justify-center">
                    <a href="13521119@std.stei.itb.ac.id">
                        <button className="flex items-center gap-8 border-b border-solid border-blue pb-2">
                            WRITE ME AN EMAIL
                            <GrMail size={26} />
                        </button>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Contact;
