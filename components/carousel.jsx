import React, { useEffect, useRef } from 'react';

const Carousel = () => {
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const runningTimeRef = useRef(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;
    const runNextAuto = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const list = listRef.current;
        const runningTime = runningTimeRef.current;

        const resetTimeAnimation = () => {
            if (runningTime) {
                runningTime.style.animation = 'none';
                runningTime.offsetHeight; // Trigger reflow
                runningTime.style.animation = 'runningTime 7s linear 1 forwards';
            }
        };

        const showSlider = (type) => {
            const sliderItemsDom = list.querySelectorAll('.item');
            if (type === 'next') {
                list.appendChild(sliderItemsDom[0]);
                carousel.classList.add('next');
            } else {
                list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                carousel.classList.add('prev');
            }

            setTimeout(() => {
                carousel.classList.remove('next');
                carousel.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto.current);
            runNextAuto.current = setTimeout(() => {
                showSlider('next');
            }, timeAutoNext);

            resetTimeAnimation();
        };

        const nextBtn = carousel.querySelector('.next');
        const prevBtn = carousel.querySelector('.prev');

        nextBtn.onclick = () => showSlider('next');
        prevBtn.onclick = () => showSlider('prev');

        runNextAuto.current = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);

        resetTimeAnimation();

        return () => {
            clearTimeout(runNextAuto.current);
        };
    }, []);

    return (
        <div className="carousel" id="home" ref={carouselRef}>
            <div className="list" ref={listRef}>
                <div
                    className="item"
                    style={{ backgroundImage: "url(image/IMG_4447.jpg)" }}
                >
                    <div className="content">
                        <div className="title">LEARNING </div>
                        <div className="name">FACILITIES</div>
                     
                    </div>
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: "url(/image/cbt1 )" }}
                >
                    <div className="content">
                        <div className="title">UTME/SSCE</div>
                        <div className="name">CLASS</div>
               
                    </div>
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: "url(/image/IMG_COM_202504272302141691.jpg )" }}
                >
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: "url( /image/c5.jpg )" }}
                >
                    <div className="content">
                        <div className="title">OUR</div>
                        <div className="name">STUDENTS</div>
                    </div>
                </div>
          
                <div
                    className="item"
                    style={{ backgroundImage: "url(/image/cbt1.jpg )" }}
                >
                    <div className="content">
                        <div className="title">OUR</div>
                        <div className="name">STUDENTS</div>
                     
                    </div>
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: "url( /image/s7.jpg )" }}
                >
                    <div className="content">
                        <div className="title">SPORT</div>
                        <div className="name">OUTING</div>
                      
                    </div>
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: "url(/image/awade.jpg)" }}
                >
                    <div className="content">
                        <div className="title">AWARD</div>
                        <div className="name">Social development</div>
                      
                    </div>
                </div>
       
                <div
                    className="item"
                    style={{ backgroundImage: "url(image/IMG_4447.jpg)" }}
                >
                    <div className="content">
                        <div className="title">JAMB & WAEC </div>
                        <div className="name">CLASSES</div>
                    </div>
                </div>
        
            </div>

            <div className="arrows">
                <button className="prev"></button>
                <button className="next">&gt;</button>
            </div>

            <div className="timeRunning" ref={runningTimeRef} />
        </div>
    );
};

export default Carousel;