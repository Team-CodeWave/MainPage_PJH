import './Header.css'

function Header() {
    return (
        <>
            <button className="header-title">CodeWave</button>
            <div id="header-right-section">
                <div>
                    <button className="header-button">템플릿 구경하기</button>
                </div>
                <div>
                     <button className="header-button">내 템플릿 등록하기</button>
                </div>
                <div>
                    <button className="header-button">로그인</button>
                </div>
                <div className="header-right-section">
                    <button className="start-button1">시작하기</button>
                </div>
            </div>
        </>
    );
}

export default Header;