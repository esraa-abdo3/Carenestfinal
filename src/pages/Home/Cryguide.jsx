
// import  { useEffect, useRef, useState } from 'react';

// import "./Cry.css";
// import fram1 from "../../assets/Frame 101.png"
// import fram2 from "../../assets/Frame 102.png"
// import fram3 from "../../assets/Frame 101 3.png"
// import fram4 from "../../assets/fram4.png"
// import fram5 from "../../assets/fram5.png"
// import babygroup8 from ".././../assets/Group 8.png"


// export default function Cry() {
//     const [isVisible, setIsVisible] = useState(false);
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (entries[0].isIntersecting) {
//                     setIsVisible(true);
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => {
//             if (sectionRef.current) {
//                 observer.unobserve(sectionRef.current);
//             }
//         };
//     }, []);

//     return (
//         <div className={`cry ${isVisible ? 'active' : ''}`} ref={sectionRef}>
//             <div className="header">
//             <h2>Cry Analysis</h2>
//             <p>Listen to your baby's cries, and let us help you understand the reason! With cry analysis, <br></br> we'll provide you with the right tips to meet your baby's needs</p>
//             </div>
         
//             <div className="cont">
//                 <div className='box'>
//                     <img src={fram1} alt='img' loading='lazy'>
//                     </img>
//                     <div className="text">
//                         <h3>
//                         Hunger
//                         </h3>
//                         <p>Babies cry when they're hungry and need feeding</p>
//                     </div>
                    
//                 </div>
//                 <div className='box'>
//                     <img src={fram2} alt='img' loading='lazy'>
//                     </img>
//                     <div className="text">
//                         <h3>
//                         Tired
//                         </h3>
//                         <p>When babies are tired, they cry to show they need sleep</p>
//                     </div>
                    
//                 </div>
//                 <div className='box'>
//                     <img src={fram3} alt='img' loading='lazy'>
//                     </img>
//                     <div className="text">
//                         <h3>
//                         Belly pain
//                         </h3>
//                         <p>Gas or colic can make babies cry from stomach pain</p>
//                     </div>
                    
//                 </div>
//                 <div className='box'>
//                     <img src={fram4} alt='img' loading='lazy'>
//                     </img>
//                     <div className="text">
//                         <h3>
//                         Discomfort
//                         </h3>
//                         <p>Babies cry when they're uncomfortable, like from a dirty diaper or temperature.</p>
//                     </div>
                    
//                 </div>
//                 <div className='box'>
//                     <img src={fram5} alt='img' loading='lazy'>
//                     </img>
//                     <div className="text">
//                         <h3>
                      
//                         Burping </h3>
//                         <p>If babies need to burp, they might cry due to trapped ai</p>
//                     </div>
                    
//                </div>
                  
//             </div>
//             <img src={babygroup8} alt="img" className='baby' loading='lazy' />
       
          
//         </div>
//     );
// }
import { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "./Cry.css";
// import fram1 from "../../assets/Frame 101.webp";
// import fram2 from "../../assets/Frame 102.webp";
// import fram3 from "../../assets/Frame 101 3.webp";
// import fram4 from "../../assets/fram4.webp";
// import fram5 from "../../assets/fram5.webp";
// import babygroup8 from "../../assets/Group 8.webp";
import applestore from "../../assets/Downloadappstore.svg"
import googleplay from "../../assets/Google.png";
import Voicecontrol from "../../assets/freepik--Device--inject-433.png"
import ph from "../../assets/ph_01.jpg"
import imgsamples from "../../assets/icon_sample.png"
import childcry from "../../assets/mainvisual.jpg"

export default function Cry() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        // <div className={`cry ${isVisible ? 'active' : ''}`} ref={sectionRef}>
        //     <div className="header">
        //         <h2>Cry Analysis</h2>
        //         <p>Listen to your baby's cries, and let us help you understand the reason! With cry analysis, <br /> we'll provide you with the right tips to meet your baby's needs</p>
        //     </div>

        //     <div className="cont">
        //         {/* Lazy load الصور مع تأثير البلور والفيد */}
        //         <div className='box'>
        //             <LazyLoadImage src={fram1} alt='img' loading='lazy' effect='blur' />
        //             <div className="text">
        //                 <h3>Hunger</h3>
        //                 <p>Babies cry when they're hungry and need feeding</p>
        //             </div>
        //         </div>
        //         <div className='box'>
        //             <LazyLoadImage src={fram2} alt='img' loading='lazy' effect='fade' />
        //             <div className="text">
        //                 <h3>Tired</h3>
        //                 <p>When babies are tired, they cry to show they need sleep</p>
        //             </div>
        //         </div>
        //         <div className='box'>
        //             <LazyLoadImage src={fram3} alt='img' loading='lazy' effect='blur' />
        //             <div className="text">
        //                 <h3>Belly pain</h3>
        //                 <p>Gas or colic can make babies cry from stomach pain</p>
        //             </div>
        //         </div>
        //         <div className='box'>
        //             <LazyLoadImage src={fram4} alt='img' loading='lazy' effect='fade' />
        //             <div className="text">
        //                 <h3>Discomfort</h3>
        //                 <p>Babies cry when they're uncomfortable, like from a dirty diaper or temperature.</p>
        //             </div>
        //         </div>
        //         <div className='box'>
        //             <LazyLoadImage src={fram5} alt='img' loading='lazy' effect='blur' />
        //             <div className="text">
        //                 <h3>Burping</h3>
        //                 <p>If babies need to burp, they might cry due to trapped air</p>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Lazy load الصورة الأخيرة مع تأثير الفيد */}
        //     <LazyLoadImage src={babygroup8} alt="img" className='baby' loading='lazy' effect='fade' />
        // </div>
        <>
            <div className='cry-donlowad'>
              
            <div className='textt'>
                 
                 <h1 style={{ fontWeight: "500", fontSize: "53px" } } >No more guessing !</h1> 
             <h1 className='p' style={{fontWeight:"300"}} >
           
             This app analyzes your baby’s cry in just 15 seconds.
             </h1>
             <div className="imges-button">
                 <a href="#">
                     <img src={applestore}>
                     </img>

                 </a>
                 <a href="#">
                     <img src={googleplay}>
                     </img>

                 </a>
             </div>

             </div>
                <div className='cont'>
                <p className='free-trial'>
                        <span> Free trial available</span>
                    </p>
               

                
                <div className='text'>
                 
                        <h1 style={{ fontWeight: "500", fontSize: "53px" } } >No more guessing !</h1> 
                    <h1 className='p' >
                  
                    This app analyzes your baby’s cry in just 15 seconds.
                    </h1>
                    <div className="imges-button">
                        <a href="#">
                            <img src={applestore}>
                            </img>

                        </a>
                        <a href="#">
                            <img src={googleplay}>
                            </img>

                        </a>
                    </div>

                    </div>
                   
                    <div className='img'>
                    
                    <img src={Voicecontrol} alt="" />

                    </div>
                    <div className='imgchild'>
                        <img src={childcry} alt="" />

                    </div>

            </div>
            
            </div>
      
            <div className='cry-detalis'>
                <div className="cont">
                    <div className="text">
                        <h1>You can easily understand a baby's request</h1>
                        <p>Our app analyzes over 20,000 baby cries to help you understand your little one's needs. Using advanced detection technology,
                            it provides accurate insights for babies aged 0-12 months, ensuring you respond with confidence</p>
                        <img src={imgsamples} alt="" />
                        
                    </div>
                    <div className="img">
                        <img src={ph} alt=""  />
                    </div>
                </div>

        </div>
     
            </>
    );
}
