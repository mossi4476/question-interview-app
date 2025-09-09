# Technical Interview Practice 🚀

Chương trình ôn luyện technical interview toàn diện với giao diện đẹp mắt và nội dung phong phú.

## ✨ Tính năng

- **6 chủ đề chính**: Algorithms, JavaScript, React, System Design, Database, Networking
- **Giao diện responsive**: Hoạt động tốt trên mọi thiết bị
- **Câu hỏi đa dạng**: 5 câu hỏi mỗi chủ đề với độ khó khác nhau
- **Tính điểm thông minh**: Hệ thống chấm điểm và đánh giá kết quả
- **Navigation linh hoạt**: Điều hướng dễ dàng giữa các câu hỏi
- **Keyboard shortcuts**: Hỗ trợ phím tắt để điều hướng nhanh

## 🎯 Các chủ đề ôn luyện

### 1. Algorithms & Data Structures
- Độ phức tạp thời gian và không gian
- Các thuật toán sắp xếp và tìm kiếm
- Cấu trúc dữ liệu cơ bản
- Thuật toán đồ thị

### 2. JavaScript
- ES6+ features
- Closures và Scope
- Promises và Async/Await
- Hoisting và Event Loop

### 3. React
- Hooks (useState, useEffect, useCallback)
- Component lifecycle
- State management
- Performance optimization

### 4. System Design
- Load balancing
- Caching strategies
- Microservices architecture
- Database sharding

### 5. Database
- SQL vs NoSQL
- ACID properties
- Indexing và optimization
- Transaction management

### 6. Networking
- HTTP/HTTPS protocols
- TCP vs UDP
- RESTful APIs
- WebSocket

## 🚀 Cách sử dụng

### Cách 1: Mở trực tiếp
1. Tải tất cả files về máy
2. Mở file `index.html` bằng trình duyệt web
3. Bắt đầu ôn luyện!

### Cách 2: Sử dụng Live Server (khuyến nghị)
1. Cài đặt extension "Live Server" trong VS Code
2. Click chuột phải vào file `index.html`
3. Chọn "Open with Live Server"
4. Trang web sẽ tự động mở trong trình duyệt

## 🎮 Hướng dẫn sử dụng

### Bắt đầu ôn luyện
1. Chọn chủ đề muốn ôn luyện từ 6 category cards
2. Hệ thống sẽ hiển thị 5 câu hỏi ngẫu nhiên
3. Đọc câu hỏi và chọn đáp án đúng
4. Sử dụng nút "Câu tiếp" để chuyển câu hỏi

### Điều hướng
- **Nút "Câu trước"**: Quay lại câu hỏi trước
- **Nút "Câu tiếp"**: Chuyển đến câu hỏi tiếp theo
- **Nút "Nộp bài"**: Hoàn thành và xem kết quả

### Keyboard Shortcuts
- **← (Mũi tên trái)**: Câu trước
- **→ (Mũi tên phải)**: Câu tiếp
- **Enter**: Nộp bài hoặc chuyển câu

### Xem kết quả
- Điểm số được tính theo phần trăm (0-100%)
- Hiển thị số câu đúng/tổng số câu
- Thời gian hoàn thành bài thi
- Đánh giá màu sắc dựa trên điểm số:
  - 🟢 Xanh lá: 80% trở lên (Xuất sắc)
  - 🟡 Vàng: 60-79% (Khá)
  - 🔴 Đỏ: Dưới 60% (Cần cải thiện)

## 🛠️ Tùy chỉnh

### Thêm câu hỏi mới
Mở file `questions.js` và thêm câu hỏi vào object `questionsDatabase`:

```javascript
{
    question: "Câu hỏi của bạn?",
    options: [
        "Đáp án A",
        "Đáp án B", 
        "Đáp án C",
        "Đáp án D"
    ],
    correct: 0, // Index của đáp án đúng (0-3)
    explanation: "Giải thích chi tiết..."
}
```

### Thêm chủ đề mới
1. Thêm category mới vào `questionsDatabase`
2. Thêm tên hiển thị vào `categoryNames` trong `script.js`
3. Thêm HTML cho category card mới trong `index.html`

### Thay đổi số câu hỏi
Trong file `script.js`, thay đổi tham số trong hàm `startQuiz`:

```javascript
currentQuestions = getRandomQuestions(category, 10); // Thay 5 thành số mong muốn
```

## 📱 Responsive Design

Chương trình được thiết kế responsive và hoạt động tốt trên:
- 💻 Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📱 Mobile (< 768px)

## 🎨 Tính năng UI/UX

- **Gradient backgrounds**: Giao diện đẹp mắt với gradient
- **Smooth animations**: Hiệu ứng chuyển động mượt mà
- **Hover effects**: Tương tác trực quan
- **Progress tracking**: Theo dõi tiến độ làm bài
- **Score visualization**: Hiển thị điểm số trực quan

## 🔧 Yêu cầu hệ thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Không cần cài đặt thêm gì

## 📈 Roadmap

- [ ] Thêm chế độ thi thử với thời gian giới hạn
- [ ] Thêm chế độ học tập với giải thích chi tiết
- [ ] Thêm thống kê tiến độ học tập
- [ ] Thêm chế độ offline
- [ ] Thêm nhiều ngôn ngữ lập trình khác

## 🤝 Đóng góp

Nếu bạn muốn đóng góp câu hỏi mới hoặc cải thiện chương trình:

1. Fork repository này
2. Tạo branch mới cho feature của bạn
3. Commit changes
4. Tạo Pull Request

## 📄 License

MIT License - Sử dụng tự do cho mục đích học tập và thương mại.

## 🎯 Chúc bạn thành công!

Hãy ôn luyện thường xuyên và chúc bạn đạt kết quả tốt trong các buổi phỏng vấn technical! 🚀

---

**Lưu ý**: Chương trình này được tạo ra để hỗ trợ ôn luyện. Hãy kết hợp với việc thực hành coding và đọc tài liệu chính thức để có kết quả tốt nhất.
