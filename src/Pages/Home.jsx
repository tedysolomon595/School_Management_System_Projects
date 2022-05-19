import React from 'react'
import AboutSchool from '../Components/AboutSchool'
import Achievements from '../Components/Achievements'
import SchoolCommunityAndStaffs from '../Components/SchoolCommunityAndStaffs'
import StaffAndSchool from '../Components/StaffAndSchool'
import TopRanked from '../Components/TopRanked'


export default function Home(props) {
  return (
    <div className='home'>
        <AboutSchool _theme={props._theme}/>
        <SchoolCommunityAndStaffs/>
        <StaffAndSchool/>
        <TopRanked/>
        <Achievements/>
    </div>
  )
}
