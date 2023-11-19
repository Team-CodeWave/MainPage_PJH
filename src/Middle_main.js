import './Middle_main.css';
import magnifying from './img/Magnifying_glass_icon.svg';

function Middle_main() {
    return (
        <>
            <div className="middle-left-box">
            <div className="box-wrapper">
                <div className="small-box1"></div>
                <div className="small-box2"></div>
                <div className="small-box3"></div>
                <div className="small-box4"></div>
                <div className="small-box5"></div>
            </div>
            <div id="big-box">
                <div className='smallBox-in-bigBox'>JPG</div>
                <div className='smallBox-text1'>인기 템플릿</div>
                <div className='smallBox-text2'>오늘의 템플릿은 이거!</div>
            </div>
        </div>

        <div className="middle-right-box">
            <div className="choice-text">마음에 드는 템플릿을<br/>골라봐요</div>
            <div className="explain-text">CodeWave에는 수천 개의 템플릿 등록되어 있습니다.<br/>조금만 찾아보면, 분명 마음에 드는 템플릿을 찾<br/>을 수 있을 거에요.</div>
            <div id="little-search">
                <button className="little-search">템플릿 검색하기</button>
                <div id="magnifying-glass-wrapper">
                     <img id="magnifying-glass-icon" src={magnifying} alt="Magnifying_glass_icon" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Middle_main;