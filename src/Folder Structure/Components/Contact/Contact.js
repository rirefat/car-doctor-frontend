import React from 'react';
import './Contact.css'
import schedule from '../../../assets/icons/001-timetable.png';
import call from '../../../assets/icons/call.png';
import location from '../../../assets/icons/location.png';

const Contact = () => {
    const contactInfo = [
        {id: 1, title: "we're open monday-friday", icon:schedule, desc: "7:00 am - 9:00 pm"},
        {id: 2, title: "Have a question?", icon:call, desc: "+2546 251 2658"},
        {id: 3, title: "Need a repair? our address", icon:location, desc: "Liza Street, New York"},
    ]
    return (
        <div className='contact' id='contact'>
            {
                contactInfo.map(single=><div key={single.id} className='contact-container'>
                    <img src={single.icon} alt="icon" />
                    <div>
                        <p className='title'>{single.title}</p>
                        <p className='desc'>{single.desc}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Contact;