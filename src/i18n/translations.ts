export type Language = "vi" | "en";

const englishTranslations: Record<string, string> = {
  "Giới thiệu": "About",
  "Dự án": "Projects",
  "Năng lực": "Capabilities",
  "Tin tức": "News",
  "Liên hệ": "Contact",
  "Mở menu": "Open menu",
  "Đóng menu": "Close menu",
  "TẬP ĐOÀN KINH DOANH ĐA NGÀNH": "DIVERSIFIED BUSINESS GROUP",
  "Kiến tạo": "Building",
  "giá trị": "lasting",
  "bền vững.": "value.",
  "Matrix Holding phát triển hệ sinh thái kinh doanh đa ngành, kết nối con người, nguồn lực và công nghệ để tạo ra những giá trị dài hạn.":
    "Matrix Holding develops a diversified business ecosystem, connecting people, resources, and technology to create long-term value.",
  "Khám phá": "Discover",
  "KẾT NỐI NGUỒN LỰC": "CONNECTING RESOURCES",
  "Về Matrix Holding": "About Matrix Holding",
  "Một hệ sinh thái.": "One ecosystem.",
  "Một hệ sinh thái": "One ecosystem",
  "Nhiều lĩnh vực.": "Many industries.",
  "Một tầm nhìn.": "One vision.",
  "Matrix Holding được định hướng là một tập đoàn kinh doanh đa ngành, nơi các lĩnh vực cùng phát triển trong một hệ sinh thái có tính kết nối và cộng hưởng.":
    "Matrix Holding is envisioned as a diversified business group where multiple industries grow together in a connected, synergistic ecosystem.",
  "Chúng tôi tập trung xây dựng nền tảng vận hành linh hoạt, phát triển những lĩnh vực có tiềm năng dài hạn và kết nối nguồn lực để tạo ra giá trị bền vững.":
    "We focus on building a flexible operating platform, developing industries with long-term potential, and connecting resources to create sustainable value.",
  "Khám phá hệ sinh thái": "Explore our ecosystem",
  "Hệ sinh thái": "Ecosystem",
  "Tiềm năng phát triển": "Growth potential",
  "Định hướng phát triển": "Growth outlook",
  "Quy mô tập đoàn": "Group at a glance",
  "DẤU ẤN": "OUR FOOTPRINT",
  "đang vươn rộng.": "on the rise.",
  "đang được mở rộng.": "in the making.",
  "Một hệ sinh thái đang vươn rộng.": "An ecosystem on the rise.",
  "Matrix Holding hướng tới xây dựng một hệ sinh thái kinh doanh có khả năng mở rộng về quy mô, lĩnh vực và thị trường, kết nối các nguồn lực để tạo ra giá trị dài hạn.":
    "Matrix Holding aims to build a business ecosystem that can expand across scale, industries, and markets, connecting resources to create long-term value.",
  "Quốc gia": "Countries",
  "Phạm vi hoạt động": "Operating footprint",
  "Nhân sự": "People",
  "Đội ngũ trên toàn hệ sinh thái": "Across the ecosystem",
  "Công ty thành viên": "Group companies",
  "Các đơn vị trong hệ sinh thái": "Across the ecosystem",
  "Lĩnh vực": "Businesses",
  "Các ngành kinh doanh trọng tâm": "Core business sectors",
  "Đang cập nhật": "Coming soon",
  "THỊ TRƯỜNG": "MARKETS",
  "Đang mở rộng": "Expanding",
  "HỆ SINH THÁI": "ECOSYSTEM",
  "Đa ngành": "Diversified",
  "ĐỊNH HƯỚNG": "OUTLOOK",
  "Dài hạn": "Long-term",
  "Triết lý phát triển": "Our approach",
  "Liên kết": "Connected",
  "Cộng hưởng.": "Together.",
  "Một tập đoàn không chỉ được tạo nên bởi những doanh nghiệp riêng lẻ, mà bởi khả năng kết nối các nguồn lực thành một hệ sinh thái có sức mạnh lớn hơn tổng của từng thành phần.":
    "A group is more than a collection of separate businesses. Its strength comes from connecting resources into an ecosystem greater than the sum of its parts.",
  "Phát triển nhiều lĩnh vực kinh doanh có tiềm năng, tạo nền tảng tăng trưởng đa chiều.":
    "Developing promising business sectors to create a foundation for multidimensional growth.",
  "Kết nối nguồn lực giữa các đơn vị để hình thành lợi thế và giá trị cộng hưởng.":
    "Connecting resources across businesses to build shared advantages and create synergistic value.",
  "Ứng dụng công nghệ, tư duy mới và mô hình vận hành linh hoạt trong từng lĩnh vực.":
    "Applying technology, fresh thinking, and flexible operating models across every business.",
  "Đổi mới": "Innovative",
  "Bền vững": "Sustainable",
  "Theo đuổi tăng trưởng dài hạn, cân bằng giữa hiệu quả kinh doanh và giá trị xã hội.":
    "Pursuing long-term growth that balances business performance with social value.",
  "Lĩnh vực kinh doanh": "Our businesses",
  "Xem thêm lĩnh vực": "Show all businesses",
  "Thu gọn lĩnh vực": "Show fewer businesses",
  "Một hệ sinh thái đang được mở rộng.": "An ecosystem in the making.",
  "Matrix Holding hướng tới phát triển những lĩnh vực có khả năng bổ trợ, kết nối và tạo ra giá trị lâu dài.":
    "Matrix Holding seeks to develop businesses that complement one another, build connections, and create lasting value.",
  "Bất động sản (minh họa)": "Real estate (sample)",
  "Bất động sản": "Real estate",
  "Lĩnh vực mẫu": "Sample sector",
  "Lĩnh vực minh họa về phát triển không gian sống, thương mại và đô thị theo định hướng dài hạn.":
    "An illustrative sector focused on developing living, commercial, and urban spaces with a long-term outlook.",
  "Đầu tư & phát triển (minh họa)": "Investment & development (sample)",
  "Đầu tư & phát triển": "Investment & development",
  "Ví dụ về hoạt động tìm kiếm cơ hội, kết nối nguồn lực và đồng hành cùng các mô hình kinh doanh tiềm năng.":
    "An example of identifying opportunities, connecting resources, and supporting promising business models.",
  "Dịch vụ doanh nghiệp (minh họa)": "Business services (sample)",
  "Dịch vụ doanh nghiệp": "Business services",
  "Lĩnh vực mẫu tập trung vào giải pháp vận hành và dịch vụ hỗ trợ cho doanh nghiệp trong hệ sinh thái.":
    "A sample sector focused on operating solutions and support services for businesses in the ecosystem.",
  "Công nghệ": "Technology",
  "Tài chính": "Finance",
  "Tiêu dùng & bán lẻ": "Consumer & retail",
  "Du lịch & lưu trú": "Travel & hospitality",
  "Logistics": "Logistics",
  "Giáo dục": "Education",
  "Y tế & sức khỏe": "Healthcare",
  "Các lĩnh vực kinh doanh đang được cập nhật": "Business sectors are coming soon",
  "Hệ sinh thái Matrix Holding sẽ được giới thiệu chi tiết trong thời gian tới.":
    "More details about the Matrix Holding ecosystem will be shared soon.",
  "Công nghệ & chuyển đổi số (minh họa)": "Technology & digital transformation (sample)",
  "Ứng dụng công nghệ, dữ liệu và các nền tảng số để nâng cao hiệu quả vận hành và tạo ra giá trị mới.":
    "Applying technology, data, and digital platforms to improve operating efficiency and create new value.",
  "Tài chính & đầu tư (minh họa)": "Finance & investment (sample)",
  "Lĩnh vực mẫu tập trung vào các hoạt động đầu tư, quản lý nguồn vốn và phát triển các giải pháp tài chính.":
    "A sample sector focused on investment, capital management, and the development of financial solutions.",
  "Dự án & hoạt động": "Projects & initiatives",
  "Những gì": "What",
  "chúng tôi tạo ra.": "we create.",
  "Những dự án, hoạt động và dấu ấn trong quá trình xây dựng hệ sinh thái Matrix Holding.":
    "Projects, initiatives, and milestones in the development of the Matrix Holding ecosystem.",
  "Dự án minh họa": "Sample project",
  "Tổ hợp đô thị mẫu 01": "Sample urban development 01",
  "Ý tưởng dự án minh họa cho nội dung giới thiệu năng lực phát triển không gian đô thị.":
    "An illustrative project concept showcasing urban development capabilities.",
  "Không gian thương mại mẫu 02": "Sample commercial space 02",
  "Ý tưởng dự án mẫu về không gian thương mại kết nối dịch vụ và cộng đồng.":
    "A sample concept for a commercial space connecting services and community.",
  "Nền tảng dịch vụ mẫu 03": "Sample service platform 03",
  "Ý tưởng minh họa cho giải pháp dịch vụ hỗ trợ hoạt động kinh doanh.":
    "An illustrative concept for services that support business operations.",
  "Hoạt động minh họa": "Sample initiative",
  "Dự án tiêu biểu": "Featured projects",
  "Nội dung dự án sẽ được cập nhật khi hệ sinh thái Matrix Holding được hoàn thiện.":
    "Project details will be added as the Matrix Holding ecosystem takes shape.",
  "Nền tảng cho tăng trưởng dài hạn.": "Foundations for long-term growth.",
  "Nền tảng cho": "Foundations for",
  "tăng trưởng dài hạn.": "long-term growth.",
  "Chúng tôi xây dựng năng lực cốt lõi xoay quanh con người, vận hành, công nghệ và khả năng kết nối nguồn lực.":
    "We build core capabilities around people, operations, technology, and the ability to connect resources.",
  "Chiến lược & đầu tư": "Strategy & investment",
  "Xác định hướng đi dài hạn, lựa chọn cơ hội và phân bổ nguồn lực vào những lĩnh vực có tiềm năng phát triển.":
    "Setting a long-term direction, identifying opportunities, and allocating resources to sectors with growth potential.",
  "Vận hành & quản trị": "Operations & governance",
  "Xây dựng hệ thống quản trị linh hoạt, tối ưu nguồn lực và nâng cao hiệu quả vận hành trên toàn hệ sinh thái.":
    "Building agile governance, optimizing resources, and improving operational efficiency across the ecosystem.",
  "Công nghệ & đổi mới": "Technology & innovation",
  "Ứng dụng công nghệ và tư duy đổi mới để nâng cao năng lực cạnh tranh, tối ưu quy trình và tạo ra giá trị mới.":
    "Applying technology and innovative thinking to strengthen competitiveness, optimize processes, and create new value.",
  "Kết nối hệ sinh thái": "Ecosystem connections",
  "Kết nối doanh nghiệp, đối tác, nhân sự và nguồn lực để tạo ra những giá trị cộng hưởng trong hệ sinh thái.":
    "Connecting businesses, partners, people, and resources to create synergies across the ecosystem.",
  "Tầm nhìn & sứ mệnh": "Vision & mission",
  "Phát triển hôm nay.": "Growing today.",
  "Kiến tạo giá trị dài hạn.": "Creating lasting value.",
  "Tầm nhìn, sứ mệnh và giá trị cốt lõi định hướng cách Matrix Holding kết nối các lĩnh vực, phát triển đội ngũ và tạo dựng hệ sinh thái bền vững.":
    "Our vision, mission, and core values guide how Matrix Holding connects industries, develops its people, and builds a sustainable ecosystem.",
  "Tầm nhìn": "Vision",
  "Xây dựng Matrix Holding thành hệ sinh thái kinh doanh đa ngành có khả năng phát triển bền vững và tạo giá trị dài hạn.":
    "To build Matrix Holding into a diversified business ecosystem that grows sustainably and creates long-term value.",
  "Sứ mệnh": "Mission",
  "Kết nối con người, nguồn lực và công nghệ để mở rộng cơ hội phát triển cho các lĩnh vực kinh doanh.":
    "To connect people, resources, and technology to expand opportunities across our businesses.",
  "Giá trị cốt lõi": "Core values",
  "Đề cao tinh thần hợp tác, tư duy đổi mới và cam kết đồng hành trong từng chặng đường phát triển.":
    "To champion collaboration, innovative thinking, and a commitment to growing together at every step.",
  "Đội ngũ lãnh đạo": "Leadership",
  "Con người tạo nên": "People are",
  "sức mạnh tập đoàn.": "the group's strength.",
  "Một tổ chức phát triển bền vững bắt đầu từ những con người cùng chia sẻ tầm nhìn, giá trị và tinh thần kiến tạo.":
    "A sustainable organization starts with people who share a vision, values, and a drive to build.",
  "Nhân vật minh họa 01": "Sample profile 01",
  "Đại diện Ban điều hành mẫu": "Sample executive representative",
  "Nhân vật minh họa 02": "Sample profile 02",
  "Đại diện khối chiến lược mẫu": "Sample strategy representative",
  "Nhân vật minh họa 03": "Sample profile 03",
  "Đại diện khối vận hành mẫu": "Sample operations representative",
  "Hồ sơ nhân sự minh họa, không đại diện cho nhân sự thực tế.":
    "Illustrative profile; does not represent an actual team member.",
  "Thông tin đội ngũ lãnh đạo sẽ được cập nhật.": "Leadership information is coming soon.",
  "Đối tác": "Partners",
  "Đồng hành cùng phát triển.": "Growing together.",
  "Đồng hành": "Growing",
  "cùng phát triển.": "together.",
  "Matrix Holding trân trọng những mối quan hệ hợp tác cùng chia sẻ tầm nhìn và hướng tới các giá trị phát triển dài hạn.":
    "Matrix Holding values partnerships built on a shared vision and a commitment to long-term growth.",
  "Đối tác minh họa 01": "Sample partner 01",
  "Đối tác minh họa 02": "Sample partner 02",
  "Đối tác minh họa 03": "Sample partner 03",
  "Đối tác minh họa 04": "Sample partner 04",
  "Thông tin đối tác sẽ được cập nhật trong thời gian tới.":
    "Partner information will be available soon.",
  "Phản hồi": "Testimonials",
  "Góc nhìn": "Perspectives",
  "từ đối tác & khách hàng.": "from partners & clients.",
  "Lắng nghe những chia sẻ về trải nghiệm hợp tác và định hướng phát triển cùng Matrix Holding.":
    "Hear perspectives on working together and growing alongside Matrix Holding.",
  "Các phản hồi dưới đây là nội dung minh họa, chưa đại diện cho khách hàng hoặc đối tác thực tế.":
    "All names, companies, and testimonials below are fictional examples and do not represent actual customers or partners.",
  "Điều tôi đánh giá cao là Matrix Holding dành thời gian tìm hiểu mục tiêu của đối tác trước khi đề xuất hướng hợp tác. Nhờ vậy, hai bên có thể bắt đầu từ những ưu tiên phù hợp.":
    "What I value is that Matrix Holding takes time to understand a partner's goals before suggesting ways to work together. This helps both sides start with the priorities that matter.",
  "Nguyễn Minh Khang": "Nguyen Minh Khang",
  "Giám đốc Phát triển": "Development Director",
  "An Phúc Development (hư cấu)": "An Phuc Development (fictional)",
  "Các buổi trao đổi tập trung vào nhu cầu thực tế và kỳ vọng của mỗi bên. Cách làm cởi mở này giúp chúng tôi hiểu rõ hơn những bước cần cân nhắc tiếp theo.":
    "Our discussions focused on each side's practical needs and expectations. This open approach helped us better understand the next steps to consider.",
  "Trần Thu Hà": "Tran Thu Ha",
  "Nhà sáng lập": "Founder",
  "Mộc An Consumer (hư cấu)": "Moc An Consumer (fictional)",
  "Khách hàng": "Client",
  "Chúng tôi trân trọng cách Matrix Holding nhìn nhận cơ hội trong bức tranh dài hạn, đồng thời cởi mở trao đổi để tìm ra điểm giao thoa giữa các bên.":
    "We value how Matrix Holding considers opportunities in a long-term context while keeping discussions open to find common ground.",
  "Lê Quốc Bảo": "Le Quoc Bao",
  "Giám đốc Chiến lược": "Strategy Director",
  "Việt Hải Logistics (hư cấu)": "Viet Hai Logistics (fictional)",
  "Đối tác chiến lược": "Strategic partner",
  "Tin tức & hoạt động": "News & insights",
  "Câu chuyện": "Stories",
  "Matrix Holding.": "Matrix Holding.",
  "Cập nhật những thông tin, hoạt động và dấu mốc mới nhất.":
    "The latest updates, initiatives, and milestones.",
  "Tin mẫu: Định hướng phát triển hệ sinh thái": "Sample story: Growing the ecosystem",
  "Bài viết minh họa cách giới thiệu định hướng phát triển và các lĩnh vực hoạt động của Matrix Holding.":
    "An illustrative article introducing Matrix Holding's growth outlook and business sectors.",
  "Tin mẫu: Kết nối nguồn lực và cơ hội hợp tác": "Sample story: Connecting resources and opportunities",
  "Nội dung mẫu về việc kết nối đối tác, chuyên gia và nguồn lực trong hệ sinh thái kinh doanh.":
    "A sample story about connecting partners, experts, and resources across the business ecosystem.",
  "Tin mẫu: Tư duy phát triển bền vững": "Sample story: A sustainable growth mindset",
  "Bài viết mẫu về đổi mới, quản trị có trách nhiệm và mục tiêu tạo dựng giá trị dài hạn.":
    "A sample article about innovation, responsible governance, and creating long-term value.",
  "Tin mẫu": "Sample news",
  "Những câu chuyện mới nhất về Matrix Holding sẽ được cập nhật.":
    "The latest Matrix Holding stories are coming soon.",
  "Cơ hội nghề nghiệp": "Career opportunities",
  "Tuyển dụng": "Careers",
  "Cùng phát triển": "Grow with",
  "với Matrix Holding.": "Matrix Holding.",
  "Khám phá các vị trí định hướng theo từng lĩnh vực trong hệ sinh thái Matrix Holding.":
    "Explore sample roles across the sectors in the Matrix Holding ecosystem.",
  "vị trí tuyển dụng chính thức": "official job openings",
  "Hiện chưa có tin tuyển dụng chính thức đang mở. Thông tin vị trí và yêu cầu dưới đây cần được xác nhận trước khi công bố tuyển dụng.":
    "There are no official job openings at this time. Role and requirement details below must be confirmed before any position is announced.",
  "Lọc theo lĩnh vực": "Filter by sector",
  "Tất cả lĩnh vực": "All sectors",
  "Xem chi tiết": "View details",
  "Mô tả công việc": "Responsibilities",
  "Yêu cầu ứng viên": "Requirements",
  "Đóng chi tiết tuyển dụng": "Close job details",
  "Quay lại chi tiết": "Back to job details",
  "Ứng tuyển vị trí": "Apply for",
  "Số điện thoại": "Phone number",
  "Tải CV (PDF)": "Upload CV (PDF)",
  "Chỉ chấp nhận tệp PDF.": "PDF files only.",
  "Lời nhắn": "Message",
  "Gửi hồ sơ ứng tuyển": "Submit application",
  "Ứng tuyển": "Apply",
  "Form hiện chưa kết nối dịch vụ gửi hồ sơ. Bạn có thể xem và điền thử thông tin; hồ sơ sẽ chưa được gửi đi.":
    "This form is not connected to an application service yet. You can review and fill it in, but your application will not be sent.",
  "Biểu mẫu chưa được kết nối với hệ thống nhận hồ sơ nên thông tin chưa được gửi. Vui lòng quay lại sau khi hệ thống tuyển dụng được kích hoạt.":
    "This form is not connected to an application system, so your information has not been sent. Please return when the careers system is enabled.",
  "Quan tâm đến cơ hội nghề nghiệp?": "Interested in career opportunities?",
  "Kết nối với Matrix Holding": "Get in touch with Matrix Holding",
  "Chuyên viên Phát triển dự án": "Project Development Specialist",
  "Hỗ trợ nghiên cứu thị trường, đánh giá cơ hội và phối hợp các bước chuẩn bị dự án bất động sản.":
    "Support market research, opportunity assessment, and coordination of real estate project preparation.",
  "Chuyên viên Phân tích đầu tư": "Investment Analyst",
  "Tổng hợp dữ liệu ngành, phân tích cơ hội và hỗ trợ xây dựng đề xuất đầu tư cho các mô hình tiềm năng.":
    "Compile sector data, analyze opportunities, and support investment proposals for promising business models.",
  "Chuyên viên Sản phẩm số": "Digital Product Specialist",
  "Kết nối nhu cầu người dùng với đội ngũ kỹ thuật để cải thiện nền tảng số và quy trình vận hành.":
    "Connect user needs with technical teams to improve digital platforms and operating processes.",
  "Chuyên viên Phân tích tài chính": "Financial Analyst",
  "Hỗ trợ phân tích số liệu, lập báo cáo và đánh giá hiệu quả tài chính trong hoạt động đầu tư.":
    "Support data analysis, reporting, and financial performance reviews for investment activities.",
  "Chuyên viên Phát triển kinh doanh ngành hàng": "Category Business Development Specialist",
  "Nghiên cứu xu hướng tiêu dùng và hỗ trợ phát triển sản phẩm, thương hiệu cùng các kênh phân phối.":
    "Research consumer trends and support product, brand, and distribution channel development.",
  "Chuyên viên Vận hành dịch vụ lưu trú": "Hospitality Operations Specialist",
  "Phối hợp hoạt động dịch vụ, theo dõi chất lượng vận hành và góp phần hoàn thiện trải nghiệm khách hàng.":
    "Coordinate service operations, monitor quality, and help improve the customer experience.",
  "Chuyên viên Điều phối chuỗi cung ứng": "Supply Chain Coordinator",
  "Hỗ trợ điều phối vận chuyển, kho vận và phối hợp với các đối tác trong chuỗi cung ứng.":
    "Support transportation and warehousing coordination and work with supply chain partners.",
  "Chuyên viên Phát triển chương trình đào tạo": "Learning Program Development Specialist",
  "Tìm hiểu nhu cầu học tập và hỗ trợ xây dựng nội dung, chương trình đào tạo phù hợp với người học.":
    "Research learning needs and support the development of relevant learning content and training programs.",
  "Chuyên viên Phát triển dịch vụ sức khỏe": "Healthcare Services Development Specialist",
  "Nghiên cứu nhu cầu khách hàng và hỗ trợ phát triển mô hình dịch vụ chăm sóc sức khỏe.":
    "Research customer needs and support the development of healthcare service models.",
  "Chuyên viên Giải pháp doanh nghiệp": "Business Solutions Specialist",
  "Tìm hiểu bài toán vận hành của doanh nghiệp và phối hợp đề xuất giải pháp dịch vụ phù hợp.":
    "Understand business operating challenges and help propose suitable service solutions.",
  "Cùng kiến tạo giá trị mới.": "Let's build new value together.",
  "Cùng kiến tạo": "Let's build",
  "giá trị mới.": "new value.",
  "Liên hệ với chúng tôi": "Get in touch",
  "Đóng form liên hệ": "Close contact form",
  "Họ và tên": "Full name",
  "Email": "Email",
  "Nội dung": "Message",
  "Mở email để gửi": "Continue in email",
  "Hãy kết nối": "Let's connect",
  "Tập đoàn kinh doanh đa ngành, kết nối nguồn lực để xây dựng hệ sinh thái phát triển bền vững.":
    "A diversified business group connecting resources to build a sustainable ecosystem.",
  "Điều hướng": "Navigation",
  "Kết nối với chúng tôi": "Connect with us",
  "Trao đổi cơ hội hợp tác": "Discuss a partnership",
  "KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội":
    "Bac Linh Dam Urban Area, Hoang Liet Ward, Hanoi",
  "Tập đoàn kinh doanh đa ngành": "Diversified business group",
  "Liên hệ hợp tác": "Contact & Partnerships",
  "Hệ sinh thái đa ngành": "Diversified Ecosystem",
  "Định hướng bền vững": "Sustainable Vision",
  "Mở qua Gmail": "Open in Gmail",
  "Sao chép Email": "Copy Email",
  "Đã sao chép email!": "Email copied!",
  "Trụ sở chính": "Headquarters",
  "Kiến tạo tương lai": "Shaping the future",
};

export function translate(text: string, language: Language): string {
  if (language === "vi") return text;
  return englishTranslations[text] ?? text;
}
