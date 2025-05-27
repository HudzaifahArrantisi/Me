const quizzes = {
    1: {
        title: "Matematika Lanjut (Sulit Tambahan)",
        questions: [
            {
                question: "Jika f(x) = ln(x² + 1), maka nilai dari ∫₀^1 f(x) dx adalah...",
                options: ["ln2", "1/2 ln2", "ln(5/4)", "ln(2)/2"],
                answer: 1,
                explanation: "Gunakan substitusi simetris atau numerik: hasilnya (1/2)ln(2)"
            },
            {
                question: "Turunan ke-100 dari f(x) = cos x di x=0 adalah...",
                options: ["0", "1", "-1", "100!"],
                answer: 0,
                explanation: "Polanya: turunan genap ke-4n → cos; ke-4n+2 → -cos; tapi turunan ke-100 adalah 0 karena kelipatan 4 tidak menghasilkan nilai di x=0"
            },
            {
                question: "Jumlah nilai eigen dari matriks A 3×3 jika tr(A)=6 adalah...",
                options: ["0", "3", "6", "Tidak dapat ditentukan"],
                answer: 2,
                explanation: "Jumlah nilai eigen = trace(A) = 6"
            },
            {
                question: "Jika ∫₀^∞ x⁴e^{-x} dx = a, maka nilai a adalah...",
                options: ["4!", "5!", "6!", "24"],
                answer: 1,
                explanation: "Gunakan integral gamma: ∫₀^∞ x⁴e^{-x} dx = Γ(5) = 4! = 24"
            },
            {
                question: "Persamaan diferensial dy/dx = y tan x, solusi umum adalah...",
                options: ["y = C sec x", "y = C tan x", "y = C cos x", "y = C sec x + tan x"],
                answer: 0,
                explanation: "Pisahkan variabel, integrasi → y = C sec x"
            },
            {
                question: "Jika z bilangan kompleks dan |z|=2, maka nilai maksimum dari |z + 1/z| adalah...",
                options: ["2", "4", "5", "3"],
                answer: 1,
                explanation: "z = 2e^{iθ} → 1/z = (1/2)e^{-iθ} → jumlah modulus maksimum 2 + 1/2 = 2.5, tapi maksimum |z + 1/z| = √(2² + (1/2)² + 2cosθ) → max=4"
            },
            {
                question: "Jika P(x) berderajat 3 dan P(1)=1, P(2)=8, P(3)=27, maka P(4)=...",
                options: ["64", "55", "50", "81"],
                answer: 0,
                explanation: "Terlihat P(x) = x³ → P(4) = 64"
            },
            {
                question: "Solusi umum dari y'' - y = 0 adalah...",
                options: ["Ae^x + Be^{-x}", "Ae^x - Be^{-x}", "Ae^{-x}", "Ae^x"],
                answer: 0,
                explanation: "Karakteristik: r² - 1 = 0 → r = ±1 → solusi Ae^x + Be^{-x}"
            },
            {
                question: "Jika ∫₀^π sin⁵x dx = a, maka nilai a adalah...",
                options: ["16/15", "8/15", "32/15", "0"],
                answer: 1,
                explanation: "Gunakan reduksi: ∫sin⁵x dx = (8/15)π"
            },
            {
                question: "Nilai limit lim(x→0) (e^x - 1 - x)/x² adalah...",
                options: ["0", "1", "1/2", "∞"],
                answer: 2,
                explanation: "Gunakan deret Taylor e^x = 1 + x + x²/2 + ... → limit = 1/2"
            },
            {
                question: "Jika y = x^x, maka dy/dx di x=1 adalah...",
                options: ["1", "e", "1 + ln x", "2"],
                answer: 0,
                explanation: "Gunakan logaritma: y = x^x → ln y = x ln x → dy/dx = x^x (1 + ln x) → x=1 → dy/dx = 1"
            },
            {
                question: "Jika ∫₀^π x sin x dx = aπ, maka nilai a adalah...",
                options: ["1", "π", "2", "π/2"],
                answer: 0,
                explanation: "Integrasi parsial → a = 1"
            },
            {
                question: "Jika A dan B matriks 2×2 dan AB = BA, maka det(A+B) adalah...",
                options: ["det A + det B", "det A + det B + 2 det(AB)", "Tidak selalu bisa ditentukan", "det(A+B) = det(A) + det(B) jika AB=BA"],
                answer: 2,
                explanation: "Tidak ada rumus langsung untuk det(A+B) meskipun AB=BA"
            },
            {
                question: "Pangkat terkecil n sehingga (1+x)^n memiliki suku x^7 adalah...",
                options: ["7", "8", "6", "9"],
                answer: 1,
                explanation: "Suku x^7 muncul pertama kali di deret binomial saat n ≥ 7 → agar ada suku ke-8: n ≥ 7 → n=7 → x⁷ muncul, jadi n=7"
            },
            {
                question: "Jika lim(x→∞) (x² + ax + 1)/(x² + bx + 2) = 1, maka nilai a - b adalah...",
                options: ["1", "0", "-1", "Tidak dapat ditentukan"],
                answer: 1,
                explanation: "Karena derajat sama, batas hanya ditentukan oleh koefisien tertinggi → 1 jika a=b"
            },
            {
                question: "Misal f(x) = |x|^x, maka nilai f(0) adalah...",
                options: ["0", "1", "Tak terdefinisi", "∞"],
                answer: 2,
                explanation: "x^x tidak terdefinisi di x=0 karena 0^0 tidak pasti"
            },
            {
                question: "Jika ∑(n=1 to ∞) 1/n² = π²/6, maka ∑(n=1 to ∞) 1/(2n)² adalah...",
                options: ["π²/24", "π²/6", "π²/12", "π²/8"],
                answer: 0,
                explanation: "1/4 dari jumlah semua bilangan ganjil genap: (1/4)(π²/6) = π²/24"
            },
            {
                question: "Jika f(x) = sin x / x, maka lim x→0 f(x) adalah...",
                options: ["0", "1", "∞", "Tidak ada"],
                answer: 1,
                explanation: "Limit terkenal: sin x / x → 1 saat x→0"
            },
            {
                question: "Peluang 3 orang duduk berurutan dari 5 orang adalah...",
                options: ["1/5", "3/10", "2/5", "1/2"],
                answer: 2,
                explanation: "Jumlah susunan: 5! = 120, susunan berurutan: 3! × 3 × 2 = 48 → peluang = 48/120 = 2/5"
            },
            {
                question: "Jika matriks A = [[0,-1],[1,0]], maka A⁴ = ...",
                options: ["I", "-I", "0", "A"],
                answer: 0,
                explanation: "A² = -I → A⁴ = (-I)² = I"
            }
        ]
    },
    
2: {
    title: "Bahasa Inggris (Expert)",
    questions: [
        {
            question: "Which sentence correctly employs the optative subjunctive?",
            options: [
                "I wish he were more careful with his words.",
                "May you live in interesting times.",
                "God save the Queen.",
                "Would that I had wings to fly."
            ],
            answer: 3,
            explanation: "The optative subjunctive 'Would that...' expresses a wish or desire in archaic/formal English."
        },
        {
            question: "Identify the sentence with correct use of the ablative absolute construction:",
            options: [
                "Weather permitting, we shall sail tomorrow.",
                "All things considered, the plan succeeded.",
                "The task being completed, they departed.",
                "His work finished, John left the office."
            ],
            answer: 0,
            explanation: "'Weather permitting' is a true ablative absolute - an independent participial phrase with its own subject."
        },
        {
            question: "Which demonstrates the correct application of zeugma?",
            options: [
                "He broke his vow and his mother's heart.",
                "Time flies like an arrow; fruit flies like a banana.",
                "She sells seashells by the seashore.",
                "The thunder roared and the lightning danced."
            ],
            answer: 0,
            explanation: "Zeugma uses one verb ('broke') to govern two objects in different senses (literal and figurative)."
        },
        {
            question: "Which sentence contains a proleptic accusative?",
            options: [
                "I consider him to be intelligent.",
                "They elected her president.",
                "I saw him running in the park.",
                "We found the door unlocked."
            ],
            answer: 0,
            explanation: "Proleptic accusative: 'him' is the object of 'consider' and subject of the infinitive 'to be'."
        },
        {
            question: "What is the correct term for the linguistic phenomenon in 'The pen is mightier than the sword'?",
            options: [
                "Synecdoche",
                "Metonymy",
                "Metaphor",
                "Antonomasia"
            ],
            answer: 1,
            explanation: "Metonymy substitutes related concepts: 'pen' for writing/words, 'sword' for violence/war."
        },
        {
            question: "Which sentence employs correct litotes?",
            options: [
                "She's not unattractive.",
                "It's incredibly hot today.",
                "He's the best player ever.",
                "The movie was terribly boring."
            ],
            answer: 0,
            explanation: "Litotes uses double negative for understatement: 'not unattractive' means 'quite attractive'."
        },
        {
            question: "Identify the chiasmus in these options:",
            options: [
                "Ask not what your country can do for you—ask what you can do for your country.",
                "I came, I saw, I conquered.",
                "Government of the people, by the people, for the people.",
                "Blood, sweat, and tears."
            ],
            answer: 0,
            explanation: "Chiasmus reverses grammatical structure: 'country-you / you-country' creates mirror effect."
        },
        {
            question: "Which sentence correctly uses the historical present tense for narrative effect?",
            options: [
                "Yesterday I go to the store and I see my old friend.",
                "So I'm walking down the street when suddenly this dog appears.",
                "I have been thinking about what you said yesterday.",
                "I was walking when I had seen the accident."
            ],
            answer: 1,
            explanation: "Historical present uses present tense to make past events vivid and immediate."
        },
        {
            question: "What rhetorical device is exemplified by 'Colorless green ideas sleep furiously'?",
            options: [
                "Paradox",
                "Oxymoron",
                "Semantic anomaly",
                "Catachresis"
            ],
            answer: 2,
            explanation: "Chomsky's phrase demonstrates semantic anomaly - grammatically correct but semantically nonsensical."
        },
        {
            question: "Which sentence contains an example of hypallage?",
            options: [
                "He smoked a nervous cigarette.",
                "She whispered softly in his ear.",
                "The angry storm clouds gathered.",
                "Time crawled slowly forward."
            ],
            answer: 0,
            explanation: "Hypallage transfers epithet: 'nervous' applies to the person, not the cigarette."
        },
        {
            question: "Identify the sentence with correct use of the ethical dative:",
            options: [
                "I gave him the book.",
                "She bought herself a dress.",
                "Don't you go telling me lies.",
                "He made them a promise."
            ],
            answer: 2,
            explanation: "Ethical dative 'you' indicates the speaker's emotional involvement - 'Don't you dare...'"
        },
        {
            question: "Which demonstrates correct application of hendiadys?",
            options: [
                "Sound and fury signifying nothing",
                "Nice and warm weather",
                "Safe and sound arrival",
                "Thick and fast falling snow"
            ],
            answer: 1,
            explanation: "Hendiadys uses 'and' instead of an adjective-noun: 'nice and warm' = 'nicely warm'."
        },
        {
            question: "What is the technical term for the 'that' in 'I know that he is coming'?",
            options: [
                "Relative pronoun",
                "Complementizer",
                "Demonstrative pronoun",
                "Subordinating conjunction"
            ],
            answer: 1,
            explanation: "Complementizer 'that' introduces complement clauses and has no semantic content."
        },
        {
            question: "Which sentence exhibits correct use of tmesis?",
            options: [
                "Abso-bloody-lutely fantastic!",
                "The situation is fan-tastic.",
                "What-so-ever you decide is fine.",
                "Some-where over the rainbow."
            ],
            answer: 0,
            explanation: "Tmesis inserts a word/phrase into another word: 'abso-bloody-lutely' splits 'absolutely'."
        },
        {
            question: "Identify the sentence containing a syllepsis:",
            options: [
                "He stole my heart and my wallet.",
                "Time heals all wounds and wounds all heels.",
                "She broke her silence and her promise.",
                "He lost his keys and his temper."
            ],
            answer: 1,
            explanation: "Syllepsis uses one word in two different senses: 'wounds' as verb and noun with different meanings."
        },
        {
            question: "Which sentence correctly employs anastrophe?",
            options: [
                "Happy is he who finds wisdom.",
                "Wisdom he seeks above all else.",
                "Strong with the Force you are.",
                "Beautiful the sunset was tonight."
            ],
            answer: 2,
            explanation: "Anastrophe inverts normal word order for effect: 'Strong with the Force you are' (Yoda-speak)."
        },
        {
            question: "What is the correct linguistic term for words like 'thingamajig' and 'whatsit'?",
            options: [
                "Neologisms",
                "Placeholder names",
                "Portmanteau words",
                "Onomatopoeia"
            ],
            answer: 1,
            explanation: "Placeholder names (or 'placeholder words') substitute for forgotten or unknown terms."
        },
        {
            question: "Which sentence demonstrates correct use of the vocative absolute?",
            options: [
                "John being absent, we postponed the meeting.",
                "O Death, where is thy sting?",
                "Speaking of weather, it's quite cold.",
                "Frankly speaking, I disagree with you."
            ],
            answer: 1,
            explanation: "Vocative absolute 'O Death' directly addresses a personified concept in formal/poetic style."
        },
        {
            question: "Identify the example of catachresis:",
            options: [
                "I'll die if I don't get some sleep.",
                "The leg of the table is broken.",
                "Time is money in this business.",
                "Her voice is music to my ears."
            ],
            answer: 1,
            explanation: "Catachresis extends metaphor beyond logic: tables don't literally have 'legs' like animals."
        },
        {
            question: "Which sentence contains a correct example of aposiopesis?",
            options: [
                "If you don't stop that, I'll—never mind.",
                "The weather today is...how shall I put it...unpredictable.",
                "You know what they say about assumptions...",
                "Why, you little—! Get back here!"
            ],
            answer: 3,
            explanation: "Aposiopesis breaks off mid-sentence for dramatic effect, often showing strong emotion."
        }
    ]
},
    
    
    3: {
    title: "Kimia Expert Level",
    questions: [
        {
            question: "Suatu senyawa kompleks [Co(NH₃)₄Cl₂]Cl memiliki bilangan koordinasi dan muatan ion kompleks berturut-turut...",
            options: ["6 dan +1", "6 dan +2", "4 dan +1", "4 dan +2"],
            answer: 0,
            explanation: "Bilangan koordinasi = 4(NH₃) + 2(Cl) = 6. Muatan kompleks: [Co(NH₃)₄Cl₂]⁺ karena Cl luar memiliki muatan -1."
        },
        {
            question: "Jika Ksp Ag₂CrO₄ = 9×10⁻¹², kelarutannya dalam air (dalam mol/L) adalah...",
            options: ["1.3×10⁻⁴", "2.6×10⁻⁴", "1.3×10⁻⁶", "2.6×10⁻⁶"],
            answer: 0,
            explanation: "Ag₂CrO₄ ⇌ 2Ag⁺ + CrO₄²⁻. Ksp = 4s³ → 9×10⁻¹² = 4s³ → s = ∛(2.25×10⁻¹²) ≈ 1.3×10⁻⁴ M"
        },
        {
            question: "Suatu reaksi orde kedua memiliki waktu paruh 30 menit ketika konsentrasi awal 0.5 M. Waktu paruh ketika konsentrasi awal 2 M adalah...",
            options: ["7.5 menit", "15 menit", "30 menit", "120 menit"],
            answer: 3,
            explanation: "Untuk reaksi orde 2: t½ = 1/(k[A]₀). Jika [A]₀ naik 4x, t½ turun 4x → 30/4 = 7.5 menit (koreksi: seharusnya 30 menit × (0.5/2) = 7.5 menit)"
        },
        {
            question: "Energi ionisasi pertama sampai kelima suatu unsur (dalam eV): 8.3, 25.2, 37.9, 259.4, 340.1. Unsur tersebut terletak pada golongan...",
            options: ["1", "2", "13", "14"],
            answer: 2,
            explanation: "Lonjakan besar antara IE3 dan IE4 menunjukkan elektron valensi 3 (golongan 13)."
        },
        {
            question: "pH larutan penyangga yang dibuat dari 100 mL NH₄OH 0.1 M (Kb=10⁻⁵) + 50 mL HCl 0.1 M adalah...",
            options: ["5", "7", "9", "11"],
            answer: 2,
            explanation: "NH₄OH + HCl → NH₄Cl + H₂O. Mol NH₄OH = 10 mmol, HCl = 5 mmol → tersisa 5 mmol NH₄OH dan terbentuk 5 mmol NH₄⁺. [OH⁻] = Kb×(mol basa/mol garam) = 10⁻⁵×(5/5) = 10⁻⁵ → pOH = 5 → pH = 9"
        },
        {
            question: "Jika E° sel = 0.46 V untuk reaksi: A + B²⁺ → A²⁺ + B, maka nilai K kesetimbangan pada 298 K adalah... (F=96500, R=8.314)",
            options: ["1.6×10¹⁵", "3.2×10¹⁵", "6.4×10¹⁵", "1.28×10¹⁶"],
            answer: 1,
            explanation: "E° = (RT/nF)lnK → 0.46 = (0.0257/2)lnK → lnK ≈ 35.8 → K ≈ e³⁵·⁸ ≈ 3.2×10¹⁵"
        },
        {
            question: "Senyawa yang bersifat optis aktif dari: (1) [Co(en)₃]³⁺ (2) [Ni(CN)₄]²⁻ (3) [PtCl₂(NH₃)₂] (4) [Cr(ox)₃]³⁻ adalah...",
            options: ["1 dan 2", "1 dan 4", "2 dan 3", "3 dan 4"],
            answer: 1,
            explanation: "Hanya [Co(en)₃]³⁺ (oktahedral kiral) dan [Cr(ox)₃]³⁻ (chelating) yang optis aktif."
        },
        {
            question: "Fraksi mol urea dalam air adalah 0.1. Penurunan tekanan uap larutan jika P° air = 20 mmHg adalah...",
            options: ["0.2 mmHg", "2 mmHg", "18 mmHg", "20 mmHg"],
            answer: 1,
            explanation: "ΔP = Xterlarut×P° = 0.1×20 = 2 mmHg"
        },
        {
            question: "Suatu senyawa organik mengandung 54.5% C, 9.1% H, dan 36.4% O. Jika massa molekul relatifnya 88, rumus molekulnya adalah...",
            options: ["C₄H₈O₂", "C₅H₁₂O", "C₄H₁₀O₂", "C₃H₈O₃"],
            answer: 0,
            explanation: "Perbandingan mol C:H:O = 4.54:9.1:2.275 ≈ 2:4:1 → rumus empirik C₂H₄O (Mr=44) → rumus molekul = (C₂H₄O)₂ = C₄H₈O₂"
        },
        {
            question: "Konfigurasi elektron yang benar untuk Cr (Z=24) dalam keadaan dasar adalah...",
            options: ["[Ar] 4s² 3d⁴", "[Ar] 4s¹ 3d⁵", "[Ar] 4s² 3d³ 4p¹", "[Ar] 4s² 3d⁵"],
            answer: 1,
            explanation: "Cr mengalami penstabilan dengan konfigurasi setengah penuh: [Ar] 4s¹ 3d⁵"
        },
        {
            question: "Jika reaksi 2A + B → C memiliki hukum laju v = k[A][B]², orde reaksi total adalah...",
            options: ["1", "2", "3", "4"],
            answer: 2,
            explanation: "Orde total = 1 (A) + 2 (B) = 3"
        },
        {
            question: "Senyawa yang memiliki momen dipol ≠ 0 adalah...",
            options: ["CO₂", "BF₃", "H₂O", "CCl₄"],
            answer: 2,
            explanation: "H₂O bersifat polar karena bentuk bengkok (lone pair), lainnya simetris nonpolar."
        },
        {
            question: "Pada elektrolisis larutan NiSO₄ dengan elektroda Pt, produk di katoda dan anoda berturut-turut adalah...",
            options: ["Ni dan O₂", "Ni dan H₂", "H₂ dan O₂", "O₂ dan H₂"],
            answer: 0,
            explanation: "Katoda: Ni²⁺ + 2e⁻ → Ni (E° lebih besar dari H⁺). Anoda: 2H₂O → O₂ + 4H⁺ + 4e⁻ (SO₄²⁻ tidak teroksidasi)."
        },
        {
            question: "Jika 50 mL CH₃COOH 0.2 M (Ka=2×10⁻⁵) dititrasi dengan NaOH 0.1 M, pH saat titik ekuivalen adalah...",
            options: ["5.0", "7.0", "8.85", "9.3"],
            answer: 2,
            explanation: "Titik ekuivalen: mol CH₃COOH = mol NaOH → 10 mmol → volume NaOH = 100 mL. Terbentuk CH₃COO⁻ 0.067 M. [OH⁻] = √(Kw/Ka × [garam]) = √(10⁻¹⁴/2×10⁻⁵ × 0.067) ≈ 5.8×10⁻⁶ → pOH ≈ 5.24 → pH ≈ 8.76"
        },
        {
            question: "Bentuk geometri dan hibridisasi dari XeF₄ berturut-turut adalah...",
            options: [
                "Segiempat planar dan sp³d²",
                "Oktahedral dan sp³d²",
                "Bipiramida trigonal dan sp³d",
                "Tetrahedral dan sp³"
            ],
            answer: 0,
            explanation: "XeF₄ memiliki 6 domain elektron (2 lone pair) → bentuk segiempat planar, hibridisasi sp³d²."
        },
        {
            question: "Diketahui ΔHf° CO₂(g) = -394 kJ/mol, ΔHf° H₂O(l) = -286 kJ/mol, dan ΔHc° C₂H₆(g) = -1560 kJ/mol. ΔHf° C₂H₆(g) adalah...",
            options: ["-88 kJ/mol", "-76 kJ/mol", "+76 kJ/mol", "+88 kJ/mol"],
            answer: 1,
            explanation: "Reaksi pembakaran: C₂H₆ + 3.5O₂ → 2CO₂ + 3H₂O. ΔHc° = 2ΔHf°CO₂ + 3ΔHf°H₂O - ΔHf°C₂H₆ → -1560 = 2(-394) + 3(-286) - ΔHf°C₂H₆ → ΔHf°C₂H₆ = -76 kJ/mol"
        },
        {
            question: "Suatu reaksi memiliki ΔH = +50 kJ dan ΔS = +150 J/K. Reaksi akan spontan pada suhu...",
            options: ["Di atas 333 K", "Di bawah 333 K", "Selalu spontan", "Tidak pernah spontan"],
            answer: 0,
            explanation: "ΔG = ΔH - TΔS < 0 → 50000 - T(150) < 0 → T > 50000/150 ≈ 333 K"
        },
        {
            question: "Isomer geometri cis-trans mungkin terjadi pada kompleks...",
            options: ["[PtCl₄]²⁻", "[Co(NH₃)₆]³⁺", "[Cr(en)₃]³⁺", "[PtCl₂(NH₃)₂]"],
            answer: 3,
            explanation: "Hanya [PtCl₂(NH₃)₂] (bentuk segiempat planar) yang bisa menunjukkan isomer cis-trans."
        },
        {
            question: "Jika 0.1 mol asam lemah HA (Ka=10⁻⁵) dilarutkan dalam 1 L air, persen ionisasi asam tersebut adalah...",
            options: ["0.1%", "1%", "10%", "100%"],
            answer: 1,
            explanation: "[H⁺] = √(Ka×[HA]) = √(10⁻⁵×0.1) = 10⁻³ M. % ionisasi = (10⁻³/0.1)×100% = 1%"
        },
        {
            question: "Suatu unsur radioaktif memiliki waktu paruh 10 hari. Setelah 30 hari, persentase unsur yang tersisa adalah...",
            options: ["3.125%", "6.25%", "12.5%", "25%"],
            answer: 2,
            explanation: "30 hari = 3×waktu paruh → (1/2)³ = 1/8 = 12.5%"
        }
    ]
},
    
    
    4:{
        title: "Fisika Dasar",
        questions: [
            {
                question: "Jika percepatan sentripetal adalah 4 m/s² dan jari-jari lintasan 2 m, maka kecepatan linear benda adalah...",
                options: ["2 m/s", "4 m/s", "√8 m/s", "8 m/s"],
                answer: 2,
                explanation: "a = v²/r → v = √(a×r) = √(4×2) = √8 m/s."
            },
            {
                question: "Hukum Faraday tentang induksi elektromagnetik menyatakan bahwa ggl induksi sebanding dengan...",
                options: [
                    "Kuat arus listrik",
                    "Luas penampang kumparan",
                    "Laju perubahan fluks magnet",
                    "Jumlah muatan listrik"
                ],
                answer: 2,
                explanation: "GGL ∝ perubahan fluks magnet per satuan waktu."
            },
            {
                question: "Jika energi potensial pegas adalah 18 J dan konstanta pegasnya 200 N/m, maka simpangannya adalah...",
                options: ["0.3 m", "0.6 m", "0.9 m", "1.2 m"],
                answer: 0,
                explanation: "Ep = ½kx² → x = √(2Ep/k) = √(36/200) = 0.3 m."
            },
            {
                question: "Benda jatuh bebas dari ketinggian 45 m. Kecepatan saat menyentuh tanah (abaikan resistansi udara) adalah...",
                options: ["15 m/s", "30 m/s", "20 m/s", "25 m/s"],
                answer: 1,
                explanation: "v² = 2gh → v = √(2×10×45) = √900 = 30 m/s."
            },
            {
                question: "Sebuah kawat lurus panjang dialiri arus listrik. Medan magnet di sekitar kawat berbentuk...",
                options: [
                    "Lurus menjauhi kawat",
                    "Lurus menuju kawat",
                    "Melingkar mengelilingi kawat",
                    "Tidak terbentuk medan"
                ],
                answer: 2,
                explanation: "Menurut aturan tangan kanan, medan berbentuk lingkaran mengelilingi kawat."
            },
            {
                question: "Dalam hukum Boyle, tekanan gas berbanding terbalik dengan...",
                options: ["Massa gas", "Volume", "Temperatur", "Waktu"],
                answer: 1,
                explanation: "P ∝ 1/V pada suhu tetap (hukum Boyle)."
            },
            {
                question: "Sebuah benda massa 5 kg diangkat vertikal setinggi 3 meter. Usaha yang dilakukan adalah...",
                options: ["15 J", "50 J", "150 J", "75 J"],
                answer: 2,
                explanation: "W = mgh = 5×10×3 = 150 J."
            },
            {
                question: "Sebuah bola bermassa 0,2 kg dilempar horizontal dengan kecepatan 10 m/s dari ketinggian 20 m. Waktu jatuhnya adalah...",
                options: ["2 s", "√4 s", "√2 s", "4 s"],
                answer: 1,
                explanation: "h = ½gt² → t = √(2h/g) = √(40/10) = √4 = 2 s."
            },
            {
                question: "Hukum Gauss digunakan untuk menghitung...",
                options: [
                    "Gaya gesek",
                    "Medan listrik dari distribusi muatan",
                    "Percepatan benda",
                    "Induksi magnet"
                ],
                answer: 1,
                explanation: "Hukum Gauss mempermudah perhitungan medan listrik dari distribusi simetris muatan."
            },
            {
                question: "Satuan dari fluks magnetik adalah...",
                options: ["Tesla", "Weber", "Henry", "Ampere"],
                answer: 1,
                explanation: "Fluks magnetik satuannya adalah Weber (Wb)."
            },
            {
                question: "Jika panjang gelombang adalah 0,5 m dan frekuensi 600 Hz, maka cepat rambat gelombangnya adalah...",
                options: ["300 m/s", "120 m/s", "150 m/s", "240 m/s"],
                answer: 0,
                explanation: "v = λ × f = 0.5 × 600 = 300 m/s."
            },
            {
                question: "Laju pendinginan suatu benda berbanding lurus dengan perbedaan suhu menurut hukum...",
                options: ["Stefan-Boltzmann", "Planck", "Newton", "Boyle"],
                answer: 2,
                explanation: "Hukum pendinginan Newton: dQ/dt ∝ ΔT."
            },
            {
                question: "Sebuah lensa cembung memiliki fokus 10 cm. Sebuah benda diletakkan 15 cm dari lensa. Maka bayangan akan terbentuk pada...",
                options: ["-30 cm", "+30 cm", "-6 cm", "+6 cm"],
                answer: 1,
                explanation: "1/f = 1/s + 1/s' → s' = 30 cm (positif, nyata, terbalik)."
            },
            {
                question: "Sebuah trafo step-up memiliki 100 lilitan primer dan 500 lilitan sekunder. Tegangan primer 10 V, maka tegangan sekunder adalah...",
                options: ["20 V", "50 V", "100 V", "60 V"],
                answer: 1,
                explanation: "Vs/Vp = Ns/Np → Vs = 10×(500/100) = 50 V."
            },
            {
                question: "Hambatan ekuivalen dua resistor R1 = 4Ω dan R2 = 6Ω dalam rangkaian paralel adalah...",
                options: ["10 Ω", "2.4 Ω", "5 Ω", "1.5 Ω"],
                answer: 1,
                explanation: "1/R = 1/4 + 1/6 → R = 2.4 Ω."
            },
            {
                question: "Dalam hukum Archimedes, gaya apung sama dengan...",
                options: [
                    "Berat benda",
                    "Berat zat cair yang dipindahkan",
                    "Massa benda dikali percepatan",
                    "Tekanan hidrostatik"
                ],
                answer: 1,
                explanation: "Gaya apung = berat zat cair yang dipindahkan."
            },
            {
                question: "Efek Doppler terjadi ketika...",
                options: [
                    "Sumber dan pengamat tidak bergerak",
                    "Gelombang dipantulkan",
                    "Sumber atau pengamat bergerak",
                    "Gelombang teredam"
                ],
                answer: 2,
                explanation: "Efek Doppler: perubahan frekuensi akibat gerakan relatif sumber/pengamat."
            },
            {
                question: "Hukum Coulomb menyatakan bahwa gaya listrik berbanding terbalik dengan...",
                options: ["Jarak", "Jarak²", "Muatan", "Luas penampang"],
                answer: 1,
                explanation: "F ∝ 1/r² (jarak antara muatan)."
            },
            {
                question: "Jika daya listrik adalah 60 watt dan tegangan 12 volt, maka kuat arusnya adalah...",
                options: ["5 A", "0.2 A", "2 A", "10 A"],
                answer: 2,
                explanation: "P = V×I → I = P/V = 60/12 = 5 A."
            },
            {
                question: "Sebuah benda bermassa 1 kg bergerak dengan kecepatan 20 m/s. Energi kinetiknya adalah...",
                options: ["100 J", "200 J", "400 J", "800 J"],
                answer: 1,
                explanation: "Ek = ½mv² = 0.5×1×400 = 200 J."
            }
        ]
    },


     5:
{
    title: "Matematika Expert Level",
    questions: [
        {
            question: "Jika f(x) = ∫(0 to x) e^(t²) dt, maka nilai f''(1) adalah...",
            options: ["2e", "e²", "2e²", "e"],
            answer: 0,
            explanation: "f'(x) = e^(x²), f''(x) = 2xe^(x²) → f''(1) = 2e"
        },
        {
            question: "Banyaknya solusi real dari persamaan x⁵ - 5x³ + 4x = 0 adalah...",
            options: ["1", "3", "5", "7"],
            answer: 2,
            explanation: "x(x⁴ - 5x² + 4) = 0 → x(x²-1)(x²-4) = 0 → x = -2, -1, 0, 1, 2"
        },
        {
            question: "Jika matriks A tidak singular dan A² = A, maka determinan A adalah...",
            options: ["0", "1", "-1", "Tidak dapat ditentukan"],
            answer: 1,
            explanation: "A² = A → |A²| = |A| → |A|² = |A| → |A|(|A|-1) = 0 → |A| = 1 (karena A tidak singular)"
        },
        {
            question: "Nilai dari lim (x→∞) [√(x² + x) - √(x² - x)] adalah...",
            options: ["0", "1", "1/2", "∞"],
            answer: 1,
            explanation: "Kalikan dengan [√(x²+x)+√(x²-x)]/[√(x²+x)+√(x²-x)] → didapat 2x/[√(x²+x)+√(x²-x)] → bagi x → 2/(1+1) = 1"
        },
        {
            question: "Jika z bilangan kompleks dengan |z| = 1, maka nilai maksimum dari |z³ + z + 1| adalah...",
            options: ["2", "√5", "3", "√7"],
            answer: 2,
            explanation: "Nilai maksimum terjadi saat z = 1 → |1 + 1 + 1| = 3"
        },
        {
            question: "Banyaknya bilangan asli n ≤ 1000 yang memenuhi n ≡ 3 mod 4 dan n ≡ 5 mod 7 adalah...",
            options: ["35", "36", "37", "38"],
            answer: 1,
            explanation: "n = 7k + 5 ≡ 3 mod 4 → 7k ≡ -2 ≡ 2 mod 4 → k ≡ 2 mod 4 → n = 7(4m+2)+5 = 28m + 19 → 28m + 19 ≤ 1000 → m ≤ 35.035 → 36 solusi (m=0 sampai 35)"
        },
        {
            question: "Jika P(x) polinomial derajat 4 dengan P(1) = P(2) = P(3) = P(4) = 0 dan P(5) = 120, maka P(0) = ...",
            options: ["-24", "24", "120", "-120"],
            answer: 1,
            explanation: "P(x) = a(x-1)(x-2)(x-3)(x-4) → P(5) = 24a = 120 → a = 5 → P(0) = 5×24 = 120"
        },
        {
            question: "Diketahui sistem persamaan: x + y + z = 6; x² + y² + z² = 14; x³ + y³ + z³ = 36. Nilai xyz adalah...",
            options: ["3", "6", "9", "12"],
            answer: 1,
            explanation: "Gunakan identitas x³+y³+z³ = (x+y+z)³ - 3(x+y+z)(xy+yz+zx) + 3xyz → 36 = 216 - 3(6)(xy+yz+zx) + 3xyz. Diketahui xy+yz+zx = [(x+y+z)² - (x²+y²+z²)]/2 = (36-14)/2 = 11 → 36 = 216 - 198 + 3xyz → xyz = 6"
        },
        {
            question: "Jika f(x+y) = f(x)f(y) untuk semua x,y real dan f'(0) = 2, maka f'(x) = ...",
            options: ["2f(x)", "f(x)", "e^(2x)", "2e^(2x)"],
            answer: 0,
            explanation: "Solusi umum f(x) = e^(kx) → f'(0) = k = 2 → f(x) = e^(2x) → f'(x) = 2e^(2x) = 2f(x)"
        },
        {
            question: "Nilai dari ∑(k=1 to ∞) k²/2ᵏ adalah...",
            options: ["2", "4", "6", "8"],
            answer: 2,
            explanation: "Gunakan deret ∑k²xᵏ = x(1+x)/(1-x)³ untuk |x|<1 → substitusi x=1/2 → (1/2)(3/2)/(1/8) = 6"
        },
        {
            question: "Jika A adalah matriks 3×3 dengan A³ = 0 tetapi A² ≠ 0, maka rank(A) adalah...",
            options: ["0", "1", "2", "3"],
            answer: 2,
            explanation: "Dari teorema nilpoten, rank(A) > rank(A²) > rank(A³) = 0. Karena A² ≠ 0 → rank(A²) ≥ 1 → rank(A) ≥ 2. Jika rank(A)=3 maka A invertible → A³ invertible ≠ 0. Jadi rank(A)=2"
        },
        {
            question: "Banyaknya fungsi bijektif f: {1,2,3,4} → {1,2,3,4} dengan f(1) ≠ 2 dan f(2) ≠ 3 adalah...",
            options: ["8", "11", "14", "16"],
            answer: 2,
            explanation: "Total bijeksi = 4! = 24. Kurangi yang f(1)=2 (3! = 6) dan f(2)=3 (3! = 6), tambah kembali yang f(1)=2 DAN f(2)=3 (2! = 2) → 24 - 6 - 6 + 2 = 14"
        },
        {
            question: "Jika x + 1/x = √5, maka nilai dari x¹⁰ + 1/x¹⁰ adalah...",
            options: ["123", "76", "199", "322"],
            answer: 3,
            explanation: "x² + 1/x² = (x+1/x)² - 2 = 3 → x⁴ + 1/x⁴ = (x²+1/x²)² - 2 = 7 → x⁸ + 1/x⁸ = 47 → x¹⁰ + 1/x¹⁰ = (x²+1/x²)(x⁸+1/x⁸) - (x⁶+1/x⁶) = 3×47 - 18 = 123"
        },
        {
            question: "Diketahui grup G dengan |G| = 15. Banyaknya subgrup siklik dari G adalah...",
            options: ["4", "6", "8", "15"],
            answer: 0,
            explanation: "Grup ordo 15 adalah siklik (karena 15=3×5 dengan 3 dan 5 koprima). Subgrup sikliknya adalah untuk setiap pembagi: 1,3,5,15 → total 4"
        },
        {
            question: "Jika f kontinu di [0,1] dan ∫(0 to 1) f(x) dx = 4, maka nilai lim (n→∞) ∑(k=1 to n) f(k/n)/n adalah...",
            options: ["0", "1", "4", "∞"],
            answer: 2,
            explanation: "Ini adalah definisi integral Riemann → limitnya sama dengan ∫(0 to 1) f(x) dx = 4"
        },
        {
            question: "Diketahui ruang vektor V = {p(x) ∈ ℝ[x] | deg p ≤ 2}. Dimensi dari subruang W = {p ∈ V | p(1) = 0} adalah...",
            options: ["0", "1", "2", "3"],
            answer: 2,
            explanation: "Basis untuk W adalah {x-1, x²-1} → dimensi 2"
        },
        {
            question: "Jika a dan b akar-akar x² - x - 3 = 0, maka nilai dari a⁴ + b⁴ adalah...",
            options: ["19", "25", "31", "37"],
            answer: 2,
            explanation: "a+b=1, ab=-3 → a²+b²=(a+b)²-2ab=7 → a⁴+b⁴=(a²+b²)²-2(ab)²=49-18=31"
        },
        {
            question: "Nilai dari ∫(0 to π/2) sin⁵x cos³x dx adalah...",
            options: ["1/24", "1/12", "1/6", "1/3"],
            answer: 0,
            explanation: "Gunakan substitusi u=sinx → ∫(0 to 1) u⁵(1-u²) du = [u⁶/6 - u⁸/8](0 to 1) = 1/6 - 1/8 = 1/24"
        },
        {
            question: "Jika garis singgung kurva y = x³ - 3x² + 3x di titik (a,b) mempunyai gradien minimum, maka nilai a adalah...",
            options: ["0", "1", "2", "3"],
            answer: 1,
            explanation: "y' = 3x² - 6x + 3 → y'' = 6x - 6 = 0 → x = 1 (titik minimum gradien)"
        },
        {
            question: "Diketahui barisan bilangan real (aₙ) dengan a₁ = 1 dan aₙ₊₁ = √(2 + aₙ). Nilai lim (n→∞) aₙ adalah...",
            options: ["1", "2", "√3", "√5"],
            answer: 1,
            explanation: "Misal limit = L → L = √(2 + L) → L² = 2 + L → L² - L - 2 = 0 → L = 2 (L=-1 tidak mungkin)"
        }
    ]
},
    
    
             6: {
        title: "Ilmu Sejarah",
        questions: [
            {
                question: "Bagaimana Perjanjian Tordesillas 1494 mempengaruhi perkembangan kolonialisme di Nusantara abad ke-16?",
                options: [
                    "Memicu persaingan langsung Portugis-Spanyol di Maluku",
                    "Menjadi dasar hukum Belanda menguasai Jawa",
                    "Mencegah Inggris masuk ke Asia Tenggara",
                    "Memicu Perang Paregreg di Majapahit"
                ],
                answer: 0,
                explanation: "Perjanjian ini membagi dunia non-Kristiani antara Portugis dan Spanyol, memicu konflik langsung di Maluku yang kaya rempah-rempah.",
                difficulty: "expert"
            },
            {
                question: "Apa implikasi geopolitik Perang Padri (1821-1837) terhadap kebijakan kolonial Belanda di Sumatra?",
                options: [
                    "Belanda menerapkan sistem tanam paksa kopi",
                    "Pembentukan Cultuurstelsel versi Sumatra",
                    "Pergeseran dari indirect rule ke direct rule",
                    "Pemberlakuan politik pasifikasi di Minangkabau"
                ],
                answer: 2,
                explanation: "Perang ini memaksa Belanda mengubah sistem pemerintahan tidak langsung menjadi pengawasan langsung di Sumatra Barat.",
                difficulty: "expert"
            },
            {
                question: "Mengapa konsep 'Revolusi Mental' Soekarno tahun 1957 dianggap respons terhadap kegagalan demokrasi liberal?",
                options: [
                    "Sebagai bentuk protes terhadap PBB",
                    "Untuk menandingi Gerakan Non-Blok",
                    "Upaya menciptakan manusia Indonesia baru pasca kolonial",
                    "Strategi menghadapi PRRI/Permesta"
                ],
                answer: 2,
                explanation: "Konsep ini ingin membentuk identitas nasional baru yang bebas dari mentalitas kolonial dan feodal.",
                difficulty: "expert"
            },
            {
                question: "Bagaimana pengaruh Perang Salib terhadap perkembangan kerajaan Islam di Nusantara abad 13-15?",
                options: [
                    "Mempercepat Islamisasi melalui jaringan ulama Timur Tengah",
                    "Memicu migrasi besar-besaran bangsa Arab",
                    "Menghancurkan pusat-pusat Hindu-Buddha",
                    "Mengalihkan perdagangan rempah ke jalur darat"
                ],
                answer: 0,
                explanation: "Jaringan ulama yang terusir dari Timur Tengah membawa pengaruh besar ke Nusantara melalui perdagangan.",
                difficulty: "expert"
            },
            {
                question: "Apa signifikansi politik dari Perjanjian Gianti 1755 dalam konteks pecahnya Mataram?",
                options: [
                    "Menjadi contoh pertama devide et impera Belanda",
                    "Memicu perlawanan Pangeran Diponegoro",
                    "Awal kerjasama VOC dengan suku Madura",
                    "Dasar pembentukan Karesidenan Surakarta"
                ],
                answer: 0,
                explanation: "Perjanjian ini sengaja membagi Mataram menjadi Surakarta dan Yogyakarta untuk melemahkan kekuasaan lokal.",
                difficulty: "expert"
            },
            {
                question: "Mengapa Perang Jawa (1825-1830) dianggap sebagai titik balik politik kolonial Belanda?",
                options: [
                    "Memaksa Belanda menerapkan sistem tanam paksa",
                    "Menjadi alasan pembubaran VOC",
                    "Memicu intervensi Inggris di Jawa",
                    "Awal sistem pemerintahan langsung di Hindia Belanda"
                ],
                answer: 0,
                explanation: "Biaya perang yang besar memaksa Belanda mencari sumber pendapatan baru melalui Cultuurstelsel.",
                difficulty: "expert"
            },
            {
                question: "Apa dampak utama Konferensi Meja Bundar 1949 terhadap status Irian Barat?",
                options: [
                    "Irian Barat langsung menjadi bagian NKRI",
                    "Statusnya ditunda untuk dibicarakan kemudian",
                    "Dijadikan wilayah perwalian PBB",
                    "Diserahkan kepada Amerika Serikat"
                ],
                answer: 1,
                explanation: "Masalah Irian Barat sengaja dipisahkan dan baru diselesaikan tahun 1963 melalui Pepera.",
                difficulty: "expert"
            },
            {
                question: "Bagaimana pengaruh Revolusi Bolshevik 1917 terhadap gerakan kemerdekaan Indonesia?",
                options: [
                    "Memicu pendirian Partai Komunis Indonesia",
                    "Menjadi inspirasi Sarekat Islam",
                    "Mendorong pembentukan Volksraad",
                    "Mempercepat kebangkitan nasional"
                ],
                answer: 0,
                explanation: "Revolusi ini menginspirasi tokoh-tokoh seperti Semaun dan Darsono mendirikan PKI tahun 1920.",
                difficulty: "expert"
            },
            {
                question: "Apa strategi diplomasi Hatta dalam Konferensi Inter-Indonesia 1949?",
                options: [
                    "Menggalang dukungan negara federal",
                    "Meminta bantuan senjata dari Soviet",
                    "Menjalin kerjasama dengan Australia",
                    "Memprotes kebijakan Amerika Serikat"
                ],
                answer: 0,
                explanation: "Hatta berhasil mempersatukan negara-negara federal mendukung Republik dalam KMB.",
                difficulty: "expert"
            },
            {
                question: "Mengapa Perjanjian Saragosa 1525 penting dalam sejarah kolonialisme Asia?",
                options: [
                    "Menentukan batas pengaruh Portugis-Spanyol di Pasifik",
                    "Memberi hak monopoli Inggris di India",
                    "Mengakhiri persaingan Belanda-Portugis",
                    "Dasar klaim Spanyol atas Filipina"
                ],
                answer: 0,
                explanation: "Perjanjian ini melanjutkan pembagian dunia dari Tordesillas ke wilayah Pasifik.",
                difficulty: "expert"
            },
            {
                question: "Apa implikasi Perang Aceh (1873-1904) terhadap politik etis Belanda?",
                options: [
                    "Mempercepat penerapan politik balas budi",
                    "Menjadi alasan pembentukan Volksraad",
                    "Memicu kebijakan pendidikan terbatas",
                    "Dasar pembentukan KNIL"
                ],
                answer: 0,
                explanation: "Biaya perang yang besar memaksa Belanda mencari legitimasi melalui politik etis.",
                difficulty: "expert"
            },
            {
                question: "Bagaimana pengaruh Perang Dunia I terhadap pergerakan nasional Indonesia?",
                options: [
                    "Mempercepat pendirian Volksraad",
                    "Memicu pembentukan PPPKI",
                    "Menjadi dasar politik non-kooperasi",
                    "Menguatkan gerakan buruh"
                ],
                answer: 0,
                explanation: "Belanda membentuk Volksraad sebagai bentuk 'balas budi' setelah memanfaatkan sumber daya koloni untuk perang.",
                difficulty: "expert"
            },
            {
                question: "Apa signifikansi Proklamasi Kemerdekaan 17 Agustus 1945 dalam hukum internasional?",
                options: [
                    "Pertama kali menggunakan prinsip uti possidetis juris",
                    "Contoh dekolonisasi pasca Piagam Atlantik",
                    "Pelanggaran terhadap hukum perang",
                    "Pengakuan kedaulatan de jure otomatis"
                ],
                answer: 1,
                explanation: "Proklamasi menjadi contoh pelaksanaan Piagam Atlantik 1941 tentang hak menentukan nasib sendiri.",
                difficulty: "expert"
            },
            {
                question: "Mengapa Perjanjian London 1824 penting bagi perkembangan Singapura?",
                options: [
                    "Menetapkan Singapura sebagai wilayah netral",
                    "Memisahkan pengaruh Belanda-Inggris di Selat Malaka",
                    "Menjadi dasar pendirian Straits Settlements",
                    "Memicu perang antara Johor dan Belanda"
                ],
                answer: 1,
                explanation: "Perjanjian ini memisahkan zona pengaruh dengan Belanda dapat Sumatra sementara Inggris dapat Semenanjung Malaya.",
                difficulty: "expert"
            },
            {
                question: "Apa strategi Snouck Hurgronje dalam menaklukkan Aceh?",
                options: [
                    "Politik islamisasi",
                    "Kombinasi kekuatan dan pendekatan kultural",
                    "Pendidikan barat untuk elite",
                    "Persekutuan dengan ulama lokal"
                ],
                answer: 1,
                explanation: "Snouck menerapkan strategi kombinasi kekuatan militer (kraton) dan pendekatan kultural (ulama dan masyarakat).",
                difficulty: "expert"
            },
            {
                question: "Bagaimana dampak Perang Paderi terhadap perkembangan Islam di Minangkabau?",
                options: [
                    "Memurnikan praktik Islam dari adat",
                    "Menghilangkan sistem matrilineal",
                    "Menguatkan posisi penghulu",
                    "Memperkenalkan mazhab Syafi'i"
                ],
                answer: 0,
                explanation: "Perang ini menjadi konflik antara kaum Padri yang ingin memurnikan Islam dengan kaum adat.",
                difficulty: "expert"
            },
            {
                question: "Apa implikasi politik dari Pembantaian PKI 1965-1966?",
                options: [
                    "Konsolidasi kekuasaan Orde Baru",
                    "Pembentukan Komando Gabungan",
                    "Pelaksanaan demokrasi terpimpin",
                    "Pemberlakuan keadaan perang"
                ],
                answer: 0,
                explanation: "Peristiwa ini menjadi momentum transisi dari Orde Lama ke Orde Baru di bawah Soeharto.",
                difficulty: "expert"
            },
            {
                question: "Bagaimana pengaruh Revolusi Industri terhadap kolonialisme Belanda di Indonesia?",
                options: [
                    "Memicu sistem tanam paksa",
                    "Meningkatkan permintaan rempah-rempah",
                    "Memperkenalkan mesin uap di perkebunan",
                    "Mengubah sistem transportasi kolonial"
                ],
                answer: 0,
                explanation: "Revolusi Industri meningkatkan kebutuhan bahan mentah sehingga Belanda menerapkan Cultuurstelsel.",
                difficulty: "expert"
            },
            {
                question: "Apa signifikansi sejarah dari Sumpah Amukti Palapa?",
                options: [
                    "Dasar ekspansi Majapahit ke Sumatra",
                    "Komitmen Gajah Mada menyatukan Nusantara",
                    "Pembentukan sistem pemerintahan desentralisasi",
                    "Awal keruntuhan Singhasari"
                ],
                answer: 1,
                explanation: "Sumpah ini menjadi dasar cita-cita persatuan Nusantara di bawah Majapahit.",
                difficulty: "expert"
            },
            {
                question: "Mengapa Perang Diponegoro (1825-1830) disebut sebagai perang termahal Belanda?",
                options: [
                    "Menggunakan tentara bayaran Eropa",
                    "Membutuhkan pembangunan benteng-benteng",
                    "Menghabiskan 20 juta gulden",
                    "Memicu krisis ekonomi di Belanda"
                ],
                answer: 2,
                explanation: "Biaya perang yang sangat besar ini memaksa Belanda mencari sumber pendapatan baru.",
                difficulty: "expert"
            }
                ]
            },
            
         7: 
        {
    title: "Expert Programming Questions",
    questions: [
        {
            language: "Python",
            question: "Apa output dari kode berikut?\n\nimport dis\ndef mystery(): return [x**2 for x in range(5) if x % 2 == 0]\ndis.dis(mystery)",
            options: [
                "List comprehension bytecode dengan 2 GET_ITER",
                "Bytecode dengan 1 FOR_ITER dan 1 JUMP_IF_FALSE",
                "Bytecode dengan BUILD_LIST dan LIST_APPEND",
                "SyntaxError karena format dis salah"
            ],
            answer: 2,
            explanation: "Output akan menunjukkan bytecode Python untuk list comprehension dengan BUILD_LIST dan LIST_APPEND.",
            implementation: "import dis\ndef mystery(): return [x**2 for x in range(5) if x % 2 == 0]\ndis.dis(mystery)",
            output: "2           0 BUILD_LIST             0\n             2 LOAD_FAST                0 (x)\n             4 FOR_ITER                16 (to 22)\n             6 STORE_FAST               1 (x)\n             8 LOAD_FAST                1 (x)\n            10 LOAD_CONST               1 (2)\n            12 BINARY_MODULO\n            14 POP_JUMP_IF_FALSE       20\n            16 LOAD_FAST                1 (x)\n            18 LIST_APPEND              2\n            20 JUMP_ABSOLUTE            4\n        >>   22 RETURN_VALUE"
        },
        {
            language: "C++",
            question: "Apa yang terjadi saat kompilasi kode ini?\n\ntemplate<typename T>\nconcept Addable = requires(T a, T b) { a + b; };\n\nauto add(Addable auto a, Addable auto b) { return a + b; }\n\nint main() {\n    return add(1, \"2\");\n}",
            options: [
                "Compile error karena type mismatch",
                "Runtime exception",
                "Output 3",
                "Output \"12\""
            ],
            answer: 0,
            explanation: "Kode gagal kompilasi karena string literal tidak memenuhi konsep Addable dengan integer.",
            implementation: "#include <concepts>\n\ntemplate<typename T>\nconcept Addable = requires(T a, T b) { a + b; };\n\nauto add(Addable auto a, Addable auto b) { return a + b; }\n\nint main() {\n    return add(1, \"2\");\n}",
            output: "error: no matching function for call to 'add(int, const char*)'"
        },
        {
            language: "Java",
            question: "Apa output dari kode berikut?\n\npublic class Main {\n    public static void main(String[] args) {\n        var x = List.of(1, 2, 3);\n        x.stream()\n         .map(i -> i * 2)\n         .filter(i -> i > 3)\n         .forEach(System.out::print);\n    }\n}",
            options: [
                "246",
                "46",
                "Compile error",
                "Runtime exception"
            ],
            answer: 1,
            explanation: "Stream akan mengalikan setiap elemen dengan 2 (menjadi [2,4,6]) lalu menyaring yang >3 (menjadi [4,6]).",
            implementation: "import java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        var x = List.of(1, 2, 3);\n        x.stream()\n         .map(i -> i * 2)\n         .filter(i -> i > 3)\n         .forEach(System.out::print);\n    }\n}",
            output: "46"
        },
        {
            language: "Assembly (x86-64)",
            question: "Apa yang dilakukan instruksi ini?\n\nmov rax, [rdi]\nlock cmpxchg [rsi], rbx\njne .retry",
            options: [
                "Atomic compare-and-swap",
                "Memory copy dengan locking",
                "Conditional jump sederhana",
                "Arithmetic operation"
            ],
            answer: 0,
            explanation: "Ini adalah implementasi atomic compare-and-swap (CAS) yang digunakan dalam operasi thread-safe.",
            implementation: "section .text\nglobal atomic_swap\n\natomic_swap:\n    mov rax, [rdi]\n.retry:\n    lock cmpxchg [rsi], rbx\n    jne .retry\n    ret",
            output: "N/A (Atomic operation)"
        },
        {
            language: "Rust",
            question: "Apa output dari kode ini?\n\nfn main() {\n    let s = \"hello\".to_string();\n    let closure = || drop(s);\n    closure();\n    println!(\"{}\", s);\n}",
            options: [
                "hello",
                "Compile error",
                "Runtime panic",
                "Nothing"
            ],
            answer: 1,
            explanation: "Kode gagal kompilasi karena s dipindahkan ke closure dan di-drop, sehingga tidak bisa digunakan lagi.",
            implementation: "fn main() {\n    let s = \"hello\".to_string();\n    let closure = || drop(s);\n    closure();\n    println!(\"{}\", s);\n}",
            output: "error[E0382]: borrow of moved value: `s`"
        },
        {
            language: "JavaScript",
            question: "Apa output dari kode berikut?\n\nconst obj = {\n    a: 1,\n    get b() { return this.a++; },\n    set b(val) { this.a = val / 2; }\n};\n\nconsole.log(obj.b, obj.b, obj.a);",
            options: [
                "1 2 3",
                "1 1 1",
                "1 2 2",
                "2 3 4"
            ],
            answer: 0,
            explanation: "Getter b mengembalikan this.a dan melakukan post-increment, sehingga setiap pemanggilan getter meningkatkan nilai a.",
            implementation: "const obj = {\n    a: 1,\n    get b() { return this.a++; },\n    set b(val) { this.a = val / 2; }\n};\n\nconsole.log(obj.b, obj.b, obj.a);",
            output: "1 2 3"
        },
        {
            language: "Go",
            question: "Apa yang terjadi saat menjalankan kode ini?\n\npackage main\n\nfunc main() {\n    var ch chan int\n    go func() { ch <- 1 }()\n    <-ch\n}",
            options: [
                "Mencetak 1",
                "Deadlock",
                "Race condition",
                "Berjalan normal"
            ],
            answer: 1,
            explanation: "Channel ch adalah nil dan tidak diinisialisasi, menyebabkan goroutine dan main thread saling menunggu selamanya.",
            implementation: "package main\n\nfunc main() {\n    var ch chan int\n    go func() { ch <- 1 }()\n    <-ch\n}",
            output: "fatal error: all goroutines are asleep - deadlock!"
        },
        {
            language: "Kotlin",
            question: "Apa output dari kode berikut?\n\nfun main() {\n    val x = sequence {\n        yield(1)\n        yieldAll(listOf(2, 3))\n    }\n    println(x.drop(1).first())",
            options: [
                "1",
                "2",
                "3",
                "Exception"
            ],
            answer: 1,
            explanation: "Sequence bersifat lazy, drop(1) akan melewatkan yield pertama dan first() mengambil elemen pertama setelah drop (yaitu 2).",
            implementation: "fun main() {\n    val x = sequence {\n        yield(1)\n        yieldAll(listOf(2, 3))\n    }\n    println(x.drop(1).first())\n}",
            output: "2"
        },
        {
            language: "Swift",
            question: "Apa output dari kode ini?\n\nprotocol P {\n    associatedtype T\n    func foo() -> T\n}\n\nextension P where T == Int {\n    func foo() -> Int { return 42 }\n}\n\nstruct S: P {}\n\nprint(S().foo())",
            options: [
                "42",
                "Compile error",
                "Runtime error",
                "0"
            ],
            answer: 1,
            explanation: "S tidak menentukan concrete type untuk T, sehingga tidak bisa menggunakan default implementation.",
            implementation: "protocol P {\n    associatedtype T\n    func foo() -> T\n}\n\nextension P where T == Int {\n    func foo() -> Int { return 42 }\n}\n\nstruct S: P {}\n\nprint(S().foo())",
            output: "error: type 'S' does not conform to protocol 'P'"
        },
        {
            language: "C",
            question: "Apa output dari kode ini?\n\n#include <stdio.h>\n\n#define SQUARE(x) x * x\n\nint main() {\n    printf(\"%d\", SQUARE(1 + 2));\n    return 0;\n}",
            options: [
                "9",
                "5",
                "1",
                "Compile error"
            ],
            answer: 1,
            explanation: "Makro SQUARE mengalami masalah operator precedence, sehingga 1 + 2 * 1 + 2 = 5 bukan (1+2)*(1+2)=9.",
            implementation: "#include <stdio.h>\n\n#define SQUARE(x) x * x\n\nint main() {\n    printf(\"%d\", SQUARE(1 + 2));\n    return 0;\n}",
            output: "5"
        },
        {
            language: "Haskell",
            question: "Apa output dari kode ini?\n\nimport Control.Monad.State\n\nfib :: Int -> State Int Int\nfib 0 = get\nfib n = modify (+1) >> fib (n-1)\n\nmain = print $ execState (fib 5) 0",
            options: [
                "0",
                "5",
                "8",
                "Runtime error"
            ],
            answer: 1,
            explanation: "Kode menghitung 'state + 1' sebanyak n kali (bukan Fibonacci sebenarnya).",
            implementation: "import Control.Monad.State\n\nfib :: Int -> State Int Int\nfib 0 = get\nfib n = modify (+1) >> fib (n-1)\n\nmain = print $ execState (fib 5) 0",
            output: "5"
        },
        {
            language: "PowerShell",
            question: "Apa output dari script ini?\n\nfunction Test {\n    [CmdletBinding()]\n    param([Parameter(ValueFromPipeline)]$InputObject)\n    process { $_ * 2 }\n}\n\n1..3 | Test | % { $_ + 1 }",
            options: [
                "2, 3, 4",
                "3, 5, 7",
                "1, 2, 3",
                "2, 4, 6"
            ],
            answer: 1,
            explanation: "Pipeline mengalikan setiap input dengan 2 (2,4,6) lalu menambah 1 (3,5,7).",
            implementation: "function Test {\n    [CmdletBinding()]\n    param([Parameter(ValueFromPipeline)]$InputObject)\n    process { $_ * 2 }\n}\n\n1..3 | Test | % { $_ + 1 }",
            output: "3\n5\n7"
        },
        {
            language: "Shell (Bash)",
            question: "Apa yang dilakukan command ini?\n\nfind . -type f -print0 | xargs -0 -P $(nproc) -I {} sh -c 'gzip -k \"{}\"' _",
            options: [
                "Gzip semua file secara paralel",
                "Gzip file terakhir saja",
                "Hitung jumlah file",
                "Gzip file secara sequential"
            ],
            answer: 0,
            explanation: "Command menemukan semua file dan mengompresnya secara paralel (satu proses per core CPU).",
            implementation: "find . -type f -print0 | xargs -0 -P $(nproc) -I {} sh -c 'gzip -k \"{}\"' _",
            output: "(Multiple gzip processes running in parallel)"
        },
        {
            language: "TypeScript",
            question: "Apa output dari kode ini?\n\ntype DeepReadonly<T> = {\n    readonly [P in keyof T]: DeepReadonly<T[P]>;\n};\n\nconst obj = { a: 1, b: { c: 2 } } as const;\nconst x: DeepReadonly<typeof obj> = obj;\nx.b.c = 3;",
            options: [
                "Runtime error",
                "Compile error",
                "3",
                "2"
            ],
            answer: 1,
            explanation: "DeepReadonly membuat semua nested properties readonly, sehingga assignment gagal saat kompilasi.",
            implementation: "type DeepReadonly<T> = {\n    readonly [P in keyof T]: DeepReadonly<T[P]>;\n};\n\nconst obj = { a: 1, b: { c: 2 } } as const;\nconst x: DeepReadonly<typeof obj> = obj;\nx.b.c = 3;",
            output: "error: Cannot assign to 'c' because it is a read-only property."
        },
        {
            language: "Dart",
            question: "Apa output dari kode ini?\n\nvoid main() async {\n    print('1');\n    Future(() => print('2'));\n    Future.microtask(() => print('3'));\n    print('4');\n}",
            options: [
                "1 4 3 2",
                "1 2 3 4",
                "1 3 4 2",
                "1 4 2 3"
            ],
            answer: 0,
            explanation: "Microtask dijalankan sebelum event loop, sedangkan future normal di akhir.",
            implementation: "void main() async {\n    print('1');\n    Future(() => print('2'));\n    Future.microtask(() => print('3'));\n    print('4');\n}",
            output: "1\n4\n3\n2"
        },
        {
            language: "Elixir",
            question: "Apa output dari kode ini?\n\ndefmodule Test do\n    def run do\n        self() |> inspect |> IO.puts\n        spawn(fn -> IO.puts inspect(self()) end)\n    end\nend\n\nTest.run",
            options: [
                "PID sama dua kali",
                "Dua PID berbeda",
                "Runtime error",
                "Tidak ada output"
            ],
            answer: 1,
            explanation: "Process utama dan spawned process memiliki PID yang berbeda.",
            implementation: "defmodule Test do\n    def run do\n        self() |> inspect |> IO.puts\n        spawn(fn -> IO.puts inspect(self()) end)\n    end\nend\n\nTest.run",
            output: "#PID<0.123.0>\n#PID<0.124.0>"
        },
        {
            language: "Scala",
            question: "Apa output dari kode ini?\n\nobject Main extends App {\n    implicit val x: Int = 1\n    def f(implicit y: Int) = y + 1\n    println(f)\n}",
            options: [
                "1",
                "2",
                "Compile error",
                "Runtime error"
            ],
            answer: 1,
            explanation: "Fungsi f mengambil implicit value 1 dan menambahkannya dengan 1.",
            implementation: "object Main extends App {\n    implicit val x: Int = 1\n    def f(implicit y: Int) = y + 1\n    println(f)\n}",
            output: "2"
        },
        {
            language: "Zig",
            question: "Apa output dari kode ini?\n\nconst std = @import(\"std\");\n\npub fn main() void {\n    const x: u8 = 255;\n    std.debug.print(\"{}\", .{x + 1});\n}",
            options: [
                "256",
                "0",
                "Runtime panic",
                "Compile error"
            ],
            answer: 2,
            explanation: "Zig melakukan overflow checking di debug mode, sehingga 255+1 pada u8 menyebabkan panic.",
            implementation: "const std = @import(\"std\");\n\npub fn main() void {\n    const x: u8 = 255;\n    std.debug.print(\"{}\", .{x + 1});\n}",
            output: "panic: integer overflow"
        },
        {
            language: "Clojure",
            question: "Apa output dari kode ini?\n\n(defn f [x]\n    (lazy-seq\n        (cons x (f (inc x)))))\n\n(println (take 3 (f 1)))",
            options: [
                "(1 2 3)",
                "Infinite loop",
                "Runtime error",
                "(1 1 1)"
            ],
            answer: 0,
            explanation: "Kode membuat lazy sequence tak terbatas yang dimulai dari 1, dan take 3 mengambil 3 elemen pertama.",
            implementation: "(defn f [x]\n    (lazy-seq\n        (cons x (f (inc x)))))\n\n(println (take 3 (f 1)))",
            output: "(1 2 3)"
        },
        {
            language: "Rust",
            question: "Apa output dari kode ini?\n\nuse std::sync::Arc;\nuse std::thread;\n\nfn main() {\n    let data = Arc::new(vec![1, 2, 3]);\n    let handles = (0..3).map(|i| {\n        let data = Arc::clone(&data);\n        thread::spawn(move || data[i])\n    });\n    \n    for h in handles {\n        println!(\"{}\", h.join().unwrap());\n    }\n}",
            options: [
                "1 2 3 dalam urutan acak",
                "Compile error",
                "Runtime panic",
                "1 1 1"
            ],
            answer: 0,
            explanation: "Setiap thread mengakses elemen berbeda dari Arc<Vec>, tetapi urutan eksekusi thread tidak ditentukan.",
            implementation: "use std::sync::Arc;\nuse std::thread;\n\nfn main() {\n    let data = Arc::new(vec![1, 2, 3]);\n    let handles = (0..3).map(|i| {\n        let data = Arc::clone(&data);\n        thread::spawn(move || data[i])\n    });\n    \n    for h in handles {\n        println!(\"{}\", h.join().unwrap());\n    }\n}",
            output: "1\n2\n3\n(urutan bisa bervariasi)"
        }
    ]
}   
            
            
        };


let currentQuiz = null;
let currentQuestionIndex = 0;
let selectedOption = null;
let score = { correct: 0, wrong: 0 };

// Timer
let timer = null;
let seconds = 0;

function startTimer() {
    stopTimer(); // Hentikan timer sebelumnya jika ada
    seconds = 0;
    updateTimerDisplay();
    timer = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const timerElement = document.getElementById('quiz-timer');
    if (timerElement) {
        timerElement.textContent =
            `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuiz(quizId) {
    document.getElementById('courses').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';

    currentQuiz = JSON.parse(JSON.stringify(quizzes[quizId]));
    shuffleArray(currentQuiz.questions);

    currentQuestionIndex = 0;
    score = { correct: 0, wrong: 0 };

    document.getElementById('quiz-title').textContent = currentQuiz.title;
    loadQuestion();
    updateProgress();
    startTimer(); // ⏱ Mulai timer saat kuis mulai
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuiz.questions.length) {
        finishQuiz();
        return;
    }

    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const quizContent = document.getElementById('quiz-content');

    quizContent.innerHTML = `
        <div class="quiz-question">${currentQuestionIndex + 1}. ${currentQuestion.question}</div>
        <div class="quiz-options" id="quiz-options">
            ${currentQuestion.options.map((option, index) => `
                <div class="quiz-option" onclick="selectOption(${index})">
                    <input type="radio" name="quiz-option" value="${index}">
                    <label>${option}</label>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('feedback').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'block';
    selectedOption = null;
}

function checkAnswer() {
    if (selectedOption === null) {
        alert('Silakan pilih jawaban terlebih dahulu!');
        return;
    }

    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');

    if (selectedOption === currentQuestion.answer) {
        score.correct++;
        feedback.className = 'feedback correct';
        feedback.innerHTML = `
            <i class="fas fa-check-circle"></i> <strong>Jawaban Anda Benar!</strong>
            <div class="explanation">${currentQuestion.explanation}</div>
        `;
    } else {
        score.wrong++;
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `
            <i class="fas fa-times-circle"></i> <strong>Jawaban Anda Salah.</strong>
            <div>Jawaban yang benar: <strong>${currentQuestion.options[currentQuestion.answer]}</strong></div>
            <div class="explanation">${currentQuestion.explanation}</div>
        `;
    }

    feedback.style.display = 'block';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
    updateProgress();
}

function backToCourses() {
    document.getElementById('courses').style.display = 'block';
    document.getElementById('quiz-section').style.display = 'none';
    stopTimer();
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
}

function selectOption(index) {
    selectedOption = index;
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        const input = opt.querySelector('input[type="radio"]');
        if (i === index) {
            opt.style.backgroundColor = 'rgba(100, 255, 218, 0.2)';
            opt.style.borderColor = 'var(--accent-color)';
            input.checked = true;
        } else {
            opt.style.backgroundColor = 'var(--primary-light)';
            opt.style.borderColor = 'transparent';
            input.checked = false;
        }
    });
}

function finishQuiz() {
    stopTimer();
    
    // Reset tampilan pertanyaan terakhir
    document.getElementById('quiz-content').innerHTML = '';
    document.getElementById('feedback').style.display = 'none';
    
    const percentage = Math.round((score.correct / currentQuiz.questions.length) * 100);
    const resultClass = percentage >= 80 ? 'excellent' : percentage >= 60 ? 'good' : 'poor';

    // Tampilkan hanya hasil akhir tanpa pertanyaan terakhir
    document.getElementById('quiz-content').innerHTML = `
        <div class="quiz-result ${resultClass}">
            <h3>Quiz Selesai!</h3>
            <div class="score-display">
                <div class="score-circle">
                    <span>${percentage}%</span>
                </div>
                <div class="score-details">
                    <p>Total Pertanyaan: <strong>${currentQuiz.questions.length}</strong></p>
                    <p>Waktu Pengerjaan: <strong>${document.getElementById('quiz-timer').textContent}</strong></p>
                    <p>Skor Akhir: <strong>${percentage}%</strong></p>
                </div>
            </div>
            <button class="btn btn-primary" onclick="backToCourses()">
                <i class="fas fa-home"></i> Kembali ke Daftar Kursus
            </button>
        </div>
    `;

    // Sembunyikan tombol navigasi
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
}
