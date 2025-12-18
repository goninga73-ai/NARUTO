// بيانات المنتج الوحيد
const productData = {
    id: 1,
    title: "تعديل FIFA 25",
    subtitle: "FIFA 16 Mod 25 تجمع قيمبلاي FIFA 16 الكلاسيكي السلس مع تحديثات موسم 2024–2025 كاملة من فرق وانتقالات وأطقم وملاعب وجرافيكس محسّنة، خفيفة على الأجهزة، نوستالجيا بالقلب وشكل حديث ومتعة صافية بدون تعقيد.",
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
    category: "لعبة كرة قدم",
    size: "8 GB",
    downloads: "15,327",
    date: "ديسمبر 2023",
    image: "https://i.ytimg.com/vi/hRwo0N6E6AQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcs_kJzoTa0R0axCd9TjkQmN6Cjg",
    screenshots: [
        "https://f.top4top.io/p_36393n6sy0.jpg",
        "https://g.top4top.io/p_363970hgh1.jpg",
        "https://h.top4top.io/p_3639kui6e2.jpg",
        "https://i.top4top.io/p_3639xc59a3.jpg",
        "https://j.top4top.io/p_3639jx5po4.jpg",
        "https://k.top4top.io/p_3639kikfe5.jpg"
    ],
    // روابط التنزيل الجديدة
    downloadsData: [
        {
            id: "data",
            title: "ملف البيانات الرئيسي (Data)",
            description: "ملف اللعبة الرئيسي يحتوي على جميع الملفات الأساسية",
            size: "6.5 GB",
            url: "https://www.mediafire.com/file/jacypmkv0zbteff/EAFC+25.zip/file",
            icon: "fas fa-database",
            color: "#1a6fb4"
        },
        {
            id: "apk",
            title: "تطبيق الأندرويد (APK)",
            description: "ملف التثبيت الرئيسي للعبة على أجهزة الأندرويد",
            size: "1.2 GB",
            url: "https://www.mediafire.com/file/iq87ar5j5j7sse4/FIFA+16+APK+ANDROID+13.zip/file",
            icon: "fab fa-android",
            color: "#3ddc84"
        },
        {
            id: "obb",
            title: "ملف البيانات الإضافي (OBB)",
            description: "ملف البيانات الإضافي المطلوب لتشغيل اللعبة على الأندرويد",
            size: "0.3 GB",
            url: "https://www.mediafire.com/file/iq87ar5j5j7sse4/FIFA+16+APK+ANDROID+13.zip/file",
            icon: "fas fa-file-archive",
            color: "#ff9800"
        }
    ],
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
    ]
};

// عرض المنتج
function renderProduct() {
    const container = document.getElementById('product-card');
    
    container.innerHTML = `
        <div class="product-header">
            <div class="product-image">
                <img src="${productData.image}" alt="${productData.title}" loading="lazy">
                <div class="product-category">${productData.category}</div>
            </div>
            
            <div class="product-info">
                <h2 class="product-title">${productData.title}</h2>
                <p class="product-subtitle">${productData.subtitle}</p>
                
                <div class="product-meta">
                    <div class="meta-item">
                        <div class="meta-icon">
                            <i class="fas fa-weight-hanging"></i>
                        </div>
                        <div class="meta-label">الحجم الإجمالي</div>
                        <div class="meta-value">${productData.size}</div>
                    </div>
                    
                    <div class="meta-item">
                        <div class="meta-icon">
                            <i class="fas fa-download"></i>
                        </div>
                        <div class="meta-label">عدد التنزيلات</div>
                        <div class="meta-value">${productData.downloads}</div>
                    </div>
                    
                    <div class="meta-item">
                        <div class="meta-icon">
                            <i class="far fa-calendar"></i>
                        </div>
                        <div class="meta-label">تاريخ الإصدار</div>
                        <div class="meta-value">${productData.date}</div>
                    </div>
                </div>
                
                <button class="view-more-btn" onclick="toggleDetails()" id="view-more-btn">
                    <i class="fas fa-chevron-down" id="details-icon"></i>
                    عرض التفاصيل الكاملة
                </button>
            </div>
        </div>
        
        <div class="product-details" id="product-details">
            <div class="details-content">
                <div class="full-description">${formatDescription(productData.fullDesc)}</div>
                
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
                            <div class="screenshot" onclick="openScreenshot('${screenshot}')">
                                <img src="${screenshot}" alt="لقطة ${index + 1}" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="download-section">
                    <h3>روابط التحميل</h3>
                    <p class="download-instructions">تحتاج لتحميل جميع الملفات التالية لتشغيل اللعبة بشكل صحيح:</p>
                    
                    <div class="download-options">
                        ${productData.downloadsData.map(item => `
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
                                <button class="download-option-btn" onclick="downloadFile('${item.id}')" style="background-color: ${item.color}">
                                    <i class="fas fa-download"></i>
                                    تحميل
                                </button>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="total-size">
                        <i class="fas fa-calculator"></i>
                        الحجم الإجمالي: <strong>${productData.size}</strong>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// تنسيق النص مع فواصل الأسطر
function formatDescription(text) {
    return text.split('\n').map(line => {
        if (line.trim() === '') return '<br>';
        return `<p>${line}</p>`;
    }).join('');
}

// تبديل عرض التفاصيل
function toggleDetails() {
    const detailsElement = document.getElementById('product-details');
    const button = document.getElementById('view-more-btn');
    const icon = document.getElementById('details-icon');
    
    // تبديل حالة التفاصيل
    detailsElement.classList.toggle('active');
    
    // تغيير النص والأيقونة
    if (detailsElement.classList.contains('active')) {
        button.innerHTML = '<i class="fas fa-chevron-up"></i> إخفاء التفاصيل';
        // تمرير سلس إلى التفاصيل
        setTimeout(() => {
            detailsElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'
            });
        }, 300);
    } else {
        button.innerHTML = '<i class="fas fa-chevron-down"></i> عرض التفاصيل الكاملة';
    }
}

// فتح لقطة شاشة في نافذة جديدة
function openScreenshot(url) {
    window.open(url, '_blank');
}

// تحميل ملف معين
function downloadFile(fileId) {
    const fileData = productData.downloadsData.find(item => item.id === fileId);
    
    if (!fileData) {
        alert('الملف غير موجود!');
        return;
    }
    
    const downloadBtn = document.querySelector(`.download-option[data-id="${fileId}"] .download-option-btn`);
    
    if (!downloadBtn) return;
    
    // حفظ النص الأصلي
    const originalText = downloadBtn.innerHTML;
    
    // تغيير حالة الزر
    downloadBtn.innerHTML = '<i class="fas fa-spinner loading"></i> جاري التحميل...';
    downloadBtn.disabled = true;
    downloadBtn.style.opacity = '0.8';
    
    // محاكاة التحميل
    setTimeout(() => {
        // فتح الرابط في نافذة جديدة
        window.open(fileData.url, '_blank');
        
        // تتبع التنزيل
        trackDownload(fileData.title);
        
        // إعادة الزر لحالته الأصلية
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
            downloadBtn.style.opacity = '1';
            
            // إظهار رسالة نجاح
            showDownloadSuccess(fileData.title);
        }, 2000);
    }, 1500);
}

// تحميل جميع الملفات
function downloadAllFiles() {
    if (confirm('هل تريد تحميل جميع الملفات؟ هذا قد يأخذ بعض الوقت حسب سرعة اتصالك.')) {
        productData.downloadsData.forEach((file, index) => {
            setTimeout(() => {
                window.open(file.url, '_blank');
                trackDownload(file.title);
            }, index * 1000); // تأخير ثانية بين كل ملف
        });
        
        trackDownload('جميع الملفات');
        showDownloadSuccess('جميع الملفات');
    }
}

// تتبع التنزيلات
function trackDownload(fileName) {
    console.log(`تم تحميل: ${fileName}`);
    
    // زيادة عداد التنزيلات الإجمالي
    const currentDownloads = parseInt(productData.downloads.replace(/,/g, ''));
    productData.downloads = (currentDownloads + 1).toLocaleString();
    
    // تحديث العداد في الواجهة
    const downloadCountElement = document.querySelector('.meta-item:nth-child(2) .meta-value');
    if (downloadCountElement) {
        downloadCountElement.textContent = productData.downloads;
    }
    
    // حفظ إحصائيات في localStorage
    const stats = JSON.parse(localStorage.getItem('downloadStats') || '{}');
    stats[fileName] = (stats[fileName] || 0) + 1;
    stats.total = (stats.total || 0) + 1;
    stats.lastDownload = new Date().toISOString();
    localStorage.setItem('downloadStats', JSON.stringify(stats));
}

// إظهار رسالة نجاح التحميل
function showDownloadSuccess(fileName) {
    // إنشاء عنصر الرسالة
    const message = document.createElement('div');
    message.className = 'download-success-message';
    message.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>تم بدء تحميل "${fileName}" بنجاح!</span>
        <button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;
    
    // إضافة التنسيقات
    message.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #00a859, #1a6fb4);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 9999;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(message);
    
    // إزالة الرسالة بعد 5 ثواني
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 5000);
}

// تهيئة الموقع عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderProduct();
    
    // إضافة تأثيرات للبطاقة عند التمرير
    const productCard = document.getElementById('product-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    productCard.style.opacity = '0';
    productCard.style.transform = 'translateY(30px)';
    productCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(productCard);
    
    // إضافة تأثير للصور عند التمرير
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.1 });
    
    // تطبيق التأثير على جميع الصور بعد تحميلها
    setTimeout(() => {
        document.querySelectorAll('.product-image img, .screenshot img').forEach(img => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.95)';
            img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            imageObserver.observe(img);
        });
    }, 500);
    
    // تحميل إحصائيات من localStorage
    loadDownloadStats();
});

// تحميل إحصائيات التنزيلات
function loadDownloadStats() {
    const stats = JSON.parse(localStorage.getItem('downloadStats') || '{}');
    if (stats.total) {
        console.log('إجمالي التنزيلات من هذا الجهاز:', stats.total);
        console.log('آخر تنزيل:', stats.lastDownload ? new Date(stats.lastDownload).toLocaleString('ar-SA') : 'لا يوجد');
    }
}

// إضافة أنيميشن لرسائل النجاح
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    .download-success-message button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-right: -5px;
    }
`;
document.head.appendChild(style);

// دالة لإضافة منتجات جديدة (للتوسع المستقبلي)
function addNewProduct(product) {
    console.log('تمت إضافة منتج جديد:', product);
}

// تصدير الدوال للاستخدام الخارجي إذا لزم الأمر
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        productData,
        renderProduct,
        toggleDetails,
        downloadFile,
        downloadAllFiles,
        trackDownload,
        addNewProduct
    };
}