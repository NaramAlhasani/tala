import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import ProgressBar from "./progressBar";

const About = () => {
  const circleProgressData = [
    { language: "English", progress: 95 },
    { language: "Spanish", progress: 50 },
    { language: "Arabic", progress: 90 },
  ];

  const progressBarData = [
    { bgcolor: "#7d7789", completed: 95, title: "3D Art" },
    { bgcolor: "#7d7789", completed: 92, title: "Photography 3" },
    { bgcolor: "#7d7789", completed: 97, title: "Economics" },
  ];

  const services = [
    {
      desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
      img: "img/testimonials/1.jpg",
      info1: "Alexander Walker",
      info2: "Graphics Designer",
    },
    {
      desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
      img: "img/testimonials/2.jpg",
      info1: "Baraka Clinton",
      info2: "Construction Engineering",
    },
    {
      desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
      img: "img/testimonials/3.jpg",
      info1: "Armin Van Buuren",
      info2: "Content Manager",
    },
  ];

  return (
    <SectionContainer navName="about">
      <div className="section_inner">
        <div className="cavani_tm_about w-full h-auto clear-both float-left">
          <div className="biography w-full h-auto clear-both float-left mb-[87px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                About Me
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
              <div className="left w-[40%]">
                <p className="mb-[15px]">
                  Hey! I’m Tala Alhasani. I am a high school senior looking to further my 
                  education in college. I am currently undecided on what I want to study, but I am
                  interested in computer information systems, photography and industrial design.
                  in my free time I enjoy painting, drawing, reading, writing, and listening to music.
                  

                </p>
                <p>
                  I hope to further my education, refine my skills, and gain the experience I will need 
                  in order to be successful in my future career. I am a hard worker, a fast learner, and
                  I am always looking for ways to improve myself. I am excited to see what the future holds
                  and I look forward to being a part of your community!
                </p>
              </div>
              <div className="right w-[50%]">
                <ul>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Name:
                    </span>
                    <span className="second inline-block">Tala Alhasani</span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Address:
                    </span>
                    <span className="second inline-block">
                      Elevation ln, Herndon, Virginia
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Study:
                    </span>
                    <span className="second inline-block">
                      Undecided
                    </span>
                  </li>
                  
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Mail:
                    </span>
                    <span className="second inline-block">
                      <a
                        className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                        href="mailto:talaalhasani@gmail.com"
                      >
                        talaalhasani@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Phone:
                    </span>
                    <span className="second inline-block">
                      +1 (734)-621-1047
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Skills
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Photography
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Photoshop
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Graphic Design
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Communication
                    </li>
                    <li className="w-full float-left relative pl-[25px]">
                      Teamwork
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service_list w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Interests
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    Photography
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Reading &amp; Writing
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Music &amp; Cinema
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Technology
                    </li>
                    <li className="w-full float-left relative pl-[25px]">

                      Painting &amp; Drawing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="skills w-full h-auto clear-both float-left mb-[65px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="programming w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Courses
                  </span>
                </div>
                <div className="cavani_progress w-full h-auto clear-both float-left mt-[55px]">
                  {progressBarData.map((item, idx) => (
                    <ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
              <div className="language w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Languages
                  </span>
                </div>
                <div className="circular_progress_bar w-full h-auto clear-both float-left mt-[62px]">
                  <ul>
                    {circleProgressData.map((item, idx) => (
                      <li key={idx}>
                        <div className="list_inner">
                          <div
                            className="myCircle"
                            style={{ width: 120, height: 120 }}
                          >
                            <CircularProgressbar
                              width={120}
                              value={item.progress}
                              strokeWidth={3}
                              styles={buildStyles({
                                pathColor: "#7d7789",
                                trailColor: "rgba(0,0,0,0)",
                              })}
                            />
                            <span className="number">{item.progress}%</span>
                            <div className="title">
                              <span>{item.language}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume w-full h-auto clear-both float-left mb-[75px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="education w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Education
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2020 - 2024
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Chantilly High School
                            </h3>
                            <span className="text-[14px]">Advanced High School Diploma</span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2018 - 2020
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Franklin Middle School
                            </h3>
                            <span className="text-[14px]"></span>
                          </div>
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="experience w-1/2">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Experience
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2022 - running
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Barnes and Noble
                            </h3>
                            <span className="text-[14px]">
                              Cashier
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2022 - running
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Graduation Photography
                            </h3>
                            <span className="text-[14px]">
                              Photographer
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonials w-full h-auto clear-both float-left mb-[90px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Testimonials
              </span>
            </div>
            <div className="list w-full h-auto clear-both float-left mt-[75px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="cursor-e-resize custom-class"
              >
                <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        Intelligent, and hardworking. Tala is a great student and
                        a great person. She is always willing to help others and
                        no matter teh situation. She is a great leader and it is
                        a pleasure to call her my sister.
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/NaramALhasnai.jpg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          <a href="https://naramALhasani.com">Naram Alhasani</a>
                        </h3>
                        <span className="text-[14px]">Business Analyst - CGI Federal</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
                
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
