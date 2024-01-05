import Aos from "aos";
import React, { useEffect } from 'react';
import "aos/dist/aos.css"
import "./abstyle.css";
import "@fontsource/montserrat";

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 3000});
    },[]);
    return (
        <div className="container">
            <div className="per1">
            <h2 className="phase"> Bagaimana website ini dibuat ? </h2>
            <p className="katanya"> 
                Kami menggunakan framework React.js sebagai media kami membuat web ini. Framework yang berisikan file javascript dan css ini, memudahkan kami dan mempercepat proses pembuatan web.
            </p>
            </div>
            <div className="grids">
                <div data-aos="fade-right" className="boxes1"> Apa saja library yang kami gunakan ?
                </div>
                    <div data-aos="fade-right" className="boxes2"> 
                        <ul>
                            <li>React - Headroom</li>
                            <li>React - Bootstrap</li>
                            <li>React - Aos </li>
                            <li>React - BrowserRouter </li>
                        </ul>
                    </div>
                    <div data-aos="fade-right" className="boxes1"> Apa saja navigasi yang kami lakukan ?
                    </div>
                    <div data-aos="fade-right" className="boxes2"> 
                        <ul>
                            <li>useState : sebagai navigasi responsive saat akan dibuka diperangkat yang berlayar kecil.</li>
                            <li>useEffect : sebagai handler animate on scroll effect yang digunakan pada halaman ini.</li>
                        </ul>
                    </div>
                    <div data-aos="fade-right" className="boxes1"> Bagaimana proses pemanggilan pages ?
                    </div>
                    <div data-aos="fade-right" className="boxes2"> 
                        <ul>
                            Untuk pemanggilan pages, kami menggunakan react-router-dom. Dengan fungsi Link untuk pemanggilan function setiap javascript nya.
                        </ul>
                    </div>
                    {/* <div data-aos="fade-right" className="boxes1"> Bagaimana proses pemanggilan pages ?
                    </div>
                    <div data-aos="fade-right" className="boxes1"> 
                        <ul>
                            Untuk pemanggilan pages, kami menggunakan react-router-dom. Dengan fungsi Link untuk pemanggilan function setiap javascript nya.
                        </ul>
                    </div> */}
                </div>
        </div>
    )
}

export default About;
