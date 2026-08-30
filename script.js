```javascript
/* =========================================================
   ELPAI NEWSLETTER
   Dynamic Newsletter Archive
   + Saved Articles
========================================================= */


/* =========================================================
   NEWSLETTERS DATA
========================================================= */

const newsletters = [

    /* =====================================================
       EGYPT - WEEK 3 JULY 2026
    ===================================================== */

    {
        id: "egypt-july-3-2026",
        type: "egypt",
        typeName: "النشرة المصرية",
        title: "الأسبوع الثالث من يوليو 2026",
        number: "الأسبوع 03",
        date: "26 يوليو 2026",

        intro:
            "مرحباً بكم في نشرة البوابة القانونية للتشريعات المصرية، حيث نتابع هذا الأسبوع أهم المستجدات التشريعية والأخبار القانونية وما يحدث في المجتمع القانوني.",

        highlights: [
            "صدق السيد رئيس الجمهورية على قانون الموازنة ومنح السيد وزير المالية صلاحيات أوسع لإدارة الدين وإصدار أدوات التمويل",
            "استعرض السيد رئيس الوزراء تقريراً للجنة الطبية العليا والاستغاثات لقافلة طبية شاملة تم تنظيمها بمحافظة المنوفية",
            "بحث السيد وزير الكهرباء مع السفير البريطاني تعزيز التعاون في الطاقة المتجددة وتحديث الشبكات",
            "وقعت وزارة العدل بروتوكولين مع البنك الأهلي وبنك مصر لافتتاح فروع توثيق داخل البنوك",
            "تابع السيد رئيس مجلس الوزراء مستجدات مشروع الأجهزة التعويضية وجهود إنشاء مجمع صناعي للأطراف الصناعية",
            "تابع السيد رئيس مجلس الوزراء مستجدات تنفيذ خطة تخارج الدولة من عدد من الشركات الحكومية"
        ],

        sections: [

            {
                title: "أجندة تشريعية",

                featured: {
                    title:
                        "صدق السيد رئيس الجمهورية على قانون الموازنة ومنح السيد وزير المالية صلاحيات أوسع لإدارة الدين وإصدار أدوات التمويل",

                    text:
                        "صدق السيد رئيس الجمهورية على قانون ربط الموازنة العامة للدولة للعام المالي 2026-2027، ومنح السيد وزير المالية صلاحيات أوسع لإدارة الدين العام وتوفير احتياجات التمويل، من خلال إتاحة أدوات دين محلية ودولية، والتعاقد على قروض أجنبية واستخدام بعض الموارد المالية في خفض أعباء الدين."
                },

                cards: [
                    {
                        title:
                            "استعرض السيد رئيس الوزراء تقريراً للجنة الطبية العليا والاستغاثات لقافلة طبية شاملة تم تنظيمها بمحافظة المنوفية",

                        text:
                            "استعرض السيد رئيس الوزراء تقريراً حول جهود القافلة الطبية الشاملة التي نظمتها اللجنة الطبية العليا والاستغاثات بمجلس الوزراء بالتعاون والتنسيق مع مؤسسة بنك الشفاء المصري."
                    }
                ]
            },

            {
                title: "أهم الأخبار",

                cards: [
                    {
                        title:
                            "بحث السيد وزير الكهرباء مع السفير البريطاني تعزيز التعاون في الطاقة المتجددة وتحديث الشبكات",

                        text:
                            "استقبل السيد وزير الكهرباء والطاقة المتجددة سفير المملكة المتحدة لدى القاهرة لبحث سبل تعزيز التعاون المشترك في مجالات الكهرباء والطاقة المتجددة ودعم فرص الاستثمار ونقل التكنولوجيا."
                    },

                    {
                        title:
                            "وقعت وزارة العدل بروتوكولين مع البنك الأهلي وبنك مصر لافتتاح فروع توثيق داخل البنوك",

                        text:
                            "وقعت وزارة العدل بروتوكولين للتعاون المشترك مع كل من البنك الأهلي المصري وبنك مصر، وذلك للتوسع في إنشاء فروع التوثيق المميزة."
                    },

                    {
                        title:
                            "تابع السيد رئيس مجلس الوزراء مستجدات مشروع الأجهزة التعويضية وجهود إنشاء مجمع صناعي للأطراف الصناعية",

                        text:
                            "تابع السيد رئيس الوزراء مستجدات مشروع الأجهزة التعويضية وجهود الدولة لإنشاء مجمع صناعي شامل للأطراف الصناعية والأجهزة التعويضية."
                    },

                    {
                        title:
                            "تابع السيد رئيس مجلس الوزراء مستجدات تنفيذ خطة تخارج الدولة من عدد من الشركات الحكومية",

                        text:
                            "تابع السيد رئيس الوزراء جهود وإجراءات إصلاح وإعادة هيكلة الشركات المملوكة للدولة ومستجدات تنفيذ خطة تخارج الدولة من عدد من الشركات الحكومية."
                    }
                ]
            },

            {
                title: "ما يحدث في المجتمع القانوني",

                cards: [
                    {
                        title:
                            "الحصول على حكم لصالح موكل بمحاكم مركز دبي المالي العالمي (DIFC)",

                        text:
                            "أعلن مكتب معتوق بسيوني عن الحصول على حكم لصالح موكله بمحاكم مركز دبي المالي العالمي، وباسترداد أكثر من 11 مليون درهم إماراتي."
                    }
                ]
            },

            {
                title: "مقالات قانونية",

                cards: [
                    {
                        title:
                            "الاستثمار الرياضي: ما بين تطلعات الأندية وآمال الجمهور",

                        text:
                            "يتناول المقال التحديات القانونية والواقعية للاستثمار في الأندية الرياضية في مصر، وإشكاليات الملكية والرقابة والتنظيم."
                    }
                ]
            }
        ]
    },


    /* =====================================================
       EGYPT - WEEK 1 AUGUST 2026
    ===================================================== */

    {
        id: "egypt-august-1-2026",
        type: "egypt",
        typeName: "النشرة المصرية",
        title: "الأسبوع الأول من أغسطس 2026",
        number: "الأسبوع 01",
        date: "2 أغسطس 2026",

        intro:
            "مرحباً بكم في نشرة البوابة القانونية للتشريعات المصرية، حيث نتابع هذا الأسبوع أهم المستجدات التشريعية والأخبار القانونية وما يحدث في المجتمع القانوني.",

        highlights: [
            "تمويل المرحلة الجديدة من إصلاح منظومة التأمين الصحي الشامل",
            "تحت مظلة المبادرة الرئاسية «صحتك سعادة» لتعزيز الصحة النفسية",
            "أطلق البنك المركزي ووزارة الخارجية والتعاون الدولي مبادرة «حدث بياناتك في مصر»",
            "بحثا وزيرا الإنتاج الحربي والاستثمار سبل تعزيز التعاون المشترك",
            "أطلقت الحكومة المصرية مبادرة «معاشك بكرة بالدولار» للمصريين بالخارج",
            "أطلقت الحكومة نظام الإيجار التمليكي للأراضي الصناعية",
            "متابعة مستجدات مشروع تعديل قانون البناء بشأن تنظيم اتحاد الشاغلين",
            "الاستثمارات الصينية في مصر تتجاوز 10 مليار دولار"
        ],

        sections: [

            {
                title: "أجندة تشريعية",

                featured: {
                    title:
                        "تمويل المرحلة الجديدة من إصلاح منظومة التأمين الصحي الشامل",

                    text:
                        "وافق مجلس الوزراء على مشروع قرار رئيس الجمهورية بشأن اتفاق تمويل المرحلة الجديدة من إصلاح منظومة التأمين الصحي الشامل مع الوكالة الفرنسية للتنمية. ويهدف الاتفاق إلى دعم التحول المنهجي للمنظومة، وتعزيز الحوكمة التشغيلية والاستراتيجية، وتسهيل تخطيط الميزانية لتحقيق الاستدامة المالية."
                },

                cards: [
                    {
                        title:
                            "تحت مظلة المبادرة الرئاسية «صحتك سعادة» لتعزيز الصحة النفسية",

                        text:
                            "استعرض مجلس الوزراء ملامح مبادرة علاج إدمان الألعاب الإلكترونية التابعة للمبادرة الرئاسية «صحتك سعادة»، والتي تهدف لتعزيز الصحة النفسية والتوعية بمخاطر الإدمان الرقمي."
                    },

                    {
                        title:
                            "انطلاق الدراسة بـ5 مدارس مصرية إيطالية للتكنولوجيا التطبيقية",

                        text:
                            "أعلنت وزارة التربية والتعليم والتعليم الفني انطلاق الدراسة بـ5 مدارس مصرية إيطالية للتكنولوجيا التطبيقية بدءاً من العام الدراسي 2026/2027."
                    }
                ]
            },

            {
                title: "أهم الأخبار",

                cards: [
                    {
                        title:
                            "بحثا وزيرا الإنتاج الحربي والاستثمار سبل تعزيز التعاون المشترك",

                        text:
                            "التقى وزير الإنتاج الحربي وزير الاستثمار لبحث سبل التعاون المشترك واستعراض الإمكانات الصناعية والتكنولوجية ومجالات جذب الاستثمارات."
                    },

                    {
                        title:
                            "أطلقت الحكومة المصرية مبادرة «معاشك بكرة» بالدولار للمصريين بالخارج",

                        text:
                            "شهد مؤتمر المصريين بالخارج توقيع بروتوكولات تعاون لتعزيز الخدمات المقدمة للمصريين بالخارج."
                    },

                    {
                        title:
                            "أطلقت الحكومة نظام الإيجار التمليكي للأراضي الصناعية",

                        text:
                            "أطلقت وزارة الصناعة نظام الإيجار التمليكي للأراضي الصناعية عبر منصة مصر الصناعية الرقمية."
                    },

                    {
                        title:
                            "تابعت وزيرة الإسكان مستجدات مشروع تعديل قانون البناء",

                        text:
                            "تابعت وزيرة الإسكان التعديلات المقترحة على قانون البناء، بما يشمل تطوير منظومة اتحاد الشاغلين."
                    },

                    {
                        title:
                            "الاستثمارات الصينية في مصر تتجاوز 10 مليار دولار",

                        text:
                            "أكد رئيس مجلس الوزراء أن الاستثمارات الصينية في مصر تجاوزت 10 مليارات دولار."
                    }
                ]
            },

            {
                title: "ما يحدث في المجتمع القانوني",

                cards: [
                    {
                        title:
                            "لا توجد أخبار جديدة في هذا القسم",

                        text:
                            "سيتم عرض المحتوى عند توفره."
                    }
                ]
            },

            {
                title: "مقالات قانونية",

                cards: [
                    {
                        title:
                            "لا توجد مقالات جديدة في هذا العدد",

                        text:
                            "سيتم عرض المحتوى عند توفره."
                    }
                ]
            }
        ]
    },


    /* =====================================================
       ARAB - ISSUE 83
    ===================================================== */

    {
        id: "arab-83",

        type: "arab",

        typeName: "النشرة القانونية العربية",

        title: "العدد الثالث والثمانون",

        number: "العدد 83",

        date: "19 يوليو 2026",

        intro:
            "مرحباً بكم في العدد الثالث والثمانون للنشرة القانونية العربية، التي تتناول أهم التشريعات والأخبار القانونية وما يحدث في المجتمع القانوني العربي في الأردن والمملكة العربية السعودية والإمارات العربية المتحدة.",

        highlights: [
            "تعديل أحكام الإجازة بدون راتب لتصبح أكثر مرونة لموظفي القطاع العام",
            "تأسيس صندوق الحماية والرعاية الاجتماعية",
            "11 قراراً لدعم القطاع السياحي في البترا",
            "اللائحة التنفيذية لمكافحة الغش التجاري في الإمارات",
            "جهود وطنية في مكافحة الاتجار بالأشخاص",
            "برنامج «تطوير السياسات» المدعوم بالذكاء الاصطناعي",
            "مركز المراقبة والتحكم للممرات المائية لتعزيز السلامة البحرية"
        ],

        sections: [

            {
                title: "التشريعات العربية",

                countries: [

                    {
                        name: "الأردن",
                        code: "أر",

                        cards: [

                            {
                                title:
                                    "الأردن والولايات المتحدة توقعان اتفاقاً للتجارة المتبادلة",

                                text:
                                    "وقعت الأردن والولايات المتحدة في واشنطن اتفاقية تجارة متبادلة جديدة تهدف إلى تعزيز العلاقات الاقتصادية وزيادة الصادرات الأردنية."
                            },

                            {
                                title:
                                    "تعديل أحكام الإجازة بدون راتب لموظفي القطاع العام",

                                text:
                                    "أحال مجلس الوزراء مشروع نظام معدل لنظام إدارة الموارد البشرية في القطاع العام لسنة 2026 إلى ديوان التشريع والرأي."
                            },

                            {
                                title:
                                    "تأسيس صندوق الحماية والرعاية الاجتماعية",

                                text:
                                    "أقر مجلس الوزراء نظام صندوق الحماية والرعاية الاجتماعية لسنة 2026."
                            },

                            {
                                title:
                                    "11 قراراً لدعم القطاع السياحي في البترا",

                                text:
                                    "أقر مجلس الوزراء الأردني حزمة دعم شاملة للقطاع السياحي في إقليم البترا التنموي."
                            }
                        ]
                    },

                    {
                        name: "الإمارات العربية المتحدة",
                        code: "إم",

                        cards: [

                            {
                                title:
                                    "اللائحة التنفيذية لمكافحة الغش التجاري",

                                text:
                                    "صدر قرار مجلس الوزراء رقم 107 لسنة 2026 بإصدار اللائحة التنفيذية لمكافحة الغش التجاري."
                            },

                            {
                                title:
                                    "النظام الإماراتي للحد من أكاسيد النيتروجين",

                                text:
                                    "أصدر مجلس الوزراء قراراً برقابة محلول اليوريا المائي المستخدم للحد من انبعاثات محركات الديزل."
                            }
                        ]
                    }
                ]
            },


            {
                title: "الأخبار القانونية العربية",

                countries: [

                    {
                        name: "المملكة العربية السعودية",
                        code: "سع",

                        cards: [

                            {
                                title:
                                    "مكافحة الاتجار بالأشخاص",

                                text:
                                    "تواصل وزارة الموارد البشرية والتنمية الاجتماعية جهودها الوطنية في مكافحة الاتجار بالأشخاص."
                            },

                            {
                                title:
                                    "الوزارة تنظّم ورشة «مسرعة المهارات»",

                                text:
                                    "نظمت الوزارة بالتعاون مع غرفة الرياض ورشة افتراضية للتعريف بمبادرة مسرعة المهارات."
                            }
                        ]
                    },

                    {
                        name: "الإمارات العربية المتحدة",
                        code: "إم",

                        cards: [

                            {
                                title:
                                    "برنامج «تطوير السياسات» المدعوم بالذكاء الاصطناعي",

                                text:
                                    "أطلقت دائرة التمكين الحكومي بأبو ظبي برنامجاً مدعوماً بالذكاء الاصطناعي لتطوير قدرات القيادات الحكومية."
                            },

                            {
                                title:
                                    "مركز المراقبة والتحكم للممرات المائية",

                                text:
                                    "أطلق مركز النقل المتكامل مركزاً للمراقبة والتحكم للممرات المائية بالاعتماد على الأنظمة الذكية."
                            }
                        ]
                    }
                ]
            },


            {
                title: "ما يحدث في المجتمع القانوني",

                countries: [

                    {
                        name: "الإمارات العربية المتحدة",
                        code: "إم",

                        cards: [

                            {
                                title:
                                    "استحواذ «ألايند داتا سنترز» بقيمة مؤسسية تقارب 40 مليار دولار",

                                text:
                                    "أعلنت الجهات المشاركة إتمام الاستحواذ على 100% من أسهم شركة ألايند داتا سنترز."
                            }
                        ]
                    }
                ]
            },


            {
                title: "مقالات قانونية",

                empty: true
            }
        ]
    }
];


/* =========================================================
   SAVED ARTICLES
========================================================= */

const SAVED_KEY = "elpai_saved_articles";


function getSavedArticles() {

    try {

        return JSON.parse(
            localStorage.getItem(SAVED_KEY)
        ) || [];

    } catch (error) {

        return [];

    }

}


function saveSavedArticles(items) {

    localStorage.setItem(
        SAVED_KEY,
        JSON.stringify(items)
    );

}


function articleKey(
    newsletterId,
    title
) {

    return newsletterId + "::" + title;

}


function isArticleSaved(
    newsletterId,
    title
) {

    return getSavedArticles().some(
        article =>
            article.id ===
            articleKey(
                newsletterId,
                title
            )
    );

}


function toggleSaveArticle(
    article,
    newsletterId,
    newsletterTitle
) {

    const saved =
        getSavedArticles();

    const id =
        articleKey(
            newsletterId,
            article.title
        );

    const existingIndex =
        saved.findIndex(
            item =>
                item.id === id
        );


    if (existingIndex !== -1) {

        saved.splice(
            existingIndex,
            1
        );

    } else {

        saved.push({

            id: id,

            title:
                article.title,

            text:
                article.text,

            newsletterId:
                newsletterId,

            newsletterTitle:
                newsletterTitle

        });

    }


    saveSavedArticles(saved);

    updateSaveButtons();

    renderSavedArticles();

}


/* =========================================================
   UPDATE SAVE BUTTONS
========================================================= */

function updateSaveButtons() {

    document
        .querySelectorAll(".save-button")
        .forEach(button => {

            const newsletterId =
                button.dataset.newsletter;

            const title =
                button.dataset.title;


            const saved =
                isArticleSaved(
                    newsletterId,
                    title
                );


            button.classList.toggle(
                "saved",
                saved
            );


            button.textContent =
                saved
                    ? "✓ محفوظ"
                    : "♡ حفظ";

        });

}


/* =========================================================
   GET NEWSLETTER ID
========================================================= */

function getNewsletterId() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return params.get("id");

}


/* =========================================================
   SHARE
========================================================= */

function shareNews(title) {

    if (navigator.share) {

        navigator.share({

            title: "ELPAI",

            text: title

        }).catch(() => {});

    } else if (
        navigator.clipboard
    ) {

        navigator.clipboard
            .writeText(title)
            .then(() => {

                alert(
                    "تم نسخ عنوان الخبر"
                );

            })
            .catch(() => {

                alert(
                    "تعذر نسخ عنوان الخبر"
                );

            });

    } else {

        alert(
            "تم اختيار مشاركة الخبر"
        );

    }

}


/* =========================================================
   CREATE NEWS CARD
========================================================= */

function createCard(
    news,
    featured = false,
    newsletterId = "",
    newsletterTitle = ""
) {

    const saved =
        isArticleSaved(
            newsletterId,
            news.title
        );


    return `

        <article
            class="${featured
                ? "featured-news"
                : "news-card"}">

            <div class="news-meta">

                <span class="news-dot"></span>

                ${featured
                    ? "خبر رئيسي"
                    : "مستجد قانوني"}

            </div>


            <h4>
                ${news.title}
            </h4>


            <p>
                ${news.text}
            </p>


            <div class="news-actions">

                <button
                    class="save-button ${saved ? "saved" : ""}"
                    data-newsletter="${newsletterId}"
                    data-title="${news.title}"
                    onclick='toggleSaveArticle(
                        ${JSON.stringify(news)},
                        ${JSON.stringify(newsletterId)},
                        ${JSON.stringify(newsletterTitle)}
                    )'>

                    ${saved
                        ? "✓ محفوظ"
                        : "♡ حفظ"}

                </button>


                <button
                    class="share-button"
                    onclick='shareNews(
                        ${JSON.stringify(news.title)}
                    )'>

                    مشاركة الآن ↗

                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   CREATE SECTION
========================================================= */

function createSection(
    section,
    newsletterId,
    newsletterTitle
) {

    let html = `

        <section class="news-section">

            <div class="section-heading">

                <span class="section-line"></span>

                <h3>
                    ${section.title}
                </h3>

            </div>

    `;


    /* EMPTY */

    if (section.empty) {

        html += `

            <div class="empty-state">

                <div class="empty-icon">
                    ○
                </div>

                <strong>
                    لا توجد نتائج في هذا القسم حالياً
                </strong>

                <span>
                    سيتم عرض المحتوى هنا عند توفره.
                </span>

            </div>

        `;

        return html +
            `</section>`;

    }


    /* FEATURED */

    if (section.featured) {

        html += createCard(
            section.featured,
            true,
            newsletterId,
            newsletterTitle
        );


        if (section.cards) {

            html += `

                <div class="news-grid">

                    ${section.cards
                        .map(
                            card =>
                                createCard(
                                    card,
                                    false,
                                    newsletterId,
                                    newsletterTitle
                                )
                        )
                        .join("")}

                </div>

            `;

        }

    }


    /* COUNTRIES */

    if (section.countries) {

        section.countries
            .forEach(country => {

                html += `

                    <div class="country-heading">

                        <span class="country-icon">
                            ${country.code}
                        </span>

                        <h4>
                            ${country.name}
                        </h4>

                    </div>


                    <div class="news-grid">

                        ${country.cards
                            .map(
                                card =>
                                    createCard(
                                        card,
                                        false,
                                        newsletterId,
                                        newsletterTitle
                                    )
                            )
                            .join("")}

                    </div>

                `;

            });

    }


    /* NORMAL CARDS */

    if (
        !section.featured &&
        !section.countries &&
        section.cards
    ) {

        html += `

            <div class="news-grid">

                ${section.cards
                    .map(
                        card =>
                            createCard(
                                card,
                                false,
                                newsletterId,
                                newsletterTitle
                            )
                    )
                    .join("")}

            </div>

        `;

    }


    html += `</section>`;


    return html;

}


/* =========================================================
   CREATE ARCHIVE CARD
========================================================= */

function createArchiveCard(
    newsletter
) {

    return `

        <a
            class="archive-card"
            href="newsletter.html?id=${encodeURIComponent(
                newsletter.id
            )}">

            <div>

                <div class="archive-card-top">

                    <span class="archive-card-type">
                        ${newsletter.typeName}
                    </span>

                    <span class="archive-card-number">
                        ${newsletter.number}
                    </span>

                </div>


                <h3>
                    ${newsletter.title}
                </h3>


                <span class="archive-card-date">
                    ${newsletter.date}
                </span>

            </div>


            <div class="archive-card-bottom">

                <span class="archive-card-link">
                    قراءة النشرة
                </span>

                <span class="archive-card-arrow">
                    ←
                </span>

            </div>

        </a>

    `;

}


/* =========================================================
   RENDER SAVED ARTICLES
========================================================= */

function renderSavedArticles() {

    const list =
        document.getElementById(
            "savedArticlesList"
        );


    const count =
        document.getElementById(
            "savedCount"
        );


    if (!list) return;


    const saved =
        getSavedArticles();


    if (count) {

        count.textContent =
            `${saved.length} مقال`;

    }


    if (!saved.length) {

        list.innerHTML = `

            <div class="saved-empty">

                <strong>
                    لا توجد مقالات محفوظة حالياً
                </strong>

                <span>
                    اضغط على «♡ حفظ»
                    بجانب أي مقال لإضافته إلى المحفوظات.
                </span>

            </div>

        `;

        return;

    }


    list.innerHTML =
        saved
            .map(
                article => `

                    <article class="saved-card">

                        <div class="saved-card-meta">
                            ${article.newsletterTitle}
                        </div>


                        <h4>
                            ${article.title}
                        </h4>


                        <p>
                            ${article.text}
                        </p>


                        <div class="saved-card-actions">

                            <a
                                class="saved-read"
                                href="newsletter.html?id=${encodeURIComponent(
                                    article.newsletterId
                                )}">

                                قراءة النشرة ↗

                            </a>


                            <button
                                class="save-button saved"
                                data-newsletter="${article.newsletterId}"
                                data-title="${article.title}"
                                onclick='toggleSaveArticle(
                                    ${JSON.stringify({
                                        title: article.title,
                                        text: article.text
                                    })},
                                    ${JSON.stringify(
                                        article.newsletterId
                                    )},
                                    ${JSON.stringify(
                                        article.newsletterTitle
                                    )}
                                )'>

                                ✓ إزالة من المحفوظات

                            </button>

                        </div>

                    </article>

                `
            )
            .join("");

}


/* =========================================================
   RENDER ARCHIVE
========================================================= */

function renderArchive(
    type = "egypt"
) {

    const archive =
        document.getElementById(
            "newsletterArchive"
        );


    if (!archive) return;


    const filtered =
        newsletters.filter(
            newsletter =>
                newsletter.type === type
        );


    /* TITLE */

    const archiveTitle =
        document.getElementById(
            "archiveTitle"
        );


    if (archiveTitle) {

        archiveTitle.textContent =
            type === "egypt"
                ? "أعداد النشرة المصرية"
                : "أعداد النشرة العربية";

    }


    /* TYPE */

    const archiveType =
        document.getElementById(
            "archiveType"
        );


    if (archiveType) {

        archiveType.textContent =
            type === "egypt"
                ? "النشرة المصرية"
                : "النشرة العربية";

    }


    /* COUNT */

    const archiveCount =
        document.getElementById(
            "archiveCount"
        );


    if (archiveCount) {

        archiveCount.textContent =
            type === "egypt"
                ? `${filtered.length} نشرة`
                : `${filtered.length} أعداد`;

    }


    /* EMPTY */

    if (!filtered.length) {

        archive.innerHTML = `

            <div class="archive-empty">

                <strong>
                    لا توجد نشرات متاحة حالياً
                </strong>

                <span>
                    سيتم إضافة الأعداد الجديدة هنا عند توفرها.
                </span>

            </div>

        `;

        return;

    }


    /* RENDER */

    archive.innerHTML =
        filtered
            .map(createArchiveCard)
            .join("");

}


/* =========================================================
   RENDER NEWSLETTER PAGE
========================================================= */

function renderNewsletterPage(
    newsletter
) {

    if (!newsletter) {

        document.title =
            "النشرة غير موجودة | ELPAI";


        const intro =
            document.getElementById(
                "newsletterIntro"
            );


        const sections =
            document.getElementById(
                "newsletterSections"
            );


        if (intro) {

            intro.textContent =
                "عذراً، لم يتم العثور على هذه النشرة.";

        }


        if (sections) {

            sections.innerHTML = `

                <div class="empty-state">

                    <strong>
                        النشرة غير موجودة
                    </strong>

                    <span>
                        برجاء العودة إلى الأرشيف واختيار عدد آخر.
                    </span>

                </div>

            `;

        }

        return;

    }


    document.title =
        `${newsletter.title} | ELPAI`;


    const type =
        document.getElementById(
            "pageNewsletterType"
        );


    const title =
        document.getElementById(
            "pageNewsletterTitle"
        );


    const number =
        document.getElementById(
            "pageNewsletterNumber"
        );


    const intro =
        document.getElementById(
            "newsletterIntro"
        );


    const highlights =
        document.getElementById(
            "newsletterHighlights"
        );


    const sections =
        document.getElementById(
            "newsletterSections"
        );


    if (type) {

        type.textContent =
            newsletter.typeName;

    }


    if (title) {

        title.textContent =
            newsletter.title;

    }


    if (number) {

        number.textContent =
            newsletter.number +
            " • " +
            newsletter.date;

    }


    if (intro) {

        intro.textContent =
            newsletter.intro;

    }


    if (highlights) {

        highlights.innerHTML =
            newsletter.highlights
                .map(
                    (item, index) => `

                        <div class="highlight">

                            <span class="highlight-number">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            ${item}

                        </div>

                    `
                )
                .join("");

    }


    if (sections) {

        sections.innerHTML =
            newsletter.sections
                .map(
                    section =>
                        createSection(
                            section,
                            newsletter.id,
                            newsletter.title
                        )
                )
                .join("");

    }


    updateSaveButtons();

}


/* =========================================================
   TABS
========================================================= */

function setupArchiveTabs() {

    const tabs =
        document.querySelectorAll(
            ".newsletter-tab:not(.disabled)"
        );


    tabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                tabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                tab.classList.add(
                    "active"
                );


                const selected =
                    tab.dataset.type;


                renderArchive(
                    selected
                );

            }
        );

    });

}


/* =========================================================
   OPEN NEWSLETTER
========================================================= */

function openNewsletter(id) {

    window.location.href =
        `newsletter.html?id=${encodeURIComponent(id)}`;

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* ============================
           ARCHIVE PAGE
        ============================ */

        if (
            document.getElementById(
                "newsletterArchive"
            )
        ) {

            renderArchive(
                "egypt"
            );


            setupArchiveTabs();


            renderSavedArticles();

        }


        /* ============================
           NEWSLETTER DETAILS PAGE
        ============================ */

        if (
            document.getElementById(
                "newsletterSections"
            )
        ) {

            const id =
                getNewsletterId();


            const newsletter =
                newsletters.find(
                    item =>
                        item.id === id
                );


            renderNewsletterPage(
                newsletter
            );

        }

    }
);
```
