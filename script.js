// بيانات المنتج
const productData = {
    fullDesc: `FIFA 16 Mod 25 هي تجربة "نوستالجيا مطوّرة" بامتياز 🎮
يعني نفس أساس FIFA 16 المحبوب (القيمبلاي السلس والتحكم الممتع)، لكن بروح موسم 2024–2025.

<strong>وش اللي فيها؟ خلّك معي:</strong>

⚽ <strong>تحديث كامل للفرق والانتقالات:</strong> تشكيلات حديثة، نجوم جدد، وفرق طالعة بقوة.

👕 <strong>أطقم وشعارات محدثة:</strong> كأنك تلعب إصدار جديد، بس على محرك قديم يعرف شغله.

🏟️ <strong>ملاعب وجرافيكس محسّنة:</strong> إضاءة وزوايا أفضل، بدون ما يثقل على جهازك.

🎮 <strong>قيمبلاي كلاسيك:</strong> لا فلسفة زايدة ولا دراما—لعب مباشر، ممتع، و"يحسّس".

🖥️ <strong>خفيفة على الأجهزة:</strong> مثالية لو جهازك متوسط أو قديم وتبي متعة بدون صداع.

<strong>متطلبات النظام:</strong>
• نظام التشغيل: Windows 7/8/10/11 (64-bit)
• المعالج: Intel Core i3 أو أعلى
• الذاكرة: 4GB RAM على الأقل
• كارت الشاشة: 1GB VRAM على الأقل
• المساحة المطلوبة: 15GB مساحة حرة

<strong>طريقة التثبيت:</strong>
1. قم بتحميل جميع الملفات المطلوبة
2. فك ضغط ملف Data الرئيسي
3. تثبيت ملف APK على أندرويد (للموبايل)
4. نسخ ملف OBB إلى المسار المطلوب
5. تشغيل اللعبة والاستمتاع!

<strong>الخلاصة الصريحة:</strong>
لو تحنّ لأيام FIFA 16 وتبيها بملابس 2025، فهذا المود خيار ذكي. قديم بالقلب، حديث بالشكل—توازن نادر هالأيام. مو رسمي؟ صحيح. بس المتعة؟ موجودة وبقوة.`,
    
    features: [
        { title: "قيمبلاي سلس", description: "نفس تجربة FIFA 16 الكلاسيكية الناعمة والممتعة في التحكم واللعب" },
        { title: "تحديثات الموسم", description: "جميع الفرق والانتقالات والصفقات محدثة لموسم 2024-2025" },
        { title: "جرافيكس محسّن", description: "ملاعب وإضاءات محسنة مع الحفاظ على أداء مرتفع على الأجهزة المتوسطة" },
        { title: "خفيفة على النظام", description: "مصممة للعمل بسلاسة حتى على الأجهزة ذات المواصفات المتوسطة" },
        { title: "دعم أندرويد", description: "متوافقة مع أندرويد 13 والأحدث، سهلة التثبيت على الموبايل" },
        { title: "تحديثات دورية", description: "تحديثات مستمرة للفرق والشعارات والأطقم طوال الموسم" }
    ],
    
    screenshots: [
        "https://f.top4top.io/p_36393n6sy0.jpg",
        "https://g.top4top.io/p_363970hgh1.jpg",
        "https://h.top4top.io/p_3639kui6e2.jpg",
        "https://i.top4top.io/p_3639xc59a3.jpg",
        "https://j.top4top.io/p_3639jx5po4.jpg",
        "https://k.top4top.io/p_3639kikfe5.jpg"
    ],
    
    downloads: [
        {
            id: "data",
            title: "ملف البيانات الرئيسي (Data)",
            description: "ملف اللعبة الرئيسي يحتوي على جميع الملفات الأساسية",
            size: "6.5 GB",
            url: "https://www.mediafire.com/file/jacypmkv0zbteff/EAFC+25.zip/file",
            color: "#1a6fb4",
            icon: "fas fa-database"
        },
        {
            id: "apk",
            title: "تطبيق الأندرويد (APK)",
            description: "ملف التثبيت الرئيسي للعبة على أجهزة الأندرويد",
            size: "1.2 GB",
            url: "https://www.mediafire.com/file/iq87ar5j5j7sse4/FIFA+16+APK+ANDROID+13.zip/file",
            color: "#3ddc84",
            icon: "fab fa-android"
        },
        {
            id: "obb",
            title: "ملف البيانات الإضافي (OBB)",
            description: "ملف البيانات الإضافي المطلوب لتشغيل اللعبة على الأندرويد",
            size: "0.3 GB",
            url: "https://www.mediafire.com/file/iq87ar5j5j7sse4/FIFA+16+APK+ANDROID+13.zip/file",
            color: "#ff9800",
            icon: "fas fa-file-archive"
        }
    ]
};

// حالة التطبيق
let downloadCount = 15327;
let detailsOpen = false;

// تهيئة التطبيق
function init() {
    loadData();
    setupEventListeners();
    renderDetailsContent();
    setupAnimations();
}

// تحميل البيانات المحفوظة
function loadData() {
    try {
        const saved = localStorage.getItem('narutoCodexData');
        if (saved) {
            const data = JSON.parse(saved);
            downloadCount = data.downloadCount || downloadCount;
            updateDownloadCounter();
        }
    } catch (e) {
        console.log('لا يمكن تحميل البيانات المحفوظة');
    }
}

// حفظ البيانات
function saveData() {
    const data = {
        downloadCount: downloadCount,
        lastUpdate: new Date().toISOString()
    };
    localStorage.setItem('narutoCodexData', JSON.stringify(data));
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // زر عرض/إخفاء التفاصيل
    const viewMoreBtn = document.getElementById('view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', toggleDetails);
    }
    
    // منع النقر المزدوج على الهواتف
    let lastClick = 0;
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('touchstart', function(e) {
            const now = Date.now();
            if (now - lastClick < 500) {
                e.preventDefault();
            }
            lastClick = now;
        });
    }
}

// عرض محتوى التفاصيل
function renderDetailsContent() {
    const detailsContent = document.querySelector('.details-content');
    if (!detailsContent) return;
    
    const content = `
        <div class="full-description">
            ${productData.fullDesc.split('\n').map(line => 
                line.trim() === '' ? '<br>' : `<p>${line}</p>`
            ).join('')}
        </div>
        
        <div class="features-grid">
            ${productData.features.map(feature => `
                <div class="feature-item">
                    <h4>${feature.title}</h4>
                    <p>${feature.description}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="screenshots">
            <h3>لقطات من اللعبة</h3>
            <div class="screenshots-grid">
                ${productData.screenshots.map((screenshot, index) => `
                    <div class="screenshot" data-index="${index}">
                        <img src="${screenshot}" alt="لقطة ${index + 1}" loading="lazy">
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="download-section">
            <h3>روابط التحميل</h3>
            <p class="download-instructions">تحتاج لتحميل جميع الملفات التالية لتشغيل اللعبة بشكل صحيح:</p>
            
            <div class="download-options">
                ${productData.downloads.map(item => `
                    <div class="download-option" data-id="${item.id}">
                        <div class="download-icon" style="background-color: ${item.color}">
                            <i class="${item.icon}"></i>
                        </div>
                        <div class="download-info">
                            <h4>${item.title}</h4>
                            <p>${item.description}</p>
                            <div class="download-meta">
                                <span class="file-size"><i class="fas fa-weight-hanging"></i> ${item.size}</span>
                                <span class="file-type"><i class="fas fa-file"></i> ملف ZIP</span>
                            </div>
                        </div>
                        <button class="download-option-btn" style="background-color: ${item.color}">
                            <i class="fas fa-download"></i>
                            تحميل
                        </button>
                    </div>
                `).join('')}
            </div>
            
            <button class="download-all-btn" id="download-all-btn">
                <i class="fas fa-download"></i>
                تحميل جميع الملفات مرة واحدة
            </button>
            
            <div class="total-size">
                <i class="fas fa-calculator"></i>
                الحجم الإجمالي: <strong>8 GB</strong>
            </div>
        </div>
    `;
    
    detailsContent.innerHTML = content;
    
    // إضافة مستمعي الأحداث للمحتوى الديناميكي
    setTimeout(() => {
        setupDynamicEventListeners();
    }, 100);
}

// إعداد مستمعي الأحداث للمحتوى الديناميكي
function setupDynamicEventListeners() {
    // أزرار التحميل الفردية
    document.querySelectorAll('.download-option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const fileId = this.closest('.download-option').dataset.id;
            downloadFile(fileId);
        });
    });
    
    // زر تحميل الكل
    const downloadAllBtn = document.getElementById('download-all-btn');
    if (downloadAllBtn) {
        downloadAllBtn.addEventListener('click', downloadAllFiles);
    }
    
    // لقطات الشاشة
    document.querySelectorAll('.screenshot').forEach(screenshot => {
        screenshot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            openScreenshot(index);
        });
    });
}

// إعداد الأنيميشن
function setupAnimations() {
    const productCard = document.getElementById('product-card');
    if (!productCard) return;
    
    // إظهار البطاقة عند التحميل
    productCard.style.opacity = '0';
    productCard.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        productCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        productCard.style.opacity = '1';
        productCard.style.transform = 'translateY(0)';
    }, 300);
}

// تبديل عرض التفاصيل (إصلاح المشكلة الرئيسية)
function toggleDetails() {
    const detailsElement = document.getElementById('product-details');
    const button = document.getElementById('view-more-btn');
    const icon = document.getElementById('details-icon');
    const btnText = document.getElementById('btn-text');
    
    detailsOpen = !detailsOpen;
    
    if (detailsOpen) {
        // فتح التفاصيل
        detailsElement.classList.add('active');
        icon.className = 'fas fa-chevron-up';
        btnText.textContent = 'إخفاء التفاصيل';
        
        // تمرير سلس للتفاصيل (على الكمبيوتر فقط)
        if (window.innerWidth > 768) {
            setTimeout(() => {
                detailsElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 300);
        }
    } else {
        // إغلاق التفاصيل
        detailsElement.classList.remove('active');
        icon.className = 'fas fa-chevron-down';
        btnText.textContent = 'عرض التفاصيل الكاملة';
    }
}

// تحميل ملف معين
function downloadFile(fileId) {
    const file = productData.downloads.find(d => d.id === fileId);
    if (!file) return;
    
    const btn = document.querySelector(`.download-option[data-id="${fileId}"] .download-option-btn`);
    if (!btn) return;
    
    const originalHTML = btn.innerHTML;
    
    // تغيير حالة الزر
    btn.innerHTML = '<i class="fas fa-spinner loading"></i> جاري التحميل...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    
    // محاكاة التحميل
    setTimeout(() => {
        window.open(file.url, '_blank');
        trackDownload(file.title);
        
        // استعادة الزر بعد ثانيتين
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
            btn.style.opacity = '1';
            showSuccessMessage(`تم بدء تحميل "${file.title}"`);
        }, 2000);
    }, 1000);
}

// تحميل جميع الملفات
function downloadAllFiles() {
    if (!confirm('هل تريد تحميل جميع الملفات؟ قد يستغرق هذا بعض الوقت.')) return;
    
    let delay = 0;
    productData.downloads.forEach(file => {
        setTimeout(() => {
            window.open(file.url, '_blank');
            trackDownload(file.title);
        }, delay);
        delay += 1000; // ثانية بين كل ملف
    });
    
    trackDownload('جميع الملفات');
    showSuccessMessage('بدأ تحميل جميع الملفات');
}

// فتح لقطة شاشة
function openScreenshot(index) {
    if (index >= 0 && index < productData.screenshots.length) {
        window.open(productData.screenshots[index], '_blank');
    }
}

// تتبع التنزيلات
function trackDownload(fileName) {
    downloadCount++;
    updateDownloadCounter();
    saveData();
    console.log(`تحميل: ${fileName} - الإجمالي: ${downloadCount}`);
}

// تحديث عداد التنزيلات
function updateDownloadCounter() {
    const counter = document.getElementById('download-count');
    if (counter) {
        counter.textContent = downloadCount.toLocaleString('ar-SA');
    }
}

// عرض رسالة نجاح
function showSuccessMessage(text) {
    // إزالة أي رسالة سابقة
    const oldMessage = document.querySelector('.success-message');
    if (oldMessage) {
        oldMessage.remove();
    }
    
    // إنشاء الرسالة الجديدة
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${text}</span>
        <button class="close-btn"><i class="fas fa-times"></i></button>
    `;
    
    // زر الإغلاق
    const closeBtn = message.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        message.style.opacity = '0';
        message.style.transform = 'translateX(-50%) translateY(-100%)';
        setTimeout(() => message.remove(), 300);
    });
    
    document.body.appendChild(message);
    
    // إزالة تلقائية بعد 5 ثوان
    setTimeout(() => {
        if (message.parentElement) {
            message.style.opacity = '0';
            message.style.transform = 'translateX(-50%) translateY(-100%)';
            setTimeout(() => message.remove(), 300);
        }
    }, 5000);
}

// منع المشاكل على الهواتف
function preventMobileIssues() {
    // منع التكبير عند النقر المزدوج
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // منع سلوك السحب على الهواتف
    document.addEventListener('touchmove', function(e) {
        if (e.target.tagName === 'BUTTON') {
            e.preventDefault();
        }
    }, { passive: false });
}

// تشغيل التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    init();
    preventMobileIssues();
});

// إضافة دعم لواجهة المستخدم
window.addEventListener('resize', function() {
    // إعادة حساب الأشياء عند تغيير حجم الشاشة
    if (window.innerWidth <= 768 && detailsOpen) {
        // على الهواتف، لا نستخدم scrollIntoView عند الفتح
        const viewMoreBtn = document.getElementById('view-more-btn');
        if (viewMoreBtn) {
            viewMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
});

// جعل الدوال متاحة عالمياً للتصحيح
window.narutoCodex = {
    toggleDetails,
    downloadFile,
    downloadAllFiles,
    trackDownload,
    showSuccessMessage
};
