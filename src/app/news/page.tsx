export default function News() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-background-light to-brand-accent/5 dark:from-brand-primary/20 dark:via-background-dark dark:to-brand-accent/5 -z-10">
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm">campaign</span> Cập nhật mới nhất
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Tin tức &amp; <span className="text-brand-primary">Sự kiện</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Khám phá những bước tiến công nghệ đột phá, sự kiện nổi bật và tầm
            nhìn chiến lược tại AHV Holding.
          </p>
        </div>
      </section>

      {/* Section 2: Featured News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row">
          <div className="lg:w-3/5 relative h-64 lg:h-auto">
            <div className="absolute inset-0 bg-cover bg-center"
                 style={{
                   backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgp2IyrqXJ0Ni84z9w5KtDXkYEWYij-t3aOdwgxXb-o_1NL_LXgUbsxHfZwoSPtdDn53xzsilTkcWLZBIjXpK-ANxQkNHlt5ep9UqQ8jTmp7U35EyY0mGnI_WzQWg38QdZdNJX8fRB4G6jBZp5juizun6kZ-qriiWAqOqNw0ftgv-Zu0-6kymzhyLNqrIpjFw0P12urMKGwwc6vL7IHcVqWmJLpUlczhsSUY_1NGbNV66VIUIpUvD5I39_HUobAhgFf0TQb9-5XVI')"
                 }}></div>
            <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
              Tiêu điểm
            </div>
          </div>
          <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 font-medium">
              <span>24 Tháng 5, 2024</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>Xu hướng 4.0</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              AHV Holding công bố hệ sinh thái AI thế hệ mới cho doanh nghiệp toàn cầu
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Sự kiện ra mắt sản phẩm lớn nhất năm đã thu hút hơn 5,000 chuyên
              gia công nghệ tham dự, đánh dấu bước chuyển mình mạnh mẽ của tập
              đoàn trong lĩnh vực trí tuệ nhân tạo.
            </p>
            <a className="inline-flex items-center gap-2 text-brand-primary font-bold group" href="#">
              Đọc toàn bộ bài viết
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: News Grid with Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-8 bg-brand-accent rounded-full"></div>
              <span className="text-brand-accent font-black uppercase text-sm tracking-widest">Danh mục</span>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Khám phá nội dung
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2.5 rounded-xl bg-brand-primary text-white font-bold text-sm shadow-md transition-all">
              Tất cả
            </button>
            <button className="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-sm border border-slate-100 dark:border-slate-700 transition-all">
              Sự kiện công nghệ
            </button>
            <button className="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-sm border border-slate-100 dark:border-slate-700 transition-all">
              Tin nội bộ
            </button>
            <button className="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-sm border border-slate-100 dark:border-slate-700 transition-all">
              Thông cáo báo chí
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                   style={{
                     backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmVtS4K5hXQUo55uG7qyCsGLUxifO00QPGzi8XEXsiH7_JSrXYS2OS_xTvsdCQAVOG3_pGsf_9iG5t21iOAttAcPmygV5GjPISiENnnm9plS3y4sAidOCY_edd09kC70573nJkVM92OgOAf11j4GudyIAqrZ-fCINcqz12HkwLHwTjW5BHJo-q-zejKzey40uwS1QTiqzPxLjmg7bOnAPd6KL3XRxA2ZCmpxsyiLPIsU3MaSFKKHEfAWZztHEuJ5iQX_ivW8BDlFY')"
                   }}></div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-lg text-[10px] font-black uppercase tracking-widest text-brand-primary shadow-sm backdrop-blur-sm">
                Sự kiện công nghệ
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-slate-400 font-medium mb-3">
                15 Tháng 5, 2024
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                Hackathon 2024: Nơi khởi nguồn của những ý tưởng đột phá
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                Cuộc thi lập trình nội bộ lớn nhất năm đã chính thức khởi động
                với sự tham gia của 50 đội thi đến từ khắp các chi nhánh...
              </p>
              <a className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-primary border-t border-slate-50 dark:border-slate-800 pt-4 w-full"
                 href="#">
                Xem chi tiết
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </a>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                   style={{
                     backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxn6C4nTpg9vMDjrZp5WrWOuu939fPyfGzJLqAX_899KioHwTETjv8cSizA47hjYDGeBFvPTG9-6GPvVcJXsqHQnA5v_FjZ06a0qmu5bIMLxmfXA2CMOTlTPzDUKvI9rvySmQUE1Gc83yG89iHGCGS-F6dhqUGixfp9peI6ss5BNyF2cJEfVaHI2-KMhEhVz5UXWcBlIYnBJarGb-ZZpDV-Tx0iJSvIr5KnX9Kj0IFhMu95voNKR-HhJerPyZ03ImmfVlZ9ZreHkE')"
                   }}></div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-lg text-[10px] font-black uppercase tracking-widest text-brand-primary shadow-sm backdrop-blur-sm">
                Thông cáo báo chí
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-slate-400 font-medium mb-3">
                10 Tháng 5, 2024
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                AHV Holding mở rộng thị trường sang khu vực Đông Nam Á
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                Việc thành lập văn phòng đại diện tại Singapore là bước đi chiến
                lược quan trọng trong kế hoạch vươn tầm quốc tế...
              </p>
              <a className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-primary border-t border-slate-50 dark:border-slate-800 pt-4 w-full"
                 href="#">
                Xem chi tiết
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </a>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                   style={{
                     backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3I3S2c7i1c4YhdVGYJqTw_DXe-Ut8Vlo8R2SQDn6DGRwEaw9OnelH-iwWTg_HXLuF6bGCDqciVnHkmvW6U1wV0OyRAEZQh9j6kQ1mrJ4e-Ck1WIsbA_f_b0vJskbgEsZxrqbZR0qJo8qkRw2hpUdztUM9oyL6JF67KlYGP-y0Fef4H5prVNkTr8DWY3SdxbAUgDpXg7xuYTsB8xRHY2Y4q1P9TWXidmRD3FoDNYHva2n5B2U9P3BB-S3enJ8ZA70cP2WR3vF9mas')"
                   }}></div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-lg text-[10px] font-black uppercase tracking-widest text-brand-primary shadow-sm backdrop-blur-sm">
                Tin nội bộ
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-slate-400 font-medium mb-3">
                05 Tháng 5, 2024
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                Vinh danh các cá nhân xuất sắc Quý 1 năm 2024
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                Lễ trao giải Star Performers đã diễn ra trong không khí ấm cúng
                với những phần thưởng xứng đáng dành cho nỗ lực không ngừng nghỉ...
              </p>
              <a className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-primary border-t border-slate-50 dark:border-slate-800 pt-4 w-full"
                 href="#">
                Xem chi tiết
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </a>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                   style={{
                     backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD62eHhJ3x2O0UdLeAGpudgxaPlr4IEa6uFd156UEHsbPn3VlTpV7ztxF-HpBW8AxozqOL-rqTg_F66kgA9AMDanIc4ESE2gFTemEffSCR7G4LiSElGJ_nFlf0R09odSU_vn-7QDRk_yD783MKr27a-cXwKrcpR2BK9OA_x5ZM4HgX_SgrzVD1lVt9lEr3QWhHF0n_sIbVNxCPfGnR1l3VuvQ3yHnOhQp-9AyYPjMTAIEAbHwIpQhAEWswuSbfWf_BynfbjBr2sbzQ')"
                   }}></div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-lg text-[10px] font-black uppercase tracking-widest text-brand-primary shadow-sm backdrop-blur-sm">
                Sự kiện công nghệ
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-slate-400 font-medium mb-3">
                01 Tháng 5, 2024
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                Khởi động dự án Cloud Hybrid thế hệ 5.0
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                Dự án trọng điểm của khối công nghệ hứa hẹn sẽ mang đến giải
                pháp lưu trữ an toàn và hiệu suất cao vượt trội...
              </p>
              <a className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-primary border-t border-slate-50 dark:border-slate-800 pt-4 w-full"
                 href="#">
                Xem chi tiết
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </a>
            </div>
          </div>
          
          {/* Card 5 */}
          <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                   style={{
                     backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLT-K4op11VdDITnt-pi00aj2qv456xORt3-CGnOKWvtlO1rZuZxQivOiipRP6mALx_d83ok9FBfabf-ba0Vx47YbUb6vodxsO1l1XczAstiCAgphUgZYR_PvEIxSzKC1Pls0oc-Kdudi8T-iFfOfxcFK5CdZ7vE7CFbApE0twi52mzjRQh9c8V6PHWPdKUZ0x9eSkM3ORh-R4yYjt0f1amrJYBs6pPu1ThX5-XWSsg6KYHP1lRllQ-d3vX-v6AjB-Gpp_T518CUM')"
                   }}></div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-lg text-[10px] font-black uppercase tracking-widest text-brand-primary shadow-sm backdrop-blur-sm">
                Thông cáo báo chí
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-slate-400 font-medium mb-3">
                28 Tháng 4, 2024
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                Hợp tác chiến lược cùng đối tác công nghệ Nhật Bản
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                Lễ ký kết biên bản ghi nhớ hợp tác phát triển hạ tầng dữ liệu
                thông minh giữa AHV và TechCorp Japan...
              </p>
              <a className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-primary border-t border-slate-50 dark:border-slate-800 pt-4 w-full"
                 href="#">
                Xem chi tiết
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </a>
            </div>
          </div>
          
          {/* Card 6 */}
          <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                   style={{
                     backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuuXPxeFvBb6zGDvlSeCOpHAEM8xCqrjTSfnaxCJKJoEbfoQk3VASh5ZAXjPvvVSjBkWiXrHtfq0oOwkvoJ0hqbcqded_fmFd5zjArTtkj1qEg0n9k8qVeP_mg95JM00tTfWGadVq17_B_a0DNnpHN67w6hZ_BASchuzCoh0Oyo5a4FZj-wF61-UY75VgHHqDIWrCnJkxrFr7YuDnv-Z2XrXwFtIE5XPq3VJfVTbUpiH339bs4KOkCfIp0HEZTXqjYtbLRSW14kIc')"
                   }}></div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-lg text-[10px] font-black uppercase tracking-widest text-brand-primary shadow-sm backdrop-blur-sm">
                Sự kiện công nghệ
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-slate-400 font-medium mb-3">
                20 Tháng 4, 2024
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                Podcast series: Chuyện nghề Tech - Ep 12: Tương lai của AI
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                Lắng nghe những chia sẻ tâm huyết từ CTO của AHV Holding về
                những thách thức và cơ hội của ngành AI tại Việt Nam...
              </p>
              <a className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-primary border-t border-slate-50 dark:border-slate-800 pt-4 w-full"
                 href="#">
                Xem chi tiết
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-brand-primary hover:text-white transition-all">
            Xem thêm tin tức
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-brand-primary rounded-3xl p-8 md:p-16 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Đừng bỏ lỡ bất kỳ tin tức nào!
              </h3>
              <p className="text-white/80 text-lg">
                Đăng ký nhận bản tin định kỳ hàng tuần từ đội ngũ AHV Holding.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-3">
                <input className="flex-grow px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-accent outline-none text-slate-900 shadow-xl"
                       placeholder="Email của bạn..." 
                       type="email" />
                <button className="bg-brand-accent hover:bg-brand-accent/90 text-slate-900 font-black px-8 py-4 rounded-xl transition-all shadow-xl"
                        type="submit">
                  Đăng ký ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
