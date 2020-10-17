import React, { useEffect, useState } from "react";
import '../../styles/subjectSection.css'
import physics from '../../assets/images/physics.png'
import chemistry from '../../assets/images/Chemistry.png'
import maths from '../../assets/images/Maths.png'
import CardSection from './CardSection'

export default function SubjectSection(props) {
    const [search, setSearch] = useState("")
    var subject=props.subject;
    return (
        <div>
            <div id="subject-bar">
                <div className="subject-sub-bar">
                    <div id="sub"> 
                        <div id="sub-info">
                            <div id="chapterNos">27 Chapters</div>
                            <div id="qL">
                                    3 Levels
                                    <div style={{marginLeft:'20px'}}>1200+ Questions</div>
                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <h2 style={{fontWeight:'700',marginRight:'10px',marginTop:'7px'}}>{subject=='physics'?"Physics":(subject=='chemistry'?"Chemistry":"Maths")}</h2>
                            <img src={subject=='physics'?physics:(subject=='chemistry'?chemistry:maths)} id="subject-img"/>
                        </div>
                    </div>
                    <input type="text" id="search-chapter" onChange={(e)=>{setSearch(e.target.value)}} />
                </div>
            </div>
            <div >
                     <CardSection search={search} subject={subject} class={props.class}/> 
            </div>
        </div>
    )
}
