import React, { useState } from 'react';
import './Middle2_main.css'

function Middle2_main() {
    const [animationState, setAnimationState] = useState('running');

    const handleClick = () => {
        setAnimationState('paused');
    };

    return (
        <>
            <div class="middle2-left-box">
                <div class="middle-title-text">다양한 선택지들이<br/>준비되어 있어요</div>
                <div class="middle-sub-title-text">오늘의 인기 템플릿부터, 개발자, 나만의 템플릿 등<br/>다양한 선택지 중에서 나만을 위한 템플릿을 찾아보세요</div>
            </div>
            <div class="middle2-right-box">
                <div class="thumbnails">
                    <div class="column1">
                        <div className="thumbnail" style={{ top: '0px', animationPlayState: animationState }} onClick={handleClick}></div>
                        <div className="thumbnail" style={{ top: '192px', animationPlayState: animationState }} onClick={handleClick}></div>
                        <div className="thumbnail" style={{ top: '384px', animationPlayState: animationState }} onClick={handleClick}></div>
                        <div className="thumbnail" style={{ top: '576px', animationPlayState: animationState }} onClick={handleClick}></div>
                    </div>
                    <div class="column2">
                        <div className="thumbnail" style={{ left: '192px', top: '0px', animationPlayState: animationState }} onClick={handleClick}></div>
                        <div className="thumbnail" style={{ left: '192px', top: '192px', animationPlayState: animationState }} onClick={handleClick}></div>
                        <div className="thumbnail" style={{ left: '192px', top: '384px', animationPlayState: animationState }} onClick={handleClick}></div>
                        <div className="thumbnail" style={{ left: '192px', top: '576px', animationPlayState: animationState }} onClick={handleClick}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Middle2_main;
