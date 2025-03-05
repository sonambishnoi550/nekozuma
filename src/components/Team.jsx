import React from 'react';
import Image from 'next/image';
import { TEAM_MEMBERS_LIST } from '@/utils/helper';
const Team = () => {
    return (
        <div id='team' className='pb-28 team-pt px-4'>
            <div className='container'>
                <h2 className='story-heading text-center team-padding mb-0'>Team</h2>
                <div className='d-flex flex-wrap gap-4 max-w-880 mx-auto align-items-center justify-content-center'>
                    {TEAM_MEMBERS_LIST.map((member, index) => (
                        <div key={index}>
                            <Image className='team-image pointer-events-none' src={member.image} alt={member.name} width={202} height={202} />
                            <h2 className='card-heading text-center mb-0'>{member.role}</h2>
                            <p className='card-text text-center mb-0'>{member.name}</p>
                            <p className='card-text text-center mb-0'>However at every junction in time, there is always a darkness that is waiting to overthrow</p>
                            <a href="#" target='_blank'> <Image className='text-center mx-auto twitter-icons d-flex align-items-center justify-content-center image-mb' src='/assets/images/svg/twitter.svg' alt='twitter' width={20} height={20} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;