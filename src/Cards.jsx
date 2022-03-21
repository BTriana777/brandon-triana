import React from 'react'
import { GrGithub } from "react-icons/gr";
import { ImChrome } from "react-icons/im";

export const Cards = ({title, code, deploy, img}) => {
    return (
        <div className="card">
            <div className='back-img'></div>
            <div className='card-img' style={{ backgroundImage: `url(${img})` }}></div>
            <div className="back-card"></div>
            <div className="card-name-icon-container">
                <h3>{title}</h3>
                <div className="card-icon-container">
                    <GrGithub size={'34px'} cursor={'pointer'} href={code}/>
                    <ImChrome size={'34px'} cursor={'pointer'} href={deploy}/>
                </div>
            </div>
        </div>
    )
}
