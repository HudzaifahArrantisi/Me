const quizzes = {
    1: { // MATEMATIKA
        title: "Matematika Dasar",
        questions: [
            {
                question: "Hasil dari 15 - 3 × 4 + 6 adalah...",
                options: ["9", "12", "15", "18"],
                answer: 0,
                explanation: "Operasi perkalian dulu: 15 - 12 + 6 = 9"
            },
            {
                question: "Jika x + 7 = 15, maka nilai x adalah...",
                options: ["6", "7", "8", "9"],
                answer: 2,
                explanation: "x = 15 - 7 = 8"
            },
            {
                question: "Bentuk pecahan sederhana dari 0.75 adalah...",
                options: ["1/4", "1/2", "3/4", "4/5"],
                answer: 2,
                explanation: "0.75 = 75/100 = 3/4"
            },
            {
                question: "Luas persegi dengan sisi 6 cm adalah...",
                options: ["12 cm²", "24 cm²", "36 cm²", "48 cm²"],
                answer: 2,
                explanation: "Luas = sisi × sisi = 6 × 6 = 36 cm²"
            },
            {
                question: "FPB dari 18 dan 24 adalah...",
                options: ["3", "6", "9", "12"],
                answer: 1,
                explanation: "Faktor 18: 1,2,3,6,9,18; Faktor 24: 1,2,3,4,6,8,12,24 → FPB = 6"
            },
            {
                question: "Hasil dari 4³ adalah...",
                options: ["12", "16", "64", "256"],
                answer: 2,
                explanation: "4 × 4 × 4 = 64"
            },
            {
                question: "Jika 3x - 5 = 16, maka nilai x adalah...",
                options: ["5", "6", "7", "8"],
                answer: 2,
                explanation: "3x = 21 → x = 7"
            },
            {
                question: "Volume kubus dengan rusuk 4 cm adalah...",
                options: ["16 cm³", "32 cm³", "48 cm³", "64 cm³"],
                answer: 3,
                explanation: "V = s³ = 4 × 4 × 4 = 64 cm³"
            },
            {
                question: "Bentuk persen dari 3/5 adalah...",
                options: ["30%", "50%", "60%", "75%"],
                answer: 2,
                explanation: "3/5 × 100% = 60%"
            },
            {
                question: "KPK dari 4 dan 6 adalah...",
                options: ["6", "12", "18", "24"],
                answer: 1,
                explanation: "Kelipatan 4: 4,8,12,...; Kelipatan 6: 6,12,18,... → KPK = 12"
            },
            {
                question: "Jika segitiga memiliki alas 8 cm dan tinggi 5 cm, luasnya adalah...",
                options: ["13 cm²", "20 cm²", "26 cm²", "40 cm²"],
                answer: 1,
                explanation: "L = ½ × alas × tinggi = ½ × 8 × 5 = 20 cm²"
            },
            {
                question: "Hasil dari (-8) + 12 - (-3) adalah...",
                options: ["-17", "-7", "7", "17"],
                answer: 2,
                explanation: "-8 + 12 + 3 = 7"
            },
            {
                question: "2/3 + 1/4 = ...",
                options: ["3/7", "5/12", "11/12", "3/4"],
                answer: 2,
                explanation: "8/12 + 3/12 = 11/12"
            },
            {
                question: "Jika a:b = 3:5 dan b=20, maka nilai a adalah...",
                options: ["8", "12", "15", "18"],
                answer: 1,
                explanation: "a/20 = 3/5 → a = 12"
            },
            {
                question: "Bentuk sederhana dari 9x²y/3xy² adalah...",
                options: ["3x/y", "3y/x", "3xy", "3x²y"],
                answer: 0,
                explanation: "9x²y/3xy² = 3x/y"
            }
        ]
    },
    2: { // BAHASA INGGRIS
        title: "Bahasa Inggris",
        questions: [
            {
                question: "What is the past form of 'eat'?",
                options: ["eated", "ate", "eaten", "eating"],
                answer: 1,
                explanation: "Past tense of 'eat' is 'ate'."
            },
            {
                question: "Which sentence is correct?",
                options: [
                    "She don't have any books.",
                    "He doesn't has a car.",
                    "They doesn't like coffee.",
                    "I don't understand the question."
                ],
                answer: 3,
                explanation: "'I don't understand' is grammatically correct."
            },
            {
                question: "What is the antonym of 'generous'?",
                options: ["Kind", "Selfish", "Friendly", "Honest"],
                answer: 1,
                explanation: "'Selfish' is the opposite of 'generous'."
            },
            {
                question: "Which word is spelled correctly?",
                options: ["Accomodate", "Embarrass", "Harassment", "Occured"],
                answer: 2,
                explanation: "'Harassment' is the correct spelling."
            },
            {
                question: "The correct passive form of 'They built this house' is:",
                options: [
                    "This house was build by them.",
                    "This house was built by them.",
                    "This house is built by them.",
                    "This house built by them."
                ],
                answer: 1,
                explanation: "Correct passive: was + past participle (built)."
            },
            {
                question: "What is the comparative form of 'good'?",
                options: ["gooder", "more good", "better", "best"],
                answer: 2,
                explanation: "Comparative of 'good' is 'better'."
            },
            {
                question: "Which sentence uses present perfect correctly?",
                options: [
                    "I have seen that movie yesterday.",
                    "She has lived here since 2010.",
                    "They have went to Paris last year.",
                    "He has finished his work tomorrow."
                ],
                answer: 1,
                explanation: "'Has lived' with 'since' is correct present perfect usage."
            },
            {
                question: "What is the plural of 'child'?",
                options: ["childs", "children", "childes", "childrens"],
                answer: 1,
                explanation: "Irregular plural: child → children."
            },
            {
                question: "Which word is a conjunction?",
                options: ["Beautiful", "Quickly", "Because", "Under"],
                answer: 2,
                explanation: "'Because' is a conjunction connecting clauses."
            },
            {
                question: "What is the meaning of 'diligent'?",
                options: ["Lazy", "Hardworking", "Intelligent", "Creative"],
                answer: 1,
                explanation: "'Diligent' means hardworking and persistent."
            },
            {
                question: "Which is the correct question tag: 'You like coffee, _____?'",
                options: ["do you", "don't you", "like you", "isn't it"],
                answer: 1,
                explanation: "Positive statement → negative tag 'don't you'."
            },
            {
                question: "What is the superlative form of 'far'?",
                options: ["farther", "farthest", "more far", "most far"],
                answer: 1,
                explanation: "Superlative of 'far' is 'farthest'."
            },
            {
                question: "Which sentence is in future tense?",
                options: [
                    "I am going to school.",
                    "She will visit her grandmother tomorrow.",
                    "They have finished their homework.",
                    "We were watching TV."
                ],
                answer: 1,
                explanation: "'Will visit' expresses future action."
            },
            {
                question: "What is the synonym of 'begin'?",
                options: ["Start", "Finish", "Continue", "Stop"],
                answer: 0,
                explanation: "'Start' means the same as 'begin'."
            },
            {
                question: "Which is the correct indirect speech: 'He said, 'I am happy''",
                options: [
                    "He said he is happy.",
                    "He said he was happy.",
                    "He said I am happy.",
                    "He said I was happy."
                ],
                answer: 1,
                explanation: "Present tense changes to past in reported speech."
            }
        ]
    },
    3: { // KIMIA DASAR
        title: "Kimia Dasar",
        questions: [
            {
                question: "Unsur dengan simbol 'Na' adalah...",
                options: ["Natrium", "Neon", "Nikel", "Nitrogen"],
                answer: 0,
                explanation: "Na = Natrium (sodium)."
            },
            {
                question: "pH larutan netral pada suhu 25°C adalah...",
                options: ["0", "7", "14", "10"],
                answer: 1,
                explanation: "pH 7 = netral, <7 asam, >7 basa."
            },
            {
                question: "Reaksi yang menyerap panas disebut...",
                options: ["Eksoterm", "Endoterm", "Isoterm", "Poloterm"],
                answer: 1,
                explanation: "Reaksi endoterm menyerap panas dari lingkungan."
            },
            {
                question: "Jumlah proton + neutron dalam atom disebut...",
                options: ["Nomor atom", "Nomor massa", "Valensi", "Isotop"],
                answer: 1,
                explanation: "Nomor massa = proton + neutron."
            },
            {
                question: "Rumus kimia garam dapur adalah...",
                options: ["NaOH", "HCl", "NaCl", "H2O"],
                answer: 2,
                explanation: "Garam dapur = Natrium Klorida (NaCl)."
            },
            {
                question: "Perubahan wujud dari cair ke padat disebut...",
                options: ["Mencair", "Membeku", "Menguap", "Menyublim"],
                answer: 1,
                explanation: "Pembekuan = cair → padat."
            },
            {
                question: "Gas yang paling banyak di atmosfer bumi adalah...",
                options: ["Oksigen", "Karbon dioksida", "Nitrogen", "Hidrogen"],
                answer: 2,
                explanation: "Atmosfer mengandung ~78% nitrogen."
            },
            {
                question: "Zat yang menghambat reaksi disebut...",
                options: ["Katalis", "Inhibitor", "Oksidator", "Reduktor"],
                answer: 1,
                explanation: "Inhibitor memperlambat reaksi kimia."
            },
            {
                question: "Larutan dengan pH=1 termasuk...",
                options: ["Asam kuat", "Asam lemah", "Basa kuat", "Basa lemah"],
                answer: 0,
                explanation: "pH 1 sangat asam (mendekati 0 = asam kuat)."
            },
            {
                question: "Reaksi antara asam dan basa menghasilkan...",
                options: ["Gas", "Logam", "Garam dan air", "Polimer"],
                answer: 2,
                explanation: "Asam + Basa → Garam + Air (reaksi netralisasi)."
            },
            {
                question: "Unsur yang termasuk golongan halogen adalah...",
                options: ["Natrium", "Klorin", "Argon", "Kalsium"],
                answer: 1,
                explanation: "Halogen: F, Cl, Br, I, At (golongan 17)."
            },
            {
                question: "Proses pemisahan campuran berdasarkan titik didih disebut...",
                options: ["Filtrasi", "Sublimasi", "Destilasi", "Kromatografi"],
                answer: 2,
                explanation: "Destilasi memisahkan berdasarkan perbedaan titik didih."
            },
            {
                question: "Jenis ikatan antara atom-atom logam disebut...",
                options: ["Ionik", "Kovalen", "Logam", "Hidrogen"],
                answer: 2,
                explanation: "Ikatan logam terjadi antara atom-atom logam."
            },
            {
                question: "Lambang kimia untuk besi adalah...",
                options: ["Fe", "Be", "Br", "Bi"],
                answer: 0,
                explanation: "Fe = Ferrum (besi)."
            },
            {
                question: "Perubahan kimia ditandai dengan...",
                options: [
                    "Perubahan wujud saja",
                    "Perubahan warna dan bau",
                    "Terbentuknya zat baru",
                    "Perubahan suhu saja"
                ],
                answer: 2,
                explanation: "Perubahan kimia menghasilkan zat baru dengan sifat berbeda."
            }
        ]
    },
    4: { // FISIKA
        title: "Fisika Dasar",
        questions: [
            {
                question: "Satuan SI untuk gaya adalah...",
                options: ["Joule", "Watt", "Newton", "Pascal"],
                answer: 2,
                explanation: "Gaya diukur dalam Newton (N)."
            },
            {
                question: "Rumus untuk menghitung kecepatan adalah...",
                options: ["v = s × t", "v = s / t", "v = t / s", "v = a × t"],
                answer: 1,
                explanation: "Kecepatan = jarak/waktu (v = s/t)."
            },
            {
                question: "Hukum Newton I disebut juga hukum...",
                options: [
                    "Aksi-Reaksi",
                    "Gravitasi",
                    "Inersia",
                    "Percepatan"
                ],
                answer: 2,
                explanation: "Hukum Newton I = Hukum Inersia (kelembaman)."
            },
            {
                question: "Alat untuk mengukur massa adalah...",
                options: ["Termometer", "Neraca", "Speedometer", "Barometer"],
                answer: 1,
                explanation: "Neraca digunakan untuk mengukur massa."
            },
            {
                question: "Bunyi merambat paling cepat melalui...",
                options: ["Padat", "Cair", "Gas", "Vakum"],
                answer: 0,
                explanation: "Bunyi merambat paling cepat di medium padat."
            },
            {
                question: "Energi yang dimiliki benda karena geraknya disebut...",
                options: [
                    "Energi potensial",
                    "Energi kinetik",
                    "Energi panas",
                    "Energi kimia"
                ],
                answer: 1,
                explanation: "Energi kinetik = energi gerak (½mv²)."
            },
            {
                question: "Alat yang mengubah energi listrik menjadi energi gerak adalah...",
                options: ["Generator", "Motor listrik", "Baterai", "Transformator"],
                answer: 1,
                explanation: "Motor listrik mengubah listrik → gerak."
            },
            {
                question: "Hukum kekekalan energi menyatakan bahwa energi...",
                options: [
                    "Dapat diciptakan",
                    "Dapat dimusnahkan",
                    "Tidak dapat diciptakan/dimusnahkan",
                    "Berubah menjadi materi"
                ],
                answer: 2,
                explanation: "Energi hanya berubah bentuk, tidak bisa diciptakan/dimusnahkan."
            },
            {
                question: "Benda akan mengapung jika...",
                options: [
                    "ρ benda > ρ zat cair",
                    "ρ benda = ρ zat cair",
                    "ρ benda < ρ zat cair",
                    "Tidak tergantung massa jenis"
                ],
                answer: 2,
                explanation: "Benda mengapung jika massa jenisnya < zat cair."
            },
            {
                question: "Satuan daya dalam SI adalah...",
                options: ["Joule", "Watt", "Volt", "Ampere"],
                answer: 1,
                explanation: "Daya diukur dalam Watt (W)."
            },
            {
                question: "Gaya tarik bumi disebut...",
                options: ["Gaya magnet", "Gaya gravitasi", "Gaya listrik", "Gaya gesek"],
                answer: 1,
                explanation: "Gravitasi bumi menarik benda ke pusat bumi."
            },
            {
                question: "Alat untuk mengukur suhu adalah...",
                options: ["Barometer", "Hygrometer", "Termometer", "Speedometer"],
                answer: 2,
                explanation: "Termometer mengukur suhu."
            },
            {
                question: "Cermin yang digunakan pada kaca spion mobil adalah...",
                options: [
                    "Cermin datar",
                    "Cermin cekung",
                    "Cermin cembung",
                    "Lensa cekung"
                ],
                answer: 2,
                explanation: "Kaca spion menggunakan cermin cembung untuk bidang pandang lebih luas."
            },
            {
                question: "Perubahan dari padat ke cair disebut...",
                options: ["Membeku", "Mencair", "Menguap", "Menyublim"],
                answer: 1,
                explanation: "Pencairan = padat → cair."
            },
            {
                question: "Hukum Ohm menyatakan bahwa...",
                options: [
                    "V = I × R",
                    "I = V × R",
                    "R = V × I",
                    "P = V × I"
                ],
                answer: 0,
                explanation: "Hukum Ohm: Tegangan (V) = Arus (I) × Hambatan (R)."
            }
        ]
    },
    5: { // PENALARAN KUANTITATIF
        title: "Penalaran Kuantitatif",
        questions: [
            {
                question: "Jika 2x + 3 = 11, maka nilai x adalah...",
                options: ["3", "4", "5", "6"],
                answer: 1,
                explanation: "2x = 8 → x = 4"
            },
            {
                question: "Sebuah persegi panjang memiliki panjang 12 cm dan lebar 8 cm. Kelilingnya adalah...",
                options: ["20 cm", "40 cm", "80 cm", "96 cm"],
                answer: 1,
                explanation: "Keliling = 2×(p+l) = 2×20 = 40 cm"
            },
            {
                question: "Jika 40% dari suatu bilangan adalah 60, maka bilangan tersebut adalah...",
                options: ["120", "140", "150", "180"],
                answer: 2,
                explanation: "40% x = 60 → x = 60/0.4 = 150"
            },
            {
                question: "Dalam sebuah kotak terdapat 5 bola merah dan 3 bola biru. Peluang terambil bola biru adalah...",
                options: ["3/5", "3/8", "5/8", "8/3"],
                answer: 1,
                explanation: "Peluang = jumlah biru/total = 3/8"
            },
            {
                question: "Jika a=4 dan b=5, maka nilai dari 2a + 3b adalah...",
                options: ["17", "20", "23", "26"],
                answer: 2,
                explanation: "2×4 + 3×5 = 8 + 15 = 23"
            },
            {
                question: "Rata-rata dari 6, 8, 10, dan 12 adalah...",
                options: ["8", "9", "10", "12"],
                answer: 1,
                explanation: "(6+8+10+12)/4 = 36/4 = 9"
            },
            {
                question: "Jika 5x - 7 = 18, maka nilai x adalah...",
                options: ["3", "4", "5", "6"],
                answer: 2,
                explanation: "5x = 25 → x = 5"
            },
            {
                question: "FPB dari 36 dan 48 adalah...",
                options: ["6", "12", "18", "24"],
                answer: 1,
                explanation: "Faktorisasi: 36=2²×3², 48=2⁴×3 → FPB=2²×3=12"
            },
            {
                question: "Luas lingkaran dengan jari-jari 10 cm adalah... (π=3.14)",
                options: ["31.4 cm²", "62.8 cm²", "314 cm²", "628 cm²"],
                answer: 2,
                explanation: "L = πr² = 3.14×100 = 314 cm²"
            },
            {
                question: "Jika 6 pekerja dapat menyelesaikan proyek dalam 10 hari, berapa hari yang dibutuhkan 4 pekerja?",
                options: ["12", "15", "18", "20"],
                answer: 1,
                explanation: "Total pekerjaan = 6×10 = 60 orang-hari. 4 pekerja → 60/4 = 15 hari"
            },
            {
                question: "Nilai dari √144 + ∛8 adalah...",
                options: ["10", "12", "14", "16"],
                answer: 2,
                explanation: "√144=12 + ∛8=2 → 14"
            },
            {
                question: "Jika y berbanding lurus dengan x dan y=20 saat x=5, berapa y saat x=7?",
                options: ["24", "28", "32", "35"],
                answer: 1,
                explanation: "y = kx → 20 = k×5 → k=4. Untuk x=7: y=4×7=28"
            },
            {
                question: "Hasil dari 1 + 3 + 5 + ... + 9 adalah...",
                options: ["20", "25", "30", "35"],
                answer: 1,
                explanation: "1+3+5+7+9 = 25"
            },
            {
                question: "Jika 3x + 4 < 19, nilai x yang memenuhi adalah...",
                options: ["x < 5", "x < 6", "x > 5", "x > 6"],
                answer: 0,
                explanation: "3x < 15 → x < 5"
            },
            {
                question: "Bentuk sederhana dari (3xy²)² adalah...",
                options: ["3x²y⁴", "6x²y⁴", "9x²y⁴", "9xy⁴"],
                answer: 2,
                explanation: "(3xy²)² = 9x²y⁴"
            }
        ]
    },
             6: { 
                title: "Ilmu Sejarah",
                questions: [
                    {
                        question: "Siapa tokoh proklamator kemerdekaan Indonesia?",
                        options: ["Sukarno dan Hatta", "Sudirman dan Diponegoro", "Hatta dan Tan Malaka", "Sukarno dan Soe Hok Gie"],
                        answer: 0,
                        explanation: "Sukarno dan Mohammad Hatta memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945."
                    },
                    {
                        question: "Kapan Indonesia merdeka?",
                        options: ["17 Agustus 1945", "20 Mei 1908", "10 November 1945", "1 Juni 1945"],
                        answer: 0,
                        explanation: "Proklamasi kemerdekaan Indonesia terjadi pada 17 Agustus 1945."
                    },
                    {
                        question: "Apa nama kerajaan Hindu tertua di Indonesia?",
                        options: ["Sriwijaya", "Majapahit", "Kutai", "Tarumanegara"],
                        answer: 2,
                        explanation: "Kerajaan Kutai adalah kerajaan Hindu tertua yang berdiri di Kalimantan Timur."
                    },
                    {
                        question: "Kerajaan Majapahit mencapai puncak kejayaannya pada masa pemerintahan siapa?",
                        options: ["Gajah Mada", "Raden Wijaya", "Hayam Wuruk", "Airlangga"],
                        answer: 2,
                        explanation: "Kerajaan Majapahit mencapai kejayaannya di bawah pemerintahan Hayam Wuruk dengan Mahapatih Gajah Mada."
                    },
                    {
                        question: "Siapa penulis naskah Sumpah Palapa?",
                        options: ["Hayam Wuruk", "Gajah Mada", "Patih Logender", "Raden Wijaya"],
                        answer: 1,
                        explanation: "Gajah Mada mengucapkan Sumpah Palapa untuk mempersatukan Nusantara."
                    },
                    {
                        question: "Peristiwa Rengasdengklok terjadi sebelum...",
                        options: ["Proklamasi Kemerdekaan", "Perjanjian Linggarjati", "Pertempuran Surabaya", "Konferensi Meja Bundar"],
                        answer: 0,
                        explanation: "Peristiwa Rengasdengklok terjadi pada 16 Agustus 1945, sehari sebelum proklamasi."
                    },
                    {
                        question: "Siapa pemimpin kerajaan Islam pertama di Indonesia?",
                        options: ["Sultan Malik Al Saleh", "Sultan Agung", "Sultan Hasanuddin", "Sunan Kalijaga"],
                        answer: 0,
                        explanation: "Sultan Malik Al Saleh adalah raja pertama Kesultanan Samudera Pasai, kerajaan Islam pertama."
                    },
                    {
                        question: "Apa isi Trikora?",
                        options: ["Pembebasan Irian Barat", "Kemerdekaan Aceh", "Serangan Umum 1 Maret", "Reformasi Pendidikan"],
                        answer: 0,
                        explanation: "Trikora bertujuan untuk merebut kembali Irian Barat dari tangan Belanda."
                    },
                    {
                        question: "Kapan VOC dibubarkan?",
                        options: ["1799", "1800", "1942", "1602"],
                        answer: 0,
                        explanation: "VOC dibubarkan oleh pemerintah Belanda pada tahun 1799 karena korupsi dan kerugian."
                    },
                    {
                        question: "Apa nama piagam yang menjadi cikal bakal dasar negara Indonesia?",
                        options: ["Piagam Jakarta", "UUD 1945", "Dekrit Presiden", "Sumpah Pemuda"],
                        answer: 0,
                        explanation: "Piagam Jakarta dirumuskan pada 22 Juni 1945 dan menjadi cikal bakal Pancasila."
                    },
                    {
                        question: "Siapa pendiri Budi Utomo?",
                        options: ["Dr. Soetomo", "Ki Hajar Dewantara", "Moh. Yamin", "Tjipto Mangunkusumo"],
                        answer: 0,
                        explanation: "Dr. Soetomo mendirikan Budi Utomo pada 20 Mei 1908."
                    },
                    {
                        question: "Apa makna penting dari Sumpah Pemuda 1928?",
                        options: ["Pemersatu semangat nasionalisme", "Awal perjuangan diplomatik", "Pembentukan TNI", "Bentuk perlawanan bersenjata"],
                        answer: 0,
                        explanation: "Sumpah Pemuda menyatukan pemuda Indonesia dalam satu bangsa, satu tanah air, dan satu bahasa."
                    },
                    {
                        question: "Dimana Konferensi Asia Afrika dilaksanakan?",
                        options: ["Bandung", "Jakarta", "Yogyakarta", "Surabaya"],
                        answer: 0,
                        explanation: "Konferensi Asia Afrika diselenggarakan di Bandung pada tahun 1955."
                    },
                    {
                        question: "Siapa tokoh utama di balik peristiwa 10 November di Surabaya?",
                        options: ["Bung Tomo", "Soedirman", "Moh. Hatta", "Tan Malaka"],
                        answer: 0,
                        explanation: "Bung Tomo membakar semangat rakyat dalam pertempuran 10 November di Surabaya."
                    },
                    {
                        question: "Kapan Kerajaan Sriwijaya mengalami masa kejayaan?",
                        options: ["Abad ke-7 hingga ke-11", "Abad ke-10 hingga ke-14", "Abad ke-4 hingga ke-6", "Abad ke-14 hingga ke-15"],
                        answer: 0,
                        explanation: "Kerajaan Sriwijaya berjaya sebagai kerajaan maritim besar di Asia Tenggara abad ke-7 hingga ke-11."
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

function showQuiz(quizId) {
    document.getElementById('courses').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    currentQuiz = quizzes[quizId];
    currentQuestionIndex = 0;
    score = { correct: 0, wrong: 0 }; // Reset skor setiap memulai quiz baru
    
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