import React from 'react'
import data from "/src/Json/Contact.json"
import { Contactus, Heading } from '../Components/Index'

function ContactUs() {
    return (
        <>
            <div className='pb-5'>
                <Heading data={data["headings"]} />
                <Contactus data={data["card"]} />
            </div>

        </>
    )
}

export default ContactUs