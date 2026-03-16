export default function Careers() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-background-dark py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary shadow-sm">
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                Sự nghiệp tại AHV
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
                Gia nhập đội ngũ <br /><span className="text-brand-primary">AHV Holding</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
                Cùng chúng tôi xây dựng tương lai công nghệ bền vững. Khám phá
                cơ hội nghề nghiệp và phát triển bản thân trong môi trường
                sáng tạo, nơi mọi ý tưởng đều được tôn trọng.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="rounded-xl bg-brand-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-primary/25 transition-all hover:-translate-y-1"
                   href="#positions">
                  Xem vị trí đang tuyển
                </a>
                <a className="rounded-xl border-2 border-slate-200 dark:border-slate-800 px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
                   href="#why-us">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -right-20 -top-20 size-80 rounded-full bg-brand-primary/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-brand-accent/20 blur-3xl"></div>
              <div className="relative rounded-2xl bg-slate-100 p-2 shadow-2xl">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-cover bg-center"
                     style={{
                       backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRTRePHlCsZSObwgdIEh4H_2KtW8sXS6r5WyRPyToCdLvu1LAmHSA1i4KXDh04ez76YUpv1ICIikCxbWTbfzous2XeL7bJJC6Z6TqSuiOAzELGYYfAM4hqmiypWe_-Efl4w1u004P1XZrnfAtpIsM77flusZjXXntPpaKFPqTXSGG2nrI99OxDIhZWusJpqY0KWei9FCpmifX6XPGJPzM0vZerqiS38L4sGUK-DrDEU6z3LPcfj_cjOxoIga4oFRSANPWu7mYvdcg')"
                     }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us / Core Values Section */}
      <section className="bg-background-light dark:bg-slate-900 py-24" id="why-us">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-16 inline-block rounded-lg bg-brand-accent/10 px-6 py-4 text-md font-bold text-brand-primary">
            Tại sao chọn AHV Holding?
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Value 1 */}
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-brand-primary/10 hover:-translate-y-2 relative flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl">energy_savings_leaf</span>
              </div>
              <h3 className="text-xl font-bold">Môi trường Startup</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-4">
                Năng động, sáng tạo và không ngừng bứt phá. Chúng tôi thúc đẩy
                tinh thần dám nghĩ dám làm và luôn đón đầu xu hướng công nghệ.
              </p>
            </div>
            {/* Value 2 */}
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-brand-primary/10 hover:-translate-y-2 relative flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl">trending_up</span>
              </div>
              <h3 className="text-xl font-bold">Phát triển bản thân</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-4">
                Lộ trình thăng tiến rõ ràng và đào tạo chuyên sâu. Bạn sẽ được
                làm việc cùng các chuyên gia hàng đầu và tham gia các dự án
                thực tế.
              </p>
            </div>
            {/* Value 3 */}
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-brand-primary/10 hover:-translate-y-2 relative flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl">card_giftcard</span>
              </div>
              <h3 className="text-xl font-bold">Phúc lợi hấp dẫn</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-4">
                Mức lương cạnh tranh, thưởng dự án, bảo hiểm cao cấp và các
                hoạt động teambuilding sôi nổi hàng quý.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="bg-white dark:bg-background-dark py-24" id="positions">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Vị trí đang tuyển dụng
              </h2>
              <p className="mt-2 text-slate-500">
                Khám phá cơ hội mới để bứt phá cùng chúng tôi.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="rounded-full border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                Kỹ thuật
              </div>
              <div className="rounded-full border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                Thiết kế
              </div>
              <div className="rounded-full border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                Quản lý
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Job 1 */}
            <div className="group hover:shadow-2xl transition-all flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:border-brand-primary/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 md:flex-row md:items-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold group-hover:text-brand-primary transition-colors">
                    Senior Backend Developer
                  </h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase text-green-700">
                    Full-time
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    Hồ Chí Minh
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">payments</span>
                    $2,500 - $4,000
                  </div>
                </div>
              </div>
              <button className="rounded-xl bg-brand-primary/10 px-6 py-3 text-sm font-bold text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white">
                Ứng tuyển ngay
              </button>
            </div>
            
            {/* Job 2 */}
            <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:shadow-2xl transition-all hover:border-brand-primary/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 md:flex-row md:items-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold group-hover:text-brand-primary transition-colors">
                    UI/UX Designer
                  </h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase text-green-700">
                    Full-time
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    Remote
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">payments</span>
                    $1,500 - $2,500
                  </div>
                </div>
              </div>
              <button className="rounded-xl bg-brand-primary/10 px-6 py-3 text-sm font-bold text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white">
                Ứng tuyển ngay
              </button>
            </div>
            
            {/* Job 3 */}
            <div className="group hover:shadow-2xl transition-all flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:border-brand-primary/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 md:flex-row md:items-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold group-hover:text-brand-primary transition-colors">
                    IT Project Manager
                  </h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase text-blue-700">
                    Contract
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    Đà Nẵng
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">payments</span>
                    Thỏa thuận
                  </div>
                </div>
              </div>
              <button className="rounded-xl bg-brand-primary/10 px-6 py-3 text-sm font-bold text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white">
                Ứng tuyển ngay
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-500">
              Không tìm thấy vị trí phù hợp?
              <a className="ml-1 font-bold text-brand-primary hover:underline" href="#">Gửi CV cho chúng tôi</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-light dark:bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-brand-primary p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Bạn đã sẵn sàng để kiến tạo tương lai?
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Hãy để tài năng của bạn được tỏa sáng tại AHV Holding. Chúng tôi
              luôn chào đón những cộng sự đầy nhiệt huyết.
            </p>
            <button className="mt-10 rounded-full bg-white px-10 py-4 text-base font-bold text-brand-primary transition-all hover:scale-105 active:scale-95">
              Gửi hồ sơ ngay
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
