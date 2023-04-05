import React from 'react';
import { Link } from 'react-router-dom';
import './TeamMember.css';

import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

const TeamMember = (props) => {
    const { name, title, social_links, picture } = props.member;
    return (
        <div className='single-team-member'>
            <div className="card w-64 bg-base-100 shadow-xl">
                <figure className="px25 pt-2">
                    <img src={picture} alt="Team" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{title}</p>
                    <div className="card-actions">
                        <Link to={social_links.facebook} className='social-links-team hover:shadow-xl'><BsFacebook></BsFacebook></Link>
                        <Link to={social_links.linkedin} className='social-links-team hover:shadow-xl'><BsLinkedin></BsLinkedin></Link>
                        <Link to={social_links.twitter} className='social-links-team hover:shadow-xl'><BsTwitter></BsTwitter></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;