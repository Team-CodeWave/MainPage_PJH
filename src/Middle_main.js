import './Middle_main.css';
import magnifying from './img/Magnifying_glass_icon.svg';

function Middle_main() {
    return (
        <>
            <div class="middle-left-box">
            <div class="box-wrapper">
                <div class="small-box1"></div>
                <div class="small-box2"></div>
                <div class="small-box3"></div>
                <div class="small-box4"></div>
                <div class="small-box5"></div>
            </div>
            <div id="big-box">
                
            </div>
        </div>

        <div class="middle-right-box">
            <div class="choice-text">마음에 드는 템플릿을<br/>골라봐요</div>
            <div class="explain-text">CodeWave에는 수천 개의 템플릿 등록되어 있습니다.<br/>조금만 찾아보면, 분명 마음에 드는 템플릿을 찾<br/>을 수 있을 거에요.</div>
            <div id="little-search">
                <button class="little-search">템플릿 검색하기</button>
                <div id="magnifying-glass-wrapper">
                     <img id="magnifying-glass-icon" src={magnifying} alt="Magnifying_glass_icon" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Middle_main;