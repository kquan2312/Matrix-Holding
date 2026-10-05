export type Language = "vi" | "en";

const englishTranslations: Record<string, string> = {
  "Giới thiệu": "About",
  "Trang chủ": "Home",
  "Dự án": "Projects",
  "Năng lực": "Capabilities",
  "Tin tức": "News",
  "Liên hệ": "Contact",
  "Lên đầu trang": "Back to top",
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
  "Chúng tôi là ai?": "Who are we?",
  "Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam. Hướng đến mục tiêu đưa các doanh nghiệp tiềm năng trở thành kỳ lân trong lĩnh vực, chúng tôi cam kết sẽ không ngừng nỗ lực, phát huy sự sáng tạo nhằm đưa ra giải pháp phù hợp với nhu cầu của từng doanh nghiệp.":
    "Matrix Holding is a Vietnam-based investment group developing a diversified business ecosystem and connecting companies and resources for long-term growth.",
  "Chúng tôi làm gì?": "What do we do?",
  "Chúng tôi tập trung xây dựng một môi trường kinh doanh hiệu quả, nơi các doanh nghiệp có thể tiếp cận với nhiều nguồn lực và mở ra cơ hội tiếp cận thị trường bền vững.":
  "We focus on building an effective business environment where companies can access resources and open up opportunities for sustainable market access.",
  "Khởi nghiệp không chỉ cần một ý tưởng tốt, mà còn cần một người dẫn đường có tâm, một môi trường đủ điều kiện để phát triển và những cơ hội đủ lớn để trưởng thành.":
  "Starting a business does not require only a good idea; it also needs a guiding leader with heart, an environment with the right conditions to grow, and opportunities large enough to thrive.",
  "CÂU HỎI THƯỜNG GẶP": "FREQUENTLY ASKED QUESTIONS",
  "Giải đáp về Matrix Holding": "Answers about Matrix Holding",
  "Không gian và định hướng phát triển của Matrix Holding":
    "Matrix Holding's space and development vision",
  "Matrix Holding là doanh nghiệp gì?":
    "What kind of company is Matrix Holding?",
  "Matrix Holding hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam, kết nối doanh nghiệp với nguồn lực và cơ hội phát triển.":
    "Matrix Holding operates in investment and the development of a diversified business ecosystem in Vietnam, connecting companies with resources and growth opportunities.",
  "Matrix Holding hoạt động trong những lĩnh vực nào?":
    "Which sectors does Matrix Holding operate in?",
  "Hệ sinh thái định hướng phát triển nhiều lĩnh vực như bất động sản, đầu tư, công nghệ, tài chính, tiêu dùng, du lịch, logistics, giáo dục, y tế và dịch vụ doanh nghiệp.":
    "The ecosystem aims to develop across sectors including real estate, investment, technology, finance, consumer, travel, logistics, education, healthcare, and business services.",
  "Matrix Holding cung cấp sản phẩm, dịch vụ gì?":
    "What products and services does Matrix Holding offer?",
  "Matrix Holding phát triển hệ sinh thái các đơn vị và cộng đồng hỗ trợ doanh nghiệp, bao gồm kết nối dịch vụ, kết nối kinh doanh và kết nối đầu tư.":
    "Matrix Holding develops an ecosystem of companies and communities that support businesses through service, business, and investment connections.",
  "Matrix Holding được thành lập khi nào?":
    "When was Matrix Holding established?",
  "Theo hành trình phát triển được giới thiệu, Matrix Holding bắt đầu hoạt động kinh doanh từ năm 2020 và chuẩn hóa nền tảng pháp lý vào năm 2023.":
    "According to the published company timeline, Matrix Holding began business operations in 2020 and established its legal foundation in 2023.",
  "Chủ tịch của Matrix Holding là ai?":
    "Who is the chairman of Matrix Holding?",
  "Thông tin về Chủ tịch chưa được công bố trong nội dung chính thức hiện có. Matrix Holding sẽ cập nhật khi có thông tin xác nhận.":
    "The chairman's details have not been published in the currently available official information. Matrix Holding will update this when confirmed.",
  "Khám phá hệ sinh thái": "Explore our ecosystem",
  "Hệ sinh thái": "Ecosystem",
  "Tiềm năng phát triển": "Growth potential",
  "Định hướng phát triển": "Growth outlook",
  "Quy mô tập đoàn": "Group at a glance",
  "LỊCH SỬ HÌNH THÀNH": "OUR HISTORY",
  "Hành trình của Matrix Holding": "The Matrix Holding journey",
  "Chọn từng cột mốc để xem những dấu ấn quan trọng trên hành trình phát triển.":
    "Select a milestone to explore key moments in our development.",
  "Các cột mốc lịch sử": "Historical milestones",
  "Khởi nguồn sáng tạo": "The beginning of a creative journey",
  "Những ý tưởng đầu tiên đặt nền móng cho hành trình phát triển của Matrix Holding.":
    "The first ideas laid the foundation for Matrix Holding's journey.",
  "Bước vào hoạt động kinh doanh": "Beginning business operations",
  "Matrix Holding bắt đầu các hoạt động kinh doanh, trở thành đơn vị cung cấp dịch vụ truyền thông mạng xã hội.":
    "Matrix Holding began business operations as a social media communications service provider.",
  "Chuẩn hóa nền tảng pháp lý": "Establishing a legal foundation",
  "Hoàn thiện nền tảng pháp lý, tạo cơ sở cho hoạt động và định hướng phát triển dài hạn.":
    "Establishing a legal foundation for operations and long-term development.",
  "Tái cấu trúc nguồn lực": "Restructuring resources",
  "Tái cấu trúc nguồn lực để tăng cường sự kết nối và năng lực phối hợp trong hệ sinh thái.":
    "Restructuring resources to strengthen connections and coordination across the ecosystem.",
  "Mở rộng hệ sinh thái": "Expanding the ecosystem",
  "Tiếp tục mở rộng hệ sinh thái, kết nối thêm lĩnh vực, nguồn lực và cơ hội hợp tác.":
    "Continuing to expand the ecosystem by connecting more sectors, resources, and opportunities.",
  "CỘT MỐC": "MILESTONE",
  "Đội ngũ Matrix Holding cùng xây dựng định hướng phát triển":
    "The Matrix Holding team shaping its growth strategy",
  "Quy trình làm việc": "How we work",
  "Đồng hành theo một quy trình rõ ràng": "A clear process, every step of the way",
  "Tiếp nhận nhu cầu": "Understanding your needs",
  "Tiếp nhận thông tin dựa trên nhu cầu và nguồn lực thực tế của đối tác, khách hàng.":
    "We gather information based on the actual needs and resources of our partners and clients.",
  "Chuyển giao dự án": "Project handover",
  "Phân tích nhu cầu và nguồn lực, sau đó chuyển giao thông tin đến doanh nghiệp phụ trách trực tiếp.":
    "We assess needs and resources, then hand the information over to the business responsible for delivery.",
  "Đánh giá kết quả": "Evaluating results",
  "Theo dõi, đánh giá hiệu quả sau quá trình thực thi và kết nối thêm nguồn lực cần thiết.":
    "We monitor and assess outcomes after delivery and connect any additional resources needed.",
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
  "Mô hình liên kết": "Connected ecosystem",
  "Matrix Network": "Matrix Network",
  "Matrix Connect": "Matrix Connect",
  "Matrix Ventures": "Matrix Ventures",
  "Matrix Academy": "Matrix Academy",
  "Định hướng · Điều phối": "Direction · Coordination",
  "Kết nối nguồn lực": "Connecting resources",
  "Chọn một thương hiệu để tìm hiểu vai trò": "Select a brand to explore its role",
  "Một hệ sinh thái, kết nối đa chiều.": "One ecosystem, connected in every direction.",
  "Matrix Holding giữ vai trò trung tâm, định hướng và điều phối. Các thương hiệu thành viên đồng thời kết nối với nhau, chia sẻ nguồn lực và mở rộng cơ hội hợp tác.":
    "Matrix Holding provides central direction and coordination. Its member brands connect with one another, share resources, and create more opportunities to collaborate.",
  "Đường nối tâm: liên kết với Holding": "Radial lines: connection to the Holding",
  "Vòng tròn: liên kết giữa các thành viên": "Orbit: connections between members",
  "GIẢI PHÁP DOANH NGHIỆP": "BUSINESS SERVICES",
  "CỘNG ĐỒNG KẾT NỐI": "CONNECTED COMMUNITIES",
  "KẾT NỐI ĐẦU TƯ": "INVESTMENT NETWORK",
  "Đơn vị cung cấp dịch vụ": "Business service providers",
  "Cộng đồng kết nối": "Connected communities",
  "Kết nối đầu tư": "Investment connections",
  "Thành viên của Matrix Holding": "A member of Matrix Holding",
  "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh cho doanh nghiệp.":
    "Builds, manages, and coordinates business networking communities for companies.",
  "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư cho doanh nghiệp.":
    "Builds, manages, and coordinates investment networking communities for companies.",
  "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp.":
    "Builds, manages, and coordinates service providers for companies.",
  "Liên kết": "Connected",
  "Cộng hưởng.": "Together.",
  "Cấu trúc hệ sinh thái": "Ecosystem structure",
  "Tập đoàn trung tâm": "Parent company",
  "Đơn vị thành viên": "Ecosystem company",
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
  "NỀN TẢNG PHÁT TRIỂN": "FOUNDATION FOR GROWTH",
  "Sứ mệnh, tầm nhìn và giá trị cốt lõi.": "Mission, vision, and core values.",
  "Những định hướng nhất quán để Matrix Holding kiến tạo giá trị lâu dài cho doanh nghiệp và cộng đồng.":
    "Consistent principles that guide Matrix Holding in creating lasting value for businesses and communities.",
  "SỨ MỆNH DOANH NGHIỆP": "OUR MISSION",
  "TẦM NHÌN CHIẾN LƯỢC": "OUR STRATEGIC VISION",
  "GIÁ TRỊ CỐT LÕI": "OUR CORE VALUES",
  "Kiến tạo nền tảng để doanh nghiệp tiếp cận, mở ra cơ hội hợp tác và phát triển vượt trội.":
    "Building a foundation for businesses to connect, collaborate, and grow.",
  "Matrix Holding mang trong mình sứ mệnh dẫn dắt, định hướng và đồng hành cùng thế hệ trẻ trên hành trình khởi nghiệp, giúp họ mở ra cơ hội để trở thành những kỳ lân trong tương lai.":
    "Matrix Holding is committed to guiding and supporting young entrepreneurs on their startup journey, helping them pursue the opportunity to become tomorrow's industry leaders.",
  "Trở thành doanh nghiệp kiến tạo hệ sinh thái kinh doanh hàng đầu tại Việt Nam.":
    "To become a leading business ecosystem builder in Vietnam.",
  "Matrix Holding hướng đến việc xây dựng hệ sinh thái kinh doanh đa ngành có khả năng tạo ra giá trị thiết thực, nơi các ý tưởng kinh doanh được ươm mầm, nuôi dưỡng và phát triển.":
    "Matrix Holding aims to build a diversified business ecosystem that creates meaningful value, where business ideas can be nurtured and developed.",
  "Ươm mầm và hiện thực hóa ý tưởng kinh doanh tiềm năng cùng thế hệ doanh nhân trẻ khởi nghiệp.":
    "Nurturing and realizing promising business ideas alongside a new generation of entrepreneurs.",
  "Matrix Holding tạo điều kiện để các ý tưởng kinh doanh được định hình, thử nghiệm và phát triển thành những mô hình thực tế thông qua hệ sinh thái kinh doanh đa ngành.":
    "Matrix Holding helps shape, test, and develop business ideas into practical models through its diversified business ecosystem.",
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
  "Xem tất cả": "View all",
  "Đối tác cùng phát triển.": "Partners growing together.",
  "Xem tất cả đối tác": "View all partners",
  "Danh sách tên đối tác mẫu đang có trong dữ liệu; cần xác nhận quan hệ hợp tác và quyền công bố trước khi phát hành.":
    "These sample partner names are present in the data; partnership status and publication permission must be confirmed before release.",
  "Khám phá Matrix Holding": "Discover Matrix Holding",
  "Tìm hiểu thêm": "Learn more",
  "Xem hồ sơ năng lực": "Explore our capabilities",
  "Một hệ sinh thái kết nối nguồn lực và cơ hội phát triển.":
    "An ecosystem connecting resources and opportunities for growth.",
  "Matrix Holding kết nối các hệ sinh thái chuyên biệt, doanh nghiệp và nguồn lực nhằm mở rộng cơ hội hợp tác, phát triển dài hạn.":
    "Matrix Holding connects specialized ecosystems, businesses, and resources to expand opportunities for collaboration and long-term growth.",
  "Xem cơ hội hợp tác": "Explore partnership opportunities",
  "Hệ sinh thái Matrix Holding": "The Matrix Holding ecosystem",
  "HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN": "COMPREHENSIVE BUSINESS SERVICES",
  "HỆ SINH THÁI KẾT NỐI KINH DOANH": "BUSINESS NETWORKING ECOSYSTEM",
  "HỆ SINH THÁI KẾT NỐI ĐẦU TƯ": "INVESTMENT NETWORKING ECOSYSTEM",
  "HỆ SINH THÁI ĐÀO TẠO TINH HOA": "EXECUTIVE LEARNING ECOSYSTEM",
  "Giải pháp dịch vụ cho doanh nghiệp": "Business service solutions",
  "Kết nối kinh doanh": "Business networking",
  "Đào tạo và phát triển năng lực": "Learning and capability development",
  "Kết nối doanh nghiệp với các dịch vụ và nguồn lực hỗ trợ cần thiết trong quá trình vận hành và phát triển.":
    "Connecting businesses with services and resources that can support their operations and development.",
  "Tạo không gian kết nối để doanh nghiệp gặp gỡ đối tác, chia sẻ kinh nghiệm và tìm kiếm cơ hội hợp tác.":
    "Creating opportunities for businesses to meet partners, share experience, and explore collaboration.",
  "Kết nối doanh nghiệp và nhà đầu tư, hỗ trợ trao đổi về cơ hội phát triển và nguồn lực đầu tư.":
    "Connecting businesses and investors to discuss growth opportunities and investment resources.",
  "Định hướng phát triển năng lực thông qua học tập, chia sẻ kiến thức và chương trình đào tạo dành cho doanh nghiệp.":
    "Developing capabilities through learning, knowledge sharing, and training for businesses.",
  "Kết nối nhu cầu doanh nghiệp với các dịch vụ chuyên môn phù hợp.": "Connecting business needs with relevant professional services.",
  "Hỗ trợ doanh nghiệp tiếp cận nguồn lực phục vụ hoạt động vận hành.": "Helping businesses access resources for their operations.",
  "Phối hợp cùng các đơn vị trong hệ sinh thái để mở rộng giải pháp.": "Working with ecosystem members to broaden available solutions.",
  "Tạo cơ hội gặp gỡ và trao đổi giữa doanh nghiệp.": "Creating opportunities for businesses to meet and exchange ideas.",
  "Khuyến khích chia sẻ kinh nghiệm và góc nhìn thị trường.": "Encouraging the sharing of experience and market perspectives.",
  "Mở rộng kết nối hướng tới những cơ hội hợp tác phù hợp.": "Expanding connections in pursuit of suitable collaboration opportunities.",
  "Tạo cầu nối trao đổi giữa doanh nghiệp và nhà đầu tư.": "Creating a channel for businesses and investors to connect.",
  "Chia sẻ thông tin về cơ hội và nhu cầu phát triển.": "Sharing information about opportunities and development needs.",
  "Kết nối nguồn lực đầu tư phù hợp với định hướng kinh doanh.": "Connecting investment resources with business direction.",
  "Khuyến khích học tập và chia sẻ tri thức trong cộng đồng doanh nghiệp.": "Encouraging learning and knowledge sharing among businesses.",
  "Phát triển năng lực phù hợp với nhu cầu của từng tổ chức.": "Developing capabilities to meet each organization's needs.",
  "Kết nối chuyên gia, người học và doanh nghiệp trong hoạt động đào tạo.": "Connecting experts, learners, and businesses through training.",
  "Bốn hệ sinh thái, cùng kết nối.": "Four ecosystems, connected.",
  "Khám phá các hệ sinh thái chuyên biệt được định hướng để đồng hành cùng doanh nghiệp.":
    "Explore specialized ecosystems designed to support businesses.",
  "Khám phá ngay": "Explore",
  "Tìm hiểu mô hình hệ sinh thái": "Explore the ecosystem model",
  "Mô hình hoạt động hệ sinh thái": "Ecosystem operating model",
  "Matrix Holding kết nối bốn hệ sinh thái chuyên biệt, cùng hướng tới hỗ trợ doanh nghiệp trên hành trình phát triển.":
    "Matrix Holding connects four specialized ecosystems with a shared focus on supporting businesses as they grow.",
  "Matrix Holding giữ vai trò trung tâm, định hướng và điều phối; bốn hệ sinh thái thành viên kết nối, chia sẻ nguồn lực và mở rộng cơ hội hợp tác.":
    "Matrix Holding provides central direction and coordination, while four member ecosystems connect, share resources, and expand opportunities for collaboration.",
  "Không tìm thấy hệ sinh thái": "Ecosystem not found",
  "Quay lại hệ sinh thái": "Back to the ecosystem",
  "Định hướng hoạt động": "Areas of focus",
  "Kết nối đúng nguồn lực, tạo cơ hội phát triển.": "Connecting resources to create opportunities for growth.",
  "Thông tin giới thiệu mang tính khái quát; phạm vi hoạt động và dịch vụ cụ thể sẽ được cập nhật theo thông tin chính thức.":
    "This overview is general; specific activities and services will be updated when official information is available.",
  "Câu chuyện và định hướng Matrix Holding.": "The story and direction of Matrix Holding.",
  "Tìm hiểu về sứ mệnh, tầm nhìn, con người và cách Matrix Holding phát triển hệ sinh thái.":
    "Learn about Matrix Holding's mission, vision, people, and ecosystem development.",
  "Cam kết và định hướng": "Commitments and direction",
  "Điều khoản cam kết": "Commitment terms",
  "Lợi thế cạnh tranh": "Competitive advantages",
  "Tuyên ngôn của Chủ tịch": "Chairperson's statement",
  "Thông tin cam kết và điều khoản chính thức sẽ được cập nhật sau khi được doanh nghiệp xác nhận.":
    "Official commitments and terms will be published after they have been confirmed by the company.",
  "Nội dung về lợi thế cạnh tranh cần được hoàn thiện dựa trên thông tin và số liệu đã được phê duyệt.":
    "Information about competitive advantages will be completed using approved facts and figures.",
  "Thông điệp chính thức của Chủ tịch sẽ được bổ sung sau khi có nội dung được duyệt để công bố.":
    "The Chairperson's official statement will be added once approved for publication.",
  "Thông tin đang được hoàn thiện": "Information being prepared",
  "Ban lãnh đạo Matrix Holding": "Matrix Holding leadership",
  "Thông tin đội ngũ lãnh đạo sẽ được cập nhật sau khi có hồ sơ chính thức được duyệt.":
    "Leadership profiles will be added once approved for publication.",
  "Các hồ sơ bên trên là hình minh họa, không đại diện cho lãnh đạo thực tế. Thông tin chính thức sẽ được cập nhật sau khi được duyệt công bố.":
    "The profiles above are illustrative and do not represent actual leaders. Official information will be added once approved for publication.",
  "Các cột mốc đang ở dạng tham khảo và cần được doanh nghiệp xác nhận trước khi công bố.":
    "These milestones are illustrative and need company confirmation before publication.",
  "Thông tin đối tác chiến lược sẽ được cập nhật sau khi xác nhận nội dung và nhận diện được phép công bố.":
    "Strategic partner information will be updated once the content and approved brand assets are confirmed.",
  "Tìm hiểu các vị trí tham khảo và cập nhật thông tin tuyển dụng chính thức.":
    "Explore sample roles and check for official recruitment updates.",
  "Vị trí tham khảo": "Sample role",
  "Các vị trí trên là nội dung tham khảo, chưa phải thông tin tuyển dụng chính thức.":
    "These roles are examples, not official job openings.",
  "Bản đồ Google Maps": "Google Maps",
  "Tên doanh nghiệp": "Company name",
  "Mã số thuế": "Tax ID",
  "Tất cả tin": "All news",
  "Tìm kiếm tin tức": "Search news",
  "Tìm theo tiêu đề hoặc nội dung...": "Search by title or content...",
  "Lọc theo danh mục": "Filter by category",
  "Tất cả danh mục": "All categories",
  "Quảng cáo": "Advertisement",
  "Khám phá hệ sinh thái đa lĩnh vực": "Explore a diversified ecosystem",
  "Kết nối dịch vụ, kinh doanh, đầu tư và đào tạo trong hệ sinh thái đa lĩnh vực.":
    "Connecting services, business, investment, and learning across a diversified ecosystem.",
  "Matrix Network — giải pháp dịch vụ cho doanh nghiệp":
    "Matrix Network — business service solutions",
  "Kết nối doanh nghiệp với các dịch vụ và nguồn lực hỗ trợ vận hành, phát triển.":
    "Connecting businesses with services and resources that support operations and growth.",
  "Tìm hiểu Matrix Network": "Discover Matrix Network",
  "Matrix Connect — mở rộng kết nối kinh doanh":
    "Matrix Connect — expanding business connections",
  "Gặp gỡ đối tác, chia sẻ kinh nghiệm và khám phá cơ hội hợp tác phù hợp.":
    "Meet partners, share experience, and explore relevant collaboration opportunities.",
  "Tìm hiểu Matrix Connect": "Discover Matrix Connect",
  "Matrix Ventures — kết nối cơ hội đầu tư":
    "Matrix Ventures — connecting investment opportunities",
  "Kết nối doanh nghiệp và nhà đầu tư để cùng trao đổi về cơ hội phát triển.":
    "Connecting businesses and investors to discuss opportunities for growth.",
  "Tìm hiểu Matrix Ventures": "Discover Matrix Ventures",
  "Matrix Academy — phát triển năng lực đội ngũ":
    "Matrix Academy — developing team capabilities",
  "Khám phá hoạt động học tập, chia sẻ tri thức và phát triển năng lực doanh nghiệp.":
    "Explore learning, knowledge-sharing, and business capability development.",
  "Tìm hiểu Matrix Academy": "Discover Matrix Academy",
  "Kinh tế": "Economy",
  "Vận chuyển": "Transportation",
  "Đánh giá cơ hội đầu tư bất động sản bằng góc nhìn dài hạn":
    "Taking a long-term view of real estate investment opportunities",
  "Cơ hội bất động sản cần được xem xét cùng nhu cầu thị trường, năng lực triển khai và định hướng đầu tư dài hạn.":
    "Real estate opportunities should be assessed alongside market demand, execution capabilities, and long-term investment direction.",
  "Kết nối đối tác vận chuyển trong chuỗi cung ứng":
    "Connecting transportation partners across the supply chain",
  "Lựa chọn đối tác vận chuyển phù hợp giúp chuỗi cung ứng phối hợp hiệu quả và đáp ứng nhu cầu thực tế.":
    "Choosing the right transportation partners helps supply chains coordinate effectively and meet practical needs.",
  "Theo dõi xu hướng kinh tế để nhận diện cơ hội kinh doanh":
    "Tracking economic trends to identify business opportunities",
  "Theo dõi biến động thị trường và các chỉ số kinh tế giúp doanh nghiệp đánh giá cơ hội có cơ sở hơn.":
    "Monitoring market changes and economic indicators helps businesses assess opportunities with better context.",
  "Phân trang tin tức": "News pagination",
  "Trang trước": "Previous page",
  "Trang sau": "Next page",
  "Chuyển đến trang": "Go to page",
  "Lọc tin tức theo thương hiệu": "Filter news by brand",
  "Tin tức nổi bật": "Featured news",
  "Tin tức mới nhất": "Latest news",
  "Tin tức khác": "More news",
  "Quay lại tin tức": "Back to news",
  "Không tìm thấy tin tức": "News article not found",
  "Bài viết có thể đã được gỡ bỏ hoặc đường dẫn không chính xác.":
    "This article may have been removed or the URL may be incorrect.",
  "Bình luận và cảm xúc": "Comments and reactions",
  "Phản hồi được lưu trên trình duyệt hiện tại, chưa được gửi lên máy chủ.":
    "Feedback is saved in this browser and is not sent to a server.",
  "Đánh giá bài viết": "Rate this article",
  "Thích": "Like",
  "Không thích": "Dislike",
  "Tên hiển thị": "Display name",
  "Bình luận": "Comment",
  "Gửi bình luận": "Post comment",
  "Không thể lưu phản hồi trên trình duyệt này.":
    "Unable to save feedback in this browser.",
  "Chưa có bình luận. Hãy là người đầu tiên chia sẻ ý kiến.":
    "No comments yet. Be the first to share your thoughts.",
  "Khám phá thêm tin tức": "Explore more news",
  "Matrix Holding định hướng xây dựng hệ sinh thái kinh doanh đa ngành":
    "Matrix Holding outlines its vision for a diversified business ecosystem",
  "Matrix Holding theo đuổi mô hình phát triển đa ngành, tập trung kết nối nguồn lực, năng lực chuyên môn và cơ hội hợp tác để tạo ra giá trị dài hạn.":
    "Matrix Holding is pursuing a diversified growth model focused on connecting resources, professional capabilities, and partnership opportunities to create long-term value.",
  "Kết nối nguồn lực mở ra những cơ hội hợp tác mới":
    "Connecting resources opens up new partnership opportunities",
  "Trong môi trường kinh doanh liên tục thay đổi, khả năng kết nối doanh nghiệp, đối tác và chuyên gia là một trong những nền tảng quan trọng để phát triển bền vững.":
    "In a changing business environment, connecting businesses, partners, and specialists is an important foundation for sustainable growth.",
  "Đổi mới tư duy để thích ứng với thị trường đang thay đổi":
    "Rethinking how to adapt to a changing market",
  "Công nghệ, dữ liệu và những mô hình kinh doanh mới đang tạo ra nhiều thay đổi trong cách doanh nghiệp vận hành và tìm kiếm cơ hội tăng trưởng.":
    "Technology, data, and new business models are changing how companies operate and pursue growth opportunities.",
  "Hướng tới những giá trị phát triển bền vững":
    "Working toward sustainable growth",
  "Phát triển dài hạn không chỉ nằm ở tốc độ tăng trưởng mà còn ở khả năng xây dựng nền tảng vận hành hiệu quả, trách nhiệm và tạo giá trị cho các bên liên quan.":
    "Long-term development is about more than growth; it also depends on building effective, responsible operations that create value for stakeholders.",
  "Phát triển bền vững": "Sustainable development",
  "Con người là nền tảng của một hệ sinh thái phát triển":
    "People are the foundation of a growing ecosystem",
  "Một hệ sinh thái hiệu quả được xây dựng từ những đội ngũ có năng lực, tinh thần hợp tác và cùng hướng tới những mục tiêu có giá trị lâu dài.":
    "An effective ecosystem is built by capable teams that collaborate and work toward goals with lasting value.",
  "Con người": "People",
  "Từ kết nối nguồn lực đến kiến tạo giá trị dài hạn":
    "From connecting resources to creating long-term value",
  "Với tư duy dài hạn, Matrix Holding hướng tới việc phát triển các lĩnh vực có tiềm năng, đồng thời xây dựng mạng lưới hợp tác tạo nền tảng cho những cơ hội mới.":
    "With a long-term mindset, Matrix Holding aims to develop promising sectors while building a network of partners that can support new opportunities.",
  "Câu chuyện": "Stories",
  "Matrix Holding.": "Matrix Holding.",
  "Cập nhật những thông tin, hoạt động và dấu mốc mới nhất.":
    "The latest updates, initiatives, and milestones.",
  "Tòa nhà văn phòng hiện đại giữa khu đô thị":
    "A modern office building in an urban district",
  "Kết nối nguồn lực, kiến tạo giá trị dài hạn":
    "Connecting resources to create long-term value",
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
  "Nhìn lại hành trình phát triển hệ sinh thái năm 2025":
    "Looking back at the ecosystem's development in 2025",
  "Những bài học về kết nối, phối hợp và phát triển năng lực tạo nền tảng cho chặng đường tiếp theo.":
    "Lessons in connection, collaboration, and capability-building lay the groundwork for the next stage.",
  "Lập kế hoạch kinh doanh linh hoạt trước biến động":
    "Planning flexibly for business change",
  "Kịch bản rõ ràng và các mốc rà soát định kỳ giúp doanh nghiệp chủ động điều chỉnh ưu tiên.":
    "Clear scenarios and regular reviews help businesses adjust priorities proactively.",
  "Xây dựng trải nghiệm khách hàng nhất quán":
    "Building a consistent customer experience",
  "Lắng nghe phản hồi ở từng điểm chạm giúp doanh nghiệp cải thiện hành trình khách hàng.":
    "Listening at every touchpoint helps businesses improve the customer journey.",
  "Khuyến khích văn hóa chia sẻ kiến thức trong đội ngũ":
    "Encouraging a culture of knowledge-sharing",
  "Thói quen chia sẻ kinh nghiệm giúp tri thức được lan tỏa và hỗ trợ cộng tác hiệu quả hơn.":
    "Sharing experience helps knowledge spread and supports more effective collaboration.",
  "Ứng dụng dữ liệu để hỗ trợ quyết định kinh doanh":
    "Using data to support business decisions",
  "Chỉ số phù hợp và nguồn dữ liệu đáng tin cậy giúp quyết định minh bạch, dễ đánh giá.":
    "Relevant metrics and reliable data help make decisions transparent and easier to evaluate.",
  "Kết nối doanh nghiệp với chuyên gia phù hợp":
    "Connecting businesses with the right experts",
  "Xác định rõ nhu cầu và chuyên môn cần thiết giúp hoạt động kết nối tạo ra giá trị thực tế.":
    "Clearly defining needs and expertise helps introductions create practical value.",
  "Chủ động nhận diện rủi ro trong quá trình triển khai":
    "Proactively identifying risks during implementation",
  "Trao đổi sớm về rủi ro và phương án ứng phó giúp dự án duy trì tiến độ thực tế.":
    "Early discussion of risks and responses helps projects maintain realistic timelines.",
  "Tạo điều kiện học tập liên tục tại nơi làm việc":
    "Supporting continuous learning in the workplace",
  "Cơ hội thực hành và phản hồi thường xuyên giúp kiến thức mới được áp dụng vào công việc.":
    "Opportunities to practice and regular feedback help people apply new knowledge at work.",
  "Thiết kế mô hình hợp tác hướng tới giá trị bền vững":
    "Designing partnerships for sustainable value",
  "Mục tiêu chung, vai trò minh bạch và cách đánh giá rõ ràng là nền tảng cho quan hệ hợp tác dài hạn.":
    "Shared goals, transparent roles, and clear evaluation create a foundation for long-term partnerships.",
  "Xây dựng thương hiệu từ sự tin cậy nhất quán":
    "Building a brand through consistent trust",
  "Cam kết được thực hiện nhất quán qua từng trải nghiệm là nền tảng của niềm tin thương hiệu.":
    "Consistently honoring commitments across experiences is the foundation of brand trust.",
  "Đổi mới vận hành bắt đầu từ việc lắng nghe đội ngũ":
    "Operational innovation starts with listening to teams",
  "Ý kiến từ những người trực tiếp thực hiện giúp cải tiến quy trình sát với thực tế hơn.":
    "Input from people doing the work helps make process improvements more practical.",
  "Nâng cao kỹ năng giao tiếp và phối hợp trong công việc":
    "Strengthening communication and collaboration at work",
  "Mục tiêu rõ ràng và cập nhật đúng lúc giúp các nhóm phối hợp nhịp nhàng hơn.":
    "Clear goals and timely updates help teams work together more smoothly.",
  "Đánh giá hiệu quả chiến lược bằng mục tiêu đo lường được":
    "Evaluating strategy with measurable goals",
  "Liên kết mục tiêu với chỉ số và mốc đánh giá giúp tổ chức theo dõi tiến độ nhất quán.":
    "Linking goals to metrics and review points helps organizations track progress consistently.",
  "Kết nối cộng đồng doanh nghiệp cùng phát triển":
    "Connecting businesses to grow together",
  "Chia sẻ kinh nghiệm và góc nhìn đa chiều mở ra cơ hội học hỏi giữa các doanh nghiệp.":
    "Sharing experience and diverse perspectives creates opportunities for businesses to learn from one another.",
  "Đồng hành cùng đội ngũ trong quá trình thay đổi":
    "Supporting teams through change",
  "Giải thích lý do, lắng nghe băn khoăn và cập nhật tiến độ giúp quá trình chuyển đổi rõ ràng hơn.":
    "Explaining the reasons, listening to concerns, and sharing updates make transitions clearer.",
  "Đưa góc nhìn khách hàng vào quá trình phát triển sản phẩm":
    "Bringing the customer perspective into product development",
  "Nghiên cứu nhu cầu thực tế giúp sản phẩm giải quyết đúng vấn đề và phù hợp với người dùng.":
    "Researching real needs helps products solve the right problems for their users.",
  "Phát triển năng lực quản lý cho đội ngũ kế cận":
    "Developing management capabilities in future leaders",
  "Trải nghiệm thực tế, cố vấn và phản hồi giúp nhân sự chuẩn bị tốt hơn cho trách nhiệm mới.":
    "Practical experience, mentoring, and feedback help people prepare for new responsibilities.",
  "Hợp tác để tạo giá trị dài hạn cho các bên":
    "Collaborating to create long-term value",
  "Quan hệ hợp tác hiệu quả cân bằng lợi ích, năng lực đóng góp và mục tiêu chung.":
    "Effective partnerships balance interests, contributions, and shared goals.",
  "Củng cố nền tảng vận hành cho tăng trưởng bền vững":
    "Strengthening operations for sustainable growth",
  "Quy trình rõ ràng và trách nhiệm phù hợp giúp tổ chức duy trì chất lượng khi mở rộng.":
    "Clear processes and appropriate accountability help organizations maintain quality as they grow.",
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
