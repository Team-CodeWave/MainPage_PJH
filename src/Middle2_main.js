import React, { useState } from 'react';
import './Middle2_main.css'

function Middle2_main() {
    const [animationState, setAnimationState] = useState('running');

    const handleClick = () => {
        setAnimationState('paused');
    };

    return (
        <>
        <div className='main2-page'>
            <div className="middle2-left-box">
                    <div className="middle-title-text">다양한 선택지들이<br/>준비되어 있어요</div>
                    <div className="middle-sub-title-text">오늘의 인기 템플릿부터, 개발자, 나만의 템플릿 등<br/>다양한 선택지 중에서 나만을 위한 템플릿을 찾아보세요</div>
                </div>
                <div className="middle2-right-box">
                        <div className="column1">
                            <div className='roll1' style={{ animationPlayState: animationState }}>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                            </div> 
                            <div className='roll2'style={{ animationPlayState: animationState }}>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                            </div> 
                        </div>

                        <div className="column2">
                            <div className='roll3' style={{ animationPlayState: animationState }}>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                            </div> 
                            <div className='roll4' style={{ animationPlayState: animationState }}>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                                <div className="thumbnail" onClick={handleClick}></div>
                            </div> 
                        </div>
                </div>
            </div>
        </>
    );
}

export default Middle2_main;
