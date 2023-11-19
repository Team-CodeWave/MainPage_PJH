import './Top_main.css'
import React from 'react';
import Wave from 'react-wavify';

const commonWaveOptions = {
    height: 10,
    amplitude: 40,
    speed: 0.45,
    points: 3,
  };

function Top_main() {
    return (
        <>
        <div id='wave'>
            <Wave
              mask="url(#mask)"
              fill="#0085FF"
              style={{ display: 'flex' }}
              options={commonWaveOptions}
            >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                  <stop offset="0" stopColor="white" />
                  <stop offset="0.4" stopColor="black" />
                </linearGradient>
                <mask id="mask">
                  <rect x="0" y="0" width="2000" height="400" fill="url(#gradient)" />
                </mask>
              </defs>
            </Wave>
         </div>

        <div id='top-sub-main'>
            <div class="portfolio-text">포폴의 시작은<br/>여기.</div>
            <div>
                <button class="start-button2">시작하기</button>
            </div>
        </div>
        </>
    );
}

export default Top_main;