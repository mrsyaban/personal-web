import { awardsData } from '../../../database/data';

const Award = () => {
  return (
    <div className="w-full text-white md:mx-56">
      <div className="mb-10 items-center justify-between md:flex">
        <h2 className="md:text-6xl text-4xl font-bold">
          Awards <span className="text-3xl text-blue md:text-4xl">+</span>
        </h2>
      </div>
      <div
        className="md:flex"
        data-aos="fade-right"
        data-aos-duration="1000"
      ></div>
      <div
        className="flex flex-col w-full space-y-9"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {awardsData.map((item, index) => (
            <div key={index}>
                <div className="flex items-center">
                    <span className="text-blue">|</span>
                    <h5 className="pl-4 text-2xl font-bold">{item.title}</h5>
                </div>  
                <div className="mt-4">
                    {
                    <ul className="list-disc list-outside pl-4">
                        {item.description.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                    }
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Award