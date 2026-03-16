"use client";

import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
    window.addEventListener("DOMContentLoaded", reveal);
    
    // Initial call
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("DOMContentLoaded", reveal);
    };
  }, []);

  return (
    <main>
      {/* Improved Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden py-24 lg:py-32 hero-gradient">
        {/* Sophisticated Futuristic Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] animate-pulse">
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]">
          </div>
          <img alt="Abstract Tech" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-[0.03] dark:opacity-[0.05]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjm2RiTJ5jvRRHnT2DTj3F8coVg9D3fghSNU3KfuIh_wRNXiRFq-mKhSZTM61DLfd67HhZGef0L59jQqRcHZYedSzy5Mn2V06WQok9ACSpR7Mgm0lFWIFA5ca8NSI8XFSOb0ew3InZv0nuYSxVvwksnzQYOVPZz-3iiGPeh2PXaamlcUDo0VAbMcTQXVI2kAUMKCbxCNnNXntc5emPCtgud44AckOUxhbG76rHGwZzwAgXRnoJBo4uXRIzeh1xgPXGr3kWcMlMK0Y" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="reveal reveal-up inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-brand-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Hệ sinh thái công nghệ
          </div>
          <h1 className="reveal reveal-up delay-100 text-6xl lg:text-8xl font-black tracking-tighter mb-10 max-w-5xl mx-auto leading-[0.95] text-slate-900 dark:text-white">
            Kiến tạo tương lai <span className="text-brand-primary italic">bền vững</span>
          </h1>
          <p className="reveal reveal-up delay-200 text-xl lg:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            Hệ sinh thái đa ngành tích hợp các giải pháp số tiên phong, thúc đẩy
            sự thịnh vượng thông qua công nghệ và đổi mới sáng tạo.
          </p>
          <div className="reveal reveal-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/30 transition-all hover:-translate-y-1">
              Khám phá ngay
            </button>
            <button className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Xem dự án
            </button>
          </div>
        </div>
      </section>

      {/* Redesigned Service Cards Section */}
      <section className="py-32 bg-white dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal reveal-up mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Dịch Vụ Chiến Lược
              </h2>
              <div className="h-1.5 w-24 bg-brand-accent rounded-full mb-6"></div>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Chúng tôi cung cấp các giải pháp toàn diện từ hạ tầng đến ứng
                dụng người dùng cuối.
              </p>
            </div>
            <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800 hidden lg:block mb-6 mx-10"></div>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md lg:mb-4">
              Tối ưu hóa vận hành và mở rộng khả năng tiếp cận thị trường với bộ
              giải pháp toàn diện.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Hạ tầng số */}
            <div className="reveal reveal-scale delay-100 group glass-card p-10 rounded-[2.5rem] hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:-translate-y-4">
              <div className="w-16 h-16 rounded-2xl bg-brand-accent flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-4xl">cloud_done</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 dark:text-white text-brand-accent">
                Hạ tầng số
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 font-medium">
                Cloud &amp; Server performance tối ưu, bảo mật đa lớp và khả
                năng mở rộng không giới hạn cho doanh nghiệp.
              </p>
              <a className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all" href="#">
                Xem thêm
                <span className="material-symbols-outlined text-lg">east</span>
              </a>
            </div>
            {/* Card 2: Giải pháp phần mềm */}
            <div className="reveal reveal-scale delay-200 group glass-card p-10 rounded-[2.5rem] hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:-translate-y-4">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-4xl">developer_mode</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-brand-primary dark:text-white">
                Giải pháp phần mềm
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 font-medium">
                Phát triển Mobile &amp; Web chuyên nghiệp, tập trung vào trải
                nghiệm người dùng (UX) và hiệu năng xử lý.
              </p>
              <a className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all" href="#">
                Xem thêm
                <span className="material-symbols-outlined text-lg">east</span>
              </a>
            </div>
            {/* Card 3: EdTech */}
            <div className="reveal reveal-scale delay-300 group glass-card p-10 rounded-[2.5rem] hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:-translate-y-4">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-4xl">school</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-emerald-500 dark:text-white">
                EdTech
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 font-medium">
                Nền tảng giáo dục thông minh và đào tạo công nghệ, thu hẹp
                khoảng cách giữa lý thuyết và thực tiễn.
              </p>
              <a className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all" href="#">
                Xem thêm
                <span className="material-symbols-outlined text-lg">east</span>
              </a>
            </div>
            {/* Card 4: Media & DIY Studio */}
            <div className="reveal reveal-scale delay-400 group glass-card p-10 rounded-[2.5rem] hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:-translate-y-4">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-4xl">movie_edit</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-indigo-600 dark:text-white">
                Media Studio
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 font-medium">
                Sáng tạo nội dung số chất lượng cao, từ video marketing đến các
                sản phẩm truyền thông đa phương tiện.
              </p>
              <a className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all" href="#">
                Xem thêm
                <span className="material-symbols-outlined text-lg">east</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="reveal reveal-up">
              <div className="text-6xl font-black mb-3">10+</div>
              <div className="text-white/70 font-bold uppercase tracking-widest text-xs">
                Năm kinh nghiệm
              </div>
            </div>
            <div className="reveal reveal-up delay-100">
              <div className="text-6xl font-black mb-3">500+</div>
              <div className="text-white/70 font-bold uppercase tracking-widest text-xs">
                Dự án hoàn thành
              </div>
            </div>
            <div className="reveal reveal-up delay-200">
              <div className="text-6xl font-black mb-3">200+</div>
              <div className="text-white/70 font-bold uppercase tracking-widest text-xs">
                Đối tác toàn cầu
              </div>
            </div>
            <div className="reveal reveal-up delay-300">
              <div className="text-6xl font-black mb-3">50+</div>
              <div className="text-white/70 font-bold uppercase tracking-widest text-xs">
                Chuyên gia cốt cán
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="reveal reveal-scale max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80')] bg-cover opacity-10">
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 to-transparent"></div>
          <div className="relative z-10 p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Gia nhập hệ sinh thái công nghệ hàng đầu
              </h2>
              <p className="text-slate-300 text-xl font-light mb-10">
                Cùng AHV Holding xây dựng những giá trị mới bền vững và thịnh
                vượng thông qua sức mạnh của công nghệ.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-primary/40 transition-all hover:-translate-y-1">
                  Hợp tác ngay
                </button>
                <button className="bg-white/10 text-white backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            <div className="hidden lg:block w-1/3 aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img alt="Collaboration" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6KnF84VoGjn464WVMQW0x9DSOWJztvvBszqtzeD6FWnjKp4byvKc9TBifsUtDuVSOb-VCbYNkvaRddQA_BkoWeRiTV2wV1MXzOrqkdIQKN4OKou1_LTY9RVZeQ1NS7iMjuVoCc34lV1O_AVkS5dodAJBrPwPwiZ_Sg8xGy8A_XvqywUvS2JdqBgCWQetoNwkvW75V06M09wxmY18_wjdLocIODl_bjM_OmTzpD-8KUfQNXVpzE6rfWsCkAJwNMA_hIIWJoAz4Sgc" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
