# 🔧 Fix CI/CD Pipeline

## ❌ Lỗi gặp phải:
```
Error: Dependencies lock file is not found in /home/runner/work/question-interview-app/question-interview-app. 
Supported file patterns: package-lock.json,npm-shrinkwrap.json,yarn.lock
```

## ✅ Đã sửa:

### 1. Tạo package-lock.json
```bash
npm install
```

### 2. Sửa GitHub Actions workflow
- Xóa `cache: 'npm'` vì không cần thiết cho static site
- Thay `npm ci` thành `npm install`
- Tạo workflow đơn giản hơn

### 3. Cấu trúc workflow mới:

#### `deploy.yml` - Deploy chính
- Chỉ chạy khi push lên main/master
- Deploy trực tiếp lên Netlify
- Không cần test phức tạp

#### `test-only.yml` - Test cho PR
- Chạy khi có Pull Request
- Chỉ test, không deploy
- Linting HTML, CSS, JS

#### `simple-deploy.yml` - Deploy đơn giản
- Backup option nếu cần

## 🚀 Cách sử dụng:

### 1. Push code lên GitHub
```bash
git add .
git commit -m "Fix CI/CD pipeline"
git push origin main
```

### 2. Kiểm tra GitHub Actions
- Vào repository > Actions tab
- Xem workflow "Deploy to Netlify" chạy
- Nếu thành công, app sẽ deploy lên Netlify

### 3. Cấu hình Netlify Secrets (nếu chưa có)
Vào GitHub repository > Settings > Secrets and variables > Actions:
- `NETLIFY_AUTH_TOKEN`: Lấy từ Netlify dashboard
- `NETLIFY_SITE_ID`: Lấy từ Netlify site settings

## 🔍 Troubleshooting:

### Nếu vẫn lỗi:
1. Kiểm tra file `.github/workflows/deploy.yml` có đúng format không
2. Đảm bảo `package-lock.json` đã được commit
3. Kiểm tra Netlify secrets đã được set chưa

### Nếu muốn test local:
```bash
# Test linting
npm run lint

# Test HTML
npx htmlhint *.html

# Test CSS  
npx stylelint *.css

# Test JS
npx eslint *.js
```

## 📝 Lưu ý:
- Static site không cần build process phức tạp
- Chỉ cần deploy files HTML, CSS, JS
- Netlify sẽ tự động serve static files
