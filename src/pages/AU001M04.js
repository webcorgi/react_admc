import Header from "include/Header";

function AU001M04() {

    return (
        <>
            <Header />

            <div id="container">
                <div className="join_area">
                    <h1 className="join_title">회원가입</h1>

                    <div className="join_complete">
                        <p className="join_complete_txt1">홍길동님</p>
                        <p className="text-email">hong@amdc.com</p>
                        <p className="join_complete_txt2">
                            AMDC의 회원가입이 완료되었습니다. <br />
                            AMDC의 다양한 회원 혜택을 이용해 보세요
                        </p>
                        <div className="auth_info">
                            <p className="text-auth"><strong>사용하고 있는 장비를 등록</strong>하시고 의뢰를 편하게 해보세요!</p>
                            <p className="text-auth-sub">* 사용 장비 등록은 <b>[마이페이지]</b> - <b>[개인정보 수정]</b>에서 추가 하실 수 있습니다.</p>
                        </div>
                        <div className="btn_area" style={{marginTop:35}}>
                            <button type="button" className="common-btn size-lg white">홈</button>
                            <button type="button" className="common-btn size-lg c-red">로그인</button>
                        </div>
                    </div>

                    <div className="join_benefit_area">
                        <p className="join_benefit_txt">회원 가입 감사드립니다. 다양한 회원혜택을 꼭 확인하세요!</p>
                        <ul className="join_benefit_list">
                            <li>
                                <i className="ico_benefit icon1"></i>
                                <p>디자인의뢰</p>
                            </li>
                            <li>
                                <i className="ico_benefit icon2"></i>
                                <p>포럼 글쓰기</p>
                            </li>
                            <li>
                                <i className="ico_benefit icon3"></i>
                                <p>쿠폰 제공</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AU001M04;