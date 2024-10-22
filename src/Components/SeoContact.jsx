import React, { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

function SeoContact({ data }) {

    useEffect(() => emailjs.init("yGw_0LlFFUqrOvJpG"), []);

    const emailRef = useRef();
    const nameRef = useRef();
    const webUrl = useRef();
    const companyName = useRef();
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_9la83oj";
        const templateId = "template_irlclkb";
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
           name: nameRef.current.value,
           webUrl: webUrl.current.value,
            recipient: emailRef.current.value,
            companyName : companyName.current.value
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
            <div className="container-fluid" style={{ backgroundColor: `${data["background"]}`, padding: `${data["padding"]}` }}>
                <div className="container py-5">
                    <div className="row py-5">
                        <div className='col-lg-5 col-12'>
                            <form onSubmit={handleSubmit} className='seoform' >                                 
                                    <input type="text" name="fullname" id="fullname" placeholder='Your name*' required ref={nameRef} />
                                    <input type="email" name="emailId" id="emailId" placeholder='Email*' required ref={emailRef}/>
                                    <input type="url" name="companyURL" id="companyURL" placeholder='Website URL*' required ref={webUrl}/>
                                    <input type="text" name="companyName" id="companyName" placeholder='Company Name*' ref={companyName} />
                                    <input type="submit" value="GET YOUR REPORT" disabled={loading}/>
                                    <p className='text-center mt-4'>*We will get back to you within 24 hours</p>               
                            </form>
                        </div>
                        <div className='col-lg-7 col-12 seoformText px-5'>
                            <div className='text-white t1'>{data["subheading"]}</div>
                            <div className='text-white t2'>{data["heading"]}</div>
                            <p className='text-white t3'>{data["paragraph"]}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SeoContact