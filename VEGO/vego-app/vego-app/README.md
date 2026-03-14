# Vego App - Ứng dụng Rau sạch

Ứng dụng React Native cho việc mua bán rau sạch với các tính năng bản đồ, diễn đàn, và hệ thống điểm thưởng.

## Cấu trúc thư mục

```
vego-app/
├── assets/                  # Hình ảnh, icons, fonts chung
│   ├── images/
│   └── icons/
├── src/
│   ├── api/                 # Cấu hình gọi API (Axios/Fetch)
│   │   └── apiClient.js
│   ├── components/          # Các component dùng chung
│   │   ├── Common/          # Button, Input, Card...
│   │   └── Layout/          # Bottom Tab Bar, Header custom
│   ├── constants/           # Màu sắc, kích thước, chuỗi văn bản
│   │   ├── Colors.js
│   │   ├── Sizes.js
│   │   ├── Strings.js
│   │   └── index.js
│   ├── navigation/          # Cấu hình chuyển trang (React Navigation)
│   ├── screens/             # Các màn hình chính của ứng dụng
│   │   ├── Auth/            # Nhóm màn hình Đăng nhập/Đăng ký
│   │   │   ├── LoginScreen.js
│   │   │   └── RegisterScreen.js
│   │   ├── Home/            # Màn hình Trang chủ (có Bản đồ & nút Bán ngay)
│   │   │   ├── HomeScreen.js
│   │   │   └── MapViewComponent.js
│   │   ├── Activity/        # Màn hình Hoạt động
│   │   │   ├── ActivityScreen.js
│   │   │   └── ActivityCard.js
│   │   ├── Forum/           # Màn hình Diễn đàn
│   │   │   └── ForumScreen.js
│   │   ├── Rewards/         # Màn hình Ưu đãi
│   │   │   └── RewardsScreen.js
│   │   └── Profile/         # Màn hình Tài khoản
│   │       └── ProfileScreen.js
│   ├── services/            # Xử lý logic nghiệp vụ (Location, Camera)
│   ├── store/               # Quản lý trạng thái (Redux/Zustand)
│   └── utils/               # Các hàm bổ trợ
│       └── formatters.js
├── App.js                   # File khởi tạo chính
├── package.json
└── README.md
```

## Tính năng chính

### 🏠 Trang chủ (Home)
- Hiển thị bản đồ các điểm bán rau sạch gần bạn
- Nút "Bán ngay" để đăng bán sản phẩm nhanh chóng

### 📱 Hoạt động (Activity)
- Theo dõi lịch sử mua bán
- Hiển thị các giao dịch gần đây
- Thống kê điểm thưởng

### 💬 Diễn đàn (Forum)
- Chia sẻ kinh nghiệm trồng rau
- Thảo luận về rau sạch
- Tạo bài viết mới

### 🎁 Ưu đãi (Rewards)
- Hệ thống điểm thưởng
- Đổi điểm lấy ưu đãi
- Voucher giảm giá

### 👤 Tài khoản (Profile)
- Thông tin cá nhân
- Lịch sử giao dịch
- Cài đặt ứng dụng

## Cài đặt

1. Clone repository
2. Cài đặt dependencies:
   ```bash
   npm install
   ```

3. Chạy ứng dụng:
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## Dependencies chính

- **React Navigation**: Điều hướng giữa các màn hình
- **React Native Maps**: Hiển thị bản đồ
- **Axios**: Gọi API
- **Expo**: Framework phát triển React Native

## TODO

- [ ] Tích hợp API backend
- [ ] Cấu hình react-native-maps
- [ ] Thêm chức năng camera để chụp ảnh sản phẩm
- [ ] Tích hợp định vị GPS
- [ ] Thêm push notifications
- [ ] Tích hợp thanh toán
- [ ] Thêm chat realtime

## Ghi chú

- Ứng dụng sử dụng tiếng Việt làm ngôn ngữ chính
- Thiết kế theo Material Design với màu xanh lá chủ đạo
- Hỗ trợ cả iOS và Android
- Sử dụng Expo để phát triển nhanh chóng