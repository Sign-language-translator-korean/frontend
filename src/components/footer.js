import { useState } from "react";
import '../styles/footer.css'

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  // 이메일 복사
  const copyEmailToClipboard = () => {
    const email = "yuyu7123@naver.com";
    navigator.clipboard.writeText(email).then(() => {
      alert(`이메일 복사: ${email}으로 문의사항을 보내주세요.`);
    }).catch(err => {
      console.error("이메일 복사 실패", err);
    });
  };

  return (
    <footer>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__left">
            <img className="footer__logo" src="/logo.svg" alt="Designed by Freepik" />
            <div className="footer__name">수어 번역기</div>
          </div>
          <div className="footer__right">
            <div className="footer__right__info" onClick={() => setModalContent("서비스 소개")}>서비스 소개</div>
            <div className="footer__right__info" onClick={copyEmailToClipboard}>문의하기</div>
          </div>
        </div>
        <div className="footer__bottom">
          © 2025 수어 번역기. All rights reserved.
        </div>
      </div>

      {/* 모달 */}
      {modalContent && (
        <div className="footer__modal">
          <div className="footer__modal__content">
            <div className="footer__modal__title">{modalContent}</div>
              {modalContent === "서비스 소개" && (
                <div>
                  <div className="footer__modal__subtitle">1. 텍스트 → 수어</div>
                  <div className="footer__modal__detail">
                    텍스트를 입력하면 해당 내용을 수어로 번역한 영상이 표시됩니다. 번역된 수어 영상을 통해 의사소통할 수 있습니다.
                  </div>
                  <div className="footer__modal__subtitle">2. 수어 → 텍스트</div>
                  <div className="footer__modal__detail">
                    카메라를 통해 수어 동작을 인식하여 텍스트로 변환합니다. 실시간으로 수어를 텍스트로 변환하여 의사소통을 돕습니다.
                  </div>
                </div>
              )}
              <button onClick={() => setModalContent(null)}>닫기</button>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer;