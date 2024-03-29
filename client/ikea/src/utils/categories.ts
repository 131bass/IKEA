import { CategoriesTypeArr } from "../types/category"
import productsIcon from '../assets/icons/products.png'
import roomsIcon from '../assets/icons/rooms.png'



const categoriesArr: CategoriesTypeArr[] = [
    {
        name: "מוצרים",
        imgURL: productsIcon,
        categories: [
            {
                name: 'ריהוט לבית',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/furniture-fu001.jpeg?imwidth=200',
                subCategories: ["ספות", "כורסאות, הדומים ושזלונגים", "מיטות", "ארונות ומערכות לאחסון בגדים", "שולחנות", "כסאות", " פתרונות ריהוט למדיה", " כונניות ויחידות מדפים", " שידות ויחידות מגירה", "מזנונים וארונות תצוגה", " עגלות אחסון מטבח ואמבטיה", " גן ומרפסת", " כסאות ושולחנות בר", "ריהוט ואביזרים לגיימינג", "מזנונים וקונסולות", " מחיצות לבית ולמשרד", " ריהוט לילדים", "ריהוט לתינוקות והגיל הרך", "סט ריהוט", "ריהוט לפינות אוכל"
                ]
            },
            {
                name: 'אחסון וארגון',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/storage-organisation-st001.jpeg?imwidth=200',
                subCategories: [
                    "כונניות ויחידות מדפים",
                    "מערכות אחסון לבית",
                    "מזנונים וארונות תצוגה",
                    "פתרונות ריהוט למדיה",
                    "שידות ויחידות מגירה",
                    "ארונות ומערכות לאחסון בגדים",
                    "אביזרים לארגון ואחסון",
                    "מידוף למחסן",
                    "מזנונים וקונסולות",
                    "ריהוט ואביזרים לגינה ומרפסת",
                    "ווים מדפים ולוחות תלייה",
                    "מתלי בגדים וארונות נעלים",
                    "עגלות אחסון מטבח ואמבטיה",
                    "תיקים",
                    "סלים ואביזרים לאחסון",
                    "אחסון וארגון לחדר הילדים"
                ]
            },
            {
                name: 'מיטות ומזרנים',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/beds-mattresses-bm001.jpeg?imwidth=200',
                subCategories: [
                    "מיטות",
                    "מזרנים",
                    "טקסטיל לחדר השינה",
                    "אחסון מתחת למיטה",
                    "שידות לצד מיטה",
                    "בסיס מזרן",
                    "ראשי מיטה",
                    "בסיסי מיטות ומזרנים",
                    "רגלים לבסיסי מיטה"
                ]
            },
            {
                name: 'מטבחים',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/kitchen-appliances-ka001.jpeg?imwidth=200',
                subCategories: [
                    "סדרות מטבחים",
                    "חיפויי קיר למטבח",
                    "אחסון וארגון למטבח",
                    "ברזים וכיורים למטבח",
                    "משטחי עבודה למטבח",
                    "תאורת מטבח",
                    "ריהוט משלים למטבח",
                    "אבזור חוץ למטבח",
                    "ידיות",
                    "מטבחים עצמאיים",
                    "מזווה",
                    "דלתות וחזיתות",
                    "ארונות מטבח",
                    "מכשירי חשמל למטבח"
                ]
            },
            {
                name: 'כלים לבישול ועריכת שולחן',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/kitchenware-tableware-kt001.jpeg?imwidth=200',
                subCategories: [
                    " כלי בישול",
                    "כלים לאחסון מזון ושתיה",
                    "אביזרים למטבח",
                    "כלי אפייה",
                    "סכינים וקרשי חיתוך",
                    "צלחות אוכל והגשה",
                    "כוסות וקנקנים",
                    "סכו''ם",
                    "כלים לקפה ותה",
                    "מגשים וצלחות להגשה",
                    "מפיות ומחזיקי מפיות",
                    "ניקוי וייבוש כלים",
                    "טקסטיל למטבח",
                    "טקסטיל לפינת האוכל",
                    "כלי בישול ועריכת שולחן לילדים",
                    "אביזרים לפיקניק"
                ]
            },
            {
                name: 'תאורה',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/lighting-li001.jpeg?imwidth=200',
                subCategories: [
                    " תאורת אווירה",
                    "מנורות",
                    "תאורה חכמה",
                    "תאורה ייעודית לריהוט",
                    "תאורה לחדר האמבטיה",
                    "תאורת גינה וחוץ",
                    "נורות לד"
                ]
            },
            {
                name: 'אביזרי נוי',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/decoration-de001.jpeg?imwidth=200',
                subCategories: [
                    "תמונות מסגרות ומדפים לתמונות",
                    "צמחים ופרחים מלאכותיים",
                    "קופסאות אחסון וסלסלות",
                    "עציצים ואדניות",
                    "מראות",
                    "פמוטים ונרות",
                    "אגרטלים וקערות",
                    "לוחות מודעות",
                    "אביזרי נוי",
                    "שעונים",
                    "פוטפורי ובישום הבית"
                ]
            },
            {
                name: 'טקסטיל לבית',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/textiles-tl001.jpeg?imwidth=200',
                subCategories: [
                    " טקסטיל לחדר השינה",
                    "וילונות כנף וגלילה",
                    "כריות נוי",
                    "טקסטיל לחדר האמבטיה",
                    "טקסטיל לתינוקות",
                    "טקסטיל לחדר הילדים",
                    "כלי תפירה",
                    "טקסטיל למטבח",
                    "טקסטיל לפינת האוכל",
                    "כריות מושב ונוי לגינה ולמרפסת",
                    "שמיכות טלויזיה",
                    "חלוקי רחצה ונעלי בית",
                    "כריות מושב",
                    "שטיחים",
                    "כריות תמיכה למותן"
                ]
            },
            {
                name: 'ריהוט לחדר האמבטיה',
                imgURL: 'https://www.ikea.com/il/he/range-categorisation/images/product/bathroom-products-ba001.jpeg?imwidth=200',
                subCategories: [
                    "מערכות לחדר האמבטיה",
                    "ארונות אמבטיה ומעמדים לכיור",
                    "אחסון לחדר האמבטיה",
                    "מראות לחדר האמבטיה",
                    "ריהוט ואביזרים לחדר האמבטיה",
                    "כביסה וגיהוץ",
                    "טקסטיל לחדר האמבטיה",
                    "תאורה לחדר האמבטיה",
                    "כיורי אמבטיה",
                    "אביזרים למקלחת",
                    "ברזים ואביזרים לכיור אמבטיה"
                ]
            },
            {
                name: 'תינוקות וילדים',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/baby-children-bc001.jpeg?imwidth=200',
                subCategories: [
                    " תינוקות",
                    "ילדים"
                ]
            },
            {
                name: 'עציצים ואביזרי השקיה',
                imgURL: 'https://www.ikea.com/il/he/range-categorisation/images/product/pots-plants-pp001.jpeg?imwidth=200',
                subCategories: [
                    " עציצים ואדניות",
                    "צמחים ופרחים מלאכותיים",
                    "מעמדי עציצים וחממות",
                    "משפכים ואביזרי השקייה",
                    "גידול וטיפול בצמחים"
                ]
            },
            {
                name: 'ריהוט גן ואביזרים',
                imgURL: 'https://www.ikea.com/il/he/range-categorisation/images/product/outdoor-products-od001.jpeg?imwidth=200',
                subCategories: [
                    " גן ומרפסת",
                    "שמשיות ופתרונות הצללה",
                    "ריהוט ואביזרים לגינה ומרפסת",
                    "אדניות ועציצים לגינה ולמרפסת",
                    "מטבח חוץ ואביזרים",
                    "אביזרים לגינה ופיקניק",
                    "ריצוף לגינה וחוץ",
                    "שטיחים למרפסת וגינה",
                    "תאורת גינה וחוץ"
                ]
            },
            {
                name: 'כביסה וניקיון',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/laundry-cleaning-lc001.jpeg?imwidth=200',
                subCategories: [
                    " פחים למיון ומחזור אשפה",
                    "ניקוי וייבוש כלים",
                    "ריהוט לחדר כביסה",
                    "סלי כביסה",
                    "אביזרים לתליית כביסה",
                    "אביזרים לניקוי",
                    "מתקני ייבוש כביסה",
                    "קרשי גיהוץ",
                    "מיון אשפה"
                ]
            },
            {
                name: 'שטיחים',
                imgURL: 'https://www.ikea.com/il/he/range-categorisation/images/product/rugs-mats-flooring-rm001.jpeg?imwidth=200',
                subCategories: [
                    "שטיחים",
                    "שטיחי אמבטיה",
                    "ריצוף לגינה וחוץ",
                    "שטיחי כניסה לבית"
                ]
            },
            {
                name: 'תחזוקת הבית',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/home-improvement-hi001.jpeg?imwidth=200',
                subCategories: [
                    " כלי עבודה ותחזוקה",
                    "ריצוף לגינה וחוץ",
                    "שימון ותחזוקה",
                    "ידיות",
                    "חיפויי קיר למטבח",
                    "מחיצות להפחתת רעש",
                    "סלים ואביזרים לאחסון",
                    "אביזרי בטיחות"
                ]
            },
            {
                name: 'אלקטרוניקה לבית',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/home-electronics-he001.jpeg?imwidth=200',
                subCategories: [
                    " מכשירי חשמל למטבח",
                    "תאורה חכמה",
                    "אביזרי הטענה וסוללות",
                    "וילונות חכמים/חשמליים",
                    "מטענים ומעמדים לטאבלט וטלפון סלולארי",
                    "רמקולים",
                    "מטהרי אוויר ואביזרים",
                    "מארגני כבלים",
                    "אביזרים והתקנים לתאורה חכמה"
                ]
            },
            {
                name: 'בית חכם',
                imgURL: 'https://www.ikea.com/il/he/range-categorisation/images/product/smart-home-hs001.jpeg?imwidth=200',
                subCategories: [
                    "  מטהרי אויר חכמים",
                    "תאורה חכמה",
                    "וילונות חכמים/חשמליים",
                    "אביזרים והתקנים לתאורה חכמה",
                    "רמקולי Wi-Fi"
                ]
            },
            {
                name: 'מוצרים לחיות מחמד',
                imgURL: 'https://www.ikea.com/global/assets/range-categorisation/images/product/pet-products-pt001.jpeg?imwidth=200',
                subCategories: [
                    " חתולים",
                    "כלבים"
                ]
            },
            {
                name: 'קולקציית חורף',
                imgURL: 'https://www.ikea.com/il/he/range-categorisation/images/product/winter-holiday-wt001.jpeg?imwidth=200',
                subCategories: [
                    " תאורה קולקציית חורף",
                    "בישול ואפייה"
                ]
            }
        ]
    }, {
        name: "חדרים",
        imgURL: roomsIcon,
        categories: [
            {
                name: 'חדר שינה',
                imgURL: 'https://www.ikea.com/images/-97b26da5f0394ee77a37dac6b13f22f7.jpg?imwidth=300'
            },
            {
                name: 'חדר מגורים',
                imgURL: 'https://www.ikea.com/images/kivik-eket-e8eb237382f450dbf0c88bd152083b1f.jpg?imwidth=300'
            },
            {
                name: 'מטבח',
                imgURL: 'https://www.ikea.com/images/axstad-73bf19a5e2dba478866a86831e073e48.jpg?imwidth=300'
            },
            {
                name: 'פינת אוכל',
                imgURL: 'https://www.ikea.com/images/skogsta-ivar-2252f497be7583b8d3ee3652f399f0c9.jpg?imwidth=300'
            },
            {
                name: 'חדר ילדים',
                imgURL: 'https://www.ikea.com/images/smastad-0cee70eb1d0ba7f5497d088bf1ada41a.jpg?imwidth=300'
            },
            {
                name: 'חדר אמבטיה',
                imgURL: 'https://www.ikea.com/images/enhet-eba6305531e109a7b2b8373ac9645d1b.jpg?imwidth=300'
            },
            {
                name: 'חדר עבודה',
                imgURL: 'https://www.ikea.com/images/lidkullen-trotten-4d6395de0e5fb225025d9525a504bce2.jpg?imwidth=300'
            },
            {
                name: 'כניסה ומסדרון',
                imgURL: 'https://www.ikea.com/images/platsa-2d600941ab6190fb51bf3e81be4b8014.jpg?imwidth=300'
            },
            {
                name: 'גן ומרפסת',
                imgURL: 'https://www.ikea.com/images/bondholmen-batskaer-6addab668fa66c61f836c14a84f5a300.jpg?imwidth=300'
            },
            {
                name: 'חדר כביסה',
                imgURL: 'https://www.ikea.com/images/nysjoen-9e95bad7aad891b80136b497ba670a01.jpg?imwidth=300'
            },
            {
                name: 'IKEA לעסקים',
                imgURL: 'https://www.ikea.com/images/-f257bf470dcd3fcec00b8ac008d69fef.jpg?imwidth=300'
            }
        ]
    },
    {
        name: "מוצרים חדשים וקולקציות",
        categories:
            [
                { name: "מוצרים חדשים" },
                { name: "קולקציות" },
                { name: "מוצרים בני קיימא" },
                { name: "המחירים הנמוכים ביותר שלנו" }
            ]
    },
    {
        name: "השראה ורעיונות",
        categories: [
            { name: "השראה ורעיונות" },
            { name: "השראה לכל חדר" },
            { name: "כדאי לדעת" }
        ]
    },
    {
        name: "תאום פגישות",
        categories: [
            { name: "תאום פגישת מטבחים" },
            { name: "איקאה לעסקים" }
        ]
    },
    {
        name: "שירות לקוחות",
        categories: [
            { name: "איך לקנות באיקאה" },
            { name: "שאלות ותשובות" },
            { name: "השירותים שלנו" },
            { name: "מידע נוסף על מוצרים" },
            { name: "החזרות ותעודת אחריות" },
            { name: "נגישות" },
            { name: "צרו קשר" }
        ]
    },
    {
        name: "שעות פעילות",
        categories: [
            { name: "שעות פעילות" }

        ]
    },
    {
        name: "לאכול באיקאה",
        categories: [
            { name: "מסעדה שבדית" },
            { name: "בית קפה שבדי" },
            { name: "חנות המזון השבדי" },
            { name: "ביסטרו שבדי" }

        ]
    },
    {
        name: "עוד",
        categories: [
            { name: "החשבון שלי" },
            { name: "כלי תכנון" },
            { name: "מדריכי קניה" }
        ]
    }


]

export default categoriesArr