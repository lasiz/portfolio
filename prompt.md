Vazifa: Next.js portfolio loyihamning SEO va metadata qatlamini to'liq qayta qur.
Maqsad: Google va AI qidiruv tizimlari meni to'g'ri aniqlasin va ma'lumot hech qachon eskirmasin.

## Qoidalar
1. Barcha shaxsiy ma'lumot `constant/profile.ts` ichidagi BITTA obyektda tursin.
   generateMetadata, JSON-LD, sitemap, robots, OG rasm va sahifa kontenti shu obyektdan olinsin.
2. O'zgaruvchan raqamlarni qattiq yozma (yosh, "N yillik tajriba"). Faqat "since YYYY" yoki kodda hisoblangan qiymat.
3. Kontent server-side render bo'lsin. Kontentni yashiradigan yoki kechiktiradigan animatsiyalarni olib tashla.
   Oddiy CSS hover'lar qolsin.
4. Rasmni olib tashla. OG rasmni `opengraph-image.tsx` orqali ism va kasbdan avtomatik generatsiya qil.
5. `app` va `pages` routerlari aralash. Hammasini App Router'ga ko'chir.
6. Qo'sh: metadataBase, canonical, `sitemap.ts` (haqiqiy lastModified), `robots.ts`, bosh sahifada JSON-LD `Person`
   (name, jobTitle, address, alumniOf, knowsAbout, sameAs, url), loyihalar uchun `SoftwareApplication`/`CreativeWork`.
7. Hech narsani o'ylab topma. Ma'lumot yo'q joyda TODO qoldir va menga ayt.
8. Meta keywords yozma, ularni hech kim o'qimaydi.
9. Minimal dizayn: bitta bo'lim, tez yuklanadigan, ko'p matnli, JS minimal.

## Ma'lumot (profile.ts uchun)
name: Laziz Tojiboyev   (TODO: "Tojiboyev" yoki "Tojiboev", bittasini tanlayman, hamma joyda bir xil)
alternateName: ["Laziz", "Lasiz", "Lazizbek", "Lazizbek tojiboyev", "Laziz tojiboev"]
jobTitle: Full stack SI engineer
experienceSince: 2022. Ko'rsatiladigan matn kodda hisoblansin: "N+ years", qattiq yozma.
location: Uzbekistan
education: Digital Economy, Fergana State Technical University
siteUrl: https://laziz-dev.netlify.app   (TODO: lazizbe.uz ishlasa shuni asosiy qilaman, netlify'dan 301 redirect)
sameAs:
  github: https://github.com/lazizbekdev
  linkedin: https://www.linkedin.com/in/lazizbe/
  telegram: t.me/corefold

## Loyihalar
1. Chinora Academy
   url: https://chinoraacademy.uz
   description: Tikuvchilik va dizaynerlik bo'yicha onlayn ta'lim platformasi (uz/ru). Mening rolim: frontend dasturchi. Backend boshqa dasturchi tomonidan yozilgan.
   role: Frontend Developer
2. QRSnip: QR Code & Barcode Scanner
   url: https://chromewebstore.google.com/detail/qrsnip-qr-code-barcode-sc/pjecadbnlcipeofmeammkpchfgeagmmg
   description: Chrome kengaytmasi. Ekrandagi QR kod va shtrix-kodlarni snip orqali offline o'qiydi, 14 tilda.
   Foydalanuvchi sonini yoki reytingni qattiq yozma.
3. TMDB Teasers: Telegram bot va kanal, filmlar haqida tizer/ma'lumot. github.com/lazizbekdev/tmdb (TODO: kanal havolasi)

## Olib tashlash kerak bo'lgan eski kontent
- "Hyderabad" va boshqa hamma joy nomlari (men yozmagan bo'lsam)
- Pixel Wave, TechNova, Verge Systems bandlari va undagi barcha foiz raqamlari (men tasdiqlamagunimcha)
- "1 year of experience"
- "Wizard of Frontend", "Code & Chill" kabi matnlar
- meta keywords
- title: "Lasiz Portfolio" o'rniga "Laziz Tojiboyev, Full stack SI engineer"
- og:image va twitter:image: lazizbe.uz'dan emas, o'z domenidagi `opengraph-image.tsx` dan

Loyihalar ro'yxati `constant/projects.ts` da massiv bo'lsin. Yangi loyiha qo'shish = massivga bitta element qo'shish,
qolgan hammasi (sahifa, schema, sitemap) avtomatik yangilansin.

## Kutilayotgan natija
- constant/profile.ts, constant/projects.ts
- app/layout.tsx (metadata + JSON-LD)
- app/sitemap.ts, app/robots.ts, app/opengraph-image.tsx
- Eski pages/ ni App Router'ga ko'chirish
- Oxirida: qaysi TODO'lar to'ldirilmagan ro'yxati