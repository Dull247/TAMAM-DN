// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    updateLanguage(currentLang);
    setupWizard();
    setupScrollReveal();
    setupSpotlights();
    setupParallax();
    setupRipples();
    setupTilt();
    setupUXEnhancements();
});

// --- Data Dictionary ---
const content = {
    ar: {
        skip: "انتقل للمحتوى",
        brand: "تمامك دن",
        tagline: "مختصون في الخدمات العامة",
        nav: { home: "الرئيسية", services: "خدماتنا", about: "من نحن", why_us: "لماذا نحن", contact: "تواصل معنا", langBtn: "English", cta: "ابدأ الطلب" },
        hero: {
            h1_1: "خدمات عامة احترافية",
            h1_2: "يمكنك الوثوق بها",
            p: "ننجز معاملاتك الحكومية والتجارية بدقة وسرعة. شريكك المعتمد في الطائف.",
            cta_primary: "اطلب خدمتك الآن",
            cta_secondary: "ملفنا الرقمي",
            stat1: { val: "+5", label: "سنوات خبرة" },
            stat2: { val: "24/7", label: "خدمة سريعة" },
            stat3: { val: "100%", label: "موثوقية" }
        },
        services: {
            title: "خدماتنا المتميزة",
            subtitle: "حلول متكاملة لجميع احتياجاتك",
            cards: [
                { title: "الخدمات العامة", desc: "تعقيب وتخليص معاملات في جميع الدوائر الحكومية.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop" },
                { title: "خدمات الأعمال", desc: "تأسيس الشركات، إصدار الرخص، وفتح الملفات.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop" },
                { title: "منصة قوى ومدد", desc: "إدارة العقود، الرواتب، والالتزام الوظيفي.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
                { title: "الجوازات والمرور", desc: "إصدار وتجديد الإقامات، الرخص، ونقل الملكية.", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop" },
                { title: "الاستقدام", desc: "مساند، تفويض تأشيرات، وعقود العمالة.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop" },
                { title: "خدمات أخرى", desc: "حجز مواعيد، تسجيل في الجامعات، وكل ما تحتاجه.", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop" }
            ]
        },
        wizard: {
            title: "اختر خدمتك",
            subtitle: "حدد ما تحتاجه من القائمة أدناه",
            step_label: "الخطوة",
            step_of: "من",
            details_label: "التفاصيل (اختياري)",
            step1_q: "مرحباً 👋، أي نوع من الخدمات تبحث عنه اليوم؟",
            step2_q: "اختيار ممتاز! 🌟 هل يمكنك تزويدنا ببعض التفاصيل الإضافية؟",
            step3_q: "رائع! طلبك جاهز للإرسال 🚀",
            placeholder: "اكتب تفاصيل طلبك هنا... (على سبيل المثال: تجديد إقامة لمؤسسة مقاولات)",
            btn: "إرسال إلى واتساب",
            btn_loading: "جاري الإرسال...",
            back: "رجوع",
            next: "التالي",
            cats: ["خدمات عامة", "عمالة وتأشيرات", "سجلات ورخص", "أبشر ونفاذ"]
        },
        about: {
            title: "من نحن",
            desc: "نحن مؤسسة 'تمامك دن'، فريق من المختصين في الخدمات العامة والتعقيب. نسعى لتقديم تجربة سلسة وموثوقة لعملائنا، موفرين عليهم الوقت والجهد في إنهاء إجراءاتهم الحكومية.",
            badge: "معتمدون"
        },
        why_us: {
            title: "لماذا تختار تمامك دن؟",
            features: [
                { title: "سرعة وإنجاز", desc: "نلتزم بأعلى معايير السرعة في تنفيذ الطلبات.", icon: "zap" },
                { title: "أمان وخصوصية", desc: "بياناتك ومعاملاتك في أيدٍ أمينة 100%.", icon: "shield-check" },
                { title: "أسعار منافسة", desc: "نقدم أفضل قيمة مقابل خدمة احترافية.", icon: "coins" },
                { title: "100%", desc: "رضا العملاء وضمان الإنجاز", icon: "logo", isImage: true }
            ]
        },
        contact: {
            title: "معلومات التواصل",
            address: "الطائف - بجانب مجمع جمانة الطبي",
            phone: "0573806638",
            phone_hint: "تواصل عبر واتساب",
            hours: "نخدمكم على مدار الساعة",
            rights: "جميع الحقوق محفوظة © 2026 تمامك دن",
            profile_btn: "زيارة ملفنا الرقمي"
        }
    },
    en: {
        skip: "Skip to content",
        brand: "Tamamak Dn",
        tagline: "Professional General Services",
        nav: { home: "Home", services: "Services", about: "About", why_us: "Why Us", contact: "Contact", langBtn: "عربي", cta: "Start Request" },
        hero: {
            h1_1: "Professional Services",
            h1_2: "You Can Trust",
            p: "We handle your government and business transactions with precision and speed. Your trusted partner in Taif.",
            cta_primary: "Request Now",
            cta_secondary: "Digital Profile",
            stat1: { val: "5+", label: "Years Exp." },
            stat2: { val: "24/7", label: "Fast Service" },
            stat3: { val: "100%", label: "Reliability" }
        },
        services: {
            title: "Premium Services",
            subtitle: "Integrated solutions for all your needs",
            cards: [
                { title: "General Services", desc: "Processing transactions in all government departments.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop" },
                { title: "Business Services", desc: "Company formation, licenses, and file opening.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop" },
                { title: "Qiwa & Mudad", desc: "Contract management, payroll, and compliance.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
                { title: "Passports & Traffic", desc: "Iqama renewal, licenses, and transfers.", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop" },
                { title: "Recruitment", desc: "Musaned, visa authorization, and contracts.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop" },
                { title: "Other Services", desc: "Appointments, university registration, and more.", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop" }
            ]
        },
        wizard: {
            title: "Choose Your Service",
            subtitle: "Select what you need from the list below",
            step_label: "Step",
            step_of: "of",
            details_label: "Details (optional)",
            step1_q: "Hello 👋, what request can we help you with today?",
            step2_q: "Great choice! 🌟 Could you provide more details?",
            step3_q: "Awesome! Your request is ready to send 🚀",
            placeholder: "Type your request details here... (e.g., Iqama renewal for construction est.)",
            btn: "Send to WhatsApp",
            btn_loading: "Sending...",
            back: "Back",
            next: "Next",
            cats: ["General Services", "Visas & Labor", "Licenses", "Absher/Nafath"]
        },
        about: {
            title: "About Us",
            desc: "We are 'Tamamak Dn', a team of specialists in general services. We strive to provide a seamless and reliable experience, saving you time and effort in government procedures.",
            badge: "Certified"
        },
        why_us: {
            title: "Why Choose Us?",
            features: [
                { title: "Speed & Execution", desc: "We commit to the highest standards of speed.", icon: "zap" },
                { title: "Security & Privacy", desc: "Your data is 100% safe with us.", icon: "shield-check" },
                { title: "Competitive Prices", desc: "Best value for professional service.", icon: "coins" },
                { title: "100%", desc: "Customer Satisfaction Guaranteed", icon: "logo", isImage: true }
            ]
        },
        contact: {
            title: "Contact Info",
            address: "Taif - Next to Jumana Medical Complex",
            phone: "0573806638",
            phone_hint: "Contact via WhatsApp",
            hours: "Serving you 24/7",
            rights: "All rights reserved © 2026 Tamamak Dn",
            profile_btn: "Visit Digital Profile"
        }
    }
};

// --- State ---
let currentLang = 'ar';
let wizardData = { cat: '', details: '' };
let wizardStep = 0;

// --- Elements ---
const dom = {
    html: document.documentElement,
    langBtn: document.getElementById('lang-btn'),
    // other dynamic selections happen in functions
};

// --- Language Handling ---
function updateLanguage(lang) {
    currentLang = lang;
    const t = content[lang];
    const isAr = lang === 'ar';

    // HTML Attributes
    dom.html.lang = lang;
    dom.html.dir = isAr ? 'rtl' : 'ltr';
    dom.html.className = isAr ? 'font-arabic' : 'font-sans';

    // Text Updates
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = key.split('.').reduce((obj, k) => obj && obj[k], t);
        if (value) el.textContent = value;
    });

    // Re-render Services
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = t.services.cards.map((card, idx) => `
            <div class="reveal tilt-card group relative h-full" style="transition-delay: ${idx * 50}ms">
                <!-- Glare/Glow Effect -->
                <div class="tilt-glare absolute inset-0 bg-gradient-to-br from-saudi-400/20 to-gold-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10 translate-y-4"></div>
                
                <div class="glass-card bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/60 group-hover:border-saudi-200 shadow-sm group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                    <!-- Decor -->
                    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-saudi-100/50 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div class="relative z-10">
                        <div class="w-full h-40 mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500">
                            <img src="${card.image}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="${card.title}">
                        </div>
                        
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-saudi-700 transition-colors">${card.title}</h3>
                        <p class="text-slate-500 leading-relaxed text-sm mb-6 group-hover:text-slate-600">${card.desc}</p>
                    </div>
                    
                    <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span class="text-saudi-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            <span data-i18n="nav.cta">اطلب الخدمة</span>
                            <i data-lucide="arrow-left" class="w-4 h-4 rtl:rotate-0 ltr:rotate-180"></i>
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Re-render Why Us
    const whyUsGrid = document.getElementById('why-us-grid');
    if (whyUsGrid) {
        whyUsGrid.innerHTML = t.why_us.features.map((feat, idx) => `
            <div class="reveal flex gap-5 p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-saudi-100/50 transition-all duration-300 border border-transparent hover:border-saudi-50" style="transition-delay: ${idx * 100}ms">
                <div class="shrink-0 w-12 h-12 ${feat.isImage ? '' : 'bg-amber-50'} rounded-full flex items-center justify-center text-amber-600">
                    ${feat.isImage 
                        ? `<img src="LOGO.JPEG" class="w-12 h-12 object-contain rounded-full shadow-sm" alt="Logo">`
                        : `<i data-lucide="${feat.icon}" width="24"></i>`
                    }
                </div>
                <div>
                    <h4 class="font-bold text-lg text-slate-900 mb-1">${feat.title}</h4>
                    <p class="text-sm text-slate-500 leading-relaxed">${feat.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Wizard Categories
    const wizardCats = document.getElementById('wizard-cats');
    if (wizardCats) {
        wizardCats.innerHTML = t.wizard.cats.map(cat => `
            <button onclick="selectCategory('${cat}')" class="btn-ripple w-full text-start p-5 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-saudi-400 hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-saudi-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="flex items-center justify-between relative z-10">
                    <span class="font-bold text-lg text-slate-700 group-hover:text-saudi-800 transition-colors">${cat}</span>
                    <div class="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-saudi-500 group-hover:text-white group-hover:border-saudi-500 transition-all shadow-sm">
                        <i data-lucide="${isAr ? 'arrow-left' : 'arrow-right'}" class="w-5 h-5 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1"></i>
                    </div>
                </div>
            </button>
        `).join('');
    }

    // Update Placeholder
    const textarea = document.getElementById('wizard-details');
    if (textarea) textarea.placeholder = t.wizard.placeholder;

    lucide.createIcons();
    setupSpotlights();
    setupTilt();
}

// Global toggle function
window.toggleLanguage = () => {
    updateLanguage(currentLang === 'ar' ? 'en' : 'ar');
};

// --- Wizard Logic ---
function setupWizard() {
    const steps = [document.getElementById('step-0'), document.getElementById('step-1'), document.getElementById('step-2')];

    window.setWizardStep = (step) => {
        if (step === 2 && !wizardData.cat && !wizardData.details) {
            showToast(currentLang === 'ar' ? 'الرجاء اختيار نوع الخدمة أو كتابة التفاصيل' : 'Please select a service or write details', 'error');
            return;
        }

        wizardStep = step;

        steps.forEach(el => {
            el.classList.remove('active');
            el.style.opacity = '0';
            setTimeout(() => {
                if (!el.classList.contains('active')) el.style.display = 'none';
            }, 300);
        });

        const target = steps[step];
        target.style.display = 'block';
        requestAnimationFrame(() => {
            target.classList.add('active');
            target.style.opacity = '1';
        });

        const pct = Math.round(((step + 1) / 3) * 100);
        const progressBar = document.getElementById('wizard-progress');
        if (progressBar) {
            progressBar.style.width = `${pct}%`;
            progressBar.setAttribute('aria-valuenow', pct);
        }
        const stepNum = document.getElementById('wizard-step-num');
        if (stepNum) stepNum.textContent = step + 1;
    };

    window.selectCategory = (cat) => {
        wizardData.cat = cat;
        // Highlight selected
        document.querySelectorAll('#wizard-cats button').forEach(btn => {
            const span = btn.querySelector('span');
            // Reset base classes
            btn.classList.remove('ring-2', 'ring-saudi-500', 'bg-saudi-50');
            
            if (span && span.textContent === cat) {
                btn.classList.add('ring-2', 'ring-saudi-500', 'bg-saudi-50');
            }
        });
    };

    window.saveDetails = (val) => {
        wizardData.details = val || '';
        const counter = document.getElementById('char-count');
        if (counter) counter.textContent = `${val.length} / 500`;
    };

    window.sendWhatsapp = () => {
        const btn = document.getElementById('wizard-send-btn');
        if (btn && btn.classList.contains('btn-loading')) return;

        const text = encodeURIComponent(`مرحباً منصة تمامك دن،\nأريد خدمة: ${wizardData.cat}\nالتفاصيل: ${wizardData.details}`);
        const url = `https://wa.me/966573806638?text=${text}`;

        if (btn) {
            btn.classList.add('btn-loading');
            btn.disabled = true;
            const textEl = btn.querySelector('.btn-text');
            if (textEl) textEl.textContent = content[currentLang].wizard.btn_loading;
            if (!btn.querySelector('.btn-spinner')) {
                const spinner = document.createElement('span');
                spinner.className = 'btn-spinner';
                spinner.setAttribute('aria-hidden', 'true');
                spinner.innerHTML = '<i data-lucide="loader" class="w-6 h-6 animate-spin"></i>';
                btn.appendChild(spinner);
                lucide.createIcons();
            }
        }

        showToast(currentLang === 'ar' ? 'جاري تحويلك إلى واتساب...' : 'Redirecting to WhatsApp...', 'success');

        setTimeout(() => {
            window.open(url, '_blank');
            if (btn) {
                btn.classList.remove('btn-loading');
                btn.disabled = false;
                const textEl = btn.querySelector('.btn-text');
                if (textEl) textEl.textContent = content[currentLang].wizard.btn;
                const sp = btn.querySelector('.btn-spinner');
                if (sp) sp.remove();
            }
        }, 1500);
    };
}

// --- Effects ---
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function setupSpotlights() {
    document.querySelectorAll('.spotlight-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });
}

function setupParallax() {
    document.addEventListener('mousemove', (e) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        document.querySelectorAll('.blob-bg').forEach((blob, i) => {
            const speed = i % 2 === 0 ? 3 : -3;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}

function setupRipples() {
    document.addEventListener('click', e => {
        const target = e.target.closest('.btn-ripple');
        if (target) {
            const circle = document.createElement('span');
            const d = Math.max(target.clientWidth, target.clientHeight);
            circle.style.width = circle.style.height = `${d}px`;
            circle.style.left = `${e.clientX - target.getBoundingClientRect().left - d / 2}px`;
            circle.style.top = `${e.clientY - target.getBoundingClientRect().top - d / 2}px`;
            circle.classList.add('ripple');
            target.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
        }
    });
}

// --- UX Enhancements ---
function setupUXEnhancements() {
    // 1. Header Shrink on Scroll
    const header = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled-header');
        } else {
            header.classList.remove('scrolled-header');
        }

        // 2. Back to Top
        const backToTop = document.getElementById('back-to-top');
        const bottomBar = document.getElementById('bottom-bar');

        if (window.scrollY > 500) {
            if (backToTop) backToTop.classList.add('visible');
        } else {
            if (backToTop) backToTop.classList.remove('visible');
        }

        // 3. Mobile Bottom Bar
        if (window.innerWidth < 768 && window.scrollY > 300) {
            if (bottomBar) bottomBar.classList.add('visible');
        } else {
            if (bottomBar) bottomBar.classList.remove('visible');
        }

        // 4. Scroll Progress
        const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
        const progressBar = document.getElementById('page-progress');
        if (progressBar) {
            progressBar.style.width = `${scrolled}%`;
            progressBar.setAttribute('aria-valuenow', Math.round(scrolled));
        }
    });
}

// --- Toast System ---
function showToast(msg, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container); // Fixed: append to body, not document
    }

    const toast = document.createElement('div');
    const colorClass = type === 'success' ? 'bg-saudi-900 border-saudi-700' : 'bg-red-600 border-red-700';
    const icon = type === 'success' ? 'check-circle' : 'alert-circle';

    toast.className = `toast flex items-center gap-3 p-4 rounded-xl shadow-xl text-white ${colorClass} border min-w-[300px] backdrop-blur-md bg-opacity-95`;
    toast.innerHTML = `
        <i data-lucide="${icon}" width="20"></i>
        <div class="flex-grow font-bold text-sm">${msg}</div>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Mobile Menu
window.toggleMobileMenu = () => {
    const mm = document.getElementById('mobile-menu');
    const btn = document.querySelector('[aria-controls="mobile-menu"]');
    const isOpen = !mm.classList.contains('hidden');
    mm.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden', !mm.classList.contains('hidden'));
    if (btn) {
        btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        btn.setAttribute('aria-label', isOpen ? (currentLang === 'ar' ? 'فتح القائمة' : 'Open menu') : (currentLang === 'ar' ? 'إغلاق القائمة' : 'Close menu'));
    }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const mm = document.getElementById('mobile-menu');
        if (mm && !mm.classList.contains('hidden')) toggleMobileMenu();
    }
});

// --- Tilt Effect ---
function setupTilt() {
    if (window.matchMedia('(hover: none)').matches) return;

    const cards = document.querySelectorAll('.tilt-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        card.addEventListener('mouseenter', startTilt);
    });

    function startTilt(e) {
        this.style.transition = 'none';
    }

    function handleTilt(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
        const rotateY = ((x - centerX) / centerX) * 5;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        // Dynamic shadow/glare
        const glare = this.querySelector('.tilt-glare');
        if (glare) {
            glare.style.transform = `translate(${rotateY * 2}px, ${rotateX * 2}px)`;
        }
    }

    function resetTilt(e) {
        this.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
}