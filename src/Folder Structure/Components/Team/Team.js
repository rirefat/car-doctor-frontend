import React, { useEffect, useState } from 'react';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';
import './Team.css'
import TeamMember from '../TeamMember/TeamMember';

const Team = () => {
    const [team, setTeam]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/team')
        .then(res=>res.json())
        .then(data=>setTeam(data))
    },[]);

    return (
        <div className='team-section'>
            <SectionHeader
                title={"Meet Our Team"}
                subtitle={"Team"}
                center={true}
            ></SectionHeader>
            <div className="team-container">
                {
                    team.map(member=><TeamMember key={member._id} member={member}></TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;