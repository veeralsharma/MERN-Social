import React from 'react'
import Story from './Story'
import "../css/StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJs18S73plqpJJrJHMIit8rMsj2-HoGfHXcA&usqp=CAU"
                title="Akshay Kumar"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmWI0Hk_Xrk-PayBszWOTmaZEbP3D0KgPa9g&usqp=CAU"
            />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtZACxLf1PCf_i3RVlvdM8KcekriJ2M5tYSA&usqp=CAU"
                title="Virat Kohli"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiuCMI-csQjRdTf9prtRrWCKJmkuOlBiww6Q&usqp=CAU"
            />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPSyGJ6V5LETCKuBK8-I8KqL4JtPvTj1ECOA&usqp=CAU"
                title="MS.Dhoni"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtLJCh7GLlS4GZZSlig7uAqPX9XPfUsIj0aQ&usqp=CAU"
            />
            <Story 
                image="https://github.com/veeralsharma/chatRoom/raw/master/2.PNG"
                title="Veeral sharma"
                profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQHABnbK1vuTbw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=TvKsKJAqUlCEakDl0c8TkgPZhd7hB8DV3FrzqNdoRXQ"
            />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHyLg7yRpTFaltPFLzZIzixqnL0LNy2eJEGg&usqp=CAU"
                title="ShahRukh Khan"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoM-i0ykg_wYunMVacucXNfxlRy_T1A2NDSg&usqp=CAU"
            />
        </div>
    )
}

export default StoryReel
