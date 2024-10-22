import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'


function Contactus({ data }) {

    useEffect(() => emailjs.init("yGw_0LlFFUqrOvJpG"), []);

    const emailRef = useRef();
    const nameRef = useRef();
    const lnameRef = useRef();
    const messageRef = useRef();
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_9la83oj";
        const templateId = "template_ix2kftd";
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
           name: nameRef.current.value,
           lname: lnameRef.current.value,
            recipient: emailRef.current.value,
            message : messageRef.current.value
          });
          alert("Email successfully sent! Please check your inbox.");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };



    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-xl-4 col-12 contact-card" style={{ backgroundImage: `url(${data["background-image"]})` }}>
                        <h4 className='text-white fw-bold pb-2'>{data["heading"]}</h4>
                        <p className='text-white pb-4'>{data["subheading"]}</p>
                        <p className='text-white pb-2'>{data["paragraphOne"]}</p>
                        <p className='text-white pb-5'>{data["paragraphTwo"]}</p>
                        <div className='d-flex pb-3'>
                            <div className='pe-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                                    <path d="M19.9983 8.69859H21.9983C21.9983 4.6417 18.1253 1.58203 12.9883 1.58203V3.16366C17.0503 3.16366 19.9983 5.49104 19.9983 8.69859Z" fill="white" />
                                    <path d="M13.0003 6.32609C15.1033 6.32609 16.0003 7.03545 16.0003 8.69854H18.0003C18.0003 6.14816 16.2253 4.74446 13.0003 4.74446V6.32609ZM16.4223 10.6305C16.2301 10.4924 15.9776 10.4187 15.7181 10.4251C15.4585 10.4314 15.2123 10.5173 15.0313 10.6645L12.6383 12.6107C12.0623 12.5237 10.9043 12.2382 9.71228 11.298C8.52028 10.3545 8.15928 9.43637 8.05228 8.98403L10.5113 7.09081C10.6977 6.94777 10.8064 6.75299 10.8144 6.54768C10.8225 6.34238 10.7292 6.14265 10.5543 5.99079L6.85928 2.7777C6.68432 2.62535 6.44116 2.53294 6.18143 2.5201C5.92171 2.50725 5.66588 2.57498 5.46828 2.7089L3.29828 4.18061C3.12539 4.31783 3.0222 4.50045 3.00828 4.69385C2.99328 4.89155 2.70728 9.57477 7.29928 13.2078C11.3053 16.375 16.3233 16.6067 17.7053 16.6067C17.9073 16.6067 18.0313 16.602 18.0643 16.6004C18.3088 16.5896 18.5396 16.5076 18.7123 16.3702L20.5723 14.6534C20.7417 14.4972 20.8276 14.295 20.8115 14.0896C20.7954 13.8842 20.6788 13.6918 20.4863 13.5534L16.4223 10.6305Z" fill="white" />
                                </svg>
                            </div>
                            <div >
                                <Link to={`tel:${data["mobile"]}`} className='text-white'>{data["mobile"]}</Link>
                            </div>
                        </div>
                        <div className='d-flex pb-3'>
                            <div className='pe-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                                    <path d="M22 3.68359H2V16.3367H22V3.68359ZM20 6.84686L12 10.8009L4 6.84686V5.26523L12 9.21931L20 5.26523V6.84686Z" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <Link to={`emailto:${data["email"]}`} className='text-white'>{data["email"]}</Link>
                            </div>
                        </div>
                        {/* <div className='d-flex pb-3'>
                            <div className='pe-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                                    <path d="M12 1.22754C9.81276 1.22958 7.71584 1.91761 6.16923 3.1407C4.62261 4.36379 3.75259 6.02207 3.75001 7.75177C3.74739 9.16529 4.33124 10.5405 5.41201 11.6663C5.41201 11.6663 5.63701 11.9006 5.67376 11.9344L12 17.8347L18.3293 11.9314C18.3623 11.9 18.588 11.6663 18.588 11.6663L18.5888 11.6645C19.669 10.5392 20.2526 9.16465 20.25 7.75177C20.2474 6.02207 19.3774 4.36379 17.8308 3.1407C16.2842 1.91761 14.1873 1.22958 12 1.22754ZM12 10.1242C11.4067 10.1242 10.8266 9.98508 10.3333 9.72439C9.83995 9.46371 9.45543 9.09318 9.22837 8.65967C9.00131 8.22616 8.9419 7.74914 9.05765 7.28893C9.17341 6.82872 9.45913 6.40599 9.87869 6.0742C10.2982 5.74241 10.8328 5.51645 11.4147 5.42491C11.9967 5.33337 12.5999 5.38035 13.1481 5.55992C13.6962 5.73948 14.1648 6.04357 14.4944 6.43371C14.8241 6.82386 15 7.28255 15 7.75177C14.999 8.38075 14.6826 8.98373 14.1202 9.42848C13.5578 9.87323 12.7954 10.1234 12 10.1242Z" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <Link to="/" className='text-white'>{data["address"]}</Link>
                            </div>
                        </div> */}
                        <div className='social-icons-contact mt-5'>
                            <Link to="https://www.facebook.com/technisuminfo/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg></Link>

                            <Link to="https://www.instagram.com/technisum_web_solutions/?hl=en"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg></Link>

                            <Link to="https://in.linkedin.com/company/technisum-web-solutions"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                            </svg></Link>
                        </div>
                    </div>
                    <div className="col-xl-8 col-12 p-5">
                        <form className='row' onSubmit={handleSubmit} >
                            <div className='col-xl-6 col-12 d-flex flex-column inputSection mb-5'>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" id="firstName" ref={nameRef} required />
                            </div>
                            <div className='col-xl-6 col-12 d-flex flex-column inputSection mb-5'>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" id="lastName" ref={lnameRef} required />
                            </div>
                            <div className='col-xl-6 col-12 d-flex flex-column inputSection mb-5'>
                                <label htmlFor="emailId">Email</label>
                                <input type="email" name="emailId" id="emailId" ref={emailRef} required />
                            </div>
                            <div className='col-xl-6 col-12 d-flex flex-column inputSection mb-5'>
                                <label htmlFor="phoneNum">Phone Number</label>
                                <input type="tel" name="phoneNum" id="phoneNum" required />
                            </div>
                            <div className='col-12 mb-5'>
                                <h5>Select Subject?</h5>
                                <div className='checkbox-options d-flex justify-content-between'>
                                    <div className='checkbox-option'>
                                        <input type="checkbox" name="genralInquiry" id="genralInquiry" />
                                        <label htmlFor="genralInquiry" className='ms-2'>General Inquiry</label>
                                    </div>
                                    <div className='checkbox-option'>
                                        <input type="checkbox" name="webDesigning" id="webDesigning" />
                                        <label htmlFor="webDesigning" className='ms-2'>Web Designing</label>
                                    </div>
                                    <div className='checkbox-option'>
                                        <input type="checkbox" name="webDevelopment" id="webDevelopment" />
                                        <label htmlFor="webDevelopment" className='ms-2'>Web Development</label>
                                    </div>
                                    <div className='checkbox-option'>
                                        <input type="checkbox" name="seo" id="seo" />
                                        <label htmlFor="seo" className='ms-2'>SEO</label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex flex-column inputSection mb-5'>
                                <label htmlFor="message" className='mb-3'>Message</label>
                                <textarea name="message" id="message" cols="100" rows="5" placeholder='Write Your Message' ref={messageRef}></textarea>
                            </div>
                            <div className='col-12'>
                                <input type="submit" value="Send Message" className='contactUsBtn' disabled={loading}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus