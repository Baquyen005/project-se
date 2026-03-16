export default function Home() {
  return (
    <main>
      {/* BEGIN: Redesigned Hero Section (Based on IMAGE_14) */}
      <section className="relative xl:min-h-screen flex items-center overflow-hidden hero-mesh pt-20" data-purpose="hero-banner">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-4 py-2 rounded-full text-brand-accent text-[11px] font-bold tracking-widest uppercase mb-8 shadow-sm">
                <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                Seamless Real-Time Insights
              </div>
              <h1 className="text-6xl md:text-[84px] font-extrabold leading-[1] mb-10 text-brand-dark tracking-tight">
                Hệ sinh thái công nghệ <span className="text-brand-primary">bền vững</span> cho tương lai
              </h1>
              <div className="flex items-end gap-12 mt-16">
                <div className="flex-shrink-0">
                  <div className="text-[80px] font-bold leading-none text-brand-dark">150<span className="text-brand-accent">%</span></div>
                  <div className="text-gray-500 font-semibold mt-2 text-lg">Tăng trưởng hiệu quả</div>
                </div>
                <div className="max-w-[280px] pb-2">
                  <p className="text-gray-600 font-medium leading-relaxed">
                    Kiến tạo tương lai số thông qua những giải pháp đột phá, lấy con người làm trọng tâm.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-12">
                <a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-primary transition-colors" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                <a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-primary transition-colors" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-white p-2">
                <img alt="Professional Portrait" className="rounded-[2.5rem] object-cover w-full aspect-[4/5]" src="./Gemini_Generated_Image_1yujv31yujv31yuj.png" />
              </div>
              <div className="absolute -top-6 -left-12 z-20 bg-white p-6 rounded-3xl shadow-xl max-w-[240px] animate-float border border-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-gray-800">Market Performance</div>
                  <span className="material-symbols-outlined text-brand-accent text-sm">trending_up</span>
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-3xl font-extrabold text-brand-dark">200%</span>
                  <span className="text-xs font-bold text-emerald-500 mb-1">+12%</span>
                </div>
                <div className="h-12 w-full flex items-end gap-1">
                  <div className="flex-1 bg-brand-primary/10 h-4 rounded-sm"></div>
                  <div className="flex-1 bg-brand-primary/20 h-6 rounded-sm"></div>
                  <div className="flex-1 bg-brand-primary/30 h-8 rounded-sm"></div>
                  <div className="flex-1 bg-brand-primary/40 h-10 rounded-sm"></div>
                  <div className="flex-1 bg-brand-primary/60 h-12 rounded-sm"></div>
                </div>
              </div>
              <div className="absolute bottom-10 -right-8 z-20 bg-brand-dark text-white p-6 rounded-3xl shadow-2xl max-w-[200px] animate-pulse-slow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                  </div>
                  <div className="text-xs font-bold">Get Started</div>
                </div>
                <p className="text-[11px] text-gray-400 font-medium">Bứt phá quy trình doanh nghiệp của bạn ngay hôm nay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-surface" id="gia-tri">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">DNA của AHV</h2>
              <div className="h-1.5 w-24 bg-brand-accent rounded-full mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">Giá Trị Cốt Lõi</h2>
            </div>
            <p className="text-gray-500 text-lg max-w-md font-medium">Nền tảng vững chắc định hình phong cách làm việc và sứ mệnh dẫn đầu của AHV Holding.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-blue-50/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:rotate-6 transition-all duration-500">
                <span className="material-symbols-outlined text-brand-primary group-hover:text-white text-3xl">favorite</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Tử tế</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Kinh doanh bằng sự chân thành, đối xử với khách hàng và đồng nghiệp bằng cái tâm.</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-blue-50/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:rotate-6 transition-all duration-500">
                <span className="material-symbols-outlined text-brand-primary group-hover:text-white text-3xl">verified_user</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Trung thực</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Minh bạch trong mọi quy trình, cam kết nói thật và làm thật trong mọi dự án.</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-blue-50/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:rotate-6 transition-all duration-500">
                <span className="material-symbols-outlined text-brand-primary group-hover:text-white text-3xl">groups</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Chia sẻ</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Cùng phát triển, sẵn lòng hỗ trợ cộng đồng và đối tác để kiến tạo giá trị chung.</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-blue-50/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:rotate-6 transition-all duration-500">
                <span className="material-symbols-outlined text-brand-primary group-hover:text-white text-3xl">bolt</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Nhanh & Tốt</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Thích ứng linh hoạt, tối ưu quy trình để mang lại hiệu quả trong thời gian ngắn nhất.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white" id="dich-vu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Giải pháp toàn diện</h2>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Hệ Sinh Thái Dịch Vụ</h2>
            <p className="text-gray-500 text-xl max-w-3xl mx-auto font-medium">Bộ giải pháp công nghệ tiên phong giúp doanh nghiệp bứt phá mọi giới hạn trong kỷ nguyên số.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative bg-brand-surface rounded-[3rem] p-12 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100">
              <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                <div className="w-24 h-24 bg-brand-primary rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl shadow-brand-primary/20">
                  <span className="material-symbols-outlined text-white text-5xl">cloud_done</span>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold mb-6 text-brand-dark">Hạ tầng số</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">Nền tảng Cloud Computing & Data Center chuẩn quốc tế, bảo vệ doanh nghiệp với các giải pháp an ninh mạng tối tân nhất.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <span className="material-symbols-outlined text-brand-primary text-xl">check_circle</span> Hybrid Cloud
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <span className="material-symbols-outlined text-brand-primary text-xl">check_circle</span> Security Audit
                    </div>
                  </div>
                  <a className="inline-flex items-center gap-2 text-brand-primary font-extrabold group/link" href="#">
                    Xem chi tiết <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative bg-brand-surface rounded-[3rem] p-12 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100">
              <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                <div className="w-24 h-24 bg-brand-accent rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl shadow-brand-accent/20">
                  <span className="material-symbols-outlined text-white text-5xl">developer_mode</span>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold mb-6 text-brand-dark">Giải pháp phần mềm</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">May đo hệ thống ERP, CRM và Mobile App tối ưu cho quy trình đặc thù của từng doanh nghiệp.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <span className="material-symbols-outlined text-brand-accent text-xl">check_circle</span> Custom ERP
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <span className="material-symbols-outlined text-brand-accent text-xl">check_circle</span> UI/UX Design
                    </div>
                  </div>
                  <a className="inline-flex items-center gap-2 text-brand-accent font-extrabold group/link" href="#">
                    Xem chi tiết <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative bg-brand-surface rounded-[3rem] p-12 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100">
              <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                <div className="w-24 h-24 bg-emerald-500 rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl shadow-emerald-500/20">
                  <span className="material-symbols-outlined text-white text-5xl">school</span>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold mb-6 text-brand-dark">EdTech</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">Mang tri thức đến mọi nơi bằng công nghệ. Nền tảng LMS và AI tương tác giúp cá nhân hóa lộ trình học tập.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span> LMS Platforms
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span> AI Tutoring
                    </div>
                  </div>
                  <a className="inline-flex items-center gap-2 text-emerald-500 font-extrabold group/link" href="#">
                    Xem chi tiết <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative bg-brand-surface rounded-[3rem] p-12 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100">
              <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                <div className="w-24 h-24 bg-indigo-600 rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl shadow-indigo-600/20">
                  <span className="material-symbols-outlined text-white text-5xl">movie_edit</span>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold mb-6 text-brand-dark">Media & DIY</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">Sản xuất nội dung số và phát triển cộng đồng đam mê công nghệ thông qua các giải pháp sáng tạo tự làm.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <span className="material-symbols-outlined text-indigo-600 text-xl">check_circle</span> Content Production
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <span className="material-symbols-outlined text-indigo-600 text-xl">check_circle</span> Tech Workshops
                    </div>
                  </div>
                  <a className="inline-flex items-center gap-2 text-indigo-600 font-extrabold group/link" href="#">
                    Xem chi tiết <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-6xl font-extrabold text-brand-primary">10+</div>
              <div className="text-blue-200 text-sm font-bold uppercase tracking-widest">Năm kinh nghiệm</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-extrabold text-brand-primary">500+</div>
              <div className="text-blue-200 text-sm font-bold uppercase tracking-widest">Dự án hoàn tất</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-extrabold text-brand-primary">100+</div>
              <div className="text-blue-200 text-sm font-bold uppercase tracking-widest">Chuyên gia IT</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-extrabold text-brand-primary">50+</div>
              <div className="text-blue-200 text-sm font-bold uppercase tracking-widest">Đối tác toàn cầu</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white" id="lanh-dao">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Tầm nhìn chiến lược</h2>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Đội Ngũ Lãnh Đạo</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">Sự kết hợp giữa tư duy đổi mới và bề dày kinh nghiệm, đưa AHV vươn tầm quốc tế.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group">
              <div className="relative mb-8 rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-brand-surface shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img alt="Ông Nguyễn Văn A" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj_ByOE6ZvZGuMCQloBNfxTH7aYOU-YjsAzPb29HJkYBgsCyWJCHIwzbWD_rRmu1zS6ntfKYtLktZS-TIob2VXgo7lG2m7j2K2fXTHPxmv9udQrwjP-e-idgNv-JK3v_XNR0vL0rrI_dAm3EDh3BY6EbrWzgDYbwrhktBEPqOTpX33yQhpb1SOUKM3Kl0c89SA3ecBBIB-g3OSDS-op3LmClj6Dk_OwbPimigX07l9vNqpv9FDtDT0Xxi41zGUV5heBnwKEVkjJI4" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <a className="w-10 h-10 bg-white text-brand-primary rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
                  <a className="w-10 h-10 bg-white text-brand-primary rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">link</span></a>
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-extrabold text-brand-dark mb-1">Ông Nguyễn Văn A</h3>
                <p className="text-brand-primary font-bold uppercase text-[10px] tracking-widest mb-3">Chủ tịch HĐQT</p>
                <p className="text-gray-500 text-sm font-medium line-clamp-2">Chuyên gia chiến lược với hơn 15 năm kinh nghiệm dẫn dắt các tập đoàn công nghệ lớn.</p>
              </div>
            </div>
            <div className="group">
              <div className="relative mb-8 rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-brand-surface shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img alt="Bà Trần Thị B" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsHtqyVUAB6wG2xQXl2wxsyHt9WIIhTgYHQU_iC_GmVF4pV2inYpXD_RKQrTgnH9FggPd934NHC9H04FPJ3o0ojdWt9JOnSFZXAwjw3467_UdswnHRKGjM_6rXLPKkstqVF3O1C4unSYjUkBBIHsC7DTXqRgXYpR9PzOwwv4Q87LbXbDzmykBnwI8hUxVWKy2fzpdDQsdUOejDSMLuexEeSjMNkBXtD-Y805VqDrhHXB_XKIHlI6Y0ye2B-uKJTZLQlTZZJ3Jjq40" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <a className="w-10 h-10 bg-white text-brand-primary rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
                  <a className="w-10 h-10 bg-white text-brand-primary rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">link</span></a>
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-extrabold text-brand-dark mb-1">Bà Trần Thị B</h3>
                <p className="text-brand-primary font-bold uppercase text-[10px] tracking-widest mb-3">Giám đốc Công nghệ</p>
                <p className="text-gray-500 text-sm font-medium line-clamp-2">Tiên phong trong việc ứng dụng AI và Blockchain vào các giải pháp doanh nghiệp thực tiễn.</p>
              </div>
            </div>
            <div className="group">
              <div className="relative mb-8 rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-brand-surface shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img alt="Ông Lê Văn C" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYq25FBiho0lbkT5Sn7hnLsYIXp9QBsCws33bHsLufMqIO0WedrFe-4uFhz3s4drQPd2HCb-E6tEjAbc06OMYpEaUV39YoiYZ-8U0HdXncxoaqGw-NJiXBYDKhCGB2EMUKbpjQzJ_3Nb3Nn1DFSgMEcw3vmLp60FmU9vQdMMr4xRpPlGilQdk7B-qJeA01a0pFmWudA1mJiHoNSih2mhNzNL3CPwtgP-vPoY_8Y2ToGne0Rz36n2zuDf9ICelB0j2qTYgYZTnUNWE" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <a className="w-10 h-10 bg-white text-brand-primary rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
                  <a className="w-10 h-10 bg-white text-brand-primary rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">link</span></a>
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-extrabold text-brand-dark mb-1">Ông Lê Văn C</h3>
                <p className="text-brand-primary font-bold uppercase text-[10px] tracking-widest mb-3">Giám đốc Vận hành</p>
                <p className="text-gray-500 text-sm font-medium line-clamp-2">Tối ưu hóa quy trình vận hành Agile, đảm bảo hiệu suất tối đa cho toàn bộ hệ sinh thái.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-surface overflow-hidden" id="cam-nhan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Cảm nhận khách hàng</h2>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">What people say about us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-blue-50/50">
              <div className="flex gap-1 mb-6 text-brand-accent">
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
              </div>
              <p className="text-gray-600 font-medium italic mb-8 leading-relaxed">
                "Hệ sinh thái của AHV thực sự thay đổi cách chúng tôi vận hành. Giải pháp Cloud và ERP may đo giúp tối ưu hóa 30% chi phí vận hành chỉ sau 6 tháng."
              </p>
              <div className="flex items-center gap-4">
                <img alt="User 1" className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAboutgWeZV7gOPcBGChw6v6hxq71ZbpgZA6etF7kmYkJb3HLwgkMauOxUWJre13P9dQjiB76KHHylqxPJNjZwTpJK_gmtngZUMjzfYiTibIIQc97bbqx12zVd70yPyq3xi3SfDekj5rYaj4TG566vrj3iAO9pm8YE9fbYDCLHLLBR9Ys28E47sPXvxT-o_rG8zUKL6riXkbBPdAuSzOAExcHPokBQXdOg2Acnvl4pGGzagMC760wYsYFqTZzj-s-7maSHekSRPDw" />
                <div>
                  <h4 className="font-bold text-brand-dark text-lg leading-tight">Hoàng Nam</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">CEO, TechCore Vietnam</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-blue-50/50">
              <div className="flex gap-1 mb-6 text-brand-accent">
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
              </div>
              <p className="text-gray-600 font-medium italic mb-8 leading-relaxed">
                "Đội ngũ kỹ thuật của AHV rất chuyên nghiệp và nhanh nhẹn. Họ không chỉ bán sản phẩm mà còn đồng hành như một đối tác chiến lược thực thụ."
              </p>
              <div className="flex items-center gap-4">
                <img alt="User 2" className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo504Y7ZeFNcmp5n_qqpzMoU_6aOZOno-NuB9d88LSXpDS8CyIJTurSqKW8VrQ3hU7fwSHaVei06ZW2tV4EeE1_Ggrux2lLpKj-v01RT9AHDld_jce4KVSn9Xbpr-4ZwarqN48ACtBxjviofqBo9qkV9jH3pVm8x3y89q8O5fZ_GYIu92fAAGLCxfbJwGHLUwloUyCGWbPgEccvftCUoWvK6kMcyu8vqYbbykZPwdZ-35MS4SMly82cFF2LQ5ZSH-ZaxnlAdG0mTw" />
                <div>
                  <h4 className="font-bold text-brand-dark text-lg leading-tight">Minh Anh</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">CTO, EduSmart</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-blue-50/50">
              <div className="flex gap-1 mb-6 text-brand-accent">
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
                <span className="material-symbols-outlined fill-current text-sm">star</span>
              </div>
              <p className="text-gray-600 font-medium italic mb-8 leading-relaxed">
                "Tôi đánh giá cao triết lý 'Tử tế' của AHV. Sự minh bạch trong quy trình giúp chúng tôi hoàn toàn yên tâm khi triển khai các dự án quy mô lớn."
              </p>
              <div className="flex items-center gap-4">
                <img alt="User 3" className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC515wQqupYd08O13v8cSNzrmj1JJdCt8Ujdb8v8krxfjp2BGDw05jMCxa8GTz556zvUi2Rnn9QUpv7MknUdSqQ3QZ1qG8k_stcVfvqw7xcfN5IympYYZjCoWLrz1s064_WZcATthsaB5v29Vw8v3ZJgV0o50xHCIv2NJhCXr0A6f8Q0kR7Tut0Lbvaq1B9_qHZIdI90vIFfqn6efjJCKYueM0QJlL2zZceAQsUeqMkfMKSwyy7iGLrpfzG4R3mmHCVZXr0B7GHavc" />
                <div>
                  <h4 className="font-bold text-brand-dark text-lg leading-tight">Văn Đức</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Director, Global Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white" id="tin-tuc">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Inside AHV</h2>
              <div className="h-1.5 w-24 bg-brand-accent rounded-full mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">Tin tức & Sự kiện</h2>
            </div>
            <a className="inline-flex items-center gap-2 text-brand-primary font-bold group" href="#">
              Xem tất cả bài viết
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-brand-surface rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-video">
                <img alt="News 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU_WYaBlluXOI6d72Z9PA9Gvm_XFIAOO9Wbc9cNq9jOt4tsrGHJBWogBkcdlSBmW_YWNqvMzxfCrAH0vKX0TQmvztleuLD3oT5vD--6t9P9GaXlE5poMfRsaBR-AdhWQpK5VuCtatLD-T3Pu15ZO0dYS3EkbN9W6-uKiXwWF2Zc8VBEcj_g9M62AqSDRfa4EmlvTA_sajSQLAwNer6SiANaGaCl41IGFUZCXb4p0qxDaXK25Nc4thkMfprkYtg8Ehib7fmF6l1Np8" />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                  Công nghệ
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="text-gray-400 font-bold text-[11px] flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-sm">calendar_today</span> 20/10/2023
                </div>
                <h3 className="text-xl font-extrabold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug mb-3">
                  AHV Holding ra mắt nền tảng Cloud thế hệ mới</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3 mb-4">Nền tảng mới mang lại khả năng xử lý dữ liệu vượt trội và tính bảo mật tuyệt đối cho doanh nghiệp hiện đại...</p>
                <a className="inline-flex items-center gap-1 text-brand-primary font-extrabold text-sm group/btn" href="#">
                  Đọc tiếp <span className="material-symbols-outlined text-lg transition-all group-hover/btn:translate-x-1">chevron_right</span>
                </a>
              </div>
            </div>
            <div className="group bg-brand-surface rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-video">
                <img alt="News 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMLbyUeethtGYzj_kMWEpQpPi6bF9A1Po3viSR4Wcovu4f3_5TYuXfzjdZ2krOwGk_Dhc-TluwsAsGoJnUgXVIBAZ_0zIPVrp5NUtT8mXY0EHDadjBUBlF1rqQjWhD-Eo8RLVFZyILpDhfV92pA6BrQg-1Dmgb_4pjORx5t_4UFlwZfOrzVnAO8NAFoNl7Ugx4MR6oDKV-HBnwocU-XyHC-dgdD04GEr7PFx7cwGY4CNxoi4pMLUAaOBMst79shp0eh7ptEEqBeQ" />
                <div className="absolute top-4 left-4 bg-brand-accent text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                  Sự kiện
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="text-gray-400 font-bold text-[11px] flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-sm">calendar_today</span> 15/10/2023
                </div>
                <h3 className="text-xl font-extrabold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug mb-3">
                  Hội thảo "Chuyển đổi số 2024: Tầm nhìn & Thách thức"</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3 mb-4">Quy tụ các chuyên gia hàng đầu thảo luận về tương lai của AI và Blockchain tại thị trường Việt Nam...</p>
                <a className="inline-flex items-center gap-1 text-brand-primary font-extrabold text-sm group/btn" href="#">
                  Đọc tiếp <span className="material-symbols-outlined text-lg transition-all group-hover/btn:translate-x-1">chevron_right</span>
                </a>
              </div>
            </div>
            <div className="group bg-brand-surface rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-video">
                <img alt="News 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEoff4ODa2OyBu99kJF1FNT5wWuFP8vtJAZcLhiVJGJgpbBWxVZDL-hArbAgqjKXkhNayoE6j09nFPr1fnHlMNiQU5OMLz5KOnzHNzzNaZsMp-3fLmhY9nYtqi8YeV4OR8jfb77DJwQ69nf5Wsu44pa6Ffph8D9xTJUJtExxCNsur-tZBtxY41stRqef4FUd2KnubfBuboJtY4WdwjA0nPoKTui1kLMUsxnF3H0pbIiTePfa9VJWQ7b6MiVpQK3sDOdc5enn0wZ_Y" />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                  Văn hóa
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="text-gray-400 font-bold text-[11px] flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-sm">calendar_today</span> 10/10/2023
                </div>
                <h3 className="text-xl font-extrabold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug mb-3">
                  Tại sao AHV là môi trường làm việc đáng mơ ước?</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3 mb-4">Khám phá văn hóa làm việc sáng tạo, chuyên nghiệp và đầy cơ hội bứt phá tại AHV Holding...</p>
                <a className="inline-flex items-center gap-1 text-brand-primary font-extrabold text-sm group/btn" href="#">
                  Đọc tiếp <span className="material-symbols-outlined text-lg transition-all group-hover/btn:translate-x-1">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-surface overflow-hidden" id="tuyen-dung">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-6">Career Opportunities</h2>
              <div className="h-1.5 w-24 bg-brand-accent rounded-full mb-6"></div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-8 leading-[1.1]">
                Gia nhập đội ngũ <br /><span className="text-brand-primary">AHV Holding</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                Chúng tôi không chỉ tuyển dụng nhân tài, chúng tôi tìm kiếm cộng sự cùng chung chí hướng kiến tạo giá trị tốt đẹp. Tại AHV, bạn được tự do sáng tạo và là chính mình.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-8 rounded-[2rem] border border-blue-50">
                  <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <span className="material-symbols-outlined text-brand-primary">psychology</span>
                  </div>
                  <h4 className="font-extrabold text-brand-dark mb-2">Môi trường Agile</h4>
                  <p className="text-gray-500 text-sm font-medium">Quy trình hiện đại, linh hoạt và không ngừng sáng tạo.</p>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-blue-50">
                  <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <span className="material-symbols-outlined text-brand-primary">trending_up</span>
                  </div>
                  <h4 className="font-extrabold text-brand-dark mb-2">Lộ trình rõ ràng</h4>
                  <p className="text-gray-500 text-sm font-medium">Chính sách đào tạo và phát triển năng lực được ưu tiên hàng đầu.</p>
                </div>
              </div>
              <a className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-extrabold hover:bg-brand-dark transition shadow-xl shadow-brand-primary/20 inline-block" href="/careers">Khám phá tất cả vị trí</a>
            </div>
            <div className="space-y-4">
              <div className="group bg-white p-8 rounded-[2.5rem] border-2 border-transparent hover:border-brand-primary hover:shadow-2xl transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h4 className="font-extrabold text-xl text-brand-dark group-hover:text-brand-primary transition-colors">Senior Backend Developer</h4>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-brand-surface px-3 py-1.5 rounded-full">
                      <span className="material-symbols-outlined text-xs">location_on</span> Hà Nội
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-brand-surface px-3 py-1.5 rounded-full">
                      <span className="material-symbols-outlined text-xs">schedule</span> Toàn thời gian
                    </span>
                  </div>
                </div>
                <button className="bg-brand-surface group-hover:bg-brand-primary group-hover:text-white p-4 rounded-2xl transition-all duration-300 shadow-sm border-0">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="group bg-white p-8 rounded-[2.5rem] border-2 border-transparent hover:border-brand-primary hover:shadow-2xl transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h4 className="font-extrabold text-xl text-brand-dark group-hover:text-brand-primary transition-colors">UI/UX Designer</h4>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-brand-surface px-3 py-1.5 rounded-full">
                      <span className="material-symbols-outlined text-xs">location_on</span> Thái Nguyên
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-brand-surface px-3 py-1.5 rounded-full">
                      <span className="material-symbols-outlined text-xs">schedule</span> Toàn thời gian
                    </span>
                  </div>
                </div>
                <button className="bg-brand-surface group-hover:bg-brand-primary group-hover:text-white p-4 rounded-2xl transition-all duration-300 shadow-sm border-0">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="group bg-white p-8 rounded-[2.5rem] border-2 border-transparent hover:border-brand-primary hover:shadow-2xl transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h4 className="font-extrabold text-xl text-brand-dark group-hover:text-brand-primary transition-colors">IT Project Manager</h4>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-brand-surface px-3 py-1.5 rounded-full">
                      <span className="material-symbols-outlined text-xs">location_on</span> Hà Nội
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-brand-surface px-3 py-1.5 rounded-full">
                      <span className="material-symbols-outlined text-xs">schedule</span> Toàn thời gian
                    </span>
                  </div>
                </div>
                <button className="bg-brand-surface group-hover:bg-brand-primary group-hover:text-white p-4 rounded-2xl transition-all duration-300 shadow-sm border-0">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
