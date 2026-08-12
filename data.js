/**
 * ╔══════════════════════════════════════════════════╗
 * ║        WASAYF'S PORTFOLIO — DATA FILE            ║
 * ║  كل شغلك هنا، ما تحتاج تلمس الكود الثاني أبد   ║
 * ╚══════════════════════════════════════════════════╝
 */

const PORTFOLIO_DATA = {

  // ─── معلوماتك الشخصية ───────────────────────────────
  personal: {
    name: "Wasayf\nAlfarraj",          // الاسم (السطر الثاني اختياري)
    initials: "WA",                    // الحروف الأولى في الأفاتار
    eyebrow: "Flutter · Web · AI · Networking",  // السطر اللي فوق الاسم
    title: "Computer Engineering Student<br>crafting software that bridges systems & people.",
    university: "Qassim University · 2027",
    location: "Riyadh, Saudi Arabia",
    status: "Open to opportunities",   // ما تحب تظهره ← اكتب "" لتخفيه
    email: "Wasayfmohammad@gmail.com",
    github: "https://github.com/wasayfalfarraj",
    linkedin: "https://linkedin.com/in/wasayfalfarraj",
    phone: "+966556354023",
    menubarGPA: "GPA 4.66",            // يظهر في شريط الأوامر أعلى
  },

  // ─── المشاريع ────────────────────────────────────────
  // color: "blue" | "purple" | "teal" | "amber"
  // link:   رابط المشروع — اتركه "" إذا ما في رابط
  // report: رابط PDF التقرير — اتركه "" إذا ما في تقرير
  projects: [
    {
      icon: "💳",
      name: "Fines — FinTech",
      description: "AI-powered personal finance & budget management. Tuwaiq Academy × Bank Alinma Hackathon.",
      tags: ["Web App", "AI", "UI/UX"],
      color: "blue",
      link: "https://finex-3.onrender.com/",
      report: "",
    },
    {
      icon: "🥇",
      name: "Nassab — Zakat",
      description: "Gold purchase tracking platform that auto-calculates Zakat. Innovation Sama × Bank AlJazira.",
      tags: ["Platform", "FinTech", "UX"],
      color: "purple",
      link: "https://nisab.onrender.com",
      report: "",
    },
    {
      icon: "🎓",
      name: "WASL Platform",
      description: "Connects university students with training opportunities. Built as Software Engineer on real student needs.",
      tags: ["Flutter", "System Logic"],
      color: "teal",
      link: "",
      report: "",
    },
    {
      icon: "🏥",
      name: "Hospital DB System",
      description: "Patient & appointment management system built with SQL.",
      tags: ["SQL", "Database"],
      color: "amber",
      link: "",
      report: "",
    },
    {
      icon: "🔤",
      name: "Word Scramble App",
      description: "Educational word puzzle with scrambled challenges, scoring, difficulty levels & timers.",
      tags: ["Flutter", "Dart", "Game"],
      color: "blue",
      link: "https://wasayfalfarraj.github.io/word-scramble/",
      report: "",
    },
    {
      icon: "🌡️",
      name: "Temp Control System",
      description: "ATmega328P-based intelligent temperature controller. Uses LM35 sensor + 10-bit ADC, hysteresis control (18–22°C band) to drive a DC fan & heater, with real-time 16×2 LCD display. COE332 — Qassim University.",
      tags: ["Embedded", "C++", "ATmega328P", "ADC", "LCD"],
      color: "teal",
      link: "",
      report: "Project_Report__Intelligent_Temperature_Control_System.pdf",  // ← اسم ملف الـ PDF في نفس المجلد
    },
    // ── أضف مشروع جديد هنا ───────────────────────────
    // {
    //   icon: "🚀",
    //   name: "اسم المشروع",
    //   description: "وصف المشروع",
    //   tags: ["Tag1", "Tag2"],
    //   color: "purple",
    //   link: "https://...",
    // },
  ],

  // ─── المهارات ────────────────────────────────────────
  // highlight: true ← يخلي اللون أزرق (للمهارات الرئيسية)
  skills: [
    {
      group: "Languages & Frameworks",
      items: [
        { name: "Python",   highlight: true },
        { name: "C++",      highlight: true },
        { name: "Flutter",  highlight: true },
        { name: "Dart" },
        { name: "SQL" },
        { name: "Web Dev" },
      ],
    },
    {
      group: "Networking & Systems",
      items: [
        { name: "Cisco Packet Tracer", highlight: true },
        { name: "VLANs" },
        { name: "IP Routing" },
        { name: "Embedded Systems" },
      ],
    },
    {
      group: "Tools",
      items: [
        { name: "Git & GitHub" },
        { name: "Data Analysis" },
        { name: "AI Integration", highlight: true },
        { name: "UI/UX" },
      ],
    },
    {
      group: "Soft Skills",
      items: [
        { name: "Problem Solving" },
        { name: "Analytical Thinking" },
        { name: "Teamwork" },
        { name: "Communication" },
      ],
    },
  ],

  // ─── الخبرات ─────────────────────────────────────────
  // dotColor: "blue" | "purple" | "teal" | "amber"
  experience: [
    {
      icon: "🌊",
      role: "Network Engineering Intern",
      org: "National Water Company (NWC)",
      date: "Jun 2026 – Aug 2026",
      dotColor: "blue",
      bullets: [
        "Configured & maintained Cisco network infrastructure",
        "Simulated enterprise topologies using Packet Tracer",
        "Handled VLANs, IP addressing & routing protocols",
      ],
    },
    {
      icon: "🎓",
      role: "Community Representative",
      org: "Google Developer Student Club, Qassim University",
      date: "Jun 2025",
      dotColor: "purple",
      bullets: [
        "Represented the College of Computer in \"Summer Partnership Nights\"",
        "Showcased student projects including robotics demos",
      ],
    },
    // ── أضف خبرة جديدة هنا ───────────────────────────
    // {
    //   icon: "💼",
    //   role: "المسمى الوظيفي",
    //   org: "اسم الشركة",
    //   date: "Jan 2027 – Mar 2027",
    //   dotColor: "teal",
    //   bullets: [
    //     "إنجاز أول",
    //     "إنجاز ثاني",
    //   ],
    // },
  ],

};
