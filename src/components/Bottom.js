import React from "react";
import "../styles/css/bottom.css";

function Bottom() {
  const handleBottomBtnClick = () => {
    const userInput = document.querySelector("#form__userInput");
    userInput.focus();
    window.scroll(0, 500);
  };
  return (
    <div className="bottom">
      <div className="heading">
        <h2>CÁ NHÂN HOÁ LỘ TRÌNH HỌC</h2>
        <p>Làm bài kiểm tra đầu vào với ELSA trong 5 phút và bạn sẽ có:</p>
      </div>
      <div className="body">
        <div className="item">
          <div className="img">
            <img
              src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme_two_years/images/section-02-1.png.webp"
              alt=""
            />
          </div>
          <div className="content">
            Trí tuệ nhân tạo trả về bạn số điểm <b>“CHUẨN BẢN XỨ"</b>
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme_two_years/images/section-02-2.png.webp"
              alt=""
            />
          </div>
          <div className="content">
            <b>NGAY LẬP TỨC</b>, bạn biết mình phát âm sai ở đâu qua những gam
            màu trực quan sinh động.
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme_two_years/images/section-02-3.png.webp"
              alt=""
            />
          </div>
          <div className="content">
            <b>CÔNG NGHỆ NHẬN DIỆN</b> giọng nói chuẩn đến từng âm tiết.
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme_two_years/images/section-02-4.png.webp"
              alt=""
            />
          </div>
          <div className="content">
            ELSA sẽ <b>LẬP LỘ TRÌNH HỌC CÁ NHÂN HOÁ</b> dựa trên các chỉ số bài
            kiểm tra đầu vào của bạn.
          </div>
        </div>
      </div>

      <button className="bottom__btn" onClick={handleBottomBtnClick}>
        Đăng ký ngay
      </button>
    </div>
  );
}

export default Bottom;
