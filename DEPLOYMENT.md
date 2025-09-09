# 🚀 Hướng dẫn Deploy lên Netlify

Hướng dẫn chi tiết để deploy ứng dụng Technical Interview Practice lên Netlify với CI/CD pipeline.

## 📋 Yêu cầu trước khi bắt đầu

- Tài khoản GitHub
- Tài khoản Netlify
- Git đã cài đặt trên máy local
- Node.js (phiên bản 14+)

## 🔧 Cách 1: Deploy tự động với GitHub + Netlify

### Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào [GitHub](https://github.com)
2. Tạo repository mới:
   - Repository name: `technical-interview-practice`
   - Description: `Technical Interview Practice Application`
   - Public/Private: Tùy chọn
   - ✅ Add README file
   - ✅ Add .gitignore (chọn Node template)

### Bước 2: Push code lên GitHub

```bash
# Khởi tạo git repository
git init

# Thêm remote origin
git remote add origin https://github.com/your-username/technical-interview-practice.git

# Thêm tất cả files
git add .

# Commit lần đầu
git commit -m "Initial commit: Technical Interview Practice App"

# Push lên GitHub
git push -u origin main
```

### Bước 3: Tạo Site trên Netlify

1. Đăng nhập vào [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Chọn "GitHub" và authorize
4. Chọn repository `technical-interview-practice`
5. Cấu hình build settings:
   - **Build command**: `echo 'No build command needed'`
   - **Publish directory**: `.` (root directory)
   - **Node version**: `18`
6. Click "Deploy site"

### Bước 4: Cấu hình Environment Variables

1. Vào Site settings > Environment variables
2. Thêm các biến sau (nếu cần):
   ```
   NODE_VERSION=18
   NPM_VERSION=9
   ```

### Bước 5: Cấu hình Custom Domain (Tùy chọn)

1. Vào Domain settings
2. Click "Add custom domain"
3. Nhập domain của bạn
4. Cấu hình DNS theo hướng dẫn

## 🔧 Cách 2: Deploy thủ công với Netlify CLI

### Bước 1: Cài đặt Netlify CLI

```bash
npm install -g netlify-cli
```

### Bước 2: Login vào Netlify

```bash
netlify login
```

### Bước 3: Deploy

```bash
# Deploy thủ công
netlify deploy

# Deploy production
netlify deploy --prod
```

## 🔧 Cách 3: Drag & Drop (Nhanh nhất)

1. Vào [Netlify](https://netlify.com)
2. Kéo thả thư mục chứa project vào vùng "Deploy manually"
3. Netlify sẽ tự động deploy

## ⚙️ Cấu hình CI/CD Pipeline

### GitHub Actions Workflow

File `.github/workflows/deploy.yml` đã được tạo sẵn với các tính năng:

- ✅ **Linting**: Kiểm tra HTML, CSS, JavaScript
- ✅ **Testing**: Chạy tests (nếu có)
- ✅ **Auto Deploy**: Tự động deploy khi push lên main branch
- ✅ **Pull Request**: Chạy checks cho PR

### Cấu hình Secrets

Để sử dụng GitHub Actions, thêm các secrets sau:

1. Vào GitHub repository > Settings > Secrets and variables > Actions
2. Thêm các secrets:
   - `NETLIFY_AUTH_TOKEN`: Lấy từ Netlify > User settings > Applications > Personal access tokens
   - `NETLIFY_SITE_ID`: Lấy từ Site settings > General > Site details

## 🎯 Các tính năng CI/CD

### 1. Automatic Deployments
- Deploy tự động khi push lên `main` branch
- Deploy preview cho mỗi Pull Request
- Rollback dễ dàng nếu có lỗi

### 2. Build Optimization
- Cache dependencies
- Optimize assets
- Minify CSS/JS (nếu cần)

### 3. Quality Checks
- HTML validation
- CSS linting
- JavaScript linting
- Performance checks

### 4. Security Headers
- X-Frame-Options
- X-XSS-Protection
- Content Security Policy
- HTTPS redirect

## 📊 Monitoring & Analytics

### Netlify Analytics
1. Vào Site settings > Analytics
2. Enable Netlify Analytics
3. Xem metrics: page views, unique visitors, top pages

### Custom Analytics
Thêm Google Analytics hoặc các tools khác:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Workflow Development

### Local Development
```bash
# Clone repository
git clone https://github.com/your-username/technical-interview-practice.git
cd technical-interview-practice

# Install dependencies
npm install

# Start development server
npm start
```

### Making Changes
```bash
# Tạo branch mới
git checkout -b feature/new-feature

# Làm thay đổi
# ... edit files ...

# Commit changes
git add .
git commit -m "Add new feature"

# Push branch
git push origin feature/new-feature

# Tạo Pull Request trên GitHub
```

### Deploy Process
1. **Development**: Làm việc trên feature branch
2. **Testing**: Tạo Pull Request → GitHub Actions chạy tests
3. **Review**: Code review và approve
4. **Merge**: Merge vào main branch
5. **Deploy**: Tự động deploy lên Netlify

## 🚨 Troubleshooting

### Lỗi thường gặp

#### 1. Build Failed
```bash
# Kiểm tra logs
netlify logs

# Kiểm tra local build
npm run build
```

#### 2. Environment Variables
- Đảm bảo tất cả biến môi trường đã được set
- Kiểm tra format của variables

#### 3. Dependencies Issues
```bash
# Clear cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 4. Git Issues
```bash
# Reset to last working commit
git reset --hard HEAD~1

# Force push (cẩn thận!)
git push --force-with-lease
```

## 📈 Performance Optimization

### 1. Image Optimization
- Sử dụng WebP format
- Lazy loading cho images
- Responsive images

### 2. Code Splitting
- Chia nhỏ JavaScript files
- Load on demand

### 3. Caching
- Browser caching
- CDN caching
- Service Worker (PWA)

## 🔐 Security Best Practices

### 1. HTTPS
- Netlify tự động cung cấp HTTPS
- Redirect HTTP → HTTPS

### 2. Headers
- Security headers đã được cấu hình trong `netlify.toml`
- Content Security Policy

### 3. Dependencies
- Regular updates
- Security audits: `npm audit`

## 📱 Mobile Optimization

### 1. Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Fast loading

### 2. PWA Features
- Service Worker
- Manifest file
- Offline support

## 🎉 Kết quả

Sau khi deploy thành công, bạn sẽ có:

- ✅ **Live URL**: `https://your-app-name.netlify.app`
- ✅ **Custom Domain**: Nếu đã cấu hình
- ✅ **HTTPS**: Tự động
- ✅ **CDN**: Global distribution
- ✅ **Analytics**: Traffic monitoring
- ✅ **CI/CD**: Automatic deployments

## 📞 Hỗ trợ

Nếu gặp vấn đề:

1. Kiểm tra [Netlify Docs](https://docs.netlify.com/)
2. Xem [GitHub Actions Docs](https://docs.github.com/en/actions)
3. Tạo issue trên GitHub repository
4. Liên hệ qua email: your-email@example.com

---

**Chúc bạn deploy thành công! 🚀**
