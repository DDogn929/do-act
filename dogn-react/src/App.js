import logo from './logo.svg';
import './App.css';
import Product from './Product.js';

function App() {
  return (
      <div className=''>
        
        <header id="socar-header">
            <section className="header-main">
                <a href="#" className="socar-logo">SOCAR</a>
                <button className="header-button">
                    <div className="header-button-square button-1"></div>
                    <div className="header-button-square button-2"></div>
                </button>
            </section>
        </header>

        <section className="title-img">
            <h1 className="title-h1">차가 필요한<br/>모든 순간, 쏘카</h1>
        </section>

        <main>
            <section className="main-list-container">
                <ul className="main-list-ul">
                    <li className="main-list">
                        <h2 className="list-name">24시간 언제나</h2>
                        <p className="list-text">
                        한밤중이나 주말에도 스마트폰으로<br/>
                        시간에 구애받지 않고<br/>
                        쏘카와 함께 이동하세요.
                        </p>
                        <div className="list-img"><img src="../Socar/Image/usp_a.jpg" alt="지프와_사람"/></div>
                    </li>
                    <li className="main-list">
                        <h2 className="list-name">원하는 곳에서</h2>
                        <p className="list-text">
                            내 주변 3분 거리 쏘카존에서<br/>
                            혹은 내가 있는 곳으로 쏘카를 불러<br/>
                            어디서나 편하게 출발하세요.
                        </p>
                        <div className="list-img"><img src="../Socar/Image/usp_b.jpg" alt="셀카"/></div>
                    </li>
                    <li className="main-list">
                        <h2 className="list-name">필요한 시간만큼</h2>
                        <p className="list-text">
                            간단한 장보기부터 주말여행까지<br/>
                            10분 단위로 원하는 만큼만 이용하세요.
                        </p>
                        <div className="list-img"><img src="../Socar/Image/usp_c.jpg" alt="장보기"/></div>
                    </li>
                    <li className="main-list">
                        <h2 className="list-name">다양한 차종을</h2>
                        <p className="list-text">
                            연인과의 드라이브부터 가족 캠핑까지<br/>
                            상황에 맞게 50여 종의 차량을<br/>
                            선택해서 이용하세요.
                        </p>
                        <div className="list-img"><img src="../Socar/Image/usp_d.jpg" alt="주차된차량"/></div>
                    </li>
                </ul>
            </section>
        </main>

        <section className="member-total">
            <h3 className="member-total-view">
                <span className="member-total-color footer-total-view-border">8,796,684</span>명의 회원이 쏘카와<br/>
                함께하고 있습니다.<br/>
                지금 바로 <span className="member-total-color">쏘카 드라이브</span>를<br/>
                시작하세요.
            </h3>
            <div className="square"></div>
        </section>
        
        <footer>
            <section className="footer-container">
                <div className="footer-icon-menu">
                    {/* <a href="#" className="footer-icon-img"><img src="../Socar/Image/i-instagram.svg" alt="i-instagram"/></a>
                    <a href="#" className="footer-icon-img"><img src="../Socar/Image/i-facebook.svg" alt="i-facebook"/></a>
                    <a href="#" className="footer-icon-img"><img src="../Socar/Image/i-youtube.svg" alt="i-youtube"/></a>
                    <a href="#" className="footer-icon-img"><img src="../Socar/Image/i-blog.svg" alt="i-blog"/></a> */}
                </div>
                
                <div >
                    <nav>
                        <ul className="footer-list-menu">
                            <li><a href="#" className="footer-list-menu-button">회사소개</a></li>
                            <li><a href="#" className="footer-list-menu-button">인재채용</a></li>
                            <li><a href="#" className="footer-list-menu-button">나눔카</a></li>
                            <li><a href="#" className="footer-list-menu-button">이용약관</a></li>
                            <li><a href="#" className="footer-list-menu-button footer-list-menu-button-h">개인정보처리방침</a></li>
                            <li><a href="#" className="footer-list-menu-button footer-list-menu-button-h">위치정보 이용약관</a></li>
                            <li><a href="#" className="footer-list-menu-button footer-list-menu-button-h">차량손해면책제도</a></li>
                            <li><a href="#" className="footer-list-menu-button">고객센터</a></li>
                            <li><a href="#" className="footer-list-menu-button">제휴 문의</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-more-menu">
                    <ul className="footer-more-menu-list">
                        <li>주소. 제주특별자치도 제주시 연미길 42 (오라삼동)</li>
                        <li>전화. 1661-3315</li>
                        <li>팩스. 02-6969-9333</li>
                    </ul>
                    <ul className="footer-more-menu-list">
                        <li>(주)쏘카 통신판매업 <a href="#" className="footer-more-menu-list-link">사업자정보 확인</a></li>
                        <li>신고: 제 2019-제주오라-3호, 사업자등록번호: 616-81-90529, 대표자:박재욱</li>
                    </ul>
                </div>
                <p className="footer-copy">&copy; 2019 SOCAR ALL right reserved.</p>
            </section>
        </footer>
        
        <section className="appdownlord-container">
            <a href="#" className="appdownlord">
                <div className="appdownlord-background"></div>
                <div className="appdownlord-button">
                    {/* <div className="appdownlord-icon"><img src="../Socar/Image/i-appicon.svg" alt="i-appicon"></div> */}
                    <p className="appdownlord-text">쏘카 앱 다운로드</p>
                </div>

            </a>
        </section>
    </div>
  );
}

export default App;
