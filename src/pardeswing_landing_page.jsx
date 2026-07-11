"use client";

import { useState } from "react";
import { Mail, MessageCircle, ChevronDown } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function CourseItem({ name, description, dark = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-900/15 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-right"
      >
        <span className="text-lg md:text-xl font-bold">
          {name}
        </span>

        <ChevronDown
          size={22}
          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${isOpen
          ? "grid-rows-[1fr] opacity-100 pb-5"
          : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p
            className={`leading-7 pl-8 ${dark ? "text-white/80" : "text-neutral-700"
              }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CourseGroup({ title, subtitle, courses, dark = false }) {
  return (
    <div
      className={`rounded-[2rem] p-7 md:p-9 ${dark
        ? "bg-[#559686] text-white"
        : "bg-white border border-neutral-200 shadow-sm"
        }`}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-2">
        {title}
      </h3>

      <p
        className={`mb-5 leading-7 ${dark ? "text-white/75" : "text-neutral-600"
          }`}
      >
        {subtitle}
      </p>

      <div className={dark ? "[&>div]:border-white/20" : ""}>
        {courses.map((course) => (
          <CourseItem
            key={course.name}
            name={course.name}
            description={course.description}
            dark={dark}
          />
        ))}
      </div>
    </div>
  );
}

export default function PardeSwingLandingPage() {
  const danceStyles = ["Lindy Hop", "Charleston", "Balboa (soon)", "Collegiate Shag (soon)", "Lindy Hop", "Charleston"];

  const beginnerCourses = [
    {
      name: "לינדי הופ – קצב 6",
      description:
        "היכרות עם הצעדים הבסיסיים של לינדי הופ במבנה של שישה ביטים. נלמד את צעד הבסיס ואת התנועות הראשונות במרחב: סנד אאוט, ברינג אין ופס ביי. נמשיך עם וריאציות על הסנד אאוט והברינג אין, כמו קאדל וסוויט-הארט. לאחר מכן נתחיל להכיר את עקרונות החיבור בין הלידר לפולוור דרך הטאק טרן, נלמד גם את הסטרול, ונסיים ברוטינה קצרה ומוכרת בשם פרנקי סיקסס.",
    },
    {
      name: "לינדי הופ – קצב 8",
      description:
        "היכרות עם מבנה שמונת הביטים בלינדי הופ. נלמד את צעד הבסיס ואת התנועות הראשונות, כמו פליפ פלופ ואאוט אנד אינס. בהמשך נכיר צעדים קלאסיים כמו יויו, יויו הפוך ופרומנייד, נלמד צעדי ברייק אהובים כמו המיני דיפ, ונסיים עם הסירקל ועם היכרות ראשונה עם הצעד הקאנוני והחשוב ביותר בלינדי הופ – הסווינג אאוט.",
    },
    {
      name: "צ'רלסטון",
      description:
        "היכרות עם קצב הצ'רלסטון, שממנו התפתח הלינדי הופ ושעד היום מהווה חלק בלתי נפרד מריקוד הסווינג. נלמד את הבייסיק צ'רלסטון ואת הצעדים המרכזיים, בהם קיק דה דוג, פיל אוואיי, טאק טרן, קיק ת'רוס והנד-טו-הנד. בנוסף נכיר צעדים מתקדמים יותר, כמו סיילור קיקס, איירפליין וטנדם, ונלמד כיצד לעבור בצורה זורמת בין הצעדים ולשלב אותם בריקוד.",
    },
  ];

  const continuingCourses = [
    {
      name: "סווינג אאוט",
      description:
        "העמקה באחת התנועות המרכזיות והאיקוניות של הלינדי הופ, עם דגש על זרימה, מומנטום, חיבור ותנועה במרחב. נלטש את הסווינג אאוט, נוסיף סוויבלים ועבודת רגליים מגוונת, נכיר וריאציות כמו סווינג אאוט עם סיבובים, סוויצ'ס וטקסס טומי, ונעשיר את הריקוד בעוד עיטורים, הפתעות ורעיונות שישדרגו את הריקוד החברתי.",
    },
    {
      name: "וריאציות",
      description:
        "נלמד ואריאציות חדשות וכיפיות לתנועות המוכרות מקורסי הבסיס, כמו גם צעדים חדשים ומגניבים.",
    },
    {
      name: "צ'רלסטון טנדם",
      description:
        "צ'רלסטון במנח טנדם, שבו שני הרקדנים פונים לאותו הכיוון. נלמד כניסות, יציאות, תנועות בסיסיות ושילובים מוזיקליים.",
    },
    {
      name: "דיפים ופינאלה",
      description:
        "נלמד מספר סיומות ודיפים בטוחים ונוחים, ונעבוד על תזמון מוזיקלי, תקשורת ואופן השימוש בהם בסיום משפט או שיר.",
    },
    {
      name: "חיבור, מוזיקליות ואלתור",
      description:
        "קורס העוסק בהקשבה לבן או לבת הזוג, בתגובה למוזיקה וביצירת ריקוד משותף, משחקי ואישי שאינו מבוסס רק על רצף תנועות קבוע.",
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
      `}</style>

      <section className="relative min-h-[110vh] flex items-start justify-center">
        <img
          src="Hero.webp"
          alt="Swing dancing"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_80%]"
        />
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-12 text-right md:translate-x-20">
          <div className="text-white text-right">
            <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
              PardeSwing
            </h1>
            <p className="uppercase tracking-[0.35em] text-lg mb-4 text-white/80">
              בית ספר לריקודי סווינג <br />
              בפרדס חנה-כרכור
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-300/80 border-y border-neutral-900/10 py-4 overflow-hidden">
        <div className="marquee-track text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap">
          {[...danceStyles, ...danceStyles, ...danceStyles, ...danceStyles].map((item, i) => (
            <span key={i} className="mx-8">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-[2rem] shadow-sm p-8 md:p-10 border border-neutral-200 text-right">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-3">
              מה זה סווינג?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              מוסיקת ג'אז וריקודים חברתיים
            </h2>
            <p className="text-lg leading-8 text-neutral-700 mb-5">
              סווינג הוא גם סגנון מוזיקלי בג'אז וגם שם כולל למשפחה של ריקודים חברתיים שהתפתחו לצדו. בדומה למוזיקה, גם הריקודים משחקיים, קופצניים, אנרגטיים, תוססים – ומלאים בשמחה. בקורסי המתחילים ניפגש עם הלינדי הופ והצ'רלסטון – שניים מהסגנונות הפופולריים ביותר במשפחת ריקודי הסווינג. </p>
          </div>

          <div className="bg-[#559686] text-white rounded-[2rem] shadow-sm p-8 md:p-10 text-right">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60 mb-3">
              קצת היסטוריה
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              נולד מתוך תרבות אפרו-אמריקאית ועידן הג'אז
            </h2>
            <p className="text-lg leading-8 text-white/85 mb-5">
              ריקודי הסווינג התפתחו בעיקר בשנות ה-20 עד ה-40 של המאה הקודמת, בקהילות אפרו-אמריקאיות בארצות הברית – במיוחד בשכונות כמו הארלם ובאולמות ריקוד כמו הסבוי (Savoy). הסווינג חווה תחייה מחודשת בשנות ה-80, בין היתר בעקבות גילויו מחדש של פרנקי מנינג – אחד מרקדני הסווינג הגדולים והאהובים ביותר.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[2rem] p-6 border border-neutral-200 shadow-sm text-right">
            <div className="text-2xl mb-3">🎷</div>
            <h3 className="text-xl font-bold mb-2">אנרגיית ג'אז</h3>
            <p className="text-neutral-700 leading-7">
              קשה להתנגד בפני מוסיקת הסווינג שמרימה את מצב הרוח ומניעה את הגוף.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] p-6 border border-neutral-200 shadow-sm text-right">
            <div className="text-2xl mb-3">🕺</div>
            <h3 className="text-xl font-bold mb-2">חיבור חברתי</h3>
            <p className="text-neutral-700 leading-7">
              כמעט בכל עיר גדולה בעולם רוקדים סווינג. בואו להכיר אנשים, לצחוק, לזוז ולבנות ביטחון דרך ריקוד זוגי.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] p-6 border border-neutral-200 shadow-sm text-right">
            <div className="text-2xl mb-3">✨</div>
            <h3 className="text-xl font-bold mb-2">כיף וחופש</h3>
            <p className="text-neutral-700 leading-7">
              בואו לגלות מחדש את הילד הפנימי וללמוד שפה תנועתית שמאפשרת ביטוי אישי ומשחקיות.
            </p>
          </div>
        </div>
      </section>


      <section id="courses" className="bg-[#f2eee5] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-3">
              מסלול הלימוד
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              הקורסים שלנו
            </h2>

            <p className="max-w-2xl mx-auto text-lg leading-8 text-neutral-700">
              מתחילים מהיסודות וממשיכים בהדרגה לתנועות, רעיונות ומיומנויות
              שמאפשרים לרקוד בחופשיות ובביטחון.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <CourseGroup
              title="קורסי מתחילים"
              subtitle="מתאימים למי שעושים את הצעדים הראשונים בעולם הסווינג. אין צורך בניסיון קודם או בבן או בת זוג. כל קורס כולל 4–6 מפגשים, וניתן להשתתף בקורסים בכל סדר."
              courses={beginnerCourses}
            />

            <CourseGroup
              title="קורסי ממשיכים"
              subtitle="קורסים ממוקדים למי שכבר מכירים את יסודות הלינדי הופ ורוצים להרחיב את אוצר התנועות ואת יכולות הריקוד."
              courses={continuingCourses}
              dark
            />
          </div>
        </div>
      </section>


      <section className="bg-[#e5e6b5] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#2f4f49]">
            קצת על עצמי
          </h2>

          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* VIDEO */}
              <div className="flex justify-center">
                <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/OLE5OgCJ3i8"
                    title="Swing dancing"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* TEXT + IMAGE */}
              <div className="text-right flex flex-col items-end gap-6">

                {/* Circle image */}
                <img
                  src="Me.jpg"
                  alt="David"
                  className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#e5e6b5] shadow-lg mx-auto" />

                {/* Text */}
                <div className="max-w-md">
                  <p className="text-[#3f5f58] leading-7">
                    אהלן, אני דוד. את הסווינג הכרתי איפהשהו ב-2008, כשנתקלתי לתומי בפלאשמוב (לאן הם נעלמו?) בתל אביב. מיד נרשמתי לשיעור, והחיוכים המאירים של רינה ודייב, המורים הראשונים שלי, נצרבו בנשמתי לעד. מאז החיים לקחו אותי לכל מני כיוונים, וב-2021 חזרתי לרקוד שוב, בעיקר בסביליה שבספרד. אני מאמין שהסווינג נועד בראש ובראשונה להיות משהו כיפי ושמח שמחבר בין אנשים. הדגש בשיעורים שלי הוא על הנאה ועל תחושת התקדמות, לצד לימוד הטכניקה המינימלית הנדרשת, מתוך רצון לאפשר לכל אחת ואחד לפתח את סגנון הריקוד האישי שלהם. בואו והצטרפו לכיף!
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="bg-[#559686] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-3">
            יצירת קשר
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            רוצים להצטרף ל-PardeSwing?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-8 mb-10">
            דברו איתנו לפרטים על פתיחת הקורס, רמות, שעות והרשמה.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:davidrefaeli@gmail.com"
              className="rounded-2xl bg-amber-300 text-neutral-900 px-6 py-4 font-semibold min-w-[220px] hover:scale-[1.02] transition flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              davidrefaeli@gmail.com
            </a>
            <a
              href="https://wa.me/972559951741"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/25 px-6 py-4 font-semibold min-w-[220px] hover:bg-white/10 transition flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} />
              <span dir="ltr">+972-55-995-1741</span>
            </a>
            <a
              href="https://www.facebook.com/pardeswing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-2xl border border-white/25 px-6 py-4 font-semibold min-w-[220px] hover:bg-white/10 transition flex items-center justify-center gap-3"
            >
              <FaFacebookF size={20} />
              Facebook
            </a>

            <a
              href="https://www.instagram.com/pardeswing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-2xl border border-white/25 px-6 py-4 font-semibold min-w-[220px] hover:bg-white/10 transition flex items-center justify-center gap-3"
            >
              <FaInstagram size={20} />
              Instagram
            </a>

          </div>

        </div>
      </section>
    </div>
  );
}
