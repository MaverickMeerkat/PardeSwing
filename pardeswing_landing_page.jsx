export default function PardeSwingLandingPage() {
  const danceStyles = ["Lindy Hop", "Charleston", "Balboa", "Shag"];

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

      <section className="relative min-h-[88vh] flex items-center justify-center">
        <img
          src="/hero.jpg"
          alt="Swing dancing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white text-right">
            <p className="uppercase tracking-[0.35em] text-sm mb-4 text-white/80">
              Swing Dance School in Pardes Hanna
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
              PardeSwing
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              גלו את השמחה שבריקוד הסווינג בפרדס חנה. עולם תוסס, מוזיקלי וחברתי מלא אנרגיה, קצב, חיבור ותנועה.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-end">
              <a
                href="#contact"
                className="rounded-2xl bg-white text-neutral-900 px-6 py-3 font-semibold shadow-lg hover:scale-[1.02] transition"
              >
                הצטרפו לקורס
              </a>
              <a
                href="#about"
                className="rounded-2xl border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                למידע נוסף
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 shadow-2xl text-white text-right">
              <div className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
                Feel the rhythm
              </div>
              <div className="text-3xl font-bold leading-tight mb-4">
                רוח וינטג', כיף מודרני וחיבור אמיתי
              </div>
              <p className="text-white/85 leading-relaxed">
                מצ'רלסטון קופצני ועד בלבואה זורם – ריקודי הסווינג מחברים בין אנשים דרך ג'אז, משחקיות ותנועה.
              </p>
            </div>
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
              משפחה שלמה של ריקודי ג'אז שמחים
            </h2>
            <p className="text-lg leading-8 text-neutral-700 mb-5">
              סווינג הוא משפחה תוססת של ריקודים חברתיים שהתפתחו יחד עם מוזיקת הג'אז. זהו ריקוד משחקי, מוזיקלי ואנרגטי, מלא חיבור אנושי.
            </p>
            <p className="text-lg leading-8 text-neutral-700">
              במהלך הקורס תפגשו סגנונות כמו Lindy Hop, Charleston, Balboa ו-Shag — כל אחד עם האופי שלו, אך כולם חולקים את אותה רוח של קצב, חופש וכיף.
            </p>
          </div>

          <div className="bg-neutral-900 text-white rounded-[2rem] shadow-sm p-8 md:p-10 text-right">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60 mb-3">
              קצת היסטוריה
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              נולד מתוך תרבות אפרו-אמריקאית ועידן הג'אז
            </h2>
            <p className="text-lg leading-8 text-white/85 mb-5">
              ריקודי הסווינג התפתחו בעיקר בשנות ה-20, ה-30 וה-40 של המאה הקודמת, בעיקר בקהילות אפרו-אמריקאיות בארצות הברית, לצד מוזיקת הג'אז.
            </p>
            <p className="text-lg leading-8 text-white/85">
              הריקוד המפורסם ביותר, Lindy Hop, מזוהה עם הרלם ואולם הסבוי, שם נוצר סגנון מלא אילתור, אנרגיה והומור. עם השנים הסגנונות התפשטו ברחבי העולם וכיום יש קהילות סווינג פעילות בכל מקום.
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
              לרקוד למוזיקה שמרימה את מצב הרוח ומניעה את הגוף.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] p-6 border border-neutral-200 shadow-sm text-right">
            <div className="text-2xl mb-3">🕺</div>
            <h3 className="text-xl font-bold mb-2">חיבור חברתי</h3>
            <p className="text-neutral-700 leading-7">
              להכיר אנשים, לצחוק, לזוז ולבנות ביטחון דרך ריקוד זוגי.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] p-6 border border-neutral-200 shadow-sm text-right">
            <div className="text-2xl mb-3">✨</div>
            <h3 className="text-xl font-bold mb-2">כיף וחופש</h3>
            <p className="text-neutral-700 leading-7">
              ללמוד שפה תנועתית שמאפשרת ביטוי אישי ומשחקיות.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-neutral-900 text-white py-20">
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
              href="mailto:your@email.com"
              className="rounded-2xl bg-amber-300 text-neutral-900 px-6 py-4 font-semibold min-w-[220px] hover:scale-[1.02] transition"
            >
              your@email.com
            </a>
            <a
              href="tel:+972501234567"
              className="rounded-2xl border border-white/25 px-6 py-4 font-semibold min-w-[220px] hover:bg-white/10 transition"
            >
              +972-50-123-4567
            </a>
          </div>

          <p className="mt-8 text-white/50 text-sm">
            החלף כאן את המייל והטלפון בפרטים שלך
          </p>
        </div>
      </section>
    </div>
  );
}
