import { careerData } from '../../../database/data';

const Career = () => {
  return (
    <div className="w-full text-white md:mx-56">
      <div className="mb-10 items-center justify-between md:flex">
        <h2 className="md:text-6xl text-4xl font-bold">
          Experience <span className="text-3xl text-blue md:text-4xl">+</span>
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
        {careerData.map((item, index) => (
          <div key={index}>
            <div className="flex items-center">
              <span className="text-blue">|</span>
              <h5 className="pl-4 text-2xl font-bold">{item.position}</h5>
            </div>
            <div className="ml-12 md:ml-5">
              {item.link && (
                <p>
                  <a href={item.link}>
                    {item.company} ({item.date})
                  </a>
                </p>
              )}
              <p className="mt-2 text-dateGray">{item.date}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
