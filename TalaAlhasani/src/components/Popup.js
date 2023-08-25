import Modal from "react-modal";

export const Soundcloud = ({ isOpen3, toggleModalThree }) => {
  return (
    <Modal
      isOpen={isOpen3}
      onRequestClose={toggleModalThree}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      {" "}
      <div
        onClick={toggleModalThree}
        className="modal-video mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content">
            <div className="mfp-iframe-scaler">
              <button
                onClick={toggleModalThree}
                title="Close (Esc)"
                type="button"
                className="mfp-close"
              >
                ×
              </button>
              <iframe
                className="mfp-iframe"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Modal>
  );
};
export const Detail = ({ isOpen4, toggleModalFour }) => {
  return (
    <Modal
      isOpen={isOpen4}
      onRequestClose={toggleModalFour}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalFour}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/TalaAlhasani-Opulance.jpeg"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/TalaAlhasani-Opulance.jpeg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Opulance
                </h3>
                <span className="text-[14px]">Detail</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                              I was fortunate enough to have the opportunity to submit multiple photos to 
                              Scholastic in 2023. I was awarded two Gold Keys for my photos, Opulance and Someone.
                              These pieces highlight the beauty in shadows. I used a black background to create a
                              contrast between the subject and the background. I used a single light and faint source to create
                              a shadow that would highlight the subject. 
                  </p>
                  <p>
                    I am very excited with how these photos turned out and I am excited to see what I can learn, and do in the future!
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">School</span>
                      <span>Chantilly High School</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Scholastic Gold Key</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Detail
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>March, 2022</span>
                    </li>
                    <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="additional_images w-full clear-both float-left h-auto">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/Name.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/Name.jpeg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/Tangled.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/Tangled.jpeg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/Opulance.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/Opulance.jpeg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
