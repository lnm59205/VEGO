# VEGO Dashboard - Hệ thống quản lý phế liệu

## Mô tả
Hệ thống quản lý toàn diện cho "Ve Chai Connect" với giao diện web desktop đầy đủ. Bao gồm chức năng đăng nhập bảo mật, dashboard quản lý, và các công cụ quản trị hệ thống.

## Tính năng chính

### 🔐 Hệ thống đăng nhập
- Giao diện đăng nhập đẹp mắt với background động
- Xác thực bảo mật với tài khoản: `admin` / mật khẩu: `123456`
- Tính năng "Ghi nhớ đăng nhập"
- Quản lý session tự động (24 giờ)
- Hiệu ứng loading và thông báo trực quan

### 📊 Dashboard tổng quan
- Thống kê tổng quan: Đơn hàng, doanh thu, hoa hồng, người dùng
- Biểu đồ và số liệu thời gian thực
- Danh sách đơn hàng gần đây
- Giao diện responsive và hiện đại

### 📦 Quản lý đơn hàng
- **Xem danh sách**: Hiển thị tất cả đơn hàng với thông tin chi tiết
- **Thêm đơn hàng**: Form tạo đơn hàng mới với validation
- **Chỉnh sửa**: Cập nhật thông tin đơn hàng
- **Duyệt đơn**: Phê duyệt hoặc từ chối đơn hàng
- **Xóa đơn**: Xóa đơn hàng với xác nhận
- **Trạng thái**: Quản lý trạng thái (Chờ duyệt, Đã duyệt, Hoàn thành, Từ chối)

### 👥 Quản lý người dùng
- Danh sách người thu mua
- Thông tin chi tiết và lịch sử hoạt động
- Quản lý quyền và trạng thái tài khoản

### 💳 Quản lý giao dịch
- Lịch sử giao dịch chi tiết
- Theo dõi thanh toán và hoa hồng
- Báo cáo tài chính

### ⚙️ Cài đặt hệ thống
- **Tỷ lệ hoa hồng**: Điều chỉnh từ 1% đến 50%
- **Tự động duyệt**: Cài đặt duyệt tự động
- **Cấu hình chung**: Các thiết lập hệ thống khác

### 📈 Báo cáo và thống kê
- Báo cáo doanh thu theo thời gian
- Thống kê hiệu suất
- Xuất báo cáo Excel/PDF

## Cấu trúc File

```
adminvego/
├── login.html          # Trang đăng nhập với giao diện đẹp
├── dashboard.html      # Dashboard chính với đầy đủ chức năng
├── index.html          # File mobile version (tương thích ngược)
├── auth.js            # Quản lý xác thực và session
├── data-connector.js   # Kết nối dữ liệu với app chính
├── config.js          # Cấu hình và thiết lập hệ thống
├── styles.css         # CSS tối ưu hóa và responsive
└── README.md          # Tài liệu hướng dẫn chi tiết
```

## Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic và responsive
- **CSS3**: Flexbox, Grid, Gradient, Animation
- **JavaScript (Vanilla)**: Logic xử lý và tương tác
- **LocalStorage**: Lưu trữ dữ liệu local

## Thiết kế

### Màu sắc chủ đạo
- **Xanh lá cây**: #4CAF50 (Primary)
- **Xanh đậm**: #45a049 (Secondary)
- **Trắng**: #FFFFFF (Background)
- **Xám nhạt**: #f8f9fa (Section background)

### Typography
- Font chính: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Kích thước responsive theo thiết bị

### Hiệu ứng
- Hover effects trên buttons và cards
- Smooth transitions (0.3s ease)
- Box shadows cho depth
- Backdrop blur cho modal

## Cách sử dụng

### 1. Truy cập hệ thống
```bash
# Mở file login.html trong trình duyệt
# Hoặc sử dụng live server cho development
```

### 2. Đăng nhập
- **Tài khoản**: `admin`
- **Mật khẩu**: `123456`
- Tích "Ghi nhớ đăng nhập" nếu muốn lưu thông tin
- Hệ thống sẽ tự động chuyển hướng đến dashboard

### 3. Sử dụng Dashboard
- **Tổng quan**: Xem thống kê và số liệu tổng quan
- **Quản lý đơn hàng**: Thêm, sửa, xóa, duyệt đơn hàng
- **Cài đặt**: Điều chỉnh tỷ lệ hoa hồng và các thiết lập
- **Đăng xuất**: Nhấn nút đăng xuất ở sidebar

### 4. Quản lý đơn hàng
- Nhấn "Thêm đơn hàng" để tạo đơn mới
- Sử dụng các nút hành động để chỉnh sửa, duyệt, xóa
- Theo dõi trạng thái đơn hàng qua badge màu sắc

### 5. Cài đặt hệ thống
- Điều chỉnh tỷ lệ hoa hồng (1-50%)
- Bật/tắt tự động duyệt đơn
- Các cài đặt khác sẽ được cập nhật trong tương lai

## Tích hợp với App chính

### Data Connector
File `data-connector.js` cung cấp các phương thức:
- `getOrders()`: Lấy danh sách đơn hàng
- `addOrder()`: Thêm đơn hàng mới
- `updateWalletBalance()`: Cập nhật số dư ví
- `getEarningsStats()`: Thống kê thu nhập

### Storage Keys
- `vegoOrders`: Danh sách đơn hàng
- `vegoWalletBalance`: Số dư ví
- `vegoCommissionRate`: Tỷ lệ hoa hồng
- `vegoUserProfile`: Thông tin người dùng
- `vegoTransactions`: Lịch sử giao dịch

## Responsive Design

### Mobile First
- Thiết kế ưu tiên điện thoại (max-width: 414px)
- Touch-friendly buttons và interactions
- Optimized cho màn hình nhỏ

### Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

### Optimizations
- Minimal CSS và JavaScript
- Efficient DOM manipulation
- LocalStorage caching
- Smooth animations với CSS transforms

### Loading Time
- Single HTML file: < 50KB
- No external dependencies
- Fast initial load

## Security

### Data Protection
- Client-side storage only
- No sensitive data transmission
- Input validation và sanitization

### Best Practices
- XSS protection
- CSRF prevention
- Secure localStorage usage

## Future Enhancements

### Planned Features
- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] GPS location tracking
- [ ] Photo upload cho đơn hàng
- [ ] Multi-language support
- [ ] Dark mode theme

### Technical Improvements
- [ ] Service Worker cho offline support
- [ ] PWA capabilities
- [ ] Push notifications
- [ ] Advanced analytics

## Troubleshooting

### Common Issues

**1. Dữ liệu không lưu**
- Kiểm tra localStorage có được enable
- Clear cache và reload trang

**2. Popup không hiển thị**
- Kiểm tra JavaScript console errors
- Đảm bảo modal CSS được load đúng

**3. Responsive issues**
- Kiểm tra viewport meta tag
- Test trên different screen sizes

## Support

Để được hỗ trợ, vui lòng liên hệ:
- Email: support@vechaiconnect.com
- Phone: 1900-VEGO (8346)

## License

© 2024 Ve Chai Connect. All rights reserved.