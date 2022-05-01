import React from "react";
import "./App.css";

function App() {
  return (
    <div className="content-page">
      <h1>Cách thực hiện</h1>
      <h2>Tích hợp thời gian xây dựng</h2>
      <p>Đã trải qua tất cả những rắc rối khi chia ứng dụng của chúng tôi thành các cơ sở mã rời rạc có thể được phát triển và thử nghiệm độc lập, chúng ta hãy không giới thiệu lại tất cả các khớp nối đó ở giai đoạn phát hành. Chúng ta nên tìm cách tích hợp các giao diện người dùng vi mô của mình tại thời điểm chạy, thay vì tại thời điểm xây dựng.</p>
      <h2>Tích hợp thời gian chạy qua iframe</h2>
      <p>Chúng ta thường thấy rất nhiều người lưỡng lự khi chọn iframe. Mặc dù một số sự miễn cưỡng đó dường như được thúc đẩy bởi cảm giác ruột thịt rằng iframe hơi "ngắc ngoải", nhưng có một số lý do chính đáng mà mọi người tránh chúng. Sự cô lập dễ dàng được đề cập ở trên có xu hướng làm cho chúng kém linh hoạt hơn so với các lựa chọn khác. Có thể khó xây dựng tích hợp giữa các phần khác nhau của ứng dụng, vì vậy chúng làm cho việc định tuyến, lịch sử và liên kết sâu trở nên phức tạp hơn và chúng đưa ra một số thách thức bổ sung để làm cho trang của bạn đáp ứng đầy đủ.</p>
    </div>
  );
}

export default App;
