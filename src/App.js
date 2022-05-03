import React from "react";
import "./App.css";

function App() {
  return (
    <div className="content-page">
      <h2>Cách thực hiện</h2>
      <h3>Phương pháp tích hợp</h3>
      <p>Có rất nhiều phương pháp tích hợp thông dụng như:</p>
      <p>&emsp;- Server-side template composition</p> 
      <p>&emsp;- Build-time integration</p> 
      <p>&emsp;- Run-time integration via iframes</p> 
      <p>&emsp;- Run-time integration via JavaScript</p> 
      <p>&emsp;- Run-time integration via Web Components</p> 
      <p>Và trong lần báo cáo này, chúng em sẽ sử dụng phương pháp tích hợp: Run-time integration via JavaScript (Tích hợp thời gian hoạt động qua JavaScript) - Sử dụng ứng dụng vùng chứa và giao diện người dùng vi mô tích hợp với nhau bằng cách sử dụng JavaScript. Tích hợp thời gian hoạt động qua JavaScript là mỗi giao diện người dùng vi mô được đưa vào trang bằng cách sử dụng một thẻ script và khi tải sẽ hiển thị một chức năng toàn cục như là điểm đầu vào của nó. Sau đó, ứng dụng vùng chứa sẽ xác định giao diện người dùng vi mô nào nên được gắn kết và gọi hàm liên quan để thông báo cho giao diện người dùng vi mô khi nào và ở đâu để hiển thị chính nó</p>
      <h3>Ý tưởng</h3>
      <p>Tạo 1 website sử dụng Micro Frontend để giới thiệu về Micro Frontend. Các phần giới thiệu về Micro Frontend: Khái niệm, Ưu nhược điểm và Cách thực hiện. 
Do đó sẽ tạo 4 project: 1 project vùng chứa để hiển thị những thứ cần thiết (header và nội dung của trang web), 3 project còn lại tương ứng với 3 phần nội dung giới thiệu của Micro Frontend. Khi vùng chứa cần hiển thị nội dung nào nó sẽ gọi đến các project cần thiết và từ đó trả ra nội dung hiển thị.</p>
      <h3>Ngôn ngữ sử dụng: ReactJS</h3>
    </div>
  );
}

export default App;
