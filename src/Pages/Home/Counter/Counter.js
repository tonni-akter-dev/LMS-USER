import React from 'react';
import CountUp from 'react-countup';
import './Counter.css'
const Counter = () => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 1000;
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
    return (
        <div className='text-center mt-5 mb-5'>
            <div>
                <h4 className='library_collections_heading'>Library Collections</h4>
                <br />
                <container fluid  >
                    <div className="counters_div" >
                        <div className="counter_div">
                            <h3 className='texts'>
                                <CountUp end={10000} />+
                            </h3>
                            <p className='texts'>Printed Books</p>
                        </div>
                        <div className="counter_div">
                            <h3 className='texts'>
                                <CountUp end={800} />+
                            </h3>
                            <p className='texts'>Printed Journals</p>
                        </div>
                        <div className="counter_div">
                            <h3 className='texts'>
                                <CountUp end={4800} />+
                            </h3>
                            <p className='texts'>Online E-books</p>
                        </div>
                        <div className="counter_div">
                            <h3 className='texts'>
                                <CountUp end={5600} />+
                            </h3>
                            <p className='texts'>Online Journals</p>
                        </div>
                    </div>
                </container>
            </div>
        </div>
    );
};

export default Counter;