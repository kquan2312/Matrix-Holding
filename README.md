# Matrix Holding — Corporate Landing Page

Website giới thiệu **Matrix Holding — Tập đoàn kinh doanh đa ngành**, gồm trang chủ và các trang Tin tức, Tuyển dụng, Liên hệ.

Giao diện được xây dựng theo hướng **corporate / premium / modern**, tập trung vào hình ảnh tập đoàn, hệ sinh thái kinh doanh, dự án và định hướng phát triển.

### Các trang

* Trang chủ: `/`
* Hệ sinh thái: `/he-sinh-thai`
* Tin tức: `/tin-tuc`
* Tuyển dụng: `/tuyen-dung`
* Liên hệ: `/lien-he`

Khi triển khai trên hosting tĩnh, cấu hình rewrite các đường dẫn trên về `index.html` để có thể truy cập trực tiếp và tải lại từng trang.

---

## 1. Tech Stack

* React
* TypeScript
* Vite
* CSS
* Lucide React
* ESLint / TypeScript checking

### Frontend

```text
React + TypeScript + Vite
```

### Backend

Hiện tại **chưa triển khai Backend**.

Dữ liệu đang được tổ chức thông qua các file trong:

```text
src/data/
```

Kiến trúc dữ liệu được chuẩn bị để sau này có thể thay bằng API từ Backend mà **không cần viết lại UI component**.

---

## 2. Project Structure

```text
matrix-holding/
│
├── public/
│   ├── icons/
│   └── images/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   └── SectionHeading.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Introduction.tsx
│   │       ├── Ecosystem.tsx
│   │       ├── BusinessUnits.tsx
│   │       ├── Projects.tsx
│   │       ├── Capabilities.tsx
│   │       ├── VisionMission.tsx
│   │       ├── Leadership.tsx
│   │       ├── Partners.tsx
│   │       ├── News.tsx
│   │       └── CTA.tsx
│   │
│   ├── data/
│   │   ├── businessUnits.ts
│   │   ├── capabilities.ts
│   │   ├── leadership.ts
│   │   ├── news.ts
│   │   ├── partners.ts
│   │   └── projects.ts
│   │
│   ├── hooks/
│   │
│   ├── i18n/
│   │   └── index.ts
│   │
│   ├── pages/
│   │   └── Home.tsx
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── components.css
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── utils/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

# 3. Landing Page Structure

Website hiện tại gồm các section:

```text
Header (không đánh số)
Hero (không đánh số)
01. Giới thiệu
02. Triết lý phát triển
03. Lĩnh vực kinh doanh
04. Dự án & hoạt động
05. Năng lực
06. Tầm nhìn & sứ mệnh
07. Đội ngũ lãnh đạo
08. Đối tác
09. Tin tức & hoạt động
CTA (không đánh số)
Footer (không đánh số)
```

Thứ tự section được quản lý tại:

```text
src/pages/Home.tsx
```

---

# 4. Data Architecture

Dữ liệu nội dung không nên hard-code trực tiếp quá nhiều trong component.

Ví dụ:

```text
src/data/projects.ts
```

sẽ chứa dữ liệu:

```ts
import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "project-01",
    title: "Tên dự án",
    category: "Bất động sản",
    year: "2026",
    description: "Mô tả dự án",
    image: "/images/project-01.jpg",
  },
];
```

Component chỉ chịu trách nhiệm render:

```tsx
projects.map((project) => ...)
```

---

# 5. Quy tắc dữ liệu

## Không hard-code dữ liệu vào UI nếu dữ liệu có khả năng thay đổi

Không nên:

```tsx
<h3>Dự án ABC</h3>
<p>Mô tả dự án ABC...</p>
```

Nên:

```tsx
{projects.map((project) => (
  <article key={project.id}>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </article>
))}
```

Mục tiêu là sau này Backend có thể trả JSON tương ứng.

---

# 6. Chuẩn bị cho Backend

Hiện tại:

```text
Frontend
   ↓
src/data/*.ts
   ↓
React Components
```

Sau này:

```text
Backend API
   ↓
JSON
   ↓
Frontend
   ↓
React Components
```

Ví dụ Backend trả:

```json
{
  "id": "project-01",
  "title": "Tên dự án",
  "category": "Bất động sản",
  "year": "2026",
  "description": "Mô tả dự án",
  "image": "/images/project-01.jpg"
}
```

Frontend sử dụng cùng structure:

```ts
interface Project {
  id: string;
  title: string;
  category: string;
  year?: string;
  description?: string;
  image: string;
}
```

Khi chuyển sang Backend, ưu tiên thay:

```ts
import { projects } from "../../data/projects";
```

bằng data lấy từ API/service.

**Không viết lại component UI nếu API giữ đúng data contract.**

---

# 7. Type Definitions

Các interface/type dùng chung đặt tại:

```text
src/types/index.ts
```

Ví dụ:

```ts
export interface Project {
  id: string;
  title: string;
  category: string;
  year?: string;
  description?: string;
  image: string;
}
```

Không nên tạo lại cùng một interface ở nhiều component.

---

# 8. Images

Thư mục:

```text
public/images/
```

dùng cho hình ảnh của website.

Các nhóm hình ảnh dự kiến:

```text
public/images/
├── hero/
├── business/
├── projects/
├── leadership/
├── news/
├── partners/
└── samples/
```

`public/images/samples/` chứa ảnh SVG minh họa được dùng cùng dữ liệu mẫu;
ảnh và nội dung chính thức cần được bổ sung trước khi website ra mắt.

Các file trong `src/data/` cung cấp nội dung mẫu cho giao diện. Hồ sơ lãnh
đạo, đối tác, dự án và tin tức trong đó chỉ nhằm minh họa, không phải thông
tin thực tế của Matrix Holding. Hãy thay bằng nội dung đã được xác nhận
trước khi xuất bản.

### Quy tắc

Không commit ảnh test/random nếu chưa sử dụng.

Khi thêm ảnh:

```tsx
<img
  src="/images/projects/project-01.jpg"
  alt="Tên dự án"
/>
```

Ưu tiên đặt tên file rõ ràng, lowercase và dùng `-`:

```text
project-01.jpg
business-real-estate.jpg
leadership-ceo.jpg
```

---

# 9. Icons

Icon riêng của website đặt tại:

```text
public/icons/
```

Ví dụ:

```text
public/icons/favicon.svg
public/icons/logo.svg
```

Icon UI có thể sử dụng:

```text
lucide-react
```

Không tạo SVG inline quá dài trong component nếu có thể sử dụng icon component.

---

# 10. Favicon

Favicon/logo biểu tượng của website đặt tại:

```text
public/icons/favicon.png
```

Favicon được khai báo trong `index.html` và dùng làm biểu tượng nhận diện
trong Header, menu mobile và Footer.

Typography dùng Be Vietnam Pro để hiển thị tiếng Việt; cần có font dự phòng
để nội dung vẫn đọc được khi không kết nối được máy chủ font.

---

# 11. Styling Rules

CSS được chia thành:

```text
src/styles/
├── variables.css
├── global.css
└── components.css
```

### variables.css

Chứa:

* màu sắc
* typography variables
* spacing
* container width
* border
* transition
* các biến dùng chung

### global.css

Chứa:

* reset
* body
* html
* typography mặc định
* link
* button
* scrollbar
* global utilities

### components.css

Chứa style của:

* Header
* Hero
* Sections
* Cards
* CTA
* Footer
* Responsive layout

---

# 12. Design Direction

Website hướng tới:

```text
Corporate
Premium
Minimal
Modern
Confident
Editorial
```

Không sử dụng quá nhiều màu.

Hệ màu cần được quản lý tập trung trong:

```text
src/styles/variables.css
```

Không hard-code màu lặp lại ở nhiều component nếu màu đó là màu hệ thống.

Ví dụ nên:

```css
:root {
  --color-primary: #111111;
  --color-accent: #c62828;
  --color-background: #f7f6f2;
}
```

thay vì:

```css
color: #c62828;
```

lặp lại hàng chục lần.

---

# 13. Responsive

Website phải hỗ trợ:

```text
Desktop
Tablet
Mobile
```

Các breakpoint được quản lý trong CSS.

Không tạo một component riêng chỉ để xử lý mobile nếu CSS responsive đã đủ.

Ưu tiên:

```css
@media (...)
```

và responsive layout bằng:

```css
grid
flex
clamp()
minmax()
```

---

# 14. Component Rules

Component nên có một trách nhiệm rõ ràng.

Ví dụ:

```text
Header.tsx
```

chỉ xử lý Header.

```text
BusinessUnits.tsx
```

chỉ xử lý section Business Units.

Không đưa toàn bộ website vào:

```text
App.tsx
```

`App.tsx` chỉ chịu trách nhiệm routing/page entry ở mức cao.

---

# 15. Common Components

Các component dùng lại đặt tại:

```text
src/components/common/
```

Ví dụ:

```text
Container.tsx
Button.tsx
SectionHeading.tsx
```

Nếu một UI pattern xuất hiện nhiều lần, cân nhắc đưa thành common component.

Không copy/paste cùng một UI quá nhiều nơi.

---

# 16. Section Components

Các section landing page đặt tại:

```text
src/components/sections/
```

Ví dụ:

```text
Hero.tsx
Introduction.tsx
Projects.tsx
News.tsx
CTA.tsx
```

Mỗi section nên có thể chỉnh sửa độc lập.

---

# 17. Không nhúng Backend vào Component

Không viết API call trực tiếp khắp component:

```tsx
fetch("/api/projects")
```

ở nhiều nơi.

Khi Backend được triển khai, nên tạo service/API layer riêng:

```text
src/services/
├── project.service.ts
├── news.service.ts
└── business.service.ts
```

Component chỉ nhận data và render.

---

# 18. Git Rules

Không commit các thư mục/file generated:

```text
node_modules/
dist/
.vite/
coverage/
.env
.env.*
```

Không commit secret:

```text
API_KEY
JWT_SECRET
DATABASE_URL
PASSWORD
TOKEN
```

Không commit file local/private không cần thiết.

---

# 19. Environment Variables

Nếu sau này cần cấu hình API:

```text
.env
.env.development
.env.production
```

Ví dụ:

```env
VITE_API_URL=http://localhost:3000/api
```

Trong code:

```ts
const API_URL = import.meta.env.VITE_API_URL;
```

Không hard-code URL Backend trong nhiều component.

---

# 20. Development Commands

Cài dependencies:

```powershell
npm install
```

Chạy development:

```powershell
npm run dev
```

Chạy để thiết bị khác trong cùng mạng truy cập:

```powershell
npm run dev -- --host 0.0.0.0
```

Build production:

```powershell
npm run build
```

Preview production build:

```powershell
npm run preview
```

---

# 21. Local Development

Sau khi chạy:

```powershell
npm run dev
```

Vite thường hiển thị:

```text
Local:
http://localhost:5173/
```

Nếu dùng:

```powershell
npm run dev -- --host 0.0.0.0
```

có thể truy cập từ thiết bị khác trong cùng mạng bằng IP máy tính:

```text
http://YOUR_LOCAL_IP:5173
```

Ví dụ:

```text
http://192.168.1.xxx:5173
```

---

# 22. Build Requirement

Trước khi commit hoặc deploy cần kiểm tra:

```powershell
npm run build
```

Build phải hoàn thành không có TypeScript/Vite error.

Không bỏ qua lỗi TypeScript chỉ để chạy được development server.

---

# 23. Backend Integration Rule

Khi Backend được triển khai, ưu tiên giữ nguyên data contract hiện tại.

Ví dụ:

```text
GET /api/projects
```

trả:

```json
[
  {
    "id": "project-01",
    "title": "Project name",
    "category": "Category",
    "year": "2026",
    "description": "Description",
    "image": "/images/projects/project-01.jpg"
  }
]
```

Frontend map trực tiếp vào:

```ts
Project[]
```

Tương tự:

```text
GET /api/business-units
GET /api/projects
GET /api/leadership
GET /api/partners
GET /api/news
```

Có thể mở rộng sau này.

---

# 24. Không phụ thuộc Backend để render Layout

Backend chỉ cung cấp:

```text
Content
Data
Images
Metadata
```

Frontend chịu trách nhiệm:

```text
Layout
Animation
Responsive
Interaction
Visual presentation
```

Nếu API chưa có dữ liệu, component cần có empty state phù hợp.

---

# 25. Content Rules

Nội dung website cần giữ tone:

```text
Corporate
Professional
Clear
Confident
Concise
```

Tránh:

* Text quá dài
* Marketing sáo rỗng
* Quá nhiều emoji
* Quá nhiều gradient
* Quá nhiều animation
* Hiệu ứng làm mất tính corporate

---

# 26. Animation Rules

Animation chỉ dùng để hỗ trợ trải nghiệm.

Ưu tiên:

```text
fade
translate
scale nhẹ
hover
reveal
```

Không lạm dụng:

```text
parallax quá mạnh
3D liên tục
particle background
animation chạy liên tục
```

Landing page cần ưu tiên:

```text
Performance
Readability
Visual hierarchy
Responsive
```

---

# 27. Adding New Projects

Khi Backend chưa có:

```text
src/data/projects.ts
```

thêm object mới:

```ts
{
  id: "project-02",
  title: "Project mới",
  category: "Category",
  year: "2026",
  description: "Mô tả",
  image: "/images/projects/project-02.jpg",
}
```

Không cần sửa:

```text
Projects.tsx
```

trừ khi thay đổi UI/logic.

Khi Backend có:

```text
Projects.tsx
```

tiếp tục sử dụng cùng data structure.

---

# 28. Adding New Business Units

Tương tự:

```text
src/data/businessUnits.ts
```

thêm dữ liệu:

```ts
{
  id: "business-01",
  name: "Tên lĩnh vực",
  description: "Mô tả",
  image: "/images/business/business-01.jpg",
}
```

Không hard-code card trực tiếp trong:

```text
BusinessUnits.tsx
```

---

# 29. Adding New News

News sử dụng:

```ts
interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}
```

Dữ liệu có thể chuyển trực tiếp sang API sau này.

---

# 30. Future Architecture

Kiến trúc dự kiến khi hệ thống hoàn thiện:

```text
                    ┌─────────────────┐
                    │   Matrix FE     │
                    │ React + Vite    │
                    └────────┬────────┘
                             │
                             │ REST API
                             ▼
                    ┌─────────────────┐
                    │   Matrix BE     │
                    │    REST API     │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
           Projects        News        Business Units
```

Frontend không phụ thuộc trực tiếp vào database.

Backend chịu trách nhiệm:

```text
Database
Business logic
Authentication
API
File management
CMS/Admin
```

Frontend chịu trách nhiệm:

```text
Presentation
Interaction
Responsive
Animation
SEO
```

---

# 31. Development Principle

Mỗi thay đổi mới nên ưu tiên:

```text
1. Reusable
2. Maintainable
3. Responsive
4. API-ready
5. Type-safe
6. Easy to extend
```

Không giải quyết một feature bằng cách hard-code nếu feature đó có khả năng được quản lý từ Backend sau này.

---

# 32. Current Status

```text
Frontend           : In development
Backend            : Not implemented
Database           : Not implemented
Authentication     : Not implemented
CMS                : Not implemented
API                : Not implemented
Images             : Waiting for real assets
Icons              : Favicon available; UI icons use Lucide React
Responsive         : Implemented
Data structure     : Prepared for API integration
```

---

## License

Internal / Private project.

© 2026 Matrix Holding. All rights reserved.
