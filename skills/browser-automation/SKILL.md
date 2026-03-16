---
name: browser-automation
description: Sử dụng Browser Subagent để thực hiện kiểm thử UI, lấy dữ liệu web hoặc xác minh deployment.
---
# Browser Automation Skill

## Use Cases
1. **QA Engineer**: Tự động hóa việc kiểm tra giao diện người dùng (Visual Testing) và luồng nghiệp vụ (E2E).
2. **DevOps**: Kiểm tra trạng thái website sau khi deploy (Smoke Test).
3. **Bug Investigator**: Chụp ảnh màn hình hoặc quay video các bước tái hiện lỗi trên trình duyệt.

## Best Practices
- Ưu tiên sử dụng **Markdown Parsing** để đọc nội dung nhanh chóng.
- Chỉ yêu cầu **Screenshots/Video** khi cần xác minh về mặt hiển thị (CSS/Layout).
- Luôn kiểm tra **Console Logs** để phát hiện các lỗi JavaScript ngầm.