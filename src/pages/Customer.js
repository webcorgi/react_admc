import Header from "include/Header";
import icoZip from '../images/ico_zip.svg'
import icoDownload from '../images/ico_download.svg'
import imgStep1 from '../images/customer_step1.jpg'
import imgStep2 from '../images/customer_step2.jpg'
import imgStep3 from '../images/customer_step3.jpg'

function Customer() {

    return (
        <>
            <Header />

            <div id="container">
                <div className="top_visual customer">
                    <div className="visual_inner">
                        <p className="visual_title">다운로드</p>
                        <p className="visual_desc">다운로드를 통해 사이트의 다양한 자료를 손쉽게 활용하실 수 있습니다.</p>
                        <div className="breadcrumb_area">
                            <a href="#">홈</a>
                            <a href="#">고객센터</a>
                            <a href="#">다운로드</a>
                        </div>
                    </div>
                </div>

                <div className="sub_container customer">
                    <div className="title_area">
                        <h2 className="title">다운로드</h2>
                    </div>
                    <div className="guide_area">
                        <div className="guide_menu_area">
                            <nav id="guide-menu">
                                <nav className="nav">
                                    <a className="nav-link active" href="#guide-1">CAD/CAM library</a>
                                    <nav className="nav">
                                        <a className="nav-link" href="#guide-1-1">1.Abut-crown library</a>
                                    </nav>
                                    <a className="nav-link" href="#guide-2">기타 자료 다운로드</a>
                                </nav>
                            </nav>
                        </div>
                        <div className="guide_contents" data-bs-spy="scroll" data-bs-target="#guide-menu" data-offset="0">
                            <div className="guide_section is-movie first" id="guide-1">
                                <p className="guide_title">CAD/CAM library</p>
                                <p className="guide_sub_title">1.Abut-crown library</p>
                                <div className="h20"></div>
                                <p className="guide_sub_title2">1.1 Exocad Library 설치방법</p>
                                <div className="h20"></div>
                                <div className="movie_area">
                                    <iframe width="568" height="320" src="https://www.youtube.com/embed/zBXOZ_SvUqA?si=xjkl3826PtOyp6wA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                                        style={{maxWidth:"568px", height:"320px", width:"100%", borderRadius:"20px"}}
                                    ></iframe>
                                </div>
                                <p className="guide_sub_title3">오스템 TS - line 임플란트 library</p>

                                <div className="downloadbox">
                                    <div className="left">
                                        <img src={icoZip} alt="zip" />
                                        <span>Amber-Mill_AbutCrown_suro.zip</span>
                                    </div>
                                    <div className="right">
                                        <span>2024.05.01</span>
                                        <a href="">
                                            <img src={icoDownload} alt="download" />
                                        </a>
                                    </div>
                                </div>

                                <div className="downloadbox">
                                    <div className="left">
                                        <img src={icoZip} alt="zip" />
                                        <span>00. Analog Library.zip</span>
                                    </div>
                                    <div className="right">
                                        <span>2024.05.01</span>
                                        <a href="">
                                            <img src={icoDownload} alt="download" />
                                        </a>
                                    </div>
                                </div>

                                <div className="h50"></div>
                                <p className="guide_sub_title2">3shape Library 설치방법</p>
                                <div className="movie_area">
                                    <iframe width="568" height="320" src="https://www.youtube.com/embed/zBXOZ_SvUqA?si=xjkl3826PtOyp6wA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                                        style={{maxWidth:"568px", height:"320px", width:"100%", borderRadius:"20px"}}
                                    ></iframe>
                                </div>
                                <div className="downloadbox">
                                    <div className="left">
                                        <img src={icoZip} alt="zip" />
                                        <span>HASS_AbutCown_suro_Rev01.zip</span>
                                    </div>
                                    <div className="right">
                                        <span>2024.05.01</span>
                                        <a href="">
                                            <img src={icoDownload} alt="download" />
                                        </a>
                                    </div>
                                </div>

                                <div className="h50"></div>
                                <p className="guide_sub_title2">CAM Program 설치방법</p>
                                <div className="movie_area">
                                    <iframe width="568" height="320" src="https://www.youtube.com/embed/zBXOZ_SvUqA?si=xjkl3826PtOyp6wA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                                        style={{maxWidth:"568px", height:"320px", width:"100%", borderRadius:"20px"}}
                                    ></iframe>
                                </div>
                                <div className="downloadbox">
                                    <div className="left">
                                        <img src={icoZip} alt="zip" />
                                        <span>HASS_AbutCown_suro_Rev01.zip</span>
                                    </div>
                                    <div className="right">
                                        <span>2024.05.01</span>
                                        <a href="">
                                            <img src={icoDownload} alt="download" />
                                        </a>
                                    </div>
                                </div>

                                <div className="br_divider" />

                                <p className="guide_sub_title">기타 자료 다운로드</p>

                                <div className="h20"></div>
                                <p className="guide_sub_title2">Step 1. 회원가입 및 로그인</p>
                                <p>
                                    <a href="">https://www.hassbio.com/login.php</a>
                                    <span>에서 회원가입 및 로그인을 하세요.</span>
                                </p>
                                <img src={imgStep1} alt="step1" className="img_step" />

                                <div className="h50"></div>
                                <p className="guide_sub_title2">Step 2. 제품선택</p>
                                <p>
                                    <span>제품소개 메뉴에서 제품을 선택해 주세요.</span>
                                </p>
                                <img src={imgStep2} alt="step2" className="img_step" />

                                <div className="h50"></div>
                                <p className="guide_sub_title2">Step 3. 자료 다운로드</p>
                                <p>
                                    <span>화면 하단에 위치한 다운로드 버튼을 클릭하여 자료를 다운로드하실 수 있습니다.</span>
                                </p>
                                <img src={imgStep3} alt="step3" className="img_step" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Customer;