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
        { 
            title: "قيمبلاي سلس", 
            description: "نفس تجربة FIFA 16 الكلاسيكية الناعمة والممتعة في التحكم واللعب" 
        },
        { 
            title: "تحديثات الموسم", 
            description: "جميع الفرق والانتقالات والصفقات محدثة لموسم 2024-2025" 
        },
        { 
            title: "جرافيكس محسّن", 
            description: "ملاعب وإضاءات محسنة مع الحفاظ على أداء مرتفع على الأجهزة المتوسطة" 
        },
        { 
            title: "خفيفة على النظام", 
            description: "مصممة للعمل بسلاسة حتى على الأجهزة ذات المواصفات المتوسطة" 
        },
        { 
            title: "دعم أندرويد", 
            description: "متوافقة مع أندرويد 13 والأحدث، سهلة التثبيت على الموبايل" 
        },
        { 
            title: "تحديثات دورية", 
            description: "تحديثات مستمرة للفرق والشعارات والأطقم طوال الموسم" 
        }
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
let header = null;

// تهيئة الموقع
function initSite() {
    console.log("🚀 NARUTO_CODEX موقع يعمل!");
    
    // تحميل البيانات
    loadSavedData();
    
    // عرض المحتوى
    renderDetails();
    
    // إعداد التفاعلات
    setupInteractions();
    
    // إعداد التمرير
    setupScrollEffects();
    
    // تحديث العداد
    updateCounter();
    
    // إضافة جسيمات إضافية
    createParticles();
}

// تحميل البيانات المحفوظة
function loadSavedData() {
    try {
        const saved = localStorage.getItem('narutoCodexData');
        if (saved) {
            const data = JSON.parse(saved);
            downloadCount = data.downloadCount || downloadCount;
        }
    } catch (e) {
        console.log("📁 لا يمكن تحميل البيانات المحفوظة");
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

// عرض محتوى التفاصيل
function renderDetails() {
    const detailsContent = document.querySelector('.details-content');
    if (!detailsContent) return;
    
    detailsContent.innerHTML = `
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
                    <div class="screenshot" onclick="openScreenshot(${index})">
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
                    <div class="download-option">
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
                        <button class="download-option-btn" onclick="downloadSingleFile('${item.id}')" style="background-color: ${item.color}">
                            <i class="fas fa-download"></i>
                            تحميل
                        </button>
                    </div>
                `).join('')}
            </div>
            
            <button class="download-all-btn" onclick="downloadAllFiles()">
                <i class="fas fa-download"></i>
                تحميل جميع الملفات مرة واحدة
            </button>
            
            <div class="total-size">
                <i class="fas fa-calculator"></i>
                الحجم الإجمالي: <strong>8 GB</strong>
            </div>
        </div>
    `;
}

// إعداد التفاعلات
function setupInteractions() {
    // زر عرض/إخفاء التفاصيل
    const viewMoreBtn = document.getElementById('view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', toggleDetails);
    }
    
    // منع سلوك اللمس غير المرغوب
    document.addEventListener('touchstart', function(e) {
        if (e.target.tagName === 'BUTTON') {
            e.preventDefault();
        }
    }, { passive: false });
    
    // تأثير الضغط على الأزرار
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = '';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

// إعداد تأثيرات التمرير
function setupScrollEffects() {
    header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // تأثير التمرير على البطاقة
        const productCard = document.querySelector('.product-card');
        if (productCard) {
            const cardPosition = productCard.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                productCard.style.opacity = '1';
                productCard.style.transform = 'translateY(0)';
            }
        }
    });
}

// إنشاء جسيمات إضافية
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // إعداد عشوائي
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = Math.random() * 30 + 20;
        const animationDelay = Math.random() * 10;
        const color = Math.random() > 0.5 ? 'var(--accent-gold)' : 'var(--accent-silver)';
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            top: ${top}%;
            background: ${color};
            animation-duration: ${animationDuration}s;
            animation-delay: ${animationDelay}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// تبديل عرض التفاصيل
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
        
        // تأثير سلس للتمرير
        if (window.innerWidth > 768) {
            setTimeout(() => {
                detailsElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
        
        // تأثير صوتي (اختياري)
        playSoundEffect('open');
    } else {
        // إغلاق التفاصيل
        detailsElement.classList.remove('active');
        icon.className = 'fas fa-chevron-down';
        btnText.textContent = 'عرض التفاصيل الكاملة';
        
        // تأثير صوتي (اختياري)
        playSoundEffect('close');
    }
}

// تأثيرات صوتية (اختيارية)
function playSoundEffect(type) {
    // يمكن إضافة أصوات إذا أردت
    console.log(`🔊 صوت تأثير: ${type}`);
}

// تحميل ملف واحد
function downloadSingleFile(fileId) {
    const file = productData.downloads.find(d => d.id === fileId);
    if (!file) return;
    
    const buttons = document.querySelectorAll('.download-option-btn');
    let clickedButton = null;
    
    // العثور على الزر المناسب
    buttons.forEach(btn => {
        if (btn.onclick && btn.onclick.toString().includes(fileId)) {
            clickedButton = btn;
        }
    });
    
    if (clickedButton) {
        const originalHTML = clickedButton.innerHTML;
        
        // تأثير الضغط
        clickedButton.style.transform = 'scale(0.95)';
        clickedButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
        clickedButton.disabled = true;
        
        // محاكاة التحميل
        setTimeout(() => {
            // فتح الرابط
            window.open(file.url, '_blank');
            
            // تتبع التنزيل
            trackDownload(file.title);
            
            // استعادة الزر مع تأثير
            setTimeout(() => {
                clickedButton.innerHTML = '<i class="fas fa-check"></i> تم التحميل!';
                clickedButton.style.backgroundColor = '#00a859';
                
                // العودة للوضع الطبيعي
                setTimeout(() => {
                    clickedButton.innerHTML = originalHTML;
                    clickedButton.disabled = false;
                    clickedButton.style.transform = '';
                    clickedButton.style.backgroundColor = '';
                    
                    // إظهار رسالة النجاح
                    showSuccess(`بدأ تحميل ${file.title}`);
                }, 1500);
            }, 1000);
        }, 500);
    } else {
        // الخيار الاحتياطي
        window.open(file.url, '_blank');
        trackDownload(file.title);
        showSuccess(`بدأ تحميل ${file.title}`);
    }
}

// تحميل جميع الملفات
function downloadAllFiles() {
    if (!confirm('هل تريد تحميل جميع الملفات؟ قد يستغرق هذا بعض الوقت.')) return;
    
    // تأثير على زر تحميل الكل
    const allBtn = document.querySelector('.download-all-btn');
    const originalAllHTML = allBtn.innerHTML;
    allBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
    allBtn.disabled = true;
    
    // تحميل كل ملف بتأخير
    let completed = 0;
    productData.downloads.forEach((file, index) => {
        setTimeout(() => {
            window.open(file.url, '_blank');
            trackDownload(file.title);
            completed++;
            
            // عند اكتمال جميع الملفات
            if (completed === productData.downloads.length) {
                setTimeout(() => {
                    allBtn.innerHTML = '<i class="fas fa-check"></i> تم تحميل الكل!';
                    allBtn.style.backgroundColor = '#00a859';
                    
                    setTimeout(() => {
                        allBtn.innerHTML = originalAllHTML;
                        allBtn.disabled = false;
                        allBtn.style.backgroundColor = '';
                        showSuccess('تم بدء تحميل جميع الملفات');
                    }, 2000);
                }, 500);
            }
        }, index * 800);
    });
}

// فتح لقطة شاشة
function openScreenshot(index) {
    if (index >= 0 && index < productData.screenshots.length) {
        // تأثير قبل الفتح
        const screenshots = document.querySelectorAll('.screenshot');
        if (screenshots[index]) {
            screenshots[index].style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                window.open(productData.screenshots[index], '_blank');
                
                setTimeout(() => {
                    screenshots[index].style.transform = '';
                }, 300);
            }, 200);
        } else {
            window.open(productData.screenshots[index], '_blank');
        }
    }
}

// تتبع التنزيلات
function trackDownload(fileName) {
    downloadCount++;
    updateCounter();
    saveData();
    
    // تأثير على العداد
    const counter = document.getElementById('download-count');
    if (counter) {
        counter.style.transform = 'scale(1.2)';
        counter.style.color = 'var(--accent-gold)';
        
        setTimeout(() => {
            counter.style.transform = '';
            counter.style.color = '';
        }, 500);
    }
}

// تحديث العداد
function updateCounter() {
    const counter = document.getElementById('download-count');
    if (counter) {
        counter.textContent = downloadCount.toLocaleString('ar-SA');
    }
}

// عرض رسالة نجاح
function showSuccess(message) {
    // إزالة الرسائل السابقة
    const oldMsg = document.querySelector('.success-message');
    if (oldMsg) oldMsg.remove();
    
    // إنشاء رسالة جديدة
    const msg = document.createElement('div');
    msg.className = 'success-message';
    msg.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(msg);
    
    // إزالة الرسالة بعد 4 ثوان
    setTimeout(() => {
        if (msg.parentElement) {
            msg.style.opacity = '0';
            msg.style.transform = 'translateX(-50%) translateY(-100%)';
            
            setTimeout(() => {
                if (msg.parentElement) {
                    msg.remove();
                }
            }, 300);
        }
    }, 4000);
}

// تأثيرات إضافية عند التحميل
window.addEventListener('load', () => {
    // تأثير تدريجي للمحتوى
    const elements = document.querySelectorAll('.hero-content, .product-card, .section-title');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // تأثير تدريجي للشعار
    const logoIcon = document.querySelector('.logo-icon');
    const logoText = document.querySelector('.logo-text h1');
    
    if (logoIcon) {
        setTimeout(() => {
            logoIcon.style.transform = 'rotateY(360deg)';
            
            setTimeout(() => {
                logoIcon.style.transform = '';
            }, 1000);
        }, 500);
    }
    
    if (logoText) {
        setTimeout(() => {
            logoText.style.backgroundSize = '200% auto';
        }, 300);
    }
});

// تشغيل الموقع
document.addEventListener('DOMContentLoaded', initSite);

// جعل الدوال متاحة عالمياً
window.downloadSingleFile = downloadSingleFile;
window.downloadAllFiles = downloadAllFiles;
window.openScreenshot = openScreenshot;
window.toggleDetails = toggleDetails;
