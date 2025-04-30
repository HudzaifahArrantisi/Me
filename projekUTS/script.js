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
    
    2:{
        title: "Bahasa Inggris (Sulit)",
        questions: [
            {
                question: "Which sentence uses the subjunctive mood correctly?",
                options: [
                    "If I was you, I would go.",
                    "I wish I was taller.",
                    "It is essential that he be present.",
                    "She was here as if she is the manager."
                ],
                answer: 2,
                explanation: "In formal English, the subjunctive 'be' is used after 'It is essential that...'"
            },
            {
                question: "Identify the correct usage of 'whom' in a sentence.",
                options: [
                    "Whom is going to the party?",
                    "To whom did you give the book?",
                    "Whom you said was coming?",
                    "Whom do you think will win?"
                ],
                answer: 1,
                explanation: "'To whom' is correct as it is the object of the verb 'give'."
            },
            {
                question: "Which sentence contains a dangling modifier?",
                options: [
                    "Driving down the street, the house came into view.",
                    "While he was driving, he saw a deer.",
                    "After studying, I took a nap.",
                    "The boy, running fast, won the race."
                ],
                answer: 0,
                explanation: "The modifier 'Driving down the street' incorrectly refers to 'the house'."
            },
            {
                question: "What is the correct form of the verb in the conditional sentence: 'Had I known, I ____ helped you.'?",
                options: ["will have", "would", "would have", "had"],
                answer: 2,
                explanation: "This is a third conditional structure → 'would have + past participle'"
            },
            {
                question: "Which word is the best replacement for 'ubiquitous'?",
                options: ["Rare", "Unusual", "Omnipresent", "Singular"],
                answer: 2,
                explanation: "'Ubiquitous' means present everywhere → synonym: omnipresent"
            },
            {
                question: "Choose the sentence with correct parallel structure.",
                options: [
                    "She likes dancing, to swim, and biking.",
                    "He enjoys reading, writing, and to paint.",
                    "They went hiking, swimming, and cycling.",
                    "I love to cook, gardening, and painting."
                ],
                answer: 2,
                explanation: "All elements use gerund form: hiking, swimming, cycling."
            },
            {
                question: "Which sentence uses a correct idiom?",
                options: [
                    "He kicked the bucket and went to the market.",
                    "Let’s call it a day and sleep forever.",
                    "She spilled the beans about the surprise party.",
                    "He let the cat out and it was a disaster."
                ],
                answer: 2,
                explanation: "'Spill the beans' is the correct idiom meaning to reveal a secret."
            },
            {
                question: "Which is a complex sentence?",
                options: [
                    "She went home, and he stayed.",
                    "After the show ended, we went to eat.",
                    "He ran fast and won.",
                    "Close the door."
                ],
                answer: 1,
                explanation: "A complex sentence contains one independent clause and one dependent clause."
            },
            {
                question: "Which sentence has correct subject-verb agreement?",
                options: [
                    "The list of items are on the desk.",
                    "Neither of the answers make sense.",
                    "Each of the books is new.",
                    "The team have won the match."
                ],
                answer: 2,
                explanation: "'Each' is singular → verb 'is'"
            },
            {
                question: "Choose the correct usage of a phrasal verb.",
                options: [
                    "She broke up the glass.",
                    "He looked the word up in the dictionary.",
                    "They ran into trouble and hid it.",
                    "I got over the stairs quickly."
                ],
                answer: 1,
                explanation: "'Look up' (a word) is the correct separable phrasal verb."
            },
            {
                question: "Which word has the correct stress in pronunciation for a noun?",
                options: ["record", "permit", "present", "desert"],
                answer: 2,
                explanation: "As a noun, 'present' is stressed on the first syllable."
            },
            {
                question: "What is the meaning of 'ephemeral'?",
                options: ["Eternal", "Short-lived", "Horrible", "Confusing"],
                answer: 1,
                explanation: "'Ephemeral' means lasting a very short time."
            },
            {
                question: "Which sentence correctly uses a reduced relative clause?",
                options: [
                    "The man who is talking is my father.",
                    "The man talking is my father.",
                    "The man is talking is my father.",
                    "The talking man who is is my father."
                ],
                answer: 1,
                explanation: "Reduced clause: 'who is talking' → 'talking'"
            },
            {
                question: "Choose the grammatically correct sentence:",
                options: [
                    "Being a doctor, the salary is good.",
                    "While sleeping, the phone rang.",
                    "Working late, she missed the train.",
                    "To being happy, you must relax."
                ],
                answer: 2,
                explanation: "Correct structure: 'Working late, she missed the train.'"
            },
            {
                question: "Which sentence contains an appositive phrase?",
                options: [
                    "My friend, a doctor, lives in New York.",
                    "He ran quickly across the field.",
                    "They are building a new mall.",
                    "She is tired because of work."
                ],
                answer: 0,
                explanation: "Appositive: 'a doctor' renames 'my friend'."
            },
            {
                question: "Which sentence is punctuated correctly?",
                options: [
                    "However she was late, she got the job.",
                    "She was late however, she got the job.",
                    "She was late; however, she got the job.",
                    "She was late however she got the job."
                ],
                answer: 2,
                explanation: "Correct punctuation uses semicolon before and comma after 'however'"
            },
            {
                question: "Which is a cleft sentence?",
                options: [
                    "She passed the exam easily.",
                    "It was John who solved the problem.",
                    "John solved the problem quickly.",
                    "He really worked hard."
                ],
                answer: 1,
                explanation: "Cleft sentence for emphasis: 'It was John who...'"
            },
            {
                question: "Which sentence contains a mixed conditional?",
                options: [
                    "If I had studied, I would pass.",
                    "If I study, I will pass.",
                    "If I had studied, I would be rich now.",
                    "If I studied, I would have passed."
                ],
                answer: 2,
                explanation: "Mixed conditional = past condition, present result"
            },
            {
                question: "Which sentence correctly uses inversion?",
                options: [
                    "Never I have seen such beauty.",
                    "Rarely have I seen such beauty.",
                    "Hardly I could believe it.",
                    "Only then I understood."
                ],
                answer: 1,
                explanation: "Inversion: 'Rarely have I...'"
            },
            {
                question: "Which sentence demonstrates correct use of a gerund?",
                options: [
                    "He enjoyed to swim.",
                    "Swimming is her favorite activity.",
                    "She avoids to talk in public.",
                    "To reading is important."
                ],
                answer: 1,
                explanation: "'Swimming' is a gerund used as subject of the sentence."
            }
        ]
    },
    
    
    3: {
        title: "Kimia Dasar (Sulit)",
        questions: [
            {
                question: "Bilangan kuantum utama (n) menentukan...",
                options: ["Bentuk orbital", "Energi dan ukuran orbital", "Orientasi orbital", "Spin elektron"],
                answer: 1,
                explanation: "Bilangan kuantum utama (n) menentukan tingkat energi dan ukuran orbital."
            },
            {
                question: "Konfigurasi elektron dari ion Fe³⁺ adalah...",
                options: ["[Ar] 3d⁶", "[Ar] 3d⁵", "[Ar] 4s² 3d⁶", "[Ar] 4s¹ 3d⁶"],
                answer: 1,
                explanation: "Fe = [Ar] 4s² 3d⁶ → Fe³⁺ kehilangan 3 elektron: [Ar] 3d⁵."
            },
            {
                question: "Larutan penyangga adalah...",
                options: [
                    "Larutan yang dapat mengubah pH drastis",
                    "Larutan yang mempertahankan pH meski ditambah asam/basa",
                    "Larutan garam netral",
                    "Larutan dengan pH = 7"
                ],
                answer: 1,
                explanation: "Larutan penyangga mempertahankan pH terhadap penambahan asam atau basa."
            },
            {
                question: "Reaksi redoks selalu melibatkan...",
                options: ["Perubahan warna", "Perubahan suhu", "Transfer elektron", "Pelepasan gas"],
                answer: 2,
                explanation: "Redoks = reduksi + oksidasi → terjadi perpindahan elektron."
            },
            {
                question: "Dalam ikatan kovalen koordinasi, pasangan elektron berasal dari...",
                options: ["Kedua atom", "Atom yang lebih elektronegatif", "Satu atom saja", "Ion negatif"],
                answer: 2,
                explanation: "Ikatan kovalen koordinasi: elektron berasal dari satu atom donor."
            },
            {
                question: "Rumus empirik senyawa dengan 40% C, 6.7% H, dan 53.3% O adalah...",
                options: ["CH₂O", "C₂H₄O₂", "C₃H₆O₃", "CHO"],
                answer: 0,
                explanation: "Dihitung dari perbandingan mol → CH₂O."
            },
            {
                question: "Entalpi pembentukan standar (ΔHf°) dari unsur dalam bentuk paling stabil adalah...",
                options: ["0 kJ/mol", "1 kJ/mol", "-1 kJ/mol", "Tergantung suhu"],
                answer: 0,
                explanation: "ΔHf° unsur standar = 0 kJ/mol secara konvensi."
            },
            {
                question: "Hukum Hess menyatakan bahwa...",
                options: [
                    "Jumlah massa pereaksi = produk",
                    "Entropi sistem selalu meningkat",
                    "Energi total reaksi independen terhadap jalur reaksi",
                    "Tekanan dan volume berbanding lurus"
                ],
                answer: 2,
                explanation: "Hukum Hess → perubahan entalpi total tidak tergantung jalur reaksi."
            },
            {
                question: "Zat yang dapat berperan sebagai asam dan basa disebut...",
                options: ["Asam kuat", "Basa kuat", "Amfoter", "Katalis"],
                answer: 2,
                explanation: "Zat amfoter bisa bertindak sebagai asam maupun basa (contoh: H₂O, Al(OH)₃)."
            },
            {
                question: "Pada keadaan standar, 1 mol gas ideal menempati volume sebesar...",
                options: ["22,4 L", "24,5 L", "1 L", "12 L"],
                answer: 0,
                explanation: "1 mol gas ideal pada STP (0°C, 1 atm) = 22,4 liter."
            },
            {
                question: "Jenis ikatan dalam senyawa NaCl adalah...",
                options: ["Kovalen polar", "Kovalen nonpolar", "Ionik", "Logam"],
                answer: 2,
                explanation: "NaCl → logam + nonlogam → ikatan ionik (elektron dipindahkan)."
            },
            {
                question: "Hukum Avogadro menyatakan bahwa...",
                options: [
                    "Volume gas sebanding dengan tekanannya",
                    "Volume gas sebanding dengan jumlah molnya",
                    "Volume gas berbanding terbalik dengan temperaturnya",
                    "Semua zat padat memiliki massa jenis sama"
                ],
                answer: 1,
                explanation: "Volume gas sebanding dengan jumlah mol jika P dan T konstan."
            },
            {
                question: "Jumlah ikatan sigma (σ) dalam etena (C₂H₄) adalah...",
                options: ["2", "4", "5", "6"],
                answer: 2,
                explanation: "C=C memiliki 1 ikatan sigma + 1 pi, total σ = 5."
            },
            {
                question: "Jika Kc ≫ 1, maka arah reaksi cenderung ke...",
                options: ["Kiri", "Kanan", "Tetap", "Bergantung suhu"],
                answer: 1,
                explanation: "Kc besar → produk dominan → reaksi ke kanan."
            },
            {
                question: "Zat yang mengalami penurunan bilangan oksidasi disebut...",
                options: ["Oksidator", "Reduktor", "Teroksidasi", "Tereduksi"],
                answer: 3,
                explanation: "Reduksi = penurunan bilangan oksidasi."
            },
            {
                question: "Semakin kecil jari-jari atom dalam satu periode, maka...",
                options: ["Afinitas elektron berkurang", "Energi ionisasi meningkat", "Reaktivitas bertambah", "Elektronegativitas turun"],
                answer: 1,
                explanation: "Kecilnya jari-jari → elektron lebih sulit dilepas → energi ionisasi meningkat."
            },
            {
                question: "Orbital 3p dapat menampung maksimum berapa elektron?",
                options: ["2", "4", "6", "10"],
                answer: 2,
                explanation: "Subkulit p memiliki 3 orbital → maksimal 6 elektron."
            },
            {
                question: "Larutan yang bersifat elektrolit kuat akan...",
                options: [
                    "Tidak menghantarkan listrik",
                    "Menghantarkan listrik sangat baik",
                    "Hanya sebagian terionisasi",
                    "Tidak terionisasi"
                ],
                answer: 1,
                explanation: "Elektrolit kuat → terionisasi sempurna → hantar listrik baik."
            },
            {
                question: "Fungsi katalis dalam reaksi kimia adalah...",
                options: ["Mengubah ΔH reaksi", "Meningkatkan hasil produk", "Menurunkan energi aktivasi", "Menstabilkan produk"],
                answer: 2,
                explanation: "Katalis menurunkan energi aktivasi, mempercepat reaksi."
            },
            {
                question: "pKa kecil menunjukkan...",
                options: ["Asam lemah", "Basa kuat", "Asam kuat", "Basa lemah"],
                answer: 2,
                explanation: "Semakin kecil pKa, semakin kuat asamnya (berbanding terbalik dengan Ka)."
            }
        ]
    },
    
    
    4:{
        title: "Fisika Dasar (Sulit)",
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
        title: "Penalaran Matematika (Sulit)",
        questions: [
            {
                question: "Jika f(x) = 3x² - 2x + 1 dan g(x) = x - 4, maka nilai f(g(2)) adalah...",
                options: ["21", "13", "7", "1"],
                answer: 2,
                explanation: "g(2) = -2, f(-2) = 3(-2)² - 2(-2) + 1 = 12 + 4 + 1 = 17."
            },
            {
                question: "Diketahui himpunan A = {x | x bilangan bulat, -3 < x ≤ 4}. Banyaknya anggota himpunan A adalah...",
                options: ["6", "7", "8", "9"],
                answer: 1,
                explanation: "Anggota A = {-2, -1, 0, 1, 2, 3, 4} → 7 anggota."
            },
            {
                question: "Jika x dan y memenuhi sistem persamaan: x + y = 7 dan x² + y² = 37, maka nilai xy adalah...",
                options: ["6", "12", "7", "11"],
                answer: 0,
                explanation: "(x + y)² = x² + y² + 2xy → 49 = 37 + 2xy → 2xy = 12 → xy = 6."
            },
            {
                question: "Diketahui barisan aritmetika dengan suku ke-3 adalah 10 dan suku ke-7 adalah 22. Suku pertama barisan tersebut adalah...",
                options: ["2", "4", "6", "8"],
                answer: 1,
                explanation: "U₃ = a + 2d = 10, U₇ = a + 6d = 22 → eliminasi → d = 3, a = 4."
            },
            {
                question: "Hasil dari lim (x→2) [(x² - 4)/(x - 2)] adalah...",
                options: ["2", "4", "∞", "Tidak terdefinisi"],
                answer: 1,
                explanation: "(x² - 4) = (x - 2)(x + 2) → limit = x + 2 = 4."
            },
            {
                question: "Jika matriks A = [[2, 1], [3, 4]], maka determinan dari A adalah...",
                options: ["5", "10", "11", "8"],
                answer: 0,
                explanation: "det(A) = 2×4 - 1×3 = 8 - 3 = 5."
            },
            {
                question: "Nilai maksimum dari fungsi f(x) = -x² + 4x + 5 adalah...",
                options: ["5", "9", "11", "12"],
                answer: 2,
                explanation: "puncak = -b/2a = -4/-2 = 2 → f(2) = -4 + 8 + 5 = 9."
            },
            {
                question: "Jika log(x) + log(x - 3) = 1, maka nilai x adalah...",
                options: ["1", "3", "4", "5"],
                answer: 3,
                explanation: "log(x(x - 3)) = 1 → x² - 3x = 10 → x = 5 (akar positif)."
            },
            {
                question: "Sebuah kotak berisi 4 bola merah dan 6 bola biru. Dua bola diambil tanpa pengembalian. Peluang terambil dua bola berlainan warna adalah...",
                options: ["1/3", "4/15", "12/45", "12/30"],
                answer: 0,
                explanation: "P = (4/10)(6/9) + (6/10)(4/9) = 48/90 = 8/15."
            },
            {
                question: "Jika 5^(x+1) = 125, maka x adalah...",
                options: ["2", "3", "1", "0"],
                answer: 0,
                explanation: "125 = 5³ → x + 1 = 3 → x = 2."
            },
            {
                question: "Persamaan kuadrat dengan akar-akar 3 dan -2 adalah...",
                options: ["x² - x - 6 = 0", "x² + x - 6 = 0", "x² - x + 6 = 0", "x² + x + 6 = 0"],
                answer: 1,
                explanation: "x² - (3 - 2)x + (3)(-2) = x² + x - 6."
            },
            {
                question: "Rata-rata dari 5 bilangan adalah 12. Jika satu bilangan ditambahkan, rata-rata menjadi 13. Bilangan yang ditambahkan adalah...",
                options: ["17", "18", "19", "20"],
                answer: 2,
                explanation: "Total awal: 5×12 = 60, total baru: 6×13 = 78 → bilangan tambahan = 18."
            },
            {
                question: "Jika vektor a = (2, 3) dan b = (-1, 4), maka hasil dari a · b adalah...",
                options: ["10", "12", "6", "14"],
                answer: 0,
                explanation: "a·b = 2×(-1) + 3×4 = -2 + 12 = 10."
            },
            {
                question: "Jika P(x) = x² - 5x + 6, maka akar-akar dari P(x) adalah...",
                options: ["2 dan 3", "3 dan 5", "1 dan 6", "2 dan 6"],
                answer: 0,
                explanation: "P(x) = (x - 2)(x - 3)."
            },
            {
                question: "Diketahui a dan b bilangan real. Jika (a + bi)(a - bi) = 13 dan b = 2, maka a adalah...",
                options: ["√9", "√5", "3", "2"],
                answer: 2,
                explanation: "(a² + b²) = 13, b = 2 → a² + 4 = 13 → a = √9 = 3."
            },
            {
                question: "Suatu deret geometri memiliki suku pertama 2 dan rasio 3. Jumlah 4 suku pertamanya adalah...",
                options: ["80", "98", "100", "242"],
                answer: 0,
                explanation: "S₄ = 2(1 - 3⁴)/(1 - 3) = 2(1 - 81)/(-2) = 80."
            },
            {
                question: "Jika x + 1/x = 4, maka nilai dari x² + 1/x² adalah...",
                options: ["14", "12", "16", "10"],
                answer: 0,
                explanation: "Kuadratkan: x² + 2 + 1/x² = 16 → x² + 1/x² = 14."
            },
            {
                question: "Jika sin A = 3/5 dan sudut A di kuadran I, maka nilai cos A adalah...",
                options: ["4/5", "3/4", "5/4", "√11/5"],
                answer: 0,
                explanation: "cos A = √(1 - sin² A) = √(1 - 9/25) = √(16/25) = 4/5."
            },
            {
                question: "Dalam bidang kompleks, i² + (1 + i)(1 - i) sama dengan...",
                options: ["0", "1", "2", "-1"],
                answer: 1,
                explanation: "i² = -1, (1+i)(1-i) = 1 - i² = 2 → -1 + 2 = 1."
            },
            {
                question: "Jumlah semua bilangan ganjil antara 10 dan 30 adalah...",
                options: ["200", "180", "160", "160"],
                answer: 2,
                explanation: "Barisan: 11 + 13 + ... + 29 → n = 10, a = 11, l = 29 → Sn = n/2 (a + l) = 5×40 = 200."
            }
        ]
    },
    
    
             6: {
                title: "Ilmu Sejarah (Sulit)",
                questions: [
                    {
                        question: "Mengapa Peristiwa Rengasdengklok menjadi titik penting dalam proses kemerdekaan Indonesia?",
                        options: [
                            "Karena menunjukkan adanya perbedaan pandangan antara golongan tua dan muda",
                            "Karena merupakan tempat pengibaran bendera pertama",
                            "Karena di sana dilakukan perundingan dengan Jepang",
                            "Karena Soekarno dan Hatta ditawan Belanda"
                        ],
                        answer: 0,
                        explanation: "Peristiwa ini menunjukkan desakan golongan muda agar proklamasi segera dilaksanakan tanpa campur tangan Jepang."
                    },
                    {
                        question: "Apa alasan utama dibentuknya Panitia Sembilan oleh BPUPKI?",
                        options: [
                            "Membuat teks proklamasi",
                            "Menyusun konstitusi sementara",
                            "Merumuskan dasar negara",
                            "Menjembatani konflik antara Islam dan nasionalis"
                        ],
                        answer: 2,
                        explanation: "Panitia Sembilan bertugas merumuskan dasar negara, menghasilkan Piagam Jakarta."
                    },
                    {
                        question: "Apa konsekuensi politik dari dibubarkannya VOC oleh Belanda pada tahun 1799?",
                        options: [
                            "Belanda menyerahkan Indonesia ke Inggris",
                            "Pemerintahan kolonial langsung diambil alih oleh Kerajaan Belanda",
                            "Indonesia mendapatkan otonomi terbatas",
                            "VOC berubah menjadi PETA"
                        ],
                        answer: 1,
                        explanation: "Setelah VOC bubar, wilayah jajahan langsung diatur oleh pemerintah Kerajaan Belanda."
                    },
                    {
                        question: "Apa latar belakang munculnya Sumpah Palapa oleh Gajah Mada?",
                        options: [
                            "Keinginan pribadi menjadi raja",
                            "Komitmen menyatukan nusantara di bawah Majapahit",
                            "Balas dendam terhadap kerajaan Sriwijaya",
                            "Amanat dari Raden Wijaya"
                        ],
                        answer: 1,
                        explanation: "Sumpah Palapa adalah tekad Gajah Mada menyatukan seluruh nusantara di bawah kekuasaan Majapahit."
                    },
                    {
                        question: "Apa dampak internasional dari Konferensi Asia Afrika tahun 1955?",
                        options: [
                            "Munculnya gerakan Non-Blok",
                            "Dekolonisasi negara-negara Asia Tenggara",
                            "Indonesia menjadi anggota PBB",
                            "Perang Dingin berakhir"
                        ],
                        answer: 0,
                        explanation: "Konferensi ini menjadi tonggak awal berdirinya Gerakan Non-Blok."
                    },
                    {
                        question: "Mengapa Sultan Hasanuddin dijuluki 'Ayam Jantan dari Timur'?",
                        options: [
                            "Karena keberaniannya melawan VOC",
                            "Karena menguasai perdagangan rempah",
                            "Karena mempersatukan kerajaan di Timur",
                            "Karena menjadi panglima tertinggi Mataram"
                        ],
                        answer: 0,
                        explanation: "Ia dikenal karena perlawanan gigih terhadap penjajahan VOC di Sulawesi Selatan."
                    },
                    {
                        question: "Mengapa Trikora dianggap sebagai bagian penting dari sejarah integrasi nasional Indonesia?",
                        options: [
                            "Karena menjadi awal Operasi Trikora di Aceh",
                            "Karena menunjukkan kekuatan diplomasi Soekarno",
                            "Karena mempercepat masuknya Irian Barat ke NKRI",
                            "Karena mendukung kemerdekaan Timor Leste"
                        ],
                        answer: 2,
                        explanation: "Trikora diluncurkan untuk merebut kembali Irian Barat dari Belanda."
                    },
                    {
                        question: "Apa yang menyebabkan runtuhnya kerajaan Majapahit secara bertahap?",
                        options: [
                            "Serangan dari Kesultanan Demak",
                            "Krisis suksesi dan konflik internal",
                            "Invasi Portugis",
                            "Bencana alam yang besar"
                        ],
                        answer: 1,
                        explanation: "Majapahit melemah karena perebutan takhta dan konflik internal setelah wafatnya Hayam Wuruk."
                    },
                    {
                        question: "Apa alasan Belanda mendirikan Cultuurstelsel (tanam paksa)?",
                        options: [
                            "Mengisi kas negara setelah bangkrutnya VOC",
                            "Untuk meningkatkan kesejahteraan petani",
                            "Mengganti sistem feodal lokal",
                            "Sebagai bentuk bantuan pangan"
                        ],
                        answer: 0,
                        explanation: "Belanda menerapkan tanam paksa untuk memperbaiki kondisi ekonomi mereka setelah VOC bangkrut."
                    },
                    {
                        question: "Mengapa Piagam Jakarta mengalami perubahan sebelum disahkan menjadi Pancasila?",
                        options: [
                            "Desakan dari golongan Kristen dan Indonesia Timur",
                            "Campur tangan Jepang",
                            "Penolakan dari BPUPKI",
                            "Permintaan Soekarno dan Hatta"
                        ],
                        answer: 0,
                        explanation: "Kalimat 'dengan kewajiban menjalankan syariat Islam bagi pemeluknya' dihapus karena penolakan dari Indonesia Timur."
                    },
                    {
                        question: "Apa kontribusi Tan Malaka dalam sejarah perjuangan kemerdekaan Indonesia?",
                        options: [
                            "Menjadi Presiden pertama Republik Indonesia",
                            "Mendirikan Partai Komunis Indonesia",
                            "Menjadi tokoh penggerak kemerdekaan dari luar negeri",
                            "Menandatangani proklamasi kemerdekaan"
                        ],
                        answer: 2,
                        explanation: "Tan Malaka dikenal sebagai pemikir revolusioner yang memperjuangkan kemerdekaan dari luar negeri."
                    },
                    {
                        question: "Apa isi penting dari Perjanjian Linggarjati?",
                        options: [
                            "Belanda mengakui kedaulatan Indonesia atas Jawa dan Sumatera",
                            "Belanda mengakui kedaulatan penuh RI",
                            "RI menjadi negara bagian Belanda",
                            "Belanda membentuk VOC kembali"
                        ],
                        answer: 0,
                        explanation: "Linggarjati menyatakan pengakuan Belanda terhadap de facto kedaulatan RI atas Jawa, Madura, dan Sumatera."
                    },
                    {
                        question: "Apa perbedaan utama antara Perjanjian Linggarjati dan Renville?",
                        options: [
                            "Linggarjati menguntungkan Belanda, Renville menguntungkan Indonesia",
                            "Linggarjati didukung Amerika Serikat",
                            "Renville lebih membatasi wilayah kekuasaan Indonesia",
                            "Renville membahas ekonomi, bukan politik"
                        ],
                        answer: 2,
                        explanation: "Perjanjian Renville membatasi kekuasaan Indonesia hanya pada wilayah-wilayah kecil."
                    },
                    {
                        question: "Mengapa Jepang dapat diterima oleh sebagian rakyat Indonesia saat pertama kali datang?",
                        options: [
                            "Jepang menjanjikan kemerdekaan Indonesia",
                            "Jepang membantu mengembangkan pendidikan",
                            "Jepang membagikan tanah dan modal",
                            "Jepang membuka sistem demokrasi"
                        ],
                        answer: 0,
                        explanation: "Awalnya Jepang diterima karena propaganda 'Saudara Tua' dan janji kemerdekaan."
                    },
                    {
                        question: "Apa yang menjadi latar belakang dibentuknya BPUPKI?",
                        options: [
                            "Desakan dari Sekutu",
                            "Permintaan Soekarno",
                            "Persiapan kemerdekaan oleh Jepang",
                            "Hasil Konferensi Asia-Afrika"
                        ],
                        answer: 2,
                        explanation: "BPUPKI dibentuk oleh Jepang untuk menarik simpati rakyat Indonesia menjelang kekalahan mereka."
                    },
                    {
                        question: "Apa bentuk perjuangan diplomatik yang dilakukan oleh Indonesia setelah proklamasi?",
                        options: [
                            "Pengiriman delegasi ke PBB",
                            "Membentuk TNI",
                            "Menyerang Belanda secara langsung",
                            "Mengadakan pemilu nasional"
                        ],
                        answer: 0,
                        explanation: "Indonesia aktif melakukan diplomasi ke negara asing dan PBB untuk mendapatkan pengakuan."
                    },
                    {
                        question: "Mengapa Soekarno dan Hatta dipilih sebagai proklamator?",
                        options: [
                            "Mereka tokoh muda yang radikal",
                            "Mereka mendapat dukungan Jepang",
                            "Mereka tokoh nasionalis yang berpengaruh dan disepakati bersama",
                            "Mereka berasal dari golongan Islam"
                        ],
                        answer: 2,
                        explanation: "Keduanya merupakan tokoh penting yang dapat diterima oleh semua golongan."
                    },
                    {
                        question: "Mengapa pendirian Budi Utomo dianggap sebagai tonggak kebangkitan nasional?",
                        options: [
                            "Organisasi ini bersenjata",
                            "Merupakan organisasi pertama yang bersifat kedaerahan",
                            "Menjadi organisasi modern pertama yang bertujuan kemajuan bangsa",
                            "Didirikan oleh pemerintah Belanda"
                        ],
                        answer: 2,
                        explanation: "Budi Utomo adalah organisasi modern pertama yang memperjuangkan pendidikan dan kebudayaan bangsa."
                    },
                    {
                        question: "Apa dampak penting dari politik etis Belanda di Indonesia?",
                        options: [
                            "Kemiskinan merata",
                            "Tumbuhnya kaum intelektual pribumi",
                            "Perang Diponegoro",
                            "Pemerintahan desentralisasi"
                        ],
                        answer: 1,
                        explanation: "Politik etis membuka akses pendidikan yang memunculkan kaum terdidik seperti Soetomo dan Ki Hajar Dewantara."
                    },
                    {
                        question: "Apa faktor utama kekalahan tentara Jepang di Asia Tenggara termasuk Indonesia?",
                        options: [
                            "Kurangnya dukungan rakyat",
                            "Serangan Sekutu dan bom atom di Hiroshima-Nagasaki",
                            "Perlawanan sengit dari Indonesia",
                            "Krisis ekonomi dalam negeri Jepang"
                        ],
                        answer: 1,
                        explanation: "Kekalahan Jepang disebabkan oleh serangan Sekutu dan bom atom yang menjatuhkan moral dan kekuatan militer."
                    }
                ]
            }
            
            
        };


        let currentQuiz = null;
        let currentQuestionIndex = 0;
        let selectedOption = null;
        let score = {
            correct: 0,
            wrong: 0
        };
        
        // Fungsi untuk mengacak array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        function showQuiz(quizId) {
            document.getElementById('courses').style.display = 'none';
            document.getElementById('quiz-section').style.display = 'block';
        
            // Duplikasi quiz supaya data asli tidak rusak
            currentQuiz = JSON.parse(JSON.stringify(quizzes[quizId]));
        
            // Acak urutan soal
            shuffleArray(currentQuiz.questions);
        
            // Reset skor dan indeks soal
            currentQuestionIndex = 0;
            score = { correct: 0, wrong: 0 };
        
            document.getElementById('quiz-title').textContent = currentQuiz.title;
            loadQuestion();
            updateProgress();
        }
        
        function loadQuestion() {
            if (currentQuestionIndex >= currentQuiz.questions.length) {
                const percentage = Math.round((score.correct / currentQuiz.questions.length) * 100);
                let resultClass = '';
                if (percentage >= 80) resultClass = 'excellent';
                else if (percentage >= 60) resultClass = 'good';
                else resultClass = 'poor';
        
                document.getElementById('quiz-content').innerHTML = `
                    <div class="quiz-result ${resultClass}">
                        <h3>Quiz Selesai!</h3>
                        <div class="score-display">
                            <div class="score-circle">
                                <span>${percentage}%</span>
                            </div>
                            <div class="score-details">
                                <p><i class="fas fa-check correct-icon"></i> Jawaban Benar: <strong>${score.correct}</strong></p>
                                <p><i class="fas fa-times wrong-icon"></i> Jawaban Salah: <strong>${score.wrong}</strong></p>
                                <p>Total Pertanyaan: <strong>${currentQuiz.questions.length}</strong></p>
                            </div>
                        </div>
                        <button class="btn btn-primary" onclick="backToCourses()">
                            <i class="fas fa-home"></i> Kembali ke Daftar Kursus
                        </button>
                    </div>
                `;
                document.getElementById('submit-btn').style.display = 'none';
                document.getElementById('next-btn').style.display = 'none';
                document.getElementById('back-btn').style.display = 'none';
                return;
            }
        
            const quizContent = document.getElementById('quiz-content');
            const currentQuestion = currentQuiz.questions[currentQuestionIndex];
        
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
        
        function selectOption(optionIndex) {
            selectedOption = optionIndex;
            const options = document.querySelectorAll('.quiz-option');
            options.forEach((opt, i) => {
                const input = opt.querySelector('input[type="radio"]');
                if (i === optionIndex) {
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
        
        function checkAnswer() {
            if (selectedOption === null) {
                alert('Silakan pilih jawaban terlebih dahulu!');
                return;
            }
        
            const feedback = document.getElementById('feedback');
            const currentQuestion = currentQuiz.questions[currentQuestionIndex];
        
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
        }
        
        function updateProgress() {
            const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
            document.getElementById('quiz-progress').style.width = `${progress}%`;
            document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
        }
        