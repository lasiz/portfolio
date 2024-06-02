const D2 = () => {
    return (
        <>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>D2</title>
            <meta name="author" content="Jahongir Xalilov" />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        ' * {margin:0; padding:0; text-indent:0; }\n .s1 { color: black; font-family:"Arial Black", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 16pt; }\n h1 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 14pt; }\n .s2 { color: black; font-family:"Times New Roman", serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s3 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 13pt; }\n .s4 { color: #111; font-family:"Gill Sans MT", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 12pt; }\n .s5 { color: #111; font-family:"Gill Sans MT", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n .h2, h2 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 13pt; }\n .p, p { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; margin:0pt; }\n .s7 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s8 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 13pt; }\n .s9 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s10 { color: #111; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s11 { color: #111; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 13pt; }\n .s12 { color: #111; font-family:"Courier New", monospace; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n .s13 { color: #111; font-family:"Gill Sans MT", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n .s14 { color: #111; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s15 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 14pt; }\n h3 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }\n .a { color: #1154CC; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 13pt; }\n .s17 { color: #0000ED; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 13pt; }\n .s19 { color: #0000ED; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 13pt; }\n .s20 { color: #1154CC; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 13pt; }\n .s21 { color: #1154CC; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 13pt; }\n .s22 { color: #111; font-family:"Gill Sans MT", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n .s23 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .s24 { color: #178038; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .s25 { color: #1154CC; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 11pt; }\n .s27 { color: #0000ED; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 11pt; }\n .s28 { color: #1154CC; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 13pt; }\n .s31 { color: #1154CC; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s33 { color: #178038; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s34 { color: #1154CC; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s36 { color: #001F5F; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 13pt; }\n .s37 { color: #0D0D0D; font-family:"Times New Roman", serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s38 { color: #0D0D0D; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 13pt; }\n .s39 { color: #0D0D0D; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s41 { color: #F00; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 13pt; }\n .s42 { color: #212A35; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 14pt; }\n .s43 { color: #212A35; font-family:"Times New Roman", serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s44 { color: #212A35; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 13pt; }\n .s45 { color: #212A35; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n .s47 { color: #111; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 13pt; }\n .s48 { color: #111; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .s49 { color: #0D0D0D; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 14pt; }\n li {display: block; }\n #l1 {padding-left: 0pt;counter-reset: c1 1; }\n #l1> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l1> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n li {display: block; }\n #l2 {padding-left: 0pt;counter-reset: d1 1; }\n #l2> li>*:first-child:before {counter-increment: d1; content: counter(d1, decimal)". "; color: #111; font-family:"Gill Sans MT", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l2> li:first-child>*:first-child:before {counter-increment: d1 0;  }\n li {display: block; }\n #l3 {padding-left: 0pt;counter-reset: c1 2; }\n #l3> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l3> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n #l4 {padding-left: 0pt;counter-reset: e1 1; }\n #l4> li>*:first-child:before {counter-increment: e1; content: counter(e1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l4> li:first-child>*:first-child:before {counter-increment: e1 0;  }\n li {display: block; }\n #l5 {padding-left: 0pt;counter-reset: c1 3; }\n #l5> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l5> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n #l6 {padding-left: 0pt;counter-reset: f1 2; }\n #l6> li>*:first-child:before {counter-increment: f1; content: counter(f1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l6> li:first-child>*:first-child:before {counter-increment: f1 0;  }\n li {display: block; }\n #l7 {padding-left: 0pt;counter-reset: g1 1; }\n #l7> li>*:first-child:before {counter-increment: g1; content: counter(g1, decimal)". "; color: #111; font-family:"Gill Sans MT", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l7> li:first-child>*:first-child:before {counter-increment: g1 0;  }\n li {display: block; }\n #l8 {padding-left: 0pt;counter-reset: c1 5; }\n #l8> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l8> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n #l9 {padding-left: 0pt; }\n #l9> li>*:first-child:before {content: "• "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l10 {padding-left: 0pt;counter-reset: h1 1; }\n #l10> li>*:first-child:before {counter-increment: h1; content: counter(h1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l10> li:first-child>*:first-child:before {counter-increment: h1 0;  }\n #l11 {padding-left: 0pt;counter-reset: i1 1; }\n #l11> li>*:first-child:before {counter-increment: i1; content: counter(i1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l11> li:first-child>*:first-child:before {counter-increment: i1 0;  }\n #l12 {padding-left: 0pt;counter-reset: j1 1; }\n #l12> li>*:first-child:before {counter-increment: j1; content: counter(j1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l12> li:first-child>*:first-child:before {counter-increment: j1 0;  }\n #l13 {padding-left: 0pt;counter-reset: k1 1; }\n #l13> li>*:first-child:before {counter-increment: k1; content: counter(k1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l13> li:first-child>*:first-child:before {counter-increment: k1 0;  }\n #l14 {padding-left: 0pt;counter-reset: l1 1; }\n #l14> li>*:first-child:before {counter-increment: l1; content: counter(l1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l14> li:first-child>*:first-child:before {counter-increment: l1 0;  }\n #l15 {padding-left: 0pt; }\n #l15> li>*:first-child:before {content: "- "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l16 {padding-left: 0pt;counter-reset: n1 1; }\n #l16> li>*:first-child:before {counter-increment: n1; content: counter(n1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l16> li:first-child>*:first-child:before {counter-increment: n1 0;  }\n #l17 {padding-left: 0pt;counter-reset: o1 1; }\n #l17> li>*:first-child:before {counter-increment: o1; content: counter(o1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l17> li:first-child>*:first-child:before {counter-increment: o1 0;  }\n li {display: block; }\n #l18 {padding-left: 0pt; }\n #l18> li>*:first-child:before {content: " "; color: #111; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n li {display: block; }\n #l19 {padding-left: 0pt; }\n #l19> li>*:first-child:before {content: " "; color: black; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n li {display: block; }\n #l20 {padding-left: 0pt; }\n #l20> li>*:first-child:before {content: " "; color: #111; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n li {display: block; }\n #l21 {padding-left: 0pt;counter-reset: c1 22; }\n #l21> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l21> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n li {display: block; }\n #l22 {padding-left: 0pt; }\n #l22> li>*:first-child:before {content: " "; color: #111; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n li {display: block; }\n #l23 {padding-left: 0pt;counter-reset: c1 23; }\n #l23> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l23> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n li {display: block; }\n #l24 {padding-left: 0pt; }\n #l24> li>*:first-child:before {content: " "; color: #111; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n li {display: block; }\n #l25 {padding-left: 0pt; }\n #l25> li>*:first-child:before {content: " "; color: #111; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n li {display: block; }\n #l26 {padding-left: 0pt;counter-reset: c1 24; }\n #l26> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l26> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n li {display: block; }\n #l27 {padding-left: 0pt; }\n #l27> li>*:first-child:before {content: " "; color: #111; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n li {display: block; }\n #l28 {padding-left: 0pt;counter-reset: c1 25; }\n #l28> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l28> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n li {display: block; }\n #l29 {padding-left: 0pt;counter-reset: c1 26; }\n #l29> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l29> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n #l30 {padding-left: 0pt; }\n #l30> li>*:first-child:before {content: "● "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n li {display: block; }\n #l31 {padding-left: 0pt;counter-reset: c1 28; }\n #l31> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)") "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l31> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n #l32 {padding-left: 0pt; }\n #l32> li>*:first-child:before {content: "● "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l33 {padding-left: 0pt;counter-reset: y1 2; }\n #l33> li>*:first-child:before {counter-increment: y1; content: counter(y1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l33> li:first-child>*:first-child:before {counter-increment: y1 0;  }\n #l34 {padding-left: 0pt;counter-reset: z1 1; }\n #l34> li>*:first-child:before {counter-increment: z1; content: counter(z1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l34> li:first-child>*:first-child:before {counter-increment: z1 0;  }\n #l35 {padding-left: 0pt;counter-reset: c1 1; }\n #l35> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l35> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n #l36 {padding-left: 0pt;counter-reset: d1 1; }\n #l36> li>*:first-child:before {counter-increment: d1; content: counter(d1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l36> li:first-child>*:first-child:before {counter-increment: d1 0;  }\n #l37 {padding-left: 0pt;counter-reset: e1 1; }\n #l37> li>*:first-child:before {counter-increment: e1; content: counter(e1, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt; }\n #l37> li:first-child>*:first-child:before {counter-increment: e1 0;  }\n'
                }}
            />
            <p
                className="s1"
                style={{
                    paddingTop: "3pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                1 VA 2 SAVOLLARI
            </p>
            <ol id="l1">
                <li data-list-text="1)">
                    <h1
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "21pt",
                            textIndent: "-14pt",
                            textAlign: "left"
                        }}
                    >
                        Dialog oynalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: OpenDialog, SaveDialog, PrintDialog, ColorDialog, …
                    </p>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <div
                        className="textbox"
                        style={{
                            background: "#F7F7F7",
                            display: "block",
                            minHeight: "81.8pt",
                            width: "471.2pt"
                        }}
                    >
                        <p
                            className="s3"
                            style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            Javob: <span className="s4">C++ Builder</span>
                            <span className="s5">
                                da dialog oynalari, foydalanuvchiga interfeys elementlarini
                                ko’rsatish va ularga ma’lumot kiritish imkonini beradi. Bu oynalar
                                foydalanuvchining fayllarni tanlash, saqlash, chiqarish, rangni
                                tanlash va boshqa amallarni bajarish uchun ishlatiladi.
                            </span>
                        </p>
                        <p
                            className="s5"
                            style={{
                                paddingTop: "9pt",
                                paddingLeft: "1pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Quyidagi dialog oynalari C++ Builder dasturlashida keng qo’llaniladi:
                        </p>
                    </div>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "158.6pt",
                    width: "453.2pt"
                }}
            >
                <ol id="l2">
                    <li data-list-text={1}>
                        <p
                            className="s4"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Open Dialog (Ochish oynasi)
                            <span className="s5">
                                : Foydalanuvchiga faylni tanlash imkonini beradi. Foydalanuvchi
                                faylni tanlaganda, faylning yo’qolishi yoki mavjudligini tekshirish
                                mumkin. Agar fayl mavjud bo’lsa, ma’lumotlarni o’qib olish uchun
                                faylni ochadi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text={2}>
                        <p
                            className="s4"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Save Dialog (Saqlash oynasi)
                            <span className="s5">
                                : Foydalanuvchiga faylni saqlash imkonini beradi. Foydalanuvchi
                                faylni saqlaganda, mavjud bo’lgan faylni o’zgartirib saqlashga
                                urinadi. Agar fayl mavjud bo’lsa, unda xatolik yuzaga keladi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text={3}>
                        <p
                            className="s4"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Print Dialog (Chop etish oynasi)
                            <span className="s5">
                                : Foydalanuvchiga hujjatni chop etish imkonini beradi. Bu oynadan
                                foydalanib, foydalanuvchi hujjatni printer orqali chop etishni
                                tanlaydi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text={4}>
                        <p
                            className="s4"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Color Dialog (Rang oynasi)
                            <span className="s5">
                                : Foydalanuvchiga rangni tanlash imkonini beradi. Bu oynadan
                                foydalanib, foydalanuvchi kerakli rangni tanlaydi.
                            </span>
                        </p>
                    </li>
                </ol>
            </div>
            <p style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "left" }} />
            <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s13"
                style={{ textIndent: "0pt", lineHeight: "14pt", textAlign: "left" }}
            >
                void_fastcall TForm1::TForm1(TComponent* Owner) : TForm(Owner){"{"}
            </p>
            <p
                className="s13"
                style={{
                    paddingLeft: "12pt",
                    textIndent: "0pt",
                    lineHeight: "28pt",
                    textAlign: "left"
                }}
            >
                OpenDialog1-&gt;Filter = &quot;Matn fayllari (*.txt)|*.TXT|Barcha fayllar
                (*.*)|*.*"; SaveDialog1-&gt;Filter = &quot;Matn fayllari (*.txt)|*.TXT|Barcha
                fayllar (*.*)|*.*"; {"}"}
            </p>
            <p
                className="s13"
                style={{ textIndent: "0pt", lineHeight: "14pt", textAlign: "left" }}
            >
                void{" "}
                <span
                    style={{
                        color: "#111",
                        fontFamily: '"Gill Sans MT", sans-serif',
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "underline",
                        fontSize: "12pt"
                    }}
                >
                    &nbsp;
                </span>
                fastcall TForm1::Button1Click(TObject *Sender){"{"}
            </p>
            <p
                className="s13"
                style={{ textIndent: "0pt", lineHeight: "14pt", textAlign: "left" }}
            >
                if (OpenDialog1-&gt;Execute()){"{"}
            </p>
            <p
                className="s13"
                style={{ textIndent: "0pt", lineHeight: "14pt", textAlign: "left" }}
            >
                if (FileExists(OpenDialog1-&gt;FileName)){"{"}
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s13"
                style={{
                    paddingLeft: "24pt",
                    textIndent: "0pt",
                    lineHeight: "204%",
                    textAlign: "left"
                }}
            >
                Memo1-&gt;Lines-&gt;LoadFromFile(OpenDialog1-&gt;FileName); else{"{"}
            </p>
            <p
                className="s13"
                style={{
                    paddingLeft: "36pt",
                    textIndent: "0pt",
                    lineHeight: "14pt",
                    textAlign: "left"
                }}
            >
                throw(Exception("Fayl mavjud emas.")); {"}"} {"}"} {"}"}
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s13"
                style={{
                    paddingLeft: "24pt",
                    textIndent: "-24pt",
                    lineHeight: "204%",
                    textAlign: "left"
                }}
            >
                void{" "}
                <span
                    style={{
                        color: "#111",
                        fontFamily: '"Gill Sans MT", sans-serif',
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "underline",
                        fontSize: "12pt"
                    }}
                >
                    &nbsp;
                </span>
                fastcall TForm1::Button2Click(TObject *Sender){"{"} if
                (FileExists(OpenDialog1-&gt;FileName)){"{"}
            </p>
            <p
                className="s13"
                style={{
                    paddingLeft: "36pt",
                    textIndent: "0pt",
                    lineHeight: "14pt",
                    textAlign: "left"
                }}
            >
                throw(Exception("Fayl allaqachon mavjud. O'zgartirib saqlay olmaysiz."));{" "}
                {"}"}
            </p>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "128.8pt",
                    width: "471.2pt"
                }}
            >
                <p
                    className="s5"
                    style={{ paddingLeft: "25pt", textIndent: "0pt", textAlign: "left" }}
                >
                    else{"{"}
                </p>
                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                </p>
                <p
                    className="s5"
                    style={{ paddingLeft: "37pt", textIndent: "0pt", textAlign: "left" }}
                >
                    Memo1-&gt;Lines-&gt;SaveToFile(SaveDialog1-&gt;FileName); {"}"} {"}"}{" "}
                    {"}"}
                </p>
                <p
                    className="s5"
                    style={{
                        paddingTop: "13pt",
                        paddingLeft: "1pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}
                >
                    Bu kodda OpenDialog1 va SaveDialog1 oynalari foydalanuvchiga fayl tanlash
                    va saqlash imkonini beradi. Fayl mavjudligini tekshirish va ma’lumotlarni
                    o’qib olish uchun Open Dialog oynasidan foydalaniladi, va fayl mavjud
                    bo’lsa, unda xatolik yuzaga keladi. Save Dialog oynasidan foydalanilganda,
                    fayl mavjud bo’lsa, unda xatolik yuzaga keladi. Aks holda, memo boxdagi
                    satrlarni faylga saqlash amalga oshiriladi.
                </p>
            </div>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <ol id="l3">
                <li data-list-text="2)">
                    <h1
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            textAlign: "left"
                        }}
                    >
                        Klaviatura hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onKeyPress, onKeyDown, onKeyUp, …
                    </p>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <p style={{ textIndent: "0pt", textAlign: "left" }} />
                    <h2 style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        Javob
                        <span className="p">
                            : Klaviatura hodisalari C++ Builder dasturlashida juda muhimdir. Bu
                            hodisalar klaviaturaning tugmasini bosish, qo‘yish va qo‘yilmagan
                            holatlarda sodir bo‘ladi.
                        </span>
                    </h2>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        Quyidagi hodisalar bilan tanishib chiqamiz:
                    </p>
                    <ol id="l4">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                onKeyPress: Bu hodisa klaviaturaning tugmasini bosishda sodir
                                bo‘ladi. Tugma bosilganda, onKeyPress hodisasi ishga tushadi. Bu
                                hodisada tugma tugmasining kodini olish mumkin. Misol uchun:
                            </p>
                            <p
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                void <u>&nbsp; </u>fastcall TForm1::FormKeyPress(TObject *Sender,
                                char &amp;Key){"{"}
                            </p>
                            <p
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "56pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                if (Key == 'A') {"{"} // 'A' tugmasi bosildi {"}"} {"}"}
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                onKeyDown: Bu hodisa klaviaturaning tugmasini qo‘yishda sodir
                                bo‘ladi. Tugma qo‘yilganda, onKeyDown hodisasi ishga tushadi. Bu
                                hodisada tugma tugmasining kodini olish mumkin. Misol uchun:
                            </p>
                            <p
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "7pt",
                                    textIndent: "22pt",
                                    textAlign: "left"
                                }}
                            >
                                void <u>&nbsp; </u>fastcall TForm1::FormKeyDown(TObject *Sender,
                                WORD &amp;Key, TShiftState Shift){"{"}
                            </p>
                            <p
                                style={{
                                    paddingTop: "14pt",
                                    textIndent: "0pt",
                                    textAlign: "center"
                                }}
                            >
                                if (Key == VK_LEFT){"{"}
                            </p>
                            <p
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "2pt",
                                    textIndent: "0pt",
                                    textAlign: "center"
                                }}
                            >
            // Chapga o‘tish tugmasi qo‘yildi {"}"} {"}"}
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                onKeyUp: Bu hodisa klaviaturaning tugmasini qo‘yilmagan holatda
                                sodir bo‘ladi. Tugma qo‘yilmaganida, onKeyUp hodisasi ishga tushadi.
                                Bu hodisada tugma tugmasining kodini olish mumkin. Misol uchun:
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        18. void <u>&nbsp; </u>fastcall TForm1::FormKeyUp(TObject *Sender, WORD
                        &amp;Key, TShiftState Shift){"{"}
                    </p>
                    <div
                        className="textbox"
                        style={{
                            background: "#F7F7F7",
                            display: "block",
                            minHeight: "44.0pt",
                            width: "471.2pt"
                        }}
                    >
                        <p
                            className="s7"
                            style={{ paddingLeft: "30pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            if (Key == VK_RIGHT) {"{"}
                        </p>
                        <p
                            className="s7"
                            style={{
                                paddingTop: "14pt",
                                paddingLeft: "11pt",
                                textIndent: "0pt",
                                lineHeight: "15pt",
                                textAlign: "left"
                            }}
                        >
          // O‘ngga o‘tish tugmasi qo‘yilmagan {"}"} {"}"}
                        </p>
                    </div>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <ol id="l5">
                <li data-list-text="3)">
                    <h1
                        style={{
                            paddingLeft: "22pt",
                            textIndent: "-15pt",
                            textAlign: "justify"
                        }}
                    >
                        Standart komponentalar palitrasi
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "36pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: TLabel, TButton, TCheckBox, TRadioButton, TPanel,
                        TMainMenu,
                    </p>
                    <h2
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            1. TLabel: Bu komponent matn yoki belgilarni ko’rsatish uchun
                            ishlatiladi. Siz uni matn yoki belgilar bilan to’ldirishingiz mumkin.
                            Misol uchun, foydalanuvchiga xush kelibsiz degan matnni ko’rsatish
                            uchun:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        TLabel *myLabel = new TLabel(this); myLabel-&gt;Parent = this;
                    </p>
                    <ol id="l6">
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                TButton: Bu komponent tugma yoki tugma shaklidagi grafik elementni
                                yaratish uchun ishlatiladi. Foydalanuvchining bosingan tugmani
                                aniqlash uchun hodisalar bilan bog’liq bo’lishi mumkin. Misol uchun:
                            </p>
                            <p
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "justify"
                                }}
                            >
                                TButton *myButton = new TButton(this); myButton-&gt;Parent = this;
                            </p>
                            <p
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    lineHeight: "15pt",
                                    textAlign: "justify"
                                }}
                            >
                                myButton-&gt;OnClick = myButtonClick;
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "justify"
                                }}
                            >
                                TCheckBox: Bu komponent belgilar ro’yxatini yaratish uchun
                                ishlatiladi. Foydalanuvchi belgilardan bir yoki bir nechta tanlashi
                                mumkin. Misol uchun:
                            </p>
                            <p
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "justify"
                                }}
                            >
                                TCheckBox *myCheckBox = new TCheckBox(this); myCheckBox-&gt;Parent =
                                this;
                            </p>
                            <p
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    lineHeight: "15pt",
                                    textAlign: "justify"
                                }}
                            >
                                myCheckBox-&gt;Checked = true; // Belgi tanlangan
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "justify"
                                }}
                            >
                                TRadioButton: Bu komponent radiotugmalarni yaratish uchun
                                ishlatiladi. Foydalanuvchi radiotugmalardan birini tanlashi mumkin.
                                Misol uchun:
                            </p>
                            <p
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "justify"
                                }}
                            >
                                TRadioButton *radio1 = new TRadioButton(this); radio1-&gt;Parent =
                                this;
                            </p>
                            <p
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    textAlign: "justify"
                                }}
                            >
                                radio1-&gt;Checked = true;
                            </p>
                        </li>
                        <li data-list-text={5}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "justify"
                                }}
                            >
                                TPanel: Bu komponent boshqa komponentlarni guruhlash uchun
                                ishlatiladi. Panel o’z ichida boshqa komponentlarni joylashtirishga
                                imkon beradi. Misol uchun:
                            </p>
                            <p
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                TPanel *myPanel = new TPanel(this); myPanel-&gt;Parent = this;
                            </p>
                            <p
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    lineHeight: "15pt",
                                    textAlign: "left"
                                }}
                            >
                                myPanel-&gt;Width = 200;
                            </p>
                            <p
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                myPanel-&gt;Height = 100;
                            </p>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "43pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                TMainMenu: Bu komponent dastur menyu elementlarini yaratish uchun
                                ishlatiladi.
                            </p>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                Menyuda turli funksiyalar va buyruqlar bo’lishi mumkin. Misol uchun:
                            </p>
                        </li>
                        <li data-list-text={6}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-36pt",
                                    textAlign: "left"
                                }}
                            >
                                TMainMenu *mainMenu = new TMainMenu(this);
                            </p>
                        </li>
                    </ol>
                </li>
                <li data-list-text="4)">
                    <h1
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "22pt",
                            textIndent: "-15pt",
                            textAlign: "left"
                        }}
                    >
                        TMainMenu komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint…
                    </p>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <div
                        className="textbox"
                        style={{
                            background: "#F7F7F7",
                            display: "block",
                            minHeight: "29.5pt",
                            width: "471.2pt"
                        }}
                    >
                        <p
                            className="s3"
                            style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            Javob: <span className="s4">TMainMenu </span>
                            <span className="s5">
                                komponentasi C++ Builder dasturlashida grafik interfeys
                            </span>
                        </p>
                        <p
                            className="s5"
                            style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            elementlarini yaratishda muhim rol o’ynaydi. Ushbu komponent asosan
                            menyu panelini
                        </p>
                    </div>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <p
                className="s13"
                style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
            >
                va unga bog’liq bo’lgan pastki menyularni birlashtirish uchun ishlatiladi.
                Quyidagi xususiyatlarga e’tibor bering:
            </p>
            <ol id="l7">
                <li data-list-text={1}>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "-17pt", textAlign: "left" }}
                    >
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Gill Sans MT", sans-serif',
                                fontStyle: "normal",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "12pt"
                            }}
                        >
                            Name
                        </span>
                        : Bu xususiyat komponent nomini o’z ichiga oladi. Nom berish orqali
                    </p>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        komponentni kodda chaqirish mumkin.
                    </p>
                </li>
                <li data-list-text={2}>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "-17pt", textAlign: "left" }}
                    >
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Gill Sans MT", sans-serif',
                                fontStyle: "normal",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "12pt"
                            }}
                        >
                            Align
                        </span>
                        : Ushbu xususiyat komponentni boshqa komponentlar bilan bir xil
                    </p>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        yo’naltirish imkonini beradi. Misol
                    </p>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        uchun,{" "}
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Courier New", monospace',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                        >
                            alTop{" "}
                        </span>
                        (yuxori),{" "}
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Courier New", monospace',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                        >
                            alBottom{" "}
                        </span>
                        (pastki),{" "}
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Courier New", monospace',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                        >
                            alLeft{" "}
                        </span>
                        (chap), yoki{" "}
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Courier New", monospace',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                        >
                            alRight{" "}
                        </span>
                        (ong)
                    </p>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        yo’naltirishlari mavjud.
                    </p>
                </li>
                <li data-list-text={3}>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "-18pt", textAlign: "left" }}
                    >
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Gill Sans MT", sans-serif',
                                fontStyle: "normal",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "12pt"
                            }}
                        >
                            Tag
                        </span>
                        : Komponentga o’zgaruvchi sifatida ma’lumot saqlash uchun ishlatiladi.
                        Siz uni o’z ichiga kerakli ma’lumotni saqlash uchun foydalanishingiz
                        mumkin.
                    </p>
                </li>
                <li data-list-text={4}>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "-18pt", textAlign: "left" }}
                    >
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Gill Sans MT", sans-serif',
                                fontStyle: "normal",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "12pt"
                            }}
                        >
                            Cursor
                        </span>
                        : Ushbu xususiyat komponentga kursorni qanday ko’rinishda ko’rsatish
                        kerakligini aniqlaydi. Misol uchun,{" "}
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Courier New", monospace',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                        >
                            crHandPoint{" "}
                        </span>
                        kursorni qo’yish orqali foydalanuvchiga tugmani bosishni ko’rsatish
                        mumkin.
                    </p>
                </li>
                <li data-list-text={5}>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "-18pt", textAlign: "left" }}
                    >
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Gill Sans MT", sans-serif',
                                fontStyle: "normal",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "12pt"
                            }}
                        >
                            Hint
                        </span>
                        : Komponentga o’zgaruvchi sifatida ma’lumot saqlash uchun ishlatiladi.
                        Foydalanuvchi komponentga kursorni olib kelganda uni ustiga olib kelgan
                        ma’lumotni ko’rsatadi.
                    </p>
                </li>
                <li data-list-text={6}>
                    <p
                        className="s13"
                        style={{ paddingLeft: "37pt", textIndent: "-18pt", textAlign: "left" }}
                    >
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Gill Sans MT", sans-serif',
                                fontStyle: "normal",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "12pt"
                            }}
                        >
                            ShowHint
                        </span>
                        : Ushbu xususiyatni{" "}
                        <span
                            style={{
                                color: "#111",
                                fontFamily: '"Courier New", monospace',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                        >
                            true{" "}
                        </span>
                        qilib sozlash orqali komponentga o’zgaruvchi sifatida saqlangan
                        ma’lumotni ko’rsatish mumkin
                    </p>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <ol id="l8">
                <li data-list-text="5)">
                    <h1
                        style={{ paddingLeft: "21pt", textIndent: "-14pt", textAlign: "left" }}
                    >
                        TMainMenu komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "148%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TMainMenu komponenti dasturning bosh menyusini aniqlaydi. Formaga bir
                            necha kompenentni joylashtirish mumkin ammo ulardan faqat formaning
                            “menu” xossasida ko’rsatilgani dastur uchun bosh menyu vazifasini
                            bajaradi. Formada
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        loyihalashni bajarayotgan vaqtda bu komponent ko’zga tashlansada dasur
                        bajarilish vaqtida u “ko’rinmas” holda bo’ladi. Komponent formaga
                        joylashtirilgach unung
                    </p>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        uchun menyular yartiladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Buning uchun quyidagi varianlardan birini tanlash kifoya:
                    </p>
                    <ul id="l9">
                        <li data-list-text="•">
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "14pt",
                                    textIndent: "-7pt",
                                    textAlign: "left"
                                }}
                            >
                                komponent satxida sichqonchaning chap tugmasini ikki marta bosish;
                            </p>
                        </li>
                        <li data-list-text="•">
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "147%",
                                    textAlign: "left"
                                }}
                            >
                                komponent satxida o’ng tugma yordamida kontekstli menu ochib undan
                                “Menu Designer” bandini tanlash;
                            </p>
                        </li>
                        <li data-list-text="•">
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "147%",
                                    textAlign: "left"
                                }}
                            >
                                komponentni tanlab ob’ektlar inspektorining “items” bandida
                                sichqonchaning chap tugmasini ikki marta bosish;
                            </p>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "147%",
                                    textAlign: "left"
                                }}
                            >
                                qaysi holat tanlanishidan qat’iy nazar bizga quyidagi oyna tavsiya
                                etiladi: Endi menyu yaratishning jihatlariga to’xtalib o’tamiz:
                            </p>
                            <ol id="l10">
                                <li data-list-text={1}>
                                    <p
                                        style={{
                                            paddingLeft: "7pt",
                                            textIndent: "0pt",
                                            lineHeight: "147%",
                                            textAlign: "left"
                                        }}
                                    >
                                        Menyu bandiga nom berish ucun ob’ektlar inspektorining “Caption”
                                        bandiga nom yozilib “Enter” tugmasi bosiladi. (masalan, “faylga
                                        yozish”)
                                    </p>
                                </li>
                                <li data-list-text={2}>
                                    <p
                                        style={{
                                            paddingTop: "3pt",
                                            paddingLeft: "7pt",
                                            textIndent: "0pt",
                                            lineHeight: "148%",
                                            textAlign: "left"
                                        }}
                                    >
                                        Har bir menyuning tarkibida ichki menyular(yoki ostki menyular)
                                        bo’lishi mumkin(ichki menu yaratish uchun kerarki menyuni tanlab
                                        “Ctrl+-&gt;” tugmalarini bosish yetarli.
                                    </p>
                                </li>
                                <li data-list-text={3}>
                                    <p
                                        style={{
                                            paddingLeft: "7pt",
                                            textIndent: "0pt",
                                            lineHeight: "147%",
                                            textAlign: "left"
                                        }}
                                    >
                                        Menyuni qismlarga bo’lish uchun “Caption” xossasida “-“
                                        belgisini joylashtirish zarur.
                                    </p>
                                </li>
                                <li data-list-text={4}>
                                    <p
                                        style={{
                                            paddingLeft: "7pt",
                                            textIndent: "0pt",
                                            lineHeight: "147%",
                                            textAlign: "left"
                                        }}
                                    >
                                        Menyuda tez ishga tushirish tugmasi bo’lishi uchun nom berish
                                        jarayonida kerakli simvoldan avval “&amp;” belgisini
                                        joylashtiramiz. (masalan, “cho&amp;p etish” )
                                    </p>
                                </li>
                                <li data-list-text={5}>
                                    <p
                                        style={{
                                            paddingLeft: "7pt",
                                            textIndent: "0pt",
                                            lineHeight: "148%",
                                            textAlign: "left"
                                        }}
                                    >
                                        Menyuga kichik hajmdagi ikonka ko’rinishdagi rasmlarni ham
                                        joylastirish mumkin. Buni amalga oshirishning yo’llaridan biri
                                        bu menyu yaratish jarayonida ob’ektlar inspektorining “bitmap”
                                        bandidan “Picture Editor” yordamchi oynasini ochib “Load”
                                        buyrug’i orqali kerakli rasmni tanlashdir.
                                    </p>
                                </li>
                                <li data-list-text={6}>
                                    <p
                                        style={{
                                            paddingLeft: "7pt",
                                            textIndent: "0pt",
                                            lineHeight: "147%",
                                            textAlign: "left"
                                        }}
                                    >
                                        Menu to’liq fa’oliyat ko’rsatishi uchun kerakli bandlar uchun
                                        ularga tegishli buyruqlar tizimi (kodlar) beriladi.
                                    </p>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </li>
                <li data-list-text="6)">
                    <h1
                        style={{ paddingLeft: "21pt", textIndent: "-14pt", textAlign: "left" }}
                    >
                        TShape komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint
                    </p>
                    <p
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        <span className="h2">Javob: </span>
                        <span className="s8" style={{ backgroundColor: "#F3F3F3" }}>
                            TShape{" "}
                        </span>
                        <span className="s9" style={{ backgroundColor: "#F3F3F3" }}>
                            komponenti{" "}
                        </span>
                        <span className="s8" style={{ backgroundColor: "#F3F3F3" }}>
                            C++ Builder{" "}
                        </span>
                        <span className="s9" style={{ backgroundColor: "#F3F3F3" }}>
                            dasturlash vositasida grafik shakllarni chizish
                        </span>
                        <span className="p"> </span>
                        <span className="s9" style={{ backgroundColor: "#F3F3F3" }}>
                            uchun ishlatiladi. Ushbu komponent orqali siz o’z dasturingizda
                            shakllarni yaratishingiz
                        </span>
                        <span className="p"> </span>
                        <span className="s9" style={{ backgroundColor: "#F3F3F3" }}>
                            va ularga xususiyatlar berishingiz mumkin
                        </span>
                    </p>
                    <h2
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "justify"
                        }}
                    >
                        Name: <span className="p">Komponent nomi "Shape1".</span>
                    </h2>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <span />
                    </p>
                    <table border={0} cellSpacing={0} cellPadding={0}>
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        width={27}
                                        height={19}
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAATCAYAAABhh3Y4AAAABlBMVEUAAAD///+l2Z/dAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPklEQVRIiWNgGAVDDTAisU0YGBi88ah9wcDAMJNaFmcwMDAw4ZHfQ6kF+AynOhi1bNSyUctoDwasuBoFZAMAoEYFO+DRRvsAAAAASUVORK5CYIIA"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <span>
                        <table border={0} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            width={27}
                                            height={19}
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAATCAYAAABhh3Y4AAAABlBMVEUAAAD///+l2Z/dAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPklEQVRIiWNgGAVDDTAisU0YGBi88ah9wcDAMJNaFmcwMDAw4ZHfQ6kF+AynOhi1bNSyUctoDwasuBoFZAMAoEYFO+DRRvsAAAAASUVORK5CYIIA"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </span>
                    <span>
                        <table border={0} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            width={27}
                                            height={19}
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAATCAYAAABhh3Y4AAAABlBMVEUAAAD///+l2Z/dAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPklEQVRIiWNgGAVDDTAisU0YGBi88ah9wcDAMJNaFmcwMDAw4ZHfQ6kF+AynOhi1bNSyUctoDwasuBoFZAMAoEYFO+DRRvsAAAAASUVORK5CYIIA"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </span>
                    <p />
                    <h2
                        style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "justify" }}
                    >
                        Align:{" "}
                        <span className="p">
                            Komponent alClient ko'rinishida joylashtirilgan (otasida).
                        </span>
                    </h2>
                    <h2
                        style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "justify" }}
                    >
                        Tag:{" "}
                        <span className="p">Komponentga oid ma'lumot (integer qiymat).</span>
                    </h2>
                    <h2 style={{ paddingLeft: "7pt", textIndent: "16pt", textAlign: "left" }}>
                        Cursor:{" "}
                        <span className="p">
                            Komponent kursorni "crHandPoint" deb belgilangan ko'rsatuv shakliga
                            o'zgartiradi.
                        </span>
                    </h2>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <span />
                    </p>
                    <table border={0} cellSpacing={0} cellPadding={0}>
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        width={27}
                                        height={19}
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAATCAYAAABhh3Y4AAAABlBMVEUAAAD///+l2Z/dAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPklEQVRIiWNgGAVDDTAisU0YGBi88ah9wcDAMJNaFmcwMDAw4ZHfQ6kF+AynOhi1bNSyUctoDwasuBoFZAMAoEYFO+DRRvsAAAAASUVORK5CYIIA"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <span>
                        <table border={0} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            width={27}
                                            height={19}
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAATCAYAAABhh3Y4AAAABlBMVEUAAAD///+l2Z/dAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPklEQVRIiWNgGAVDDTAisU0YGBi88ah9wcDAMJNaFmcwMDAw4ZHfQ6kF+AynOhi1bNSyUctoDwasuBoFZAMAoEYFO+DRRvsAAAAASUVORK5CYIIA"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </span>
                    <p />
                    <h2
                        style={{
                            paddingLeft: "23pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        Hint: <span className="p">Komponentga ma'lumot kiritilgan.</span>
                    </h2>
                    <h2 style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "left" }}>
                        ShowHint:{" "}
                        <span className="p">Ma'lumotni ko'rsatishni faollashtirish.</span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "13pt",
                            textIndent: "-6pt",
                            lineHeight: "161%",
                            textAlign: "left"
                        }}
                    >
                        Misol: void<u>&nbsp; </u>fastcall TForm1::TForm1(TComponent* Owner):
                        TForm(Owner){"{"} Shape1-&gt;Name = "Shape1";
                    </p>
                    <p
                        style={{
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            lineHeight: "161%",
                            textAlign: "left"
                        }}
                    >
                        Shape1-&gt;Align = alClient; Shape1-&gt;Tag = 0;
                    </p>
                    <p
                        style={{
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            lineHeight: "161%",
                            textAlign: "left"
                        }}
                    >
                        Shape1-&gt;Cursor = crHandPoint; Shape1-&gt;Hint = "This is a shape";
                    </p>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Shape1-&gt;ShowHint = true; {"}"}
                    </p>
                </li>
                <li data-list-text="7)">
                    <h1
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "21pt",
                            textIndent: "-14pt",
                            textAlign: "left"
                        }}
                    >
                        TShape komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <h2 style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        Javob:{" "}
                        <span className="p">
                            C++ Builderda TShape komponentasi uchun hodisalar, bir xususiyat
                            orqali aniqlanadi va obyektni o'zgartirish orqali amalga oshiriladi.
                            Quyidagi hodisalar eng ko'p ishlatiladiganlardir:
                        </span>
                    </h2>
                    <ol id="l11">
                        <li data-list-text={1}>
                            <h2
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                OnClick:{" "}
                                <span className="p">
                                    Bu hodisa komponentga foydalanuvchi tomonidan bosingizda amalga
                                    oshiriladi. Bunday hodisa ma'lum bir komponentga mos ravishda
                                    moslashgan bo'lishi kerak.
                                </span>
                            </h2>
                            <p
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                void <u>&nbsp; </u>fastcall TForm1::Shape1Click(TObject *Sender)
                                {"{"}
                            </p>
                            <p
                                style={{
                                    paddingLeft: "20pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
            // Komponent bosildi {"}"}
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <h2
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                OnDblClick:{" "}
                                <span className="p">
                                    Bu hodisa komponentga foydalanuvchi tomonidan ikki marta
                                    bosingizda amalga oshiriladi.
                                </span>
                            </h2>
                            <p
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "25pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                void <u>&nbsp; </u>fastcall TForm1::Shape1DblClick(TObject *Sender)
                                {"{"}
                            </p>
                            <p
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "20pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
            // Komponent ikki marta bosildi {"}"}
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <h2
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                OnMouseEnter:{" "}
                                <span className="p">
                                    Bu hodisa foydalanuvchi komponentga o'tib bormoqda boshlanadi.
                                </span>
                            </h2>
                            <p
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                void <u>&nbsp; </u>fastcall TForm1::Shape1MouseEnter(TObject
                                *Sender){"{"}
                            </p>
                            <p
                                style={{
                                    paddingLeft: "20pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
            // Foydalanuvchi komponentga o'tdi {"}"}
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <h2
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                OnMouseLeave:{" "}
                                <span className="p">
                                    Bu hodisa foydalanuvchi komponentdan chiqib ketmoqda boshlanadi.
                                </span>
                            </h2>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingTop: "14pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::Shape1MouseLeave(TObject *Sender)
                        {"{"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
        // Foydalanuvchi komponentdan chiqib ketdi {"}"}
                    </p>
                    <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                </li>
                <li data-list-text="8)">
                    <h1
                        style={{ paddingLeft: "21pt", textIndent: "-14pt", textAlign: "left" }}
                    >
                        TDBGrid komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint…
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "15pt",
                            lineHeight: "90%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TdbGrid komponentasi ma’lumotlar to'plamining yozuvlarini jadval
                            ko'rinishida akslantirishda
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "14pt",
                            textAlign: "left"
                        }}
                    >
                        xizmat qiladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        TDBGrid komponentasi, C++ Builderda ma'lumotlarni ko'rsatish va
                        tahrirlash uchun moslashgan barcha kerakli xususiyatlarga ega. Quyidagi
                        xususiyatlar eng ko'p ishlatiladiganlar:
                    </p>
                    <ol id="l12">
                        <li data-list-text={1}>
                            <h2
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                Name:{" "}
                                <span className="p">
                                    Komponentning nomi. Bu nom uni dastur kodida chaqirish uchun
                                    foydalaniladi.
                                </span>
                            </h2>
                            <p
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                DBGrid1-&gt;Name = "DBGrid1";
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <h2
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                Align:{" "}
                                <span className="p">
                                    Komponentning joylashuvi va o'lchami. Misol uchun, alClient,
                                    alTop, alBottom, alLeft, alRight, va boshqalar.
                                </span>
                            </h2>
                            <p
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                DBGrid1-&gt;Align = alClient;
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <h2
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                Tag:{" "}
                                <span className="p">
                                    Komponentga oid ma'lumotni saqlash uchun foydalaniladi. Bu
                                    xususiyat komponentning dasturiy kodi ichida identifikatsiya
                                    qilish uchun ishlatiladi.
                                </span>
                            </h2>
                            <p
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                DBGrid1-&gt;Tag = 0;
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <h2
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                Cursor:{" "}
                                <span className="p">
                                    Foydalanuvchining musiqa qilishini ko'rsatadigan oynaning
                                    ko'rinishi. Misol uchun, standart mouse ko'rsatuvining xilma-xil
                                    usullarda o'zgarishi mumkin: o'zbekcha, maxsus, boshqa.
                                </span>
                            </h2>
                            <p
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                DBGrid1-&gt;Cursor = crHandPoint;
                            </p>
                        </li>
                        <li data-list-text={5}>
                            <h2
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                Hint:{" "}
                                <span className="p">
                                    Komponentning ko'rsatilgan oynasi paydo bo'lganda chiqadigan
                                    ma'lumot. Bu xususiyat, foydalanuvchiga komponentning vazifasi
                                    yoki funktsiyasi haqida qisqa ma'lumot berish uchun ishlatiladi.
                                </span>
                            </h2>
                            <p
                                style={{
                                    paddingTop: "13pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                DBGrid1-&gt;Hint = "This is a DBGrid component";
                            </p>
                        </li>
                        <li data-list-text={6}>
                            <h2
                                style={{
                                    paddingTop: "14pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                ShowHint:{" "}
                                <span className="p">
                                    Agar bu xususiyat TRUE bo'lsa, Hint xususiyati faol holatda
                                    chiqadi. Aks holda, faqatgina ko'rsatilgan oynaning ustida mouse
                                    kursuri bandi qilganda ma'lumot chiqadi.
                                </span>
                            </h2>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        DBGrid1-&gt;ShowHint = true;
                    </p>
                </li>
                <li data-list-text="9)">
                    <h1
                        style={{
                            paddingLeft: "21pt",
                            textIndent: "-14pt",
                            textAlign: "justify"
                        }}
                    >
                        TDBGrid komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TDBGrid komponenti, foydalanuvchilar tomonidan ma’lumotlar bazasidagi
                            ma’lumotlarni ko’rsatish uchun ishlatiladigan komponentdir. Uning bir
                            nechta hodisalari bor, ular quyidagilardir:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        onClick: Bu hodisa tugmani bosganda yuzaga keladi. Bu hodisa orqali siz
                        tugmani bosganda bajariladigan kodni belgilashingiz mumkin.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        onDblClick: Bu hodisa tugmani ikki marta tez-tez bosganda yuzaga
                        keladi3. Bu hodisa orqali siz tugmani ikki marta bosganda bajariladigan
                        kodni belgilashingiz mumkin. onMouseEnter: Bu hodisa sichqoncha
                        ko’rsatkichi tugma elementiga kirganda yuzaga keladi. Bu hodisa orqali
                        siz sichqoncha ko’rsatkichini tugma elementiga kirganda bajariladigan
                        kodni belgilashingiz mumkin.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Bu hodisalar sizning dasturingizning foydalanuvchiga qanday ta’sir
                        qilishini belgilaydi. Bu hodisalar orqali siz tugmani bosganda, tugmani
                        ikki marta bosganda yoki sichqoncha ko’rsatkichini tugma elementiga
                        kirganda qanday kodni bajarishini belgilashingiz mumkin
                    </p>
                </li>
                <li data-list-text="10)">
                    <h1
                        style={{
                            paddingLeft: "28pt",
                            textIndent: "-21pt",
                            lineHeight: "17pt",
                            textAlign: "justify"
                        }}
                    >
                        TProgressBar komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint…
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TProgressBar komponenti, foydalanuvchilar tomonidan biror jarayonning
                            yuzaga kelishini ko’rsatish uchun ishlatiladigan grafik komponentdir.
                            Uning bir nechta xususiyatlari bor, ular quyidagilardir:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "149%",
                            textAlign: "justify"
                        }}
                    >
                        Name: Komponentning nomi. Bu xususiyat komponentni kodda aniqlash uchun
                        ishlatiladi. Align: Bu xususiyat komponentning ota konteynerga nisbatan
                        joylashishini belgilaydi.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Tag: Bu xususiyat komponentga bog’liq ma’lumotlarni saqlash uchun
                        ishlatiladi. U int tipidagi qiymatni qabul qiladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Cursor: Bu xususiyat sichqoncha ko’rsatkichini komponentning hududiga
                        kirganda qanday ko’rinishga ega bo’lishini belgilaydi.
                    </p>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Hint: Bu xususiyat komponentga sichqoncha ko’rsatkichini olib borishda
                        chiqadigan matnni belgilaydi.
                    </p>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        ShowHint: Bu xususiyat komponentning hintini ko’rsatish yoki yashirishni
                        belgilaydi.
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Bu xususiyatlar komponentning turli xil holatlarida qanday ishlashini
                        belgilaydi. Ushbu xususiyatlar orqali siz komponentning ko’rinishini va
                        ishlashini sozlashga qodir bo’lasiz. Bu xususiyatlar sizning
                        dasturingizning foydalanuvchiga qanday ko’rinishga ega bo’lishini
                        belgilaydi. Bu xususiyatlar orqali siz komponentning ko’rinishini va
                        ishlashini sozlashga qodir bo’lasiz. Bu xususiyatlar sizning
                        dasturingizning foydalanuvchiga qanday ko’rinishga ega bo’lishini
                        belgilaydi.
                    </p>
                </li>
                <li data-list-text="11)">
                    <h1
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TProgressBar komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TProgressBar komponenti, foydalanuvchilar tomonidan biror jarayonning
                            yuzaga kelishini ko’rsatish uchun ishlatiladigan grafik komponentdir.
                            Uning bir nechta hodisalari bor, ular quyidagilardir:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        onClick: Bu hodisa tugmani bosganda yuzaga keladi. Bu hodisa orqali siz
                        tugmani bosganda bajariladigan kodni belgilashingiz mumkin.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        onDblClick: Bu hodisa tugmani ikki marta tez-tez bosganda yuzaga keladi.
                        Bu hodisa orqali siz tugmani ikki marta bosganda bajariladigan kodni
                        belgilashingiz mumkin. onMouseEnter: Bu hodisa sichqoncha ko’rsatkichi
                        tugma elementiga kirganda yuzaga keladi. Bu hodisa orqali siz sichqoncha
                        ko’rsatkichini tugma elementiga kirganda bajariladigan kodni
                        belgilashingiz mumkin.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Bu hodisalar sizning dasturingizning foydalanuvchiga qanday ta’sir
                        qilishini belgilaydi. Bu hodisalar orqali siz tugmani bosganda, tugmani
                        ikki marta bosganda yoki sichqoncha ko’rsatkichini tugma elementiga
                        kirganda qanday kodni bajarishini belgilashingiz mumkin
                    </p>
                </li>
                <li data-list-text="12)">
                    <h1
                        style={{
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            lineHeight: "16pt",
                            textAlign: "justify"
                        }}
                    >
                        TCheckBox komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: Standart komponentalar palitrasi, Name, Align, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TCheckBox komponenti, foydalanuvchilar tomonidan biror amalni
                            belgilash yoki bekor qilish uchun ishlatiladigan komponentdir. Uning
                            bir nechta xususiyatlari bor, ular quyidagilardir:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Standart komponentalar palitrasi: TCheckBox komponentini ishlatish
                        uchun, siz uni Standart tabda Komponent Palette’dan tanlashingiz va
                        formaga bosib qo’yishingiz mumkin.
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Name: Komponentning nomi. Bu xususiyat komponentni kodda aniqlash uchun
                        ishlatiladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Align: Bu xususiyat komponentning ota konteynerga nisbatan joylashishini
                        belgilaydi.
                    </p>
                    <p
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        TCheckBox komponenti, ro’yxatdagi elementlarni saqlash uchun Items
                        xususiyatiga ega, bu xususiyat TStrings turidagi. Shuningdek, siz
                        TCheckBox’da TStringList yoki uning ota TStrings’dagi kabi satrlarni
                        belgilash yoki olib tashlash mumkin.
                    </p>
                </li>
                <li data-list-text="13)">
                    <h1
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TCheckBox komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            C++ Builder'da TCheckBox komponentasi quyidagi asosiy hodisalarga ega:
                        </span>
                    </h2>
                    <ol id="l13">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **OnClick**: Bu hodisa checkbox'ga sichqoncha bilan bir marta bosish
                                paytida chaqiriladi.
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **OnDblClick**: Bu hodisa checkbox'ga sichqoncha bilan ikki marta
                                tez-tez bosish paytida chaqiriladi.
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **OnMouseEnter**: Bu hodisa sichqoncha ko'rsatkichi checkbox'ning
                                ustiga kelib qolganda chaqiriladi.
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **OnMouseLeave**: Bu hodisa sichqoncha ko'rsatkichi checkbox'ning
                                ustidan olinganda chaqiriladi.
                            </p>
                        </li>
                        <li data-list-text={5}>
                            <p
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **OnMouseDown**: Bu hodisa sichqoncha tugmasi checkbox ustida
                                bosilganda chaqiriladi.
                            </p>
                        </li>
                        <li data-list-text={6}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **OnMouseUp**: Bu hodisa sichqoncha tugmasi checkbox ustidan
                                olinganda chaqiriladi.
                            </p>
                        </li>
                        <li data-list-text={7}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **OnMouseMove**: Bu hodisa sichqoncha ko'rsatkichi checkbox ustida
                                harakatlantirilganda chaqiriladi.
                            </p>
                        </li>
                        <li data-list-text={8}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **OnStateChange**: Bu hodisa checkbox'ning holati (Checked,
                                Unchecked, Grayed) o'zgarganda chaqiriladi
                            </p>
                        </li>
                        <li data-list-text={9}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **OnContextPopup**: Bu hodisa checkbox ustida o'ng sichqoncha
                                tugmasi bosilganda chaqiriladi.
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Ushbu hodisalardan foydalanish orqali siz checkbox'ning xatti-harakatiga
                        mos keladigan qo'shimcha funksiyalarni yozishingiz mumkin. Masalan,
                        OnClick hodisasidan foydalanib, checkbox'ga bosish orqali ma'lum bir
                        amaliyotni bajarish mumkin.
                    </p>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        Misol uchun, OnStateChange hodisasidan foydalanib, checkbox holati
                        o'zgarganida ma'lum bir harakatni amalga oshirish mumkin:
                    </p>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "147%",
                            textAlign: "justify"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::chkBoxStateChange(TObject *Sender)
                        {"{"} if (chkBox-&gt;Checked){"{"}
                    </p>
                    <p
                        style={{ paddingLeft: "33pt", textIndent: "0pt", textAlign: "justify" }}
                    >
                        ShowMessage("Checkbox checked!");{"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        else {"{"} ShowMessage("Checkbox unchecked!"); {"}"} {"}"}
                    </p>
                </li>
                <li data-list-text="14)">
                    <h1
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TTimer komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: Enabled, Interval, Name, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            C++ Builder'da TTimer komponenti quyidagi asosiy xususiyatlarga ega:
                        </span>
                    </h2>
                    <ol id="l14">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "left"
                                }}
                            >
                                **Name**: Bu xususiyat komponentaning nomi bo'lib, uni ishlatish
                                uchun dasturda qayta murojaat qilinadi.
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingTop: "6pt",
                                    paddingLeft: "19pt",
                                    textIndent: "-12pt",
                                    textAlign: "left"
                                }}
                            >
                                **Enabled**: Agar bu xususiyat true bo'lsa, Timer faol bo'ladi, aks
                                holda nofaol bo'ladi.
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "20pt",
                                    textIndent: "-13pt",
                                    textAlign: "left"
                                }}
                            >
                                **Interval**: Bu xususiyat Timer'ning chaqirilish oralig'ini
                                millisoniyalarda belgilaydi.
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "20pt",
                                    textIndent: "-13pt",
                                    textAlign: "left"
                                }}
                            >
                                **OnTimer**: Bu hodisa Timer'ning Interval vaqti o'tganda
                                chaqiriladi.
                            </p>
                        </li>
                        <li data-list-text={5}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **Tag**: Bu xususiyat komponentaga biror ma'lumot yozish uchun
                                ishlatiladi. Masalan, o'ziga xos identifikatorni yozish uchun.
                            </p>
                        </li>
                        <li data-list-text={6}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "20pt",
                                    textIndent: "-13pt",
                                    textAlign: "left"
                                }}
                            >
                                **Visible**: Bu xususiyat komponentaning ko'rinish-ko'rinmasligini
                                belgilaydi.
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Quyidagi misol orqali TTimer komponentasidan foydalanishni ko'rsatamiz:
                        <i>TForm </i>*form
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        = new TForm(this);
                    </p>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "149%",
                            textAlign: "left"
                        }}
                    >
                        TTimer *timer = new TTimer(form); timer-&gt;Interval = 1000;
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        timer-&gt;Enabled = true;
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        timer-&gt;OnTimer = TimerTick;
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "149%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::TimerTick(TObject *Sender){"{"}{" "}
                        MessageBox(NULL, "Timer chaqirildi", "Xabar", MB_OK); {"}"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Ushbu misolda, 1 soniya oralig'ida Timer chaqiriladi va "Timer
                        chaqirildi" xabari ko'rsatiladi. Timer'ni yoqish/o'chirish uchun Enabled
                        xususiyatidan, Timer chaqirilganda amalga oshiriladigan amallarni yozish
                        uchun esa OnTimer hodisasidan foydalaniladi.
                    </p>
                </li>
                <li data-list-text="15)">
                    <h1
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TTimer komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: onTimer hodisasi, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            C++ Builder'da TTimer komponentining asosiy hodisasi **OnTimer**
                            hisoblanadi.
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        **OnTimer** hodisasi Timer'ning Interval vaqti o'tganda chaqiriladi. Bu
                        hodisadan foydalanib, Timer chaqirilganda bajarilishi kerak bo'lgan
                        kodlarni yozish mumkin.
                    </p>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Quyidagi misolda OnTimer hodisasidan foydalanib, Timer chaqirilganda
                        bajarilishi kerak bo'lgan amallar yozilgan:
                    </p>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "148%",
                            textAlign: "left"
                        }}
                    >
                        TForm *form = new TForm(this); TTimer *timer = new TTimer(form);
                        timer-&gt;Interval = 1000;)
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        timer-&gt;Enabled = true;
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        timer-&gt;OnTimer = TimerTick;
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "147%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::TimerTick(TObject *Sender){"{"}{" "}
                        MessageBox(NULL, "Timer chaqirildi", "Xabar", MB_OK); {"}"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Ushbu misolda, 1 soniya oralig'ida Timer chaqiriladi va "Timer
                        chaqirildi" xabari ko'rsatiladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        TTimer komponenti uchun boshqa hodisalar mavjud emas. Uning
                        xususiyatlari orqali funksionalligini boshqarish mumkin, masalan:
                    </p>
                    <ul id="l15">
                        <li data-list-text="-">
                            <p
                                style={{
                                    paddingTop: "6pt",
                                    paddingLeft: "14pt",
                                    textIndent: "-7pt",
                                    textAlign: "left"
                                }}
                            >
                                **Enabled** xususiyati orqali Timer'ni yoqish/o'chirish;
                            </p>
                        </li>
                        <li data-list-text="-">
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "14pt",
                                    textIndent: "-7pt",
                                    textAlign: "left"
                                }}
                            >
                                **Interval** xususiyati orqali Timer'ning chaqirilish oralig'ini
                                o'zgartirish;
                            </p>
                        </li>
                        <li data-list-text="-">
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "14pt",
                                    textIndent: "-7pt",
                                    textAlign: "left"
                                }}
                            >
                                **Tag** xususiyati orqali Timer'ga biror ma'lumot yozish.
                            </p>
                        </li>
                    </ul>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Shuningdek, TTimer komponenti bilan birga TThread komponentidan ham
                        foydalanish mumkin. Bu orqali asosiy UI threadini bloklashmasdan,
                        qo'shimcha threadda Timer amallarini bajarish mumkin.
                    </p>
                </li>
                <li data-list-text="16)">
                    <h1
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TEdit komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: Standart komponentalar palitrasi, Name, Align, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            C++ Builder'da TEdit komponenti Standart komponentalar palitraasida
                            joylashgan bo'lib, quyidagi asosiy xususiyatlarga ega:
                        </span>
                    </h2>
                    <ol id="l16">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingTop: "8pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "left"
                                }}
                            >
                                **Name**: Bu xususiyat komponentaning nomi bo'lib, uni ishlatish
                                uchun dasturda qayta murojaat qilinadi.
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingTop: "8pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "left"
                                }}
                            >
                                **Align**: Bu xususiyat komponentaning joylashish usulini
                                belgilaydi. Masalan, alLeft, alRight, alTop, alBottom va hokazo.
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingTop: "8pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "left"
                                }}
                            >
                                **Text**: Bu xususiyat Edit komponenti ichidagi matnni o'qish yoki
                                o'zgartirish uchun ishlatiladi.
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <p
                                style={{
                                    paddingTop: "8pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "left"
                                }}
                            >
                                **ReadOnly**: Agar bu xususiyat true bo'lsa, foydalanuvchi Edit
                                komponentiga ma'lumot kiritolmaydi.
                            </p>
                        </li>
                        <li data-list-text={5}>
                            <p
                                style={{
                                    paddingTop: "8pt",
                                    paddingLeft: "20pt",
                                    textIndent: "-13pt",
                                    textAlign: "justify"
                                }}
                            >
                                **Color**: Bu xususiyat Edit komponentining orqa fon rangini
                                belgilaydi.
                            </p>
                        </li>
                        <li data-list-text={6}>
                            <p
                                style={{
                                    paddingTop: "9pt",
                                    paddingLeft: "20pt",
                                    textIndent: "-13pt",
                                    textAlign: "justify"
                                }}
                            >
                                **Font**: Bu xususiyat Edit komponentidagi matnning shriftini
                                belgilaydi.
                            </p>
                        </li>
                        <li data-list-text={7}>
                            <p
                                style={{
                                    paddingTop: "9pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "left"
                                }}
                            >
                                **PasswordChar**: Agar bu xususiyat o'rnatilsa, foydalanuvchi
                                kiritgan ma'lumot yulduzcha ko'rinishida ko'rsatiladi.
                            </p>
                        </li>
                        <li data-list-text={8}>
                            <p
                                style={{
                                    paddingTop: "8pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **CharCase**: Bu xususiyat Edit komponentiga kiritilayotgan matnning
                                katta/kichik harfda yozilishini belgilaydi.
                            </p>
                        </li>
                        <li data-list-text={9}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                **MaxLength**: Bu xususiyat Edit komponentiga kiritilishi mumkin
                                bo'lgan maksimal belgilar sonini belgilaydi.
                            </p>
                        </li>
                        <li data-list-text={10}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "162%",
                                    textAlign: "left"
                                }}
                            >
                                **OnChange**: Bu hodisa Edit komponentida matn o'zgarganda
                                chaqiriladi. Quyidagi misolda TEdit komponentasidan foydalanish
                                ko'rsatilgan:
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "161%",
                            textAlign: "left"
                        }}
                    >
                        TForm *form = new TForm(this); TEdit *edit = new TEdit(form);
                        edit-&gt;Name = "MyEdit";
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        edit-&gt;Align = alTop;
                    </p>
                    <p
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        edit-&gt;Text = "Salom, dunyo!";
                    </p>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "162%",
                            textAlign: "left"
                        }}
                    >
                        edit-&gt;Font-&gt;Name = "Arial"; edit-&gt;Font-&gt;Size = 14;
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        edit-&gt;OnChange = EditChange;
                    </p>
                    <p
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "161%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::EditChange(TObject *Sender){"{"}{" "}
                        MessageBox(NULL, edit-&gt;Text.c_str(), "Xabar", MB_OK); {"}"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Ushbu misolda, Edit komponenti yaratiladi, uning xususiyatlari
                        o'rnatiladi va Edit komponentida matn o'zgarganda chaqiriladigan hodisa
                        funktsiyasi yozilgan.
                    </p>
                </li>
                <li data-list-text="17)">
                    <h1
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TEdit komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            Edit komponentasi matn kiritish uchun mo‘ljallangan. U Standart
                            Komponentlar palitrasida joylashgan. Uning asosiy xususiyati - Matn .
                            Bu tahrirlashda ba'zi matnlarni o'qish va yozish imkonini beradi.
                            Tahrirlash uchun quyidagi kod yoziladi:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        int a= StrToInt(Edit1-&gt;Matn);
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Buyruq tugmasini chertish C++ Builder da xodisa deb ataladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Xodisa bu ob'yekt yordamida biron bir ish bajarishdan iborat. Xodisa
                        bajarilganidan so'ng shu ob'yekt yordamida qandaydir ma'lumotlar qayta
                        ishlanadi. xodisani ajratib olish uchun xodisaning nomi oldiga On so'zi
                        qo'shilgan.
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        OnClick-Sichqoncha tugmasini komponenta sohasida bir marta chertish;
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        OnDbIClick: Sichqoncha tugmasini komponenta sohasida ikki marta chertish
                        xodisasi hisoblanadi.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        OnMouseEnter-Foydalanuvchi sichqonchani boshqaruv elementiga o'tkazganda
                        sodir bo'ladi.
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        OnActivate:Forma bu xodisani aktivlashgan qabul qiladi
                    </p>
                </li>
                <li data-list-text="18)">
                    <h1
                        style={{ paddingLeft: "27pt", textIndent: "-20pt", textAlign: "left" }}
                    >
                        TForm komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: TForm, Align, BorderIcons, BorderStyle, Position, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            C++ Builder dasturlash muhitida TForm komponentasi dasturiy
                            interfeysning asosiy oynasi yoki dialog oynasi sifatida ishlatiladi. U
                            turli komponentalarni joylashtirish va foydalanuvchi bilan ishlash
                            imkonini beradi.
                        </span>
                    </h2>
                    <ol id="l17">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "left"
                                }}
                            >
                                Align-xususiyati forma va uning ichidagi komponentalarni joylashuv
                                usulini belgilaydi. Align xususiyati quyidagi qiymatlarga ega
                                bo'lishi mumkin: alNone - o'z xolatida; alTop - yuqori chegara
                                bo'ylab; alBottom - pastki chegara bo'ylab; alLeft - chap chegara
                                bo'ylab; alRight - o'ng chegara bo'ylab; alCilent - formani toʻliq
                                egallab oladi
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "left"
                                }}
                            >
                                BorderIcons xususiyati formaning ikonkalar joylashuvini belgilaydi.
                                biSystemMenu xususiyati ixchamlash va sistema tugmalariga,
                                biMinimaz-ixchamlash tugmasiga, biMaximaze- kengaytirish tugmasiga,
                                biHelp-ma’lumotnomalarni chiqarish tugmasi bilan
                            </p>
                            <p
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                ishlashga ruxsat beradi.
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "left"
                                }}
                            >
                                BorderStyle-xususiyati formaning chegara uslubini belgilaydi. Mavjud
                                qiymatlar: bsNone- chegara yoʻq, bsSingle-ingichka chegara,
                                bsSizeable-oddiy chegara, bsDialog, bsToolWindow, bsSizeToolWin
                            </p>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "3pt",
                                    lineHeight: "108%",
                                    textAlign: "left"
                                }}
                            >
                                Agar oynaning chegarasi oddiy bo‘lsa, uni sichqonchadan foydalanib,
                                o‘zgartirish mumkin. Ingichka chegarali oyna o‘lchamlarini
                                o‘zgartirib bo‘lmaydi. Agar chegara bo‘lmasa, u holda ekranga
                                sarlavhasiz oyna chiqarilishi mumkin
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "107%",
                                    textAlign: "left"
                                }}
                            >
                                Position-xususiyati forma ekranda qaysi holatda ochilishini
                                belgilaydi. Mavjud qiymatlar:
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        poDefauft - joylashuv Windows tomonidan aniqlanadi; poDefauftPosOnfy -
                        ishlab chiquvchi tomonidan belgilangan o'lchovlar qo'llaniladi;
                        poDefaultSizeOnly - ishlab chiquvchi tomonidan ko'rsatilgan manzildan
                        foydalaniladi; poScreenCenter - formaning markazda joylashgan;
                        poDesktopCenter - ekranning markazida joylashgan.
                    </p>
                </li>
                <li data-list-text="19)">
                    <h1
                        style={{
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            lineHeight: "16pt",
                            textAlign: "left"
                        }}
                    >
                        TForm komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "36pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onKeyPress, onShow, onHide, onCreate, onMouseEnter,
                        onMouseLeave, onMouseMove, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            C++ Builder dasturlash muhitida TForm komponentasi dasturiy
                            interfeysning asosiy oynasi yoki dialog oynasi sifatida ishlatiladi. U
                            turli komponentalarni joylashtirish va foydalanuvchi bilan ishlash
                            imkonini beradi. Hodisalari: Buyruq tugmasini chertish C++ Builder da
                            xodisa deb ataladi. Xodisa bu ob'yekt yordamida biron bir ish
                            bajarishdan iborat. Xodisa bajarilganidan so'ng shu ob'yekt yordamida
                            qandaydir ma'lumotlar qayta ishlanadi. xodisani ajratib olish uchun
                            xodisaning nomi oldiga On so'zi qo'shilgan onKeyPress: klaviaturada
                            tugma bosilganda sodir bo'ladi.
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        onShow: forma ko'rsatilganda sodir bo'ladi. onHide: forma yashirilganda
                        sodir bo'ladi.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        onCreate:forma yaratilganda (yaratilish jarayonida) sodir bo'ladi.
                        onMouseEnter: sichqoncha formaning ustiga kirganda sodir bo'ladi.
                        onMouseLeave: sichqoncha formaning ustidan chiqib ketganda sodir
                        bo'ladi. onMouseMove: sichqoncha forma ustida harakatlanganda sodir
                        bo'ladi.
                    </p>
                </li>
                <li data-list-text="20)">
                    <h1
                        style={{
                            paddingLeft: "31pt",
                            textIndent: "-24pt",
                            lineHeight: "16pt",
                            textAlign: "left"
                        }}
                    >
                        TPanel komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Standart komponentalar palitrasi, Name, Align, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            C++ Builder dasturlash muhitida TPanel komponentasi foydalanuvchi
                            interfeysini tuzishda yordam beradigan vizual komponent hisoblanadi.
                            TPanel komponentasining asosiy xususiyatlari quyidagilardir:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Standart komponentalar palitrasi: TPanel komponentasi "Standard"
                        palitrasida joylashgan. Bu palitrada umumiy va tez-tez ishlatiladigan
                        komponentalar mavjud. Name: TPanel komponentasining nomini belgilaydi.
                        Nom dastur kodida komponentaga murojaat qilish uchun ishlatiladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "3pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Align: panelning formadagi joylashuvini belgilaydi. Caption: panelda
                        ko'rsatiladigan matnni belgilaydi.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Enabled: panelning faol yoki faol emasligini belgilaydi. true bo'lsa,
                        panel faol, false bo'lsa, faol emas.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        Panel1-&gt; Enabled = false;
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Visible: panelning ko'rinadigan yoki ko'rinmaydiganligini belgilaydi.
                        true bo'lsa, panel ko'rinadi, false bo'lsa, ko'rinmaydi.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "3pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        BorderStyle:panelning chegarasini belgilaydi. Color: Panelning fon
                        rangini belgilaydi Panel1 -&gt; Color = clBlue;
                    </p>
                </li>
                <li data-list-text="21)">
                    <h1
                        style={{
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            lineHeight: "16pt",
                            textAlign: "left"
                        }}
                    >
                        TPanel komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <div
                        className="textbox"
                        style={{
                            background: "#F7F7F7",
                            display: "block",
                            minHeight: "48.5pt",
                            width: "471.2pt"
                        }}
                    >
                        <p
                            className="s3"
                            style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            Javob: <span className="s10">TPanel komponentasi hodisalari</span>
                        </p>
                        <p style={{ paddingTop: "2pt", textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                        <p
                            className="s10"
                            style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            TPanel komponentasi quyidagi asosiy hodisalarni qo’llab-quvvatlaydi:
                        </p>
                    </div>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "59.8pt",
                    width: "453.2pt"
                }}
            >
                <ul id="l18">
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                lineHeight: "15pt",
                                textAlign: "left"
                            }}
                        >
                            OnClick
                            <span className="s10">
                                : Foydalanuvchi panel ustiga bosganda ishga tushadi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                lineHeight: "15pt",
                                textAlign: "left"
                            }}
                        >
                            OnDblClick
                            <span className="s10">
                                : Foydalanuvchi panel ustiga ikki marta tez bosganda ishga tushadi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnMouseDown
                            <span className="s10">
                                : Foydalanuvchi sichqonchaning tugmasini panel ustida bosib turganda
                                ishga tushadi.
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
            <p style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "left" }} />
            <ul id="l19">
                <li data-list-text="">
                    <h2
                        style={{ paddingLeft: "43pt", textIndent: "-18pt", textAlign: "left" }}
                    >
                        onMouseEnter:{" "}
                        <span className="p">
                            sichqoncha formaning ustiga kirganda sodir bo'ladi.
                        </span>
                    </h2>
                </li>
            </ul>
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "89.5pt",
                    width: "453.2pt"
                }}
            >
                <ul id="l20">
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnMouseUp
                            <span className="s10">
                                : Foydalanuvchi sichqonchaning tugmasini panel ustida qo’yib
                                yuborganda ishga tushadi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                lineHeight: "15pt",
                                textAlign: "left"
                            }}
                        >
                            OnMouseMove
                            <span className="s10">
                                : Sichqoncha panel ustida harakatlanayotganda ishga tushadi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnEnter
                            <span className="s10">
                                : TPanel komponenti fokusni qabul qilganda ishga tushadi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnExit
                            <span className="s10">
                                : TPanel komponenti fokusni yo’qotganda ishga tushadi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                lineHeight: "15pt",
                                textAlign: "left"
                            }}
                        >
                            OnResize
                            <span className="s10">
                                : TPanel komponentining o’lchamlari o’zgartirilganda ishga tushadi.
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
            <p style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "left" }} />
            <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "48.5pt",
                    width: "471.2pt"
                }}
            >
                <p
                    className="s10"
                    style={{
                        paddingLeft: "1pt",
                        textIndent: "0pt",
                        lineHeight: "108%",
                        textAlign: "left"
                    }}
                >
                    Shuningdek, TPanel komponentasi boshqa hodisalarni ham qo’llab-quvvatlashi
                    mumkin, lekin ular dastur tuzilishiga va ishlatiladigan Borland C++
                    Builder versiyasiga bog’liq bo’ladi
                </p>
            </div>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <ol id="l21">
                <li data-list-text="22)">
                    <h1
                        style={{
                            paddingTop: "14pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TRadioButton komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Standart komponentalar palitrasi, Name, Align, …
                    </p>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <div
                        className="textbox"
                        style={{
                            background: "#F7F7F7",
                            display: "block",
                            minHeight: "59.5pt",
                            width: "471.2pt"
                        }}
                    >
                        <p
                            className="s3"
                            style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            Javob:{" "}
                            <span className="s12">TRadioButton komponentasi xususiyatlari</span>
                        </p>
                        <p style={{ paddingTop: "2pt", textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                        <p
                            className="s12"
                            style={{
                                paddingLeft: "1pt",
                                textIndent: "0pt",
                                lineHeight: "110%",
                                textAlign: "left"
                            }}
                        >
                            TRadioButton{" "}
                            <span className="s5">
                                komponentasi Borland C++ Builder dasturida radio tugmalarini
                                yaratish uchun ishlatiladi. Ushbu komponentning asosiy xususiyatlari
                                quyidagilardan iborat:
                            </span>
                        </p>
                    </div>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "172.8pt",
                    width: "453.2pt"
                }}
            >
                <ul id="l22">
                    <li data-list-text="">
                        <p
                            className="s5"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Name: Komponentga nom berish imkonini beradi, bu esa dasturchi va
                            kompilyatorga uni istalgan vaqtda chaqirish imkonini beradi1
                        </p>
                        <p
                            className="s5"
                            style={{ paddingLeft: "19pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            Caption: Radio tugmasining yorlig’i, ya’ni foydalanuvchi uchun
                            ko’rinadigan
                        </p>
                        <p
                            className="s5"
                            style={{ paddingLeft: "19pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            matn1.
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s5"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Checked: Agar true bo’lsa, radio tugma tanlangan holatda
                            ko’rsatiladi1.
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s5"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Enabled: Agar true bo’lsa, radio tugma faol holatda bo’ladi va
                            foydalanuvchi uni
                        </p>
                        <p
                            className="s5"
                            style={{ paddingLeft: "19pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            tanlashi mumkin1.
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s5"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Visible: Agar true bo’lsa, radio tugma foydalanuvchi uchun
                            ko’rinadigan bo’ladi1.
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s5"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Parent: Radio tugmani joylashtiriladigan ota-konteyner2.
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s5"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            GroupIndex: Bir guruhdagi radio tugmalarni boshqarish uchun
                            ishlatiladi. Bir xil GroupIndex qiymatiga ega radio tugmalar o’zaro
                            eksklyuziv tanlov sifatida ishlaydi1
                        </p>
                    </li>
                </ul>
            </div>
            <p style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "left" }} />
            <p
                className="s13"
                style={{
                    paddingTop: "13pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "112%",
                    textAlign: "justify"
                }}
            >
                Radio tugmalarini to’g’ri ishlatish uchun ularni TRadioGroup, TGroupBox yoki
                TPanel kabi konteynerlarda joylashtirish kerak. Bu ularning o’zaro
                eksklyuzivligini ta’minlaydi1. Agar siz TRadioButton komponentini dasturlash
                orqali yaratmoqchi bo’lsangiz, quyidagi misol kabi kod yozishingiz mumkin
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "5pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "129%",
                    textAlign: "left"
                }}
            >
                TRadioButton *radioButton = new TRadioButton(this); radioButton-&gt;Caption
                = "Tanlov 1";
            </p>
            <p
                className="s14"
                style={{
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                radioButton-&gt;Parent = this; // Bu yerda 'this' o'rniga radio tugmani
                joylashtirmoqchi bo'lgan konteyneringizni ko'rsatishingiz kerak
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "2pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                radioButton-&gt;GroupIndex = 1;
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "4pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                radioButton-&gt;Left = 10;
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "4pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "128%",
                    textAlign: "left"
                }}
            >
                radioButton-&gt;Top = 10; radioButton-&gt;Visible = true;
                radioButton-&gt;Enabled = true;
            </p>
            <p
                className="s14"
                style={{
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "107%",
                    textAlign: "left"
                }}
            >
                Yuqoridagi kodda TRadioButton komponentini dasturlash orqali yaratish va
                uning asosiy xususiyatlarini sozlash ko’rsatilgan
            </p>
            <ol id="l23">
                <li data-list-text="23)">
                    <p
                        className="s15"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TRadioButton komponentasi hodisalari
                    </p>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob: <span className="p">TRadioButton komponentasi hodisalari</span>
                    </h2>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <div
                        className="textbox"
                        style={{
                            background: "#F7F7F7",
                            display: "block",
                            minHeight: "32.2pt",
                            width: "471.2pt"
                        }}
                    >
                        <p
                            className="s10"
                            style={{
                                paddingLeft: "1pt",
                                textIndent: "0pt",
                                lineHeight: "109%",
                                textAlign: "left"
                            }}
                        >
                            TRadioButton komponentasi uchun Borland C++ Builder dasturida quyidagi
                            asosiy hodisalar (events) mavjud:
                        </p>
                    </div>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "60.0pt",
                    width: "453.2pt"
                }}
            >
                <ul id="l24">
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnClick
                            <span className="s10">
                                : Foydalanuvchi radio tugmasini bosganda ishga tushadi. Bu hodisa
                                radio tugma ustida bosish amalini aniqlash uchun ishlatiladi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnDblClick
                            <span className="s10">
                                : Foydalanuvchi radio tugmasini ikki marta tez bosganda ishga
                                tushadi. Bu hodisa ikki marta bosish amalini aniqlash uchun
                                ishlatiladi.
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
            <p style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "left" }} />
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "209.3pt",
                    width: "453.2pt"
                }}
            >
                <ul id="l25">
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnMouseDown
                            <span className="s10">
                                : Foydalanuvchi sichqonchaning tugmasini radio tugma ustida bosib
                                turganda ishga tushadi. Bu hodisa sichqonchaning tugmasini bosish va
                                ushlab turish amalini aniqlash uchun ishlatiladi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnMouseUp
                            <span className="s10">
                                : Foydalanuvchi sichqonchaning tugmasini radio tugma ustida qo’yib
                                yuborganda ishga tushadi. Bu hodisa sichqonchaning tugmasini qo’yib
                                yuborish amalini aniqlash uchun ishlatiladi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnMouseMove
                            <span className="s10">
                                : Sichqoncha radio tugma ustida harakatlanayotganda ishga tushadi.
                                Bu hodisa sichqonchaning harakatini kuzatish uchun ishlatiladi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnEnter
                            <span className="s10">
                                : TRadioButton komponenti fokusni qabul qilganda ishga tushadi. Bu
                                hodisa radio tugma fokusni olganda amalga oshiriladi
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnExit
                            <span className="s10">
                                : TRadioButton komponenti fokusni yo’qotganda ishga tushadi. Bu
                                hodisa radio tugma fokusni yo’qotganda amalga oshiriladi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            OnKeyPress
                            <span className="s10">
                                : Foydalanuvchi klaviaturada tugma bosganda ishga tushadi. Bu hodisa
                                klaviatura orqali kiritilgan belgilarni aniqlash uchun ishlatiladi.
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
            <p style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "left" }} />
            <p
                className="s14"
                style={{
                    paddingTop: "12pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                Bu hodisalar TRadioButton komponentining interaktivligini ta’minlaydi va
                foydalanuvchi bilan o’zaro ta’sir qilish imkonini beradi
            </p>
            <ol id="l26">
                <li data-list-text="24)">
                    <p
                        className="s15"
                        style={{
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            lineHeight: "16pt",
                            textAlign: "left"
                        }}
                    >
                        TImage komponentasi xususiyatlari
                    </p>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint…
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingBottom: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob: <span className="p">TImage komponentasi xususiyatlari</span>
                    </h2>
                    <div
                        className="textbox"
                        style={{
                            background: "#F7F7F7",
                            display: "block",
                            minHeight: "29.8pt",
                            width: "471.2pt"
                        }}
                    >
                        <p
                            className="s10"
                            style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            TImage komponentasi Borland C++ Builder dasturida rasm fayllarini
                            ko’rsatish uchun ishlatiladi. Ushbu komponentning asosiy xususiyatlari
                            quyidagilardan iborat:
                        </p>
                    </div>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "224.3pt",
                    width: "453.2pt"
                }}
            >
                <ul id="l27">
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "justify"
                            }}
                        >
                            Picture
                            <span className="s10">
                                : TPicture obyekti orqali rasm fayllarini yuklash va boshqarish
                                imkonini beradi. Bu xususiyat orqali TImage komponentiga BMP, JPEG,
                                ICO va boshqa ko’plab rasm formatlarini yuklash mumkin.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            AutoSize
                            <span className="s10">
                                : Agar true bo’lsa, TImage komponenti o’zining o’lchamlarini
                                avtomatik ravishda rasmning o’lchamlariga moslashtiradi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Stretch
                            <span className="s10">
                                : Agar true bo’lsa, rasm TImage komponentining o’lchamlariga mos
                                ravishda cho’ziladi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Center
                            <span className="s10">
                                : Agar true bo’lsa, rasm TImage komponentining markazida joylashadi,
                                hatto rasm komponent o’lchamlaridan kichik bo’lsa ham
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Proportional
                            <span className="s10">
                                : Agar true bo’lsa, rasmning proporsiyalari saqlanib qoladi, ya’ni
                                rasm cho’zilganda uning uzunligi va kengligi nisbati o’zgarmaydi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Transparent
                            <span className="s10">
                                : Agar true bo’lsa, rasmning shaffofligi yoqiladi, bu esa rasmning
                                fonini ko’rinmas qiladi.
                            </span>
                        </p>
                    </li>
                    <li data-list-text="">
                        <p
                            className="s11"
                            style={{
                                paddingLeft: "19pt",
                                textIndent: "-18pt",
                                textAlign: "left"
                            }}
                        >
                            Align
                            <span className="s10">
                                : TImage komponentini ota-konteyner ichida joylashishini belgilaydi
                                (masalan, alTop, alBottom, alLeft, alRight, alClient).
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
            <p style={{ paddingLeft: "23pt", textIndent: "0pt", textAlign: "left" }} />
            <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "32.3pt",
                    width: "471.2pt"
                }}
            >
                <p
                    className="s10"
                    style={{
                        paddingLeft: "1pt",
                        textIndent: "0pt",
                        lineHeight: "109%",
                        textAlign: "left"
                    }}
                >
                    TImage komponenti dasturlash orqali yaratilganda, quyidagi misol kabi kod
                    yozishingiz mumkin:
                </p>
            </div>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <p
                className="s14"
                style={{
                    paddingTop: "14pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                TImage *image = new TImage(this);
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "2pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                image-&gt;Parent = this; // Bu yerda 'this' o'rniga rasmni joylashtirmoqchi
                bo'lgan konteyneringizni ko'rsatishingiz kerak
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "3pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "120%",
                    textAlign: "left"
                }}
            >
                image-&gt;Picture-&gt;LoadFromFile("rasm.jpg"); image-&gt;AutoSize = true;
            </p>
            <p
                className="s14"
                style={{
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "120%",
                    textAlign: "left"
                }}
            >
                image-&gt;Stretch = false; image-&gt;Center = true; image-&gt;Proportional =
                true; image-&gt;Transparent = false; image-&gt;Align = alClient;
                image-&gt;Visible = true;
            </p>
            <div
                className="textbox"
                style={{
                    background: "#F7F7F7",
                    display: "block",
                    minHeight: "32.2pt",
                    width: "471.2pt"
                }}
            >
                <p
                    className="s10"
                    style={{
                        paddingLeft: "1pt",
                        textIndent: "0pt",
                        lineHeight: "109%",
                        textAlign: "left"
                    }}
                >
                    Yuqoridagi kodda TImage komponentini dasturlash orqali yaratish va uning
                    asosiy xususiyatlarini sozlash ko’rsatilgan
                </p>
            </div>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <ol id="l28">
                <li data-list-text="25)">
                    <h1
                        style={{ paddingLeft: "27pt", textIndent: "-20pt", textAlign: "left" }}
                    >
                        TImage komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h3
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            style={{
                                color: "#111",
                                fontFamily: '"Times New Roman", serif',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "13pt"
                            }}
                            target="_blank"
                        >
                            C++ Builder’da TImage komponenti uchun hodisalar (events)
                            foydalanuvchining interaktiv harakatlariga javob berish uchun
                            ishlatiladi.{" "}
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="a"
                            target="_blank"
                        >
                            Masalan, rasm{" "}
                        </a>
                        <span className="s28">ustida</span>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="s34"
                            target="_blank"
                        >
                            {" "}
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="a"
                            target="_blank"
                        >
                            sichqonchaning harakatlanishi (
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="s17"
                            target="_blank"
                        >
                            OnMouseMove
                        </a>
                        <span className="s28">), sichqoncha tugmasining bosilishi</span>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="s34"
                            target="_blank"
                        >
                            {" "}
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="a"
                            target="_blank"
                        >
                            (
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="s17"
                            target="_blank"
                        >
                            OnMouseDown
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="a"
                            target="_blank"
                        >
                            ), sichqoncha tugmasining qo’yib yuborilishi (
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="s17"
                            target="_blank"
                        >
                            OnMouseUp
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="a"
                            target="_blank"
                        >
                            ){" "}
                        </a>
                        <span className="s28">va rasmning</span>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="s34"
                            target="_blank"
                        >
                            {" "}
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="a"
                            target="_blank"
                        >
                            o’zgarishi (
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="s17"
                            target="_blank"
                        >
                            OnChange
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                            className="a"
                            target="_blank"
                        >
                            ) kabi{" "}
                        </a>
                        <span className="s28">hodisalar mavjud1</span>
                        <span className="s14">.</span>
                    </h3>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <div
                        className="textbox"
                        style={{
                            background: "#F7F7F7",
                            display: "block",
                            minHeight: "32.2pt",
                            width: "471.2pt"
                        }}
                    >
                        <p
                            className="s10"
                            style={{
                                paddingLeft: "1pt",
                                textIndent: "0pt",
                                lineHeight: "109%",
                                textAlign: "left"
                            }}
                        >
                            TImage komponenti uchun hodisalarni dasturlash vaqtida belgilash
                            uchun, siz komponent yaratilgandan so’ng, uning hodisalarini mos
                            metodlarga bog’lash kerak.
                        </p>
                    </div>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <p
                className="s14"
                style={{
                    paddingTop: "10pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                void <u>&nbsp; </u>fastcall TForm1::ImageMouseMove(TObject *Sender,
                TShiftState Shift, int X, int Y)
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "10pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <u>&nbsp; </u>fastcall TForm1::TForm1(TComponent *Owner) : TForm(Owner)
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "12pt",
                    paddingLeft: "13pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"} TImage *img = new TImage(this);
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "12pt",
                    paddingLeft: "13pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                img-&gt;Parent = this; // Rasmni oynaga biriktirish
            </p>
            <p
                className="s14"
                style={{
                    paddingTop: "12pt",
                    paddingLeft: "7pt",
                    textIndent: "6pt",
                    lineHeight: "107%",
                    textAlign: "left"
                }}
            >
                img-&gt;OnMouseMove = &amp;ImageMouseMove; {"}"} // OnMouseMove hodisasini
                ImageMouseMove metodiga bog'lash
            </p>
            <p
                style={{
                    paddingTop: "11pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "107%",
                    textAlign: "left"
                }}
            >
                <a
                    href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                    className="s19"
                    target="_blank"
                >
                    ImageMouseMove
                </a>
                <a
                    href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                    className="s20"
                    target="_blank"
                >
                    {" "}
                    funksiyasi{" "}
                </a>
                <a
                    href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                    className="s19"
                    target="_blank"
                >
                    OnMouseMove
                </a>
                <span className="s21" style={{ backgroundColor: "#F7F7F7" }}>
                    {" "}
                    hodisasiga bog’lanadi va foydalanuvchi
                </span>
                <a
                    href="https://stackoverflow.com/questions/72373032/how-to-use-animated-gif-with-timage-component"
                    className="s34"
                    target="_blank"
                >
                    {" "}
                </a>
                <span className="s21" style={{ backgroundColor: "#F7F7F7" }}>
                    rasm ustida sichqonchani harakatlantirganda bu funksiya chaqiriladi1
                </span>
                <span className="s22" style={{ backgroundColor: "#F7F7F7" }}>
                    .
                </span>
            </p>
            <p
                style={{
                    paddingTop: "3pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                OnClick-Sichqoncha tugmasini komponenta sohasida bir marta chertish;
            </p>
            <p
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "107%",
                    textAlign: "left"
                }}
            >
                OnDbIClick: Sichqoncha tugmasini komponenta sohasida ikki marta chertish
                xodisasi hisoblanadi.
            </p>
            <p
                style={{
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "107%",
                    textAlign: "left"
                }}
            >
                OnMouseEnter-Foydalanuvchi sichqonchani boshqaruv elementiga o'tkazganda
                sodir bo'ladi.
            </p>
            <ol id="l29">
                <li data-list-text="26)">
                    <h1
                        style={{ paddingLeft: "27pt", textIndent: "-20pt", textAlign: "left" }}
                    >
                        TButton komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Standart komponentalar palitrasi, Name, Align, …
                    </p>
                    <p
                        className="s23"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        <span className="h2">Javob : </span>C++ Builder’da{" "}
                        <span style={{ color: "#178038" }}>TButton </span>komponenti,
                        foydalanuvchilarga harakatni boshlash uchun tugma nazoratlarini tanlash
                        imkonini beruvchi bir qator xususiyatlarni taqdim etadi. Agar siz matn
                        o’rniga bitmapni ko’rsatadigan tugmani ishlatmoqchi bo’lsangiz,{" "}
                        <span style={{ color: "#178038" }}>TBitBtn </span>dan foydalanishingiz
                        mumkin.
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        <a
                            href="https://docwiki.embarcadero.com/Libraries/Sydney/en/Vcl.StdCtrls.TButton"
                            className="s25"
                            target="_blank"
                        >
                            Bosilgan holatda qoladigan tugmani ishlatish uchun esa{" "}
                        </a>
                        <a
                            href="https://docwiki.embarcadero.com/Libraries/Sydney/en/Vcl.StdCtrls.TButton"
                            className="s27"
                            target="_blank"
                        >
                            TSpeedButton
                        </a>
                        <a
                            href="https://docwiki.embarcadero.com/Libraries/Sydney/en/Vcl.StdCtrls.TButton"
                            className="s25"
                            target="_blank"
                        >
                            {" "}
                            dan foydalanishingiz mumkin
                        </a>
                    </p>
                    <p
                        className="s24"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        TButton{" "}
                        <span style={{ color: "#000" }}>
                            komponentining ba’zi asosiy xususiyatlari quyidagilardir:
                        </span>
                    </p>
                    <ul id="l30">
                        <li data-list-text="●">
                            <p
                                className="s24"
                                style={{
                                    paddingTop: "12pt",
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Caption
                                <span style={{ color: "#000" }}>
                                    : Tugma ustidagi yozuvni belgilaydi.
                                </span>
                            </p>
                        </li>
                        <li data-list-text="●">
                            <p
                                className="s24"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Enabled
                                <span style={{ color: "#000" }}>
                                    : Tugmani faollashtirish yoki o’chirishni boshqaradi.
                                </span>
                            </p>
                        </li>
                        <li data-list-text="●">
                            <p
                                className="s24"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Visible
                                <span style={{ color: "#000" }}>
                                    : Tugmani ko’rinadigan yoki ko’rinmas qiladi.
                                </span>
                            </p>
                        </li>
                        <li data-list-text="●">
                            <p
                                className="s24"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Height <span style={{ color: "#000" }}>va </span>Width
                                <span style={{ color: "#000" }}>
                                    : Tugmaning balandligi va kengligini belgilaydi.
                                </span>
                            </p>
                        </li>
                        <li data-list-text="●">
                            <p
                                className="s24"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Left <span style={{ color: "#000" }}>va </span>Top
                                <span style={{ color: "#000" }}>
                                    : Tugmaning oynadagi joylashuvini belgilaydi.
                                </span>
                            </p>
                        </li>
                    </ul>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <p
                        className="s23"
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Shuningdek, dasturlash vaqtida{" "}
                        <span style={{ color: "#178038" }}>TButton </span>komponentini yaratish
                        uchun quyidagi kod namunasini ko’rib chiqishingiz mumkin:
                    </p>
                </li>
                <li data-list-text="27)">
                    <h1
                        style={{
                            paddingTop: "11pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TButton <span className="s15">komponentasi hodisalari</span>
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Javob: <span className="p">.</span>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            style={{
                                color: "#111",
                                fontFamily: '"Times New Roman", serif',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "13pt"
                            }}
                            target="_blank"
                        >
                            C++ Builder’da TButton komponenti uchun hodisalar (events)
                            foydalanuvchining interaktiv harakatlariga javob berish uchun
                            ishlatiladi. Masalan, foydalanuvchi tugmani bosganda, OnClick hodisasi
                            ro’y beradi.{" "}
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            className="a"
                            target="_blank"
                        >
                            Boshqa hodisalar{" "}
                        </a>
                        <span className="s28">orasida</span>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            className="s34"
                            target="_blank"
                        >
                            {" "}
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            className="s17"
                            target="_blank"
                        >
                            OnDblClick
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            className="a"
                            target="_blank"
                        >
                            {" "}
                            (ikki marta bosish),{" "}
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            className="s17"
                            target="_blank"
                        >
                            OnMouseDown
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            className="a"
                            target="_blank"
                        >
                            ,{" "}
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            className="s17"
                            target="_blank"
                        >
                            OnMouseUp
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            className="a"
                            target="_blank"
                        >
                            , va{" "}
                        </a>
                        <span
                            style={{
                                color: "#0000ED",
                                fontFamily: '"Times New Roman", serif',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "underline",
                                fontSize: "13pt"
                            }}
                        >
                            OnMouseMove
                        </span>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            style={{
                                color: "#0000ED",
                                fontFamily: '"Times New Roman", serif',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "13pt"
                            }}
                            target="_blank"
                        >
                            {" "}
                        </a>
                        <a
                            href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                            className="a"
                            target="_blank"
                        >
                            (sichqoncha harakatlari) kabi hodisalar ham{" "}
                        </a>
                        <span className="s28">mavjud1</span>
                        <span className="s14">.</span>
                    </h2>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <div
                        className="textbox"
                        style={{
                            background: "#F7F7F7",
                            display: "block",
                            minHeight: "32.2pt",
                            width: "471.2pt"
                        }}
                    >
                        <p
                            className="s10"
                            style={{
                                paddingLeft: "1pt",
                                textIndent: "0pt",
                                lineHeight: "109%",
                                textAlign: "left"
                            }}
                        >
                            Hodisalarni dasturlash vaqtida belgilash uchun, siz tugma
                            yaratilgandan so’ng, uning hodisalarini mos metodlarga bog’lash kerak.
                        </p>
                    </div>
                </li>
            </ol>
            <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }} />
            <p style={{ textIndent: "0pt", textAlign: "left" }} />
            <p
                style={{
                    paddingTop: "10pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                <a
                    href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                    className="s19"
                    target="_blank"
                >
                    ButtonClicked{" "}
                </a>
                <a
                    href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                    className="s31"
                    target="_blank"
                >
                    funksiyasi{" "}
                </a>
                <a
                    href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                    className="s19"
                    target="_blank"
                >
                    OnClick
                </a>
                <span className="s21" style={{ backgroundColor: "#F7F7F7" }}>
                    {" "}
                    hodisasiga bog’lanadi va foydalanuvchi tugmani
                </span>
                <a
                    href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                    className="s34"
                    target="_blank"
                >
                    {" "}
                </a>
                <a
                    href="https://stackoverflow.com/questions/30928393/add-event-to-component-in-the-run-time"
                    className="s20"
                    target="_blank"
                >
                    bosganda bu funksiya chaqiriladi
                </a>
            </p>
            <p
                style={{
                    paddingTop: "10pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                OnClick-Sichqoncha tugmasini komponenta sohasida bir marta chertish;
            </p>
            <p
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                OnDbIClick: Sichqoncha tugmasini komponenta sohasida ikki marta chertish
                xodisasi hisoblanadi.
            </p>
            <p
                style={{
                    paddingTop: "3pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                OnMouseEnter-Foydalanuvchi sichqonchani boshqaruv elementiga o'tkazganda
                sodir bo'ladi.
            </p>
            <ol id="l31">
                <li data-list-text="28)">
                    <h1
                        style={{
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            lineHeight: "16pt",
                            textAlign: "left"
                        }}
                    >
                        TComboBox komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Standart komponentalar palitrasi, Name, Align, …
                    </p>
                    <p style={{ textIndent: "0pt", textAlign: "left" }} />
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        <b>Javob: </b>C++ Builder’da{" "}
                        <a
                            href="https://docwiki.embarcadero.com/Libraries/Sydney/en/Vcl.StdCtrls.TComboBox_Properties"
                            style={{
                                color: "#178038",
                                fontFamily: '"Times New Roman", serif',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "13pt"
                            }}
                            target="_blank"
                        >
                            TComboBox
                        </a>
                        <span className="s28">
                            {" "}
                            komponenti, foydalanuvchilarga ro’yxatdan bir
                        </span>
                        <a
                            href="https://docwiki.embarcadero.com/Libraries/Sydney/en/Vcl.StdCtrls.TComboBox_Properties"
                            className="s34"
                            target="_blank"
                        >
                            {" "}
                        </a>
                        <span className="s28">
                            elementni tanlash yoki to’g’ridan-to’g’ri matn kiritish imkonini
                            beruvchi tahrirlash
                        </span>
                        <a
                            href="https://docwiki.embarcadero.com/Libraries/Sydney/en/Vcl.StdCtrls.TComboBox_Properties"
                            className="s34"
                            target="_blank"
                        >
                            {" "}
                        </a>
                        <a
                            href="https://docwiki.embarcadero.com/Libraries/Sydney/en/Vcl.StdCtrls.TComboBox_Properties"
                            className="a"
                            target="_blank"
                        >
                            maydoni bilan birga keladigan aylanma ro’yxatni o’z ichiga oladi
                        </a>
                        <span
                            style={{
                                color: "#0000ED",
                                fontFamily: '"Times New Roman", serif',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "underline",
                                fontSize: "13pt"
                            }}
                        >
                            TComboBox
                        </span>
                        <a
                            href="https://docwiki.embarcadero.com/Libraries/Sydney/en/Vcl.StdCtrls.TComboBox_Properties"
                            style={{
                                color: "#0000ED",
                                fontFamily: '"Times New Roman", serif',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "13pt"
                            }}
                            target="_blank"
                        >
                            {" "}
                        </a>
                        <a
                            href="https://docwiki.embarcadero.com/Libraries/Sydney/en/Vcl.StdCtrls.TComboBox_Properties"
                            className="s34"
                            target="_blank"
                        >
                            komponentining asosiy xususiyatlari quyidagilardir
                        </a>
                        <span
                            style={{
                                color: "#1154CC",
                                fontFamily: '"Times New Roman", serif',
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "8.5pt",
                                verticalAlign: "4pt"
                            }}
                        >
                            1
                        </span>
                        :
                    </p>
                    <ul id="l32">
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingTop: "10pt",
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Action
                                <span className="p">
                                    : Komponent bilan bog’liq harakatni belgilaydi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingTop: "2pt",
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Align
                                <span className="p">
                                    : Komponentning ota-konteyner ichidagi joylashuvini aniqlaydi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingTop: "2pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    lineHeight: "113%",
                                    textAlign: "left"
                                }}
                            >
                                Anchors
                                <span className="p">
                                    : Komponentning ota-konteynerga qanday qilib bog’langanligini
                                    belgilaydi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    lineHeight: "114%",
                                    textAlign: "left"
                                }}
                            >
                                AutoComplete
                                <span className="p">
                                    : Foydalanuvchi matn kirita boshlaganda, mos keladigan ro’yxat
                                    elementlariga avtomatik ravishda o’tishni amalga oshiradi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    lineHeight: "114%",
                                    textAlign: "left"
                                }}
                            >
                                AutoDropDown
                                <span className="p">
                                    : Foydalanuvchi klaviatura orqali kirita boshlaganda, ro’yxat
                                    avtomatik ravishda ochilishini belgilaydi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    lineHeight: "114%",
                                    textAlign: "left"
                                }}
                            >
                                CharCase
                                <span className="p">
                                    : Tahrirlash maydonidagi matnning katta yoki kichik harflar bilan
                                    yozilishini belgilaydi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Color
                                <span className="p">: Komponentning fon rangini belgilaydi.</span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingTop: "2pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    lineHeight: "113%",
                                    textAlign: "left"
                                }}
                            >
                                DropDownCount
                                <span className="p">
                                    : Ro’yxat ochilganda ko’rsatiladigan maksimal elementlar sonini
                                    belgilaydi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Font<span className="p">: Matnning shriftini belgilaydi.</span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingTop: "2pt",
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                ItemHeight
                                <span className="p">
                                    : Ro’yxatdagi har bir elementning balandligini belgilaydi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingTop: "2pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    lineHeight: "113%",
                                    textAlign: "left"
                                }}
                            >
                                Name:{" "}
                                <span className="p">
                                    komponentaning nomini belgilaydi. Nom dastur kodida komponentaga
                                    murojaat qilish uchun ishlatiladi
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    lineHeight: "114%",
                                    textAlign: "left"
                                }}
                            >
                                MaxLength
                                <span className="p">
                                    : Tahrirlash maydoniga kiritiladigan maksimal belgilar sonini
                                    cheklaydi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    textAlign: "left"
                                }}
                            >
                                Sorted
                                <span className="p">
                                    : Ro’yxatdagi elementlarning avtomatik ravishda saralanishini
                                    belgilaydi.
                                </span>
                            </h2>
                        </li>
                        <li data-list-text="●">
                            <p
                                style={{
                                    paddingTop: "2pt",
                                    paddingLeft: "43pt",
                                    textIndent: "-18pt",
                                    lineHeight: "115%",
                                    textAlign: "left"
                                }}
                            >
                                <b>Style</b>: <span style={{ color: "#178038" }}>TComboBox</span>
                                ning ko’rinishini belgilaydi, masalan{" "}
                                <span style={{ color: "#178038" }}>csDropDown</span>,{" "}
                                <span style={{ color: "#178038" }}>csSimple</span>,{" "}
                                <span style={{ color: "#178038" }}>csDropDownList</span>, va
                                boshqalar.
                            </p>
                        </li>
                        <li data-list-text="●">
                            <h2
                                style={{
                                    paddingLeft: "42pt",
                                    textIndent: "-17pt",
                                    lineHeight: "15pt",
                                    textAlign: "left"
                                }}
                            >
                                Text
                                <span className="p">
                                    : Tahrirlash maydonidagi matnni o’z ichiga oladi.
                                </span>
                            </h2>
                        </li>
                    </ul>
                    <p
                        className="s33"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        TComboBox{" "}
                        <span style={{ color: "#000" }}>
                            komponenti bilan ishlashda, siz ushbu xususiyatlarni Object Inspector
                            yordamida sozlash yoki dastur kodida to’g’ridan-to’g’ri o’zgartirish
                            mumkin.
                        </span>
                    </p>
                </li>
                <li data-list-text="29)">
                    <h1
                        style={{
                            paddingTop: "11pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TComboBox komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TComboBox komponentasi C++ dasturlash muhiti da qo'llaniladigan
                            komponentlardan biri bo'lib, foydalanuvchiga ochiluvchi ro'yxat
                            ichidan biror bir elementni tanlash imkonini beradi. Ushbu komponentda
                            turli hodisalar (events) mavjud bo'lib, ular yordamida dasturiy
                            ta'minotni boshqarish mumkin. Quyida onClick, onDblClick va
                            onMouseEnter hodisalari haqida batafsil ma'lumot berilgan. onClick
                            Hodisasi onClick hodisasi foydalanuvchi TComboBox komponentasida
                            sichqoncha tugmasini bir marta bosganda ishga tushadi. Bu hodisani
                            ishlatib, tanlangan elementni qayta ishlash yoki boshqa biror amalni
                            bajarish mumkin.
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "justify"
                        }}
                    >
                        TForm1.ComboBox1Click(Sender: TObject);
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        begin ShowMessage('ComboBox clicked. Selected item: ' + ComboBox1.Text);
                        end; Yuqoridagi misolda, TComboBox komponentasida biror element
                        tanlanganda yoki sichqoncha tugmasi bosilganda, tanlangan elementning
                        matni ko'rsatiladi. onDblClick Hodisasi onDblClick hodisasi
                        foydalanuvchi TComboBox komponentasida sichqonchani ikki marta bosganda
                        ishga tushadi. Bu hodisa ko'pincha ikki marta bosish orqali qo'shimcha
                        funksionallikni amalga oshirish uchun ishlatiladi.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        TForm1.ComboBox1DblClick(Sender: TObject);
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "3pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        begin ShowMessage('ComboBox double-clicked. Selected item: ' +
                        ComboBox1.Text); end;
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "3pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Yuqoridagi misolda, foydalanuvchi TComboBox komponentasida ikki marta
                        bosganda, tanlangan elementning matni ko'rsatiladi. onMouseEnter
                        Hodisasi onMouseEnter hodisasi foydalanuvchi sichqoncha kursorini
                        TComboBox komponentasi ustiga olib kelganda ishga tushadi. Bu hodisa
                        ko'pincha interfeys elementlari bilan foydalanuvchi o'zaro aloqasini
                        yaxshilash uchun ishlatiladi, masalan, yordamchi ma'lumotni ko'rsatish
                        yoki komponentani ta'kidlash uchun.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        TForm1.ComboBox1MouseEnter(Sender: TObject); begin ComboBox1.Color :=
                        clYellow;
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Yuqoridagi misolda, foydalanuvchi sichqoncha kursorini TComboBox
                        komponentasi ustiga olib kelganda, komponentaning fon rangi sariq rangga
                        o'zgaradi. Ushbu hodisalar (onClick, onDblClick, onMouseEnter) TComboBox
                        komponentasini yanada interaktiv va foydalanuvchi bilan do'stona qilish
                        uchun ishlatiladi. Ularning har biri turli holatlarda komponent bilan
                        o'zaro aloqani boshqarish imkoniyatini beradi
                    </p>
                </li>
                <li data-list-text="30)">
                    <h1
                        style={{
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            lineHeight: "16pt",
                            textAlign: "justify"
                        }}
                    >
                        TLabel komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: Standart komponentalar palitrasi, Name, Align, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TLabel komponentasi c++ builder dasturlash muhitida keng
                            qo'llaniladigan vizual komponentlardan biridir. TLabel komponentasi
                            foydalanuvchiga matnni ko'rsatish uchun ishlatiladi. U boshqa
                            komponentalardan farqli o'laroq, foydalanuvchi bilan
                            to'g'ridan-to'g'ri interaktiv aloqaga kirishmaydi, ya'ni TLabel
                            komponentasi foydalanuvchidan kiritishlarni qabul qilmaydi. Quyida
                            TLabel komponentasining asosiy xususiyatlari keltirilgan: Standart
                            komponentalar palitrasi TLabel komponentasi c++ builder dasturlash
                            muhitining
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        "Standard" (Standart) palitrasida joylashgan. Uni formaga qo'shish uchun
                        uni palitradan tanlab, forma ustiga joylashtirish kifoya. TLabel
                        komponentasining xususiyatlari Name(Ismi): Komponentaning dastur
                        ichidagi nomi. Bu nom orqali kodda komponentaga murojaat qilish mumkin.
                        Align (Joylashish):Komponentaning o'ziga tegishli konteyner (masalan,
                        forma yoki panel) ichida joylashishini belgilaydi. Qiymatlar: alNone,
                        alTop, alBottom, alLeft, alRight, alClient. Caption (Matn): Labelda
                        ko'rsatiladigan matn. Alignment (Matn hizalanishi): Label ichidagi
                        matnning gorizontal hizalanishini belgilaydi. Qiymatlar: taLeftJustify,
                        taRightJustify, taCenter . AutoSize (Avtomatik o'lcham): Agar True ga
                        o'rnatilsa, label o'zidagi matnga mos ravishda avtomatik o'lcham oladi.
                        ○ Misol: Label1.AutoSize := True;. Visible (Ko'rinishi): Labelning
                        ko'rinadigan yoki ko'rinmaydigan holatini belgilaydi. Misol:
                        Label1.Visible := False; . WordWrap (So'zlarni o'rash): Agar True ga
                        o'rnatilsa, label matni belgilanadigan kenglik bo'yicha yangi qatorlarga
                        o'tib o'raladi. TLabel komponentasi o'zining soddaligi va foydalanish
                        qulayligi bilan c++ builder dasturlarida keng qo'llaniladi. U matnlarni
                        ko'rsatish va foydalanuvchiga bildirishlar berish uchun ideal komponent
                        hisoblanadi
                    </p>
                </li>
                <li data-list-text="31)">
                    <h1
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "29pt",
                            textIndent: "-22pt",
                            textAlign: "justify"
                        }}
                    >
                        TLabel komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            C++ Builder dasturlash muhitida TLabel komponentasi turli hodisalarga
                            (events) ega. Bu hodisalar TLabel bilan sodir bo'lgan turli interaktiv
                            voqealarni qo'lga olish uchun ishlatiladi. Quyida TLabel komponentasi
                            uchun asosiy hodisalar va ularning ma'lumotlari keltirilgan:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "justify"
                        }}
                    >
                        onClick: Bu hodisa TLabel bosilganda sodir bo'ladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "10pt",
                            textIndent: "-3pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::Label1Click(TObject *Sender) {"{"}{" "}
                        ShowMessage("TLabel bosildi"); {"}"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        onDblClick: Bu hodisa TLabel ikki marta bosilganda sodir bo'ladi. void{" "}
                        <u>&nbsp; </u>fastcall TForm1::Label1DblClick(TObject *Sender) {"{"}{" "}
                        ShowMessage("TLabel ikki marta bosildi"); {"}"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "10pt",
                            textIndent: "-3pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        onMouseEnter: Bu hodisa sichqoncha TLabel ustiga kirganda sodir bo'ladi.
                        void <u>&nbsp; </u>fastcall TForm1::Label1MouseEnter(TObject *Sender){" "}
                        {"{"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        Label1-&gt;Font-&gt;Color = clRed; {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "10pt",
                            textIndent: "-3pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        onMouseLeave: Bu hodisa sichqoncha TLabel ustidan chiqib ketganda sodir
                        bo'ladi. void <u>&nbsp; </u>fastcall TForm1::Label1MouseLeave(TObject
                        *Sender) {"{"}
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        Label1-&gt;Font-&gt;Color = clBlack; {"}"}
                    </p>
                </li>
                <li data-list-text="32)">
                    <h1
                        style={{ paddingLeft: "27pt", textIndent: "-20pt", textAlign: "left" }}
                    >
                        TStringGrid komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            C++ Builder-da TStringGrid komponentasi turli xil xususiyatlarga ega
                            bo'lib, ularni foydalanish qulayligini oshirish va interfeysning
                            samaradorligini ta'minlash uchun ishlatish mumkin. Quyida asosiy
                            xususiyatlar:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Name: Komponentning nomi. Komponentga kod bilan qilish uchun
                        ishlatiladi. Masalan, agar TStringGrid nomi "StringGrid1" bo'lsa, unga
                        murojaat qilish uchun
                    </p>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "149%",
                            textAlign: "left"
                        }}
                    >
                        StringGrid1-&gt;Cells[Col][Row] dan foydalaniladi. Misol:
                        StringGrid1-&gt;Name = "MyStringGrid";
                    </p>
                    <ol id="l33">
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                Align: Komponentning joylashishini belgilaydi. Qiymatlar: alNone,
                                alTop, alBottom, alLeft, alRight, alClient, alCustom. Foydalanish:
                                Komponentni forma yoki panelning ma'lum bir qismiga joylashtirish
                                uchun ishlatiladi.
                            </p>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "10pt",
                                    textIndent: "0pt",
                                    textAlign: "justify"
                                }}
                            >
                                Misol: StringGrid1-&gt;Align = alClient;
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "justify"
                                }}
                            >
                                Tag: Ixtiyoriy butun son qiymatni saqlash uchun ishlatiladigan
                                xususiyat. Foydalanish: Qo'shimcha ma'lumotni saqlash yoki
                                identifikator sifatida ishlatiladi.
                            </p>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    textAlign: "justify"
                                }}
                            >
                                Misol: StringGrid1-&gt;Tag = 1;
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                Cursor: Sichqoncha ko'rsatkichi komponent ustida turganda qanday
                                ko'rinishini belgilaydi. Qiymatlar: crDefault, crArrow, crCross,
                                crIBeam, crSize, crSizeNESW, crSizeNS, crSizeNWSE, crSizeWE,
                                crUpArrow, crHourGlass, crDrag, crNoDrop, crHSplit, crVSplit,
                                crMultiDrag, crSQLWait, crNo, crAppStart, crHelp, crHandPoint,
                                crSizeAll. Foydalanish: Komponent ustida sichqoncha ko'rsatkichi
                                qanday bo'lishini boshqarish uchun ishlatiladi.
                            </p>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "10pt",
                                    textIndent: "0pt",
                                    textAlign: "justify"
                                }}
                            >
                                Misol: StringGrid1-&gt;Cursor = crHandPoint;
                            </p>
                        </li>
                        <li data-list-text={5}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "10pt",
                                    textIndent: "-3pt",
                                    lineHeight: "148%",
                                    textAlign: "left"
                                }}
                            >
                                Hint: ○ Tavsifi: Komponent ustida sichqoncha turganda ko'rinadigan
                                matn. Foydalanish: Komponent haqida qo'shimcha ma'lumot berish uchun
                                ishlatiladi. Misol: StringGrid1-&gt;Hint = "This is a string grid";
                            </p>
                        </li>
                        <li data-list-text={6}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                ShowHint: Hint xususiyati ishlatilishini belgilaydi. Qiymatlar: true
                                yoki false. Foydalanish: Agar true bo'lsa, Hint xususiyatida
                                belgilangan matn ko'rsatiladi.
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "10pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Misol: StringGrid1-&gt;ShowHint = true;
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Bu xususiyatlar TStringGrid komponentasini sozlashda va uning
                        foydalanuvchi interfeysida qanday ko'rinishini hamda funksionalligini
                        oshirishda juda foydali bo'ladi
                    </p>
                </li>
                <li data-list-text="33)">
                    <p
                        className="s36"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TStringGrid komponentasi hodisalari
                    </p>
                    <p
                        className="s37"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <p
                        className="s38"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="s39">
                            C++ Builderda TStringGrid komponentasi jadval ko'rinishida
                            ma'lumotlarni ko'rsatish va tahrirlash uchun ishlatiladi. Bu
                            komponentning ko'plab hodisalari (events) mavjud bo'lib, ular
                            foydalanuvchi bilan o'zaro aloqalarni boshqarishga yordam beradi.
                            Quyida TStringGrid komponentasining asosiy hodisalari
                            keltirilgan:TStringGrid
                        </span>
                    </p>
                    <p
                        className="s39"
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        komponentasining asosiy hodisalariOnClick:Foydalanuvchi jadvalda biror
                        bir hujayrani bosganda ishlatiladi.
                    </p>
                    <p
                        className="s39"
                        style={{
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        Misol:void <u>&nbsp; </u>fastcall TForm1::StringGrid1Click(TObject
                        *Sender){"{"} ShowMessage("Grid clicked!"); {"}"}
                    </p>
                    <p
                        className="s39"
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        OnDblClick:Foydalanuvchi jadvalda biror bir hujayrani ikki marta
                        bosganda ishlatiladi. Misol:void <u>&nbsp; </u>fastcall
                        TForm1::StringGrid1DblClick(TObject *Sender){"{"}
                    </p>
                    <p
                        className="s39"
                        style={{
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "justify"
                        }}
                    >
                        ShowMessage("Grid double-clicked!"); {"}"}
                    </p>
                    <p
                        className="s39"
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        OnMouseEnter:Sichqoncha kursorining jadval ustiga kirganda ishlatiladi.
                        Misol:void <u>&nbsp; </u>fastcall TForm1::StringGrid1MouseEnter(TObject
                        *Sender){"{"}
                    </p>
                    <p
                        className="s39"
                        style={{ paddingLeft: "20pt", textIndent: "0pt", textAlign: "justify" }}
                    >
                        ShowMessage("Mouse entered grid!"); {"}"}
                    </p>
                    <p
                        className="s39"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        OnMouseLeave:Sichqoncha kursorining jadvaldan chiqib ketganda
                        ishlatiladi<span className="s41">.</span>
                    </p>
                </li>
                <li data-list-text="34)">
                    <p
                        className="s42"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TBitBtn komponentasi xususiyatlari
                    </p>
                    <p
                        className="s43"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint…
                    </p>
                    <p
                        className="s44"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="s45">
                            C++ Builderda TBitBtn komponentasi oddiy tugmalardan (TButton) farqli
                            o'laroq, tugma ustida rasm (bitmap) va matnni birga ko'rsatishga imkon
                            beradi. Bu komponent "Standard" palitrasida joylashgan. TBitBtn
                            komponentasining asosiy xususiyatlari
                        </span>
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Name:Komponentning identifikatori bo'lib, kod yozishda murojaat qilish
                        uchun ishlatiladi.
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        Align:Komponentning formaga yoki boshqa konteynerlarga nisbatan
                        joylashishini aniqlaydi.Qiymatlar: alNone, alTop, alBottom, alLeft,
                        alRight, alClient, va hokazo.
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Misol: BitBtn1-&gt;Align = alClient;
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Tag:Foydalanuvchi tomonidan foydalanish uchun mo'ljallangan butun son
                        qiymat bo'lib, qo'shimcha ma'lumot saqlash uchun ishlatiladi.Misol:
                        BitBtn1-&gt;Tag = 1;
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Cursor:Sichqoncha kursorining ko'rinishini aniqlaydi.Qiymatlar:
                        crDefault, crArrow, crCross, crHandPoint, va boshqalar.
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Misol: BitBtn1-&gt;Cursor = crHandPoint;Hint:Foydalanuvchi tugma ustida
                        sichqonchani ushlab turganda ko'rsatiladigan matn.
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Misol: BitBtn1-&gt;Hint = "Click this button";
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        ShowHint:Tugmani ustiga sichqonchani olib borganda hint matnini
                        ko'rsatishni belgilaydi.Qiymatlar: true yoki false.
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Misol: BitBtn1-&gt;ShowHint = true;
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        TBitBtn komponentasi matn va rasmni birga ko'rsatadigan tugmalar
                        yaratishga imkon beradi. Bu komponentning asosiy xususiyatlari va
                        hodisalari foydalanuvchi interfeysini yaratishda katta
                        moslashuvchanlikni ta'minlaydi. Bu komponent "Standard" palitrasida
                        joylashgan va uni ishlatish oson.
                    </p>
                </li>
                <li data-list-text="35)">
                    <p
                        className="s42"
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TBitBtn komponentasi hodisalari
                    </p>
                    <p
                        className="s43"
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <p
                        className="s44"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="s45">
                            C++ Builderda TBitBtn komponentasi hodisalari foydalanuvchi bilan
                            o'zaro aloqalarni boshqarishga yordam beradi. Quyida TBitBtn
                            komponentasining asosiy hodisalari keltirilgan:TBitBtn
                            komponentasining asosiy hodisalariOnClick:Foydalanuvchi tugmani
                            bosganda ishlatiladi.
                        </span>
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        Misol:void <u>&nbsp; </u>fastcall TForm1::BitBtn1Click(TObject *Sender)
                        {"{"} ShowMessage("BitBtn clicked!"); {"}"}
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        OnDblClick:Foydalanuvchi tugmani ikki marta bosganda ishlatiladi.
                        Misol:void <u>&nbsp; </u>fastcall TForm1::BitBtn1DblClick(TObject
                        *Sender){"{"}
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "13pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        ShowMessage("BitBtn double-clicked!"); {"}"} OnMouseEnter:Sichqoncha
                        kursorining tugma ustiga kirganda ishlatiladi. Misol:void <u>&nbsp; </u>
                        fastcall TForm1::BitBtn1MouseEnter(TObject *Sender){"{"}
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        ShowMessage("Mouse entered BitBtn!"); {"}"}
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        OnMouseLeave:Sichqoncha kursorining tugmadan chiqib ketganda
                        ishlatiladi. Misol:void <u>&nbsp; </u>fastcall
                        TForm1::BitBtn1MouseLeave(TObject *Sender){"{"}
                    </p>
                    <p
                        className="s45"
                        style={{ paddingLeft: "20pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        ShowMessage("Mouse left BitBtn!"); {"}"}
                    </p>
                </li>
                <li data-list-text="36)">
                    <p
                        className="s42"
                        style={{ paddingLeft: "27pt", textIndent: "-20pt", textAlign: "left" }}
                    >
                        TMemo komponentasi xususiyatlari
                    </p>
                    <p
                        className="s43"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Standart komponentalar palitrasi, Name, Align, …
                    </p>
                    <p
                        className="s44"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="s45">
                            C++ Builderda TMemo komponentasi ko'p qatorli matnlarni kiritish va
                            tahrirlash uchun ishlatiladi. Bu komponent "Standard" komponentalar
                            palitrasida joylashgan.TMemo komponentasining asosiy xususiyatlari
                        </span>
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        Name:Komponentning identifikatori bo'lib, kodda unga murojaat qilish
                        uchun ishlatiladi.Masalan: Memo1.
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Align:Komponentning formaga yoki boshqa konteynerlarga nisbatan
                        joylashishini aniqlaydi.Qiymatlar: alNone, alTop, alBottom, alLeft,
                        alRight, alClient, va hokazo.Misol: Memo1-&gt;Align = alClient;
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        Tag:Foydalanuvchi tomonidan foydalanish uchun mo'ljallangan butun son
                        qiymat bo'lib, qo'shimcha ma'lumot saqlash uchun ishlatiladi.
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Misol: Memo1-&gt;Tag = 1;
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        "Standard" komponentalar palitrasi asosiy va keng tarqalgan
                        foydalaniladigan komponentalarni o'z ichiga oladi. Bu komponentalar
                        dasturiy interfeyslarni yaratishda ishlatiladi. Quyida "Standard"
                        komponentalar palitrasidagi asosiy komponentalar keltirilgan.
                    </p>
                    <p
                        className="s45"
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        TMemo komponentasi ko'p qatorli matnlarni kiritish va tahrirlash uchun
                        juda qulay vositadir. Uning asosiy xususiyatlari foydalanuvchi
                        interfeysini yaratishda katta moslashuvchanlikni ta'minlaydi. Bu
                        komponent "Standard" palitrasida joylashgan va uni ishlatish oson.
                    </p>
                </li>
                <li data-list-text="37)">
                    <h1
                        style={{
                            paddingTop: "2pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TMemo komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TMemo komponentasi sodda matn yozish va tahrirlash uchun ishlatiladi.
                            Unda, qisqa matnlar, qo'shimcha ma'lumotlar, izohlar va boshqa matnlar
                            kiritish mumkin. Endi, TMemo komponentasi uchun hodisalarning to'liq
                            tavsifini taqdim etaman:
                        </span>
                    </h2>
                    <ol id="l34">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                onClick: Bu hodisa, foydalanuvchi TMemo maydonini bosinganda sodda
                                urinishni boshqaradi. Masalan, siz bosingizda matn yozilganlikda uni
                                belgilab ko'rsatish yoki foydalanuvchiga boshqa amalni bajarish
                                mumkin.
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                onDblClick: Agar foydalanuvchi TMemo maydoniga ikki marta bosgan
                                bo'lsa, ushbu hodisa amalga oshiriladi. Bu hodisa, foydalanuvchining
                                matnni boshqa matn bilan almashtirish, o'chirish yoki boshqa
                                harakatlar uchun ishlatilishi mumkin.
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                onMouseEnter: Foydalanuvchi TMemo maydoniga o'rinni kiritganda,
                                ushbu hodisa amalga oshiriladi. Bu hodisa, foydalanuvchining TMemo
                                maydoniga kirishini aniqlash uchun qulaydir.
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Bu hodisalar, TMemo komponentasi bilan interaktiv ishlashda yordam
                        beradi va foydalanuvchilarga to'g'ri yo'l ko'rsatishda foydalaniladi.
                        Umuman olganda, TMemo komponentasi matnli ma'lumotlarni ko'rsatish va
                        tahrirlash uchun keng foydalaniladi. Ushbu hodisalar yordamida
                        foydalanuvchilarga yaxshi tajriba berish imkoniyati beriladi.
                    </p>
                </li>
                <li data-list-text="38)">
                    <h1
                        style={{
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            lineHeight: "16pt",
                            textAlign: "justify"
                        }}
                    >
                        TListBox komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: Standart komponentalar palitrasi, Name, Align, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob
                        <span className="p">
                            : TListBox komponentasi, matn yoki obyektlar ro'yxatini ko'rsatish
                            uchun foydalaniladi. Ushbu komponent, ro'yxatni o'rnatish, tahrirlash,
                            korsatish va boshqa operatsiyalarni bajarish imkonini beradi. Endi,
                            TListBox komponentasi uchun muhim xususiyatlarni ta'riflashim mumkin:
                        </span>
                    </h2>
                    <ol id="l35">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingTop: "6pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                Standart komponentalar palitrasi: TListBox komponentasi standart
                                komponentalar palitrasiga ega bo'lib, uni o'zgartirish mumkin. Bu
                                qurilish, komponentning ko'rinishini, shu jumladan fon rangi,
                                yengiligi va bezashini belgilaydi.
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "justify"
                                }}
                            >
                                Name: Komponentning nomi, uning dastlabki identifikatori bo'ladi. Bu
                                nom orqali komponentga dastur ichidan yoki koddan murojaat qilish
                                mumkin.
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                Align: Komponentning oynadagi joylashuvi va ko'rsatkichi, masalan,
                                yuqori, pastki yoki markazlashgan joylashuvi. Bu xususiyat,
                                komponentni oynada joylashuvni belgilashda yordam beradi.
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        TListBox komponentasi, ko'rsatiladigan ma'lumotlar ro'yxatini o'z ichiga
                        oladi va foydalanuvchiga ro'yxat elementlarini ko'rsatish va ularga
                        murojaat qilish imkonini beradi. Bu xususiyatlar, foydalanuvchiga
                        ro'yxatni boshqarishda va ma'lumotlar bilan ishlashda yordam beradi.
                    </p>
                </li>
                <li data-list-text="39)">
                    <h1
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TListBox komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TListBox komponentasi uchun hodisalarni batafsil ta'riflashaman:
                        </span>
                    </h2>
                    <ol id="l36">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                onClick: Bu hodisa, foydalanuvchi TListBox komponentidagi biror
                                elementni bosinganda sodda urinish hodisasi amalga oshiriladi. Misol
                                uchun, foydalanuvchi biror elementni tanlab olish uchun bosinganda
                                yoki komponentga qatnashishga qaror qilgan bo'lsa, ushbu hodisa
                                ishga tushiriladi.
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                onDblClick: Agar foydalanuvchi TListBox komponentidagi biror
                                elementni ikki marta bosgan bo'lsa, ushbu hodisa amalga oshiriladi.
                                Bu hodisa, foydalanuvchiga elementni tanlab olish yoki qo'shimcha
                                harakatlarni bajarish imkoniyatini beradi.
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                onMouseEnter: Foydalanuvchi TListBox komponentining elementiga
                                o'rinni kiritganda, ushbu hodisa amalga oshiriladi. Bu hodisa,
                                foydalanuvchining qo'shimcha ma'lumot olishi uchun foydalaniladi.
                                Masalan, elementga o'rin kiritganda uni ko'rsatish yoki qo'shimcha
                                ma'lumotlarni chiqarish.
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                onMouseLeave: Foydalanuvchi TListBox komponentining elementidan
                                chiqib ketganda, ushbu hodisa ishga tushiriladi. Bu hodisa,
                                foydalanuvchining elementdan chiqishini aniqlash uchun qulaydir.
                                Masalan, elementdan chiqib ketganda qo'shimcha ma'lumotlarni
                                yashirish uchun foydalaniladi.
                            </p>
                        </li>
                        <li data-list-text={5}>
                            <p
                                style={{
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                onKeyPress: Foydalanuvchining klaviaturani bosingizda, ushbu hodisa
                                ishga tushadi. Bu hodisa, qo'shimcha klaviatura hodisalarni
                                aniqlashda foydalaniladi, masalan, ma'lumotni qidirish yoki
                                ro'yxatni tepasiga chiqishni boshlash.
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Ushbu hodisalar, foydalanuvchilarga TListBox komponentasini
                        foydalanishida yordam beradi va interaktivlikni oshirishda katta
                        ahamiyatga ega. Hodisalar yordamida, foydalanuvchilarga ma'lumotlarni
                        tanlash, olish va ularga amal qilish imkoniyatini berish mumkin
                    </p>
                </li>
                <li data-list-text="40)">
                    <h1
                        style={{
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            lineHeight: "16pt",
                            textAlign: "justify"
                        }}
                    >
                        ADOTable komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "36pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: Active, TableName, Connection, MasterSource, Filter,
                        LookUpField, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            ADOTable komponentasi, Delphi dasturlash tilida ma'lumotlar bazasidagi
                            ma'lumotlarni olish va uni ko'rsatish uchun ishlatiladi. Bu komponent
                            ma'lumotlar bazasidagi bir jadvalni ko'rsatadi va foydalanuvchiga
                            yozish, o'qish, o'chirish va ma'lumotlarga murojaat qilish imkonini
                            beradi. Endi, ADOTable komponentasi uchun bir nechta muhim
                            xususiyatlarni ta'riflashim mumkin:
                        </span>
                    </h2>
                    <ol id="l37">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingTop: "6pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                Active: Bu xususiyat, ma'lumotlar bazasiga murojaatni amalga
                                oshirish uchun kerakli komponentning faolligi holatini belgilaydi.
                                Agar Active xususiyati true bo'lsa, komponent ma'lumotlar bazasiga
                                murojaatni bajarishi mumkin.
                            </p>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "109%",
                                    textAlign: "justify"
                                }}
                            >
                                TableName: Ma'lumotlar bazasidagi ma'lumotlar jadvalidagi
                                ma'lumotlar bilan ishlash uchun belgilangan jadval nomini
                                ko'rsatadi. Bu nom, odatda, ma'lumotlar bazasidagi jadvallar
                                ro'yxatidan tanlanadi.
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                Connection: Ma'lumotlar bazasiga bog'lanish uchun kerakli aloqani
                                belgilovchi komponent. Bu aloqa, ma'lumotlar bazasiga bog'lanish
                                ma'lumotlari, masalan, bazaga bog'lanish uchun fayl nomi yoki aloqa
                                parametrlari bilan to'ldiriladi.
                            </p>
                        </li>
                        <li data-list-text={4}>
                            <p
                                style={{
                                    paddingTop: "6pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                MasterSource: Agar boshqa komponentdan (masalan, DataSource)
                                ma'lumotlar olinayotgan bo'lsa, bu xususiyat qo'shuvchi
                                ma'lumotlarni olish uchun manba komponentni belgilaydi.
                            </p>
                        </li>
                        <li data-list-text={5}>
                            <p
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                Filter: Ma'lumotlar bazasidan olingan ma'lumotlarning filtrini
                                belgilash uchun foydalaniladi. Filtrlar, ma'lumotlar bazasidagi
                                qatorlarni tanlash uchun shartlarni belgilashda qo'llaniladi.
                            </p>
                        </li>
                        <li data-list-text={6}>
                            <p
                                style={{
                                    paddingTop: "6pt",
                                    paddingLeft: "7pt",
                                    textIndent: "0pt",
                                    lineHeight: "108%",
                                    textAlign: "justify"
                                }}
                            >
                                LookUpField: Qidirish maydonlarini qo'llab-quvvatlovchi komponent.
                                Bu xususiyat, boshqa ma'lumotlar bazasidagi qidirish maydonlarini
                                aniqlash va ularga murojaat qilishda yordam beradi.
                            </p>
                        </li>
                    </ol>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        Bu xususiyatlar, ADOTable komponentasining asosiy funksiyalarini
                        bajarishda va ma'lumotlarni olish, saqlash va uni ko'rsatishda yordam
                        berishda juda muhimdir<b>.</b>
                    </p>
                </li>
                <li data-list-text="41)">
                    <h1
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        ADOTable komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: AfterCancel, AfterClose, AfterDelete, AfterOpen, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Jahob:{" "}
                        <span className="p">
                            C++ Builder'da TADOTable komponenti ADO (ActiveX Data Objects)
                            texnologiyasi orqali ma'lumotlar bazasi bilan aloqada bo'lib, jadvalga
                            to'g'ridan to'g'ri ulanishni ta'minlaydi. Bu komponent ma'lumotlar
                            bazasi jadvallarini o'qish, yozish, yangilash va o'chirish imkonini
                            beradi. Quyida TADOTable komponentasining asosiy hodisalari haqida
                            to'liq ma'lumot keltirilgan:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "3pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        AfterCancel AfterCancel hodisasi Cancel metodi chaqirilgandan keyin yuz
                        beradi. Type: TDataSetNotifyEvent Description: Bu hodisa Cancel metodi
                        chaqirilgandan keyin amalga oshiriladi va foydalanuvchi bekor qilingan
                        operatsiyalarni qayta ishlash uchun foydalanadi.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "3pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::ADOTable1AfterCancel(TDataSet
                        *DataSet) {"{"} ShowMessage("Operation cancelled."); {"}"}.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        AfterClose AfterClose hodisasi jadval yopilgandan keyin yuz beradi.
                        Type: TDataSetNotifyEvent Description: Bu hodisa jadval yopilgandan
                        so'ng amalga oshiriladi va foydalanuvchi jadvallar yopilganda amalga
                        oshirilishi kerak bo'lgan operatsiyalarni bajarishi mumkin.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::ADOTable1AfterClose(TDataSet
                        *DataSet) {"{"} ShowMessage("Table closed."); {"}"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "3pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        AfterDelete AfterDelete hodisasi jadvaldan yozuv o'chirilgandan keyin
                        yuz beradi. Type: TDataSetNotifyEvent Description: Bu hodisa yozuv
                        o'chirilgandan keyin amalga oshiriladi va foydalanuvchi o'chirish
                        operatsiyalarini qayta ishlash uchun foydalanadi.
                    </p>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "3pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::ADOTable1AfterDelete(TDataSet
                        *DataSet) {"{"} ShowMessage("Record deleted."); {"}"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        AfterOpen AfterOpen hodisasi jadval ochilgandan keyin yuz beradi. Type:
                        TDataSetNotifyEvent Description: Bu hodisa jadval ochilgandan keyin
                        amalga oshiriladi va foydalanuvchi jadvallar ochilganda amalga
                        oshirilishi kerak bo'lgan operatsiyalarni bajarishi mumkin.
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::ADOTable1AfterOpen(TDataSet
                        *DataSet) {"{"} ShowMessage("Table opened."); {"}"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        Yuqoridagi hodisalar TADOTable komponentasining turli o'zgarishlariga
                        javob berish imkoniyatini beradi. Bu hodisalarni dasturda qanday
                        ishlatish mumkinligini ko'rsatadigan misollar keltirilgan. Komponentni
                        formaga qo'shgandan so'ng, uning hodisalarini kod orqali yoki vizual
                        tarzda (Object Inspector) sozlashingiz mumkin.
                    </p>
                </li>
                <li data-list-text="42)">
                    <h1
                        style={{
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            lineHeight: "16pt",
                            textAlign: "left"
                        }}
                    >
                        TDBLookUpCombobox komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{ paddingLeft: "43pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint…
                    </p>
                    <p
                        className="s47"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="s14">
                            C++ Builder'da TDBLookupComboBox komponenti ma'lumotlar bazasidagi
                            ma'lumotlarni ko'rsatish va tanlash uchun ishlatiladi. Ushbu komponent
                            odatda foydalanuvchilarga boshqa jadvaldagi ma'lumotlarni tanlash
                            imkonini beradi va ma'lumotlar bazasi bilan integratsiyalashgan holda
                            ishlaydi.. Quyida ushbu komponentning asosiy xususiyatlari va ular
                            haqida to'liq ma'lumot keltirilgan:
                        </span>
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "14pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        1. Name: xususiyati komponentning unikal identifikatori bo'lib, kodda
                        unga murojaat qilish uchun ishlatiladi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "14pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Type: TComponentName
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Description: Komponentning unikal nomi. Bu nom kod yozishda komponentni
                        chaqirish uchun ishlatiladi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "14pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        DBLookupComboBox1-&gt;Name = "MyLookupCombo";
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Align: xususiyati komponentni konteyner (form yoki panel) ichida qanday
                        joylashtirilishini belgilaydi. Description: Komponentning konteyner
                        ichida qanday joylashishini belgilaydi (alLeft, alRight, alTop,
                        alBottom, alClient).
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        DBLookupComboBox1-&gt;Align = alTop;
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        Tag: xususiyati komponentga qo'shimcha ma'lumot biriktirish uchun
                        foydalaniladi. Bu ma'lumot integer qiymatda bo'ladi va asosan kod
                        yozishda yordam beradi. Description: Komponentga bog'langan
                        foydalanuvchi tomonidan belgilangan ma'lumotni saqlaydi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        DBLookupComboBox1-&gt;Tag = 1234;
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Cursor: xususiyati komponent ustida sichqoncha ko'rsatkichi qanday
                        ko'rinishda bo'lishini belgilaydi
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "139%",
                            textAlign: "left"
                        }}
                    >
                        Description: Sichqoncha ko'rsatkichi komponent ustida bo'lganida qanday
                        ko'rinishda bo'lishini belgilaydi (crDefault, crArrow, crCross va h.k.).
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        DBLookupComboBox1-&gt;Cursor = crHandPoint;
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "138%",
                            textAlign: "left"
                        }}
                    >
                        Hint: xususiyati komponent ustiga sichqoncha olib kelinsa,
                        foydalanuvchiga ko'rsatiladigan matnli yordamchi ma'lumotni belgilaydi.{" "}
                        <span style={{ color: "#000" }}>D</span>escription: Sichqoncha komponent
                        ustiga olib kelinganda ko'rinadigan yordamchi matn.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        DBLookupComboBox1-&gt;Hint = "Bu yerda ma'lumotlarni tanlang";
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        ShowHint: xususiyati komponent uchun Hint (yordamchi matn) ko'rsatish
                        kerak yoki kerak emasligini belgilaydi. Description: Agar True qiymatiga
                        ega bo'lsa, Hint xususiyatidagi matn ko'rsatiladi. Aks holda,
                        ko'rsatilmaydi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        DBLookupComboBox1-&gt;ShowHint = true;
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Bu asosiy xususiyatlar TDBLookupComboBox komponentining
                        konfiguratsiyasini va foydalanishni osonlashtiradi. Komponentni formaga
                        qo'shgandan keyin, yuqoridagi xususiyatlarni kod orqali yoki vizual
                        tarzda (Object Inspector) sozlashingiz mumkin.
                    </p>
                </li>
                <li data-list-text="43)">
                    <h1
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TDBLookUpCombobox komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob: <span className="p">c</span>
                        <span className="s14">
                            ++ Builder'da TDBLookupComboBox komponenti ma'lumotlar bazasidagi
                            ma'lumotlarni ko'rsatish va tanlash uchun ishlatiladi. Ushbu komponent
                            odatda foydalanuvchilarga boshqa jadvaldagi ma'lumotlarni tanlash
                            imkonini beradi va ma'lumotlar bazasi bilan integratsiyalashgan holda
                            ishlaydi. Quyida ushbu komponentning asosiy hodisalari va ular haqida
                            to'liq ma'lumot keltirilgan:
                        </span>
                    </h2>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "14pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        onClick: hodisasi foydalanuvchi komponentni bosganida yuz beradi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Type: TNotifyEvent Description: Foydalanuvchi komponentni bir marta
                        bosganida bajariladigan kodni yozish uchun ishlatiladi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "187%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::DBLookupComboBox1Click(TObject
                        *Sender) {"{"} ShowMessage("ComboBox clicked!"); {"}"}
                    </p>
                    <p
                        className="s14"
                        style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        onDblClick: hodisasi foydalanuvchi komponentni ikki marta ketma-ket
                        bosganida yuz beradi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Type: TNotifyEvent Description: Foydalanuvchi komponentni ikki marta
                        bosganida bajariladigan kodni yozish uchun ishlatiladi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "189%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::DBLookupComboBox1DblClick(TObject
                        *Sender) {"{"} ShowMessage("ComboBox double-clicked!"); {"}"}
                    </p>
                    <p
                        className="s14"
                        style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        onMouseEnter: Description: Sichqoncha komponent ustiga kiritilganda
                        bajariladigan kodni yozish uchun ishlatiladi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "187%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::DBLookupComboBox1MouseEnter(TObject
                        *Sender) {"{"} ShowMessage("Mouse entered ComboBox!"); {"}"}
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        onMouseEnter hodisasi foydalanuvchi sichqonchani komponent ustiga olib
                        kelganida yuz beradi. Type: TNotifyEvent
                    </p>
                    <p
                        className="s14"
                        style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        Bu hodisalar TDBLookupComboBox komponentining turli interaktiv
                        harakatlariga javob berish imkoniyatini beradi. Komponentni formaga
                        qo'shgandan so'ng, yuqoridagi hodisalarni kod orqali yoki vizual tarzda
                        (Object Inspector) sozlashingiz mumkin<span className="s48">.</span>
                    </p>
                    <p style={{ paddingTop: "3pt", textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                </li>
                <li data-list-text="44)">
                    <p
                        className="s49"
                        style={{ paddingLeft: "27pt", textIndent: "-20pt", textAlign: "left" }}
                    >
                        TPopupMenu komponentasi xususiyatlari
                    </p>
                    <p style={{ paddingTop: "3pt", textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <p
                        className="s37"
                        style={{ paddingLeft: "43pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint…
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        C++ Builder'da TPopupMenu komponenti dasturning istalgan joyida kontekst
                        menyularini yaratish va boshqarish uchun ishlatiladi. Bu menyular odatda
                        foydalanuvchi sichqonchaning o'ng tugmasini bosganda ko'rsatiladi.
                        Quyida TPopupMenu komponentining asosiy xususiyatlari va ular haqida
                        batafsil ma'lumot keltirilgan:
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "14pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Name- xususiyati komponentning unikal identifikatori bo'lib, kodda unga
                        murojaat qilish uchun ishlatiladi. Type: TComponentName Description:
                        Komponentning unikal nomi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "189%",
                            textAlign: "left"
                        }}
                    >
                        Bu nom kod yozishda komponentni chaqirish uchun ishlatiladi.
                        PopupMenu1-&gt;Name = "MyPopupMenu";
                    </p>
                    <p
                        className="s14"
                        style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        Align - xususiyati TPopupMenu komponentida mavjud emas, chunki kontekst
                        menyulari faqatgina sichqoncha o'ng tugmasi bosilganda yoki boshqa usul
                        bilan ko'rsatiladi va ular o'ziga xos joylashuvga ega emas
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "14pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tag xususiyati komponentga qo'shimcha ma'lumot biriktirish uchun
                        ishlatiladi. Bu ma'lumot integer qiymatda bo'ladi va asosan kod yozishda
                        yordam beradi. Type: int. Description: Komponentga bog'langan
                        foydalanuvchi tomonidan belgilangan ma'lumotni saqlaydi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        PopupMenu1-&gt;Tag = 1234;
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Cursor - xususiyati TPopupMenu komponentida mavjud emas, chunki bu
                        komponent vizual element emas va sichqoncha ko'rsatkichi bilan
                        to'g'ridan-to'g'ri o'zaro aloqada bo'lmaydi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Hint - xususiyati komponent ustiga sichqoncha olib kelinsa,
                        foydalanuvchiga ko'rsatiladigan matnli yordamchi ma'lumotni belgilaydi.
                        Type: String. Description: Sichqoncha komponent ustiga olib kelinganda
                        ko'rinadigan yordamchi matn.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        PopupMenu1-&gt;Hint = "Bu kontekst menyu";
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "13pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "justify"
                        }}
                    >
                        ShowHint - xususiyati komponent uchun Hint (yordamchi matn) ko'rsatish
                        kerak yoki kerak emasligini belgilaydi. Type: bool. Description: Agar
                        True qiymatiga ega bo'lsa, Hint xususiyatidagi matn ko'rsatiladi. Aks
                        holda, ko'rsatilmaydi.
                    </p>
                    <p
                        className="s14"
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        PopupMenu1-&gt;ShowHint = true;
                    </p>
                </li>
                <li data-list-text="45)">
                    <h1
                        style={{
                            paddingTop: "12pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TPopupMenu komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob: <span className="p">C++ Builder dasturlash muhitida </span>
                        TPopupMenu{" "}
                        <span className="p">
                            komponentasi dastur foydalanuvchisiga oson va qulay kontekst menyusini
                            (kontekstual menyu) yaratishga yordam beradi.
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Asosiy Xususiyatlar
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Items: TPopupMenu menyusidagi barcha menyu elementlarini (TMenuItem
                        obyektlarini) o'z ichiga oladi. Siz bu xususiyat orqali menyu
                        elementlarini qo'shishingiz, o'chirishingiz yoki ularga kirishingiz
                        mumkin.
                    </p>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        AutoPopup: Agar bu xususiyat true ga o'rnatilgan bo'lsa, TPopupMenu
                        avtomatik ravishda sichqoncha o'ng tugmasi bosilganda ko'rsatiladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Alignment: Bu xususiyat menyuning ekranda qanday hizalanishini
                        belgilaydi
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        TrackButton: Bu xususiyat qaysi sichqoncha tugmasi bilan menyu
                        chaqirilishini belgilaydi (masalan, mbRight o'ng tugma uchun).
                    </p>
                    <h2
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        HODISALARI
                    </h2>
                    <h2
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        onClick-
                        <span className="p">
                            Bu hodisa foydalanuvchi TPopupMenu menyusining biror bandini bosganda
                            sodir bo'ladi.
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Ishlatilishi
                    </p>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::PopupMenu1Click(TObject *Sender)
                        {"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        ShowMessage("Menyu bandi bosildi"); {"}"}
                    </p>
                    <h2
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        onDblClick-
                        <span className="p">
                            Bu hodisa foydalanuvchi menyuning biror bandini ikki marta bosganda
                            sodir bo'ladi. Bu hodisa odatda TPopupMenu komponentasida juda kam
                            qo'llaniladi, chunki menyu bandlari bir marta bosish orqali tanlanadi.
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Ishlatilishi:
                    </p>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "154%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::PopupMenu1DblClick(TObject *Sender)
                        {"{"} ShowMessage("Menyu bandi ikki marta bosildi"); {"}"}
                    </p>
                    <h2
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
                        onMouseEnter
                    </h2>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tavsif: Bu hodisa foydalanuvchi sichqoncha ko'rsatkichini menyuning
                        biror bandi ustiga olib kirganda sodir bo'ladi. Bu hodisa ko'pincha
                        foydalanuvchiga qo'shimcha ma'lumot ko'rsatish uchun ishlatiladi.
                    </p>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Ishlatilishi:
                    </p>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "152%",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::PopupMenu1MouseEnter(TObject
                        *Sender){"{"} ShowMessage("Sichqoncha menyu bandi ustiga kirdi"); {"}"}
                    </p>
                </li>
                <li data-list-text="46)">
                    <h1
                        style={{ paddingLeft: "27pt", textIndent: "-20pt", textAlign: "left" }}
                    >
                        ADOConnection komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: ConnectionString, Connected, LoginPrompt, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob: <span className="p">C++ Builder dasturlash muhitida </span>
                        TADOConnection{" "}
                        <span className="p">
                            komponentasi Microsoft ActiveX Data Objects (ADO) orqali ma'lumotlar
                            bazasiga ulanish uchun ishlatiladi.
                        </span>
                    </h2>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        Quyida TADOConnection komponentasining asosiy xususiyatlari va ulardan
                        foydalanish misollari keltirilgan
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Asosiy Xususiyatlari
                    </p>
                    <h2
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        ConnectionString-
                        <span className="p">
                            Bu xususiyat ma'lumotlar bazasiga ulanish uchun kerakli bo'lgan
                            parametrlarni o'z ichiga oladi. ConnectionString orqali server nomi,
                            ma'lumotlar bazasi nomi, foydalanuvchi ismi va parol kabi ma'lumotlar
                            ko'rsatiladi
                        </span>
                    </h2>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Connected-
                        <span className="p">
                            Bu xususiyat TADOConnection komponentasining ma'lumotlar bazasiga
                            ulangan yoki ulanmaganligini bildiradi. true bo'lsa, ulanganligini,
                            false bo'lsa, ulanmaganligini bildiradi.
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "154%",
                            textAlign: "left"
                        }}
                    >
                        Misol: ADOConnection1-&gt;Connected = true; ADOConnection1-&gt;Connected
                        = false;
                    </p>
                    <h2 style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        LoginPrompt-
                        <span className="p">
                            Bu xususiyat true bo'lsa, foydalanuvchi ma'lumotlar bazasiga ulanish
                            paytida foydalanuvchi ismi va parolni kiritishi uchun muloqot oynasi
                            ko'rsatiladi. false bo'lsa, muloqot oynasi ko'rsatilmaydi.
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Misol: ADOConnection1-&gt;LoginPrompt = false;
                    </p>
                </li>
                <li data-list-text="47)">
                    <p
                        className="s49"
                        style={{
                            paddingTop: "2pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        ADOConnection komponentasi hodisalari
                    </p>
                    <p
                        className="s37"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "36pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: AfterConnect, AfterDisconnect, BeforeConnect,
                        BeforeDisconnect, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob: <span className="p">C++ Builderda </span>TADOConnection{" "}
                        <span className="p">
                            komponentasi hodisalari (events) orqali ma'lumotlar bazasiga ulanish
                            va uzilish jarayonlarini boshqarishingiz mumkin. Quyida TADOConnection
                            komponentasining asosiy hodisalari va ularni ishlatish misollari
                            keltirilgan:
                        </span>
                    </h2>
                    <h2
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        AfterConnect-
                        <span className="p">
                            Bu hodisa TADOConnection komponentasi ma'lumotlar bazasiga
                            muvaffaqiyatli ulanganidan keyin sodir bo'ladi.
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "20pt",
                            textIndent: "-13pt",
                            lineHeight: "154%",
                            textAlign: "left"
                        }}
                    >
                        Ishlatilishi: void <u>&nbsp; </u>fastcall
                        TForm1::ADOConnection1AfterConnect(TObject *Sender){"{"}{" "}
                        ShowMessage("Ma'lumotlar bazasiga ulanish muvaffaqiyatli amalga
                        oshirildi."); {"}"}
                    </p>
                    <h2 style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        AfterDisconnect-
                        <span className="p">
                            Bu hodisa TADOConnection komponentasi ma'lumotlar bazasidan
                            uzilganidan keyin sodir bo'ladi
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Ishlatilishi: void <u>&nbsp; </u>fastcall
                        TForm1::ADOConnection1AfterDisconnect(TObject
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        *Sender){"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        ShowMessage("Ma'lumotlar bazasidan uzilish muvaffaqiyatli amalga
                        oshirildi."); {"}"}
                    </p>
                    <h2
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        BeforeConnect
                    </h2>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tavsif: Bu hodisa TADOConnection komponentasi ma'lumotlar bazasiga
                        ulanmasdan oldin sodir bo'ladi. Bu hodisa ulanishdan oldin ba'zi
                        sozlashlarni amalga oshirish uchun foydali bo'lishi mumkin.
                    </p>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Ishlatilishi: void <u>&nbsp; </u>fastcall
                        TForm1::ADOConnection1BeforeConnect(TObject
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        *Sender){"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "20pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        ShowMessage("Ma'lumotlar bazasiga ulanishdan oldin."); {"}"}
                    </p>
                </li>
                <li data-list-text="48)">
                    <h1
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        ADOQuery komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Active, Connection, SQL, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob: <span className="p">C++ Builder dasturlash muhitida </span>
                        TADOQuery{" "}
                        <span className="p">
                            komponentasi ADO (ActiveX Data Objects) yordamida ma'lumotlar bazasiga
                            SQL so'rovlarini (query) yuborish va natijalarni qaytarish uchun
                            ishlatiladi. Quyida TADOQuery komponentasining asosiy xususiyatlari va
                            hodisalari keltirilgan.
                        </span>
                    </h2>
                    <h2
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Connection-
                        <span className="p">
                            Bu xususiyat TADOQuery komponentasi qaysi TADOConnection komponentasi
                            bilan bog'lanishini belgilaydi. Bu orqali TADOQuery ma'lumotlar
                            bazasiga ulanishni amalga oshiradi.
                        </span>
                    </h2>
                    <h2
                        style={{
                            paddingTop: "8pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        SQL-{" "}
                        <span className="p">
                            Bu xususiyat SQL so'rovini o'z ichiga oladi. SQL so'rovini yozish va
                            ishlatish uchun foydalaniladi.
                        </span>
                    </h2>
                    <h2
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Active-
                        <span className="p">
                            Bu xususiyat TADOQuery komponentasi faol yoki faol emasligini
                            bildiradi. Agar true bo'lsa, so'rov amalga oshirilgan va natijalar
                            olingan bo'ladi. Agar false bo'lsa, so'rov bajarilmagan bo'ladi.
                        </span>
                    </h2>
                </li>
                <li data-list-text="49)">
                    <h1
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        ADOQuery komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: AfterCancel, AfterClose, AfterDelete, AfterOpen, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Javob: <span className="p">ADOQuery Komponentasi Hodisalari</span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        TADOQuery komponentasi C++ Builder dasturlash tilida SQL so'rovlarini
                        bajarish va ma'lumotlar
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        bazasi bilan ishlash uchun ishlatiladi. Quyida asosiy hodisalarning
                        tushuntirishlari keltirilgan:
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "left"
                        }}
                    >
                        AfterCancel: AfterCancel hodisasi so'rov bekor qilingandan keyin yuz
                        beradi. Masalan, TADOQuery1-&gt;AfterCancel = YourAfterCancelHandler;
                        hodisa sodir bo'lganda YourAfterCancelHandler funksiyasi chaqiriladi.
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        misol:
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        void <u>&nbsp; </u>fastcall TForm1::YourAfterCancelHandler(TDataSet
                        *DataSet) {"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
        // Kod so'rov bekor qilingandan keyin bajariladi {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        AfterClose: AfterClose hodisasi so'rov yopilgandan keyin yuz beradi.
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        misil: void <u>&nbsp; </u>fastcall
                        TForm1::YourAfterCloseHandler(TDataSet *DataSet) {"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
        // Kod so'rov yopilgandan keyin bajariladi {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        AfterDelete: AfterDelete hodisasi ma'lumotlar qatori o'chirilgandan
                        keyin yuz beradi. misol: void <u>&nbsp; </u>fastcall
                        TForm1::YourAfterDeleteHandler(TDataSet *DataSet) {"{"}
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
        // Kod qator o'chirilgandan keyin bajariladi {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        AfterOpen: AfterOpen hodisasi so'rov ochilgandan keyin yuz beradi.
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        misol: void <u>&nbsp; </u>fastcall TForm1::YourAfterOpenHandler(TDataSet
                        *DataSet) {"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
        // Kod so'rov ochilgandan keyin bajariladi {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        AfterPost: AfterPost hodisasi ma'lumotlar yozuvlari saqlangandan keyin
                        yuz beradi. misol: void <u>&nbsp; </u>fastcall
                        TForm1::YourAfterPostHandler(TDataSet *DataSet) {"{"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
        // Kod yozuvlar saqlangandan keyin bajariladi {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        BeforeCancel: BeforeCancel hodisasi so'rov bekor qilinishidan oldin yuz
                        beradi. misol:void <u>&nbsp; </u>fastcall
                        TForm1::YourBeforeCancelHandler(TDataSet *DataSet) {"{"}
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
        // Kod so'rov bekor qilinishidan oldin bajariladi
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        BeforeClose: BeforeClose hodisasi so'rov yopilishidan oldin yuz beradi.
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        misol: void <u>&nbsp; </u>fastcall
                        TForm1::YourBeforeCloseHandler(TDataSet *DataSet) {"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
        // Kod so'rov yopilishidan oldin bajariladi {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "left"
                        }}
                    >
                        BeforeDelete: BeforeDelete hodisasi ma'lumotlar qatori o'chirilishidan
                        oldin yuz beradi. misol: void <u>&nbsp; </u>fastcall
                        TForm1::YourBeforeDeleteHandler(TDataSet *DataSet) {"{"}
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "15pt",
                            textAlign: "left"
                        }}
                    >
        // Kod qator o'chirilishidan oldin bajariladi {"}"}
                    </p>
                </li>
                <li data-list-text="50)">
                    <h1
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "left"
                        }}
                    >
                        TDBEdit komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint…
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TDBEdit Komponentasi Xususiyatlari TDBEdit komponentasi C++ Builder
                            dasturlash tilida ma'lumotlar bazasi bilan bog'liq matnlarni
                            tahrirlash uchun ishlatiladi. Asosiy xususiyatlar quyidagilar:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Name: Komponentning nomi. Masalan, TDBEdit1-&gt;Name = "MyDBEdit";
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "148%",
                            textAlign: "left"
                        }}
                    >
                        Align: Komponentning joylashuvini belgilaydi. Masalan,
                        TDBEdit1-&gt;Align = alTop; Tag: Komponentga qo'shimcha ma'lumot
                        biriktirish uchun ishlatiladi. Masalan, TDBEdit1-&gt;Tag = 1;
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "149%",
                            textAlign: "left"
                        }}
                    >
                        Cursor: Sichqoncha ko'rsatgichining shaklini belgilaydi. Masalan,
                        TDBEdit1-&gt;Cursor = crHandPoint;
                    </p>
                    <p
                        style={{
                            paddingLeft: "10pt",
                            textIndent: "0pt",
                            lineHeight: "149%",
                            textAlign: "left"
                        }}
                    >
                        Hint: Komponent ustiga kursor qo'yilganda ko'rsatiladigan matn. Masalan,
                        TDBEdit1-&gt;Hint = "This is a hint";
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "149%",
                            textAlign: "left"
                        }}
                    >
                        ShowHint: Hint ko'rsatilishini belgilaydi. Masalan,
                        TDBEdit1-&gt;ShowHint = true; Text: TDBEdit komponentasida
                        ko'rsatiladigan matn. Masalan,
                    </p>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        TDBEdit1-&gt;Text = "Hello"; Enabled: Komponent faol yoki faol
                        emasligini belgilaydi. Masalan, TDBEdit1-&gt;Enabled = true; ReadOnly:
                        TDBEdit komponentasini faqat o'qish uchun holatga keltiradi. Masalan,
                        TDBEdit1-&gt;ReadOnly = true; DataSource: Ma'lumot manbai bilan
                        bog'lanish uchun ishlatiladi. Masalan, TDBEdit1-&gt;DataSource =
                        DataSource1; DataField: Ma'lumotlar manbasidagi maydon nomi. Masalan,
                        TDBEdit1-
                    </p>
                    <p
                        style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "justify" }}
                    >
                        &gt;DataField = "FieldName";
                    </p>
                </li>
                <li data-list-text="51)">
                    <h1
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TDBEdit komponentasi hodisalari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TDBEdit Komponentasi Hodisalari TDBEdit komponentasi turli xil
                            hodisalarga ega bo'lib, ulardan ba'zilari quyidagilardir:
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        onClick: Komponent ustiga sichqoncha bosilganda yuz beradigan hodisa.
                        Masalan, TDBEdit1-&gt;OnClick = YourClickHandler;
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        void <u>&nbsp; </u>fastcall TForm1::YourClickHandler(TObject *Sender){" "}
                        {"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "10pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
        // Kod sichqoncha bosilganda bajariladi {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        onDblClick: Komponent ustiga sichqoncha ikki marta bosilganda yuz
                        beradigan hodisa. Masalan, TDBEdit1-&gt;OnDblClick =
                        YourDblClickHandler;
                    </p>
                    <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
                        void <u>&nbsp; </u>fastcall TForm1::YourDblClickHandler(TObject *Sender){" "}
                        {"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
        // Kod sichqoncha ikki marta bosilganda bajariladi {"}"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "107%",
                            textAlign: "left"
                        }}
                    >
                        onMouseEnter: Sichqoncha komponent ustiga kiritilganda yuz beradigan
                        hodisa. Masalan, TDBEdit1-&gt;OnMouseEnter = YourMouseEnterHandler;
                    </p>
                    <p
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        void <u>&nbsp; </u>fastcall TForm1::YourMouseEnterHandler(TObject
                        *Sender) {"{"}
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "10pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
        // Kod sichqoncha komponent ustiga kiritilganda bajariladi {"}"}
                    </p>
                </li>
                <li data-list-text="52)">
                    <h1
                        style={{ paddingLeft: "27pt", textIndent: "-20pt", textAlign: "left" }}
                    >
                        TDrawGrid komponentasi xususiyatlari
                    </h1>
                    <p
                        className="s2"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "43pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Tayanch so‘zlar: Name, Align, Tag, Cursor, Hint, ShowHint…
                    </p>
                    <h2
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Javob:{" "}
                        <span className="p">
                            TDrawGrid Komponentasi Xususiyatlari TDrawGrid komponentasi C++
                            Builder dasturlash tilida tarmoqli jadval yaratish uchun ishlatiladi.
                            Asosiy xususiyatlar quyidagilar: Name: Komponentning nomi. Masalan,
                            TDrawGrid1-&gt;Name = "MyDrawGrid";
                        </span>
                    </h2>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        Align: Komponentning joylashuvini belgilaydi. Masalan,
                        TDrawGrid1-&gt;Align = alTop; Tag: Komponentga qo'shimcha ma'lumot
                        biriktirish uchun ishlatiladi. Masalan, TDrawGrid1-&gt;Tag = 1;
                    </p>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "109%",
                            textAlign: "justify"
                        }}
                    >
                        Cursor: Sichqoncha ko'rsatgichining shaklini belgilaydi. Masalan,
                        TDrawGrid1-&gt;Cursor = crHandPoint;
                    </p>
                    <p
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        Hint: Komponent ustiga kursor qo'yilganda ko'rsatiladigan matn. Masalan,
                        TDrawGrid1-
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            textAlign: "justify"
                        }}
                    >
                        &gt;Hint = "This is a hint";
                    </p>
                    <p
                        style={{
                            paddingTop: "7pt",
                            paddingLeft: "7pt",
                            textIndent: "0pt",
                            lineHeight: "108%",
                            textAlign: "justify"
                        }}
                    >
                        ShowHint: Hint ko'rsatilishini belgilaydi. Masalan,
                        TDrawGrid1-&gt;ShowHint = true; Umid qilamanki, ushbu ma'lumotlar sizga
                        kerakli bilimlarni beradi. Agar qo'shimcha savollaringiz bo'lsa, bemalol
                        so'rang.
                    </p>
                </li>
                <li data-list-text="53)">
                    <h1
                        style={{
                            paddingTop: "5pt",
                            paddingLeft: "27pt",
                            textIndent: "-20pt",
                            textAlign: "justify"
                        }}
                    >
                        TDrawGrid komponentasi hodisalari
                    </h1>
                </li>
            </ol>
            <p
                className="s2"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "43pt",
                    textIndent: "0pt",
                    textAlign: "justify"
                }}
            >
                Tayanch so‘zlar: onClick, onDblClick, onMouseEnter, …
            </p>
            <h2
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "108%",
                    textAlign: "justify"
                }}
            >
                Javob:{" "}
                <span className="p">
                    C++ Builder dasturlash muhitida TDrawGrid komponentasi murakkab jadval
                    ko'rinishini yaratishga yordam beradi. TDrawGrid komponentasi
                    foydalanuvchi harakatlariga javob beradigan bir qator hodisalarga ega.
                    Hodisalar:
                </span>
            </h2>
            <p
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "justify"
                }}
            >
                Buyruq tugmasini chertish C++ Builder da xodisa deb ataladi.
            </p>
            <p
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "108%",
                    textAlign: "justify"
                }}
            >
                Xodisa bu ob'yekt yordamida biron bir ish bajarishdan iborat. Xodisa
                bajarilganidan so'ng shu ob'yekt yordamida qandaydir ma'lumotlar qayta
                ishlanadi. xodisani ajratib olish uchun xodisaning nomi oldiga On so'zi
                qo'shilgan.
            </p>
            <p
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "147%",
                    textAlign: "left"
                }}
            >
                onClick-sichqonchatugmasi komponenta sohasiga bir marta bosilgandaa sodir
                bo'ladi. OnDblClick- sichqoncha tugmasi komponenta ustida marta bosilganda
                sodir bo'ladi.
            </p>
            <p
                style={{
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "148%",
                    textAlign: "left"
                }}
            >
                OnMouseEnter-sichqoncha kursori grid ustiga kirganda sodir bo'ladi.
                OnMouseLeave-sichqoncha kursori grid ustidan chiqib ketganda sodir bo'ladi.
                onMouseMove- sichqoncha kursori harakatlanganda sodir bo'ladi.
            </p>
            <p
                style={{
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                onDrawCell-Bu hodisa griddagi katakcha chizilayotgan paytda sodir bo'ladi.
                Bu hodisa yordamida katakchalarni o'zingiz xohlagancha chizishingiz mumkin.
            </p>
            <p
                style={{
                    paddingTop: "3pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                onKeyDown-klaviatura tugmasi bosilganda sodir bo'ladi.
            </p>
        </>
    )
}

export default D2;