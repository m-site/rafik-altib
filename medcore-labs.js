// MEDCORE Lab Values Database v2.0
// Comprehensive, Medically-Accurate Reference Database (Harrison's, UpToDate, WHO 6th Ed.)
// Total Categories: 35 | Total Tests: 589

const MQ_LAB_CATEGORIES_META = {
  "cbc": {
    "name": "Complete Blood Count",
    "nameAr": "تعداد الدم الكامل",
    "icon": "Droplets"
  },
  "coagulation": {
    "name": "Coagulation & Hemostasis",
    "nameAr": "تخثر الدم والإرقاء",
    "icon": "ShieldAlert"
  },
  "iron": {
    "name": "Iron Studies & Metabolism",
    "nameAr": "دراسات وأيض الحديد",
    "icon": "Magnet"
  },
  "bmp": {
    "name": "Basic Metabolic Panel",
    "nameAr": "لوحة الاستقلاب الأساسية",
    "icon": "Activity"
  },
  "cmp": {
    "name": "Comprehensive Metabolic Panel",
    "nameAr": "لوحة الاستقلاب الشاملة",
    "icon": "HeartPulse"
  },
  "lft": {
    "name": "Liver Function Tests",
    "nameAr": "وظائف وإنزيمات الكبد",
    "icon": "Flame"
  },
  "lipids": {
    "name": "Lipid Profile & Atherosclerosis",
    "nameAr": "الشحوم والدهون والكولسترول",
    "icon": "Layers"
  },
  "thyroid": {
    "name": "Thyroid Function Tests",
    "nameAr": "وظائف الغدة الدرقية",
    "icon": "Zap"
  },
  "cardiac": {
    "name": "Cardiac Biomarkers",
    "nameAr": "علامات القلب والنوبات القلبية",
    "icon": "Heart"
  },
  "diabetes": {
    "name": "Diabetes & Glycemic Markers",
    "nameAr": "داء السكري واستقلاب السكر",
    "icon": "PieChart"
  },
  "renal": {
    "name": "Renal Function & Electrolytes",
    "nameAr": "وظائف الكلى والكهارل",
    "icon": "Filter"
  },
  "ua": {
    "name": "Urinalysis & Microscopy",
    "nameAr": "تحليل البول والفحص المجهري",
    "icon": "TestTube"
  },
  "hormones": {
    "name": "Reproductive Hormones & Fertility",
    "nameAr": "الهرمونات التناسلية والخصوبة",
    "icon": "Sparkles"
  },
  "adrenal": {
    "name": "Adrenal & Steroid Hormones",
    "nameAr": "هرمونات الغدة الكظرية والستيرويدات",
    "icon": "Compass"
  },
  "pituitary": {
    "name": "Pituitary & Neuroendocrine",
    "nameAr": "هرمونات النخامية والغدد العصبية",
    "icon": "Cpu"
  },
  "vitamins": {
    "name": "Vitamins",
    "nameAr": "الفيتامينات",
    "icon": "Sun"
  },
  "minerals": {
    "name": "Minerals & Trace Elements",
    "nameAr": "المعادن والعناصر الزهيدة",
    "icon": "Gem"
  },
  "tumor_markers": {
    "name": "Tumor Markers & Oncology",
    "nameAr": "دلالات الأورام والسرطان",
    "icon": "Target"
  },
  "autoimmune": {
    "name": "Autoimmune & Serology",
    "nameAr": "المناعة الذاتية والأجسام المضادة",
    "icon": "Shield"
  },
  "inflammatory": {
    "name": "Inflammatory Markers & Acute Phase",
    "nameAr": "علامات الالتهاب والطور الحاد",
    "icon": "Flame"
  },
  "csf": {
    "name": "Cerebrospinal Fluid Analysis",
    "nameAr": "تحليل السائل الدماغي الشوكي",
    "icon": "Brain"
  },
  "pleural": {
    "name": "Pleural Fluid Analysis",
    "nameAr": "تحليل سائل الجنب",
    "icon": "Wind"
  },
  "ascites": {
    "name": "Ascitic Fluid Analysis",
    "nameAr": "تحليل سائل الاستسقاء الصفاقي",
    "icon": "Waves"
  },
  "synovial": {
    "name": "Synovial Fluid Analysis",
    "nameAr": "تحليل سائل المفاصل",
    "icon": "Bone"
  },
  "stool": {
    "name": "Stool Studies & Fecal Markers",
    "nameAr": "فحوصات البراز والعلامات المعوية",
    "icon": "FileText"
  },
  "semen": {
    "name": "Semen Analysis (WHO 6th Ed.)",
    "nameAr": "تحليل السائل المنوي (منظمة الصحة)",
    "icon": "UserCheck"
  },
  "tdm": {
    "name": "Therapeutic Drug Monitoring & Toxicology",
    "nameAr": "مراقبة الأدوية العلاجية والسموم",
    "icon": "Pill"
  },
  "infectious": {
    "name": "Infectious Disease Serology",
    "nameAr": "مصليات الأمراض الإنتانية والمعدية",
    "icon": "Bug"
  },
  "allergy": {
    "name": "Allergy & Clinical Immunology",
    "nameAr": "الحساسية والمناعة السريرية",
    "icon": "Feather"
  },
  "bone": {
    "name": "Bone Markers & Mineral Metabolism",
    "nameAr": "واسمات استقلاب العظام والمعادن",
    "icon": "Boxes"
  },
  "pancreatic": {
    "name": "Pancreatic & GI Function",
    "nameAr": "وظائف البنكرياس والجهاز الهضمي",
    "icon": "Crosshair"
  },
  "genetics": {
    "name": "Clinical Genetics & Pharmacogenomics",
    "nameAr": "الوراثة السريرية وعلم الصيدلة الجيني",
    "icon": "Dna"
  },
  "pregnancy": {
    "name": "Obstetrics & Fetal-Maternal Medicine",
    "nameAr": "طب التوليد وصحة الأم والجنين",
    "icon": "Baby"
  },
  "abg": {
    "name": "Arterial Blood Gas & Acid-Base",
    "nameAr": "غازات الدم الشرياني وتوازن الحمض والأساس",
    "icon": "Gauge"
  },
  "pediatric": {
    "name": "Pediatric & Neonatal Norms",
    "nameAr": "المعايير الحيوية ومعالم التطور للأطفال",
    "icon": "Smile"
  }
};

const MQ_LABS = [
  {
    "id": "hemoglobin",
    "name": "Hemoglobin",
    "nameAr": "الهيموجلوبين",
    "aliases": [
      "Hgb",
      "Hb",
      "HGB",
      "خضاب الدم",
      "الخضاب"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "13.5 – 17.5",
        "unit": "g/dL"
      },
      {
        "group": "Adult Females",
        "value": "12.0 – 16.0",
        "unit": "g/dL"
      },
      {
        "group": "Pregnant (1st & 3rd tri)",
        "value": "≥ 11.0",
        "unit": "g/dL"
      },
      {
        "group": "Pregnant (2nd tri)",
        "value": "≥ 10.5",
        "unit": "g/dL"
      },
      {
        "group": "Neonates (0-4 wk)",
        "value": "14.0 – 24.0",
        "unit": "g/dL"
      },
      {
        "group": "Infants (6mo-1yr)",
        "value": "10.0 – 14.0",
        "unit": "g/dL"
      },
      {
        "group": "Children (1-6yr)",
        "value": "11.0 – 14.0",
        "unit": "g/dL"
      },
      {
        "group": "Children (6-12yr)",
        "value": "11.5 – 15.5",
        "unit": "g/dL"
      },
      {
        "group": "Teens M (12-18yr)",
        "value": "13.0 – 16.0",
        "unit": "g/dL"
      },
      {
        "group": "Teens F (12-18yr)",
        "value": "12.0 – 16.0",
        "unit": "g/dL"
      },
      {
        "group": "Elderly M (>65yr)",
        "value": "12.6 – 17.4",
        "unit": "g/dL"
      },
      {
        "group": "Elderly F (>65yr)",
        "value": "11.7 – 16.1",
        "unit": "g/dL"
      },
      {
        "group": "Critical Low",
        "value": "< 7.0",
        "unit": "g/dL",
        "alert": "critical_low",
        "note": "Transfusion threshold in stable patients"
      },
      {
        "group": "Critical High",
        "value": "> 20.0",
        "unit": "g/dL",
        "alert": "critical_high"
      }
    ],
    "significance": "Decreased: anemias (iron, B12, folate, hemolytic, aplastic), acute blood loss, chronic disease. Increased: polycythemia vera, secondary polycythemia (COPD, high altitude), dehydration.",
    "significanceAr": "منخفض: فقر الدم (نقص حديد، B12، فولات، انحلالي، إعياء نخاع)، نزيف حاد، أمراض مزمنة. مرتفع: كثرة الحمر الحقيقية، كثرة الحمر الثانوية (COPD، الارتفاع)، الجفاف.",
    "tags": [
      "hematology",
      "cbc",
      "anemia",
      "blood",
      "routine",
      "hemoglobin"
    ]
  },
  {
    "id": "hematocrit",
    "name": "Hematocrit",
    "nameAr": "الهيماتوكريت (حجم الخلايا المكدسة)",
    "aliases": [
      "HCT",
      "Hct",
      "PCV",
      "حجم الكريات الحمر المكدسة"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "41.0 – 53.0",
        "unit": "%"
      },
      {
        "group": "Adult Females",
        "value": "36.0 – 46.0",
        "unit": "%"
      },
      {
        "group": "Pregnant (1st & 3rd tri)",
        "value": "33.0 – 39.0",
        "unit": "%"
      },
      {
        "group": "Pregnant (2nd tri)",
        "value": "31.0 – 38.0",
        "unit": "%"
      },
      {
        "group": "Neonates (0-4 wk)",
        "value": "44.0 – 72.0",
        "unit": "%"
      },
      {
        "group": "Infants (6mo-1yr)",
        "value": "31.0 – 41.0",
        "unit": "%"
      },
      {
        "group": "Children (1-6yr)",
        "value": "33.0 – 42.0",
        "unit": "%"
      },
      {
        "group": "Children (6-12yr)",
        "value": "35.0 – 45.0",
        "unit": "%"
      },
      {
        "group": "Teens M (12-18yr)",
        "value": "37.0 – 49.0",
        "unit": "%"
      },
      {
        "group": "Teens F (12-18yr)",
        "value": "36.0 – 46.0",
        "unit": "%"
      },
      {
        "group": "Critical Low",
        "value": "< 21.0",
        "unit": "%",
        "alert": "critical_low",
        "note": "Severe tissue hypoxia risk"
      },
      {
        "group": "Critical High",
        "value": "> 60.0",
        "unit": "%",
        "alert": "critical_high",
        "note": "Hyperviscosity and thrombosis risk"
      }
    ],
    "significance": "Follows hemoglobin (roughly Hct% = Hb x 3). Decreased in anemia and volume overload; increased in erythrocytosis and severe dehydration.",
    "significanceAr": "يتبع الهيموجلوبين (تقريباً الهيماتوكريت = الخضاب × 3). ينخفض في فقر الدم وزيادة حجم السوائل، ويرتفع في زيادة الكريات الحمر والجفاف الشديد.",
    "tags": [
      "hematology",
      "cbc",
      "pcv",
      "viscosity"
    ]
  },
  {
    "id": "rbc_count",
    "name": "Red Blood Cell Count",
    "nameAr": "تعداد كريات الدم الحمراء",
    "aliases": [
      "RBC",
      "Erythrocyte Count",
      "كريات الدم الحمراء"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "4.5 – 5.9",
        "unit": "x10^6/µL"
      },
      {
        "group": "Adult Females",
        "value": "4.1 – 5.1",
        "unit": "x10^6/µL"
      },
      {
        "group": "Neonates",
        "value": "4.5 – 6.5",
        "unit": "x10^6/µL"
      },
      {
        "group": "Infants (1-12mo)",
        "value": "3.5 – 5.2",
        "unit": "x10^6/µL"
      },
      {
        "group": "Children (1-6yr)",
        "value": "3.9 – 5.3",
        "unit": "x10^6/µL"
      },
      {
        "group": "Children (6-12yr)",
        "value": "4.0 – 5.2",
        "unit": "x10^6/µL"
      },
      {
        "group": "Critical Low",
        "value": "< 2.0",
        "unit": "x10^6/µL",
        "alert": "critical_low"
      },
      {
        "group": "Critical High",
        "value": "> 7.0",
        "unit": "x10^6/µL",
        "alert": "critical_high"
      }
    ],
    "significance": "Essential for evaluating erythropoietic activity, acute/chronic blood loss, and polycythemic syndromes.",
    "significanceAr": "أساسي لتقييم نشاط تكوين الكريات الحمر والنزف الحاد أو المزمن ومتلازمات فرط الكريات الحمر.",
    "tags": [
      "hematology",
      "cbc",
      "erythrocyte"
    ]
  },
  {
    "id": "mcv",
    "name": "Mean Corpuscular Volume",
    "nameAr": "الحجم الكروي الوسطي للكريات",
    "aliases": [
      "MCV",
      "متوسط حجم الكرية"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "80.0 – 100.0",
        "unit": "fL"
      },
      {
        "group": "Neonates",
        "value": "95.0 – 125.0",
        "unit": "fL"
      },
      {
        "group": "Infants (6mo-1yr)",
        "value": "70.0 – 86.0",
        "unit": "fL"
      },
      {
        "group": "Children (1-6yr)",
        "value": "73.0 – 89.0",
        "unit": "fL"
      },
      {
        "group": "Children (6-12yr)",
        "value": "77.0 – 95.0",
        "unit": "fL"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "82.0 – 102.0",
        "unit": "fL"
      }
    ],
    "significance": "Classifies anemia into microcytic (<80: iron deficiency, thalassemia, sideroblastic), normocytic (80-100: chronic disease, renal failure, acute hemorrhage), and macrocytic (>100: B12/folate deficiency, myelodysplasia, alcohol, liver disease).",
    "significanceAr": "يصنف فقر الدم إلى صغير الكريات (<80: نقص حديد، ثلاسيميا)، وسوي الكريات (80-100: أمراض مزمنة، فشل كلوي)، وكبير الكريات (>100: نقص B12/فولات، أمراض الكبد).",
    "tags": [
      "hematology",
      "cbc",
      "anemia",
      "mcv",
      "indices"
    ]
  },
  {
    "id": "mch",
    "name": "Mean Corpuscular Hemoglobin",
    "nameAr": "متوسط هيموجلوبين الكرية",
    "aliases": [
      "MCH",
      "متوسط خضاب الكرية"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "27.0 – 33.0",
        "unit": "pg"
      },
      {
        "group": "Neonates",
        "value": "31.0 – 37.0",
        "unit": "pg"
      },
      {
        "group": "Infants (6mo-1yr)",
        "value": "23.0 – 31.0",
        "unit": "pg"
      },
      {
        "group": "Children (1-12yr)",
        "value": "24.0 – 32.0",
        "unit": "pg"
      }
    ],
    "significance": "Average weight of hemoglobin per RBC. Parallels MCV; low in hypochromic microcytic anemias, high in macrocytic anemias.",
    "significanceAr": "متوسط وزن الهيموجلوبين في الكرية الحمراء الواحدة. يتناسب طردياً مع MCV؛ ينخفض في فقر الدم ناقص الصباغ ويرتفع في كبير الكريات.",
    "tags": [
      "hematology",
      "cbc",
      "indices",
      "mch"
    ]
  },
  {
    "id": "mchc",
    "name": "Mean Corpuscular Hemoglobin Concentration",
    "nameAr": "تركيز هيموجلوبين الكرية الوسطي",
    "aliases": [
      "MCHC",
      "تركيز الخضاب الكروي"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "32.0 – 36.0",
        "unit": "g/dL"
      },
      {
        "group": "Neonates",
        "value": "30.0 – 36.0",
        "unit": "g/dL"
      },
      {
        "group": "Infants/Children",
        "value": "32.0 – 36.0",
        "unit": "g/dL"
      },
      {
        "group": "Critical High",
        "value": "> 37.0",
        "unit": "g/dL",
        "note": "Suspect hereditary spherocytosis or cold agglutinins"
      }
    ],
    "significance": "Average concentration of hemoglobin in a given volume of packed RBCs. Elevated exclusively in hereditary spherocytosis and severe cold agglutinin disease.",
    "significanceAr": "متوسط تركيز الهيموجلوبين في حجم معين من الكريات المكدسة. يرتفع بشكل كلاسيكي في تكور الكريات الحمر الوراثي أو التراص البارد.",
    "tags": [
      "hematology",
      "cbc",
      "spherocytosis",
      "mchc"
    ]
  },
  {
    "id": "rdw_cv",
    "name": "Red Cell Distribution Width (RDW-CV)",
    "nameAr": "سعة توزيع كريات الدم الحمراء (معامل الاختلاف)",
    "aliases": [
      "RDW",
      "RDW-CV",
      "مدى انتشار الكريات الحمر"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "11.5 – 14.5",
        "unit": "%"
      },
      {
        "group": "Neonates",
        "value": "14.5 – 18.5",
        "unit": "%"
      },
      {
        "group": "Infants & Children",
        "value": "11.5 – 15.0",
        "unit": "%"
      },
      {
        "group": "High Anisocytosis",
        "value": "> 15.5",
        "unit": "%",
        "note": "High variability in RBC sizes"
      }
    ],
    "significance": "Measures anisocytosis. Elevated in iron deficiency anemia (distinguishes it from thalassemia trait where RDW is typically normal) and mixed nutrient deficiencies.",
    "significanceAr": "مقياس لتفاوت أحجام الكريات الحمر (Anisocytosis). يرتفع في فقر دم نقص الحديد بينما يكون طبيعياً في سمة الثلاسيميا الصغرى.",
    "tags": [
      "hematology",
      "cbc",
      "rdw",
      "anisocytosis"
    ]
  },
  {
    "id": "rdw_sd",
    "name": "Red Cell Distribution Width Standard Deviation (RDW-SD)",
    "nameAr": "الانحراف المعياري لسعة توزيع الكريات الحمر",
    "aliases": [
      "RDW-SD"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "39.0 – 46.0",
        "unit": "fL"
      },
      {
        "group": "Elevated",
        "value": "> 47.0",
        "unit": "fL",
        "note": "Indicates mixed cell populations (dimorphic RBCs)"
      }
    ],
    "significance": "Direct volumetric measurement of RBC distribution width at 20% height of distribution curve. Independent of MCV.",
    "significanceAr": "قياس حجمي مباشر لعرض منحنى توزيع الكريات الحمر دون التأثر بالحجم الوسطي MCV.",
    "tags": [
      "hematology",
      "cbc",
      "rdw-sd"
    ]
  },
  {
    "id": "wbc_total",
    "name": "Total White Blood Cell Count",
    "nameAr": "تعداد كريات الدم البيضاء الكلي",
    "aliases": [
      "WBC",
      "White Blood Count",
      "الكريات البيض",
      "Leukocytes"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "4.5 – 11.0",
        "unit": "x10^3/µL"
      },
      {
        "group": "Neonates (0-4 wk)",
        "value": "9.0 – 30.0",
        "unit": "x10^3/µL"
      },
      {
        "group": "Infants (1-12mo)",
        "value": "6.0 – 17.5",
        "unit": "x10^3/µL"
      },
      {
        "group": "Children (1-6yr)",
        "value": "5.0 – 15.5",
        "unit": "x10^3/µL"
      },
      {
        "group": "Children (6-12yr)",
        "value": "4.5 – 13.5",
        "unit": "x10^3/µL"
      },
      {
        "group": "Pregnant (3rd trimester)",
        "value": "5.6 – 16.9",
        "unit": "x10^3/µL"
      },
      {
        "group": "Critical Low",
        "value": "< 2.0",
        "unit": "x10^3/µL",
        "alert": "critical_low",
        "note": "High risk of life-threatening infection"
      },
      {
        "group": "Critical High",
        "value": "> 30.0",
        "unit": "x10^3/µL",
        "alert": "critical_high",
        "note": "Leukemoid reaction vs acute leukemia"
      }
    ],
    "significance": "Leukocytosis occurs in acute bacterial infection, inflammation, tissue necrosis, leukemia, stress, corticosteroids. Leukopenia occurs in viral infection, aplastic anemia, bone marrow infiltration, chemotherapy.",
    "significanceAr": "كثرة الكريات البيض تحدث في الإنتانات البكتيرية الحادة والالتهابات والابيضاض. ونقصها يحدث في الإنتانات الفيروسية وقصور النخاع والأدوية المثبطة.",
    "tags": [
      "hematology",
      "cbc",
      "wbc",
      "infection",
      "leukocyte"
    ]
  },
  {
    "id": "neutrophils_abs",
    "name": "Absolute Neutrophil Count",
    "nameAr": "تعداد العدلات المطلق",
    "aliases": [
      "ANC",
      "Neutrophils Absolute",
      "العدلات المطلقة"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "1.8 – 7.7",
        "unit": "x10^3/µL"
      },
      {
        "group": "Neonates",
        "value": "6.0 – 26.0",
        "unit": "x10^3/µL"
      },
      {
        "group": "Children (1-6yr)",
        "value": "1.5 – 8.5",
        "unit": "x10^3/µL"
      },
      {
        "group": "Mild Neutropenia",
        "value": "1.0 – 1.5",
        "unit": "x10^3/µL"
      },
      {
        "group": "Moderate Neutropenia",
        "value": "0.5 – 1.0",
        "unit": "x10^3/µL"
      },
      {
        "group": "Critical Low (Severe/Agranulocytosis)",
        "value": "< 0.5",
        "unit": "x10^3/µL",
        "alert": "critical_low",
        "note": "Severe neutropenia / febrile neutropenia risk"
      }
    ],
    "significance": "Primary cellular defense against acute bacterial and fungal infections. ANC < 0.5 is an oncologic emergency requiring empiric broad-spectrum antibiotics if febrile.",
    "significanceAr": "خط الدفاع الأول ضد العدوى البكتيرية والفطرية. هبوط العدلات لأقل من 0.5 يعد حالة طارئة شديدة الخطورة عند ترافقها مع حرارة.",
    "tags": [
      "hematology",
      "cbc",
      "anc",
      "neutrophils",
      "infection"
    ]
  },
  {
    "id": "neutrophils_pct",
    "name": "Neutrophils Percentage",
    "nameAr": "نسبة العدلات المئوية",
    "aliases": [
      "Neut %",
      "Segs %",
      "Polys %"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "40.0 – 70.0",
        "unit": "%"
      },
      {
        "group": "Neonates",
        "value": "50.0 – 70.0",
        "unit": "%"
      },
      {
        "group": "Infants/Toddlers (1-2yr)",
        "value": "20.0 – 45.0",
        "unit": "%"
      },
      {
        "group": "Left Shift / Neutrophilia",
        "value": "> 80.0",
        "unit": "%",
        "note": "High likelihood of bacterial infection or bandemia"
      }
    ],
    "significance": "Increased percentage (with or without left shift/band cells) is strongly indicative of acute bacterial infections or tissue infarction.",
    "significanceAr": "ارتفاع النسبة المئوية للعدلات مع ظهور الأشكال غير الناضجة (انحراف لليسار) يوجه بقوة نحو عدوى بكتيرية حادة أو احتشاء نسيجي.",
    "tags": [
      "hematology",
      "cbc",
      "differential",
      "neutrophils"
    ]
  },
  {
    "id": "lymphocytes_abs",
    "name": "Absolute Lymphocyte Count",
    "nameAr": "تعداد اللمفاويات المطلق",
    "aliases": [
      "ALC",
      "Lymphocytes Absolute",
      "اللمفاويات المطلقة"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "1.0 – 4.0",
        "unit": "x10^3/µL"
      },
      {
        "group": "Infants (1-12mo)",
        "value": "4.0 – 10.5",
        "unit": "x10^3/µL"
      },
      {
        "group": "Children (1-6yr)",
        "value": "2.0 – 8.0",
        "unit": "x10^3/µL"
      },
      {
        "group": "Children (6-12yr)",
        "value": "1.5 – 6.0",
        "unit": "x10^3/µL"
      },
      {
        "group": "Lymphopenia",
        "value": "< 1.0",
        "unit": "x10^3/µL",
        "note": "Associated with immunodeficiency, viral illness, systemic lupus, steroids"
      },
      {
        "group": "Critical Low",
        "value": "< 0.5",
        "unit": "x10^3/µL",
        "alert": "critical_low",
        "note": "Severe cellular immunodeficiency"
      }
    ],
    "significance": "Essential for adaptive immunity. Increased in viral infections (EBV, CMV, hepatitis, pertussis) and CLL. Decreased in HIV, steroid therapy, severe COVID-19, and malnutrition.",
    "significanceAr": "أساسي للمناعة التكيفية. يرتفع في الإنتانات الفيروسية (كثرة الوحيدات الخمجية، السعال الديكي) وابيضاض الدم اللمفاوي المزمن، وينخفض في الإيدز والكورتيزون.",
    "tags": [
      "hematology",
      "cbc",
      "lymphocytes",
      "immunity"
    ]
  },
  {
    "id": "lymphocytes_pct",
    "name": "Lymphocytes Percentage",
    "nameAr": "نسبة اللمفاويات المئوية",
    "aliases": [
      "Lymph %",
      "نسبة الخلايا اللمفاوية"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "20.0 – 40.0",
        "unit": "%"
      },
      {
        "group": "Infants (1-12mo)",
        "value": "50.0 – 70.0",
        "unit": "%"
      },
      {
        "group": "Children (1-6yr)",
        "value": "35.0 – 60.0",
        "unit": "%"
      },
      {
        "group": "Relative Lymphocytosis",
        "value": "> 50.0",
        "unit": "%",
        "note": "Viral etiology or neutropenia"
      }
    ],
    "significance": "Normal predominance in early childhood. In adults, relative lymphocytosis occurs in neutropenia or viral infections.",
    "significanceAr": "تكون هي السائدة طبيعياً في مرحلة الطفولة المبكرة. في البالغين يشير ارتفاعها النسبي لعدوى فيروسية أو لنقص نسبي في العدلات.",
    "tags": [
      "hematology",
      "cbc",
      "differential",
      "lymphocytes"
    ]
  },
  {
    "id": "monocytes_abs",
    "name": "Absolute Monocyte Count",
    "nameAr": "تعداد الوحيدات المطلق",
    "aliases": [
      "Monocytes Absolute",
      "الوحيدات المطلقة"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "0.2 – 0.8",
        "unit": "x10^3/µL"
      },
      {
        "group": "Neonates",
        "value": "0.4 – 1.8",
        "unit": "x10^3/µL"
      },
      {
        "group": "Children",
        "value": "0.2 – 1.0",
        "unit": "x10^3/µL"
      },
      {
        "group": "Monocytosis",
        "value": "> 1.0",
        "unit": "x10^3/µL",
        "note": "Chronic infection, CMML, endocarditis, recovery phase of marrow"
      }
    ],
    "significance": "Monocytosis seen in chronic infections (tuberculosis, subacute bacterial endocarditis, brucellosis), autoimmune disease, and CMML.",
    "significanceAr": "ترتفع الوحيدات في الالتهابات المزمنة (السل، التهاب شغاف القلب، الحمى المالطية)، وأمراض المناعة الذاتية، وسرطان الدم الوحيدي.",
    "tags": [
      "hematology",
      "cbc",
      "monocytes"
    ]
  },
  {
    "id": "monocytes_pct",
    "name": "Monocytes Percentage",
    "nameAr": "نسبة الوحيدات المئوية",
    "aliases": [
      "Mono %",
      "نسبة الوحيدات"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "2.0 – 8.0",
        "unit": "%"
      },
      {
        "group": "Infants & Children",
        "value": "3.0 – 10.0",
        "unit": "%"
      },
      {
        "group": "Elevated",
        "value": "> 10.0",
        "unit": "%",
        "note": "Suggests monocytosis or active tissue remodeling"
      }
    ],
    "significance": "Phagocytic cells that mature into macrophages in tissues.",
    "significanceAr": "خلايا بلعمية تتحول إلى بالعات نسيجية في الأعضاء المختلفة.",
    "tags": [
      "hematology",
      "cbc",
      "monocytes"
    ]
  },
  {
    "id": "eosinophils_abs",
    "name": "Absolute Eosinophil Count",
    "nameAr": "تعداد الحمضات المطلق",
    "aliases": [
      "AEC",
      "Eosinophils Absolute",
      "الحمضات المطلقة"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "0.04 – 0.44",
        "unit": "x10^3/µL"
      },
      {
        "group": "Children",
        "value": "0.04 – 0.50",
        "unit": "x10^3/µL"
      },
      {
        "group": "Mild Eosinophilia",
        "value": "0.5 – 1.5",
        "unit": "x10^3/µL"
      },
      {
        "group": "Hypereosinophilia",
        "value": "> 1.5",
        "unit": "x10^3/µL",
        "alert": "critical_high",
        "note": "Risk of end-organ damage (hypereosinophilic syndrome, EGPA)"
      }
    ],
    "significance": "Increased in allergic conditions (asthma, allergic rhinitis, drug reactions), parasitic infections (invasive helminths), Churg-Strauss, Addison disease, and lymphoma.",
    "significanceAr": "ترتفع في أمراض الحساسية (الربو، التحسس الدوائي)، والعدوى بالطفيليات الديدانية، ومتلازمة فرط الحمضات، وداء أديسون.",
    "tags": [
      "hematology",
      "cbc",
      "eosinophils",
      "allergy",
      "parasites"
    ]
  },
  {
    "id": "eosinophils_pct",
    "name": "Eosinophils Percentage",
    "nameAr": "نسبة الحمضات المئوية",
    "aliases": [
      "Eos %",
      "نسبة الحمضات"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "1.0 – 4.0",
        "unit": "%"
      },
      {
        "group": "Children",
        "value": "1.0 – 5.0",
        "unit": "%"
      },
      {
        "group": "Elevated",
        "value": "> 6.0",
        "unit": "%",
        "note": "Allergic or parasitic etiology likely"
      }
    ],
    "significance": "Exceeding 5% usually prompts evaluation for atopy or parasitic exposure.",
    "significanceAr": "تجاوز نسبة 5% يستدعي تقصي وجود أرجية تأتبية أو إصابة طفيلية.",
    "tags": [
      "hematology",
      "cbc",
      "eosinophils"
    ]
  },
  {
    "id": "basophils_abs",
    "name": "Absolute Basophil Count",
    "nameAr": "تعداد الأسسات المطلق",
    "aliases": [
      "Basophils Absolute",
      "الأسسات المطلقة"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "0.01 – 0.10",
        "unit": "x10^3/µL"
      },
      {
        "group": "Basophilia",
        "value": "> 0.20",
        "unit": "x10^3/µL",
        "note": "Hallmark of myeloproliferative disorders (CML, polycythemia vera)"
      }
    ],
    "significance": "Basophilia is a hallmark of myeloproliferative neoplasms, especially Chronic Myeloid Leukemia (CML).",
    "significanceAr": "كثرة الأسسات علامة مميزة للأورام التكاثرية النخاعية ولا سيما ابيضاض الدم النقوي المزمن (CML).",
    "tags": [
      "hematology",
      "cbc",
      "basophils",
      "cml"
    ]
  },
  {
    "id": "basophils_pct",
    "name": "Basophils Percentage",
    "nameAr": "نسبة الأسسات المئوية",
    "aliases": [
      "Baso %",
      "نسبة الأسسات"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "0.5 – 1.0",
        "unit": "%"
      },
      {
        "group": "Elevated",
        "value": "> 2.0",
        "unit": "%",
        "note": "Suspect myeloproliferative neoplasm"
      }
    ],
    "significance": "Least abundant leukocyte in peripheral blood. Granules contain histamine and heparin.",
    "significanceAr": "أقل الكريات البيض عدداً في الدم المحيطي وتحتوي حبيباتها على الهيستامين والهيبارين.",
    "tags": [
      "hematology",
      "cbc",
      "basophils"
    ]
  },
  {
    "id": "platelets",
    "name": "Platelet Count",
    "nameAr": "تعداد الصفائح الدموية",
    "aliases": [
      "PLT",
      "Platelets",
      "Thrombocytes",
      "الصفائح"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "150 – 450",
        "unit": "x10^3/µL"
      },
      {
        "group": "Neonates",
        "value": "100 – 450",
        "unit": "x10^3/µL"
      },
      {
        "group": "Infants & Children",
        "value": "150 – 450",
        "unit": "x10^3/µL"
      },
      {
        "group": "Mild Thrombocytopenia",
        "value": "100 – 149",
        "unit": "x10^3/µL"
      },
      {
        "group": "Moderate Thrombocytopenia",
        "value": "50 – 99",
        "unit": "x10^3/µL"
      },
      {
        "group": "Severe Thrombocytopenia",
        "value": "< 50",
        "unit": "x10^3/µL",
        "note": "Bleeding risk with trauma or invasive procedures"
      },
      {
        "group": "Critical Low",
        "value": "< 20",
        "unit": "x10^3/µL",
        "alert": "critical_low",
        "note": "Spontaneous life-threatening hemorrhage risk (<10 prophylactic transfusion threshold)"
      },
      {
        "group": "Critical High",
        "value": "> 1000",
        "unit": "x10^3/µL",
        "alert": "critical_high",
        "note": "Extreme thrombocytosis with paradox bleeding (acquired vWD) or thrombosis"
      }
    ],
    "significance": "Thrombocytopenia: ITP, TTP, DIC, HIT, splenic sequestration, cirrhosis, marrow suppression. Thrombocytosis: reactive (iron deficiency, infection, malignancy) vs essential thrombocythemia.",
    "significanceAr": "نقص الصفائح: فرفرية نقص الصفائح المناعية، التخثر المنتشر داخل الأوعية (DIC)، تضخم الطحال. كثرة الصفائح: ارتكاسية (التهاب، نقص حديد) أو ورمية حقيقية.",
    "tags": [
      "hematology",
      "cbc",
      "platelets",
      "bleeding",
      "thrombocytopenia"
    ]
  },
  {
    "id": "mpv",
    "name": "Mean Platelet Volume",
    "nameAr": "الحجم الوسطي للصفائح الدموية",
    "aliases": [
      "MPV",
      "متوسط حجم الصفيحة"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "7.4 – 11.4",
        "unit": "fL"
      },
      {
        "group": "Children",
        "value": "7.0 – 10.5",
        "unit": "fL"
      },
      {
        "group": "Elevated (Young Platelets)",
        "value": "> 11.5",
        "unit": "fL",
        "note": "Accelerated platelet destruction / turnover (e.g. ITP, Bernard-Soulier)"
      },
      {
        "group": "Decreased (Impaired Production)",
        "value": "< 7.0",
        "unit": "fL",
        "note": "Marrow hypoplasia, Wiskott-Aldrich syndrome"
      }
    ],
    "significance": "Reflects platelet turnover and size. High MPV indicates active thrombopoiesis with release of young reticulated platelets (ITP). Low MPV seen in aplastic anemia and Wiskott-Aldrich.",
    "significanceAr": "يعكس معدل تجدد الصفائح؛ يدل ارتفاعه على إنتاج نشط لصفائح فتية كبرى (كما في ITP)، بينما يشير انخفاضه لقصور إنتاج النخاع أو متلازمة ويسكوت-ألدريتش.",
    "tags": [
      "hematology",
      "cbc",
      "mpv",
      "platelet-size"
    ]
  },
  {
    "id": "pdw",
    "name": "Platelet Distribution Width",
    "nameAr": "سعة توزيع الصفائح الدموية",
    "aliases": [
      "PDW"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "9.0 – 17.0",
        "unit": "fL"
      },
      {
        "group": "Elevated Anisocytosis",
        "value": "> 17.0",
        "unit": "fL",
        "note": "High variability in platelet sizes"
      }
    ],
    "significance": "Indicator of variation in platelet size (platelet anisocytosis).",
    "significanceAr": "مؤشر على تباين أحجام الصفائح الدموية في الدوران المحيطي.",
    "tags": [
      "hematology",
      "cbc",
      "pdw"
    ]
  },
  {
    "id": "pct_plateletcrit",
    "name": "Plateletcrit (PCT)",
    "nameAr": "الهيماتوكريت الصفيحي",
    "aliases": [
      "PCT",
      "Plateletcrit"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "0.15 – 0.40",
        "unit": "%"
      },
      {
        "group": "Abnormal Low",
        "value": "< 0.15",
        "unit": "%"
      }
    ],
    "significance": "Volume occupied by platelets in the blood (analogous to hematocrit for RBCs).",
    "significanceAr": "حجم الدم الذي تشغله الصفائح الدموية (مماثل للهيماتوكريت بالنسبة للكريات الحمر).",
    "tags": [
      "hematology",
      "cbc",
      "pct"
    ]
  },
  {
    "id": "reticulocytes_pct",
    "name": "Reticulocyte Percentage",
    "nameAr": "النسبة المئوية للشبكيات",
    "aliases": [
      "Retic %",
      "Reticulocytes",
      "الخلايا الشبكية"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "0.5 – 2.0",
        "unit": "%"
      },
      {
        "group": "Neonates (0-4 wk)",
        "value": "2.5 – 6.5",
        "unit": "%"
      },
      {
        "group": "Infants (1-12mo)",
        "value": "0.5 – 3.0",
        "unit": "%"
      },
      {
        "group": "Appropriate Anemia Response",
        "value": "> 3.0",
        "unit": "%",
        "note": "Indicates active marrow regeneration"
      },
      {
        "group": "Blunted / Hypoproliferative",
        "value": "< 0.5",
        "unit": "%",
        "note": "Aplastic anemia, nutritional deficiencies, pure red cell aplasia"
      },
      {
        "group": "Marked Hemolysis / Acute Bleed",
        "value": "> 5.0",
        "unit": "%",
        "note": "Vigorous erythropoiesis"
      }
    ],
    "significance": "Distinguishes hyperproliferative anemias (hemolysis, acute blood loss response) from hypoproliferative anemias (iron, B12, folate deficiency, renal failure, aplastic anemia).",
    "significanceAr": "يفرق بين فقر الدم مفرط التكاثر (انحلال الدم، الاستجابة للنزف الحاد) وفقر الدم ناقص الإنتاج (نقص التغذية، الفشل الكلوي، فشل النخاع).",
    "tags": [
      "hematology",
      "cbc",
      "reticulocytes",
      "anemia-workup"
    ]
  },
  {
    "id": "reticulocytes_abs",
    "name": "Absolute Reticulocyte Count",
    "nameAr": "تعداد الشبكيات المطلق",
    "aliases": [
      "ARC",
      "Absolute Retics",
      "الشبكيات المطلقة"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults",
        "value": "25 – 100",
        "unit": "x10^3/µL"
      },
      {
        "group": "Neonates",
        "value": "100 – 250",
        "unit": "x10^3/µL"
      },
      {
        "group": "Hypoproliferative",
        "value": "< 25",
        "unit": "x10^3/µL"
      },
      {
        "group": "Regenerative Response",
        "value": "> 120",
        "unit": "x10^3/µL"
      }
    ],
    "significance": "More reliable than percentage because it is not distorted by anemia severity.",
    "significanceAr": "أكثر دقة من النسبة المئوية لعدم تأثره بانخفاض تعداد الكريات الحمر الكلي في فقر الدم.",
    "tags": [
      "hematology",
      "cbc",
      "reticulocytes"
    ]
  },
  {
    "id": "irf",
    "name": "Immature Reticulocyte Fraction (IRF)",
    "nameAr": "جزء الشبكيات غير الناضجة",
    "aliases": [
      "IRF"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "5.0 – 15.0",
        "unit": "%"
      },
      {
        "group": "Early Marrow Engraftment",
        "value": "> 20.0",
        "unit": "%",
        "note": "Earliest indicator of hematopoietic recovery"
      }
    ],
    "significance": "Earliest sign of bone marrow recovery following chemotherapy or stem cell transplant (rises several days before total ANC or platelet recovery).",
    "significanceAr": "أبكر مؤشر على تعافي النخاع العظمي بعد العلاج الكيماوي أو زرع الخلايا الجذعية.",
    "tags": [
      "hematology",
      "cbc",
      "reticulocytes",
      "engraftment"
    ]
  },
  {
    "id": "chr_ret_he",
    "name": "Reticulocyte Hemoglobin Equivalent",
    "nameAr": "المحتوى الهيموجلوبيني للشبكيات",
    "aliases": [
      "CHr",
      "Ret-He",
      "Reticulocyte Hemoglobin"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "28.0 – 35.0",
        "unit": "pg"
      },
      {
        "group": "Functional Iron Deficiency",
        "value": "< 28.0",
        "unit": "pg",
        "note": "High sensitivity for iron-restricted erythropoiesis"
      }
    ],
    "significance": "Gold standard for detecting functional iron deficiency in hemodialysis and chronic inflammatory states, even when serum ferritin is elevated.",
    "significanceAr": "المعيار الذهبي لتشخيص نقص الحديد الوظيفي لدى مرضى الغسيل الكلوي والأمراض الالتهابية حتى مع ارتفاع الفيريتين.",
    "tags": [
      "hematology",
      "cbc",
      "iron",
      "reticulocytes"
    ]
  },
  {
    "id": "methemoglobin",
    "name": "Methemoglobin",
    "nameAr": "الميتهيموجلوبين",
    "aliases": [
      "MetHb",
      "ميثيموغلوبين"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 1.5",
        "unit": "%"
      },
      {
        "group": "Critical High (Cyanosis/Hypoxia)",
        "value": "> 10.0",
        "unit": "%",
        "alert": "critical_high",
        "note": "Symptoms appear; treat with Methylene Blue at >20-30% or if symptomatic"
      }
    ],
    "significance": "Oxidized iron (Fe3+) unable to bind oxygen. Triggered by dapsone, nitrates, local anesthetics (benzocaine, prilocaine). Chocolate cyanosis unresponsive to oxygen.",
    "significanceAr": "أكسدة حديد الهيم إلى الحالة الثلاثية، يفقد القدرة على ربط الأكسجين. تسببه أدوية كالدابسون والنيترات والتخدير الموضعي. يعالج بزرقة الميثيلين.",
    "tags": [
      "hematology",
      "cbc",
      "toxicology",
      "methemoglobin"
    ]
  },
  {
    "id": "carboxyhemoglobin",
    "name": "Carboxyhemoglobin",
    "nameAr": "كربوكسي هيموجلوبين (تسمم أول أكسيد الكربون)",
    "aliases": [
      "COHb",
      "Carbon Monoxide Hb"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Non-Smokers",
        "value": "< 2.0",
        "unit": "%"
      },
      {
        "group": "Cigarette Smokers",
        "value": "2.0 – 9.0",
        "unit": "%"
      },
      {
        "group": "Critical High (CO Poisoning)",
        "value": "> 15.0",
        "unit": "%",
        "alert": "critical_high",
        "note": "Headache, nausea, confusion; >25% warrants hyperbaric oxygen therapy"
      }
    ],
    "significance": "Carbon monoxide has 200x affinity for hemoglobin compared to O2, shifting curve to the left. Cherry-red lips, headache, syncope.",
    "significanceAr": "ينتج عن ارتباط أول أكسيد الكربون بالهيموجلوبين بقوة تفوق الأكسجين بـ 200 ضعف. يسبب نقص أكسجة نسيجية حادة وصداع وغيبوبة.",
    "tags": [
      "hematology",
      "cbc",
      "toxicology",
      "carbon-monoxide"
    ]
  },
  {
    "id": "hbf_fetal_hemoglobin",
    "name": "Fetal Hemoglobin (HbF)",
    "nameAr": "الهيموجلوبين الجنيني",
    "aliases": [
      "HbF",
      "Fetal Hemoglobin",
      "خضاب جنيني"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Newborns",
        "value": "60.0 – 85.0",
        "unit": "%"
      },
      {
        "group": "Infants (6mo)",
        "value": "5.0 – 10.0",
        "unit": "%"
      },
      {
        "group": "Adults (>1yr)",
        "value": "< 2.0",
        "unit": "%"
      },
      {
        "group": "Sickle Cell / Thalassemia Target (Hydroxyurea)",
        "value": "15.0 – 25.0",
        "unit": "%",
        "note": "Protective against sickling crisis"
      }
    ],
    "significance": "High oxygen affinity. Persists in hereditary persistence of fetal hemoglobin (HPFH), beta-thalassemia, and is pharmacologically induced by hydroxyurea to prevent sickling crises.",
    "significanceAr": "يمتاز بألفة عالية للأكسجين. يبقى مرتفعاً في الثلاسيميا ويتم تحفيز إنتاجه علاجياً بواسطة الهيدروكسي يوريا لحماية مرضى فقر الدم المنجلي.",
    "tags": [
      "hematology",
      "cbc",
      "hemoglobinopathy",
      "pediatric"
    ]
  },
  {
    "id": "nrbc",
    "name": "Nucleated Red Blood Cells",
    "nameAr": "الكريات الحمر ذات النوى",
    "aliases": [
      "NRBC",
      "Normoblasts",
      "الكريات الحمراء المنواة"
    ],
    "category": "cbc",
    "ranges": [
      {
        "group": "Adults & Children",
        "value": "0.0",
        "unit": "per 100 WBC",
        "note": "Normally absent in peripheral blood outside neonatal period"
      },
      {
        "group": "Neonates (First week of life)",
        "value": "0 – 5.0",
        "unit": "per 100 WBC"
      },
      {
        "group": "Critical Presence in Adults",
        "value": "> 0.0",
        "unit": "per 100 WBC",
        "alert": "critical_high",
        "note": "Suggests leukoerythroblastic reaction, severe hypoxia, or marrow infiltration"
      }
    ],
    "significance": "Presence in adult peripheral blood indicates severe bone marrow stress, marrow replacement (myelofibrosis, metastasis), extreme hemolysis, or severe sepsis.",
    "significanceAr": "وجودها في دم البالغين غير طبيعي ويدل على شدة نقص الأكسجة أو ارتشاح النخاع العظمي أو تليف النقي أو انحلال دم شديد.",
    "tags": [
      "hematology",
      "cbc",
      "nrbc",
      "marrow-stress"
    ]
  },
  {
    "id": "pt",
    "name": "Prothrombin Time",
    "nameAr": "زمن البروثرومبين",
    "aliases": [
      "PT",
      "Pro Time",
      "زمن التخثر البروثرومبيني"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "11.0 – 13.5",
        "unit": "seconds"
      },
      {
        "group": "Neonates",
        "value": "11.5 – 15.5",
        "unit": "seconds"
      },
      {
        "group": "Infants (1-12mo)",
        "value": "11.0 – 14.0",
        "unit": "seconds"
      },
      {
        "group": "Pregnancy",
        "value": "10.0 – 13.0",
        "unit": "seconds"
      },
      {
        "group": "Warfarin Therapy Target",
        "value": "18.0 – 24.0",
        "unit": "seconds"
      },
      {
        "group": "Critical High",
        "value": "> 30.0",
        "unit": "seconds",
        "alert": "critical_high",
        "note": "Severe bleeding risk"
      }
    ],
    "significance": "Evaluates extrinsic and common coagulation pathways (Factors VII, X, V, II, I). Prolonged in warfarin therapy, vitamin K deficiency, liver disease, DIC.",
    "significanceAr": "يقيم السبيل الخارجي والمشترك للتخثر (العوامل 7، 10، 5، 2، 1). يتطاول في العلاج بالوارفارين، نقص فيتامين ك، أمراض الكبد، والتخثر المنتشر (DIC).",
    "tags": [
      "coagulation",
      "hemostasis",
      "pt",
      "extrinsic-pathway"
    ]
  },
  {
    "id": "inr",
    "name": "International Normalized Ratio (INR)",
    "nameAr": "النسبة المعيارية الدولية للتخثر",
    "aliases": [
      "INR",
      "المعيار الدولي لسيولة الدم"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal (Not on Anticoagulation)",
        "value": "0.8 – 1.2",
        "unit": "ratio"
      },
      {
        "group": "Therapeutic Target (DVT / PE / AFib)",
        "value": "2.0 – 3.0",
        "unit": "ratio"
      },
      {
        "group": "Therapeutic Target (Mechanical Mitral Valve)",
        "value": "2.5 – 3.5",
        "unit": "ratio"
      },
      {
        "group": "Elevated / Supratherapeutic",
        "value": "3.5 – 4.9",
        "unit": "ratio",
        "note": "Withhold warfarin, monitor closely"
      },
      {
        "group": "Critical High (High Bleed Risk)",
        "value": "> 5.0",
        "unit": "ratio",
        "alert": "critical_high",
        "note": "Administer oral Vitamin K if no major bleed"
      },
      {
        "group": "Critical Emergency (>9.0)",
        "value": "> 9.0",
        "unit": "ratio",
        "alert": "critical_high",
        "note": "Immediate reversal with PCC/Vitamin K"
      }
    ],
    "significance": "Standardized reporting of PT. Essential for monitoring vitamin K antagonists (Warfarin). Target is 2.0-3.0 for most indications, 2.5-3.5 for mechanical mitral valves.",
    "significanceAr": "القياس المعياري لزمن البروثرومبين لمتابعة مميع الدم (وارفارين). الهدف العلاجي 2-3 لمعظم الحالات و2.5-3.5 للصمامات القلبية الميكانيكية.",
    "tags": [
      "coagulation",
      "inr",
      "warfarin",
      "anticoagulation",
      "bleeding"
    ]
  },
  {
    "id": "aptt",
    "name": "Activated Partial Thromboplastin Time",
    "nameAr": "زمن الترمبوبلاستين الجزئي المفعل",
    "aliases": [
      "aPTT",
      "PTT",
      "زمن الثرومبوبلاستين الجزئي"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "25.0 – 35.0",
        "unit": "seconds"
      },
      {
        "group": "Neonates",
        "value": "30.0 – 50.0",
        "unit": "seconds"
      },
      {
        "group": "Infants",
        "value": "28.0 – 40.0",
        "unit": "seconds"
      },
      {
        "group": "Heparin Therapeutic Target",
        "value": "60.0 – 85.0",
        "unit": "seconds",
        "note": "1.5 - 2.5x patient baseline"
      },
      {
        "group": "Critical Low",
        "value": "< 20.0",
        "unit": "seconds",
        "note": "Hypercoagulable state"
      },
      {
        "group": "Critical High",
        "value": "> 100.0",
        "unit": "seconds",
        "alert": "critical_high",
        "note": "High spontaneous hemorrhage risk"
      }
    ],
    "significance": "Evaluates intrinsic and common coagulation pathways (Factors XII, XI, IX, VIII, X, V, II, I). Monitors unfractionated heparin. Prolonged in hemophilia A/B, von Willebrand, lupus anticoagulant.",
    "significanceAr": "يقيم السبيل الداخلي والمشترك (العوامل 12، 11، 9، 8، 10، 5، 2، 1). يراقب علاج الهيبارين غير المجزأ، ويتطاول في الهيموفيليا ومرض فون فيلبراند.",
    "tags": [
      "coagulation",
      "aptt",
      "heparin",
      "intrinsic-pathway",
      "hemophilia"
    ]
  },
  {
    "id": "fibrinogen",
    "name": "Fibrinogen (Factor I)",
    "nameAr": "الفيبرينوجين (العامل الأول)",
    "aliases": [
      "Factor I",
      "Fibrinogen",
      "مولد الليفين"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "200 – 400",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates",
        "value": "150 – 350",
        "unit": "mg/dL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "350 – 600",
        "unit": "mg/dL",
        "note": "Physiologic hyperfibrinogenemia"
      },
      {
        "group": "Acute Phase Reactant High",
        "value": "> 500",
        "unit": "mg/dL"
      },
      {
        "group": "Low / Consumptive (DIC)",
        "value": "< 150",
        "unit": "mg/dL"
      },
      {
        "group": "Critical Low",
        "value": "< 100",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Indicative of severe DIC, massive transfusion trigger for cryoprecipitate (<150-200 in obstetric hemorrhage)"
      }
    ],
    "significance": "Precursor of fibrin clot. Acute-phase reactant. Decreased in DIC, severe liver failure, thrombolytic therapy, and massive hemorrhage. Target >150-200 in massive obstetric bleeding.",
    "significanceAr": "طليعة خيوط الفيبرين وبروتين طور حاد. ينخفض في التخثر المنتشر داخل الأوعية (DIC) وقصور الكبد والنزف الولادي الغزير ويتطلب نقل الراسب البردي.",
    "tags": [
      "coagulation",
      "fibrinogen",
      "dic",
      "hemostasis"
    ]
  },
  {
    "id": "d_dimer",
    "name": "D-Dimer",
    "nameAr": "دي دايمر (نواذج تحلل الفيبرين المتشابك)",
    "aliases": [
      "D-Dimer",
      "Fibrin Degradation Fragment",
      "دي-دايمر"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal Adults (<50yr)",
        "value": "< 500",
        "unit": "ng/mL FEU",
        "note": "<0.50 µg/mL FEU"
      },
      {
        "group": "Age-Adjusted Cutoff (>50yr)",
        "value": "< Age x 10",
        "unit": "ng/mL FEU",
        "note": "E.g., 70yr = <700 ng/mL FEU"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "< 1500",
        "unit": "ng/mL FEU",
        "note": "Physiologically elevated in pregnancy"
      },
      {
        "group": "Critical High / Severe Thrombosis",
        "value": "> 4000",
        "unit": "ng/mL FEU",
        "alert": "critical_high",
        "note": "Extensive VTE, severe DIC, or aortic dissection"
      }
    ],
    "significance": "Degradation product of cross-linked fibrin. High negative predictive value (>98%) to rule out DVT/PE when clinical pre-test probability is low/intermediate. Elevated in VTE, DIC, sepsis, trauma, cancer.",
    "significanceAr": "ناتج تحلل خثرة الفيبرين المتشابكة. قيمته التنبؤية السلبية عالية جداً لنفي الخثار الوريدي العميق والصمة الرئوية. يرتفع في التخثر والإنتان والسرطان.",
    "tags": [
      "coagulation",
      "d-dimer",
      "thrombosis",
      "pe",
      "dvt"
    ]
  },
  {
    "id": "thrombin_time",
    "name": "Thrombin Time",
    "nameAr": "زمن الثرومبين",
    "aliases": [
      "TT",
      "Thrombin Clotting Time",
      "TCT"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "14.0 – 19.0",
        "unit": "seconds"
      },
      {
        "group": "Neonates",
        "value": "16.0 – 21.0",
        "unit": "seconds"
      },
      {
        "group": "Therapeutic Dabigatran Effect",
        "value": "30.0 – 60.0",
        "unit": "seconds"
      },
      {
        "group": "Critical High",
        "value": "> 60.0",
        "unit": "seconds",
        "alert": "critical_high",
        "note": "Extreme heparin contamination, direct thrombin inhibitors, or severe hypofibrinogenemia"
      }
    ],
    "significance": "Directly measures conversion of fibrinogen to fibrin by exogenous thrombin. Extremely sensitive to heparin and direct thrombin inhibitors (dabigatran, argatroban, bivalirudin).",
    "significanceAr": "يقيس مباشرة تحول الفيبرينوجين إلى فيبرين بتأثير الثرومبين. حساس جداً لوجود الهيبارين ومثبطات الثرومبين المباشرة (دابيغاتران).",
    "tags": [
      "coagulation",
      "thrombin-time",
      "heparin",
      "dabigatran"
    ]
  },
  {
    "id": "bleeding_time",
    "name": "Bleeding Time (Ivy Method)",
    "nameAr": "زمن النزف (طريقة آيفي)",
    "aliases": [
      "Bleeding Time",
      "BT"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal (Ivy Template)",
        "value": "2.0 – 9.0",
        "unit": "minutes"
      },
      {
        "group": "Prolonged",
        "value": "> 10.0",
        "unit": "minutes",
        "note": "Platelet dysfunction, thrombocytopenia, vWD, aspirin effect"
      }
    ],
    "significance": "Assesses primary hemostasis (in vivo platelet adhesion and aggregation). Largely replaced by PFA-100 due to poor reproducibility.",
    "significanceAr": "يقيم الإرقاء الأولي (وظيفة وتراكم الصفائح في الجسم الحي). استبدل حديثاً بفحص PFA-100 لضعف التكرارية المخبرية.",
    "tags": [
      "coagulation",
      "platelets",
      "bleeding-time"
    ]
  },
  {
    "id": "factor_ii",
    "name": "Factor II (Prothrombin) Activity",
    "nameAr": "فعالية العامل الثاني (البروثرومبين)",
    "aliases": [
      "Factor II",
      "Prothrombin Activity"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults",
        "value": "80 – 130",
        "unit": "%"
      },
      {
        "group": "Deficiency",
        "value": "< 50",
        "unit": "%",
        "note": "Hemorrhagic diathesis or severe liver cirrhosis"
      }
    ],
    "significance": "Vitamin K-dependent zymogen. Deficiencies lead to bleeding; G20210A mutation causes elevated levels and venous thrombosis.",
    "significanceAr": "خميرة معتمدة على فيتامين ك. يؤدي نقصه للنزف، بينما تسبب طفرة G20210A ارتفاعه وحدوث الخثار الوريدي.",
    "tags": [
      "coagulation",
      "factor-ii",
      "prothrombin"
    ]
  },
  {
    "id": "factor_v",
    "name": "Factor V (Proaccelerin / Labile Factor) Activity",
    "nameAr": "فعالية العامل الخامس (العامل المساعد)",
    "aliases": [
      "Factor V",
      "Proaccelerin",
      "Labile Factor"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults",
        "value": "70 – 140",
        "unit": "%"
      },
      {
        "group": "Severe Deficiency",
        "value": "< 20",
        "unit": "%",
        "note": "Congenital Owren's disease or fulminant hepatic failure"
      }
    ],
    "significance": "Synthesized in liver independently of vitamin K. Used to distinguish acute liver necrosis (low Factor V) from vitamin K deficiency (normal Factor V).",
    "significanceAr": "يصنع في الكبد بشكل غير معتمد على فيتامين ك؛ يفيد في التفريق بين النخر الكبدي الحاد (ينخفض) ونقص فيتامين ك (يبقى طبيعياً).",
    "tags": [
      "coagulation",
      "factor-v",
      "liver-failure"
    ]
  },
  {
    "id": "factor_vii",
    "name": "Factor VII (Proconvertin / Stable Factor) Activity",
    "nameAr": "فعالية العامل السابع (العامل الثابت)",
    "aliases": [
      "Factor VII",
      "Proconvertin"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults",
        "value": "70 – 140",
        "unit": "%"
      },
      {
        "group": "Deficiency",
        "value": "< 50",
        "unit": "%",
        "note": "Isolated prolongation of PT with normal aPTT"
      }
    ],
    "significance": "Shortest half-life (~4-6 hours) of all clotting factors. First factor to drop in acute liver failure or warfarin therapy.",
    "significanceAr": "أقصر العوامل عمراً نصفياً (4-6 ساعات). أول عامل ينخفض عند بدء الوارفارين أو حدوث فشل كبدي حاد، ويؤدي لتطاول معزول في PT.",
    "tags": [
      "coagulation",
      "factor-vii",
      "vitamin-k"
    ]
  },
  {
    "id": "factor_viii",
    "name": "Factor VIII Activity (Antihemophilic Factor A)",
    "nameAr": "فعالية العامل الثامن (عامل الهيموفيليا أ)",
    "aliases": [
      "Factor VIII",
      "FVIII:C",
      "عامل التخثر الثامن"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "50 – 150",
        "unit": "%"
      },
      {
        "group": "Mild Hemophilia A",
        "value": "5 – 40",
        "unit": "%",
        "note": "Bleeding with severe trauma/surgery"
      },
      {
        "group": "Moderate Hemophilia A",
        "value": "1 – 5",
        "unit": "%",
        "note": "Bleeding with mild injury"
      },
      {
        "group": "Severe Hemophilia A",
        "value": "< 1",
        "unit": "%",
        "alert": "critical_low",
        "note": "Spontaneous hemarthroses and deep tissue hematomas"
      }
    ],
    "significance": "Deficient in X-linked Hemophilia A. Also decreased in severe von Willebrand disease (as vWF stabilizes Factor VIII). Acute phase reactant (high in thrombosis).",
    "significanceAr": "ينقص وراثياً في مرض الهيموفيليا أ (الناعور المرتبط بالجنس)، وفي مرض فون فيلبراند الشديد. يسبب نقصه نزف المفاصل التلقائي.",
    "tags": [
      "coagulation",
      "factor-viii",
      "hemophilia-a",
      "bleeding"
    ]
  },
  {
    "id": "factor_ix",
    "name": "Factor IX Activity (Christmas Factor)",
    "nameAr": "فعالية العامل التاسع (عامل كريسماس)",
    "aliases": [
      "Factor IX",
      "FIX",
      "عامل التخثر التاسع"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "60 – 140",
        "unit": "%"
      },
      {
        "group": "Mild Hemophilia B",
        "value": "5 – 40",
        "unit": "%"
      },
      {
        "group": "Moderate Hemophilia B",
        "value": "1 – 5",
        "unit": "%"
      },
      {
        "group": "Severe Hemophilia B",
        "value": "< 1",
        "unit": "%",
        "alert": "critical_low",
        "note": "Spontaneous bleeding episodes"
      }
    ],
    "significance": "Vitamin K-dependent factor. Deficient in X-linked Hemophilia B (Christmas disease).",
    "significanceAr": "عامل معتمد على فيتامين ك. ينقص في الهيموفيليا ب (مرض كريسماس) المرتبط بالجنس.",
    "tags": [
      "coagulation",
      "factor-ix",
      "hemophilia-b"
    ]
  },
  {
    "id": "factor_x",
    "name": "Factor X (Stuart-Prower Factor) Activity",
    "nameAr": "فعالية العامل العاشر (عامل ستيوارت-براور)",
    "aliases": [
      "Factor X",
      "Stuart Factor"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults",
        "value": "70 – 140",
        "unit": "%"
      },
      {
        "group": "Deficiency / Amyloidosis",
        "value": "< 50",
        "unit": "%",
        "note": "Acquired deficiency strongly associated with AL amyloidosis"
      }
    ],
    "significance": "Key convergence point of extrinsic and intrinsic pathways. Acquired isolated deficiency is classically seen in AL amyloidosis.",
    "significanceAr": "نقطة التقاء السبيلين الداخلي والخارجي للتخثر. يرتبط نقصه المكتسب المعزول بالإصابة بالداء النشواني (AL amyloidosis).",
    "tags": [
      "coagulation",
      "factor-x",
      "amyloidosis"
    ]
  },
  {
    "id": "factor_xi",
    "name": "Factor XI (Plasma Thromboplastin Antecedent)",
    "nameAr": "فعالية العامل الحادي عشر (الهيموفيليا ج)",
    "aliases": [
      "Factor XI",
      "PTA",
      "Hemophilia C"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "65 – 135",
        "unit": "%"
      },
      {
        "group": "Deficiency (Hemophilia C)",
        "value": "< 20",
        "unit": "%",
        "note": "Autosomal recessive; variable bleeding propensity, high prevalence in Ashkenazi Jews"
      }
    ],
    "significance": "Deficiency causes Hemophilia C (Rosenthal syndrome), autosomal recessive, bleeding correlates poorly with factor level.",
    "significanceAr": "يسبب نقصه الهيموفيليا ج (وراثة جسدية متنحية)، ولا يتناسب النزف السريري دوماً مع المستوى المخبري للعامل.",
    "tags": [
      "coagulation",
      "factor-xi",
      "hemophilia-c"
    ]
  },
  {
    "id": "factor_xii",
    "name": "Factor XII (Hageman Factor) Activity",
    "nameAr": "فعالية العامل الثاني عشر (عامل هاجمان)",
    "aliases": [
      "Factor XII",
      "Hageman Factor"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults",
        "value": "60 – 140",
        "unit": "%"
      },
      {
        "group": "Severe Deficiency",
        "value": "< 10",
        "unit": "%",
        "note": "Markedly prolonged aPTT in vitro but NO in vivo bleeding risk"
      }
    ],
    "significance": "Causes marked in vitro aPTT prolongation but does NOT cause clinical bleeding diathesis in vivo.",
    "significanceAr": "يؤدي نقصه الشديد لتطاول ملحوظ ومربك في تحليل aPTT دون أي ميل للنزف السريري في الجسم.",
    "tags": [
      "coagulation",
      "factor-xii",
      "aptt-artifact"
    ]
  },
  {
    "id": "factor_xiii",
    "name": "Factor XIII (Fibrin Stabilizing Factor)",
    "nameAr": "فعالية العامل الثالث عشر (مثبت الفيبرين)",
    "aliases": [
      "Factor XIII",
      "FSF"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "70 – 140",
        "unit": "%"
      },
      {
        "group": "Deficiency",
        "value": "< 30",
        "unit": "%",
        "note": "Delayed bleeding, poor wound healing, umbilical stump bleeding, normal PT/aPTT"
      }
    ],
    "significance": "Cross-links fibrin monomers. Severe deficiency causes delayed umbilical cord bleeding and impaired wound healing with completely normal PT, aPTT, and platelet count.",
    "significanceAr": "يربط خيوط الفيبرين تساهمياً. يسبب نقصه نزفاً متأخراً من الحبل السري وسوء اندمال الجروح رغم سلامة تحاليل PT وaPTT والصفائح.",
    "tags": [
      "coagulation",
      "factor-xiii",
      "wound-healing"
    ]
  },
  {
    "id": "vwf_antigen",
    "name": "von Willebrand Factor Antigen (vWF:Ag)",
    "nameAr": "مستضد عامل فون فيلبراند",
    "aliases": [
      "vWF Antigen",
      "vWF:Ag",
      "مستضد فون فيليبراند"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Blood Type O",
        "value": "50 – 150",
        "unit": "%"
      },
      {
        "group": "Non-O Blood Types (A, B, AB)",
        "value": "70 – 200",
        "unit": "%"
      },
      {
        "group": "Deficiency (vWD Type 1 or 3)",
        "value": "< 30",
        "unit": "%",
        "note": "Type 3 vWD has undetectable (<1%) levels"
      }
    ],
    "significance": "Quantifies circulating vWF protein. Note: healthy individuals with blood group O have roughly 25-30% lower baseline levels. Reduced in von Willebrand disease.",
    "significanceAr": "يقيس كمية بروتين عامل فون فيلبراند في المصل. تنخفض مستوياته بنحو 25% طبيعياً لدى أصحاب زمرة الدم O. ينقص في داء فون فيلبراند.",
    "tags": [
      "coagulation",
      "vwd",
      "hemostasis"
    ]
  },
  {
    "id": "vwf_activity",
    "name": "von Willebrand Factor Ristocetin Cofactor Activity",
    "nameAr": "فعالية العامل المرافق للريستوسيتين (vWF:RCo)",
    "aliases": [
      "vWF:RCo",
      "vWF Activity"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "50 – 150",
        "unit": "%"
      },
      {
        "group": "Impaired Function",
        "value": "< 30",
        "unit": "%",
        "note": "Low vWF:RCo to vWF:Ag ratio (<0.7) suggests qualitative Type 2 vWD"
      }
    ],
    "significance": "Functional assay measuring vWF binding to platelet GPIb receptor in presence of ristocetin.",
    "significanceAr": "فحص وظيفي يقيس قدرة العامل على التراص مع مستقبلات الصفائح GPIb بوجود الريستوسيتين.",
    "tags": [
      "coagulation",
      "vwd",
      "ristocetin"
    ]
  },
  {
    "id": "anti_xa_ufh",
    "name": "Anti-Xa Level (Unfractionated Heparin)",
    "nameAr": "مستوى مضاد العامل العاشر (الهيبارين غير المجزأ)",
    "aliases": [
      "Anti-Xa UFH",
      "Heparin Anti-Xa"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Therapeutic Range (UFH Infusion)",
        "value": "0.3 – 0.7",
        "unit": "IU/mL"
      },
      {
        "group": "Subtherapeutic",
        "value": "< 0.3",
        "unit": "IU/mL"
      },
      {
        "group": "Supratherapeutic",
        "value": "> 0.7",
        "unit": "IU/mL"
      },
      {
        "group": "Critical High",
        "value": "> 1.0",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Bleeding risk, reduce infusion or give protamine"
      }
    ],
    "significance": "Preferred method for monitoring unfractionated heparin over aPTT in patients with baseline aPTT prolongation (lupus anticoagulant, liver disease).",
    "significanceAr": "الفحص المفضل لمراقبة الهيبارين غير المجزأ بدلاً من aPTT لدى المرضى الذين لديهم تطاول أساسي في aPTT (مثل مضاد التخثر الذئبي).",
    "tags": [
      "coagulation",
      "anti-xa",
      "heparin",
      "monitoring"
    ]
  },
  {
    "id": "anti_xa_lmwh",
    "name": "Anti-Xa Level (LMWH Enoxaparin)",
    "nameAr": "مستوى مضاد العامل العاشر (إينوكسابارين / هيبارين منخفض الوزن)",
    "aliases": [
      "Anti-Xa LMWH",
      "LMWH Level",
      "Enoxaparin Level"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Once-Daily Treatment (Peak at 4h)",
        "value": "1.0 – 2.0",
        "unit": "IU/mL"
      },
      {
        "group": "Twice-Daily Treatment (Peak at 4h)",
        "value": "0.6 – 1.0",
        "unit": "IU/mL"
      },
      {
        "group": "Prophylaxis Target (Peak at 4h)",
        "value": "0.2 – 0.5",
        "unit": "IU/mL"
      },
      {
        "group": "Critical High (Peak)",
        "value": "> 2.0",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Hemorrhagic risk in renal impairment"
      }
    ],
    "significance": "Monitors LMWH (drawn exactly 4 hours post-subcutaneous dose) in severe renal failure (CrCl < 30), pregnancy, extreme obesity, or neonates.",
    "significanceAr": "يستخدم لمراقبة الهيبارين منخفض الوزن الجزيئي (يسحب بعد 4 ساعات بالضبط من الحقنة) لدى مرضى الفشل الكلوي والبدانة والحوامل.",
    "tags": [
      "coagulation",
      "anti-xa",
      "lmwh",
      "enoxaparin"
    ]
  },
  {
    "id": "protein_c",
    "name": "Protein C Activity",
    "nameAr": "فعالية بروتين سي",
    "aliases": [
      "Protein C",
      "PC Activity"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults",
        "value": "70 – 140",
        "unit": "%"
      },
      {
        "group": "Moderate Deficiency",
        "value": "30 – 65",
        "unit": "%",
        "note": "Elevated venous thromboembolism risk, warfarin-induced skin necrosis risk"
      },
      {
        "group": "Severe / Homozygous Deficiency",
        "value": "< 1",
        "unit": "%",
        "alert": "critical_low",
        "note": "Neonatal purpura fulminans"
      }
    ],
    "significance": "Natural anticoagulant (inactivates Factors Va and VIIIa). Deficiency causes venous thromboembolism and warfarin-induced skin necrosis.",
    "significanceAr": "مضاد تخثر طبيعي يثبط العاملين 5 و8. نقصه يرفع خطر الخثار الوريدي وتنخر الجلد المحفز بالوارفارين.",
    "tags": [
      "coagulation",
      "thrombophilia",
      "protein-c"
    ]
  },
  {
    "id": "protein_s_free",
    "name": "Protein S Activity & Free Antigen",
    "nameAr": "فعالية ومستضد بروتين إس الحر",
    "aliases": [
      "Protein S",
      "Free Protein S",
      "بروتين إس"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "75 – 140",
        "unit": "%"
      },
      {
        "group": "Adult Females (Non-Pregnant)",
        "value": "60 – 130",
        "unit": "%"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "30 – 60",
        "unit": "%",
        "note": "Physiologic decrease due to high estrogen and C4b-BP binding"
      },
      {
        "group": "Deficiency (Thrombophilia)",
        "value": "< 55",
        "unit": "%",
        "note": "Venous thromboembolism propensity"
      }
    ],
    "significance": "Cofactor for activated protein C. 60% bound to C4b-binding protein; free fraction is biologically active. Drops physiologically during pregnancy.",
    "significanceAr": "عامل مساعد لبروتين سي النشط. 60% منه مرتبط ببروتين C4b، والشكل الحر هو الفعال حيوياً. ينخفض طبيعياً أثناء الحمل.",
    "tags": [
      "coagulation",
      "thrombophilia",
      "protein-s"
    ]
  },
  {
    "id": "antithrombin_iii",
    "name": "Antithrombin III Activity",
    "nameAr": "فعالية مضاد الثرومبين الثالث (AT-III)",
    "aliases": [
      "Antithrombin",
      "ATIII",
      "AT3"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Adults",
        "value": "80 – 120",
        "unit": "%"
      },
      {
        "group": "Neonates",
        "value": "40 – 80",
        "unit": "%"
      },
      {
        "group": "Deficiency / Heparin Resistance",
        "value": "< 60",
        "unit": "%",
        "alert": "critical_low",
        "note": "Severe thrombophilia and apparent resistance to heparin therapy"
      }
    ],
    "significance": "Inactivates thrombin and Factor Xa (action accelerated 1000-fold by heparin). Congenital or acquired deficiency (nephrotic syndrome, DIC, liver failure) causes heparin resistance.",
    "significanceAr": "يثبط الثرومبين والعامل العاشر (يتضاعف عمله 1000 مرة بوجود الهيبارين). نقصه يسبب خثاراً عنيداً ومقاومة للعلاج بالهيبارين.",
    "tags": [
      "coagulation",
      "thrombophilia",
      "antithrombin",
      "heparin-resistance"
    ]
  },
  {
    "id": "lupus_anticoagulant_drvvt",
    "name": "Lupus Anticoagulant Screen (dRVVT)",
    "nameAr": "فحص مضاد التخثر الذئبي (سم أفعى راسل المخفف)",
    "aliases": [
      "dRVVT Screen",
      "Lupus Anticoagulant",
      "LAC"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Screen Ratio Normal",
        "value": "< 1.20",
        "unit": "ratio"
      },
      {
        "group": "Positive Screen",
        "value": "≥ 1.20",
        "unit": "ratio",
        "note": "Requires confirmatory excess phospholipid test"
      }
    ],
    "significance": "Screening test for antiphospholipid syndrome. Directly activates Factor X. Prolonged screen that corrects with excess phospholipid confirms LA.",
    "significanceAr": "فحص مسحي لمتلازمة أضداد الفوسفوليبيد؛ يفعل العامل العاشر مباشرة، وتأكيده يتطلب تصحيحه بإضافة الفوسفوليبيد.",
    "tags": [
      "coagulation",
      "antiphospholipid",
      "lupus-anticoagulant",
      "thrombosis"
    ]
  },
  {
    "id": "lupus_anticoagulant_confirm",
    "name": "Lupus Anticoagulant Confirm Ratio (dRVVT Screen/Confirm)",
    "nameAr": "نسبة تأكيد مضاد التخثر الذئبي (Screen/Confirm)",
    "aliases": [
      "dRVVT Confirm",
      "LA Confirm Ratio"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal / Negative",
        "value": "< 1.20",
        "unit": "ratio"
      },
      {
        "group": "Weak Positive",
        "value": "1.20 – 1.50",
        "unit": "ratio"
      },
      {
        "group": "Moderate Positive",
        "value": "1.50 – 2.00",
        "unit": "ratio"
      },
      {
        "group": "High Positive",
        "value": "> 2.00",
        "unit": "ratio",
        "note": "High risk for thrombosis and recurrent pregnancy loss"
      }
    ],
    "significance": "Confirms presence of antiphospholipid antibodies when screen-to-confirm ratio exceeds 1.2. Must be verified >12 weeks apart.",
    "significanceAr": "يؤكد وجود متلازمة أضداد الفوسفوليبيد عندما تتجاوز النسبة 1.2. يلزم إعادة الفحص بعد 12 أسبوعاً للتأكيد التشخيصي.",
    "tags": [
      "coagulation",
      "aps",
      "lupus-anticoagulant"
    ]
  },
  {
    "id": "clot_retraction",
    "name": "Clot Retraction",
    "nameAr": "انكماش الخثرة",
    "aliases": [
      "Clot Retraction Time"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal (At 1-2 hours)",
        "value": "50 – 100",
        "unit": "% of serum expressed"
      },
      {
        "group": "Abnormal / Defective",
        "value": "< 50",
        "unit": "%",
        "note": "Glanzmann thrombasthenia, severe thrombocytopenia, hypofibrinogenemia"
      }
    ],
    "significance": "Requires functional platelets and normal GPIIb/IIIa receptors (absent in Glanzmann thrombasthenia).",
    "significanceAr": "يتطلب صفائح سليمة ومستقبلات GPIIb/IIIa وظيفية (تغيب في وهن الصفائح لغلانزمان).",
    "tags": [
      "coagulation",
      "platelets",
      "glanzmann"
    ]
  },
  {
    "id": "reptilase_time",
    "name": "Reptilase Time",
    "nameAr": "زمن الرِّبتيلاز",
    "aliases": [
      "Reptilase Time",
      "Batroxobin Time"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "15.0 – 22.0",
        "unit": "seconds"
      },
      {
        "group": "Prolonged",
        "value": "> 25.0",
        "unit": "seconds",
        "note": "Dysfibrinogenemia, hypofibrinogenemia (NOT affected by heparin)"
      }
    ],
    "significance": "Cleaves only fibrinopeptide A. Unlike Thrombin Time, Reptilase time is NOT inhibited by heparin, making it ideal for detecting dysfibrinogenemia in heparinized samples.",
    "significanceAr": "يشطر الببتيد الفيبريني A فقط. لا يتأثر بالهيبارين على عكس زمن الثرومبين، فيميز اعتلال الفيبرينوجين بوجود الهيبارين.",
    "tags": [
      "coagulation",
      "reptilase",
      "heparin-artifact"
    ]
  },
  {
    "id": "euglobulin_lysis",
    "name": "Euglobulin Clot Lysis Time",
    "nameAr": "زمن انحلال خثرة اليوجلوبولين",
    "aliases": [
      "ECLT",
      "Euglobulin Lysis"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "> 120",
        "unit": "minutes"
      },
      {
        "group": "Hyperfibrinolysis",
        "value": "< 60",
        "unit": "minutes",
        "note": "Pathologic hyperfibrinolysis, liver transplantation, DIC with secondary fibrinolysis"
      }
    ],
    "significance": "Measures overall fibrinolytic activity. Shortened lysis time indicates excessive systemic fibrinolysis.",
    "significanceAr": "يقيس النشاط الكلي لانحلال الفيبرين. قصر زمن الانحلال يدل على فرط انحلال الفبرين الجهازي المرضي.",
    "tags": [
      "coagulation",
      "fibrinolysis",
      "eclt"
    ]
  },
  {
    "id": "fdp",
    "name": "Fibrin Degradation Products (FDP)",
    "nameAr": "نواذج تفكك الفيبرين (FDP)",
    "aliases": [
      "FDP",
      "FSP",
      "Fibrin Split Products"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 5.0",
        "unit": "µg/mL"
      },
      {
        "group": "Borderline / Mild",
        "value": "5.0 – 10.0",
        "unit": "µg/mL"
      },
      {
        "group": "Markedly Elevated (DIC)",
        "value": "> 40.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Severe DIC, massive deep thrombosis, thrombolytic therapy"
      }
    ],
    "significance": "Elevated in DIC, DVT/PE, recent surgery, and thrombolytic therapy.",
    "significanceAr": "ترتفع في التخثر المنتشر داخل الأوعية (DIC)، الخثار الوريدي، وما بعد العمليات الكبرى.",
    "tags": [
      "coagulation",
      "fdp",
      "dic"
    ]
  },
  {
    "id": "sfmc",
    "name": "Soluble Fibrin Monomer Complex (SFMC)",
    "nameAr": "معقد مونومرات الفيبرين المنحلة",
    "aliases": [
      "SFMC",
      "Soluble Fibrin"
    ],
    "category": "coagulation",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 6.0",
        "unit": "µg/mL"
      },
      {
        "group": "Elevated (Pre-DIC / Active Thrombin Generation)",
        "value": "≥ 6.0",
        "unit": "µg/mL"
      }
    ],
    "significance": "Direct marker of intravascular thrombin action on fibrinogen before clot formation; early indicator of evolving DIC.",
    "significanceAr": "مؤشر مباشر على تولد الثرومبين الوعائي قبل تشكل الخثرة الكاملة؛ علامة مبكرة على بدء DIC.",
    "tags": [
      "coagulation",
      "sfmc",
      "thrombin"
    ]
  },
  {
    "id": "serum_iron",
    "name": "Serum Iron",
    "nameAr": "الحديد في المصل",
    "aliases": [
      "Iron",
      "Fe",
      "Serum Fe",
      "حديد المصل"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "65 – 175",
        "unit": "µg/dL"
      },
      {
        "group": "Adult Females",
        "value": "50 – 170",
        "unit": "µg/dL"
      },
      {
        "group": "Children",
        "value": "50 – 120",
        "unit": "µg/dL"
      },
      {
        "group": "Neonates",
        "value": "100 – 250",
        "unit": "µg/dL"
      },
      {
        "group": "Critical Low",
        "value": "< 30",
        "unit": "µg/dL",
        "note": "Severe iron deficiency or acute phase suppression"
      },
      {
        "group": "Critical High (Acute Iron Poisoning)",
        "value": "> 350",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "Toxicity threshold (>500 severe toxicity, deferoxamine indicated)"
      }
    ],
    "significance": "Circulating iron bound to transferrin. Significant diurnal variation (highest in morning). Decreased in iron deficiency, infection, chronic inflammation, pregnancy. Increased in hemochromatosis, repeated transfusions, lead poisoning, acute iron overdose.",
    "significanceAr": "الحديد المرتبط بالترانسفيرين في المصل. يتبع تنوعاً يومياً (أعلى في الصباح). ينخفض في فقر دم نقص الحديد والالتهابات المزمنة، ويرتفع في فرط حمل الحديد والانسمام الحاد.",
    "tags": [
      "iron",
      "anemia",
      "toxicology",
      "metabolism"
    ]
  },
  {
    "id": "tibc",
    "name": "Total Iron Binding Capacity (TIBC)",
    "nameAr": "سعة ارتباط الحديد الكلية",
    "aliases": [
      "TIBC",
      "سعة ربط الحديد الكلية"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Adults",
        "value": "250 – 450",
        "unit": "µg/dL"
      },
      {
        "group": "Infants",
        "value": "100 – 400",
        "unit": "µg/dL"
      },
      {
        "group": "Children",
        "value": "250 – 400",
        "unit": "µg/dL"
      },
      {
        "group": "Elevated (Iron Deficiency)",
        "value": "> 450",
        "unit": "µg/dL",
        "note": "Classic hallmark of uncomplicated iron deficiency"
      }
    ],
    "significance": "Indirect measurement of transferrin levels. Elevated in iron deficiency anemia and oral contraceptive use; decreased in anemia of chronic disease, hemochromatosis, malnutrition, cirrhosis, nephrotic syndrome.",
    "significanceAr": "مقياس غير مباشر لتركيز الترانسفيرين. يرتفع بشكل مميز في فقر دم نقص الحديد والحمل، وينخفض في فقر دم الأمراض المزمنة وتشمع الكبد والمتلازمة النفروزية.",
    "tags": [
      "iron",
      "anemia",
      "tibc",
      "transferrin"
    ]
  },
  {
    "id": "transferrin_saturation",
    "name": "Transferrin Saturation (TSAT)",
    "nameAr": "إشباع الترانسفيرين بالحديد",
    "aliases": [
      "TSAT",
      "Iron Saturation",
      "نسبة إشباع الترانسفيرين"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "20.0 – 50.0",
        "unit": "%"
      },
      {
        "group": "Adult Females",
        "value": "15.0 – 50.0",
        "unit": "%"
      },
      {
        "group": "Iron Deficiency Cutoff",
        "value": "< 16.0",
        "unit": "%",
        "note": "High sensitivity for iron-restricted erythropoiesis (<20% in CKD)"
      },
      {
        "group": "Hemochromatosis Screening Threshold",
        "value": "> 45.0",
        "unit": "%",
        "note": "Trigger for HFE gene testing (>60% in males highly suggestive)"
      }
    ],
    "significance": "Calculated as (Serum Iron / TIBC) x 100%. Best initial screening test for hereditary hemochromatosis (>45% in women, >50% in men). Decreased (<16-20%) in iron deficiency.",
    "significanceAr": "يحسب كـ (حديد المصل ÷ سعة ربط الحديد) × 100%. أفضل فحص مسحي لفرط حمل الحديد الوراثي (>45-50%). وينخفض دون 16% في عوز الحديد.",
    "tags": [
      "iron",
      "anemia",
      "tsat",
      "hemochromatosis"
    ]
  },
  {
    "id": "serum_ferritin",
    "name": "Serum Ferritin",
    "nameAr": "الفيريتين في المصل (مخزون الحديد)",
    "aliases": [
      "Ferritin",
      "مخزون الحديد",
      "فيريتين"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "30 – 400",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Females (Premenopausal)",
        "value": "15 – 150",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Females (Postmenopausal)",
        "value": "30 – 300",
        "unit": "ng/mL"
      },
      {
        "group": "Neonates",
        "value": "25 – 200",
        "unit": "ng/mL"
      },
      {
        "group": "Infants (1-6mo)",
        "value": "50 – 200",
        "unit": "ng/mL"
      },
      {
        "group": "Children (6mo-12yr)",
        "value": "10 – 140",
        "unit": "ng/mL"
      },
      {
        "group": "Diagnostic of Absolute Iron Deficiency",
        "value": "< 15",
        "unit": "ng/mL",
        "alert": "critical_low",
        "note": "100% specificity for iron deficiency (<30-50 in presence of inflammation)"
      },
      {
        "group": "Critical High / Macrophage Activation",
        "value": "> 10000",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Strongly indicative of HLH / MAS, Still's disease, or severe acute hepatic injury"
      }
    ],
    "significance": "Primary iron storage protein. Most accurate test for iron deficiency (<15 ng/mL is diagnostic). Acute-phase reactant: falsely elevated in inflammation, malignancy, liver disease, COVID-19. Extreme elevation (>10,000) seen in hemophagocytic lymphohistiocytosis (HLH), adult-onset Still disease.",
    "significanceAr": "مستودع الحديد الرئيسي في الجسم وأدق فحص لعوز الحديد (<15 مشخص تماماً). بروتين طور حاد يرتفع كاذباً بالالتهاب، وترتفع مستوياته بشكل فلكي (>10,000) في متلازمة تنشيط البالعات (HLH) وداء ستيل.",
    "tags": [
      "iron",
      "anemia",
      "ferritin",
      "hlh",
      "inflammation"
    ]
  },
  {
    "id": "serum_transferrin",
    "name": "Serum Transferrin Protein",
    "nameAr": "بروتين الترانسفيرين في المصل",
    "aliases": [
      "Transferrin",
      "Siderophilin",
      "ترانسفيرين"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Adults",
        "value": "200 – 360",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates",
        "value": "130 – 275",
        "unit": "mg/dL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "250 – 450",
        "unit": "mg/dL"
      },
      {
        "group": "Severe Malnutrition / Cirrhosis",
        "value": "< 100",
        "unit": "mg/dL",
        "note": "Negative acute-phase protein"
      }
    ],
    "significance": "Major iron transport glycoprotein. Negative acute-phase reactant (decreases with inflammation, unlike ferritin). Direct immunological quantification.",
    "significanceAr": "البروتين الرئيسي لنقل الحديد. بروتين طور حاد سلبي ينخفض في الالتهاب والقصور الكبدي وسوء التغذية.",
    "tags": [
      "iron",
      "transferrin",
      "nutrition"
    ]
  },
  {
    "id": "stfr",
    "name": "Soluble Transferrin Receptor (sTfR)",
    "nameAr": "مستقبلات الترانسفيرين المنحلة",
    "aliases": [
      "sTfR",
      "Soluble Transferrin Receptor"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "1.8 – 4.6",
        "unit": "mg/L"
      },
      {
        "group": "Iron Deficiency Anemia",
        "value": "> 5.0",
        "unit": "mg/L",
        "note": "Elevated even in presence of concurrent chronic inflammation"
      },
      {
        "group": "Anemia of Chronic Disease",
        "value": "< 4.6",
        "unit": "mg/L",
        "note": "Remains normal in ACD without iron deficiency"
      }
    ],
    "significance": "Crucial for differentiating iron deficiency anemia (elevated) from anemia of chronic disease (normal) because sTfR is NOT an acute-phase reactant.",
    "significanceAr": "فحص جوهري للتفريق بين فقر دم نقص الحديد (يرتفع) وفقر دم الأمراض المزمنة (يبقى طبيعياً)، لأنه لا يتأثر بالالتهاب إطلاقاً.",
    "tags": [
      "iron",
      "anemia",
      "stfr",
      "differential"
    ]
  },
  {
    "id": "serum_hepcidin",
    "name": "Serum Hepcidin",
    "nameAr": "الهيبسيدين في المصل",
    "aliases": [
      "Hepcidin",
      "هيبسيدين"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "2.0 – 25.0",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Females",
        "value": "1.5 – 20.0",
        "unit": "ng/mL"
      },
      {
        "group": "Iron Deficiency (Suppressed)",
        "value": "< 2.0",
        "unit": "ng/mL",
        "note": "Drives maximal iron absorption and release"
      }
    ],
    "significance": "Master iron regulator synthesized by liver. Blocks ferroportin. High in anemia of chronic disease (iron trapped in macrophages); low or suppressed in iron deficiency and hereditary hemochromatosis.",
    "significanceAr": "المنظم الرئيسي للحديد في الجسم؛ يغلق قناة الفيروبورتين. يرتفع في فقر دم الأمراض المزمنة فينحبس الحديد بالبالعات، وينخفض بشدة في عوز الحديد.",
    "tags": [
      "iron",
      "hepcidin",
      "metabolism"
    ]
  },
  {
    "id": "fep_protoporphyrin",
    "name": "Free Erythrocyte Protoporphyrin (FEP)",
    "nameAr": "البروتوبورفيرين الحر في الكريات الحمر",
    "aliases": [
      "FEP",
      "Free Protoporphyrin"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Adults & Children",
        "value": "< 35",
        "unit": "µg/dL RBC"
      },
      {
        "group": "Elevated (Iron Deficiency / Lead Toxicity)",
        "value": "> 50",
        "unit": "µg/dL RBC",
        "note": "Accumulates when iron is unavailable for heme synthesis"
      }
    ],
    "significance": "Intermediate in heme synthesis. Accumulates in iron deficiency and lead poisoning (lead inhibits ferrochelatase).",
    "significanceAr": "مركب وسيط في تصنيع الهيم؛ يتراكم عند غياب الحديد اللازم لتصنيع الهيم وفي التسمم بالرصاص لتثبيطه أنزيم الفيروكيلاتاز.",
    "tags": [
      "iron",
      "toxicology",
      "lead",
      "porphyrin"
    ]
  },
  {
    "id": "uibc",
    "name": "Unsaturated Iron Binding Capacity (UIBC)",
    "nameAr": "سعة ربط الحديد غير المشبعة",
    "aliases": [
      "UIBC"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "110 – 370",
        "unit": "µg/dL"
      },
      {
        "group": "Hemochromatosis / Iron Overload",
        "value": "< 100",
        "unit": "µg/dL",
        "note": "Reflects near-complete saturation of transferrin"
      }
    ],
    "significance": "Represents unoccupied iron-binding sites on transferrin (TIBC minus Serum Iron). Low in hemochromatosis.",
    "significanceAr": "يمثل مواقع الارتباط الشاغرة بالترانسفيرين (TIBC ناقص حديد المصل). ينخفض في فرط حمل الحديد.",
    "tags": [
      "iron",
      "uibc"
    ]
  },
  {
    "id": "zinc_protoporphyrin",
    "name": "Zinc Protoporphyrin (ZPP)",
    "nameAr": "زنك بروتوبورفيرين",
    "aliases": [
      "ZPP",
      "ZPP/Heme Ratio"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 40",
        "unit": "µmol/mol heme"
      },
      {
        "group": "Elevated (Chronic Iron Deficiency or Lead Exposure)",
        "value": "> 80",
        "unit": "µmol/mol heme"
      }
    ],
    "significance": "Zinc replaces iron when iron is scarce. Used as occupational screening marker for chronic lead exposure and prolonged iron deficiency.",
    "significanceAr": "يحل الزنك محل الحديد في تركيب الهيم عند نقصه. يستعمل لمسح التعرض المهني المزمن للرصاص وعوز الحديد الطويل.",
    "tags": [
      "iron",
      "lead",
      "toxicology",
      "zpp"
    ]
  },
  {
    "id": "stfr_ferritin_index",
    "name": "sTfR-Ferritin Index",
    "nameAr": "مشعر مستقبلات الترانسفيرين إلى الفيريتين",
    "aliases": [
      "sTfR Index",
      "sTfR/log Ferritin"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 1.5",
        "unit": "ratio"
      },
      {
        "group": "Anemia of Chronic Disease Alone",
        "value": "< 1.0",
        "unit": "ratio"
      },
      {
        "group": "Iron Deficiency Coexisting with Chronic Inflammation",
        "value": "> 2.0",
        "unit": "ratio",
        "note": "Confirms iron deficiency in presence of high ferritin"
      }
    ],
    "significance": "sTfR divided by log10(Ferritin). Superior parameter for detecting iron deficiency in patients with concurrent inflammatory, rheumatologic, or malignant diseases.",
    "significanceAr": "حاصل قسمة sTfR على لوغاريتم الفيريتين. المؤشر الأدق لإثبات عوز الحديد المرافق للأمراض الرثوية أو السرطانية مع ارتفاع الفيريتين.",
    "tags": [
      "iron",
      "anemia",
      "stfr-index"
    ]
  },
  {
    "id": "bone_marrow_iron_prussian_blue",
    "name": "Bone Marrow Hemosiderin Iron (Prussian Blue)",
    "nameAr": "حديد هيموسيديرين نقي العظم (أزرق بروسيا)",
    "aliases": [
      "Marrow Iron Stain",
      "Prussian Blue",
      "الحديد بنقي العظم"
    ],
    "category": "iron",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "Grade 2+ to 3+ (Normal Stores)",
        "unit": "scale (0 to 6+)"
      },
      {
        "group": "Absolute Iron Deficiency",
        "value": "Grade 0 (Absent Iron Stores)",
        "unit": "scale",
        "alert": "critical_low",
        "note": "Gold standard definitive diagnosis"
      }
    ],
    "significance": "Historical gold standard for body iron stores assessment on bone marrow aspirate/biopsy. Absent in pure iron deficiency; normal/increased in anemia of chronic disease.",
    "significanceAr": "المعيار الذهبي الكلاسيكي لتقييم مخازن الحديد بالجسم عبر رشف أو خزعة نقي العظم. ينعدم في فقر دم نقص الحديد بينما يتراكم في أمراض مزمنة.",
    "tags": [
      "iron",
      "bone-marrow",
      "gold-standard"
    ]
  },
  {
    "id": "sodium_serum",
    "name": "Serum Sodium",
    "nameAr": "صوديوم المصل",
    "aliases": [
      "Na",
      "Sodium",
      "Serum Na",
      "الصوديوم"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "135 – 145",
        "unit": "mEq/L"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "132 – 144",
        "unit": "mEq/L"
      },
      {
        "group": "Neonates",
        "value": "133 – 146",
        "unit": "mEq/L"
      },
      {
        "group": "Infants & Children",
        "value": "134 – 144",
        "unit": "mEq/L"
      },
      {
        "group": "Pregnancy",
        "value": "130 – 140",
        "unit": "mEq/L",
        "note": "Reset osmostat physiologically drops Na by ~4-5 mEq/L"
      },
      {
        "group": "Critical Low",
        "value": "< 120",
        "unit": "mEq/L",
        "alert": "critical_low",
        "note": "Risk of cerebral edema, seizures, coma; correct slowly to avoid osmotic demyelination"
      },
      {
        "group": "Critical High",
        "value": "> 155",
        "unit": "mEq/L",
        "alert": "critical_high",
        "note": "Severe hyperosmolality, cerebral shrinkage, risk of hemorrhage; correct slowly"
      }
    ],
    "significance": "Major extracellular cation determining serum osmolality. Hyponatremia: SIADH, hypovolemia, CHF, cirrhosis, adrenal insufficiency, thiazides. Hypernatremia: unreplaced water loss (diabetes insipidus, sweating, dehydration), sodium overload.",
    "significanceAr": "الكاتيون الرئيسي خارج الخلوي والمحدد لضغط التناضح. نقص الصوديوم: متلازمة SIADH، قصور القلب، التشمع، المدرات الثيازيدية. فرط الصوديوم: الجفاف الشديد والسكري الكاذب.",
    "tags": [
      "bmp",
      "electrolytes",
      "sodium",
      "osmolality",
      "fluid-balance"
    ]
  },
  {
    "id": "potassium_serum",
    "name": "Serum Potassium",
    "nameAr": "بوتاسيوم المصل",
    "aliases": [
      "K",
      "Potassium",
      "Serum K",
      "البوتاسيوم"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "3.5 – 5.0",
        "unit": "mEq/L"
      },
      {
        "group": "Neonates",
        "value": "3.7 – 5.9",
        "unit": "mEq/L"
      },
      {
        "group": "Infants (1-12mo)",
        "value": "4.1 – 5.3",
        "unit": "mEq/L"
      },
      {
        "group": "Children (1-12yr)",
        "value": "3.4 – 4.7",
        "unit": "mEq/L"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "3.5 – 5.0",
        "unit": "mEq/L"
      },
      {
        "group": "Critical Low",
        "value": "< 2.8",
        "unit": "mEq/L",
        "alert": "critical_low",
        "note": "High risk of fatal ventricular arrhythmias, U-waves, muscle paralysis"
      },
      {
        "group": "Critical High",
        "value": "> 6.0",
        "unit": "mEq/L",
        "alert": "critical_high",
        "note": "Peaked T waves, PR prolongation, wide QRS, sine wave, asystole / VFib emergency"
      }
    ],
    "significance": "Major intracellular cation essential for cardiac and neuromuscular membrane potentials. Hypokalemia: vomiting, diarrhea, loops/thiazides, hyperaldosteronism, DKA treatment. Hyperkalemia: AKI, CKD, ACEi/ARBs, spironolactone, hemolysis (pseudohyperkalemia), Addison disease.",
    "significanceAr": "الكاتيون الرئيسي داخل الخلوي والمنظم لكهربائية القلب. نقص البوتاسيوم: الإسهال والقيء والمدرات؛ يسبب اضطراب النظم البطيني وموجات U. فرطه: القصور الكلوي وأدوية الضغط؛ يسبب توقف القلب وموجات T المؤنفة.",
    "tags": [
      "bmp",
      "electrolytes",
      "potassium",
      "cardiac",
      "arrhythmia"
    ]
  },
  {
    "id": "chloride_serum",
    "name": "Serum Chloride",
    "nameAr": "كلوريد المصل",
    "aliases": [
      "Cl",
      "Chloride",
      "الكلور"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "96 – 106",
        "unit": "mEq/L"
      },
      {
        "group": "Neonates",
        "value": "96 – 110",
        "unit": "mEq/L"
      },
      {
        "group": "Infants & Children",
        "value": "98 – 107",
        "unit": "mEq/L"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "95 – 105",
        "unit": "mEq/L"
      },
      {
        "group": "Critical Low",
        "value": "< 80",
        "unit": "mEq/L",
        "alert": "critical_low",
        "note": "Severe hypochloremic metabolic alkalosis (e.g. pyloric stenosis)"
      },
      {
        "group": "Critical High",
        "value": "> 120",
        "unit": "mEq/L",
        "alert": "critical_high",
        "note": "Severe hyperchloremic non-anion gap metabolic acidosis (saline resuscitation, RTA)"
      }
    ],
    "significance": "Major extracellular anion. Hypochloremia seen in severe vomiting/NG suction (loss of HCl), metabolic alkalosis, loop diuretics. Hyperchloremia seen in normal saline resuscitation, renal tubular acidosis (RTA), severe diarrhea.",
    "significanceAr": "الأنيون الرئيسي خارج الخلوي. ينخفض في القيء الشديد والمدرات وقلاء الدم، ويرتفع في الحماض غير ذي الفجوة الأنيونية وإعطاء السيروم الملحي بكميات كبيرة.",
    "tags": [
      "bmp",
      "electrolytes",
      "chloride",
      "acid-base"
    ]
  },
  {
    "id": "bicarbonate_co2",
    "name": "Bicarbonate (Total CO2)",
    "nameAr": "البيكربونات (ثاني أكسيد الكربون الكلي)",
    "aliases": [
      "HCO3",
      "CO2 Total",
      "Bicarbonate",
      "البيكربونات"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "22 – 29",
        "unit": "mEq/L"
      },
      {
        "group": "Neonates",
        "value": "13 – 22",
        "unit": "mEq/L"
      },
      {
        "group": "Infants & Children",
        "value": "20 – 28",
        "unit": "mEq/L"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "21 – 28",
        "unit": "mEq/L"
      },
      {
        "group": "Critical Low",
        "value": "< 10",
        "unit": "mEq/L",
        "alert": "critical_low",
        "note": "Severe metabolic acidosis (DKA, lactic acidosis, severe shock)"
      },
      {
        "group": "Critical High",
        "value": "> 40",
        "unit": "mEq/L",
        "alert": "critical_high",
        "note": "Severe metabolic alkalosis or chronic severe respiratory failure compensation"
      }
    ],
    "significance": "Primary buffer system in extracellular fluid. Decreased in metabolic acidosis (DKA, lactic acidosis, uremia, toxic alcohols) or compensated respiratory alkalosis. Increased in metabolic alkalosis or chronic respiratory acidosis (COPD compensation).",
    "significanceAr": "الدارئ الرئيسي خارج الخلوي. ينخفض في الحماض الاستقلابي (الحماض الكيتوني السكري، الحماض اللبني، اليوريميا)، ويرتفع في القلاء الاستقلابي أو تعويض قصور التنفس المزمن.",
    "tags": [
      "bmp",
      "acid-base",
      "bicarbonate",
      "co2",
      "electrolytes"
    ]
  },
  {
    "id": "bun_urea_nitrogen",
    "name": "Blood Urea Nitrogen (BUN)",
    "nameAr": "نيتروجين يوريا الدم",
    "aliases": [
      "BUN",
      "Urea Nitrogen",
      "اليوريا",
      "نيتروجين اليوريا"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "7 – 20",
        "unit": "mg/dL"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "8 – 23",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates",
        "value": "3 – 12",
        "unit": "mg/dL"
      },
      {
        "group": "Infants & Children",
        "value": "5 – 18",
        "unit": "mg/dL"
      },
      {
        "group": "Pregnancy",
        "value": "4 – 12",
        "unit": "mg/dL",
        "note": "Lower due to increased GFR and expanded plasma volume"
      },
      {
        "group": "Critical High",
        "value": "> 100",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Severe uremic toxicity, risk of encephalopathy, pericarditis; urgent dialysis evaluation"
      }
    ],
    "significance": "Product of protein catabolism synthesized by liver and excreted by kidneys. Elevated in prerenal azotemia (dehydration, upper GI bleeding, high protein intake, CHF) and intrinsic/postrenal renal failure. Decreased in severe liver disease and malnutrition.",
    "significanceAr": "ناتج استقلاب البروتين ويطرح عبر الكلى. يرتفع في التجفاف والنزف الهضمي العلوي وقصور الكلية. ينخفض في القصور الكبدي الشديد وسوء التغذية.",
    "tags": [
      "bmp",
      "renal",
      "bun",
      "urea",
      "kidney"
    ]
  },
  {
    "id": "creatinine_serum",
    "name": "Serum Creatinine",
    "nameAr": "الكرياتينين في المصل",
    "aliases": [
      "Cr",
      "Creatinine",
      "Serum Cr",
      "الكرياتينين"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "0.74 – 1.35",
        "unit": "mg/dL"
      },
      {
        "group": "Adult Females",
        "value": "0.59 – 1.04",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates (Maternal carryover)",
        "value": "0.3 – 1.0",
        "unit": "mg/dL"
      },
      {
        "group": "Infants (1-12mo)",
        "value": "0.2 – 0.4",
        "unit": "mg/dL"
      },
      {
        "group": "Children (1-8yr)",
        "value": "0.3 – 0.7",
        "unit": "mg/dL"
      },
      {
        "group": "Pregnancy",
        "value": "0.4 – 0.8",
        "unit": "mg/dL",
        "note": ">0.8 mg/dL is abnormal in pregnancy due to hyperfiltration"
      },
      {
        "group": "Elderly",
        "value": "0.6 – 1.2",
        "unit": "mg/dL",
        "note": "Caution: decreased muscle mass masks declining GFR"
      },
      {
        "group": "Critical High",
        "value": "> 7.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Severe renal failure / anuric AKI"
      }
    ],
    "significance": "Breakdown product of muscle creatine phosphate. Steady production proportional to muscle mass. Elevated in acute kidney injury (AKI) and chronic kidney disease (CKD).",
    "significanceAr": "ناتج تقويض فوسفات الكرياتين العضلي. يرتفع بارتفاع طردي مع تدهور الوظيفة الكلوية في القصور الحاد والمزمن. ملحوظة: في الحوامل يعتبر >0.8 غير طبيعي لزيادة الترشيح الكبيبي.",
    "tags": [
      "bmp",
      "renal",
      "creatinine",
      "kidney",
      "aki",
      "ckd"
    ]
  },
  {
    "id": "fasting_glucose",
    "name": "Fasting Blood Glucose",
    "nameAr": "سكر الدم الصائم",
    "aliases": [
      "FBS",
      "FPG",
      "Fasting Glucose",
      "السكر الصائم",
      "جلوكوز الدم"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Normal Adults (Fasting 8h)",
        "value": "70 – 99",
        "unit": "mg/dL"
      },
      {
        "group": "Impaired Fasting Glucose (Prediabetes)",
        "value": "100 – 125",
        "unit": "mg/dL"
      },
      {
        "group": "Diabetes Mellitus Diagnostic",
        "value": "≥ 126",
        "unit": "mg/dL",
        "note": "Confirm on repeat testing unless symptomatic"
      },
      {
        "group": "Pregnancy (GDM Fasting Threshold)",
        "value": "< 92",
        "unit": "mg/dL",
        "note": "IADPSG criteria: ≥92 confirms Gestational Diabetes"
      },
      {
        "group": "Neonates (Full Term >24h)",
        "value": "45 – 90",
        "unit": "mg/dL"
      },
      {
        "group": "Infants & Children",
        "value": "60 – 100",
        "unit": "mg/dL"
      },
      {
        "group": "Critical Low (Hypoglycemia)",
        "value": "< 50",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Neuroglycopenia, seizures, coma (<54 mg/dL Level 2 hypoglycemia threshold)"
      },
      {
        "group": "Critical High (Severe Hyperglycemia)",
        "value": "> 400",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Risk of DKA / Hyperosmolar Hyperglycemic State (HHS)"
      }
    ],
    "significance": "Primary energy source for human cells. Diagnostic criteria: Normal <100, Prediabetes 100-125, Diabetes ≥126 mg/dL. Hypoglycemia (<54-70): insulin overdose, sulfonylureas, sepsis, insulinoma, adrenal failure.",
    "significanceAr": "مصدر الطاقة الرئيسي لخلايا الجسم. المعايير: طبيعي <100، مقدمات السكري 100-125، سكري صريح ≥126 مجم/دل. هبوط السكر الحاد يهدد الحياة بتلف الدماغ.",
    "tags": [
      "bmp",
      "diabetes",
      "glucose",
      "metabolism",
      "endocrine"
    ]
  },
  {
    "id": "egfr_ckd_epi",
    "name": "Estimated GFR (CKD-EPI 2021)",
    "nameAr": "معدل الترشيح الكبيبي التقديري (CKD-EPI)",
    "aliases": [
      "eGFR",
      "GFR",
      "معدل الرشح الكبيبي"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Stage G1 (Normal / High Function)",
        "value": "≥ 90",
        "unit": "mL/min/1.73m²"
      },
      {
        "group": "Stage G2 (Mild Reduction)",
        "value": "60 – 89",
        "unit": "mL/min/1.73m²"
      },
      {
        "group": "Stage G3a (Mild to Moderate Reduction)",
        "value": "45 – 59",
        "unit": "mL/min/1.73m²"
      },
      {
        "group": "Stage G3b (Moderate to Severe Reduction)",
        "value": "30 – 44",
        "unit": "mL/min/1.73m²"
      },
      {
        "group": "Stage G4 (Severe Reduction)",
        "value": "15 – 29",
        "unit": "mL/min/1.73m²",
        "note": "Prepare for renal replacement therapy"
      },
      {
        "group": "Stage G5 (Kidney Failure / End Stage)",
        "value": "< 15",
        "unit": "mL/min/1.73m²",
        "alert": "critical_low",
        "note": "Dialysis or kidney transplant indicated"
      }
    ],
    "significance": "Calculated via 2021 CKD-EPI equation without race variable. Primary index for staging Chronic Kidney Disease (CKD).",
    "significanceAr": "المؤشر المعتمد عالمياً لتصنيف مراحل القصور الكلوي المزمن من المرحلة الأولى إلى الخامسة النهائية دون إدخال عامل العرق.",
    "tags": [
      "bmp",
      "renal",
      "egfr",
      "ckd",
      "kidney"
    ]
  },
  {
    "id": "bun_creatinine_ratio",
    "name": "BUN to Creatinine Ratio",
    "nameAr": "نسبة نيتروجين اليوريا إلى الكرياتينين",
    "aliases": [
      "BUN/Cr Ratio",
      "نسبة اليوريا للكرياتينين"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "10.0 – 20.0",
        "unit": "ratio"
      },
      {
        "group": "Prerenal Azotemia Pattern",
        "value": "> 20.0",
        "unit": "ratio",
        "note": "High ratio with elevated creatinine indicates prerenal etiology (hypoperfusion, dehydration, GI bleed)"
      },
      {
        "group": "Intrinsic Renal Failure Pattern",
        "value": "< 10.0 – 15.0",
        "unit": "ratio",
        "note": "ATN, glomerulonephritis"
      }
    ],
    "significance": "Differentiates prerenal azotemia (>20:1 with high urea reabsorption due to low perfusion) from intrinsic acute tubular necrosis (<15:1 where tubule cannot reabsorb urea).",
    "significanceAr": "يفرق بين القصور الكلوي قبل الكلوي (>20:1 بسبب نقص التروية والجفاف والنزف الهضمي) والقصور الكلوي الداخلي مثل النخر الأنبوبي الحاد (<15:1).",
    "tags": [
      "bmp",
      "renal",
      "bun-cr-ratio",
      "prerenal"
    ]
  },
  {
    "id": "serum_anion_gap",
    "name": "Serum Anion Gap",
    "nameAr": "الفجوة الأنيونية في المصل",
    "aliases": [
      "Anion Gap",
      "AG",
      "فجوة الأنيونات"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Normal Range (Na - [Cl + HCO3])",
        "value": "4.0 – 12.0",
        "unit": "mEq/L"
      },
      {
        "group": "High Anion Gap Acidosis (HAGMA)",
        "value": "> 12.0",
        "unit": "mEq/L",
        "note": "MUDPILES / GOLD MARK (Methanol, Uremia, DKA, Propylene glycol, INH, Lactate, Ethylene glycol, Salicylates)"
      },
      {
        "group": "Low Anion Gap",
        "value": "< 4.0",
        "unit": "mEq/L",
        "note": "Hypoalbuminemia (correct AG: +2.5 for every 1 g/dL albumin drop below 4.0), multiple myeloma (cationic paraprotein)"
      },
      {
        "group": "Critical High (>20)",
        "value": "> 20.0",
        "unit": "mEq/L",
        "alert": "critical_high",
        "note": "Definitive high anion gap metabolic acidosis regardless of pH"
      }
    ],
    "significance": "Difference between measured cations (Na) and anions (Cl + HCO3). Key in differential diagnosis of metabolic acidosis. Albumin is the primary unmeasured anion: corrected AG = AG + 2.5 x (4.0 - Albumin).",
    "significanceAr": "الفرق بين الكاتيونات والأنيونات المقاسة. أساسي لتشخيص أسباب الحماض الاستقلابي. يجب تصحيحه بإضافة 2.5 لكل هبوط مقداره 1 جم/دل في الألبومين دون 4.",
    "tags": [
      "bmp",
      "acid-base",
      "anion-gap",
      "acidosis",
      "toxicology"
    ]
  },
  {
    "id": "measured_serum_osmolality",
    "name": "Serum Osmolality (Measured)",
    "nameAr": "الأسمولية المقاسة في المصل",
    "aliases": [
      "Serum Osmolality",
      "Osmolality",
      "أسمولية المصل"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "275 – 295",
        "unit": "mOsm/kg"
      },
      {
        "group": "Children",
        "value": "270 – 290",
        "unit": "mOsm/kg"
      },
      {
        "group": "Critical Low",
        "value": "< 250",
        "unit": "mOsm/kg",
        "alert": "critical_low",
        "note": "Severe hypo-osmolality, cerebral edema"
      },
      {
        "group": "Critical High",
        "value": "> 320",
        "unit": "mOsm/kg",
        "alert": "critical_high",
        "note": "Hyperosmolar state (HHS, severe dehydration, toxic ingestion)"
      }
    ],
    "significance": "Determined by freezing-point depression. Measures concentration of all dissolved particles in blood. Decreased in water intoxication, SIADH. Increased in dehydration, diabetes insipidus, HHS, ethanol, toxic alcohols.",
    "significanceAr": "يقاس بتخفيض نقطة التجمد في المخبر. ينخفض في التسمم بالماء ومتلازمة SIADH، ويرتفع في الجفاف الشديد والغيبوبة السكرية وفرط الأسمولية وتناول الكحول والسموم.",
    "tags": [
      "bmp",
      "osmolality",
      "fluid-balance"
    ]
  },
  {
    "id": "calculated_serum_osmolality",
    "name": "Serum Osmolality (Calculated)",
    "nameAr": "الأسمولية المحسوبة في المصل",
    "aliases": [
      "Calculated Osmolality",
      "Calc Osm"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Formula: 2xNa + Glucose/18 + BUN/2.8",
        "value": "275 – 295",
        "unit": "mOsm/kg"
      },
      {
        "group": "Effective Osmolality (Tonicity: 2xNa + Glucose/18)",
        "value": "270 – 285",
        "unit": "mOsm/kg",
        "note": "Excludes urea because it is freely membrane-permeable"
      }
    ],
    "significance": "Estimation of osmoles contributed by sodium salts, glucose, and urea. Effective osmolality (tonicity) excludes BUN because urea freely crosses cell membranes without creating osmotic water shifts.",
    "significanceAr": "حساب الأسمولية التقديرية بالمعادلة: (2 × صوديوم) + (السكر ÷ 18) + (اليوريا ÷ 2.8). الأسمولية الفعالة تستثني اليوريا لنفاذيتها الحرة عبر الأغشية.",
    "tags": [
      "bmp",
      "osmolality",
      "formula"
    ]
  },
  {
    "id": "serum_osmolar_gap",
    "name": "Serum Osmolar Gap",
    "nameAr": "الفجوة الأسمولية في المصل",
    "aliases": [
      "Osmolar Gap",
      "Osmolal Gap",
      "فجوة التناضح"
    ],
    "category": "bmp",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 10.0",
        "unit": "mOsm/kg"
      },
      {
        "group": "Borderline",
        "value": "10.0 – 14.0",
        "unit": "mOsm/kg"
      },
      {
        "group": "Critical Elevated (Toxic Alcohol Ingestion)",
        "value": "≥ 15.0",
        "unit": "mOsm/kg",
        "alert": "critical_high",
        "note": "High index of suspicion for toxic alcohol ingestion: Methanol, Ethylene glycol, Isopropanol, Propylene glycol"
      }
    ],
    "significance": "Difference between measured and calculated osmolality. When ≥10-15 mOsm/kg, strongly suggests presence of exogenous unmeasured osmotically active substances (methanol, ethylene glycol, isopropanol, ethanol, acetone).",
    "significanceAr": "الفرق بين الأسمولية المقاسة والأسمولية المحسوبة. عندما تزيد عن 10-15 ملمول/كغ تدل بقوة على وجود سموم طيارة مثل الميثانول أو الإيثيلين جلايكول أو الإيزوبروبانول.",
    "tags": [
      "bmp",
      "toxicology",
      "osmolar-gap",
      "methanol",
      "poisoning"
    ]
  },
  {
    "id": "calcium_total",
    "name": "Total Calcium",
    "nameAr": "الكالسيوم الكلي في المصل",
    "aliases": [
      "Ca",
      "Total Ca",
      "Calcium",
      "الكالسيوم"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "8.5 – 10.5",
        "unit": "mg/dL"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "8.2 – 10.2",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates (0-4 wk)",
        "value": "7.6 – 10.4",
        "unit": "mg/dL"
      },
      {
        "group": "Infants & Children",
        "value": "8.8 – 10.8",
        "unit": "mg/dL"
      },
      {
        "group": "Pregnancy",
        "value": "8.2 – 10.0",
        "unit": "mg/dL",
        "note": "Lower due to hemodilution and decreased albumin"
      },
      {
        "group": "Critical Low",
        "value": "< 6.5",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Tetany, laryngospasm, prolonged QT interval, seizures"
      },
      {
        "group": "Critical High",
        "value": "> 13.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Shortened QT, heart block, coma, nephrocalcinosis, hypercalcemic crisis"
      }
    ],
    "significance": "Critical for neuromuscular transmission, coagulation, bone mineralization. Hypocalcemia: hypoparathyroidism, vitamin D deficiency, pancreatitis, CKD. Hypercalcemia (>90% due to primary hyperparathyroidism or malignancy).",
    "significanceAr": "أساسي لنقل السيالة العصبية وتخثر الدم والعظام. ينخفض في قصور الدريقات ونقص فيتامين د والفشل الكلوي. يرتفع بنسبة 90% بسبب فرط الدريقات الأولي أو الأورام الخبيثة.",
    "tags": [
      "cmp",
      "calcium",
      "electrolytes",
      "bone",
      "parathyroid"
    ]
  },
  {
    "id": "calcium_ionized",
    "name": "Ionized Calcium (Free Calcium)",
    "nameAr": "الكالسيوم الشاردي (الحر)",
    "aliases": [
      "iCa",
      "Ionized Ca",
      "Free Ca",
      "الكالسيوم المتأين"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "4.65 – 5.28",
        "unit": "mg/dL",
        "note": "1.16 – 1.32 mmol/L"
      },
      {
        "group": "Neonates",
        "value": "4.20 – 5.50",
        "unit": "mg/dL"
      },
      {
        "group": "Children",
        "value": "4.80 – 5.50",
        "unit": "mg/dL"
      },
      {
        "group": "Critical Low",
        "value": "< 3.20",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "<0.80 mmol/L; life-threatening tetany and arrhythmia"
      },
      {
        "group": "Critical High",
        "value": "> 6.40",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": ">1.60 mmol/L; acute neurologic and cardiac toxicity"
      }
    ],
    "significance": "Physiologically active fraction of calcium (unbound to albumin). Independent of serum albumin fluctuations. Ideal for critically ill, septic, transfused, and acidotic/alkalotic patients.",
    "significanceAr": "الشكل الحر الفعال حيوياً من الكالسيوم. لا يتأثر بتقلبات الألبومين وهو المقياس الدقيق في العناية المركزة وبعد نقل الدم وحالات اضطراب حموضة الدم.",
    "tags": [
      "cmp",
      "calcium",
      "ionized-calcium",
      "icu"
    ]
  },
  {
    "id": "corrected_calcium",
    "name": "Corrected Calcium (Albumin-Adjusted)",
    "nameAr": "الكالسيوم المصحح بالألبومين",
    "aliases": [
      "Corrected Ca",
      "Albumin-Corrected Calcium"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Normal Adults (Formula: Ca + 0.8 x [4.0 - Albumin])",
        "value": "8.5 – 10.5",
        "unit": "mg/dL"
      },
      {
        "group": "Adjusted Cutoff for Hypercalcemia",
        "value": "> 10.5",
        "unit": "mg/dL"
      }
    ],
    "significance": "Roughly 40-50% of calcium is bound to albumin. For every 1 g/dL drop in serum albumin below 4.0, total calcium drops by ~0.8 mg/dL without changing ionized calcium.",
    "significanceAr": "نظراً لارتباط 45% من الكالسيوم بالألبومين، فإن هبوط الألبومين بمقدار 1 جم/دل يخفض الكالسيوم الكلي بمقدار 0.8 مجم/دل دون المساس بالكالسيوم الشاردي الفعال.",
    "tags": [
      "cmp",
      "calcium",
      "albumin-correction"
    ]
  },
  {
    "id": "magnesium_serum",
    "name": "Serum Magnesium",
    "nameAr": "المغنيسيوم في المصل",
    "aliases": [
      "Mg",
      "Magnesium",
      "Serum Mg",
      "المغنيسيوم"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "1.7 – 2.4",
        "unit": "mg/dL",
        "note": "0.7 – 1.0 mmol/L"
      },
      {
        "group": "Neonates",
        "value": "1.5 – 2.2",
        "unit": "mg/dL"
      },
      {
        "group": "Infants & Children",
        "value": "1.7 – 2.3",
        "unit": "mg/dL"
      },
      {
        "group": "Therapeutic Target in Preeclampsia / Eclampsia",
        "value": "4.8 – 8.4",
        "unit": "mg/dL",
        "note": "2.0 – 3.5 mmol/L with MgSO4 infusion"
      },
      {
        "group": "Critical Low",
        "value": "< 1.0",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Refractory hypokalemia, Torsades de Pointes, ventricular fibrillation, seizures"
      },
      {
        "group": "Critical High",
        "value": "> 4.9",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Loss of deep tendon reflexes (>8 mg/dL), respiratory arrest (>12 mg/dL), cardiac arrest"
      }
    ],
    "significance": "Essential cofactor for >300 enzymatic reactions, including Na-K-ATPase. Hypomagnesemia causes refractory hypokalemia and hypocalcemia, and triggers Torsades de Pointes.",
    "significanceAr": "مساعد أنزيمي لأكثر من 300 تفاعل حيوي. يسبب نقصه صعوبة تصحيح نقص البوتاسيوم ويحفز اضطراب النظم القاتل (تورساد دي بوان). يستخدم وريدياً لعلاج تسمم الحمل.",
    "tags": [
      "cmp",
      "magnesium",
      "electrolytes",
      "arrhythmia",
      "preeclampsia"
    ]
  },
  {
    "id": "phosphorus_serum",
    "name": "Serum Phosphorus (Inorganic Phosphate)",
    "nameAr": "الفوسفور (الفوسفات غير العضوي)",
    "aliases": [
      "PO4",
      "Phosphorus",
      "Phosphate",
      "الفوسفات"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "2.5 – 4.5",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates",
        "value": "4.3 – 9.0",
        "unit": "mg/dL"
      },
      {
        "group": "Infants (1-12mo)",
        "value": "4.5 – 6.7",
        "unit": "mg/dL"
      },
      {
        "group": "Children (1-12yr)",
        "value": "3.5 – 5.5",
        "unit": "mg/dL"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "2.3 – 4.2",
        "unit": "mg/dL"
      },
      {
        "group": "Critical Low",
        "value": "< 1.0",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Severe Refeeding Syndrome, respiratory failure (diaphragmatic weakness), hemolysis, rhabdomyolysis"
      },
      {
        "group": "Critical High",
        "value": "> 8.9",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Acute tumor lysis syndrome, metastatic tissue calcification, secondary hypocalcemia"
      }
    ],
    "significance": "Essential for ATP, 2,3-DPG, nucleic acids, cell membrane phospholipids, bone mineralization. Severe hypophosphatemia: hallmark of Refeeding Syndrome, respiratory muscle fatigue, DKA treatment. Hyperphosphatemia: CKD, hypoparathyroidism, tumor lysis syndrome.",
    "significanceAr": "أساسي لمركب الطاقة ATP وغشاء الخلية. هبوطه الشديد علامة فارقة في متلازمة إعادة التغذية ويسبب شلل الحجاب الحاجز. يرتفع في الفشل الكلوي ومتلازمة انحلال الورم.",
    "tags": [
      "cmp",
      "phosphorus",
      "electrolytes",
      "refeeding-syndrome",
      "bone"
    ]
  },
  {
    "id": "total_protein_serum",
    "name": "Total Serum Protein",
    "nameAr": "البروتين الكلي في المصل",
    "aliases": [
      "TP",
      "Total Protein",
      "البروتين الكلي"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "6.0 – 8.3",
        "unit": "g/dL"
      },
      {
        "group": "Neonates",
        "value": "4.6 – 7.0",
        "unit": "g/dL"
      },
      {
        "group": "Infants",
        "value": "5.1 – 7.3",
        "unit": "g/dL"
      },
      {
        "group": "Children",
        "value": "6.2 – 8.0",
        "unit": "g/dL"
      },
      {
        "group": "Pregnancy",
        "value": "5.5 – 7.5",
        "unit": "g/dL"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "6.0 – 7.8",
        "unit": "g/dL"
      }
    ],
    "significance": "Measures sum of albumin and globulins. Decreased in nephrotic syndrome, severe malnutrition, protein-losing enteropathy, liver failure. Increased in dehydration, multiple myeloma, chronic infections.",
    "significanceAr": "مجموع الألبومين والغلوبيولينات. ينخفض في المتلازمة الكلوية وسوء التغذية وتليف الكبد، ويرتفع في الجفاف والورم النقوي المتعدد والالتهابات المزمنة.",
    "tags": [
      "cmp",
      "protein",
      "albumin",
      "myeloma"
    ]
  },
  {
    "id": "albumin_serum",
    "name": "Serum Albumin",
    "nameAr": "الألبومين في المصل",
    "aliases": [
      "Alb",
      "Albumin",
      "الألبومين"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "3.5 – 5.0",
        "unit": "g/dL"
      },
      {
        "group": "Neonates",
        "value": "2.8 – 4.4",
        "unit": "g/dL"
      },
      {
        "group": "Children",
        "value": "3.7 – 5.6",
        "unit": "g/dL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "2.8 – 3.7",
        "unit": "g/dL",
        "note": "Physiologic decrease due to plasma volume expansion"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "3.2 – 4.5",
        "unit": "g/dL"
      },
      {
        "group": "Critical Low",
        "value": "< 1.5",
        "unit": "g/dL",
        "alert": "critical_low",
        "note": "Severe oncotic pressure collapse, anasarca, impaired drug protein binding"
      }
    ],
    "significance": "Major determinant of intravascular oncotic pressure (~75-80%) and drug carrier protein. Synthesized exclusively by hepatocytes (half-life ~20 days). Hypoalbuminemia: liver cirrhosis, nephrotic syndrome, malnutrition, burns, sepsis (negative acute-phase reactant).",
    "significanceAr": "المسؤول الأول عن الضغط الجرمي للأوعية (يمنع الاستسقاء). يصنع في الكبد (عمره النصفي 20 يوماً). ينخفض في تشمع الكبد والنفروز وسوء التغذية والإنتان.",
    "tags": [
      "cmp",
      "lft",
      "albumin",
      "nutrition",
      "oncotic-pressure"
    ]
  },
  {
    "id": "globulin_serum",
    "name": "Serum Globulin",
    "nameAr": "الغلوبولين في المصل",
    "aliases": [
      "Globulin",
      "Serum Globulins",
      "الغلوبيولين"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "2.0 – 3.5",
        "unit": "g/dL"
      },
      {
        "group": "Elderly",
        "value": "2.0 – 3.8",
        "unit": "g/dL"
      },
      {
        "group": "Markedly Elevated (Hypergammaglobulinemia)",
        "value": "> 4.0",
        "unit": "g/dL",
        "note": "Evaluate for monoclonal gammopathy, autoimmune hepatitis, HIV, or chronic granulomatous infection"
      }
    ],
    "significance": "Calculated as Total Protein minus Albumin. Includes immunoglobulins, alpha/beta globulins. Elevated in chronic inflammatory states, multiple myeloma, autoimmune liver disease.",
    "significanceAr": "يحسب بطرح الألبومين من البروتين الكلي. يشمل الأجسام المضادة وبروتينات النقل. يرتفع في المايلوما المتعددة والتهاب الكبد المناعي الذاتي.",
    "tags": [
      "cmp",
      "globulin",
      "immunoglobulin"
    ]
  },
  {
    "id": "ag_ratio",
    "name": "Albumin to Globulin (A/G) Ratio",
    "nameAr": "نسبة الألبومين إلى الغلوبولين (A/G)",
    "aliases": [
      "A/G Ratio",
      "Albumin/Globulin Ratio"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "1.1 – 2.5",
        "unit": "ratio"
      },
      {
        "group": "Reversed / Inverted A/G Ratio",
        "value": "< 1.0",
        "unit": "ratio",
        "note": "Classic hallmark of chronic liver disease (cirrhosis) or multiple myeloma"
      }
    ],
    "significance": "Normally albumin exceeds globulin. Inverted ratio (<1.0) is a classic finding in advanced cirrhosis, multiple myeloma, severe autoimmune diseases, and nephrotic syndrome.",
    "significanceAr": "في الحالة الطبيعية يفوق الألبومين الغلوبولين. انقلاب النسبة (<1.0) علامة كلاسيكية على تليف الكبد المتقدم أو الورم النقوي المتعدد.",
    "tags": [
      "cmp",
      "ag-ratio",
      "cirrhosis",
      "myeloma"
    ]
  },
  {
    "id": "uric_acid_serum",
    "name": "Serum Uric Acid",
    "nameAr": "حمض اليوريك (حمض البول) في المصل",
    "aliases": [
      "Uric Acid",
      "Urate",
      "حمض البول",
      "حمض اليوريك"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "3.5 – 7.2",
        "unit": "mg/dL"
      },
      {
        "group": "Adult Females (Premenopausal)",
        "value": "2.6 – 6.0",
        "unit": "mg/dL"
      },
      {
        "group": "Adult Females (Postmenopausal)",
        "value": "3.5 – 7.0",
        "unit": "mg/dL"
      },
      {
        "group": "Children",
        "value": "2.0 – 5.5",
        "unit": "mg/dL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "3.0 – 6.0",
        "unit": "mg/dL",
        "note": ">6.0 mg/dL is associated with preeclampsia risk"
      },
      {
        "group": "Target in Chronic Gout (Urte-Lowering Therapy)",
        "value": "< 6.0",
        "unit": "mg/dL",
        "note": "<5.0 mg/dL in tophaceous gout"
      },
      {
        "group": "Critical High (Tumor Lysis Syndrome Threshold)",
        "value": "> 12.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "High risk of acute urate nephropathy and renal failure"
      }
    ],
    "significance": "End product of purine catabolism. Hyperuricemia: gout, tumor lysis syndrome, renal failure, Lesch-Nyhan syndrome, thiazide/loop diuretics. Note: normal serum urate does NOT rule out acute gout flare.",
    "significanceAr": "الناتج النهائي لاستقلاب البيورينات. يرتفع في داء النقرس وانحلال الورم والقصور الكلوي. ملحوظة: قد يكون طبيعياً في هجمة النقرس الحادة.",
    "tags": [
      "cmp",
      "uric-acid",
      "gout",
      "tumor-lysis",
      "rheumatology"
    ]
  },
  {
    "id": "ammonia_plasma",
    "name": "Plasma Ammonia",
    "nameAr": "الأمونيا في البلازما",
    "aliases": [
      "Ammonia",
      "NH3",
      "Plasma NH3",
      "أمونيا"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "15 – 45",
        "unit": "µg/dL",
        "note": "11 – 32 µmol/L"
      },
      {
        "group": "Neonates (First 72 hours)",
        "value": "40 – 90",
        "unit": "µg/dL"
      },
      {
        "group": "Infants & Children",
        "value": "20 – 60",
        "unit": "µg/dL"
      },
      {
        "group": "Critical High",
        "value": "> 100",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "High risk of hepatic encephalopathy, cerebral edema, brain herniation; keep on ice, run within 15 min"
      }
    ],
    "significance": "Product of bacterial protein deamination in the gut, converted to urea by hepatic urea cycle. Elevated in hepatic encephalopathy, urea cycle defects, Reye syndrome, valproic acid toxicity. Must be collected on ice without a tourniquet and processed immediately.",
    "significanceAr": "تنتجها بكتيريا الأمعاء من البروتين ويحولها الكبد إلى يوريا. ترتفع في الاعتلال الدماغي الكبدي ونقص أنزيمات دورة اليوريا وسمية الفالبروات. يجب سحبها في أنبوب مثلج فوراً.",
    "tags": [
      "cmp",
      "lft",
      "ammonia",
      "encephalopathy",
      "toxicology"
    ]
  },
  {
    "id": "pseudocholinesterase",
    "name": "Pseudocholinesterase (Butyrylcholinesterase)",
    "nameAr": "الكولين استراز الكاذب (بوتيريل كولين استراز)",
    "aliases": [
      "PChE",
      "Butyrylcholinesterase",
      "BChE"
    ],
    "category": "cmp",
    "ranges": [
      {
        "group": "Adults",
        "value": "5300 – 12900",
        "unit": "U/L"
      },
      {
        "group": "Pregnancy (Near Term)",
        "value": "Decreased by 20-30%",
        "unit": "U/L"
      },
      {
        "group": "Organophosphate Toxicity / Atypical Enzyme",
        "value": "< 3000",
        "unit": "U/L",
        "alert": "critical_low",
        "note": "Severe organophosphate poisoning or risk of prolonged apnea with succinylcholine"
      }
    ],
    "significance": "Synthesized by liver. Hydrolyzes succinylcholine and mivacurium. Inherited deficiency (atypical dibucaine number) leads to prolonged succinylcholine apnea. Inhibited by organophosphate pesticides.",
    "significanceAr": "يصنع في الكبد ويفكك مرخيات العضلات (سوكسينيل كولين). نقصه الوراثي يسبب توقف تنفس مديد بالتخدير، ويثبط بشدة في التسمم بالمبيدات الحشرية الفوسفورية.",
    "tags": [
      "cmp",
      "anesthesia",
      "toxicology",
      "cholinesterase"
    ]
  },
  {
    "id": "bilirubin_total",
    "name": "Total Bilirubin",
    "nameAr": "البيليروبين الكلي",
    "aliases": [
      "TBIL",
      "Total Bili",
      "Bilirubin",
      "صفراء الدم الكلية"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults",
        "value": "0.3 – 1.2",
        "unit": "mg/dL"
      },
      {
        "group": "Elderly",
        "value": "0.2 – 1.1",
        "unit": "mg/dL"
      },
      {
        "group": "Full-Term Neonates (Cord Blood)",
        "value": "< 2.0",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates (24 Hours of Life)",
        "value": "< 6.0",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates (48 Hours of Life)",
        "value": "< 10.0",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates (3-5 Days of Life Peak)",
        "value": "< 12.0",
        "unit": "mg/dL"
      },
      {
        "group": "Premature Infants Peak",
        "value": "< 15.0",
        "unit": "mg/dL"
      },
      {
        "group": "Critical High (Neonatal Kernicterus Risk)",
        "value": "> 20.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "High risk of kernicterus / bilirubin encephalopathy; immediate exchange transfusion evaluation"
      }
    ],
    "significance": "Breakdown product of heme catabolism. Clinical jaundice appears when total bilirubin >2.5-3.0 mg/dL. Elevated in hemolysis, Gilbert syndrome, hepatitis, cirrhosis, biliary obstruction.",
    "significanceAr": "ناتج تقويض الهيم؛ يظهر اليرقان السريري عندما يتجاوز 2.5-3 مجم/دل. يرتفع في انحلال الدم ومتلازمة غيلبرت والتهاب الكبد وانسداد الطرق الصفراوية.",
    "tags": [
      "lft",
      "bilirubin",
      "jaundice",
      "liver",
      "neonatal"
    ]
  },
  {
    "id": "bilirubin_direct",
    "name": "Direct Bilirubin (Conjugated)",
    "nameAr": "البيليروبين المباشر (المقترن)",
    "aliases": [
      "DBIL",
      "Direct Bili",
      "Conjugated Bilirubin",
      "البيليروبين المقترن"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults",
        "value": "0.0 – 0.3",
        "unit": "mg/dL"
      },
      {
        "group": "Neonates",
        "value": "< 0.4",
        "unit": "mg/dL"
      },
      {
        "group": "Neonatal Cholestasis Flag",
        "value": "> 1.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Biliary atresia alert if >1.0 mg/dL or >20% of total bilirubin"
      }
    ],
    "significance": "Water-soluble glucuronidated form. Conjugated hyperbilirubinemia (>50% of total) signifies hepatocellular injury (hepatitis, cirrhosis) or biliary obstruction (choledocholithiasis, cholangiocarcinoma, pancreatic head cancer, biliary atresia).",
    "significanceAr": "الشكل المقترن المنحل بالماء؛ ارتفاعه بنسبة تتجاوز 50% من الكلي يدل على أذية خلايا الكبد أو انسداد القنوات الصفراوية (حصيات، أورام، رتق القناة الصفراوية).",
    "tags": [
      "lft",
      "bilirubin",
      "cholestasis",
      "liver"
    ]
  },
  {
    "id": "bilirubin_indirect",
    "name": "Indirect Bilirubin (Unconjugated)",
    "nameAr": "البيليروبين غير المباشر (غير المقترن)",
    "aliases": [
      "IBIL",
      "Unconjugated Bilirubin",
      "البيليروبين الحر"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults (Total minus Direct)",
        "value": "0.2 – 0.8",
        "unit": "mg/dL"
      },
      {
        "group": "Elevated Unconjugated Pattern",
        "value": "> 1.0",
        "unit": "mg/dL",
        "note": "Hemolysis, Gilbert syndrome, Crigler-Najjar, ineffective erythropoiesis"
      }
    ],
    "significance": "Lipid-soluble unconjugated form bound to albumin. Crosses blood-brain barrier in neonates (kernicterus risk). Isolated elevation with normal transaminases/ALP suggests hemolysis or Gilbert syndrome.",
    "significanceAr": "الشكل المنحل بالدسم والمرتبط بالألبومين؛ يعبر حاجز الدماغ الدموي لدى حديثي الولادة مسبباً اليرقان النووي. يرتفع معزولاً في انحلال الدم ومتلازمة غيلبرت.",
    "tags": [
      "lft",
      "bilirubin",
      "gilbert",
      "hemolysis"
    ]
  },
  {
    "id": "alt_sgpt",
    "name": "Alanine Aminotransferase (ALT / SGPT)",
    "nameAr": "ناقلة أمين الألانين (ALT / SGPT)",
    "aliases": [
      "ALT",
      "SGPT",
      "Alanine Transaminase",
      "أنزيم الكبد ALT"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "10 – 40",
        "unit": "U/L",
        "note": "AASLD healthy upper limit: 35 U/L for men"
      },
      {
        "group": "Adult Females",
        "value": "7 – 35",
        "unit": "U/L",
        "note": "AASLD healthy upper limit: 25 U/L for women"
      },
      {
        "group": "Infants & Children",
        "value": "10 – 35",
        "unit": "U/L"
      },
      {
        "group": "Neonates",
        "value": "6 – 50",
        "unit": "U/L"
      },
      {
        "group": "Moderate Elevation",
        "value": "100 – 500",
        "unit": "U/L",
        "note": "NASH/NAFLD, chronic hepatitis B/C, alcoholic liver disease, medication toxicity"
      },
      {
        "group": "Critical High (>1000 U/L)",
        "value": "> 1000",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Acute ischemic hepatitis (shock liver), acetaminophen overdose, or acute viral hepatitis"
      }
    ],
    "significance": "Cytosolic enzyme highly specific to hepatocytes. Marked acute elevations (>1000 U/L) are characteristic of ischemic hepatitis (shock liver), acute acetaminophen toxicity, or acute viral hepatitis A/B/E.",
    "significanceAr": "أنزيم نوعي جداً لخلايا الكبد. الارتفاعات الصاعقة (>1000) تدل على الكبد الصدمي بنقص التروية، التسمم بالباراسيتامول، أو التهاب الكبد الفيروسي الحاد.",
    "tags": [
      "lft",
      "alt",
      "hepatitis",
      "liver-enzymes"
    ]
  },
  {
    "id": "ast_sgot",
    "name": "Aspartate Aminotransferase (AST / SGOT)",
    "nameAr": "ناقلة أمين الأسبارتات (AST / SGOT)",
    "aliases": [
      "AST",
      "SGOT",
      "Aspartate Transaminase",
      "أنزيم الكبد AST"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "10 – 40",
        "unit": "U/L"
      },
      {
        "group": "Adult Females",
        "value": "9 – 32",
        "unit": "U/L"
      },
      {
        "group": "Infants & Children",
        "value": "15 – 50",
        "unit": "U/L"
      },
      {
        "group": "Neonates",
        "value": "20 – 65",
        "unit": "U/L"
      },
      {
        "group": "Critical High",
        "value": "> 1000",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Ischemic hepatitis, acute toxin, acute hepatic necrosis, severe rhabdomyolysis"
      }
    ],
    "significance": "Found in hepatocytes (both mitochondria and cytosol), cardiac muscle, skeletal muscle, kidneys, brain. Elevations occur in liver diseases, acute myocardial infarction, and severe rhabdomyolysis.",
    "significanceAr": "يوجد في المتقدرات وسيتوبلازم خلايا الكبد وكذلك في عضلات القلب والعضلات الهيكلية؛ يرتفع في أمراض الكبد والاحتشاء وانحلال العضلات المخططة.",
    "tags": [
      "lft",
      "ast",
      "liver",
      "muscle"
    ]
  },
  {
    "id": "ast_alt_ratio",
    "name": "AST/ALT Ratio (De Ritis Ratio)",
    "nameAr": "نسبة AST إلى ALT (نسبة دي ريتيس)",
    "aliases": [
      "De Ritis Ratio",
      "AST/ALT Ratio",
      "نسبة إنزيمات الكبد"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0.8 – 1.2",
        "unit": "ratio"
      },
      {
        "group": "Viral Hepatitis / NAFLD Pattern",
        "value": "< 1.0",
        "unit": "ratio",
        "note": "ALT exceeds AST in most non-cirrhotic inflammatory states"
      },
      {
        "group": "Alcoholic Liver Disease Pattern",
        "value": "> 2.0",
        "unit": "ratio",
        "note": "Classic AST:ALT > 2:1 with both <500 U/L indicates alcoholic hepatitis (pyridoxal-5'-phosphate deficiency)"
      },
      {
        "group": "Cirrhosis Progression Indicator",
        "value": "> 1.0",
        "unit": "ratio",
        "note": "Rising ratio >1.0 in viral/NASH hepatitis strongly suggests transition to cirrhosis"
      }
    ],
    "significance": "AST:ALT > 2:1 (with AST typically <300-500) strongly suggests alcoholic liver disease due to alcohol-induced mitochondrial injury and B6 deficiency. In viral hepatitis or NAFLD, AST/ALT is usually <1.0; a rise >1.0 suggests progression to cirrhosis.",
    "significanceAr": "نسبة >2:1 مع قيم أقل من 500 تشخص بدقة التهاب الكبد الكحولي. في التهاب الكبد الفيروسي ودهون الكبد تكون <1، وارتفاعها فوق 1 مؤشر على بدء التشمع.",
    "tags": [
      "lft",
      "de-ritis",
      "alcohol",
      "cirrhosis"
    ]
  },
  {
    "id": "alp_alkaline_phosphatase",
    "name": "Alkaline Phosphatase (ALP)",
    "nameAr": "الفوسفاتاز القلوية (ALP)",
    "aliases": [
      "ALP",
      "Alk Phos",
      "الفوسفاتاز القلوية"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adult Males (20-50yr)",
        "value": "40 – 129",
        "unit": "U/L"
      },
      {
        "group": "Adult Females (20-50yr)",
        "value": "35 – 104",
        "unit": "U/L"
      },
      {
        "group": "Children (1-9yr - Active Bone Growth)",
        "value": "145 – 320",
        "unit": "U/L"
      },
      {
        "group": "Adolescents Pubertal Growth Spurt",
        "value": "130 – 500",
        "unit": "U/L"
      },
      {
        "group": "Pregnancy (3rd Trimester - Placental)",
        "value": "100 – 300",
        "unit": "U/L",
        "note": "Physiologic placental ALP synthesis doubles or triples baseline"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "50 – 140",
        "unit": "U/L"
      },
      {
        "group": "Critical High",
        "value": "> 500",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Complete biliary obstruction, Paget disease of bone, metastatic bone disease"
      }
    ],
    "significance": "Synthesized in biliary canaliculi, osteoblasts, placenta, intestines. Elevated in cholestatic liver diseases (stones, strictures, PBC, PSC) and high-turnover bone diseases (Paget disease, osteomalacia, rickets, bone metastases).",
    "significanceAr": "ينتج في القنيات الصفراوية وبانيات العظم والمشيمة. يرتفع في ركود الصفراء (حصيات، التهاب الأقنية المصلب) وأمراض العظام (داء باجيت، نقائل العظام، لين العظام).",
    "tags": [
      "lft",
      "alp",
      "cholestasis",
      "bone",
      "paget"
    ]
  },
  {
    "id": "ggt_gamma_glutamyl",
    "name": "Gamma-Glutamyl Transferase (GGT)",
    "nameAr": "غاما جلوتاميل ترانسفيراز (GGT)",
    "aliases": [
      "GGT",
      "GGTP",
      "غاما جلوتاميل"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "8 – 61",
        "unit": "U/L"
      },
      {
        "group": "Adult Females",
        "value": "5 – 36",
        "unit": "U/L"
      },
      {
        "group": "Neonates",
        "value": "15 – 130",
        "unit": "U/L"
      },
      {
        "group": "Children",
        "value": "5 – 30",
        "unit": "U/L"
      },
      {
        "group": "Marked Induction",
        "value": "> 150",
        "unit": "U/L",
        "note": "Biliary obstruction or alcohol abuse"
      }
    ],
    "significance": "Extremely sensitive marker for hepatobiliary disease. NOT elevated in bone disease: normal GGT with elevated ALP confirms skeletal origin of ALP. Induced by heavy alcohol consumption and enzyme-inducing medications (phenytoin, carbamazepine).",
    "significanceAr": "حساس جداً لأمراض الكبد والطرق الصفراوية؛ لا يرتفع في أمراض العظام فيؤكد أن ارتفاع الفوسفاتاز القلوية كبدي المنشأ. يتحفز بتناول الكحول والأدوية المحرضة.",
    "tags": [
      "lft",
      "ggt",
      "biliary",
      "alcohol"
    ]
  },
  {
    "id": "ldh_total",
    "name": "Lactate Dehydrogenase (Total LDH)",
    "nameAr": "نازعة هيدروجين اللاكتات الكلية (LDH)",
    "aliases": [
      "LDH",
      "Lactate Dehydrogenase",
      "إنزيم LDH"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults",
        "value": "140 – 280",
        "unit": "U/L"
      },
      {
        "group": "Neonates",
        "value": "160 – 450",
        "unit": "U/L"
      },
      {
        "group": "Children",
        "value": "150 – 300",
        "unit": "U/L"
      },
      {
        "group": "Critical High",
        "value": "> 1000",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Massive intravascular hemolysis, thrombotic microangiopathy (TTP/HUS), severe tissue infarction, lymphoma/leukemia"
      }
    ],
    "significance": "Ubiquitous intracellular enzyme released during cell damage. Elevated in hemolysis, myocardial infarction, pulmonary embolism, hepatitis, renal infarction, lymphoma, advanced germ cell tumors.",
    "significanceAr": "أنزيم واسع الانتشار داخل الخلايا يتحرر عند تخربها. يرتفع في انحلال الدم واحتشاء العضلة القلبية والصمة الرئوية والأورام اللمفاوية.",
    "tags": [
      "lft",
      "ldh",
      "hemolysis",
      "oncology",
      "necrosis"
    ]
  },
  {
    "id": "nucleotidase_5_prime",
    "name": "5'-Nucleotidase (5'-NT)",
    "nameAr": "5'-نوكليوتيداز",
    "aliases": [
      "5'-Nucleotidase",
      "5-NT"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "0.0 – 11.0",
        "unit": "U/L"
      },
      {
        "group": "Hepatobiliary Cholestasis",
        "value": "> 15.0",
        "unit": "U/L",
        "note": "Elevated exclusively in cholestatic hepatobiliary disease; normal in bone diseases"
      }
    ],
    "significance": "Enzyme specific to the hepatobiliary canalicular system. Used like GGT to verify whether an elevated ALP is hepatic or bone in origin.",
    "significanceAr": "أنزيم نوعي للقنيات الصفراوية الكبدية. يستخدم لإثبات أن ارتفاع الفوسفاتاز القلوية ناتج عن ركود صفراوي وليس بسبب العظام.",
    "tags": [
      "lft",
      "cholestasis",
      "5-nucleotidase"
    ]
  },
  {
    "id": "prealbumin_transthyretin",
    "name": "Prealbumin (Transthyretin)",
    "nameAr": "ما قبل الألبومين (ترانستيريتين)",
    "aliases": [
      "Prealbumin",
      "Transthyretin",
      "بريألبومين"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults",
        "value": "18.0 – 45.0",
        "unit": "mg/dL"
      },
      {
        "group": "Children",
        "value": "14.0 – 30.0",
        "unit": "mg/dL"
      },
      {
        "group": "Mild Malnutrition",
        "value": "10.0 – 17.0",
        "unit": "mg/dL"
      },
      {
        "group": "Severe Malnutrition / Acute Hepatic Decline",
        "value": "< 10.0",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "High mortality risk, acute hepatic synthetic failure, severe protein-calorie deficit"
      }
    ],
    "significance": "Short half-life of only ~2 days (compared to 20 days for albumin). Ideal sensitive marker for acute changes in nutritional status, acute liver synthetic dysfunction, and response to hyperalimentation.",
    "significanceAr": "عمره النصفي يومان فقط (مقارنة بـ 20 يوماً للألبومين). المؤشر الأكثر حساسية لمراقبة التغذية الوريدية والقصور الكبدي التخليقي الحاد.",
    "tags": [
      "lft",
      "nutrition",
      "prealbumin",
      "liver"
    ]
  },
  {
    "id": "alpha_1_antitrypsin",
    "name": "Alpha-1 Antitrypsin (AAT)",
    "nameAr": "ألفا-1 أنتيتريبسين",
    "aliases": [
      "AAT",
      "A1AT",
      "ألفا 1 أنتي تريبسين"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults (Normal PiMM Phenotype)",
        "value": "90 – 200",
        "unit": "mg/dL"
      },
      {
        "group": "Heterozygote Deficiency (PiMZ)",
        "value": "50 – 90",
        "unit": "mg/dL"
      },
      {
        "group": "Severe Homozygous Deficiency (PiZZ)",
        "value": "< 50",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Severe early-onset panacinar emphysema and neonatal cholestasis / cirrhosis"
      }
    ],
    "significance": "Serine protease inhibitor synthesized by liver. Severe deficiency (PiZZ genotype) causes early panacinar emphysema in young non-smokers and childhood cholestasis/cirrhosis.",
    "significanceAr": "مثبط لأنزيمات الإيلاستاز. يسبب نقصه الوراثي الحاد (طراز PiZZ) نفاخاً رئوياً مبكراً لغير المدخنين وتشمع كبد عند الأطفال.",
    "tags": [
      "lft",
      "pulmonary",
      "genetics",
      "cirrhosis"
    ]
  },
  {
    "id": "ceruloplasmin_serum",
    "name": "Ceruloplasmin",
    "nameAr": "السيرولوبلازمين",
    "aliases": [
      "Ceruloplasmin",
      "سيرولوبلازمين"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults",
        "value": "20.0 – 60.0",
        "unit": "mg/dL"
      },
      {
        "group": "Infants (<6mo)",
        "value": "5.0 – 18.0",
        "unit": "mg/dL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "40.0 – 120.0",
        "unit": "mg/dL",
        "note": "Estrogen markedly increases synthesis"
      },
      {
        "group": "Wilson Disease Screening Cutoff",
        "value": "< 20.0",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "<14-20 mg/dL highly suggestive of Wilson disease (hepatolenticular degeneration)"
      }
    ],
    "significance": "Major copper-carrying protein in blood. Low in Wilson disease (hepatolenticular degeneration), Menkes disease, and severe malnutrition. High in pregnancy, oral contraceptive use, and acute inflammation.",
    "significanceAr": "البروتين الحامل للنحاس في الدم. ينخفض بصورة مميزة في داء ويلسون (التنكس الكبدي العدسي) وسوء التغذية، ويرتفع بالالتهاب والحمل.",
    "tags": [
      "lft",
      "copper",
      "wilson-disease",
      "minerals"
    ]
  },
  {
    "id": "afp_liver_non_tumor",
    "name": "Alpha-Fetoprotein (AFP Hepatic Baseline)",
    "nameAr": "ألفا فيتو بروتين (المرجعي الكبدي)",
    "aliases": [
      "AFP Baseline",
      "ألفا فيتوبروتين"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 8.0",
        "unit": "ng/mL"
      },
      {
        "group": "Mild Regeneration / Hepatitis Flare",
        "value": "10.0 – 50.0",
        "unit": "ng/mL"
      },
      {
        "group": "Hepatocellular Carcinoma Diagnostic Suspicion",
        "value": "> 200",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "High specificity for HCC in a cirrhotic patient"
      }
    ],
    "significance": "Glycoprotein produced by fetal yolk sac and liver. Mild elevations reflect liver regeneration in chronic viral hepatitis; marked elevations in cirrhotic patients strongly indicate hepatocellular carcinoma (HCC).",
    "significanceAr": "بروتين سكري جنيني يرتفع باعتدال عند تجدد خلايا الكبد في الالتهاب المزمن، ويرتفع بشدة (>200) عند حدوث سرطان الخلايا الكبدية (HCC).",
    "tags": [
      "lft",
      "tumor-marker",
      "hcc",
      "liver"
    ]
  },
  {
    "id": "cholinesterase_plasma",
    "name": "Plasma Cholinesterase",
    "nameAr": "الكولين استراز البلازمي",
    "aliases": [
      "Serum Cholinesterase",
      "Cholinesterase"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults",
        "value": "4.9 – 11.9",
        "unit": "kU/L"
      },
      {
        "group": "Advanced Cirrhosis / Liver Failure",
        "value": "< 3.0",
        "unit": "kU/L",
        "note": "Correlates directly with hepatic synthetic reserve"
      }
    ],
    "significance": "Synthesized by hepatocytes. Drops in parallel with albumin and prothrombin in chronic parenchymal liver damage, serving as a sensitive index of liver synthetic capacity.",
    "significanceAr": "يعكس بشكل دقيق القدرة التخليقية الحقيقية للنسيج الكبدي وينخفض تدريجياً مع تراجع وظائف الكبد في التشمع المتقدم.",
    "tags": [
      "lft",
      "cirrhosis",
      "liver-synthetic"
    ]
  },
  {
    "id": "lap_leucine_aminopeptidase",
    "name": "Leucine Aminopeptidase (LAP)",
    "nameAr": "لوسين أمينوببتيداز (LAP)",
    "aliases": [
      "LAP",
      "Leucine Aminopeptidase"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "75 – 200",
        "unit": "U/L"
      },
      {
        "group": "Cholestatic Elevation",
        "value": "> 220",
        "unit": "U/L",
        "note": "Biliary disease without bone involvement"
      }
    ],
    "significance": "Biliary canalicular enzyme. Elevated in intra- and extrahepatic cholestasis, but completely normal in bone diseases.",
    "significanceAr": "أنزيم صفراوي يرتفع في انسداد وركود الصفراء ويبقى طبيعياً تماماً في أمراض العظام.",
    "tags": [
      "lft",
      "cholestasis",
      "lap"
    ]
  },
  {
    "id": "total_protein_liver",
    "name": "Serum Total Protein (Liver Assessment)",
    "nameAr": "البروتين الكلي للتقييم الكبدي",
    "aliases": [
      "Total Protein Hepatic"
    ],
    "category": "lft",
    "ranges": [
      {
        "group": "Adults",
        "value": "6.4 – 8.3",
        "unit": "g/dL"
      },
      {
        "group": "Decompensated Cirrhosis",
        "value": "< 5.5",
        "unit": "g/dL"
      }
    ],
    "significance": "Evaluated alongside albumin to detect hypergammaglobulinemia in autoimmune hepatitis or hypoproteinemia in end-stage cirrhosis.",
    "significanceAr": "يقيم بالتزامن مع الألبومين لكشف فرط غلوبولينات الدم في التهاب الكبد المناعي أو هبوط البروتينات في تشمع الكبد المتقدم.",
    "tags": [
      "lft",
      "protein",
      "cirrhosis"
    ]
  },
  {
    "id": "total_cholesterol",
    "name": "Total Cholesterol",
    "nameAr": "الكولسترول الكلي",
    "aliases": [
      "Cholesterol",
      "TC",
      "الكولسترول",
      "الكوليسترول"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Desirable Adults",
        "value": "< 200",
        "unit": "mg/dL"
      },
      {
        "group": "Borderline High Adults",
        "value": "200 – 239",
        "unit": "mg/dL"
      },
      {
        "group": "High Adults",
        "value": "≥ 240",
        "unit": "mg/dL"
      },
      {
        "group": "Children & Adolescents (<19yr) Desirable",
        "value": "< 170",
        "unit": "mg/dL"
      },
      {
        "group": "Children Borderline",
        "value": "170 – 199",
        "unit": "mg/dL"
      },
      {
        "group": "Severe Hypercholesterolemia (Familial Hypercholesterolemia concern)",
        "value": "> 300",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Consider genetic testing for Familial Hypercholesterolemia (FH)"
      }
    ],
    "significance": "Steroid lipid essential for cell membranes and steroid hormone synthesis. Elevated levels contribute directly to atherosclerosis and coronary heart disease.",
    "significanceAr": "دهن ستيرويدي أساسي لبناء أغشية الخلايا والهرمونات. ارتفاعه يسبب تصلب الشرايين واحتشاء القلب والسكتة الدماغية.",
    "tags": [
      "lipids",
      "cardiovascular",
      "cholesterol",
      "atherosclerosis"
    ]
  },
  {
    "id": "ldl_cholesterol",
    "name": "LDL-Cholesterol (Direct / Calculated)",
    "nameAr": "كولسترول البروتين الدهني منخفض الكثافة (الضار)",
    "aliases": [
      "LDL",
      "LDL-C",
      "الكولسترول الضار"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Optimal",
        "value": "< 100",
        "unit": "mg/dL"
      },
      {
        "group": "Near Optimal / Above Optimal",
        "value": "100 – 129",
        "unit": "mg/dL"
      },
      {
        "group": "Borderline High",
        "value": "130 – 159",
        "unit": "mg/dL"
      },
      {
        "group": "High",
        "value": "160 – 189",
        "unit": "mg/dL"
      },
      {
        "group": "Very High",
        "value": "≥ 190",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Primary severe hypercholesterolemia; initiate high-intensity statin immediately without risk calculator"
      },
      {
        "group": "Very High Risk ASCVD Secondary Prevention Target",
        "value": "< 55",
        "unit": "mg/dL",
        "note": "2019 ESC/EAS guidelines: <55 mg/dL and ≥50% reduction from baseline"
      },
      {
        "group": "High Risk ASCVD Target",
        "value": "< 70",
        "unit": "mg/dL",
        "note": "AHA/ACC and ESC guidelines target for known CAD/DM with end-organ damage"
      },
      {
        "group": "Children & Adolescents Acceptable",
        "value": "< 110",
        "unit": "mg/dL"
      }
    ],
    "significance": "Primary atherogenic lipoprotein and main therapeutic target for lipid-lowering therapy. Calculated via Friedewald equation (Total Chol - HDL - TG/5) valid only if TG < 400 mg/dL.",
    "significanceAr": "البروتين الشحمي الأهم المسبب لتصلب الشرايين والهدف الأساسي للأدوية الخافضة للشحوم. الهدف دون 55-70 لمرضى الجلطات والسكري عالي الخطورة.",
    "tags": [
      "lipids",
      "ldl",
      "cardiovascular",
      "statins",
      "ascvd"
    ]
  },
  {
    "id": "hdl_cholesterol",
    "name": "HDL-Cholesterol (High-Density Lipoprotein)",
    "nameAr": "كولسترول البروتين الدهني مرتفع الكثافة (النافع)",
    "aliases": [
      "HDL",
      "HDL-C",
      "الكولسترول النافع"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Low / High Cardiovascular Risk (Males)",
        "value": "< 40",
        "unit": "mg/dL",
        "note": "Major negative risk factor for coronary artery disease"
      },
      {
        "group": "Low / High Cardiovascular Risk (Females)",
        "value": "< 50",
        "unit": "mg/dL",
        "note": "Major negative risk factor in women"
      },
      {
        "group": "Acceptable / Intermediate (Males)",
        "value": "40 – 59",
        "unit": "mg/dL"
      },
      {
        "group": "Acceptable / Intermediate (Females)",
        "value": "50 – 59",
        "unit": "mg/dL"
      },
      {
        "group": "High / Cardioprotective",
        "value": "≥ 60",
        "unit": "mg/dL",
        "note": "Protective against coronary heart disease (-1 risk factor in Framingham score)"
      },
      {
        "group": "Children & Adolescents Acceptable",
        "value": "> 45",
        "unit": "mg/dL"
      }
    ],
    "significance": "Carries out reverse cholesterol transport from peripheral tissues to the liver for excretion. Low HDL is an independent risk factor for coronary heart disease and a key criterion of Metabolic Syndrome.",
    "significanceAr": "يقوم بالنقل العكسي للكولسترول من الشرايين إلى الكبد لطرحه. انخفاضه يعد عامل خطورة مستقل لاحتشاء القلب وأحد معايير المتلازمة الاستقلابية.",
    "tags": [
      "lipids",
      "hdl",
      "cardioprotective",
      "metabolic-syndrome"
    ]
  },
  {
    "id": "triglycerides",
    "name": "Serum Triglycerides",
    "nameAr": "الدهون الثلاثية (الشحوم الثلاثية)",
    "aliases": [
      "TG",
      "TRIG",
      "Triglycerides",
      "الدهون الثلاثية"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Normal Adults (Fasting 10-12h)",
        "value": "< 150",
        "unit": "mg/dL"
      },
      {
        "group": "Borderline High",
        "value": "150 – 199",
        "unit": "mg/dL"
      },
      {
        "group": "High",
        "value": "200 – 499",
        "unit": "mg/dL"
      },
      {
        "group": "Very High / Severe Hypertriglyceridemia",
        "value": "500 – 999",
        "unit": "mg/dL"
      },
      {
        "group": "Critical High (Acute Pancreatitis Risk)",
        "value": "≥ 1000",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "High imminent risk of acute necrotizing pancreatitis; immediate fibrate therapy / plasmapheresis / IV insulin"
      },
      {
        "group": "Pregnancy (3rd Trimester Normal)",
        "value": "150 – 350",
        "unit": "mg/dL",
        "note": "Physiologic maternal hypertriglyceridemia"
      }
    ],
    "significance": "Main storage form of fatty acids in adipose tissue. Moderate elevation contributes to cardiovascular risk. Severe hypertriglyceridemia (≥500-1000 mg/dL) carries imminent risk of life-threatening acute pancreatitis.",
    "significanceAr": "الشكل المخزون للشحوم في الجسم. الارتفاع الشديد (≥1000 مجم/دل) يحمل خطورة داهمة لإحداث التهاب البنكرياس النخري الحاد الذي يهدد الحياة.",
    "tags": [
      "lipids",
      "triglycerides",
      "pancreatitis",
      "metabolic-syndrome"
    ]
  },
  {
    "id": "non_hdl_cholesterol",
    "name": "Non-HDL Cholesterol",
    "nameAr": "الكولسترول غير مرتفع الكثافة (Non-HDL)",
    "aliases": [
      "Non-HDL",
      "Non-HDL-C"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Optimal Adults",
        "value": "< 130",
        "unit": "mg/dL"
      },
      {
        "group": "High Risk ASCVD Target",
        "value": "< 100",
        "unit": "mg/dL"
      },
      {
        "group": "Very High Risk ASCVD Target",
        "value": "< 85",
        "unit": "mg/dL"
      },
      {
        "group": "Children Acceptable",
        "value": "< 120",
        "unit": "mg/dL"
      }
    ],
    "significance": "Calculated as Total Cholesterol minus HDL. Represents total burden of all atherogenic apoB-containing lipoproteins (LDL, VLDL, IDL, Lp(a)). Superior to LDL in hypertriglyceridemic or diabetic patients.",
    "significanceAr": "يحسب كـ (الكولسترول الكلي - HDL). يعبر عن مجمل الشحوم المسببة للانسداد الوعائي، وهو أدق من LDL لدى مرضى السكري وارتفاع الدهون الثلاثية.",
    "tags": [
      "lipids",
      "non-hdl",
      "atherosclerosis"
    ]
  },
  {
    "id": "vldl_cholesterol",
    "name": "VLDL Cholesterol",
    "nameAr": "كولسترول البروتين الدهني منخفض الكثافة جداً (VLDL)",
    "aliases": [
      "VLDL",
      "VLDL-C"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "5.0 – 30.0",
        "unit": "mg/dL"
      },
      {
        "group": "Elevated",
        "value": "> 30.0",
        "unit": "mg/dL"
      }
    ],
    "significance": "Synthesized by liver to transport endogenous triglycerides to peripheral tissues. Precursor to IDL and LDL.",
    "significanceAr": "يصنعه الكبد لنقل الشحوم الثلاثية إلى الأنسجة المحيطية، ويتحول لاحقاً في الدوران إلى LDL.",
    "tags": [
      "lipids",
      "vldl"
    ]
  },
  {
    "id": "total_to_hdl_ratio",
    "name": "Total Cholesterol / HDL Ratio",
    "nameAr": "نسبة الكولسترول الكلي إلى HDL",
    "aliases": [
      "Chol/HDL Ratio",
      "Castelli Risk Index I"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Optimal / Low Risk",
        "value": "< 3.5",
        "unit": "ratio"
      },
      {
        "group": "Average Risk",
        "value": "3.5 – 5.0",
        "unit": "ratio"
      },
      {
        "group": "High Cardiovascular Risk",
        "value": "> 5.0",
        "unit": "ratio",
        "note": "High atherogenic burden relative to reverse transport"
      }
    ],
    "significance": "Castelli Risk Index I. Ratio >5.0 indicates significant coronary disease risk.",
    "significanceAr": "مؤشر كاستيلي لمخاطر القلب؛ عندما تتجاوز النسبة 5.0 تشير لخطر قلبي وعائي مرتفع.",
    "tags": [
      "lipids",
      "cardiovascular",
      "risk-index"
    ]
  },
  {
    "id": "ldl_to_hdl_ratio",
    "name": "LDL / HDL Ratio",
    "nameAr": "نسبة LDL إلى HDL",
    "aliases": [
      "LDL/HDL Ratio",
      "Castelli Risk Index II"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Optimal / Low Risk",
        "value": "< 2.5",
        "unit": "ratio"
      },
      {
        "group": "High Cardiovascular Risk",
        "value": "> 3.5",
        "unit": "ratio"
      }
    ],
    "significance": "Castelli Risk Index II. Excellent predictor of cardiovascular event recurrence.",
    "significanceAr": "مؤشر كاستيلي الثاني؛ مؤشر قوي للتنبؤ بحدوث وانتكاس الحوادث الوعائية الإقفارية.",
    "tags": [
      "lipids",
      "cardiovascular",
      "risk-index"
    ]
  },
  {
    "id": "apolipoprotein_a1",
    "name": "Apolipoprotein A1 (Apo A1)",
    "nameAr": "أبوليبوبروتين أ1 (Apo A1)",
    "aliases": [
      "Apo A1",
      "Apolipoprotein A-I"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "119 – 240",
        "unit": "mg/dL"
      },
      {
        "group": "Adult Females",
        "value": "119 – 240",
        "unit": "mg/dL"
      },
      {
        "group": "Cardioprotective High",
        "value": "> 160",
        "unit": "mg/dL"
      },
      {
        "group": "Low Cardiovascular Protection",
        "value": "< 120",
        "unit": "mg/dL"
      }
    ],
    "significance": "Major protein component of HDL particles; activates LCAT enzyme for reverse cholesterol transport.",
    "significanceAr": "البروتين البنيوي الأساسي لجسيمات HDL؛ ينشط أنزيم LCAT المسؤول عن تنظيف الأنسجة من الكولسترول.",
    "tags": [
      "lipids",
      "apolipoprotein",
      "hdl"
    ]
  },
  {
    "id": "apolipoprotein_b",
    "name": "Apolipoprotein B (Apo B)",
    "nameAr": "أبوليبوبروتين ب (Apo B)",
    "aliases": [
      "Apo B",
      "Apo B-100",
      "أبو ب"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Low / Moderate Risk Adults",
        "value": "< 100",
        "unit": "mg/dL"
      },
      {
        "group": "High Risk ASCVD Target",
        "value": "< 80",
        "unit": "mg/dL"
      },
      {
        "group": "Very High Risk ASCVD Target",
        "value": "< 65",
        "unit": "mg/dL"
      },
      {
        "group": "Elevated / Atherogenic",
        "value": "> 120",
        "unit": "mg/dL",
        "note": "High particle number, discordantly atherogenic even if LDL-C appears normal"
      }
    ],
    "significance": "Exactly one molecule of Apo B exists on each atherogenic particle (LDL, VLDL, IDL, Lp(a)). Direct measure of total atherogenic particle number. Superior to LDL-C in metabolic syndrome and diabetes.",
    "significanceAr": "يوجد جزيء واحد من Apo B في كل جسيم دهني ضار مسبب للتصلب. يقيس بدقة عدد الجسيمات الضارة الكلية حتى لو كان فحص LDL طبيعياً كاذباً.",
    "tags": [
      "lipids",
      "apo-b",
      "atherosclerosis",
      "cardiovascular"
    ]
  },
  {
    "id": "apo_b_a1_ratio",
    "name": "Apo B / Apo A1 Ratio",
    "nameAr": "نسبة Apo B إلى Apo A1",
    "aliases": [
      "Apo B/A1 Ratio"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Low Risk Males",
        "value": "< 0.70",
        "unit": "ratio"
      },
      {
        "group": "Low Risk Females",
        "value": "< 0.60",
        "unit": "ratio"
      },
      {
        "group": "High Risk Adults",
        "value": "> 0.90",
        "unit": "ratio",
        "note": "Strongest lipid risk factor identified in the INTERHEART global study"
      }
    ],
    "significance": "Ratio of atherogenic particles to anti-atherogenic particles. In the global INTERHEART trial, it was the single strongest lipid predictor of myocardial infarction.",
    "significanceAr": "نسبة الجسيمات المسببة للتصلب إلى الجسيمات الواقية. في دراسة INTERHEART العالمية كانت أقوى مؤشر دهني للتنبؤ باحتشاء العضلة القلبية.",
    "tags": [
      "lipids",
      "interheart",
      "cardiovascular"
    ]
  },
  {
    "id": "lipoprotein_a",
    "name": "Lipoprotein(a) [Lp(a)]",
    "nameAr": "البروتين الدهني أ [Lp(a)]",
    "aliases": [
      "Lp(a)",
      "Lipoprotein a",
      "بروتين دهني أ"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Normal / Low Risk",
        "value": "< 30",
        "unit": "mg/dL",
        "note": "<75 nmol/L"
      },
      {
        "group": "Borderline",
        "value": "30 – 50",
        "unit": "mg/dL"
      },
      {
        "group": "High Cardiovascular Risk",
        "value": "> 50",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": ">125 nmol/L; genetically determined independent risk factor for ASCVD and calcific aortic stenosis"
      }
    ],
    "significance": "LDL-like particle containing apolipoprotein(a) which has homology with plasminogen (prothrombotic and proatherogenic). Genetically determined (>80-90% heritable), unaffected by diet or typical statin therapy. Independent risk factor for premature CAD and calcific aortic valve stenosis.",
    "significanceAr": "جسيم شبيه بـ LDL مرتبط ببروتين أ الشبيه بالبلازمينوجين (مخثر ومصلب للشرايين). وراثي تماماً ولا يتأثر بالحمية أو الستاتينات. يسبب تضيق الصمام الأبهري واحتشاء القلب المبكر.",
    "tags": [
      "lipids",
      "lp-a",
      "genetics",
      "aortic-stenosis",
      "ascvd"
    ]
  },
  {
    "id": "hs_crp_cardiac",
    "name": "High-Sensitivity C-Reactive Protein (hs-CRP)",
    "nameAr": "بروتين سي التفاعلي عالي الحساسية للقلب (hs-CRP)",
    "aliases": [
      "hs-CRP",
      "Cardiac CRP",
      "بروتين سي التفاعلي عالي الحساسية"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Low Cardiovascular Risk",
        "value": "< 1.0",
        "unit": "mg/L"
      },
      {
        "group": "Average / Moderate Risk",
        "value": "1.0 – 3.0",
        "unit": "mg/L"
      },
      {
        "group": "High Cardiovascular Risk",
        "value": "> 3.0",
        "unit": "mg/L",
        "note": "Independent risk factor for coronary events"
      },
      {
        "group": "Acute Systemic Inflammation (>10 mg/L)",
        "value": "> 10.0",
        "unit": "mg/L",
        "note": "Indicates acute infection, trauma, or flare; repeat in 2-3 weeks for cardiovascular risk assessment"
      }
    ],
    "significance": "Marker of low-grade systemic vascular inflammation. Tested in patients with intermediate cardiovascular risk to reclassify risk and guide statin therapy initiation (JUPITER trial).",
    "significanceAr": "مؤشر على الالتهاب الوعائي المزمن منخفض الشدة. يستعمل لإعادة تقييم المرضى ذوي الخطورة القلبية المتوسطة والبدء بالستاتينات الوقائية.",
    "tags": [
      "lipids",
      "cardiac",
      "hs-crp",
      "inflammation",
      "ascvd"
    ]
  },
  {
    "id": "homocysteine_plasma",
    "name": "Total Plasma Homocysteine",
    "nameAr": "الهوموسيستين الكلي في البلازما",
    "aliases": [
      "Homocysteine",
      "tHcy",
      "هوموسيستين"
    ],
    "category": "lipids",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "5.0 – 15.0",
        "unit": "µmol/L"
      },
      {
        "group": "Mild Hyperhomocysteinemia",
        "value": "15.0 – 30.0",
        "unit": "µmol/L"
      },
      {
        "group": "Moderate Hyperhomocysteinemia",
        "value": "30.0 – 100.0",
        "unit": "µmol/L"
      },
      {
        "group": "Severe Hyperhomocysteinemia / Homocystinuria",
        "value": "> 100.0",
        "unit": "µmol/L",
        "alert": "critical_high",
        "note": "Cystathionine beta-synthase deficiency; extreme premature arterial and venous thrombosis risk, lens dislocation"
      }
    ],
    "significance": "Sulfur-containing amino acid derived from methionine metabolism. Elevated in B12/folate/B6 deficiency, renal failure, and cystathionine beta-synthase mutation. Independent risk factor for vascular endothelial damage and thrombosis.",
    "significanceAr": "حمض أميني كبريتي ناتج عن استقلاب الميثيونين. يرتفع في نقص B12 والفولات والفشل الكلوي. يسبب أذية بطانة الأوعية الدموية ويزيد خطر الخثار.",
    "tags": [
      "lipids",
      "cardiovascular",
      "homocysteine",
      "thrombosis",
      "vitamins"
    ]
  },
  {
    "id": "troponin_i_conventional",
    "name": "Cardiac Troponin I (Conventional cTnI)",
    "nameAr": "التروبونين القلبي I (التقليدي)",
    "aliases": [
      "Troponin I",
      "cTnI",
      "تروبونين"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Normal / Undetectable",
        "value": "< 0.04",
        "unit": "ng/mL"
      },
      {
        "group": "Indeterminate / Borderline",
        "value": "0.04 – 0.40",
        "unit": "ng/mL",
        "note": "Serial testing at 3-6 hours mandatory"
      },
      {
        "group": "Positive for Myocardial Necrosis (AMI)",
        "value": "> 0.40",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Acute myocardial injury / infarction in clinical context"
      }
    ],
    "significance": "Myocardial contractile protein with exquisite cardiac specificity. Rises 3-6 hours after injury, peaks at 12-24 hours, persists for 7-10 days.",
    "significanceAr": "بروتين انقباضي ذو نوعية قلبية مطلقة. يرتفع بعد 3-6 ساعات من الاحتشاء، ويبلغ ذروته في 12-24 ساعة، ويستمر لـ 7-10 أيام.",
    "tags": [
      "cardiac",
      "troponin",
      "ami",
      "infarction",
      "acs"
    ]
  },
  {
    "id": "hs_troponin_i",
    "name": "High-Sensitivity Cardiac Troponin I (hs-cTnI)",
    "nameAr": "التروبونين القلبي I عالي الحساسية (hs-cTnI)",
    "aliases": [
      "hs-cTnI",
      "hs-Troponin I",
      "تروبونين عالي الحساسية"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Adult Males 99th Percentile URL",
        "value": "< 34",
        "unit": "ng/L",
        "note": "Sex-specific 99th percentile upper reference limit"
      },
      {
        "group": "Adult Females 99th Percentile URL",
        "value": "< 16",
        "unit": "ng/L",
        "note": "Sex-specific 99th percentile upper reference limit"
      },
      {
        "group": "Rapid Rule-Out (0h or 0/1h ESC Protocol)",
        "value": "< 5",
        "unit": "ng/L",
        "note": "Very low baseline with symptom onset >3h rules out NSTEMI"
      },
      {
        "group": "Critical Rule-In / Acute Myocardial Infarction",
        "value": "> 52",
        "unit": "ng/L",
        "alert": "critical_high",
        "note": "Or delta change ≥5 ng/L at 1 hour confirms myocardial injury"
      }
    ],
    "significance": "Detects nanogram/liter levels. Enables rapid 0/1-hour and 0/2-hour ESC rule-out and rule-in algorithms for acute myocardial infarction. Distinct sex-specific 99th percentile cutoffs.",
    "significanceAr": "يكشف تراكيز متناهية في الصغر؛ يتيح تطبيق بروتوكول نفي أو إثبات الجلطة القلبية السريع (0/1 ساعة). يمتلك قيم حدية منفصلة للذكور والإناث.",
    "tags": [
      "cardiac",
      "hs-troponin",
      "nstemi",
      "emergency",
      "esc"
    ]
  },
  {
    "id": "troponin_t_conventional",
    "name": "Cardiac Troponin T (Conventional cTnT)",
    "nameAr": "التروبونين القلبي T (التقليدي)",
    "aliases": [
      "Troponin T",
      "cTnT"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 0.01",
        "unit": "ng/mL"
      },
      {
        "group": "Borderline",
        "value": "0.01 – 0.09",
        "unit": "ng/mL"
      },
      {
        "group": "Myocardial Infarction Rule-In",
        "value": "≥ 0.10",
        "unit": "ng/mL",
        "alert": "critical_high"
      }
    ],
    "significance": "Persists for up to 10-14 days post-MI. Can be mildly elevated in end-stage renal disease (ESRD) and skeletal myopathies.",
    "significanceAr": "يبقى مرتفعاً لمدة 10-14 يوماً بعد الجلطة القلبية. قد يرتفع بشكل طفيف مزمن في الفشل الكلوي النهائي والاعتلالات العضلية.",
    "tags": [
      "cardiac",
      "troponin-t",
      "ami"
    ]
  },
  {
    "id": "hs_troponin_t",
    "name": "High-Sensitivity Cardiac Troponin T (hs-cTnT)",
    "nameAr": "التروبونين القلبي T عالي الحساسية (hs-cTnT)",
    "aliases": [
      "hs-cTnT",
      "hs-Troponin T"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Adult 99th Percentile Overall URL",
        "value": "< 14",
        "unit": "ng/L"
      },
      {
        "group": "Rapid Rule-Out (0h)",
        "value": "< 5",
        "unit": "ng/L"
      },
      {
        "group": "Rule-In (0h Baseline or 1h Delta ≥5)",
        "value": "> 52",
        "unit": "ng/L",
        "alert": "critical_high",
        "note": "Diagnostic of acute myocardial necrosis when clinical picture fits"
      }
    ],
    "significance": "ESC validated 0/1-hour algorithm: baseline <5 ng/L rules out MI; baseline >52 ng/L or 1-hour change ≥5 ng/L rules in MI.",
    "significanceAr": "المعتمد في بروتوكول الجمعية الأوروبية لأمراض القلب لنفي أو إثبات الاحتشاء خلال ساعة واحدة بدقة فائقة.",
    "tags": [
      "cardiac",
      "hs-troponin-t",
      "esc",
      "ami"
    ]
  },
  {
    "id": "ck_mb_mass",
    "name": "Creatine Kinase-MB Mass (CK-MB)",
    "nameAr": "كتلة الكرياتين كينيز MB (CK-MB)",
    "aliases": [
      "CK-MB Mass",
      "CK-MB",
      "إنزيم القلب CK-MB"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "< 5.0",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Females",
        "value": "< 4.0",
        "unit": "ng/mL"
      },
      {
        "group": "Critical High / Infarction",
        "value": "> 10.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Rises 4-6h, peaks 18-24h, returns to baseline in 48-72h (ideal for diagnosing re-infarction)"
      }
    ],
    "significance": "Isoenzyme found predominantly in myocardium. Rapid clearance back to baseline within 48-72 hours makes it the biomarker of choice for detecting early recurrent re-infarction when troponin remains chronically elevated from index MI.",
    "significanceAr": "أنزيم قلبي يعود لمستواه الطبيعي سريعاً خلال 48-72 ساعة؛ ولذا فهو الواسم المفضل لاكتشاف حدوث إعادة الاحتشاء (Re-infarction) لكون التروبونين يظل مرتفعاً لأيام طويلة.",
    "tags": [
      "cardiac",
      "ck-mb",
      "reinfarction",
      "ami"
    ]
  },
  {
    "id": "ck_mb_activity",
    "name": "CK-MB Activity",
    "nameAr": "فعالية الكرياتين كينيز MB",
    "aliases": [
      "CK-MB Activity"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 – 25",
        "unit": "U/L"
      },
      {
        "group": "Elevated",
        "value": "> 25",
        "unit": "U/L"
      }
    ],
    "significance": "Measures enzymatic activity. Largely superseded by direct immunoassay for mass concentration due to higher specificity.",
    "significanceAr": "يقيس الفعالية الأنزيمية لمشابه الأنزيم MB، استبدل تدريجياً بقياس الكتلة لزيادة دقته.",
    "tags": [
      "cardiac",
      "ck-mb"
    ]
  },
  {
    "id": "ck_mb_relative_index",
    "name": "CK-MB Relative Index",
    "nameAr": "المشعر النسبي لـ CK-MB",
    "aliases": [
      "CK-MB Index",
      "Relative Index"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Normal Skeletal Muscle Source",
        "value": "< 2.5",
        "unit": "%"
      },
      {
        "group": "Equivocal Gray Zone",
        "value": "2.5 – 3.0",
        "unit": "%"
      },
      {
        "group": "Myocardial Injury Diagnostic",
        "value": "> 3.0",
        "unit": "%",
        "note": "Indicates cardiac source rather than severe rhabdomyolysis / skeletal injury"
      }
    ],
    "significance": "(CK-MB Mass / Total CK) x 100%. Distinguishes true myocardial infarction from skeletal muscle trauma/rhabdomyolysis (where total CK is very high but relative index is <2.5%).",
    "significanceAr": "يحسب كـ (كتلة CK-MB ÷ إجمالي CK) × 100%. يميز الاحتشاء القلبي الحقيقي (>3%) عن انحلال العضلات المخططة الهيكلية (<2.5%).",
    "tags": [
      "cardiac",
      "ck-index",
      "rhabdomyolysis"
    ]
  },
  {
    "id": "total_ck",
    "name": "Total Creatine Kinase (CK / CPK)",
    "nameAr": "الكرياتين كينيز الكلي (CK / CPK)",
    "aliases": [
      "CK",
      "CPK",
      "Creatine Kinase",
      "إنزيم العضلات"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "55 – 170",
        "unit": "U/L"
      },
      {
        "group": "Adult Females",
        "value": "30 – 135",
        "unit": "U/L"
      },
      {
        "group": "African American Males Baseline",
        "value": "Up to 350",
        "unit": "U/L",
        "note": "Physiologically higher baseline muscle mass"
      },
      {
        "group": "Post-Strenuous Exercise",
        "value": "300 – 1500",
        "unit": "U/L"
      },
      {
        "group": "Critical High (Severe Rhabdomyolysis)",
        "value": "> 5000",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "High risk of myoglobinuric acute kidney injury (ATN); aggressive IV alkalinized hydration required"
      }
    ],
    "significance": "Enzyme present in skeletal muscle, heart, brain. Elevated in rhabdomyolysis (crush injury, statin myopathy, seizures, heat stroke), muscular dystrophy, myocarditis, and strenuous exercise.",
    "significanceAr": "أنزيم العضلات الهيكلية والقلب. يرتفع بشدة (>5000) في انحلال العضلات المخططة، ويسبب انسداد الأنابيب الكلوية بالهيموغلوبين العضلي وفشلاً كلوياً حاداً.",
    "tags": [
      "cardiac",
      "rhabdomyolysis",
      "cpk",
      "muscle-injury"
    ]
  },
  {
    "id": "serum_myoglobin",
    "name": "Serum Myoglobin",
    "nameAr": "الميوجلوبين في المصل",
    "aliases": [
      "Myoglobin",
      "ميوجلوبين"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "28 – 72",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Females",
        "value": "25 – 58",
        "unit": "ng/mL"
      },
      {
        "group": "Early Acute MI Release",
        "value": "> 100",
        "unit": "ng/mL",
        "note": "Earliest biomarker to rise (1-2 hours post-infarction)"
      },
      {
        "group": "Critical High (Severe Crush / Rhabdo)",
        "value": "> 1000",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Direct nephrotoxic risk"
      }
    ],
    "significance": "Oxygen-binding heme protein of muscle. Earliest cardiac marker to rise (within 1-2 hours post-MI) with peak at 6-8 hours and rapid return to baseline within 24 hours. Lacks cardiac specificity.",
    "significanceAr": "أسرع واسم قلبي في الارتفاع بعد الاحتشاء (خلال ساعة إلى ساعتين)، لكنه يفتقر للنوعية القلبية لارتفاعه أيضاً في رضوض العضلات الهيكلية.",
    "tags": [
      "cardiac",
      "myoglobin",
      "rhabdomyolysis",
      "early-mi"
    ]
  },
  {
    "id": "bnp",
    "name": "B-Type Natriuretic Peptide (BNP)",
    "nameAr": "الببتيد الدماغي المدر للصوديوم (BNP)",
    "aliases": [
      "BNP",
      "Brain Natriuretic Peptide",
      "واسم قصور القلب BNP"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Normal / Heart Failure Unlikely (Rule-Out)",
        "value": "< 100",
        "unit": "pg/mL",
        "note": "Negative predictive value >95% to rule out acute decompensated heart failure"
      },
      {
        "group": "Gray Zone (Intermediate Probability)",
        "value": "100 – 400",
        "unit": "pg/mL",
        "note": "Consider CKD, elderly, atrial fibrillation, PE, sepsis, cor pulmonale"
      },
      {
        "group": "Acute Decompensated Heart Failure Highly Likely",
        "value": "> 400",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "High positive predictive value for decompensated heart failure"
      },
      {
        "group": "Obese Patients (BMI > 35 kg/m²)",
        "value": "Cutoff 50% lower",
        "unit": "pg/mL",
        "note": "Increased clearance receptors in adipose tissue artificially lower BNP"
      }
    ],
    "significance": "Hormone released by ventricular cardiomyocytes in response to myocardial wall stress and volume overload. Essential for distinguishing cardiogenic from pulmonary causes of acute dyspnea. Note: Sacubitril/valsartan (ARNI) prevents BNP degradation, falsely raising BNP (use NT-proBNP instead).",
    "significanceAr": "يفرز من البطين القلبي عند زيادة الضغط والامتلاء بالسوائل. ممتاز للتفريق بين ضيق التنفس القلبي والرئوي في الطوارئ. ملحوظة: دواء Entresto يرفع BNP كاذباً؛ فيجب قياس NT-proBNP.",
    "tags": [
      "cardiac",
      "bnp",
      "heart-failure",
      "dyspnea",
      "edema"
    ]
  },
  {
    "id": "nt_pro_bnp",
    "name": "N-Terminal Pro-B-Type Natriuretic Peptide (NT-proBNP)",
    "nameAr": "الطرف الأميني لطليعة BNP (NT-proBNP)",
    "aliases": [
      "NT-proBNP",
      "NT-BNP",
      "إن تي برو بي إن بي"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Heart Failure Rule-Out (Acute Dyspnea)",
        "value": "< 300",
        "unit": "pg/mL",
        "note": "NPV >98% across all age groups"
      },
      {
        "group": "Age-Adjusted Rule-In (<50 years)",
        "value": "> 450",
        "unit": "pg/mL"
      },
      {
        "group": "Age-Adjusted Rule-In (50-75 years)",
        "value": "> 900",
        "unit": "pg/mL"
      },
      {
        "group": "Age-Adjusted Rule-In (>75 years)",
        "value": "> 1800",
        "unit": "pg/mL"
      },
      {
        "group": "Severe Chronic Renal Disease (eGFR < 30)",
        "value": "> 1200",
        "unit": "pg/mL",
        "note": "Cleared almost exclusively by renal filtration; threshold adjusted upwards"
      },
      {
        "group": "Critical High",
        "value": "> 5000",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Severe decompensation / cardiogenic shock risk"
      }
    ],
    "significance": "Inactive 76-amino-acid cleavage fragment of proBNP. Longer half-life (~70 min vs 20 min for BNP) and higher stability. NOT degraded by neprilysin, making it the preferred test in patients taking ARNI (Sacubitril/Valsartan). Cleared primarily by kidneys.",
    "significanceAr": "الجزء غير الفعال والأطول عمراً نصفياً (70 دقيقة). لا يتأثر بمثبطات النيبريليسين (Entresto) لذا فهو الخيار المعتمد لمراقبة المرضى المعالجين بهذا الدواء. يطرح كلوياً.",
    "tags": [
      "cardiac",
      "nt-probnp",
      "heart-failure",
      "dyspnea",
      "arni"
    ]
  },
  {
    "id": "cardiac_hs_crp",
    "name": "Cardiac C-Reactive Protein (High Sensitivity)",
    "nameAr": "بروتين سي التفاعلي فائق الحساسية لتقييم الشرايين",
    "aliases": [
      "Cardiac hs-CRP",
      "hsCRP Cardio"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Low Cardiovascular Risk",
        "value": "< 1.0",
        "unit": "mg/L"
      },
      {
        "group": "Intermediate Risk",
        "value": "1.0 – 3.0",
        "unit": "mg/L"
      },
      {
        "group": "High Cardiovascular Risk",
        "value": "> 3.0",
        "unit": "mg/L"
      }
    ],
    "significance": "Inflammatory biomarker used in cardiovascular risk reclassification in primary prevention.",
    "significanceAr": "واسم التهابي يعيد تصنيف الخطورة القلبية الوعائية للوقاية الأولية من الجلطات.",
    "tags": [
      "cardiac",
      "hs-crp",
      "risk"
    ]
  },
  {
    "id": "copeptin_cardiac",
    "name": "Copeptin (Cardiac Rapid MI Rule-Out)",
    "nameAr": "الكوببتين (نفي الاحتشاء المبكر)",
    "aliases": [
      "Copeptin",
      "CT-proAVP"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 10.0",
        "unit": "pmol/L"
      },
      {
        "group": "Acute Endogenous Hemodynamic Stress / Early MI",
        "value": "> 14.0",
        "unit": "pmol/L",
        "note": "Combined with conventional troponin allows instant rule-out of acute MI at arrival"
      }
    ],
    "significance": "C-terminal segment of pro-vasopressin. Released stoichiometrically with AVP in acute hemodynamic stress. In combination with conventional troponin, allows instant 0-hour rule-out of acute MI in the ED.",
    "significanceAr": "يفرز من طليعة الفازوبريسين استجابة للشدة الإقفارية الحادة. دمجه مع التروبونين يتيح نفي الجلطة القلبية فور وصول المريض للطوارئ.",
    "tags": [
      "cardiac",
      "copeptin",
      "vasopressin",
      "ed-rule-out"
    ]
  },
  {
    "id": "h_fabp",
    "name": "Heart-Type Fatty Acid-Binding Protein (H-FABP)",
    "nameAr": "البروتين الرابط للأحماض الدهنية القلبي (H-FABP)",
    "aliases": [
      "H-FABP",
      "Heart FABP"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 5.0",
        "unit": "ng/mL"
      },
      {
        "group": "Acute Myocardial Injury Rule-In",
        "value": "> 7.0",
        "unit": "ng/mL",
        "note": "Rises within 1-2h of ischemic injury"
      }
    ],
    "significance": "Low-molecular-weight cytoplasmic protein involved in myocardial fatty acid transport. Rapidly released into circulation following myocardial injury earlier than conventional markers.",
    "significanceAr": "بروتين سيتوبلازمي صغير ينقل الحموض الدهنية بالقلب. يتحرر سريعاً جداً خلال ساعة إلى ساعتين من بدء نقص التروية القلبية.",
    "tags": [
      "cardiac",
      "h-fabp",
      "early-marker"
    ]
  },
  {
    "id": "soluble_st2",
    "name": "Soluble ST2 (sST2)",
    "nameAr": "مستقبل ST2 المنحل (واسم التليف القلبي)",
    "aliases": [
      "sST2",
      "Soluble ST2"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Normal / Stable Myocardium",
        "value": "< 35.0",
        "unit": "ng/mL"
      },
      {
        "group": "Elevated / Adverse Ventricular Remodeling Risk",
        "value": "> 35.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "High risk of adverse cardiac remodeling, worsening heart failure, and sudden death"
      }
    ],
    "significance": "Decoy receptor for IL-33 that reflects mechanical strain, cardiac fibrosis, and adverse myocardial remodeling in heart failure. Unaffected by renal function (advantage over NT-proBNP).",
    "significanceAr": "مستقبل يرتبط بـ IL-33 ويعكس تليف عضلة القلب وإعادة تشكل البطين السيئة في قصور القلب. لا يتأثر بوظائف الكلى.",
    "tags": [
      "cardiac",
      "st2",
      "fibrosis",
      "heart-failure",
      "prognosis"
    ]
  },
  {
    "id": "galectin_3",
    "name": "Galectin-3",
    "nameAr": "غالكتين-3 (واسم التليف والتندب القلبي)",
    "aliases": [
      "Galectin-3",
      "Gal-3"
    ],
    "category": "cardiac",
    "ranges": [
      {
        "group": "Low Risk Adults",
        "value": "< 17.8",
        "unit": "ng/mL"
      },
      {
        "group": "High Risk / Active Fibrogenesis",
        "value": "≥ 17.8",
        "unit": "ng/mL",
        "note": "Predicts progressive fibrosis, heart failure re-hospitalization, and mortality"
      }
    ],
    "significance": "Beta-galactoside-binding lectin secreted by activated cardiac macrophages. Mediates myocardial fibrosis and ventricular stiffening.",
    "significanceAr": "يفرز من البالعات المنشطة بعضلة القلب ويحفز تليف جدار البطين وتصلبه في قصور القلب المزمن.",
    "tags": [
      "cardiac",
      "galectin-3",
      "fibrosis",
      "heart-failure"
    ]
  },
  {
    "id": "fpg_fasting_plasma_glucose",
    "name": "Fasting Plasma Glucose (FPG)",
    "nameAr": "جلوكوز البلازما الصائم (FPG)",
    "aliases": [
      "FPG",
      "FBS",
      "Fasting Glucose",
      "سكر الصيام"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Glycemia (Fasting ≥8h)",
        "value": "70 – 99",
        "unit": "mg/dL"
      },
      {
        "group": "Impaired Fasting Glucose (Prediabetes)",
        "value": "100 – 125",
        "unit": "mg/dL",
        "note": "ADA diagnostic criteria for prediabetes"
      },
      {
        "group": "Diabetes Mellitus Diagnostic Threshold",
        "value": "≥ 126",
        "unit": "mg/dL",
        "note": "Confirm on repeat testing unless unequivocal hyperglycemia/crisis is present"
      },
      {
        "group": "Pregnancy (IADPSG Fasting Threshold)",
        "value": "< 92",
        "unit": "mg/dL",
        "note": "≥92 mg/dL confirms Gestational Diabetes Mellitus (GDM)"
      },
      {
        "group": "Children & Adolescents Normal",
        "value": "70 – 100",
        "unit": "mg/dL"
      },
      {
        "group": "Critical Low (Level 2 Hypoglycemia)",
        "value": "< 54",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Neuroglycopenia, cognitive impairment, seizure risk"
      }
    ],
    "significance": "Standard laboratory diagnostic test for diabetes mellitus and impaired fasting glucose. Drawn in sodium fluoride (gray-top) tube to inhibit ex vivo glycolysis.",
    "significanceAr": "الفحص المخبري الأساسي لتشخيص السكري ومقدمات السكري. يجب سحبه في أنبوب فلوريد الصوديوم لمنع استهلاك الجلوكوز من قبل خلايا الدم المخبرية.",
    "tags": [
      "diabetes",
      "fpg",
      "glucose",
      "diagnostic"
    ]
  },
  {
    "id": "ogtt_2hr_glucose",
    "name": "2-Hour Oral Glucose Tolerance Test (75g OGTT)",
    "nameAr": "فحص تحمل الجلوكوز الفموي بعد ساعتين (75 جم)",
    "aliases": [
      "OGTT",
      "2h OGTT",
      "GTT",
      "اختبار تحمل السكر"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Glucose Tolerance",
        "value": "< 140",
        "unit": "mg/dL"
      },
      {
        "group": "Impaired Glucose Tolerance (Prediabetes)",
        "value": "140 – 199",
        "unit": "mg/dL"
      },
      {
        "group": "Diabetes Mellitus Diagnostic",
        "value": "≥ 200",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Diagnostic of diabetes; repeat to confirm if asymptomatic"
      },
      {
        "group": "Pregnancy GDM Cutoff (1-Hour Post 75g)",
        "value": "≥ 180",
        "unit": "mg/dL",
        "note": "IADPSG threshold for GDM"
      },
      {
        "group": "Pregnancy GDM Cutoff (2-Hour Post 75g)",
        "value": "≥ 153",
        "unit": "mg/dL",
        "note": "IADPSG threshold for GDM"
      },
      {
        "group": "Reactive Hypoglycemia (Post-load Nadir)",
        "value": "< 60",
        "unit": "mg/dL",
        "note": "Dumping syndrome or postprandial hyperinsulinism"
      }
    ],
    "significance": "Gold standard for assessing whole-body glucose tolerance and postprandial glycemic excursions. Diagnostic test for Gestational Diabetes Mellitus (GDM).",
    "significanceAr": "المعيار الذهبي لتقييم تحمل الجسم للجلوكوز وتشخيص سكري الحمل حسب معايير IADPSG العالمية.",
    "tags": [
      "diabetes",
      "ogtt",
      "gdm",
      "prediabetes"
    ]
  },
  {
    "id": "random_plasma_glucose",
    "name": "Random Plasma Glucose",
    "nameAr": "جلوكوز البلازما العشوائي",
    "aliases": [
      "Random Glucose",
      "RBS",
      "RPG",
      "السكر العشوائي"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Non-Fasting",
        "value": "70 – 140",
        "unit": "mg/dL"
      },
      {
        "group": "Diabetes Diagnostic (With Classic Symptoms)",
        "value": "≥ 200",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "In a patient with polyuria, polydipsia, weight loss, or hyperglycemic crisis: diagnostic without repeat"
      },
      {
        "group": "Critical High (Hyperglycemic Crisis)",
        "value": "> 500",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Imminent risk of DKA or HHS"
      },
      {
        "group": "Critical Low",
        "value": "< 50",
        "unit": "mg/dL",
        "alert": "critical_low"
      }
    ],
    "significance": "Random glucose ≥200 mg/dL accompanied by classic osmotic symptoms (polyuria, polydipsia, unexplained weight loss) confirms diabetes mellitus without requiring repeat testing.",
    "significanceAr": "عندما يبلغ ≥200 مجم/دل بوجود الأعراض الكلاسيكية (العطش الشديد، كثرة التبول، فقدان الوزن) يشخص السكري فوراً دون الحاجة للإعادة.",
    "tags": [
      "diabetes",
      "random-glucose",
      "hyperglycemia"
    ]
  },
  {
    "id": "postprandial_glucose_2h",
    "name": "2-Hour Postprandial Glucose (PPG)",
    "nameAr": "سكر الدم بعد الأكل بساعتين",
    "aliases": [
      "2h PPG",
      "Postprandial Glucose",
      "السكر الفاطر"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Non-Diabetic Healthy Adults",
        "value": "< 140",
        "unit": "mg/dL"
      },
      {
        "group": "ADA Target for Diabetic Adults",
        "value": "< 180",
        "unit": "mg/dL",
        "note": "Standard glycemic target to minimize microvascular complications"
      },
      {
        "group": "AACE / ACE Strict Target",
        "value": "< 140",
        "unit": "mg/dL",
        "note": "Strict target if achievable without significant hypoglycemia"
      },
      {
        "group": "Pregnancy Diabetic Target (2h Post-Meal)",
        "value": "< 120",
        "unit": "mg/dL",
        "note": "Strict maternal target in pre-existing or gestational diabetes"
      }
    ],
    "significance": "Reflects first-phase and second-phase insulin secretion following a standard meal. Postprandial glucose surges contribute significantly to HbA1c elevation and cardiovascular risk.",
    "significanceAr": "يعكس كفاءة إفراز الإنسولين بعد وجبة الطعام. الهدف لمرضى السكري <180 مجم/دل، وفي الحوامل <120 مجم/دل لحماية الجنين.",
    "tags": [
      "diabetes",
      "ppg",
      "glycemic-control"
    ]
  },
  {
    "id": "hba1c_glycated_hemoglobin",
    "name": "Hemoglobin A1c (Glycated Hemoglobin)",
    "nameAr": "الهيموجلوبين السكري (التراكمي / HbA1c)",
    "aliases": [
      "HbA1c",
      "A1c",
      "Glycated Hb",
      "السكر التراكمي",
      "مخزون السكر"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Healthy Glycemia",
        "value": "< 5.7",
        "unit": "%",
        "note": "< 39 mmol/mol"
      },
      {
        "group": "Prediabetes (Increased Risk for Diabetes)",
        "value": "5.7 – 6.4",
        "unit": "%",
        "note": "39 – 47 mmol/mol"
      },
      {
        "group": "Diabetes Mellitus Diagnostic Threshold",
        "value": "≥ 6.5",
        "unit": "%",
        "note": "≥ 48 mmol/mol (confirm with repeat test)"
      },
      {
        "group": "General ADA Target for Non-Pregnant Adults",
        "value": "< 7.0",
        "unit": "%",
        "note": "< 53 mmol/mol"
      },
      {
        "group": "Strict Target (Young, Short DM duration, No CVD)",
        "value": "< 6.5",
        "unit": "%"
      },
      {
        "group": "Relaxed Target (Elderly, Frail, Extensive Comorbidities)",
        "value": "7.5 – 8.0",
        "unit": "%",
        "note": "Avoid hypoglycemic falls and arrhythmia"
      },
      {
        "group": "Pregnancy Target (Pre-gestational & GDM)",
        "value": "< 6.0",
        "unit": "%",
        "note": "If achievable without hypoglycemia"
      },
      {
        "group": "Critical Poor Glycemic Control",
        "value": "> 10.0",
        "unit": "%",
        "alert": "critical_high",
        "note": "Very high risk of accelerated diabetic microvascular complications"
      }
    ],
    "significance": "Gold standard index of average glycemic control over the preceding 8-12 weeks (lifespan of erythrocytes). Falsely low in hemolytic anemia, blood transfusions, EPO therapy; falsely high in iron deficiency anemia, splenectomy.",
    "significanceAr": "المعيار الذهبي لتقييم ضبط السكر خلال الشهرين إلى الثلاثة أشهر السابقة (عمر الكريات الحمر). ينخفض كاذباً في انحلال الدم، ويرتفع كاذباً في فقر دم نقص الحديد.",
    "tags": [
      "diabetes",
      "hba1c",
      "glycemic-control",
      "diagnostic"
    ]
  },
  {
    "id": "estimated_average_glucose",
    "name": "Estimated Average Glucose (eAG)",
    "nameAr": "متوسط الجلوكوز التقديري (eAG)",
    "aliases": [
      "eAG"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "eAG corresponding to HbA1c 6.0%",
        "value": "126",
        "unit": "mg/dL"
      },
      {
        "group": "eAG corresponding to HbA1c 7.0%",
        "value": "154",
        "unit": "mg/dL"
      },
      {
        "group": "eAG corresponding to HbA1c 8.0%",
        "value": "183",
        "unit": "mg/dL"
      },
      {
        "group": "eAG corresponding to HbA1c 9.0%",
        "value": "212",
        "unit": "mg/dL"
      }
    ],
    "significance": "Linear conversion of HbA1c into mg/dL: eAG = (28.7 x A1c) - 46.7. Translates A1c percentage into daily blood sugar meter units for easier patient comprehension.",
    "significanceAr": "تحويل خطي لقيمة السكر التراكمي إلى مجم/دل عبر المعادلة: (28.7 × التراكمي) - 46.7 ليسهل على المريض فهم معدل سكره اليومي.",
    "tags": [
      "diabetes",
      "eag",
      "glucose-conversion"
    ]
  },
  {
    "id": "serum_fructosamine",
    "name": "Serum Fructosamine (Glycated Serum Protein)",
    "nameAr": "الفركتوزامين في المصل (البروتين السكري)",
    "aliases": [
      "Fructosamine",
      "Glycated Albumin Assay",
      "فركتوزامين"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Adults (Non-Diabetic)",
        "value": "200 – 285",
        "unit": "µmol/L"
      },
      {
        "group": "Good Glycemic Control (Diabetic Target)",
        "value": "286 – 350",
        "unit": "µmol/L"
      },
      {
        "group": "Fair Control",
        "value": "351 – 400",
        "unit": "µmol/L"
      },
      {
        "group": "Poor Diabetic Control",
        "value": "> 400",
        "unit": "µmol/L",
        "alert": "critical_high"
      }
    ],
    "significance": "Measures non-enzymatic glycation of serum proteins (primarily albumin). Reflects short-term average glycemia over the preceding 2-3 weeks (half-life of albumin). Ideal when HbA1c is unreliable (hemoglobinopathies, sickle cell, hemolysis, pregnancy, rapid therapy changes).",
    "significanceAr": "يقيس ارتباط السكر ببروتينات المصل (الألبومين) ويعكس ضبط السكر لآخر 2-3 أسابيع. الخيار المثالي عند عدم دقة التراكمي (فقر الدم المنجلي، انحلال الدم، الحمل).",
    "tags": [
      "diabetes",
      "fructosamine",
      "short-term-glycemia",
      "sickle-cell"
    ]
  },
  {
    "id": "c_peptide_fasting",
    "name": "Fasting C-Peptide",
    "nameAr": "الببتيد سي الصائم",
    "aliases": [
      "C-Peptide",
      "Connecting Peptide",
      "الببتيد سي"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Fasting Adults",
        "value": "0.8 – 3.8",
        "unit": "ng/mL",
        "note": "0.26 – 1.26 nmol/L"
      },
      {
        "group": "Absolute Beta-Cell Deficiency (Type 1 DM)",
        "value": "< 0.2",
        "unit": "ng/mL",
        "note": "Undetectable or minimal endogenous insulin reserve"
      },
      {
        "group": "Insulin Resistance / Hyperinsulinism (Type 2 DM early)",
        "value": "> 4.0",
        "unit": "ng/mL"
      },
      {
        "group": "Evaluation of Hypoglycemia (Exogenous Insulin Surreptitious)",
        "value": "< 0.6 with glucose < 55",
        "unit": "ng/mL",
        "note": "Suppressed C-peptide proves hypoglycemia is due to exogenous insulin injection"
      },
      {
        "group": "Evaluation of Hypoglycemia (Insulinoma / Sulfonylurea)",
        "value": "> 0.6 with glucose < 55",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Autonomous endogenous insulin secretion confirms insulinoma or sulfonylurea overdose"
      },
      {
        "group": "Severe Renal Impairment",
        "value": "Falsely elevated",
        "unit": "ng/mL",
        "note": "C-peptide is cleared by the kidney"
      }
    ],
    "significance": "Cleaved from proinsulin in equimolar amounts to endogenous insulin. Not cleared by liver (unlike insulin) and has no cross-reactivity with injected synthetic insulin. Essential for differentiating Type 1 from Type 2 DM, and evaluating factitious hypoglycemia versus insulinoma.",
    "significanceAr": "ينفصل عن طليعة الإنسولين بنسبة 1:1 مع الإنسولين الداخلي. لا يتأثر بإعطاء الإنسولين الدوائي، فيفرق بين السكري النوع 1 والنوع 2، ويكشف افتعال هبوط السكر أو ورم الإنسولينوما.",
    "tags": [
      "diabetes",
      "c-peptide",
      "type1-diabetes",
      "insulinoma",
      "hypoglycemia"
    ]
  },
  {
    "id": "c_peptide_stimulated",
    "name": "Stimulated C-Peptide (Glucagon Stimulation Test)",
    "nameAr": "الببتيد سي المحفز بالجلوكاجون",
    "aliases": [
      "Glucagon Stimulated C-Peptide"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Beta-Cell Reserve (Post 1mg IV Glucagon 6 min)",
        "value": "> 1.8",
        "unit": "ng/mL",
        "note": "Or >0.6 nmol/L confirms residual endogenous beta cell reserve"
      },
      {
        "group": "Impaired Beta-Cell Reserve",
        "value": "0.6 – 1.8",
        "unit": "ng/mL"
      },
      {
        "group": "Exhausted Beta-Cell Reserve (Absolute Insulin Need)",
        "value": "< 0.6",
        "unit": "ng/mL",
        "note": "Absolute requirement for lifelong insulin therapy"
      }
    ],
    "significance": "Assesses functional secretory capacity of pancreatic beta-cell mass. Determines if a patient with diabetes can be safely managed without basal-bolus insulin.",
    "significanceAr": "يقيم الاحتياطي الإفرازي لخلايا بيتا في البنكرياس بعد تحفيزها بالجلوكاجون لتحديد حاجة المريض المطلقة للإنسولين.",
    "tags": [
      "diabetes",
      "c-peptide",
      "glucagon-test"
    ]
  },
  {
    "id": "fasting_insulin",
    "name": "Fasting Serum Insulin",
    "nameAr": "الإنسولين الصائم في المصل",
    "aliases": [
      "Insulin Fasting",
      "Serum Insulin",
      "إنسولين صائم"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Fasting Adults",
        "value": "2.6 – 24.9",
        "unit": "µIU/mL"
      },
      {
        "group": "Optimal Insulin Sensitivity",
        "value": "< 10.0",
        "unit": "µIU/mL"
      },
      {
        "group": "Insulin Resistance Pattern",
        "value": "> 15.0",
        "unit": "µIU/mL",
        "note": "Hyperinsulinemia compensating for insulin resistance"
      },
      {
        "group": "Inappropriate Hyperinsulinemia (Insulinoma workup)",
        "value": "≥ 3.0 during hypoglycemia",
        "unit": "µIU/mL",
        "alert": "critical_high",
        "note": "Failure of insulin suppression when blood glucose drops <55 mg/dL during 72h fast"
      },
      {
        "group": "Absolute Insulin Deficiency",
        "value": "< 2.0",
        "unit": "µIU/mL"
      },
      {
        "group": "Marked Insulin Toxicity / Overdose",
        "value": "> 100.0",
        "unit": "µIU/mL",
        "alert": "critical_high"
      }
    ],
    "significance": "Secreted by pancreatic beta cells. Fasting hyperinsulinemia is the earliest physiological marker of metabolic syndrome, obesity, and PCOS. Diagnostic for insulinoma during supervised 72-hour fast.",
    "significanceAr": "يرتفع في الدم كعلامة مبكرة جداً لمقاومة الإنسولين في المتلازمة الاستقلابية وتكيس المبايض. عدم هبوطه عند هبوط السكر يثبت تشخيص ورم الإنسولينوما.",
    "tags": [
      "diabetes",
      "insulin",
      "insulin-resistance",
      "insulinoma"
    ]
  },
  {
    "id": "homa_ir",
    "name": "HOMA-IR (Homeostatic Model Assessment of Insulin Resistance)",
    "nameAr": "معامل HOMA-IR لمقاومة الإنسولين",
    "aliases": [
      "HOMA-IR",
      "مقاومة الإنسولين"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Optimal Insulin Sensitivity",
        "value": "< 1.0",
        "unit": "index"
      },
      {
        "group": "Normal / Acceptable",
        "value": "1.0 – 1.9",
        "unit": "index"
      },
      {
        "group": "Early / Borderline Insulin Resistance",
        "value": "2.0 – 2.9",
        "unit": "index"
      },
      {
        "group": "Significant Insulin Resistance",
        "value": "≥ 3.0",
        "unit": "index",
        "note": "High risk for type 2 diabetes, metabolic syndrome, and cardiovascular disease"
      }
    ],
    "significance": "Calculated as: (Fasting Insulin [µIU/mL] x Fasting Glucose [mg/dL]) / 405. Standard research and clinical index to quantify hepatic and peripheral insulin resistance.",
    "significanceAr": "يحسب بالمعادلة: (الإنسولين الصائم × السكر الصائم) ÷ 405. المؤشر الأكثر استخداماً لتقدير درجة مقاومة الإنسولين في الجسم.",
    "tags": [
      "diabetes",
      "homa-ir",
      "insulin-resistance",
      "metabolic-syndrome"
    ]
  },
  {
    "id": "homa_beta",
    "name": "HOMA-Beta (% Beta-Cell Function)",
    "nameAr": "معامل HOMA-Beta لكفاءة خلايا بيتا",
    "aliases": [
      "HOMA-Beta",
      "HOMA-B"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Healthy Adults",
        "value": "100.0",
        "unit": "%",
        "note": "Reference population baseline (~70 - 150%)"
      },
      {
        "group": "Progressive Beta-Cell Failure",
        "value": "< 50.0",
        "unit": "%",
        "note": "Progressive secretory decline in type 2 diabetes"
      }
    ],
    "significance": "Calculated as: (360 x Fasting Insulin [µIU/mL]) / (Fasting Glucose [mg/dL] - 63). Estimates pancreatic beta-cell secretory capacity.",
    "significanceAr": "يقدر النسبة المئوية لكفاءة خلايا بيتا الإفرازية في البنكرياس؛ تتدهور تدريجياً مع تقدم مرض السكري.",
    "tags": [
      "diabetes",
      "homa-beta",
      "beta-cells"
    ]
  },
  {
    "id": "beta_hydroxybutyrate",
    "name": "Beta-Hydroxybutyrate (Serum Ketone)",
    "nameAr": "بيتا هيدروكسي بوتيرات (كيتون المصل الكمي)",
    "aliases": [
      "BOHB",
      "Beta-Hydroxybutyrate",
      "Serum Ketones",
      "كيتونات الدم"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Baseline (Fasting)",
        "value": "< 0.5",
        "unit": "mmol/L"
      },
      {
        "group": "Starvation Ketosis / Nutritional Ketosis",
        "value": "0.5 – 3.0",
        "unit": "mmol/L"
      },
      {
        "group": "Diabetic Ketoacidosis (DKA Diagnostic Threshold)",
        "value": "> 3.0",
        "unit": "mmol/L",
        "alert": "critical_high",
        "note": "Diagnostic criterion for DKA alongside acidosis (pH <7.30, HCO3 <18)"
      },
      {
        "group": "Severe DKA",
        "value": "> 6.0",
        "unit": "mmol/L",
        "alert": "critical_high",
        "note": "High anion gap ketoacidosis; monitor hourly during insulin infusion protocol"
      }
    ],
    "significance": "Predominant circulating ketone body in Diabetic Ketoacidosis (~78% of total ketones). Acetoacetate/acetone are not measured by urine dipstick until BOHB is oxidized back to acetoacetate. Serum quantitative BOHB is the gold standard for DKA diagnosis and monitoring resolution.",
    "significanceAr": "الكيتون السائد في الحماض الكيتوني السكري (DKA). شريط البول يقيس فقط الأسيتوأسيتات ولا يقيسه؛ ولذا فإن قياس BOHB الكمي في الدم هو المعيار الذهبي لمتابعة علاج DKA.",
    "tags": [
      "diabetes",
      "dka",
      "ketones",
      "beta-hydroxybutyrate",
      "acidosis"
    ]
  },
  {
    "id": "serum_acetoacetate",
    "name": "Serum Acetoacetate",
    "nameAr": "الأسيتوأسيتات في المصل",
    "aliases": [
      "Acetoacetate",
      "AcAc"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 0.2",
        "unit": "mmol/L"
      },
      {
        "group": "Ketoacidosis",
        "value": "> 1.0",
        "unit": "mmol/L"
      }
    ],
    "significance": "Ketone body measured by traditional nitroprusside urine and serum dipstick reactions. In severe DKA, high NADH/NAD ratio drives equilibrium toward BOHB, making nitroprusside tests falsely negative.",
    "significanceAr": "جسم كيتوني يقاس بتفاعل النيتروبروسيد في أشرطة البول. في DKA الشديد يتحول معظمه إلى BOHB فيعطي شريط البول نتيجة سلبية كاذبة.",
    "tags": [
      "diabetes",
      "ketones",
      "acetoacetate"
    ]
  },
  {
    "id": "g6pd_quantitative",
    "name": "Glucose-6-Phosphate Dehydrogenase (G6PD Quantitative)",
    "nameAr": "إنزيم سداسي فوسفات الجلوكوز النازع للهيدروجين (G6PD)",
    "aliases": [
      "G6PD",
      "G6PDH",
      "أنزيم الفوال"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "7.0 – 20.5",
        "unit": "U/g Hb"
      },
      {
        "group": "Class III Moderate Deficiency",
        "value": "10 – 60% of normal",
        "unit": "U/g Hb",
        "note": "Episodic hemolysis triggered by fava beans, rasburicase, primaquine, dapsone, sulfa"
      },
      {
        "group": "Class II Severe Deficiency",
        "value": "< 10% of normal",
        "unit": "U/g Hb",
        "alert": "critical_low",
        "note": "High risk of acute massive intravascular hemolysis; contraindicates Rasburicase and Primaquine"
      }
    ],
    "significance": "First enzyme in hexose monophosphate shunt, producing NADPH to protect RBCs from oxidative injury. Severe deficiency causes acute hemolytic crisis triggered by fava beans, oxidant drugs (primaquine, rasburicase, nitrofurantoin, dapsone), and infections.",
    "significanceAr": "أنزيم أساسي لحماية الكريات الحمر من الأكسدة بتوليد NADPH. يسبب نقصه (مرض الفوال) انحلال دم حاد عند تناول الفول أو أدوية مؤكسدة (دابسون، بريماكين، راسبوريكاز).",
    "tags": [
      "diabetes",
      "hematology",
      "g6pd",
      "hemolysis",
      "favism"
    ]
  },
  {
    "id": "uacr_urine_albumin_creatinine",
    "name": "Urine Albumin-to-Creatinine Ratio (UACR)",
    "nameAr": "نسبة الألبومين إلى الكرياتينين في البول (UACR)",
    "aliases": [
      "UACR",
      "Microalbumin",
      "ميكروألبومين البول",
      "الزلال البولي"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal to Mild (Category A1)",
        "value": "< 30",
        "unit": "mg/g Cr",
        "note": "< 3 mg/mmol Cr"
      },
      {
        "group": "Microalbuminuria / Moderate (Category A2)",
        "value": "30 – 300",
        "unit": "mg/g Cr",
        "note": "Earliest clinical sign of Diabetic Kidney Disease; initiate ACEi/ARB and SGLT2i"
      },
      {
        "group": "Macroalbuminuria / Severe (Category A3)",
        "value": "> 300",
        "unit": "mg/g Cr",
        "note": "Overt diabetic nephropathy / nephrotic range, high CVD risk"
      },
      {
        "group": "Nephrotic Range Albuminuria",
        "value": "> 2200",
        "unit": "mg/g Cr",
        "alert": "critical_high",
        "note": "Equivalent to >3.5 g/24h proteinuria"
      }
    ],
    "significance": "Primary screening test for diabetic nephropathy on spot morning urine. Recommended annually in all Type 2 DM patients and Type 1 DM of >5 years duration. Microalbuminuria indicates early endothelial dysfunction and warrants renal-protective therapy.",
    "significanceAr": "فحص المسح السنوي الإلزامي لاعتلال الكلية السكري على عينة بول صباحية. وجود الزلال الدقيق (30-300) يستوجب البدء بمثبطات ACEi/ARB ومثبطات SGLT2 لحماية الكلى.",
    "tags": [
      "diabetes",
      "renal",
      "uacr",
      "microalbuminuria",
      "ckd"
    ]
  },
  {
    "id": "glycated_albumin",
    "name": "Glycated Albumin (GA %)",
    "nameAr": "الألبومين السكري (GA %)",
    "aliases": [
      "Glycated Albumin",
      "GA %"
    ],
    "category": "diabetes",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "11.0 – 16.0",
        "unit": "%"
      },
      {
        "group": "Fair Control Diabetic Target",
        "value": "16.1 – 20.0",
        "unit": "%"
      },
      {
        "group": "Poor Control",
        "value": "> 24.0",
        "unit": "%"
      }
    ],
    "significance": "Reflects intermediate glycation (2-3 weeks). Highly accurate in hemodialysis patients where HbA1c is notoriously inaccurate due to shortened RBC survival and erythropoietin.",
    "significanceAr": "يعكس متوسط السكر لـ 2-3 أسابيع. عالي الدقة لمرضى الغسيل الكلوي حيث يفقد التراكمي دقته لقصر عمر الكريات الحمر.",
    "tags": [
      "diabetes",
      "glycated-albumin",
      "esrd"
    ]
  },
  {
    "id": "crcl_creatinine_clearance",
    "name": "Creatinine Clearance (24h CrCl)",
    "nameAr": "تصفية الكرياتينين (تجميع 24 ساعة)",
    "aliases": [
      "CrCl",
      "Creatinine Clearance",
      "تصفية الكرياتينين"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "97 – 137",
        "unit": "mL/min"
      },
      {
        "group": "Adult Females",
        "value": "88 – 128",
        "unit": "mL/min"
      },
      {
        "group": "Elderly (>65yr)",
        "value": "Drops ~1 mL/min/year after 40yr",
        "unit": "mL/min"
      },
      {
        "group": "Severe Renal Impairment",
        "value": "< 30",
        "unit": "mL/min",
        "alert": "critical_low",
        "note": "Major drug dosage adjustment mandatory for renally cleared medications"
      }
    ],
    "significance": "Calculated from 24h urine creatinine and volume: (U_Cr x V) / (P_Cr x 1440). Slightly overestimates true GFR by 10-20% due to proximal tubular secretion of creatinine.",
    "significanceAr": "يحسب من بول 24 ساعة. يفوق معدل الترشيح الكبيبي الحقيقي بنسبة 10-20% بسبب إفراز الأنابيب الكلوية للكرياتينين. أساسي لتعديل جرعات الأدوية.",
    "tags": [
      "renal",
      "crcl",
      "gfr",
      "kidney"
    ]
  },
  {
    "id": "cystatin_c_serum",
    "name": "Serum Cystatin C",
    "nameAr": "سيستاتين سي في المصل",
    "aliases": [
      "Cystatin C",
      "CysC",
      "سيستاتين سي"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Young Adults (<50yr)",
        "value": "0.62 – 1.15",
        "unit": "mg/L"
      },
      {
        "group": "Elderly (>50yr)",
        "value": "0.68 – 1.35",
        "unit": "mg/L"
      },
      {
        "group": "CKD Confirmatory eGFR Indicator",
        "value": "> 1.40",
        "unit": "mg/L",
        "note": "Used to confirm CKD in patients with borderline eGFR-creatinine and abnormal muscle mass"
      },
      {
        "group": "Critical High",
        "value": "> 2.50",
        "unit": "mg/L",
        "alert": "critical_high"
      }
    ],
    "significance": "Low-molecular-weight protein produced at a constant rate by all nucleated cells, freely filtered by glomerulus and completely reabsorbed/catabolized by tubules. NOT affected by muscle mass, diet, or race. Confirmatory test for ambiguous eGFR.",
    "significanceAr": "ينتج بمعدل ثابت من كافة خلايا الجسم ذات النوى ويطرح عبر الكلى دون التأثر بالكتلة العضلية أو التغذية أو العرق. الفحص التأكيدي الأدق عند الشك بـ eGFR.",
    "tags": [
      "renal",
      "cystatin-c",
      "gfr",
      "kidney"
    ]
  },
  {
    "id": "beta_2_microglobulin_serum",
    "name": "Beta-2 Microglobulin (Serum)",
    "nameAr": "بيتا-2 ميكروجلوبولين في المصل",
    "aliases": [
      "B2M Serum",
      "Beta-2 Microglobulin"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "1.0 – 2.5",
        "unit": "mg/L"
      },
      {
        "group": "Renal Failure / Dialysis-Related Amyloidosis Risk",
        "value": "> 4.0",
        "unit": "mg/L"
      },
      {
        "group": "Stage III Multiple Myeloma / Lymphoma",
        "value": "> 5.5",
        "unit": "mg/L",
        "alert": "critical_high",
        "note": "Key International Staging System (ISS) prognostic cutoff for multiple myeloma"
      }
    ],
    "significance": "Component of MHC class I molecules. Cleared by glomerular filtration. Elevated in renal failure (accumulates and causes dialysis-related amyloidosis) and lymphoproliferative disorders (multiple myeloma, CLL).",
    "significanceAr": "جزء من معقد التوافق النسيجي الأول. يرتفع في الفشل الكلوي مسبباً داء النشوانيات للغسيل الكلوي، وواسم إنذاري في الورم النقوي المتعدد.",
    "tags": [
      "renal",
      "b2m",
      "myeloma",
      "amyloidosis"
    ]
  },
  {
    "id": "beta_2_microglobulin_urine",
    "name": "Beta-2 Microglobulin (Urine)",
    "nameAr": "بيتا-2 ميكروجلوبولين في البول",
    "aliases": [
      "B2M Urine"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 0.30",
        "unit": "mg/L",
        "note": "<300 µg/L"
      },
      {
        "group": "Renal Tubular Injury / Dysfunction",
        "value": "> 1.00",
        "unit": "mg/L",
        "note": "Sensitive marker of proximal tubular injury (heavy metal toxicity, Fanconi syndrome, drug toxicity)"
      }
    ],
    "significance": "Freely filtered and >99.9% reabsorbed by proximal tubules. Urinary excretion indicates proximal tubular epithelial damage (Fanconi syndrome, aminoglycoside nephrotoxicity, cadmium toxicity).",
    "significanceAr": "يعاد امتصاصه بنسبة 99.9% في الأنابيب القريبة. وجوده في البول يدل على أذية الخلايا الأنبوبية الكلوية (التسمم بالأمينوغليكوزيدات، متلازمة فانكوني).",
    "tags": [
      "renal",
      "tubular-injury",
      "b2m-urine"
    ]
  },
  {
    "id": "ngal_urine",
    "name": "Neutrophil Gelatinase-Associated Lipocalin (Urine NGAL)",
    "nameAr": "إنغال البولي (NGAL - واسم الأذية الكلوية الحادة)",
    "aliases": [
      "NGAL Urine",
      "Lipocalin-2"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 50",
        "unit": "ng/mL"
      },
      {
        "group": "Subclinical Acute Kidney Injury (AKI)",
        "value": "50 – 150",
        "unit": "ng/mL"
      },
      {
        "group": "Definite AKI / Acute Tubular Necrosis",
        "value": "> 150",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "'Troponin of the kidney' - rises 24-48 hours before serum creatinine in ischemic or toxic AKI"
      }
    ],
    "significance": "'Troponin of the kidney'. Upregulated massively in proximal/distal tubular epithelium within 2-4 hours of ischemic or nephrotoxic injury, days before creatinine rises.",
    "significanceAr": "الملقب بـ 'تروبونين الكلية'. يرتفع في البول خلال 2-4 ساعات من نقص التروية الكلوية وقبل ارتفاع الكرياتينين بـ 24-48 ساعة.",
    "tags": [
      "renal",
      "ngal",
      "aki",
      "early-biomarker"
    ]
  },
  {
    "id": "ngal_serum",
    "name": "Serum NGAL",
    "nameAr": "إنغال في المصل (Serum NGAL)",
    "aliases": [
      "Plasma NGAL"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 100",
        "unit": "ng/mL"
      },
      {
        "group": "Acute Kidney Injury Likely",
        "value": "> 150",
        "unit": "ng/mL"
      }
    ],
    "significance": "Circulating NGAL filtered and reabsorbed by kidney. Elevated in systemic inflammation and acute tubular necrosis.",
    "significanceAr": "يرتفع في المصل والبول في حالات النخر الأنبوبي الحاد والإنتان الشديد.",
    "tags": [
      "renal",
      "ngal",
      "aki"
    ]
  },
  {
    "id": "kim_1_urine",
    "name": "Kidney Injury Molecule-1 (KIM-1 Urine)",
    "nameAr": "جزيء أذية الكلية-1 (KIM-1)",
    "aliases": [
      "KIM-1"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 1.0",
        "unit": "ng/mL"
      },
      {
        "group": "Tubular Ischemia / Toxicity",
        "value": "> 2.8",
        "unit": "ng/mL",
        "note": "Expressed specifically by dedifferentiated proximal tubular cells after ischemic or toxic insult"
      }
    ],
    "significance": "Transmembrane glycoprotein undetectable in healthy kidneys. Expressed in high levels by proximal tubule cells after ischemic or toxic insult.",
    "significanceAr": "بروتين سكري غشائي لا يوجد في الكلية السليمة، ويعبر عنه بقوة عند حدوث أذية إقفارية أو سمية للأنابيب الكلوية.",
    "tags": [
      "renal",
      "kim-1",
      "aki",
      "toxicology"
    ]
  },
  {
    "id": "urine_creatinine_24h",
    "name": "24-Hour Urine Creatinine Excretion",
    "nameAr": "إطراح الكرياتينين في بول 24 ساعة",
    "aliases": [
      "24h Urine Creatinine",
      "Urine Creatinine"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "1000 – 2000",
        "unit": "mg/24h",
        "note": "14 – 26 mg/kg/24h"
      },
      {
        "group": "Adult Females",
        "value": "800 – 1800",
        "unit": "mg/24h",
        "note": "11 – 20 mg/kg/24h"
      },
      {
        "group": "Incomplete Collection Flag",
        "value": "< 10",
        "unit": "mg/kg/24h",
        "note": "Indicates under-collection of 24-hour urine sample"
      }
    ],
    "significance": "Assesses completeness of 24-hour urine collection. If 24h creatinine is <10-14 mg/kg, the collection was almost certainly incomplete.",
    "significanceAr": "يستخدم للتأكد من اكتمال وصحة جمع بول 24 ساعة؛ فإذا كان أقل من 10-14 مجم/كغ دل على عدم اكتمال الجمع.",
    "tags": [
      "renal",
      "urine-collection",
      "creatinine"
    ]
  },
  {
    "id": "urine_protein_24h",
    "name": "24-Hour Urine Total Protein Excretion",
    "nameAr": "إطراح البروتين الكلي في بول 24 ساعة",
    "aliases": [
      "24h Urine Protein",
      "Proteinuria 24h",
      "زلال البول الكلي"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 150",
        "unit": "mg/24h"
      },
      {
        "group": "Microproteinuria / Borderline",
        "value": "150 – 500",
        "unit": "mg/24h"
      },
      {
        "group": "Moderate Proteinuria",
        "value": "500 – 3000",
        "unit": "mg/24h",
        "note": "Glomerulonephritis, diabetic kidney disease, interstitial nephritis"
      },
      {
        "group": "Nephrotic-Range Proteinuria",
        "value": "> 3500",
        "unit": "mg/24h",
        "alert": "critical_high",
        "note": ">3.5 g/day is diagnostic of Nephrotic Syndrome"
      }
    ],
    "significance": "Gold standard for quantifying proteinuria. Nephrotic-range proteinuria (>3.5 g/24h) causes hypoalbuminemia, hyperlipidemia, and peripheral edema.",
    "significanceAr": "المعيار الذهبي لقياس زلال البول. المتلازمة النفروزية (>3.5 جم/24 ساعة) تسبب وذمات معممة وهبوط ألبومين المصل وتخثرات.",
    "tags": [
      "renal",
      "proteinuria",
      "nephrotic-syndrome",
      "kidney"
    ]
  },
  {
    "id": "urine_albumin_24h",
    "name": "24-Hour Urine Albumin Excretion",
    "nameAr": "إطراح الألبومين في بول 24 ساعة",
    "aliases": [
      "24h Urine Albumin",
      "AER"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal AER",
        "value": "< 30",
        "unit": "mg/24h"
      },
      {
        "group": "Microalbuminuria",
        "value": "30 – 300",
        "unit": "mg/24h"
      },
      {
        "group": "Macroalbuminuria / Clinical",
        "value": "> 300",
        "unit": "mg/24h"
      }
    ],
    "significance": "Measures selective glomerular leakage of albumin. Replaced in outpatient settings by UACR spot ratio.",
    "significanceAr": "يقيس تسرب الألبومين الكبيبي الانتقائي عبر الكلى خلال 24 ساعة.",
    "tags": [
      "renal",
      "albuminuria",
      "diabetes"
    ]
  },
  {
    "id": "urine_sodium_24h",
    "name": "24-Hour Urine Sodium Excretion",
    "nameAr": "إطراح الصوديوم في بول 24 ساعة",
    "aliases": [
      "24h Urine Na",
      "Urine Sodium"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Standard Dietary Intake",
        "value": "40 – 220",
        "unit": "mEq/24h"
      },
      {
        "group": "Strict Low-Sodium Diet Compliance (<2g Na / <5g Salt)",
        "value": "< 88",
        "unit": "mEq/24h",
        "note": "Verifies adherence to dietary sodium restriction in hypertension / cirrhosis"
      }
    ],
    "significance": "Direct reflection of dietary sodium intake at steady state. Crucial for verifying dietary salt compliance in resistant hypertension, heart failure, and cirrhosis with ascites.",
    "significanceAr": "يعكس بدقة كمية ملح الطعام المتناولة في الحمية الغذائية، ويستخدم لمراقبة التزام مرضى الضغط وفشل القلب وتشمع الكبد.",
    "tags": [
      "renal",
      "sodium",
      "hypertension",
      "diet"
    ]
  },
  {
    "id": "urine_potassium_24h",
    "name": "24-Hour Urine Potassium Excretion",
    "nameAr": "إطراح البوتاسيوم في بول 24 ساعة",
    "aliases": [
      "24h Urine K",
      "Urine Potassium"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "25 – 125",
        "unit": "mEq/24h"
      },
      {
        "group": "Renal Potassium Wasting (in Hypokalemia)",
        "value": "> 20 – 30",
        "unit": "mEq/24h",
        "note": "Hypokalemia with urine K >20 indicates renal loss (diuretics, RTA, hyperaldo) rather than GI loss"
      }
    ],
    "significance": "Evaluates hypokalemia: excretion >20-30 mEq/24h in a hypokalemic patient confirms renal potassium wasting (hyperaldosteronism, Bartter/Gitelman, diuretics) rather than gastrointestinal loss.",
    "significanceAr": "يقيم سبب هبوط البوتاسيوم؛ إذا تجاوز 20-30 ميك/يوم لدى مريض يعاني من نقص البوتاسيوم فيثبت أن الفقد كلوي (مدرات، فرط ألدوستيرون).",
    "tags": [
      "renal",
      "potassium",
      "hypokalemia"
    ]
  },
  {
    "id": "urine_calcium_24h",
    "name": "24-Hour Urine Calcium Excretion",
    "nameAr": "إطراح الكالسيوم في بول 24 ساعة",
    "aliases": [
      "24h Urine Ca",
      "Urine Calcium"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults (Average Diet)",
        "value": "100 – 300",
        "unit": "mg/24h",
        "note": "<4 mg/kg/24h"
      },
      {
        "group": "Restricted Calcium Diet (<500mg/day)",
        "value": "< 150",
        "unit": "mg/24h"
      },
      {
        "group": "Idiopathic Hypercalciuria (Nephrolithiasis Risk)",
        "value": "> 250 (F) / > 300 (M)",
        "unit": "mg/24h",
        "note": "Primary metabolic abnormality predisposing to calcium oxalate kidney stones"
      },
      {
        "group": "Familial Hypocalciuric Hypercalcemia (FHH)",
        "value": "< 100",
        "unit": "mg/24h",
        "note": "Low urinary Ca differentiates FHH from primary hyperparathyroidism"
      }
    ],
    "significance": "Crucial in workup of recurrent calcium kidney stones (nephrolithiasis). Also differentiates Familial Hypocalciuric Hypercalcemia (FHH, low urinary calcium) from primary hyperparathyroidism (high urinary calcium).",
    "significanceAr": "أساسي في تقييم حصوات الكلى الكلسية المتكررة، ويفرق بين فرط كالسيوم الدم الوراثي سليم العواقب FHH وفرط نشاط الدريقات الأولي.",
    "tags": [
      "renal",
      "calcium",
      "nephrolithiasis",
      "kidney-stones"
    ]
  },
  {
    "id": "urine_phosphate_24h",
    "name": "24-Hour Urine Phosphate Excretion",
    "nameAr": "إطراح الفوسفات في بول 24 ساعة",
    "aliases": [
      "24h Urine Phosphorus"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0.4 – 1.3",
        "unit": "g/24h"
      },
      {
        "group": "Renal Phosphate Wasting",
        "value": "> 1.5",
        "unit": "g/24h",
        "note": "Hyperparathyroidism, Fanconi syndrome, oncogenic osteomalacia (FGF-23)"
      }
    ],
    "significance": "Evaluates renal phosphate wasting in hypophosphatemic rickets and tumor-induced osteomalacia.",
    "significanceAr": "يقيم هدر الفوسفات الكلوي في حالات الكساح المقاوم ولين العظام الورمي المنشأ.",
    "tags": [
      "renal",
      "phosphate",
      "osteomalacia"
    ]
  },
  {
    "id": "urine_uric_acid_24h",
    "name": "24-Hour Urine Uric Acid Excretion",
    "nameAr": "إطراح حمض اليوريك في بول 24 ساعة",
    "aliases": [
      "24h Urine Uric Acid",
      "Urate Excretion"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Purine-Free Diet",
        "value": "< 600",
        "unit": "mg/24h"
      },
      {
        "group": "Normal Purine Intake",
        "value": "250 – 750",
        "unit": "mg/24h"
      },
      {
        "group": "Hyperuricosuria (Overproducer)",
        "value": "> 800 (M) / > 750 (F)",
        "unit": "mg/24h",
        "note": "High risk of uric acid and calcium oxalate nephrolithiasis; avoid uricosuric drugs (allopurinol preferred)"
      }
    ],
    "significance": "Distinguishes gout patients who are 'underexcretors' (<600-800 mg/24h, >90% of gout) from 'overproducers' (>800 mg/24h). Overproducers should NOT receive uricosuric drugs (probenecid) due to stone risk.",
    "significanceAr": "يميز مرضى النقرس مفرطي الإنتاج (>800 مجم) عن ناقصي الإطراح (<800 مجم). يمنع إعطاء محفزات إطراح حمض البول لمفرطي الإنتاج لتجنب تشكل الحصيات.",
    "tags": [
      "renal",
      "gout",
      "uric-acid",
      "nephrolithiasis"
    ]
  },
  {
    "id": "urine_oxalate_24h",
    "name": "24-Hour Urine Oxalate Excretion",
    "nameAr": "إطراح الأوكسالات في بول 24 ساعة",
    "aliases": [
      "24h Urine Oxalate",
      "Oxalate Excretion"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 45",
        "unit": "mg/24h",
        "note": "< 0.5 mmol/24h"
      },
      {
        "group": "Enteric Hyperoxaluria",
        "value": "45 – 100",
        "unit": "mg/24h",
        "note": "Crohn disease, gastric bypass, short bowel syndrome"
      },
      {
        "group": "Primary Hyperoxaluria (Type 1/2/3)",
        "value": "> 100",
        "unit": "mg/24h",
        "alert": "critical_high",
        "note": "Severe genetic disease leading to nephrocalcinosis, early ESRD, and systemic oxalosis"
      }
    ],
    "significance": "Elevated in primary hyperoxaluria (genetic AGXT enzyme defect) and enteric hyperoxaluria (malabsorption, roux-en-Y gastric bypass, Crohn's where free calcium binds fatty acids, leaving oxalate free to be absorbed).",
    "significanceAr": "يرتفع في داء فرط الأوكسالات المعوي (داء كرون وجراحة تحويل مسار المعدة) وفرط الأوكسالات الوراثي؛ وهو المسبب الأشرس لتشكل حصيات الكالسيوم أوكسالات والتكلس الكلوي.",
    "tags": [
      "renal",
      "oxalate",
      "nephrolithiasis",
      "gastric-bypass"
    ]
  },
  {
    "id": "urine_magnesium_24h",
    "name": "24-Hour Urine Magnesium Excretion",
    "nameAr": "إطراح المغنيسيوم في بول 24 ساعة",
    "aliases": [
      "24h Urine Mg"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "70 – 150",
        "unit": "mg/24h"
      },
      {
        "group": "Renal Magnesium Wasting",
        "value": "> 24",
        "unit": "mg/24h",
        "note": "In presence of hypomagnesemia confirms renal tubular wasting (Gitelman, cisplatin, loops)"
      }
    ],
    "significance": "Investigates cause of hypomagnesemia (gastrointestinal vs renal wasting).",
    "significanceAr": "يبحث في منشأ نقص المغنيسيوم إذا كان كلوياً أو هضمياً.",
    "tags": [
      "renal",
      "magnesium"
    ]
  },
  {
    "id": "urine_citrate_24h",
    "name": "24-Hour Urine Citrate Excretion",
    "nameAr": "إطراح السترات في بول 24 ساعة (مانع الحصى)",
    "aliases": [
      "24h Urine Citrate",
      "Citrate Excretion"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "> 450",
        "unit": "mg/24h"
      },
      {
        "group": "Hypocitraturia (Stone Formation Risk)",
        "value": "< 320",
        "unit": "mg/24h",
        "note": "Loss of natural crystallization inhibitor; treat with Potassium Citrate"
      },
      {
        "group": "Severe Hypocitraturia",
        "value": "< 100",
        "unit": "mg/24h",
        "note": "Seen in Distal Renal Tubular Acidosis (Type 1 RTA)"
      }
    ],
    "significance": "Citrate is the most potent natural endogenous inhibitor of calcium phosphate and calcium oxalate crystallization in urine. Hypocitraturia (<320 mg/day) is a major treatable cause of recurrent stones (treated with potassium citrate). Marked in Type 1 distal RTA.",
    "significanceAr": "السترات هي المانع الطبيعي الأهم لتبلور وتشكل حصوات الكلى الكلسية في البول. هبوطها (<320 مجم) يستدعي العلاج بسترين البوتاسيوم.",
    "tags": [
      "renal",
      "citrate",
      "nephrolithiasis",
      "rta"
    ]
  },
  {
    "id": "fena_fractional_excretion_sodium",
    "name": "Fractional Excretion of Sodium (FENa)",
    "nameAr": "الإطراح الجزئي للصوديوم (FENa)",
    "aliases": [
      "FENa",
      "Fractional Excretion of Na",
      "كسر إطراح الصوديوم"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Prerenal Azotemia Pattern",
        "value": "< 1.0",
        "unit": "%",
        "note": "Tubules avidly reabsorb Na to preserve volume (hypoperfusion, dehydration, CHF, cirrhosis)"
      },
      {
        "group": "Intrinsic AKI / Acute Tubular Necrosis (ATN)",
        "value": "> 2.0",
        "unit": "%",
        "note": "Damaged tubular cells cannot reabsorb sodium"
      },
      {
        "group": "Indeterminate / Overlap Zone",
        "value": "1.0 – 2.0",
        "unit": "%",
        "note": "Diuretics invalidate FENa (use FEUrea instead)"
      }
    ],
    "significance": "Formula: ([U_Na x P_Cr] / [P_Na x U_Cr]) x 100%. Distinguishes prerenal azotemia (<1%) from acute tubular necrosis (>2%). Note: FENa is INVALIDATED by diuretic therapy within the preceding 24-48 hours (use FEUrea instead).",
    "significanceAr": "المعادلة: (صوديوم البول × كرياتينين المصل) ÷ (صوديوم المصل × كرياتينين البول) × 100%. <1% تدل على سبب قبل كلوي، و>2% نخر أنبوبي حاد. تبطل المدرات صحته ويستبدل بـ FEUrea.",
    "tags": [
      "renal",
      "fena",
      "aki",
      "prerenal",
      "atn"
    ]
  },
  {
    "id": "feurea_fractional_excretion_urea",
    "name": "Fractional Excretion of Urea (FEUrea)",
    "nameAr": "الإطراح الجزئي لليوريا (FEUrea)",
    "aliases": [
      "FEUrea",
      "Fractional Excretion of Urea"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Prerenal Azotemia (Preferred with Diuretics)",
        "value": "< 35.0",
        "unit": "%",
        "note": "Accurately identifies prerenal etiology even in patients on active loop diuretic therapy"
      },
      {
        "group": "Intrinsic AKI / Acute Tubular Necrosis",
        "value": "> 50.0",
        "unit": "%"
      }
    ],
    "significance": "Formula: ([U_Urea x P_Cr] / [P_Urea x U_Cr]) x 100%. The test of choice for distinguishing prerenal azotemia (<35%) from ATN (>50%) when the patient is actively taking loop or thiazide diuretics.",
    "significanceAr": "الفحص المفضل للتفريق بين القصور قبل الكلوي (<35%) والنخر الأنبوبي الحاد (>50%) عندما يكون المريض يتناول مدرات البول التي تشوش تحليل FENa.",
    "tags": [
      "renal",
      "feurea",
      "diuretics",
      "aki",
      "prerenal"
    ]
  },
  {
    "id": "urine_osmolality",
    "name": "Urine Osmolality",
    "nameAr": "أسمولية البول",
    "aliases": [
      "Urine Osm",
      "Urine Osmolality"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Random Urine (Normal Water Intake)",
        "value": "300 – 900",
        "unit": "mOsm/kg"
      },
      {
        "group": "Maximal Dilution (Water Overload)",
        "value": "50 – 100",
        "unit": "mOsm/kg",
        "note": "Intact renal diluting capacity (primary polydipsia, low solute intake)"
      },
      {
        "group": "Maximal Concentration (Dehydration / Water Deprivation)",
        "value": "> 800 – 1200",
        "unit": "mOsm/kg",
        "note": "Appropriate ADH response to hyperosmolality"
      },
      {
        "group": "Prerenal Azotemia Pattern",
        "value": "> 500",
        "unit": "mOsm/kg",
        "note": "Concentrated urine reflects intact tubular reabsorption"
      },
      {
        "group": "Acute Tubular Necrosis (Isosthenuria)",
        "value": "250 – 350",
        "unit": "mOsm/kg",
        "note": "Fixed specific gravity / osmolality matching serum (~300 mOsm/kg)"
      },
      {
        "group": "Diabetes Insipidus (Inappropriate Dilution)",
        "value": "< 300 with serum >295",
        "unit": "mOsm/kg",
        "alert": "critical_low",
        "note": "Inappropriate dilute urine during hyperosmolar dehydration"
      }
    ],
    "significance": "Direct measure of renal concentrating and diluting ability. In diabetes insipidus, urine is inappropriately dilute (<300 mOsm/kg) despite hypernatremic dehydration. In ATN, tubular damage causes isosthenuria (~300 mOsm/kg).",
    "significanceAr": "يقيس قدرة الكلية على تركيز أو تمديد البول. في السكري الكاذب يكون البول ممدداً (<300) رغم الجفاف، وفي النخر الأنبوبي الحاد يتماثل تركيز البول مع المصل (~300).",
    "tags": [
      "renal",
      "osmolality",
      "diabetes-insipidus",
      "siadh",
      "dehydration"
    ]
  },
  {
    "id": "urine_specific_gravity_refractometer",
    "name": "Urine Specific Gravity (Refractometer)",
    "nameAr": "الكثافة النوعية للبول (المقياس الانكساري)",
    "aliases": [
      "Urine SG",
      "Specific Gravity"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Hydration",
        "value": "1.010 – 1.025",
        "unit": "ratio"
      },
      {
        "group": "Maximal Dilution",
        "value": "1.001 – 1.003",
        "unit": "ratio"
      },
      {
        "group": "Concentrated / Dehydration",
        "value": "> 1.030",
        "unit": "ratio"
      },
      {
        "group": "Isosthenuria (Fixed Renal Failure)",
        "value": "1.010",
        "unit": "ratio",
        "note": "Matches specific gravity of protein-free plasma filtrate (~1.010)"
      }
    ],
    "significance": "Ratio of urine weight to pure water weight. Fixed at 1.010 in chronic renal failure or acute tubular necrosis (isosthenuria). Falsely elevated by radiocontrast media, mannitol, and heavy proteinuria.",
    "significanceAr": "نسبة وزن البول إلى الماء المقطر. تتثبت عند 1.010 في القصور الكلوي المتقدم والنخر الأنبوبي. ترتفع كاذباً بعد إعطاء الصبغة الوريدية الشعاعية والمانيتول.",
    "tags": [
      "renal",
      "specific-gravity",
      "hydration"
    ]
  },
  {
    "id": "urine_ph_chemistry",
    "name": "Urine pH (Urinary Acidification)",
    "nameAr": "درجة حموضة البول (pH)",
    "aliases": [
      "Urine pH",
      "حموضة البول"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Random Urine",
        "value": "4.5 – 8.0",
        "unit": "pH units",
        "note": "Average around 5.5 – 6.5"
      },
      {
        "group": "Acidic Urine (Target in Uric Acid / Cystine Stones)",
        "value": "< 5.5",
        "unit": "pH units",
        "note": "Promotes uric acid and cystine precipitation"
      },
      {
        "group": "Alkaline Urine Target (Alkalinization Therapy)",
        "value": "6.5 – 7.5",
        "unit": "pH units",
        "note": "Dissolves uric acid stones, prevents methotrexate/myoglobin toxicity"
      },
      {
        "group": "Inability to Acidify Urine (Type 1 Distal RTA)",
        "value": "> 5.5 in systemic acidosis",
        "unit": "pH units",
        "alert": "critical_high",
        "note": "Urine pH >5.5 despite metabolic acidemia confirms Distal RTA"
      }
    ],
    "significance": "Reflects renal H+ excretion. Failure to acidify urine below pH 5.5 during systemic metabolic acidosis confirms Distal Renal Tubular Acidosis (Type 1 RTA). Persistently alkaline urine (>7.5-8.0) suggests Proteus mirabilis UTI (urease producer).",
    "significanceAr": "يعكس إطراح شوارد الهيدروجين؛ عدم قدرة الكلية على تخفيض pH البول دون 5.5 أثناء الحماض الاستقلابي يشخص الحماض الأنبوبي الكلوي البعيد (النوع 1). يشير البول القلوي (>7.5) لإنتان ببكتيريا البروتوس.",
    "tags": [
      "renal",
      "urine-ph",
      "rta",
      "stones",
      "proteus"
    ]
  },
  {
    "id": "uun_urine_urea_nitrogen_24h",
    "name": "24-Hour Urine Urea Nitrogen (UUN)",
    "nameAr": "نيتروجين يوريا البول في 24 ساعة (UUN)",
    "aliases": [
      "24h UUN",
      "Urine Urea Nitrogen"
    ],
    "category": "renal",
    "ranges": [
      {
        "group": "Normal Adult Protein Intake",
        "value": "12.0 – 20.0",
        "unit": "g/24h"
      },
      {
        "group": "Hypercatabolic State / Critical Illness",
        "value": "> 25.0",
        "unit": "g/24h",
        "note": "Severe protein breakdown in trauma, burns, sepsis"
      },
      {
        "group": "Negative Nitrogen Balance Index",
        "value": "UUN + 4 > Daily Nitrogen Intake",
        "unit": "g/24h",
        "note": "Used in ICU to assess adequacy of protein nutrition"
      }
    ],
    "significance": "Used in critical care nutrition to calculate Nitrogen Balance = (Protein Intake / 6.25) - (UUN + 4). Guides amino acid delivery in catabolic ICU patients.",
    "significanceAr": "يستخدم في العناية المركزة لحساب توازن النيتروجين بدقة لتعديل كميات البروتين المعطاة للمرضى في حالات الحروق والرضوض والقصور الحاد.",
    "tags": [
      "renal",
      "uun",
      "nutrition",
      "nitrogen-balance",
      "icu"
    ]
  },
  {
    "id": "tsh",
    "name": "Thyroid-Stimulating Hormone (TSH)",
    "nameAr": "الهرمون المنبه للدرقية (TSH)",
    "aliases": [
      "TSH",
      "Thyrotropin",
      "هرمون الدرقية المنبه"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Non-Pregnant Adults Normal",
        "value": "0.45 – 4.50",
        "unit": "µIU/mL"
      },
      {
        "group": "Pregnancy (1st Trimester)",
        "value": "0.10 – 2.50",
        "unit": "µIU/mL",
        "note": "Suppressed physiologically by high hCG (shared alpha subunit)"
      },
      {
        "group": "Pregnancy (2nd Trimester)",
        "value": "0.20 – 3.00",
        "unit": "µIU/mL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "0.30 – 3.50",
        "unit": "µIU/mL"
      },
      {
        "group": "Subclinical Hypothyroidism",
        "value": "4.51 – 10.00",
        "unit": "µIU/mL",
        "note": "Normal fT4 with elevated TSH; treat if symptomatic, pregnant, anti-TPO positive, or high CVD risk"
      },
      {
        "group": "Overt Primary Hypothyroidism",
        "value": "> 10.00",
        "unit": "µIU/mL",
        "alert": "critical_high",
        "note": "Always treat with Levothyroxine; check for myxedema coma if severe"
      },
      {
        "group": "Subclinical Hyperthyroidism",
        "value": "0.10 – 0.44",
        "unit": "µIU/mL"
      },
      {
        "group": "Overt Hyperthyroidism",
        "value": "< 0.10",
        "unit": "µIU/mL",
        "alert": "critical_low",
        "note": "Elevated fT4/fT3, Graves disease, toxic adenoma; thyroid storm risk"
      },
      {
        "group": "Neonates (Day 3-4 Screen)",
        "value": "1.00 – 10.00",
        "unit": "µIU/mL"
      },
      {
        "group": "Elderly (>70-80yr)",
        "value": "0.50 – 6.00",
        "unit": "µIU/mL",
        "note": "Physiologic upward shift in normal aging"
      }
    ],
    "significance": "Single most sensitive first-line screening test for thyroid dysfunction. Inversely proportional log-linear relationship with free T4. Overt hypothyroidism (high TSH, low fT4); overt hyperthyroidism (suppressed TSH, high fT4). Note: secondary central hypothyroidism has low/normal TSH with low fT4.",
    "significanceAr": "أدق وأول فحص لمسح أمراض الغدة الدرقية. قصور الدرقية الأولي: ارتفاع TSH مع هبوط fT4. فرط نشاط الدرقية: هبوط TSH مع ارتفاع الهرمونات. في الحمل ينخفض طبيعياً في الثلث الأول بتأثير هرمون hCG.",
    "tags": [
      "thyroid",
      "tsh",
      "endocrine",
      "hypothyroidism",
      "hyperthyroidism"
    ]
  },
  {
    "id": "free_t4",
    "name": "Free Thyroxine (Free T4 / fT4)",
    "nameAr": "الثيروكسين الحر (fT4)",
    "aliases": [
      "Free T4",
      "fT4",
      "الثيروكسين الحر"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "0.82 – 1.77",
        "unit": "ng/dL",
        "note": "10.5 – 22.8 pmol/L"
      },
      {
        "group": "Neonates (0-4 wk)",
        "value": "1.50 – 3.00",
        "unit": "ng/dL"
      },
      {
        "group": "Infants & Children",
        "value": "0.90 – 1.80",
        "unit": "ng/dL"
      },
      {
        "group": "Pregnancy (1st Trimester)",
        "value": "0.86 – 1.53",
        "unit": "ng/dL"
      },
      {
        "group": "Pregnancy (2nd Trimester)",
        "value": "0.68 – 1.23",
        "unit": "ng/dL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "0.65 – 1.15",
        "unit": "ng/dL"
      },
      {
        "group": "Critical Low",
        "value": "< 0.40",
        "unit": "ng/dL",
        "alert": "critical_low",
        "note": "Severe hypothyroidism / impending myxedema coma"
      },
      {
        "group": "Critical High",
        "value": "> 4.00",
        "unit": "ng/dL",
        "alert": "critical_high",
        "note": "Severe thyrotoxicosis / impending thyroid storm"
      }
    ],
    "significance": "Biologically active unbound fraction (~0.03% of total circulating T4). Unaffected by changes in thyroid hormone-binding globulin (TBG). Directly confirms overt hyperthyroidism or hypothyroidism.",
    "significanceAr": "الجزء الحر الفعال حيوياً (0.03% من T4 الكلي). لا يتأثر بتغيرات البروتين الحامل TBG في الحمل أو تناول موانع الحمل، ويؤكد التشخيص الصريح لأمراض الدرقية.",
    "tags": [
      "thyroid",
      "ft4",
      "endocrine"
    ]
  },
  {
    "id": "free_t3",
    "name": "Free Triiodothyronine (Free T3 / fT3)",
    "nameAr": "ثلاثي يود الثيرونين الحر (fT3)",
    "aliases": [
      "Free T3",
      "fT3",
      "ثلاثي يودوثيرونين الحر"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "2.0 – 4.4",
        "unit": "pg/mL",
        "note": "3.1 – 6.8 pmol/L"
      },
      {
        "group": "Children & Adolescents",
        "value": "2.5 – 5.2",
        "unit": "pg/mL"
      },
      {
        "group": "Elderly (>70yr)",
        "value": "1.8 – 3.8",
        "unit": "pg/mL"
      },
      {
        "group": "T3 Toxicosis Pattern",
        "value": "> 5.0",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Isolated high T3 with suppressed TSH and normal fT4"
      },
      {
        "group": "Euthyroid Sick Syndrome / Non-Thyroidal Illness",
        "value": "< 2.0",
        "unit": "pg/mL",
        "note": "Decreased 5'-deiodinase in critical illness (low T3 syndrome)"
      }
    ],
    "significance": "Biologically active active hormone, 4-5 times more potent than T4. Essential for diagnosing T3-toxicosis (hyperthyroidism with normal fT4). First hormone to drop in non-thyroidal critical illness (euthyroid sick syndrome).",
    "significanceAr": "الهرمون الأكثر فاعلية حيوية (أقوى بـ 4-5 أضعاف من T4). أساسي لتشخيص التسمم الدرقي بـ T3 مع اعتدال fT4. وأول ما ينخفض في متلازمة المريض السوي درقياً في العناية المركزة.",
    "tags": [
      "thyroid",
      "ft3",
      "euthyroid-sick"
    ]
  },
  {
    "id": "total_t4",
    "name": "Total Thyroxine (Total T4)",
    "nameAr": "الثيروكسين الكلي (T4)",
    "aliases": [
      "Total T4",
      "TT4",
      "T4"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "5.0 – 12.0",
        "unit": "µg/dL"
      },
      {
        "group": "Pregnancy (Adjusted Target: 1.5x Baseline)",
        "value": "7.5 – 18.0",
        "unit": "µg/dL",
        "note": "Elevated due to high estrogen-induced TBG synthesis"
      },
      {
        "group": "Neonates",
        "value": "10.0 – 20.0",
        "unit": "µg/dL"
      },
      {
        "group": "Children",
        "value": "6.0 – 14.0",
        "unit": "µg/dL"
      }
    ],
    "significance": "Sum of bound (>99.9%) and free T4. Heavily distorted by alterations in TBG (increased by estrogen, pregnancy, tamoxifen, viral hepatitis; decreased by androgens, nephrotic syndrome, steroids).",
    "significanceAr": "مجموع الهرمون المقترن والحر. يتأثر بشدة بتبدلات البروتين الحامل TBG؛ يرتفع بالحمل وموانع الحمل وينخفض في المتلازمة النفروزية وتناول الأندروجين.",
    "tags": [
      "thyroid",
      "total-t4",
      "tbg"
    ]
  },
  {
    "id": "total_t3",
    "name": "Total Triiodothyronine (Total T3)",
    "nameAr": "ثلاثي يود الثيرونين الكلي (T3)",
    "aliases": [
      "Total T3",
      "TT3",
      "T3"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "80 – 200",
        "unit": "ng/dL"
      },
      {
        "group": "Pregnancy (2nd & 3rd Tri)",
        "value": "120 – 300",
        "unit": "ng/dL"
      },
      {
        "group": "Children",
        "value": "100 – 240",
        "unit": "ng/dL"
      },
      {
        "group": "Elderly (>70yr)",
        "value": "70 – 170",
        "unit": "ng/dL"
      }
    ],
    "significance": "Reflects both thyroidal secretion and peripheral conversion of T4. Sensitive to TBG alterations.",
    "significanceAr": "يعكس الإفراز الدرقي والتحول المحيطي من T4. يتأثر بمستويات البروتين الحامل في الدم.",
    "tags": [
      "thyroid",
      "total-t3"
    ]
  },
  {
    "id": "reverse_t3",
    "name": "Reverse T3 (rT3)",
    "nameAr": "ثلاثي يود الثيرونين المعكوس (rT3)",
    "aliases": [
      "Reverse T3",
      "rT3"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "9.0 – 24.0",
        "unit": "ng/dL"
      },
      {
        "group": "Euthyroid Sick Syndrome / ICU Critical Illness",
        "value": "> 30.0",
        "unit": "ng/dL",
        "note": "Inner-ring deiodination of T4 upregulated in severe stress/catabolism"
      }
    ],
    "significance": "Biologically inactive metabolite produced by inner-ring deiodination of T4. Markedly elevated in euthyroid sick syndrome (non-thyroidal illness), differentiating it from true central hypothyroidism (where rT3 is low).",
    "significanceAr": "مستقلب غير فعال حيوياً يتشكل عند إزالة اليود من الحلقة الداخلية لـ T4. يرتفع بشدة في متلازمة المريض السوي درقياً في العناية، ويفرقها عن قصور النخامى.",
    "tags": [
      "thyroid",
      "rt3",
      "euthyroid-sick",
      "icu"
    ]
  },
  {
    "id": "anti_tpo_antibodies",
    "name": "Anti-Thyroid Peroxidase Antibodies (Anti-TPO)",
    "nameAr": "أضداد بيروكسيداز الدرقية (Anti-TPO)",
    "aliases": [
      "Anti-TPO",
      "TPOAb",
      "Microsomal Antibodies",
      "أجسام مضادة للدرقية"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Negative / Normal",
        "value": "< 34.0",
        "unit": "IU/mL"
      },
      {
        "group": "Borderline",
        "value": "34.0 – 50.0",
        "unit": "IU/mL"
      },
      {
        "group": "Positive (Autoimmune Thyroid Disease)",
        "value": "> 50.0",
        "unit": "IU/mL",
        "note": "Present in >95% of Hashimoto thyroiditis and ~70-80% of Graves disease"
      },
      {
        "group": "Strongly Positive",
        "value": "> 500.0",
        "unit": "IU/mL",
        "note": "Predicts rapid progression of subclinical hypothyroidism and postpartum thyroiditis"
      }
    ],
    "significance": "Diagnostic hallmark of Hashimoto thyroiditis (>95% sensitivity) and autoimmune thyroiditis. Associated with increased risk of progression from subclinical to overt hypothyroidism, miscarriage, and postpartum thyroiditis.",
    "significanceAr": "العلامة التشخيصية المميزة لالتهاب الغدة الدرقية لهاشيموتو (>95%). يرفع خطر الإجهاض والتحول السريع إلى قصور درقية صريح والتهاب الدرقية بعد الولادة.",
    "tags": [
      "thyroid",
      "autoimmune",
      "hashimoto",
      "anti-tpo"
    ]
  },
  {
    "id": "anti_tg_antibodies",
    "name": "Anti-Thyroglobulin Antibodies (Anti-TG)",
    "nameAr": "أضداد ثيروجلوبولين (Anti-TG)",
    "aliases": [
      "Anti-TG",
      "TgAb"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Negative / Normal",
        "value": "< 115.0",
        "unit": "IU/mL",
        "note": "Assay-dependent, <20-115 IU/mL"
      },
      {
        "group": "Positive (Autoimmune Thyroiditis)",
        "value": "≥ 115.0",
        "unit": "IU/mL",
        "note": "Interferes with serum Thyroglobulin (Tg) tumor marker assays causing false low Tg"
      }
    ],
    "significance": "Present in Hashimoto thyroiditis (~60-70%) and Graves (~30%). Critical: Anti-TG presence causes false-negative results in Thyroglobulin (Tg) assays used for differentiated thyroid cancer surveillance.",
    "significanceAr": "توجد في التهاب هاشيموتو. خطورتها تكمن في أنها تتداخل مخبرياً مع قياس الثيروجلوبولين (Tg) مسببة نتائج سلبية كاذبة أثناء متابعة سرطان الدرقية.",
    "tags": [
      "thyroid",
      "autoimmune",
      "thyroglobulin",
      "oncology"
    ]
  },
  {
    "id": "trab_tsi_antibodies",
    "name": "TSH Receptor Antibodies (TRAb / TSI)",
    "nameAr": "أضداد مستقبلات TSH (TRAb / TSI)",
    "aliases": [
      "TRAb",
      "TSI",
      "Thyroid-Stimulating Immunoglobulin",
      "أضداد جريفز"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Normal / Negative",
        "value": "< 1.75",
        "unit": "IU/L",
        "note": "TSI Index < 1.30 or < 0.55 IU/L"
      },
      {
        "group": "Borderline",
        "value": "1.75 – 1.99",
        "unit": "IU/L"
      },
      {
        "group": "Positive (Graves Disease Pathognomonic)",
        "value": "≥ 2.00",
        "unit": "IU/L",
        "alert": "critical_high",
        "note": "Confirms Graves disease; crosses placenta, risk for neonatal thyrotoxicosis"
      }
    ],
    "significance": "Pathognomonic antibody causing Graves disease by stimulating TSH receptor. Diagnostic specificity >98%. Monitored in pregnant women with Graves because IgG crosses placenta, predicting fetal/neonatal hyperthyroidism.",
    "significanceAr": "الضد المسبب لمرض غريفز عبر تحفيز مستقبلات TSH بالدرقية نوعيته >98%. يعبر المشيمة لدى الحوامل ويسبب التسمم الدرقي للجنين وحديث الولادة.",
    "tags": [
      "thyroid",
      "graves",
      "trab",
      "tsi",
      "autoimmune"
    ]
  },
  {
    "id": "serum_thyroglobulin",
    "name": "Serum Thyroglobulin (Tg)",
    "nameAr": "الثيروجلوبين في المصل (Tg)",
    "aliases": [
      "Thyroglobulin",
      "Tg"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Euthyroid Adults with Intact Thyroid",
        "value": "3.5 – 40.0",
        "unit": "ng/mL"
      },
      {
        "group": "Post-Thyroidectomy & RAI Target (Cured / Remission)",
        "value": "< 0.2",
        "unit": "ng/mL",
        "note": "Undetectable on ultrasensitive assay signifies complete remission"
      },
      {
        "group": "Recurrent / Metastatic Differentiated Thyroid Cancer",
        "value": "> 2.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Indicates cancer recurrence (papillary or follicular thyroid carcinoma)"
      }
    ],
    "significance": "Tumor marker for monitoring recurrence of differentiated thyroid cancer (papillary and follicular) following total thyroidectomy and radioiodine ablation. Also low in factitious thyrotoxicosis (exogenous hormone ingestion).",
    "significanceAr": "واسم ورمي أساسي لمتابعة نكس سرطانات الدرقية المتمايزة (الحليمي والجريبي) بعد الاستئصال الجراحي. ويفيد انخفاضه في كشف التسمم الدرقي المفتعل.",
    "tags": [
      "thyroid",
      "oncology",
      "thyroglobulin",
      "tumor-marker"
    ]
  },
  {
    "id": "serum_calcitonin",
    "name": "Serum Calcitonin",
    "nameAr": "الكالسيتونين في المصل",
    "aliases": [
      "Calcitonin",
      "كالسيتونين"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Adult Males Normal",
        "value": "< 8.4",
        "unit": "pg/mL"
      },
      {
        "group": "Adult Females Normal",
        "value": "< 5.0",
        "unit": "pg/mL"
      },
      {
        "group": "Suspicious for C-Cell Hyperplasia / MTC",
        "value": "10.0 – 100.0",
        "unit": "pg/mL"
      },
      {
        "group": "Medullary Thyroid Carcinoma Diagnostic",
        "value": "> 100.0",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Almost 100% positive predictive value for Medullary Thyroid Carcinoma (MTC)"
      }
    ],
    "significance": "Secreted by parafollicular C-cells of thyroid. Specific tumor marker for medullary thyroid carcinoma (MTC) and screening marker in Multiple Endocrine Neoplasia type 2 (MEN 2A/2B).",
    "significanceAr": "يفرز من خلايا C جانب الجريبية في الدرقية. الواسم الورمي النوعي لسرطان الغدة الدرقية النخاعي (MTC) ومسح متلازمة MEN 2 الوراثية.",
    "tags": [
      "thyroid",
      "oncology",
      "calcitonin",
      "mtc",
      "men2"
    ]
  },
  {
    "id": "tbg_thyroxine_binding_globulin",
    "name": "Thyroxine-Binding Globulin (TBG)",
    "nameAr": "الغلوبولين الرابط للثيروكسين (TBG)",
    "aliases": [
      "TBG"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "13.0 – 39.0",
        "unit": "µg/mL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "40.0 – 80.0",
        "unit": "µg/mL",
        "note": "Markedly elevated by estrogen stimulation of liver"
      }
    ],
    "significance": "Principal transport protein carrying ~70% of circulating T4 and T3. Elevated by estrogen, pregnancy, tamoxifen; decreased by androgens, cirrhosis, nephrotic syndrome.",
    "significanceAr": "بروتين النقل الرئيسي الذي يحمل 70% من هرمونات الدرقية. يرتفع بالإستروجين والحمل، وينخفض بالأندروجين وتشمع الكبد والمتلازمة النفروزية.",
    "tags": [
      "thyroid",
      "tbg",
      "transport"
    ]
  },
  {
    "id": "t3_uptake_thbr",
    "name": "T3 Resin Uptake (T3RU / THBR)",
    "nameAr": "التقاط الراتنج لثلاثي يود الثيرونين (T3RU)",
    "aliases": [
      "T3 Uptake",
      "T3RU",
      "THBR"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "24.0 – 35.0",
        "unit": "%"
      },
      {
        "group": "High TBG (Pregnancy, Oral Estrogen)",
        "value": "< 24.0",
        "unit": "%",
        "note": "Inversely proportional to TBG binding capacity"
      }
    ],
    "significance": "Indirect measure of unoccupied TBG binding sites. Inversely proportional to TBG concentration. Used historically with Total T4 to calculate Free Thyroxine Index (FTI).",
    "significanceAr": "مقياس غير مباشر لمواقع الارتباط الشاغرة على TBG؛ يتناسب عكساً مع تركيزه ويستخدم لحساب مؤشر الثيروكسين الحر FTI.",
    "tags": [
      "thyroid",
      "t3-uptake"
    ]
  },
  {
    "id": "free_t4_index",
    "name": "Free Thyroxine Index (FTI)",
    "nameAr": "مؤشر الثيروكسين الحر (FTI)",
    "aliases": [
      "FTI",
      "T7"
    ],
    "category": "thyroid",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "6.0 – 11.0",
        "unit": "index"
      },
      {
        "group": "Hypothyroid",
        "value": "< 6.0",
        "unit": "index"
      },
      {
        "group": "Hyperthyroid",
        "value": "> 11.0",
        "unit": "index"
      }
    ],
    "significance": "Calculated as Total T4 x T3 Resin Uptake / 100. Corrects for TBG abnormalities before direct immunoassay for free T4 became ubiquitous.",
    "significanceAr": "حاصل ضرب T4 الكلي في نسبة T3RU. يعوض انحرافات TBG قبل انتشار المعايرات المناعية المباشرة.",
    "tags": [
      "thyroid",
      "fti"
    ]
  },
  {
    "id": "cortisol_am_0800",
    "name": "Morning Serum Cortisol (08:00 AM)",
    "nameAr": "كورتيزول الصباح في المصل (الساعة 8 صباحاً)",
    "aliases": [
      "Cortisol AM",
      "Morning Cortisol",
      "كورتيزول الصباح"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults (08:00 AM Peak)",
        "value": "7.0 – 25.0",
        "unit": "µg/dL",
        "note": "193 – 690 nmol/L"
      },
      {
        "group": "Rule-Out Adrenal Insufficiency",
        "value": "> 15.0",
        "unit": "µg/dL",
        "note": "Morning baseline >15 µg/dL virtually excludes primary adrenal insufficiency"
      },
      {
        "group": "Severe Primary Adrenal Insufficiency (Addisonian Crisis Concern)",
        "value": "< 3.0",
        "unit": "µg/dL",
        "alert": "critical_low",
        "note": "Strongly diagnostic of adrenal insufficiency; give IV hydrocortisone immediately if in crisis"
      },
      {
        "group": "Equivocal / Indeterminate Gray Zone",
        "value": "3.0 – 14.0",
        "unit": "µg/dL",
        "note": "Mandates standard Cosyntropin (ACTH) stimulation test"
      },
      {
        "group": "Acute Physiological Stress / Sepsis Response",
        "value": "> 25.0 – 40.0",
        "unit": "µg/dL"
      },
      {
        "group": "Cushing Syndrome Screening (Loss of Diurnal Rhythm)",
        "value": "> 25.0 without stress",
        "unit": "µg/dL"
      }
    ],
    "significance": "Principal glucocorticoid from adrenal zona fasciculata. Strict diurnal rhythm: peaks at 08:00 AM and reaches nadir at midnight. Primary adrenal insufficiency (Addison disease) presents with low morning cortisol (<3-5 µg/dL) and high ACTH. Acute crisis is a medical emergency.",
    "significanceAr": "الهرمون السكري الرئيسي من قشر الكظر. يبلغ ذروته في 8 صباحاً وقاعه في منتصف الليل. هبوطه دون 3 صباحاً يثبت قصور الكظر (داء أديسون) وتتطلب الأزمة الكظرية هيدروكورتيزون وريدي فوراً.",
    "tags": [
      "adrenal",
      "cortisol",
      "addison",
      "cushing",
      "stress"
    ]
  },
  {
    "id": "cortisol_pm_1600",
    "name": "Afternoon Serum Cortisol (16:00 PM)",
    "nameAr": "كورتيزول المساء في المصل (الساعة 4 عصراً)",
    "aliases": [
      "Cortisol PM",
      "Afternoon Cortisol"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults (16:00 PM)",
        "value": "3.0 – 16.0",
        "unit": "µg/dL",
        "note": "Roughly 50% of the morning peak"
      },
      {
        "group": "Loss of Diurnal Variation (Cushing Syndrome)",
        "value": "> 12.0 – 15.0",
        "unit": "µg/dL",
        "note": "Failure to demonstrate afternoon / evening decline"
      }
    ],
    "significance": "Normally declines to approximately half the morning peak. Loss of diurnal variation is an early sign of hypercortisolemia (Cushing syndrome).",
    "significanceAr": "ينخفض طبيعياً في المساء إلى نصف قيمة الصباح؛ واختفاء هذا التراجع المسائي علامة مبكرة لمتلازمة كوشينغ.",
    "tags": [
      "adrenal",
      "cortisol-pm",
      "diurnal-rhythm"
    ]
  },
  {
    "id": "midnight_salivary_cortisol",
    "name": "Late-Night Salivary Cortisol (Midnight)",
    "nameAr": "كورتيزول اللعاب في منتصف الليل",
    "aliases": [
      "Midnight Salivary Cortisol",
      "Salivary Cortisol"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults (Physiologic Nadir)",
        "value": "< 0.10",
        "unit": "µg/dL",
        "note": "< 2.8 nmol/L"
      },
      {
        "group": "Borderline / Repeat",
        "value": "0.10 – 0.15",
        "unit": "µg/dL"
      },
      {
        "group": "Positive for Cushing Syndrome",
        "value": "> 0.15",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "> 4.0 nmol/L on two separate nights confirms loss of diurnal nadir in Cushing syndrome"
      }
    ],
    "significance": "First-line screening test for Cushing syndrome. Measures free biologically active cortisol (saliva is independent of flow rate and CBG binding protein). Two separate midnight collections >0.15 µg/dL confirms hypercortisolism.",
    "significanceAr": "فحص المسح الأول لمتلازمة كوشينغ. يقيس الكورتيزول الحر في اللعاب منتصف الليل. إيجابيته في ليلتين منفصلتين (>0.15 ميكروغرام) تثبت غياب القاع الطبيعي وإفراز الكورتيزول المفرط.",
    "tags": [
      "adrenal",
      "cushing",
      "salivary-cortisol",
      "screening"
    ]
  },
  {
    "id": "acth_plasma_morning",
    "name": "Plasma ACTH (Adrenocorticotropic Hormone 08:00 AM)",
    "nameAr": "الهرمون الموجه لقشر الكظر في البلازما (ACTH صباحاً)",
    "aliases": [
      "ACTH",
      "Corticotropin",
      "هرمون ACTH"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Morning Adults (08:00 AM)",
        "value": "7.2 – 63.3",
        "unit": "pg/mL",
        "note": "1.6 – 13.9 pmol/L"
      },
      {
        "group": "Primary Adrenal Insufficiency (Addison Disease)",
        "value": "> 100 – 1000",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Markedly elevated ACTH due to absent adrenal negative feedback; causes cutaneous hyperpigmentation"
      },
      {
        "group": "Secondary / Central Adrenal Insufficiency (Pituitary)",
        "value": "< 10.0 with low cortisol",
        "unit": "pg/mL",
        "note": "Inappropriately low ACTH failure"
      },
      {
        "group": "ACTH-Independent Cushing (Adrenal Adenoma / Carcinoma)",
        "value": "< 5.0",
        "unit": "pg/mL",
        "note": "Suppressed ACTH by autonomous adrenal cortisol hypersecretion"
      },
      {
        "group": "Cushing Disease (Pituitary ACTH Adenoma)",
        "value": "20.0 – 150.0",
        "unit": "pg/mL",
        "note": "Normal to moderately elevated ACTH (inappropriate for high cortisol)"
      },
      {
        "group": "Ectopic ACTH Syndrome (SCLC / Carcinoid)",
        "value": "> 150 – 500",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Extremely high ACTH levels with severe hypokalemic alkalosis and rapid hyperpigmentation"
      }
    ],
    "significance": "Anterior pituitary peptide stimulating adrenal glucocorticoids. Essential for differentiating primary from secondary adrenal insufficiency, and ACTH-dependent (Cushing disease, ectopic ACTH) from ACTH-independent (adrenal tumor) Cushing syndrome. Extremely labile: collect on ice in pre-chilled EDTA tube, centrifuge cold immediately.",
    "significanceAr": "الهرمون النخامي المنشط للكظر. يرتفع جداً في أديسون مسبباً التصبغات الجلدية، ويهبط في أورام الكظر المفرزة للكورتيزول. يرتفع بشدة (>150) في متلازمة إفراز ACTH الهاجر (سرطان الرئة). أنبوب مثلج فوراً.",
    "tags": [
      "adrenal",
      "acth",
      "pituitary",
      "addison",
      "cushing"
    ]
  },
  {
    "id": "ufc_24h_urine_free_cortisol",
    "name": "24-Hour Urine Free Cortisol (UFC)",
    "nameAr": "الكورتيزول الحر في بول 24 ساعة (UFC)",
    "aliases": [
      "UFC",
      "24h Urine Cortisol",
      "كورتيزول البول"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 50",
        "unit": "µg/24h",
        "note": "< 138 nmol/day"
      },
      {
        "group": "Equivocal / Mild Hypercortisolemia",
        "value": "50 – 150",
        "unit": "µg/24h"
      },
      {
        "group": "Cushing Syndrome Diagnostic (>3-4x ULN)",
        "value": "> 200 – 250",
        "unit": "µg/24h",
        "alert": "critical_high",
        "note": "Exceeding 3-4 times upper limit of normal is virtually diagnostic of Cushing syndrome"
      }
    ],
    "significance": "First-line screening test for Cushing syndrome. Measures unbound filtration of cortisol into urine over a complete 24-hour cycle. Values exceeding 3-4 times the upper limit of normal (>150-200 µg/day) are diagnostic of Cushing syndrome.",
    "significanceAr": "فحص مسحي أساسي لمتلازمة كوشينغ في بول 24 ساعة. عندما تتجاوز القيمة 3-4 أضعاف الحد الأعلى (>200 ميكروغرام/يوم) تثبت تشخيص متلازمة كوشينغ.",
    "tags": [
      "adrenal",
      "ufc",
      "cushing",
      "screening"
    ]
  },
  {
    "id": "dst_overnight_1mg",
    "name": "Overnight 1mg Dexamethasone Suppression Test",
    "nameAr": "فحص تثبيط الديكساميثازون الليلي (1 مجم)",
    "aliases": [
      "1mg DST",
      "Overnight DST",
      "فحص الديكساميثازون"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Intact Suppression (08:00 AM Cortisol)",
        "value": "< 1.8",
        "unit": "µg/dL",
        "note": "< 50 nmol/L excludes Cushing syndrome with >95% sensitivity"
      },
      {
        "group": "Abnormal / Failure of Suppression",
        "value": "≥ 1.8",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "Confirms hypercortisolemia; warrants secondary confirmatory tests"
      }
    ],
    "significance": "Patient takes 1mg dexamethasone orally at 23:00 PM; serum cortisol is measured at 08:00 AM next morning. Normal suppression below 1.8 µg/dL (50 nmol/L) excludes Cushing syndrome. False positives occur with CYP3A4 inducers (phenytoin, carbamazepine) and oral estrogens.",
    "significanceAr": "يتناول المريض 1 مجم ديكساميثازون الساعة 11 مساءً ويقاس كورتيزول المصل الساعة 8 صباحاً. هبوطه دون 1.8 ميكروغرام ينفي متلازمة كوشينغ بدقة 95%.",
    "tags": [
      "adrenal",
      "cushing",
      "dst",
      "screening"
    ]
  },
  {
    "id": "low_dose_dst_2day",
    "name": "Low-Dose 2-Day Dexamethasone Suppression Test",
    "nameAr": "فحص تثبيط الديكساميثازون بجرعة منخفضة (يومان)",
    "aliases": [
      "2-Day DST",
      "Low-Dose DST"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Suppression (Serum Cortisol at 48h)",
        "value": "< 1.8",
        "unit": "µg/dL"
      },
      {
        "group": "Failure to Suppress (Cushing Syndrome)",
        "value": "≥ 1.8",
        "unit": "µg/dL",
        "note": "Confirms autonomous hypercortisolism"
      }
    ],
    "significance": "0.5mg dexamethasone orally every 6 hours for 48 hours. Serum cortisol <1.8 µg/dL at 48 hours excludes Cushing syndrome with high specificity.",
    "significanceAr": "0.5 مجم ديكساميثازون كل 6 ساعات لمدة يومين. يفيد في تأكيد متلازمة كوشينغ بدقة نوعية عالية.",
    "tags": [
      "adrenal",
      "cushing",
      "dst"
    ]
  },
  {
    "id": "high_dose_dst_8mg",
    "name": "High-Dose 8mg Dexamethasone Suppression Test",
    "nameAr": "فحص تثبيط الديكساميثازون بجرعة عالية (8 مجم)",
    "aliases": [
      "8mg DST",
      "High-Dose DST"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Cushing Disease Pattern (Pituitary Adenoma)",
        "value": "> 50% suppression of baseline cortisol",
        "unit": "% suppression",
        "note": "Pituitary adenoma retains partial negative feedback responsiveness to high-dose steroids"
      },
      {
        "group": "Ectopic ACTH / Adrenal Cortical Tumor Pattern",
        "value": "< 50% suppression (Failure to suppress)",
        "unit": "% suppression",
        "note": "Autonomous production completely resistant to negative feedback"
      }
    ],
    "significance": "Differentiates pituitary Cushing disease (suppresses by >50% because pituitary adenoma retains partial responsiveness to high steroid doses) from ectopic ACTH or adrenal tumors (which do not suppress).",
    "significanceAr": "يفرق بين داء كوشينغ النخامي (يتثبط بأكثر من 50% لكون ورم النخامى يستجيب جزئياً للجرعات العالية) ومتلازمة ACTH الهاجر أو أورام الكظر (لا تتثبط إطلاقاً).",
    "tags": [
      "adrenal",
      "cushing-disease",
      "pituitary",
      "ectopic-acth"
    ]
  },
  {
    "id": "aldosterone_plasma_upright",
    "name": "Plasma Aldosterone Concentration (PAC - Upright)",
    "nameAr": "تركيز الألدوستيرون في البلازما (PAC - وضعية الوقوف)",
    "aliases": [
      "PAC Upright",
      "Aldosterone",
      "ألدوستيرون"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults Upright (Standing ≥2h)",
        "value": "4.0 – 31.0",
        "unit": "ng/dL",
        "note": "111 – 860 pmol/L"
      },
      {
        "group": "Primary Aldosteronism Screening Threshold",
        "value": "> 15.0 – 20.0",
        "unit": "ng/dL",
        "note": "Coupled with suppressed renin for ARR calculation"
      },
      {
        "group": "Severe Conn Syndrome (Adrenal Adenoma)",
        "value": "> 30.0",
        "unit": "ng/dL",
        "alert": "critical_high"
      }
    ],
    "significance": "Mineralocorticoid from adrenal zona glomerulosa. Promotes sodium reabsorption and potassium/hydrogen excretion in distal nephron. Autonomous hypersecretion (Conn syndrome) causes resistant hypertension and hypokalemia.",
    "significanceAr": "الهرمون المعدني الرئيسي من قشر الكظر؛ يحبس الصوديوم ويطرح البوتاسيوم. فرط إفرازه الأولي (متلازمة كون) يسبب ارتفاع ضغط الدم المعند ونقص البوتاسيوم.",
    "tags": [
      "adrenal",
      "aldosterone",
      "conn-syndrome",
      "hypertension"
    ]
  },
  {
    "id": "aldosterone_plasma_supine",
    "name": "Plasma Aldosterone Concentration (PAC - Supine)",
    "nameAr": "تركيز الألدوستيرون في البلازما (وضعية الاستلقاء)",
    "aliases": [
      "PAC Supine"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults Supine",
        "value": "1.0 – 16.0",
        "unit": "ng/dL"
      },
      {
        "group": "Elevated Supine",
        "value": "> 16.0",
        "unit": "ng/dL"
      }
    ],
    "significance": "Drawn after lying flat for ≥30-60 minutes to eliminate gravitational renin-angiotensin activation.",
    "significanceAr": "يسحب بعد الاستلقاء لنصف ساعة إلى ساعة لعزل تأثير الجاذبية على محور الرينين.",
    "tags": [
      "adrenal",
      "aldosterone"
    ]
  },
  {
    "id": "plasma_renin_activity",
    "name": "Plasma Renin Activity (PRA)",
    "nameAr": "فعالية الرينين في البلازما (PRA)",
    "aliases": [
      "PRA",
      "Renin Activity",
      "رينين"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults Upright (Standing)",
        "value": "0.6 – 4.4",
        "unit": "ng/mL/h"
      },
      {
        "group": "Normal Adults Supine",
        "value": "0.2 – 1.6",
        "unit": "ng/mL/h"
      },
      {
        "group": "Suppressed (Primary Hyperaldosteronism)",
        "value": "< 0.6",
        "unit": "ng/mL/h",
        "note": "Hallmark of volume expansion and autonomous mineralocorticoid excess"
      },
      {
        "group": "Renovascular Hypertension / Secondary Hyperaldosteronism",
        "value": "> 5.0 – 10.0",
        "unit": "ng/mL/h",
        "alert": "critical_high",
        "note": "Renal artery stenosis triggering massive renin release"
      }
    ],
    "significance": "Measures enzymatic generation of angiotensin I. Suppressed (<0.6 ng/mL/h) in primary aldosteronism. Elevated in renovascular hypertension (renal artery stenosis) and secondary hyperaldosteronism (CHF, cirrhosis).",
    "significanceAr": "يقيس سرعة توليد الأنجيوتنسين 1. يثبط (<0.6) في فرط الألدوستيرون الأولي، ويرتفع بشدة في تضيق الشريان الكلوي وقصور القلب.",
    "tags": [
      "adrenal",
      "renin",
      "pra",
      "hypertension",
      "renal-artery-stenosis"
    ]
  },
  {
    "id": "direct_renin_concentration",
    "name": "Direct Renin Concentration (DRC)",
    "nameAr": "تركيز الرينين المباشر (DRC)",
    "aliases": [
      "DRC",
      "Plasma Renin Mass"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults Upright",
        "value": "4.4 – 46.0",
        "unit": "µIU/mL",
        "note": "2.7 – 27.6 pg/mL"
      },
      {
        "group": "Suppressed (Primary Aldosteronism)",
        "value": "< 5.0",
        "unit": "µIU/mL"
      }
    ],
    "significance": "Direct immunoassay quantifying renin protein mass instead of enzymatic activity. Increasingly used instead of PRA.",
    "significanceAr": "معايرة مناعية مباشرة لكمية بروتين الرينين كبديل لـ PRA.",
    "tags": [
      "adrenal",
      "drc",
      "renin"
    ]
  },
  {
    "id": "aldosterone_renin_ratio_arr",
    "name": "Aldosterone-to-Renin Ratio (ARR)",
    "nameAr": "نسبة الألدوستيرون إلى الرينين (ARR)",
    "aliases": [
      "ARR",
      "Aldo/Renin Ratio",
      "نسبة الألدوستيرون للرينين"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 20.0",
        "unit": "ratio (PAC in ng/dL : PRA in ng/mL/h)"
      },
      {
        "group": "Positive Screening for Primary Aldosteronism",
        "value": "≥ 20.0 – 30.0 with PAC > 15 ng/dL",
        "unit": "ratio",
        "alert": "critical_high",
        "note": "High sensitivity screening test for Conn syndrome / bilateral adrenal hyperplasia; proceed to confirmatory salt loading test"
      }
    ],
    "significance": "Single most reliable screening tool for primary aldosteronism in hypertensive patients. Both ARR ≥20-30 AND plasma aldosterone >15 ng/dL are required for a positive screen. Spironolactone and eplerenone must be discontinued for ≥4-6 weeks before testing.",
    "significanceAr": "أدق فحص مسحي لتشخيص متلازمة كون لمرضى ضغط الدم. النتيجة الإيجابية تتطلب ARR ≥20-30 مع ألدوستيرون >15 نانوغرام. يجب إيقاف السبيرونولاكتون قبل 4-6 أسابيع من التحليل.",
    "tags": [
      "adrenal",
      "arr",
      "primary-aldosteronism",
      "hypertension",
      "conn"
    ]
  },
  {
    "id": "deoxycortisol_11",
    "name": "11-Deoxycortisol",
    "nameAr": "11-ديوكسي كورتيزول",
    "aliases": [
      "11-Deoxycortisol",
      "Compound S"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 1.0",
        "unit": "µg/dL"
      },
      {
        "group": "11-Beta-Hydroxylase Deficiency CAH",
        "value": "> 10.0",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "Causes CAH with severe hypertension due to DOC accumulation (unlike 21-OH deficiency)"
      },
      {
        "group": "Post-Metyrapone Testing Response",
        "value": "> 7.0",
        "unit": "µg/dL",
        "note": "Confirms intact pituitary ACTH reserve"
      }
    ],
    "significance": "Substrate for 11-beta-hydroxylase (CYP11B1). Markedly elevated in 11-beta-hydroxylase deficiency CAH, which uniquely presents with hypertension (due to 11-deoxycorticosterone DOC accumulation) and virilization. Also measured in the metyrapone stimulation test.",
    "significanceAr": "يرتفع بشكل نوعي في تضخم الكظر الوراثي بنقص أنزيم 11-بيتا-هيدروكسيلاز، ويتميز عن نقص 21-هيدروكسيلاز بحدوث ارتفاع ضغط دم شديد مع الاسترجال.",
    "tags": [
      "adrenal",
      "cah",
      "hypertension",
      "deoxycortisol"
    ]
  },
  {
    "id": "plasma_epinephrine",
    "name": "Plasma Free Epinephrine (Adrenaline)",
    "nameAr": "الأدرينالين الحر في البلازما (الإبينفرين)",
    "aliases": [
      "Epinephrine",
      "Adrenaline",
      "أدرينالين"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Resting Supine (Indwelling Catheter)",
        "value": "< 50",
        "unit": "pg/mL"
      },
      {
        "group": "Acute Stress / Exercise",
        "value": "100 – 300",
        "unit": "pg/mL"
      },
      {
        "group": "Pheochromocytoma Suggestive",
        "value": "> 400",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Must be drawn from resting supine patient via indwelling venous line in place for 30 min"
      }
    ],
    "significance": "Catecholamine from adrenal medulla. Very short half-life (~2 min). Episodic paroxysmal surges occur in pheochromocytoma.",
    "significanceAr": "كاتيكولامين من لب الكظر عمره النصفي دقيقتان فقط. يفرز بهجمات في ورم القواتم (Pheochromocytoma) مسبباً صداعاً وخفقاناً وتعرقاً وارتفاع ضغط مفاجئ.",
    "tags": [
      "adrenal",
      "epinephrine",
      "pheochromocytoma",
      "catecholamines"
    ]
  },
  {
    "id": "plasma_norepinephrine",
    "name": "Plasma Free Norepinephrine (Noradrenaline)",
    "nameAr": "النورأدرينالين الحر في البلازما (النورإبينفرين)",
    "aliases": [
      "Norepinephrine",
      "Noradrenaline",
      "نورأدرينالين"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Resting Supine Adults",
        "value": "70 – 750",
        "unit": "pg/mL"
      },
      {
        "group": "Upright / Active",
        "value": "200 – 1100",
        "unit": "pg/mL"
      },
      {
        "group": "Pheochromocytoma Diagnostic Suspicion",
        "value": "> 2000",
        "unit": "pg/mL",
        "alert": "critical_high"
      }
    ],
    "significance": "Primary neurotransmitter of sympathetic postganglionic fibers and adrenal medulla. Markedly elevated in pheochromocytoma and paraganglioma.",
    "significanceAr": "الناقل العصبي الرئيسي للجهاز الودي ولب الكظر. يرتفع بشدة في ورم القواتم وأورام جنيب العقد العصبية.",
    "tags": [
      "adrenal",
      "norepinephrine",
      "pheochromocytoma"
    ]
  },
  {
    "id": "plasma_dopamine",
    "name": "Plasma Free Dopamine",
    "nameAr": "الدوبامين الحر في البلازما",
    "aliases": [
      "Dopamine",
      "دوبامين"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Resting Adults",
        "value": "< 30",
        "unit": "pg/mL"
      },
      {
        "group": "Elevated (Dopamine-Secreting Paraganglioma / Neuroblastoma)",
        "value": "> 100",
        "unit": "pg/mL",
        "alert": "critical_high"
      }
    ],
    "significance": "Catecholamine precursor. Elevated in dopamine-secreting paragangliomas and pediatric neuroblastomas.",
    "significanceAr": "طليعة الكاتيكولامينات؛ يرتفع في أورام الأرومة العصبية عند الأطفال (Neuroblastoma).",
    "tags": [
      "adrenal",
      "dopamine",
      "neuroblastoma"
    ]
  },
  {
    "id": "plasma_free_metanephrines",
    "name": "Plasma Free Fractionated Metanephrines",
    "nameAr": "الميتانيفرينات الحرة المجزأة في البلازما",
    "aliases": [
      "Plasma Metanephrines",
      "Free Metanephrines"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Free Metanephrine Normal",
        "value": "< 0.50",
        "unit": "nmol/L",
        "note": "< 99 pg/mL"
      },
      {
        "group": "Free Normetanephrine Normal",
        "value": "< 0.90",
        "unit": "nmol/L",
        "note": "< 165 pg/mL"
      },
      {
        "group": "Pheochromocytoma Highly Likely (>3-4x ULN)",
        "value": "> 2.0 Metanephrine or > 3.6 Normetanephrine",
        "unit": "nmol/L",
        "alert": "critical_high",
        "note": "Exquisite sensitivity (>97%) for pheochromocytoma"
      }
    ],
    "significance": "Single most sensitive test (>97-99% sensitivity) for ruling out pheochromocytoma and paraganglioma. Produced continuously inside tumor cells by COMT independently of catecholamine exocytosis.",
    "significanceAr": "الفحص الأكثر حساسية على الإطلاق (>97%) لنفي أو تأكيد ورم القواتم. ينتج باستمرار داخل الخلايا الورمية بمعزل عن نوبات إفراز الأدرينالين.",
    "tags": [
      "adrenal",
      "pheochromocytoma",
      "metanephrines",
      "paraganglioma"
    ]
  },
  {
    "id": "urine_metanephrines_24h",
    "name": "24-Hour Urine Fractionated Metanephrines",
    "nameAr": "الميتانيفرينات المجزأة في بول 24 ساعة",
    "aliases": [
      "24h Urine Metanephrines",
      "ميتانيفرين البول"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normetanephrine 24h",
        "value": "120 – 450",
        "unit": "µg/24h"
      },
      {
        "group": "Metanephrine 24h",
        "value": "60 – 280",
        "unit": "µg/24h"
      },
      {
        "group": "Total Metanephrines 24h",
        "value": "180 – 700",
        "unit": "µg/24h"
      },
      {
        "group": "Diagnostic for Pheochromocytoma (>2x ULN)",
        "value": "> 1000",
        "unit": "µg/24h",
        "alert": "critical_high",
        "note": "High specificity confirmatory test for pheochromocytoma"
      }
    ],
    "significance": "High specificity test for confirming pheochromocytoma. Collected with acid preservative (HCl) in dark container.",
    "significanceAr": "فحص عالي النوعية لتأكيد ورم القواتم في بول 24 ساعة مجموعاً مع حمض الهيدروكلوريك الحافظ.",
    "tags": [
      "adrenal",
      "pheochromocytoma",
      "urine-metanephrines"
    ]
  },
  {
    "id": "urine_catecholamines_24h",
    "name": "24-Hour Urine Free Catecholamines",
    "nameAr": "الكاتيكولامينات الحرة في بول 24 ساعة",
    "aliases": [
      "24h Urine Catecholamines"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Free Epinephrine 24h",
        "value": "< 20",
        "unit": "µg/24h"
      },
      {
        "group": "Free Norepinephrine 24h",
        "value": "15 – 100",
        "unit": "µg/24h"
      },
      {
        "group": "Free Dopamine 24h",
        "value": "65 – 400",
        "unit": "µg/24h"
      },
      {
        "group": "Pheochromocytoma Diagnostic",
        "value": "> 250",
        "unit": "µg/24h",
        "alert": "critical_high"
      }
    ],
    "significance": "Measures unmetabolized catecholamines excreted in urine. Complements metanephrine assays in pheochromocytoma workup.",
    "significanceAr": "يقيس الكاتيكولامينات الحرة غير المستقلبة في بول 24 ساعة.",
    "tags": [
      "adrenal",
      "catecholamines",
      "pheochromocytoma"
    ]
  },
  {
    "id": "urine_vma_24h",
    "name": "24-Hour Urine Vanillylmandelic Acid (VMA)",
    "nameAr": "حمض الفانيليل مانديليك في بول 24 ساعة (VMA)",
    "aliases": [
      "VMA",
      "Vanillylmandelic Acid"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 6.8",
        "unit": "mg/24h",
        "note": "< 35 µmol/24h"
      },
      {
        "group": "Pheochromocytoma / Neuroblastoma",
        "value": "> 10.0",
        "unit": "mg/24h",
        "alert": "critical_high",
        "note": "Dietary restrictions required: avoid coffee, tea, chocolate, bananas, vanilla for 48h prior"
      }
    ],
    "significance": "End-stage metabolite of epinephrine and norepinephrine. Elevated in pheochromocytoma and neuroblastoma. Requires strict dietary restriction (avoid vanilla, bananas, chocolate, tea, coffee) before collection.",
    "significanceAr": "الناتج الاستقلابي النهائي للأدرينالين والنورأدرينالين. يرتفع في ورم القواتم والورم الأرومي العصبي. يتطلب حمية صارمة تتجنب الفانيليا والشوكولا والموز والقهوة.",
    "tags": [
      "adrenal",
      "vma",
      "neuroblastoma",
      "pheochromocytoma"
    ]
  },
  {
    "id": "urine_hva_24h",
    "name": "24-Hour Urine Homovanillic Acid (HVA)",
    "nameAr": "حمض الهوموفانيليك في بول 24 ساعة (HVA)",
    "aliases": [
      "HVA",
      "Homovanillic Acid"
    ],
    "category": "adrenal",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 8.0",
        "unit": "mg/24h"
      },
      {
        "group": "Children (Age-dependent Ratio to Creatinine)",
        "value": "< 15",
        "unit": "mg/g Cr"
      },
      {
        "group": "Neuroblastoma Diagnostic",
        "value": "> 20.0",
        "unit": "mg/24h",
        "alert": "critical_high",
        "note": "Combined with VMA detects >90% of pediatric neuroblastomas"
      }
    ],
    "significance": "Major terminal metabolite of dopamine. Elevated in pediatric neuroblastoma, ganglioneuroblastoma, and pheochromocytoma. Combined HVA and VMA testing detects >90% of neuroblastomas.",
    "significanceAr": "الناتج الاستقلابي النهائي للدوبامين. الفحص المشخص لسرطان الأرومة العصبية عند الأطفال (Neuroblastoma) بنسبة دقة تفوق 90% عند دمجه مع VMA.",
    "tags": [
      "adrenal",
      "hva",
      "neuroblastoma",
      "pediatric-oncology"
    ]
  },
  {
    "id": "fsh_follicle_stimulating",
    "name": "Follicle-Stimulating Hormone (FSH)",
    "nameAr": "الهرمون المنبه للجريب (FSH)",
    "aliases": [
      "FSH",
      "Follicle Stimulating Hormone",
      "هرمون FSH"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "1.5 – 12.4",
        "unit": "mIU/mL"
      },
      {
        "group": "Females Follicular Phase",
        "value": "3.5 – 12.5",
        "unit": "mIU/mL"
      },
      {
        "group": "Females Ovulatory Peak",
        "value": "4.7 – 21.5",
        "unit": "mIU/mL"
      },
      {
        "group": "Females Luteal Phase",
        "value": "1.7 – 7.7",
        "unit": "mIU/mL"
      },
      {
        "group": "Postmenopausal Females",
        "value": "25.8 – 134.8",
        "unit": "mIU/mL",
        "note": "High FSH with low estradiol confirms permanent ovarian senescence"
      },
      {
        "group": "Primary Ovarian Insufficiency (Premature Menopause <40yr)",
        "value": "> 40.0",
        "unit": "mIU/mL",
        "alert": "critical_high",
        "note": "Two elevated values >4 weeks apart confirms POI"
      },
      {
        "group": "Prepubertal Children (<8yr)",
        "value": "< 1.0",
        "unit": "mIU/mL"
      },
      {
        "group": "Hypogonadotropic Hypogonadism (Central / Pituitary)",
        "value": "Inappropriately Low / Normal (< 2.0)",
        "unit": "mIU/mL",
        "note": "Low FSH/LH with low gonadal steroids"
      }
    ],
    "significance": "Gonadotropin from anterior pituitary. Stimulates gametogenesis (Sertoli cells in males, granulosa cells in females). Hypergonadotropic hypogonadism (Klinefelter, Turner, POI) shows markedly elevated FSH due to absent negative feedback.",
    "significanceAr": "هرمون نخامي ينبه تكوين النطاف والبويضات. يرتفع جداً في قصور الغدد التناسلية الأولي (متلازمة كلاينفلتر، تيرنر، سن اليأس المبكر) لغياب التلقيم الراجع السلبي.",
    "tags": [
      "hormones",
      "fsh",
      "fertility",
      "ovary",
      "pituitary"
    ]
  },
  {
    "id": "lh_luteinizing_hormone",
    "name": "Luteinizing Hormone (LH)",
    "nameAr": "الهرمون الملوتن (LH)",
    "aliases": [
      "LH",
      "Luteinizing Hormone",
      "هرمون الإباضة"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "1.7 – 8.6",
        "unit": "mIU/mL"
      },
      {
        "group": "Females Follicular Phase",
        "value": "2.4 – 12.6",
        "unit": "mIU/mL"
      },
      {
        "group": "Females Midcycle Ovulatory Surge",
        "value": "14.0 – 95.6",
        "unit": "mIU/mL",
        "note": "Triggers follicular rupture and ovulation within 24-36 hours"
      },
      {
        "group": "Females Luteal Phase",
        "value": "1.0 – 11.4",
        "unit": "mIU/mL"
      },
      {
        "group": "Postmenopausal Females",
        "value": "15.0 – 62.0",
        "unit": "mIU/mL"
      },
      {
        "group": "LH:FSH Ratio in PCOS",
        "value": "> 2:1 to 3:1",
        "unit": "ratio",
        "note": "Classic neuroendocrine hallmark in ~60-70% of Polycystic Ovary Syndrome"
      },
      {
        "group": "Prepubertal Children",
        "value": "< 0.3",
        "unit": "mIU/mL"
      },
      {
        "group": "Central Precocious Puberty Cutoff (GnRH Stimulated)",
        "value": "> 5.0",
        "unit": "mIU/mL",
        "note": "Confirms pubertal activation of hypothalamic-pituitary-gonadal axis"
      }
    ],
    "significance": "Triggers ovulation and corpus luteum formation in females; stimulates testosterone synthesis by Leydig cells in males. Midcycle LH surge predicts ovulation within 24-36 hours.",
    "significanceAr": "يحفز إفراز التستوستيرون في الذكور ويفجر الجريب مسبباً الإباضة في الإناث خلال 24-36 ساعة من ذروته. ارتفاع نسبة LH:FSH (>2-3:1) علامة لتكيس المبايض.",
    "tags": [
      "hormones",
      "lh",
      "ovulation",
      "pcos",
      "fertility"
    ]
  },
  {
    "id": "estradiol_e2",
    "name": "Estradiol (17-Beta Estradiol / E2)",
    "nameAr": "الإستراديول (17-بيتا إستراديول / E2)",
    "aliases": [
      "Estradiol",
      "E2",
      "Estrogen",
      "هرمون الأنوثة"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "10 – 40",
        "unit": "pg/mL"
      },
      {
        "group": "Females Early Follicular (Day 2-4)",
        "value": "25 – 75",
        "unit": "pg/mL",
        "note": "Baseline ovarian reserve marker (<50 pg/mL optimal)"
      },
      {
        "group": "Females Late Follicular (Preovulatory Peak)",
        "value": "150 – 400",
        "unit": "pg/mL",
        "note": "Each mature follicle produces ~200-300 pg/mL"
      },
      {
        "group": "Females Luteal Phase",
        "value": "50 – 200",
        "unit": "pg/mL"
      },
      {
        "group": "Postmenopausal Females (Without HRT)",
        "value": "< 10 – 20",
        "unit": "pg/mL"
      },
      {
        "group": "Pregnancy (1st Trimester)",
        "value": "180 – 4000",
        "unit": "pg/mL"
      },
      {
        "group": "Pregnancy (2nd Trimester)",
        "value": "1000 – 16000",
        "unit": "pg/mL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "5000 – 30000",
        "unit": "pg/mL"
      },
      {
        "group": "Prepubertal Girls",
        "value": "< 10",
        "unit": "pg/mL"
      },
      {
        "group": "OHSS Risk in IVF (Ovarian Hyperstimulation)",
        "value": "> 3500 – 4000",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Extreme risk of severe Ovarian Hyperstimulation Syndrome; withhold hCG trigger"
      }
    ],
    "significance": "Most potent natural estrogen. Essential for secondary female sexual characteristics, endometrial proliferation, and bone density maintenance. Monitored closely during IVF ovarian stimulation (values >3500-4000 pg/mL warn of severe Ovarian Hyperstimulation Syndrome - OHSS).",
    "significanceAr": "أقوى أشكال الإستروجين الطبيعية. أساسي لبطانة الرحم وكثافة العظام. مراقبته جوهرية في أطفال الأنابيب؛ حيث تنذر قيمه العالية جداً (>3500) بخطر متلازمة فرط تنشيط المبايض الخطيرة OHSS.",
    "tags": [
      "hormones",
      "estradiol",
      "estrogen",
      "fertility",
      "ivf",
      "ohss"
    ]
  },
  {
    "id": "estrone_e1",
    "name": "Estrone (E1)",
    "nameAr": "الإسترون (E1)",
    "aliases": [
      "Estrone",
      "E1"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "15 – 65",
        "unit": "pg/mL"
      },
      {
        "group": "Premenopausal Females",
        "value": "30 – 150",
        "unit": "pg/mL"
      },
      {
        "group": "Postmenopausal Females",
        "value": "15 – 60",
        "unit": "pg/mL",
        "note": "Predominant circulating estrogen in postmenopause (derived from peripheral aromatization of adrenal androstenedione in adipose tissue)"
      },
      {
        "group": "Obesity / Endometrial Hyperplasia Risk",
        "value": "> 70",
        "unit": "pg/mL",
        "note": "Unchecked estrone from adipose aromatization drives endometrial hyperplasia and carcinoma"
      }
    ],
    "significance": "Predominant estrogen after menopause. Formed by peripheral aromatization of adrenal androstenedione in subcutaneous fat. High levels in obese postmenopausal women increase risk of endometrial adenocarcinoma and breast cancer.",
    "significanceAr": "الإستروجين السائد بعد انقطاع الطمث؛ يصنع في النسيج الشحمي بتحويل الأندروستيندون. ارتفاعه عند البدينات يزيد خطر فرط تصنع وسرطان بطانة الرحم.",
    "tags": [
      "hormones",
      "estrone",
      "postmenopause",
      "oncology"
    ]
  },
  {
    "id": "estriol_free_uE3",
    "name": "Unconjugated Estriol (uE3)",
    "nameAr": "الإستريول غير المقترن (uE3)",
    "aliases": [
      "Free Estriol",
      "uE3",
      "Estriol"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Non-Pregnant Adults",
        "value": "< 0.2",
        "unit": "ng/mL",
        "note": "Undetectable outside pregnancy"
      },
      {
        "group": "Pregnancy 16-18 Weeks (Second Trimester Quad Screen)",
        "value": "0.5 – 2.0 (0.5 – 2.0 MoM)",
        "unit": "ng/mL",
        "note": "Low uE3 (<0.5 MoM) part of Down Syndrome and Edwards Syndrome screens"
      },
      {
        "group": "Steroid Sulfatase Deficiency (X-Linked Ichthyosis)",
        "value": "< 0.1 MoM (Undetectable)",
        "unit": "MoM",
        "note": "Extremely low maternal estriol reflects placental sulfatase defect"
      }
    ],
    "significance": "Synthesized exclusively by the fetoplacental unit (fetal adrenal DHEA-S -> fetal liver 16-OH-DHEA-S -> placental aromatization to estriol). Key marker in maternal serum triple/quadruple screening.",
    "significanceAr": "ينتج حصراً عبر الوحدة الجنينية المشيمية. فحص أساسي في المسح الرباعي للتشوهات الجنينية في الثلث الثاني من الحمل (متلازمة داون وإدوارد).",
    "tags": [
      "hormones",
      "estriol",
      "pregnancy",
      "quad-screen",
      "down-syndrome"
    ]
  },
  {
    "id": "progesterone_serum",
    "name": "Serum Progesterone",
    "nameAr": "البروجسترون في المصل",
    "aliases": [
      "Progesterone",
      "P4",
      "هرمون البروجسترون"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "< 0.5",
        "unit": "ng/mL"
      },
      {
        "group": "Females Follicular Phase",
        "value": "< 1.0",
        "unit": "ng/mL"
      },
      {
        "group": "Mid-Luteal Phase (Day 21 Confirming Ovulation)",
        "value": "> 3.0",
        "unit": "ng/mL",
        "note": ">10 ng/mL optimal for natural luteal support, >15 in stimulated cycles"
      },
      {
        "group": "Postmenopausal Females",
        "value": "< 0.5",
        "unit": "ng/mL"
      },
      {
        "group": "Pregnancy (1st Trimester)",
        "value": "11.0 – 44.0",
        "unit": "ng/mL"
      },
      {
        "group": "Pregnancy (2nd Trimester)",
        "value": "25.0 – 89.0",
        "unit": "ng/mL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "65.0 – 290.0",
        "unit": "ng/mL"
      },
      {
        "group": "Ectopic Pregnancy / Threatened Abortion Warning",
        "value": "< 5.0 in confirmed pregnancy",
        "unit": "ng/mL",
        "alert": "critical_low",
        "note": "High risk of non-viable pregnancy or ectopic gestation"
      }
    ],
    "significance": "Secreted by corpus luteum post-ovulation and placenta. Mid-luteal (Day 21) progesterone >3-5 ng/mL proves ovulation has occurred. First trimester level <5 ng/mL strongly suggests non-viable intrauterine pregnancy or ectopic pregnancy.",
    "significanceAr": "يفرزه الجسم الأصفر والمشيمة. قياسه في اليوم 21 من الدورة (>3-10 نانوغرام) يثبت حدوث الإباضة. هبوطه دون 5 نانوغرام في الحمل المبكر ينذر بحمل منتبذ أو إجهاض محتوم.",
    "tags": [
      "hormones",
      "progesterone",
      "ovulation",
      "pregnancy",
      "ectopic"
    ]
  },
  {
    "id": "hydroxyprogesterone_17_ohp",
    "name": "17-Alpha-Hydroxyprogesterone (17-OHP)",
    "nameAr": "17-ألفا هيدروكسي بروجسترون (17-OHP)",
    "aliases": [
      "17-OHP",
      "17-OH Progesterone"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "0.5 – 2.5",
        "unit": "ng/mL"
      },
      {
        "group": "Females Early Follicular Phase",
        "value": "0.2 – 1.0",
        "unit": "ng/mL"
      },
      {
        "group": "Females Luteal Phase",
        "value": "1.0 – 4.0",
        "unit": "ng/mL"
      },
      {
        "group": "Non-Classic Late-Onset CAH (Screening)",
        "value": "> 2.0",
        "unit": "ng/mL",
        "note": "Drawn at 08:00 AM; if >2.0, perform ACTH stimulation test"
      },
      {
        "group": "Classical Congenital Adrenal Hyperplasia (21-Hydroxylase Deficiency)",
        "value": "> 10.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Baseline often >100 ng/mL; causes salt-wasting crisis and ambiguous genitalia in newborns"
      },
      {
        "group": "Post-ACTH Stimulation Diagnostic (CAH)",
        "value": "> 10.0",
        "unit": "ng/mL",
        "note": "Diagnostic of 21-hydroxylase deficiency"
      }
    ],
    "significance": "Immediate precursor to 11-deoxycortisol. Accumulates massively in Congenital Adrenal Hyperplasia (CAH) due to 21-hydroxylase (CYP21A2) deficiency (>95% of CAH cases). Critical screening test in newborns for salt-wasting crisis.",
    "significanceAr": "الطليعة المباشرة للكورتيزول. يتراكم بكميات هائلة في تضخم الكظر الوراثي (CAH) بنقص أنزيم 21-هيدروكسيلاز، ويسبب متلازمة فقد الملح القاتلة عند الرضع والذكورة المبكرة.",
    "tags": [
      "hormones",
      "adrenal",
      "cah",
      "pediatric",
      "neonatal-screen"
    ]
  },
  {
    "id": "testosterone_total",
    "name": "Total Testosterone",
    "nameAr": "التستوستيرون الكلي (هرمون الذكورة)",
    "aliases": [
      "Testosterone",
      "Total T",
      "هرمون التستوستيرون"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males (Healthy Non-Obese 19-39yr)",
        "value": "300 – 1000",
        "unit": "ng/dL",
        "note": "10.4 – 34.7 nmol/L"
      },
      {
        "group": "Male Hypogonadism Diagnostic Cutoff (AUA/Endocrine Society)",
        "value": "< 300",
        "unit": "ng/dL",
        "alert": "critical_low",
        "note": "Confirmed on two separate morning fasting specimens drawn at 08:00-10:00 AM"
      },
      {
        "group": "Adult Females",
        "value": "15 – 70",
        "unit": "ng/dL",
        "note": "0.5 – 2.4 nmol/L"
      },
      {
        "group": "PCOS in Females (Mildly Elevated)",
        "value": "70 – 150",
        "unit": "ng/dL"
      },
      {
        "group": "Virilizing Ovarian / Adrenal Tumor Threshold (Females)",
        "value": "> 200",
        "unit": "ng/dL",
        "alert": "critical_high",
        "note": "Arrhenoblastoma, Sertoli-Leydig tumor, adrenal carcinoma workup mandatory"
      },
      {
        "group": "Prepubertal Children",
        "value": "< 10",
        "unit": "ng/dL"
      }
    ],
    "significance": "Primary male androgen. Secreted by Leydig cells under LH stimulation (and ovaries/adrenals in females). Marked diurnal variation in young men (peak at 08:00 AM); must be drawn between 08:00 and 10:00 AM on fasting specimens. Diagnosis of hypogonadism requires two separate low morning readings.",
    "significanceAr": "هرمون الذكورة الرئيسي. يفرز صباحاً ويجب سحبه صائماً بين 8-10 صباحاً. تشخيص نقص التستوستيرون يتطلب نتيجتين منخفضتين (<300). ارتفاعه فوق 200 لدى الإناث ينذر بأورام مفرزة.",
    "tags": [
      "hormones",
      "testosterone",
      "hypogonadism",
      "androgen",
      "pcos"
    ]
  },
  {
    "id": "testosterone_free",
    "name": "Free Testosterone",
    "nameAr": "التستوستيرون الحر",
    "aliases": [
      "Free T",
      "Unbound Testosterone"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "5.0 – 21.0",
        "unit": "ng/dL",
        "note": "50 – 210 pg/mL (approx 1-2% of total)"
      },
      {
        "group": "Adult Females",
        "value": "0.1 – 0.85",
        "unit": "ng/dL",
        "note": "1 – 8.5 pg/mL"
      },
      {
        "group": "Male Hypogonadism (Equilibrium Dialysis)",
        "value": "< 5.0",
        "unit": "ng/dL"
      },
      {
        "group": "Elderly Males (>65yr)",
        "value": "3.0 – 15.0",
        "unit": "ng/dL",
        "note": "Decreases progressively with age due to rising SHBG"
      }
    ],
    "significance": "Biologically active unbound fraction (~1-2% of total). Equilibrium dialysis is the gold standard assay. Indicated when total testosterone is borderline and SHBG abnormalities are suspected (obesity, liver disease, thyroid disease, nephrotic syndrome).",
    "significanceAr": "الجزء الحر الفعال حيوياً (1-2% من التستوستيرون). لا يتأثر بتبدلات SHBG ويعد المعيار الأهم عند مرضى البدانة وتشمع الكبد وكبار السن.",
    "tags": [
      "hormones",
      "free-testosterone",
      "hypogonadism",
      "andrology"
    ]
  },
  {
    "id": "bioavailable_testosterone",
    "name": "Bioavailable Testosterone",
    "nameAr": "التستوستيرون الحيوي المتاح",
    "aliases": [
      "Bio-T",
      "Bioavailable T"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males (20-50yr)",
        "value": "110 – 380",
        "unit": "ng/dL"
      },
      {
        "group": "Adult Females",
        "value": "5 – 15",
        "unit": "ng/dL"
      },
      {
        "group": "Hypogonadism Threshold (Males)",
        "value": "< 110",
        "unit": "ng/dL"
      }
    ],
    "significance": "Sum of free testosterone plus albumin-bound testosterone (weakly bound and easily dissociable at the tissue level).",
    "significanceAr": "مجموع التستوستيرون الحر والمرتبط بالألبومين؛ يمثل الجزء المتاح فعلياً للاستهلاك النسيجي.",
    "tags": [
      "hormones",
      "bioavailable-testosterone"
    ]
  },
  {
    "id": "dht_dihydrotestosterone",
    "name": "Dihydrotestosterone (DHT)",
    "nameAr": "ديهيدروتستوستيرون (DHT)",
    "aliases": [
      "DHT",
      "5-Alpha-DHT"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "30 – 85",
        "unit": "ng/dL"
      },
      {
        "group": "Adult Females",
        "value": "4 – 22",
        "unit": "ng/dL"
      },
      {
        "group": "5-Alpha-Reductase Deficiency (Male Pseudohermaphroditism)",
        "value": "Low DHT with High T:DHT ratio (>30:1)",
        "unit": "ratio",
        "note": "Impaired conversion of testosterone to DHT"
      }
    ],
    "significance": "Most potent endogenous androgen, converted from testosterone by 5-alpha reductase. Mediates prostate growth, male pattern baldness, and external genital virilization in utero. Blocked by finasteride/dutasteride.",
    "significanceAr": "أقوى الأندروجينات وأكثرها فاعلية، يتحول من التستوستيرون بأنزيم 5-ألفا ريدوكتاز. مسؤول عن ضخامة البروستات والصلع الذكوري، ويثبط بدواء فيناسترايد.",
    "tags": [
      "hormones",
      "dht",
      "prostate",
      "androgen",
      "alopecia"
    ]
  },
  {
    "id": "shbg_serum",
    "name": "Sex Hormone-Binding Globulin (SHBG)",
    "nameAr": "الغلوبولين الرابط للهرمونات الجنسية (SHBG)",
    "aliases": [
      "SHBG",
      "Sex Hormone Binding Globulin"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males (20-50yr)",
        "value": "18.0 – 54.0",
        "unit": "nmol/L"
      },
      {
        "group": "Adult Females",
        "value": "24.0 – 122.0",
        "unit": "nmol/L"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "200.0 – 500.0",
        "unit": "nmol/L",
        "note": "Massive estrogen-mediated induction"
      },
      {
        "group": "Suppressed (Obesity / Insulin Resistance / PCOS)",
        "value": "< 20.0",
        "unit": "nmol/L",
        "note": "Hyperinsulinemia suppresses hepatic SHBG synthesis, increasing free active androgens"
      },
      {
        "group": "Elevated (Hyperthyroidism / Cirrhosis / Aging)",
        "value": "> 80.0",
        "unit": "nmol/L",
        "note": "Falsely inflates total testosterone despite low free levels"
      }
    ],
    "significance": "High-affinity glycoprotein binding testosterone and estradiol. Synthesized by liver. Increased by estrogen, thyroid hormone, cirrhosis, and aging; decreased by insulin, obesity, androgens, and glucocorticoids.",
    "significanceAr": "بروتين كبدي يربط الهرمونات الجنسية. يثبطه الإنسولين في البدانة وتكيس المبايض فيرتفع التستوستيرون الحر مسبباً الشعرانية، بينما يرتفع في فرط الدرقية والتشمع.",
    "tags": [
      "hormones",
      "shbg",
      "insulin-resistance",
      "pcos"
    ]
  },
  {
    "id": "free_androgen_index",
    "name": "Free Androgen Index (FAI)",
    "nameAr": "مشعر الأندروجين الحر (FAI)",
    "aliases": [
      "FAI"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Normal Females",
        "value": "0.5 – 5.0",
        "unit": "index"
      },
      {
        "group": "Hyperandrogenism / PCOS Indicator (Females)",
        "value": "> 5.0 – 6.0",
        "unit": "index",
        "note": "Sensitive marker for biochemical hyperandrogenism in PCOS"
      },
      {
        "group": "Normal Adult Males",
        "value": "30.0 – 150.0",
        "unit": "index"
      }
    ],
    "significance": "Formula: (Total Testosterone [nmol/L] / SHBG [nmol/L]) x 100. Useful marker for assessing bioavailable androgen status in women with hirsutism, alopecia, or suspected PCOS.",
    "significanceAr": "المعادلة: (التستوستيرون الكلي نانومول ÷ SHBG نانومول) × 100. مقياس ممتاز للشعرانية وفرط الأندروجين في متلازمة تكيس المبايض.",
    "tags": [
      "hormones",
      "fai",
      "pcos",
      "hirsutism"
    ]
  },
  {
    "id": "dhea_serum",
    "name": "Dehydroepiandrosterone (Unconjugated DHEA)",
    "nameAr": "ديهيدرو إيبي أندروستيرون (DHEA الحر)",
    "aliases": [
      "DHEA",
      "Unconjugated DHEA"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "1.8 – 12.5",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Females",
        "value": "1.3 – 9.8",
        "unit": "ng/mL"
      },
      {
        "group": "Premature Adrenarche",
        "value": "Elevated for age",
        "unit": "ng/mL"
      }
    ],
    "significance": "Precursor androgen secreted by adrenal cortex (80%) and gonads (20%). Rapid clearance; exhibits strong diurnal variation (unlike DHEA-S).",
    "significanceAr": "طليعة أندروجينية كظرية (80%) وتناسلية (20%). يتميز بنصف عمر قصير وتنوع يومي ملحوظ.",
    "tags": [
      "hormones",
      "dhea",
      "adrenal"
    ]
  },
  {
    "id": "dhea_sulfate",
    "name": "DHEA-Sulfate (DHEA-S)",
    "nameAr": "كبريتات ديهيدرو إيبي أندروستيرون (DHEA-S)",
    "aliases": [
      "DHEA-S",
      "DHEAS",
      "كبريتات DHEA"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males (20-30yr Peak)",
        "value": "160 – 490",
        "unit": "µg/dL"
      },
      {
        "group": "Adult Females (20-30yr Peak)",
        "value": "65 – 380",
        "unit": "µg/dL"
      },
      {
        "group": "Elderly (>70yr)",
        "value": "30 – 150",
        "unit": "µg/dL",
        "note": "Adrenopause: progressive decline with aging"
      },
      {
        "group": "Adrenal Virilizing Tumor Alert (Females)",
        "value": "> 700",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "Values >700 µg/dL in females strongly suspect Adrenocortical Carcinoma"
      }
    ],
    "significance": "Produced exclusively by the adrenal cortex (zona reticularis). Long half-life (~20h) with NO diurnal fluctuation, making it the ideal biomarker for adrenal androgen hypersecretion. Extreme elevation (>700 µg/dL) in women suggests adrenocortical carcinoma.",
    "significanceAr": "يفرز حصراً من قشر الكظر (المنطقة الشبكية). لا يتأثر بالساعة البيولوجية وله نصف عمر طويل (20 ساعة)، مما يجعله الفحص الأمثل لفرط أندروجين الكظر وسرطان قشر الكظر.",
    "tags": [
      "hormones",
      "adrenal",
      "dhea-s",
      "hirsutism",
      "carcinoma"
    ]
  },
  {
    "id": "androstenedione_serum",
    "name": "Androstenedione",
    "nameAr": "أندروستيندون",
    "aliases": [
      "Androstenedione",
      "Delta-4-Androstenedione"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "0.6 – 2.7",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Females",
        "value": "0.7 – 3.1",
        "unit": "ng/mL"
      },
      {
        "group": "Postmenopausal Females",
        "value": "0.3 – 1.8",
        "unit": "ng/mL"
      },
      {
        "group": "PCOS / Congenital Adrenal Hyperplasia",
        "value": "> 3.5",
        "unit": "ng/mL"
      }
    ],
    "significance": "Synthesized equally by adrenal glands and ovaries/testes. Immediate precursor to both testosterone and estrone. Elevated in PCOS, CAH, and androgen-producing tumors.",
    "significanceAr": "ينتج مناصفة بين الكظر والمبيض/الخصية؛ وهو الطليعة المباشرة للتستوستيرون والإسترون، ويرتفع في تكيس المبايض وتضخم الكظر.",
    "tags": [
      "hormones",
      "androstenedione",
      "pcos",
      "cah"
    ]
  },
  {
    "id": "amh_anti_mullerian_hormone",
    "name": "Anti-Müllerian Hormone (AMH)",
    "nameAr": "الهرمون المضاد لمولر (مخزون المبيض / AMH)",
    "aliases": [
      "AMH",
      "Anti-Mullerian Hormone",
      "مخزون المبيض"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Optimal Ovarian Reserve (20-30yr)",
        "value": "2.0 – 4.0",
        "unit": "ng/mL",
        "note": "14.3 – 28.6 pmol/L"
      },
      {
        "group": "Satisfactory Reserve (31-35yr)",
        "value": "1.2 – 2.0",
        "unit": "ng/mL"
      },
      {
        "group": "Low Ovarian Reserve (36-40yr)",
        "value": "0.5 – 1.1",
        "unit": "ng/mL",
        "note": "Anticipate diminished response to IVF gonadotropin stimulation"
      },
      {
        "group": "Very Low / Impending Menopause",
        "value": "< 0.5",
        "unit": "ng/mL",
        "note": "Severely compromised oocyte reserve"
      },
      {
        "group": "Undetectable Postmenopausal",
        "value": "< 0.16",
        "unit": "ng/mL"
      },
      {
        "group": "High / Polycystic Ovary Syndrome (PCOS)",
        "value": "> 5.0 – 6.0",
        "unit": "ng/mL",
        "note": "Numerous pre-antral follicles; high risk of severe OHSS during IVF stimulation"
      },
      {
        "group": "Infant / Adolescent Males (Testicular Function)",
        "value": "20.0 – 150.0",
        "unit": "ng/mL",
        "note": "Secreted by Sertoli cells; confirms presence of viable testicular tissue in cryptorchidism"
      }
    ],
    "significance": "Produced by granulosa cells of pre-antral and small antral follicles. Direct quantitative reflection of the primordial ovarian follicle pool (ovarian reserve). Constant throughout the menstrual cycle (can be drawn on any cycle day). Markedly elevated (>5-6 ng/mL) in PCOS; predicts OHSS risk in IVF.",
    "significanceAr": "تفرزه الجريبات المبيضية الصغيرة؛ ويعكس بدقة مخزون البويضات في المبيض. ميزته أنه ثابت طوال الشهر ولا يشترط يوماً محدداً للدورة. ارتفاعه (>5-6) يؤكد تكيس المبايض ويرفع خطر OHSS.",
    "tags": [
      "hormones",
      "amh",
      "ovarian-reserve",
      "fertility",
      "ivf",
      "pcos"
    ]
  },
  {
    "id": "inhibin_a",
    "name": "Inhibin A",
    "nameAr": "إنهيبين أ",
    "aliases": [
      "Inhibin A"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Females Follicular Phase",
        "value": "< 10.0",
        "unit": "pg/mL"
      },
      {
        "group": "Females Luteal Phase",
        "value": "15.0 – 100.0",
        "unit": "pg/mL"
      },
      {
        "group": "Postmenopausal Females",
        "value": "< 5.0",
        "unit": "pg/mL"
      },
      {
        "group": "Second Trimester Quad Screen (15-20 wk)",
        "value": "1.0 MoM (Elevated in Down Syndrome)",
        "unit": "MoM",
        "note": "Elevated Inhibin A is the fourth marker in the Quad Screen for Trisomy 21"
      }
    ],
    "significance": "Secreted by dominant follicle and corpus luteum. Fourth component of second-trimester maternal serum Quad Screen: elevated Inhibin A together with elevated hCG, low AFP, and low uE3 indicates high risk for fetal Down Syndrome (Trisomy 21).",
    "significanceAr": "يفرزه الجسم الأصفر؛ وهو المكون الرابع في المسح الرباعي للتشوهات في الحمل (يرتفع في متلازمة داون مع hCG وانخفاض AFP وuE3).",
    "tags": [
      "hormones",
      "inhibin-a",
      "quad-screen",
      "down-syndrome"
    ]
  },
  {
    "id": "inhibin_b",
    "name": "Inhibin B",
    "nameAr": "إنهيبين ب",
    "aliases": [
      "Inhibin B"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males (Spermatogenesis Index)",
        "value": "100 – 350",
        "unit": "pg/mL",
        "note": "Direct marker of Sertoli cell function and spermatogenesis"
      },
      {
        "group": "Severe Male Factor Infertility",
        "value": "< 80",
        "unit": "pg/mL",
        "alert": "critical_low",
        "note": "Severely impaired spermatogenesis / Sertoli-cell-only syndrome"
      },
      {
        "group": "Females Day 3 Baseline",
        "value": "45 – 150",
        "unit": "pg/mL",
        "note": "<45 pg/mL indicates diminished ovarian reserve"
      },
      {
        "group": "Postmenopausal Females",
        "value": "< 10",
        "unit": "pg/mL"
      }
    ],
    "significance": "Secreted by Sertoli cells in men (direct marker of active spermatogenesis) and developing follicles in women (Day 3 FSH-sensitive cohort). Tumor marker for ovarian granulosa cell tumors.",
    "significanceAr": "تفرزه خلايا سيرتولي بالخصية ويعد أدق مؤشر لإنتاج النطاف. كما تفرزه خلايا الحبيبية في المبيض، ويستخدم كواسم ورمي لأورام الخلايا الحبيبية.",
    "tags": [
      "hormones",
      "inhibin-b",
      "spermatogenesis",
      "fertility",
      "granulosa-tumor"
    ]
  },
  {
    "id": "prolactin_serum",
    "name": "Serum Prolactin",
    "nameAr": "البرولاكتين في المصل (هرمون الحليب)",
    "aliases": [
      "PRL",
      "Prolactin",
      "هرمون الحليب"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "2.0 – 18.0",
        "unit": "ng/mL",
        "note": "40 – 360 µIU/mL"
      },
      {
        "group": "Adult Non-Pregnant Females",
        "value": "3.0 – 25.0",
        "unit": "ng/mL",
        "note": "60 – 500 µIU/mL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "80.0 – 400.0",
        "unit": "ng/mL",
        "note": "Physiologic lactotroph hyperplasia preparing for lactation"
      },
      {
        "group": "Postmenopausal Females",
        "value": "2.0 – 15.0",
        "unit": "ng/mL"
      },
      {
        "group": "Hyperprolactinemia (Medication / Hypothyroid / Stalk Effect)",
        "value": "25.0 – 100.0",
        "unit": "ng/mL",
        "note": "Antipsychotics, SSRIs, metoclopramide, primary hypothyroidism (TRH stimulation)"
      },
      {
        "group": "Prolactinoma Highly Suggestive (>200 ng/mL)",
        "value": "> 200.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Virtually pathognomonic for prolactin-secreting pituitary adenoma (Prolactinoma); order brain MRI"
      }
    ],
    "significance": "Lactogenic pituitary hormone under tonic hypothalamic dopamine inhibition. Hyperprolactinemia causes galactorrhea, oligomenorrhea, infertility, and male hypogonadism. Values >200-250 ng/mL strongly indicate prolactinoma. Values 25-100 ng/mL common with antipsychotics, metoclopramide, stress, or primary hypothyroidism.",
    "significanceAr": "هرمون الحليب النخامي. يثبطه الدوبامين طبيعياً. يسبب ارتفاعه ثر الحليب واضطراب الدورة والعقم. ارتفاعه فوق 200 نانوغرام مشخص للورم البرولاكتيني النخامي (MRI مطلوب).",
    "tags": [
      "hormones",
      "prolactin",
      "prolactinoma",
      "galactorrhea",
      "pituitary"
    ]
  },
  {
    "id": "macroprolactin_peg",
    "name": "Macroprolactin Screen (PEG Precipitation)",
    "nameAr": "فحص الماكروبرولاكتين (ترسيب البولي إيثيلين جلايكول)",
    "aliases": [
      "Macroprolactin",
      "Big-Big Prolactin"
    ],
    "category": "hormones",
    "ranges": [
      {
        "group": "True Monomeric Prolactin Recovery",
        "value": "> 60.0",
        "unit": "% recovery",
        "note": "True bioactive hyperprolactinemia"
      },
      {
        "group": "Macroprolactinemia Dominant",
        "value": "< 40.0",
        "unit": "% recovery",
        "note": "High apparent prolactin due to biologically inert IgG-prolactin complexes; benign, no MRI/treatment needed"
      }
    ],
    "significance": "High-molecular-weight complex of monomeric prolactin and IgG (>150 kDa). Cleared slowly, causing pseudohyperprolactinemia on immunoassay, but biologically INACTIVE. Prevents unnecessary pituitary MRI and dopamine agonist therapy.",
    "significanceAr": "معقد كبير من البرولاكتين مع الأجسام المضادة IgG. يسبب ارتفاعاً كاذباً في التحليل دون أعراض حقيقية؛ وفحصه يمنع إجراء تصوير رنين مغناطيسي أو علاجات غير لازمة.",
    "tags": [
      "hormones",
      "macroprolactin",
      "pseudohyperprolactinemia"
    ]
  },
  {
    "id": "growth_hormone_fasting",
    "name": "Growth Hormone (GH / Somatotropin Fasting)",
    "nameAr": "هرمون النمو الصائم (GH)",
    "aliases": [
      "GH",
      "Somatotropin",
      "هرمون النمو"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Fasting Adult Males",
        "value": "0.01 – 3.00",
        "unit": "ng/mL"
      },
      {
        "group": "Fasting Adult Females",
        "value": "0.01 – 8.00",
        "unit": "ng/mL"
      },
      {
        "group": "Children Baseline",
        "value": "0.10 – 10.00",
        "unit": "ng/mL"
      },
      {
        "group": "GH Deficiency Provocative Testing Peak (Clonidine/Arginine/Insulin)",
        "value": "< 7.0 – 10.0",
        "unit": "ng/mL",
        "alert": "critical_low",
        "note": "Peak <7-10 ng/mL on two provocative stimulation tests confirms GH deficiency in children"
      },
      {
        "group": "Acromegaly Suspicion (Random Baseline)",
        "value": "> 5.0",
        "unit": "ng/mL"
      }
    ],
    "significance": "Pulsatile secretion with short half-life (~20 min). Random daytime levels are normally undetectable in healthy subjects and cannot rule in deficiency. Provocative stimulation tests (Insulin Tolerance Test, Arginine, Clonidine) are mandatory to diagnose pediatric growth hormone deficiency.",
    "significanceAr": "هرمون نابض يفرز على دفعات وله نصف عمر قصير جداً (20 دقيقة). لا يمكن الاعتماد على قراءة عشوائية لنفي نقصه، بل يلزم إجراء اختبارات التحفيز الاستفزازية (الأنسولين، الأرجينين).",
    "tags": [
      "pituitary",
      "growth-hormone",
      "acromegaly",
      "pediatric",
      "gh-deficiency"
    ]
  },
  {
    "id": "gh_suppression_test_ogtt",
    "name": "GH Suppression Test (75g Oral Glucose)",
    "nameAr": "فحص تثبيط هرمون النمو بالجلوكوز الفموي (75 جم)",
    "aliases": [
      "GH Suppression",
      "OGTT for GH"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Normal Intact Suppression Nadir",
        "value": "< 1.0 (Sensitive assay <0.4)",
        "unit": "ng/mL",
        "note": "Hyperglycemia normally suppresses GH to near-undetectable levels"
      },
      {
        "group": "Acromegaly / Gigantism Diagnostic (Failure of Suppression)",
        "value": "≥ 1.0 (or ≥0.4 on ultrasensitive)",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Gold standard definitive confirmation of autonomous GH excess (Acromegaly)"
      }
    ],
    "significance": "Gold standard confirmatory test for acromegaly and gigantism. In healthy individuals, oral glucose load induces hyperglycemia that completely suppresses GH nadir to <0.4-1.0 ng/mL. Failure of suppression confirms autonomous adenoma secretion.",
    "significanceAr": "المعيار الذهبي لتأكيد تشخيص ضخامة النهايات (العملقة / Acromegaly). في الشخص السليم يهبط هرمون النمو تماماً دون 0.4-1.0 نانوغرام بعد شرب الجلوكوز؛ وفشل تثبيطه يثبت الورم.",
    "tags": [
      "pituitary",
      "acromegaly",
      "gh-suppression",
      "gold-standard"
    ]
  },
  {
    "id": "igf_1_somatomedin_c",
    "name": "Insulin-Like Growth Factor 1 (IGF-1 / Somatomedin C)",
    "nameAr": "عامل النمو الشبيه بالإنسولين-1 (IGF-1)",
    "aliases": [
      "IGF-1",
      "Somatomedin C",
      "عامل النمو الشبيه بالإنسولين"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Adults (20-25 years)",
        "value": "116 – 358",
        "unit": "ng/mL"
      },
      {
        "group": "Adults (26-30 years)",
        "value": "117 – 329",
        "unit": "ng/mL"
      },
      {
        "group": "Adults (31-40 years)",
        "value": "101 – 267",
        "unit": "ng/mL"
      },
      {
        "group": "Adults (41-50 years)",
        "value": "94 – 252",
        "unit": "ng/mL"
      },
      {
        "group": "Adults (51-60 years)",
        "value": "87 – 225",
        "unit": "ng/mL"
      },
      {
        "group": "Adults (61-70 years)",
        "value": "75 – 212",
        "unit": "ng/mL"
      },
      {
        "group": "Adults (>70 years)",
        "value": "64 – 188",
        "unit": "ng/mL"
      },
      {
        "group": "Pubertal Peak (13-15 years)",
        "value": "220 – 600",
        "unit": "ng/mL"
      },
      {
        "group": "Acromegaly Screening (Elevated for Age)",
        "value": "Significantly above age-adjusted reference range",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Single best screening test for acromegaly"
      },
      {
        "group": "Growth Hormone Deficiency (Low for Age)",
        "value": "Below 2.5th percentile for age/sex",
        "unit": "ng/mL",
        "note": "Supports GH deficiency"
      }
    ],
    "significance": "Synthesized by liver in response to GH. Long half-life (~15 hours) bound to IGFBP-3; stable levels throughout the day without pulsatility. Single best initial screening test for acromegaly and monitoring therapy.",
    "significanceAr": "يصنعه الكبد بتحفيز من هرمون النمو. يتميز باستقراره طوال اليوم دون تذبذب نابض. الفحص المسحي الأول والأفضل لضخامة النهايات ومتابعة علاجها.",
    "tags": [
      "pituitary",
      "igf-1",
      "acromegaly",
      "growth-disorders"
    ]
  },
  {
    "id": "igfbp_3",
    "name": "Insulin-Like Growth Factor-Binding Protein 3 (IGFBP-3)",
    "nameAr": "البروتين الرابط لعامل النمو الشبيه بالإنسولين-3 (IGFBP-3)",
    "aliases": [
      "IGFBP-3",
      "IGFBP3"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Adults (20-30 years)",
        "value": "3.4 – 6.7",
        "unit": "mg/L"
      },
      {
        "group": "Adults (31-50 years)",
        "value": "3.4 – 6.9",
        "unit": "mg/L"
      },
      {
        "group": "Adults (>50 years)",
        "value": "3.0 – 6.0",
        "unit": "mg/L"
      },
      {
        "group": "Children (<5 years)",
        "value": "1.4 – 3.9",
        "unit": "mg/L"
      }
    ],
    "significance": "Major circulating binding protein carrying >90% of IGF-1 in a ternary complex. GH-dependent. Less influenced by nutritional status than IGF-1, making it valuable in young pediatric GH deficiency evaluations.",
    "significanceAr": "البروتين الحامل الرئيسي لـ 90% من IGF-1. يعتمد على هرمون النمو ويتميز بأنه أقل تأثراً بسوء التغذية مقارنة بـ IGF-1، مما يجعله مفيداً للأطفال الصغار.",
    "tags": [
      "pituitary",
      "igfbp-3",
      "pediatric-growth"
    ]
  },
  {
    "id": "ghrh_plasma",
    "name": "Growth Hormone-Releasing Hormone (GHRH)",
    "nameAr": "الهرمون المطلق لهرمون النمو (GHRH)",
    "aliases": [
      "GHRH"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 30.0",
        "unit": "pg/mL"
      },
      {
        "group": "Ectopic GHRH Acromegaly (Bronchial / Pancreatic Neuroendocrine Tumor)",
        "value": "> 250.0 – 300.0",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Confirms extra-pituitary source of acromegaly"
      }
    ],
    "significance": "Hypothalamic peptide. Ectopic hypersecretion by bronchial carcinoid or pancreatic neuroendocrine tumors causes pituitary somatotroph hyperplasia and secondary acromegaly.",
    "significanceAr": "هرمون وطائي يحفز إفراز هرمون النمو. إفرازه الهاجر من أورام القصبات أو البنكرياس يسبب تضخم خلايا النخامى وضخامة نهايات ثانوية.",
    "tags": [
      "pituitary",
      "ghrh",
      "ectopic-acromegaly",
      "carcinoid"
    ]
  },
  {
    "id": "adh_vasopressin",
    "name": "Antidiuretic Hormone (ADH / Arginine Vasopressin)",
    "nameAr": "الهرمون المضاد لإدرار البول (الفازوبريسين / ADH)",
    "aliases": [
      "ADH",
      "AVP",
      "Vasopressin",
      "فازوبريسين"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Normal Hydration (Serum Osm 280-290 mOsm/kg)",
        "value": "1.0 – 5.0",
        "unit": "pg/mL"
      },
      {
        "group": "Water Deprivation / Hyperosmolality (>295 mOsm/kg)",
        "value": "> 5.0",
        "unit": "pg/mL",
        "note": "Appropriate posterior pituitary release to conserve water"
      },
      {
        "group": "Central Diabetes Insipidus (Pathologic Deficit)",
        "value": "< 1.0 with hyperosmolality",
        "unit": "pg/mL",
        "alert": "critical_low",
        "note": "Failure of ADH secretion during dehydration; responds to DDAVP"
      },
      {
        "group": "SIADH (Inappropriate Autonomous Excess)",
        "value": "> 2.0 with hypo-osmolality (<275)",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Failure of ADH suppression during systemic water excess / hyponatremia"
      }
    ],
    "significance": "Synthesized in supraoptic and paraventricular hypothalamic nuclei, stored in posterior pituitary. Regulates water permeability of renal collecting ducts via aquaporin-2. Central Diabetes Insipidus has deficient ADH; Nephrogenic DI has high ADH with end-organ resistance; SIADH has inappropriately elevated ADH despite hypo-osmolality.",
    "significanceAr": "ينتج في الوطاء ويخزن في النخامى الخلفية؛ يحبس الماء بالكلية عبر قنوات الأكوابورين. ينعدم في السكري الكاذب المركزي، ويفشل في الانحباس في متلازمة SIADH مسبباً نقص صوديوم حاد.",
    "tags": [
      "pituitary",
      "adh",
      "vasopressin",
      "siadh",
      "diabetes-insipidus"
    ]
  },
  {
    "id": "copeptin_pituitary",
    "name": "Copeptin (Polyuria-Polydipsia Differential)",
    "nameAr": "الكوببتين لتقييم كثرة التبول والعطش",
    "aliases": [
      "Copeptin Pituitary",
      "CT-proAVP Polyuria"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Normal Baseline Hydration",
        "value": "1.0 – 13.0",
        "unit": "pmol/L"
      },
      {
        "group": "Complete Central Diabetes Insipidus (Baseline without thirsting)",
        "value": "< 2.6",
        "unit": "pmol/L",
        "note": "Directly confirms complete central DI without needing dangerous water deprivation test"
      },
      {
        "group": "Nephrogenic Diabetes Insipidus (Baseline)",
        "value": "> 21.4",
        "unit": "pmol/L",
        "alert": "critical_high",
        "note": "Massive compensatory release confirms renal vasopressin resistance"
      }
    ],
    "significance": "C-terminal proAVP fragment. Far more stable in vitro than AVP. Baseline copeptin <2.6 pmol/L diagnoses complete central DI without water deprivation; baseline >21.4 pmol/L diagnoses nephrogenic DI.",
    "significanceAr": "جزء ثابت في الأنبوب المخبري مشتق من طليعة الفازوبريسين. يغني عن اختبار الحرمان من الماء الخطر؛ قيمه دون 2.6 تثبت السكري الكاذب المركزي، وفوق 21.4 تثبت الكلوي.",
    "tags": [
      "pituitary",
      "copeptin",
      "diabetes-insipidus",
      "polyuria"
    ]
  },
  {
    "id": "oxytocin_plasma",
    "name": "Plasma Oxytocin",
    "nameAr": "الأوكسيتوسين في البلازما (هرمون الطلق والمودة)",
    "aliases": [
      "Oxytocin",
      "أوكسيتوسين"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Non-Pregnant Adults",
        "value": "1.0 – 5.0",
        "unit": "pg/mL"
      },
      {
        "group": "Active Labor & Postpartum Suckling Peak",
        "value": "10.0 – 40.0",
        "unit": "pg/mL",
        "note": "Pulsatile release stimulating myometrial contraction and milk ejection reflex"
      }
    ],
    "significance": "Posterior pituitary nonapeptide stimulating uterine myometrial contraction during labor and myoepithelial contraction in mammary glands for milk ejection.",
    "significanceAr": "هرمون نخامي خلفي يحفز تقلصات الرحم أثناء المخاض والولادة، وتقلص القنوات الحليبية لإدرار الحليب أثناء الرضاعة.",
    "tags": [
      "pituitary",
      "oxytocin",
      "lactation",
      "labor"
    ]
  },
  {
    "id": "alpha_subunit_pituitary",
    "name": "Alpha-Subunit of Pituitary Glycoprotein Hormones",
    "nameAr": "الوحدة الفرعية ألفا للهرمونات النخامية",
    "aliases": [
      "Alpha Subunit",
      "Glycoprotein Alpha Subunit"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Premenopausal Females",
        "value": "< 1.2",
        "unit": "ng/mL"
      },
      {
        "group": "Postmenopausal Females",
        "value": "< 2.5",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Males",
        "value": "< 0.8",
        "unit": "ng/mL"
      },
      {
        "group": "Non-Functioning Pituitary Macroadenoma Marker",
        "value": "> 3.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Marker for clinically non-functioning gonadotroph or thyrotroph pituitary macroadenomas"
      }
    ],
    "significance": "Common alpha subunit shared by TSH, LH, FSH, and hCG. Hypersecretion of free alpha subunit is a sensitive tumor marker for clinically non-functioning pituitary macroadenomas (gonadotropinomas).",
    "significanceAr": "الوحدة المشتركة بين هرمونات TSH وLH وFSH وhCG. يعد ارتفاعها الحر واسماً ورمياً هاماً للأورام النخامية كبيرة الحجم غير الوظيفية سريرياً.",
    "tags": [
      "pituitary",
      "alpha-subunit",
      "adenoma",
      "oncology"
    ]
  },
  {
    "id": "msh_melanocyte_stimulating",
    "name": "Melanocyte-Stimulating Hormone (Alpha-MSH)",
    "nameAr": "الهرمون المنبه للخلايا الصباغية (MSH)",
    "aliases": [
      "MSH",
      "Alpha-MSH"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "15 – 45",
        "unit": "pg/mL"
      },
      {
        "group": "Addison Disease / Nelson Syndrome (Elevated POMC Cleavage)",
        "value": "> 80",
        "unit": "pg/mL",
        "note": "Cleaved from POMC alongside ACTH, causing intense generalized bronzing/hyperpigmentation"
      }
    ],
    "significance": "Cleaved from pro-opiomelanocortin (POMC) along with ACTH. Stimulates melanin synthesis by cutaneous melanocytes. Elevated in Addison disease and Nelson syndrome.",
    "significanceAr": "يشتق من مركب POMC بالتزامن مع ACTH ويحفز تصنيع الميلانين. يرتفع في مرض أديسون ومتلازمة نيلسون مسبباً التصبغ الجلدي البرونزي الكلاسيكي.",
    "tags": [
      "pituitary",
      "msh",
      "pigmentation",
      "addison"
    ]
  },
  {
    "id": "beta_endorphin_plasma",
    "name": "Plasma Beta-Endorphin",
    "nameAr": "بيتا-إندورفين في البلازما (المسكن الأفيوني الداخلي)",
    "aliases": [
      "Beta-Endorphin",
      "Endorphin"
    ],
    "category": "pituitary",
    "ranges": [
      {
        "group": "Normal Resting Adults",
        "value": "< 10.0",
        "unit": "pmol/L"
      },
      {
        "group": "Severe Pain / Shock / Cushing Disease",
        "value": "15.0 – 50.0",
        "unit": "pmol/L"
      }
    ],
    "significance": "Endogenous opioid neuropeptide co-secreted with ACTH from pituitary POMC. Modulates pain perception and autonomic responses to severe physiological stress.",
    "significanceAr": "ببتيد أفيوني داخلي يفرز مع ACTH من النخامى ويسكن الألم أثناء الشدة الفيزيولوجية الحادة والولادة.",
    "tags": [
      "pituitary",
      "beta-endorphin",
      "neuropeptide"
    ]
  },
  {
    "id": "urine_color",
    "name": "Urine Color",
    "nameAr": "لون البول",
    "aliases": [
      "Color Urine",
      "مظهر البول"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "Pale Yellow to Amber",
        "unit": "color",
        "note": "Due to urochrome pigment"
      },
      {
        "group": "Red / Pink / Brown",
        "value": "Hematuria / Hemoglobinuria / Myoglobinuria",
        "unit": "color",
        "note": "Also beets, rifampin, phenazopyridine"
      },
      {
        "group": "Dark Brown / Tea-Colored / Cola",
        "value": "Bilirubinuria / Glomerulonephritis / Severe Myoglobinuria",
        "unit": "color",
        "alert": "critical_high"
      },
      {
        "group": "Milky White",
        "value": "Chyluria / Massive Pyuria",
        "unit": "color"
      }
    ],
    "significance": "Gross macroscopic examination. Red/brown suggests blood, hemoglobin, myoglobin, porphyrins, or drugs (rifampin, senna, phenazopyridine). Dark tea-colored indicates conjugated hyperbilirubinemia or acute glomerulonephritis.",
    "significanceAr": "الفحص العياني للون البول. اللون الأحمر/البني يدل على البيلة الدموية أو الهيموغلوبينية أو العضلية أو دواء ريفامبيسين. واللون الشبيه بالشاي يدل على انسداد الصفراء أو التهاب كبيبات الكلى الحاد.",
    "tags": [
      "ua",
      "urinalysis",
      "color",
      "hematuria"
    ]
  },
  {
    "id": "urine_clarity",
    "name": "Urine Clarity / Turbidity",
    "nameAr": "شفافية / عكارة البول",
    "aliases": [
      "Clarity Urine",
      "Urine Turbidity",
      "عكارة البول"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal",
        "value": "Clear",
        "unit": "grade"
      },
      {
        "group": "Slightly Cloudy",
        "value": "Precipitated crystals / Mucus / Squamous cells",
        "unit": "grade"
      },
      {
        "group": "Turbid / Cloudy (Pathologic)",
        "value": "Leukocytes (Pyuria) / Bacteria / RBCs / Lipids",
        "unit": "grade",
        "note": "High likelihood of urinary tract infection"
      }
    ],
    "significance": "Cloudiness can be physiological (amorphous phosphate precipitation in alkaline urine) or pathological (pyuria, bacteriuria, heavy hematuria, chyluria).",
    "significanceAr": "يكون طبيعياً رائقاً. تعكره قد يكون فيزيولوجياً بترسب أملاح الفوسفات، أو مرضياً بسبب القيح والبكتيريا وخلايا الدم البيضاء في إنتانات المسالك البولية.",
    "tags": [
      "ua",
      "urinalysis",
      "clarity",
      "uti"
    ]
  },
  {
    "id": "urine_sg_dipstick",
    "name": "Urine Specific Gravity (Dipstick)",
    "nameAr": "الكثافة النوعية للبول (الشريط)",
    "aliases": [
      "Dipstick SG"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Range",
        "value": "1.005 – 1.030",
        "unit": "ratio"
      },
      {
        "group": "Dilute (<1.005)",
        "value": "< 1.005",
        "unit": "ratio",
        "note": "High fluid intake, diabetes insipidus"
      },
      {
        "group": "Concentrated (>1.030)",
        "value": "> 1.030",
        "unit": "ratio",
        "note": "Dehydration, SIADH, glycosuria, proteinuria"
      }
    ],
    "significance": "Measures ionic concentration (pKa change of a pretreated polyelectrolyte on strip). Unlike refractometer, strip SG does NOT detect non-ionic solutes (glucose, urea, radiocontrast).",
    "significanceAr": "يقيس التركيز الشاردي عبر شريط البول. على عكس المقياس البصري، لا يتأثر الشريط بالمواد غير المتأينة كالسكريات وصبغات الأشعة.",
    "tags": [
      "ua",
      "dipstick",
      "specific-gravity"
    ]
  },
  {
    "id": "urine_ph_dipstick",
    "name": "Urine pH (Dipstick)",
    "nameAr": "حموضة البول (الشريط الكاشف)",
    "aliases": [
      "Dipstick pH"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Range",
        "value": "5.0 – 8.0",
        "unit": "pH units"
      },
      {
        "group": "Acidic (<5.5)",
        "value": "< 5.5",
        "unit": "pH units",
        "note": "High protein diet, metabolic acidosis, uric acid stone formation"
      },
      {
        "group": "Alkaline (>7.5)",
        "value": "> 7.5",
        "unit": "pH units",
        "note": "Vegetarian diet, Proteus UTI (urease splitter), Distal RTA"
      }
    ],
    "significance": "Utilizes double indicator system (methyl red and bromothymol blue). Persistently alkaline urine with UTI suggests urea-splitting organisms (Proteus, Klebsiella).",
    "significanceAr": "يعتمد على مؤشري أحمر الميثيل وأزرق البروموثيمول. قلوية البول مع الإنتان البولي توجه بشدة لوجود بكتيريا مفككة لليوريا كالمتقلبات (Proteus).",
    "tags": [
      "ua",
      "dipstick",
      "ph"
    ]
  },
  {
    "id": "urine_protein_dipstick",
    "name": "Urine Protein Dipstick",
    "nameAr": "بروتين البول (الشريط الكاشف)",
    "aliases": [
      "Dipstick Protein",
      "زلال شريط البول"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Negative",
        "value": "Negative (< 10 mg/dL)",
        "unit": "semi-quantitative"
      },
      {
        "group": "Trace",
        "value": "Trace (10 – 20 mg/dL)",
        "unit": "semi-quantitative"
      },
      {
        "group": "1+ Positive",
        "value": "30 mg/dL (approx 300 mg/day)",
        "unit": "semi-quantitative"
      },
      {
        "group": "2+ Positive",
        "value": "100 mg/dL (approx 1000 mg/day)",
        "unit": "semi-quantitative"
      },
      {
        "group": "3+ Positive (Significant)",
        "value": "300 mg/dL (approx 3000 mg/day)",
        "unit": "semi-quantitative"
      },
      {
        "group": "4+ Positive (Nephrotic)",
        "value": "≥ 1000 mg/dL (>3500 mg/day)",
        "unit": "semi-quantitative",
        "alert": "critical_high",
        "note": "Nephrotic range proteinuria"
      }
    ],
    "significance": "Based on protein error of indicators (tetrabromphenol blue). Highly sensitive to albumin, but POORLY sensitive to globulins, Bence Jones light chains, or tubular microproteins (use sulfosalicylic acid test for non-albumin proteinuria).",
    "significanceAr": "حساس جداً للألبومين وضعيف الحساسية للغلوبولينات وسلاسل بنس جونس الخفيفة في المايلوما (يتطلب كشفها فحص حمض السلفوساليسيليك SSA).",
    "tags": [
      "ua",
      "dipstick",
      "proteinuria",
      "albumin"
    ]
  },
  {
    "id": "urine_glucose_dipstick",
    "name": "Urine Glucose Dipstick",
    "nameAr": "جلوكوز البول (الشريط الكاشف)",
    "aliases": [
      "Dipstick Glucose",
      "سكر البول"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative (< 15 mg/dL)",
        "unit": "semi-quantitative"
      },
      {
        "group": "Trace / 1+",
        "value": "100 – 250 mg/dL",
        "unit": "semi-quantitative"
      },
      {
        "group": "2+ to 4+",
        "value": "500 – ≥ 2000 mg/dL",
        "unit": "semi-quantitative",
        "note": "Serum glucose exceeds renal threshold (~180 mg/dL) or patient is on SGLT2 inhibitor"
      }
    ],
    "significance": "Glucose oxidase-peroxidase reaction. Glucosuria appears when blood glucose exceeds renal tubular absorptive threshold (~180 mg/dL), in pregnancy (lower threshold), or with SGLT2 inhibitors (empagliflozin, dapagliflozin).",
    "significanceAr": "تظهر البيلة السكرية عندما يتجاوز سكر الدم العتبة الكلوية (~180 مجم/دل)، أو في الحمل لنقص العتبة، أو عند تناول أدوية مثبطات SGLT2 الحديثة.",
    "tags": [
      "ua",
      "dipstick",
      "glucose",
      "glucosuria",
      "sglt2"
    ]
  },
  {
    "id": "urine_ketones_dipstick",
    "name": "Urine Ketones Dipstick",
    "nameAr": "كيتونات البول (الشريط الكاشف)",
    "aliases": [
      "Dipstick Ketones",
      "كيتون البول"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative (< 5 mg/dL)",
        "unit": "semi-quantitative"
      },
      {
        "group": "Trace (5 mg/dL)",
        "value": "Trace",
        "unit": "semi-quantitative"
      },
      {
        "group": "Small (15 mg/dL)",
        "value": "1+",
        "unit": "semi-quantitative"
      },
      {
        "group": "Moderate (40 mg/dL)",
        "value": "2+",
        "unit": "semi-quantitative"
      },
      {
        "group": "Large (≥80-160 mg/dL)",
        "value": "3+ to 4+",
        "unit": "semi-quantitative",
        "alert": "critical_high",
        "note": "High risk of DKA, starvation ketosis, alcoholic ketoacidosis"
      }
    ],
    "significance": "Sodium nitroprusside reaction detecting acetoacetate (and acetone weakly), but NOT beta-hydroxybutyrate. High in DKA, severe fasting, prolonged vomiting, ketogenic diet.",
    "significanceAr": "يكشف حمض الأسيتوأسيتات بتفاعل النيتروبروسيد ولا يكشف بيتا-هيدروكسي بوتيرات. يرتفع في الحماض الكيتوني السكري والصيام المديد والحمية الكيتونية.",
    "tags": [
      "ua",
      "dipstick",
      "ketones",
      "dka"
    ]
  },
  {
    "id": "urine_bilirubin_dipstick",
    "name": "Urine Bilirubin Dipstick",
    "nameAr": "بيليروبين البول (الشريط الكاشف)",
    "aliases": [
      "Dipstick Bilirubin",
      "صفراء البول"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative",
        "unit": "semi-quantitative"
      },
      {
        "group": "Positive (Conjugated Hyperbilirubinemia)",
        "value": "Small to Large (1+ to 3+)",
        "unit": "semi-quantitative",
        "alert": "critical_high",
        "note": "Direct bilirubin is water-soluble; presence confirms hepatobiliary disease / biliary obstruction (never seen in unconjugated hemolysis)"
      }
    ],
    "significance": "Detects only conjugated (water-soluble) bilirubin. Unconjugated bilirubin cannot pass the glomerular filter. Positive test definitively indicates hepatobiliary disease or biliary obstruction; NEVER positive in pure hemolysis.",
    "significanceAr": "يكشف فقط البيليروبين المباشر المقترن المنحل بالماء. إيجابيته تؤكد وجود مرض كبدي صفراوي أو انسداد قنوات، ولا يظهر إطلاقاً في انحلال الدم غير المقترن.",
    "tags": [
      "ua",
      "dipstick",
      "bilirubin",
      "biliary"
    ]
  },
  {
    "id": "urine_urobilinogen_dipstick",
    "name": "Urine Urobilinogen Dipstick",
    "nameAr": "يوروبيلينوجين البول (الشريط الكاشف)",
    "aliases": [
      "Dipstick Urobilinogen"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "0.2 – 1.0",
        "unit": "mg/dL",
        "note": "Ehrlich units"
      },
      {
        "group": "Elevated (>2.0 mg/dL)",
        "value": "> 2.0",
        "unit": "mg/dL",
        "note": "Hemolytic anemia, liver parenchymal damage (hepatitis, cirrhosis)"
      },
      {
        "group": "Absent / Zero",
        "value": "Undetectable / 0.0",
        "unit": "mg/dL",
        "note": "Complete obstructive jaundice (biliary obstruction prevents bilirubin reaching gut)"
      }
    ],
    "significance": "Colorless product of intestinal bacterial reduction of bilirubin. Elevated in hemolysis and hepatitis. Completely ABSENT in complete obstructive jaundice (acholic stools).",
    "significanceAr": "ينتج عن تخمير بكتيريا الأمعاء للبيليروبين. يرتفع في انحلال الدم والتهاب الكبد، ويغيب تماماً (صفر) في الانسداد الصفراوي التام مع براز أبيض طباشيري.",
    "tags": [
      "ua",
      "dipstick",
      "urobilinogen",
      "hemolysis",
      "jaundice"
    ]
  },
  {
    "id": "urine_blood_dipstick",
    "name": "Urine Blood / Hemoglobin Dipstick",
    "nameAr": "الدم / الهيموجلوبين في البول (الشريط الكاشف)",
    "aliases": [
      "Dipstick Blood",
      "دم شريط البول"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative",
        "unit": "semi-quantitative"
      },
      {
        "group": "Trace / Non-Hemolyzed Speckled",
        "value": "Trace (approx 5-10 RBC/µL)",
        "unit": "semi-quantitative"
      },
      {
        "group": "Moderate to Large (Hemolyzed Uniform)",
        "value": "2+ to 3+",
        "unit": "semi-quantitative",
        "alert": "critical_high",
        "note": "Hematuria, free hemoglobin (hemolysis), or free myoglobin (rhabdomyolysis)"
      }
    ],
    "significance": "Pseudoperoxidase activity of heme. Catalyzes oxidation of chromogen. Positive for intact RBCs (speckled pattern), free hemoglobin (intravascular hemolysis), or myoglobin (rhabdomyolysis). If dipstick is positive but microscopy shows NO RBCs, suspect myoglobinuria or hemoglobinuria.",
    "significanceAr": "يكشف نشاط البيروكسيداز الزائف للهيم. يكون إيجابياً لوجود كريات دم حمراء أو هيموجلوبين أو ميوجلوبين. إيجابية الشريط مع غياب الكريات تحت المجهر تدل على انحلال العضلات أو الدم.",
    "tags": [
      "ua",
      "dipstick",
      "blood",
      "hematuria",
      "myoglobinuria"
    ]
  },
  {
    "id": "urine_nitrite_dipstick",
    "name": "Urine Nitrite Dipstick",
    "nameAr": "النتريت في البول (الشريط الكاشف)",
    "aliases": [
      "Dipstick Nitrite",
      "نتريت البول"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative",
        "unit": "qualitative"
      },
      {
        "group": "Positive (Bacteriuria)",
        "value": "Positive (Pink coloration)",
        "unit": "qualitative",
        "note": "Diagnostic of Gram-negative bacteriuria (E. coli, Klebsiella, Proteus, Enterobacter)"
      }
    ],
    "significance": "Detects conversion of dietary nitrate to nitrite by Gram-negative enterobacteria containing nitrate reductase. Requires urine to incubate in bladder for ≥4 hours. Enterococcus and Pseudomonas do NOT reduce nitrate (false negatives).",
    "significanceAr": "يكشف تحويل النترات إلى نتريت بواسطة البكتيريا المعوية سالبة الغرام (E. coli). يتطلب بقاء البول بالمثانة 4 ساعات. لا تنتجه بكتيريا المكورات المعوية أو الزوائف.",
    "tags": [
      "ua",
      "dipstick",
      "nitrite",
      "uti",
      "bacteriuria"
    ]
  },
  {
    "id": "urine_leukocyte_esterase_dipstick",
    "name": "Urine Leukocyte Esterase Dipstick",
    "nameAr": "إستيراز الكريات البيضاء (الشريط الكاشف)",
    "aliases": [
      "LE Dipstick",
      "Leukocyte Esterase",
      "إنزيم الصديد"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative",
        "unit": "semi-quantitative"
      },
      {
        "group": "Trace / Small",
        "value": "Trace to 1+",
        "unit": "semi-quantitative"
      },
      {
        "group": "Moderate (Approx 75 WBC/µL)",
        "value": "2+",
        "unit": "semi-quantitative"
      },
      {
        "group": "Large (Approx ≥500 WBC/µL)",
        "value": "3+",
        "unit": "semi-quantitative",
        "note": "High sensitivity for urinary tract inflammation / pyuria"
      }
    ],
    "significance": "Cleaves indoxyl carbonic acid ester via esterases found in azurophilic granules of neutrophils (intact or lysed). Highly sensitive marker for pyuria and UTI.",
    "significanceAr": "يكشف أنزيم الإستيراز في حبيبات العدلات سواء كانت سليمة أو متحللة. فحص عالي الحساسية للبيلة القيحية والتهاب المسالك البولية.",
    "tags": [
      "ua",
      "dipstick",
      "leukocyte-esterase",
      "pyuria",
      "uti"
    ]
  },
  {
    "id": "urine_microscopic_wbc",
    "name": "Urine White Blood Cells (Microscopic)",
    "nameAr": "خلايا الدم البيضاء في البول (المجهري)",
    "aliases": [
      "Urine WBC",
      "Pus Cells",
      "خلايا الصديد بالمجهر"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 – 5",
        "unit": "per HPF"
      },
      {
        "group": "Pyuria (Infection / Inflammation)",
        "value": "> 5 – 10",
        "unit": "per HPF",
        "note": "UTI, urethritis, interstitial cystitis, acute interstitial nephritis"
      },
      {
        "group": "Marked Pyuria / Gross Pus",
        "value": "> 50",
        "unit": "per HPF",
        "alert": "critical_high",
        "note": "Severe bacterial pyelonephritis or cystitis"
      }
    ],
    "significance": "Quantified on centrifuged sediment under high-power field (400x). Sterile pyuria (WBCs with negative standard culture) suggests Chlamydia, Ureaplasma, Genitourinary Tuberculosis, or drug-induced interstitial nephritis.",
    "significanceAr": "تقاس في راسب البول المركز تحت التكبير العالي. البيلة القيحية العقيمة (صديد مع زرع سلبي) تشير للكلاميديا أو سل الجهاز البولي التناسلي أو التهاب الكلية الخلالي التحسسي.",
    "tags": [
      "ua",
      "microscopy",
      "wbc",
      "pyuria",
      "uti"
    ]
  },
  {
    "id": "urine_microscopic_rbc",
    "name": "Urine Red Blood Cells (Microscopic)",
    "nameAr": "خلايا الدم الحمراء في البول (المجهري)",
    "aliases": [
      "Urine RBC",
      "Microscopic Hematuria",
      "كريات الدم الحمراء بالمجهر"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 – 3",
        "unit": "per HPF"
      },
      {
        "group": "Microscopic Hematuria Definition (AUA Criteria)",
        "value": "≥ 3",
        "unit": "per HPF",
        "note": "Requires urologic workup if persistent (cystoscopy + CT urogram)"
      },
      {
        "group": "Gross / Heavy Hematuria",
        "value": "> 50",
        "unit": "per HPF",
        "alert": "critical_high",
        "note": "Stones, malignancy, severe glomerulonephritis, trauma"
      }
    ],
    "significance": "AUA definition of microhematuria is ≥3 RBCs/HPF on two of three properly collected specimens. Dysmorphic RBCs with acanthocytes indicate glomerular bleeding; isomorphic RBCs indicate urological source (stones, tumor).",
    "significanceAr": "تعريف الجمعية الأمريكية للبيلة الدموية هو ≥3 كريات/ساحة. وجود كريات مشوهة (Acanthocytes) يدل على نزف كبيبي، بينما الكريات متماثلة الشكل تدل على سبب مسالكي (حصى، أورام).",
    "tags": [
      "ua",
      "microscopy",
      "rbc",
      "hematuria"
    ]
  },
  {
    "id": "squamous_epithelial_cells",
    "name": "Squamous Epithelial Cells",
    "nameAr": "الخلايا الظهارية الحرشفية في البول",
    "aliases": [
      "Squamous Epithelial",
      "SEC"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Clean Catch Midstream Baseline",
        "value": "0 – 5",
        "unit": "per HPF"
      },
      {
        "group": "Contaminated Specimen Flag",
        "value": "> 15 – 20",
        "unit": "per HPF",
        "note": "Specimen contaminated with perineal / urethral flora; reject and recollect clean catch"
      }
    ],
    "significance": "Large polygonal cells with abundant cytoplasm and small nuclei from lower urethra or external genitalia. High numbers indicate significant contamination; reject for culture.",
    "significanceAr": "خلايا كبيرة من مجرى البول الخارجي أو الفرج. وجودها بكثرة (>15-20) يدل على تلوث العينة بإفرازات الجلد وتستوجب إعادة جمع عينة نظيفة.",
    "tags": [
      "ua",
      "microscopy",
      "contamination"
    ]
  },
  {
    "id": "renal_tubular_epithelial_cells",
    "name": "Renal Tubular Epithelial Cells (RTE)",
    "nameAr": "الخلايا الظهارية الأنبوبية الكلوية (RTE)",
    "aliases": [
      "RTE Cells",
      "Renal Tubular Epithelial"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "0 – 1",
        "unit": "per HPF"
      },
      {
        "group": "Acute Tubular Damage",
        "value": "> 3",
        "unit": "per HPF",
        "alert": "critical_high",
        "note": "Pathognomonic of Acute Tubular Necrosis (ATN), heavy metal poisoning, allograft rejection"
      }
    ],
    "significance": "Polyhedral cells with large round central nuclei. Presence of >3 RTE cells or RTE casts confirms active tubular necrosis or severe nephrotoxicity.",
    "significanceAr": "خلايا أنبوبية كلوية؛ يشير وجود أكثر من 3 خلايا إلى نخر أنبوبي حاد (ATN) أو تسمم كلوي دوائي أو رفض الطعم المزروع.",
    "tags": [
      "ua",
      "microscopy",
      "rte",
      "atn"
    ]
  },
  {
    "id": "hyaline_casts",
    "name": "Hyaline Casts (Microscopic)",
    "nameAr": "الأسطوانات الزجاجية (Hyaline Casts)",
    "aliases": [
      "Hyaline Casts"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 – 2",
        "unit": "per LPF",
        "note": "Low power field (100x)"
      },
      {
        "group": "Physiologic Elevation",
        "value": "3 – 10",
        "unit": "per LPF",
        "note": "Strenuous exercise, dehydration, concentrated urine, diuretic therapy"
      }
    ],
    "significance": "Formed purely from precipitated Tamm-Horsfall mucoprotein (uromodulin) in distal convoluted tubules. Frequently benign; increased with dehydration and exercise.",
    "significanceAr": "تتكون حصراً من بروتين تام-هورزفال الرغوي المترسب؛ تعد سليمة وتكثر في التجفاف بعد التمارين الرياضية الشديدة وتناول المدرات.",
    "tags": [
      "ua",
      "microscopy",
      "casts",
      "hyaline"
    ]
  },
  {
    "id": "granular_casts",
    "name": "Granular Casts (Microscopic)",
    "nameAr": "الأسطوانات الحبيبية (Granular Casts)",
    "aliases": [
      "Granular Casts",
      "Muddy Brown Casts"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "0 – 1 (Fine granular)",
        "unit": "per LPF"
      },
      {
        "group": "Pathognomonic 'Muddy Brown' Coarse Granular Casts",
        "value": "Numerous / Heavy",
        "unit": "per LPF",
        "alert": "critical_high",
        "note": "Pathognomonic hallmark of Acute Tubular Necrosis (ATN)"
      }
    ],
    "significance": "Derived from degenerating cellular casts and necrotic tubular epithelium. 'Muddy brown' granular casts are the diagnostic hallmark of Acute Tubular Necrosis (ATN).",
    "significanceAr": "تنتج عن تنكس الخلايا الأنبوبية المتموتة؛ وتعتبر الأسطوانات الحبيبية البنية الطينية (Muddy Brown Casts) العلامة المشخصة للنخر الأنبوبي الحاد (ATN).",
    "tags": [
      "ua",
      "microscopy",
      "casts",
      "atn",
      "muddy-brown"
    ]
  },
  {
    "id": "cellular_renal_casts",
    "name": "Cellular / Epithelial Casts",
    "nameAr": "الأسطوانات الخلوية الظهارية",
    "aliases": [
      "Epithelial Casts",
      "RTE Casts"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 (Absent)",
        "unit": "per LPF"
      },
      {
        "group": "Pathologic Presence",
        "value": "Present",
        "unit": "per LPF",
        "alert": "critical_high",
        "note": "Indicates severe tubular injury / necrosis"
      }
    ],
    "significance": "Contains sloughed renal tubular epithelial cells embedded in Tamm-Horsfall matrix. Indicates severe tubular damage.",
    "significanceAr": "تحتوي على خلايا ظهارية كلوية متهدمة ضمن قالب بروتيني، وتدل على أذية أنبوبية شديدة.",
    "tags": [
      "ua",
      "microscopy",
      "casts"
    ]
  },
  {
    "id": "waxy_casts",
    "name": "Waxy Casts (Microscopic)",
    "nameAr": "الأسطوانات الشمعية (Waxy Casts)",
    "aliases": [
      "Waxy Casts",
      "Broad Casts",
      "أسطوانات شمعية"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 (Absent)",
        "unit": "per LPF"
      },
      {
        "group": "Pathologic Presence",
        "value": "Present",
        "unit": "per LPF",
        "alert": "critical_high",
        "note": "Indicates severe chronic renal disease / prolonged tubular stasis ('renal failure casts')"
      }
    ],
    "significance": "Final stage of cast degeneration. Characterized by high refractive index, dull waxy luster, and notched/cracked margins. Reflects extreme tubular stasis in advanced chronic renal failure ('renal failure casts').",
    "significanceAr": "المرحلة النهائية لتنكس الأسطوانات وتتميز بحواف مشققة ولمعان شمعي. تعكس ركوداً أنبوبياً مديداً في القصور الكلوي المزمن المتقدم.",
    "tags": [
      "ua",
      "microscopy",
      "casts",
      "waxy",
      "ckd"
    ]
  },
  {
    "id": "rbc_casts",
    "name": "Red Blood Cell Casts (Microscopic)",
    "nameAr": "أسطوانات كريات الدم الحمراء (RBC Casts)",
    "aliases": [
      "RBC Casts",
      "Red Cell Casts",
      "أسطوانات دموية"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 (Absent)",
        "unit": "per LPF"
      },
      {
        "group": "Pathologic Presence (Diagnostic)",
        "value": "≥ 1",
        "unit": "per LPF",
        "alert": "critical_high",
        "note": "Pathognomonic hallmark of Glomerulonephritis (e.g., Post-streptococcal, IgA nephropathy, Lupus nephritis, ANCA vasculitis)"
      }
    ],
    "significance": "Pathognomonic of acute glomerulonephritis or vasculitis. Formed when RBCs leak across damaged glomerular basement membrane and become trapped in Tamm-Horsfall mucoprotein. Localizes hematuria to the renal parenchyma.",
    "significanceAr": "العلامة المشخصة لالتهاب كبيبات الكلى الحاد أو التهاب الأوعية المناعي (التهاب ما بعد العقدية، اعتلال IgA، الذئبة الحمراء). تثبت أن النزف كلوي كبيبي وليس مسالك.",
    "tags": [
      "ua",
      "microscopy",
      "rbc-casts",
      "glomerulonephritis",
      "nephritic"
    ]
  },
  {
    "id": "wbc_casts",
    "name": "White Blood Cell Casts (Microscopic)",
    "nameAr": "أسطوانات كريات الدم البيضاء (WBC Casts)",
    "aliases": [
      "WBC Casts",
      "Leukocyte Casts",
      "أسطوانات قيحية"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 (Absent)",
        "unit": "per LPF"
      },
      {
        "group": "Pathologic Presence (Diagnostic)",
        "value": "≥ 1",
        "unit": "per LPF",
        "alert": "critical_high",
        "note": "Pathognomonic of Upper UTI (Acute Pyelonephritis) or Acute Interstitial Nephritis (AIN); differentiates from lower cystitis"
      }
    ],
    "significance": "Differentiates upper urinary tract infection (Acute Pyelonephritis) from lower urinary tract infection (Cystitis). Also seen in Acute Interstitial Nephritis (AIN).",
    "significanceAr": "تفرق التهاب المسالك البولية العلوية (التهاب الحويضة والكلية الحاد) عن التهاب المثانة السفلي. تظهر أيضاً في التهاب الكلية الخلالي الحاد.",
    "tags": [
      "ua",
      "microscopy",
      "wbc-casts",
      "pyelonephritis",
      "ain"
    ]
  },
  {
    "id": "fatty_casts_oval_fat_bodies",
    "name": "Fatty Casts & Oval Fat Bodies",
    "nameAr": "الأسطوانات الدهنية والأجسام الدهنية البيضوية",
    "aliases": [
      "Fatty Casts",
      "Oval Fat Bodies",
      "Maltese Cross"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 (Absent)",
        "unit": "per LPF"
      },
      {
        "group": "Pathologic Presence (Diagnostic)",
        "value": "Present",
        "unit": "per LPF",
        "alert": "critical_high",
        "note": "Pathognomonic hallmark of Nephrotic Syndrome (lipiduria); shows 'Maltese cross' pattern under polarized light"
      }
    ],
    "significance": "Renal tubular cells engorged with reabsorbed lipids (cholesterol esters). Display pathognomonic 'Maltese cross' birefringence under polarized light. Hallmark of Nephrotic Syndrome.",
    "significanceAr": "خلايا أنبوبية محملة بالكولسترول والدهون؛ تظهر شكل 'صليب مالطا' المضيء تحت الضوء المستقطب. العلامة المميزة للمتلازمة النفروزية (البيلة الشحمية).",
    "tags": [
      "ua",
      "microscopy",
      "fatty-casts",
      "nephrotic-syndrome",
      "maltese-cross"
    ]
  },
  {
    "id": "calcium_oxalate_crystals",
    "name": "Calcium Oxalate Crystals",
    "nameAr": "بلورات أوكسالات الكالسيوم",
    "aliases": [
      "Calcium Oxalate",
      "CaOx Crystals"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal (Few in acidic/neutral urine)",
        "value": "0 – 5",
        "unit": "per HPF",
        "note": "Dihydrate: octahedral 'envelope' shape"
      },
      {
        "group": "Monohydrate Crystals (Dumbbell / Needle)",
        "value": "Present in large numbers",
        "unit": "per HPF",
        "alert": "critical_high",
        "note": "Pathognomonic sign of Ethylene Glycol (antifreeze) poisoning"
      }
    ],
    "significance": "Most common constituent of renal calculi. Dihydrate form appears as 'envelopes'; monohydrate form appears as 'dumbbells' or needles and is pathognomonic for ethylene glycol intoxication.",
    "significanceAr": "أكثر أنواع حصيات الكلى شيوعاً. ثنائية الهيدرات تشبه 'ظرف الرسائل'. أما أحادية الهيدرات الإبرية فظهورها المفاجئ علامة مشخصة للتسمم بالإيثيلين جلايكول (مانع تجمد السيارات).",
    "tags": [
      "ua",
      "microscopy",
      "crystals",
      "calcium-oxalate",
      "ethylene-glycol"
    ]
  },
  {
    "id": "triple_phosphate_crystals",
    "name": "Triple Phosphate Crystals (Struvite)",
    "nameAr": "بلورات الفوسفات الثلاثية (الستروفيت)",
    "aliases": [
      "Struvite Crystals",
      "Triple Phosphate",
      "Coffin-lid crystals"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "Rare to Few in alkaline urine",
        "unit": "per HPF",
        "note": "Magnesium ammonium phosphate; 'coffin-lid' morphology"
      },
      {
        "group": "Struvite Staghorn Calculus Warning",
        "value": "Abundant",
        "unit": "per HPF",
        "note": "Urea-splitting UTI (Proteus mirabilis); forms staghorn calculi"
      }
    ],
    "significance": "Magnesium ammonium phosphate with classic 'coffin-lid' shape in alkaline urine. Produced by urease-producing bacteria (Proteus, Klebsiella), leading to giant staghorn calculi.",
    "significanceAr": "فوسفات المغنيسيوم والأمونيوم بشكل 'غطاء التابوت' في البول القلوي. تنتجها بكتيريا البروتيوس المفككة لليوريا وتشكل الحصيات المرجانية الكبيرة المتشعبة.",
    "tags": [
      "ua",
      "microscopy",
      "crystals",
      "struvite",
      "proteus"
    ]
  },
  {
    "id": "uric_acid_crystals",
    "name": "Uric Acid Crystals",
    "nameAr": "بلورات حمض اليوريك",
    "aliases": [
      "Urate Crystals",
      "Uric Acid Crystal"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal in Acidic Urine",
        "value": "0 – Few",
        "unit": "per HPF",
        "note": "Pleomorphic: rhombic, whetstone, or rosettes (yellow-orange-brown)"
      },
      {
        "group": "Abundant (Acute Urate Nephropathy)",
        "value": "Massive precipitation",
        "unit": "per HPF",
        "alert": "critical_high",
        "note": "Tumor lysis syndrome risk"
      }
    ],
    "significance": "Forms strictly in acidic urine (pH <5.5). Pleomorphic rhomboids or rosettes. Soluble in alkaline urine. Massive precipitation occurs in tumor lysis syndrome.",
    "significanceAr": "تتشكل حصراً في الوسط الحمضي (pH <5.5) بأشكال معينية صفراء مائلة للحمرة. تنحل بقلوية البول، وترسبها الكثيف يحدث في متلازمة انحلال الورم.",
    "tags": [
      "ua",
      "microscopy",
      "crystals",
      "uric-acid"
    ]
  },
  {
    "id": "cystine_crystals",
    "name": "Cystine Crystals",
    "nameAr": "بلورات السيستين",
    "aliases": [
      "Cystine Crystals",
      "Hexagonal crystals"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "0 (Never normal)",
        "unit": "per HPF"
      },
      {
        "group": "Pathologic Presence (Diagnostic)",
        "value": "Present (Colorless flat hexagonal plates)",
        "unit": "per HPF",
        "alert": "critical_high",
        "note": "Pathognomonic of Cystinuria (inherited defect in dibasic amino acid transporter COLA)"
      }
    ],
    "significance": "Pathognomonic of Cystinuria (autosomal recessive defect in renal dibasic amino acid transport: Cystine, Ornithine, Lysine, Arginine). Hexagonal benzene-ring morphology.",
    "significanceAr": "علامة مشخصة قطعية لداء البيلة السيستينية الوراثي (خلل نقل السيستين والأورنيثين والليسين والأرجينين). تظهر كصفائح سداسية الأضلاع كحلقة البنزين.",
    "tags": [
      "ua",
      "microscopy",
      "crystals",
      "cystinuria",
      "genetics"
    ]
  },
  {
    "id": "urine_bacteria_microscopic",
    "name": "Urine Bacteria (Microscopic)",
    "nameAr": "البكتيريا في البول (المجهري)",
    "aliases": [
      "Urine Bacteria",
      "Bacteriuria"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal Uninfected Midstream",
        "value": "None to Few",
        "unit": "per HPF"
      },
      {
        "group": "Bacteriuria / Active Infection",
        "value": "Moderate to Many (≥ 10^5 CFU/mL equivalent)",
        "unit": "per HPF",
        "note": "Significant bacteriuria; correlate with pyuria (WBC) and symptoms"
      }
    ],
    "significance": "Rods or cocci visible at 400x. Clinically significant when accompanied by pyuria (>5-10 WBC/HPF) in symptomatic patients.",
    "significanceAr": "رؤية عصيات أو مكورات بكتيرية تحت المجهر؛ تكون ذات دلالة مرضية حقيقية عند ترافقها مع صديد بالبول وأعراض سريرية.",
    "tags": [
      "ua",
      "microscopy",
      "bacteria",
      "uti"
    ]
  },
  {
    "id": "urine_yeast_microscopic",
    "name": "Urine Yeast / Hyphae (Microscopic)",
    "nameAr": "الخمائر والفطور في البول (المجهري)",
    "aliases": [
      "Urine Yeast",
      "Candida Urine",
      "فطريات البول"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal",
        "value": "None",
        "unit": "per HPF"
      },
      {
        "group": "Candiduria / Vaginal Contamination",
        "value": "Present (Budding yeast ± pseudohyphae)",
        "unit": "per HPF",
        "note": "Frequent in diabetics, catheterized patients, or broad-spectrum antibiotic use"
      }
    ],
    "significance": "Budding yeast cells (often confused with RBCs, but insoluble in acetic acid) and pseudohyphae. Common in diabetes mellitus, Foley catheter use, immunosuppression, and vaginal contamination.",
    "significanceAr": "خلايا خمائر متبرعمة وخيوط فطرية كاذبة (المبيضات البيض). شائعة لدى مرضى السكري والقثاطر البولية والمناعة الضعيفة وتلوث البول بمفرزات المهبل.",
    "tags": [
      "ua",
      "microscopy",
      "yeast",
      "candida"
    ]
  },
  {
    "id": "urine_trichomonas_microscopic",
    "name": "Trichomonas vaginalis in Urine",
    "nameAr": "المشعرات المهبلية في البول (تريكوموناس)",
    "aliases": [
      "Trichomonas",
      "Urine Trichomonas"
    ],
    "category": "ua",
    "ranges": [
      {
        "group": "Normal",
        "value": "Negative",
        "unit": "qualitative"
      },
      {
        "group": "Positive (Infection)",
        "value": "Motile flagellated trophozoites observed",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Sexually transmitted infection; treat patient and sexual partner with Metronidazole"
      }
    ],
    "significance": "Flagellated protozoan demonstrating characteristic jerky, rotary motility on fresh uncentrifuged wet mount. Sexually transmitted; treat sexual partner.",
    "significanceAr": "طفيلي أوالي سوطي يتميز بحركة ارتعاشية دورانية سريعة في العينة الطازجة. عدوى منتقلة بالجنس تستوجب علاج المريض وشريكه بالميترونيدازول.",
    "tags": [
      "ua",
      "microscopy",
      "parasites",
      "trichomonas",
      "sti"
    ]
  },
  {
    "id": "serum_zinc",
    "name": "Serum Zinc",
    "nameAr": "الزنك في المصل",
    "aliases": [
      "Zinc",
      "Serum Zn",
      "الزنك"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "70 – 120",
        "unit": "µg/dL",
        "note": "10.7 – 18.4 µmol/L"
      },
      {
        "group": "Children",
        "value": "65 – 110",
        "unit": "µg/dL"
      },
      {
        "group": "Deficiency Cutoff",
        "value": "< 60",
        "unit": "µg/dL",
        "alert": "critical_low",
        "note": "Acrodermatitis enteropathica, impaired wound healing, hypogeusia (taste loss), hypogonadism, alopecia"
      },
      {
        "group": "Toxicity Threshold",
        "value": "> 150",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "Nausea, vomiting, competitive copper deficiency (anemia, neutropenia, myelopathy)"
      }
    ],
    "significance": "Essential trace element for >300 metalloenzymes (carbonic anhydrase, DNA/RNA polymerases). Deficiency causes Acrodermatitis enteropathica (periorificial vesiculobullous dermatitis, diarrhea, alopecia), impaired wound healing, hypogeusia, and immune compromise. Excessive zinc ingestion induces severe secondary copper deficiency and myelopathy.",
    "significanceAr": "عنصر زهيد أساسي لأكثر من 300 أنزيم. نقصه يسبب التهاب جلد النهايات المعوي، وفقدان حاسة التذوق، وسوء التئام الجروح، وتساقط الشعر. وفرطه الدوائي يطرد النحاس مسبباً فقر دم واعتلال نخاع.",
    "tags": [
      "minerals",
      "zinc",
      "dermatology",
      "wound-healing",
      "taste"
    ]
  },
  {
    "id": "serum_copper",
    "name": "Serum Copper (Total Cu)",
    "nameAr": "النحاس الكلي في المصل",
    "aliases": [
      "Copper",
      "Serum Cu",
      "النحاس"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "70 – 140",
        "unit": "µg/dL"
      },
      {
        "group": "Adult Females",
        "value": "80 – 155",
        "unit": "µg/dL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "120 – 300",
        "unit": "µg/dL",
        "note": "Estrogen doubles ceruloplasmin synthesis"
      },
      {
        "group": "Infants (<6mo)",
        "value": "20 – 70",
        "unit": "µg/dL"
      },
      {
        "group": "Wilson Disease Classic Serum Finding",
        "value": "< 60",
        "unit": "µg/dL",
        "alert": "critical_low",
        "note": "Paradoxical low total serum copper due to deficient ceruloplasmin (free copper is elevated)"
      },
      {
        "group": "Menkes Kinky Hair Disease (Severe Deficiency)",
        "value": "< 20",
        "unit": "µg/dL",
        "alert": "critical_low",
        "note": "X-linked ATP7A defect; kinky sparse hair, neurodegeneration, early death"
      }
    ],
    "significance": "Cofactor for cytochrome c oxidase, lysyl oxidase, superoxide dismutase, tyrosinase. In Wilson disease (ATP7B mutation), total serum copper is paradoxically LOW (due to low ceruloplasmin), while free copper is elevated and deposits in tissues (Kayser-Fleischer rings, basal ganglia, liver). Menkes disease (ATP7A defect) causes severe systemic copper deficiency.",
    "significanceAr": "عنصر ضروري لأنزيمات التنفس والميالين وتصنيع الميلانين. في داء ويلسون ينخفض نحاس المصل الكلي تناقضياً لنقص السيرولوبلازمين بينما يرتفع الحر ويترسب في الدماغ والقرنية (حلقات كايزر-فلايشر).",
    "tags": [
      "minerals",
      "copper",
      "wilson-disease",
      "menkes",
      "hepatology"
    ]
  },
  {
    "id": "urine_copper_24h",
    "name": "24-Hour Urine Copper Excretion",
    "nameAr": "إطراح النحاس في بول 24 ساعة",
    "aliases": [
      "24h Urine Copper",
      "نحاس البول"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 40",
        "unit": "µg/24h",
        "note": "< 0.6 µmol/day"
      },
      {
        "group": "Equivocal / Asymptomatic Heterozygote",
        "value": "40 – 100",
        "unit": "µg/24h"
      },
      {
        "group": "Wilson Disease Diagnostic Threshold",
        "value": "> 100",
        "unit": "µg/24h",
        "alert": "critical_high",
        "note": "Definitive diagnostic hallmark of symptomatic Wilson disease (>1.6 µmol/24h)"
      },
      {
        "group": "Post-Penicillamine Challenge (Children)",
        "value": "> 1600",
        "unit": "µg/24h",
        "note": "Diagnostic in pediatric suspected Wilson disease"
      }
    ],
    "significance": "Gold standard biochemical test for confirming Wilson disease (hepatolenticular degeneration). Urinary excretion >100 µg/24h (or >40 µg/day with other clinical features) confirms disease. Collected in a trace element-free container.",
    "significanceAr": "المعيار الذهبي الكيميائي لتشخيص داء ويلسون. تجاوز إطراح النحاس في بول 24 ساعة لـ 100 ميكروغرام يثبت المرض قطيعاً؛ يجمع في عبوة خالية من المعادن.",
    "tags": [
      "minerals",
      "copper",
      "wilson-disease",
      "gold-standard"
    ]
  },
  {
    "id": "serum_selenium",
    "name": "Serum Selenium",
    "nameAr": "السيلينيوم في المصل",
    "aliases": [
      "Selenium",
      "Se",
      "سيلينيوم"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "70 – 150",
        "unit": "µg/L",
        "note": "0.89 – 1.90 µmol/L"
      },
      {
        "group": "Deficiency / Keshan Disease Risk",
        "value": "< 45",
        "unit": "µg/L",
        "alert": "critical_low",
        "note": "Keshan disease (endemic cardiomyopathy) and Kashin-Beck osteoarthropathy"
      },
      {
        "group": "Selenosis (Chronic Toxicity)",
        "value": "> 400",
        "unit": "µg/L",
        "alert": "critical_high",
        "note": "Garlic breath odor, alopecia, nail dystrophy/brittleness, peripheral neuropathy"
      }
    ],
    "significance": "Essential component of selenoproteins including glutathione peroxidase and iodothyronine deiodinases. Deficiency causes Keshan disease (congestive cardiomyopathy) and Kashin-Beck disease (chondropathy). Chronic toxicity (selenosis) presents with garlic breath, nail changes, and alopecia.",
    "significanceAr": "يدخل في تركيب أنزيمات الجلوتاثيون بيروكسيداز الواقية من الأكسدة. نقصه يسبب اعتلال عضلة القلب المتوطن (داء كيشان). وتسممه يسبب رائحة الثوم بالنفس وتساقط الشعر وتشوه الأظافر.",
    "tags": [
      "minerals",
      "selenium",
      "keshan",
      "cardiomyopathy",
      "toxicology"
    ]
  },
  {
    "id": "blood_lead_level_bll",
    "name": "Whole Blood Lead Level (BLL)",
    "nameAr": "مستوى الرصاص في الدم الكامل (BLL)",
    "aliases": [
      "Lead",
      "Blood Lead",
      "BLL",
      "Pb",
      "الرصاص في الدم"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "CDC Pediatric Blood Lead Reference Value (BLRV)",
        "value": "< 3.5",
        "unit": "µg/dL",
        "note": "CDC updated threshold for public health action (lowered from 5.0 µg/dL in 2021)"
      },
      {
        "group": "Pediatric Action Level (Environmental Intervention)",
        "value": "≥ 3.5",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "Trigger environmental investigation, nutritional guidance (iron/calcium)"
      },
      {
        "group": "Pediatric Chelation Therapy Threshold (Severe Lead Poisoning)",
        "value": "≥ 45.0",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "Urgent chelation therapy indicated (Succimer / DMSA orally, or CaNa2-EDTA IV)"
      },
      {
        "group": "Life-Threatening Lead Encephalopathy",
        "value": "≥ 70.0",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "Immediate inpatient dual chelation: Dimercaprol (BAL) followed by CaNa2-EDTA; brain edema"
      },
      {
        "group": "OSHA Adult Occupational Action Level",
        "value": "< 20.0",
        "unit": "µg/dL",
        "note": "Medical removal from workplace mandated if BLL ≥50-60 µg/dL"
      }
    ],
    "significance": "Toxic heavy metal that inhibits ALA dehydratase and ferrochelatase in heme synthesis. CDC reference value in children is 3.5 µg/dL (NO safe blood lead level in children). Chronic toxicity causes neurocognitive deficits, developmental delay, Burton lead lines on gingiva, foot/wrist drop (radial neuropathy), and basophilic stippling on peripheral blood smear. Chelation required at ≥45 µg/dL.",
    "significanceAr": "معدن ثقيل شديد السمية يثبط أنزيمات تصنيع الهيم. عتبة مركز CDC للأطفال هي 3.5 ميكروغرام/دل (لا يوجد حد آمن). يسبب تدني الذكاء، شلل العصب الكعبري (هبوط اليد)، خط بيرتون باللثة، وتدريب الدم القاعدي. يعالج بخلب المعادن عند ≥45.",
    "tags": [
      "minerals",
      "toxicology",
      "lead",
      "pediatric",
      "occupational",
      "chelation"
    ]
  },
  {
    "id": "blood_mercury_total",
    "name": "Whole Blood Mercury (Total Hg)",
    "nameAr": "الزئبق الكلي في الدم الكامل",
    "aliases": [
      "Mercury",
      "Blood Hg",
      "الزئبق"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "General Population Baseline (Low Fish Diet)",
        "value": "< 5.0",
        "unit": "µg/L",
        "note": "< 25 nmol/L"
      },
      {
        "group": "Frequent Seafood Consumers",
        "value": "5.0 – 15.0",
        "unit": "µg/L",
        "note": "Organic methylmercury from apex predatory fish"
      },
      {
        "group": "Toxicity Threshold (Minamata Disease Manifestations)",
        "value": "> 50.0",
        "unit": "µg/L",
        "alert": "critical_high",
        "note": "Erethism (personality changes, erethism mercurialis), visual field constriction, ataxia, tremor, teratogenicity"
      }
    ],
    "significance": "Exists as elemental, inorganic salts, and organic (methylmercury). Organic mercury bioaccumulates in predatory apex fish (tuna, swordfish, shark) and causes neurotoxicity: Minamata disease (ataxia, paresthesias, constriction of visual fields, tremor, and microcephaly/cerebral palsy in fetuses).",
    "significanceAr": "معدن ثقيل يتراكم حيوياً في الأسماك المفترسة الكبيرة كالميثيل زئبق. يسبب داء ميناماتا: رنح، تنميل، تضيق المجال البصري، ورعاش، وتشوهات دماغية شديدة للجنين.",
    "tags": [
      "minerals",
      "mercury",
      "toxicology",
      "minamata",
      "neurology"
    ]
  },
  {
    "id": "urine_mercury_24h",
    "name": "24-Hour Urine Mercury Excretion",
    "nameAr": "إطراح الزئبق في بول 24 ساعة",
    "aliases": [
      "24h Urine Mercury",
      "Urine Hg"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Normal Non-Exposed Adults",
        "value": "< 10.0",
        "unit": "µg/24h",
        "note": "< 20 µg/g creatinine"
      },
      {
        "group": "Occupational Toxicity Threshold",
        "value": "> 35.0 – 50.0",
        "unit": "µg/24h",
        "alert": "critical_high",
        "note": "Best test for elemental and inorganic mercury exposure (amalgams, industrial vapor)"
      }
    ],
    "significance": "Preferred biomarker for evaluating elemental mercury vapor (inhalation) and inorganic mercury salts exposure. (Organic methylmercury is excreted in bile/feces and poorly detected in urine; use blood instead).",
    "significanceAr": "الفحص المفضل لكشف التسمم بأبخرة الزئبق المعدني وأملاحه اللاعضوية في الصناعة (أما الزئبق العضوي فيطرح عبر البراز ويفحص بالدم).",
    "tags": [
      "minerals",
      "mercury",
      "toxicology",
      "urine-hg"
    ]
  },
  {
    "id": "blood_cadmium",
    "name": "Whole Blood Cadmium",
    "nameAr": "الكادميوم في الدم الكامل",
    "aliases": [
      "Cadmium",
      "Blood Cd",
      "كادميوم"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Non-Smokers",
        "value": "< 1.0",
        "unit": "µg/L"
      },
      {
        "group": "Cigarette Smokers",
        "value": "1.0 – 4.0",
        "unit": "µg/L",
        "note": "Tobacco leaves naturally bioconcentrate cadmium"
      },
      {
        "group": "Occupational Action Level (OSHA)",
        "value": "> 5.0",
        "unit": "µg/L",
        "alert": "critical_high",
        "note": "Proximal tubular nephrotoxicity (Fanconi syndrome, microproteinuria) and pulmonary emphysema"
      }
    ],
    "significance": "Industrial heavy metal (batteries, electroplating, pigments) and tobacco component. Long biologic half-life (~20-30 years). Accumulates in renal cortex, causing irreversible proximal tubular dysfunction (Fanconi syndrome, beta-2 microglobulinuria) and osteomalacia ('Itai-itai' disease).",
    "significanceAr": "معدن صناعي نصف عمره في الجسم 30 سنة، يتراكم في التبغ والبطاريات. يترسب في الكلى مسبباً متلازمة فانكوني الكلوية ولين العظام المؤلم (داء إيتاي إيتاي).",
    "tags": [
      "minerals",
      "cadmium",
      "toxicology",
      "fanconi",
      "occupational"
    ]
  },
  {
    "id": "serum_aluminum",
    "name": "Serum Aluminum",
    "nameAr": "الألمنيوم في المصل",
    "aliases": [
      "Aluminum",
      "Serum Al",
      "ألمنيوم"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Normal Adults (Unexposed)",
        "value": "< 5.0",
        "unit": "µg/L"
      },
      {
        "group": "Chronic Hemodialysis Patients (Safe Baseline)",
        "value": "< 20.0",
        "unit": "µg/L"
      },
      {
        "group": "Dialysis Encephalopathy / Osteomalacia Concern",
        "value": "> 60.0",
        "unit": "µg/L",
        "alert": "critical_high",
        "note": "Dialysis dementia, fracturing osteomalacia, microcytic anemia unresponsive to iron; perform deferoxamine mobilization test"
      }
    ],
    "significance": "Historically contaminated dialysate or aluminum-containing phosphate binders in ESRD patients. Accumulates in brain, bone, and bone marrow causing dialysis dementia, osteomalacia, and microcytic anemia with normal iron stores.",
    "significanceAr": "يتراكم لدى مرضى الغسيل الكلوي من مياه الدياليز أو روابط الفوسفات؛ يترسب في الدماغ والعظام مسبباً خرف الغسيل الكلوي وفقر دم صغير الكريات.",
    "tags": [
      "minerals",
      "aluminum",
      "dialysis",
      "esrd",
      "toxicology"
    ]
  },
  {
    "id": "blood_arsenic_total",
    "name": "Blood Arsenic (Total)",
    "nameAr": "الزرنيخ الكلي في الدم",
    "aliases": [
      "Arsenic",
      "Blood As",
      "زرنيخ"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 12.0",
        "unit": "µg/L",
        "note": "< 0.16 µmol/L"
      },
      {
        "group": "Acute Arsenic Poisoning Threshold",
        "value": "> 50.0",
        "unit": "µg/L",
        "alert": "critical_high",
        "note": "Rice-water diarrhea, prolonged QTc / Torsades de Pointes, garlic breath odor, acute shock; blood arsenic clears rapidly into tissues within 2-4 hours, use urine for definitive diagnosis"
      }
    ],
    "significance": "Inhibits pyruvate dehydrogenase (lipoic acid binding). Acute toxicity causes 'rice-water' diarrhea, garlic odor, and QTc prolongation. Rapidly redistributes into tissues; 24h urine fractionated arsenic is the test of choice.",
    "significanceAr": "سم خلوي يثبط التنفس الخلوي. يسبب إسهالاً مائياً شبيهاً بماء الرز ورائحة الثوم وتطاول مسافة QT القلبية. يتوزع سريعاً بالأنسجة لذا يفضل بول 24 ساعة لتأكيده.",
    "tags": [
      "minerals",
      "arsenic",
      "toxicology",
      "poisoning"
    ]
  },
  {
    "id": "urine_arsenic_fractionated_24h",
    "name": "24-Hour Urine Fractionated Arsenic (Inorganic)",
    "nameAr": "الزرنيخ غير العضوي المجزأ في بول 24 ساعة",
    "aliases": [
      "Urine Arsenic",
      "Fractionated Arsenic"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Normal (Inorganic As + Methylated Metabolites)",
        "value": "< 35.0",
        "unit": "µg/24h",
        "note": "<35 µg/g creatinine"
      },
      {
        "group": "Toxic Inorganic Arsenic Exposure",
        "value": "> 50.0",
        "unit": "µg/24h",
        "alert": "critical_high",
        "note": "Differentiates toxic inorganic arsenic from non-toxic organic dietary arsenobetaine ('fish arsenic')"
      },
      {
        "group": "Acute Toxic Crisis",
        "value": "> 200.0",
        "unit": "µg/24h",
        "alert": "critical_high",
        "note": "Initiate British Anti-Lewisite (BAL / Dimercaprol) or Succimer"
      }
    ],
    "significance": "Fractionation is essential to differentiate lethal inorganic arsenic (and metabolites MMA/DMA) from benign organic dietary arsenic (arsenobetaine / 'fish arsenic' from seafood) which does NOT cause toxicity.",
    "significanceAr": "التجزئة أساسية للتفريق بين الزرنيخ غير العضوي القاتل، والزرنيخ العضوي الغذائي السليم الموجود في المأكولات البحرية (Arsenobetaine) الذي لا يسبب أي تسمم.",
    "tags": [
      "minerals",
      "arsenic",
      "toxicology",
      "speciation"
    ]
  },
  {
    "id": "serum_manganese",
    "name": "Serum Manganese",
    "nameAr": "المنغنيز في المصل",
    "aliases": [
      "Manganese",
      "Mn"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0.5 – 1.2",
        "unit": "µg/L",
        "note": "Whole blood 4.0 – 15.0 µg/L"
      },
      {
        "group": "Toxicity ('Manganism' / Parkinsonian-like)",
        "value": "> 3.0",
        "unit": "µg/L",
        "alert": "critical_high",
        "note": "Basal ganglia MRI T1 hyperintensity, extrapyramidal Parkinson-like tremors, psychosis ('manganese madness')"
      }
    ],
    "significance": "Essential trace element excreted via bile. Accumulates in cholestatic liver failure or unmonitored Total Parenteral Nutrition (TPN), depositing in globus pallidus and causing 'manganism' (Parkinsonian syndrome with psychiatric symptoms).",
    "significanceAr": "يطرح عبر الصفراء؛ يتراكم عند مرضى التغذية الوريدية أو ركود الصفراء ويترسب في العقد القاعدية بالدماغ مسبباً متلازمة شلل رعاشي باركنسوني ونوبات ذهانية.",
    "tags": [
      "minerals",
      "manganese",
      "tpn",
      "parkinsonism",
      "toxicology"
    ]
  },
  {
    "id": "serum_chromium",
    "name": "Serum Chromium",
    "nameAr": "الكروم في المصل",
    "aliases": [
      "Chromium",
      "Cr"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0.1 – 0.5",
        "unit": "µg/L"
      },
      {
        "group": "Metal-on-Metal Hip Implant Wear Indicator",
        "value": "> 7.0",
        "unit": "µg/L",
        "alert": "critical_high",
        "note": "Regulatory threshold indicating excessive wear / metallosis of metal-on-metal hip arthroplasty"
      }
    ],
    "significance": "Component of glucose tolerance factor. Monitored in orthopedic patients with metal-on-metal hip prosthesis: values >7 µg/L indicate adverse local tissue reaction (pseudotumor) and implant failure.",
    "significanceAr": "عنصر ينظم حساسية الأنسولين؛ ويراقب لمرضى مفاصل الورك الصناعية المعدنية لكشف تآكل المفصل والتسمم المعدني الموضعي عند تجاوزه 7 ميكروغرام/لتر.",
    "tags": [
      "minerals",
      "chromium",
      "orthopedics",
      "hip-implant"
    ]
  },
  {
    "id": "urine_iodine_24h",
    "name": "24-Hour Urine Iodine Excretion",
    "nameAr": "إطراح اليود في البول (تقييم اليود)",
    "aliases": [
      "Urine Iodine",
      "UIE"
    ],
    "category": "minerals",
    "ranges": [
      {
        "group": "Optimal Nutritional Intake (WHO)",
        "value": "100 – 199",
        "unit": "µg/L",
        "note": "Adequate population iodine status"
      },
      {
        "group": "Pregnancy Target (WHO)",
        "value": "150 – 249",
        "unit": "µg/L",
        "note": "Increased requirement for fetal neurodevelopment"
      },
      {
        "group": "Moderate to Severe Iodine Deficiency",
        "value": "< 50",
        "unit": "µg/L",
        "alert": "critical_low",
        "note": "Endemic goiter, congenital hypothyroidism, cretinism"
      },
      {
        "group": "Excessive Iodine Intake",
        "value": "> 300",
        "unit": "µg/L",
        "note": "Risk of iodine-induced thyroid dysfunction (Jod-Basedow hyperthyroidism, Wolff-Chaikoff effect)"
      }
    ],
    "significance": "More than 90% of ingested dietary iodine is excreted renally. Median urinary iodine concentration is the epidemiological standard for assessing population and individual iodine sufficiency. Deficiency causes endemic goiter and cretinism.",
    "significanceAr": "يطرح أكثر من 90% من اليود المتناول عبر الكلى. المعيار المعتمد من منظمة الصحة العالمية لتقييم كفاية اليود؛ نقصه يسبب الدراق المتوطن والقصور الدرقي والفتوق العقلية (القماءة).",
    "tags": [
      "minerals",
      "iodine",
      "thyroid",
      "who",
      "goiter"
    ]
  },
  {
    "id": "vitamin_a_retinol",
    "name": "Vitamin A (Serum Retinol)",
    "nameAr": "فيتامين أ (الريتينول في المصل)",
    "aliases": [
      "Vitamin A",
      "Retinol",
      "فيتامين أ"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "30.0 – 80.0",
        "unit": "µg/dL",
        "note": "1.05 – 2.80 µmol/L"
      },
      {
        "group": "Infants & Children",
        "value": "20.0 – 50.0",
        "unit": "µg/dL"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "25.0 – 60.0",
        "unit": "µg/dL"
      },
      {
        "group": "Deficiency / Nyctalopia Risk",
        "value": "< 20.0",
        "unit": "µg/dL",
        "alert": "critical_low",
        "note": "Night blindness (nyctalopia), xerophthalmia, Bitot spots, keratomalacia"
      },
      {
        "group": "Severe Deficiency",
        "value": "< 10.0",
        "unit": "µg/dL",
        "alert": "critical_low",
        "note": "Irreversible corneal ulceration and blindness"
      },
      {
        "group": "Toxicity / Hypervitaminosis A",
        "value": "> 120.0",
        "unit": "µg/dL",
        "alert": "critical_high",
        "note": "Pseudotumor cerebri, teratogenicity (neural crest defects), hepatomegaly, alopecia, hypercalcemia"
      }
    ],
    "significance": "Fat-soluble vitamin essential for rhodopsin retinal function, epithelial integrity, and immune defense. Deficiency causes night blindness, xerophthalmia, Bitot spots, and measles severity. Acute/chronic toxicity causes pseudotumor cerebri (benign intracranial hypertension) and severe teratogenicity.",
    "significanceAr": "فيتامين منحل بالدسم ضروري للرؤية الليلية وسلامة الظهاريات. نقصه يسبب العشى الليلي وجفاف الملتحمة وبقع بيتو. وفرطه السام يسبب فرط الضغط القحفي السليم وتشوهات الأجنة الخلقية.",
    "tags": [
      "vitamins",
      "vitamin-a",
      "retinol",
      "ophthalmology",
      "toxicology"
    ]
  },
  {
    "id": "vitamin_b1_thiamine",
    "name": "Vitamin B1 (Thiamine Whole Blood / TDP)",
    "nameAr": "فيتامين ب1 (الثيامين في الدم الكامل / TDP)",
    "aliases": [
      "Vitamin B1",
      "Thiamine",
      "Thiamine Diphosphate",
      "الثيامين",
      "فيتامين ب1"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Whole Blood Thiamine Diphosphate (TDP)",
        "value": "70 – 180",
        "unit": "nmol/L",
        "note": "Preferred assay over plasma thiamine"
      },
      {
        "group": "Erythrocyte Transketolase Activation (ETKA) Normal",
        "value": "< 15.0",
        "unit": "% stimulation",
        "note": "Functional assay; <15% activation by added TPP indicates adequate stores"
      },
      {
        "group": "Moderate Deficiency",
        "value": "15.0 – 25.0",
        "unit": "% stimulation"
      },
      {
        "group": "Severe Deficiency (Beriberi / Wernicke Encephalopathy)",
        "value": "> 25.0% ETKA or < 50 nmol/L TDP",
        "unit": "% stimulation",
        "alert": "critical_low",
        "note": "High risk of Wernicke-Korsakoff encephalopathy (ataxia, confusion, ophthalmoplegia) or wet beriberi (high-output HF); give IV thiamine BEFORE glucose"
      }
    ],
    "significance": "Cofactor for pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, and transketolase. Depleted rapidly in chronic alcohol abuse, hyperemesis gravidarum, bariatric surgery. Deficiency causes wet beriberi (dilated cardiomyopathy) and dry beriberi / Wernicke encephalopathy (triad: confusion, ataxia, ophthalmoplegia). Rule: NEVER give IV dextrose without IV thiamine in malnourished alcoholics.",
    "significanceAr": "مساعد أنزيمي رئيسي لاستقلاب السكريات. ينفد بسرعة لدى مدمني الكحول وجراحة السمنة. نقصه يسبب البري بري الرطب (قصور قلب باعتلال عضلي) واعتلال فيرنيكه الدماغي (رنح، تخليط، شلل العين). قاعدة: لا تعطِ سكر وريدي قبل الثيامين.",
    "tags": [
      "vitamins",
      "thiamine",
      "vitamin-b1",
      "wernicke",
      "beriberi",
      "neurology"
    ]
  },
  {
    "id": "vitamin_b2_riboflavin",
    "name": "Vitamin B2 (Riboflavin / FAD)",
    "nameAr": "فيتامين ب2 (الريبوفلافين)",
    "aliases": [
      "Vitamin B2",
      "Riboflavin",
      "ريبوفلافين"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Whole Blood FAD Normal",
        "value": "137 – 370",
        "unit": "nmol/L"
      },
      {
        "group": "EGRAC Index (Erythrocyte Glutathione Reductase Activation)",
        "value": "0.9 – 1.2",
        "unit": "activity coefficient",
        "note": ">1.4 indicates deficiency"
      },
      {
        "group": "Clinical Deficiency (Ariboflavinosis)",
        "value": "< 100 nmol/L (EGRAC > 1.4)",
        "unit": "nmol/L",
        "note": "Angular cheilitis, glossitis (magenta tongue), stomatitis, normocytic anemia, seborrheic dermatitis"
      }
    ],
    "significance": "Component of flavin coenzymes (FMN and FAD) in respiratory chain and beta-oxidation. Deficiency (ariboflavinosis) causes cheilosis, angular stomatitis, corneal vascularization, and magenta-colored tongue.",
    "significanceAr": "يدخل في تركيب أنزيمات FMN وFAD للتنفس الخلوي. نقصه يسبب التهاب زوايا الفم (Cheilitis) واللسان الأرجواني وتوسع أوعية القرنية والتهاب الجلد الدهني.",
    "tags": [
      "vitamins",
      "vitamin-b2",
      "riboflavin",
      "dermatology"
    ]
  },
  {
    "id": "vitamin_b3_niacin",
    "name": "Vitamin B3 (Niacin / Nicotinic Acid / NAD)",
    "nameAr": "فيتامين ب3 (النياسين / حمض النيكوتينيك)",
    "aliases": [
      "Vitamin B3",
      "Niacin",
      "Nicotinamide",
      "النياسين"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Serum Niacin Normal",
        "value": "0.5 – 8.4",
        "unit": "µg/mL"
      },
      {
        "group": "Urine N1-Methylnicotinamide 24h",
        "value": "2.4 – 6.4",
        "unit": "mg/24h",
        "note": "Best reflection of whole-body tissue stores"
      },
      {
        "group": "Severe Deficiency (Pellagra)",
        "value": "< 0.5 µg/mL (Urine < 0.8 mg/24h)",
        "unit": "µg/mL",
        "alert": "critical_low",
        "note": "Pellagra triad of the 4 Ds: Diarrhea, Dermatitis (Casal necklace), Dementia, Death"
      }
    ],
    "significance": "Constituent of NAD+ and NADP+. Derived partly from tryptophan. Severe deficiency causes Pellagra: classic triad/tetrad of Diarrhea, Dermatitis (photosensitive Casal necklace), Dementia, and Death. Seen in alcoholics, carcinoid syndrome (tryptophan diverted to serotonin), and isoniazid therapy.",
    "significanceAr": "يدخل في NAD+ لنقل الطاقة. نقصه الشديد يسبب مرض البلاغرا (Pellagra) المميز برباعية: الإسهال، والتهاب الجلد الحساس للشمس (طوق كاسال)، والخرف، والموت.",
    "tags": [
      "vitamins",
      "vitamin-b3",
      "niacin",
      "pellagra",
      "dermatology"
    ]
  },
  {
    "id": "vitamin_b5_pantothenic_acid",
    "name": "Vitamin B5 (Pantothenic Acid)",
    "nameAr": "فيتامين ب5 (حمض البانتوثينيك)",
    "aliases": [
      "Vitamin B5",
      "Pantothenic Acid"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "1.6 – 3.6",
        "unit": "µmol/L",
        "note": "0.2 – 1.8 µg/mL"
      },
      {
        "group": "Deficiency ('Burning Feet Syndrome')",
        "value": "< 1.0",
        "unit": "µmol/L",
        "note": "Paresthesias, burning feet, GI distress, adrenal insufficiency"
      }
    ],
    "significance": "Essential constituent of Coenzyme A (CoA) and acyl-carrier protein. Deficiency produces 'burning feet syndrome' (Gopalan syndrome), paresthesias, and muscle cramps.",
    "significanceAr": "المكون الجوهري لمرافق الأنزيم-أ (Coenzyme A). نقصه النادر يسبب متلازمة حرقة القدمين والخدر والألم العضلي.",
    "tags": [
      "vitamins",
      "vitamin-b5",
      "pantothenate"
    ]
  },
  {
    "id": "vitamin_b6_pyridoxal_phosphate",
    "name": "Vitamin B6 (Pyridoxal 5'-Phosphate / PLP)",
    "nameAr": "فيتامين ب6 (بيريدوكسال 5'-فوسفات / PLP)",
    "aliases": [
      "Vitamin B6",
      "PLP",
      "Pyridoxine",
      "بيريدوكسين"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "5.0 – 50.0",
        "unit": "µg/L",
        "note": "20 – 200 nmol/L"
      },
      {
        "group": "Pregnancy (3rd Trimester)",
        "value": "3.0 – 15.0",
        "unit": "µg/L"
      },
      {
        "group": "Deficiency Cutoff",
        "value": "< 5.0",
        "unit": "µg/L",
        "alert": "critical_low",
        "note": "Microcytic sideroblastic anemia, peripheral neuropathy, seizures in infants; precipitated by Isoniazid (INH)"
      },
      {
        "group": "Toxicity Threshold (High-Dose Supplementation)",
        "value": "> 100.0",
        "unit": "µg/L",
        "alert": "critical_high",
        "note": "Sensory peripheral neuropathy with sensory ataxia (dorsal root ganglionopathy)"
      }
    ],
    "significance": "Cofactor in amino acid transamination, heme synthesis (ALA synthase), and neurotransmitter (GABA, serotonin, dopamine) synthesis. Isoniazid, hydralazine, and penicillamine antagonize B6. Deficiency causes sideroblastic anemia, cheilosis, and peripheral neuropathy. High-dose toxicity causes sensory neuropathy.",
    "significanceAr": "مساعد أنزيمي لتصنيع الهيم والنواقل العصبية (GABA). يثبطه دواء السل (آيزونيازيد) مسبباً فقر دم أرومي حديدي واعتلال أعصاب محيطي يستوجب إعطاءه وقائياً.",
    "tags": [
      "vitamins",
      "vitamin-b6",
      "pyridoxine",
      "neuropathy",
      "isoniazid"
    ]
  },
  {
    "id": "vitamin_b7_biotin",
    "name": "Vitamin B7 (Biotin)",
    "nameAr": "فيتامين ب7 (البيوتين)",
    "aliases": [
      "Vitamin B7",
      "Biotin",
      "Vitamin H",
      "بيوتين"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "200 – 1200",
        "unit": "pg/mL",
        "note": "0.8 – 5.0 nmol/L"
      },
      {
        "group": "Deficiency",
        "value": "< 100",
        "unit": "pg/mL",
        "note": "Alopecia, scaly periorificial dermatitis, conjunctivitis, lactic acidosis; raw egg white ingestion (avidin)"
      },
      {
        "group": "Immunoassay Interference Warning",
        "value": "Supplements > 5-10 mg/day",
        "unit": "interference",
        "alert": "critical_high",
        "note": "Falsely inflates competitive assays (fT4, fT3) and falsely suppresses sandwich assays (TSH, Troponin, hCG, PTH); hold for 48-72h before testing"
      }
    ],
    "significance": "Cofactor for carboxylase enzymes (pyruvate, acetyl-CoA, propionyl-CoA carboxylases). Consuming raw egg whites (avidin) induces deficiency (alopecia, dermatitis). CRITICAL FDA WARNING: Biotin supplements falsely skew streptavidin-biotin immunoassays (falsely high fT4/fT3, falsely low TSH simulating Graves disease, and falsely low Troponin missing acute MI).",
    "significanceAr": "مساعد لأنزيمات الكربوكسيلاز؛ أكل بياض البيض النيئ (أفادين) يعيق امتصاصه مسبباً تساقط الشعر والتهاب الجلد. تحذير هام: يسبب تداخلاً مخبرياً خطيراً يرفع هرمونات الدرقية ويهبط التروبونين كاذباً.",
    "tags": [
      "vitamins",
      "biotin",
      "vitamin-b7",
      "assay-interference",
      "troponin-artifact"
    ]
  },
  {
    "id": "serum_folate_b9",
    "name": "Serum Folate (Vitamin B9)",
    "nameAr": "حمض الفوليك في المصل (فيتامين ب9)",
    "aliases": [
      "Folate",
      "Folic Acid",
      "Vitamin B9",
      "حمض الفوليك"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "4.0 – 20.0",
        "unit": "ng/mL",
        "note": "9.1 – 45.3 nmol/L"
      },
      {
        "group": "Borderline / Indeterminate",
        "value": "3.0 – 4.0",
        "unit": "ng/mL",
        "note": "Check Homocysteine (elevated) vs MMA (normal)"
      },
      {
        "group": "Deficiency (Megaloblastic Anemia / Neural Tube Defect Risk)",
        "value": "< 3.0",
        "unit": "ng/mL",
        "alert": "critical_low",
        "note": "Macrocytic megaloblastic anemia (MCV >100 fL), hypersegmented neutrophils, neural tube defects (anencephaly, spina bifida)"
      },
      {
        "group": "Pregnancy Minimum Target",
        "value": "> 7.0",
        "unit": "ng/mL",
        "note": "Supplement 400 µg/day pre-conception (4 mg/day if prior NTD history)"
      }
    ],
    "significance": "Crucial for one-carbon transfers in purine and thymidylate synthesis. Reflects recent dietary intake over past few days. Deficiency causes macrocytic megaloblastic anemia with hypersegmented neutrophils, and fetal neural tube defects. Normal MMA with high homocysteine distinguishes folate from B12 deficiency.",
    "significanceAr": "أساسي لتصنيع DNA وانقسام الخلايا. نقصه يسبب فقر دم كبير الكريات عرطل مع فصوص عدلات مفرطة وتشوهات الأنبوب العصبي للأجنة. ارتفاع الهوموسيستين مع اعتدال حمض الميثيل مالونيك يفرقه عن نقص B12.",
    "tags": [
      "vitamins",
      "folate",
      "anemia",
      "megaloblastic",
      "neural-tube-defect"
    ]
  },
  {
    "id": "rbc_folate",
    "name": "Red Blood Cell Folate (RBC Folate)",
    "nameAr": "فولات الكريات الحمر (مخزون الفولات الحقيقي)",
    "aliases": [
      "RBC Folate",
      "Erythrocyte Folate"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "280 – 790",
        "unit": "ng/mL",
        "note": "634 – 1790 nmol/L"
      },
      {
        "group": "Deficiency (True Long-Term Tissue Depletion)",
        "value": "< 140",
        "unit": "ng/mL",
        "alert": "critical_low",
        "note": "Reflects tissue folate status over preceding 3-4 months; unaffected by recent meals"
      }
    ],
    "significance": "Incorporated into RBCs strictly during erythropoiesis. True measure of chronic tissue folate stores over 3-4 months, immune to acute fluctuations caused by recent meals.",
    "significanceAr": "يدخل في بنية الكرية الحمراء أثناء تصنيعها فقط؛ يعكس المخزون النسيجي الحقيقي لثلاثة أشهر ولا يتأثر بالوجبات الحديثة.",
    "tags": [
      "vitamins",
      "rbc-folate",
      "anemia",
      "tissue-stores"
    ]
  },
  {
    "id": "vitamin_b12_cobalamin",
    "name": "Vitamin B12 (Serum Cobalamin)",
    "nameAr": "فيتامين ب12 (الكوبالامين في المصل)",
    "aliases": [
      "Vitamin B12",
      "Cobalamin",
      "B12",
      "فيتامين ب12"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "200 – 900",
        "unit": "pg/mL",
        "note": "148 – 664 pmol/L"
      },
      {
        "group": "Borderline / Indeterminate Zone",
        "value": "200 – 300",
        "unit": "pg/mL",
        "note": "Up to 30% of these patients have functional deficiency; check MMA and Homocysteine"
      },
      {
        "group": "Clinical Deficiency Cutoff",
        "value": "< 200",
        "unit": "pg/mL",
        "alert": "critical_low",
        "note": "Megaloblastic anemia, subacute combined degeneration of the spinal cord (SCD)"
      },
      {
        "group": "Severe Neurologic Deficiency",
        "value": "< 100",
        "unit": "pg/mL",
        "alert": "critical_low",
        "note": "Irreversible dorsal column and corticospinal tract degeneration, ataxia, dementia"
      },
      {
        "group": "Elderly Optimal Baseline",
        "value": "> 350",
        "unit": "pg/mL",
        "note": "Decreased gastric intrinsic factor and acid secretion impairs absorption"
      },
      {
        "group": "Elevated / Myeloproliferative / Hepatic Alert",
        "value": "> 1000",
        "unit": "pg/mL",
        "note": "Elevated transcobalamin in CML, polycythemia vera, acute liver failure"
      }
    ],
    "significance": "Essential for methionine synthase and methylmalonyl-CoA mutase. Absorption requires gastric intrinsic factor and terminal ileal receptors. Deficiency causes megaloblastic macrocytic anemia and irreversible Subacute Combined Degeneration of spinal cord (loss of dorsal columns / vibration-proprioception, and corticospinal tracts / spasticity). When B12 is 200-300 pg/mL, ELEVATED methylmalonic acid (MMA) confirms functional deficiency.",
    "significanceAr": "ضروري لتركيب الميالين وكرات الدم. امتصاصه يتطلب العامل الداخلي المعدي واللفائفي السليم. نقصه يسبب فقر دم عرطل وتنكس الحبل الشوكي المشترك تحت الحاد غير العكوس. ارتفاع حمض الميثيل مالونيك MMA يؤكد نقصه.",
    "tags": [
      "vitamins",
      "vitamin-b12",
      "cobalamin",
      "anemia",
      "neurology",
      "megaloblastic"
    ]
  },
  {
    "id": "methylmalonic_acid_mma",
    "name": "Serum Methylmalonic Acid (MMA)",
    "nameAr": "حمض الميثيل مالونيك في المصل (MMA)",
    "aliases": [
      "MMA",
      "Methylmalonic Acid"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0.08 – 0.56",
        "unit": "µmol/L",
        "note": "87 – 318 nmol/L"
      },
      {
        "group": "Definitive Vitamin B12 Deficiency Marker",
        "value": "> 0.40 – 0.50",
        "unit": "µmol/L",
        "alert": "critical_high",
        "note": "Single most sensitive and specific biomarker for functional tissue B12 deficiency (normal in folate deficiency)"
      },
      {
        "group": "Renal Impairment Warning",
        "value": "Falsely elevated in renal failure",
        "unit": "µmol/L",
        "note": "Excreted renally; interpret with caution if eGFR <30"
      }
    ],
    "significance": "Methylmalonyl-CoA mutase requires B12 (adenosylcobalamin) as cofactor to convert methylmalonyl-CoA to succinyl-CoA. Elevated in >95% of B12 deficient patients even before hematologic changes occur. NORMAL in folate deficiency, providing unambiguous differentiation.",
    "significanceAr": "الواسم الأكثر حساسية ونوعية لتشخيص نقص B12 الوظيفي. يرتفع في 95% من حالات نقص B12 بينما يبقى طبيعياً في نقص الفولات فيفصل بينهما تماماً.",
    "tags": [
      "vitamins",
      "mma",
      "vitamin-b12",
      "differential",
      "neurology"
    ]
  },
  {
    "id": "vitamin_c_ascorbic_acid",
    "name": "Vitamin C (Serum Ascorbic Acid)",
    "nameAr": "فيتامين ج (حمض الأسكوربيك في المصل)",
    "aliases": [
      "Vitamin C",
      "Ascorbic Acid",
      "فيتامين سي"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0.4 – 2.0",
        "unit": "mg/dL",
        "note": "23 – 114 µmol/L"
      },
      {
        "group": "Depleted Stores",
        "value": "0.2 – 0.4",
        "unit": "mg/dL"
      },
      {
        "group": "Severe Deficiency (Scurvy Diagnostic)",
        "value": "< 0.2",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "< 11 µmol/L; Scurvy triad: perifollicular hemorrhages, corkscrew hairs, bleeding spongy gums, poor wound healing"
      }
    ],
    "significance": "Essential cofactor for prolyl and lysyl hydroxylases in collagen biosynthesis, and acts as a powerful antioxidant. Deficiency produces Scurvy (bleeding gums, perifollicular petechiae, corkscrew hairs, hemarthroses, impaired wound healing).",
    "significanceAr": "مساعد أنزيمي لهدركسة البرولين في بناء الكولاجين. نقصه يسبب داء الإسقربوط (Scurvy): نزف اللثة وتخلخل الأسنان والنزوف حول جريبات الشعر والشعر اللولبي وسوء اندمال الجروح.",
    "tags": [
      "vitamins",
      "vitamin-c",
      "scurvy",
      "collagen"
    ]
  },
  {
    "id": "vitamin_d_25_hydroxy",
    "name": "Vitamin D: 25-Hydroxyvitamin D [25(OH)D Total]",
    "nameAr": "فيتامين د: 25-هيدروكسي فيتامين د الكلي [25(OH)D]",
    "aliases": [
      "Vitamin D",
      "25-OH-D",
      "25-Hydroxy Vitamin D",
      "فيتامين د"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Severe Deficiency",
        "value": "< 10.0",
        "unit": "ng/mL",
        "alert": "critical_low",
        "note": "Rickets in children, osteomalacia in adults, secondary hyperparathyroidism"
      },
      {
        "group": "Deficiency",
        "value": "10.0 – 19.9",
        "unit": "ng/mL",
        "note": "Increased fracture risk, impaired calcium absorption"
      },
      {
        "group": "Insufficiency (Endocrine Society)",
        "value": "20.0 – 29.9",
        "unit": "ng/mL",
        "note": "Suboptimal bone mineral density"
      },
      {
        "group": "Sufficiency / Optimal Target",
        "value": "30.0 – 80.0",
        "unit": "ng/mL",
        "note": "Endocrine Society optimal range (75 – 200 nmol/L)"
      },
      {
        "group": "IOM Guideline Normal Threshold",
        "value": "≥ 20.0",
        "unit": "ng/mL",
        "note": "Institute of Medicine cutoff for general population bone health"
      },
      {
        "group": "Excess / Potential Toxicity Risk",
        "value": "80.0 – 100.0",
        "unit": "ng/mL"
      },
      {
        "group": "Hypervitaminosis D / Toxicity",
        "value": "> 100.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Severe hypercalcemia, hypercalciuria, nephrocalcinosis, renal failure"
      }
    ],
    "significance": "Major circulating form of vitamin D produced by 25-hydroxylation in the liver. Half-life ~2-3 weeks. Gold standard for evaluating overall vitamin D nutritional status (NOT 1,25-OH2-D). Deficiency causes rickets in children and osteomalacia/fractures in adults.",
    "significanceAr": "الشكل المخزون الرئيسي الناتج عن كبد الإنسان (نصف عمره 3 أسابيع). المعيار الذهبي لقياس كفاية فيتامين د بالجسم. نقصه الشديد (<10) يسبب الكساح ولين العظام، وفرطه السام (>100) يسبب تكلس الكلى وفرط الكالسيوم.",
    "tags": [
      "vitamins",
      "vitamin-d",
      "25-oh-d",
      "bone",
      "rickets",
      "calcium"
    ]
  },
  {
    "id": "vitamin_d_1_25_dihydroxy",
    "name": "Vitamin D: 1,25-Dihydroxyvitamin D [Calcitriol]",
    "nameAr": "فيتامين د: 1،25-ثنائي هيدروكسي فيتامين د (الكالسيتريول)",
    "aliases": [
      "1,25-(OH)2D",
      "Calcitriol",
      "كالسيتريول"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "19.9 – 79.3",
        "unit": "pg/mL",
        "note": "48 – 190 pmol/L"
      },
      {
        "group": "Granulomatous Hypercalcemia (Sarcoidosis / TB)",
        "value": "> 80.0",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Extrarenal 1-alpha-hydroxylase expression in activated macrophages causes autonomous hypercalcemia"
      },
      {
        "group": "Chronic Kidney Disease Stage 4-5",
        "value": "< 15.0",
        "unit": "pg/mL",
        "note": "Loss of renal 1-alpha-hydroxylase activity drives secondary hyperparathyroidism"
      }
    ],
    "significance": "Biologically active steroid hormone synthesized by renal 1-alpha-hydroxylase under PTH stimulation. Short half-life (~4-6 hours). Circulates at 1000-fold lower concentrations than 25-OH-D. NOT used for nutritional deficiency. Elevated in sarcoidosis, tuberculosis, lymphomas, and primary hyperparathyroidism.",
    "significanceAr": "الهرمون الفعال حيوياً المنشط بالكلية تحت تأثير PTH. لا يستخدم لقياس نقص الفيتامين؛ بل يستخدم لتشخيص فرط كالسيوم الساركويد والسل (لإفرازه من البالعات) وفي الفشل الكلوي المتقدم.",
    "tags": [
      "vitamins",
      "calcitriol",
      "sarcoidosis",
      "hypercalcemia",
      "renal"
    ]
  },
  {
    "id": "vitamin_e_alpha_tocopherol",
    "name": "Vitamin E (Serum Alpha-Tocopherol)",
    "nameAr": "فيتامين هـ (ألفا-توكوفيرول في المصل)",
    "aliases": [
      "Vitamin E",
      "Alpha-Tocopherol",
      "فيتامين هـ"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "5.5 – 17.0",
        "unit": "mg/L",
        "note": "12 – 40 µmol/L"
      },
      {
        "group": "Infants & Children",
        "value": "3.0 – 9.0",
        "unit": "mg/L"
      },
      {
        "group": "Deficiency Cutoff",
        "value": "< 3.0",
        "unit": "mg/L",
        "alert": "critical_low",
        "note": "Hemolytic anemia, spinocerebellar ataxia, peripheral neuropathy, loss of proprioception/vibration (mimics Friedreich ataxia)"
      }
    ],
    "significance": "Lipid-soluble antioxidant protecting erythrocyte membranes and nervous tissue from peroxidation. Deficiency (severe fat malabsorption, abetalipoproteinemia) mimics Friedreich ataxia: spinocerebellar ataxia, dorsal column loss, acanthocytosis, hemolytic anemia.",
    "significanceAr": "مضاد أكسدة شحمي يحمي أغشية الكريات الحمر والأعصاب. نقصه في سوء امتصاص الدهون يقلد رنح فريدريك (ترنح شوكي مخيخي، فقدان الإحساس العميق، انحلال الدم، وتكاثر الكريات الشوكية).",
    "tags": [
      "vitamins",
      "vitamin-e",
      "ataxia",
      "neurology",
      "antioxidant"
    ]
  },
  {
    "id": "vitamin_k1_phylloquinone",
    "name": "Vitamin K1 (Serum Phylloquinone)",
    "nameAr": "فيتامين ك1 (فيلوكينون في المصل)",
    "aliases": [
      "Vitamin K1",
      "Phylloquinone",
      "فيتامين ك"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Adults Normal",
        "value": "0.2 – 3.2",
        "unit": "ng/mL",
        "note": "0.4 – 7.1 nmol/L"
      },
      {
        "group": "Deficiency Indicator",
        "value": "< 0.2",
        "unit": "ng/mL",
        "alert": "critical_low",
        "note": "Leads to coagulopathy (prolonged PT/INR first, then aPTT); Vitamin K deficiency bleeding in newborns"
      }
    ],
    "significance": "Essential cofactor for gamma-glutamyl carboxylase activating Factors II, VII, IX, X, Protein C, and Protein S. Deficiency leads to hemorrhagic diathesis (prolonged PT followed by aPTT). All newborns receive prophylactic Vitamin K at birth to prevent hemorrhagic disease of the newborn.",
    "significanceAr": "مساعد أنزيمي لتفعيل عوامل التخثر (2، 7، 9، 10 وبروتين C وS). نقصه يسبب نزفاً دموياً شديداً مع تطاول PT. يعطى إجبارياً لكافة المواليد للوقاية من نزف حديثي الولادة.",
    "tags": [
      "vitamins",
      "vitamin-k",
      "coagulation",
      "bleeding",
      "neonatal"
    ]
  },
  {
    "id": "pivka_ii",
    "name": "PIVKA-II (Protein Induced by Vitamin K Absence / DCP)",
    "nameAr": "بيفكا-2 (البروتين المحفز بغياب فيتامين ك / DCP)",
    "aliases": [
      "PIVKA-II",
      "DCP",
      "Des-gamma-carboxy prothrombin"
    ],
    "category": "vitamins",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 40.0",
        "unit": "mAU/mL"
      },
      {
        "group": "Subclinical Vitamin K Deficiency",
        "value": "> 40.0",
        "unit": "mAU/mL",
        "note": "Extremely sensitive marker of tissue vitamin K depletion before PT prolongs"
      },
      {
        "group": "Hepatocellular Carcinoma Diagnostic Cutoff",
        "value": "> 40.0 – 100.0",
        "unit": "mAU/mL",
        "alert": "critical_high",
        "note": "Tumor marker for HCC; combined with AFP increases detection to >85%"
      }
    ],
    "significance": "Abnormal uncarboxylated prothrombin. Most sensitive biomarker for early subclinical vitamin K deficiency. Also a validated tumor marker for Hepatocellular Carcinoma (HCC), especially for portal vein invasion.",
    "significanceAr": "بروثرومبين شاذ غير مكتمل الكربكسة. أدق فحص لكشف نقص فيتامين ك الباكر قبل تطاول زمن التخثر، ويستخدم كواسم ورمي معتمد لسرطان الكبد (HCC).",
    "tags": [
      "vitamins",
      "pivka-ii",
      "vitamin-k",
      "hcc",
      "tumor-marker"
    ]
  },
  {
    "id": "ana_titer_ifa",
    "name": "Antinuclear Antibodies Titer (ANA IFA)",
    "nameAr": "معاير أضداد النوى بالتألق المناعي (ANA IFA)",
    "aliases": [
      "ANA",
      "FANA",
      "Antinuclear Antibody",
      "أضداد النوى"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative",
        "value": "< 1:40 to 1:80",
        "unit": "titer"
      },
      {
        "group": "Low Positive / Borderline",
        "value": "1:80 – 1:160",
        "unit": "titer",
        "note": "Found in ~5-15% of healthy individuals; evaluate clinical context"
      },
      {
        "group": "Clinically Significant Positive",
        "value": "≥ 1:160",
        "unit": "titer",
        "note": "High sensitivity (>99%) for Systemic Lupus Erythematosus (SLE)"
      },
      {
        "group": "Strongly Positive",
        "value": "≥ 1:640 – 1:1280",
        "unit": "titer",
        "alert": "critical_high",
        "note": "High positive predictive value for connective tissue disease (SLE, Sjogren, Systemic Sclerosis)"
      }
    ],
    "significance": "Indirect Immunofluorescence on human epithelial cells (HEp-2) is the gold standard method. Sensitivity for SLE exceeds 99% (a negative ANA virtually rules out SLE). Not specific on its own; positive result mandates reflex testing for specific sub-antibodies (dsDNA, Sm, Ro/SSA, La/SSB, RNP).",
    "significanceAr": "الفحص المسحي الأول لأمراض النسيج الضام بالمجهر الفلوري (HEp-2). حساسيته للذئبة الحمراء تفوق 99% (سلبيته تنفي الذئبة تقريباً). إيجابيته تستدعي فحص الأضداد النوعية.",
    "tags": [
      "autoimmune",
      "ana",
      "sle",
      "lupus",
      "rheumatology",
      "connective-tissue"
    ]
  },
  {
    "id": "ana_pattern",
    "name": "ANA Nuclear Staining Pattern (IFA)",
    "nameAr": "النمط الشكلي لأضداد النوى (IFA)",
    "aliases": [
      "ANA Pattern",
      "HEp-2 Pattern"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Homogeneous (Diffuse)",
        "value": "Associated with Anti-dsDNA, Anti-Histone",
        "unit": "pattern",
        "note": "Classic SLE and Drug-Induced Lupus"
      },
      {
        "group": "Speckled (Fine / Coarse)",
        "value": "Associated with Anti-SSA, SSB, Sm, RNP, Scl-70",
        "unit": "pattern",
        "note": "MCTD, Sjogren, SLE, Systemic Sclerosis"
      },
      {
        "group": "Centromere (Discrete Speckled)",
        "value": "Associated with CENP-A/B",
        "unit": "pattern",
        "note": "Pathognomonic for Limited Cutaneous Systemic Sclerosis (CREST Syndrome)"
      },
      {
        "group": "Nucleolar",
        "value": "Associated with Anti-Scl-70, Fibrillarin, RNA Pol I-III",
        "unit": "pattern",
        "note": "Diffuse Systemic Sclerosis and Polymyositis-Scleroderma overlap"
      }
    ],
    "significance": "Pattern provides essential guidance regarding underlying sub-antigens. Centromere pattern is pathognomonic for CREST syndrome; Homogeneous for SLE; Nucleolar for systemic sclerosis.",
    "significanceAr": "النمط الشكلي للصبغة الفلورية يوجه للتشخيص: النمط الحبيبي يوجه لشوغرن والذئبة، النمط المتجانس للذئبة الحمراء والدوائية، والنمط القسيمي المركزي لمتلازمة CREST.",
    "tags": [
      "autoimmune",
      "ana-pattern",
      "crest",
      "scleroderma"
    ]
  },
  {
    "id": "anti_dsdna_antibodies",
    "name": "Anti-Double-Stranded DNA Antibodies (Anti-dsDNA)",
    "nameAr": "أضداد الحمض النووي المزدوج (Anti-dsDNA)",
    "aliases": [
      "Anti-dsDNA",
      "dsDNA",
      "أضداد دي إن إيه"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 10.0",
        "unit": "IU/mL"
      },
      {
        "group": "Equivocal / Borderline",
        "value": "10.0 – 15.0",
        "unit": "IU/mL"
      },
      {
        "group": "Positive (Systemic Lupus Erythematosus)",
        "value": "> 15.0",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "High specificity (>95-98%) for SLE; part of ACR/EULAR classification criteria"
      },
      {
        "group": "High Titer / Active Lupus Nephritis Flare",
        "value": "> 100.0 – 200.0",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Titer correlates directly with active lupus glomerulonephritis and complement consumption (low C3/C4)"
      }
    ],
    "significance": "Pathognomonic and highly specific (>95-98%) for Systemic Lupus Erythematosus (SLE). Directly correlates with lupus nephritis activity and disease flares. A rising anti-dsDNA titer paired with falling complement C3/C4 strongly heralds an impending renal flare.",
    "significanceAr": "الضد الأكثر نوعية للذئبة الحمراء الجهازية (>95%). يتناسب عياره طردياً مع نشاط المرض والتهاب الكلية الذئبي؛ فارتفاعه المتزامن مع هبوط المتممة C3/C4 ينذر بهجمة كلوية حادة.",
    "tags": [
      "autoimmune",
      "anti-dsdna",
      "sle",
      "lupus-nephritis",
      "rheumatology"
    ]
  },
  {
    "id": "anti_smith_antibodies",
    "name": "Anti-Smith (Anti-Sm) Antibodies",
    "nameAr": "أضداد سميث (Anti-Sm)",
    "aliases": [
      "Anti-Sm",
      "Smith Antibody"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 7.0",
        "unit": "U/mL"
      },
      {
        "group": "Positive (Most Specific SLE Marker)",
        "value": "≥ 10.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "99% specificity for SLE (though present in only ~20-30% of patients); does not fluctuate with disease activity"
      }
    ],
    "significance": "Most specific antibody for Systemic Lupus Erythematosus (~99% specificity). Present in only 20-30% of patients (more common in African-American and Asian patients). Unlike anti-dsDNA, anti-Sm titers remain stable and do NOT correlate with disease activity flares.",
    "significanceAr": "أكثر الأضداد نوعية للذئبة الحمراء على الإطلاق (نوعية 99%). لا تتغير مستوياته مع هجمات ونشاط المرض بل يبقى إيجابياً كبصمة مناعية.",
    "tags": [
      "autoimmune",
      "anti-sm",
      "sle",
      "pathognomonic"
    ]
  },
  {
    "id": "anti_ssa_ro60_ro52",
    "name": "Anti-SSA (Ro60 & Ro52) Antibodies",
    "nameAr": "أضداد SSA / Ro (Ro60 و Ro52)",
    "aliases": [
      "Anti-SSA",
      "Anti-Ro",
      "SSA/Ro"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 7.0",
        "unit": "U/mL"
      },
      {
        "group": "Positive (Sjögren Syndrome & SLE)",
        "value": "≥ 10.0",
        "unit": "U/mL",
        "note": "Present in 70-90% of primary Sjögren syndrome and 30-50% of SLE"
      },
      {
        "group": "Maternal Risk for Neonatal Lupus & Congenital Heart Block",
        "value": "High Titer Positive (>80 U/mL)",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Transplacental crossing causes irreversible fetal congenital complete heart block and neonatal cutaneous lupus"
      }
    ],
    "significance": "Found in Sjögren syndrome (70-90%), Subacute Cutaneous Lupus (SCLE, >80%), and SLE. Crucial in pregnancy: maternal anti-SSA IgG antibodies cross the placenta and target fetal cardiac conduction tissue, carrying a ~2% risk of irreversible Congenital Complete Heart Block (requiring fetal echocardiography weekly from 16-26 weeks).",
    "significanceAr": "توجد في متلازمة شوغرن (70-90%) والذئبة الجلدية. خطورتها الكبرى عند الحوامل: تعبر المشيمة لتهاجم جهاز التوصيل القلبي للجنين مسببة حصار قلب خلقي تام دائم يستلزم متابعة أسبوعية بإيكو الجنين.",
    "tags": [
      "autoimmune",
      "anti-ssa",
      "sjogren",
      "neonatal-lupus",
      "congenital-heart-block"
    ]
  },
  {
    "id": "anti_ssb_la",
    "name": "Anti-SSB (La) Antibodies",
    "nameAr": "أضداد SSB / La",
    "aliases": [
      "Anti-SSB",
      "Anti-La",
      "SSB/La"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 7.0",
        "unit": "U/mL"
      },
      {
        "group": "Positive (Sjögren Syndrome)",
        "value": "≥ 10.0",
        "unit": "U/mL",
        "note": "Almost always coexists with Anti-SSA; strongly associated with primary Sjögren syndrome"
      }
    ],
    "significance": "Found in primary Sjögren syndrome (40-60%) and SLE (15%). Almost always accompanies anti-SSA antibodies (anti-SSB is rarely isolated).",
    "significanceAr": "توجد في متلازمة شوغرن الابتدائية (40-60%)؛ وتترافق دائماً تقريباً مع أضداد Anti-SSA.",
    "tags": [
      "autoimmune",
      "anti-ssb",
      "sjogren"
    ]
  },
  {
    "id": "anti_u1_rnp",
    "name": "Anti-U1-RNP Antibodies",
    "nameAr": "أضداد RNP (أضداد البروتين النووي الريبي U1)",
    "aliases": [
      "Anti-RNP",
      "U1-RNP",
      "أضداد RNP"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 7.0",
        "unit": "U/mL"
      },
      {
        "group": "Mixed Connective Tissue Disease (MCTD Mandatory Diagnostic Hallmark)",
        "value": "High Titer (> 100.0 or > 1:1000)",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "High-titer anti-U1-RNP in absence of anti-dsDNA or anti-Sm defines Mixed Connective Tissue Disease (Sharp syndrome)"
      }
    ],
    "significance": "High-titer anti-U1-RNP (>1:1000) is the sine qua non required criterion for diagnosing Mixed Connective Tissue Disease (MCTD / Sharp syndrome), which features overlapping features of SLE, systemic sclerosis, and polymyositis. Also present in ~30-40% of SLE.",
    "significanceAr": "العيار المرتفع جداً من أضداد U1-RNP هو المعيار الإلزامي لتشخيص مرض النسيج الضام المختلط (MCTD) الذي يجمع أعراض الذئبة وتصلب الجلد والتهاب العضلات.",
    "tags": [
      "autoimmune",
      "anti-rnp",
      "mctd",
      "sharp-syndrome"
    ]
  },
  {
    "id": "anti_scl_70_topoisomerase",
    "name": "Anti-Scl-70 (Topoisomerase I) Antibodies",
    "nameAr": "أضداد Scl-70 (توبويزوميراز 1 / واسم تصلب الجلد)",
    "aliases": [
      "Anti-Scl-70",
      "Topoisomerase I Antibody"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 7.0",
        "unit": "U/mL"
      },
      {
        "group": "Positive (Diffuse Systemic Sclerosis)",
        "value": "≥ 10.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Specific for Diffuse Cutaneous Systemic Sclerosis; high risk for aggressive pulmonary fibrosis / interstitial lung disease (ILD)"
      }
    ],
    "significance": "Highly specific for Diffuse Cutaneous Systemic Sclerosis (scleroderma). Strongly associated with rapid progression of cutaneous sclerosis and severe Interstitial Lung Disease (pulmonary fibrosis), with poorer overall prognosis.",
    "significanceAr": "عالي النوعية لمرض تصلب الجلد الجهازي المنتشر (Scleroderma). ينذر بحدوث تليف رئوي خلالي تدريجي (ILD) وخطورة عالية.",
    "tags": [
      "autoimmune",
      "scl-70",
      "scleroderma",
      "systemic-sclerosis",
      "pulmonary-fibrosis"
    ]
  },
  {
    "id": "anti_centromere_antibodies",
    "name": "Anti-Centromere Antibodies (ACA / CENP-B)",
    "nameAr": "أضداد القسيم المركزي (ACA / CENP-B)",
    "aliases": [
      "ACA",
      "Anti-Centromere",
      "CENP-B"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 7.0",
        "unit": "U/mL"
      },
      {
        "group": "Positive (Limited Scleroderma / CREST Syndrome)",
        "value": "≥ 10.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Present in 60-80% of Limited Cutaneous Systemic Sclerosis (CREST: Calcinosis, Raynaud, Esophageal, Sclerodactyly, Telangiectasia); high risk of Pulmonary Arterial Hypertension (PAH)"
      }
    ],
    "significance": "Diagnostic hallmark of Limited Cutaneous Systemic Sclerosis (CREST syndrome). Distinct from Scl-70: patients have limited skin involvement (distal to elbows/knees), lower risk of pulmonary fibrosis, but a high late risk of isolated Pulmonary Arterial Hypertension (PAH).",
    "significanceAr": "العلامة المميزة لمتلازمة CREST (تصلب الجلد الجلدي المحدود). يترافق مع تكلس الجلد، رينود، تعطل حركة المريء، وتصلب الأصابع، مع خطورة عالية لفرط ضغط الشريان الرئوي.",
    "tags": [
      "autoimmune",
      "anti-centromere",
      "crest",
      "scleroderma",
      "pah"
    ]
  },
  {
    "id": "anti_jo_1_synthetase",
    "name": "Anti-Jo-1 (Histidyl-tRNA Synthetase) Antibodies",
    "nameAr": "أضداد Jo-1 (واسم متلازمة أضداد السنتيتيز)",
    "aliases": [
      "Anti-Jo-1",
      "Jo-1"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 7.0",
        "unit": "U/mL"
      },
      {
        "group": "Positive (Anti-Synthetase Syndrome / Polymyositis)",
        "value": "≥ 10.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Pathognomonic for Anti-Synthetase Syndrome: inflammatory myositis, Interstitial Lung Disease, 'mechanic's hands', Raynaud, non-erosive arthritis"
      }
    ],
    "significance": "Most common myositis-specific antibody. Diagnostic for Anti-Synthetase Syndrome (triad of idiopathic inflammatory myopathy [polymyositis/dermatomyositis], severe rapidly progressive interstitial lung disease, and 'mechanic's hands' / hyperkeratotic fissuring of digits).",
    "significanceAr": "الضد الأكثر شيوعاً لالتهاب العضلات المناعي. يشخص متلازمة مضاد السنتيتيز: التهاب عضلات حاد، تليف رئوي خلالي، وتشققات 'أيدي الميكانيكي' الخشنة.",
    "tags": [
      "autoimmune",
      "anti-jo1",
      "myositis",
      "polymyositis",
      "mechanics-hands"
    ]
  },
  {
    "id": "anti_histone_antibodies",
    "name": "Anti-Histone Antibodies",
    "nameAr": "أضداد الهيستون (واسم الذئبة الدوائية)",
    "aliases": [
      "Anti-Histone",
      "Histone Antibodies"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 1.0",
        "unit": "Index"
      },
      {
        "group": "Drug-Induced Lupus Erythematosus (DILE Hallmark)",
        "value": "> 1.5",
        "unit": "Index",
        "alert": "critical_high",
        "note": "Present in >95% of Drug-Induced Lupus (Procainamide, Hydralazine, Isoniazid, Minocycline, TNF-inhibitors)"
      }
    ],
    "significance": "Hallmark antibody of Drug-Induced Lupus Erythematosus (DILE), present in >95% of cases caused by hydralazine, procainamide, isoniazid, and minocycline. Unlike idiopathic SLE, anti-dsDNA and anti-Sm are negative, and symptoms resolve upon drug discontinuation.",
    "significanceAr": "العلامة المميزة للذئبة المحفزة بالأدوية (>95% من الحالات كالهيدرالازين والبروكيناميد والآيزونيازيد). تتميز عن الذئبة الحقيقية بسلبية أضداد dsDNA وتراجع الأعراض بوقف الدواء.",
    "tags": [
      "autoimmune",
      "anti-histone",
      "drug-induced-lupus",
      "hydralazine"
    ]
  },
  {
    "id": "c_anca_pr3",
    "name": "c-ANCA / Anti-PR3 (Proteinase 3 Antibodies)",
    "nameAr": "c-ANCA / أضداد بروتيناز 3 (واسم حبيبيات ويجنر)",
    "aliases": [
      "c-ANCA",
      "PR3-ANCA",
      "Anti-PR3"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 3.5",
        "unit": "U/mL"
      },
      {
        "group": "Granulomatosis with Polyangiitis (Wegener's Diagnostic)",
        "value": "> 5.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Cytoplasmic ANCA with PR3 specificity; >90% sensitivity in active Granulomatosis with Polyangiitis (GPA / Wegener's)"
      }
    ],
    "significance": "Cytoplasmic neutrophil staining pattern targeted against Proteinase 3. Highly sensitive (>90%) and specific for Granulomatosis with Polyangiitis (GPA, formerly Wegener granulomatosis: necrotizing granulomas of upper/lower respiratory tract and crescentic glomerulonephritis). Titer correlates with disease activity.",
    "significanceAr": "النمط السيتوبلازمي لأضداد العدلات الموجه ضد بروتيناز 3. عالي الحساسية والنوعية لداء ورم ويغنر الحبيبي (GPA) الذي يضرب المجاري التنفسية العلوية والرئة وكبيبات الكلى.",
    "tags": [
      "autoimmune",
      "c-anca",
      "pr3",
      "wegener",
      "vasculitis",
      "gpa"
    ]
  },
  {
    "id": "p_anca_mpo",
    "name": "p-ANCA / Anti-MPO (Myeloperoxidase Antibodies)",
    "nameAr": "p-ANCA / أضداد الميلوبيروكسيداز (MPO)",
    "aliases": [
      "p-ANCA",
      "MPO-ANCA",
      "Anti-MPO"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 3.5",
        "unit": "U/mL"
      },
      {
        "group": "Microscopic Polyangiitis / EGPA / Rapidly Progressive GN",
        "value": "> 5.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Perinuclear ANCA specific for Microscopic Polyangiitis (MPA) and Eosinophilic Granulomatosis with Polyangiitis (EGPA / Churg-Strauss)"
      }
    ],
    "significance": "Perinuclear neutrophil staining targeted against myeloperoxidase. Associated with Microscopic Polyangiitis (MPA), Eosinophilic Granulomatosis with Polyangiitis (EGPA / Churg-Strauss), and idiopathic crescentic glomerulonephritis.",
    "significanceAr": "النمط حول النووي لأضداد العدلات الموجه ضد الميلوبيروكسيداز. يرتبط بالتهاب الأوعية المجهري (MPA) ومتلازمة شيرغ ستراوس (EGPA) والتهاب الكبيبات سريع الترقي.",
    "tags": [
      "autoimmune",
      "p-anca",
      "mpo",
      "mpa",
      "churg-strauss",
      "vasculitis"
    ]
  },
  {
    "id": "anti_gbm_goodpasture",
    "name": "Anti-Glomerular Basement Membrane Antibodies (Anti-GBM)",
    "nameAr": "أضداد الغشاء القاعدي الكبيبي (Anti-GBM / داء غودباستشر)",
    "aliases": [
      "Anti-GBM",
      "Goodpasture Antibody"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 20.0",
        "unit": "U/mL"
      },
      {
        "group": "Goodpasture Syndrome / Anti-GBM Disease Diagnostic",
        "value": "≥ 20.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Direct antibodies against alpha-3 chain of type IV collagen; urgent medical emergency requiring immediate plasmapheresis, steroids, and cyclophosphamide"
      }
    ],
    "significance": "Pathogenic autoantibodies targeting the non-collagenous domain of the alpha-3 chain of Type IV collagen in glomerular and alveolar basement membranes. Causes pulmonary-renal syndrome (alveolar hemorrhage and rapidly progressive crescentic glomerulonephritis). Emergency indication for plasmapheresis.",
    "significanceAr": "أضداد مرضية تهاجم كولاجين النمط الرابع في الغشاء القاعدي للكلية والرئة (داء غودباستشر). تسبب نزفاً رئوياً صاعقاً وفشلاً كلوياً سريع الترقي يستدعي فصادة البلازما فوراً.",
    "tags": [
      "autoimmune",
      "anti-gbm",
      "goodpasture",
      "pulmonary-renal",
      "emergency"
    ]
  },
  {
    "id": "rheumatoid_factor_rf",
    "name": "Rheumatoid Factor (RF Quantitative)",
    "nameAr": "العامل الرثياني الكمي (RF)",
    "aliases": [
      "RF",
      "Rheumatoid Factor",
      "العامل الروماتويدي"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 14.0",
        "unit": "IU/mL"
      },
      {
        "group": "Low Positive",
        "value": "14.0 – 42.0",
        "unit": "IU/mL"
      },
      {
        "group": "High Positive / Severe Disease Activity",
        "value": "> 42.0 (or >3x ULN)",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "High titers predict erosive rheumatoid arthritis, subcutaneous rheumatoid nodules, and extra-articular vasculitis"
      }
    ],
    "significance": "Autoantibody (typically IgM) directed against the Fc region of human IgG. Present in ~70-80% of patients with established Rheumatoid Arthritis (poor specificity: also positive in hepatitis C, Sjogren, subacute bacterial endocarditis, cryoglobulinemia, healthy elderly). High titers associate with severe erosive joint destruction and rheumatoid nodules.",
    "significanceAr": "جسم مضاد (غالباً IgM) موجه ضد الجزء Fc من IgG البشري. يوجد في 70-80% من مرضى الروماتويد (نوعيته متوسطة لوجوده في التهاب الكبد C والتهاب الشغاف). عياره المرتفع ينذر بتآكل المفاصل الشديد.",
    "tags": [
      "autoimmune",
      "rf",
      "rheumatoid-arthritis",
      "rheumatology"
    ]
  },
  {
    "id": "anti_ccp_antibodies",
    "name": "Anti-Cyclic Citrullinated Peptide (Anti-CCP / ACPA)",
    "nameAr": "أضداد الببتيد السيتروليني الحلقي (Anti-CCP / ACPA)",
    "aliases": [
      "Anti-CCP",
      "ACPA",
      "أضداد CCP"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 20.0",
        "unit": "U/mL"
      },
      {
        "group": "Weak Positive",
        "value": "20.0 – 39.9",
        "unit": "U/mL"
      },
      {
        "group": "Moderate Positive",
        "value": "40.0 – 59.9",
        "unit": "U/mL"
      },
      {
        "group": "Strongly Positive (Rheumatoid Arthritis Diagnostic)",
        "value": "≥ 60.0 (or >3x ULN)",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Exquisite specificity (>96-98%) for Rheumatoid Arthritis; predicts aggressive erosive joint destruction"
      }
    ],
    "significance": "Directed against citrullinated peptides. Unsurpassed specificity (>96-98%) for Rheumatoid Arthritis with sensitivity comparable to RF (~70-80%). Detectable years before clinical arthritis onset. Strongly predicts aggressive erosive joint disease, mandating early DMARD therapy.",
    "significanceAr": "الفحص الأكثر دقة ونوعية لتشخيص التهاب المفاصل الرثياني (>96-98%). يظهر قبل ظهور آلام المفاصل بسنوات؛ ووجوده بعيار مرتفع ينذر بتخرب وتآكل المفصل المبكر ويستوجب بدء العلاج فوراً.",
    "tags": [
      "autoimmune",
      "anti-ccp",
      "rheumatoid-arthritis",
      "acpa",
      "rheumatology"
    ]
  },
  {
    "id": "complement_c3_serum",
    "name": "Serum Complement C3",
    "nameAr": "المتممة C3 في المصل",
    "aliases": [
      "C3",
      "Complement C3",
      "عنصر المتممة C3"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "90 – 180",
        "unit": "mg/dL",
        "note": "0.9 – 1.8 g/L"
      },
      {
        "group": "Hypocomplementemia (Active Consumption)",
        "value": "< 80",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Active SLE nephritis flare, Post-Streptococcal GN, MPGN, cryoglobulinemia, severe sepsis"
      }
    ],
    "significance": "Central component of classical and alternative complement cascades. Decreased in hypocomplementemic glomerulonephritis (active lupus nephritis, post-streptococcal GN, MPGN, subacute bacterial endocarditis, cryoglobulinemia). Consumed alongside C4 during active SLE flares.",
    "significanceAr": "المكون المحوري لشلال المتممة المناعية. يستهلك وينخفض بشدة في هجمات الذئبة الحمراء الكلوية الحادة، والتهاب كبيبات الكلى ما بعد العقدية، والتهاب شغاف القلب الإنتاني.",
    "tags": [
      "autoimmune",
      "complement",
      "c3",
      "hypocomplementemia",
      "lupus-nephritis"
    ]
  },
  {
    "id": "complement_c4_serum",
    "name": "Serum Complement C4",
    "nameAr": "المتممة C4 في المصل",
    "aliases": [
      "C4",
      "Complement C4",
      "عنصر المتممة C4"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "15 – 45",
        "unit": "mg/dL",
        "note": "0.15 – 0.45 g/L"
      },
      {
        "group": "Low / Consumed in Classical Pathway",
        "value": "< 12",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Active SLE disease activity, Mixed Cryoglobulinemia (profound C4 suppression with near-normal C3)"
      },
      {
        "group": "Hereditary Angioedema Screen (C1-INH Deficit)",
        "value": "< 10",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "C4 is low in >95% of HAE patients even between attacks (best initial screening test)"
      }
    ],
    "significance": "Classical pathway component. Depleted during classical pathway activation (immune complex deposition in SLE). Profoundly suppressed in mixed cryoglobulinemia. Best initial screening test for Hereditary Angioedema (C4 is low in >95% of HAE patients even between swelling episodes).",
    "significanceAr": "مكون في السبيل الكلاسيكي للمتممة. ينخفض في هجمات الذئبة والغلوبيولينات البردية. وهو أفضل فحص مسحي مبدئي للوذمة الوعائية الوراثية (HAE) حيث ينخفض في 95% من المرضى حتى دون هجمات.",
    "tags": [
      "autoimmune",
      "complement",
      "c4",
      "hae",
      "angioedema",
      "lupus"
    ]
  },
  {
    "id": "ch50_total_complement",
    "name": "Total Hemolytic Complement (CH50)",
    "nameAr": "النشاط الانحلالي الكلي للمتممة (CH50)",
    "aliases": [
      "CH50",
      "Total Complement"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "60 – 144",
        "unit": "U/mL"
      },
      {
        "group": "Near Zero / Absent (<10 U/mL)",
        "value": "< 10",
        "unit": "U/mL",
        "alert": "critical_low",
        "note": "Indicates complete congenital homozygous deficiency of an individual complement component (C1 through C9)"
      }
    ],
    "significance": "Functional assay measuring capacity of serum to lyse 50% of antibody-sensitized sheep erythrocytes. Tests integrity of classical and terminal pathways (C1-C9). Complete absence (CH50 = 0) suggests inherited homozygous complement deficiency (C5-C9 deficiency predisposes to recurrent Neisseria meningitidis infections).",
    "significanceAr": "فحص وظيفي يقيس قدرة المصل على شطر 50% من كريات الدم الحمراء الحساسة. غيابه التام (صفر) يشخص نقصاً وراثياً في أحد عوامل المتممة (نقص C5-C9 يسبب إنتانات المكورات السحائية المتكررة).",
    "tags": [
      "autoimmune",
      "ch50",
      "complement-deficiency",
      "neisseria",
      "immunology"
    ]
  },
  {
    "id": "c1_esterase_inhibitor_protein",
    "name": "C1-Esterase Inhibitor Antigen (Quantitative)",
    "nameAr": "مستضد مثبط C1-إستيراز (الكمي)",
    "aliases": [
      "C1-INH",
      "C1 Inhibitor"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "19 – 37",
        "unit": "mg/dL"
      },
      {
        "group": "Type I Hereditary Angioedema (Low Protein)",
        "value": "< 10",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Represents ~85% of Hereditary Angioedema; recurrent non-pruritic, non-urticarial swelling"
      }
    ],
    "significance": "Inhibits C1r, C1s, factor XIIa, and kallikrein (preventing excess bradykinin generation). Quantitative reduction causes Type I Hereditary Angioedema (~85% of cases), causing life-threatening laryngeal edema unresponsive to antihistamines and epinephrine.",
    "significanceAr": "يثبط توليد البراديكينين المسبب للوذمة. نقصه الكمي يسبب النوع الأول من الوذمة الوعائية الوراثية HAE (85% من الحالات) مع وذمة حنجرة خانقة لا تستجيب لمضادات الهيستامين ولا للأدرينالين.",
    "tags": [
      "autoimmune",
      "c1-inh",
      "hae",
      "hereditary-angioedema",
      "bradykinin"
    ]
  },
  {
    "id": "c1_esterase_inhibitor_function",
    "name": "C1-Esterase Inhibitor Functional Activity",
    "nameAr": "الفعالية الوظيفية لمثبط C1-إستيراز",
    "aliases": [
      "C1-INH Functional"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Normal Activity",
        "value": "> 67.0",
        "unit": "%"
      },
      {
        "group": "Type II Hereditary Angioedema (Dysfunctional Protein)",
        "value": "< 50.0",
        "unit": "%",
        "alert": "critical_low",
        "note": "Normal or elevated protein mass but impaired enzymatic function (~15% of HAE)"
      }
    ],
    "significance": "Functional chromogenic assay. Deficient in both Type I and Type II Hereditary Angioedema. In Type II HAE, the antigenic protein level is normal or high, but functional activity is severely diminished (<50%).",
    "significanceAr": "فحص وظيفي يكشف النوع الثاني من الوذمة الوعائية الوراثية HAE حيث يكون كمية البروتين طبيعية ولكن وظيفته معطلة تماماً.",
    "tags": [
      "autoimmune",
      "c1-inh-function",
      "hae"
    ]
  },
  {
    "id": "anti_cardiolipin_antibodies_igg_igm",
    "name": "Anti-Cardiolipin Antibodies (aCL IgG & IgM)",
    "nameAr": "أضداد الكارديوليبين (aCL IgG و IgM)",
    "aliases": [
      "aCL",
      "Anticardiolipin",
      "أضداد الكارديوليبين"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal (IgG and IgM)",
        "value": "< 20.0",
        "unit": "GPL / MPL units"
      },
      {
        "group": "Low Positive",
        "value": "20.0 – 39.9",
        "unit": "GPL / MPL units"
      },
      {
        "group": "Medium to High Positive (Sydney APS Diagnostic Criteria)",
        "value": "≥ 40.0",
        "unit": "GPL / MPL units",
        "alert": "critical_high",
        "note": "Must be documented positive on ≥2 occasions at least 12 weeks apart with vascular thrombosis or pregnancy morbidity to confirm Antiphospholipid Syndrome"
      }
    ],
    "significance": "Core laboratory criterion for Antiphospholipid Syndrome (APS). Associated with arterial/venous thromboses, recurrent spontaneous pregnancy losses (early miscarriages, late stillbirths), and livedo reticularis. To meet international Sydney criteria, medium-to-high titers (≥40 GPL/MPL) must persist on repeat testing >12 weeks apart.",
    "significanceAr": "المعيار المخبري الأساسي لمتلازمة أضداد الفوسفوليبيد (APS). يسبب خثار الشرايين والأوردة والإجهاضات المتكررة وموت الأجنة. لتشخيص المتلازمة يجب إثبات إيجابية العيار العالي مرتين تفصل بينهما 12 أسبوعاً.",
    "tags": [
      "autoimmune",
      "anticardiolipin",
      "aps",
      "thrombosis",
      "recurrent-miscarriage"
    ]
  },
  {
    "id": "anti_beta_2_glycoprotein_1",
    "name": "Anti-Beta-2-Glycoprotein I Antibodies (aB2GPI IgG & IgM)",
    "nameAr": "أضداد بيتا-2 غليكوبروتين 1 (aB2GPI IgG و IgM)",
    "aliases": [
      "Anti-B2GPI",
      "aB2GPI",
      "Beta 2 Glycoprotein 1"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal (IgG and IgM)",
        "value": "< 20.0",
        "unit": "SGU / SMU units",
        "note": "< 99th percentile"
      },
      {
        "group": "Antiphospholipid Syndrome Diagnostic (Sydney Criteria)",
        "value": "> 40.0 (or >99th percentile)",
        "unit": "units",
        "alert": "critical_high",
        "note": "Highest specificity for clinical thrombosis and obstetric complications in APS; confirm at >12 weeks"
      }
    ],
    "significance": "Recognizes domain I of beta-2-glycoprotein I. Demonstrates the highest correlation with thrombosis, stroke, and pregnancy morbidity among antiphospholipid antibody tests. Required laboratory criterion for APS.",
    "significanceAr": "الضد الأكثر ارتباطاً بحوادث الجلطات الفعلية والإجهاضات بين تحاليل الفوسفوليبيد. معيار تشخيصي دولي إلزامي لمتلازمة أضداد الفوسفوليبيد.",
    "tags": [
      "autoimmune",
      "beta-2-glycoprotein",
      "aps",
      "thrombosis"
    ]
  },
  {
    "id": "anti_intrinsic_factor",
    "name": "Anti-Intrinsic Factor Antibodies (Anti-IF)",
    "nameAr": "أضداد العامل الداخلي (Anti-IF / فقر الدم الخبيث)",
    "aliases": [
      "Anti-IF",
      "Intrinsic Factor Blocking Antibody"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 1.2",
        "unit": "AU/mL"
      },
      {
        "group": "Pernicious Anemia Pathognomonic",
        "value": "≥ 1.2",
        "unit": "AU/mL",
        "alert": "critical_high",
        "note": ">99% specificity for Pernicious Anemia (though sensitivity is ~50-70%)"
      }
    ],
    "significance": "Type 1 blocking antibodies prevent B12 from binding to gastric intrinsic factor. Exquisite specificity (>99%) for Pernicious Anemia. A positive test confirms autoimmune gastritis/pernicious anemia definitively without needing obsolete Schilling test.",
    "significanceAr": "أضداد تعيق ارتباط B12 بالعامل الداخلي المعدي. نوعيتها تفوق 99% لتشخيص فقر الدم الخبيث (Pernicious Anemia) وتغني عن اختبار شيلينغ التاريخي.",
    "tags": [
      "autoimmune",
      "pernicious-anemia",
      "anti-intrinsic-factor",
      "vitamin-b12",
      "hematology"
    ]
  },
  {
    "id": "anti_parietal_cell",
    "name": "Anti-Parietal Cell Antibodies (APCA)",
    "nameAr": "أضداد الخلايا الجدارية المعدية (APCA)",
    "aliases": [
      "APCA",
      "Anti-Parietal Cell"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 1:20 (or <20.0 U/mL)",
        "unit": "titer"
      },
      {
        "group": "Autoimmune Metaplastic Atrophic Gastritis (AMAG)",
        "value": "≥ 1:80 (or >25.0 U/mL)",
        "unit": "titer",
        "note": "High sensitivity (~90%) for autoimmune atrophic gastritis (leads to achlorhydria, high gastrin, and gastric neuroendocrine carcinoid risk)"
      }
    ],
    "significance": "Targets the gastric H+/K+-ATPase proton pump. High sensitivity (~90%) for autoimmune metaplastic atrophic gastritis (AMAG / Type A gastritis of body/fundus). Leads to achlorhydria, hypergastrinemia, iron malabsorption, and gastric neuroendocrine tumors.",
    "significanceAr": "تهاجم مضخة البروتون في خلايا المعدة الجدارية. حساسة جداً (~90%) لالتهاب المعدة الضموري المناعي؛ وتؤدي لفقدان حمض المعدة وارتفاع الغاسترين ونقص امتصاص الحديد وفيتامين B12.",
    "tags": [
      "autoimmune",
      "apca",
      "atrophic-gastritis",
      "pernicious-anemia",
      "gastroenterology"
    ]
  },
  {
    "id": "anti_ttg_iga_celiac",
    "name": "Anti-Tissue Transglutaminase IgA (tTG-IgA)",
    "nameAr": "أضداد ترانسغلوتاميناز الأنسجة IgA (واسم حساسية القمح / السيلياك)",
    "aliases": [
      "tTG-IgA",
      "Anti-tTG",
      "سلياك",
      "حساسية القمح"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal (On Gluten-Containing Diet)",
        "value": "< 10.0",
        "unit": "U/mL"
      },
      {
        "group": "Weak Positive",
        "value": "10.0 – 15.0",
        "unit": "U/mL"
      },
      {
        "group": "Positive (Celiac Disease)",
        "value": "> 15.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "First-line screening test for Celiac Disease (>95% sensitivity and specificity)"
      },
      {
        "group": "Markedly Elevated (>10x ULN / ESPGHAN No-Biopsy Criterion in Children)",
        "value": "> 100.0 (≥ 10x Upper Limit)",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "In children, values >10x ULN with positive anti-EMA on separate sample permits biopsy-free diagnosis of Celiac Disease"
      }
    ],
    "significance": "Single best first-line screening test for Celiac Disease (>95% sensitivity and specificity). Patient MUST be consuming a gluten-containing diet (≥1-2 slices of wheat bread daily for 6-8 weeks) for accuracy. CRITICAL: Total serum IgA must ALWAYS be measured concurrently to rule out selective IgA deficiency (which causes false-negative tTG-IgA; in that case, test tTG-IgG or DGP-IgG).",
    "significanceAr": "الفحص الأول والأفضل لمسح الداء الزلاقي (حساسية القمح). يشترط تناول الجلوتين قبل الفحص لأسابيع. تنبيه إلزامي: يجب قياس IgA الكلي بالتزامن لاستبعاد نقصه الوراثي الذي يعطي نتائج سلبية كاذبة.",
    "tags": [
      "autoimmune",
      "celiac",
      "ttg-iga",
      "gluten",
      "gastroenterology"
    ]
  },
  {
    "id": "anti_dgp_iga_igg",
    "name": "Anti-Deamidated Gliadin Peptide (DGP IgA & IgG)",
    "nameAr": "أضداد ببتيد الغليادين غير الأميدي (DGP IgA و IgG)",
    "aliases": [
      "Anti-DGP",
      "DGP-IgA",
      "DGP-IgG"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 20.0",
        "unit": "U/mL"
      },
      {
        "group": "Positive (Celiac Disease)",
        "value": "≥ 20.0",
        "unit": "U/mL",
        "note": "DGP-IgA and IgG are superior to tTG in children younger than 2 years of age"
      }
    ],
    "significance": "Specific for deamidated forms of gluten gliadin peptide. In infants and children younger than 2 years, anti-DGP demonstrates superior sensitivity compared to anti-tTG.",
    "significanceAr": "أضداد نوعية للغليادين؛ تتميز بدقة وحساسية متفوقة على tTG لدى الرضع والأطفال الصغار دون سن السنتين.",
    "tags": [
      "autoimmune",
      "celiac",
      "dgp",
      "pediatric"
    ]
  },
  {
    "id": "anti_endomysial_iga_ema",
    "name": "Anti-Endomysial Antibodies IgA (EMA-IgA)",
    "nameAr": "أضداد باطن العضل IgA (EMA-IgA)",
    "aliases": [
      "EMA",
      "Anti-EMA",
      "Endomysial Antibodies"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative / Titer < 1:5",
        "unit": "titer"
      },
      {
        "group": "Positive (Celiac Disease Confirmatory)",
        "value": "Positive (≥ 1:5 to > 1:160)",
        "unit": "titer",
        "alert": "critical_high",
        "note": "Near 100% specificity for Celiac Disease (indirect immunofluorescence on monkey esophagus)"
      }
    ],
    "significance": "Indirect immunofluorescence assay on distal monkey esophagus or human umbilical cord. Near 100% specificity for active Celiac Disease. Used as confirmatory secondary test.",
    "significanceAr": "فحص مجهري فلوري على مريء القرد؛ يمتلك نوعية تقارب 100% للداء الزلاقي ويستخدم لتأكيد إيجابية tTG.",
    "tags": [
      "autoimmune",
      "celiac",
      "ema",
      "confirmatory"
    ]
  },
  {
    "id": "anti_mitochondrial_ama_m2",
    "name": "Anti-Mitochondrial Antibodies (AMA / M2 Subtype)",
    "nameAr": "أضداد المتقدرات (AMA / النمط المساعد M2)",
    "aliases": [
      "AMA",
      "AMA-M2",
      "Anti-Mitochondrial"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 20.0",
        "unit": "Units",
        "note": "Titer < 1:20"
      },
      {
        "group": "Primary Biliary Cholangitis Pathognomonic",
        "value": "> 25.0 (or Titer ≥ 1:40)",
        "unit": "Units",
        "alert": "critical_high",
        "note": ">95% sensitivity and >98% specificity for Primary Biliary Cholangitis (PBC / formerly Primary Biliary Cirrhosis)"
      }
    ],
    "significance": "Directed against the E2 subunit of the pyruvate dehydrogenase multienzyme complex (PDC-E2) on inner mitochondrial membrane. Hallmark biomarker for Primary Biliary Cholangitis (PBC), present in >95% of patients. In a patient with elevated cholestatic ALP, a positive AMA confirms PBC without requiring liver biopsy.",
    "significanceAr": "الضد المشخص لداء التهاب الأقنية الصفراوية الأولي (PBC / تشمع الكبد الصفراوي الأولي سابقاً) بنوعية >98%. إيجابيته مع ارتفاع الفوسفاتاز القلوية تثبت المرض وتغني عن خزعة الكبد.",
    "tags": [
      "autoimmune",
      "ama",
      "pbc",
      "primary-biliary-cholangitis",
      "hepatology"
    ]
  },
  {
    "id": "anti_smooth_muscle_asma",
    "name": "Anti-Smooth Muscle Antibodies (ASMA / F-Actin)",
    "nameAr": "أضداد العضلات الملساء (ASMA / F-Actin)",
    "aliases": [
      "ASMA",
      "Anti-Actin",
      "أضداد العضلات الملساء"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 20.0",
        "unit": "Units",
        "note": "Titer < 1:20"
      },
      {
        "group": "Autoimmune Hepatitis Type 1 Diagnostic",
        "value": "> 40.0 (or Titer ≥ 1:40 – 1:80)",
        "unit": "Units",
        "alert": "critical_high",
        "note": "Hallmark of Type 1 Autoimmune Hepatitis (AIH-1), frequently paired with high ANA and hypergammaglobulinemia"
      }
    ],
    "significance": "Directed predominantly against filamentous F-actin microfilaments. Hallmark diagnostic antibody for Type 1 Autoimmune Hepatitis (AIH-1), occurring primarily in young and middle-aged females alongside marked transaminitis and high IgG.",
    "significanceAr": "موجهة ضد خيوط الأكتين؛ وهي العلامة المميزة لالتهاب الكبد المناعي الذاتي من النمط الأول (AIH-1) المترافق مع ارتفاع شديد في أنزيمات الكبد والغلوبولينات المناعية.",
    "tags": [
      "autoimmune",
      "asma",
      "aih",
      "autoimmune-hepatitis",
      "hepatology"
    ]
  },
  {
    "id": "anti_lkm_1",
    "name": "Anti-Liver-Kidney Microsomal Type 1 (Anti-LKM1)",
    "nameAr": "أضداد ميكروسومات الكبد والكلية النمط 1 (Anti-LKM1)",
    "aliases": [
      "Anti-LKM1",
      "LKM-1"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 20.0",
        "unit": "Units",
        "note": "Titer < 1:20"
      },
      {
        "group": "Autoimmune Hepatitis Type 2 Diagnostic",
        "value": "> 25.0 (or Titer ≥ 1:40)",
        "unit": "Units",
        "alert": "critical_high",
        "note": "Diagnostic hallmark of Type 2 Autoimmune Hepatitis (AIH-2), typically presenting in young pediatric / adolescent females with aggressive course"
      }
    ],
    "significance": "Targets cytochrome P450 2D6 (CYP2D6). Diagnostic hallmark of Type 2 Autoimmune Hepatitis (AIH-2), which predominantly affects young children/adolescent girls and follows a severe, rapidly progressive course.",
    "significanceAr": "يهاجم أنزيم السيتوكروم CYP2D6. العلامة المشخصة لالتهاب الكبد المناعي الذاتي من النمط 2 (AIH-2) الذي يصيب الفتيات الصغيرات ويتميز بمسار هجومي سريع.",
    "tags": [
      "autoimmune",
      "lkm1",
      "aih-2",
      "pediatric-hepatology"
    ]
  },
  {
    "id": "anti_pla2r_antibodies",
    "name": "Anti-Phospholipase A2 Receptor Antibodies (Anti-PLA2R)",
    "nameAr": "أضداد مستقبلات فوسفوليباز A2 (Anti-PLA2R)",
    "aliases": [
      "Anti-PLA2R",
      "PLA2R"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 14.0",
        "unit": "RU/mL"
      },
      {
        "group": "Primary Membranous Nephropathy Diagnostic",
        "value": "≥ 20.0",
        "unit": "RU/mL",
        "alert": "critical_high",
        "note": "Found in 70-80% of Primary Membranous Nephropathy; permits non-invasive diagnosis without kidney biopsy in low-risk patients"
      }
    ],
    "significance": "Targeted against M-type phospholipase A2 receptor on podocyte foot processes. Present in 70-80% of primary (idiopathic) Membranous Nephropathy. Titer mirrors disease activity and proteinuria; permits non-invasive diagnosis without renal biopsy.",
    "significanceAr": "تهاجم خلايا البودوسايت الكبيبية في الكلى. توجد في 70-80% من اعتلال الكلية الغشائي الأولي (Membranous Nephropathy) وتتيح التشخيص دون الحاجة لخزعة كلوية.",
    "tags": [
      "autoimmune",
      "pla2r",
      "membranous-nephropathy",
      "nephrotic",
      "nephrology"
    ]
  },
  {
    "id": "anti_achr_binding_antibodies",
    "name": "Acetylcholine Receptor Binding Antibodies (AChR-Ab)",
    "nameAr": "أضداد مستقبلات الأسيتيل كولين (AChR-Ab / واسم الوهن العضلي)",
    "aliases": [
      "AChR Antibodies",
      "Anti-AChR",
      "أضداد الوهن العضلي"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 0.50",
        "unit": "nmol/L"
      },
      {
        "group": "Myasthenia Gravis Diagnostic Confirmation",
        "value": "≥ 0.50",
        "unit": "nmol/L",
        "alert": "critical_high",
        "note": "Positive in 85-90% of generalized Myasthenia Gravis and ~50% of ocular MG; order chest CT for thymoma"
      }
    ],
    "significance": "Blocks and accelerates internalization of nicotinic acetylcholine receptors at the neuromuscular junction post-synaptic membrane. Diagnostic hallmark of Myasthenia Gravis (generalized fatigable muscle weakness, ptosis, diplopia). Mandates chest CT to screen for thymoma.",
    "significanceAr": "تهاجم مستقبلات الأسيتيل كولين في الوصل العصبي العضلي. الفحص المشخص لمرض الوهن العضلي الوبيل (Myasthenia Gravis: إعياء عضلي، إطراق الجفن، وازدواج الرؤية). يستوجب تصوير الصدر لاستبعاد أورام التوتة (Thymoma).",
    "tags": [
      "autoimmune",
      "achr",
      "myasthenia-gravis",
      "neurology",
      "thymoma"
    ]
  },
  {
    "id": "anti_musk_antibodies",
    "name": "Anti-Muscle-Specific Kinase Antibodies (Anti-MuSK)",
    "nameAr": "أضداد الكيناز النوعي للعضلات (Anti-MuSK)",
    "aliases": [
      "Anti-MuSK",
      "MuSK Antibodies"
    ],
    "category": "autoimmune",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "< 0.40",
        "unit": "nmol/L"
      },
      {
        "group": "AChR-Negative Myasthenia Gravis",
        "value": "≥ 0.40",
        "unit": "nmol/L",
        "alert": "critical_high",
        "note": "Present in 30-40% of seronegative generalized Myasthenia Gravis; prominent bulbar and respiratory weakness"
      }
    ],
    "significance": "Present in 30-40% of patients with generalized Myasthenia Gravis who test negative for AChR antibodies. Characterized by severe bulbar (speech, swallowing) and respiratory weakness, and poor response to standard anticholinesterase (pyridostigmine) medications.",
    "significanceAr": "توجد في 30-40% من مرضى الوهن العضلي سلبيي أضداد AChR. يتميز بإصابة عضلات البلع والتنفس واستجابة ضعيفة لدواء ميستينون.",
    "tags": [
      "autoimmune",
      "musk",
      "myasthenia-gravis",
      "neurology"
    ]
  },
  {
    "id": "afp_tumor_marker",
    "name": "Alpha-Fetoprotein (AFP Tumor Marker)",
    "nameAr": "ألفا فيتو بروتين (الواسم الورمي / AFP)",
    "aliases": [
      "AFP",
      "Alpha Fetoprotein",
      "ألفا فيتوبروتين"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Healthy Adults",
        "value": "< 8.0",
        "unit": "ng/mL"
      },
      {
        "group": "Cirrhotic Screening Borderline",
        "value": "10.0 – 20.0",
        "unit": "ng/mL",
        "note": "Perform 6-month liver ultrasound surveillance"
      },
      {
        "group": "Hepatocellular Carcinoma Diagnostic Cutoff",
        "value": "> 400.0 – 500.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Diagnostic of HCC in a cirrhotic patient with characteristic arterial-enhancing liver mass"
      },
      {
        "group": "Non-Seminomatous Germ Cell Tumor (NSGCT)",
        "value": "> 1000.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Yolk sac tumor / embryonal carcinoma component (never elevated in pure seminoma)"
      }
    ],
    "significance": "Major tumor marker for Hepatocellular Carcinoma (HCC) and non-seminomatous testicular germ cell tumors (specifically yolk sac tumor and embryonal carcinoma). Pure seminomas NEVER produce AFP. Monitored post-resection for cancer recurrence.",
    "significanceAr": "الواسم الورمي الأساسي لسرطان الخلايا الكبدية (HCC) وأورام الخصية غير المنوية (كيس المح والسرطانة الجنينية). لا يرتفع مطلقاً في الورم المنوي النقي (Seminoma).",
    "tags": [
      "tumor_markers",
      "afp",
      "hcc",
      "testicular-cancer",
      "oncology"
    ]
  },
  {
    "id": "cea_carcinoembryonic_antigen",
    "name": "Carcinoembryonic Antigen (CEA)",
    "nameAr": "المستضد السرطاني المضغي (CEA)",
    "aliases": [
      "CEA",
      "Carcinoembryonic Antigen",
      "واسم القولون CEA"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Non-Smokers Normal",
        "value": "< 3.0",
        "unit": "ng/mL"
      },
      {
        "group": "Cigarette Smokers Normal",
        "value": "< 5.0",
        "unit": "ng/mL",
        "note": "Tobacco smoke induces mild non-malignant hepatic/bronchial elevation"
      },
      {
        "group": "Benign Conditions (Hepatitis, IBD, Pancreatitis)",
        "value": "5.0 – 10.0",
        "unit": "ng/mL"
      },
      {
        "group": "Colorectal Cancer Metastasis / Recurrence Indicator",
        "value": "> 10.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "High specificity for colorectal cancer recurrence or hepatic metastasis; order CT chest/abdomen/pelvis"
      },
      {
        "group": "Widespread Metastatic Disease",
        "value": "> 50.0 – 100.0",
        "unit": "ng/mL",
        "alert": "critical_high"
      }
    ],
    "significance": "Oncofetal cell-surface glycoprotein. NOT used for screening colorectal cancer in average-risk patients due to poor sensitivity. Indispensable for post-surgical surveillance and monitoring response to systemic chemotherapy in colorectal, pancreatic, gastric, and medullary thyroid cancers.",
    "significanceAr": "بروتين سكري جنيني ورَمي. لا يستخدم للمسح العام لضعف الحساسية، لكنه الفحص الحاسم لمتابعة استئصال سرطان القولون والمستقيم وكشف النكس أو النقائل الكبدية مبكراً.",
    "tags": [
      "tumor_markers",
      "cea",
      "colorectal-cancer",
      "oncology",
      "gastroenterology"
    ]
  },
  {
    "id": "ca_125_ovarian",
    "name": "Cancer Antigen 125 (CA-125)",
    "nameAr": "مستضد السرطان 125 (واسم المبيض / CA-125)",
    "aliases": [
      "CA 125",
      "CA-125",
      "واسم المبيض"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Premenopausal Females",
        "value": "< 35.0",
        "unit": "U/mL"
      },
      {
        "group": "Normal Postmenopausal Females",
        "value": "< 20.0",
        "unit": "U/mL",
        "note": "Higher specificity in postmenopausal women with adnexal mass"
      },
      {
        "group": "Benign Elevations (Endometriosis, Fibroids, PID, Menses, Cirrhosis, Ascites)",
        "value": "35.0 – 100.0",
        "unit": "U/mL"
      },
      {
        "group": "Epithelial Ovarian Carcinoma Highly Suspicious",
        "value": "> 200.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Elevated in >80% of advanced non-mucinous epithelial ovarian cancers; urgent gynecologic oncology referral"
      }
    ],
    "significance": "Glycoprotein produced by coelomic epithelium (peritoneum, pleura, pericardium, mullerian duct derivatives). Elevated in epithelial ovarian cancer (serous carcinomas), peritoneal carcinomatosis, and primary peritoneal cancer. Also elevated in benign conditions with peritoneal inflammation (endometriosis, PID, cirrhosis with ascites, heart failure).",
    "significanceAr": "الواسم الورمي الأساسي لسرطان المبيض الظهاري (خاصة النمط المصلي). ترتفع نوعيته بشدة بعد سن اليأس. يرتفع أيضاً في بطانة الرحم الهاجرة (Endometriosis) والاستسقاء البطني والتهاب الحوض.",
    "tags": [
      "tumor_markers",
      "ca-125",
      "ovarian-cancer",
      "gynecology",
      "oncology"
    ]
  },
  {
    "id": "ca_19_9_pancreatic",
    "name": "Carbohydrate Antigen 19-9 (CA 19-9)",
    "nameAr": "مستضد الكربوهيدرات 19-9 (واسم البنكرياس / CA 19-9)",
    "aliases": [
      "CA 19-9",
      "CA19-9",
      "واسم البنكرياس"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Healthy Adults",
        "value": "< 37.0",
        "unit": "U/mL"
      },
      {
        "group": "Benign Cholestasis / Acute Cholangitis (False Positive)",
        "value": "37.0 – 100.0",
        "unit": "U/mL",
        "note": "Biliary obstruction falsely elevates CA 19-9; re-evaluate after relieving jaundice"
      },
      {
        "group": "Pancreatic Adenocarcinoma Suspicion",
        "value": "> 100.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "High specificity for pancreatic or biliary adenocarcinoma"
      },
      {
        "group": "Unresectable / Advanced Metastatic Pancreatic Cancer",
        "value": "> 1000.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Virtually diagnostic of unresectable or metastatic pancreatic / cholangiocarcinoma"
      }
    ],
    "significance": "Sialylated Lewis(a) blood group antigen. Produced by pancreatic ductal adenocarcinoma, cholangiocarcinoma, and gastric cancer. CRITICAL NOTE: ~5-10% of the Caucasian population are Lewis(a-b-) negative and genetically INCAPABLE of producing CA 19-9, yielding false-negative results even in advanced cancer.",
    "significanceAr": "مستضد فصائل الدم سياليل لويس (أ). واسم لسرطان البنكرياس وأقنية الصفراء. تنبيه هام: نحو 7-10% من البشر يفتقرون وراثياً لمستضد لويس (Lewis-negative) ولن ينتجوا CA 19-9 إطلاقاً حتى مع وجود ورم متقدم.",
    "tags": [
      "tumor_markers",
      "ca-19-9",
      "pancreatic-cancer",
      "cholangiocarcinoma",
      "oncology"
    ]
  },
  {
    "id": "ca_15_3_breast",
    "name": "Cancer Antigen 15-3 (CA 15-3 / MUC1)",
    "nameAr": "مستضد السرطان 15-3 (واسم الثدي / CA 15-3)",
    "aliases": [
      "CA 15-3",
      "CA15-3",
      "MUC1",
      "واسم الثدي"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Healthy Females",
        "value": "< 30.0",
        "unit": "U/mL"
      },
      {
        "group": "Metastatic Breast Cancer Progression",
        "value": "> 50.0",
        "unit": "U/mL",
        "alert": "critical_high",
        "note": "Used exclusively for monitoring therapeutic response and recurrence in metastatic breast carcinoma"
      }
    ],
    "significance": "Soluble form of MUC1 mucin expressed on mammary epithelial cells. Not recommended for early breast cancer screening. Used to monitor therapy response and detect systemic recurrence in metastatic breast cancer.",
    "significanceAr": "بروتين الميوسين MUC1 الظهاري. لا يصلح للمسح المبكر لسرطان الثدي؛ لكنه الفحص المعتمد لمراقبة الاستجابة للعلاج الكيماوي وكشف الانتكاس النقيلي لسرطان الثدي المتقدم.",
    "tags": [
      "tumor_markers",
      "ca-15-3",
      "breast-cancer",
      "oncology"
    ]
  },
  {
    "id": "ca_27_29_breast",
    "name": "Cancer Antigen 27-29 (CA 27-29)",
    "nameAr": "مستضد السرطان 27-29 (CA 27-29)",
    "aliases": [
      "CA 27-29",
      "CA27-29"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Healthy Females",
        "value": "< 38.0",
        "unit": "U/mL"
      },
      {
        "group": "Recurrent / Metastatic Breast Disease",
        "value": "> 38.0",
        "unit": "U/mL",
        "note": "High concordance with CA 15-3"
      }
    ],
    "significance": "Monoclonal antibody assay directed against the same MUC1 gene product as CA 15-3 with slightly superior sensitivity for metastatic breast cancer.",
    "significanceAr": "أجسام مضادة وحيدة النسيلة لنفس بروتين MUC1؛ بديل مكافئ لـ CA 15-3 لمتابعة سرطان الثدي النقيلي.",
    "tags": [
      "tumor_markers",
      "ca-27-29",
      "breast-cancer"
    ]
  },
  {
    "id": "psa_total_prostate",
    "name": "Total Prostate-Specific Antigen (Total PSA)",
    "nameAr": "مستضد البروستات النوعي الكلي (Total PSA)",
    "aliases": [
      "PSA",
      "Total PSA",
      "مستضد البروستات"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "General Screening Standard Cutoff",
        "value": "< 4.0",
        "unit": "ng/mL",
        "note": "Traditional threshold triggering urology evaluation / biopsy"
      },
      {
        "group": "Age-Specific Cutoff (40-49 years)",
        "value": "< 2.5",
        "unit": "ng/mL",
        "note": "Early screening threshold for young men"
      },
      {
        "group": "Age-Specific Cutoff (50-59 years)",
        "value": "< 3.5",
        "unit": "ng/mL"
      },
      {
        "group": "Age-Specific Cutoff (60-69 years)",
        "value": "< 4.5",
        "unit": "ng/mL"
      },
      {
        "group": "Age-Specific Cutoff (70-79 years)",
        "value": "< 6.5",
        "unit": "ng/mL"
      },
      {
        "group": "Diagnostic 'Gray Zone' (Biopsy Consideration)",
        "value": "4.0 – 10.0",
        "unit": "ng/mL",
        "note": "25% cancer risk; check % Free PSA, PSA density, or multiparametric MRI"
      },
      {
        "group": "High Risk of Prostate Adenocarcinoma (>10 ng/mL)",
        "value": "> 10.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": ">50% probability of prostate cancer on transrectal ultrasound biopsy"
      },
      {
        "group": "Post-Radical Prostatectomy Remission Target",
        "value": "< 0.2",
        "unit": "ng/mL",
        "note": "Undetectable confirms complete surgical cure; ≥0.2 indicates biochemical recurrence"
      }
    ],
    "significance": "Serine protease produced by prostatic epithelial cells to liquefy seminal coagulum. Organ-specific, NOT cancer-specific (elevated in BPH, acute prostatitis, urinary retention, vigorous bicycling, ejaculation, prostate biopsy). Total PSA >10 ng/mL carries >50% cancer risk.",
    "significanceAr": "أنزيم بروتيني تفرزه ظهارة البروستات. نوعي لعضو البروستات وليس نوعياً للسرطان وحده (يرتفع في التضخم الحميد BPH، التهاب البروستات، احتباس البول، والجماع). تجاوزه 10 نانوغرام يرفع احتمال السرطان لأكثر من 50%.",
    "tags": [
      "tumor_markers",
      "psa",
      "prostate-cancer",
      "urology",
      "screening"
    ]
  },
  {
    "id": "psa_free_total_ratio",
    "name": "Free-to-Total PSA Ratio (% Free PSA)",
    "nameAr": "نسبة مستضد البروستات الحر إلى الكلي (% Free PSA)",
    "aliases": [
      "% Free PSA",
      "Free/Total PSA",
      "البروستات الحر"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "High Cancer Probability (Aggressive / Indication for Biopsy)",
        "value": "< 10.0",
        "unit": "%",
        "alert": "critical_high",
        "note": ">55% risk of finding prostate cancer on biopsy in PSA 4-10 gray zone"
      },
      {
        "group": "Intermediate Risk (10-25%)",
        "value": "10.0 – 25.0",
        "unit": "%",
        "note": "Cancer risk approximately 15-25%"
      },
      {
        "group": "Benign Prostatic Hyperplasia (BPH Likely)",
        "value": "> 25.0",
        "unit": "%",
        "note": "<8-10% risk of cancer; biopsy can often be safely deferred"
      }
    ],
    "significance": "Indicated when Total PSA is in the diagnostic 'gray zone' (4.0-10.0 ng/mL) with normal DRE. Prostate cancer produces more complexed PSA (bound to alpha-1-antichymotrypsin) and LESS free PSA. A low free/total ratio (<10%) strongly favors cancer, while >25% favors benign hyperplasia.",
    "significanceAr": "يستخدم في المنطقة الرمادية لـ PSA (4-10 نانوغرام). يفرز السرطان شكلاً مقترناً وكمية أقل من الحر؛ لذا فإن انخفاض النسبة دون 10% يرجح السرطان بشدة (>55%)، بينما ارتفاعها فوق 25% يرجح التضخم الحميد BPH.",
    "tags": [
      "tumor_markers",
      "free-psa",
      "prostate-cancer",
      "urology"
    ]
  },
  {
    "id": "psa_density_psad",
    "name": "Prostate-Specific Antigen Density (PSAD)",
    "nameAr": "كثافة مستضد البروستات (PSAD)",
    "aliases": [
      "PSAD",
      "PSA Density"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Low Risk / BPH Predominant",
        "value": "< 0.15",
        "unit": "ng/mL/cm³"
      },
      {
        "group": "High Risk for Clinically Significant Prostate Cancer",
        "value": "≥ 0.15",
        "unit": "ng/mL/cm³",
        "alert": "critical_high",
        "note": "Strong indication for multiparametric prostate MRI and targeted biopsy"
      }
    ],
    "significance": "Calculated as Total PSA (ng/mL) divided by Prostate Volume (cm³) measured by transrectal ultrasound or MRI. Values ≥0.15 ng/mL/cm³ indicate high risk for clinically significant adenocarcinoma.",
    "significanceAr": "حاصل قسمة PSA على حجم البروستات المقاس بالموجات الصوتية أو الرنين. قيمة ≥0.15 تشير بقوة لسرطان بروستات سريري يستوجب الخزعة.",
    "tags": [
      "tumor_markers",
      "psad",
      "prostate-cancer"
    ]
  },
  {
    "id": "beta_hcg_quantitative_tumor",
    "name": "Quantitative Serum Beta-hCG (Oncology)",
    "nameAr": "هرمون الحمل الكمي الورمي (Beta-hCG)",
    "aliases": [
      "Beta-hCG Oncology",
      "Quantitative hCG Tumor",
      "واسم hCG الورمي"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Healthy Adult Males & Non-Pregnant Females",
        "value": "< 5.0",
        "unit": "mIU/mL"
      },
      {
        "group": "Choriocarcinoma / Hydatidiform Mole Diagnostic",
        "value": "> 100000.0",
        "unit": "mIU/mL",
        "alert": "critical_high",
        "note": "Extremely high levels in gestational trophoblastic disease (complete mole, choriocarcinoma)"
      },
      {
        "group": "Testicular Seminoma Production (~15-20%)",
        "value": "10.0 – 500.0",
        "unit": "mIU/mL",
        "note": "Mild elevations in syncytiotrophoblastic variant seminomas"
      },
      {
        "group": "Testicular Non-Seminomatous GCT (Choriocarcinoma)",
        "value": "> 1000.0 – 50000.0",
        "unit": "mIU/mL",
        "alert": "critical_high",
        "note": "High hCG conveys poor prognosis in IGCCC staging"
      }
    ],
    "significance": "Essential tumor marker for Gestational Trophoblastic Disease (complete/partial hydatidiform mole, choriocarcinoma) and Testicular Germ Cell Tumors. Produced by syncytiotrophoblastic elements. Rapidly doubles in viable early pregnancy; levels >100,000 mIU/mL with uterine enlargement indicate molar pregnancy.",
    "significanceAr": "واسم ورمي جوهري لأمراض الأرومة الغاذية الحملية (الحمل العنقودي، سرطانة المشيمة) وأورام الخصية الجرثومية. تجاوزه 100 ألف وحدة دولية يؤكد الحمل العنقودي ويتطلب متابعة دقيقة لمنع النقائل.",
    "tags": [
      "tumor_markers",
      "beta-hcg",
      "trophoblastic",
      "testicular-cancer",
      "oncology"
    ]
  },
  {
    "id": "nse_neuron_specific_enolase",
    "name": "Neuron-Specific Enolase (NSE)",
    "nameAr": "إنولاز العصبونات النوعي (NSE)",
    "aliases": [
      "NSE",
      "Neuron Specific Enolase"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 12.5",
        "unit": "ng/mL",
        "note": "< 17.0 µg/L depending on assay"
      },
      {
        "group": "Small Cell Lung Cancer (SCLC) & Neuroblastoma",
        "value": "> 25.0 – 50.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Elevated in >70-80% of extensive stage Small Cell Lung Carcinoma (SCLC)"
      },
      {
        "group": "Post-Cardiac Arrest Hypoxic Brain Injury Prognosis",
        "value": "> 33.0 at 48-72h",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "High specificity predictor of poor neurological outcome / severe anoxic brain death"
      }
    ],
    "significance": "Glycolytic isoenzyme present in neurons and neuroendocrine cells. Tumor marker for Small Cell Lung Cancer (SCLC) and neuroblastoma. Also used in intensive care as a neurological prognostic marker after cardiac arrest: level >33 ng/mL at 48-72 hours post-arrest predicts severe hypoxic encephalopathy and poor outcome. Must avoid in vitro hemolysis (RBCs contain high NSE).",
    "significanceAr": "أنزيم سكري يوجد في الخلايا العصبية والغدية العصبية. واسم لسرطان الرئة ذو الخلايا الصغيرة (SCLC) والورم الأرومي العصبي. ويستخدم في العناية بعد توقف القلب؛ فارتفاعه فوق 33 ينذر بموت الدماغ الإقفاري.",
    "tags": [
      "tumor_markers",
      "nse",
      "sclc",
      "neuroblastoma",
      "cardiac-arrest",
      "neurology"
    ]
  },
  {
    "id": "chromogranin_a",
    "name": "Serum Chromogranin A (CgA)",
    "nameAr": "الكروموغرينين أ في المصل (CgA)",
    "aliases": [
      "CgA",
      "Chromogranin A",
      "واسم الأورام العصبية الصماوية"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 95.0",
        "unit": "ng/mL",
        "note": "< 39 nmol/L"
      },
      {
        "group": "Proton Pump Inhibitor (PPI) Induced False Positive",
        "value": "100.0 – 400.0",
        "unit": "ng/mL",
        "note": "Gastric hypochlorhydria induces ECL cell hyperplasia; hold PPIs for ≥2 weeks before test"
      },
      {
        "group": "Neuroendocrine Tumor (NET / Carcinoid / Pheo)",
        "value": "> 500.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Major diagnostic marker for gastroenteropancreatic NETs, carcinoid syndrome, and pheochromocytoma"
      }
    ],
    "significance": "Acidic glycoprotein co-stored and co-secreted with peptide hormones and catecholamines in dense-core neuroendocrine granules. Gold standard tumor marker for Gastroenteropancreatic Neuroendocrine Tumors (GEP-NETs), carcinoid tumors, and pheochromocytoma. CRITICAL: PPIs (omeprazole) cause major false-positive elevations due to gastrin-induced ECL cell hyperplasia; discontinue PPIs for ≥2 weeks.",
    "significanceAr": "بروتين يخزن مع الكاتيكولامينات في حبيبات الخلايا العصبية الصماوية. المعيار الذهبي لأورام الجهاز الهضمي والبنكرياس العصبية الصماوية (NETs) ومتلازمة الكارسينويد. تنبيه: أدوية الحموضة (PPIs) ترفعه كاذباً ويجب إيقافها لأسبوعين.",
    "tags": [
      "tumor_markers",
      "chromogranin-a",
      "net",
      "carcinoid",
      "pheochromocytoma"
    ]
  },
  {
    "id": "urine_5_hiaa_24h",
    "name": "24-Hour Urine 5-Hydroxyindoleacetic Acid (5-HIAA)",
    "nameAr": "حمض 5-هيدروكسي إندول أسيتيك في بول 24 ساعة (5-HIAA)",
    "aliases": [
      "5-HIAA",
      "Urine 5-HIAA",
      "واسم الكارسينويد"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "2.0 – 8.0",
        "unit": "mg/24h",
        "note": "10 – 42 µmol/day"
      },
      {
        "group": "Equivocal / Dietary False Positive",
        "value": "9.0 – 25.0",
        "unit": "mg/24h",
        "note": "Bananas, pineapples, avocados, kiwi, walnuts, eggplant"
      },
      {
        "group": "Carcinoid Syndrome Diagnostic",
        "value": "> 25.0",
        "unit": "mg/24h",
        "alert": "critical_high",
        "note": "Midgut neuroendocrine tumor with hepatic metastases presenting with flushing, watery diarrhea, bronchospasm, and tricuspid regurgitation"
      }
    ],
    "significance": "Major terminal metabolite of serotonin. Diagnostic hallmark of Carcinoid Syndrome (midgut neuroendocrine tumor that has metastasized to the liver, bypassing first-pass portal hepatic metabolism). Strict dietary restriction required: avoid serotonin-rich foods (bananas, pineapples, walnuts, avocados, tomatoes) for 3 days prior.",
    "significanceAr": "الناتج الاستقلابي الرئيسي للسيروتونين. الفحص المشخص لمتلازمة الكارسينويد (توهج الوجه، إسهال مائي، تشنج قصبي، وقصور صمام القلب ثلاثي الشرف). يتطلب حمية تتجنب الموز والأناناس والأفوكادو والجوز لثلاثة أيام.",
    "tags": [
      "tumor_markers",
      "5-hiaa",
      "carcinoid",
      "serotonin",
      "flushing"
    ]
  },
  {
    "id": "spep_m_spike",
    "name": "Serum Protein Electrophoresis (SPEP) Monoclonal M-Spike",
    "nameAr": "الرحلان الكهربائي لبروتينات المصل (الشامخة أحادية النسيلة M-Spike)",
    "aliases": [
      "SPEP",
      "M-Spike",
      "Paraprotein",
      "رحلان البروتينات"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Pattern",
        "value": "No Monoclonal Band (Polyclonal Gamma)",
        "unit": "qualitative"
      },
      {
        "group": "MGUS Threshold (Monoclonal Gammopathy of Undetermined Significance)",
        "value": "< 3.0",
        "unit": "g/dL",
        "note": "Serum M-protein <3.0 g/dL, bone marrow plasma cells <10%, no CRAB end-organ damage"
      },
      {
        "group": "Smoldering / Active Multiple Myeloma Diagnostic",
        "value": "≥ 3.0",
        "unit": "g/dL",
        "alert": "critical_high",
        "note": "Assess CRAB criteria: HyperCalcemia, Renal failure, Anemia, Bone lytic lesions"
      }
    ],
    "significance": "Differentiates monoclonal gammopathies (Multiple Myeloma, Waldenström macroglobulinemia, MGUS) showing a sharp narrow 'M-spike' in gamma or beta region from polyclonal hypergammaglobulinemia (chronic infection, cirrhosis, autoimmune disease).",
    "significanceAr": "يفصل بروتينات المصل بالكهرباء. ظهور قمة حادة ضيقة (M-Spike) يشخص الأمراض أحادية النسيلة (المايلوما المتعددة، فالدنشتروم، وMGUS) مع ضرورة تقييم معايير CRAB (الكالسيوم، الكلى، فقر الدم، نخر العظام).",
    "tags": [
      "tumor_markers",
      "spep",
      "multiple-myeloma",
      "mgus",
      "hematology"
    ]
  },
  {
    "id": "upep_bence_jones",
    "name": "Urine Protein Electrophoresis & Bence-Jones Protein (UPEP)",
    "nameAr": "رحلان بروتينات البول وبروتين بنس-جونس (UPEP)",
    "aliases": [
      "UPEP",
      "Bence-Jones",
      "Bence Jones Protein"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal 24h Urine",
        "value": "No Monoclonal Light Chains Detected",
        "unit": "qualitative"
      },
      {
        "group": "Positive Bence-Jones Monoclonal Proteinuria",
        "value": "Detected M-Spike on UPEP",
        "unit": "g/24h",
        "alert": "critical_high",
        "note": "Pathognomonic of Light Chain Myeloma, AL Amyloidosis, or Light Chain Deposition Disease"
      }
    ],
    "significance": "Detects free monoclonal immunoglobulin light chains (Bence-Jones proteins) in 24-hour urine. Freely filtered by glomerulus and toxic to proximal tubules (myeloma cast nephropathy). Not detected by standard dipstick.",
    "significanceAr": "يكشف السلاسل الخفيفة أحادية النسيلة الحرة المترشحة في البول (بروتينات بنس جونس). تسبب اعتلال الكلية بالمايلوما ولا تكتشفها أشرطة البول العادية.",
    "tags": [
      "tumor_markers",
      "upep",
      "bence-jones",
      "multiple-myeloma",
      "nephrology"
    ]
  },
  {
    "id": "serum_free_kappa_chains",
    "name": "Serum Free Kappa Light Chains",
    "nameAr": "سلاسل كابا الخفيفة الحرة في المصل",
    "aliases": [
      "Free Kappa",
      "Kappa Light Chains"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "3.3 – 19.4",
        "unit": "mg/L"
      },
      {
        "group": "Monoclonal Expansion / Light Chain Myeloma",
        "value": "> 100.0",
        "unit": "mg/L",
        "alert": "critical_high",
        "note": "Involved to uninvolved ratio >100 is a Myeloma Defining Event (SLiM criteria)"
      }
    ],
    "significance": "Immunological quantification of unbound circulating kappa light chains. Essential for diagnosing non-secretory myeloma, light chain myeloma, and AL amyloidosis.",
    "significanceAr": "قياس كمي دقيق لسلاسل كابا الخفيفة الحرة. أساسي لتشخيص مايلوما السلاسل الخفيفة والداء النشواني AL.",
    "tags": [
      "tumor_markers",
      "free-light-chains",
      "kappa",
      "myeloma"
    ]
  },
  {
    "id": "serum_free_lambda_chains",
    "name": "Serum Free Lambda Light Chains",
    "nameAr": "سلاسل لامدا الخفيفة الحرة في المصل",
    "aliases": [
      "Free Lambda",
      "Lambda Light Chains"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "5.7 – 26.3",
        "unit": "mg/L"
      },
      {
        "group": "Monoclonal Clonal Expansion",
        "value": "> 100.0",
        "unit": "mg/L",
        "alert": "critical_high"
      }
    ],
    "significance": "Quantification of circulating unbound lambda chains. Monitored alongside kappa to calculate the Free Light Chain (FLC) ratio.",
    "significanceAr": "معايرة سلاسل لامدا الخفيفة الحرة في المصل وتستخدم مع كابا لحساب النسبة التشخيصية.",
    "tags": [
      "tumor_markers",
      "free-light-chains",
      "lambda",
      "myeloma"
    ]
  },
  {
    "id": "kappa_lambda_ratio",
    "name": "Serum Free Kappa / Lambda Light Chain Ratio",
    "nameAr": "نسبة سلاسل كابا إلى لامدا الخفيفة الحرة",
    "aliases": [
      "Kappa/Lambda Ratio",
      "FLC Ratio"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Renal Function Baseline",
        "value": "0.26 – 1.65",
        "unit": "ratio"
      },
      {
        "group": "Renal Failure Reference Range (Dialysis / ESRD)",
        "value": "0.37 – 3.10",
        "unit": "ratio",
        "note": "Altered clearance kinetics of light chains in renal impairment"
      },
      {
        "group": "Abnormal Monoclonal Kappa Excess",
        "value": "> 1.65 (or >100 in SLiM Myeloma Criteria)",
        "unit": "ratio",
        "alert": "critical_high"
      },
      {
        "group": "Abnormal Monoclonal Lambda Excess",
        "value": "< 0.26 (or <0.01 in SLiM Myeloma Criteria)",
        "unit": "ratio",
        "alert": "critical_high"
      }
    ],
    "significance": "Most sensitive blood test for detecting monoclonal light chain diseases (AL amyloidosis, light chain multiple myeloma). An involved-to-uninvolved ratio ≥100 is an official 'Myeloma Defining Event' warranting immediate chemotherapy even without organ damage.",
    "significanceAr": "أدق فحص دم لكشف أمراض السلاسل الخفيفة أحادية النسيلة. بلوغ النسبة بين السلسلة المصابة والسليمة ≥100 يعد معياراً قاطعاً للبدء الفوري بالعلاج الكيماوي للمايلوما.",
    "tags": [
      "tumor_markers",
      "flc-ratio",
      "multiple-myeloma",
      "amyloidosis"
    ]
  },
  {
    "id": "cyfra_21_1",
    "name": "CYFRA 21-1 (Cytokeratin 19 Fragments)",
    "nameAr": "شظايا السيتوكيراتين 19 (CYFRA 21-1)",
    "aliases": [
      "CYFRA 21-1",
      "Cytokeratin 19"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 3.3",
        "unit": "ng/mL"
      },
      {
        "group": "Non-Small Cell Lung Cancer (Squamous Cell Carcinoma)",
        "value": "> 5.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "High sensitivity for squamous cell lung carcinoma and muscle-invasive bladder cancer"
      }
    ],
    "significance": "Soluble fragment of cytokeratin 19. Highly sensitive tumor marker for Non-Small Cell Lung Cancer (NSCLC, especially squamous cell histotype) and advanced urothelial (bladder) carcinoma.",
    "significanceAr": "واسم ورمي لشظايا السيتوكيراتين 19. عالي الحساسية لسرطان الرئة ذو الخلايا غير الصغيرة (خاصة سرطان الخلايا الحرشفية) وسرطان المثانة البولية.",
    "tags": [
      "tumor_markers",
      "cyfra",
      "lung-cancer",
      "bladder-cancer",
      "oncology"
    ]
  },
  {
    "id": "scc_antigen",
    "name": "Squamous Cell Carcinoma Antigen (SCC Antigen)",
    "nameAr": "مستضد سرطان الخلايا الحرشفية (SCC Antigen)",
    "aliases": [
      "SCC",
      "SCC-Ag",
      "واسم سرطان الحرشفية"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 1.5",
        "unit": "ng/mL"
      },
      {
        "group": "Cervical / Head & Neck / Esophageal Squamous Cancer",
        "value": "> 2.5",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Monitors recurrence and response to radiotherapy in squamous cell cervix and head/neck cancers"
      }
    ],
    "significance": "Subfraction of tumor antigen TA-4. Tumor marker for squamous cell carcinomas of the uterine cervix, head and neck, esophagus, and anus. Correlates with tumor burden and lymph node metastasis.",
    "significanceAr": "واسم ورمي لسرطانات الخلايا الحرشفية في عنق الرحم والأنف والأذن والحنجرة والرأس والعنق والمريء؛ يراقب الاستجابة للعلاج الشعاعي.",
    "tags": [
      "tumor_markers",
      "scc",
      "cervical-cancer",
      "head-and-neck",
      "oncology"
    ]
  },
  {
    "id": "s100b_protein",
    "name": "S100B Protein (Melanoma & Neuro-Oncology)",
    "nameAr": "بروتين S100B (واسم الميلانوما وإصابات الدماغ)",
    "aliases": [
      "S100B",
      "S100 Protein"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 0.10",
        "unit": "µg/L"
      },
      {
        "group": "Malignant Melanoma Staging / Recurrence",
        "value": "> 0.15",
        "unit": "µg/L",
        "alert": "critical_high",
        "note": "Monitors metastasis and relapse in Stage III/IV cutaneous melanoma"
      },
      {
        "group": "Traumatic Brain Injury (TBI Rule-Out)",
        "value": "< 0.10 within 3h of injury",
        "unit": "µg/L",
        "note": "High negative predictive value to rule out significant intracranial hemorrhage on CT"
      }
    ],
    "significance": "Calcium-binding protein enriched in glial and Schwann cells, and melanocytes. Validated tumor marker for malignant melanoma progression and distant metastasis. In mild head trauma, an S100B <0.10 µg/L within 3 hours safely rules out intracranial hemorrhage.",
    "significanceAr": "بروتين رابط للكالسيوم يتواجد في الخلايا الدبقية والخلايا الميلانينية. واسم ورمي لانتشار ونكس الميلانوما الخبيثة، ومؤشر لنفي النزف الدماغي بعد رضوض الرأس الخفيفة.",
    "tags": [
      "tumor_markers",
      "s100b",
      "melanoma",
      "tbi",
      "neurology"
    ]
  },
  {
    "id": "pro_grp",
    "name": "Pro-Gastrin-Releasing Peptide (ProGRP)",
    "nameAr": "طليعة الببتيد المطلق للغاسترين (ProGRP)",
    "aliases": [
      "ProGRP",
      "Pro-GRP"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 65.0",
        "unit": "pg/mL"
      },
      {
        "group": "Small Cell Lung Cancer (SCLC Diagnostic)",
        "value": "> 150.0",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "High sensitivity (>80%) and specificity (>95%) for SCLC; superior to NSE in early/limited stage disease"
      }
    ],
    "significance": "Stable precursor of gastrin-releasing peptide. Superior biomarker to NSE for the differential diagnosis and monitoring of Small Cell Lung Cancer (SCLC). Unaffected by in vitro hemolysis (major advantage over NSE).",
    "significanceAr": "الطليعة المستقرة للببتيد المطلق للغاسترين. أدق واسم مخبري لسرطان الرئة ذو الخلايا الصغيرة (SCLC) ولا يتأثر بانحلال الدم المخبري.",
    "tags": [
      "tumor_markers",
      "progrp",
      "sclc",
      "lung-cancer"
    ]
  },
  {
    "id": "he4_ovarian",
    "name": "Human Epididymis Protein 4 (HE4)",
    "nameAr": "بروتين بربخ الإنسان 4 (واسم المبيض / HE4)",
    "aliases": [
      "HE4",
      "WFDC2"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Premenopausal Females",
        "value": "< 70.0",
        "unit": "pmol/L"
      },
      {
        "group": "Postmenopausal Females",
        "value": "< 140.0",
        "unit": "pmol/L"
      },
      {
        "group": "Epithelial Ovarian Cancer Suspicion",
        "value": "Above Age Cutoff",
        "unit": "pmol/L",
        "alert": "critical_high",
        "note": "Far higher specificity than CA-125 (NOT elevated in benign endometriosis or adenomyosis)"
      }
    ],
    "significance": "Secretory glycoprotein. Significantly higher specificity for epithelial ovarian cancer than CA-125 because HE4 is NOT elevated in benign endometriosis, pelvic inflammatory disease, or uterine fibroids. Combined with CA-125 in the ROMA algorithm.",
    "significanceAr": "واسم ورمي لسرطان المبيض الظهاري يتفوق على CA-125 بنوعيته العالية؛ حيث لا يرتفع في الحالات الحميدة كبطانة الرحم الهاجرة أو ألياف الرحم. يدمج في خوارزمية ROMA.",
    "tags": [
      "tumor_markers",
      "he4",
      "ovarian-cancer",
      "roma-index",
      "gynecology"
    ]
  },
  {
    "id": "roma_index",
    "name": "ROMA Index (Risk of Ovarian Malignancy Algorithm)",
    "nameAr": "خوارزمية تقييم خطورة خباثة المبيض (ROMA Index)",
    "aliases": [
      "ROMA",
      "ROMA Score"
    ],
    "category": "tumor_markers",
    "ranges": [
      {
        "group": "Premenopausal Low Risk",
        "value": "< 11.4",
        "unit": "% predictive probability"
      },
      {
        "group": "Premenopausal High Risk",
        "value": "≥ 11.4",
        "unit": "% predictive probability",
        "alert": "critical_high"
      },
      {
        "group": "Postmenopausal Low Risk",
        "value": "< 29.9",
        "unit": "% predictive probability"
      },
      {
        "group": "Postmenopausal High Risk",
        "value": "≥ 29.9",
        "unit": "% predictive probability",
        "alert": "critical_high",
        "note": "High probability of finding epithelial ovarian cancer; refer to specialized gynecologic oncologist"
      }
    ],
    "significance": "Validated algorithm incorporating serum HE4, CA-125, and menopausal status to calculate risk that a pelvic adnexal mass is malignant epithelial ovarian cancer.",
    "significanceAr": "خوارزمية معتمدة عالمياً تدمج قياس HE4 وCA-125 وحالة انقطاع الطمث لتقدير النسبة المئوية لاحتمال خباثة كتلة المبيض المكتشفة.",
    "tags": [
      "tumor_markers",
      "roma-index",
      "ovarian-cancer",
      "risk-assessment"
    ]
  },
  {
    "id": "saag_serum_ascites_albumin_gradient",
    "name": "Serum-Ascites Albumin Gradient (SAAG)",
    "nameAr": "مدروج ألبومين المصل إلى الحبن (SAAG)",
    "aliases": [
      "SAAG",
      "Serum-Ascites Albumin Gradient",
      "مدراج ألبومين الحبن"
    ],
    "category": "ascites",
    "ranges": [
      {
        "group": "High SAAG (Portal Hypertension Hallmark)",
        "value": "≥ 1.1",
        "unit": "g/dL",
        "note": "97% accuracy for Portal Hypertension (Cirrhosis, Congestive Heart Failure, Budd-Chiari, Constrictive Pericarditis, Portal Vein Thrombosis)"
      },
      {
        "group": "Low SAAG (Non-Portal Hypertension Etiology)",
        "value": "< 1.1",
        "unit": "g/dL",
        "note": "Normal portal pressure (Peritoneal Carcinomatosis, Peritoneal Tuberculosis, Nephrotic Syndrome, Pancreatic Ascites, Serositis)"
      }
    ],
    "significance": "Formula: Serum Albumin minus Ascitic Albumin (drawn simultaneously). Has 97% diagnostic accuracy in classifying ascites. SAAG ≥1.1 g/dL indicates Portal Hypertension (hydrostatic transudate). SAAG <1.1 g/dL indicates absence of portal hypertension (peritoneal inflammation, malignancy, nephrotic syndrome). Completely replaces obsolete exudate/transudate dichotomy for ascites.",
    "significanceAr": "المعادلة: (ألبومين المصل - ألبومين سائل الاستسقاء) في نفس التوقيت. دقته 97% لتصنيف الحبن. SAAG ≥1.1 يثبت فرط ضغط وريد الباب (تشمع الكبد، قصور القلب، بود كياري). بينما <1.1 يدل على سرطان الغشاء البريتوني، السل، أو المتلازمة النفروزية.",
    "tags": [
      "ascites",
      "saag",
      "cirrhosis",
      "portal-hypertension",
      "hepatology",
      "gastroenterology"
    ]
  },
  {
    "id": "ascites_absolute_neutrophil_count_anc",
    "name": "Ascitic Fluid Absolute Neutrophil Count (ANC / PMN)",
    "nameAr": "تعداد العدلات المطلق في سائل الحبن (PMN / تشخيص التهاب الصفاق الجرثومي)",
    "aliases": [
      "Ascitic PMN",
      "Ascitic ANC",
      "عدلات الحبن"
    ],
    "category": "ascites",
    "ranges": [
      {
        "group": "Uninfected Baseline",
        "value": "< 250",
        "unit": "cells/µL",
        "note": "< 0.25 x 10^9/L"
      },
      {
        "group": "Spontaneous Bacterial Peritonitis (SBP Diagnostic Hallmark)",
        "value": "≥ 250",
        "unit": "cells/µL",
        "alert": "critical_high",
        "note": "MANDATORY immediate initiation of empiric IV antibiotic therapy (e.g. Cefotaxime / Ceftriaxone) + IV Albumin to prevent hepatorenal syndrome"
      },
      {
        "group": "Secondary Bacterial Peritonitis (Perforated Viscus)",
        "value": "> 1000 – 10000",
        "unit": "cells/µL",
        "alert": "critical_high",
        "note": "Accompanied by multiple organisms on Gram stain, very low glucose (<50), and high protein (>1.0)"
      }
    ],
    "significance": "Calculated as: Total Ascitic WBC x % Neutrophils. An ascitic ANC ≥250 cells/µL is the gold standard diagnostic threshold for Spontaneous Bacterial Peritonitis (SBP), mandating immediate empiric IV antibiotic therapy (third-generation cephalosporin) and IV albumin (1.5 g/kg day 1, 1.0 g/kg day 3 to prevent hepatorenal syndrome) without waiting for culture results.",
    "significanceAr": "يحسب كـ (إجمالي خلايا الحبن البيضاء × نسبة العدلات). تعداد عدلات ≥250 خلية/ميكرولتر هو المعيار الذهبي لتشخيص التهاب الصفاق الجرثومي العفوي (SBP)؛ يستوجب البدء فوراً بالمضاد الحيوي الوريدي مع حقن الألبومين للوقاية من المتلازمة الكبدية الكلوية.",
    "tags": [
      "ascites",
      "sbp",
      "pmn",
      "spontaneous-bacterial-peritonitis",
      "cirrhosis",
      "emergency"
    ]
  },
  {
    "id": "ascites_total_protein",
    "name": "Ascitic Fluid Total Protein",
    "nameAr": "البروتين الكلي في سائل الحبن",
    "aliases": [
      "Ascitic Protein"
    ],
    "category": "ascites",
    "ranges": [
      {
        "group": "Cirrhotic Ascites Typical",
        "value": "< 2.5",
        "unit": "g/dL"
      },
      {
        "group": "High SBP Risk Threshold (<1.5 g/dL)",
        "value": "< 1.5",
        "unit": "g/dL",
        "note": "Low opsonic activity; indication for primary antibiotic prophylaxis with Norfloxacin/Ciprofloxacin in cirrhosis"
      },
      {
        "group": "Cardiac Ascites / Budd-Chiari (High SAAG + High Protein)",
        "value": "≥ 2.5",
        "unit": "g/dL",
        "note": "Hepatic sinusoidal congestion preserves protein transudation"
      }
    ],
    "significance": "In portal hypertension (high SAAG), protein <2.5 g/dL confirms cirrhosis; protein ≥2.5 g/dL indicates cardiac ascites (CHF, constrictive pericarditis) or Budd-Chiari. Cirrhotic patients with ascitic protein <1.5 g/dL have low bactericidal opsonic activity and require antibiotic prophylaxis against SBP.",
    "significanceAr": "مع ارتفاع SAAG: البروتين <2.5 يدل على تشمع الكبد؛ والبروتين ≥2.5 يوجه لمنشأ قلبي (قصور القلب). انخفاضه دون 1.5 في المتشمعين يفقده المناعة ويتطلب مضادات حيوية وقائية لمنع SBP.",
    "tags": [
      "ascites",
      "protein",
      "cirrhosis",
      "sbp-prophylaxis",
      "cardiac-ascites"
    ]
  },
  {
    "id": "ascites_glucose",
    "name": "Ascitic Fluid Glucose",
    "nameAr": "جلوكوز سائل الحبن",
    "aliases": [
      "Ascitic Glucose"
    ],
    "category": "ascites",
    "ranges": [
      {
        "group": "Normal Uninfected (Parallels Serum Glucose)",
        "value": "> 50",
        "unit": "mg/dL"
      },
      {
        "group": "Secondary Peritonitis / Gut Perforation Indicator",
        "value": "< 50",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Bacterial consumption in bowel perforation / secondary peritonitis (Runyon criteria)"
      }
    ],
    "significance": "Normally similar to serum glucose. In Secondary Peritonitis (surgical bowel perforation into ascites), glucose drops profoundly (<50 mg/dL), protein rises (>1 g/dL), and LDH exceeds serum level (Runyon's criteria).",
    "significanceAr": "يتماثل عادة مع سكر المصل. هبوطه دون 50 مجم/دل مع ارتفاع البروتين والـ LDH يشخص معايير رونيون لالتهاب الصفاق الثانوي الناتج عن انثقاب معوي جراحي.",
    "tags": [
      "ascites",
      "secondary-peritonitis",
      "glucose",
      "bowel-perforation"
    ]
  },
  {
    "id": "ascites_triglycerides_chylous",
    "name": "Ascitic Fluid Triglycerides (Chylous Ascites)",
    "nameAr": "الدهون الثلاثية في سائل الحبن (الحبن الكيلوسي)",
    "aliases": [
      "Chylous Ascites",
      "Ascitic Triglycerides"
    ],
    "category": "ascites",
    "ranges": [
      {
        "group": "Normal Clear Ascites",
        "value": "< 100",
        "unit": "mg/dL"
      },
      {
        "group": "Chylous Ascites Diagnostic Hallmark",
        "value": "> 200",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Milky fluid with high triglycerides confirms lymphatic obstruction (lymphoma, peritoneal malignancy, cirrhosis, post-surgical lymph disruption)"
      }
    ],
    "significance": "Milky, turbid peritoneal fluid with triglycerides >200 mg/dL establishes the diagnosis of Chylous Ascites (lymphatic disruption from abdominal lymphoma, neuroendocrine tumor, mycobacterial infection, or thoracic duct obstruction).",
    "significanceAr": "مظهر حليبي مع شحوم ثلاثية >200 مجم/دل يثبت تشخيص الحبن الكيلوسي اللمفي الناتج عن انسداد أو انثقاب الأوعية اللمفاوية باللمفوما أو أورام البطن.",
    "tags": [
      "ascites",
      "chylous-ascites",
      "triglycerides",
      "lymphoma"
    ]
  },
  {
    "id": "ascites_amylase",
    "name": "Ascitic Fluid Total Amylase",
    "nameAr": "الأميلاز في سائل الحبن",
    "aliases": [
      "Ascitic Amylase"
    ],
    "category": "ascites",
    "ranges": [
      {
        "group": "Normal Range",
        "value": "Similar to serum baseline (~40 - 140 U/L)",
        "unit": "U/L"
      },
      {
        "group": "Pancreatic Ascites / Pseudocyst Rupture / Bowel Perforation",
        "value": "> 1000 – 2000 (or >5x serum)",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Differentiates pancreatic ascites and gut perforation from uncomplicated liver cirrhosis"
      }
    ],
    "significance": "Values markedly elevated (>1000 U/L or >5 times serum) indicate pancreatic ascites (disruption of main pancreatic duct or leaking pseudocyst) or intestinal strangulation/perforation.",
    "significanceAr": "ارتفاعه الشديد (>1000 وحدة/لتر أو 5 أضعاف المصل) يشخص الحبن البنكرياسي الناتج عن ناسور قناة البنكرياس أو تمزق كيسة بنكرياسية كاذبة أو انثقاب الأمعاء.",
    "tags": [
      "ascites",
      "pancreatic-ascites",
      "amylase",
      "pseudocyst"
    ]
  },
  {
    "id": "peritoneal_dialysis_fluid_wbc",
    "name": "Peritoneal Dialysate Total WBC (CAPD Peritonitis)",
    "nameAr": "تعداد الخلايا البيضاء في سائل الغسيل البريتوني (CAPD)",
    "aliases": [
      "Peritoneal Dialysis WBC",
      "CAPD WBC",
      "التهاب الغسيل البريتوني"
    ],
    "category": "ascites",
    "ranges": [
      {
        "group": "Clear Effluent Baseline",
        "value": "< 100",
        "unit": "cells/µL",
        "note": "Normal clear dialysate bag"
      },
      {
        "group": "Peritoneal Dialysis Peritonitis Diagnostic Cutoff (ISPD Criteria)",
        "value": "> 100 cells/µL with > 50% Polymorphonuclear (PMN) leukocytes",
        "unit": "cells/µL",
        "alert": "critical_high",
        "note": "Cloudy dialysate bag + >100 WBC with >50% PMN confirms CAPD peritonitis; initiate intraperitoneal antibiotics"
      }
    ],
    "significance": "Cloudy dialysate effluent bag with WBC >100/µL (after ≥2-hour dwell time) with >50% PMNs confirms Peritoneal Dialysis-Associated Peritonitis (ISPD guidelines). Requires immediate instillation of intraperitoneal antibiotics.",
    "significanceAr": "كدر كيس الغسيل البريتوني مع خلايا بيضاء >100/ميكرولتر (مع >50% عدلات) يشخص رسمياً التهاب الصفاق لمرضى الغسيل البريتوني ويستلزم حقن المضادات داخل الصفاق.",
    "tags": [
      "ascites",
      "capd",
      "peritoneal-dialysis",
      "peritonitis",
      "nephrology"
    ]
  },
  {
    "id": "csf_opening_pressure",
    "name": "CSF Opening Pressure (Lumbar Puncture)",
    "nameAr": "ضغط انفتاح السائل الدماغي الشوكي (البزل القطني)",
    "aliases": [
      "Opening Pressure",
      "CSF Pressure",
      "ضغط السائل الشوكي"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Normal Adults (Lateral Decubitus)",
        "value": "100 – 200",
        "unit": "mm H2O",
        "note": "10 – 20 cm H2O"
      },
      {
        "group": "Obese Adults (BMI > 30 kg/m²)",
        "value": "Up to 250",
        "unit": "mm H2O"
      },
      {
        "group": "Children (1-18 years)",
        "value": "100 – 280",
        "unit": "mm H2O"
      },
      {
        "group": "Intracranial Hypotension (CSF Leak)",
        "value": "< 60",
        "unit": "mm H2O",
        "note": "Post-dural puncture headache, spontaneous spinal CSF leak"
      },
      {
        "group": "Idiopathic Intracranial Hypertension (IIH / Pseudotumor Cerebri)",
        "value": "> 250",
        "unit": "mm H2O",
        "alert": "critical_high",
        "note": "Diagnostic threshold for IIH; risk of permanent papilledema vision loss"
      },
      {
        "group": "Severe Intracranial Hypertension (Bacterial Meningitis / Mass)",
        "value": "> 350 – 400",
        "unit": "mm H2O",
        "alert": "critical_high",
        "note": "Risk of tentorial or tonsillar brain herniation"
      }
    ],
    "significance": "Measured via manometer with patient relaxed in lateral decubitus position with extended legs. Elevated in acute bacterial meningitis, cryptococcal meningitis, idiopathic intracranial hypertension (IIH >250 mm H2O), cerebral venous thrombosis. Low (<60 mm H2O) in CSF leak/post-LP headache.",
    "significanceAr": "يقاس بمسطرة البزل القطني والمريض مستلقٍ على جنبه باسترخاء. يرتفع في التهاب السحايا الجرثومي وفرط الضغط القحفي مجهول السبب IIH (>250). وينخفض دون 60 في تسرب السائل الدماغي وصداع ما بعد البزل.",
    "tags": [
      "csf",
      "lumbar-puncture",
      "iih",
      "opening-pressure",
      "meningitis",
      "neurology"
    ]
  },
  {
    "id": "csf_gross_appearance",
    "name": "CSF Gross Appearance & Color",
    "nameAr": "المظهر العياني ولون السائل الدماغي الشوكي",
    "aliases": [
      "CSF Appearance",
      "CSF Color"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "Crystal Clear and Colorless",
        "unit": "appearance",
        "note": "Appearance like pure water ('rock water')"
      },
      {
        "group": "Turbid / Cloudy / Purulent",
        "value": "Bacterial Meningitis",
        "unit": "appearance",
        "alert": "critical_high",
        "note": "Presence of >200-500 WBC/µL or high protein"
      },
      {
        "group": "Bloody / Reddish",
        "value": "Traumatic Tap vs Subarachnoid Hemorrhage",
        "unit": "appearance",
        "note": "Compare Tube 1 vs Tube 4 and check for xanthochromia"
      },
      {
        "group": "Xanthochromic (Pink / Yellow / Orange)",
        "value": "Subarachnoid Hemorrhage (True Intracranial Bleed)",
        "unit": "appearance",
        "alert": "critical_high",
        "note": "Supernatant color after centrifugation"
      }
    ],
    "significance": "Normal CSF is crystal clear like water. Turbidity indicates high leukocyte (>200 WBC) or bacterial count. Bloody CSF must be differentiated into traumatic tap (clears progressively from tube 1 to tube 4) versus true subarachnoid hemorrhage (uniform blood, does not clear).",
    "significanceAr": "السائل الطبيعي شفاف كالماء الرائق. تعكره يدل على غزو صديدي بكتيري. أما اللون المدمى فيستلزم التفريق بين رض الإبرة (يصفو بالأنبوب الرابع) والنزف تحت العنكبوتية الحقيقي (يبقى مدمى ومتجانساً).",
    "tags": [
      "csf",
      "appearance",
      "meningitis",
      "sah"
    ]
  },
  {
    "id": "csf_xanthochromia",
    "name": "CSF Xanthochromia (Spectrophotometry)",
    "nameAr": "الاصفرار التحللي للسائل الشوكي (Xanthochromia)",
    "aliases": [
      "Xanthochromia",
      "CSF Xanthochromia"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Normal Centrifuged Supernatant",
        "value": "Absence of net absorbance peak for oxyhemoglobin or bilirubin",
        "unit": "spectrophotometry"
      },
      {
        "group": "Subarachnoid Hemorrhage (SAH Confirmation)",
        "value": "Positive (Bilirubin peak at 450-460 nm)",
        "unit": "spectrophotometry",
        "alert": "critical_high",
        "note": "Appears 2-12 hours after aneurysm rupture (in vivo lysis of RBCs by macrophages converting heme to bilirubin); persists for 2-4 weeks"
      }
    ],
    "significance": "Yellow/orange/pink discoloration of the centrifuged CSF supernatant caused by oxyhemoglobin (415 nm) and bilirubin (450-460 nm) resulting from in vivo enzymatic breakdown of extravasated RBCs. Develops 2-12 hours post-aneurysm rupture; virtually 100% sensitive for Subarachnoid Hemorrhage when CT is negative (>6h post-ictus).",
    "significanceAr": "اصفرار طافي السائل الشوكي بعد التثفيل الناتج عن تحلل الهيم إلى بيليروبين داخل الجسم بعد نزف أمهات الدم الدماغية. يظهر بعد 6-12 ساعة ويؤكد النزف تحت العنكبوتية حتى لو كانت الطبقية المحورية سلبية.",
    "tags": [
      "csf",
      "xanthochromia",
      "sah",
      "aneurysm",
      "spectrophotometry"
    ]
  },
  {
    "id": "csf_total_nucleated_cells",
    "name": "CSF Total Nucleated Cell Count (WBC)",
    "nameAr": "تعداد الخلايا البيضاء المنواة في السائل الشوكي",
    "aliases": [
      "CSF WBC",
      "CSF Cell Count",
      "خلايا السائل الشوكي"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0 – 5",
        "unit": "cells/µL",
        "note": ">70% lymphocytes, >30% monocytes, ZERO neutrophils"
      },
      {
        "group": "Normal Neonates (0-28 days)",
        "value": "0 – 20 – 30",
        "unit": "cells/µL",
        "note": "Higher physiologic threshold in newborns"
      },
      {
        "group": "Normal Infants (1-12 months)",
        "value": "0 – 10",
        "unit": "cells/µL"
      },
      {
        "group": "Viral / Aseptic Meningitis",
        "value": "50 – 500",
        "unit": "cells/µL",
        "note": "Lymphocytic predominance (may have transient neutrophils early)"
      },
      {
        "group": "Tuberculous / Fungal Meningitis",
        "value": "100 – 500",
        "unit": "cells/µL",
        "note": "Lymphocytic predominance with very high protein and very low glucose"
      },
      {
        "group": "Acute Bacterial Meningitis (Medical Emergency)",
        "value": "1000 – >10000",
        "unit": "cells/µL",
        "alert": "critical_high",
        "note": "Marked neutrophilic pleocytosis (>80-90% PMNs); start immediate empiric IV Ceftriaxone + Vancomycin + Dexamethasone + Ampicillin (if >50yr for Listeria)"
      }
    ],
    "significance": "Marked pleocytosis (>1000-5000/µL) with >80% polymorphonuclear leukocytes is the hallmark of acute bacterial meningitis. Lymphocytic pleocytosis (50-500/µL) indicates viral meningitis (enterovirus, HSV, VZV), neurosyphilis, fungal, or autoimmune encephalitis. In traumatic tap, correct WBC: subtract 1 WBC for every 500-1000 RBCs.",
    "significanceAr": "الارتفاع الشديد (>1000-5000) مع سيادة العدلات (>80%) هو العلامة المشخصة لالتهاب السحايا الجرثومي الحاد الطارئ. بينما الارتفاع المعتدل مع سيادة اللمفاويات يوجه للفيروسي والسل والفطريات.",
    "tags": [
      "csf",
      "csf-wbc",
      "meningitis",
      "pleocytosis",
      "emergency"
    ]
  },
  {
    "id": "csf_glucose",
    "name": "CSF Glucose",
    "nameAr": "جلوكوز السائل الدماغي الشوكي",
    "aliases": [
      "CSF Glucose",
      "سكر السائل الشوكي"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Normal Adults (Drawn with Concurrent Blood Glucose)",
        "value": "45 – 80",
        "unit": "mg/dL",
        "note": "2.5 – 4.4 mmol/L"
      },
      {
        "group": "Normal CSF-to-Serum Glucose Ratio",
        "value": "0.60 – 0.67 (≥ 0.6)",
        "unit": "ratio",
        "note": "Normal CSF glucose is roughly two-thirds of simultaneous plasma glucose"
      },
      {
        "group": "Hypoglycorrhachia (Bacterial / Fungal / TB Meningitis)",
        "value": "< 40 mg/dL (or Ratio < 0.40)",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Severely depressed ratio (<0.3-0.4) strongly indicates bacterial, fungal, or tuberculous meningitis"
      },
      {
        "group": "Viral Meningitis (Normal Glycorrhachia)",
        "value": "Normal (Ratio ≥ 0.60)",
        "unit": "ratio",
        "note": "Glucose is preserved in almost all viral meningitis (except rare mumps/HSV/enterovirus cases)"
      }
    ],
    "significance": "Enters CSF via facilitated GLUT-1 transport down concentration gradient. Equilibrates over 2-4 hours. Profoundly decreased (hypoglycorrhachia, ratio <0.4) in bacterial, fungal, and mycobacterial meningitis due to impaired transporter function and high glycolytic consumption by bacteria and leukocytes. Maintained normally in viral meningitis.",
    "significanceAr": "يدخل السائل الشوكي بالنقل الميسر ويعادل ثلثي سكر الدم (0.6). هبوطه الحاد (<0.4 من سكر الدم) علامة فارقة لالتهاب السحايا الجرثومي والسل والفطريات، بينما يبقى طبيعياً في الفيروسي.",
    "tags": [
      "csf",
      "csf-glucose",
      "hypoglycorrhachia",
      "meningitis",
      "differential"
    ]
  },
  {
    "id": "csf_total_protein",
    "name": "CSF Total Protein",
    "nameAr": "البروتين الكلي في السائل الشوكي",
    "aliases": [
      "CSF Protein",
      "بروتين السائل الشوكي"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Normal Lumbar Adults (15-50 years)",
        "value": "15 – 45",
        "unit": "mg/dL",
        "note": "0.15 – 0.45 g/L"
      },
      {
        "group": "Normal Neonates (0-4 weeks)",
        "value": "40 – 150",
        "unit": "mg/dL",
        "note": "Immature blood-brain barrier permeability"
      },
      {
        "group": "Normal Elderly (>60 years)",
        "value": "15 – 60",
        "unit": "mg/dL"
      },
      {
        "group": "Viral Meningitis Mild Elevation",
        "value": "50 – 100",
        "unit": "mg/dL"
      },
      {
        "group": "Guillain-Barré Syndrome (Albuminocytological Dissociation)",
        "value": "100 – 1000 with ZERO/normal WBCs",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "High protein with normal cell count (<5-10 WBC) is pathognomonic of AIDP / Guillain-Barré"
      },
      {
        "group": "Acute Bacterial / Fungal / TB Meningitis",
        "value": "100 – >500",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Massive blood-brain barrier breakdown"
      },
      {
        "group": "Froin Syndrome (Complete Spinal Block)",
        "value": "> 1000",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Hypercoagulable xanthochromic CSF clotted spontaneously below spinal tumor block"
      }
    ],
    "significance": "Reflects blood-brain barrier integrity. Elevated in bacterial meningitis, viral encephalitis, and spinal block. Albuminocytological dissociation (strikingly elevated protein >100-500 mg/dL with normal WBC count <5-10/µL) is pathognomonic for Guillain-Barré Syndrome (GBS) and chronic inflammatory demyelinating polyneuropathy (CIDP). In traumatic tap, subtract 1 mg/dL protein for every 1000 RBCs.",
    "significanceAr": "يعكس سلامة حاجز الدماغ الدموي. الانفصال الألبوميني الخلوي (ارتفاع بروتين هائل مع خلايا بيضاء طبيعية تماماً) علامة مشخصة لمتلازمة غيلان باريه (GBS). يرتفع جداً في السحايا الجرثومية والانسداد الشوكي.",
    "tags": [
      "csf",
      "csf-protein",
      "guillain-barre",
      "meningitis",
      "neurology"
    ]
  },
  {
    "id": "csf_lactate",
    "name": "CSF Lactate",
    "nameAr": "اللاكتات في السائل الشوكي",
    "aliases": [
      "CSF Lactate",
      "لاكتات السائل الشوكي"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Normal Adults & Viral Meningitis",
        "value": "1.1 – 2.4",
        "unit": "mmol/L",
        "note": "< 35 mg/dL"
      },
      {
        "group": "Equivocal / Partially Treated",
        "value": "2.5 – 3.4",
        "unit": "mmol/L"
      },
      {
        "group": "Acute Bacterial Meningitis Diagnostic Threshold",
        "value": "≥ 3.5 – 4.0",
        "unit": "mmol/L",
        "alert": "critical_high",
        "note": ">95% sensitivity for differentiating bacterial from viral meningitis (even with prior antibiotic exposure)"
      }
    ],
    "significance": "Independent of blood lactate (does not cross blood-brain barrier easily). Produced by anaerobic glycolysis in brain tissue and granulocytes. Level ≥3.5 mmol/L rapidly and reliably differentiates acute bacterial meningitis from viral meningitis, even in patients who received pre-hospital antibiotics.",
    "significanceAr": "لا يعبر حاجز الدماغ بسهولة، وينتج عن نقص التروية والغزو البكتيري. تجاوز 3.5 ملمول/لتر يفرق بدقة بين السحايا البكتيرية والفيروسية حتى لو أخذ المريض جرعة مضاد حيوي قبل البزل.",
    "tags": [
      "csf",
      "csf-lactate",
      "bacterial-vs-viral",
      "meningitis",
      "emergency"
    ]
  },
  {
    "id": "csf_ada_adenosine_deaminase",
    "name": "CSF Adenosine Deaminase (ADA)",
    "nameAr": "أدينوزين دي أميناز في السائل الشوكي (CSF ADA)",
    "aliases": [
      "CSF ADA",
      "Adenosine Deaminase CSF"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Normal Baseline / Viral",
        "value": "< 4.0",
        "unit": "U/L"
      },
      {
        "group": "Tuberculous Meningitis Diagnostic Threshold",
        "value": "> 8.0 – 10.0",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "High sensitivity (>90%) for Tuberculous Meningitis; initiate empiric anti-TB regimen (RIPE) + dexamethasone"
      }
    ],
    "significance": "Enzyme involved in purine salvage, released by activated T-lymphocytes. Level >8-10 U/L strongly supports Tuberculous Meningitis in the appropriate clinical setting (basilar enhancement, cranial nerve palsies, low glucose).",
    "significanceAr": "أنزيم تفرزه اللمفاويات التائية المنشطة. تجاوزه 8-10 وحدات/لتر يدعم بقوة تشخيص التهاب السحايا السلي (TB Meningitis) مع إصابة الأعصاب القحفية.",
    "tags": [
      "csf",
      "csf-ada",
      "tb-meningitis",
      "tuberculosis",
      "infectious"
    ]
  },
  {
    "id": "csf_igg_index",
    "name": "CSF IgG Index",
    "nameAr": "مشعر الغلوبولين المناعي IgG في السائل الشوكي",
    "aliases": [
      "IgG Index",
      "CSF IgG Ratio"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "0.30 – 0.70",
        "unit": "ratio"
      },
      {
        "group": "Intrathecal IgG Synthesis (Multiple Sclerosis)",
        "value": "> 0.70 – 0.80",
        "unit": "ratio",
        "alert": "critical_high",
        "note": "Formula: (CSF IgG / Serum IgG) / (CSF Albumin / Serum Albumin); confirms local intrathecal antibody production"
      }
    ],
    "significance": "Formula: (CSF IgG / Serum IgG) / (CSF Albumin / Serum Albumin). Controls for blood-brain barrier permeability. Value >0.70-0.80 proves intrathecal (CNS-compartmentalized) immunoglobulin synthesis. Elevated in >85-90% of Multiple Sclerosis (MS) patients, neurosyphilis, and autoimmune encephalitis.",
    "significanceAr": "المعادلة: (IgG الشوكي ÷ IgG المصلي) ÷ (ألبومين الشوكي ÷ ألبومين المصلي). يثبت تصنيع الأجسام المضادة الموضعي داخل الجهاز العصبي في التصلب اللويحي المتعدد (MS) بنسبة >85%.",
    "tags": [
      "csf",
      "igg-index",
      "multiple-sclerosis",
      "neuroimmunology"
    ]
  },
  {
    "id": "csf_oligoclonal_bands_ocb",
    "name": "CSF Oligoclonal Bands (OCBs by Isoelectric Focusing)",
    "nameAr": "الحزم قليلة النسيلة في السائل الشوكي (OCB)",
    "aliases": [
      "OCB",
      "Oligoclonal Bands",
      "حزم التصلب اللويحي"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Pattern 1 (Normal)",
        "value": "Zero bands in CSF and Serum",
        "unit": "banding"
      },
      {
        "group": "Pattern 2 (Positive for Multiple Sclerosis - McDonald Criteria)",
        "value": "≥ 2 Unique Bands in CSF (ABSENT in paired serum)",
        "unit": "banding",
        "alert": "critical_high",
        "note": "Diagnostic hallmark of Multiple Sclerosis; satisfies 'dissemination in time' in revised McDonald criteria"
      },
      {
        "group": "Pattern 3 (Systemic Gammopathy)",
        "value": "Identical bands present in both CSF and Serum",
        "unit": "banding",
        "note": "Passive leakage of systemic antibodies across blood-brain barrier (NOT intrathecal MS)"
      }
    ],
    "significance": "Isoelectric focusing (IEF) on agarose gel paired simultaneously with serum. Presence of ≥2 unique bands found ONLY in CSF (Pattern 2) satisfies the revised McDonald diagnostic criteria for 'dissemination in time' in suspected Multiple Sclerosis (positive in >95% of MS patients).",
    "significanceAr": "الرحلان بالتركيز متساوي الكهربائية متزامناً مع المصل. ظهور حزمتين أو أكثر في السائل الشوكي مع غيابها في المصل (النمط 2) هو المعيار المشخص لمرض التصلب اللويحي المتعدد (MS).",
    "tags": [
      "csf",
      "ocb",
      "oligoclonal-bands",
      "multiple-sclerosis",
      "mcdonald-criteria"
    ]
  },
  {
    "id": "csf_vdrl",
    "name": "CSF VDRL (Neurosyphilis)",
    "nameAr": "فحص VDRL في السائل الشوكي (الزهري العصبي)",
    "aliases": [
      "CSF VDRL",
      "Neurosyphilis Screen"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Non-Reactive (Normal)",
        "value": "Non-Reactive",
        "unit": "qualitative"
      },
      {
        "group": "Reactive (Definitive Neurosyphilis Diagnostic)",
        "value": "Reactive (Any Titer)",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Near 100% specificity for active Neurosyphilis (though sensitivity is only ~50-70%; negative does NOT rule out)"
      }
    ],
    "significance": "The ONLY standard serological test approved by CDC for direct diagnostic confirmation of Neurosyphilis in CSF. Specificity is nearly 100% (a reactive result is definitive). However, sensitivity is only 50-70% (a negative result does NOT rule out neurosyphilis).",
    "significanceAr": "الفحص المعتمد الوحيد لتشخيص الزهري العصبي في السائل الشوكي. نوعيته 100% (إيجابيته قاطعة للتشخيص) وحساسيته 50-70% (سلبيته لا تنفي الزهري العصبي).",
    "tags": [
      "csf",
      "vdrl",
      "neurosyphilis",
      "syphilis",
      "infectious"
    ]
  },
  {
    "id": "csf_crag_cryptococcal_antigen",
    "name": "CSF Cryptococcal Antigen (CrAg Lateral Flow)",
    "nameAr": "مستضد المكورات الخبيثة في السائل الشوكي (CrAg)",
    "aliases": [
      "CSF CrAg",
      "Cryptococcal Antigen"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative",
        "unit": "qualitative"
      },
      {
        "group": "Cryptococcal Meningitis Diagnostic (HIV / Immunocompromised)",
        "value": "Positive (Titer ≥ 1:10)",
        "unit": "titer",
        "alert": "critical_high",
        "note": ">98% sensitivity and specificity; start IV Amphotericin B + Flucytosine, and manage elevated ICP with therapeutic taps"
      }
    ],
    "significance": "Lateral flow immunoassay detecting glucuronoxylomannan capsular antigen of Cryptococcus neoformans/gattii. Sensitivity and specificity exceed 98-99%. Essential diagnostic test in immunocompromised (HIV/AIDS with CD4 <100) presenting with subacute headache and fever.",
    "significanceAr": "فحص مناعي سريع يكشف مستضد محفظة فطر الكريبتوكوكوس. حساسيته تفوق 98%؛ جوهري لمرضى نقص المناعة والإيدز الذين يعانون من صداع مزمن، ويعالج بالأمفوتريسين ب.",
    "tags": [
      "csf",
      "crag",
      "cryptococcus",
      "hiv",
      "opportunistic-infection"
    ]
  },
  {
    "id": "csf_india_ink",
    "name": "CSF India Ink Wet Mount",
    "nameAr": "صبغة الحبر الهندي في السائل الشوكي (India Ink)",
    "aliases": [
      "India Ink",
      "CSF India Ink"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative",
        "unit": "qualitative"
      },
      {
        "group": "Positive for Cryptococcus neoformans",
        "value": "Positive (Encapsulated budding yeast with clear halo)",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Shows clear negative capsule halo against dark background (~70-80% sensitivity in HIV)"
      }
    ],
    "significance": "Negative staining technique: colloidal carbon particles cannot penetrate the thick mucopolysaccharide capsule of Cryptococcus neoformans, highlighting budding yeast cells surrounded by a distinct clear halo. Rapid bedside test (~75% sensitivity in advanced AIDS).",
    "significanceAr": "صبغة تباين سلبية لا تخترق المحفظة السميكة لفطر الكريبتوكوكوس فتظهر الخلايا المتبرعمة محاطة بهالة بيضاء مضيئة وسط خلفية سوداء.",
    "tags": [
      "csf",
      "india-ink",
      "cryptococcus",
      "fungal"
    ]
  },
  {
    "id": "csf_gram_stain",
    "name": "CSF Gram Stain",
    "nameAr": "صبغة غرام في السائل الشوكي",
    "aliases": [
      "CSF Gram Stain",
      "Gram Stain CSF"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "No Organisms Seen",
        "unit": "qualitative"
      },
      {
        "group": "Gram-Positive Diplococci",
        "value": "Streptococcus pneumoniae (Pneumococcus)",
        "unit": "morphology",
        "alert": "critical_high",
        "note": "Most common cause of bacterial meningitis in adults"
      },
      {
        "group": "Gram-Negative Diplococci",
        "value": "Neisseria meningitidis (Meningococcus)",
        "unit": "morphology",
        "alert": "critical_high",
        "note": "Public health emergency; droplet isolation, post-exposure chemoprophylaxis (Rifampin/Ceftriaxone)"
      },
      {
        "group": "Gram-Positive Bacilli",
        "value": "Listeria monocytogenes",
        "unit": "morphology",
        "alert": "critical_high",
        "note": "Seen in neonates, elderly >50yr, immunocompromised; add IV Ampicillin"
      }
    ],
    "significance": "Rapid emergency microscopic evaluation providing immediate pathogen identification within 30 minutes of lumbar puncture. Directs targeted empiric antibiotic therapy before culture results return.",
    "significanceAr": "فحص مجهري إسعافي عاجل يعطي التشخيص الجرثومي الأولي خلال 30 دقيقة من البزل لتحديد المضاد الحيوي المنقذ للحياة قبل ظهور نتائج المزرعة.",
    "tags": [
      "csf",
      "gram-stain",
      "meningitis",
      "pneumococcus",
      "meningococcus",
      "emergency"
    ]
  },
  {
    "id": "csf_protein_14_3_3",
    "name": "CSF 14-3-3 Protein (Prion Disease Workup)",
    "nameAr": "بروتين 14-3-3 في السائل الشوكي (مرض كروتزفيلد-جاكوب)",
    "aliases": [
      "14-3-3 Protein",
      "CJD Protein"
    ],
    "category": "csf",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative",
        "unit": "qualitative"
      },
      {
        "group": "Positive (Rapid Neurodegenerative / Prion Disease)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Surrogate marker for massive rapid neuronal destruction; supportive criterion for Sporadic Creutzfeldt-Jakob Disease (sCJD)"
      }
    ],
    "significance": "Intracellular chaperone protein released into CSF following massive, rapid neuronal necrosis. Part of CDC/WHO diagnostic criteria for sporadic Creutzfeldt-Jakob Disease (sCJD). Largely supplemented today by the RT-QuIC (Real-Time Quaking-Induced Conversion) assay.",
    "significanceAr": "يتحرر في السائل الشوكي إثر التخرب العصبي الهائل السريع. فحص داعم لتشخيص مرض كروتزفيلد-جاكوب البريوني الإسفنجي (جنون البقر البشري / sCJD).",
    "tags": [
      "csf",
      "14-3-3",
      "cjd",
      "prion",
      "dementia",
      "neurology"
    ]
  },
  {
    "id": "crp_routine_conventional",
    "name": "C-Reactive Protein (CRP Routine)",
    "nameAr": "بروتين سي التفاعلي الروتيني (CRP)",
    "aliases": [
      "CRP",
      "C-Reactive Protein",
      "سي آر بي",
      "بروتين الالتهاب"
    ],
    "category": "inflammatory",
    "ranges": [
      {
        "group": "Normal Baseline (Healthy Adults)",
        "value": "< 5.0",
        "unit": "mg/L",
        "note": "< 0.5 mg/dL"
      },
      {
        "group": "Mild Systemic Inflammation",
        "value": "5.0 – 10.0",
        "unit": "mg/L",
        "note": "Gingivitis, vigorous exercise, mild viral infections, smoking, obesity"
      },
      {
        "group": "Moderate Inflammation",
        "value": "10.0 – 50.0",
        "unit": "mg/L",
        "note": "Acute myocardial infarction, major surgery, deep vein thrombosis, rheumatoid arthritis flare"
      },
      {
        "group": "Marked Bacterial Infection / Sepsis",
        "value": "50.0 – 200.0",
        "unit": "mg/L",
        "alert": "critical_high",
        "note": "Severe bacterial pneumonia, pyelonephritis, peritonitis, severe systemic vasculitis"
      },
      {
        "group": "Severe Hyperinflammatory Emergency",
        "value": "> 200.0",
        "unit": "mg/L",
        "alert": "critical_high",
        "note": "Severe bacterial sepsis, toxic shock syndrome, burns, acute pancreatitis, cytokine storm"
      }
    ],
    "significance": "Pentraxin acute-phase protein synthesized by hepatocytes in direct response to Interleukin-6 (IL-6). Rises rapidly within 4-6 hours of inflammatory trigger, peaks at 36-48 hours, and has a short half-life (~19 hours). Ideal for monitoring treatment response to antibiotics or immunosuppressants.",
    "significanceAr": "بروتين طور حاد كبدي ينشطه إنترلوكين-6. يرتفع سريعاً خلال 4-6 ساعات من بدء العدوى ويبلغ ذروته في 48 ساعة، ونصف عمره قصير (19 ساعة) مما يجعله الفحص الأمثل لمراقبة نجاح المضادات الحيوية.",
    "tags": [
      "inflammatory",
      "crp",
      "infection",
      "sepsis",
      "acute-phase"
    ]
  },
  {
    "id": "esr_erythrocyte_sedimentation_rate",
    "name": "Erythrocyte Sedimentation Rate (ESR Westergren)",
    "nameAr": "سرعة ترسب كريات الدم الحمراء (ESR / سرعة التثفل)",
    "aliases": [
      "ESR",
      "Sed Rate",
      "Westergren ESR",
      "سرعة الترسيب",
      "سرعة التثفل"
    ],
    "category": "inflammatory",
    "ranges": [
      {
        "group": "Adult Males (<50 years)",
        "value": "0 – 15",
        "unit": "mm/h",
        "note": "Westergren method"
      },
      {
        "group": "Adult Males (≥50 years)",
        "value": "0 – 20",
        "unit": "mm/h"
      },
      {
        "group": "Adult Females (<50 years)",
        "value": "0 – 20",
        "unit": "mm/h"
      },
      {
        "group": "Adult Females (≥50 years)",
        "value": "0 – 30",
        "unit": "mm/h"
      },
      {
        "group": "Miller Formula Upper Limit for Age",
        "value": "Men: Age/2 | Women: (Age+10)/2",
        "unit": "mm/h"
      },
      {
        "group": "Pregnancy (3rd Trimester Normal)",
        "value": "30 – 70",
        "unit": "mm/h",
        "note": "Falsely elevated by physiologic hyperfibrinogenemia"
      },
      {
        "group": "Extreme Elevation (>100 mm/h Alert)",
        "value": "> 100",
        "unit": "mm/h",
        "alert": "critical_high",
        "note": "High specificity for: Giant Cell (Temporal) Arteritis, Polymyalgia Rheumatica, Multiple Myeloma, Osteomyelitis, severe occult malignancy, or endocarditis"
      }
    ],
    "significance": "Measures distance erythrocytes fall in vertical tube over 1 hour. Driven by asymmetrical proteins (fibrinogen, immunoglobulins) neutralizing negative zeta potential on RBCs, facilitating rouleaux formation. Slow to rise (days) and slow to resolve (weeks). Values >100 mm/h strongly suggest Giant Cell Arteritis, Polymyalgia Rheumatica, Multiple Myeloma, or osteomyelitis.",
    "significanceAr": "مقياس لسرعة ترسب الكريات في ساعة. يرتفع بزيادة الفيبرينوجين والغلوبيولينات (تشكل النضائد الروكسية). يرتفع ببطء ويتراجع ببطء خلال أسابيع. تجاوزه 100 مم/ساعة علامة فارقة لالتهاب الشريان الصدغي (الخلايا العرطلة)، المايلوما، أو التهاب العظم والنقي.",
    "tags": [
      "inflammatory",
      "esr",
      "temporal-arteritis",
      "myeloma",
      "rheumatology"
    ]
  },
  {
    "id": "serum_amyloid_a_saa",
    "name": "Serum Amyloid A (SAA)",
    "nameAr": "أميلويد المصل أ (SAA)",
    "aliases": [
      "SAA",
      "Serum Amyloid A"
    ],
    "category": "inflammatory",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 6.4",
        "unit": "mg/L"
      },
      {
        "group": "Acute Inflammatory Surge",
        "value": "100.0 – >1000.0",
        "unit": "mg/L",
        "alert": "critical_high",
        "note": "Rises up to 1000-fold in acute inflammation; sustained high levels drive secondary AA amyloidosis in FMF / rheumatoid arthritis"
      }
    ],
    "significance": "Apolipoprotein synthesized by liver in response to IL-1, TNF-alpha, and IL-6. Rises faster and to higher magnitudes than CRP. Sustained chronic elevation in untreated autoinflammatory conditions (Familial Mediterranean Fever FMF) leads to insoluble fibril cleavage and secondary systemic AA amyloidosis (renal failure).",
    "significanceAr": "بروتين طور حاد كبدي يرتفع حتى 1000 ضعف. استمرار ارتفاعه المزمن في حمى البحر الأبيض المتوسط العائلية غير المعالجة يؤدي لترسبه على شكل داء نشواني جهازي ثانوي (AA Amyloidosis) وفشل كلوي.",
    "tags": [
      "inflammatory",
      "saa",
      "fmf",
      "amyloidosis",
      "autoinflammatory"
    ]
  },
  {
    "id": "procalcitonin_pct_sepsis",
    "name": "Procalcitonin (PCT Sepsis Biomarker)",
    "nameAr": "البروكالسيتونين (واسم الإنتان والبكتيريا / PCT)",
    "aliases": [
      "PCT",
      "Procalcitonin",
      "بروكالسيتونين"
    ],
    "category": "inflammatory",
    "ranges": [
      {
        "group": "Normal Healthy Baseline",
        "value": "< 0.05",
        "unit": "ng/mL",
        "note": "< 0.05 µg/L"
      },
      {
        "group": "Bacterial Infection Unlikely (Antibiotics Discouraged)",
        "value": "< 0.10 – 0.25",
        "unit": "ng/mL",
        "note": "High negative predictive value for invasive bacterial infection; safe to withhold or stop antibiotics"
      },
      {
        "group": "Possible Localized Bacterial Infection",
        "value": "0.25 – 0.50",
        "unit": "ng/mL",
        "note": "Antibiotics may be considered if clinically indicated; recheck in 24h"
      },
      {
        "group": "Probable Bacterial Sepsis (Antibiotics Strongly Indicated)",
        "value": "0.50 – 2.00",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "High likelihood of systemic bacterial infection; start empiric antibiotic therapy"
      },
      {
        "group": "Severe Sepsis / High Sepsis-Induced Shock Risk",
        "value": "2.00 – 10.00",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "High organ dysfunction risk"
      },
      {
        "group": "Severe Septic Shock / Multi-Organ Failure",
        "value": "> 10.00",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "High associated mortality; monitor daily to guide de-escalation (>80% drop from peak indicates antibiotic success)"
      }
    ],
    "significance": "Precursor of calcitonin. In health, produced solely by thyroid C-cells with negligible blood levels. In invasive bacterial infections, bacterial endotoxins and inflammatory cytokines induce massive ubiquitous extrathyroidal PCT expression across all parenchymal tissues. VIRAL infections stimulate Interferon-gamma which directly BLOCKS PCT production. Gold standard for antibiotic stewardship in sepsis and lower respiratory tract infections.",
    "significanceAr": "طليعة الكالسيتونين. في الإنتان البكتيري يفرز من كافة خلايا الجسم تحت تأثير الذيفان الداخلي. وتثبط العدوى الفيروسية إنتاجه بواسطة إنترفيرون-غاما. المعيار الذهبي لتوجيه إيقاف أو بدء المضادات الحيوية في الإنتان والرئة.",
    "tags": [
      "inflammatory",
      "procalcitonin",
      "pct",
      "sepsis",
      "antibiotic-stewardship",
      "icu"
    ]
  },
  {
    "id": "interleukin_6_serum",
    "name": "Interleukin-6 (IL-6 Serum)",
    "nameAr": "إنترلوكين-6 في المصل (IL-6)",
    "aliases": [
      "IL-6",
      "Interleukin 6"
    ],
    "category": "inflammatory",
    "ranges": [
      {
        "group": "Normal Healthy Adults",
        "value": "< 5.0",
        "unit": "pg/mL"
      },
      {
        "group": "Systemic Inflammation / Sepsis",
        "value": "10.0 – 100.0",
        "unit": "pg/mL"
      },
      {
        "group": "Cytokine Release Syndrome (CRS) / COVID-19 Storm",
        "value": "> 100.0 – 1000.0",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Indication for IL-6 receptor antagonists (Tocilizumab / Sarilumab)"
      }
    ],
    "significance": "Pro-inflammatory pleiotropic cytokine. Primary stimulus for hepatic acute-phase reactant synthesis (CRP, fibrinogen). Massive elevations seen in Cytokine Release Syndrome (CAR-T therapy, severe COVID-19 hyperinflammation) responding to Tocilizumab.",
    "significanceAr": "سيتوكين رئيسي محفز للالتهاب ولتخليق بروتينات الطور الحاد في الكبد. يرتفع بجنون في عاصفة السيتوكينات (علاج خلايا CAR-T، وكوفيد الشديد) ويعالج بمضاد مستقبله (توسيليزوماب).",
    "tags": [
      "inflammatory",
      "il-6",
      "cytokine-storm",
      "sepsis",
      "tocilizumab"
    ]
  },
  {
    "id": "serum_calprotectin_systemic",
    "name": "Serum Calprotectin",
    "nameAr": "الكالبروتكتين في المصل (الالتهاب الجهازي)",
    "aliases": [
      "Serum Calprotectin",
      "S100A8/A9"
    ],
    "category": "inflammatory",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 1.0",
        "unit": "µg/mL"
      },
      {
        "group": "Active Neutrophilic Systemic Inflammation (Still's / Sepsis)",
        "value": "> 3.0",
        "unit": "µg/mL",
        "note": "Reflects acute neutrophil activation and degranulation"
      }
    ],
    "significance": "Heterodimer of S100A8/S100A9 released from neutrophil cytoplasm during activation. Serum marker for Adult-Onset Still Disease, juvenile idiopathic arthritis, and severe sepsis.",
    "significanceAr": "يتحرر من سيتوبلازم العدلات المنشطة. واسم مصلي هام لداء ستيل عند البالغين والتهاب المفاصل الشبابي مجهول السبب والإنتان.",
    "tags": [
      "inflammatory",
      "calprotectin",
      "stills-disease",
      "neutrophils"
    ]
  },
  {
    "id": "ferritin_hyperferritinemia_hlh",
    "name": "Serum Ferritin (Hyperferritinemia / HLH Protocol)",
    "nameAr": "الفيريتين لتقييم متلازمة تنشيط البالعات (HLH)",
    "aliases": [
      "Ferritin HLH",
      "Extreme Ferritin"
    ],
    "category": "inflammatory",
    "ranges": [
      {
        "group": "Standard Inflammatory Elevation",
        "value": "400 – 1000",
        "unit": "ng/mL"
      },
      {
        "group": "HLH-2004 Diagnostic Criterion Cutoff",
        "value": "≥ 500",
        "unit": "ng/mL",
        "note": "One of the 8 official HLH criteria"
      },
      {
        "group": "High Specificity for Hemophagocytic Lymphohistiocytosis (HLH / MAS)",
        "value": "> 10000",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": ">10,000 ng/mL has >90% sensitivity and 96% specificity for HLH/MAS; urgent oncology/rheumatology emergency"
      }
    ],
    "significance": "Extreme hyperferritinemia (>10,000 ng/mL) is an oncologic/rheumatologic emergency indicative of Hemophagocytic Lymphohistiocytosis (HLH) or Macrophage Activation Syndrome (MAS), characterized by uncontrolled cytotoxic T-cell and macrophage hyperactivation, hemophagocytosis, pancytopenia, coagulopathy, and high mortality.",
    "significanceAr": "ارتفاع الفيريتين الشديد فوق 10 آلاف نانوغرام حالة طوارئ تشخص متلازمة داء البالعات (HLH / MAS). تتميز بفرط تنشيط البالعات العنيف، وهبوط خلايا الدم الشامل، وتخثر منتشر، ونسبة وفيات عالية.",
    "tags": [
      "inflammatory",
      "ferritin",
      "hlh",
      "macrophage-activation",
      "emergency"
    ]
  },
  {
    "id": "pleural_appearance",
    "name": "Pleural Fluid Gross Appearance",
    "nameAr": "المظهر العياني لسائل الجنب",
    "aliases": [
      "Pleural Appearance",
      "مظهر سائل الجنب"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Normal Transudative",
        "value": "Clear Straw-Yellow / Serous",
        "unit": "appearance",
        "note": "CHF, cirrhosis, nephrotic syndrome"
      },
      {
        "group": "Turbid / Purulent / Opaque",
        "value": "Empyema / Parapneumonic Exudate",
        "unit": "appearance",
        "alert": "critical_high",
        "note": "Frank pus indicates Empyema; requires urgent chest tube thoracostomy drainage"
      },
      {
        "group": "Milky White (Chylothorax vs Pseudochylothorax)",
        "value": "Milky Opalescent",
        "unit": "appearance",
        "note": "Centrifuge: if supernatant clears = empyema debris; if remains milky = chylothorax / high triglycerides"
      },
      {
        "group": "Frankly Bloody (Hemothorax Suspicion)",
        "value": "Sanguineous / Red",
        "unit": "appearance",
        "alert": "critical_high",
        "note": "Check Pleural-to-Blood Hematocrit ratio"
      }
    ],
    "significance": "Initial inspection upon thoracentesis. Frank pus confirms empyema. Milky fluid requires centrifugation to differentiate empyema from chylothorax.",
    "significanceAr": "المعاينة البصرية الأولى لسائل بزل الصدر. القيح الصريح يثبت الدبيلة الصدرية (Empyema) ويستدعي تفريغاً فورياً بأنبوب الصدر. المظهر الحليبي يوجه للكيلوثوراكس.",
    "tags": [
      "pleural",
      "thoracentesis",
      "empyema",
      "chylothorax",
      "pulmonology"
    ]
  },
  {
    "id": "pleural_total_protein",
    "name": "Pleural Fluid Total Protein",
    "nameAr": "البروتين الكلي في سائل الجنب",
    "aliases": [
      "Pleural Protein"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Transudate Baseline",
        "value": "< 3.0",
        "unit": "g/dL",
        "note": "Typically <3.0 g/dL (30 g/L)"
      },
      {
        "group": "Exudate Baseline",
        "value": "≥ 3.0",
        "unit": "g/dL",
        "note": "Infection, malignancy, pulmonary embolism, connective tissue disease"
      }
    ],
    "significance": "Primary component of Light's criteria. Absolute value ≥3.0 g/dL suggests exudate, but ratio to serum protein is superior.",
    "significanceAr": "المعيار الأساسي في معايير لايت (Light's criteria). القيمة ≥3 جم/دل توجه نحو الارتشاح الالتهابي (Exudate).",
    "tags": [
      "pleural",
      "lights-criteria",
      "protein"
    ]
  },
  {
    "id": "pleural_serum_protein_ratio",
    "name": "Pleural Fluid / Serum Protein Ratio (Light's Criteria)",
    "nameAr": "نسبة بروتين سائل الجنب إلى بروتين المصل (معايير لايت)",
    "aliases": [
      "Pleural/Serum Protein",
      "Light's Protein Ratio"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Transudate (Light's Criteria)",
        "value": "≤ 0.50",
        "unit": "ratio",
        "note": "Due to hydrostatic or oncotic pressure imbalances (CHF, cirrhosis, nephrosis)"
      },
      {
        "group": "Exudate (Light's Criteria)",
        "value": "> 0.50",
        "unit": "ratio",
        "alert": "critical_high",
        "note": "Local capillary permeability alteration (pneumonia, cancer, TB, PE)"
      }
    ],
    "significance": "First rule of Light's Criteria. A ratio >0.50 classifies the effusion as an EXUDATE with ~98% sensitivity. If patient was on active diuresis and clinical picture is CHF, check serum-pleural albumin gradient (>1.2 g/dL indicates false exudate / true transudate).",
    "significanceAr": "القاعدة الأولى لمعايير لايت. نسبة تفوق 0.50 تصنف الانصباب كانصباب ارتشاحي (Exudate) بدقة 98% ناتج عن التهاب أو خباثة. في مرضى قصور القلب الخاضعين للمدرات قد تعطي إيجابية كاذبة.",
    "tags": [
      "pleural",
      "lights-criteria",
      "exudate",
      "transudate",
      "chf"
    ]
  },
  {
    "id": "pleural_ldh",
    "name": "Pleural Fluid Lactate Dehydrogenase (LDH)",
    "nameAr": "نازعة هيدروجين اللاكتات في سائل الجنب (LDH)",
    "aliases": [
      "Pleural LDH"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Transudate Baseline",
        "value": "< 200 (or < 2/3 ULN of serum)",
        "unit": "U/L"
      },
      {
        "group": "Exudate (Light's Criteria 2nd Rule)",
        "value": "> 2/3 the Upper Limit of Normal Serum LDH",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Typically >200 U/L on standard assays confirms an exudate"
      },
      {
        "group": "Complicated Parapneumonic / Empyema",
        "value": "> 1000",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Severe neutrophilic lysis; indicates chest tube drainage"
      }
    ],
    "significance": "Released from inflammatory cells and pleura. Meeting the criterion of Pleural LDH > 2/3 upper limit of normal serum LDH classifies the effusion as an exudate. Values >1000 U/L indicate complicated parapneumonic effusion or empyema.",
    "significanceAr": "القاعدة الثانية لمعايير لايت. تجاوزه ثلثي الحد الأعلى لـ LDH المصلي يثبت أنه نضحة (Exudate). وتجاوزه 1000 وحدة يدل على انصباب قيحي مترافق مع ذات الرئة يتطلب تفريغاً بالأنبوب الصدري.",
    "tags": [
      "pleural",
      "lights-criteria",
      "ldh",
      "empyema"
    ]
  },
  {
    "id": "pleural_serum_ldh_ratio",
    "name": "Pleural Fluid / Serum LDH Ratio (Light's Criteria)",
    "nameAr": "نسبة LDH سائل الجنب إلى المصل (معايير لايت)",
    "aliases": [
      "Pleural/Serum LDH"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Transudate",
        "value": "≤ 0.60",
        "unit": "ratio"
      },
      {
        "group": "Exudate (Light's Criteria 3rd Rule)",
        "value": "> 0.60",
        "unit": "ratio",
        "alert": "critical_high",
        "note": "Meeting ANY ONE of the 3 Light's criteria classifies effusion as Exudate"
      }
    ],
    "significance": "Third rule of Light's Criteria. Ratio >0.60 confirms exudative pleural effusion.",
    "significanceAr": "القاعدة الثالثة لمعايير لايت. نسبة >0.60 تثبت أن السائل نضحي ناتج عن آفة التهابية أو ورمية موضعية.",
    "tags": [
      "pleural",
      "lights-criteria",
      "ldh-ratio"
    ]
  },
  {
    "id": "pleural_ph",
    "name": "Pleural Fluid pH (Blood Gas Analyzer)",
    "nameAr": "درجة حموضة سائل الجنب (pH)",
    "aliases": [
      "Pleural pH",
      "حموضة سائل الجنب"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Normal Transudate",
        "value": "7.40 – 7.60",
        "unit": "pH units"
      },
      {
        "group": "Uncomplicated Parapneumonic Effusion",
        "value": "≥ 7.20",
        "unit": "pH units",
        "note": "Can typically be managed with systemic antibiotics alone without tube thoracostomy"
      },
      {
        "group": "Complicated Parapneumonic Effusion / Drainage Required",
        "value": "< 7.20",
        "unit": "pH units",
        "alert": "critical_low",
        "note": "MANDATORY indication for immediate chest tube drainage (tube thoracostomy) to prevent loculation / fibrothorax"
      },
      {
        "group": "Severe Empyema / Esophageal Rupture",
        "value": "< 7.00 – 6.00",
        "unit": "pH units",
        "alert": "critical_low",
        "note": "Frank pus, Boerhaave syndrome"
      }
    ],
    "significance": "Must be collected anaerobically in a heparinized blood gas syringe on ice and run on a blood gas analyzer (NOT pH strip). In a parapneumonic effusion, pH <7.20 is the single most important indication for immediate chest tube drainage.",
    "significanceAr": "يجب سحبه في محقنة غازات الدم المهبّونة على الثلج. في الانصباب المرافق لذات الرئة، يعتبر هبوط pH دون 7.20 المؤشر الإلزامي الحاسم لتركيب أنبوب تفريغ الصدر لمنع تشكل التليف والتكيس.",
    "tags": [
      "pleural",
      "pleural-ph",
      "thoracostomy",
      "parapneumonic",
      "empyema",
      "pulmonology"
    ]
  },
  {
    "id": "pleural_glucose",
    "name": "Pleural Fluid Glucose",
    "nameAr": "جلوكوز سائل الجنب",
    "aliases": [
      "Pleural Glucose"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Normal / Transudative (Parallels Serum Glucose)",
        "value": "> 60",
        "unit": "mg/dL"
      },
      {
        "group": "Low Glucose (<60 mg/dL)",
        "value": "< 60",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Differential: Complicated parapneumonic, empyema, malignant effusion, tuberculosis, Rheumatoid pleurisy, Lupus pleuritis"
      },
      {
        "group": "Rheumatoid Arthritis Pleurisy Classic Finding",
        "value": "< 30 (Often near ZERO: <10)",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Profoundly low glucose is pathognomonic of rheumatoid pleurisy"
      }
    ],
    "significance": "Low glucose (<60 mg/dL) indicates high metabolic consumption by bacteria, leukocytes, or malignant cells, or blocked transport. Strikingly low glucose (<10-30 mg/dL) is characteristic of Rheumatoid pleuritis.",
    "significanceAr": "هبوط الجلوكوز (<60) يدل على استهلاك استقلابي شَرِه من قبل البكتيريا أو الخلايا السرطانية. هبوطه الشديد إلى ما يقارب الصفر (<10-30) علامة مميزة لالتهاب الجنب الرثياني.",
    "tags": [
      "pleural",
      "pleural-glucose",
      "rheumatoid-pleurisy",
      "empyema"
    ]
  },
  {
    "id": "pleural_triglycerides_chylothorax",
    "name": "Pleural Fluid Triglycerides (Chylothorax Diagnosis)",
    "nameAr": "الدهون الثلاثية في سائل الجنب (تشخيص الكيلوثوراكس)",
    "aliases": [
      "Pleural Triglycerides",
      "Chylothorax"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 50",
        "unit": "mg/dL"
      },
      {
        "group": "Equivocal / Indeterminate Zone",
        "value": "50 – 110",
        "unit": "mg/dL",
        "note": "Perform lipoprotein electrophoresis for chylomicrons to confirm"
      },
      {
        "group": "Chylothorax Diagnostic Cutoff",
        "value": "> 110",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Confirms true Chylothorax (thoracic duct disruption by lymphoma, trauma, or cardiothoracic surgery)"
      }
    ],
    "significance": "Triglycerides >110 mg/dL establishes the definitive diagnosis of Chylothorax (leakage of chyle from thoracic duct disruption due to lymphoma, trauma, or thoracic surgery). If 50-110 mg/dL, detection of chylomicrons on lipoprotein electrophoresis is diagnostic.",
    "significanceAr": "تجاوز الدهون الثلاثية لـ 110 مجم/دل يثبت تشخيص انصباب الكيلوثوراكس اللمفي الناتج عن تمزق القناة الصدرية اللمفاوية بسبب اللمفوما أو رضوض وجراحات الصدر.",
    "tags": [
      "pleural",
      "chylothorax",
      "triglycerides",
      "thoracic-duct",
      "lymphoma"
    ]
  },
  {
    "id": "pleural_hematocrit_hemothorax",
    "name": "Pleural Fluid Hematocrit (Hemothorax Rule)",
    "nameAr": "هيماتوكريت سائل الجنب (تشخيص النزف الصدري / Hemothorax)",
    "aliases": [
      "Pleural Hematocrit",
      "Hemothorax"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Bloody Tinge / Traumatic Tap",
        "value": "< 1.0",
        "unit": "%"
      },
      {
        "group": "Malignant / PE Hemorrhagic Effusion",
        "value": "1.0 – 50.0% of blood Hct",
        "unit": "%"
      },
      {
        "group": "Hemothorax Diagnostic Criterion",
        "value": "≥ 50% of Peripheral Blood Hematocrit",
        "unit": "%",
        "alert": "critical_high",
        "note": "Defines true Hemothorax; requires immediate large-bore tube thoracostomy drainage / surgical consultation"
      }
    ],
    "significance": "A pleural fluid hematocrit ≥50% of the peripheral blood hematocrit definitively establishes the diagnosis of Hemothorax (mandates urgent large-bore chest tube drainage to prevent fibrothorax and empyema).",
    "significanceAr": "إذا بلغت نسبة هيماتوكريت سائل الجنب ≥50% من هيماتوكريت دم المريض فيثبت تشخيص النزف الصدري (Hemothorax) ويستدعي تفريغاً عاجلاً بأنبوب صدر كبير القطر لتجنب التليف.",
    "tags": [
      "pleural",
      "hemothorax",
      "hematocrit",
      "trauma",
      "emergency"
    ]
  },
  {
    "id": "pleural_ada_adenosine_deaminase",
    "name": "Pleural Fluid Adenosine Deaminase (ADA)",
    "nameAr": "أدينوزين دي أميناز في سائل الجنب (ADA / سل الجنب)",
    "aliases": [
      "Pleural ADA",
      "ADA Pleural"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Normal Baseline / Non-TB",
        "value": "< 40.0",
        "unit": "U/L"
      },
      {
        "group": "Tuberculous Pleurisy Diagnostic Support",
        "value": "> 40.0",
        "unit": "U/L",
        "alert": "critical_high",
        "note": ">90-95% sensitivity for Tuberculous Pleuritis in high-prevalence areas (lymphocyte-predominant exudate)"
      }
    ],
    "significance": "In a patient with lymphocyte-predominant exudative effusion, a pleural ADA >40 U/L has >90-95% sensitivity for Tuberculous Pleurisy, preventing the need for invasive thoracoscopic pleural biopsy.",
    "significanceAr": "في الانصباب النضحي السائد باللمفاويات، تشير قيمة ADA >40 وحدة/لتر بدقة تفوق 90% إلى درن وسل الجنب، مما يغني المريض عن أخذ خزعة جراحية للجنب.",
    "tags": [
      "pleural",
      "ada",
      "tuberculosis",
      "tb-pleurisy",
      "infectious"
    ]
  },
  {
    "id": "pleural_amylase",
    "name": "Pleural Fluid Total Amylase",
    "nameAr": "الأميلاز في سائل الجنب",
    "aliases": [
      "Pleural Amylase"
    ],
    "category": "pleural",
    "ranges": [
      {
        "group": "Normal Range",
        "value": "< Serum Normal Upper Limit",
        "unit": "U/L"
      },
      {
        "group": "Elevated (Pleural > Upper Limit of Serum Amylase)",
        "value": "> Serum ULN",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Differential: Acute Pancreatitis, Chronic Pancreatic Pseudocyst fistula, Esophageal Rupture (Boerhaave: salivary amylase), or Malignancy"
      }
    ],
    "significance": "Pleural amylase exceeding normal serum levels narrows differential to: Acute/chronic pancreatitis (or pseudocyst with pancreaticopleural fistula), Esophageal rupture (Boerhaave syndrome - salivary isoamylase with low pH <6.0), or Malignant adenocarcinoma.",
    "significanceAr": "ارتفاع أميلاز الجنب فوق مستوى المصل يحصر التشخيص في: التهاب البنكرياس أو الناسور البنكرياسي الجنبي، أو تمزق المريء الإسعافي (متلازمة بورهيف - أميلاز لعابي مع pH حمضي جداً).",
    "tags": [
      "pleural",
      "amylase",
      "pancreatitis",
      "esophageal-rupture",
      "boerhaave"
    ]
  },
  {
    "id": "synovial_wbc_count",
    "name": "Synovial Fluid Total WBC Count (Arthrocentesis)",
    "nameAr": "تعداد كريات الدم البيضاء في سائل المفصل (بزل المفصل)",
    "aliases": [
      "Synovial WBC",
      "Joint Fluid WBC",
      "خلايا سائل المفصل"
    ],
    "category": "synovial",
    "ranges": [
      {
        "group": "Normal Joint Fluid",
        "value": "< 200",
        "unit": "cells/µL",
        "note": "Clear, viscous, <25% neutrophils"
      },
      {
        "group": "Group I: Non-Inflammatory (Osteoarthritis / Trauma)",
        "value": "200 – 2000",
        "unit": "cells/µL",
        "note": "Clear yellow, high viscosity, <25% neutrophils"
      },
      {
        "group": "Group II: Inflammatory (RA / Gout / Pseudogout / Spondyloarthritis)",
        "value": "2000 – 50000",
        "unit": "cells/µL",
        "note": "Translucent to turbid, low viscosity, >50-70% neutrophils"
      },
      {
        "group": "Group III: Septic Arthritis Diagnostic Cutoff",
        "value": "> 50000 – >100000",
        "unit": "cells/µL",
        "alert": "critical_high",
        "note": "Opaque/purulent, >90% PMNs; orthopedic emergency requiring joint drainage / IV antibiotics"
      },
      {
        "group": "Group IV: Hemorrhagic (Trauma / Hemophilia / Pigmented Villonodular)",
        "value": "Bloody with red supernatant",
        "unit": "cells/µL",
        "alert": "critical_high"
      }
    ],
    "significance": "Single most important test for classifying joint effusions. WBC >50,000/µL with >90% neutrophils is the classic threshold for Septic Arthritis (medical emergency). Inflammatory arthritis (gout, RA) ranges from 2,000 to 50,000/µL. Non-inflammatory (osteoarthritis) is <2,000/µL.",
    "significanceAr": "الفحص الأهم لتصنيف بزل المفاصل: <2000 سليم أو تنكسي (خشونة). 2000-50,000 التهابي (روماتويد، نقرس). >50,000 مع عدلات >90% هو المعيار المشخص لالتهاب المفصل الإنتاني الصديدي الطارئ.",
    "tags": [
      "synovial",
      "arthrocentesis",
      "septic-arthritis",
      "gout",
      "rheumatology",
      "emergency"
    ]
  },
  {
    "id": "synovial_pmn_percentage",
    "name": "Synovial Fluid Neutrophil (PMN) Percentage",
    "nameAr": "نسبة العدلات المئوية في سائل المفصل (PMN %)",
    "aliases": [
      "Synovial PMN",
      "Synovial Differential"
    ],
    "category": "synovial",
    "ranges": [
      {
        "group": "Normal / Non-Inflammatory",
        "value": "< 25.0",
        "unit": "%"
      },
      {
        "group": "Inflammatory Arthritis",
        "value": "50.0 – 80.0",
        "unit": "%"
      },
      {
        "group": "Septic Arthritis Diagnostic",
        "value": "≥ 90.0",
        "unit": "%",
        "alert": "critical_high",
        "note": "Even if total WBC is <50,000 (e.g. in immunocompromised or early sepsis), PMN ≥90% warrants high suspicion for bacterial infection"
      }
    ],
    "significance": "A PMN differential ≥90% strongly suggests septic arthritis even when the total WBC count is lower than 50,000 (e.g., in partial antibiotic treatment or immunosuppressed patients).",
    "significanceAr": "تجاوز نسبة العدلات 90% يشير بقوة لالتهاب مفصل إنتاني حتى لو كان عدد الكريات الكلي أقل من 50 ألف (كما في مرضى المناعة الضعيفة أو بعد مضاد حيوي).",
    "tags": [
      "synovial",
      "pmn",
      "septic-arthritis"
    ]
  },
  {
    "id": "synovial_viscosity_string_test",
    "name": "Synovial Fluid Viscosity (String Sign)",
    "nameAr": "لزوجة سائل المفصل (علامة الخيط / String Test)",
    "aliases": [
      "String Sign",
      "Synovial Viscosity"
    ],
    "category": "synovial",
    "ranges": [
      {
        "group": "Normal / High Viscosity (Hyaluronate Intact)",
        "value": "Forms tenacious string ≥ 5 cm before breaking",
        "unit": "cm",
        "note": "High concentration of polymerized hyaluronic acid"
      },
      {
        "group": "Inflammatory / Low Viscosity (Enzymatic Degradation)",
        "value": "Drops like water (< 3 cm string)",
        "unit": "cm",
        "note": "Leukocyte hyaluronidase depolymerizes hyaluronic acid in acute inflammatory / septic effusion"
      }
    ],
    "significance": "Reflects concentration and polymerization of hyaluronic acid secreted by synoviocytes. High in normal and osteoarthritis. In inflammatory and septic arthritis, leukocyte enzymes depolymerize hyaluronic acid, causing fluid to drip watery ('poor string test').",
    "significanceAr": "يعكس جودة حمض الهيالورونيك المفصلي. طبيعياً يشكل خيطاً متماسكاً بطول 5 سم. وفي الالتهاب والنقرس والإنتان تخرب أنزيمات العدلات الهيالورونيك فينقط السائل كالماء دون تشكل خيط.",
    "tags": [
      "synovial",
      "viscosity",
      "string-test"
    ]
  },
  {
    "id": "synovial_msu_crystals_gout",
    "name": "Synovial Monosodium Urate Crystals (Polarized Light / Gout)",
    "nameAr": "بلورات يورات أحادية الصوديوم (الضوء المستقطب / تشخيص النقرس)",
    "aliases": [
      "MSU Crystals",
      "Gout Crystals",
      "بلورات النقرس"
    ],
    "category": "synovial",
    "ranges": [
      {
        "group": "Normal Synovial Fluid",
        "value": "Absent / Negative",
        "unit": "microscopy"
      },
      {
        "group": "Acute Gouty Arthritis Pathognomonic",
        "value": "Needle-shaped intracellular / extracellular crystals demonstrating STRONG NEGATIVE BIREFRINGENCE",
        "unit": "microscopy",
        "alert": "critical_high",
        "note": "Yellow when parallel to compensator slow axis; blue when perpendicular; 100% pathognomonic for Gout"
      }
    ],
    "significance": "Under polarized light microscopy with red compensator: Needle-shaped, sharp pointed crystals displaying STRONG NEGATIVE BIREFRINGENCE (turn bright yellow when aligned parallel to the compensator axis, and blue when perpendicular). 100% pathognomonic gold standard for Gout.",
    "significanceAr": "المعيار الذهبي المشخص لداء النقرس. تحت مجهر الضوء المستقطب تظهر بلورات إبرية حادة تملك انكساراً مضاعفاً سلبياً قوياً (تتلون باللون الأصفر الساطع عندما تكون موازية للمحور وبالأزرق عندما تعامده).",
    "tags": [
      "synovial",
      "gout",
      "msu-crystals",
      "polarized-microscopy",
      "gold-standard"
    ]
  },
  {
    "id": "synovial_cppd_crystals_pseudogout",
    "name": "Synovial Calcium Pyrophosphate Crystals (CPPD / Pseudogout)",
    "nameAr": "بلورات بيروفوسفات الكالسيوم (النقرس الكاذب / CPPD)",
    "aliases": [
      "CPPD",
      "Pseudogout Crystals",
      "النقرس الكاذب"
    ],
    "category": "synovial",
    "ranges": [
      {
        "group": "Normal Synovial Fluid",
        "value": "Absent / Negative",
        "unit": "microscopy"
      },
      {
        "group": "Calcium Pyrophosphate Deposition Disease (CPPD / Pseudogout)",
        "value": "Rhomboid / coffin-shaped crystals demonstrating WEAK POSITIVE BIREFRINGENCE",
        "unit": "microscopy",
        "alert": "critical_high",
        "note": "Blue when parallel to compensator slow axis; yellow when perpendicular; associated with chondrocalcinosis on X-ray"
      }
    ],
    "significance": "Rhomboid, rectangular, or rod-shaped crystals with blunt ends demonstrating WEAK POSITIVE BIREFRINGENCE (turn blue when aligned parallel to compensator axis, and yellow when perpendicular). Diagnostic for CPPD / Pseudogout.",
    "significanceAr": "بلورات معينية أو مستطيلة ذات نهايات مثلومة تملك انكساراً مضاعفاً إيجابياً ضعيفاً (تتلون بالأزرق عندما توازي المحور وبالأصفر عندما تعامده). تشخص النقرس الكاذب (CPPD).",
    "tags": [
      "synovial",
      "cppd",
      "pseudogout",
      "chondrocalcinosis"
    ]
  },
  {
    "id": "synovial_glucose",
    "name": "Synovial Fluid Glucose",
    "nameAr": "جلوكوز سائل المفصل",
    "aliases": [
      "Synovial Glucose"
    ],
    "category": "synovial",
    "ranges": [
      {
        "group": "Normal Joint (Near Blood Glucose)",
        "value": "> 80% of simultaneous serum glucose",
        "unit": "ratio"
      },
      {
        "group": "Septic Arthritis Characteristic",
        "value": "< 50% of blood glucose (or >40 mg/dL lower than serum)",
        "unit": "ratio",
        "alert": "critical_low",
        "note": "Bacterial and leukocyte consumption drives joint glucose near zero"
      }
    ],
    "significance": "Fasting joint glucose normally matches serum within 10-20 mg/dL. In septic arthritis, joint glucose drops profoundly to <50% of simultaneous serum glucose.",
    "significanceAr": "طبيعياً يماثل سكر الدم. في التهاب المفصل الإنتاني الجرثومي يهبط بشدة لأقل من نصف سكر الدم بسبب استهلاك البكتيريا والعدلات للجلوكوز.",
    "tags": [
      "synovial",
      "glucose",
      "septic-arthritis"
    ]
  },
  {
    "id": "synovial_gram_stain_culture",
    "name": "Synovial Fluid Gram Stain & Aerobic/Anaerobic Culture",
    "nameAr": "صبغة غرام ومزرعة سائل المفصل",
    "aliases": [
      "Synovial Gram Stain",
      "Joint Fluid Culture"
    ],
    "category": "synovial",
    "ranges": [
      {
        "group": "Normal Joint",
        "value": "No Organisms Seen / Negative Culture",
        "unit": "microbiology"
      },
      {
        "group": "Staphylococcus aureus (Gram-Positive Cocci in clusters)",
        "value": "Positive (~60-70% sensitivity on Gram stain)",
        "unit": "microbiology",
        "alert": "critical_high",
        "note": "Most common cause of acute bacterial septic arthritis across all adult age groups"
      },
      {
        "group": "Neisseria gonorrhoeae (Disseminated Gonococcal Infection)",
        "value": "Gram-negative intracellular diplococci (<25% Gram stain sensitivity)",
        "unit": "microbiology",
        "alert": "critical_high",
        "note": "Most common cause in young sexually active adults; Gram stain often negative, culture on Thayer-Martin or order NAAT"
      }
    ],
    "significance": "Immediate Gram stain detects organisms in 60-75% of Staphylococcal and Streptococcal septic arthritis, but only <25% of Gonococcal arthritis. Inoculate into blood culture bottles at bedside to maximize yield.",
    "significanceAr": "تكشف صبغة غرام البكتيريا في 60-75% من حالات المكورات العنقودية (أشيع سبب لالتهاب المفصل الإنتاني)، لكن حساسيتها تقل عن 25% في السيلان (المكورات البنية) مما يستلزم زرعاً خاصاً أو فحص PCR.",
    "tags": [
      "synovial",
      "gram-stain",
      "septic-arthritis",
      "staph-aureus",
      "gonococcus"
    ]
  },
  {
    "id": "semen_volume",
    "name": "Semen Volume",
    "nameAr": "حجم السائل المنوي",
    "aliases": [
      "Semen Volume",
      "حجم المني"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "WHO 6th Edition (2021) Lower Reference Limit",
        "value": "≥ 1.4",
        "unit": "mL",
        "note": "Collected after 2-7 days of sexual abstinence"
      },
      {
        "group": "Hypospermia / Low Volume",
        "value": "< 1.4",
        "unit": "mL",
        "note": "Retrograde ejaculation, ejaculatory duct obstruction, androgen deficiency, incomplete collection"
      },
      {
        "group": "Aspermia (Complete Absence of Ejaculate)",
        "value": "0.0",
        "unit": "mL",
        "alert": "critical_low",
        "note": "Aneuploidy, bladder neck incompetence, anejaculation"
      }
    ],
    "significance": "WHO 6th Edition reference lower limit is 1.4 mL (lowered from 1.5 mL in 5th edition). Derived from seminal vesicles (~65-75%) and prostate (~20-30%). Low volume suggests retrograde ejaculation, ejaculatory duct obstruction, or hypogonadism.",
    "significanceAr": "الحد الأدنى حسب معايير منظمة الصحة العالمية 2021 (الإصدار السادس) هو 1.4 مل بعد امتناع عن الجماع 2-7 أيام. نقصه يوجه للقذف الراجع أو انسداد القناة القاذفة أو نقص الأندروجين.",
    "tags": [
      "semen",
      "semen-analysis",
      "who-criteria",
      "andrology",
      "infertility"
    ]
  },
  {
    "id": "semen_ph",
    "name": "Semen pH",
    "nameAr": "درجة حموضة السائل المنوي (pH)",
    "aliases": [
      "Semen pH",
      "حموضة المني"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "WHO 6th Edition Lower Reference Limit",
        "value": "≥ 7.2",
        "unit": "pH units",
        "note": "Alkaline secretion protecting sperm from vaginal acidity"
      },
      {
        "group": "Acidic Semen (<7.0 with Azoospermia)",
        "value": "< 7.0",
        "unit": "pH units",
        "alert": "critical_low",
        "note": "Pathognomonic of Congenital Bilateral Absence of the Vas Deferens (CBAVD / Cystic Fibrosis) or complete ejaculatory duct obstruction"
      }
    ],
    "significance": "Reflects balance between alkaline seminal vesicle secretions and acidic prostatic secretions. An acidic semen (pH <7.0) accompanied by low volume and azoospermia is pathognomonic for Congenital Bilateral Absence of the Vas Deferens (CBAVD - CFTR gene mutation) or ejaculatory duct obstruction.",
    "significanceAr": "يعكس توازن قلوية الحويصلات المنوية مع حموضة البروستات. البول أو المني الحامضي (<7.0) مع انعدام النطاف علامة كلاسيكية لغياب الأسهر الخلقي ثنائي الجانب (طفرة التليف الكيسي CFTR).",
    "tags": [
      "semen",
      "semen-ph",
      "cbavd",
      "cystic-fibrosis",
      "azoospermia"
    ]
  },
  {
    "id": "sperm_concentration",
    "name": "Sperm Concentration",
    "nameAr": "تركيز الحيوانات المنوية (تعداد النطاف بالمليلتر)",
    "aliases": [
      "Sperm Count",
      "Sperm Concentration",
      "تركيز النطاف"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "WHO 6th Edition Lower Reference Limit",
        "value": "≥ 16.0",
        "unit": "million/mL",
        "note": "5th percentile lower reference limit"
      },
      {
        "group": "Oligozoospermia (Mild to Moderate)",
        "value": "5.0 – 15.9",
        "unit": "million/mL"
      },
      {
        "group": "Severe Oligozoospermia",
        "value": "< 5.0",
        "unit": "million/mL",
        "alert": "critical_low",
        "note": "Indication for karyotype and Y-chromosome microdeletion (AZF) testing"
      },
      {
        "group": "Azoospermia (Complete Absence of Spermatozoa)",
        "value": "0.0",
        "unit": "million/mL",
        "alert": "critical_low",
        "note": "Must be confirmed after centrifugation at 3000g for 15 min; differentiate obstructive vs non-obstructive"
      }
    ],
    "significance": "WHO 6th Edition cutoff is ≥16 million/mL. Severe oligozoospermia (<5 million/mL) warrants genetic testing (karyotype for Klinefelter XXY, and Y-chromosome microdeletions in AZFa/b/c). Azoospermia must be confirmed by high-speed centrifugation examining pellet.",
    "significanceAr": "الحد الأدنى الطبيعي لمنظمة الصحة العالمية (2021) هو ≥16 مليون/مل. نقص النطاف الشديد (<5 مليون) يستلزم فحص النمط النووي الوراثي والتساقطات الدقيقة لكروموسوم Y (منطقة AZF).",
    "tags": [
      "semen",
      "sperm-count",
      "oligospermia",
      "azoospermia",
      "fertility",
      "who-criteria"
    ]
  },
  {
    "id": "total_sperm_number",
    "name": "Total Sperm Number (per Ejaculate)",
    "nameAr": "العدد الإجمالي للحيوانات المنوية في القذفة",
    "aliases": [
      "Total Sperm Count",
      "Sperm per Ejaculate"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "WHO 6th Edition Lower Reference Limit",
        "value": "≥ 39.0",
        "unit": "million per ejaculate",
        "note": "Calculated as: Concentration x Volume"
      }
    ],
    "significance": "Total output per ejaculate: Concentration (million/mL) multiplied by Semen Volume (mL). WHO 6th Edition threshold is ≥39 million per ejaculate.",
    "significanceAr": "العدد الكلي في القذفة الكاملة (التركيز × الحجم). الحد الأدنى الطبيعي حسب منظمة الصحة العالمية هو ≥39 مليون نطفة.",
    "tags": [
      "semen",
      "total-sperm",
      "fertility"
    ]
  },
  {
    "id": "total_sperm_motility",
    "name": "Total Sperm Motility (PR + NP)",
    "nameAr": "حركة الحيوانات المنوية الكلية (التقدمية وغير التقدمية)",
    "aliases": [
      "Total Motility",
      "Sperm Motility",
      "حركة النطاف"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "WHO 6th Edition Lower Reference Limit",
        "value": "≥ 42.0",
        "unit": "% motile",
        "note": "Combined Progressive Motility (PR) + Non-Progressive Motility (NP)"
      },
      {
        "group": "Asthenozoospermia Diagnostic",
        "value": "< 42.0",
        "unit": "% motile",
        "alert": "critical_low",
        "note": "Impaired sperm motility"
      }
    ],
    "significance": "Evaluated at 37°C within 60 minutes of liquefaction. Sum of progressively motile and non-progressively motile spermatozoa. Less than 42% defines Asthenozoospermia.",
    "significanceAr": "تقيم عند 37 درجة مئوية خلال ساعة من الإماهة. مجموع الحركة التقدمية وغير التقدمية؛ هبوطها دون 42% يشخص وهن النطاف (Asthenozoospermia).",
    "tags": [
      "semen",
      "motility",
      "asthenozoospermia",
      "who-criteria"
    ]
  },
  {
    "id": "progressive_motility_pr",
    "name": "Progressive Sperm Motility (PR)",
    "nameAr": "الحركة التقدمية للأمام للحيوانات المنوية (PR)",
    "aliases": [
      "Progressive Motility",
      "PR Motility"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "WHO 6th Edition Lower Reference Limit",
        "value": "≥ 30.0",
        "unit": "% progressive",
        "note": "Sperm moving actively either linearly or in a large circle"
      },
      {
        "group": "Impaired Progressive Motility",
        "value": "< 30.0",
        "unit": "% progressive",
        "note": "Directly impacts natural conception and IUI success rates"
      }
    ],
    "significance": "Spermatozoa moving actively forward linearly or in a large circle. WHO 6th Edition threshold is ≥30% (lowered from 32% in 5th edition). Most critical motility parameter for penetration of cervical mucus.",
    "significanceAr": "النطاف التي تتحرك بفاعلية للأمام في خط مستقيم أو دائرة واسعة. الحد الأدنى لمنظمة الصحة العالمية هو ≥30%. المعيار الأكثر أهمية لاختراق مخاط عنق الرحم والإخصاب الطبيعي.",
    "tags": [
      "semen",
      "progressive-motility",
      "fertility"
    ]
  },
  {
    "id": "sperm_morphology_kruger",
    "name": "Normal Sperm Morphology (Kruger Strict Criteria)",
    "nameAr": "الأشكال الطبيعية للحيوانات المنوية (معايير كروجر الصارمة)",
    "aliases": [
      "Sperm Morphology",
      "Kruger Strict Criteria",
      "تشوهات النطاف"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "WHO 6th Edition Lower Reference Limit",
        "value": "≥ 4.0",
        "unit": "% normal forms",
        "note": "Strict Tygerberg / Kruger classification criteria"
      },
      {
        "group": "Teratozoospermia Diagnostic",
        "value": "< 4.0",
        "unit": "% normal forms",
        "alert": "critical_low",
        "note": "Severe morphological defects of head (acrosome), midpiece, or tail; indication for ICSI (Intracytoplasmic Sperm Injection)"
      },
      {
        "group": "Globozoospermia (Round-Headed Acrosomeless Sperm)",
        "value": "100% round heads",
        "unit": "%",
        "alert": "critical_low",
        "note": "Total absence of acrosome (DPY19L2 gene mutation); incapable of natural fertilization"
      }
    ],
    "significance": "Evaluated on stained smears under 1000x oil immersion applying strict Tygerberg/Kruger criteria: normal oval head (length 4.0-5.0 µm, width 2.5-3.5 µm), well-defined acrosome covering 40-70% of head, straight midpiece, and uniform uncoiled tail. Values <4% define Teratozoospermia and strongly indicate ICSI.",
    "significanceAr": "تقيم تحت التكبير الزيتي 1000x حسب معايير كروجر الصارمة. الحد الأدنى الطبيعي هو ≥4% أشكال سليمة تماماً. هبوطها دون 4% يشخص تشوه النطاف (Teratozoospermia) ويستوجب التلقيح المجهري (ICSI).",
    "tags": [
      "semen",
      "morphology",
      "kruger",
      "teratozoospermia",
      "icsi",
      "who-criteria"
    ]
  },
  {
    "id": "sperm_vitality_viability",
    "name": "Sperm Vitality (Viability / Membrane Integrity)",
    "nameAr": "حيوية الحيوانات المنوية (اختبار النفوذية الغشائية)",
    "aliases": [
      "Sperm Vitality",
      "Viability",
      "Eosin-Nigrosin"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "WHO 6th Edition Lower Reference Limit",
        "value": "≥ 54.0",
        "unit": "% live sperm",
        "note": "Assessed via Eosin-Nigrosin dye exclusion or Hypo-Osmotic Swelling (HOS) test"
      },
      {
        "group": "Necrozoospermia (Dead Spermatozoa)",
        "value": "< 54.0",
        "unit": "% live sperm",
        "alert": "critical_low",
        "note": "Differentiates totally immotile living sperm (ciliary dyskinesia / Kartagener) from dead sperm (necrozoospermia)"
      }
    ],
    "significance": "Eosin-Nigrosin exclusion test: live sperm with intact cell membranes exclude dye and remain white, while dead sperm take up pink eosin. Critical for differentiating immotile LIVING sperm (Kartagener syndrome / primary ciliary dyskinesia, amenable to ICSI) from true Necrozoospermia (dead sperm).",
    "significanceAr": "فحص استبعاد صبغة الإيوسين: الخلايا الحية ذات الغشاء السليم تظل بيضاء، بينما الميتة تتصبغ بالوردي. فحص جوهري للتفريق بين النطاف المشلولة الحية (متلازمة كارتينغر - صالحة للحقن المجهري) وموت النطاف الحقيقي.",
    "tags": [
      "semen",
      "vitality",
      "viability",
      "kartagener",
      "necrozoospermia"
    ]
  },
  {
    "id": "leukocytospermia_peroxidase",
    "name": "Semen Leukocytes (Leukocytospermia / Pyospermia)",
    "nameAr": "كريات الدم البيضاء في السائل المنوي (Leukocytospermia)",
    "aliases": [
      "Leukocytospermia",
      "Pyospermia",
      "صديد المني"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 1.0",
        "unit": "million/mL",
        "note": "< 1.0 x 10^6 peroxidase-positive round cells/mL"
      },
      {
        "group": "Leukocytospermia Diagnostic Threshold",
        "value": "≥ 1.0",
        "unit": "million/mL",
        "alert": "critical_high",
        "note": "Indicates genital tract infection / inflammation (prostatitis, epididymitis); causes high reactive oxygen species (ROS) and sperm DNA damage"
      }
    ],
    "significance": "Assessed via o-toluidine peroxidase staining to differentiate leukocytes from immature germ cells (both appear as 'round cells' under light microscopy). Leukocytospermia (≥1.0 x 10^6/mL) causes high oxidative stress and sperm DNA fragmentation.",
    "significanceAr": "يميز بصبغة البيروكسيداز بين كريات الصديد البيضاء والخلايا المنوية غير الناضجة. وجود ≥1 مليون خلية صديدية/مل يدل على التهاب البروستات أو البربخ ويطلق الجذور الحرة المخربة لحمض النطاف النووي.",
    "tags": [
      "semen",
      "leukocytospermia",
      "pyospermia",
      "prostatitis",
      "ros"
    ]
  },
  {
    "id": "sperm_dna_fragmentation_index",
    "name": "Sperm DNA Fragmentation Index (DFI)",
    "nameAr": "مشعر تكسر الحمض النووي للنطاف (DFI)",
    "aliases": [
      "DFI",
      "DNA Fragmentation",
      "تكسر المادة الوراثية للنطاف"
    ],
    "category": "semen",
    "ranges": [
      {
        "group": "Excellent / High Fertility Potential",
        "value": "< 15.0",
        "unit": "%",
        "note": "High natural conception and IUI rates"
      },
      {
        "group": "Good to Fair Fertility",
        "value": "15.0 – 25.0",
        "unit": "%"
      },
      {
        "group": "High DNA Fragmentation (Compromised Fertility)",
        "value": "> 25.0 – 30.0",
        "unit": "%",
        "alert": "critical_high",
        "note": "Associated with recurrent pregnancy loss, poor blastocyst development, and IVF failure"
      }
    ],
    "significance": "Assesses single- and double-strand DNA breaks via TUNEL, SCSA, or Comet assays. DFI >25-30% is strongly associated with male-factor unexplained infertility, recurrent spontaneous miscarriages, and poor embryo cleavage in IVF.",
    "significanceAr": "يقيس تكسر شريطي DNA النطاف بفحوص متقدمة (TUNEL). تجاوزه 25-30% يرتبط بفشل أطفال الأنابيب وضعف تطور الجنين والإجهاض المتكرر لدى الزوجة.",
    "tags": [
      "semen",
      "dfi",
      "dna-fragmentation",
      "recurrent-miscarriage",
      "ivf"
    ]
  },
  {
    "id": "fecal_calprotectin",
    "name": "Fecal Calprotectin",
    "nameAr": "الكالبروتكتين في البراز (واسم التهاب الأمعاء IBD)",
    "aliases": [
      "Calprotectin",
      "Fecal Calpro",
      "كالبروتكتين"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Normal / Non-Inflammatory (Irritable Bowel Syndrome - IBS)",
        "value": "< 50.0",
        "unit": "µg/g",
        "note": "High negative predictive value (>95%) to rule out Inflammatory Bowel Disease"
      },
      {
        "group": "Borderline / Gray Zone",
        "value": "50.0 – 120.0",
        "unit": "µg/g",
        "note": "Repeat in 4-6 weeks; NSAID enteropathy or mild transient infection"
      },
      {
        "group": "Active Inflammatory Bowel Disease (Crohn's / Ulcerative Colitis)",
        "value": "> 120.0 – 250.0",
        "unit": "µg/g",
        "alert": "critical_high",
        "note": "Strong indication for diagnostic ileocolonoscopy and mucosal biopsy"
      },
      {
        "group": "Severe Active IBD Flare / Mucosal Ulceration",
        "value": "> 500.0 – >1000.0",
        "unit": "µg/g",
        "alert": "critical_high",
        "note": "Extensive endoscopic mucosal ulceration / risk of treatment failure"
      }
    ],
    "significance": "Calcium- and zinc-binding protein derived from neutrophil cytosol. Extremely stable in stool for up to 7 days. Gold standard non-invasive test for differentiating organic Inflammatory Bowel Disease (IBD: Crohn disease, Ulcerative Colitis) from functional Irritable Bowel Syndrome (IBS). Used to monitor mucosal healing and predict clinical relapse.",
    "significanceAr": "بروتين يتحرر من سيتوبلازم العدلات في لمعة الأمعاء. المعيار الذهبي غير الجراحي للتفريق بين القولون العصبي الوظيفي (IBS: طبيعي <50) وداء الأمعاء الالتهابي (IBD: كرون والقولون التقرحي >120-250) ومراقبة التئام بطانة الأمعاء.",
    "tags": [
      "stool",
      "calprotectin",
      "ibd",
      "crohns",
      "ulcerative-colitis",
      "ibs",
      "gastroenterology"
    ]
  },
  {
    "id": "fecal_lactoferrin",
    "name": "Fecal Lactoferrin",
    "nameAr": "اللاكتوفيرين في البراز",
    "aliases": [
      "Fecal Lactoferrin",
      "Lactoferrin"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Normal Non-Inflammatory",
        "value": "< 7.25",
        "unit": "µg/g"
      },
      {
        "group": "Active Intestinal Inflammation (IBD / Invasive Bacterial Diarrhea)",
        "value": "≥ 7.25",
        "unit": "µg/g",
        "note": "Released by degranulating neutrophils in invasive bacterial colitis (Salmonella, Shigella, Campylobacter, C. diff) or IBD"
      }
    ],
    "significance": "Iron-binding glycoprotein in secondary granules of neutrophils. Resistant to proteolysis in feces. Sensitive marker for mucosal inflammation in IBD and invasive bacterial enteritis.",
    "significanceAr": "بروتين رابط للحديد في حبيبات العدلات؛ يقاوم التفكك الأنزيمي في البراز ويثبت وجود التهاب موضعي في جدار الأمعاء في داء IBD والإنتانات الجرثومية الغازية.",
    "tags": [
      "stool",
      "lactoferrin",
      "ibd",
      "diarrhea"
    ]
  },
  {
    "id": "fecal_elastase_1",
    "name": "Fecal Elastase-1 (Exocrine Pancreatic Insufficiency)",
    "nameAr": "إيلاستاز البراز-1 (فحص كفاءة البنكرياس الإفرازية)",
    "aliases": [
      "Fecal Elastase",
      "FE-1",
      "إيلاستاز البراز"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Normal Exocrine Pancreatic Function",
        "value": "> 200",
        "unit": "µg/g",
        "note": "Adequate pancreatic digestive enzyme synthesis"
      },
      {
        "group": "Mild to Moderate Exocrine Pancreatic Insufficiency (EPI)",
        "value": "100 – 200",
        "unit": "µg/g"
      },
      {
        "group": "Severe Exocrine Pancreatic Insufficiency (EPI)",
        "value": "< 100",
        "unit": "µg/g",
        "alert": "critical_low",
        "note": "Chronic pancreatitis, cystic fibrosis, post-pancreatectomy; indicates Pancreatic Enzyme Replacement Therapy (PERT)"
      }
    ],
    "significance": "Pancreatic endopeptidase that travels through intestinal tract without being degraded. Gold standard non-invasive test for Exocrine Pancreatic Insufficiency (EPI) in chronic pancreatitis, cystic fibrosis, and steatorrhea. NOT affected by oral pancreatic enzyme replacement therapy (patient does NOT need to stop enzymes for testing). Must be formed stool (watery diarrhea causes false-positive low concentration).",
    "significanceAr": "أنزيم بنكرياسي لا يتفكك بالهضم. المعيار الذهبي غير الجراحي لتشخيص قصور البنكرياس الإفرازي (EPI) في التهاب البنكرياس المزمن والتليف الكيسي. ميزته الكبرى: لا يتأثر بأخذ إنزيمات البنكرياس الدوائية.",
    "tags": [
      "stool",
      "fecal-elastase",
      "pancreas",
      "pancreatic-insufficiency",
      "cystic-fibrosis",
      "steatorrhea"
    ]
  },
  {
    "id": "fecal_occult_blood_fit",
    "name": "Fecal Immunochemical Test (FIT / Quantitative Hemoglobin)",
    "nameAr": "فحص الدم الخفي المناعي في البراز (FIT)",
    "aliases": [
      "FIT",
      "iFOBT",
      "Fecal Occult Blood",
      "الدم الخفي بالبراز"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Negative Normal (Colorectal Cancer Screening)",
        "value": "< 20.0 (or < 100 ng/mL buffer)",
        "unit": "µg Hb/g feces"
      },
      {
        "group": "Positive (Abnormal Lower GI Bleeding)",
        "value": "≥ 20.0",
        "unit": "µg Hb/g feces",
        "alert": "critical_high",
        "note": "Mandatory diagnostic colonoscopy to investigate advanced adenoma or colorectal carcinoma"
      }
    ],
    "significance": "Uses specific antibodies to human globin. Does NOT detect upper GI bleeding (globin is digested by gastroduodenal enzymes), eliminating false positives from upper tract or red meat diet. Recommended first-line non-invasive annual colorectal cancer screening test for average-risk adults aged 45-75.",
    "significanceAr": "يعتمد على أجسام مضادة نوعية للغلوبين البشري. لا يتأثر بالطعام أو اللحوم الحمراء ولا يكشف نزف المعدة العلوي (لهضمه). الفحص السنوي الأول عالمياً لمسح سرطان القولون؛ إيجابيته تستدعي تنظير القولون فوراً.",
    "tags": [
      "stool",
      "fit",
      "fobt",
      "colorectal-cancer-screening",
      "colonoscopy"
    ]
  },
  {
    "id": "stool_quantitative_fat_72h",
    "name": "72-Hour Quantitative Fecal Fat Excretion",
    "nameAr": "إطراح دهون البراز الكمي لـ 72 ساعة",
    "aliases": [
      "72h Fecal Fat",
      "Fecal Fat",
      "دهون البراز"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Normal Adults (100g Fat Diet/Day)",
        "value": "< 7.0",
        "unit": "g/24h",
        "note": "Coefficient of fat absorption >93%"
      },
      {
        "group": "Borderline / Mild Steatorrhea",
        "value": "7.0 – 14.0",
        "unit": "g/24h"
      },
      {
        "group": "Severe Steatorrhea / Pancreatic or Celiac Malabsorption",
        "value": "> 14.0 – >25.0",
        "unit": "g/24h",
        "alert": "critical_high",
        "note": "Pathognomonic of severe malabsorption (celiac disease, chronic pancreatitis, bile acid deficiency)"
      }
    ],
    "significance": "Gold standard definitive test for steatorrhea and fat malabsorption. Patient consumes a standardized 100 g/day dietary fat diet for 3 days before and throughout the 72-hour stool collection. Excretion >7 g/24h confirms fat malabsorption.",
    "significanceAr": "المعيار الذهبي الكلاسيكي لإثبات الإسهال الدهني وسوء الامتصاص. يتناول المريض 100 جم دهون يومياً ويجمع البراز لـ 72 ساعة. إطراح أكثر من 7 جم/يوم يؤكد سوء امتصاص الدهون.",
    "tags": [
      "stool",
      "fecal-fat",
      "steatorrhea",
      "malabsorption",
      "gold-standard"
    ]
  },
  {
    "id": "clostridioides_difficile_toxin",
    "name": "Clostridioides difficile Toxin A/B EIA & GDH Antigen",
    "nameAr": "ذيفان كلوستريديوم ديفيسيل أ و ب (سموم بكتيريا ديفيسيل)",
    "aliases": [
      "C. diff",
      "C. difficile Toxin",
      "كلوستريديوم"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "GDH Negative",
        "value": "Negative",
        "unit": "qualitative",
        "note": "Rules out C. diff colonization"
      },
      {
        "group": "GDH Positive + Toxin A/B Positive (Active CDI Disease)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Confirms active C. difficile infection; initiate Oral Vancomycin or Fidaxomicin (avoid Metronidazole)"
      },
      {
        "group": "GDH Positive + Toxin Negative (Discordant / Colonization)",
        "value": "Perform NAAT / PCR",
        "unit": "algorithm",
        "note": "Distinguishes asymptomatic colonization from active low-toxin colitis"
      }
    ],
    "significance": "Two-step algorithm: GDH (Glutamate Dehydrogenase) antigen screen has high sensitivity (>95%) for presence of organism; Toxin A/B enzyme immunoassay confirms active toxin production and disease. First-line treatment is oral Vancomycin or Fidaxomicin.",
    "significanceAr": "خوارزمية ثنائية: فحص مستضد GDH ينفي وجود البكتيريا، وإيجابية ذيفان A/B تؤكد التهاب القولون الغشائي الكاذب النشط بعد المضادات الحيوية. يعالج بالفانكومايسين الفموي.",
    "tags": [
      "stool",
      "c-difficile",
      "pseudomembranous-colitis",
      "antibiotic-associated-diarrhea",
      "infectious"
    ]
  },
  {
    "id": "h_pylori_stool_antigen",
    "name": "Helicobacter pylori Stool Antigen (HpSA)",
    "nameAr": "مستضد جرثومة المعدة في البراز (H. pylori Stool Antigen)",
    "aliases": [
      "H. pylori Stool",
      "HpSA",
      "جرثومة المعدة بالبراز"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Negative Normal",
        "value": "Negative",
        "unit": "qualitative"
      },
      {
        "group": "Active Infection Diagnostic",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": ">95% sensitivity and specificity for active gastric H. pylori infection; also validates eradication when tested ≥4 weeks post-treatment (hold PPIs for ≥2 weeks prior)"
      }
    ],
    "significance": "Monoclonal enzyme immunoassay detecting active presence of H. pylori in stomach. Excellent for initial diagnosis and for confirming successful post-treatment eradication (must be performed ≥4 weeks after completing antibiotics and ≥2 weeks after stopping PPIs).",
    "significanceAr": "فحص مناعي دقيق بنوعية وحساسية تفوق 95% لكشف جرثومة المعدة النشطة وللتأكد من القضاء عليها بعد العلاج بـ 4 أسابيع (مع ضرورة إيقاف أدوية الحموضة قبل أسبوعين).",
    "tags": [
      "stool",
      "h-pylori",
      "peptic-ulcer",
      "gastritis",
      "gastroenterology"
    ]
  },
  {
    "id": "stool_osmotic_gap",
    "name": "Stool Osmotic Gap",
    "nameAr": "الفجوة التناضحية للبراز",
    "aliases": [
      "Stool Osmolar Gap",
      "Stool Gap"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Osmotic Diarrhea (Laxatives / Malabsorption / Lactase Deficit)",
        "value": "> 100.0",
        "unit": "mOsm/kg",
        "note": "Unabsorbed ingested solute drives water into lumen; diarrhea stops with fasting"
      },
      {
        "group": "Secretory Diarrhea (Vibrio cholerae / VIPoma / Carcinoid)",
        "value": "< 50.0",
        "unit": "mOsm/kg",
        "note": "Active electrolyte secretion; diarrhea persists despite fasting and nocturnal stooling"
      }
    ],
    "significance": "Formula: 290 - 2 x (Stool Na + Stool K). Key in differential diagnosis of chronic diarrhea: Gap >100 mOsm/kg indicates Osmotic diarrhea (lactose intolerance, magnesium/osmotic laxatives; ceases with fasting). Gap <50 mOsm/kg indicates Secretory diarrhea (cholera, VIPoma, neuroendocrine tumors; persists with fasting).",
    "significanceAr": "المعادلة: 290 - 2 × (صوديوم البراز + بوتاسيوم البراز). الفجوة >100 تشخص إسهالاً تناضحياً (عدم تحمل اللاكتوز والمسهلات؛ يتوقف بالصيام). والفجوة <50 تشخص إسهالاً إفرازياً (كوليرا، فيبوما؛ يستمر أثناء الصيام والنوم).",
    "tags": [
      "stool",
      "osmotic-gap",
      "diarrhea",
      "secretory-diarrhea",
      "cholera"
    ]
  },
  {
    "id": "stool_ph",
    "name": "Stool pH",
    "nameAr": "حموضة البول / البراز (pH)",
    "aliases": [
      "Fecal pH"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "7.0 – 7.5",
        "unit": "pH units"
      },
      {
        "group": "Carbohydrate Malabsorption (Lactose Intolerance)",
        "value": "< 5.5",
        "unit": "pH units",
        "note": "Bacterial colonic fermentation of unabsorbed disaccharides into volatile short-chain fatty acids"
      }
    ],
    "significance": "Stool pH <5.5 strongly indicates carbohydrate malabsorption (lactase deficiency) due to colonic bacterial fermentation of sugars into acidic short-chain fatty acids.",
    "significanceAr": "هبوط حموضة البراز دون 5.5 علامة قوية على سوء امتصاص السكريات (عوز اللاكتاز / حساسية اللاكتوز) بسبب تخمر السكر وتحوله إلى أحماض دهنية قصيرة السلسلة.",
    "tags": [
      "stool",
      "stool-ph",
      "lactose-intolerance"
    ]
  },
  {
    "id": "stool_reducing_substances",
    "name": "Stool Reducing Substances",
    "nameAr": "المواد المرجعة في البراز (الكشف عن سوء هضم السكريات)",
    "aliases": [
      "Reducing Substances",
      "Clinitest Stool"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Normal Baseline",
        "value": "< 0.25",
        "unit": "%",
        "note": "Negative"
      },
      {
        "group": "Borderline",
        "value": "0.25 – 0.50",
        "unit": "%"
      },
      {
        "group": "Carbohydrate Malabsorption Diagnostic",
        "value": "> 0.50",
        "unit": "%",
        "alert": "critical_high",
        "note": "Confirms disaccharidase deficiency (lactose, sucrose) in pediatric chronic diarrhea"
      }
    ],
    "significance": "Clinitest on liquid stool. Detects unabsorbed reducing sugars (glucose, lactose, fructose, galactose; sucrose is non-reducing unless acid-hydrolyzed). Classic screening test in infants with diarrhea and diaper dermatitis.",
    "significanceAr": "يكشف السكريات غير الممتصة في براز الرضع المصابين بالإسهال والتهاب الحفائض؛ إيجابيته (>0.5%) تثبت عوز أنزيمات السكريات الثنائية.",
    "tags": [
      "stool",
      "reducing-substances",
      "pediatric",
      "malabsorption"
    ]
  },
  {
    "id": "fecal_alpha_1_antitrypsin",
    "name": "Fecal Alpha-1-Antitrypsin (Protein-Losing Enteropathy)",
    "nameAr": "ألفا-1 أنتيتريبسين في البراز (اعتلال الأمعاء المفرط للبروتين)",
    "aliases": [
      "Fecal A1AT",
      "Protein Losing Enteropathy"
    ],
    "category": "stool",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "< 54",
        "unit": "mg/dL",
        "note": "Clearance < 27 mL/24h"
      },
      {
        "group": "Protein-Losing Enteropathy (PLE Diagnostic)",
        "value": "> 100",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Clearance >56 mL/24h confirms pathological mucosal protein loss (Menetrier disease, intestinal lymphangiectasia, Fontan operation)"
      }
    ],
    "significance": "AAT resists intestinal degradation. Fecal concentration and 24h intestinal clearance ([Stool AAT x Stool Volume] / Serum AAT) is the gold standard diagnostic test for Protein-Losing Enteropathy (PLE).",
    "significanceAr": "يقاوم أنزيمات الهضم؛ وتصفيته البرازية المعوية هي المعيار الذهبي لتشخيص اعتلال الأمعاء المضيع للبروتين (متلازمة مينيترييه، توسع اللمف معوياً، وبعد جراحة فونتان للقلب).",
    "tags": [
      "stool",
      "protein-losing-enteropathy",
      "ple",
      "albumin-loss"
    ]
  },
  {
    "id": "vancomycin_trough",
    "name": "Vancomycin Trough Concentration",
    "nameAr": "مستوى الفانكومايسين في القاع (قبل الجرعة)",
    "aliases": [
      "Vancomycin",
      "Vanc Trough",
      "فانكومايسين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Standard Non-Severe Infections Target",
        "value": "10.0 – 15.0",
        "unit": "µg/mL",
        "note": "Cellulitis, uncomplicated UTI"
      },
      {
        "group": "Severe / Serious Invasive Target (MRSA Bacteremia / Endocarditis / Osteo / Meningitis)",
        "value": "15.0 – 20.0",
        "unit": "µg/mL",
        "note": "Trough drawn within 30 min before the 4th dose at steady state"
      },
      {
        "group": "Toxic Trough (Nephrotoxicity Risk)",
        "value": "> 20.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Acute Kidney Injury risk increases dramatically above 20 µg/mL (especially with piperacillin/tazobactam)"
      }
    ],
    "significance": "Glycopeptide antibiotic targeting MRSA. Modern consensus guidelines recommend 24-hour AUC/MIC ratio of 400-600 rather than high troughs (>15-20) to minimize acute nephrotoxicity. Trough is drawn immediately prior to the 4th dose at steady state.",
    "significanceAr": "مضاد بكتيري للمكورات العنقودية المقاومة للميثيسيلين (MRSA). المستوى في القاع للإنتانات الخطيرة (الدم والقلب والعظم) 15-20 ميكروغرام/مل. تجاوزه 20 يرفع خطر الفشل الكلوي الحاد بنسبة كبيرة.",
    "tags": [
      "tdm",
      "vancomycin",
      "mrsa",
      "antibiotics",
      "nephrotoxicity"
    ]
  },
  {
    "id": "vancomycin_auc_mic_24h",
    "name": "Vancomycin 24-Hour AUC / MIC Ratio",
    "nameAr": "مساحة تحت المنحنى للفانكومايسين (AUC/MIC)",
    "aliases": [
      "Vanc AUC/MIC",
      "AUC24"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Optimal Therapeutic Target (Assuming MIC = 1 mg/L)",
        "value": "400 – 600",
        "unit": "mg*h/L",
        "note": "Maximizes clinical efficacy against MRSA while minimizing nephrotoxicity"
      },
      {
        "group": "Subtherapeutic (Treatment Failure Risk)",
        "value": "< 400",
        "unit": "mg*h/L"
      },
      {
        "group": "Nephrotoxic Risk Threshold",
        "value": "> 600 – 650",
        "unit": "mg*h/L",
        "alert": "critical_high",
        "note": "Significant increase in Acute Kidney Injury incidence"
      }
    ],
    "significance": "Preferred monitoring modality per current IDSA/ASHP consensus guidelines. Calculated via Bayesian dosing software or two post-distribution concentrations. Minimizes nephrotoxicity compared to traditional trough-guided dosing.",
    "significanceAr": "المعيار الحديث المعتمد من الجمعية الأمريكية للأمراض الإنتانية (IDSA). النطاق العلاجي 400-600؛ يحقق الشفاء السريري التام مع تجنب السمية الكلوية.",
    "tags": [
      "tdm",
      "vancomycin",
      "auc-mic",
      "idsa"
    ]
  },
  {
    "id": "gentamicin_trough",
    "name": "Gentamicin Trough Concentration",
    "nameAr": "مستوى الجنتاميسين في القاع (السمية الكلوية والأذنية)",
    "aliases": [
      "Gentamicin Trough",
      "Gent Trough",
      "جنتامايسين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Trough (Conventional Multiple Daily Dosing)",
        "value": "< 2.0",
        "unit": "µg/mL",
        "note": "Drawn immediately before next dose"
      },
      {
        "group": "Therapeutic Trough (Once-Daily Extended Interval Dosing)",
        "value": "< 1.0 (Undetectable preferred)",
        "unit": "µg/mL",
        "note": "Ensures complete drug clearance and 'washout period' to prevent tissue accumulation"
      },
      {
        "group": "Toxic Trough (Nephrotoxicity & Ototoxicity Alert)",
        "value": "> 2.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Drug accumulates in renal proximal tubules and inner ear vestibular/cochlear hair cells"
      }
    ],
    "significance": "Aminoglycoside displaying concentration-dependent bactericidal killing. Toxicity (acute tubular necrosis and irreversible cochlear/vestibular ototoxicity) is directly linked to elevated trough levels (>2 µg/mL) caused by tissue accumulation.",
    "significanceAr": "أمينوغليكوزيد قاتل للبكتيريا يعتمد على التركيز. سميته الكلوية وتلف دهليز وقوقعة الأذن غير العكوس يرتبطان مباشرة بارتفاع مستوى القاع (>2 ميكروغرام/مل) بسبب تراكمه النسجي.",
    "tags": [
      "tdm",
      "gentamicin",
      "aminoglycosides",
      "ototoxicity",
      "nephrotoxicity"
    ]
  },
  {
    "id": "gentamicin_peak",
    "name": "Gentamicin Peak Concentration",
    "nameAr": "مستوى الجنتاميسين في القمة (الفاعلية القاتلة)",
    "aliases": [
      "Gentamicin Peak",
      "Gent Peak"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Conventional Dosing Peak (30 min post-infusion)",
        "value": "5.0 – 10.0",
        "unit": "µg/mL",
        "note": "Synergy for Gram-positive endocarditis: 3-5 µg/mL; severe sepsis/pneumonia: 8-10 µg/mL"
      },
      {
        "group": "Once-Daily High-Dose Peak (Hartford Nomogram)",
        "value": "16.0 – 24.0",
        "unit": "µg/mL",
        "note": "Peak:MIC ratio ≥8-10 drives optimal concentration-dependent bacterial killing"
      }
    ],
    "significance": "Drawn 30 minutes following completion of IV infusion. Peak:MIC ratio of 8-10:1 optimizes concentration-dependent bacterial killing and post-antibiotic effect.",
    "significanceAr": "يسحب بعد 30 دقيقة من انتهاء التسريب الوريدي. تحقيق نسبة قمة إلى MIC تعادل 8-10 يحقق أقصى فاعلية قاتلة للبكتيريا سالبة الغرام.",
    "tags": [
      "tdm",
      "gentamicin",
      "peak"
    ]
  },
  {
    "id": "tobramycin_trough",
    "name": "Tobramycin Trough Concentration",
    "nameAr": "مستوى التوبراميسين في القاع",
    "aliases": [
      "Tobramycin Trough",
      "Tobra Trough"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Trough (Conventional Dosing)",
        "value": "< 2.0",
        "unit": "µg/mL"
      },
      {
        "group": "Therapeutic Trough (Once-Daily Dosing)",
        "value": "< 1.0",
        "unit": "µg/mL"
      },
      {
        "group": "Toxic Trough",
        "value": "> 2.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "High risk of aminoglycoside nephrotoxicity and ototoxicity"
      }
    ],
    "significance": "Aminoglycoside of choice for Pseudomonas aeruginosa infections. Monitored identically to gentamicin.",
    "significanceAr": "الأمينوغليكوزيد المفضل لمكافحة بكتيريا الزائفة الزنجارية (Pseudomonas). يراقب كالجنتاميسين لتجنب الفشل الكلوي وفقدان السمع.",
    "tags": [
      "tdm",
      "tobramycin",
      "pseudomonas"
    ]
  },
  {
    "id": "amikacin_trough_peak",
    "name": "Amikacin Trough & Peak Levels",
    "nameAr": "مستويات الأميكاسين في القاع والقمة",
    "aliases": [
      "Amikacin",
      "Amikin"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Trough Target",
        "value": "< 5.0 – 10.0",
        "unit": "µg/mL",
        "note": "<5.0 µg/mL preferred to avoid nephrotoxicity"
      },
      {
        "group": "Conventional Peak Target (30 min post-infusion)",
        "value": "20.0 – 35.0",
        "unit": "µg/mL"
      },
      {
        "group": "Once-Daily Extended Interval Peak",
        "value": "55.0 – 65.0",
        "unit": "µg/mL"
      },
      {
        "group": "Critical High Toxic Trough",
        "value": "> 10.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Severe renal and cochlear toxicity risk"
      }
    ],
    "significance": "Semisynthetic aminoglycoside resistant to most aminoglycoside-inactivating enzymes. Broadest spectrum against multidrug-resistant Gram-negative rods and mycobacteria. Toxic trough >10 µg/mL.",
    "significanceAr": "أوسع الأمينوغليكوزيدات طيفاً ومقاوم لإنزيمات البكتيريا المعطلة. يعالج بكتيريا المستشفيات الشرسة والمتفطرات. تجاوزه 10 في القاع يسبب سمية كلوية وسمعية حادة.",
    "tags": [
      "tdm",
      "amikacin",
      "mdr",
      "aminoglycosides"
    ]
  },
  {
    "id": "phenytoin_total",
    "name": "Phenytoin Total (Dilantin)",
    "nameAr": "الفينيتوين الكلي (ديلانتين / مضاد الصرع)",
    "aliases": [
      "Phenytoin",
      "Dilantin",
      "Diphenylhydantoin",
      "فينيتوين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Range Adults",
        "value": "10.0 – 20.0",
        "unit": "µg/mL",
        "note": "40 – 80 µmol/L (zero-order Michaelis-Menten non-linear pharmacokinetics)"
      },
      {
        "group": "Subtherapeutic (Seizure Breakthrough Risk)",
        "value": "< 10.0",
        "unit": "µg/mL"
      },
      {
        "group": "Toxic Level (Nystagmus Emergence)",
        "value": "20.0 – 30.0",
        "unit": "µg/mL",
        "note": "Lateral gaze nystagmus appears"
      },
      {
        "group": "Moderate Toxicity (Ataxia & Slurred Speech)",
        "value": "30.0 – 40.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Prominent cerebellar ataxia, diplopia, dysarthria"
      },
      {
        "group": "Severe Lethal Toxicity (Coma & Seizures)",
        "value": "> 40.0 – 50.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Lethargy, stupor, paradoxical seizures, coma, circulatory collapse"
      }
    ],
    "significance": "Exhibits non-linear Michaelis-Menten elimination pharmacokinetics (saturation of hepatic enzymes causes small dose increments to trigger massive, disproportionate surges in blood levels). Roughly 90% bound to albumin. In hypoalbuminemia or uremia, use the Sheiner-Tozer equation or measure Free Phenytoin directly.",
    "significanceAr": "مضاد صرع ذو حركية دوائية غير خطية مشبعة (أي زيادة طفيفة بالجرعة تقفز بالمستوى لمرحلة التسمم). 90% منه مرتبط بالألبومين؛ وفي نقص الألبومين أو اليوريميا يجب قياس الفينيتوين الحر.",
    "tags": [
      "tdm",
      "phenytoin",
      "epilepsy",
      "anticonvulsant",
      "toxicology"
    ]
  },
  {
    "id": "phenytoin_free",
    "name": "Phenytoin Free (Unbound Fraction)",
    "nameAr": "الفينيتوين الحر (الجزء غير المرتبط)",
    "aliases": [
      "Free Phenytoin",
      "Unbound Phenytoin"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Range",
        "value": "1.0 – 2.0",
        "unit": "µg/mL",
        "note": "Exactly 10% of total level; unaffected by albumin fluctuations"
      },
      {
        "group": "Toxic Level",
        "value": "> 2.5",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "True central nervous system toxicity"
      }
    ],
    "significance": "Biologically active fraction. Essential in patients with hypoalbuminemia (cirrhosis, nephrosis, critical illness) or end-stage renal disease where total phenytoin falsely underestimates active drug.",
    "significanceAr": "الجزء الحر الفعال عصبياً (10% من الكلي). لا غنى عنه لمرضى نقص ألبومين الدم والفشل الكلوي حيث يعطي الفينيتوين الكلي قراءة خادعة.",
    "tags": [
      "tdm",
      "free-phenytoin",
      "neurology"
    ]
  },
  {
    "id": "carbamazepine_total",
    "name": "Carbamazepine Total (Tegretol)",
    "nameAr": "الكاربامازيبين (تجريتول)",
    "aliases": [
      "Carbamazepine",
      "Tegretol",
      "كاربامازيبين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Range Adults",
        "value": "4.0 – 12.0",
        "unit": "µg/mL",
        "note": "17 – 51 µmol/L"
      },
      {
        "group": "Subtherapeutic",
        "value": "< 4.0",
        "unit": "µg/mL"
      },
      {
        "group": "Toxic Level",
        "value": "> 12.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Ataxia, diplopia, nystagmus, dizziness, SIADH hyponatremia"
      },
      {
        "group": "Severe Toxicity",
        "value": "> 20.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Coma, respiratory depression, seizures, conduction blocks"
      }
    ],
    "significance": "Anticonvulsant and mood stabilizer (also first-line for Trigeminal Neuralgia). Induces its own hepatic metabolism (autoinduction over 3-5 weeks). Causes SIADH (hyponatremia), aplastic anemia, agranulocytosis, and Stevens-Johnson syndrome (screen for HLA-B*1502 in Asians).",
    "significanceAr": "مضاد صرع والعلاج الأول لألم العصب ثلاثي التوائم. يحث استقلاب نفسه كبدياً خلال أسابيع. يسبب نقص الصوديوم (SIADH) ونادراً نضوب النخاع ومتلازمة ستيفنز جونسون.",
    "tags": [
      "tdm",
      "carbamazepine",
      "tegretol",
      "trigeminal-neuralgia",
      "epilepsy"
    ]
  },
  {
    "id": "valproic_acid_total",
    "name": "Valproic Acid Total (Depakote)",
    "nameAr": "حمض الفالبرويك (ديباكين / ديباكوت)",
    "aliases": [
      "Valproate",
      "Valproic Acid",
      "Depakote",
      "ديباكين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Range (Epilepsy)",
        "value": "50 – 100",
        "unit": "µg/mL",
        "note": "350 – 700 µmol/L"
      },
      {
        "group": "Therapeutic Range (Acute Mania / Bipolar)",
        "value": "50 – 125",
        "unit": "µg/mL"
      },
      {
        "group": "Toxic Level",
        "value": "> 100 – 150",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Tremor, sedation, thrombocytopenia, hyperammonemia, pancreatitis"
      },
      {
        "group": "Severe Toxicity / Overdose",
        "value": "> 175 – 200",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Hyperammonemic encephalopathy (treat with L-carnitine), cerebral edema, coma, metabolic acidosis"
      }
    ],
    "significance": "Broad-spectrum anticonvulsant and mood stabilizer. Highly bound to albumin (~90%). Causes dose-dependent thrombocytopenia, weight gain, alopecia, hyperammonemic encephalopathy (with normal liver enzymes; treat with IV L-carnitine), pancreatitis, and fatal teratogenicity (neural tube defects).",
    "significanceAr": "مضاد صرع واسع الطيف ومثبت مزاج. يسبب نقص الصفائح والتهاب البنكرياس واعتلال الدماغ بفرط الأمونيا (يعالج بـ L-carnitine) وتشوهات الأنبوب العصبي للأجنة.",
    "tags": [
      "tdm",
      "valproate",
      "depakote",
      "epilepsy",
      "hyperammonemia",
      "toxicology"
    ]
  },
  {
    "id": "phenobarbital_serum",
    "name": "Phenobarbital Serum Concentration",
    "nameAr": "الفينوباربيتال في المصل",
    "aliases": [
      "Phenobarbital",
      "Luminal",
      "فينوباربيتال"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Range Adults",
        "value": "15.0 – 40.0",
        "unit": "µg/mL",
        "note": "65 – 172 µmol/L"
      },
      {
        "group": "Toxic Level",
        "value": "> 40.0 – 50.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Sedation, ataxia, respiratory depression, hypothermia, coma; treat with urine alkalinization"
      }
    ],
    "significance": "Long-acting barbiturate enhancing GABA-A receptor opening duration. Very long half-life (~100 hours). Overdose causes profound central nervous system depression; treated with urine alkalinization (IV sodium bicarbonate) to enhance renal ionization and clearance.",
    "significanceAr": "باربيتورات طويل المفعول نصف عمره 100 ساعة. تسممه يسبب تثبيط التنفس والغيبوبة؛ ويعالج بقلوطة البول ببيكربونات الصوديوم لتسريع طرحه.",
    "tags": [
      "tdm",
      "phenobarbital",
      "barbiturate",
      "toxicology"
    ]
  },
  {
    "id": "levetiracetam_keppra",
    "name": "Levetiracetam (Keppra)",
    "nameAr": "ليفيتيراسيتام (كيبرا)",
    "aliases": [
      "Keppra",
      "Levetiracetam",
      "كيبرا"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Reference Range",
        "value": "12.0 – 46.0",
        "unit": "µg/mL",
        "note": "Binds SV2A synaptic vesicle protein"
      },
      {
        "group": "Toxic Level",
        "value": "> 50.0",
        "unit": "µg/mL",
        "note": "Somnolence, behavioral agitation, aggression, psychosis"
      }
    ],
    "significance": "Binds synaptic vesicle protein SV2A. Linear pharmacokinetics with 66% renally eliminated unchanged. Low protein binding (<10%). Wide therapeutic margin; TDM helpful in pregnancy and renal impairment.",
    "significanceAr": "مضاد صرع حديث يرتبط ببروتين الحويصلات المشبكية SV2A. يطرح كلوياً ويتميز بقلة التداخلات الدوائية وهو آمن نسبياً.",
    "tags": [
      "tdm",
      "keppra",
      "levetiracetam",
      "epilepsy"
    ]
  },
  {
    "id": "lamotrigine_lamictal",
    "name": "Lamotrigine (Lamictal)",
    "nameAr": "اللاموتريجين (لاميكتال)",
    "aliases": [
      "Lamotrigine",
      "Lamictal",
      "لاموتريجين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Range",
        "value": "3.0 – 14.0",
        "unit": "µg/mL",
        "note": "Bipolar disorder target: 3-5 µg/mL; epilepsy target: 5-14 µg/mL"
      },
      {
        "group": "Toxic Level",
        "value": "> 15.0 – 20.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Ataxia, dizziness, Stevens-Johnson Syndrome (SJS/TEN) risk if titrated rapidly"
      }
    ],
    "significance": "Voltage-gated sodium channel blocker. Cleared by glucuronidation. Valproic acid dramatically inhibits its clearance (doubles its half-life; cut lamotrigine dose by 50% to prevent fatal Stevens-Johnson syndrome). Oral contraceptives induce its clearance (drop levels by 50%).",
    "significanceAr": "مضاد صرع ومثبت مزاج. الفالبروات يضاعف مستواه ويزيد خطر متلازمة ستيفنز جونسون القاتلة (يجب تخفيض جرعته للنصف). وموانع الحمل تخفض مستواه للنصف.",
    "tags": [
      "tdm",
      "lamotrigine",
      "sjs",
      "epilepsy",
      "bipolar"
    ]
  },
  {
    "id": "lithium_serum",
    "name": "Serum Lithium Carbonate",
    "nameAr": "الليثيوم في المصل (مضاد الهوس والاكتئاب ثنائي القطب)",
    "aliases": [
      "Lithium",
      "Li",
      "ليثيوم"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Acute Mania Therapeutic Target",
        "value": "0.8 – 1.2",
        "unit": "mEq/L",
        "note": "Drawn exactly 12 hours post-evening dose at steady state (Day 5)"
      },
      {
        "group": "Long-Term Bipolar Maintenance Target",
        "value": "0.6 – 0.8",
        "unit": "mEq/L",
        "note": "Elderly target: 0.4 – 0.6 mEq/L"
      },
      {
        "group": "Mild to Moderate Toxicity",
        "value": "1.5 – 2.0",
        "unit": "mEq/L",
        "alert": "critical_high",
        "note": "Coarse hand tremor, vomiting, diarrhea, ataxia, dysarthria"
      },
      {
        "group": "Severe Toxicity (Emergency)",
        "value": "2.0 – 2.5",
        "unit": "mEq/L",
        "alert": "critical_high",
        "note": "Hyperreflexia, clonus, seizures, delirium, nephrogenic diabetes insipidus"
      },
      {
        "group": "Life-Threatening Toxicity (Hemodialysis Indication)",
        "value": "> 2.5 (or >4.0 in chronic)",
        "unit": "mEq/L",
        "alert": "critical_high",
        "note": "Coma, cardiovascular collapse; mandatory indication for Emergent Hemodialysis"
      }
    ],
    "significance": "Gold standard mood stabilizer for Bipolar Disorder. Narrow therapeutic index. Exclusively renally eliminated (competes with sodium in proximal tubule; NSAIDs, ACEi/ARBs, and thiazides decrease clearance, causing lethal toxicity). Drawn EXACTLY 12 hours post-dose. Toxicity >2.5 mEq/L requires urgent hemodialysis.",
    "significanceAr": "المعيار الذهبي لعلاج اضطراب ثنائي القطب. نافذته العلاجية ضيقة جداً ويطرح كلوياً بالكامل. أدوية البروفين ومدرات الثيازيد تمنع طرحه وتسبب تسمماً قاتلاً. المستوى >2.5 يستدعي غسيل الكلى الإسعافي.",
    "tags": [
      "tdm",
      "lithium",
      "bipolar",
      "psychiatry",
      "toxicology",
      "hemodialysis"
    ]
  },
  {
    "id": "clozapine_serum",
    "name": "Clozapine & Norclozapine (Clozaril)",
    "nameAr": "الكلوزابين في المصل (مضاد الذهان المقاوم)",
    "aliases": [
      "Clozapine",
      "Clozaril",
      "كلوزابين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Trough Target",
        "value": "350 – 600",
        "unit": "ng/mL",
        "note": "Threshold for clinical antipsychotic response in treatment-resistant schizophrenia"
      },
      {
        "group": "Toxic Level (Seizure Risk)",
        "value": "> 1000",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Dramatically lowers seizure threshold; myoclonus, severe sedation, bowel obstruction"
      }
    ],
    "significance": "Most effective antipsychotic for treatment-resistant schizophrenia and reducing suicide risk. Monitored alongside Absolute Neutrophil Count (ANC mandatory registry monitoring due to 1-2% risk of fatal agranulocytosis).",
    "significanceAr": "أقوى مضادات الذهان لعلاج الفصام المعند. يراقب مع تحليل العدلات ANC الإلزامي لخطر نضوب الحبيبات القاتل (Agranulocytosis). تجاوزه 1000 يسبب نوبات صرع.",
    "tags": [
      "tdm",
      "clozapine",
      "schizophrenia",
      "agranulocytosis",
      "psychiatry"
    ]
  },
  {
    "id": "haloperidol_serum",
    "name": "Haloperidol (Haldol)",
    "nameAr": "الهالوبيريدول (هالدول)",
    "aliases": [
      "Haloperidol",
      "Haldol",
      "هالدول"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Window",
        "value": "5.0 – 15.0",
        "unit": "ng/mL"
      },
      {
        "group": "Toxicity (Extrapyramidal / Neuroleptic Malignant Syndrome Risk)",
        "value": "> 20.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Severe parkinsonism, acute dystonia, tardive dyskinesia, QTc prolongation, NMS"
      }
    ],
    "significance": "High-potency first-generation butyrophenone antipsychotic. D2 dopamine receptor blocker. High levels precipitate severe extrapyramidal symptoms, QTc prolongation / Torsades, and Neuroleptic Malignant Syndrome (NMS).",
    "significanceAr": "مضاد ذهان تقليدي قوي يغلق مستقبلات D2. سميته تسبب الأعراض خارج الهرمية الحادة وتطاول QT ومتلازمة الخباثة المهدئة العصبية (NMS).",
    "tags": [
      "tdm",
      "haloperidol",
      "antipsychotic",
      "nms"
    ]
  },
  {
    "id": "cyclosporine_trough_c0",
    "name": "Cyclosporine Trough Concentration (C0)",
    "nameAr": "مستوى السيكلوسبورين في القاع (C0)",
    "aliases": [
      "Cyclosporine",
      "CsA",
      "Neoral",
      "سيكلوسبورين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Kidney Transplant (Early 1-3 Months)",
        "value": "200 – 350",
        "unit": "ng/mL"
      },
      {
        "group": "Kidney Transplant (Maintenance >6 Months)",
        "value": "100 – 200",
        "unit": "ng/mL"
      },
      {
        "group": "Bone Marrow / GVHD Prophylaxis",
        "value": "150 – 250",
        "unit": "ng/mL"
      },
      {
        "group": "Toxic Trough (Nephrotoxicity & Microangiopathy)",
        "value": "> 400",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Afferent arteriolar vasoconstriction, irreversible interstitial fibrosis, TMA, hypertension, tremor"
      }
    ],
    "significance": "Calcineurin inhibitor immunosuppressant. Whole blood EDTA must be used (not serum, as cyclosporine partitions into erythrocytes). Severe dose-dependent nephrotoxicity, hypertension, gingival hyperplasia, and hirsutism.",
    "significanceAr": "مثبط كالسينيورين لمنع رفض الأعضاء المزروعة. يقاس في الدم الكامل (EDTA) حصراً. سميته تسبب تضيق شرايين الكلى وتليفها وارتفاع الضغط وضخامة اللثة.",
    "tags": [
      "tdm",
      "cyclosporine",
      "transplant",
      "immunosuppression",
      "nephrotoxicity"
    ]
  },
  {
    "id": "cyclosporine_2h_c2",
    "name": "Cyclosporine 2-Hour Post-Dose (C2 Monitoring)",
    "nameAr": "مستوى السيكلوسبورين بعد ساعتين (C2)",
    "aliases": [
      "Cyclosporine C2",
      "C2 Monitoring"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Kidney Transplant (Early Month 1-2)",
        "value": "1500 – 2000",
        "unit": "ng/mL"
      },
      {
        "group": "Kidney Transplant (Maintenance)",
        "value": "800 – 1000",
        "unit": "ng/mL"
      }
    ],
    "significance": "Drawn exactly 2 hours (±15 min) after morning microemulsion dose. Correlates far better with AUC0-4 absorption and clinical rejection rates than trough C0.",
    "significanceAr": "يسحب بعد ساعتين بالضبط من الجرعة الصباحية. يعكس امتصاص الدواء بدقة تفوق فحص القاع C0 ويمنع رفض الكلية المزروعة.",
    "tags": [
      "tdm",
      "cyclosporine",
      "c2-monitoring",
      "transplant"
    ]
  },
  {
    "id": "tacrolimus_trough",
    "name": "Tacrolimus Trough Concentration (FK506)",
    "nameAr": "مستوى التاكروليموس في القاع (FK506 / مانع الرفض)",
    "aliases": [
      "Tacrolimus",
      "FK506",
      "Prograf",
      "تاكروليموس"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Kidney/Liver Transplant (Early Month 1-3)",
        "value": "8.0 – 12.0",
        "unit": "ng/mL",
        "note": "Drawn immediately prior to morning dose in whole blood EDTA"
      },
      {
        "group": "Long-Term Maintenance Target (>6 Months)",
        "value": "5.0 – 8.0",
        "unit": "ng/mL",
        "note": "Lower target minimizes nephrotoxicity while maintaining graft tolerance"
      },
      {
        "group": "Subtherapeutic (Graft Rejection Alert)",
        "value": "< 5.0",
        "unit": "ng/mL",
        "note": "High risk of acute cellular allograft rejection"
      },
      {
        "group": "Toxic Trough (Nephrotoxicity / Neurotoxicity / Post-Transplant DM)",
        "value": "> 15.0 – 20.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "AKI, tremors, seizures, posterior reversible encephalopathy syndrome (PRES), diabetes"
      }
    ],
    "significance": "Calcineurin inhibitor 10-100 times more potent than cyclosporine. Cornerstone of modern kidney, liver, and heart transplantation. Whole blood EDTA mandatory. Toxicity manifests as afferent arteriolar nephrotoxicity, neurotoxicity (tremor, headache, PRES), new-onset diabetes after transplantation (NODAT), and opportunistic infections (BK virus nephropathy, CMV).",
    "significanceAr": "مثبط الكالسينيورين الأساسي في زراعة الكلى والكبد والقلب. يقاس في الدم الكامل EDTA. المستوى المستهدف 8-12 في الأشهر الأولى ثم 5-8. تجاوزه 15 يسبب فشلاً كلوياً وداء السكري ورعاشاً دماغياً.",
    "tags": [
      "tdm",
      "tacrolimus",
      "fk506",
      "transplant",
      "immunosuppression",
      "kidney-transplant"
    ]
  },
  {
    "id": "sirolimus_trough",
    "name": "Sirolimus Trough Concentration (Rapamycin)",
    "nameAr": "مستوى السيروليموس في القاع (رابامايسين)",
    "aliases": [
      "Sirolimus",
      "Rapamycin",
      "Rapamune"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Trough (With Calcineurin Inhibitor)",
        "value": "4.0 – 10.0",
        "unit": "ng/mL"
      },
      {
        "group": "Therapeutic Trough (Without Calcineurin Inhibitor)",
        "value": "10.0 – 15.0",
        "unit": "ng/mL"
      },
      {
        "group": "Toxic Trough",
        "value": "> 15.0 – 20.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Hypertriglyceridemia, thrombocytopenia, leukopenia, impaired wound healing, interstitial pneumonitis"
      }
    ],
    "significance": "mTOR inhibitor. Non-nephrotoxic alternative to calcineurin inhibitors, but impairs surgical wound healing and causes hyperlipidemia, bone marrow suppression, and non-infectious pneumonitis.",
    "significanceAr": "مثبط لأنزيم mTOR ولا يضر الكلى كالسيكلوسبورين. لكنه يعطل التئام الجروح الجراحية ويسبب ارتفاع الدهون الثلاثية ونقص الصفائح والتهاب الرئة الخلالي.",
    "tags": [
      "tdm",
      "sirolimus",
      "rapamycin",
      "transplant",
      "mtor"
    ]
  },
  {
    "id": "mycophenolic_acid_mpa",
    "name": "Mycophenolic Acid Trough (MPA / CellCept)",
    "nameAr": "حمض المايكوفينوليك (سيلسيبت)",
    "aliases": [
      "MPA",
      "Mycophenolate",
      "CellCept"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Trough Target",
        "value": "1.0 – 3.5",
        "unit": "µg/mL",
        "note": "Corresponds to 12h AUC of 30 – 60 mg*h/L"
      },
      {
        "group": "Subtherapeutic (Rejection Risk)",
        "value": "< 1.0",
        "unit": "µg/mL"
      },
      {
        "group": "Toxic Level (Leukopenia / Severe Diarrhea)",
        "value": "> 4.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Severe neutropenia, opportunistic infections, intractable secretory diarrhea"
      }
    ],
    "significance": "Inhibits inosine monophosphate dehydrogenase (IMPDH), selectively blocking de novo guanine nucleotide synthesis in lymphocytes. High levels cause leukopenia and severe gastrointestinal ulceration/diarrhea.",
    "significanceAr": "يثبط تصنيع البيورينات باللمفاويات لمنع رفض الطعم. ارتفاعه فوق 4 يسبب هبوطاً حاداً في كريات الدم البيضاء وإسهالاً مزمناً شديداً.",
    "tags": [
      "tdm",
      "mycophenolate",
      "cellcept",
      "transplant",
      "lupus-nephritis"
    ]
  },
  {
    "id": "digoxin_serum",
    "name": "Serum Digoxin Concentration",
    "nameAr": "مستوى الديجوكسين في المصل (السمية القلبية)",
    "aliases": [
      "Digoxin",
      "Lanoxin",
      "ديجوكسين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Heart Failure Optimal Target (DIG Trial Update)",
        "value": "0.5 – 0.9",
        "unit": "ng/mL",
        "note": "Targeting 0.5-0.9 ng/mL reduces HF hospitalization without mortality risk (>1.0 increases mortality)"
      },
      {
        "group": "Atrial Fibrillation Rate Control Target",
        "value": "0.8 – 1.5",
        "unit": "ng/mL"
      },
      {
        "group": "Toxic Level (Digoxin Toxicity Threshold)",
        "value": "> 2.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Drawn at least 6-8 hours post-dose to allow tissue distribution; nausea, yellow-green halos (xanthopsia), bidirectional VT, AV block"
      },
      {
        "group": "Life-Threatening Toxicity",
        "value": "> 4.0 – 5.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Refractory hyperkalemia and ventricular arrhythmias; administer Digoxin Immune Fab (DigiFab)"
      }
    ],
    "significance": "Cardiac glycoside inhibiting myocardial Na+/K+-ATPase. Must be drawn ≥6-8 hours after dose to allow post-distribution tissue equilibration. HYPOKALEMIA and HYPOMAGNESEMIA markedly potentiate digoxin toxicity even at 'normal' blood levels. Toxicity features nausea, vomiting, yellow-green visual halos (xanthopsia), and fatal arrhythmias (bidirectional ventricular tachycardia, junctional tachycardia, complete heart block). Hyperkalemia in acute toxicity is an indication for Digoxin-specific Fab fragments (DigiFab).",
    "significanceAr": "مثبط مضخة الصوديوم والبوتاسيوم في عضلة القلب. الهدف في قصور القلب 0.5-0.9 نانوغرام. نقص البوتاسيوم والمغنيسيوم يضاعف سميته القاتلة حتى مع قيم طبيعية. تسممه يسبب رؤية هالات صفراء وخضراء واضطراب نظم بطيني قاتل يعالج بالترياق النوعي (DigiFab).",
    "tags": [
      "tdm",
      "digoxin",
      "heart-failure",
      "atrial-fibrillation",
      "toxicity",
      "arrhythmia"
    ]
  },
  {
    "id": "amiodarone_serum",
    "name": "Amiodarone & Desethylamiodarone",
    "nameAr": "الأميودارون في المصل",
    "aliases": [
      "Amiodarone",
      "Cordarone",
      "أميودارون"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Range",
        "value": "1.0 – 2.5",
        "unit": "µg/mL"
      },
      {
        "group": "Toxic Level (>2.5 µg/mL)",
        "value": "> 2.5",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "High risk of pulmonary toxicity (fibrosis), thyroiditis (hypo/hyperthyroidism), hepatotoxicity, corneal microdeposits"
      }
    ],
    "significance": "Class III antiarrhythmic with iodine-rich structure. Extremely long half-life (~50-100 days). High concentrations associate with pulmonary fibrosis, thyroid dysfunction (contains 37% iodine by weight), and hepatotoxicity.",
    "significanceAr": "مضاد لاضطراب النظم قلبي يحوي اليود ونصف عمره 50-100 يوم. سميته تسبب تليفاً رئوياً مميتاً واضطرابات درقية حادة وتكلس القرنية.",
    "tags": [
      "tdm",
      "amiodarone",
      "antiarrhythmic",
      "pulmonary-fibrosis"
    ]
  },
  {
    "id": "theophylline_serum",
    "name": "Serum Theophylline (Aminophylline)",
    "nameAr": "الثيوفيلين في المصل (موسع القصبات)",
    "aliases": [
      "Theophylline",
      "Aminophylline",
      "ثيوفيلين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Adult Asthma / COPD Target",
        "value": "10.0 – 15.0",
        "unit": "µg/mL",
        "note": "55 – 82 µmol/L (former range 10-20 narrowed due to toxicity)"
      },
      {
        "group": "Neonatal Apnea of Prematurity Target",
        "value": "5.0 – 10.0",
        "unit": "µg/mL"
      },
      {
        "group": "Toxic Level (Seizures & Tachyarrhythmias)",
        "value": "> 20.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Intractable seizures resistant to anticonvulsants, multifocal atrial tachycardia, ventricular tachycardia"
      },
      {
        "group": "Severe Overdose (Dialysis Candidate)",
        "value": "> 30.0 (Chronic) / > 80.0 (Acute)",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Emergent charcoal hemoperfusion or hemodialysis indicated"
      }
    ],
    "significance": "Methylxanthine phosphodiesterase inhibitor and adenosine receptor antagonist. Narrow therapeutic window. Clearance inhibited by ciprofloxacin, erythromycin, cimetidine, and CHF. Toxicity causes intractable seizures, hypokalemia, and fatal ventricular arrhythmias; treat with charcoal hemoperfusion or hemodialysis.",
    "significanceAr": "موسع قصبات مشتق من الميثيل زانثين ذو نافذة علاجية ضيقة جداً. أدوية السيبروفلوكساسين والإريثروميسين ترفع مستواه للسمية مسببة نوبات صرع مستعصية وتسارع قلب بطيني يعالج بغسيل الكلى.",
    "tags": [
      "tdm",
      "theophylline",
      "asthma",
      "copd",
      "toxicology",
      "seizures"
    ]
  },
  {
    "id": "voriconazole_trough",
    "name": "Voriconazole Trough Concentration",
    "nameAr": "مستوى الفوريكونازول في القاع (مضاد الفطريات)",
    "aliases": [
      "Voriconazole",
      "Vfend",
      "فوريكونازول"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Target (Invasive Aspergillosis)",
        "value": "1.5 – 5.0",
        "unit": "µg/mL",
        "note": "Drawn at steady state on Day 4-5 before morning dose"
      },
      {
        "group": "Subtherapeutic (Breakthrough Fungal Infection Risk)",
        "value": "< 1.0 – 1.5",
        "unit": "µg/mL"
      },
      {
        "group": "Neurotoxicity & Hepatotoxicity Threshold",
        "value": "> 5.5 – 6.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Visual hallucinations, altered mental status, severe cholestatic transaminitis, QTc prolongation"
      }
    ],
    "significance": "First-line azole antifungal for Invasive Aspergillosis. Non-linear saturable pharmacokinetics metabolized by polymorphic CYP2C19. Trough >5.5 µg/mL directly causes visual hallucinations, encephalopathy, and severe hepatotoxicity. Trough <1.5 µg/mL predicts treatment failure.",
    "significanceAr": "مضاد الفطريات الأول لداء الرشاشيات الغازي (Aspergillus). حركيته غير خطية؛ هبوطه دون 1.5 يفشل العلاج، وتجاوزه 5.5 يسبب هلوسات بصرية وتسمماً كبدياً حاداً.",
    "tags": [
      "tdm",
      "voriconazole",
      "antifungal",
      "aspergillosis",
      "cyp2c19"
    ]
  },
  {
    "id": "methotrexate_level_rescue",
    "name": "Methotrexate Level (High-Dose MTX Leucovorin Rescue)",
    "nameAr": "مستوى الميثوتريكسات (بروتوكول الإنقاذ باللوكوفورين)",
    "aliases": [
      "Methotrexate Level",
      "MTX TDM"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "24-Hour Post-Infusion Safe Target",
        "value": "< 5.0 – 10.0",
        "unit": "µmol/L"
      },
      {
        "group": "48-Hour Leucovorin Decision Cutoff",
        "value": "< 0.50 – 1.00",
        "unit": "µmol/L",
        "note": ">1.0 µmol/L at 48h mandates increased Leucovorin rescue dose and vigorous IV hydration"
      },
      {
        "group": "72-Hour Safe Clearance Threshold",
        "value": "< 0.10",
        "unit": "µmol/L",
        "note": "Leucovorin can be safely stopped when MTX drops <0.05-0.1 µmol/L"
      },
      {
        "group": "Delayed Clearance / High Toxicity Crisis",
        "value": "> 5.0 at 48h",
        "unit": "µmol/L",
        "alert": "critical_high",
        "note": "High risk of acute renal failure, bone marrow aplasia; administer Glucarpidase (Voraxaze)"
      }
    ],
    "significance": "Folate antimetabolite used in high-dose oncology regimens (osteosarcoma, ALL, CNS lymphoma). Cleared renally; precipitates in renal tubules at acidic pH causing crystalline nephropathy. Monitored strictly at 24, 48, and 72 hours to calibrate Leucovorin (folinic acid) rescue doses. Glucarpidase is the specific antidote for acute renal failure with toxic delayed clearance.",
    "significanceAr": "علاج كيماوي يعطل الفولات. يترسب في كبيبات الكلى مسبباً قصوراً كلوياً. يراقب كل 24 و48 و72 ساعة لتعديل جرعة الترياق (اللوكوفورين). عند فشل إطراحه يعطى أنزيم Glucarpidase الإسعافي.",
    "tags": [
      "tdm",
      "methotrexate",
      "oncology",
      "leucovorin-rescue",
      "glucarpidase"
    ]
  },
  {
    "id": "acetaminophen_serum_level",
    "name": "Acetaminophen Level (Rumack-Matthew Nomogram)",
    "nameAr": "مستوى الباراسيتامول في المصل (مخطط روماك-ماثيو للتسمم الكبدي)",
    "aliases": [
      "Acetaminophen",
      "Paracetamol",
      "APAP",
      "باراسيتامول"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Analgesic Level",
        "value": "10.0 – 30.0",
        "unit": "µg/mL",
        "note": "66 – 199 µmol/L"
      },
      {
        "group": "4-Hour Post-Ingestion Treatment Line (Rumack-Matthew)",
        "value": "≥ 150.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Mandatory immediate administration of N-Acetylcysteine (NAC) to prevent fatal hepatic necrosis"
      },
      {
        "group": "8-Hour Treatment Line",
        "value": "≥ 75.0",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Treatment threshold at 8h post-ingestion"
      },
      {
        "group": "12-Hour Treatment Line",
        "value": "≥ 37.5",
        "unit": "µg/mL",
        "alert": "critical_high",
        "note": "Treatment threshold at 12h post-ingestion"
      }
    ],
    "significance": "Single ingestion toxicity is evaluated using the 4-hour Rumack-Matthew nomogram (valid only between 4 and 24 hours post-acute ingestion). Levels above the 150 µg/mL treatment line at 4 hours require immediate IV or oral N-Acetylcysteine (NAC) to replenish glutathione and detoxify the reactive metabolite NAPQI, preventing fatal acute liver failure.",
    "significanceAr": "يقاس بدقة بعد 4 ساعات من بلع الجرعة السامة على منحنى روماك-ماثيو. تجاوز مستوى 150 ميكروغرام/مل عند الساعة الرابعة يستدعي البدء الفوري بمضاد التسمم N-Acetylcysteine (NAC) لإنقاذ الكبد من النخر الصاعق.",
    "tags": [
      "tdm",
      "toxicology",
      "acetaminophen",
      "paracetamol",
      "antidote",
      "nac",
      "liver-failure"
    ]
  },
  {
    "id": "salicylate_serum_aspirin",
    "name": "Serum Salicylate (Aspirin Toxicity)",
    "nameAr": "مستوى الساليسيلات في المصل (تسمم الأسبرين)",
    "aliases": [
      "Salicylate",
      "Aspirin Level",
      "أسبرين"
    ],
    "category": "tdm",
    "ranges": [
      {
        "group": "Therapeutic Anti-Inflammatory Level",
        "value": "15.0 – 30.0",
        "unit": "mg/dL",
        "note": "150 – 300 mg/L"
      },
      {
        "group": "Mild Toxicity (Tinnitus, Tachypnea, Nausea)",
        "value": "30.0 – 50.0",
        "unit": "mg/dL",
        "note": "Respiratory alkalosis with high anion gap metabolic acidosis"
      },
      {
        "group": "Moderate to Severe Toxicity (Urine Alkalinization Trigger)",
        "value": "50.0 – 80.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Initiate IV sodium bicarbonate to alkalinize urine (target urine pH 7.5 - 8.0)"
      },
      {
        "group": "Severe Lethal Toxicity (Hemodialysis Mandatory)",
        "value": "> 80.0 – 100.0 (or >60 with acidosis/altered mental status)",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Emergent hemodialysis mandatory"
      }
    ],
    "significance": "Uncouples oxidative phosphorylation and directly stimulates the medullary respiratory center. Classic mixed acid-base disorder: primary Respiratory Alkalosis with primary High Anion Gap Metabolic Acidosis. Treatment: aggressive IV sodium bicarbonate to alkalinize urine (pH 7.5-8.0) promoting ion-trapping and renal clearance. Hemodialysis indicated at >80-100 mg/dL or with severe neurotoxicity.",
    "significanceAr": "يفصل الفسفرة التأكسدية ويهيج مركز التنفس؛ مسبباً الاضطراب المختلط الشهير: قلاء تنفسي مع حماض استقلابي بفجوة أنيونية. يعالج بقلوطة البول بالبيكربونات لطرده كلوياً؛ وتستوجب المستويات >80 مجم/دل غسيل الكلى الإسعافي.",
    "tags": [
      "tdm",
      "toxicology",
      "salicylate",
      "aspirin",
      "acid-base",
      "hemodialysis"
    ]
  },
  {
    "id": "hiv_4th_gen_ag_ab",
    "name": "HIV-1/2 Antigen/Antibody 4th Generation Combo",
    "nameAr": "فحص الإيدز الجيل الرابع (مستضد p24 وأجسام مضادة)",
    "aliases": [
      "HIV Combo",
      "HIV 4th Gen",
      "p24 Antigen",
      "فحص الإيدز"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Non-Reactive (Negative Normal)",
        "value": "< 1.0 (Signal to Cutoff S/CO)",
        "unit": "index",
        "note": "No HIV-1/2 antibodies or p24 antigen detected"
      },
      {
        "group": "Reactive (Presumptive Positive)",
        "value": "≥ 1.0 (S/CO)",
        "unit": "index",
        "alert": "critical_high",
        "note": "Mandates immediate supplemental HIV-1/HIV-2 antibody differentiation immunoassay per CDC algorithm"
      },
      {
        "group": "Acute Early Window Period (p24 Positive)",
        "value": "p24 detectable at 14-21 days",
        "unit": "timeline",
        "note": "Closes the window period by detecting free p24 viral capsid antigen before seroconversion antibodies appear"
      }
    ],
    "significance": "CDC recommended first-line screening test. Detects both HIV-1 and HIV-2 antibodies AND free HIV-1 p24 capsid antigen simultaneously. Narrows the diagnostic window period to ~14-21 days post-exposure (compared to ~4-6 weeks for 3rd gen antibody-only tests). Reactive screen must be reflexed to HIV-1/HIV-2 differentiation immunoassay.",
    "significanceAr": "الفحص المعتمد من CDC للكشف المبكر عن الإيدز؛ يدمج كشف مستضد p24 الفيروسي مع الأجسام المضادة معاً. يقلص الفترة النافذة إلى 14-21 يوماً بعد العدوى قبل ظهور الأجسام المضادة.",
    "tags": [
      "infectious",
      "hiv",
      "p24",
      "serology",
      "cdc-algorithm",
      "sti"
    ]
  },
  {
    "id": "hiv_1_viral_load_rna",
    "name": "HIV-1 RNA Viral Load (Quantitative PCR)",
    "nameAr": "الحمل الفيروسي للإيدز (HIV-1 RNA الكمي)",
    "aliases": [
      "HIV Viral Load",
      "HIV RNA PCR",
      "الحمل الفيروسي"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Virologic Suppression / Undetectable (U=U Target)",
        "value": "< 20 – 50",
        "unit": "copies/mL",
        "note": "Undetectable = Untransmittable (U=U); zero sexual transmission risk"
      },
      {
        "group": "Low-Level Viremia / Viral Blip",
        "value": "50 – 200",
        "unit": "copies/mL",
        "note": "Transient blip or early adherence failure; repeat testing"
      },
      {
        "group": "Virologic Failure Threshold (DHHS / WHO Criteria)",
        "value": "> 200 – 1000",
        "unit": "copies/mL",
        "alert": "critical_high",
        "note": "Persistent viremia indicates treatment failure / emergence of antiretroviral drug resistance mutations"
      },
      {
        "group": "Acute Primary HIV Infection (Seroconversion Surge)",
        "value": "> 100000 – >10000000",
        "unit": "copies/mL",
        "alert": "critical_high",
        "note": "Massive viremia accompanied by acute mononucleosis-like retroviral syndrome"
      }
    ],
    "significance": "Quantitative reverse-transcription PCR measuring circulating HIV-1 virions per mL of plasma. Primary monitoring tool for antiretroviral therapy (ART) efficacy. Achieving sustained viral load <50 copies/mL prevents disease progression and completely eliminates sexual transmission (Undetectable = Untransmittable / U=U).",
    "significanceAr": "يقيس عدد نسخ الفيروس في المليلتر بالـ PCR. الهدف العلاجي هو أن يكون الفيروس غير قابل للكشف (<50 نسخة/مل)، مما يعني انعدام خطر نقل العدوى جنسياً (U=U). تجاوزه 200-1000 يدل على فشل الدواء وتطور الطفرات المقاومة.",
    "tags": [
      "infectious",
      "hiv",
      "viral-load",
      "art",
      "virology"
    ]
  },
  {
    "id": "cd4_t_cell_count",
    "name": "CD4+ T-Lymphocyte Absolute Count",
    "nameAr": "تعداد خلايا CD4 التائية (مناعة مريض الإيدز)",
    "aliases": [
      "CD4 Count",
      "T4 Helper Cells",
      "خلايا CD4"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Normal Healthy Adults (Stage 1 HIV: ≥500)",
        "value": "500 – 1500",
        "unit": "cells/µL",
        "note": "Intact cell-mediated immunity; CD4 percentage >26%"
      },
      {
        "group": "Stage 2 HIV (Mild-Moderate Immunodeficiency)",
        "value": "200 – 499",
        "unit": "cells/µL",
        "note": "Increased risk of herpes zoster, oral candidiasis, tuberculosis"
      },
      {
        "group": "Stage 3 HIV / AIDS Defining Threshold",
        "value": "< 200",
        "unit": "cells/µL",
        "alert": "critical_low",
        "note": "Official CDC definition of AIDS; mandatory Pneumocystis jirovecii pneumonia (PCP) prophylaxis with TMP-SMX"
      },
      {
        "group": "High Risk for Toxoplasmosis & Cryptococcus",
        "value": "< 100",
        "unit": "cells/µL",
        "alert": "critical_low",
        "note": "Add Toxoplasma prophylaxis (TMP-SMX); check serum CrAg"
      },
      {
        "group": "Severe Immunodeficiency (MAC & CMV Retinitis Threshold)",
        "value": "< 50",
        "unit": "cells/µL",
        "alert": "critical_low",
        "note": "High risk of Mycobacterium avium complex (MAC) and CMV retinitis / colitis"
      }
    ],
    "significance": "Primary index of immunological competence in HIV-infected patients. A count <200 cells/µL defines AIDS and requires immediate prophylaxis against Pneumocystis jirovecii pneumonia (PJP/PCP) with daily trimethoprim-sulfamethoxazole (TMP-SMX). At <100, add coverage for Toxoplasma gondii. At <50, vigilance for CMV retinitis and MAC.",
    "significanceAr": "مؤشر المناعة الأساسي لمرضى الإيدز. هبوطه دون 200 يعرف متلازمة الإيدز رسمياً ويستدعي إعطاء الباكتريم يومياً للوقاية من ذات الرئة بنيوموسيستيس جيروفيسي القاتلة. وهبوطه دون 50 يعرض المريض لالتهاب شبكية العين بفيروس CMV.",
    "tags": [
      "infectious",
      "cd4",
      "hiv",
      "aids",
      "opportunistic-infections",
      "immunology"
    ]
  },
  {
    "id": "cd4_cd8_ratio",
    "name": "CD4 / CD8 Ratio",
    "nameAr": "نسبة خلايا CD4 إلى CD8",
    "aliases": [
      "CD4/CD8 Ratio"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "1.0 – 3.0",
        "unit": "ratio"
      },
      {
        "group": "Inverted Ratio (HIV / Immune Exhaustion)",
        "value": "< 1.0",
        "unit": "ratio",
        "note": "Hallmark of progressive HIV, chronic viral infections, and premature immune aging"
      }
    ],
    "significance": "Normally CD4 exceeds CD8 (ratio >1.0). Inverted ratio (<1.0) reflects CD4 depletion and CD8 cytotoxic expansion, serving as an independent marker of chronic immune activation and non-AIDS morbidity.",
    "significanceAr": "طبيعياً تفوق خلايا CD4 خلايا CD8 (النسبة >1.0). انقلاب النسبة دون 1.0 علامة فارقة على استنزاف المناعة وشيخوختها في الإيدز والعدوى الفيروسية المزمنة.",
    "tags": [
      "infectious",
      "cd4-cd8",
      "hiv",
      "immunology"
    ]
  },
  {
    "id": "hbsag_hepatitis_b_surface_antigen",
    "name": "Hepatitis B Surface Antigen (HBsAg)",
    "nameAr": "المستضد السطحي لفيروس التهاب الكبد ب (HBsAg)",
    "aliases": [
      "HBsAg",
      "Australia Antigen",
      "فيروس بي السطحي"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Non-Reactive (Negative Normal)",
        "value": "< 0.05",
        "unit": "IU/mL",
        "note": "No active HBV infection"
      },
      {
        "group": "Reactive (Acute or Chronic HBV Infection)",
        "value": "≥ 0.05",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Indicates current infection; persistence for >6 months defines Chronic Hepatitis B"
      }
    ],
    "significance": "First serological marker to appear in acute HBV infection (present 1-10 weeks after exposure, before symptom onset or ALT rise). Persistence of HBsAg for greater than 6 months definitively defines Chronic Hepatitis B infection, carrying risk for cirrhosis and hepatocellular carcinoma.",
    "significanceAr": "أول واسم يظهر في التهاب الكبد B الحاد. استمرار إيجابيته لأكثر من 6 أشهر يثبت رسمياً تحول المرض إلى التهاب كبد مزمن يستوجب المتابعة والعلاج بمضادات الفيروسات لمنع التشمع والسرطان.",
    "tags": [
      "infectious",
      "hepatitis-b",
      "hbsag",
      "virology",
      "cirrhosis"
    ]
  },
  {
    "id": "anti_hbs_surface_antibody",
    "name": "Hepatitis B Surface Antibody (anti-HBs Quantitative)",
    "nameAr": "الضد النوعي لمستضد السطح لفيروس ب (anti-HBs / مناعة فيروس ب)",
    "aliases": [
      "anti-HBs",
      "HBsAb",
      "أجسام مضادة لفيروس بي"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Non-Immune / Non-Protected",
        "value": "< 10.0",
        "unit": "mIU/mL",
        "note": "Susceptible to HBV; booster vaccination series recommended"
      },
      {
        "group": "Vaccine-Induced or Natural Immunity (Protective)",
        "value": "≥ 10.0",
        "unit": "mIU/mL",
        "note": "CDC/WHO benchmark confirming protective immunity against HBV"
      },
      {
        "group": "Robust High-Level Protection",
        "value": "> 100.0",
        "unit": "mIU/mL"
      }
    ],
    "significance": "Neutralizing antibody conferring protective immunity. Level ≥10 mIU/mL defines protective immunity. Isolated positive anti-HBs with negative anti-HBc confirms successful vaccination. Positive anti-HBs with positive anti-HBc IgG confirms past natural resolved infection.",
    "significanceAr": "الجسم المضاد الواقي المحيد للفيروس. تحقيق عيار ≥10 mIU/mL يثبت المناعة التامة ضد فيروس B. وجوده منفرداً يدل على التحصين باللقاح، ووجوده مع anti-HBc يدل على الشفاء بعد إصابة طبيعية سابقة.",
    "tags": [
      "infectious",
      "hepatitis-b",
      "anti-hbs",
      "vaccine",
      "immunity"
    ]
  },
  {
    "id": "anti_hbc_total_and_igm",
    "name": "Hepatitis B Core Antibody (anti-HBc Total & IgM)",
    "nameAr": "الضد اللبي لفيروس ب (anti-HBc الكلي و IgM)",
    "aliases": [
      "anti-HBc",
      "HBcAb",
      "Anti-HBc IgM"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Negative Normal (Vaccinated or Unexposed)",
        "value": "Non-Reactive",
        "unit": "qualitative",
        "note": "Vaccinated individuals are anti-HBc NEGATIVE (vaccine contains only HBsAg)"
      },
      {
        "group": "anti-HBc IgM Positive (Acute HBV / Window Period)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Sole marker present during the 'core window' period when HBsAg has cleared but anti-HBs is not yet detectable"
      },
      {
        "group": "anti-HBc Total Positive with anti-HBc IgM Negative",
        "value": "Past Natural Infection or Chronic Infection",
        "unit": "qualitative",
        "note": "Lifelong immunological scar of having experienced natural HBV infection"
      }
    ],
    "significance": "anti-HBc IgM is the hallmark of acute HBV infection and the ONLY detectable serologic marker during the 'core window period' (between HBsAg clearance and anti-HBs emergence). Total anti-HBc persists for life after natural infection (never present after vaccination). Warning: Immunosuppression/chemotherapy in total anti-HBc positive patients risks fatal viral reactivation.",
    "significanceAr": "الضد IgM هو العلامة الفارقة للعدوى الحادة وهو الواسم الوحيد الإيجابي في 'الفترة النافذة' حين يختفي HBsAg وقبل ظهور anti-HBs. ويبقى anti-HBc الكلي إيجابياً مدى الحياة كبصمة للعدوى الطبيعية ولا يوجد بعد اللقاح.",
    "tags": [
      "infectious",
      "hepatitis-b",
      "anti-hbc",
      "window-period",
      "serology"
    ]
  },
  {
    "id": "hbeag_and_anti_hbe",
    "name": "Hepatitis B Envelope Antigen & Antibody (HBeAg & anti-HBe)",
    "nameAr": "مستضد ومضاد الغلاف لفيروس ب (HBeAg و anti-HBe)",
    "aliases": [
      "HBeAg",
      "anti-HBe",
      "HBeAb"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "HBeAg Positive (High Viral Replication & Infectivity)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "High HBV DNA levels (>10^7 IU/mL), high transmissibility (e.g. vertical transmission risk >90% to newborn)"
      },
      {
        "group": "HBeAg Seroconversion to anti-HBe (Inactive Carrier Phase)",
        "value": "HBeAg Negative / anti-HBe Positive",
        "unit": "qualitative",
        "note": "Seroconversion indicates favorable immune control; HBV DNA typically drops <2000 IU/mL"
      },
      {
        "group": "Pre-Core / Basal Core Promoter Mutant Strain",
        "value": "HBeAg Negative with High HBV DNA",
        "unit": "profile",
        "alert": "critical_high",
        "note": "Stop codon mutation prevents HBeAg synthesis despite active high viral replication and progressive cirrhosis"
      }
    ],
    "significance": "HBeAg is a surrogate marker for active intracellular viral replication and high infectivity. Seroconversion from HBeAg to anti-HBe marks transition to inactive carrier status with low transmission risk. Exception: Pre-core mutants are HBeAg-negative yet harbor high viral loads and active cirrhosis.",
    "significanceAr": "HBeAg يعكس التكاثر الفيروسي النشط والعدوائية العالية (خطر نقل العدوى للجنين >90%). تحوله إلى ضد anti-HBe يدل على خمول الفيروس، ما لم تكن هناك طفرة في المحفز اللبي تجعله سلبياً كاذباً.",
    "tags": [
      "infectious",
      "hepatitis-b",
      "hbeag",
      "anti-hbe",
      "replication"
    ]
  },
  {
    "id": "hbv_dna_quantitative",
    "name": "HBV DNA Quantitative PCR",
    "nameAr": "الحمل الفيروسي لفيروس ب (HBV DNA بالـ PCR)",
    "aliases": [
      "HBV DNA",
      "HBV Viral Load"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Target on Antiviral Therapy (Suppressed)",
        "value": "< 10 – 20",
        "unit": "IU/mL",
        "note": "Undetectable on ultrasensitive real-time PCR (target of Tenofovir/Entecavir therapy)"
      },
      {
        "group": "Inactive Carrier Cutoff (AASLD / EASL Guidelines)",
        "value": "< 2000",
        "unit": "IU/mL",
        "note": "Low viral replication; generally monitor without immediate antiviral therapy if ALT is normal"
      },
      {
        "group": "Active Chronic Hepatitis B (Treatment Threshold)",
        "value": "> 2000 – 20000 with elevated ALT",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Indication for initiation of lifelong nucleos(t)ide analog therapy (Entecavir or Tenofovir)"
      },
      {
        "group": "Maternal Transmission Prophylaxis Threshold in Pregnancy",
        "value": "> 200000",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Indication for maternal Tenofovir starting at week 28 of pregnancy to prevent vertical transmission"
      }
    ],
    "significance": "Gold standard direct quantification of circulating hepatitis B virions. AASLD/EASL guidelines recommend antiviral therapy (Tenofovir disoproxil/alafenamide or Entecavir) when HBV DNA >2,000 IU/mL with elevated ALT. In pregnant women with HBV DNA >200,000 IU/mL, initiate Tenofovir at 28 weeks gestation to prevent perinatal transmission.",
    "significanceAr": "المعيار الذهبي لقياس عدد نسخ فيروس B في المصل. إذا تجاوز 2000 مع ارتفاع أنزيمات الكبد يبدأ العلاج الدوائي بتينوفوفير أو إنتيكافير. وفي الحوامل إذا تجاوز 200 ألف يعطى التينوفوفير في الأسبوع 28 لحماية الجنين.",
    "tags": [
      "infectious",
      "hepatitis-b",
      "hbv-dna",
      "tenofovir",
      "guidelines"
    ]
  },
  {
    "id": "anti_hcv_antibody_screen",
    "name": "Hepatitis C Antibody Screen (anti-HCV)",
    "nameAr": "أجسام مضادة لفيروس التهاب الكبد ج (anti-HCV)",
    "aliases": [
      "anti-HCV",
      "HCV Antibody",
      "فيروس سي"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Non-Reactive (Negative Normal)",
        "value": "< 1.0 (Signal to Cutoff S/CO)",
        "unit": "index"
      },
      {
        "group": "Reactive (Presumptive Positive)",
        "value": "≥ 1.0 (S/CO)",
        "unit": "index",
        "alert": "critical_high",
        "note": "Mandatory reflex testing for HCV RNA PCR to differentiate active viremic infection from past resolved infection"
      }
    ],
    "significance": "First-line screening test for Hepatitis C virus exposure. Cannot differentiate between active viremic infection, past spontaneous resolution (~20-25% of patients), or successfully cured infection. All reactive anti-HCV screens must reflexively trigger HCV RNA PCR quantification.",
    "significanceAr": "الفحص المسحي الأول لفيروس C. إيجابيته تعني التعرض للفيروس لكنها لا تفرق بين العدوى النشطة الحالية والشفاء السابق التام؛ لذا يلزم إجراء فحص HCV RNA PCR فوراً.",
    "tags": [
      "infectious",
      "hepatitis-c",
      "anti-hcv",
      "screening"
    ]
  },
  {
    "id": "hcv_rna_quantitative_pcr",
    "name": "HCV RNA Quantitative PCR (Viral Load)",
    "nameAr": "الحمل الفيروسي لفيروس ج (HCV RNA بالـ PCR)",
    "aliases": [
      "HCV RNA",
      "HCV Viral Load",
      "بي سي آر فيروس سي"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Undetectable / Sustained Virologic Response (SVR12 - CURE)",
        "value": "< 15",
        "unit": "IU/mL",
        "note": "Target: Undetectable HCV RNA at 12 weeks post Direct-Acting Antiviral (DAA) therapy defines permanent CURE (>98% cure rate)"
      },
      {
        "group": "Active Chronic Infection (Baseline Before DAAs)",
        "value": "100000 – >10000000",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Indication for pangenotypic Direct-Acting Antivirals (Sofosbuvir/Velpatasvir or Glecaprevir/Pibrentasvir)"
      }
    ],
    "significance": "Confirms active replicating HCV viremia. With modern direct-acting antiviral (DAA) regimens (sofosbuvir/velpatasvir, glecaprevir/pibrentasvir), undetectable HCV RNA 12 weeks after completing treatment (Sustained Virologic Response / SVR12) equates to definitive virological CURE in >98% of patients.",
    "significanceAr": "يثبت العدوى النشطة لفيروس C. بفضل مضادات الفيروسات الحديثة (DAAs)، فإن سلبية الفيروس التامة بعد 12 أسبوعاً من نهاية العلاج (SVR12) تعني الشفاء التام والنهائي من فيروس C بنسبة تفوق 98%.",
    "tags": [
      "infectious",
      "hepatitis-c",
      "hcv-rna",
      "daa",
      "svr12",
      "cure"
    ]
  },
  {
    "id": "anti_hav_igm_and_igg",
    "name": "Hepatitis A Antibodies (anti-HAV IgM & IgG)",
    "nameAr": "أجسام مضادة لفيروس التهاب الكبد أ (anti-HAV IgM و IgG)",
    "aliases": [
      "anti-HAV",
      "HAV IgM",
      "HAV IgG",
      "فيروس أ"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "anti-HAV IgM Positive (Acute Hepatitis A Diagnostic)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Confirms acute fecal-oral Hepatitis A infection; remains positive for 3-6 months"
      },
      {
        "group": "anti-HAV IgG Positive with IgM Negative",
        "value": "Positive",
        "unit": "qualitative",
        "note": "Confirms lifelong protective immunity against Hepatitis A (past resolved infection or vaccination)"
      }
    ],
    "significance": "anti-HAV IgM is the diagnostic gold standard for acute Hepatitis A (fecal-oral transmission, shellfish, contaminated water; jaundice, marked transaminitis). anti-HAV IgG persists for life and indicates past natural infection or vaccine-induced immunity.",
    "significanceAr": "الضد IgM هو المعيار الذهبي لتشخيص التهاب الكبد A الحاد المنتقل فموياً عبر الطعام والماء الملوث. أما الضد IgG فيستمر مدى الحياة مؤكداً المناعة التامة بعد الإصابة أو أخذ اللقاح.",
    "tags": [
      "infectious",
      "hepatitis-a",
      "anti-hav",
      "jaundice",
      "foodborne"
    ]
  },
  {
    "id": "anti_hev_igm_and_igg",
    "name": "Hepatitis E Antibodies (anti-HEV IgM & IgG)",
    "nameAr": "أجسام مضادة لفيروس التهاب الكبد هـ (anti-HEV IgM و IgG)",
    "aliases": [
      "anti-HEV",
      "Hepatitis E",
      "فيروس هـ"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "anti-HEV IgM Positive (Acute Hepatitis E)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "High mortality risk (~20-25%) due to fulminant hepatic failure when contracted during 3rd trimester of pregnancy"
      },
      {
        "group": "anti-HEV IgG Positive",
        "value": "Positive",
        "unit": "qualitative",
        "note": "Past exposure and immunity"
      }
    ],
    "significance": "Waterborne enterically transmitted RNA virus. Causes self-limiting acute hepatitis in general population, BUT carries a catastrophic 20-25% mortality rate from fulminant hepatic failure in pregnant women (especially during the 3rd trimester). Chronic infection occurs in immunosuppressed organ transplant recipients.",
    "significanceAr": "ينتقل عبر الماء الملوث؛ سليم في الغالب، لكنه يحمل نسبة وفيات كارثية تصل إلى 20-25% بسبب الفشل الكبدي الصاعق عند الحوامل في الثلث الأخير من الحمل. قد يتحول لمزمن عند زارعي الأعضاء.",
    "tags": [
      "infectious",
      "hepatitis-e",
      "pregnancy",
      "fulminant-hepatitis"
    ]
  },
  {
    "id": "cmv_serology_and_pcr",
    "name": "Cytomegalovirus (CMV) IgG, IgM & Quantitative PCR",
    "nameAr": "الفيروس المضخم للخلايا (CMV IgG و IgM و PCR)",
    "aliases": [
      "CMV",
      "Cytomegalovirus",
      "سيتوميجالوفيروس"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "CMV IgG Positive (Past Latent Infection)",
        "value": "> 1.0 (Positive)",
        "unit": "index",
        "note": "Present in 50-80% of adult population; establishes donor/recipient match status for organ transplantation"
      },
      {
        "group": "CMV IgM Positive (Primary / Reactivation)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Test IgG avidity to differentiate primary maternal infection in pregnancy (high transmission risk) from reactivation"
      },
      {
        "group": "CMV DNA PCR (Organ Transplant Cutoff for Preemptive Therapy)",
        "value": "> 1000 – 2000",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Indication for preemptive IV Ganciclovir or Oral Valganciclovir in solid organ transplant recipients to prevent CMV tissue-invasive disease"
      }
    ],
    "significance": "Beta-herpesvirus causing mononucleosis in immunocompetent, congenital sensory hearing loss in neonates, and life-threatening tissue-invasive disease (pneumonitis, colitis, retinitis) in transplant and AIDS patients. Quantitative plasma PCR guides preemptive ganciclovir therapy in transplant recipients.",
    "significanceAr": "فيروس من عائلة الهربس؛ يسبب فقدان السمع الحسي العصبي للجنين في الحمل. ويسبب التهاب الرئة والقولون والشبكية عند زارعي الأعضاء والإيدز؛ ويقاس الحمل الفيروسي بالـ PCR للبدء بالغانسيكلوفير.",
    "tags": [
      "infectious",
      "cmv",
      "transplant",
      "congenital-infection",
      "ganciclovir"
    ]
  },
  {
    "id": "ebv_serology_panel",
    "name": "Epstein-Barr Virus Panel (VCA IgM/IgG, EA-D, EBNA)",
    "nameAr": "تحاليل فيروس إبشتاين-بار (EBV VCA و EA و EBNA)",
    "aliases": [
      "EBV",
      "Epstein-Barr Virus",
      "Mononucleosis",
      "فيروس إبشتاين بار"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Acute Primary Infectious Mononucleosis Profile",
        "value": "VCA IgM (+), VCA IgG (+), EBNA Negative",
        "unit": "profile",
        "alert": "critical_high",
        "note": "Pathognomonic of acute primary EBV mononucleosis (triad: fever, pharyngitis, posterior cervical lymphadenopathy)"
      },
      {
        "group": "Past Infection / Latent Immunity Profile",
        "value": "VCA IgG (+), EBNA (+), VCA IgM Negative",
        "unit": "profile",
        "note": "EBNA antibodies take 2-4 months to develop; presence reliably excludes acute infection"
      },
      {
        "group": "Reactivation / High PTLD Risk in Transplant",
        "value": "High VCA IgG (+), EA-D (+), Rising EBV PCR",
        "unit": "profile",
        "alert": "critical_high",
        "note": "Risk for Post-Transplant Lymphoproliferative Disorder (PTLD)"
      }
    ],
    "significance": "Etiologic agent of Infectious Mononucleosis and associated with Burkitt lymphoma, Hodgkin lymphoma, and nasopharyngeal carcinoma. Key rule: EBNA (Epstein-Barr Nuclear Antigen) antibodies develop 2-4 months AFTER infection and persist for life; their presence ABSOLUTELY RULES OUT acute primary infection.",
    "significanceAr": "المسبب لمرض كثرة الوحيدات الخمجية (حمى، التهاب لوزات قشائي، وضخامة عقد رقبية خلفية). القاعدة الذهبية: أضداد EBNA تظهر بعد 3 أشهر من الإصابة وتستمر مدى الحياة؛ ووجودها ينفي قطعياً الإصابة الحادة الحالية.",
    "tags": [
      "infectious",
      "ebv",
      "mononucleosis",
      "vca",
      "ebna",
      "ptld"
    ]
  },
  {
    "id": "hsv_1_and_2_igg_serology",
    "name": "Herpes Simplex Virus Type 1 & 2 Specific IgG",
    "nameAr": "أضداد فيروس الهربس البسيط النوع 1 والنوع 2 (HSV-1 / HSV-2)",
    "aliases": [
      "HSV",
      "Herpes Simplex",
      "HSV-1",
      "HSV-2",
      "هربس"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Negative Normal (No Prior Exposure)",
        "value": "< 0.90",
        "unit": "index"
      },
      {
        "group": "HSV-1 IgG Positive (Orofacial / Genital Exposure)",
        "value": "> 1.10",
        "unit": "index",
        "note": "Oral cold sores and increasingly genital herpes"
      },
      {
        "group": "HSV-2 IgG Positive (Genital Herpes Hallmark)",
        "value": "> 1.10 (Confirm if 1.1-3.5 with Western blot)",
        "unit": "index",
        "alert": "critical_high",
        "note": "Type-specific glycoprotein G (gG-2) assay; confirms genital herpes"
      }
    ],
    "significance": "Type-specific IgG assays targeted against glycoprotein G1 (HSV-1) and glycoprotein G2 (HSV-2). Differentiates oral cold sores from sexually transmitted genital herpes.",
    "significanceAr": "أضداد نوعية تستهدف غليكوبروتين G1 وG2. تفرق بدقة بين هربس الفم الشائع (النوع 1) وهربس الأعضاء التناسلية المنتقل بالجنس (النوع 2).",
    "tags": [
      "infectious",
      "hsv",
      "herpes",
      "hsv-2",
      "sti"
    ]
  },
  {
    "id": "vzv_igg_immunity",
    "name": "Varicella-Zoster Virus IgG (VZV Immunity)",
    "nameAr": "أضداد فيروس الجدري المائي والنطاقي (VZV IgG / مناعة الجدري)",
    "aliases": [
      "VZV IgG",
      "Varicella IgG",
      "مناعة الجدري"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Negative / Non-Immune (Susceptible)",
        "value": "< 135.0",
        "unit": "mIU/mL",
        "note": "High risk for severe varicella in pregnancy or adulthood; indicates vaccination"
      },
      {
        "group": "Positive / Immune (Protected)",
        "value": "≥ 165.0",
        "unit": "mIU/mL",
        "note": "Confirms protective immunity from past chickenpox or vaccination"
      }
    ],
    "significance": "Evaluates immunity against chickenpox and shingles. Crucial pre-employment screening for healthcare workers and pre-conceptional screening in women (varicella pneumonia in pregnancy carries high maternal mortality and congenital varicella syndrome).",
    "significanceAr": "يقيم المناعة ضد الجدري المائي والحزام الناري. فحص جوهري للكوادر الطبية وللنساء قبل الحمل لخطورة ذات الرئة بالجدري ومتلازمة الجدري الخلقية للجنين.",
    "tags": [
      "infectious",
      "vzv",
      "varicella",
      "shingles",
      "immunity"
    ]
  },
  {
    "id": "toxoplasma_serology_and_avidity",
    "name": "Toxoplasma gondii IgG, IgM & IgG Avidity",
    "nameAr": "تحاليل داء المقوسات (التوكسوبلازما / داء القطط IgG و IgM والولوعية)",
    "aliases": [
      "Toxoplasma",
      "Toxo IgG",
      "Toxo IgM",
      "جرثومة القطط"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Negative (Non-Immune, Susceptible to Primary Infection in Pregnancy)",
        "value": "IgG and IgM Negative",
        "unit": "serology",
        "note": "Counsel pregnant women to avoid cat litter boxes and undercooked meat"
      },
      {
        "group": "Past Latent Infection (Immune, Safe for Fetus)",
        "value": "IgG Positive (>30 IU/mL) + IgM Negative",
        "unit": "serology",
        "note": "Zero transmission risk to fetus during current pregnancy"
      },
      {
        "group": "Potential Acute Maternal Infection in Pregnancy Alert",
        "value": "IgM Positive + IgG Positive",
        "unit": "serology",
        "alert": "critical_high",
        "note": "Must perform IgG Avidity Test; IgM can persist for >1 year causing false alarms"
      },
      {
        "group": "High IgG Avidity (>60%) in First Trimester",
        "value": "> 60.0",
        "unit": "% avidity index",
        "note": "Excludes infection in the preceding 3-4 months; confirms infection occurred PRIOR to conception (fetus safe)"
      },
      {
        "group": "Low IgG Avidity (<50%) with Positive IgM",
        "value": "< 50.0",
        "unit": "% avidity index",
        "alert": "critical_high",
        "note": "Confirms acute maternal infection acquired during pregnancy; start Spiramycin, perform amniocentesis for Toxoplasma PCR at 18 weeks"
      }
    ],
    "significance": "Obligate intracellular protozoan (undercooked meat, cat feces). Maternal primary infection during pregnancy carries risk of Congenital Toxoplasmosis (classic triad: chorioretinitis, hydrocephalus, intracranial calcifications). High IgG avidity in early pregnancy confirms infection occurred BEFORE conception, completely ruling out fetal risk.",
    "significanceAr": "طفيلي ينتقل بلحوم المواشي غير المطهوة وبراز القطط. إصابة الحامل به لأول مرة تسبب داء المقوسات الخلقي (العمى، استسقاء الدماغ، والتكلسات الدماغية). فحص ولوعية IgG المرتفعة يثبت أن العدوى قديمة قبل الحمل وينفي الخطر تماماً.",
    "tags": [
      "infectious",
      "toxoplasma",
      "congenital-infection",
      "pregnancy",
      "avidity",
      "torch"
    ]
  },
  {
    "id": "rubella_igg_immunity",
    "name": "Rubella Virus IgG Antibody (Immunity)",
    "nameAr": "أضداد فيروس الحصبة الألمانية (Rubella IgG / مناعة الحصبة الألمانية)",
    "aliases": [
      "Rubella IgG",
      "German Measles",
      "الحصبة الألمانية"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Non-Immune / Susceptible",
        "value": "< 10.0",
        "unit": "IU/mL",
        "note": "Vulnerable to Congenital Rubella Syndrome; vaccinate with MMR postpartum (live vaccine contraindicated in pregnancy)"
      },
      {
        "group": "Immune / Protected (Post-Vaccine or Natural)",
        "value": "≥ 10.0",
        "unit": "IU/mL",
        "note": "WHO threshold confirming protective immunity"
      }
    ],
    "significance": "Routine prenatal screen. Primary maternal rubella infection in the first trimester causes Congenital Rubella Syndrome (triad: sensorineural deafness, cataracts, patent ductus arteriosus 'PDA', blueberry muffin rash). Non-immune pregnant women must receive MMR vaccine immediately postpartum.",
    "significanceAr": "فحص مسحي إلزامي للحوامل. عدوى الحامل بالحصبة الألمانية في الأشهر الثلاثة الأولى تسبب متلازمة الحصبة الألمانية الخلقية (الصمم، الماء الأبيض بالعين، والتشوهات القلبية PDA). الحوامل غير الممنعات يلقحن بلقاح MMR بعد الولادة مباشرة.",
    "tags": [
      "infectious",
      "rubella",
      "torch",
      "pregnancy",
      "mmr",
      "congenital-rubella"
    ]
  },
  {
    "id": "syphilis_rpr_vdrl_titer",
    "name": "Syphilis Non-Treponemal Titers (RPR / VDRL)",
    "nameAr": "معاير الزهري غير اللولبي (RPR / VDRL)",
    "aliases": [
      "RPR",
      "VDRL",
      "Syphilis Titer",
      "الزهري"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Non-Reactive (Normal Negative)",
        "value": "Non-Reactive",
        "unit": "titer"
      },
      {
        "group": "Reactive Baseline (Requires Treponemal Confirmation)",
        "value": "1:1 to 1:256+",
        "unit": "titer",
        "alert": "critical_high",
        "note": "Biological false positives occur in SLE, antiphospholipid syndrome, pregnancy, leprosy, malaria"
      },
      {
        "group": "Successful Treatment Response (4-Fold Drop / 2 Dilutions)",
        "value": "Four-fold decline (e.g., 1:32 drops to ≤ 1:8)",
        "unit": "titer decline",
        "note": "Monitored at 6 and 12 months post-Penicillin therapy; defines therapeutic success"
      }
    ],
    "significance": "Non-treponemal flocculation tests detecting antibodies against cardiolipin-cholesterol-lecithin antigen. Used for screening and quantitative monitoring of treatment response. A 4-fold decrease in titer (e.g., 1:32 to 1:8) confirms successful penicillin therapy. False positives occur in SLE, antiphospholipid syndrome, and viral infections.",
    "significanceAr": "فحص غير لولبي يعتمد على الكارديوليبين. يستخدم للمسح ومراقبة الاستجابة لعلاج البنسلين. انخفاض العيار بمقدار 4 أضعاف (مثلاً من 1:32 إلى 1:8) يثبت الشفاء التام. يعطي إيجابية كاذبة في مرضى الذئبة وأضداد الفوسفوليبيد والحمل.",
    "tags": [
      "infectious",
      "syphilis",
      "rpr",
      "vdrl",
      "treponema",
      "sti"
    ]
  },
  {
    "id": "syphilis_treponemal_confirmatory",
    "name": "Syphilis Treponemal Confirmatory (TP-PA / FTA-ABS)",
    "nameAr": "فحص الزهري اللولبي التأكيدي (TP-PA / FTA-ABS)",
    "aliases": [
      "TP-PA",
      "FTA-ABS",
      "Syphilis IgG",
      "الزهري التأكيدي"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Non-Reactive (Normal)",
        "value": "Non-Reactive",
        "unit": "qualitative"
      },
      {
        "group": "Reactive (True Treponemal Infection Confirmed)",
        "value": "Reactive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Confirms true Treponema pallidum infection; remains positive for life even after complete curative treatment"
      }
    ],
    "significance": "Specific tests detecting antibodies directly against Treponema pallidum organisms. Used to confirm a positive non-treponemal screen (or as the initial screen in the modern 'reverse algorithm'). Remains permanently reactive for life; CANNOT be used to evaluate treatment response or reinfection.",
    "significanceAr": "فحص تأكيدي نوعي يكتشف الأجسام المضادة المباشرة لبكتيريا الزهري (Treponema pallidum). يبقى إيجابياً مدى الحياة كبصمة مناعية حتى بعد الشفاء التام؛ ولذا لا يصلح لمراقبة الشفاء أو تكرار العدوى.",
    "tags": [
      "infectious",
      "syphilis",
      "tppa",
      "fta-abs",
      "treponema"
    ]
  },
  {
    "id": "h_pylori_urea_breath_test",
    "name": "H. pylori Urea Breath Test (13C / 14C UBT)",
    "nameAr": "اختبار تنفس اليوريا لجرثومة المعدة (UBT)",
    "aliases": [
      "UBT",
      "Urea Breath Test",
      "اختبار النفس لجرثومة المعدة"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Negative (Eradicated / Uninfected)",
        "value": "< 2.0 (Delta Over Baseline DOB)",
        "unit": "DOB",
        "note": "No active gastric urease activity"
      },
      {
        "group": "Positive (Active H. pylori Infection)",
        "value": "≥ 2.0",
        "unit": "DOB",
        "alert": "critical_high",
        "note": "High sensitivity and specificity (>98%); gold standard test of cure ≥4 weeks post-treatment"
      }
    ],
    "significance": "Patient drinks 13C- or 14C-labeled urea. Gastric bacterial urease splits urea into labeled CO2 exhaled in breath. Gold standard non-invasive test for active H. pylori and post-treatment eradication. Antibiotics must be held for 4 weeks and PPIs for 2 weeks prior.",
    "significanceAr": "المعيار الذهبي غير الجراحي لإثبات وجود جرثومة المعدة والتحقق من القضاء عليها نهائياً بعد المضادات بـ 4 أسابيع. يشرب المريض يوريا موسومة بالكربون فتقوم يوريازا الجرثومة بشطرها ليزفرها كثاني أكسيد الكربون.",
    "tags": [
      "infectious",
      "h-pylori",
      "ubt",
      "urea-breath-test",
      "gastroenterology"
    ]
  },
  {
    "id": "quantiferon_tb_gold_plus",
    "name": "QuantiFERON-TB Gold Plus (IGRA)",
    "nameAr": "فحص كوانتيفيرون للدرن (IGRA / فحص السل في الدم)",
    "aliases": [
      "QuantiFERON",
      "QFT-Plus",
      "IGRA",
      "فحص السل"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Negative (TB Infection Unlikely)",
        "value": "< 0.35",
        "unit": "IU/mL",
        "note": "TB Antigen minus Nil is <0.35 IU/mL"
      },
      {
        "group": "Positive (Latent TB Infection or Active TB Disease)",
        "value": "≥ 0.35 (and ≥25% of Nil)",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Confirms Mycobacterium tuberculosis sensitization; order chest X-ray to rule out active pulmonary TB disease before treating LTBI"
      },
      {
        "group": "Indeterminate (Technical Error or Severe Anergy)",
        "value": "Mitogen response <0.5 or Nil >8.0",
        "unit": "IU/mL",
        "note": "Invalid due to severe immunosuppression or incorrect tube handling"
      }
    ],
    "significance": "Interferon-Gamma Release Assay (IGRA). Whole blood incubated with M. tuberculosis-specific antigens (ESAT-6, CFP-10). These antigens are absent from BCG vaccine strain and most non-tuberculous mycobacteria, eliminating BCG false positives. Cannot differentiate latent infection (LTBI) from active TB disease (mandates chest X-ray).",
    "significanceAr": "فحص إطلاق إنترفيرون-غاما (IGRA) في الدم. ميزته الثورية أنه لا يعطي نتائج إيجابية كاذبة لمن أخذوا لقاح الدرن (BCG). إيجابيته تعني وجود بكتيريا السل الخاملة أو النشطة وتستوجب صورة أشعة للصدر فوراً.",
    "tags": [
      "infectious",
      "tuberculosis",
      "quantiferon",
      "igra",
      "ltbi",
      "pulmonology"
    ]
  },
  {
    "id": "tst_mantoux_tuberculin",
    "name": "Tuberculin Skin Test (TST / Mantoux)",
    "nameAr": "اختبار السلين الجلدي (مانتو / TST)",
    "aliases": [
      "TST",
      "Mantoux",
      "PPD",
      "اختبار التوبركولين"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Positive Threshold for High-Risk Group (≥5 mm Induration)",
        "value": "≥ 5.0",
        "unit": "mm induration",
        "alert": "critical_high",
        "note": "HIV-positive, recent close contact with active TB, organ transplant, fibrotic changes on CXR, immunosuppressed (prednisone ≥15 mg/day)"
      },
      {
        "group": "Positive Threshold for Moderate-Risk Group (≥10 mm Induration)",
        "value": "≥ 10.0",
        "unit": "mm induration",
        "alert": "critical_high",
        "note": "Immigrants from high-prevalence areas (<5yr), injection drug users, healthcare workers, high-risk congregate settings, diabetics, ESRD"
      },
      {
        "group": "Positive Threshold for Low-Risk General Population (≥15 mm Induration)",
        "value": "≥ 15.0",
        "unit": "mm induration",
        "note": "Persons with no known risk factors for TB"
      }
    ],
    "significance": "Intradermal injection of 5 TU PPD read at 48-72 hours. Measure TRANSVERSE INDURATION (palpable swelling), NOT erythema. Risk-stratified cutoffs (≥5 mm, ≥10 mm, ≥15 mm). Falsely positive in prior BCG recipients; falsely negative in cutaneous anergy (malnutrition, sarcoidosis, advanced HIV).",
    "significanceAr": "حقن 5 وحدات PPD داخل الأدمة وتقرأ بعد 48-72 ساعة. يقاس قطر القساوة المرتفعة وليس الاحمرار. العتبة الإيجابية: ≥5 مم لمرضى الإيدز والمثبطين مناعياً، ≥10 مم للكوادر الطبية ومرضى السكري، و≥15 مم للأشخاص الأصحاء.",
    "tags": [
      "infectious",
      "tst",
      "mantoux",
      "ppd",
      "tuberculosis"
    ]
  },
  {
    "id": "malaria_thick_thin_smear",
    "name": "Malaria Blood Smears & Rapid Antigen (Pf / Pan)",
    "nameAr": "مسحة الملاريا السميكة والرفيعة وفحص المستضد السريع",
    "aliases": [
      "Malaria Smear",
      "Malaria Rapid Test",
      "فحص الملاريا"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Thick Smear (High Sensitivity Detection)",
        "value": "Examines large drop of hemolyzed blood for presence of parasites (threshold ~5-10 parasites/µL)",
        "unit": "microscopy"
      },
      {
        "group": "Thin Smear (Species Identification & Parasitemia Quantification)",
        "value": "Identifies Plasmodium falciparum, vivax, ovale, malariae, knowlesi",
        "unit": "species"
      },
      {
        "group": "Severe / Life-Threatening Malaria Cutoff (P. falciparum)",
        "value": "> 5.0% Parasitemia (or >200,000 parasites/µL)",
        "unit": "% infected RBCs",
        "alert": "critical_high",
        "note": "Severe malaria; emergency indication for IV Artesunate (superior to quinine) and intensive care monitoring"
      }
    ],
    "significance": "Thick smear concentrates blood 20-fold for maximal detection sensitivity; Thin smear preserves RBC morphology for precise species identification and % parasitemia quantification. P. falciparum with parasitemia >5% defines severe malaria requiring immediate IV Artesunate.",
    "significanceAr": "المسحة السميكة تكشف وجود الطفيلي بحساسية عالية؛ والمسحة الرفيعة تحدد نوع الملاريا ونسبة إصابة الكريات. نسبة طفيليات تتجاوز 5% لملاريا المتصورة المنجلية تعرف الملاريا الشديدة الخطيرة وتستدعي حقن أرتيسونات وريدياً فوراً.",
    "tags": [
      "infectious",
      "malaria",
      "parasitology",
      "falciparum",
      "artesunate",
      "emergency"
    ]
  },
  {
    "id": "dengue_ns1_and_antibodies",
    "name": "Dengue Virus NS1 Antigen & IgM/IgG",
    "nameAr": "فحص حمى الضنك (مستضد NS1 وأجسام IgM/IgG)",
    "aliases": [
      "Dengue",
      "Dengue NS1",
      "Dengue IgM",
      "حمى الضنك"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "NS1 Antigen Positive (Day 1-5 Acute Febrile Phase)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Directly detects non-structural protein 1 during early viremic phase (before antibodies develop)"
      },
      {
        "group": "Dengue IgM Positive (Day 5+ Post-Onset)",
        "value": "Positive",
        "unit": "qualitative",
        "note": "Primary acute infection; remains positive for 2-3 months"
      },
      {
        "group": "Severe Dengue / Dengue Hemorrhagic Fever Warning Signs",
        "value": "Hematocrit rise >20% concurrent with rapid platelet drop <100,000",
        "unit": "laboratory pattern",
        "alert": "critical_high",
        "note": "Plasma leakage syndrome, fluid accumulation, severe bleeding, or shock"
      }
    ],
    "significance": "Flavivirus transmitted by Aedes mosquitoes. NS1 antigen enables rapid diagnosis on Day 1-5 of fever before seroconversion. Close monitoring of hematocrit and platelets is vital: sudden hematocrit hemoconcentration (>20% rise) with rapid thrombocytopenia (<100,000) heralds capillary plasma leak syndrome and Dengue Shock Syndrome.",
    "significanceAr": "ينقله بعوض الزاعجة. فحص مستضد NS1 يشخص حمى الضنك مبكراً في الأيام 1-5 من الحمى. علامة الخطر القاتلة لحمى الضنك النزفية هي ارتفاع الهيماتوكريت بنسبة >20% بالتزامن مع هبوط الصفائح دون 100 ألف دلالة على تسرب البلازما.",
    "tags": [
      "infectious",
      "dengue",
      "ns1",
      "thrombocytopenia",
      "tropical-medicine"
    ]
  },
  {
    "id": "brucella_rose_bengal_and_sat",
    "name": "Brucella Rose Bengal Screen & Tube Agglutination (SAT)",
    "nameAr": "تحاليل الحمى المالطية (روز بنغال والتراص الأنبوبي القياسي SAT)",
    "aliases": [
      "Brucella",
      "Rose Bengal",
      "Wright Test",
      "الحمى المالطية",
      "البروسيلا"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Rose Bengal Slide Screen",
        "value": "Negative",
        "unit": "qualitative",
        "note": "Highly sensitive rapid screening test"
      },
      {
        "group": "Standard Agglutination Test (SAT / Wright) Normal",
        "value": "< 1:80",
        "unit": "titer"
      },
      {
        "group": "Active Brucellosis Diagnostic Cutoff",
        "value": "≥ 1:160 (or ≥1:320 in endemic areas)",
        "unit": "titer",
        "alert": "critical_high",
        "note": "Or a four-fold rise in paired sera 2-4 weeks apart confirms active brucellosis; treat with Doxycycline + Rifampin or Gentamicin for ≥6 weeks"
      }
    ],
    "significance": "Zoonotic infection from unpasteurized dairy products or animal contact (Brucella melitensis/abortus). Rose Bengal is a sensitive initial screen. Tube agglutination (SAT / Wright test) titer ≥1:160 confirms active disease. Beware of prozone phenomenon (dilute serum to 1:1280 to avoid false negatives).",
    "significanceAr": "عدوى حيوانية بكتيرية من الحليب غير المبستر ومنتجات الألبان. اختبار روز بنغال للمسح السريع، وتراص رايت (SAT) بعيار ≥1:160 يؤكد الإصابة بالحمى المالطية. تعالج بمزيج الدوكسيسيكلين والريفامبيسين لـ 6 أسابيع على الأقل.",
    "tags": [
      "infectious",
      "brucella",
      "brucellosis",
      "zoonosis",
      "fever-of-unknown-origin"
    ]
  },
  {
    "id": "lyme_disease_two_tier",
    "name": "Lyme Disease Serology (CDC 2-Tier: ELISA + Western Blot)",
    "nameAr": "فحص داء لايم المعتمد من CDC (إليزا مع ويسترن بلوت)",
    "aliases": [
      "Lyme",
      "Borrelia burgdorferi",
      "Western Blot Lyme",
      "داء لايم"
    ],
    "category": "infectious",
    "ranges": [
      {
        "group": "Tier 1: Sensitive EIA / ELISA Screen",
        "value": "Negative",
        "unit": "qualitative",
        "note": "If negative, no further testing. If positive/equivocal, proceed to Tier 2 Western Blot"
      },
      {
        "group": "Tier 2: IgM Western Blot (Illness ≤30 days)",
        "value": "≥ 2 of 3 specific bands: 23, 39, 41 kDa",
        "unit": "bands",
        "alert": "critical_high",
        "note": "Confirms acute early disseminated Lyme disease"
      },
      {
        "group": "Tier 2: IgG Western Blot (Illness >30 days)",
        "value": "≥ 5 of 10 specific bands: 18, 23, 28, 30, 39, 41, 45, 58, 66, 93 kDa",
        "unit": "bands",
        "alert": "critical_high",
        "note": "Confirms late disseminated Lyme disease (Lyme arthritis, encephalopathy)"
      }
    ],
    "significance": "Tick-borne Borrelia burgdorferi infection. Standard CDC 2-Tier algorithm: Tier 1 EIA. If positive, reflex to Tier 2 Western Blot: IgM requires ≥2 of 3 bands; IgG requires ≥5 of 10 bands. Note: In classic erythema migrans ('bull's-eye' rash), serology is unnecessary and often negative (clinical diagnosis; treat with Doxycycline immediately).",
    "significanceAr": "ينقله قراد الغزال (بكتيريا بوريليا). المعيار الثنائي لـ CDC: فحص إليزا أولاً ثم تأكيد بويسترن بلوت (IgM يتطلب حزمتين، وIgG يتطلب 5 حزم). تنبيه: طفح عين الثور الكلاسيكي يشخص سريرياً ويعالج بالدوكسيسيكلين دون انتظار التحليل.",
    "tags": [
      "infectious",
      "lyme-disease",
      "borrelia",
      "erythema-migrans",
      "tick-borne"
    ]
  },
  {
    "id": "total_ige",
    "name": "Total Serum IgE",
    "nameAr": "الغلوبولين المناعي هـ الكلي",
    "aliases": [
      "IgE",
      "Total IgE",
      "Immunoglobulin E",
      "Serum IgE"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Neonates (<1 mo)",
        "value": "<1.5",
        "unit": "IU/mL",
        "note": "Cord blood <1.5 IU/mL"
      },
      {
        "group": "Infants (1-12 mo)",
        "value": "<15",
        "unit": "IU/mL"
      },
      {
        "group": "Children (1-5 yr)",
        "value": "<60",
        "unit": "IU/mL"
      },
      {
        "group": "Children (6-9 yr)",
        "value": "<90",
        "unit": "IU/mL"
      },
      {
        "group": "Children (10-15 yr)",
        "value": "<200",
        "unit": "IU/mL"
      },
      {
        "group": "Adults (>16 yr)",
        "value": "<100",
        "unit": "IU/mL",
        "note": "Some labs cite <150-200 IU/mL"
      },
      {
        "group": "Elevated (Atopy / Helminths)",
        "value": ">100",
        "unit": "IU/mL"
      },
      {
        "group": "Markedly Elevated (ABPA / Hyper-IgE)",
        "value": ">1000",
        "unit": "IU/mL",
        "alert": "critical_high",
        "note": "Suspect Hyper-IgE (Job's) syndrome (>2000 IU/mL) or ABPA"
      }
    ],
    "significance": "Elevated in atopic dermatitis, allergic asthma, allergic rhinitis, parasitic helminthic infections, allergic bronchopulmonary aspergillosis (ABPA), Job's syndrome (hyper-IgE), and IgE myeloma. Low levels can occur in congenital hypogammaglobulinemia or ataxia-telangiectasia.",
    "significanceAr": "يرتفع في التهاب الجلد التأتبي، والربو التحسسي، والتهاب الأنف التحسسي، والعدوى الطفيلية، والداء الرشاشي القصبي الرئوي التحسسي (ABPA)، ومتلازمة جوب (فرط IgE). يفيد في استبعاد الحساسية وتقييم أهلية العلاج البيولوجي (مثل أوماليزوماب).",
    "tags": [
      "allergy",
      "immunology",
      "ige",
      "atopy",
      "asthma",
      "parasites",
      "abpa"
    ]
  },
  {
    "id": "specific_ige_rast",
    "name": "Specific IgE (RAST / ImmunoCAP)",
    "nameAr": "الغلوبولين المناعي هـ النوعي للمستأرجات",
    "aliases": [
      "RAST Test",
      "Allergen-Specific IgE",
      "ImmunoCAP",
      "sIgE"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Class 0 (Undetectable)",
        "value": "<0.35",
        "unit": "kUA/L",
        "note": "Negative, no specific antibodies"
      },
      {
        "group": "Class 1 (Low)",
        "value": "0.35 - 0.70",
        "unit": "kUA/L",
        "note": "Low level of sensitization"
      },
      {
        "group": "Class 2 (Moderate)",
        "value": "0.71 - 3.50",
        "unit": "kUA/L",
        "note": "Moderate sensitization"
      },
      {
        "group": "Class 3 (High)",
        "value": "3.51 - 17.50",
        "unit": "kUA/L",
        "note": "High sensitization, symptoms likely"
      },
      {
        "group": "Class 4 (Very High)",
        "value": "17.51 - 50.0",
        "unit": "kUA/L"
      },
      {
        "group": "Class 5 (Extremely High)",
        "value": "50.1 - 100.0",
        "unit": "kUA/L"
      },
      {
        "group": "Class 6 (Maximal)",
        "value": ">100.0",
        "unit": "kUA/L",
        "alert": "critical_high",
        "note": "Extreme allergen sensitization, severe anaphylaxis risk"
      }
    ],
    "significance": "Measures allergen-specific IgE antibodies against foods (peanut, milk, egg, seafood), aeroallergens (dust mite, pollen, pet dander), venom, or drugs. Higher classes correlate with greater likelihood of clinical reactivity, though skin prick testing and oral food challenge remain gold standards.",
    "significanceAr": "يقيس الأجسام المضادة النوعية لمستأرج معين (أغذية، استنشاقيات، سموم الحشرات، أدوية). ترتبط الطبقات المرتفعة باحتمالية أعلى لظهور أعراض سريرية وفرط الحساسية الشديد.",
    "tags": [
      "allergy",
      "specific ige",
      "rast",
      "immunocap",
      "food allergy",
      "anaphylaxis"
    ]
  },
  {
    "id": "serum_tryptase_baseline",
    "name": "Serum Total Tryptase (Baseline)",
    "nameAr": "تربتيز المصل الأساسي",
    "aliases": [
      "Tryptase Baseline",
      "Total Tryptase",
      "Mast Cell Tryptase"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Normal Baseline (Healthy)",
        "value": "<11.4",
        "unit": "ng/mL",
        "note": "Median healthy value: 3.5 - 5.0 ng/mL"
      },
      {
        "group": "Intermediate / Hereditary Alpha-Tryptasemia",
        "value": "8.0 - 20.0",
        "unit": "ng/mL",
        "note": "Hereditary alpha-tryptasemia (HalphaT) often shows baseline >8 ng/mL"
      },
      {
        "group": "Systemic Mastocytosis Major Criterion",
        "value": ">20.0",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Persistently >20 ng/mL is a minor WHO criterion for systemic mastocytosis"
      }
    ],
    "significance": "Marker of mast cell burden and activation. Persistently elevated baseline tryptase (>20 ng/mL) strongly suggests systemic mastocytosis or severe mast cell activation syndrome (MCAS), or hereditary alpha-tryptasemia. Baseline should be drawn >24-48 hours after resolution of any allergic episode.",
    "significanceAr": "علامة على كتلة الخلايا البدينة وتفعيلها. يشير الارتفاع المستمر لتربتيز الأساس (>20 نانوغرام/مل) إلى كثرة الخلايا البدينة الجهازية (Systemic Mastocytosis) أو متلازمة تفعيل الخلايا البدينة.",
    "tags": [
      "allergy",
      "tryptase",
      "mastocytosis",
      "mast cells",
      "mcas"
    ]
  },
  {
    "id": "serum_tryptase_acute",
    "name": "Serum Total Tryptase (Acute Reaction)",
    "nameAr": "تربتيز المصل الحاد أثناء التأق",
    "aliases": [
      "Acute Tryptase",
      "Anaphylaxis Tryptase",
      "Peak Tryptase"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Normal / Non-Anaphylactic",
        "value": "<11.4",
        "unit": "ng/mL"
      },
      {
        "group": "Diagnostic Acute Rise (Consensus Formula)",
        "value": "> (1.2 x baseline + 2)",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Drawn 30-120 min post-reaction; confirms acute mast cell degranulation"
      },
      {
        "group": "Severe Systemic Anaphylaxis",
        "value": ">20.0",
        "unit": "ng/mL",
        "alert": "critical_high"
      }
    ],
    "significance": "Must be drawn 30 to 120 minutes following onset of suspected anaphylaxis or severe allergic reaction. A peak value exceeding (1.2 x baseline + 2 ng/mL) confirms acute mast cell degranulation and anaphylaxis. Normal levels do not rule out food-induced anaphylaxis.",
    "significanceAr": "يُقاس بعد 30 إلى 120 دقيقة من بدء أعراض التأق الحاد. يؤكد الارتفاع الذي يتجاوز (1.2 × خط الأساس + 2 نانوغرام/مل) حدوث تفريغ حبيبات الخلايا البدينة والتأق.",
    "tags": [
      "allergy",
      "anaphylaxis",
      "acute tryptase",
      "mast cell activation",
      "emergency"
    ]
  },
  {
    "id": "ecp_eosinophil_cationic_protein",
    "name": "Eosinophil Cationic Protein (ECP)",
    "nameAr": "بروتين الحمضات الموجب",
    "aliases": [
      "ECP",
      "Serum ECP",
      "Eosinophil Activation"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Normal / Non-Inflamed",
        "value": "<15.0",
        "unit": "mcg/L",
        "note": "Optimal control <13.3 mcg/L"
      },
      {
        "group": "Mild Eosinophilic Inflammation",
        "value": "15.0 - 30.0",
        "unit": "mcg/L"
      },
      {
        "group": "Active Eosinophilic Disease (Severe Asthma/EGPA)",
        "value": ">30.0",
        "unit": "mcg/L",
        "alert": "critical_high"
      }
    ],
    "significance": "Toxic ribonuclease released by activated degranulating eosinophils. Reflects active eosinophilic airway inflammation in asthma, eosinophilic granulomatosis with polyangiitis (EGPA / Churg-Strauss), hypereosinophilic syndrome (HES), and active atopic dermatitis.",
    "significanceAr": "بروتين سام للخلايا تفرزه الحمضات المفعلة. يعكس درجة الالتهاب الحمضي النشط في الربو القصبي، ومتلازمة فرط الحمضات، وداء شيرغ ستراوس (EGPA)، والأكزيما التأتبية.",
    "tags": [
      "allergy",
      "ecp",
      "eosinophils",
      "asthma",
      "inflammation"
    ]
  },
  {
    "id": "basophil_activation_test",
    "name": "Basophil Activation Test (BAT)",
    "nameAr": "اختبار تنشيط الخلايا القاعدية",
    "aliases": [
      "BAT",
      "CD63 Basophil",
      "CD203c Basophil Flow Cytometry"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Negative (<5% Activated Basophils)",
        "value": "<5",
        "unit": "% CD63+",
        "note": "Unstimulated / Negative control <5%"
      },
      {
        "group": "Positive Sensitization (Degranulation)",
        "value": ">=15",
        "unit": "% CD63+",
        "alert": "critical_high",
        "note": "Stimulation index >2.0 and >=15% CD63+ basophils confirms in vitro allergy"
      }
    ],
    "significance": "Flow cytometric functional assay measuring surface expression of activation markers (CD63, CD203c) on basophils upon allergen challenge. Highly specific for drug allergies (penicillin, neuromuscular blockers, NSAIDs), venom, and complex food allergies.",
    "significanceAr": "اختبار وظيفي بالقياس الخلوي الجرياني يقيس تعبير CD63 و CD203c على الخلايا القاعدية عند تعرضها للمستأرج. دقيق جداً في تشخيص حساسية الأدوية وحساسية سم النحل/الدبابير.",
    "tags": [
      "allergy",
      "basophil",
      "bat",
      "cd63",
      "flow cytometry",
      "drug allergy"
    ]
  },
  {
    "id": "serum_igg_total",
    "name": "Serum Total IgG",
    "nameAr": "الغلوبولين المناعي ج الكلي",
    "aliases": [
      "IgG Total",
      "Immunoglobulin G",
      "Serum IgG"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Newborns (0-1 mo)",
        "value": "700 - 1600",
        "unit": "mg/dL",
        "note": "Reflects maternal transplacental IgG"
      },
      {
        "group": "Infants (2-5 mo)",
        "value": "170 - 600",
        "unit": "mg/dL",
        "note": "Physiologic nadir (lowest lifetime IgG)"
      },
      {
        "group": "Infants (6-12 mo)",
        "value": "300 - 1000",
        "unit": "mg/dL"
      },
      {
        "group": "Children (1-3 yr)",
        "value": "400 - 1200",
        "unit": "mg/dL"
      },
      {
        "group": "Children (4-9 yr)",
        "value": "600 - 1400",
        "unit": "mg/dL"
      },
      {
        "group": "Adults (>16 yr)",
        "value": "700 - 1600",
        "unit": "mg/dL"
      },
      {
        "group": "Critical Low (Severe Immunodeficiency)",
        "value": "<200",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "High risk of life-threatening encapsulated bacterial infections"
      },
      {
        "group": "Critical High (Myeloma / Hypergammaglobulinemia)",
        "value": ">3000",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Suspect multiple myeloma or hyperviscosity syndrome"
      }
    ],
    "significance": "Major serum immunoglobulin providing long-term humoral immunity. Low levels indicate common variable immunodeficiency (CVID), X-linked agammaglobulinemia (Bruton), severe combined immunodeficiency (SCID), or protein-losing enteropathy. High levels occur in monoclonal gammopathies (IgG myeloma), chronic infections, autoimmune diseases, and sarcoidosis.",
    "significanceAr": "الغلوبولين المناعي الأساسي في المصل. ينخفض في نقص المناعة المتغير الشائع (CVID)، وداء بروتون، ويفقد في المتلازمة الكلوية. يرتفع في الورم النقوي المتعدد، وأمراض المناعة الذاتية، والعدوى المزمنة.",
    "tags": [
      "allergy",
      "immunology",
      "igg",
      "immunoglobulins",
      "cvid",
      "myeloma"
    ]
  },
  {
    "id": "serum_igg_subclasses",
    "name": "Serum IgG Subclasses (IgG1, IgG2, IgG3, IgG4)",
    "nameAr": "الفئات الفرعية للغلوبولين المناعي ج",
    "aliases": [
      "IgG Subclasses",
      "IgG1",
      "IgG2",
      "IgG3",
      "IgG4"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "IgG1 Adult",
        "value": "380 - 930",
        "unit": "mg/dL",
        "note": "60-70% of total IgG; antibodies to protein antigens"
      },
      {
        "group": "IgG2 Adult",
        "value": "150 - 550",
        "unit": "mg/dL",
        "note": "20-30% of total IgG; antibodies to polysaccharide capsules (Pneumococcus)"
      },
      {
        "group": "IgG3 Adult",
        "value": "22 - 176",
        "unit": "mg/dL",
        "note": "4-8% of total IgG; potent complement activator"
      },
      {
        "group": "IgG4 Adult (Normal)",
        "value": "4 - 86",
        "unit": "mg/dL",
        "note": "1-4% of total IgG"
      },
      {
        "group": "IgG4 Elevated (IgG4-Related Disease)",
        "value": ">135",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Diagnostic threshold for IgG4-related systemic disease (IgG4-RD)"
      }
    ],
    "significance": "IgG subclass deficiencies can occur despite normal total IgG: IgG2 deficiency leads to recurrent sinopulmonary encapsulated bacterial infections (Streptococcus pneumoniae, Haemophilus influenzae). IgG4 elevation is hallmark of IgG4-related disease (autoimmune pancreatitis, Riedel thyroiditis, retroperitoneal fibrosis).",
    "significanceAr": "نقص الفئة IgG2 يسبب التهابات تنفسية جرثومية متكررة بالبكتيريا المغلفة. ارتفاع الفئة IgG4 (>135 مجم/ديسيلتر) علامة مميزة للأمراض المرتبطة بـ IgG4 مثل التهاب البنكرياس المناعي الذاتي والتليف خلف الصفاق.",
    "tags": [
      "allergy",
      "immunology",
      "igg subclasses",
      "igg4-rd",
      "igg2 deficiency"
    ]
  },
  {
    "id": "serum_iga_total",
    "name": "Serum Total IgA",
    "nameAr": "الغلوبولين المناعي أ الكلي",
    "aliases": [
      "IgA Total",
      "Immunoglobulin A",
      "Serum IgA"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Infants (0-1 yr)",
        "value": "15 - 80",
        "unit": "mg/dL"
      },
      {
        "group": "Children (1-5 yr)",
        "value": "25 - 150",
        "unit": "mg/dL"
      },
      {
        "group": "Children (6-15 yr)",
        "value": "50 - 250",
        "unit": "mg/dL"
      },
      {
        "group": "Adults (>16 yr)",
        "value": "70 - 400",
        "unit": "mg/dL"
      },
      {
        "group": "Selective IgA Deficiency (Absolute)",
        "value": "<7",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Severe anaphylaxis risk if given blood products containing IgA"
      },
      {
        "group": "Elevated (IgA Nephropathy / Myeloma)",
        "value": ">450",
        "unit": "mg/dL"
      }
    ],
    "significance": "Predominant mucosal surface defense antibody. Selective IgA deficiency (<7 mg/dL) is the most common primary immunodeficiency (1:600); patients risk severe anaphylaxis upon transfusion with blood products containing IgA. Elevated in IgA nephropathy (Berger disease), Henoch-Schonlein purpura (IgAV), and IgA myeloma.",
    "significanceAr": "خط الدفاع الأول على الأسطح المخاطية. نقص IgA الانتقائي (<7 مجم/ديسيلتر) هو أشيع نقص مناعة أولي، ويحمل خطر التأق عند نقل الدم. يرتفع في اعتلال الكلية بـ IgA والورم النقوي.",
    "tags": [
      "allergy",
      "immunology",
      "iga",
      "iga deficiency",
      "transfusion reaction",
      "berger"
    ]
  },
  {
    "id": "serum_igm_total",
    "name": "Serum Total IgM",
    "nameAr": "الغلوبولين المناعي م الكلي",
    "aliases": [
      "IgM Total",
      "Immunoglobulin M",
      "Serum IgM"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Neonates (Cord Blood)",
        "value": "<20",
        "unit": "mg/dL",
        "note": "Elevation >20 in cord blood indicates intrauterine congenital infection (TORCH)"
      },
      {
        "group": "Infants (1-12 mo)",
        "value": "30 - 120",
        "unit": "mg/dL"
      },
      {
        "group": "Children (1-10 yr)",
        "value": "50 - 200",
        "unit": "mg/dL"
      },
      {
        "group": "Adult Males",
        "value": "40 - 230",
        "unit": "mg/dL"
      },
      {
        "group": "Adult Females",
        "value": "45 - 280",
        "unit": "mg/dL"
      },
      {
        "group": "Critical Low (Immunodeficiency)",
        "value": "<20",
        "unit": "mg/dL",
        "alert": "critical_low"
      },
      {
        "group": "Critical High (Waldenstrom / Hyper-IgM)",
        "value": ">500",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Suspect Waldenstrom macroglobulinemia or hyper-IgM syndrome; risk of hyperviscosity"
      }
    ],
    "significance": "First antibody produced in primary immune response; pentameric structure. Cord blood IgM >20 mg/dL suggests congenital TORCH infection. Massively elevated in Waldenstrom macroglobulinemia (causing hyperviscosity syndrome) and Hyper-IgM syndrome (CD40L defect).",
    "significanceAr": "أول غلوبولين يظهر في الاستجابة المناعية الأولية. ارتفاعه في دم الحبل السري يشير إلى عدوى خلقية جنينية (TORCH). يرتفع جداً في داء فالدنشتروم مسبباً متلازمة فرط لزوجة الدم.",
    "tags": [
      "allergy",
      "immunology",
      "igm",
      "waldenstrom",
      "torch",
      "hyperviscosity"
    ]
  },
  {
    "id": "serum_igd_total",
    "name": "Serum Total IgD",
    "nameAr": "الغلوبولين المناعي د الكلي",
    "aliases": [
      "IgD",
      "Immunoglobulin D",
      "HIDS Marker"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "<10.0",
        "unit": "mg/dL",
        "note": "Typically 0.5 - 3.0 mg/dL"
      },
      {
        "group": "Elevated (HIDS / Mevalonate Kinase Deficiency)",
        "value": ">10.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Persistently >10 mg/dL (>100 U/mL) characteristic of Hyper-IgD periodic fever syndrome"
      }
    ],
    "significance": "Trace immunoglobulin found primarily on mature B cell membranes. Persistently elevated levels (>10 mg/dL) are characteristic of Hyper-IgD syndrome (HIDS / mevalonate kinase deficiency), an autoinflammatory periodic fever syndrome.",
    "significanceAr": "يتواجد بتركيزات ضئيلة جداً في المصل. يفيد تشخيصياً في متلازمة فرط IgD والحمى الدورية (HIDS) الناتجة عن عوز ميفالونات كينيز.",
    "tags": [
      "allergy",
      "immunology",
      "igd",
      "hids",
      "periodic fever",
      "autoinflammatory"
    ]
  },
  {
    "id": "c1_esterase_inhibitor_antigen",
    "name": "C1 Esterase Inhibitor Antigen (C1-INH)",
    "nameAr": "مستضد مثبط C1 استراز",
    "aliases": [
      "C1-INH Antigen",
      "C1 Inhibitor Protein",
      "Hereditary Angioedema Type I"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "19 - 37",
        "unit": "mg/dL",
        "note": "Reference range 21 - 39 mg/dL in some assays"
      },
      {
        "group": "Deficient (Hereditary Angioedema Type I)",
        "value": "<10",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "HAE Type I represents 85% of cases (low level and low function)"
      }
    ],
    "significance": "Regulates classical complement and contact kinin pathways. Decreased levels (<30% normal) diagnose Type I Hereditary Angioedema (HAE), predisposing to recurrent life-threatening subcutaneous and laryngeal angioedema without urticaria.",
    "significanceAr": "ينظم مسار المتممة وتوليد البراديكينين. انخفاضه الشديد يشخص الوذمة الوعائية الوراثية من النمط الأول (HAE Type I)، التي تسبب نوبات تورم حنجري وبطني خطيرة بدون شري.",
    "tags": [
      "allergy",
      "c1-inh",
      "hereditary angioedema",
      "hae",
      "complement",
      "bradykinin"
    ]
  },
  {
    "id": "c1_esterase_inhibitor_functional",
    "name": "C1 Esterase Inhibitor Functional Activity",
    "nameAr": "النشاط الوظيفي لمثبط C1 استراز",
    "aliases": [
      "C1-INH Function",
      "C1 Esterase Inhibitor Activity",
      "HAE Type II"
    ],
    "category": "allergy",
    "ranges": [
      {
        "group": "Normal Activity",
        "value": ">=70",
        "unit": "% of normal"
      },
      {
        "group": "Equivocal / Borderline",
        "value": "50 - 69",
        "unit": "% of normal"
      },
      {
        "group": "Deficient (HAE Type I & II)",
        "value": "<50",
        "unit": "% of normal",
        "alert": "critical_low",
        "note": "Decreased in both HAE Type I and Type II (<50% normal function)"
      }
    ],
    "significance": "Essential functional test. In Hereditary Angioedema Type II (15% of cases), C1-INH antigen level is normal or elevated, but functional activity is markedly decreased (<50%). Distinguishes HAE Type II from idiopathic angioedema.",
    "significanceAr": "اختبار وظيفي جوهري. في الوذمة الوعائية الوراثية من النمط الثاني (HAE Type II) يكون تركيز البروتين طبيعياً لكن وظيفته متدنية بشدة (<50%).",
    "tags": [
      "allergy",
      "c1-inh function",
      "angioedema",
      "hae type ii",
      "complement"
    ]
  },
  {
    "id": "ipth_parathyroid_hormone",
    "name": "Intact Parathyroid Hormone (iPTH)",
    "nameAr": "هرمون جارات الدرق السليم",
    "aliases": [
      "iPTH",
      "PTH",
      "Parathormone",
      "Intact PTH"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Normal Adults (Euparathyroid)",
        "value": "15 - 65",
        "unit": "pg/mL",
        "note": "Or 1.6 - 6.9 pmol/L; must interpret with concurrent serum calcium"
      },
      {
        "group": "CKD Stage 3 Target (KDOQI)",
        "value": "35 - 70",
        "unit": "pg/mL"
      },
      {
        "group": "CKD Stage 4 Target (KDOQI)",
        "value": "70 - 110",
        "unit": "pg/mL"
      },
      {
        "group": "CKD Stage 5 / Dialysis Target (KDIGO)",
        "value": "130 - 600",
        "unit": "pg/mL",
        "note": "2 to 9 times the upper limit of normal"
      },
      {
        "group": "Critical High (Primary Hyperparathyroidism / Parathyroid Carcinoma)",
        "value": ">150",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "In hypercalcemic patients; >500 pg/mL highly suspicious for parathyroid carcinoma"
      },
      {
        "group": "Critical Low (Post-Thyroidectomy Hypocalcemia Risk)",
        "value": "<10",
        "unit": "pg/mL",
        "alert": "critical_low",
        "note": "Predicts severe postoperative symptomatic hypocalcemia within 24h"
      }
    ],
    "significance": "Regulates calcium and phosphate homeostasis. Elevated with high calcium confirms primary hyperparathyroidism. Elevated with normal or low calcium indicates secondary hyperparathyroidism (vitamin D deficiency, CKD). Suppressed PTH with hypercalcemia indicates malignancy (PTHrP), sarcoidosis, or myeloma.",
    "significanceAr": "ينظم توازن الكالسيوم والفوسفور. ارتفاعه مع فرط الكالسيوم يؤكد فرط جارات الدرق الأولي. ارتفاعه مع نقص الكالسيوم يدل على فرط جارات الدرق الثانوي (عوز فيتامين د أو فشل كلوي). تثبيطه مع ارتفاع الكالسيوم يوجه للأورام الخبيثة.",
    "tags": [
      "bone",
      "pth",
      "ipth",
      "hyperparathyroidism",
      "hypocalcemia",
      "calcium"
    ]
  },
  {
    "id": "pthrp_parathyroid_related_protein",
    "name": "Parathyroid Hormone-Related Protein (PTHrP)",
    "nameAr": "البروتين المرتبط بهرمون جارات الدرق",
    "aliases": [
      "PTHrP",
      "PTH-Related Peptide",
      "Humoral Hypercalcemia of Malignancy"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Normal Healthy Adults",
        "value": "<2.0",
        "unit": "pmol/L",
        "note": "Or <14 pg/mL"
      },
      {
        "group": "Elevated (Humoral Hypercalcemia of Malignancy - HHM)",
        "value": ">=2.0",
        "unit": "pmol/L",
        "alert": "critical_high",
        "note": "Characteristic of squamous cell carcinomas (lung, head/neck), renal cell, and breast carcinomas"
      }
    ],
    "significance": "Main mediator of Humoral Hypercalcemia of Malignancy (HHM). Mimics PTH actions on bone resorption and renal calcium retention, but PTH is suppressed. Produced by squamous cell cancers (lung, esophagus, head & neck), renal cell carcinoma, and breast cancer.",
    "significanceAr": "الوسيط الأساسي لفرط كالسيوم الدم الخبيث الخلطي (HHM). يُفرز من أورام الخلايا الحرشفية (الرئة، الرأس والرقبة) وسرطان الكلية، ويحاكي عمل PTH في حين يكون هرمون PTH الحقيقي مثبطاً.",
    "tags": [
      "bone",
      "pthrp",
      "hypercalcemia",
      "malignancy",
      "squamous cell",
      "oncology"
    ]
  },
  {
    "id": "serum_osteocalcin",
    "name": "Serum Osteocalcin (Bone Gla-Protein)",
    "nameAr": "أوستيوكالسين المصل",
    "aliases": [
      "Osteocalcin",
      "BGP",
      "Bone Gla Protein"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Adult Males (18-50 yr)",
        "value": "14.0 - 42.0",
        "unit": "ng/mL"
      },
      {
        "group": "Premenopausal Females",
        "value": "11.0 - 32.0",
        "unit": "ng/mL"
      },
      {
        "group": "Postmenopausal Females",
        "value": "15.0 - 46.0",
        "unit": "ng/mL"
      },
      {
        "group": "Children (Active Growth)",
        "value": "25.0 - 100.0",
        "unit": "ng/mL",
        "note": "Markedly higher during pubertal growth spurts"
      },
      {
        "group": "Elevated (High Bone Turnover)",
        "value": ">50.0",
        "unit": "ng/mL",
        "note": "Paget disease, hyperparathyroidism, osteomalacia, thyrotoxicosis"
      }
    ],
    "significance": "Non-collagenous protein synthesized specifically by mature osteoblasts; marker of bone formation and bone turnover. Elevated in Paget's disease, primary hyperparathyroidism, thyrotoxicosis, osteomalacia, and during healing fractures. Decreased in hypoparathyroidism, corticosteroid therapy, and antiresorptive response.",
    "significanceAr": "بروتين تفرزه الخلايا البانية للعظم (Osteoblasts). علامة نوعية على تشكل العظم ومعدل تجدده. يرتفع في داء باجيت العظمي وفرط نشاط جارات الدرق، وينخفض مع العلاج بالكورتيكوستيرويدات ومثبطات ارتشاف العظم.",
    "tags": [
      "bone",
      "osteocalcin",
      "bone formation",
      "osteoblast",
      "paget",
      "osteoporosis"
    ]
  },
  {
    "id": "bone_specific_alkaline_phosphatase",
    "name": "Bone-Specific Alkaline Phosphatase (BSAP / Ostase)",
    "nameAr": "الفوسفاتاز القلوية النوعية للعظم",
    "aliases": [
      "BSAP",
      "Ostase",
      "Bone ALP",
      "Bone-Specific ALP"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "7.0 - 20.0",
        "unit": "mcg/L",
        "note": "Or 15 - 40 U/L"
      },
      {
        "group": "Premenopausal Females",
        "value": "5.0 - 14.0",
        "unit": "mcg/L"
      },
      {
        "group": "Postmenopausal Females",
        "value": "7.0 - 22.0",
        "unit": "mcg/L"
      },
      {
        "group": "Children & Adolescents",
        "value": "20.0 - 80.0",
        "unit": "mcg/L",
        "note": "Elevated during skeletal maturation"
      },
      {
        "group": "Markedly Elevated (Active Paget / Osteoblastic Mets)",
        "value": ">40.0",
        "unit": "mcg/L",
        "alert": "critical_high",
        "note": "Monitors response to bisphosphonates in Paget disease"
      }
    ],
    "significance": "Isoenzyme of alkaline phosphatase attached to osteoblast membranes; specific indicator of bone formation without hepatic interference. Highly elevated in Paget's disease, osteoblastic bone metastases (prostate cancer), osteomalacia, rickets, and hyperparathyroidism.",
    "significanceAr": "إنزيم نوعي للنسيج العظمي يفرزه البانيات العظمية دون تداخل كبدي. يرتفع جداً في داء باجيت والنقائل العظمية البانية للعظم (سرطان البروستاتا) والكساح.",
    "tags": [
      "bone",
      "bsap",
      "bone alp",
      "paget",
      "metastases",
      "osteoblasts"
    ]
  },
  {
    "id": "p1np_procollagen_type1_n_terminal",
    "name": "Total P1NP (Procollagen Type 1 N-Terminal Propeptide)",
    "nameAr": "الببتيد الطليعي للكولاجين النمط 1 الطرفي N",
    "aliases": [
      "P1NP",
      "Total P1NP",
      "Procollagen Type 1 Propeptide",
      "Bone Formation Marker"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Premenopausal Females",
        "value": "19 - 84",
        "unit": "mcg/L",
        "note": "IOF/IFCC recommended reference marker for bone formation"
      },
      {
        "group": "Postmenopausal Females",
        "value": "16 - 96",
        "unit": "mcg/L"
      },
      {
        "group": "Adult Males (18-50 yr)",
        "value": "20 - 76",
        "unit": "mcg/L"
      },
      {
        "group": "Adult Males (>50 yr)",
        "value": "16 - 72",
        "unit": "mcg/L"
      },
      {
        "group": "Significant Response to Teriparatide / Anabolic Therapy",
        "value": ">100",
        "unit": "mcg/L",
        "note": "Increase >10 mcg/L or >30% at 3 months confirms anabolic therapeutic response"
      }
    ],
    "significance": "International Osteoporosis Foundation (IOF) and IFCC gold-standard reference marker for bone formation. Released in equimolar amounts during type 1 collagen synthesis. Ideal for monitoring anabolic osteoporosis therapy (teriparatide, abaloparatide, romosozumab).",
    "significanceAr": "المعيار الذهبي المعتمد من المؤسسة الدولية لهشاشة العظام (IOF) لتقييم تشكل العظم. مثالي لمراقبة الاستجابة للأدوية البانية للعظم (مثل تيريباراتيد وروموسوزوماب).",
    "tags": [
      "bone",
      "p1np",
      "bone formation",
      "osteoporosis",
      "teriparatide",
      "collagen"
    ]
  },
  {
    "id": "beta_ctx_crosslaps",
    "name": "Serum Beta-CrossLaps (Beta-CTx / C-Telopeptide)",
    "nameAr": "التيلوببتيد الكربوكسيلي للكولاجين النمط 1 في المصل",
    "aliases": [
      "Beta-CTx",
      "CTX",
      "C-Telopeptide",
      "CrossLaps",
      "Bone Resorption Marker"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Premenopausal Females",
        "value": "0.11 - 0.57",
        "unit": "ng/mL",
        "note": "IOF/IFCC recommended reference marker for bone resorption; draw fasting in morning"
      },
      {
        "group": "Postmenopausal Females",
        "value": "0.14 - 1.01",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Males (18-50 yr)",
        "value": "0.12 - 0.58",
        "unit": "ng/mL"
      },
      {
        "group": "Adult Males (>50 yr)",
        "value": "0.10 - 0.70",
        "unit": "ng/mL"
      },
      {
        "group": "Elevated Bone Resorption (High Turnover)",
        "value": ">0.60",
        "unit": "ng/mL"
      },
      {
        "group": "Adequate Antiresorptive Response (Bisphosphonates/Denosumab)",
        "value": "<0.25",
        "unit": "ng/mL",
        "note": "Reduction >30% or drop to lower half of premenopausal range indicates drug compliance and efficacy"
      }
    ],
    "significance": "IOF/IFCC reference marker of bone resorption. Degradation product of mature type 1 collagen. Must be collected fasting in the early morning due to circadian rhythm. Used to assess antiresorptive response to bisphosphonates and denosumab within 3-6 months.",
    "significanceAr": "المعيار الذهبي المعتمد دولياً لتقييم ارتشاف وهدم العظم. يجب سحبه صباحاً أثناء الصيام بسبب التباين النهاري. يُستخدم لمراقبة فعالية البيسفوسفونات ودينوسوماب في علاج هشاشة العظام.",
    "tags": [
      "bone",
      "ctx",
      "beta-ctx",
      "bone resorption",
      "osteoporosis",
      "denosumab"
    ]
  },
  {
    "id": "urinary_ntx",
    "name": "Urinary N-Telopeptide (uNTx)",
    "nameAr": "التيلوببتيد الأميني للكولاجين النمط 1 في البول",
    "aliases": [
      "uNTx",
      "Urinary NTx",
      "Osteomark NTx"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "21 - 64",
        "unit": "nmol BCE/mmol Cr",
        "note": "BCE = Bone Collagen Equivalents"
      },
      {
        "group": "Premenopausal Females",
        "value": "17 - 65",
        "unit": "nmol BCE/mmol Cr"
      },
      {
        "group": "Postmenopausal Females (Untreated)",
        "value": "26 - 124",
        "unit": "nmol BCE/mmol Cr"
      },
      {
        "group": "Elevated (Rapid Bone Loss / Metastases)",
        "value": ">80",
        "unit": "nmol BCE/mmol Cr",
        "alert": "critical_high"
      }
    ],
    "significance": "Cross-linked N-telopeptide of type 1 collagen excreted in urine, normalized to creatinine. Sensitive marker of osteoclastic bone resorption; elevated in osteoporosis, bone metastasis, and Paget's disease. Falls by 40-60% within 3 months of successful antiresorptive treatment.",
    "significanceAr": "علامة بولية لنواتج هدم الكولاجين العظمي بواسطة ناقضات العظم (Osteoclasts). يرتفع في الهشاشة الشديدة والنقائل العظمية، وينخفض بشكل حاد عند نجاح العلاج بمثبطات الارتشاف.",
    "tags": [
      "bone",
      "untx",
      "bone resorption",
      "osteoclasts",
      "osteoporosis"
    ]
  },
  {
    "id": "urinary_dpd",
    "name": "Urinary Free Deoxypyridinoline (DPD)",
    "nameAr": "الديوكسي بيريدينولين الحر في البول",
    "aliases": [
      "DPD",
      "Deoxypyridinoline",
      "Pyrilinks-D"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Adult Males",
        "value": "2.3 - 5.4",
        "unit": "nmol DPD/mmol Cr"
      },
      {
        "group": "Premenopausal Females",
        "value": "3.0 - 7.4",
        "unit": "nmol DPD/mmol Cr"
      },
      {
        "group": "Postmenopausal Females",
        "value": "4.0 - 11.0",
        "unit": "nmol DPD/mmol Cr"
      },
      {
        "group": "Elevated (High Resorption State)",
        "value": ">12.0",
        "unit": "nmol DPD/mmol Cr"
      }
    ],
    "significance": "Cross-linking amino acid virtually specific to bone and dentin collagen (unlike pyridinoline which is also in cartilage). Urinary excretion reflects bone matrix degradation; not metabolized or influenced by dietary collagen intake.",
    "significanceAr": "حمض أميني رابط يتواجد نوعياً في كولاجين العظم وعاج الأسنان. لا يتأثر بالكولاجين الغذائي، ويعكس بدقة ارتشاف العظم في حالات الهشاشة وداء باجيت.",
    "tags": [
      "bone",
      "dpd",
      "deoxypyridinoline",
      "bone resorption",
      "osteoporosis"
    ]
  },
  {
    "id": "serum_fgf23",
    "name": "Fibroblast Growth Factor 23 (FGF-23 / Intact FGF-23)",
    "nameAr": "عامل نمو الأرومة الليفية 23",
    "aliases": [
      "FGF-23",
      "FGF23",
      "Phosphatonin",
      "Intact FGF23"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Healthy Adults (Intact FGF-23)",
        "value": "20 - 70",
        "unit": "pg/mL",
        "note": "Or 10 - 50 pg/mL depending on ELISA kit"
      },
      {
        "group": "C-Terminal FGF-23 Assay",
        "value": "<180",
        "unit": "RU/mL"
      },
      {
        "group": "Tumor-Induced Osteomalacia (TIO) / XLH",
        "value": ">100",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Inappropriately elevated in hypophosphatemia with renal phosphate wasting"
      },
      {
        "group": "CKD Mineral & Bone Disorder (Advanced CKD)",
        "value": ">1000",
        "unit": "pg/mL",
        "note": "Progressive rise as eGFR declines; earliest biomarker of altered phosphate balance"
      }
    ],
    "significance": "Phosphaturic hormone produced by osteocytes and osteoblasts. Inhibits renal tubular phosphate reabsorption (downregulates NaPi-2a/2c) and suppresses 1-alpha-hydroxylase, decreasing calcitriol (1,25-(OH)2D). Pathologically elevated in X-linked hypophosphatemia (XLH), tumor-induced osteomalacia (TIO), and progressive CKD.",
    "significanceAr": "هرمون يفرزه النسيج العظمي يسبب إطراح الفوسفات الكلوي ويثبط تصنيع فيتامين د النشط. يرتفع بشدة في الكساح ناقص الفوسفات المرتبط بالصبغي X ولين العظام المحرض بالأورام (TIO) والقصور الكلوي المزمن.",
    "tags": [
      "bone",
      "fgf23",
      "phosphate wasting",
      "hypophosphatemia",
      "xlh",
      "tio",
      "ckd-mbd"
    ]
  },
  {
    "id": "soluble_klotho",
    "name": "Soluble Alpha-Klotho Protein",
    "nameAr": "بروتين كلوثو الذواب ألفا",
    "aliases": [
      "Klotho",
      "sKlotho",
      "Soluble Klotho",
      "Anti-Aging Protein"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Healthy Adults",
        "value": "400 - 1600",
        "unit": "pg/mL",
        "note": "Median ~700-800 pg/mL; declines with aging"
      },
      {
        "group": "Severe Decline (Advanced CKD / Vascular Calcification)",
        "value": "<300",
        "unit": "pg/mL",
        "alert": "critical_low",
        "note": "Early predictor of progressive renal decline and arterial calcification"
      }
    ],
    "significance": "Essential obligate co-receptor for FGF-23 signaling in renal proximal and distal tubules. Klotho deficiency occurs early in CKD, causing FGF-23 resistance, hyperphosphatemia, accelerated vascular calcification, and premature aging phenotype.",
    "significanceAr": "مستقبل مشارك أساسي لإشارات FGF-23 في الكلية. يؤدي نقصه المبكر في مرض الكلى المزمن إلى مقاومة FGF-23، فرط فوسفات الدم، وتكلس الأوعية الدموية المتسارع.",
    "tags": [
      "bone",
      "klotho",
      "fgf23",
      "ckd",
      "vascular calcification"
    ]
  },
  {
    "id": "serum_sclerostin",
    "name": "Serum Sclerostin",
    "nameAr": "سكليروستين المصل",
    "aliases": [
      "Sclerostin",
      "SOST Gene Product",
      "Wnt Inhibitor"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Premenopausal Females",
        "value": "20 - 45",
        "unit": "pmol/L",
        "note": "Or 0.3 - 0.7 ng/mL"
      },
      {
        "group": "Postmenopausal Females",
        "value": "30 - 65",
        "unit": "pmol/L"
      },
      {
        "group": "Adult Males",
        "value": "35 - 75",
        "unit": "pmol/L",
        "note": "Higher in males than females; increases with age"
      },
      {
        "group": "Elevated (Immobilization / Osteocyte Overproduction)",
        "value": ">80",
        "unit": "pmol/L",
        "note": "High levels suppress osteoblast Wnt/LRP5 pathway, halting bone synthesis"
      }
    ],
    "significance": "Osteocyte-derived negative regulator of bone formation that binds LRP5/6 and antagonizes the canonical Wnt/beta-catenin signaling pathway. Target of monoclonal antibody romosozumab, which inhibits sclerostin to promote massive new bone formation.",
    "significanceAr": "بروتين تفرزه الخلايا العظمية يثبط مسار Wnt/beta-catenin وبالتالي يوقف بناء العظم. يستهدفه دواء روموسوزوماب (المثبط للسكليروستين) لتحفيز بناء عظمي قوي لعلاج الهشاشة الشديدة.",
    "tags": [
      "bone",
      "sclerostin",
      "wnt pathway",
      "osteocytes",
      "romosozumab",
      "bone formation"
    ]
  },
  {
    "id": "tartrate_resistant_acid_phosphatase_5b",
    "name": "Tartrate-Resistant Acid Phosphatase 5b (TRAP 5b)",
    "nameAr": "الفوسفاتاز الحمضية المقاومة للطرطرات 5b",
    "aliases": [
      "TRAP 5b",
      "TRACP 5b",
      "Osteoclastic Acid Phosphatase"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Premenopausal Females",
        "value": "1.2 - 3.8",
        "unit": "U/L"
      },
      {
        "group": "Postmenopausal Females",
        "value": "1.5 - 4.5",
        "unit": "U/L"
      },
      {
        "group": "Adult Males",
        "value": "1.4 - 4.2",
        "unit": "U/L"
      },
      {
        "group": "Elevated (Bone Metastases / High Osteoclast Number)",
        "value": ">5.5",
        "unit": "U/L",
        "alert": "critical_high"
      }
    ],
    "significance": "Specific enzyme secreted solely by active, adhering osteoclasts during bone lacunar resorption. Unlike collagen degradation products, TRAP 5b reflects osteoclast number and activity, and its serum levels are independent of renal function and diet.",
    "significanceAr": "إنزيم تفرزه ناقضات العظم النشطة فقط أثناء عملية تآكل العظم. يتميز بأنه لا يتأثر بوظائف الكلى أو الغذاء، ويعكس بدقة عدد ونشاط ناقضات العظم في النقائل وهشاشة العظام.",
    "tags": [
      "bone",
      "trap 5b",
      "osteoclasts",
      "bone resorption",
      "metastases"
    ]
  },
  {
    "id": "calcium_creatinine_clearance_ratio",
    "name": "Calcium-to-Creatinine Clearance Ratio (CCCR / FeCa)",
    "nameAr": "نسبة تصفية الكالسيوم إلى الكرياتينين",
    "aliases": [
      "CCCR",
      "FeCa",
      "Fractional Excretion of Calcium",
      "FHH Calculator"
    ],
    "category": "bone",
    "ranges": [
      {
        "group": "Familial Hypocalciuric Hypercalcemia (FHH)",
        "value": "<0.01",
        "unit": "ratio (<1%)",
        "note": "CCCR <0.01 (<1%) has 85% sensitivity for FHH; parathyroid surgery will NOT cure FHH"
      },
      {
        "group": "Indeterminate / Borderline Zone",
        "value": "0.01 - 0.02",
        "unit": "ratio (1-2%)",
        "note": "Requires CaSR genetic testing and family screening"
      },
      {
        "group": "Primary Hyperparathyroidism (Typical)",
        "value": ">0.02",
        "unit": "ratio (>2%)",
        "note": "CCCR >0.02 (>2%) supports primary hyperparathyroidism over FHH"
      }
    ],
    "significance": "Calculated as (Urine Ca x Serum Cr) / (Serum Ca x Urine Cr) using 24h or spot urine. Critical in differentiating Familial Hypocalciuric Hypercalcemia (FHH, CCCR <0.01) from Primary Hyperparathyroidism (CCCR >0.02), preventing unnecessary parathyroidectomies in benign FHH.",
    "significanceAr": "تُحسب لمعادلة إطراح الكالسيوم الكلوي. ذات أهمية بالغة للتفريق بين فرط كالسيوم الدم العائلي بنقص كالسيوم البول (FHH، النسبة <0.01) وفرط جارات الدرق الأولي (النسبة >0.02) لمنع استئصال جارات الدرق الخاطئ.",
    "tags": [
      "bone",
      "cccr",
      "feca",
      "fhh",
      "hyperparathyroidism",
      "calcium"
    ]
  },
  {
    "id": "amylase_serum_total",
    "name": "Serum Total Amylase",
    "nameAr": "أميلاز المصل الكلي",
    "aliases": [
      "Amylase",
      "Total Amylase",
      "Serum Amylase",
      "AMY"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "30 - 110",
        "unit": "U/L",
        "note": "Assay dependent, some cite 25-125 U/L"
      },
      {
        "group": "Elderly (>70 yr)",
        "value": "25 - 160",
        "unit": "U/L"
      },
      {
        "group": "Diagnostic Acute Pancreatitis (>=3x ULN)",
        "value": ">330",
        "unit": "U/L",
        "alert": "critical_high",
        "note": ">=3 times upper limit of normal fulfills Atlanta criterion for acute pancreatitis"
      },
      {
        "group": "Massive Elevation (Pancreatic Necrosis / Rupture)",
        "value": ">1000",
        "unit": "U/L",
        "alert": "critical_high"
      }
    ],
    "significance": "Enzyme cleaving starch into simple sugars. Rises 6-12 hours after acute pancreatitis, peaks at 12-72 hours, and normalizes within 3-5 days. Also elevated in salivary gland diseases (mumps, parotitis), bowel perforation/ischemia, ectopic pregnancy, and macroamylasemia.",
    "significanceAr": "يرتفع خلال 6-12 ساعة من بدء التهاب البنكرياس الحاد، وتعتبر القيمة التي تتجاوز 3 أضعاف الحد الطبيعي الأعلى مشخصة للمرض. يرتفع أيضاً في النكاف، وثقب الأمعاء، والحمل الهاجر، وتضخم الأميلاز في الدم (Macroamylasemia).",
    "tags": [
      "pancreatic",
      "amylase",
      "pancreatitis",
      "acute abdomen",
      "salivary"
    ]
  },
  {
    "id": "amylase_pancreatic_isoenzyme",
    "name": "Pancreatic Amylase Isoenzyme (P-Amylase)",
    "nameAr": "نظير أميلاز البنكرياس الإنزيمي",
    "aliases": [
      "P-Amylase",
      "Pancreatic Isoamylase",
      "p-type amylase"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "13 - 53",
        "unit": "U/L",
        "note": "Represents 40-50% of total serum amylase"
      },
      {
        "group": "Diagnostic Pancreatitis Elevation",
        "value": ">160",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "More specific than total amylase; eliminates salivary contribution"
      }
    ],
    "significance": "Differentiates pancreatic hyperamylasemia from salivary hyperamylasemia (S-type, e.g., mumps, parotid tumor, bulimia). Unaffected by salivary disease, making it markedly more specific for acute pancreatitis and pancreatic trauma.",
    "significanceAr": "يميز بدقة بين الارتفاع البنكرياسي للأميلاز والارتفاع اللعابي (كما في النكاف وأورام الغدة النكفية والنهام العصبي).",
    "tags": [
      "pancreatic",
      "p-amylase",
      "isoenzyme",
      "pancreatitis",
      "salivary"
    ]
  },
  {
    "id": "lipase_serum",
    "name": "Serum Lipase",
    "nameAr": "ليباز المصل",
    "aliases": [
      "Lipase",
      "Serum Lipase",
      "LPS"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "10 - 60",
        "unit": "U/L",
        "note": "Assay dependent, some methods 0 - 50 or 13 - 60 U/L"
      },
      {
        "group": "Diagnostic Acute Pancreatitis (>=3x ULN)",
        "value": ">180",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Atlanta diagnostic threshold (>=3x ULN); more sensitive and specific than amylase"
      },
      {
        "group": "Massive Elevation (>10x ULN)",
        "value": ">600",
        "unit": "U/L",
        "alert": "critical_high",
        "note": "Severe acute necrotizing pancreatitis, duct obstruction, or choledocholithiasis"
      }
    ],
    "significance": "Gold-standard enzymatic biomarker for acute pancreatitis. Rises within 4-8 hours, peaks at 24 hours, and remains elevated for 8-14 days (longer window than amylase). Sensitivity 85-100%, specificity 95-99%. Less susceptible to salivary contamination or macro-complexes.",
    "significanceAr": "المعيار الذهبي لتشخيص التهاب البنكرياس الحاد. يرتفع خلال 4-8 ساعات ويظل مرتفعاً لمدة 8-14 يوماً (فترة أطول بكثير من الأميلاز). نوعيته وحساسيته تتجاوزان 90%.",
    "tags": [
      "pancreatic",
      "lipase",
      "pancreatitis",
      "acute abdomen",
      "gold standard"
    ]
  },
  {
    "id": "amylase_creatinine_clearance_ratio",
    "name": "Amylase-to-Creatinine Clearance Ratio (ACCR)",
    "nameAr": "نسبة تصفية الأميلاز إلى الكرياتينين",
    "aliases": [
      "ACCR",
      "Amylase Clearance",
      "Macroamylasemia Screen"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Range",
        "value": "1.0 - 4.0",
        "unit": "%",
        "note": "ACCR = [(U-Amy x S-Cr) / (S-Amy x U-Cr)] x 100"
      },
      {
        "group": "Macroamylasemia Diagnostic (<1%)",
        "value": "<1.0",
        "unit": "%",
        "alert": "critical_low",
        "note": "Amylase bound to immunoglobulins cannot be filtered by glomerulus; benign cause of high serum amylase"
      },
      {
        "group": "Acute Pancreatitis Classic (>5%)",
        "value": ">5.0",
        "unit": "%",
        "note": "Historically cited; however burns, DKA, and renal failure also raise ACCR"
      }
    ],
    "significance": "Crucial for identifying macroamylasemia (ACCR <1%), a benign condition where circulating amylase complexes with immunoglobulins (IgA/IgG), preventing renal filtration and causing chronic hyperamylasemia with normal urinary amylase. Prevents unnecessary invasive abdominal workups.",
    "significanceAr": "أساسي لكشف تضخم الأميلاز في الدم (Macroamylasemia، النسبة <1%) حيث يرتبط الأميلاز بالأجسام المضادة فلا يترشح كلوياً، مما يسبب ارتفاعاً مزمناً غير مرضي في المصل ويمنع إجراء فحوصات باضعة لا داعي لها.",
    "tags": [
      "pancreatic",
      "accr",
      "macroamylasemia",
      "amylase clearance"
    ]
  },
  {
    "id": "serum_trypsinogen_prss1",
    "name": "Serum Trypsinogen / Cationic Trypsinogen",
    "nameAr": "تربسينوجين المصل / التربسين الكاتيوني",
    "aliases": [
      "Serum Trypsinogen",
      "Trypsinogen-1",
      "Immunoreactive Trypsinogen",
      "IRT"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "10 - 57",
        "unit": "ng/mL",
        "note": "Or 100 - 400 mcg/L depending on assay"
      },
      {
        "group": "Neonatal Cystic Fibrosis Screening (High IRT)",
        "value": ">60",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "IRT elevated in neonates with cystic fibrosis due to blocked pancreatic ductules"
      },
      {
        "group": "Chronic Pancreatitis Severe Exocrine Insufficiency",
        "value": "<20",
        "unit": "ng/mL",
        "alert": "critical_low",
        "note": "Profound loss of acinar parenchyma (<20 ng/mL)"
      }
    ],
    "significance": "Immunoreactive Trypsinogen (IRT) is the cornerstone of newborn screening for Cystic Fibrosis (CF). In adults, elevated IRT indicates acute pancreatitis, while profoundly subnormal levels (<20 ng/mL) indicate end-stage chronic pancreatitis with severe exocrine pancreatic insufficiency.",
    "significanceAr": "الركيزة الأساسية في المسح الوليدي لمرض التليف الكيسي (CF). في البالغين، يدل هبوطه الشديد (<20 نانوغرام/مل) على ضمور أنسجة البنكرياس وقصور وظيفته الإفرازية الخارجية المزمن.",
    "tags": [
      "pancreatic",
      "trypsinogen",
      "irt",
      "cystic fibrosis",
      "chronic pancreatitis",
      "exocrine"
    ]
  },
  {
    "id": "urinary_trypsinogen_2_dipstick",
    "name": "Urinary Trypsinogen-2 Dipstick",
    "nameAr": "شريط فحص تربسينوجين-2 في البول",
    "aliases": [
      "Urinary Trypsinogen-2",
      "Actim Pancreatitis",
      "Rapid Pancreatitis Test"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Negative (Non-Pancreatitis)",
        "value": "<50",
        "unit": "mcg/L",
        "note": "High negative predictive value (>98%) in acute abdominal pain"
      },
      {
        "group": "Positive (Acute Pancreatitis)",
        "value": ">=50",
        "unit": "mcg/L",
        "alert": "critical_high",
        "note": "Rapid bedside qualitative/semi-quantitative strip"
      }
    ],
    "significance": "Rapid point-of-care dipstick test for acute pancreatitis in the emergency department. Possesses 98% negative predictive value (NPV); a negative test virtually rules out acute pancreatitis within minutes of presentation.",
    "significanceAr": "اختبار سريع بنقطة الرعاية في الطوارئ لنفي التهاب البنكرياس الحاد، حيث تصل قيمته التنبؤية السلبية إلى 98%، مما ينفي التشخيص بسرعة.",
    "tags": [
      "pancreatic",
      "trypsinogen-2",
      "point of care",
      "pancreatitis",
      "emergency"
    ]
  },
  {
    "id": "secretin_stimulation_test",
    "name": "Secretin Pancreatic Stimulation Test",
    "nameAr": "اختبار تحفيز البنكرياس بالسيكريتين",
    "aliases": [
      "Secretin Test",
      "Duodenal Bicarbonate Peak",
      "Exocrine Function Test"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Peak Bicarbonate Output",
        "value": ">=80",
        "unit": "mEq/L",
        "note": "Duodenal aspirate peak [HCO3-] after IV secretin (0.2 mcg/kg)"
      },
      {
        "group": "Mild-to-Moderate Exocrine Insufficiency",
        "value": "50 - 79",
        "unit": "mEq/L"
      },
      {
        "group": "Severe Chronic Pancreatitis / Exocrine Failure",
        "value": "<50",
        "unit": "mEq/L",
        "alert": "critical_low",
        "note": "Historical gold-standard functional test for early chronic pancreatitis"
      }
    ],
    "significance": "Historical gold-standard functional test of pancreatic ductal exocrine reserve. Secretin stimulates ductal cells to secrete bicarbonate-rich fluid. Peak duodenal bicarbonate <80 mEq/L detects early chronic pancreatitis before calcifications appear on imaging.",
    "significanceAr": "المعيار الذهبي الوظيفي الدقيق لتقييم الاحتياطي الإفرازي للبنكرياس. عجز البيكربونات عن بلوغ 80 مكافئ/لتر بعد السيكريتين يؤكد قصور البنكرياس والتهابه المزمن المبكر.",
    "tags": [
      "pancreatic",
      "secretin test",
      "bicarbonate",
      "chronic pancreatitis",
      "exocrine"
    ]
  },
  {
    "id": "serum_gastrin",
    "name": "Fasting Serum Gastrin",
    "nameAr": "غاسترين المصل أثناء الصيام",
    "aliases": [
      "Gastrin",
      "Fasting Gastrin",
      "Serum Gastrin-17"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Fasting Adults",
        "value": "<100",
        "unit": "pg/mL",
        "note": "Or <100 ng/L; must stop PPIs for 1-2 weeks before testing"
      },
      {
        "group": "Mild-to-Moderate Elevation (PPI Use / Atrophic Gastritis)",
        "value": "100 - 400",
        "unit": "pg/mL",
        "note": "PPI therapy commonly elevates gastrin 2-4 fold; check gastric pH"
      },
      {
        "group": "Markedly Elevated / Zollinger-Ellison Diagnostic",
        "value": ">1000",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "With gastric pH <2.0 is virtually diagnostic of Zollinger-Ellison syndrome (Gastrinoma)"
      }
    ],
    "significance": "Peptide hormone stimulating gastric acid secretion. Massively elevated (>1000 pg/mL) in gastrinoma (Zollinger-Ellison syndrome, MEN1) when accompanied by low gastric pH (<2.0). Mildly elevated in PPI use, atrophic gastritis (autoimmune pernicious anemia), and H. pylori.",
    "significanceAr": "هرمون محفز لإفراز حمض المعدة. ارتفاعه فوق 1000 بيكوغرام/مل مع حموضة معدية (pH <2.0) يشخص متلازمة زولينجر-إليسون (الورم الغاستريني). يرتفع باعتدال مع مثبطات مضخة البروتون والتهاب المعدة الضموري.",
    "tags": [
      "pancreatic",
      "gastrin",
      "gastrinoma",
      "zollinger ellison",
      "men1",
      "peptic ulcer"
    ]
  },
  {
    "id": "secretin_gastrin_provocative_test",
    "name": "Secretin Stimulation Test for Gastrinoma",
    "nameAr": "اختبار تحفيز السيكريتين للورم الغاستريني",
    "aliases": [
      "Secretin-Gastrin Test",
      "Secretin Provocation Gastrinoma",
      "ZES Provocation"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal / Non-Gastrinoma Response",
        "value": "<120",
        "unit": "pg/mL rise",
        "note": "Secretin normally inhibits or produces negligible rise in antral gastrin"
      },
      {
        "group": "Diagnostic Gastrinoma (Paradoxical Rise)",
        "value": ">120",
        "unit": "pg/mL rise above baseline",
        "alert": "critical_high",
        "note": "Paradoxical rise of gastrin >120 pg/mL at 2, 5, 10, or 15 min confirms gastrinoma (>90% sensitivity)"
      }
    ],
    "significance": "Essential test when baseline gastrin is equivocal (100-1000 pg/mL). While secretin normally suppresses normal gastric antral gastrin G-cells, gastrinoma cells paradoxically hypersecrete gastrin in response to IV secretin (2 U/kg).",
    "significanceAr": "اختبار استباقي أساسي عند كون تركيز الغاسترين ملتبساً (100-1000). يؤدي حقن السيكريتين إلى تحريض متناقض لإفراز الغاسترين (ارتفاع >120 بيكوغرام/مل) لدى مرضى الورم الغاستريني في حين يثبطه في الحالة الطبيعية.",
    "tags": [
      "pancreatic",
      "secretin provocation",
      "gastrinoma",
      "zollinger ellison",
      "paradoxical"
    ]
  },
  {
    "id": "serum_glucagon",
    "name": "Fasting Plasma Glucagon",
    "nameAr": "غلوكاغون البلازما أثناء الصيام",
    "aliases": [
      "Glucagon",
      "Fasting Glucagon",
      "Glucagonoma Marker"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Fasting Adults",
        "value": "50 - 150",
        "unit": "pg/mL",
        "note": "Or 50 - 150 ng/L; collected with protease inhibitor (aprotinin)"
      },
      {
        "group": "Elevated (Sepsis / Cirrhosis / DKA / Stress)",
        "value": "150 - 500",
        "unit": "pg/mL"
      },
      {
        "group": "Glucagonoma Diagnostic",
        "value": ">500",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Frequently >1000 pg/mL; accompanied by necrolytic migratory erythema (NME) and hyperglycemia"
      }
    ],
    "significance": "Synthesized by pancreatic alpha-islet cells to promote gluconeogenesis and glycogenolysis. Levels >500-1000 pg/mL diagnose glucagonoma, characterized by necrolytic migratory erythema, diabetes mellitus, weight loss, glossitis, and venous thrombosis.",
    "significanceAr": "هرمون من خلايا ألفا البنكرياسية. الارتفاع الشديد (>500-1000 بيكوغرام/مل) يشخص الورم الغلوكاغوني (Glucagonoma) المترافق مع الحمامي المهاجرة النخرية وداء السكري ونقص الوزن.",
    "tags": [
      "pancreatic",
      "glucagon",
      "glucagonoma",
      "necrolytic migratory erythema",
      "alpha cells"
    ]
  },
  {
    "id": "vasoactive_intestinal_peptide_vip",
    "name": "Vasoactive Intestinal Peptide (VIP)",
    "nameAr": "الببتيد المعوي الفعال في الأوعية",
    "aliases": [
      "VIP",
      "VIPoma Marker",
      "Verner-Morrison Syndrome"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "<75",
        "unit": "pg/mL",
        "note": "Some assays cite <50 or <75 pg/mL; collect in chilled EDTA with aprotinin"
      },
      {
        "group": "Diagnostic VIPoma (WDHA Syndrome)",
        "value": ">200",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Typically >500-1000 pg/mL with massive secretory diarrhea (>1-3 L/day)"
      }
    ],
    "significance": "Levels >200-500 pg/mL diagnose VIPoma (Verner-Morrison syndrome or WDHA: Watery Diarrhea, Hypokalemia, Achlorhydria), also known as pancreatic cholera. Causes massive cyclic secretory diarrhea (>3 L/day), severe dehydration, and hypokalemic acidosis.",
    "significanceAr": "يفرزه الورم الفيبومي (VIPoma / متلازمة فيرنر-موريسون) المتسبب في الكوليرا البنكرياسية (إسهال مائي غزير يتجاوز 3 لترات/يوم، هبوط بوتاسيوم حاد، وانعدام حمض المعدة).",
    "tags": [
      "pancreatic",
      "vip",
      "vipoma",
      "wdha",
      "secretory diarrhea",
      "pancreatic cholera"
    ]
  },
  {
    "id": "somatostatin_plasma",
    "name": "Plasma Somatostatin",
    "nameAr": "سوماتوستاتين البلازما",
    "aliases": [
      "Somatostatin",
      "Somatostatinoma Marker",
      "SS-14 / SS-28"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Fasting Adults",
        "value": "<30",
        "unit": "pg/mL",
        "note": "Or <18 pmol/L"
      },
      {
        "group": "Diagnostic Somatostatinoma",
        "value": ">100",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Often >1000 pg/mL; classical triad of diabetes, cholelithiasis, and steatorrhea"
      }
    ],
    "significance": "Inhibitory peptide produced by pancreatic delta cells and gastrointestinal neuroendocrine cells. Extremely high levels diagnose somatostatinoma, presenting with the classical inhibitory triad: diabetes mellitus (inhibits insulin), cholelithiasis (inhibits CCK/gallbladder motility), and steatorrhea/diarrhea.",
    "significanceAr": "ببتيد مثبط من خلايا دلتا البنكرياسية. الارتفاع الشديد يشخص الورم السوماتوستاتيني (Somatostatinoma) المترافق مع الثالوث النموذجي: السكري، حصوات المرارة، والإسهال الدهني.",
    "tags": [
      "pancreatic",
      "somatostatin",
      "somatostatinoma",
      "delta cells",
      "cholelithiasis"
    ]
  },
  {
    "id": "pancreatic_polypeptide_pp",
    "name": "Human Pancreatic Polypeptide (PP)",
    "nameAr": "الببتيد البنكرياسي البشري",
    "aliases": [
      "Pancreatic Polypeptide",
      "PP",
      "hPP",
      "PPoma Marker"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Young Adults (<40 yr)",
        "value": "<200",
        "unit": "pg/mL"
      },
      {
        "group": "Older Adults (>60 yr)",
        "value": "<400",
        "unit": "pg/mL",
        "note": "Physiologically rises with age"
      },
      {
        "group": "Elevated (Pancreatic Neuroendocrine Tumors / PPoma)",
        "value": ">1000",
        "unit": "pg/mL",
        "alert": "critical_high",
        "note": "Secreted in >50% of non-functioning pancreatic NETs and pure PPomas"
      }
    ],
    "significance": "Synthesized by F/PP cells in pancreatic islets. Elevated in functioning PPomas and serves as a valuable circulating surrogate biomarker in 50-70% of clinically 'non-functioning' pancreatic neuroendocrine tumors (pNETs) and MEN1 screening.",
    "significanceAr": "تفرزه خلايا F البنكرياسية. يرتفع في أورام PPoma ويعتبر علامة مصلية هامة لكشف ومتابعة أورام البنكرياس الغدية الصماوية غير الفعالة سريرياً (Non-functioning pNETs).",
    "tags": [
      "pancreatic",
      "pancreatic polypeptide",
      "ppoma",
      "pnet",
      "men1"
    ]
  },
  {
    "id": "serum_igg4_pancreatitis",
    "name": "Serum IgG4 in Autoimmune Pancreatitis",
    "nameAr": "الغلوبولين المناعي IgG4 في التهاب البنكرياس المناعي الذاتي",
    "aliases": [
      "IgG4 Pancreatitis",
      "Type 1 AIP Biomarker",
      "AIP IgG4"
    ],
    "category": "pancreatic",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "4 - 86",
        "unit": "mg/dL"
      },
      {
        "group": "Elevated (1x ULN threshold)",
        "value": ">135",
        "unit": "mg/dL",
        "note": "Single cutoff for IgG4-RD suspicion"
      },
      {
        "group": "Diagnostic Cutoff for Type 1 AIP (>=2x ULN)",
        "value": ">270",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Specificity approaches 99% for Type 1 Autoimmune Pancreatitis (HISORt criteria)"
      }
    ],
    "significance": "Primary serological hallmark of Type 1 Autoimmune Pancreatitis (lymphoplasmacytic sclerosing pancreatitis) and systemic IgG4-related disease. Serum level >2x ULN (>270 mg/dL) differentiates Type 1 AIP from pancreatic adenocarcinoma with high specificity.",
    "significanceAr": "العلامة المصلية الأساسية لالتهاب البنكرياس المناعي الذاتي من النمط 1 (Type 1 AIP). تجاوز القيمة لضعفي الحد الأعلى الطبيعي (>270 مجم/ديسيلتر) يتمتع بنوعية تقارب 99% في تفريقه عن سرطان غدية البنكرياس.",
    "tags": [
      "pancreatic",
      "igg4",
      "autoimmune pancreatitis",
      "aip",
      "hisort",
      "pancreatic cancer"
    ]
  },
  {
    "id": "constitutional_karyotype",
    "name": "Constitutional G-Banded Karyotype",
    "nameAr": "النمط النووي الصبغي الدستوري",
    "aliases": [
      "Karyotype",
      "Chromosome Analysis",
      "Cytogenetics",
      "G-Banding"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Normal Female",
        "value": "46,XX",
        "unit": "karyotype",
        "note": "46 chromosomes, normal female chromosomal constitution"
      },
      {
        "group": "Normal Male",
        "value": "46,XY",
        "unit": "karyotype",
        "note": "46 chromosomes, normal male chromosomal constitution"
      },
      {
        "group": "Trisomy 21 (Down Syndrome)",
        "value": "47,XX,+21 or 47,XY,+21",
        "unit": "karyotype",
        "alert": "critical_high"
      },
      {
        "group": "Trisomy 18 (Edwards Syndrome)",
        "value": "47,XX,+18 or 47,XY,+18",
        "unit": "karyotype",
        "alert": "critical_high"
      },
      {
        "group": "Trisomy 13 (Patau Syndrome)",
        "value": "47,XX,+13 or 47,XY,+13",
        "unit": "karyotype",
        "alert": "critical_high"
      },
      {
        "group": "Monosomy X (Turner Syndrome)",
        "value": "45,X",
        "unit": "karyotype",
        "alert": "critical_low"
      },
      {
        "group": "Klinefelter Syndrome",
        "value": "47,XXY",
        "unit": "karyotype",
        "alert": "critical_high"
      }
    ],
    "significance": "Microscopic examination of metaphase chromosomes (resolution 400-550 bands). Diagnoses aneuploidies, large deletions, duplications, reciprocal and Robertsonian translocations, and sex-chromosome disorders.",
    "significanceAr": "فحص مجهري للصبغيات أثناء الطور التالي. يشخص متلازمة داون (تثلث 21)، ومتلازمة إدواردز (تثلث 18)، ومتلازمة باتاو (تثلث 13)، ومتلازمة تيرنر (45,X)، ومتلازمة كلاينفلتر (47,XXY).",
    "tags": [
      "genetics",
      "karyotype",
      "cytogenetics",
      "down syndrome",
      "turner syndrome",
      "aneuploidy"
    ]
  },
  {
    "id": "factor_v_leiden_mutation",
    "name": "Factor V Leiden (F5 G1691A / R506Q Mutation)",
    "nameAr": "طفرة العامل الخامس لايدن",
    "aliases": [
      "Factor V Leiden",
      "FVL",
      "F5 G1691A",
      "Activated Protein C Resistance Mutation"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Normal (Wild Type)",
        "value": "G/G (Negative)",
        "unit": "genotype",
        "note": "Homozygous normal, no FVL mutation detected"
      },
      {
        "group": "Heterozygous Carrier",
        "value": "G/A (Heterozygote)",
        "unit": "genotype",
        "alert": "critical_high",
        "note": "3 to 8-fold increased lifetime relative risk of venous thromboembolism (VTE)"
      },
      {
        "group": "Homozygous Mutant",
        "value": "A/A (Homozygote)",
        "unit": "genotype",
        "alert": "critical_high",
        "note": "50 to 80-fold increased risk of VTE; lifetime thrombosis risk >50%"
      }
    ],
    "significance": "Most common hereditary thrombophilia (3-8% in Caucasian populations). The G1691A point mutation renders Factor Va resistant to inactivation by activated protein C (APC resistance), markedly increasing deep vein thrombosis and pulmonary embolism risk.",
    "significanceAr": "أشيع أهبة خثار وراثية. تجعل الطفرة العامل الخامس مقاوماً للتثبيط ببروتين C المفعل، مما يرفع خطر الخثار الوريدي العميق والانصمام الرئوي بمقدار 3-8 أضعاف للمتباين و50-80 ضعفاً للمتماثل.",
    "tags": [
      "genetics",
      "thrombophilia",
      "factor v leiden",
      "vte",
      "dvt",
      "pulmonary embolism"
    ]
  },
  {
    "id": "prothrombin_g20210a_mutation",
    "name": "Prothrombin (F2 G20210A) Gene Mutation",
    "nameAr": "طفرة جين البروثرومبين G20210A",
    "aliases": [
      "Prothrombin Mutation",
      "F2 G20210A",
      "Factor II Mutation"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Normal (Wild Type)",
        "value": "G/G (Negative)",
        "unit": "genotype"
      },
      {
        "group": "Heterozygous Carrier",
        "value": "G/A (Heterozygote)",
        "unit": "genotype",
        "alert": "critical_high",
        "note": "2 to 3-fold increased lifetime relative risk of VTE; elevates baseline plasma prothrombin by 30%"
      },
      {
        "group": "Homozygous Mutant",
        "value": "A/A (Homozygote)",
        "unit": "genotype",
        "alert": "critical_high",
        "note": "Rare (<0.1%); markedly increased recurrent thrombosis risk"
      }
    ],
    "significance": "Second most common inherited thrombophilia (2-3% of Caucasians). Point mutation in the 3' untranslated region of the prothrombin gene leads to increased mRNA stability and elevated circulating prothrombin levels, promoting thrombosis.",
    "significanceAr": "ثاني أشيع أهبة خثار وراثية. ترفع مستويات البروثرومبين في البلازما بنسبة 30% وتضاعف خطر الخثار الوريدي مرتين إلى ثلاث مرات لدى حاملي الطفرة المتباينة.",
    "tags": [
      "genetics",
      "thrombophilia",
      "prothrombin",
      "f2",
      "vte",
      "thrombosis"
    ]
  },
  {
    "id": "mthfr_c677t_mutation",
    "name": "MTHFR C677T & A1298C Polymorphisms",
    "nameAr": "طفرات جين اختزال ميثيلين تتراهيدروفولات",
    "aliases": [
      "MTHFR Mutation",
      "MTHFR C677T",
      "MTHFR A1298C",
      "Homocysteine Genetics"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Normal Wild Type",
        "value": "677CC / 1298AA",
        "unit": "genotype",
        "note": "Normal thermolabile enzyme activity (100%)"
      },
      {
        "group": "Heterozygote C677T",
        "value": "677CT",
        "unit": "genotype",
        "note": "~65% residual enzyme activity; usually normal homocysteine if folate replete"
      },
      {
        "group": "Homozygote C677T Mutant",
        "value": "677TT",
        "unit": "genotype",
        "note": "~30% residual activity; predisposes to hyperhomocysteinemia if folate deficient"
      },
      {
        "group": "Compound Heterozygote",
        "value": "677CT / 1298AC",
        "unit": "genotype",
        "note": "Reduced enzyme activity similar to 677TT homozygote"
      }
    ],
    "significance": "Common variants in methylenetetrahydrofolate reductase. ACMG guidelines do not recommend routine screening for thrombophilia or recurrent pregnancy loss; serum homocysteine measurement is clinically more informative.",
    "significanceAr": "تغيرات جينية شائعة في إنزيم استقلاب الفولات. لا توصي الكلية الأمريكية للوراثة الطبية بالفحص الروتيني لها للجلطات، ويُكتفى سريرياً بقياس مستوى الهوموسيستين في الدم.",
    "tags": [
      "genetics",
      "mthfr",
      "homocysteine",
      "folate",
      "polymorphism"
    ]
  },
  {
    "id": "jak2_v617f_mutation",
    "name": "JAK2 V617F Mutation (Quantitative Allele Burden)",
    "nameAr": "طفرة JAK2 V617F التكاثرية النقوية",
    "aliases": [
      "JAK2 V617F",
      "JAK2 Mutation",
      "Myeloproliferative Neoplasm Marker"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Normal / Negative",
        "value": "Undetected (<0.01%)",
        "unit": "% mutant allele",
        "note": "By high-sensitivity quantitative real-time PCR or NGS"
      },
      {
        "group": "Positive (Polycythemia Vera)",
        "value": ">0.01%",
        "unit": "% mutant allele",
        "alert": "critical_high",
        "note": "Found in >95% of patients with Polycythemia Vera; high burden correlates with myelofibrosis risk"
      },
      {
        "group": "Positive (Essential Thrombocythemia / Primary Myelofibrosis)",
        "value": ">0.01%",
        "unit": "% mutant allele",
        "alert": "critical_high",
        "note": "Found in 50-60% of ET and PMF cases"
      }
    ],
    "significance": "Gain-of-function somatic mutation causing constitutive tyrosine kinase activation in hematopoietic stem cells. Major WHO diagnostic criterion for Philadelphia-negative myeloproliferative neoplasms (PV 95%, ET 55%, PMF 55%).",
    "significanceAr": "طفرة جسدية تسبب نشاطاً دائماً لإنزيم التيروزين كينيز في الخلايا الجذعية. معيار تشخيصي رئيسي لمنظمة الصحة العالمية لفرط حمر الدم الحقيقية (95%)، وكثرة الصفيحات الأساسية والتليف النقوي الأولي.",
    "tags": [
      "genetics",
      "hematology",
      "jak2",
      "polycythemia vera",
      "myeloproliferative",
      "essential thrombocythemia"
    ]
  },
  {
    "id": "bcr_abl1_major_quantitative",
    "name": "BCR-ABL1 Major Transcript (p210) Quantitative (International Scale)",
    "nameAr": "النسخ الرئيسي لجين BCR-ABL1 الكمي (المقياس الدولي)",
    "aliases": [
      "BCR-ABL1 IS",
      "Philadelphia Chromosome PCR",
      "CML Molecular Response",
      "p210"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Baseline CML (Diagnosis)",
        "value": "100",
        "unit": "% IS",
        "note": "Standardized baseline on International Scale (IS)"
      },
      {
        "group": "Early Molecular Response (EMR at 3-6 mo)",
        "value": "<=10",
        "unit": "% IS",
        "note": "TKI therapy goal: <=10% at 3 and 6 months"
      },
      {
        "group": "Major Molecular Response (MMR / MR3.0 at 12 mo)",
        "value": "<=0.1",
        "unit": "% IS",
        "note": ">=3-log reduction from baseline; predicts long-term progression-free survival"
      },
      {
        "group": "Deep Molecular Response (MR4.0)",
        "value": "<=0.01",
        "unit": "% IS",
        "note": ">=4-log reduction; requirement for treatment discontinuation trials"
      },
      {
        "group": "Molecularly Undetectable (MR4.5)",
        "value": "<=0.0032",
        "unit": "% IS",
        "note": ">=4.5-log reduction"
      }
    ],
    "significance": "Quantitative RT-PCR monitoring the chimeric BCR-ABL1 transcript from t(9;22) translocation in Chronic Myeloid Leukemia (CML). Essential for assessing molecular response to tyrosine kinase inhibitors (imatinib, dasatinib, nilotinib) and determining treatment-free remission eligibility.",
    "significanceAr": "فحص كمي لمتابعة ناتج اندماج الصبغي فيلادلفيا في ابيضاض الدم النقوي المزمن (CML). جوهري لتقييم الاستجابة لمثبطات التيروزين كينيز (إيماتينيب وغيره) وتحقيق الشفاء الجزيئي العميق.",
    "tags": [
      "genetics",
      "oncology",
      "cml",
      "bcr-abl",
      "philadelphia chromosome",
      "mr3",
      "tki"
    ]
  },
  {
    "id": "egfr_mutation_analysis",
    "name": "EGFR Mutation Analysis in Non-Small Cell Lung Cancer",
    "nameAr": "طفرات مستقبل عامل نمو البشرة في سرطان الرئة",
    "aliases": [
      "EGFR Mutations",
      "Exon 19 Del",
      "L858R",
      "T790M",
      "NSCLC Biomarker"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Negative / Wild Type",
        "value": "No activating mutation detected",
        "unit": "qualitative",
        "note": "Standard chemotherapy or immunotherapy indicated"
      },
      {
        "group": "Sensitizing Mutations (Exon 19 del, L858R)",
        "value": "Detected",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Confers exquisite sensitivity to EGFR TKIs (osimertinib, erlotinib, gefitinib)"
      },
      {
        "group": "Acquired Resistance Mutation (T790M)",
        "value": "Detected",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Confers resistance to 1st/2nd gen TKIs; responsive to 3rd gen osimertinib"
      }
    ],
    "significance": "Identifies activating mutations in the kinase domain of EGFR (exons 18-21) in non-small cell lung cancer (adenocarcinoma). Exon 19 in-frame deletions and exon 21 L858R substitution constitute ~90% of sensitizing mutations predicting response to osimertinib.",
    "significanceAr": "يحدد الطفرات المنشطة لمستقبل EGFR في سرطان الرئة الغدي. وجود طفرة حذف الإكسون 19 أو استبدال L858R يتنبأ باستجابة ممتازة لمثبطات EGFR التيروزين كينيز (أوسيميرتينيب).",
    "tags": [
      "genetics",
      "oncology",
      "egfr",
      "lung cancer",
      "nsclc",
      "osimertinib",
      "targeted therapy"
    ]
  },
  {
    "id": "braf_v600e_mutation",
    "name": "BRAF V600E Mutation",
    "nameAr": "طفرة جين BRAF V600E",
    "aliases": [
      "BRAF Mutation",
      "BRAF V600E",
      "Melanoma BRAF",
      "Papillary Thyroid BRAF"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Wild Type / Negative",
        "value": "Undetected",
        "unit": "qualitative"
      },
      {
        "group": "V600E Mutant Detected",
        "value": "Positive (V600E)",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Indicates eligibility for dabrafenib + trametinib in melanoma, NSCLC, anaplastic thyroid"
      }
    ],
    "significance": "Constitutively active serine/threonine-protein kinase driving MAPK/ERK pathway. Found in 50% of cutaneous melanomas, 45% of papillary thyroid carcinomas, 10% of colorectal carcinomas, and 100% of hairy cell leukemias. Guides combined BRAF/MEK targeted therapy.",
    "significanceAr": "طفرة منشطة لمسار MAPK الخلوي. تتواجد في 50% من الميلانوما و45% من سرطان الدرقية الحليمي وكل حالات ابيضاض خلايا الدم المشعرة. تؤهل المرضى للعلاج الموجه بـ Dabrafenib و Trametinib.",
    "tags": [
      "genetics",
      "oncology",
      "braf",
      "v600e",
      "melanoma",
      "thyroid cancer",
      "targeted therapy"
    ]
  },
  {
    "id": "brca1_brca2_germline",
    "name": "BRCA1 and BRCA2 Comprehensive Germline Analysis",
    "nameAr": "التحليل الجيني الوراثي لجينات BRCA1 و BRCA2",
    "aliases": [
      "BRCA1",
      "BRCA2",
      "Hereditary Breast Ovarian Cancer",
      "HBOC Panel"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Negative",
        "value": "No pathogenic variant identified",
        "unit": "qualitative",
        "note": "Average population breast cancer risk (~12%)"
      },
      {
        "group": "BRCA1 Pathogenic Variant",
        "value": "Pathogenic / Likely Pathogenic",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Lifetime breast cancer risk 55-72%, ovarian cancer risk 39-44%; PARP inhibitor eligible"
      },
      {
        "group": "BRCA2 Pathogenic Variant",
        "value": "Pathogenic / Likely Pathogenic",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Lifetime breast cancer risk 45-69%, ovarian risk 11-17%, male breast and prostate cancer risk; PARP inhibitor eligible"
      }
    ],
    "significance": "Tumor suppressor genes involved in double-strand DNA repair via homologous recombination. Pathogenic germline mutations cause Hereditary Breast and Ovarian Cancer (HBOC) syndrome and confer high sensitivity to PARP inhibitors (olaparib, talazoparib) in breast, ovarian, pancreatic, and prostate cancers.",
    "significanceAr": "جينات كابتة للأورام مسؤولة عن ترميم الدنا. تسبب الطفرات الممرضة متلازمة سرطان الثدي والمبيض الوراثية وتمنح حساسية عالية للعلاج بمثبطات PARP (مثل أولاباريب).",
    "tags": [
      "genetics",
      "oncology",
      "brca1",
      "brca2",
      "breast cancer",
      "ovarian cancer",
      "parp inhibitors"
    ]
  },
  {
    "id": "hfe_hemochromatosis_genotyping",
    "name": "HFE Gene Mutations (C282Y & H63D)",
    "nameAr": "طفرات جين داء ترسب الأصبغة الدموية الوراثي HFE",
    "aliases": [
      "HFE Genotyping",
      "Hemochromatosis Mutation",
      "C282Y",
      "H63D"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Normal Wild Type",
        "value": "C282Y (-/-) and H63D (-/-)",
        "unit": "genotype"
      },
      {
        "group": "Homozygous C282Y (Classic Hemochromatosis)",
        "value": "C282Y (+/+) Homozygote",
        "unit": "genotype",
        "alert": "critical_high",
        "note": "Accounts for 85-90% of clinical hereditary hemochromatosis cases; warrants transferrin saturation and ferritin monitoring"
      },
      {
        "group": "Compound Heterozygote",
        "value": "C282Y (+/-) and H63D (+/-)",
        "unit": "genotype",
        "note": "Mild increased risk of iron overload, especially with alcohol or NAFLD cofactors"
      },
      {
        "group": "Heterozygous Carrier",
        "value": "C282Y (+/-) Heterozygote",
        "unit": "genotype",
        "note": "Carrier; essentially zero risk of clinical iron overload"
      }
    ],
    "significance": "HFE regulates hepcidin synthesis. C282Y homozygosity disrupts HFE-transferrin receptor interaction, inappropriately downregulating hepcidin and causing hyperabsorption of dietary iron, tissue iron overload, cirrhosis, cardiomyopathy, bronze diabetes, and arthropathy.",
    "significanceAr": "ينظم جين HFE إفراز الهيبسيدين. تسبب طفرة C282Y المتماثلة عوز الهيبسيدين النسبي وامتصاصاً مفرطاً للحديد من الأمعاء، مسببة تشمع الكبد، واعتلال عضلة القلب، والسكري البرونزي.",
    "tags": [
      "genetics",
      "hemochromatosis",
      "hfe",
      "c282y",
      "iron overload",
      "hepatology"
    ]
  },
  {
    "id": "cyp2c19_genotyping",
    "name": "CYP2C19 Pharmacogenomics (Clopidogrel Metabolism)",
    "nameAr": "علم الصيدلة الجيني للإنزيم CYP2C19 واستقلاب كلوبيدوغريل",
    "aliases": [
      "CYP2C19 Genotype",
      "Clopidogrel Resistance Gene",
      "CYP2C19 *2 *3 *17"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Ultrarapid Metabolizer (*17/*17)",
        "value": "*17/*17",
        "unit": "phenotype",
        "note": "Increased active clopidogrel metabolite formation; standard dosing or risk of bleeding"
      },
      {
        "group": "Normal Metabolizer (*1/*1)",
        "value": "*1/*1",
        "unit": "phenotype",
        "note": "Standard clopidogrel 75 mg daily indicated"
      },
      {
        "group": "Intermediate Metabolizer (*1/*2, *1/*3)",
        "value": "One loss-of-function allele",
        "unit": "phenotype",
        "note": "Reduced active metabolite; CPIC guidelines recommend prasugrel or ticagrelor in ACS/PCI"
      },
      {
        "group": "Poor Metabolizer (*2/*2, *2/*3, *3/*3)",
        "value": "Two loss-of-function alleles",
        "unit": "phenotype",
        "alert": "critical_high",
        "note": "Significantly reduced clopidogrel activation; high stent thrombosis risk; avoid clopidogrel, use ticagrelor/prasugrel"
      }
    ],
    "significance": "CYP2C19 converts prodrug clopidogrel into its active antiplatelet metabolite. Loss-of-function alleles (*2, *3) in poor metabolizers cause high on-treatment platelet reactivity and increased risk of stent thrombosis and myocardial infarction after PCI.",
    "significanceAr": "يحول إنزيم CYP2C19 دواء كلوبيدوغريل (بلافيكس) إلى شكله الفعال المضاد للصفيحات. المرضى ضعيفو الاستقلاب (*2/*2) معرضون لفشل الدواء وخثار الدعامة القلبية، وتوصي الإرشادات باستبداله بـ تيكاجريلور أو براسوجريل.",
    "tags": [
      "genetics",
      "pharmacogenomics",
      "cyp2c19",
      "clopidogrel",
      "cardiology",
      "pci",
      "stent"
    ]
  },
  {
    "id": "tpmt_genotyping_activity",
    "name": "TPMT Genotyping & Enzyme Activity (Thiopurine Safety)",
    "nameAr": "النمط الجيني ونشاط إنزيم ثيوبورين S-ميثيل ترانسفيراز",
    "aliases": [
      "TPMT",
      "Thiopurine Methyltransferase",
      "Azathioprine Toxicity Screen",
      "6-MP Safety"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Normal / High Activity (*1/*1)",
        "value": "13.8 - 25.1",
        "unit": "U/mL RBC",
        "note": "Normal metabolism; initiate azathioprine/6-MP at standard recommended doses"
      },
      {
        "group": "Intermediate Activity (Heterozygote *1/*2, *1/*3A, *1/*3C)",
        "value": "6.0 - 13.7",
        "unit": "U/mL RBC",
        "note": "Moderate risk of myelosuppression; reduce thiopurine dose by 30-70%"
      },
      {
        "group": "Deficient / Absent Activity (Homozygote *3A/*3A, etc.)",
        "value": "<6.0",
        "unit": "U/mL RBC",
        "alert": "critical_low",
        "note": "Fatal bone marrow aplasia risk at standard doses; reduce dose by 90% or avoid thiopurines"
      }
    ],
    "significance": "TPMT metabolizes 6-mercaptopurine and azathioprine into inactive metabolites. Deficient patients divert thiopurine metabolism into cytotoxic 6-thioguanine nucleotides (6-TGN), causing fatal pancytopenia unless dose is drastically reduced.",
    "significanceAr": "يعطل إنزيم TPMT أدوية الآزاثيوبرين و 6-ميركابتوبورين. انعدام نشاط الإنزيم الوراثي يؤدي لتراكم نواتج سامة لنقي العظم وحدوث هبوط شامل وقاتل في كريات الدم ما لم تُخفض الجرعة بنسبة 90%.",
    "tags": [
      "genetics",
      "pharmacogenomics",
      "tpmt",
      "azathioprine",
      "6-mp",
      "bone marrow toxicity"
    ]
  },
  {
    "id": "hla_b5701_abacavir",
    "name": "HLA-B*5701 Allele Screening (Abacavir Safety)",
    "nameAr": "فحص الأليل HLA-B*5701 لأمان دواء أباكافير",
    "aliases": [
      "HLA-B*5701",
      "Abacavir Hypersensitivity Gene",
      "Ziagen Pharmacogenomics"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Negative (Absence of *5701)",
        "value": "Negative",
        "unit": "qualitative",
        "note": "Low risk (<1%) of abacavir hypersensitivity reaction; safe to prescribe"
      },
      {
        "group": "Positive (Presence of *5701)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Contraindication to abacavir; >50% develop life-threatening multisystem hypersensitivity"
      }
    ],
    "significance": "Mandatory FDA black-box screening before starting HIV antiretroviral abacavir. Presence of HLA-B*5701 confers high risk of severe, potentially fatal abacavir hypersensitivity reaction (fever, rash, GI distress, respiratory symptoms, anaphylactoid shock).",
    "significanceAr": "فحص إلزامي حاسم قبل وصف دواء أباكافير لعلاج الإيدز. وجود الأليل يسبب تفاعل فرط حساسية مهدداً للحياة مع صدمة وفشل تنفسي، ويشكل مضاد استطباب مطلق لاستخدام الدواء.",
    "tags": [
      "genetics",
      "pharmacogenomics",
      "hla-b5701",
      "abacavir",
      "hiv",
      "hypersensitivity"
    ]
  },
  {
    "id": "hla_b27_spondyloarthritis",
    "name": "HLA-B27 Antigen / Allele",
    "nameAr": "المستضد الكريوي البشري HLA-B27",
    "aliases": [
      "HLA-B27",
      "Ankylosing Spondylitis Gene",
      "Human Leukocyte Antigen B27"
    ],
    "category": "genetics",
    "ranges": [
      {
        "group": "Negative",
        "value": "Negative",
        "unit": "qualitative",
        "note": "General population prevalence 6-8%"
      },
      {
        "group": "Positive (Spondyloarthritis Risk)",
        "value": "Positive",
        "unit": "qualitative",
        "alert": "critical_high",
        "note": "Present in >90% of Ankylosing Spondylitis and 60-80% of Reactive Arthritis"
      }
    ],
    "significance": "Major histocompatibility complex class I molecule strongly associated with seronegative spondyloarthropathies: Ankylosing Spondylitis (>90%), Reactive Arthritis (Reiter syndrome, 60-80%), Psoriatic Spondylitis (50%), and Acute Anterior Uveitis (50%).",
    "significanceAr": "مستضد توافق نسيجي يرتبط بقوة بالتهاب الفقار اللاصق (>90% من المرضى إيجابيون)، والتهاب المفاصل التفاعلي (متلازمة ريتر)، والتهاب العنبية الأمامي الحاد.",
    "tags": [
      "genetics",
      "rheumatology",
      "hla-b27",
      "ankylosing spondylitis",
      "uveitis",
      "spondylitis"
    ]
  },
  {
    "id": "beta_hcg_gestational_weeks",
    "name": "Quantitative Serum Beta-hCG by Gestational Week",
    "nameAr": "الإنكليز كمي لموجهة الغدد التناسلية المشيمائية بيتا حسب أسابيع الحمل",
    "aliases": [
      "Beta-hCG Pregnancy",
      "Quantitative hCG",
      "Gestational hCG Range"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Non-pregnant Females",
        "value": "<5.0",
        "unit": "mIU/mL"
      },
      {
        "group": "Week 3 Gestation",
        "value": "5 - 50",
        "unit": "mIU/mL"
      },
      {
        "group": "Week 4 Gestation",
        "value": "5 - 426",
        "unit": "mIU/mL"
      },
      {
        "group": "Week 5 Gestation",
        "value": "18 - 7340",
        "unit": "mIU/mL",
        "note": "Gestational sac visible on TVUS at discriminatory zone 1500-2000 mIU/mL"
      },
      {
        "group": "Week 6 Gestation",
        "value": "1080 - 56500",
        "unit": "mIU/mL",
        "note": "Fetal pole and cardiac activity detectable"
      },
      {
        "group": "Weeks 7 - 8 Gestation",
        "value": "7650 - 229000",
        "unit": "mIU/mL"
      },
      {
        "group": "Weeks 9 - 12 (Peak Concentration)",
        "value": "25700 - 288000",
        "unit": "mIU/mL",
        "note": "Peak levels around 10 weeks gestation"
      },
      {
        "group": "Weeks 13 - 16 (Second Trimester)",
        "value": "13300 - 254000",
        "unit": "mIU/mL"
      },
      {
        "group": "Third Trimester",
        "value": "3640 - 117000",
        "unit": "mIU/mL"
      },
      {
        "group": "Molar Pregnancy / Choriocarcinoma Diagnostic (>100,000 at early weeks)",
        "value": ">100000",
        "unit": "mIU/mL",
        "alert": "critical_high",
        "note": "Levels >100,000 mIU/mL at <6-7 weeks strongly suggest gestational trophoblastic disease"
      }
    ],
    "significance": "Doubles approximately every 48 hours in viable early intrauterine pregnancy (<6 weeks). Failure to increase by >=35-53% in 48 hours strongly suggests non-viable pregnancy or ectopic pregnancy. Above discriminatory threshold (1500-2000 mIU/mL), gestational sac must be visible on transvaginal ultrasound.",
    "significanceAr": "يتضاعف كل 48 ساعة في الحمل الرحمي السليم المبكر. عدم تضاعفه يشير إلى حمل هاجر أو إجهاض منذر. فوق عتبة التمييز (1500-2000 وحدة دولية/لتر) يجب رؤية كيس الحمل بالسونار المهبلي، وارتفاعه الهائل المبكر يشير للحمل العنقودي.",
    "tags": [
      "pregnancy",
      "hcg",
      "beta-hcg",
      "gestational age",
      "ectopic pregnancy",
      "molar pregnancy"
    ]
  },
  {
    "id": "msafp_maternal_serum_alpha_fetoprotein",
    "name": "Maternal Serum Alpha-Fetoprotein (MSAFP MoM at 15-20 Weeks)",
    "nameAr": "ألفا فيتوبروتين في مصل الحامل (المضاعف للوسيط)",
    "aliases": [
      "MSAFP",
      "Maternal AFP",
      "Second Trimester AFP Screening"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Normal Singleton Pregnancy",
        "value": "0.5 - 2.5",
        "unit": "MoM",
        "note": "Multiples of the Median (MoM), drawn at 15-20 weeks gestation"
      },
      {
        "group": "Abnormally Low (Down Syndrome / Trisomies)",
        "value": "<0.5",
        "unit": "MoM",
        "alert": "critical_low",
        "note": "Associated with Trisomy 21 (Down) and Trisomy 18"
      },
      {
        "group": "Abnormally High (Neural Tube Defects)",
        "value": ">2.5",
        "unit": "MoM",
        "alert": "critical_high",
        "note": "Spina bifida, anencephaly, omphalocele, gastroschisis, multiple gestation, or underestimation of gestational age"
      }
    ],
    "significance": "Screening test performed at 15-20 weeks gestation. Elevated MSAFP (>2.5 MoM) detects >80-85% of open neural tube defects (spina bifida, anencephaly) and abdominal wall defects. Low MSAFP (<0.5 MoM) is associated with Down syndrome (Trisomy 21).",
    "significanceAr": "فحص مسحي يُجرى في الأسابيع 15-20 من الحمل. ارتفاعه (>2.5 MoM) يكشف تشوهات الأنبوب العصبي المفتوحة (الصلب المشقوق، انعدام الدماغ) وعيوب جدار البطن، بينما انخفاضه يرتبط بمتلازمة داون.",
    "tags": [
      "pregnancy",
      "msafp",
      "neural tube defect",
      "spina bifida",
      "down syndrome",
      "quad screen"
    ]
  },
  {
    "id": "first_trimester_combined_papp_a",
    "name": "Pregnancy-Associated Plasma Protein A (PAPP-A MoM)",
    "nameAr": "بروتين البلازما أ المرتبط بالحمل",
    "aliases": [
      "PAPP-A",
      "First Trimester PAPP-A",
      "Aneuploidy Screening"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Normal Pregnancy (11-13+6 Weeks)",
        "value": "0.5 - 2.0",
        "unit": "MoM",
        "note": "Multiples of the median"
      },
      {
        "group": "Critical Low (Trisomy 21 / Placental Insufficiency)",
        "value": "<0.4",
        "unit": "MoM",
        "alert": "critical_low",
        "note": "Low in Trisomy 21, Trisomy 18; highly predictive of fetal growth restriction, preeclampsia, and stillbirth"
      }
    ],
    "significance": "Zinc metalloproteinase produced by syncytiotrophoblasts. Measured at 11-13+6 weeks with free beta-hCG and nuchal translucency (NT) in First Trimester Combined Screening. Profoundly decreased (<0.4 MoM) in Down syndrome and predicts late placenta-mediated complications (FGR, preeclampsia).",
    "significanceAr": "يُقاس في الأسابيع 11-13+6 ضمن المسح المدمج للثلث الأول. انخفاضه الحاد (<0.4 MoM) يرتبط بمتلازمة داون وتثلث 18، ويتنبأ لاحقاً بقصور المشيمة وتأخر نمو الجنين ومقدمة الارتعاج.",
    "tags": [
      "pregnancy",
      "papp-a",
      "first trimester screening",
      "down syndrome",
      "fgr",
      "preeclampsia"
    ]
  },
  {
    "id": "first_trimester_free_beta_hcg",
    "name": "First Trimester Free Beta-hCG (11-13+6 Weeks)",
    "nameAr": "الوحدة الفرعية الحرة لموجهة الغدد التناسلية المشيمائية بيتا في الثلث الأول",
    "aliases": [
      "Free Beta-hCG",
      "First Trimester hCG",
      "Dual Screen hCG"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Normal Pregnancy",
        "value": "0.5 - 2.0",
        "unit": "MoM"
      },
      {
        "group": "Elevated (Trisomy 21 / Down Syndrome)",
        "value": ">2.0",
        "unit": "MoM",
        "alert": "critical_high",
        "note": "Combined with low PAPP-A and increased NT marks high Down syndrome risk"
      },
      {
        "group": "Profoundly Decreased (Trisomy 18 / Trisomy 13)",
        "value": "<0.25",
        "unit": "MoM",
        "alert": "critical_low",
        "note": "Characteristic of Edwards and Patau syndromes"
      }
    ],
    "significance": "Component of the First Trimester Combined Screen. Elevated Free Beta-hCG (>2.0 MoM) paired with decreased PAPP-A (<0.5 MoM) and increased nuchal translucency thickness yields ~85-90% detection rate for fetal Down syndrome at 5% false-positive rate.",
    "significanceAr": "جزء من مسح الثلث الأول للحمل. ارتفاعه (>2.0 MoM) مع انخفاض PAPP-A وزيادة سماكة القفا الجنيني (NT) يعطي حساسية تفوق 85-90% لكشف متلازمة داون.",
    "tags": [
      "pregnancy",
      "free beta-hcg",
      "down syndrome",
      "first trimester",
      "aneuploidy"
    ]
  },
  {
    "id": "gestational_diabetes_75g_ogtt",
    "name": "75g Oral Glucose Tolerance Test for GDM (IADPSG / ADA One-Step Criteria)",
    "nameAr": "اختبار تحمل الغلوكوز الفموي 75 جم للسكري الحملي (معايير الخطوة الواحدة)",
    "aliases": [
      "75g OGTT Pregnancy",
      "IADPSG GDM Criteria",
      "One-Step GDM Test"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Fasting Threshold (Normal)",
        "value": "<92",
        "unit": "mg/dL",
        "note": "Diagnostic threshold >=92 mg/dL (>=5.1 mmol/L)"
      },
      {
        "group": "1-Hour Threshold (Normal)",
        "value": "<180",
        "unit": "mg/dL",
        "note": "Diagnostic threshold >=180 mg/dL (>=10.0 mmol/L)"
      },
      {
        "group": "2-Hour Threshold (Normal)",
        "value": "<153",
        "unit": "mg/dL",
        "note": "Diagnostic threshold >=153 mg/dL (>=8.5 mmol/L)"
      },
      {
        "group": "GDM Diagnosed (Any ONE value exceeded)",
        "value": "Fasting >=92 OR 1h >=180 OR 2h >=153",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Per IADPSG/WHO/ADA, meeting or exceeding ANY single cutoff confirms Gestational Diabetes Mellitus"
      }
    ],
    "significance": "Recommended universal screening at 24-28 weeks gestation. Under the IADPSG/WHO 'one-step' strategy, meeting or exceeding any single plasma glucose cutoff confirms Gestational Diabetes Mellitus (GDM), triggering dietary counseling, glucose monitoring, and insulin/metformin if uncontrolled.",
    "significanceAr": "الفحص المسحي المعتمد في الأسابيع 24-28 من الحمل. تجاوز أي قيمة مفردة من القيم الثلاث (الصيام ≥92، بعد ساعة ≥180، بعد ساعتين ≥153 مجم/ديسيلتر) يشخص سكري الحمل رسمياً.",
    "tags": [
      "pregnancy",
      "gdm",
      "ogtt",
      "gestational diabetes",
      "iadpsg",
      "endocrinology"
    ]
  },
  {
    "id": "gestational_diabetes_50g_gct",
    "name": "50g 1-Hour Glucose Challenge Screen for GDM (Two-Step Screening)",
    "nameAr": "فحص تحدي الغلوكوز 50 جم لمدة ساعة للحامل (طريقة الخطوتين)",
    "aliases": [
      "50g GCT",
      "O'Sullivan Screen",
      "Two-Step GDM Screen"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Normal Screen (Negative)",
        "value": "<130 - 140",
        "unit": "mg/dL",
        "note": "ACOG allows cutoff of 130 mg/dL (90% sensitivity) or 140 mg/dL (80% sensitivity)"
      },
      {
        "group": "Positive Screen (Requires 100g 3h OGTT)",
        "value": ">=140",
        "unit": "mg/dL",
        "note": "Patient must proceed to diagnostic 100g 3-hour oral glucose tolerance test"
      },
      {
        "group": "Markedly Elevated / Direct GDM Diagnosis",
        "value": ">=200",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Values >=200 mg/dL diagnose GDM directly without needing the 3-hour test"
      }
    ],
    "significance": "Non-fasting initial screen performed at 24-28 weeks gestation. If plasma glucose >=140 mg/dL (or >=130 mg/dL for higher sensitivity), patient undergoes definitive 3-hour 100g OGTT. A result >=200 mg/dL establishes GDM diagnosis immediately.",
    "significanceAr": "فحص مسحي أولي غير صائم عند 24-28 أسبوعاً. إذا كانت النتيجة ≥140 مجم/ديسيلتر تُجرى الخطوة الثانية (تحمل 100 جم لـ 3 ساعات)، أما إذا بلغت ≥200 مجم/ديسيلتر فيُشخص السكري مباشرة.",
    "tags": [
      "pregnancy",
      "gct",
      "50g screen",
      "gestational diabetes",
      "acog"
    ]
  },
  {
    "id": "gestational_diabetes_100g_ogtt",
    "name": "100g 3-Hour OGTT for GDM (Carpenter-Coustan Diagnostic Criteria)",
    "nameAr": "اختبار تحمل الغلوكوز 100 جم لـ 3 ساعات (معايير كاربنتر-كوستان)",
    "aliases": [
      "100g OGTT",
      "Carpenter-Coustan Criteria",
      "Diagnostic GDM Test"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Fasting Threshold",
        "value": "<95",
        "unit": "mg/dL",
        "note": "Cutoff >=95 mg/dL (5.3 mmol/L)"
      },
      {
        "group": "1-Hour Threshold",
        "value": "<180",
        "unit": "mg/dL",
        "note": "Cutoff >=180 mg/dL (10.0 mmol/L)"
      },
      {
        "group": "2-Hour Threshold",
        "value": "<155",
        "unit": "mg/dL",
        "note": "Cutoff >=155 mg/dL (8.6 mmol/L)"
      },
      {
        "group": "3-Hour Threshold",
        "value": "<140",
        "unit": "mg/dL",
        "note": "Cutoff >=140 mg/dL (7.8 mmol/L)"
      },
      {
        "group": "GDM Diagnosed (Two or More Values Exceeded)",
        "value": ">=2 abnormal values",
        "unit": "criteria",
        "alert": "critical_high",
        "note": "ACOG diagnostic criteria: >=2 of the 4 values met or exceeded confirms GDM"
      }
    ],
    "significance": "Definitive step in the two-step GDM screening approach. Diagnosis requires at least two of the four plasma glucose thresholds (Fasting >=95, 1h >=180, 2h >=155, 3h >=140 mg/dL) to be met or exceeded.",
    "significanceAr": "الاختبار التشخيصي للخطوة الثانية لسكري الحمل. يتطلب التشخيص وفق معايير كاربنتر-كوستان تجاوز قيمتين أو أكثر من القيم الأربع المحددة.",
    "tags": [
      "pregnancy",
      "100g ogtt",
      "carpenter coustan",
      "gdm",
      "gestational diabetes"
    ]
  },
  {
    "id": "preeclampsia_blood_pressure_thresholds",
    "name": "Blood Pressure Thresholds in Pregnancy & Preeclampsia",
    "nameAr": "عتبات ضغط الدم أثناء الحمل ومقدمة الارتعاج",
    "aliases": [
      "Pregnancy BP",
      "Preeclampsia Blood Pressure",
      "Gestational Hypertension"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Normal Pregnancy BP",
        "value": "<120/80",
        "unit": "mmHg",
        "note": "Physiologic dip of 5-10 mmHg in mid-trimester"
      },
      {
        "group": "Gestational Hypertension / Preeclampsia Threshold",
        "value": ">=140/90",
        "unit": "mmHg",
        "note": "Systolic >=140 or diastolic >=90 mmHg on two occasions at least 4 hours apart after 20 weeks"
      },
      {
        "group": "Severe Preeclampsia BP (Hypertensive Emergency)",
        "value": ">=160/110",
        "unit": "mmHg",
        "alert": "critical_high",
        "note": "Severe feature; requires urgent IV antihypertensive therapy (labetalol, hydralazine, or nifedipine) within 30-60 min to prevent stroke"
      }
    ],
    "significance": "New-onset hypertension after 20 weeks gestation defines gestational hypertension. With proteinuria (>=300 mg/24h) or end-organ dysfunction (thrombocytopenia, renal/hepatic impairment, pulmonary edema, visual/cerebral symptoms), it defines preeclampsia. Severe range BP (>=160/110) requires emergency control.",
    "significanceAr": "ارتفاع الضغط الجديد بعد الأسبوع 20 يشخص ارتفاع الضغط الحملي أو مقدمة الارتعاج عند وجود بروتين في البول أو تأذي الأعضاء. يعتبر الضغط ≥160/110 ملم زئبق سمة شديدة تستدعي علاجاً خافضاً إسعافياً فورياً بالوريد لتجنب السكتة الدماغية.",
    "tags": [
      "pregnancy",
      "hypertension",
      "preeclampsia",
      "blood pressure",
      "eclampsia"
    ]
  },
  {
    "id": "sflt1_plgf_ratio_preeclampsia",
    "name": "sFlt-1 / PlGF Ratio (Preeclampsia Rule-Out / Prediction)",
    "nameAr": "نسبة sFlt-1 إلى PlGF للتنبؤ بمقدمة الارتعاج واستبعادها",
    "aliases": [
      "sFlt-1/PlGF",
      "Preeclampsia Ratio",
      "Elecsys Preeclampsia",
      "PROGNOSIS Study"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Rule-Out Preeclampsia within 1 Week",
        "value": "<=38",
        "unit": "ratio",
        "note": "Negative predictive value 99.3% for ruling out preeclampsia for 1-4 weeks"
      },
      {
        "group": "Intermediate Risk (24 to 33+6 Weeks)",
        "value": "38 - 85",
        "unit": "ratio",
        "note": "Requires close surveillance"
      },
      {
        "group": "Rule-In Preeclampsia / High Risk (24 to 33+6 Weeks)",
        "value": ">85",
        "unit": "ratio",
        "alert": "critical_high",
        "note": "High likelihood of preeclampsia or placenta-related disorder within 4 weeks"
      },
      {
        "group": "Rule-In Preeclampsia (>=34 Weeks)",
        "value": ">110",
        "unit": "ratio",
        "alert": "critical_high"
      }
    ],
    "significance": "Soluble fms-like tyrosine kinase-1 (anti-angiogenic) to Placental Growth Factor (pro-angiogenic) ratio. A ratio <=38 reliably rules out preeclampsia development within 1 to 4 weeks (NPV >99%) in women with clinical suspicion, reducing unnecessary hospitalizations.",
    "significanceAr": "نسبة العامل المضاد لتولد الأوعية (sFlt-1) إلى عامل نمو المشيمة (PlGF). القيمة ≤38 تستبعد حدوث مقدمة الارتعاج خلال 1-4 أسابيع بقيمة تنبؤية سلبية 99.3%، مما يمنع التنويم غير الضروري.",
    "tags": [
      "pregnancy",
      "sflt1",
      "plgf",
      "preeclampsia",
      "biomarker",
      "angiogenesis"
    ]
  },
  {
    "id": "urinary_protein_creatinine_ratio_pregnancy",
    "name": "Spot Urine Protein-to-Creatinine Ratio in Pregnancy (UPCR)",
    "nameAr": "نسبة البروتين إلى الكرياتينين في البول العشوائي للحامل",
    "aliases": [
      "UPCR Pregnancy",
      "Urine Protein/Creatinine",
      "Preeclampsia Proteinuria"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Normal Pregnancy",
        "value": "<0.15",
        "unit": "mg/mg",
        "note": "Or <15 mg/mmol"
      },
      {
        "group": "Equivocal / Borderline",
        "value": "0.15 - 0.29",
        "unit": "mg/mg"
      },
      {
        "group": "Diagnostic Preeclampsia Proteinuria Threshold",
        "value": ">=0.30",
        "unit": "mg/mg",
        "alert": "critical_high",
        "note": "Correlates closely with >=300 mg/24h urine protein; fulfills preeclampsia diagnostic criteria"
      },
      {
        "group": "Severe Proteinuria / Nephrotic Range",
        "value": ">=3.0",
        "unit": "mg/mg",
        "alert": "critical_high",
        "note": "Suggests underlying glomerulonephritis or severe preeclamptic nephropathy"
      }
    ],
    "significance": "Replaces cumbersome 24-hour urine collection for rapid diagnosis of preeclampsia proteinuria. A spot UPCR >=0.30 mg protein/mg creatinine correlates well with the traditional >=300 mg/24h standard, speeding clinical decision making.",
    "significanceAr": "البديل السريع المعتمد لجمع بول 24 ساعة لتشخيص البيلة البروتينية في مقدمة الارتعاج. النسبة ≥0.30 مجم/مجم تعادل تماماً 300 مجم/24 ساعة وتؤكد التشخيص فوراً.",
    "tags": [
      "pregnancy",
      "upcr",
      "proteinuria",
      "preeclampsia",
      "kidney"
    ]
  },
  {
    "id": "amniotic_fluid_index_afi",
    "name": "Amniotic Fluid Index (AFI) & Single Deepest Pocket (SDP)",
    "nameAr": "مشعر السائل الأمنيوسي وعمق أعمق جيب",
    "aliases": [
      "AFI",
      "Single Deepest Pocket",
      "SDP",
      "Amniotic Fluid Volume"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Oligohydramnios (AFI)",
        "value": "<5.0",
        "unit": "cm",
        "alert": "critical_low",
        "note": "Sum of vertical pockets in 4 quadrants <5.0 cm; increased cord compression and perinatal mortality risk"
      },
      {
        "group": "Oligohydramnios (Single Deepest Pocket)",
        "value": "<2.0",
        "unit": "cm",
        "alert": "critical_low",
        "note": "SDP <2 cm is preferred definition by SMFM to reduce unnecessary interventions"
      },
      {
        "group": "Normal Amniotic Fluid (AFI)",
        "value": "5.0 - 24.0",
        "unit": "cm",
        "note": "SDP 2.0 - 8.0 cm"
      },
      {
        "group": "Polyhydramnios (AFI)",
        "value": ">24.0",
        "unit": "cm",
        "alert": "critical_high",
        "note": "Or SDP >=8.0 cm; associated with gestational diabetes, fetal GI atresia, and hydrops"
      }
    ],
    "significance": "Ultrasound evaluation of amniotic fluid volume. Oligohydramnios (SDP <2 cm or AFI <5 cm) indicates placental insufficiency, renal agenesis, or membrane rupture. Polyhydramnios (AFI >24 cm or SDP >=8 cm) suggests maternal diabetes, twin-twin transfusion, or fetal esophageal atresia.",
    "significanceAr": "تقييم حجم السائل الأمنيوسي بالسونار. قلة السائل (AFI <5 سم أو أعمق جيب <2 سم) تدل على قصور المشيمة أو تمزق الأغشية. استسقاء السائل (>24 سم) يدل على سكري الحمل أو رتق مريء الجنين.",
    "tags": [
      "pregnancy",
      "afi",
      "amniotic fluid",
      "oligohydramnios",
      "polyhydramnios",
      "ultrasound"
    ]
  },
  {
    "id": "cervical_length_transvaginal",
    "name": "Transvaginal Cervical Length (TVCL at 18-24 Weeks)",
    "nameAr": "طول عنق الرحم بالسونار المهبلي عند 18-24 أسبوعاً",
    "aliases": [
      "Cervical Length",
      "TVCL",
      "Preterm Birth Risk Screen",
      "Cervical Incompetence"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Normal Low Risk",
        "value": ">30",
        "unit": "mm",
        "note": "Mean length at 20-24 weeks is ~35-40 mm"
      },
      {
        "group": "Borderline Length",
        "value": "25 - 30",
        "unit": "mm"
      },
      {
        "group": "Short Cervix / High Preterm Delivery Risk",
        "value": "<25",
        "unit": "mm",
        "alert": "critical_low",
        "note": "Defines short cervix at <=24 weeks; indicates vaginal progesterone or cerclage"
      }
    ],
    "significance": "Transvaginal ultrasound measurement of closed endocervical canal length at 18-24 weeks. A cervical length <25 mm is the primary predictor of spontaneous preterm birth, indicating treatment with vaginal progesterone or cervical cerclage in indicated cases.",
    "significanceAr": "قياس طول قناة عنق الرحم المغلقة بالسونار المهبلي. القصر الشديد (<25 ملم) قبل الأسبوع 24 هو أهم مؤشر لخطر الولادة المبكرة التلقائية، ويستدعي العلاج بالبروجستيرون المهبلي أو تطويق العنق.",
    "tags": [
      "pregnancy",
      "cervical length",
      "preterm labor",
      "cerclage",
      "progesterone",
      "ultrasound"
    ]
  },
  {
    "id": "fetal_fibronectin_rapid",
    "name": "Fetal Fibronectin Rapid Screen (fFN at 22-34 Weeks)",
    "nameAr": "فحص الفيبرونيكتين الجنيني السريع",
    "aliases": [
      "fFN",
      "Fetal Fibronectin",
      "Preterm Labor Predictor"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Negative (<50 ng/mL)",
        "value": "<50",
        "unit": "ng/mL",
        "note": ">99% negative predictive value for delivery within next 7-14 days; patient can be safely sent home"
      },
      {
        "group": "Positive (>=50 ng/mL)",
        "value": ">=50",
        "unit": "ng/mL",
        "alert": "critical_high",
        "note": "Disruption of extracellular matrix at decidual-chorionic interface; indicates antenatal corticosteroids and tocolysis considerations"
      }
    ],
    "significance": "Adhesive glycoprotein at the choriodecidual interface. Tested via posterior fornix swab in symptomatic women with intact membranes between 22 and 34 weeks. Its powerful negative predictive value (>99% for no delivery in 7-14 days) prevents unnecessary hospital admissions and tocolysis.",
    "significanceAr": "بروتين لاصق بين المشيمة وجدار الرحم. قيمته التنبؤية السلبية تتجاوز 99% لنفي الولادة المبكرة خلال الأسبوعين القادمين، مما يجنب الحامل التنويم وإعطاء أدوية إيقاف المخاض دون داعٍ.",
    "tags": [
      "pregnancy",
      "ffn",
      "fetal fibronectin",
      "preterm birth",
      "triage",
      "obstetrics"
    ]
  },
  {
    "id": "serum_total_bile_acids_cholestasis",
    "name": "Serum Total Bile Acids (Intrahepatic Cholestasis of Pregnancy)",
    "nameAr": "الأحماض الصفراوية الكلية في مصل الحامل (الركود الصفراوي الحملي)",
    "aliases": [
      "Bile Acids Pregnancy",
      "TBA Pregnancy",
      "ICP Marker",
      "Obstetric Cholestasis"
    ],
    "category": "pregnancy",
    "ranges": [
      {
        "group": "Normal Pregnancy",
        "value": "<10.0",
        "unit": "mcmol/L",
        "note": "Fasting total serum bile acids"
      },
      {
        "group": "Mild Intrahepatic Cholestasis of Pregnancy (ICP)",
        "value": "10.0 - 39.9",
        "unit": "mcmol/L",
        "note": "Pruritus primarily on palms and soles; treat with ursodeoxycholic acid (UDCA)"
      },
      {
        "group": "Moderate ICP",
        "value": "40.0 - 99.9",
        "unit": "mcmol/L"
      },
      {
        "group": "Severe ICP (High Stillbirth Risk)",
        "value": ">=100.0",
        "unit": "mcmol/L",
        "alert": "critical_high",
        "note": "Drastically increased risk of sudden intrauterine fetal demise; delivery indicated at 36 0/7 weeks"
      }
    ],
    "significance": "Key diagnostic biomarker for Intrahepatic Cholestasis of Pregnancy (ICP) in women presenting with severe pruritus without rash. Bile acid levels >=100 mcmol/L indicate severe disease with high risk of sudden stillbirth, fetal asphyxia, and meconium aspiration, mandating planned delivery at 36 weeks.",
    "significanceAr": "الفحص المشخص للركود الصفراوي أثناء الحمل (ICP) مع الحكة الشديدة براحة اليد وباطن القدم. المستويات ≥100 ميكرومول/لتر تحمل خطورة بالغة لموت الجنين المفاجئ داخل الرحم وتستدعي التوليد الحثيث عند الأسبوع 36.",
    "tags": [
      "pregnancy",
      "bile acids",
      "icp",
      "cholestasis",
      "pruritus",
      "stillbirth"
    ]
  },
  {
    "id": "abg_ph",
    "name": "Arterial Blood pH",
    "nameAr": "الرقم الهيدروجيني للدم الشرياني",
    "aliases": [
      "pH",
      "Arterial pH",
      "Blood Gas pH",
      "Acidity"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Arterial Range",
        "value": "7.35 - 7.45",
        "unit": "pH units",
        "note": "Mean normal: 7.40; [H+] = 40 nmol/L"
      },
      {
        "group": "Normal Venous Range (VBG)",
        "value": "7.31 - 7.41",
        "unit": "pH units",
        "note": "Venous pH is typically 0.03 to 0.05 lower than arterial"
      },
      {
        "group": "Critical Acidemia (Severe Acidosis)",
        "value": "<7.20",
        "unit": "pH units",
        "alert": "critical_low",
        "note": "Impaired myocardial contractility, vasodilation, ventricular arrhythmias"
      },
      {
        "group": "Critical Alkalemia (Severe Alkalosis)",
        "value": ">7.60",
        "unit": "pH units",
        "alert": "critical_high",
        "note": "Cerebral vasoconstriction, tetany, severe hypokalemia, lethal arrhythmias"
      }
    ],
    "significance": "Negative logarithm of hydrogen ion activity. Governs enzymatic reactions and protein conformation. Acidemia (pH <7.35) causes depressed myocardial function and catecholamine resistance. Alkalemia (pH >7.45) causes cerebral vasoconstriction, hypocalcemia, and arrhythmias.",
    "significanceAr": "مقياس حموضة أو قلوية الدم الشرياني. الهبوط الشديد (<7.20) يثبط وظيفة عضلة القلب ويقاوم المقويات الوعائية، بينما الارتفاع الشديد (>7.60) يسبب تشنجات ونقصاً حاداً في البوتاسيوم واضطراب نظم القلب.",
    "tags": [
      "abg",
      "ph",
      "acidosis",
      "alkalosis",
      "acid base",
      "critical care"
    ]
  },
  {
    "id": "abg_pao2",
    "name": "Arterial Partial Pressure of Oxygen (PaO2)",
    "nameAr": "الضغط الجزئي للأكسجين في الدم الشرياني",
    "aliases": [
      "PaO2",
      "Arterial PO2",
      "Oxygen Tension"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Adults (Room Air)",
        "value": "80 - 100",
        "unit": "mmHg",
        "note": "Or 10.6 - 13.3 kPa; declines with age: PaO2 = 100 - (0.33 x Age)"
      },
      {
        "group": "Elderly (>70 yr)",
        "value": "70 - 90",
        "unit": "mmHg"
      },
      {
        "group": "Mild Hypoxemia",
        "value": "60 - 79",
        "unit": "mmHg"
      },
      {
        "group": "Critical Hypoxemia (Type I Respiratory Failure)",
        "value": "<60",
        "unit": "mmHg",
        "alert": "critical_low",
        "note": "Corresponds to SaO2 <90% (shoulder of oxyhemoglobin curve); indicates urgent oxygenation / ventilation"
      },
      {
        "group": "Hyperoxemia (Risk of Oxygen Toxicity)",
        "value": ">120",
        "unit": "mmHg",
        "note": "On supplemental oxygen; titrate down FiO2 to prevent oxidative lung and myocardial damage"
      }
    ],
    "significance": "Measures dissolved oxygen in arterial plasma. PaO2 <60 mmHg corresponds to the steep descending portion of the oxyhemoglobin dissociation curve (SaO2 <90%), representing impending tissue hypoxia and Type I respiratory failure requiring urgent oxygen therapy.",
    "significanceAr": "يقيس كمية الأكسجين الذائب في الدم الشرياني. الهبوط دون 60 ملم زئبق يمثل قصوراً تنفسياً حاداً من النمط الأول (نقص أكسجة) ويستدعي التدخل الفوري بالأكسجين لتجنب نقص تأكسج الأنسجة.",
    "tags": [
      "abg",
      "pao2",
      "hypoxemia",
      "respiratory failure",
      "oxygen",
      "critical care"
    ]
  },
  {
    "id": "abg_paco2",
    "name": "Arterial Partial Pressure of Carbon Dioxide (PaCO2)",
    "nameAr": "الضغط الجزئي لثاني أكسيد الكربون في الدم الشرياني",
    "aliases": [
      "PaCO2",
      "Arterial PCO2",
      "Carbon Dioxide Tension",
      "Alveolar Ventilation"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "35 - 45",
        "unit": "mmHg",
        "note": "Or 4.7 - 6.0 kPa; mean 40 mmHg"
      },
      {
        "group": "Critical Hypocapnia (Severe Respiratory Alkalosis)",
        "value": "<20",
        "unit": "mmHg",
        "alert": "critical_low",
        "note": "Severe cerebral vasoconstriction, reduced cerebral blood flow, paresthesias"
      },
      {
        "group": "Critical Hypercapnia (Type II Hypercapnic Failure / CO2 Narcosis)",
        "value": ">60",
        "unit": "mmHg",
        "alert": "critical_high",
        "note": "Acute hypercapnia causes confusion, somnolence, asterixis, and coma (CO2 narcosis); assess pH for acute vs chronic"
      }
    ],
    "significance": "Directly inversely proportional to alveolar ventilation. Elevated PaCO2 indicates hypoventilation (Type II respiratory failure: COPD exacerbation, neuromuscular weakness, sedative overdose). Decreased PaCO2 indicates hyperventilation (anxiety, PE, early sepsis, salicylate toxicity).",
    "significanceAr": "مقياس دقيق للتهوية السنخية. ارتفاعه يدل على نقص التهوية وقصور تنفسي من النمط الثاني (كما في تفاقم الانسداد الرئوي المزمن أو فرط جرعة المهدئات)، بينما هبوطه يعكس فرط التهوية.",
    "tags": [
      "abg",
      "paco2",
      "hypercapnia",
      "hypocapnia",
      "ventilation",
      "respiratory acidosis"
    ]
  },
  {
    "id": "abg_bicarbonate_actual",
    "name": "Actual Arterial Bicarbonate (HCO3-)",
    "nameAr": "بيكربونات الدم الشرياني الحقيقية",
    "aliases": [
      "HCO3",
      "Arterial Bicarbonate",
      "Actual Bicarbonate",
      "Metabolic Component"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Adults",
        "value": "22 - 26",
        "unit": "mEq/L",
        "note": "Or mmol/L; mean 24 mEq/L"
      },
      {
        "group": "Critical Low (Severe Metabolic Acidosis)",
        "value": "<10",
        "unit": "mEq/L",
        "alert": "critical_low",
        "note": "DKA, severe lactic acidosis, toxic ingestions, uremic acidosis; Kussmaul respiration"
      },
      {
        "group": "Critical High (Severe Metabolic Alkalosis)",
        "value": ">40",
        "unit": "mEq/L",
        "alert": "critical_high",
        "note": "Volume contraction, massive vomiting, loop diuretics, hyperaldosteronism; hypoventilation risk"
      }
    ],
    "significance": "Metabolic buffer calculated via the Henderson-Hasselbalch equation from pH and PaCO2. Low HCO3- indicates metabolic acidosis (DKA, lactic acidosis, renal failure). High HCO3- indicates metabolic alkalosis (diuretics, vomiting) or chronic renal compensation for respiratory acidosis (COPD).",
    "significanceAr": "المكون الاستقلابي لتوازن الحمض والأساس. انخفاضه الحاد (<10 مكافئ/لتر) يدل على حماض استقلابي وخيم (مثل الحماض الكيتوني السكري أو حماض اللاكتيك)، بينما ارتفاعه يدل على قلاء استقلابي أو معاوضة كلوية لقصور رئوي مزمن.",
    "tags": [
      "abg",
      "hco3",
      "bicarbonate",
      "metabolic acidosis",
      "metabolic alkalosis"
    ]
  },
  {
    "id": "abg_base_excess",
    "name": "Standard Base Excess (SBE / Base Deficit)",
    "nameAr": "الفائض القاعدي القياسي للدم",
    "aliases": [
      "Base Excess",
      "SBE",
      "Base Deficit",
      "Metabolic Acid-Base Balance"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Range",
        "value": "-2.0 to +2.0",
        "unit": "mEq/L",
        "note": "Adjusted for standard PaCO2 of 40 mmHg and extracellular fluid buffer"
      },
      {
        "group": "Mild Base Deficit (Acidosis)",
        "value": "-2 to -5",
        "unit": "mEq/L"
      },
      {
        "group": "Moderate Base Deficit (Shock Biomarker)",
        "value": "-6 to -14",
        "unit": "mEq/L",
        "note": "Correlates directly with hemorrhagic shock severity and transfusion requirements"
      },
      {
        "group": "Critical Base Deficit / Severe Shock",
        "value": "<-15.0",
        "unit": "mEq/L",
        "alert": "critical_low",
        "note": "Profound tissue hypoperfusion; high mortality in trauma and sepsis"
      }
    ],
    "significance": "Amount of strong acid or base needed to return 1 liter of blood to pH 7.40 at PaCO2 40 mmHg. Unaffected by respiratory changes. In trauma and critical care, negative base excess (base deficit) correlates tightly with occult hemorrhage, tissue ischemia, and resuscitation adequacy.",
    "significanceAr": "يعكس الفائض أو النقص الاستقلابي الصافي بمعزل عن التنفس. يعتبر النقص القاعدي السالب (Base Deficit) مؤشراً حيوياً شديد الحساسية لعمق الصدمة النزفية ونقص تروية الأنسجة في الحوادث والعناية المركزة.",
    "tags": [
      "abg",
      "base excess",
      "base deficit",
      "shock",
      "trauma",
      "resuscitation"
    ]
  },
  {
    "id": "abg_pao2_fio2_ratio",
    "name": "PaO2 / FiO2 Ratio (Berlin ARDS Criteria)",
    "nameAr": "نسبة PaO2 إلى FiO2 (معايير برلين لمتلازمة الضائقة التنفسية الحادة)",
    "aliases": [
      "P/F Ratio",
      "Carrico Index",
      "Horovitz Index",
      "Berlin ARDS"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Oxygenation",
        "value": "400 - 500",
        "unit": "mmHg",
        "note": "On room air: PaO2 ~95 / 0.21 = ~450"
      },
      {
        "group": "Mild ARDS (Berlin Definition)",
        "value": "201 - 300",
        "unit": "mmHg",
        "note": "With PEEP or CPAP >= 5 cm H2O"
      },
      {
        "group": "Moderate ARDS",
        "value": "101 - 200",
        "unit": "mmHg",
        "alert": "critical_low",
        "note": "PEEP >= 5 cm H2O; consider neuromuscular blockade, prone positioning"
      },
      {
        "group": "Severe ARDS",
        "value": "<=100",
        "unit": "mmHg",
        "alert": "critical_low",
        "note": "PEEP >= 5 cm H2O; high mortality; consider early prone positioning and VV-ECMO"
      }
    ],
    "significance": "Standard metric assessing pulmonary gas exchange efficiency independent of supplemental oxygen fraction. Berlin criteria define ARDS categories based on P/F ratio on PEEP >=5 cm H2O: Mild (201-300), Moderate (101-200), and Severe (<=100 mmHg).",
    "significanceAr": "المقياس العالمي لتقييم كفاءة التبادل الغازي في الرئة. تعتمد عليه معايير برلين لتصنيف شدة متلازمة الضائقة التنفسية الحادة (ARDS): خفيفة (201-300)، متوسطة (101-200)، وشديدة (≤100) وتتطلب الأخيرة الانكباب الباكور أو الأكسجة الغشائية (ECMO).",
    "tags": [
      "abg",
      "pf ratio",
      "ards",
      "berlin criteria",
      "mechanical ventilation",
      "critical care"
    ]
  },
  {
    "id": "abg_alveolar_arterial_gradient",
    "name": "Alveolar-Arterial Oxygen Gradient (A-a Gradient)",
    "nameAr": "المدروج الأكسجيني السنخي الشرياني",
    "aliases": [
      "A-a Gradient",
      "A-a O2 Difference",
      "Alveolar-Arterial PO2 Difference"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Young Adult (Room Air)",
        "value": "<10 - 15",
        "unit": "mmHg",
        "note": "A-a O2 = PAO2 - PaO2; expected normal = (Age / 4) + 4"
      },
      {
        "group": "Normal Elderly (70 yr)",
        "value": "<20 - 25",
        "unit": "mmHg"
      },
      {
        "group": "Elevated Gradient (V/Q Mismatch / Shunt / Diffusion Defect)",
        "value": ">25",
        "unit": "mmHg",
        "alert": "critical_high",
        "note": "PE, pneumonia, ARDS, pulmonary edema, atelectasis, interstitial lung disease"
      }
    ],
    "significance": "Differentiates hypoxemia causes: Normal A-a gradient hypoxemia is caused by hypoventilation (CNS depression, muscle weakness) or low inspired FiO2 (high altitude). Elevated A-a gradient hypoxemia is caused by V/Q mismatch (PE, COPD), right-to-left shunt (ARDS, atelectasis), or diffusion impairment.",
    "significanceAr": "يميز سبب نقص الأكسجة في الدم: المدروج الطبيعي يدل على نقص التهوية المركزي أو نقص الأكسجين بالهواء. المدروج المرتفع (>25 ملم زئبق) يدل على خلل رئوي داخلي مثل الانصمام الرئوي، وذمة الرئة، والالتهاب الرئوي الحاد.",
    "tags": [
      "abg",
      "a-a gradient",
      "hypoxemia",
      "pulmonary embolism",
      "shunt",
      "vq mismatch"
    ]
  },
  {
    "id": "blood_lactate_sepsis",
    "name": "Blood Lactate (Sepsis & Shock Guideline)",
    "nameAr": "لاكتات الدم (إرشادات الإنتان والصدمة)",
    "aliases": [
      "Lactate",
      "Lactic Acid",
      "Serum Lactate",
      "Surviving Sepsis Biomarker"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Arterial / Venous",
        "value": "0.5 - 2.0",
        "unit": "mmol/L",
        "note": "Or 4.5 - 18 mg/dL"
      },
      {
        "group": "Mild Hyperlactatemia (Occult Hypoperfusion)",
        "value": "2.1 - 3.9",
        "unit": "mmol/L",
        "note": "Surviving Sepsis Campaign 1-hour bundle: measure lactate, remeasure if >2 mmol/L within 2-4h"
      },
      {
        "group": "Critical Sepsis / Septic Shock Cutoff",
        "value": ">=4.0",
        "unit": "mmol/L",
        "alert": "critical_high",
        "note": "Mandates immediate 30 mL/kg crystalloid resuscitation regardless of initial BP"
      },
      {
        "group": "Extreme Shock / Severe Tissue Hypoxia",
        "value": ">10.0",
        "unit": "mmol/L",
        "alert": "critical_high",
        "note": "Mortality approaches 80% without immediate restoration of microvascular perfusion"
      }
    ],
    "significance": "Biomarker of anaerobic glycolysis resulting from tissue hypoperfusion, mitochondrial dysfunction, and accelerated aerobic glycolysis. Surviving Sepsis Guidelines mandate measuring lactate immediately, re-measuring within 2-4 hours to guide resuscitation, and administering 30 mL/kg IV fluids if >=4 mmol/L.",
    "significanceAr": "العلامة الحيوية الأهم لقياس نقص تروية الأنسجة والاستقلاب اللاهوائي في الصدمة والإنتان. تفرض إرشادات الإنتان العالمية قياسه فوراً وبدء الإنعاش بـ 30 مل/كجم سوائل عند بلوغه ≥4 مليمول/لتر، ومتابعة هبوطه.",
    "tags": [
      "abg",
      "lactate",
      "sepsis",
      "septic shock",
      "surviving sepsis",
      "hypoperfusion"
    ]
  },
  {
    "id": "carboxyhemoglobin_co_oximetry",
    "name": "Carboxyhemoglobin (COHb by CO-Oximetry)",
    "nameAr": "كربوكسي هيموغلوبين بقياس التأكسج المتعدد",
    "aliases": [
      "COHb",
      "Carbon Monoxide Hemoglobin",
      "CO Poisoning Level"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Non-Smokers",
        "value": "<1.5 - 2.0",
        "unit": "% of total Hb"
      },
      {
        "group": "Chronic Cigarette Smokers",
        "value": "3.0 - 9.0",
        "unit": "% of total Hb",
        "note": "Heavy smokers can tolerate up to 10-12% asymptomatically"
      },
      {
        "group": "Toxic / CO Poisoning Threshold",
        "value": ">15.0",
        "unit": "% of total Hb",
        "alert": "critical_high",
        "note": "Headache, nausea, dizziness, dyspnea; standard pulse oximetry falsely normal"
      },
      {
        "group": "Severe / Hyperbaric Oxygen Indication",
        "value": ">=25.0",
        "unit": "% of total Hb",
        "alert": "critical_high",
        "note": "Or >=15% in pregnancy; indications for hyperbaric oxygen (HBO) therapy"
      },
      {
        "group": "Lethal Toxicity",
        "value": ">50.0",
        "unit": "% of total Hb",
        "alert": "critical_high",
        "note": "Seizures, coma, cardiovascular collapse, death"
      }
    ],
    "significance": "Measures hemoglobin bound to carbon monoxide (affinity 200x higher than oxygen). Shifts oxygen dissociation curve left, blocking oxygen release. Standard pulse oximeters cannot distinguish COHb from OxyHb (read falsely 100%). HBO therapy indicated if >=25% (or >=15% in pregnancy) or loss of consciousness.",
    "significanceAr": "يقيس تشبع الهيموغلوبين بغاز أول أكسيد الكربون السام (ألفة تفوق الأكسجين بـ 200 ضعف). لا يكشفه مقياس التأكسج النبضي العادي ويقرأ 100% كاذبة! يستدعي العلاج بالأكسجين عالي الضغط (HBO) عند تجاوزه 25% أو في الحوامل عند 15%.",
    "tags": [
      "abg",
      "carboxyhemoglobin",
      "carbon monoxide",
      "toxicology",
      "hyperbaric",
      "co-oximetry"
    ]
  },
  {
    "id": "methemoglobin_co_oximetry",
    "name": "Methemoglobin (MetHb by CO-Oximetry)",
    "nameAr": "الميتهيموغلوبين بقياس التأكسج المتعدد",
    "aliases": [
      "MetHb",
      "Methemoglobinemia",
      "Ferric Hemoglobin",
      "Methylene Blue Screen"
    ],
    "category": "abg",
    "ranges": [
      {
        "group": "Normal Adults & Children",
        "value": "<1.5",
        "unit": "% of total Hb",
        "note": "Typically 0.5 - 1.0%"
      },
      {
        "group": "Cyanosis Unresponsive to Oxygen",
        "value": "10 - 20",
        "unit": "% of total Hb",
        "note": "Chocolate brown blood, refractory cyanosis, 'saturation gap'"
      },
      {
        "group": "Severe Methemoglobinemia / Treatment Threshold",
        "value": ">=30.0",
        "unit": "% of total Hb",
        "alert": "critical_high",
        "note": "Dyspnea, lethargy, headache; antidote methylene blue (1-2 mg/kg IV) indicated if symptomatic or >=30%"
      },
      {
        "group": "Potentially Fatal Methemoglobinemia",
        "value": ">70.0",
        "unit": "% of total Hb",
        "alert": "critical_high",
        "note": "Arrhythmias, coma, death; exchange transfusion indicated"
      }
    ],
    "significance": "Hemoglobin with iron oxidized to ferric (Fe3+) state, unable to bind oxygen. Induced by topical anesthetics (benzocaine, prilocaine), dapsone, nitrates/nitrites, and sulfonamides. Causes refractory cyanosis with chocolate brown blood and normal PaO2. Treated with IV methylene blue (1-2 mg/kg) unless G6PD deficient.",
    "significanceAr": "هيموغلوبين مؤكسد إلى الحالة ثلاثية التكافؤ (Fe3+) عاجز عن حمل الأكسجين. ينجم عن بنزوكائين الموضعي، دابسون، والنترات. يتميز بلون دم بلون الشوكولاتة وزرقة لا تستجيب للأكسجين. يُعالج بمضاد الترياق أزرق الميثيلين بالوريد.",
    "tags": [
      "abg",
      "methemoglobin",
      "cyanosis",
      "methylene blue",
      "toxicology",
      "benzocaine"
    ]
  },
  {
    "id": "pediatric_resting_heart_rate",
    "name": "Pediatric Resting Heart Rate by Age Group",
    "nameAr": "معدل نبضات القلب لدى الأطفال أثناء الراحة حسب العمر",
    "aliases": [
      "Pediatric Heart Rate",
      "Pediatric Pulse",
      "PALS Heart Rate Norms"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Neonate (0 - 28 days)",
        "value": "100 - 205",
        "unit": "bpm",
        "note": "Awake: 100-205; Asleep: 90-160 bpm"
      },
      {
        "group": "Infant (1 - 12 months)",
        "value": "100 - 180",
        "unit": "bpm",
        "note": "Awake: 100-180; Asleep: 80-160 bpm"
      },
      {
        "group": "Toddler (1 - 2 years)",
        "value": "98 - 140",
        "unit": "bpm",
        "note": "Awake: 98-140; Asleep: 80-120 bpm"
      },
      {
        "group": "Preschool (3 - 5 years)",
        "value": "80 - 120",
        "unit": "bpm",
        "note": "Awake: 80-120; Asleep: 65-100 bpm"
      },
      {
        "group": "School-age (6 - 11 years)",
        "value": "75 - 118",
        "unit": "bpm",
        "note": "Awake: 75-118; Asleep: 58-90 bpm"
      },
      {
        "group": "Adolescent (12 - 18 years)",
        "value": "60 - 100",
        "unit": "bpm",
        "note": "Awake: 60-100; Asleep: 50-90 bpm"
      },
      {
        "group": "Critical Neonatal / Infant Bradycardia (PALS Resuscitation)",
        "value": "<60",
        "unit": "bpm",
        "alert": "critical_low",
        "note": "Heart rate <60 bpm with poor perfusion despite oxygenation requires chest compressions and epinephrine"
      }
    ],
    "significance": "Age-dependent vital sign defined by Pediatric Advanced Life Support (PALS). In neonates and infants, cardiac output depends primarily on heart rate. Bradycardia (<60 bpm) with hypoperfusion unresponsive to oxygenation is a cardiac arrest emergency requiring immediate chest compressions.",
    "significanceAr": "العلامة الحيوية المحددة وفق إرشادات إنعاش الأطفال المتقدم (PALS). بطء القلب دون 60 نبضة/دقيقة لدى الرضيع مع سوء التروية رغم التهوية يستدعي تدليك الصدر فوراً وإعطاء الإبينفرين.",
    "tags": [
      "pediatric",
      "heart rate",
      "pals",
      "bradycardia",
      "tachycardia",
      "vital signs"
    ]
  },
  {
    "id": "pediatric_resting_respiratory_rate",
    "name": "Pediatric Resting Respiratory Rate by Age Group",
    "nameAr": "معدل التنفس لدى الأطفال أثناء الراحة حسب العمر",
    "aliases": [
      "Pediatric Respiratory Rate",
      "Pediatric RR",
      "PALS Tachypnea Norms"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Neonate (0 - 28 days)",
        "value": "30 - 60",
        "unit": "breaths/min",
        "note": "Tachypnea defined as >60 breaths/min (PALS/WHO)"
      },
      {
        "group": "Infant (1 - 12 months)",
        "value": "30 - 53",
        "unit": "breaths/min",
        "note": "Tachypnea defined as >50 breaths/min"
      },
      {
        "group": "Toddler (1 - 2 years)",
        "value": "22 - 37",
        "unit": "breaths/min",
        "note": "Tachypnea defined as >40 breaths/min"
      },
      {
        "group": "Preschool (3 - 5 years)",
        "value": "20 - 28",
        "unit": "breaths/min"
      },
      {
        "group": "School-age (6 - 11 years)",
        "value": "18 - 25",
        "unit": "breaths/min"
      },
      {
        "group": "Adolescent (12 - 18 years)",
        "value": "12 - 20",
        "unit": "breaths/min"
      },
      {
        "group": "Critical Bradypnea / Impending Respiratory Arrest",
        "value": "<10",
        "unit": "breaths/min",
        "alert": "critical_low",
        "note": "Agonal breathing or bradypnea indicates immediate bag-valve-mask ventilation"
      }
    ],
    "significance": "Most sensitive clinical indicator of pediatric respiratory distress and lower respiratory tract infection (pneumonia, bronchiolitis). Bradypnea (<10 breaths/min or slow irregular breathing) heralds impending respiratory arrest from exhaustion.",
    "significanceAr": "المؤشر السريري الأكثر حساسية للضائقة التنفسية والالتهاب الرئوي عند الأطفال وفق معايير الصحة العالمية. بطء التنفس دون 10 هو نذير وشيك لتوقف التنفس الناجم عن الإجهاد العضلي.",
    "tags": [
      "pediatric",
      "respiratory rate",
      "tachypnea",
      "pneumonia",
      "pals",
      "vital signs"
    ]
  },
  {
    "id": "pediatric_blood_pressure_hypotension",
    "name": "Pediatric Systolic Blood Pressure & Hypotension Thresholds (PALS)",
    "nameAr": "الضغط الشرياني الانقباضي وعتبات هبوط الضغط للأطفال",
    "aliases": [
      "Pediatric BP",
      "PALS Hypotension Formula",
      "Pediatric Systolic BP"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Term Neonates (0 - 28 days) Critical Hypotension",
        "value": "<60",
        "unit": "mmHg systolic",
        "alert": "critical_low",
        "note": "Systolic BP <60 mmHg defines hypotension"
      },
      {
        "group": "Infants (1 - 12 months) Critical Hypotension",
        "value": "<70",
        "unit": "mmHg systolic",
        "alert": "critical_low",
        "note": "Systolic BP <70 mmHg defines hypotension"
      },
      {
        "group": "Children (1 - 10 years) Critical Hypotension",
        "value": "< (70 + 2 x age in years)",
        "unit": "mmHg systolic",
        "alert": "critical_low",
        "note": "5th percentile formula: 70 + (2 x Age in years) mmHg"
      },
      {
        "group": "Children (>10 years) Critical Hypotension",
        "value": "<90",
        "unit": "mmHg systolic",
        "alert": "critical_low",
        "note": "Systolic BP <90 mmHg defines hypotension as in adults"
      },
      {
        "group": "Normal Median Systolic (1 - 10 years)",
        "value": "90 + (2 x age in years)",
        "unit": "mmHg systolic",
        "note": "50th percentile estimation formula"
      }
    ],
    "significance": "PALS 5th percentile systolic BP threshold defines uncompensated (hypotensive) shock. Children maintain normal BP through tachycardia and vasoconstriction until late in shock; hypotension represents a late and ominous finding requiring emergent fluid resuscitation.",
    "significanceAr": "تحدد معادلة PALS (70 + ضعف العمر بالسنوات) عتبة هبوط الضغط الانقباضي (الشريحة المئوية الخامسة). يعتبر هبوط الضغط لدى الطفل علامة متأخرة وخطيرة جداً لقصور الدوران المعاوض تستدعي إنعاشاً فورياً بالسوائل.",
    "tags": [
      "pediatric",
      "blood pressure",
      "pals",
      "hypotension",
      "septic shock",
      "vital signs"
    ]
  },
  {
    "id": "bhutani_neonatal_hyperbilirubinemia_nomogram",
    "name": "Bhutani Nomogram Total Serum Bilirubin at 48-72 Hours",
    "nameAr": "مخطط بوتاني للبيليروبين الوليدي عند 48-72 ساعة",
    "aliases": [
      "Bhutani Nomogram",
      "Neonatal Jaundice TSB",
      "AAP Phototherapy Nomogram"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Low Risk Zone (<40th Percentile at 48h)",
        "value": "<8.5",
        "unit": "mg/dL",
        "note": "Safe for routine discharge and outpatient follow-up"
      },
      {
        "group": "Low-Intermediate Risk Zone (40th-75th Percentile at 48h)",
        "value": "8.5 - 11.0",
        "unit": "mg/dL"
      },
      {
        "group": "High-Intermediate Risk Zone (75th-95th Percentile at 48h)",
        "value": "11.1 - 13.0",
        "unit": "mg/dL",
        "note": "Requires close follow-up within 24-48 hours"
      },
      {
        "group": "High Risk Zone (>95th Percentile at 48h)",
        "value": ">13.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Strongly predicts subsequent severe hyperbilirubinemia requiring phototherapy"
      },
      {
        "group": "AAP Phototherapy Threshold (Term, Low Risk at 48h)",
        "value": ">=15.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "AAP 2022 revised clinical guideline phototherapy cutoff"
      }
    ],
    "significance": "Hour-specific total serum bilirubin (TSB) nomogram predicting risk of severe hyperbilirubinemia and bilirubin encephalopathy (kernicterus) in newborns >=35 weeks gestation before discharge. Directs phototherapy decisions according to AAP guidelines.",
    "significanceAr": "مخطط البيليروبين بالساعات لحديثي الولادة. يتنبأ بخطر حدوث اليرقان النووي وتلف الدماغ (Kernicterus)، ويحدد حاجة الطفل للمعالجة الضوئية أو متابعته الدقيقة.",
    "tags": [
      "pediatric",
      "bhutani",
      "neonatal jaundice",
      "hyperbilirubinemia",
      "phototherapy",
      "kernicterus"
    ]
  },
  {
    "id": "neonatal_exchange_transfusion_threshold",
    "name": "AAP Neonatal Exchange Transfusion Bilirubin Thresholds",
    "nameAr": "عتبات تبديل دم حديثي الولادة لفرط البيليروبين (الأكاديمية الأمريكية لطب الأطفال)",
    "aliases": [
      "Exchange Transfusion Bilirubin",
      "Kernicterus Prevention Threshold",
      "AAP Exchange Nomogram"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "AAP 2022 Term Well Infant (>=38 weeks, No Risk Factors at >=48h)",
        "value": ">=22.0 - 24.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Threshold for emergent double-volume exchange transfusion"
      },
      {
        "group": "AAP 2022 Medium Risk (>=38 wk with neurotoxicity risk or 35-37 wk well)",
        "value": ">=19.0 - 21.0",
        "unit": "mg/dL",
        "alert": "critical_high",
        "note": "Neurotoxicity risk factors: isoimmune hemolytic disease, G6PD deficiency, sepsis, albumin <3.0 g/dL"
      },
      {
        "group": "AAP 2022 High Risk (35-37 weeks with neurotoxicity risk)",
        "value": ">=17.0 - 18.0",
        "unit": "mg/dL",
        "alert": "critical_high"
      },
      {
        "group": "Acute Bilirubin Encephalopathy (Any TSB Level)",
        "value": "Presence of intermediate-to-advanced encephalopathy",
        "unit": "clinical",
        "alert": "critical_high",
        "note": "Hypertonia, retrocollis, opisthotonos, fever, shrill high-pitched cry mandates immediate exchange transfusion regardless of TSB"
      }
    ],
    "significance": "Double-volume exchange transfusion replaces ~85% of circulating red blood cells, rapidly clearing toxic unconjugated bilirubin to prevent irreversible kernicterus and choreoathetoid cerebral palsy. Immediate exchange is mandatory if signs of acute bilirubin encephalopathy develop.",
    "significanceAr": "إجراء إسعافي يستبدل 85% من دم الوليد لخفض البيليروبين غير المقترن بسرعة ومنع الشلل الدماغي واليرقان النووي الدائم. إلزامي فوراً عند ظهور علامات الاعتلال الدماغي الحاد (فرط المقوية، البكاء عالي النبرة، تشنج الظهر والقفا).",
    "tags": [
      "pediatric",
      "exchange transfusion",
      "kernicterus",
      "neonatal jaundice",
      "aap",
      "emergency"
    ]
  },
  {
    "id": "neonatal_blood_glucose_hypoglycemia",
    "name": "Neonatal Blood Glucose & Hypoglycemia Intervention Thresholds",
    "nameAr": "غلوكوز دم حديث الولادة وعتبات التدخل لنقص السكر",
    "aliases": [
      "Neonatal Hypoglycemia",
      "Newborn Glucose",
      "Pediatric Endocrine Guidelines"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Birth to 4 Hours of Life (Target / Normal)",
        "value": ">=40",
        "unit": "mg/dL",
        "note": "Physiologic nadir occurs at 1-2 hours of life; feed if <40 mg/dL"
      },
      {
        "group": "Hours 4 to 24 of Life (Intervention Threshold)",
        "value": "<45",
        "unit": "mg/dL",
        "alert": "critical_low",
        "note": "Feed infant and recheck; IV glucose if remains <45 mg/dL or symptomatic"
      },
      {
        "group": "After 24 Hours of Life (Target / Normal)",
        "value": ">=50 - 60",
        "unit": "mg/dL",
        "note": "Target glucose >=60 mg/dL after 48 hours (Pediatric Endocrine Society)"
      },
      {
        "group": "Symptomatic Neonatal Hypoglycemia (Immediate IV Bolus)",
        "value": "<40",
        "unit": "mg/dL with symptoms",
        "alert": "critical_low",
        "note": "Jitteriness, lethargy, seizures; requires immediate 2 mL/kg D10W bolus followed by GIR 4-8 mg/kg/min"
      }
    ],
    "significance": "Neonates undergo a transient physiologic glucose nadir at 1-2 hours post-birth. Sustained hypoglycemia (<45 mg/dL at 4-24h; <60 mg/dL beyond 48h) places developing neurons at risk of excitotoxic injury, occipital stroke, and permanent neurological sequelae.",
    "significanceAr": "يمر الوليد بهبوط فيزيولوجي طبيعي في أول ساعتين بعد الولادة. استمرار انخفاض السكر دون 45 مجم/ديسيلتر (أو دون 60 بعد 48 ساعة) يعرض الخلايا العصبية لخطر التلف الدائم، ويستدعي إعطاء محلول الدكستروز 10% فوراً عند وجود أعراض (ارتعاش أو تشنجات).",
    "tags": [
      "pediatric",
      "neonatal hypoglycemia",
      "glucose",
      "newborn",
      "jitteriness",
      "d10w"
    ]
  },
  {
    "id": "bedside_schwartz_egfr_pediatric",
    "name": "Bedside Schwartz Formula eGFR for Children (1 - 18 Years)",
    "nameAr": "معادلة شوارتز السريرية لتقدير الترشيح الكبيبي للأطفال",
    "aliases": [
      "Pediatric eGFR",
      "Bedside Schwartz",
      "Schwartz Formula",
      "Pediatric GFR"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Normal Children (>2 yr) and Adolescents",
        "value": ">90",
        "unit": "mL/min/1.73m2",
        "note": "Formula: eGFR = 0.413 x Height(cm) / Serum Creatinine(mg/dL)"
      },
      {
        "group": "Mild Renal Impairment (CKD Stage 2)",
        "value": "60 - 89",
        "unit": "mL/min/1.73m2"
      },
      {
        "group": "Moderate Renal Impairment (CKD Stage 3)",
        "value": "30 - 59",
        "unit": "mL/min/1.73m2"
      },
      {
        "group": "Severe Renal Impairment (CKD Stage 4)",
        "value": "15 - 29",
        "unit": "mL/min/1.73m2",
        "alert": "critical_low"
      },
      {
        "group": "Kidney Failure / End-Stage (CKD Stage 5)",
        "value": "<15",
        "unit": "mL/min/1.73m2",
        "alert": "critical_low",
        "note": "Dialysis or renal transplantation indication"
      }
    ],
    "significance": "Standardized equation: eGFR = 0.413 x Height(cm) / Serum Creatinine(mg/dL) calibrated for enzymatic creatinine assays in children aged 1-18 years. Adult CKD-EPI and MDRD equations are invalid in pediatric populations.",
    "significanceAr": "المعادلة المعتمدة عالمياً لحساب معدل الترشيح الكبيبي للأطفال بين 1 و 18 سنة: [0.413 × الطول بالسم ÷ كرياتينين المصل]. معادلات البالغين (MDRD و CKD-EPI) غير صالحة للأطفال نهائياً.",
    "tags": [
      "pediatric",
      "schwartz formula",
      "egfr",
      "ckd",
      "pediatric nephrology",
      "creatinine"
    ]
  },
  {
    "id": "sweat_chloride_cystic_fibrosis",
    "name": "Sweat Chloride (Quantitative Pilocarpine Iontophoresis)",
    "nameAr": "كلوريد العرق (الرحلان الشاردي بالبيلوكاربين لمرض التليف الكيسي)",
    "aliases": [
      "Sweat Chloride",
      "Sweat Test",
      "Cystic Fibrosis Sweat Test",
      "Gibson-Cooke"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "CF Unlikely (Normal)",
        "value": "<=29",
        "unit": "mmol/L",
        "note": "Cystic fibrosis is considered unlikely"
      },
      {
        "group": "Intermediate / Equivocal Zone",
        "value": "30 - 59",
        "unit": "mmol/L",
        "note": "Requires repeat sweat test, expanded CFTR gene sequencing, and nasal potential difference testing"
      },
      {
        "group": "Diagnostic Cystic Fibrosis (Positive)",
        "value": ">=60",
        "unit": "mmol/L",
        "alert": "critical_high",
        "note": "A sweat chloride >=60 mmol/L on two separate occasions establishes diagnosis of CF"
      }
    ],
    "significance": "Gold-standard confirmatory test for Cystic Fibrosis (CF). CFTR dysfunction impairs reabsorption of chloride from sweat duct lumens. A sweat chloride >=60 mmol/L on two occasions confirms CF in a patient with clinical features or positive newborn screening.",
    "significanceAr": "المعيار الذهبي لتشخيص التليف الكيسي (CF). يؤدي خلل قناة CFTR إلى عجز إعادة امتصاص الكلوريد من العرق. بلوغ كلوريد العرق ≥60 مليمول/لتر في فحصين منفصلين يؤكد التشخيص قطيعاً.",
    "tags": [
      "pediatric",
      "sweat test",
      "cystic fibrosis",
      "cftr",
      "pilocarpine",
      "pulmonology"
    ]
  },
  {
    "id": "pediatric_blood_lead_reference_level",
    "name": "Blood Lead Reference Value for Children (CDC 2021 Guideline)",
    "nameAr": "المستوى المرجعي لرصاص الدم عند الأطفال (مراكز السيطرة على الأمراض)",
    "aliases": [
      "Blood Lead",
      "Pediatric Lead",
      "CDC Lead Level",
      "Plumbism"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Acceptable / Non-Actionable",
        "value": "<3.5",
        "unit": "mcg/dL",
        "note": "CDC Blood Lead Reference Value (BLRV) revised to 3.5 mcg/dL (97.5th percentile in US children)"
      },
      {
        "group": "Elevated Lead (Environmental Intervention)",
        "value": ">=3.5",
        "unit": "mcg/dL",
        "alert": "critical_high",
        "note": "Requires environmental investigation, nutritional optimization (iron/calcium), and retesting within 1-3 mo"
      },
      {
        "group": "Medical Chelation Therapy Threshold",
        "value": ">=45.0",
        "unit": "mcg/dL",
        "alert": "critical_high",
        "note": "Oral chelation with Succimer (DMSA) recommended; urgent evaluation"
      },
      {
        "group": "Severe Lead Encephalopathy / Hospitalization",
        "value": ">=70.0",
        "unit": "mcg/dL",
        "alert": "critical_high",
        "note": "Medical emergency: dual IV chelation (Dimercaprol/BAL + CaNa2-EDTA)"
      }
    ],
    "significance": "No safe blood lead level exists in children; lead induces irreversible neurocognitive deficits, behavioral problems, and IQ reduction. CDC BLRV is 3.5 mcg/dL. Blood lead >=45 mcg/dL mandates medical chelation therapy with succimer (DMSA); >=70 mcg/dL requires emergency hospital admission and parenteral chelation.",
    "significanceAr": "لا يوجد مستوى آمن للرصاص لدى الأطفال فهو يسبب أضراراً عصبية وإدراكية لا رجعة فيها. المستوى المرجعي المحدث لـ CDC هو 3.5 ميكروغرام/ديسيلتر. المستويات ≥45 تستدعي العلاج بالاستخلاب (DMSA)، وتستدعي المستويات ≥70 التنويم الفوري.",
    "tags": [
      "pediatric",
      "lead poisoning",
      "blood lead",
      "cdc",
      "chelation",
      "toxicology"
    ]
  },
  {
    "id": "neonatal_tsh_screening",
    "name": "Neonatal Heel-Prick TSH Screening (Congenital Hypothyroidism)",
    "nameAr": "مسح هرمون الحث الدرقي الوليدي بوخز العقب (قصور الدرق الخلقي)",
    "aliases": [
      "Neonatal TSH",
      "Congenital Hypothyroidism Screen",
      "Guthrie Card TSH"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Normal Newborn Heel-Prick TSH (at >48h)",
        "value": "<10 - 15",
        "unit": "mIU/L whole blood",
        "note": "Filter paper blood spot; transient physiologic surge occurs at 30 min post-birth, settling by 48-72h"
      },
      {
        "group": "Borderline / Recall for Immediate Rescreen",
        "value": "15 - 39",
        "unit": "mIU/L whole blood",
        "note": "Prompt repeat blood spot and simultaneous venous free T4 and TSH confirmation"
      },
      {
        "group": "Presumptive Congenital Hypothyroidism",
        "value": ">=40",
        "unit": "mIU/L whole blood",
        "alert": "critical_high",
        "note": "Start levothyroxine (10-15 mcg/kg/day) immediately to prevent irreversible intellectual disability (cretinism)"
      }
    ],
    "significance": "Universal newborn screening performed at 48-72 hours of life on Guthrie dried blood spot. Early initiation of levothyroxine within the first 2 weeks of life prevents permanent neurodevelopmental impairment and mental retardation (cretinism).",
    "significanceAr": "المسح الإلزامي لحديثي الولادة عند 48-72 ساعة على ورقة الترشيح لكشف قصور الدرق الخلقي. بدء العلاج بهرمون ليفوثيروكسين خلال أول أسبوعين يمنع التخلف العقلي غير القابل للعلاج (القماءة).",
    "tags": [
      "pediatric",
      "neonatal tsh",
      "congenital hypothyroidism",
      "newborn screening",
      "cretinism"
    ]
  },
  {
    "id": "denver_developmental_milestones_2_months",
    "name": "Developmental Milestones at 2 Months",
    "nameAr": "معالم التطور عند عمر شهرين",
    "aliases": [
      "2 Month Milestones",
      "Denver II 2 Months",
      "CDC Milestones 2 Mo"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Social / Emotional",
        "value": "Calms when spoken to or picked up; smiles when smiled at (social smile)",
        "unit": "milestone"
      },
      {
        "group": "Language / Communication",
        "value": "Makes sounds other than crying (cooing, gurgling); turns head toward sound",
        "unit": "milestone"
      },
      {
        "group": "Cognitive (Learning / Problem-solving)",
        "value": "Watches as caregiver moves; looks at a toy for several seconds",
        "unit": "milestone"
      },
      {
        "group": "Movement / Physical Development",
        "value": "Holds head up when on tummy; moves both arms and both legs; opens hands briefly",
        "unit": "milestone"
      },
      {
        "group": "Red Flag / Developmental Delay Warning",
        "value": "Absence of social smile, doesn't track moving objects, doesn't respond to loud sounds",
        "unit": "red_flag",
        "alert": "critical_low",
        "note": "Prompt early intervention / pediatric referral"
      }
    ],
    "significance": "Core 2-month developmental surveillance checkpoints per CDC / AAP guidelines. Marked by the emergence of the social smile, cooing vocalizations, and the ability to momentarily lift head 45 degrees in prone position.",
    "significanceAr": "محطات التطور الحركي والاجتماعي الأساسية عند عمر شهرين وفق معايير CDC/AAP. تتميز بظهور الابتسامة الاجتماعية والمناغاة ورفع الرأس أثناء الاستلقاء على البطن.",
    "tags": [
      "pediatric",
      "milestones",
      "2 months",
      "denver ii",
      "development",
      "social smile"
    ]
  },
  {
    "id": "denver_developmental_milestones_6_months",
    "name": "Developmental Milestones at 6 Months",
    "nameAr": "معالم التطور عند عمر 6 أشهر",
    "aliases": [
      "6 Month Milestones",
      "Denver II 6 Months",
      "CDC Milestones 6 Mo"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Social / Emotional",
        "value": "Knows familiar faces and begins to know if someone is a stranger; likes to look at self in mirror",
        "unit": "milestone"
      },
      {
        "group": "Language / Communication",
        "value": "Babbles with consonants (ba, da, ma); takes turns making sounds with caregiver; blows raspberries",
        "unit": "milestone"
      },
      {
        "group": "Cognitive",
        "value": "Reaches for a toy with one hand; puts things in mouth to explore; transfers objects from hand to hand",
        "unit": "milestone"
      },
      {
        "group": "Movement / Physical Development",
        "value": "Rolls over in both directions (front to back and back to front); sits with support / tripod sitting",
        "unit": "milestone"
      },
      {
        "group": "Red Flag / Developmental Delay Warning",
        "value": "Cannot roll over in either direction, does not laugh or babble, floppy or rigid muscle tone",
        "unit": "red_flag",
        "alert": "critical_low"
      }
    ],
    "significance": "Crucial mid-infancy milestone checkpoint. Characterized by rolling over both ways, babbling with consonant chains, transferring objects hand-to-hand, and sitting in tripod position. Inability to roll or lack of sound production warrants developmental screening.",
    "significanceAr": "مرحلة تطورية محورية عند 6 أشهر. تتميز بالانقلاب بالاتجاهين، والجلوس بالمساعدة (وضعية الحامل الثلاثي)، ونقل الألعاب بين اليدين، والثرثرة بالحروف الصامتة (با، دا، ما).",
    "tags": [
      "pediatric",
      "milestones",
      "6 months",
      "denver ii",
      "babbling",
      "rolling"
    ]
  },
  {
    "id": "denver_developmental_milestones_12_months",
    "name": "Developmental Milestones at 12 Months (1 Year)",
    "nameAr": "معالم التطور عند عمر 12 شهراً (سنة واحدة)",
    "aliases": [
      "12 Month Milestones",
      "1 Year Milestones",
      "Denver II 12 Mo"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Social / Emotional",
        "value": "Plays games with you like pat-a-cake; shows affection to familiar people; waves bye-bye",
        "unit": "milestone"
      },
      {
        "group": "Language / Communication",
        "value": "Says 'mama' or 'dada' specifically; understands simple requests like 'come here'",
        "unit": "milestone"
      },
      {
        "group": "Cognitive",
        "value": "Looks for things hidden under covers (object permanence); bangs two items together; puts objects in container",
        "unit": "milestone"
      },
      {
        "group": "Movement / Physical Development",
        "value": "Pulls up to stand; walks holding onto furniture ('cruising'); fine pincer grasp (thumb and index finger)",
        "unit": "milestone"
      },
      {
        "group": "Red Flag / Developmental Delay Warning",
        "value": "Cannot crawl or stand with support, does not point or wave, loses previously acquired skills",
        "unit": "red_flag",
        "alert": "critical_low",
        "note": "Any skill regression requires urgent neurological evaluation"
      }
    ],
    "significance": "Key 1-year milestones. Hallmark achievements include fine pincer grasp, pulling to stand and cruising, object permanence, waving bye-bye, and saying first specific words ('mama', 'dada'). Regression of any milestone is a major red flag.",
    "significanceAr": "محطات عمر السنة. تتضمن الوقوف مستنداً، والمشي حول الأثاث، والقبض الكماشي الدقيق (بالإبهام والسبابة)، ونطق ماما وبابا بصورة نوعية، والتلويح للوداع، ومفهوم ديمومة الأشياء.",
    "tags": [
      "pediatric",
      "milestones",
      "12 months",
      "pincer grasp",
      "cruising",
      "denver ii"
    ]
  },
  {
    "id": "who_routine_childhood_immunization_milestones",
    "name": "WHO / CDC Routine Childhood Immunization Milestones",
    "nameAr": "جدول ومحطات اللقاحات الروتينية للأطفال (منظمة الصحة العالمية / CDC)",
    "aliases": [
      "Childhood Vaccines",
      "Vaccine Schedule",
      "Immunization Milestones",
      "EPI Schedule"
    ],
    "category": "pediatric",
    "ranges": [
      {
        "group": "Birth Vaccines",
        "value": "HepB (1st dose) + BCG (in endemic areas) + OPV-0",
        "unit": "vaccines",
        "note": "Within 24 hours of birth to prevent vertical HepB transmission"
      },
      {
        "group": "2 Months Vaccines",
        "value": "DTaP (1) + IPV (1) + Hib (1) + PCV13/15 (1) + Rotavirus (1) + HepB (2)",
        "unit": "vaccines"
      },
      {
        "group": "4 Months Vaccines",
        "value": "DTaP (2) + IPV (2) + Hib (2) + PCV (2) + Rotavirus (2)",
        "unit": "vaccines"
      },
      {
        "group": "6 Months Vaccines",
        "value": "DTaP (3) + IPV (3) + Hib (3) + PCV (3) + Rotavirus (3) + HepB (3)",
        "unit": "vaccines"
      },
      {
        "group": "12 - 15 Months Vaccines",
        "value": "MMR (1) + Varicella (1) + Hepatitis A (1) + Hib (Booster) + PCV (Booster)",
        "unit": "vaccines",
        "note": "First live virus vaccines administered at or after 1st birthday"
      },
      {
        "group": "4 - 6 Years Booster Vaccines",
        "value": "DTaP (5) + IPV (4) + MMR (2) + Varicella (2)",
        "unit": "vaccines",
        "note": "School entry booster series"
      }
    ],
    "significance": "Global cornerstone of preventive pediatrics. Hepatitis B dose within 24 hours of birth prevents perinatal chronic infection. Live vaccines (MMR, Varicella) are deferred until after 12 months due to maternal antibody interference.",
    "significanceAr": "العمود الفقري لطب الأطفال الوقائي. جرعة التهاب الكبد B خلال أول 24 ساعة تمنع العدوى العمودية المزمنة. تُعطى اللقاحات الحية الموهنة (الحصبة والنكاف والحصبة الألمانية والجدري) بعد إتمام السنة الأولى لتفادي تداخل الأجسام المضادة للأم.",
    "tags": [
      "pediatric",
      "vaccines",
      "immunization",
      "who",
      "cdc",
      "prevention",
      "mmr",
      "dtap"
    ]
  }
];


// ============================================================================
// BILINGUAL MEDICAL SEARCH ENGINE & UTILITIES (ARABIC + ENGLISH)
// ============================================================================

/**
 * Text Normalization for English and Arabic text
 * Strips diacritics/tashkeel, standardizes alef, ya, and ta-marbuta, removes excess spaces.
 */
function mqNorm(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '') // remove Arabic tashkeel / harakat
    .replace(/[أإآ]/g, 'ا')                    // normalize Alef forms
    .replace(/[ى]/g, 'ي')                      // normalize Alif Maqsura to Ya
    .replace(/[ة]/g, 'ه')                      // normalize Ta Marbuta to Ha
    .replace(/[\s_-]+/g, ' ')                  // normalize whitespace, hyphens, underscores
    .trim();
}

/**
 * Computes Levenshtein Distance between two normalized strings
 */
function mqLevenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  
  var matrix = [];
  for (var i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (var j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  
  for (var i = 1; i <= b.length; i++) {
    for (var j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

/**
 * Calculates string similarity ratio (0.0 to 1.0)
 */
function mqSimilarity(s1, s2) {
  var n1 = mqNorm(s1);
  var n2 = mqNorm(s2);
  if (!n1 || !n2) return 0;
  if (n1 === n2) return 1.0;
  var maxLen = Math.max(n1.length, n2.length);
  if (maxLen === 0) return 1.0;
  var dist = mqLevenshtein(n1, n2);
  return Math.max(0, 1.0 - (dist / maxLen));
}

/**
 * Curated Medical Synonym & Cross-Lingual Translation Dictionary
 */
var MQ_SYNONYMS = {
  // Hematology & Coagulation
  "cbc": ["تعداد الدم", "صورة الدم", "hemogram", "complete blood count"],
  "wbc": ["كريات الدم البيضاء", "خلايا الدم البيضاء", "leukocytes", "white blood cells"],
  "rbc": ["كريات الدم الحمراء", "خلايا الدم الحمراء", "erythrocytes", "red blood cells"],
  "platelets": ["صفيحات", "صفائح دموية", "thrombocytes", "plt"],
  "hemoglobin": ["هيموغلوبين", "خضاب الدم", "hb", "hgb"],
  "hematocrit": ["حجم الخلايا المكدسة", "hct", "pcv"],
  "coagulation": ["تخثر", "تجلط", "clotting", "hemostasis"],
  "inr": ["سيولة الدم", "نسبة التخثر الدولية", "prothrombin ratio"],
  "pt": ["زمن البروثرومبين", "prothrombin time"],
  "aptt": ["زمن الثرومبوبلاستين الجزئي", "partial thromboplastin time", "ptt"],
  "d-dimer": ["دي دايمر", "نواتج انحلال الفبرين", "ddimer"],
  "ferritin": ["فيريتين", "مخزون الحديد"],
  "iron": ["حديد", "fe", "serum iron"],

  // Chemistry & Electrolytes
  "sodium": ["صوديوم", "املاح", "na"],
  "potassium": ["بوتاسيوم", "k"],
  "calcium": ["كالسيوم", "ca"],
  "chloride": ["كلوريد", "cl"],
  "magnesium": ["مغنيسيوم", "ماغنسيوم", "mg"],
  "phosphorus": ["فوسفور", "فوسفات", "phosphate", "po4"],
  "creatinine": ["كرياتينين", "وظائف كلى", "cr"],
  "urea": ["يوريا", "بولينا", "bun"],
  "bun": ["نيتروجين يوريا الدم", "blood urea nitrogen"],
  "uric acid": ["حمض اليوريك", "حمض البول", "نقرس", "gout"],
  "glucose": ["سكر", "جلوكوز", "blood sugar"],
  "hba1c": ["السكر التراكمي", "خضاب سكري", "glycated hemoglobin", "a1c"],

  // Liver & Lipids
  "alt": ["انزيم الكبد", "sgpt", "alanine aminotransferase"],
  "ast": ["انزيم الكبد", "sgot", "aspartate aminotransferase"],
  "alp": ["فوسفاتاز قلوية", "alkaline phosphatase"],
  "bilirubin": ["صفراء", "بيليروبين", "يرقان", "jaundice"],
  "albumin": ["زلال", "البيومين"],
  "cholesterol": ["كولسترول", "كوليسترول"],
  "triglycerides": ["دهون ثلاثية", "ثلاثي الغليسريد", "tg"],
  "ldl": ["كولسترول ضار", "دهون ضارة", "bad cholesterol"],
  "hdl": ["كولسترول نافع", "دهون نافعة", "good cholesterol"],

  // Cardiac & Thyroid
  "troponin": ["تروبونين", "انزيم القلب", "جلطة قلبية", "myocardial infarction"],
  "bnp": ["ببتيد مدر للصوديوم", "قصور القلب", "heart failure", "nt-probnp"],
  "tsh": ["الغدة الدرقية", "هرمون الغدة الدرقية", "thyroid stimulating hormone"],
  "t4": ["ثيروكسين", "thyroxine", "free t4"],
  "t3": ["ثلاثي يود الثيرونين", "triiodothyronine", "free t3"],

  // Inflammation & Pancreas
  "crp": ["البروتين الارتكاسي سي", "بروتين الالتهاب", "c-reactive protein"],
  "esr": ["سرعة التثفل", "سرعة ترسيب الدم", "erythrocyte sedimentation rate"],
  "amylase": ["اميلاز", "انزيم البنكرياس"],
  "lipase": ["ليباز", "انزيم البنكرياس"],
  "lactate": ["لاكتات", "حمض اللبنيك", "حموضة الانسجة", "lactic acid"],

  // Vitamins & Oncology
  "vitamin d": ["فيتامين د", "فيتامين الشمس", "calcidiol"],
  "vitamin b12": ["فيتامين ب12", "كوبالامين", "cobalamin"],
  "folate": ["حمض الفوليك", "folic acid", "vitamin b9"],
  "psa": ["مستضد البروستات", "فحص البروستاتا", "prostate specific antigen"],
  "afp": ["الفا فيتوبروتين", "اورام الكبد", "alpha fetoprotein"],
  "cea": ["مستضد سرطاني جنيني", "اورام القولون", "carcinoembryonic antigen"],
  "ca 125": ["اورام المبيض", "سرطان المبيض", "ca125"],
  "ca 19-9": ["اورام البنكرياس", "ca19-9"],

  // Blood Gas & Pregnancy
  "ph": ["حموضة الدم", "الرقم الهيدروجيني", "acidity", "blood ph"],
  "abg": ["غازات الدم الشرياني", "arterial blood gas"],
  "hcg": ["تحليل الحمل", "هرمون الحمل", "pregnancy test", "beta hcg"]
};

/**
 * Searches the lab database with multi-tiered scoring, Arabic normalization,
 * synonym expansion, and fuzzy matching.
 * Returns up to 30 ranked results with match metadata.
 */
function mqLabSearch(query) {
  if (!query || typeof query !== 'string') return [];
  var rawQ = query.trim();
  var nq = mqNorm(rawQ);
  if (!nq) return [];

  // Expand query with synonyms
  var expandedTerms = [nq];
  for (var key in MQ_SYNONYMS) {
    if (Object.prototype.hasOwnProperty.call(MQ_SYNONYMS, key)) {
      var nKey = mqNorm(key);
      var synList = MQ_SYNONYMS[key].map(mqNorm);
      if (nKey === nq || synList.indexOf(nq) !== -1 || nKey.indexOf(nq) !== -1) {
        if (expandedTerms.indexOf(nKey) === -1) expandedTerms.push(nKey);
        for (var s = 0; s < synList.length; s++) {
          if (expandedTerms.indexOf(synList[s]) === -1) expandedTerms.push(synList[s]);
        }
      }
    }
  }

  var scored = [];

  for (var i = 0; i < MQ_LABS.length; i++) {
    var lab = MQ_LABS[i];
    var bestScore = 0;
    var bestMatchType = 'none';

    var nId = mqNorm(lab.id);
    var nName = mqNorm(lab.name);
    var nNameAr = mqNorm(lab.nameAr);
    var nAliases = (lab.aliases || []).map(mqNorm);
    var nTags = (lab.tags || []).map(mqNorm);
    var nSig = mqNorm(lab.significance);
    var nSigAr = mqNorm(lab.significanceAr);

    for (var t = 0; t < expandedTerms.length; t++) {
      var term = expandedTerms[t];
      var isDirectTerm = (t === 0);
      var penalty = isDirectTerm ? 0 : 5; // Slight discount for synonym matches

      // 1. Exact ID Match (100)
      if (nId === term) {
        if (100 - penalty > bestScore) {
          bestScore = 100 - penalty;
          bestMatchType = 'exact_id';
        }
      }

      // 2. Exact Name Match (95)
      if (nName === term || nNameAr === term) {
        if (95 - penalty > bestScore) {
          bestScore = 95 - penalty;
          bestMatchType = 'exact_name';
        }
      }

      // 3. Exact Alias Match (90)
      for (var a = 0; a < nAliases.length; a++) {
        if (nAliases[a] === term) {
          if (90 - penalty > bestScore) {
            bestScore = 90 - penalty;
            bestMatchType = 'exact_alias';
          }
          break;
        }
      }

      // 4. Name Starts With Query (80)
      if (nName.indexOf(term) === 0 || nNameAr.indexOf(term) === 0) {
        if (80 - penalty > bestScore) {
          bestScore = 80 - penalty;
          bestMatchType = 'starts_with_name';
        }
      }

      // 5. Name Contains Query (60)
      if (nName.indexOf(term) !== -1 || nNameAr.indexOf(term) !== -1) {
        if (60 - penalty > bestScore) {
          bestScore = 60 - penalty;
          bestMatchType = 'contains_name';
        }
      }

      // 6. Alias Contains Query (55)
      for (var a = 0; a < nAliases.length; a++) {
        if (nAliases[a].indexOf(term) !== -1) {
          if (55 - penalty > bestScore) {
            bestScore = 55 - penalty;
            bestMatchType = 'contains_alias';
          }
          break;
        }
      }

      // 7. Tag Match (Exact: 50, Contains: 45)
      for (var tg = 0; tg < nTags.length; tg++) {
        if (nTags[tg] === term) {
          if (50 - penalty > bestScore) {
            bestScore = 50 - penalty;
            bestMatchType = 'exact_tag';
          }
          break;
        } else if (nTags[tg].indexOf(term) !== -1) {
          if (45 - penalty > bestScore) {
            bestScore = 45 - penalty;
            bestMatchType = 'contains_tag';
          }
        }
      }

      // 8. Fuzzy Name Similarity > 0.80 (30)
      if (isDirectTerm && term.length >= 3) {
        var simEn = mqSimilarity(nName, term);
        var simAr = mqSimilarity(nNameAr, term);
        if (simEn >= 0.80 || simAr >= 0.80) {
          if (30 > bestScore) {
            bestScore = 30;
            bestMatchType = 'fuzzy_name';
          }
        }
      }

      // 9. Significance Text Contains Query (20)
      if (nSig.indexOf(term) !== -1 || nSigAr.indexOf(term) !== -1) {
        if (20 - penalty > bestScore) {
          bestScore = 20 - penalty;
          bestMatchType = 'significance';
        }
      }
    }

    if (bestScore > 0) {
      scored.push({
        item: lab,
        score: bestScore,
        matchType: bestMatchType
      });
    }
  }

  // Sort descending by score; if tied, sort alphabetically by name
  scored.sort(function(a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return a.item.name.localeCompare(b.item.name);
  });

  // Return top 30 ranked matches
  return scored.slice(0, 30);
}

/**
 * Autocomplete suggestions returning top 8 candidates
 */
function mqLabSuggest(partial) {
  if (!partial || typeof partial !== 'string') return [];
  var searchResults = mqLabSearch(partial);
  var suggestions = [];
  var seenIds = {};

  for (var i = 0; i < searchResults.length && suggestions.length < 8; i++) {
    var lab = searchResults[i].item;
    if (!seenIds[lab.id]) {
      seenIds[lab.id] = true;
      suggestions.push({
        id: lab.id,
        name: lab.name,
        nameAr: lab.nameAr,
        category: lab.category
      });
    }
  }
  return suggestions;
}

/**
 * Returns all medical categories with metadata, Arabic translations,
 * visual icons, and exact counts.
 */
function mqLabCategories() {
  var counts = {};
  for (var i = 0; i < MQ_LABS.length; i++) {
    var cat = MQ_LABS[i].category;
    counts[cat] = (counts[cat] || 0) + 1;
  }

  var list = [];
  for (var catId in counts) {
    if (Object.prototype.hasOwnProperty.call(counts, catId)) {
      var meta = MQ_LAB_CATEGORIES_META[catId] || {
        name: catId,
        nameAr: catId,
        icon: 'Activity'
      };
      list.push({
        id: catId,
        name: meta.name,
        nameAr: meta.nameAr,
        icon: meta.icon,
        count: counts[catId]
      });
    }
  }

  list.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return list;
}

/**
 * Returns all lab tests belonging to a specific category
 */
function mqLabByCategory(catId) {
  if (!catId) return [];
  var target = catId.toLowerCase().trim();
  return MQ_LABS.filter(function(lab) {
    return lab.category.toLowerCase() === target;
  });
}

/**
 * Returns all lab tests that contain critical alert thresholds
 * ('critical_low' or 'critical_high')
 */
function mqGetCriticals() {
  return MQ_LABS.filter(function(lab) {
    if (!lab.ranges || !lab.ranges.length) return false;
    for (var r = 0; r < lab.ranges.length; r++) {
      var alert = lab.ranges[r].alert;
      if (alert === 'critical_low' || alert === 'critical_high') {
        return true;
      }
    }
    return false;
  });
}

/**
 * Counts total individual reference value ranges across all tests
 */
function mqCountTotalValues() {
  var count = 0;
  for (var i = 0; i < MQ_LABS.length; i++) {
    if (MQ_LABS[i].ranges) {
      count += MQ_LABS[i].ranges.length;
    }
  }
  return count;
}

// ============================================================================
// ENVIRONMENT EXPORT WRAPPER (Node.js & Browser / Global)
// ============================================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MQ_LABS: MQ_LABS,
    MQ_LAB_CATEGORIES_META: MQ_LAB_CATEGORIES_META,
    mqLabSearch: mqLabSearch,
    mqLabSuggest: mqLabSuggest,
    mqLabCategories: mqLabCategories,
    mqLabByCategory: mqLabByCategory,
    mqGetCriticals: mqGetCriticals,
    mqCountTotalValues: mqCountTotalValues,
    mqNorm: mqNorm,
    mqLevenshtein: mqLevenshtein,
    mqSimilarity: mqSimilarity
  };
}
if (typeof window !== 'undefined') {
  window.MQ_LABS = MQ_LABS;
  window.MQ_LAB_CATEGORIES_META = MQ_LAB_CATEGORIES_META;
  window.mqLabSearch = mqLabSearch;
  window.mqLabSuggest = mqLabSuggest;
  window.mqLabCategories = mqLabCategories;
  window.mqLabByCategory = mqLabByCategory;
  window.mqGetCriticals = mqGetCriticals;
  window.mqCountTotalValues = mqCountTotalValues;
  window.mqNorm = mqNorm;
  window.mqLevenshtein = mqLevenshtein;
  window.mqSimilarity = mqSimilarity;
}
