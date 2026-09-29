export interface LocalizedCareerCopy {
  vi: string;
  en: string;
}

export interface CareerRole {
  id: string;
  businessUnitId: string;
  title: string;
  description: string;
  responsibilities: LocalizedCareerCopy[];
  requirements: LocalizedCareerCopy[];
}

export const careerRoles: CareerRole[] = [
  {
    id: "real-estate-project-development",
    businessUnitId: "real-estate",
    title: "Chuyên viên Phát triển dự án",
    description:
      "Hỗ trợ nghiên cứu thị trường, đánh giá cơ hội và phối hợp các bước chuẩn bị dự án bất động sản.",
    responsibilities: [
      {
        vi: "Thu thập dữ liệu thị trường, quy hoạch và sản phẩm cạnh tranh để đánh giá tiềm năng dự án.",
        en: "Gather market, planning, and competitor data to assess project potential.",
      },
      {
        vi: "Phối hợp với các bộ phận liên quan để theo dõi tiến độ nghiên cứu và chuẩn bị hồ sơ dự án.",
        en: "Coordinate with relevant teams to track research and project documentation.",
      },
      {
        vi: "Tổng hợp báo cáo và đề xuất phương án phát triển dự án dựa trên dữ liệu.",
        en: "Prepare reports and data-informed recommendations for project development.",
      },
    ],
    requirements: [
      {
        vi: "Tốt nghiệp ngành bất động sản, kinh tế, quy hoạch, xây dựng hoặc lĩnh vực liên quan.",
        en: "Degree in real estate, economics, planning, construction, or a related field.",
      },
      {
        vi: "Có kỹ năng nghiên cứu, tổng hợp thông tin và sử dụng bảng tính, công cụ trình bày.",
        en: "Strong research and synthesis skills; comfortable with spreadsheets and presentation tools.",
      },
      {
        vi: "Cẩn thận, chủ động và sẵn sàng phối hợp với nhiều nhóm chuyên môn.",
        en: "Detail-oriented, proactive, and comfortable collaborating across disciplines.",
      },
    ],
  },
  {
    id: "investment-analyst",
    businessUnitId: "investment",
    title: "Chuyên viên Phân tích đầu tư",
    description:
      "Tổng hợp dữ liệu ngành, phân tích cơ hội và hỗ trợ xây dựng đề xuất đầu tư cho các mô hình tiềm năng.",
    responsibilities: [
      {
        vi: "Nghiên cứu ngành, mô hình kinh doanh và các cơ hội đầu tư tiềm năng.",
        en: "Research industries, business models, and potential investment opportunities.",
      },
      {
        vi: "Xây dựng mô hình phân tích, đánh giá giả định và tổng hợp rủi ro đầu tư.",
        en: "Build analytical models, assess assumptions, and summarize investment risks.",
      },
      {
        vi: "Chuẩn bị tài liệu và báo cáo phục vụ quá trình thẩm định, ra quyết định.",
        en: "Prepare materials and reports to support due diligence and decision-making.",
      },
    ],
    requirements: [
      {
        vi: "Tốt nghiệp tài chính, kinh tế, kế toán hoặc ngành định lượng liên quan.",
        en: "Degree in finance, economics, accounting, or a related quantitative field.",
      },
      {
        vi: "Có tư duy phân tích, kỹ năng Excel và khả năng trình bày số liệu rõ ràng.",
        en: "Analytical mindset, strong spreadsheet skills, and clear data presentation.",
      },
      {
        vi: "Quan tâm đến đầu tư, chiến lược và sự phát triển của doanh nghiệp.",
        en: "Interest in investment, strategy, and business growth.",
      },
    ],
  },
  {
    id: "digital-product-specialist",
    businessUnitId: "technology",
    title: "Chuyên viên Sản phẩm số",
    description:
      "Kết nối nhu cầu người dùng với đội ngũ kỹ thuật để cải thiện nền tảng số và quy trình vận hành.",
    responsibilities: [
      {
        vi: "Thu thập nhu cầu người dùng, phân tích quy trình và xác định vấn đề cần ưu tiên.",
        en: "Gather user needs, analyze workflows, and identify priority problems.",
      },
      {
        vi: "Viết yêu cầu sản phẩm, tiêu chí nghiệm thu và phối hợp với thiết kế, kỹ thuật.",
        en: "Write product requirements and acceptance criteria; coordinate with design and engineering.",
      },
      {
        vi: "Theo dõi hiệu quả tính năng sau khi ra mắt và đề xuất cải tiến dựa trên dữ liệu.",
        en: "Track feature performance after launch and recommend data-driven improvements.",
      },
    ],
    requirements: [
      {
        vi: "Có kinh nghiệm hoặc kiến thức về sản phẩm số, phân tích nghiệp vụ hoặc công nghệ.",
        en: "Experience or knowledge in digital products, business analysis, or technology.",
      },
      {
        vi: "Giao tiếp tốt, tư duy logic và có khả năng chuyển nhu cầu thành yêu cầu rõ ràng.",
        en: "Strong communication and logical thinking; able to turn needs into clear requirements.",
      },
      {
        vi: "Ưu tiên ứng viên quen thuộc với quy trình Agile và công cụ quản lý công việc.",
        en: "Familiarity with Agile workflows and project management tools is an advantage.",
      },
    ],
  },
  {
    id: "financial-analyst",
    businessUnitId: "financial-services",
    title: "Chuyên viên Phân tích tài chính",
    description:
      "Hỗ trợ phân tích số liệu, lập báo cáo và đánh giá hiệu quả tài chính trong hoạt động đầu tư.",
    responsibilities: [
      {
        vi: "Tổng hợp dữ liệu tài chính và lập báo cáo định kỳ phục vụ quản trị.",
        en: "Consolidate financial data and prepare regular management reports.",
      },
      {
        vi: "Phân tích biến động doanh thu, chi phí, dòng tiền và các chỉ số hiệu quả.",
        en: "Analyze revenue, cost, cash-flow movements, and performance indicators.",
      },
      {
        vi: "Phối hợp xây dựng ngân sách, dự báo và đánh giá các phương án tài chính.",
        en: "Support budgeting, forecasting, and evaluation of financial scenarios.",
      },
    ],
    requirements: [
      {
        vi: "Tốt nghiệp tài chính, kế toán, kiểm toán hoặc lĩnh vực liên quan.",
        en: "Degree in finance, accounting, auditing, or a related field.",
      },
      {
        vi: "Nắm vững nguyên tắc phân tích báo cáo tài chính và sử dụng Excel.",
        en: "Knowledge of financial statement analysis and strong Excel skills.",
      },
      {
        vi: "Trung thực, cẩn trọng với dữ liệu và có trách nhiệm với thời hạn báo cáo.",
        en: "Integrity, care with data, and accountability for reporting deadlines.",
      },
    ],
  },
  {
    id: "consumer-business-development",
    businessUnitId: "consumer",
    title: "Chuyên viên Phát triển kinh doanh ngành hàng",
    description:
      "Nghiên cứu xu hướng tiêu dùng và hỗ trợ phát triển sản phẩm, thương hiệu cùng các kênh phân phối.",
    responsibilities: [
      {
        vi: "Theo dõi xu hướng ngành hàng, hành vi người tiêu dùng và hoạt động của đối thủ.",
        en: "Monitor category trends, consumer behavior, and competitor activity.",
      },
      {
        vi: "Hỗ trợ xây dựng kế hoạch phát triển sản phẩm, thương hiệu và kênh bán hàng.",
        en: "Support product, brand, and sales-channel development plans.",
      },
      {
        vi: "Phối hợp với đối tác và bộ phận nội bộ để triển khai các chương trình kinh doanh.",
        en: "Coordinate with partners and internal teams to deliver business initiatives.",
      },
    ],
    requirements: [
      {
        vi: "Tốt nghiệp kinh doanh, marketing, thương mại hoặc ngành liên quan.",
        en: "Degree in business, marketing, commerce, or a related field.",
      },
      {
        vi: "Có khả năng giao tiếp, phân tích thị trường và làm việc với số liệu kinh doanh.",
        en: "Strong communication and market analysis skills; comfortable with business data.",
      },
      {
        vi: "Chủ động, linh hoạt và quan tâm đến sản phẩm, bán lẻ hoặc thương hiệu tiêu dùng.",
        en: "Proactive and adaptable, with an interest in products, retail, or consumer brands.",
      },
    ],
  },
  {
    id: "hospitality-operations",
    businessUnitId: "hospitality",
    title: "Chuyên viên Vận hành dịch vụ lưu trú",
    description:
      "Phối hợp hoạt động dịch vụ, theo dõi chất lượng vận hành và góp phần hoàn thiện trải nghiệm khách hàng.",
    responsibilities: [
      {
        vi: "Theo dõi quy trình vận hành dịch vụ và phối hợp xử lý yêu cầu của khách hàng.",
        en: "Monitor service operations and coordinate responses to customer requests.",
      },
      {
        vi: "Ghi nhận phản hồi, kiểm tra tiêu chuẩn chất lượng và đề xuất cải thiện trải nghiệm.",
        en: "Record feedback, review quality standards, and suggest experience improvements.",
      },
      {
        vi: "Phối hợp với các nhóm dịch vụ, đối tác và nhà cung cấp trong hoạt động hàng ngày.",
        en: "Coordinate with service teams, partners, and suppliers in day-to-day operations.",
      },
    ],
    requirements: [
      {
        vi: "Có kiến thức hoặc kinh nghiệm về du lịch, khách sạn, dịch vụ khách hàng.",
        en: "Knowledge or experience in travel, hospitality, or customer service.",
      },
      {
        vi: "Tác phong chuyên nghiệp, giao tiếp tốt và xử lý tình huống bình tĩnh.",
        en: "Professional manner, strong communication, and calm problem-solving.",
      },
      {
        vi: "Sẵn sàng làm việc phối hợp và theo quy trình dịch vụ.",
        en: "Comfortable working collaboratively and following service procedures.",
      },
    ],
  },
  {
    id: "supply-chain-coordinator",
    businessUnitId: "logistics",
    title: "Chuyên viên Điều phối chuỗi cung ứng",
    description:
      "Hỗ trợ điều phối vận chuyển, kho vận và phối hợp với các đối tác trong chuỗi cung ứng.",
    responsibilities: [
      {
        vi: "Theo dõi kế hoạch giao nhận, luân chuyển hàng hóa và tiến độ xử lý đơn.",
        en: "Track delivery plans, goods movement, and order processing timelines.",
      },
      {
        vi: "Cập nhật dữ liệu tồn kho, chứng từ và tình trạng phối hợp với đối tác.",
        en: "Update inventory data, documentation, and partner coordination status.",
      },
      {
        vi: "Phát hiện vấn đề vận hành và phối hợp tìm phương án xử lý kịp thời.",
        en: "Identify operational issues and coordinate timely solutions.",
      },
    ],
    requirements: [
      {
        vi: "Tốt nghiệp logistics, quản lý chuỗi cung ứng, kinh doanh hoặc ngành liên quan.",
        en: "Degree in logistics, supply chain management, business, or a related field.",
      },
      {
        vi: "Có kỹ năng tổ chức công việc, theo dõi nhiều đầu việc và sử dụng bảng tính.",
        en: "Strong organization and task-tracking skills; comfortable with spreadsheets.",
      },
      {
        vi: "Cẩn thận, chủ động trao đổi và xử lý tốt các tình huống phát sinh.",
        en: "Detail-oriented, communicative, and effective at handling unexpected issues.",
      },
    ],
  },
  {
    id: "learning-program-specialist",
    businessUnitId: "education",
    title: "Chuyên viên Phát triển chương trình đào tạo",
    description:
      "Tìm hiểu nhu cầu học tập và hỗ trợ xây dựng nội dung, chương trình đào tạo phù hợp với người học.",
    responsibilities: [
      {
        vi: "Khảo sát nhu cầu học tập và xác định mục tiêu cho từng chương trình.",
        en: "Research learning needs and define objectives for each program.",
      },
      {
        vi: "Phối hợp với chuyên gia để xây dựng đề cương, học liệu và hoạt động đào tạo.",
        en: "Work with subject matter experts to develop outlines, learning materials, and activities.",
      },
      {
        vi: "Thu thập phản hồi và đánh giá hiệu quả để cải tiến nội dung chương trình.",
        en: "Gather feedback and evaluate outcomes to improve program content.",
      },
    ],
    requirements: [
      {
        vi: "Tốt nghiệp giáo dục, nhân sự, truyền thông hoặc lĩnh vực liên quan.",
        en: "Degree in education, human resources, communications, or a related field.",
      },
      {
        vi: "Có kỹ năng viết, tổ chức nội dung và phối hợp với nhiều bên liên quan.",
        en: "Strong writing and content organization skills; able to coordinate with stakeholders.",
      },
      {
        vi: "Quan tâm đến đào tạo, phát triển con người và phương pháp học tập.",
        en: "Interest in training, people development, and learning methods.",
      },
    ],
  },
  {
    id: "healthcare-service-development",
    businessUnitId: "healthcare",
    title: "Chuyên viên Phát triển dịch vụ sức khỏe",
    description:
      "Nghiên cứu nhu cầu khách hàng và hỗ trợ phát triển mô hình dịch vụ chăm sóc sức khỏe.",
    responsibilities: [
      {
        vi: "Nghiên cứu nhu cầu người dùng và xu hướng trong lĩnh vực chăm sóc sức khỏe.",
        en: "Research user needs and trends in healthcare services.",
      },
      {
        vi: "Phối hợp thiết kế hành trình dịch vụ và tiêu chuẩn trải nghiệm khách hàng.",
        en: "Help design service journeys and customer experience standards.",
      },
      {
        vi: "Tổng hợp dữ liệu, phản hồi và đề xuất hướng cải thiện dịch vụ.",
        en: "Consolidate data and feedback and recommend service improvements.",
      },
    ],
    requirements: [
      {
        vi: "Tốt nghiệp y tế, quản trị dịch vụ, kinh doanh hoặc lĩnh vực liên quan.",
        en: "Degree in healthcare, service management, business, or a related field.",
      },
      {
        vi: "Có kỹ năng nghiên cứu, giao tiếp và xử lý thông tin cẩn thận.",
        en: "Strong research and communication skills with careful information handling.",
      },
      {
        vi: "Có ý thức bảo mật và tôn trọng quyền riêng tư trong lĩnh vực sức khỏe.",
        en: "Committed to confidentiality and privacy in healthcare contexts.",
      },
    ],
  },
  {
    id: "business-solutions-consultant",
    businessUnitId: "business-services",
    title: "Chuyên viên Giải pháp doanh nghiệp",
    description:
      "Tìm hiểu bài toán vận hành của doanh nghiệp và phối hợp đề xuất giải pháp dịch vụ phù hợp.",
    responsibilities: [
      {
        vi: "Trao đổi với khách hàng để tìm hiểu nhu cầu và thách thức trong vận hành.",
        en: "Engage with clients to understand operational needs and challenges.",
      },
      {
        vi: "Phối hợp xây dựng đề xuất giải pháp, phạm vi công việc và kế hoạch triển khai.",
        en: "Help develop solution proposals, scopes of work, and implementation plans.",
      },
      {
        vi: "Theo dõi tiến độ phối hợp và tổng hợp phản hồi trong quá trình cung cấp dịch vụ.",
        en: "Track coordination progress and consolidate feedback during service delivery.",
      },
    ],
    requirements: [
      {
        vi: "Tốt nghiệp quản trị kinh doanh, tư vấn, vận hành hoặc ngành liên quan.",
        en: "Degree in business administration, consulting, operations, or a related field.",
      },
      {
        vi: "Có kỹ năng lắng nghe, phân tích vấn đề và trình bày giải pháp rõ ràng.",
        en: "Strong listening and problem analysis skills; able to present solutions clearly.",
      },
      {
        vi: "Chủ động, có tinh thần phục vụ khách hàng và làm việc nhóm tốt.",
        en: "Proactive, client-focused, and effective in a team environment.",
      },
    ],
  },
];
