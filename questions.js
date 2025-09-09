// Database câu hỏi cho các chủ đề technical interview
const questionsDatabase = {
    algorithms: [
        {
            question: "Độ phức tạp thời gian của thuật toán Quick Sort trong trường hợp tốt nhất là gì?",
            options: [
                "O(n)",
                "O(n log n)",
                "O(n²)",
                "O(log n)"
            ],
            correct: 1,
            explanation: "Quick Sort có độ phức tạp O(n log n) trong trường hợp tốt nhất khi pivot luôn chia mảng thành hai phần bằng nhau."
        },
        {
            question: "Cấu trúc dữ liệu nào phù hợp nhất để implement một Stack?",
            options: [
                "Array",
                "Linked List",
                "Cả Array và Linked List đều được",
                "Tree"
            ],
            correct: 2,
            explanation: "Cả Array và Linked List đều có thể được sử dụng để implement Stack. Array hiệu quả hơn về memory, Linked List linh hoạt hơn về kích thước."
        },
        {
            question: "Thuật toán nào được sử dụng để tìm đường đi ngắn nhất trong đồ thị có trọng số dương?",
            options: [
                "BFS",
                "DFS",
                "Dijkstra",
                "Floyd-Warshall"
            ],
            correct: 2,
            explanation: "Thuật toán Dijkstra được sử dụng để tìm đường đi ngắn nhất từ một đỉnh đến tất cả các đỉnh khác trong đồ thị có trọng số dương."
        },
        {
            question: "Độ phức tạp không gian của thuật toán Merge Sort là bao nhiêu?",
            options: [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n log n)"
            ],
            correct: 2,
            explanation: "Merge Sort có độ phức tạp không gian O(n) vì nó cần tạo mảng phụ để merge các mảng con."
        },
        {
            question: "Cấu trúc dữ liệu nào cho phép truy cập phần tử theo chỉ số trong thời gian O(1)?",
            options: [
                "Linked List",
                "Array",
                "Stack",
                "Queue"
            ],
            correct: 1,
            explanation: "Array cho phép truy cập phần tử theo chỉ số trong thời gian O(1) vì các phần tử được lưu trữ liên tiếp trong memory."
        }
    ],
    
    javascript: [
        {
            question: "Kết quả của đoạn code sau là gì? console.log(typeof null);",
            options: [
                "null",
                "undefined",
                "object",
                "string"
            ],
            correct: 2,
            explanation: "typeof null trả về 'object' - đây là một bug nổi tiếng trong JavaScript từ những ngày đầu."
        },
        {
            question: "Sự khác biệt giữa '==' và '===' trong JavaScript là gì?",
            options: [
                "Không có sự khác biệt",
                "'==' so sánh giá trị, '===' so sánh giá trị và kiểu dữ liệu",
                "'===' so sánh giá trị, '==' so sánh giá trị và kiểu dữ liệu",
                "Cả hai đều so sánh giá trị và kiểu dữ liệu"
            ],
            correct: 1,
            explanation: "'==' thực hiện type coercion (chuyển đổi kiểu) trước khi so sánh, còn '===' so sánh cả giá trị và kiểu dữ liệu mà không chuyển đổi."
        },
        {
            question: "Closure trong JavaScript là gì?",
            options: [
                "Một function được định nghĩa bên trong function khác",
                "Một function có thể truy cập biến của scope cha ngay cả khi function cha đã kết thúc",
                "Một cách để đóng gói dữ liệu",
                "Một loại object đặc biệt"
            ],
            correct: 1,
            explanation: "Closure là khả năng của một function bên trong truy cập các biến của function bên ngoài ngay cả khi function bên ngoài đã kết thúc thực thi."
        },
        {
            question: "Promise trong JavaScript được sử dụng để làm gì?",
            options: [
                "Xử lý các thao tác bất đồng bộ",
                "Tạo ra các object mới",
                "Thực hiện vòng lặp",
                "Xử lý lỗi"
            ],
            correct: 0,
            explanation: "Promise được sử dụng để xử lý các thao tác bất đồng bộ một cách dễ dàng hơn, thay thế cho callback hell."
        },
        {
            question: "Hoisting trong JavaScript có nghĩa là gì?",
            options: [
                "Di chuyển code lên đầu file",
                "Các khai báo function và var được đưa lên đầu scope",
                "Tối ưu hóa code",
                "Xóa bỏ các biến không sử dụng"
            ],
            correct: 1,
            explanation: "Hoisting là cơ chế trong JavaScript nơi các khai báo function và var được đưa lên đầu scope trước khi code được thực thi."
        }
    ],
    
    react: [
        {
            question: "useEffect hook được sử dụng để làm gì?",
            options: [
                "Quản lý state",
                "Thực hiện side effects",
                "Tạo ra các component",
                "Xử lý events"
            ],
            correct: 1,
            explanation: "useEffect được sử dụng để thực hiện side effects như gọi API, đăng ký event listeners, hoặc thao tác với DOM."
        },
        {
            question: "Sự khác biệt giữa props và state trong React là gì?",
            options: [
                "Không có sự khác biệt",
                "Props là read-only, state có thể thay đổi",
                "State là read-only, props có thể thay đổi",
                "Cả hai đều có thể thay đổi"
            ],
            correct: 1,
            explanation: "Props được truyền từ component cha xuống component con và là read-only. State được quản lý bên trong component và có thể thay đổi."
        },
        {
            question: "Virtual DOM trong React là gì?",
            options: [
                "Một DOM thật sự",
                "Một bản sao JavaScript của DOM thật",
                "Một loại component",
                "Một state management tool"
            ],
            correct: 1,
            explanation: "Virtual DOM là một bản sao JavaScript của DOM thật, được sử dụng để tối ưu hóa việc cập nhật UI bằng cách so sánh và chỉ cập nhật những phần thay đổi."
        },
        {
            question: "Khi nào nên sử dụng useCallback hook?",
            options: [
                "Khi muốn tạo ra function mới",
                "Khi muốn tối ưu hóa performance bằng cách memoize function",
                "Khi muốn thay đổi state",
                "Khi muốn gọi API"
            ],
            correct: 1,
            explanation: "useCallback được sử dụng để memoize function, tránh tạo ra function mới không cần thiết trong mỗi lần render, giúp tối ưu hóa performance."
        },
        {
            question: "Redux được sử dụng để làm gì trong React?",
            options: [
                "Styling components",
                "Quản lý state toàn cục",
                "Tạo ra components",
                "Xử lý routing"
            ],
            correct: 1,
            explanation: "Redux là một state management library được sử dụng để quản lý state toàn cục của ứng dụng một cách dự đoán được."
        }
    ],
    
    "system-design": [
        {
            question: "Load Balancer được sử dụng để làm gì trong system design?",
            options: [
                "Tăng tốc độ xử lý",
                "Phân phối traffic đến nhiều server",
                "Lưu trữ dữ liệu",
                "Mã hóa dữ liệu"
            ],
            correct: 1,
            explanation: "Load Balancer phân phối incoming requests đến nhiều server để đảm bảo không có server nào bị quá tải và cải thiện availability."
        },
        {
            question: "Caching được sử dụng để làm gì?",
            options: [
                "Lưu trữ dữ liệu vĩnh viễn",
                "Tăng tốc độ truy cập dữ liệu thường xuyên sử dụng",
                "Mã hóa dữ liệu",
                "Backup dữ liệu"
            ],
            correct: 1,
            explanation: "Caching lưu trữ dữ liệu thường xuyên sử dụng trong memory để giảm thời gian truy cập và giảm tải cho database."
        },
        {
            question: "Microservices architecture có ưu điểm gì?",
            options: [
                "Dễ deploy và scale từng service riêng biệt",
                "Tất cả services phải được deploy cùng lúc",
                "Khó maintain hơn monolithic",
                "Chỉ phù hợp với ứng dụng nhỏ"
            ],
            correct: 0,
            explanation: "Microservices cho phép deploy và scale từng service độc lập, sử dụng công nghệ khác nhau cho từng service, và dễ maintain hơn."
        },
        {
            question: "Database sharding là gì?",
            options: [
                "Sao chép database",
                "Chia database thành nhiều phần nhỏ hơn",
                "Backup database",
                "Mã hóa database"
            ],
            correct: 1,
            explanation: "Database sharding là kỹ thuật chia database thành nhiều phần nhỏ hơn (shards) để cải thiện performance và khả năng mở rộng."
        },
        {
            question: "CDN (Content Delivery Network) được sử dụng để làm gì?",
            options: [
                "Lưu trữ dữ liệu",
                "Phân phối nội dung tĩnh đến các server gần người dùng",
                "Xử lý business logic",
                "Quản lý database"
            ],
            correct: 1,
            explanation: "CDN phân phối nội dung tĩnh (images, CSS, JS) đến các server địa lý gần người dùng để giảm latency và cải thiện performance."
        }
    ],
    
    database: [
        {
            question: "ACID trong database có nghĩa là gì?",
            options: [
                "Atomicity, Consistency, Isolation, Durability",
                "Access, Control, Integrity, Data",
                "Application, Code, Interface, Design",
                "Analysis, Creation, Implementation, Deployment"
            ],
            correct: 0,
            explanation: "ACID là 4 tính chất cơ bản của transaction: Atomicity (tính nguyên tử), Consistency (tính nhất quán), Isolation (tính cô lập), Durability (tính bền vững)."
        },
        {
            question: "Index trong database được sử dụng để làm gì?",
            options: [
                "Lưu trữ dữ liệu",
                "Tăng tốc độ truy vấn",
                "Mã hóa dữ liệu",
                "Backup dữ liệu"
            ],
            correct: 1,
            explanation: "Index là cấu trúc dữ liệu đặc biệt giúp tăng tốc độ truy vấn bằng cách tạo ra con đường nhanh hơn để tìm dữ liệu."
        },
        {
            question: "Sự khác biệt giữa SQL và NoSQL là gì?",
            options: [
                "Không có sự khác biệt",
                "SQL có schema cố định, NoSQL linh hoạt hơn",
                "NoSQL nhanh hơn SQL",
                "SQL chỉ dành cho web"
            ],
            correct: 1,
            explanation: "SQL databases có schema cố định và sử dụng ACID, NoSQL databases linh hoạt hơn về schema và có thể scale ngang dễ dàng hơn."
        },
        {
            question: "Normalization trong database có mục đích gì?",
            options: [
                "Tăng tốc độ truy vấn",
                "Giảm redundancy và cải thiện data integrity",
                "Tăng dung lượng lưu trữ",
                "Mã hóa dữ liệu"
            ],
            correct: 1,
            explanation: "Normalization giúp loại bỏ dữ liệu trùng lặp, giảm redundancy và cải thiện data integrity bằng cách tổ chức dữ liệu thành các bảng có cấu trúc tốt."
        },
        {
            question: "Transaction rollback có nghĩa là gì?",
            options: [
                "Tăng tốc độ transaction",
                "Hoàn tác tất cả thay đổi trong transaction",
                "Tạo backup của transaction",
                "Mã hóa transaction"
            ],
            correct: 1,
            explanation: "Rollback hoàn tác tất cả thay đổi đã thực hiện trong transaction, đưa database về trạng thái trước khi transaction bắt đầu."
        }
    ],
    
    networking: [
        {
            question: "HTTP và HTTPS khác nhau như thế nào?",
            options: [
                "Không có sự khác biệt",
                "HTTPS sử dụng SSL/TLS để mã hóa",
                "HTTP nhanh hơn HTTPS",
                "HTTPS chỉ dành cho mobile"
            ],
            correct: 1,
            explanation: "HTTPS là HTTP với SSL/TLS encryption, đảm bảo dữ liệu được mã hóa khi truyền giữa client và server."
        },
        {
            question: "TCP và UDP khác nhau như thế nào?",
            options: [
                "Không có sự khác biệt",
                "TCP đảm bảo delivery, UDP không",
                "UDP nhanh hơn TCP",
                "Cả B và C đều đúng"
            ],
            correct: 3,
            explanation: "TCP đảm bảo delivery và ordering nhưng chậm hơn, UDP nhanh hơn nhưng không đảm bảo delivery."
        },
        {
            question: "RESTful API là gì?",
            options: [
                "Một loại database",
                "Một kiến trúc web service sử dụng HTTP methods",
                "Một ngôn ngữ lập trình",
                "Một loại server"
            ],
            correct: 1,
            explanation: "RESTful API là kiến trúc web service sử dụng HTTP methods (GET, POST, PUT, DELETE) và tuân theo các nguyên tắc REST."
        },
        {
            question: "DNS (Domain Name System) có chức năng gì?",
            options: [
                "Mã hóa dữ liệu",
                "Chuyển đổi domain name thành IP address",
                "Tạo ra website",
                "Lưu trữ dữ liệu"
            ],
            correct: 1,
            explanation: "DNS chuyển đổi domain name (như google.com) thành IP address (như 142.250.191.14) để browser có thể kết nối đến server."
        },
        {
            question: "WebSocket khác HTTP như thế nào?",
            options: [
                "Không có sự khác biệt",
                "WebSocket cho phép communication 2 chiều real-time",
                "HTTP nhanh hơn WebSocket",
                "WebSocket chỉ dành cho mobile"
            ],
            correct: 1,
            explanation: "WebSocket thiết lập persistent connection cho phép server và client gửi dữ liệu cho nhau bất cứ lúc nào, phù hợp cho real-time applications."
        }
    ]
};

// Hàm lấy câu hỏi ngẫu nhiên cho một category
function getRandomQuestions(category, count = 5) {
    const questions = questionsDatabase[category];
    if (!questions) return [];
    
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, questions.length));
}

// Hàm lấy tất cả câu hỏi của một category
function getAllQuestions(category) {
    return questionsDatabase[category] || [];
}
