// MEDCORE Tools & Calculators v2.0
// Pure JavaScript Clinical Calculations, Medical Terms Dictionary & i18n
// Self-contained for direct browser inclusion via <script src="medcore-tools.js"></script>

/* ==========================================================================
   SECTION 1: Medical Calculators (37 Clinical Calculators)
   ========================================================================== */

/**
 * 1. Body Mass Index (BMI) & WHO Classification
 * @param {number} weightKg
 * @param {number} heightCm
 * @returns {{value: number, classification: string, classAr: string, color: string, notesEn: string, notesAr: string}}
 */
function mqBmi(weightKg, heightCm) {
  var w = Number(weightKg);
  var h = Number(heightCm);
  if (!w || !h || w <= 0 || h <= 0) {
    return {
      value: 0,
      classification: "Invalid input",
      classAr: "مدخلات غير صالحة",
      color: "#94a3b8",
      notesEn: "Please provide positive numbers for weight and height.",
      notesAr: "يرجى إدخال أرقام موجبة للوزن والطول."
    };
  }
  var bmiVal = parseFloat((w / Math.pow(h / 100, 2)).toFixed(1));
  if (bmiVal < 18.5) {
    return {
      value: bmiVal,
      classification: "Underweight",
      classAr: "نقص في الوزن",
      color: "#3b82f6",
      notesEn: "Increased risk of nutritional deficiency, anemia, and osteoporosis.",
      notesAr: "خطر متزايد للإصابة بسوء التغذية، فقر الدم، وهشاشة العظام."
    };
  }
  if (bmiVal < 25.0) {
    return {
      value: bmiVal,
      classification: "Normal weight",
      classAr: "وزن طبيعي ومثالي",
      color: "#22c55e",
      notesEn: "Lowest risk of cardiovascular and metabolic comorbidities.",
      notesAr: "أدنى خطر للإصابة بالأمراض القلبية الوعائية والاعتلالات الاستقلابية."
    };
  }
  if (bmiVal < 30.0) {
    return {
      value: bmiVal,
      classification: "Overweight (Pre-obesity)",
      classAr: "زيادة في الوزن (مرحلة ما قبل السمنة)",
      color: "#f59e0b",
      notesEn: "Moderate risk of developing hypertension, dyslipidemia, and T2DM.",
      notesAr: "خطر متوسط لارتفاع ضغط الدم واضطراب الشحوم وداء السكري النوع الثاني."
    };
  }
  if (bmiVal < 35.0) {
    return {
      value: bmiVal,
      classification: "Class I Obesity",
      classAr: "سمنة من الدرجة الأولى",
      color: "#f97316",
      notesEn: "High cardiovascular risk. Lifestyle modification and weight loss recommended.",
      notesAr: "خطر قلبي وعائي مرتفع. يُوصى بتعديل نمط الحياة وإنقاص الوزن."
    };
  }
  if (bmiVal < 40.0) {
    return {
      value: bmiVal,
      classification: "Class II Obesity",
      classAr: "سمنة من الدرجة الثانية (شديدة)",
      color: "#ef4444",
      notesEn: "Very high risk of metabolic complications and obstructive sleep apnea.",
      notesAr: "خطر شديد للاختلاطات الأيضية وانقطاع النفس الانسدادي النومي."
    };
  }
  return {
    value: bmiVal,
    classification: "Class III Severe / Morbid Obesity",
    classAr: "سمنة مفرطة من الدرجة الثالثة",
    color: "#991b1b",
    notesEn: "Extremely high morbidity and mortality. Medical and bariatric surgical evaluation indicated.",
    notesAr: "معدلات اعتلال ووفيات بالغة الارتفاع. تستدعي التقييم الجراحي لعلاج السمنة."
  };
}

/**
 * 2. Cockcroft-Gault Creatinine Clearance (eGFR proxy)
 * @param {number} age
 * @param {number} weightKg
 * @param {number} serumCr - Serum creatinine in mg/dL
 * @param {string} sex - 'male' | 'female'
 * @returns {{egfr: number, interpretation: string, interpretationAr: string}}
 */
function mqCockcroftGault(age, weightKg, serumCr, sex) {
  var a = Number(age);
  var w = Number(weightKg);
  var cr = Number(serumCr);
  if (!a || !w || !cr || a <= 0 || w <= 0 || cr <= 0) {
    return { egfr: 0, interpretation: "Invalid input parameters", interpretationAr: "مدخلات غير صالحة" };
  }
  var isFemale = (typeof sex === 'string' && (sex.toLowerCase() === 'female' || sex.toLowerCase() === 'f'));
  var base = ((140 - a) * w) / (72 * cr);
  var gfr = parseFloat((isFemale ? base * 0.85 : base).toFixed(1));

  var interpEn = "";
  var interpAr = "";
  if (gfr >= 90) {
    interpEn = "Normal renal clearance (≥90 mL/min). Standard drug dosing generally appropriate.";
    interpAr = "تصفية كلوية طبيعية (≥90 مل/دقيقة). الجرعات الدوائية القياسية مناسبة عادةً.";
  } else if (gfr >= 60) {
    interpEn = "Mildly reduced creatinine clearance (60-89 mL/min). Monitor kidney function; slight dose adjustment may be needed for narrow therapeutic index drugs.";
    interpAr = "انخفاض طفيف في تصفية الكرياتينين (60-89 مل/دقيقة). راقب وظائف الكلى وعدّل جرعات الأدوية ذات النطاق العلاجي الضيق.";
  } else if (gfr >= 30) {
    interpEn = "Moderately reduced creatinine clearance (30-59 mL/min). Significant renal drug dosage adjustments required.";
    interpAr = "انخفاض متوسط في التصفية الكلوية (30-59 مل/دقيقة). يستلزم تعديل جرعات الأدوية التي تُطرح عبر الكلى.";
  } else if (gfr >= 15) {
    interpEn = "Severely reduced creatinine clearance (15-29 mL/min). Strict dose adjustments; prepare for renal replacement therapy if worsening.";
    interpAr = "انخفاض شديد في التصفية الكلوية (15-29 مل/دقيقة). تعديل صارم للجرعات الدوائية وتجهيز لخطة بدائل الكلى إن ساءت.";
  } else {
    interpEn = "Kidney failure (<15 mL/min). Dialysis or transplant indicated. Many medications contraindicated.";
    interpAr = "فشل كلوي نهائي (<15 مل/دقيقة). استطباب للغسيل أو الزراعة. العديد من الأدوية مضادة استطباب.";
  }

  return {
    egfr: gfr,
    interpretation: interpEn,
    interpretationAr: interpAr
  };
}

/**
 * 3. CKD-EPI 2021 Refit (Race-free eGFR formula)
 * @param {number} creatinine - Serum creatinine in mg/dL
 * @param {number} age - Age in years
 * @param {string} sex - 'male' | 'female'
 * @returns {{egfr: number, ckdStage: string, stageAr: string, color: string}}
 */
function mqCkdEpi2021(creatinine, age, sex) {
  var cr = Number(creatinine);
  var a = Number(age);
  if (!cr || !a || cr <= 0 || a <= 0) {
    return { egfr: 0, ckdStage: "Invalid", stageAr: "غير صالح", color: "#94a3b8" };
  }
  var isFemale = (typeof sex === 'string' && (sex.toLowerCase() === 'female' || sex.toLowerCase() === 'f'));
  var k = isFemale ? 0.7 : 0.9;
  var alpha = isFemale ? -0.241 : -0.302;
  var sexFactor = isFemale ? 1.012 : 1.0;

  var val = 142 * Math.pow(Math.min(cr / k, 1), alpha) * Math.pow(Math.max(cr / k, 1), -1.200) * Math.pow(0.9938, a) * sexFactor;
  var egfr = Math.round(val);

  var ckdStage = "G1";
  var stageAr = "المرحلة G1: طبيعي أو مرتفع (≥90 مل/دقيقة/1.73م²)";
  var color = "#22c55e";

  if (egfr >= 90) {
    ckdStage = "G1";
    stageAr = "المرحلة G1: طبيعي أو مرتفع (≥90 مل/دقيقة/1.73م²)";
    color = "#22c55e";
  } else if (egfr >= 60) {
    ckdStage = "G2";
    stageAr = "المرحلة G2: انخفاض طفيف (60-89 مل/دقيقة/1.73م²)";
    color = "#84cc16";
  } else if (egfr >= 45) {
    ckdStage = "G3a";
    stageAr = "المرحلة G3a: انخفاض طفيف إلى متوسط (45-59 مل/دقيقة/1.73م²)";
    color = "#eab308";
  } else if (egfr >= 30) {
    ckdStage = "G3b";
    stageAr = "المرحلة G3b: انخفاض متوسط إلى شديد (30-44 مل/دقيقة/1.73م²)";
    color = "#f97316";
  } else if (egfr >= 15) {
    ckdStage = "G4";
    stageAr = "المرحلة G4: انخفاض شديد (15-29 مل/دقيقة/1.73م²)";
    color = "#ef4444";
  } else {
    ckdStage = "G5";
    stageAr = "المرحلة G5: فشل كلوي نهائي (<15 مل/دقيقة/1.73م²)";
    color = "#7f1d1d";
  }

  return {
    egfr: egfr,
    ckdStage: ckdStage,
    stageAr: stageAr,
    color: color
  };
}

/**
 * 4. Corrected Calcium for Hypoalbuminemia
 * @param {number} measuredCa - Total calcium in mg/dL
 * @param {number} albumin - Serum albumin in g/dL
 * @returns {{corrected: number, interpretation: string, interpretationAr: string}}
 */
function mqCorrectedCalcium(measuredCa, albumin) {
  var ca = Number(measuredCa);
  var alb = Number(albumin);
  if (isNaN(ca) || isNaN(alb)) {
    return { corrected: 0, interpretation: "Invalid input", interpretationAr: "مدخلات غير صالحة" };
  }
  var corrected = parseFloat((ca + 0.8 * (4.0 - alb)).toFixed(2));
  var interpEn = "";
  var interpAr = "";

  if (corrected < 8.5) {
    interpEn = "Corrected hypocalcemia (<8.5 mg/dL). Evaluate PTH, vitamin D, magnesium, and ECG (QTc prolongation).";
    interpAr = "نقص كالسيوم الدم المصحح (<8.5 ملغ/دل). افحص هرمون PTH، فيتامين D، المغنيسيوم وتخطيط القلب (استطالة QTc).";
  } else if (corrected <= 10.5) {
    interpEn = "Normal corrected calcium (8.5 - 10.5 mg/dL).";
    interpAr = "مستوى كالسيوم طبيعي بعد تصحيح الألبومين (8.5 - 10.5 ملغ/دل).";
  } else {
    interpEn = "Corrected hypercalcemia (>10.5 mg/dL). Investigate primary hyperparathyroidism, malignancy, granulomatous diseases, or medications.";
    interpAr = "فرط كالسيوم الدم المصحح (>10.5 ملغ/دل). ابحث عن فرط نشاط جارات الدرقية الأولي، الأورام الخبيثة، أو الأدوية.";
  }

  return {
    corrected: corrected,
    interpretation: interpEn,
    interpretationAr: interpAr
  };
}

/**
 * 5. Serum Anion Gap
 * @param {number} na - Sodium (mEq/L)
 * @param {number} cl - Chloride (mEq/L)
 * @param {number} hco3 - Bicarbonate (mEq/L)
 * @param {boolean} [includeK=false]
 * @param {number} [k=0] - Potassium (mEq/L)
 * @returns {{ag: number, normal: boolean, elevated: boolean, interpretation: string, interpretationAr: string}}
 */
function mqAnionGap(na, cl, hco3, includeK, k) {
  var n = Number(na) || 0;
  var c = Number(cl) || 0;
  var h = Number(hco3) || 0;
  var pot = Number(k) || 0;
  var withK = Boolean(includeK);

  var agVal = withK ? (n + pot - c - h) : (n - c - h);
  agVal = parseFloat(agVal.toFixed(1));

  var normalLower = withK ? 10 : 8;
  var normalUpper = withK ? 20 : 12;

  var normal = agVal >= normalLower && agVal <= normalUpper;
  var elevated = agVal > normalUpper;

  var interpEn = "";
  var interpAr = "";

  if (elevated) {
    interpEn = "Elevated Anion Gap (> " + normalUpper + " mEq/L): Suggests High Anion Gap Metabolic Acidosis (HAGMA). Consider GOLD MARK / MUDPILES: Glycols, Oxoproline, L-lactate, D-lactate, Methanol, Aspirin, Renal failure, Ketoacidosis.";
    interpAr = "فجوة أنيونية مرتفعة (> " + normalUpper + " مليمكافئ/لتر): تشير إلى حماض استقلابي مرتفع الفجوة (HAGMA). الأسباب الشائعة: الحماض الكيتوني السكري، اللاكتيك، القصور الكلوي، وتسمم الكحولات أو الأسبرين.";
  } else if (agVal < normalLower) {
    interpEn = "Low Anion Gap (< " + normalLower + " mEq/L): Most commonly due to hypoalbuminemia (each 1 g/dL drop in albumin lowers AG by ~2.5), multiple myeloma (paraproteins), severe hypercalcemia/hypermagnesemia, or lithium.";
    interpAr = "فجوة أنيونية منخفضة (< " + normalLower + " مليمكافئ/لتر): غالباً بسبب نقص ألبومين الدم، المايلوما المتعددة، أو ارتفاع الكاتيونات غير المقاسة.";
  } else {
    interpEn = "Normal Anion Gap (" + normalLower + " - " + normalUpper + " mEq/L). If metabolic acidosis is present, suspect NAGMA / hyperchloremic acidosis (diarrhea, RTA, saline infusion).";
    interpAr = "فجوة أنيونية طبيعية (" + normalLower + " - " + normalUpper + " مليمكافئ/لتر). في وجود حماض استقلابي، يُشتبه بـ NAGMA (إسهال حاد، حماض نبيبي كلوي RTA، أو محاليل ملحية مفرطة).";
  }

  return {
    ag: agVal,
    normal: normal,
    elevated: elevated,
    interpretation: interpEn,
    interpretationAr: interpAr
  };
}

/**
 * 6. Delta-Delta Ratio (Delta Gap / Delta Bicarb)
 * @param {number} ag - Anion Gap
 * @param {number} hco3 - Serum Bicarbonate
 * @returns {{ratio: number, interpretationEn: string, interpretationAr: string, color: string}}
 */
function mqDeltaDelta(ag, hco3) {
  var a = Number(ag);
  var h = Number(hco3);
  var normalAg = 12;
  var normalHco3 = 24;

  var deltaAg = a - normalAg;
  var deltaHco3 = normalHco3 - h;

  if (deltaHco3 === 0) {
    return {
      ratio: parseFloat(deltaAg.toFixed(2)),
      interpretationEn: "Normal bicarbonate baseline (HCO3 = 24 mEq/L). Delta HCO3 is 0.",
      interpretationAr: "البيكربونات في المستوى المرجعي الطبيعي (24 مليمكافئ/لتر).",
      color: "#3b82f6"
    };
  }

  var ratio = parseFloat((deltaAg / deltaHco3).toFixed(2));
  var interpEn = "";
  var interpAr = "";
  var color = "#22c55e";

  if (ratio < 0.4) {
    interpEn = "Ratio < 0.4: Concurrent Normal Anion Gap Metabolic Acidosis (NAGMA / Hyperchloremic acidosis) alongside HAGMA.";
    interpAr = "النسبة < 0.4: حماض استقلابي متزامن طبيعي الفجوة (فرط كلوريد الدم / إسهال أو RTA) مع نقص بيكربونات يفوق ارتفاع الفجوة.";
    color = "#f59e0b";
  } else if (ratio < 0.8) {
    interpEn = "Ratio 0.4 - 0.8: Mixed High Anion Gap (HAGMA) and Normal Anion Gap Metabolic Acidosis (NAGMA).";
    interpAr = "النسبة 0.4 - 0.8: حماض استقلابي مختلط (مرتفع وطبيعي الفجوة معاً).";
    color = "#f97316";
  } else if (ratio <= 2.0) {
    interpEn = "Ratio 0.8 - 2.0: Pure High Anion Gap Metabolic Acidosis (DKA, lactic acidosis, uremia, toxic alcohols).";
    interpAr = "النسبة 0.8 - 2.0: حماض استقلابي نقي مرتفع الفجوة الأنيونية (مثل الحماض الكيتوني السكري أو اللاكتيك).";
    color = "#ef4444";
  } else {
    interpEn = "Ratio > 2.0: Concurrent Metabolic Alkalosis (e.g. vomiting, diuretics) or pre-existing respiratory acidosis compensation.";
    interpAr = "النسبة > 2.0: قلاء استقلابي متزامن (قيء، مدرات بول) أو تعويض كلوي مسبق لحماض تنفسي مزمن.";
    color = "#8b5cf6";
  }

  return {
    ratio: ratio,
    interpretationEn: interpEn,
    interpretationAr: interpAr,
    color: color
  };
}

/**
 * 7. Corrected Sodium in Hyperglycemia (Katz Formula)
 * @param {number} na - Measured Sodium (mEq/L)
 * @param {number} glucose - Serum Glucose (mg/dL)
 * @returns {{corrected: number, delta: number, interpretation: string, interpretationAr: string}}
 */
function mqCorrectedSodium(na, glucose) {
  var sNa = Number(na) || 0;
  var glu = Number(glucose) || 0;

  var delta = 0;
  if (glu > 100) {
    delta = parseFloat((1.6 * ((glu - 100) / 100)).toFixed(1));
  }
  var corrected = parseFloat((sNa + delta).toFixed(1));

  var interpEn = "";
  var interpAr = "";

  if (corrected < 135) {
    interpEn = "Corrected hyponatremia (<135 mEq/L): True hypotonic state even after correcting for hyperglycemia.";
    interpAr = "نقص صوديوم حقيقي (<135 مليمكافئ/لتر) حتى بعد تصحيح أثر فرط سكر الدم التناضحي.";
  } else if (corrected <= 145) {
    interpEn = "Normal corrected sodium (135 - 145 mEq/L): Apparent hyponatremia is pseudohyponatremia due to osmotic water shift.";
    interpAr = "صوديوم مصحح طبيعي (135 - 145 مليمكافئ/لتر): هبوط الصوديوم الظاهري سببه انتقال الماء للخلايا بتأثير السكر.";
  } else {
    interpEn = "Corrected hypernatremia (>145 mEq/L): Indicates profound free water deficit disguised by hyperglycemia.";
    interpAr = "فرط صوديوم حقيقي بعد التصحيح (>145 مليمكافئ/لتر): يشير إلى عجز شديد في الماء الحر كان محجوباً بارتفاع السكر.";
  }

  return {
    corrected: corrected,
    delta: delta,
    interpretation: interpEn,
    interpretationAr: interpAr
  };
}

/**
 * 8. Calculated Serum Osmolality
 * @param {number} na - Sodium (mEq/L)
 * @param {number} glucose - Glucose (mg/dL)
 * @param {number} bun - Blood Urea Nitrogen (mg/dL)
 * @returns {{calculated: number, normal: boolean, elevated: boolean, interpretationAr: string}}
 */
function mqSerumOsmolality(na, glucose, bun) {
  var sNa = Number(na) || 0;
  var glu = Number(glucose) || 0;
  var sBun = Number(bun) || 0;

  var calc = parseFloat(((2 * sNa) + (glu / 18) + (sBun / 2.8)).toFixed(1));
  var normal = calc >= 275 && calc <= 295;
  var elevated = calc > 295;

  var interpAr = "";
  if (normal) {
    interpAr = "أسمولالية مصلية طبيعية (275 - 295 mOsm/kg). توازن سليم بين الماء والمذابات.";
  } else if (elevated) {
    interpAr = "أسمولالية مصلية مرتفعة (>295 mOsm/kg): تشير إلى فرط سكر الدم، اليوريميا، الجفاف الشديد، أو وجود سموم أسمولية.";
  } else {
    interpAr = "أسمولالية مصلية منخفضة (<275 mOsm/kg): تشير إلى نقص الصوديوم التمددي أو متلازمة SIADH أو احتباس الماء الحر.";
  }

  return {
    calculated: calc,
    normal: normal,
    elevated: elevated,
    interpretationAr: interpAr
  };
}

/**
 * 9. Serum Osmolar Gap
 * @param {number} measured - Measured Serum Osmolality (mOsm/kg)
 * @param {number} calculated - Calculated Serum Osmolality (mOsm/kg)
 * @returns {{gap: number, isHigh: boolean, interpretationEn: string, interpretationAr: string}}
 */
function mqOsmolarGap(measured, calculated) {
  var m = Number(measured) || 0;
  var c = Number(calculated) || 0;
  var gap = parseFloat((m - c).toFixed(1));
  var isHigh = gap > 10;

  var interpEn = isHigh
    ? "Elevated osmolar gap (>10 mOsm/kg): Strongly suggests presence of unmeasured exogenous osmotic solutes (Methanol, Ethylene glycol, Isopropanol, Ethanol, Propylene glycol)."
    : "Normal osmolar gap (≤10 mOsm/kg): Toxic alcohol ingestion unlikely, though cannot exclude late presentation after complete metabolism.";
  var interpAr = isHigh
    ? "فجوة أسمولية مرتفعة (>10 mOsm/kg): تشير بقوة لوجود كحولات أو مواد سامة غير مقاسة (ميثانول، إيثيلين جلايكول، أيزوبروبانول، بروبيلين جلايكول)."
    : "فجوة أسمولية طبيعية (≤10 mOsm/kg): تسمم الكحولات السامة غير مرجح.";

  return {
    gap: gap,
    isHigh: isHigh,
    interpretationEn: interpEn,
    interpretationAr: interpAr
  };
}

/**
 * 10. Fractional Excretion of Sodium (FENa)
 * @param {number} urineNa - Urine Sodium (mEq/L)
 * @param {number} plasmaNa - Plasma Sodium (mEq/L)
 * @param {number} urineCr - Urine Creatinine (mg/dL)
 * @param {number} plasmaCr - Plasma Creatinine (mg/dL)
 * @returns {{value: number, interpretationEn: string, interpretationAr: string, color: string}}
 */
function mqFena(urineNa, plasmaNa, urineCr, plasmaCr) {
  var uNa = Number(urineNa) || 0;
  var pNa = Number(plasmaNa) || 0;
  var uCr = Number(urineCr) || 0;
  var pCr = Number(plasmaCr) || 0;

  if (pNa <= 0 || uCr <= 0) {
    return { value: 0, interpretationEn: "Invalid inputs", interpretationAr: "مدخلات غير صالحة", color: "#94a3b8" };
  }

  var val = parseFloat((((uNa * pCr) / (pNa * uCr)) * 100).toFixed(2));
  var interpEn = "";
  var interpAr = "";
  var color = "#22c55e";

  if (val < 1.0) {
    interpEn = "FENa < 1%: Prerenal azotemia (intact tubular reabsorption preserving sodium in volume depletion, heart failure, or hepatorenal syndrome).";
    interpAr = "FENa < 1%: قصور كلوي قبل كلوي (الكلية سليمة وتعيد امتصاص الصوديوم نتيجة الجفاف، قصور القلب، أو المتلازمة الكبدية الكلوية).";
    color = "#22c55e";
  } else if (val > 2.0) {
    interpEn = "FENa > 2%: Intrinsic acute kidney injury / Acute Tubular Necrosis (ATN) with impaired tubular sodium handling.";
    interpAr = "FENa > 2%: أذية كلوية ذاتية حادة / نخر أنبوبي حاد (ATN) مع فشل الأنابيب في إعادة امتصاص الصوديوم.";
    color = "#ef4444";
  } else {
    interpEn = "FENa 1.0 - 2.0%: Indeterminate / intermediate zone (may occur in acute glomerulonephritis, radiocontrast nephropathy, or resolving ATN).";
    interpAr = "FENa 1.0 - 2.0%: منطقة متوسطة غير حاسمة (قد تظهر في التهاب الكبيبات الحاد، اعتلال الكلى بالصبغة، أو مرحلة التعافي).";
    color = "#f59e0b";
  }

  return {
    value: val,
    interpretationEn: interpEn,
    interpretationAr: interpAr,
    color: color
  };
}

/**
 * 11. Model for End-Stage Liver Disease (MELD Score)
 * @param {number} bili - Total Bilirubin (mg/dL)
 * @param {number} inr - INR
 * @param {number} cr - Serum Creatinine (mg/dL)
 * @param {boolean} [onDialysis=false]
 * @returns {{score: number, mortalityEn: string, mortalityAr: string, urgency: string}}
 */
function mqMeld(bili, inr, cr, onDialysis) {
  var b = Math.max(1.0, Number(bili) || 1.0);
  var i = Math.max(1.0, Number(inr) || 1.0);
  var c = Math.max(1.0, Number(cr) || 1.0);
  if (Boolean(onDialysis) || c > 4.0) {
    c = 4.0;
  }

  var rawMeld = (3.78 * Math.log(b)) + (11.2 * Math.log(i)) + (9.57 * Math.log(c)) + 6.43;
  var score = Math.min(40, Math.max(6, Math.round(rawMeld)));

  var mortEn = "";
  var mortAr = "";
  var urgency = "Low";

  if (score <= 9) {
    mortEn = "3-month estimated mortality: ~1.9%";
    mortAr = "نسبة الوفيات المقدرة خلال 3 أشهر: قرابة 1.9%";
    urgency = "Low";
  } else if (score <= 19) {
    mortEn = "3-month estimated mortality: ~6.0%";
    mortAr = "نسبة الوفيات المقدرة خلال 3 أشهر: قرابة 6.0%";
    urgency = "Moderate";
  } else if (score <= 29) {
    mortEn = "3-month estimated mortality: ~19.6%";
    mortAr = "نسبة الوفيات المقدرة خلال 3 أشهر: قرابة 19.6%";
    urgency = "High";
  } else if (score <= 39) {
    mortEn = "3-month estimated mortality: ~52.6%";
    mortAr = "نسبة الوفيات المقدرة خلال 3 أشهر: قرابة 52.6%";
    urgency = "Very High";
  } else {
    mortEn = "3-month estimated mortality: >71.3% (Critical liver transplant priority)";
    mortAr = "نسبة الوفيات المقدرة خلال 3 أشهر: >71.3% (أولوية زراعة كبد قصوى عاجلة)";
    urgency = "Critical";
  }

  return {
    score: score,
    mortalityEn: mortEn,
    mortalityAr: mortAr,
    urgency: urgency
  };
}

/**
 * 12. Child-Pugh Score for Cirrhosis Mortality
 * @param {number|Object} enc - Encephalopathy (1: None, 2: Grade 1-2, 3: Grade 3-4) OR params object
 * @param {number} [ascites] - Ascites (1: None, 2: Slight/Controlled, 3: Moderate/Severe)
 * @param {number} [bili] - Bilirubin (1: <2, 2: 2-3, 3: >3 mg/dL)
 * @param {number} [albumin] - Albumin (1: >3.5, 2: 2.8-3.5, 3: <2.8 g/dL)
 * @param {number} [inr] - INR (1: <1.7, 2: 1.7-2.3, 3: >2.3)
 * @returns {{score: number, classification: string, interpretationEn: string, interpretationAr: string, color: string}}
 */
function mqChildPugh(enc, ascites, bili, albumin, inr) {
  var pEnc = 1, pAsc = 1, pBili = 1, pAlb = 1, pInr = 1;
  if (typeof enc === 'object' && enc !== null) {
    pEnc = Number(enc.encephalopathy) || 1;
    pAsc = Number(enc.ascites) || 1;
    pBili = Number(enc.bilirubin) || 1;
    pAlb = Number(enc.albumin) || 1;
    pInr = Number(enc.inr) || 1;
  } else {
    pEnc = Number(enc) || 1;
    pAsc = Number(ascites) || 1;
    pBili = Number(bili) || 1;
    pAlb = Number(albumin) || 1;
    pInr = Number(inr) || 1;
  }

  var score = pEnc + pAsc + pBili + pAlb + pInr;
  var classification = "Class A";
  var interpEn = "";
  var interpAr = "";
  var color = "#22c55e";

  if (score >= 10) {
    classification = "Class C";
    interpEn = "Class C (10 - 15 points): Decompensated end-stage cirrhosis. 1-year survival 45%, 2-year survival 35%. Severe surgical mortality (~80%).";
    interpAr = "الصنف C (10 - 15 نقطة): تشمع كبدي متقدم غير معاوض. نسبة البقاء لسنة 45%، وسنتين 35%. خطورة جراحية شديدة جداً (~80% وفيات).";
    color = "#ef4444";
  } else if (score >= 7) {
    classification = "Class B";
    interpEn = "Class B (7 - 9 points): Significant functional compromise. 1-year survival 80%, 2-year survival 60%. Moderate-to-high surgical mortality (~30%).";
    interpAr = "الصنف B (7 - 9 نقاط): تراجع وظيفي كبدي متوسط إلى شديد. نسبة البقاء لسنة 80%، وسنتين 60%. خطورة جراحية متوسطة (~30% وفيات).";
    color = "#f59e0b";
  } else {
    classification = "Class A";
    interpEn = "Class A (5 - 6 points): Well-compensated liver disease. 1-year survival 100%, 2-year survival 85%. Low surgical mortality (~10%).";
    interpAr = "الصنف A (5 - 6 نقاط): مرض كبدي معاوض جيداً. نسبة البقاء لسنة 100%، وسنتين 85%. خطورة جراحية منخفضة (~10%).";
    color = "#22c55e";
  }

  return {
    score: score,
    classification: classification,
    interpretationEn: interpEn,
    interpretationAr: interpAr,
    color: color
  };
}

/**
 * 13. Wells Score for Deep Vein Thrombosis (DVT)
 * @param {Object|Array<string>} items
 * @returns {{score: number, riskEn: string, riskAr: string, recommendationEn: string, recommendationAr: string, color: string}}
 */
function mqWellsDvt(items) {
  var p = items || {};
  var score = 0;

  if (Array.isArray(items)) {
    items.forEach(function(k) {
      if (k === 'alternativeDiagnosisLikely') score -= 2;
      else score += 1;
    });
  } else {
    if (p.activeCancer) score += 1;
    if (p.paralysisParesisPlaster) score += 1;
    if (p.bedriddenOrSurgery) score += 1;
    if (p.localizedTenderness) score += 1;
    if (p.entireLegSwollen) score += 1;
    if (p.calfSwelling3cm) score += 1;
    if (p.pittingEdemaConfined) score += 1;
    if (p.collateralSuperficialVeins) score += 1;
    if (p.priorDvt) score += 1;
    if (p.alternativeDiagnosisLikely) score -= 2;
  }

  var riskEn = "";
  var riskAr = "";
  var recEn = "";
  var recAr = "";
  var color = "#22c55e";

  if (score <= 0) {
    riskEn = "Low Risk / DVT Unlikely (Score ≤ 0)";
    riskAr = "خطر منخفض / الإصابة بـ DVT غير مرجحة (≤ 0)";
    recEn = "Order highly sensitive D-dimer. If negative, DVT safely ruled out without ultrasound.";
    recAr = "إجراء فحص D-dimer عالي الحساسية. إذا كان سلبياً يتم استبعاد DVT بأمان دون حاجة للسونار.";
    color = "#22c55e";
  } else if (score <= 2) {
    riskEn = "Moderate Risk (Score 1 - 2)";
    riskAr = "خطر متوسط (1 - 2)";
    recEn = "Order D-dimer or compression duplex ultrasonography of the lower extremity.";
    recAr = "إجراء فحص D-dimer أو تصوير أوردة الساق بالموجات الصوتية دوبلر (Doppler US).";
    color = "#f59e0b";
  } else {
    riskEn = "High Risk / DVT Likely (Score ≥ 3)";
    riskAr = "خطر مرتفع / الإصابة بـ DVT مرجحة جداً (≥ 3)";
    recEn = "Perform urgent compression duplex ultrasonography. Consider empiric anticoagulation if delay expected.";
    recAr = "إجراء سونار دوبلر عاجل لأوردة الساق؛ مع بحث بدء مضادات التخثر الاحترازية فوراً إن تأخر التصوير.";
    color = "#ef4444";
  }

  return {
    score: score,
    riskEn: riskEn,
    riskAr: riskAr,
    recommendationEn: recEn,
    recommendationAr: recAr,
    color: color
  };
}

/**
 * 14. Wells Criteria for Pulmonary Embolism (PE)
 * @param {Object|Array<string>} items
 * @returns {{score: number, twoTierEn: string, twoTierAr: string, threeTierEn: string, threeTierAr: string, recommendationEn: string, recommendationAr: string}}
 */
function mqWellsPe(items) {
  var p = items || {};
  var score = 0;

  if (Array.isArray(items)) {
    items.forEach(function(k) {
      if (k === 'dvtSymptoms' || k === 'peMostLikely') score += 3.0;
      else if (k === 'tachycardiaHr100' || k === 'immobilizationOrSurgery' || k === 'priorDvtPe') score += 1.5;
      else if (k === 'hemoptysis' || k === 'malignancy') score += 1.0;
    });
  } else {
    if (p.dvtSymptoms) score += 3.0;
    if (p.peMostLikely) score += 3.0;
    if (p.tachycardiaHr100) score += 1.5;
    if (p.immobilizationOrSurgery) score += 1.5;
    if (p.priorDvtPe) score += 1.5;
    if (p.hemoptysis) score += 1.0;
    if (p.malignancy) score += 1.0;
  }

  score = parseFloat(score.toFixed(1));
  var isLikely = score > 4.0;
  var twoTierEn = isLikely ? "PE Likely (>4.0)" : "PE Unlikely (≤4.0)";
  var twoTierAr = isLikely ? "انصمام رئوي مرجح (>4.0)" : "انصمام رئوي غير مرجح (≤4.0)";

  var threeTierEn = "";
  var threeTierAr = "";
  if (score < 2.0) {
    threeTierEn = "Low probability (0 - 1.5)";
    threeTierAr = "احتمالية منخفضة (0 - 1.5)";
  } else if (score <= 6.0) {
    threeTierEn = "Moderate probability (2.0 - 6.0)";
    threeTierAr = "احتمالية متوسطة (2.0 - 6.0)";
  } else {
    threeTierEn = "High probability (≥6.5)";
    threeTierAr = "احتمالية مرتفعة جداً (≥6.5)";
  }

  var recEn = isLikely
    ? "Proceed directly to CT Pulmonary Angiography (CTPA). Empiric anticoagulation if no contraindication."
    : "Order high-sensitivity D-dimer. If negative, PE safely excluded without CTPA imaging.";
  var recAr = isLikely
    ? "التوجه مباشرة لإجراء تصوير طبقي محوسب لشرايين الرئة (CTPA). بدء مضادات التخثر الاحترازية فوراً إن لم يكن هناك موانع."
    : "فحص D-dimer؛ إذا كان سلبياً يُستبعد الانصمام الرئوي بأمان دون تعريض المريض للأشعة.";

  return {
    score: score,
    twoTierEn: twoTierEn,
    twoTierAr: twoTierAr,
    threeTierEn: threeTierEn,
    threeTierAr: threeTierAr,
    recommendationEn: recEn,
    recommendationAr: recAr
  };
}

/**
 * 15. CURB-65 Severity Score for Community-Acquired Pneumonia
 * @param {Object|Array<string>} items
 * @returns {{score: number, riskEn: string, riskAr: string, managementEn: string, managementAr: string, admissionRecommended: boolean}}
 */
function mqCurb65(items) {
  var p = items || {};
  var score = 0;

  if (Array.isArray(items)) {
    score = items.length;
  } else {
    if (p.confusion) score += 1;
    if (p.bunAbove19) score += 1;
    if (p.rr30OrMore) score += 1;
    if (p.bpLow) score += 1;
    if (p.age65OrMore) score += 1;
  }

  var riskEn = "";
  var riskAr = "";
  var mgmtEn = "";
  var mgmtAr = "";
  var admissionRecommended = false;

  if (score <= 1) {
    riskEn = "Low risk (30-day mortality <1.5%)";
    riskAr = "خطورة منخفضة (نسبة الوفيات خلال 30 يوماً <1.5%)";
    mgmtEn = "Suitable for outpatient treatment with oral antibiotics.";
    mgmtAr = "علاج منزلي بالعيادة الخارجية بمضادات حيوية فموية.";
    admissionRecommended = false;
  } else if (score === 2) {
    riskEn = "Intermediate risk (30-day mortality ~9.2%)";
    riskAr = "خطورة متوسطة (نسبة الوفيات خلال 30 يوماً قرابة 9.2%)";
    mgmtEn = "Consider short hospital stay or closely supervised outpatient management.";
    mgmtAr = "تنويم قصير في المستشفى أو متابعة حثيثة بالعيادة.";
    admissionRecommended = true;
  } else {
    riskEn = "High risk (30-day mortality " + (score === 3 ? "14.5%" : "22 - 40%") + ")";
    riskAr = "خطورة مرتفعة جداً (نسبة الوفيات " + (score === 3 ? "14.5%" : "22 - 40%") + ")";
    mgmtEn = "Urgent hospital admission. Evaluate for Intensive Care Unit (ICU) admission if score is 4 or 5.";
    mgmtAr = "تنويم فوري بالمستشفى؛ وتقييم القبول بالعناية المركزة (ICU) في حال النتيجة 4 أو 5.";
    admissionRecommended = true;
  }

  return {
    score: score,
    riskEn: riskEn,
    riskAr: riskAr,
    managementEn: mgmtEn,
    managementAr: mgmtAr,
    admissionRecommended: admissionRecommended
  };
}

/**
 * 16. quick SOFA (qSOFA) Sepsis Screening
 * @param {Object|Array<string>} items
 * @returns {{score: number, isPositive: boolean, interpretationEn: string, interpretationAr: string, color: string}}
 */
function mqQsofa(items) {
  var p = items || {};
  var score = 0;

  if (Array.isArray(items)) {
    score = items.length;
  } else {
    if (p.rr22OrMore) score += 1;
    if (p.gcsUnder15) score += 1;
    if (p.sbp100OrLess) score += 1;
  }

  var isPositive = score >= 2;
  var interpEn = isPositive
    ? "qSOFA ≥ 2: High risk of poor outcome and in-hospital mortality. Suspect sepsis, evaluate for organ dysfunction, check serum lactate, obtain blood cultures, and initiate broad-spectrum antibiotics within 1 hour."
    : "qSOFA < 2: Low immediate risk of mortality from sepsis, but continue clinical monitoring.";
  var interpAr = isPositive
    ? "qSOFA ≥ 2: مؤشر إيجابي لخطر الإنتان والوفاة داخل المستشفى. يتطلب تقييم فشل الأعضاء، فحص اللاكتات، وزرع الدم، وإعطاء المضادات الحيوية الواسعة خلال ساعة واحدة."
    : "qSOFA < 2: خطورة منخفضة حالياً، مع استمرار المراقبة السريرية الحثيثة.";
  var color = isPositive ? "#ef4444" : "#22c55e";

  return {
    score: score,
    isPositive: isPositive,
    interpretationEn: interpEn,
    interpretationAr: interpAr,
    color: color
  };
}

/**
 * 17. CHA2DS2-VASc Stroke Risk in Atrial Fibrillation
 * @param {Object} items
 * @returns {{score: number, strokeRiskPerYear: string, anticoagulationEn: string, anticoagulationAr: string, color: string}}
 */
function mqCha2ds2Vasc(items) {
  var p = items || {};
  var score = 0;

  if (p.chf) score += 1;
  if (p.hypertension) score += 1;
  var age = Number(p.age) || 0;
  if (age >= 75 || p.age75OrMore) score += 2;
  else if (age >= 65 || p.age65To74) score += 1;
  if (p.diabetes) score += 1;
  if (p.priorStrokeTia) score += 2;
  if (p.vascularDisease) score += 1;
  var isFemale = (typeof p.sex === 'string' && (p.sex.toLowerCase() === 'female' || p.sex.toLowerCase() === 'f')) || Boolean(p.female);
  if (isFemale) score += 1;

  var strokeRiskTable = {
    0: "0.2%", 1: "1.3%", 2: "2.2%", 3: "3.2%", 4: "4.0%",
    5: "6.7%", 6: "9.8%", 7: "9.6%", 8: "6.7%", 9: "15.2%"
  };
  var strokeRiskPerYear = strokeRiskTable[Math.min(9, score)] || ">15%";

  var threshold = isFemale ? 2 : 1;
  var definitelyIndicated = isFemale ? score >= 3 : score >= 2;

  var acEn = "";
  var acAr = "";
  var color = "#22c55e";

  if (definitelyIndicated) {
    acEn = "Oral anticoagulation (DOAC preferred over Warfarin) is strongly recommended (Class I).";
    acAr = "يُوصى بشدة بمضادات التخثر الفموية (مضادات التخثر المباشرة DOACs مفضلة على الوارفارين).";
    color = "#ef4444";
  } else if (score >= threshold) {
    acEn = "Oral anticoagulation should be considered based on individual bleeding risk and patient preference (Class IIa).";
    acAr = "ينبغي التفكير في مضادات التخثر الفموية وموازنتها مع خطر النزف (توصية IIa).";
    color = "#f59e0b";
  } else {
    acEn = "Low stroke risk. No antithrombotic therapy recommended (Class III / Harm to use aspirin).";
    acAr = "خطر منخفض للسكتة؛ لا حاجة لمضادات التخثر أو الأسبرين.";
    color = "#22c55e";
  }

  return {
    score: score,
    strokeRiskPerYear: strokeRiskPerYear,
    anticoagulationEn: acEn,
    anticoagulationAr: acAr,
    color: color
  };
}

/**
 * 18. HAS-BLED Score for Major Bleeding Risk
 * @param {Object|Array<string>} items
 * @returns {{score: number, isHighRisk: boolean, interpretationEn: string, interpretationAr: string, color: string}}
 */
function mqHasBled(items) {
  var p = items || {};
  var score = 0;

  if (Array.isArray(items)) {
    score = items.length;
  } else {
    if (p.hypertension) score += 1;
    if (p.abnormalRenal) score += 1;
    if (p.abnormalLiver) score += 1;
    if (p.strokeHistory) score += 1;
    if (p.bleedingHistory) score += 1;
    if (p.labileInr) score += 1;
    if (p.elderlyAge65) score += 1;
    if (p.antiplateletsOrNsaids) score += 1;
    if (p.alcoholExcess) score += 1;
  }

  var isHighRisk = score >= 3;
  var interpEn = isHighRisk
    ? "HAS-BLED ≥ 3: High bleeding risk (≥3.7 - 8.9 bleeds per 100 patient-years). Caution and regular clinical review warranted. Correct reversible bleeding risk factors (control BP, avoid NSAIDs)."
    : "HAS-BLED < 3: Low to moderate bleeding risk. Anticoagulation generally well-tolerated.";
  var interpAr = isHighRisk
    ? "HAS-BLED ≥ 3: خطورة نزف مرتفعة. تستدعي الحذر والمراجعة الدورية وتصحيح العوامل القابلة للعلاج (ضبط الضغط، إيقاف المسكنات)."
    : "HAS-BLED < 3: خطورة نزف منخفضة إلى متوسطة.";
  var color = isHighRisk ? "#ef4444" : "#22c55e";

  return {
    score: score,
    isHighRisk: isHighRisk,
    interpretationEn: interpEn,
    interpretationAr: interpAr,
    color: color
  };
}

/**
 * 19. CHADS2 Score for Atrial Fibrillation Stroke Risk
 * @param {Object} items
 * @returns {{score: number, riskEn: string, riskAr: string}}
 */
function mqChads2(items) {
  var p = items || {};
  var score = 0;

  if (p.chf) score += 1;
  if (p.hypertension) score += 1;
  if (p.age75OrMore) score += 1;
  if (p.diabetes) score += 1;
  if (p.strokeTia) score += 2;

  var riskEn = "";
  var riskAr = "";

  if (score === 0) {
    riskEn = "Score 0: Low stroke risk (~1.9% per year).";
    riskAr = "0 نقاط: خطر منخفض للسكتة الدماغية (~1.9% سنوياً).";
  } else if (score === 1) {
    riskEn = "Score 1: Intermediate stroke risk (~2.8% per year). Consider anticoagulation.";
    riskAr = "1 نقطة: خطر متوسط (~2.8% سنوياً)؛ يوصى ببحث مضادات التخثر.";
  } else {
    riskEn = "Score " + score + ": High stroke risk (4.0 - 18.2% per year). Anticoagulation strongly indicated.";
    riskAr = score + " نقاط: خطر مرتفع للسكتة (4 - 18% سنوياً)؛ مضادات التخثر مستطبة بقوة.";
  }

  return {
    score: score,
    riskEn: riskEn,
    riskAr: riskAr
  };
}

/**
 * 20. Killip Classification in Acute Myocardial Infarction
 * @param {number} grade - 1, 2, 3, or 4
 * @returns {{nameEn: string, nameAr: string, descriptionEn: string, descriptionAr: string, mortality: string, color: string}}
 */
function mqKillip(grade) {
  var g = Number(grade) || 1;
  var data = {
    1: {
      nameEn: "Killip Class I",
      nameAr: "تصنيف كيليب الدرجة الأولى",
      descriptionEn: "No clinical signs of heart failure (no rales, no S3 gallop).",
      descriptionAr: "لا توجد علامات سريرية لقصور القلب (غياب الخراخر وغياب صوت S3).",
      mortality: "~6% in-hospital mortality",
      color: "#22c55e"
    },
    2: {
      nameEn: "Killip Class II",
      nameAr: "تصنيف كيليب الدرجة الثانية",
      descriptionEn: "Mild-to-moderate heart failure. Rales in lower half of lung fields and/or S3 gallop and elevated jugular venous pressure.",
      descriptionAr: "قصور قلب خفيف إلى متوسط. خراخر في النصف السفلي من الرئتين وصوت S3 أو ارتفاع ضغط الوريد الوداجي.",
      mortality: "~17% in-hospital mortality",
      color: "#84cc16"
    },
    3: {
      nameEn: "Killip Class III",
      nameAr: "تصنيف كيليب الدرجة الثالثة",
      descriptionEn: "Severe heart failure. Frank pulmonary edema with widespread bilateral lung rales.",
      descriptionAr: "قصور قلب شديد. وذمة رئة صريحة مع انتشار واسع للخراخر الرئوية في كلا الجانبين.",
      mortality: "~38% in-hospital mortality",
      color: "#f97316"
    },
    4: {
      nameEn: "Killip Class IV",
      nameAr: "تصنيف كيليب الدرجة الرابعة",
      descriptionEn: "Cardiogenic shock. Systolic BP <90 mmHg, oliguria, cold extremities, cyanosis, and organ hypoperfusion.",
      descriptionAr: "صدمة قلبية المنشأ (ضغط انقباضي <90، قلة بول، برودة أطراف ونقص تروية الأعضاء الحيوية).",
      mortality: "~81% in-hospital mortality (critical emergency)",
      color: "#ef4444"
    }
  };
  return data[g] || data[1];
}

/**
 * 21. Glasgow Coma Scale (GCS)
 * @param {number} eye - Eye opening (1 - 4)
 * @param {number} verbal - Verbal response (1 - 5)
 * @param {number} motor - Motor response (1 - 6)
 * @returns {{total: number, severityEn: string, severityAr: string, intubationAlert: boolean, color: string}}
 */
function mqGcs(eye, verbal, motor) {
  var e = Math.min(4, Math.max(1, Number(eye) || 1));
  var v = Math.min(5, Math.max(1, Number(verbal) || 1));
  var m = Math.min(6, Math.max(1, Number(motor) || 1));
  var total = e + v + m;

  var severityEn = "";
  var severityAr = "";
  var intubationAlert = false;
  var color = "#22c55e";

  if (total <= 8) {
    severityEn = "Severe traumatic brain injury / Coma (GCS ≤ 8). Definite indication for endotracheal intubation ('GCS ≤ 8, Intubate!').";
    severityAr = "إصابة دماغية شديدة / غيبوبة (GCS ≤ 8). استطباب صريح للتنبيب الرغامي الفوري لحماية مجرى التنفس.";
    intubationAlert = true;
    color = "#ef4444";
  } else if (total <= 12) {
    severityEn = "Moderate traumatic brain injury (GCS 9 - 12). Close ICU monitoring and urgent non-contrast CT head scan.";
    severityAr = "إصابة دماغية متوسطة (GCS 9 - 12). تتطلب مراقبة عصبية دقيقة وإجراء أشعة مقطعية عاجلة للرأس.";
    intubationAlert = false;
    color = "#f59e0b";
  } else {
    severityEn = "Mild brain injury (GCS 13 - 15). Stable level of consciousness.";
    severityAr = "إصابة دماغية خفيفة ووعي مستقر (GCS 13 - 15).";
    intubationAlert = false;
    color = "#22c55e";
  }

  return {
    total: total,
    severityEn: severityEn,
    severityAr: severityAr,
    intubationAlert: intubationAlert,
    color: color
  };
}

/**
 * 22. APACHE II Score (Acute Physiology and Chronic Health Evaluation)
 * @param {Object} params
 * @returns {{totalScore: number, aps: number, agePoints: number, chronicPoints: number, mortality: string, urgency: string}}
 */
function mqApache2(params) {
  var p = params || {};
  var aps = 0;

  // Temperature (rectal, C)
  var temp = Number(p.tempC);
  if (!isNaN(temp)) {
    if (temp >= 41 || temp <= 29.9) aps += 4;
    else if (temp >= 39 || (temp >= 30 && temp <= 31.9)) aps += 3;
    else if (temp <= 33.9) aps += 2;
    else if ((temp >= 38.5 && temp <= 38.9) || (temp >= 34 && temp <= 35.9)) aps += 1;
  }

  // MAP (mmHg)
  var map = Number(p.mapMmHg);
  if (!isNaN(map)) {
    if (map >= 160 || map <= 49) aps += 4;
    else if (map >= 130 || (map >= 50 && map <= 69)) aps += 2;
    else if (map >= 110) aps += 1;
  }

  // Heart Rate
  var hr = Number(p.heartRate);
  if (!isNaN(hr)) {
    if (hr >= 180 || hr <= 39) aps += 4;
    else if (hr >= 140 || (hr >= 40 && hr <= 54)) aps += 3;
    else if (hr >= 110 || (hr >= 55 && hr <= 69)) aps += 2;
  }

  // Respiratory Rate
  var rr = Number(p.rr);
  if (!isNaN(rr)) {
    if (rr >= 50 || rr <= 5) aps += 4;
    else if (rr >= 35) aps += 3;
    else if (rr <= 9) aps += 2;
    else if (rr >= 25 && rr <= 34) aps += 1;
  }

  // Oxygenation
  var fio2 = Number(p.fio2Percent) || 21;
  if (fio2 >= 50 && p.aado2 !== undefined) {
    var aado2 = Number(p.aado2);
    if (aado2 >= 500) aps += 4;
    else if (aado2 >= 350) aps += 3;
    else if (aado2 >= 200) aps += 2;
  } else if (!isNaN(Number(p.pao2MmHg))) {
    var pao2 = Number(p.pao2MmHg);
    if (pao2 < 55) aps += 4;
    else if (pao2 <= 60) aps += 3;
    else if (pao2 <= 70) aps += 1;
  }

  // Arterial pH
  var ph = Number(p.arterialPh);
  if (!isNaN(ph)) {
    if (ph >= 7.7 || ph < 7.15) aps += 4;
    else if ((ph >= 7.6 && ph <= 7.69) || (ph >= 7.15 && ph <= 7.24)) aps += 3;
    else if (ph >= 7.25 && ph <= 7.32) aps += 2;
    else if (ph >= 7.5 && ph <= 7.59) aps += 1;
  }

  // Serum Na
  var na = Number(p.serumNa);
  if (!isNaN(na)) {
    if (na >= 180 || na <= 110) aps += 4;
    else if ((na >= 160 && na <= 179) || (na >= 111 && na <= 119)) aps += 3;
    else if ((na >= 155 && na <= 159) || (na >= 120 && na <= 129)) aps += 2;
    else if (na >= 150 && na <= 154) aps += 1;
  }

  // Serum K
  var k = Number(p.serumK);
  if (!isNaN(k)) {
    if (k >= 7.0 || k < 2.5) aps += 4;
    else if (k >= 6.0) aps += 3;
    else if (k <= 2.9) aps += 2;
    else if ((k >= 5.5 && k <= 5.9) || (k >= 3.0 && k <= 3.4)) aps += 1;
  }

  // Serum Creatinine
  var cr = Number(p.serumCr);
  if (!isNaN(cr)) {
    var crPts = 0;
    if (cr >= 3.5) crPts = 4;
    else if (cr >= 2.0) crPts = 3;
    else if (cr >= 1.5 || cr < 0.6) crPts = 2;
    if (p.acuteRenalFailure) crPts *= 2;
    aps += crPts;
  }

  // Hematocrit
  var hct = Number(p.hctPercent);
  if (!isNaN(hct)) {
    if (hct >= 60 || hct < 20) aps += 4;
    else if ((hct >= 50 && hct <= 59.9) || (hct >= 20 && hct <= 29.9)) aps += 2;
    else if (hct >= 46 && hct <= 49.9) aps += 1;
  }

  // WBC
  var wbc = Number(p.wbcKPerMcl);
  if (!isNaN(wbc)) {
    if (wbc >= 40 || wbc < 1) aps += 4;
    else if ((wbc >= 20 && wbc <= 39.9) || (wbc >= 1 && wbc <= 2.9)) aps += 2;
    else if (wbc >= 15 && wbc <= 19.9) aps += 1;
  }

  // GCS points = 15 - GCS Total
  var gcs = Number(p.gcsTotal);
  if (!isNaN(gcs) && gcs >= 3 && gcs <= 15) {
    aps += Math.max(0, 15 - gcs);
  }

  // Age points
  var age = Number(p.age) || 0;
  var agePoints = 0;
  if (age >= 75) agePoints = 6;
  else if (age >= 65) agePoints = 5;
  else if (age >= 55) agePoints = 3;
  else if (age >= 45) agePoints = 2;

  // Chronic health points
  var chronicPoints = 0;
  if (p.chronicOrganFailure === "emergency_or_nonop" || p.chronicPoints === 5) chronicPoints = 5;
  else if (p.chronicOrganFailure === "elective_postop" || p.chronicPoints === 2) chronicPoints = 2;

  var totalScore = aps + agePoints + chronicPoints;

  var mortality = "~4%";
  var urgency = "Low";
  if (totalScore >= 35) { mortality = ">85%"; urgency = "Critical"; }
  else if (totalScore >= 30) { mortality = "~75%"; urgency = "Critical"; }
  else if (totalScore >= 25) { mortality = "~55%"; urgency = "High"; }
  else if (totalScore >= 20) { mortality = "~40%"; urgency = "High"; }
  else if (totalScore >= 15) { mortality = "~25%"; urgency = "Moderate"; }
  else if (totalScore >= 10) { mortality = "~15%"; urgency = "Moderate"; }
  else if (totalScore >= 5) { mortality = "~7%"; urgency = "Low"; }

  return {
    totalScore: totalScore,
    aps: aps,
    agePoints: agePoints,
    chronicPoints: chronicPoints,
    mortality: mortality,
    urgency: urgency
  };
}

/**
 * 23. Medical Clinical Unit Converter
 * @param {number} value
 * @param {string} from
 * @param {string} to
 * @returns {number}
 */
function mqConvertUnit(value, from, to) {
  var v = Number(value);
  if (isNaN(v)) return 0;
  var key = (String(from).toLowerCase().trim()) + "->" + (String(to).toLowerCase().trim());

  var rules = {
    "kg->lb": function(n) { return n * 2.2046226218; },
    "lb->kg": function(n) { return n / 2.2046226218; },
    "cm->in": function(n) { return n / 2.54; },
    "in->cm": function(n) { return n * 2.54; },
    "m->ft": function(n) { return n * 3.28084; },
    "ft->m": function(n) { return n / 3.28084; },
    "c->f": function(n) { return (n * 9 / 5) + 32; },
    "f->c": function(n) { return (n - 32) * 5 / 9; },
    "mmhg->kpa": function(n) { return n * 0.133322; },
    "kpa->mmhg": function(n) { return n / 0.133322; },
    "mg/dl-glucose->mmol/l": function(n) { return n / 18.0182; },
    "mmol/l-glucose->mg/dl": function(n) { return n * 18.0182; },
    "mg/dl-creatinine->umol/l": function(n) { return n * 88.4; },
    "umol/l-creatinine->mg/dl": function(n) { return n / 88.4; },
    "mg/dl-cholesterol->mmol/l": function(n) { return n / 38.67; },
    "mmol/l-cholesterol->mg/dl": function(n) { return n * 38.67; },
    "mg/dl-triglycerides->mmol/l": function(n) { return n / 88.57; },
    "mmol/l-triglycerides->mg/dl": function(n) { return n * 88.57; },
    "mg/dl-bili->umol/l": function(n) { return n * 17.1; },
    "umol/l-bili->mg/dl": function(n) { return n / 17.1; },
    "mg/dl-calcium->mmol/l": function(n) { return n * 0.2495; },
    "mmol/l-calcium->mg/dl": function(n) { return n / 0.2495; },
    "mg/dl-bun->mmol/l": function(n) { return n * 0.357; },
    "mmol/l-bun->mg/dl": function(n) { return n / 0.357; }
  };

  if (rules[key]) {
    return parseFloat(rules[key](v).toFixed(2));
  }

  var simplifiedKey = key.replace(/-(glucose|creatinine|cholesterol|triglycerides|bili|calcium|bun)/g, '');
  if (rules[simplifiedKey]) {
    return parseFloat(rules[simplifiedKey](v).toFixed(2));
  }

  return v;
}

/**
 * 24. Ideal Body Weight (Devine Formula)
 * @param {number} heightCm
 * @param {string} sex - 'male' | 'female'
 * @returns {{ibw: number, range: Array<number>, interpretationAr: string}}
 */
function mqIbw(heightCm, sex) {
  var h = Number(heightCm);
  if (!h || h <= 0) return { ibw: 0, range: [0, 0], interpretationAr: "مدخلات غير صالحة" };
  var inches = h / 2.54;
  var over60 = Math.max(0, inches - 60);
  var isFemale = (typeof sex === 'string' && (sex.toLowerCase() === 'female' || sex.toLowerCase() === 'f'));

  var baseIbw = isFemale ? 45.5 + (2.3 * over60) : 50.0 + (2.3 * over60);
  baseIbw = parseFloat(baseIbw.toFixed(1));
  var low = parseFloat((baseIbw * 0.9).toFixed(1));
  var high = parseFloat((baseIbw * 1.1).toFixed(1));

  return {
    ibw: baseIbw,
    range: [low, high],
    interpretationAr: "الوزن المثالي التقريبي (معادلة Devine): " + baseIbw + " كغ (النطاق الصحي المقبول: " + low + " - " + high + " كغ)."
  };
}

/**
 * 25. Body Surface Area (DuBois Formula)
 * @param {number} weightKg
 * @param {number} heightCm
 * @returns {{bsa: number, interpretation: string}}
 */
function mqBsa(weightKg, heightCm) {
  var w = Number(weightKg);
  var h = Number(heightCm);
  if (!w || !h || w <= 0 || h <= 0) return { bsa: 0, interpretation: "Invalid inputs" };
  var bsaVal = parseFloat((0.007184 * Math.pow(w, 0.425) * Math.pow(h, 0.725)).toFixed(2));
  return {
    bsa: bsaVal,
    interpretation: "Body Surface Area: " + bsaVal + " m² (Standard adult male avg ~1.9 m², female avg ~1.6 m²)."
  };
}

/**
 * 26. Mean Arterial Pressure (MAP)
 * @param {number} sbp - Systolic Blood Pressure (mmHg)
 * @param {number} dbp - Diastolic Blood Pressure (mmHg)
 * @returns {{map: number, interpretation: string, interpretationAr: string}}
 */
function mqMap(sbp, dbp) {
  var s = Number(sbp) || 0;
  var d = Number(dbp) || 0;
  var mapVal = parseFloat(((2 * d + s) / 3).toFixed(1));

  var interpEn = "";
  var interpAr = "";
  if (mapVal < 65) {
    interpEn = "MAP <65 mmHg: Inadequate tissue and vital organ perfusion. High risk of acute organ dysfunction.";
    interpAr = "MAP <65 ملم زئبق: نقص تروية حاد للأعضاء الحيوية والكلى. يتطلب إنعاشاً بالسوائل أو رافعات الضغط.";
  } else if (mapVal <= 100) {
    interpEn = "Normal MAP (70 - 100 mmHg): Adequate systemic organ perfusion pressure.";
    interpAr = "ضغط شرياني وسطي طبيعي (70 - 100 ملم زئبق): تروية كافية للأعضاء الحيوية.";
  } else {
    interpEn = "Elevated MAP (>100 mmHg): Increased vascular resistance and cardiac afterload.";
    interpAr = "ضغط شرياني وسطي مرتفع (>100 ملم زئبق): زيادة في المقاومة الوعائية والعبء اللاحق على القلب.";
  }

  return {
    map: mapVal,
    interpretation: interpEn,
    interpretationAr: interpAr
  };
}

/**
 * 27. Pulse Pressure
 * @param {number} sbp - Systolic BP
 * @param {number} dbp - Diastolic BP
 * @returns {{pp: number, interpretation: string, interpretationAr: string}}
 */
function mqPulsePressure(sbp, dbp) {
  var s = Number(sbp) || 0;
  var d = Number(dbp) || 0;
  var pp = s - d;

  var interpEn = "";
  var interpAr = "";
  if (pp < 30) {
    interpEn = "Narrow pulse pressure (<30 mmHg): Seen in severe aortic stenosis, cardiac tamponade, hypovolemic shock, and severe heart failure.";
    interpAr = "ضغط نبض ضيق (<30 ملم زئبق): يشاهد في تضيق الصمام الأبهري الشديد، الدك القلبي، والصدمة بنقص الحجم.";
  } else if (pp <= 50) {
    interpEn = "Normal pulse pressure (30 - 50 mmHg).";
    interpAr = "ضغط نبض طبيعي (30 - 50 ملم زئبق).";
  } else {
    interpEn = "Widened pulse pressure (>60 mmHg): Associated with aortic regurgitation, arterial stiffness/aging, thyrotoxicosis, or patent ductus arteriosus.";
    interpAr = "ضغط نبض متسع (>60 ملم زئبق): يرتبط بقصور الصمام الأبهري، تصلب الشرايين، فرط نشاط الدرقية، أو القناة الشريانية المفتوحة.";
  }

  return {
    pp: pp,
    interpretation: interpEn,
    interpretationAr: interpAr
  };
}

/**
 * 28. Venous Carbon Dioxide Content
 * @param {number} hco3 - Serum Bicarbonate (mEq/L)
 * @param {number} pco2 - Venous PCO2 (mmHg)
 * @returns {{totalCo2: number, interpretation: string, interpretationAr: string}}
 */
function mqCarbonDioxideContentVenus(hco3, pco2) {
  var h = Number(hco3) || 0;
  var p = Number(pco2) || 0;
  var totalCo2 = parseFloat((h + 0.0307 * p).toFixed(1));

  var interpEn = "Venous total CO2: " + totalCo2 + " mEq/L (Normal range 23 - 30 mEq/L). Reflects dissolved CO2 and serum bicarbonate.";
  var interpAr = "محتوى ثاني أكسيد الكربون الوريدي الكلي: " + totalCo2 + " مليمكافئ/لتر (المستوى الطبيعي 23 - 30). يعكس البيكربونات مع الغاز الذائب.";

  return {
    totalCo2: totalCo2,
    interpretation: interpEn,
    interpretationAr: interpAr
  };
}

/**
 * 29. Winter's Formula for Expected PaCO2 in Metabolic Acidosis
 * @param {number} hco3 - Serum Bicarbonate (mEq/L)
 * @returns {{expected: number, range: Array<number>, interpretation: string}}
 */
function mqExpectedPaco2(hco3) {
  var h = Number(hco3) || 0;
  var exp = parseFloat((1.5 * h + 8).toFixed(1));
  var low = parseFloat((exp - 2).toFixed(1));
  var high = parseFloat((exp + 2).toFixed(1));

  var interp = "Winter's formula for metabolic acidosis compensation: Expected PaCO2 = " + exp + " mmHg (acceptable range " + low + " - " + high + " mmHg). If actual PaCO2 > " + high + ", concurrent respiratory acidosis exists. If PaCO2 < " + low + ", concurrent respiratory alkalosis exists.";

  return {
    expected: exp,
    range: [low, high],
    interpretation: interp
  };
}

/**
 * 30. Alveolar-Arterial (A-a) Oxygen Gradient
 * @param {number} pao2 - Arterial PaO2 (mmHg)
 * @param {number} fio2 - FiO2 percentage (e.g. 21) or fraction (0.21)
 * @param {number} paco2 - Arterial PaCO2 (mmHg)
 * @param {number} age - Patient age in years
 * @returns {{gradient: number, expected: number, elevated: boolean, interpretationAr: string}}
 */
function mqAaGradient(pao2, fio2, paco2, age) {
  var po2 = Number(pao2) || 0;
  var f = Number(fio2) || 21;
  var fFraction = f > 1 ? f / 100 : f;
  var pco2 = Number(paco2) || 40;
  var a = Number(age) || 25;

  var paO2Alveolar = (fFraction * (760 - 47)) - (pco2 / 0.8);
  var gradient = parseFloat((paO2Alveolar - po2).toFixed(1));
  var expGrad = parseFloat(((a / 4) + 4).toFixed(1));
  var elevated = gradient > expGrad;

  var interpAr = elevated
    ? "فجوة A-a مرتفعة (" + gradient + " ملم زئبق مقابل المتوقع لعمر المريض " + expGrad + "): تشير إلى خلل في الانتشار أو تحويلة دموية (Shunt) أو عدم تطابق التهوية والتروية V/Q (مثل الانصمام الرئوي أو الالتهاب الرئوي)."
    : "فجوة A-a طبيعية (" + gradient + " ملم زئبق): نقص الأكسجة سببه نقص التهوية السنخية البسيط أو انخفاض تركيز الأكسجين المستنشق وليس مرضاً نسيجياً رئوياً.";

  return {
    gradient: gradient,
    expected: expGrad,
    elevated: elevated,
    interpretationAr: interpAr
  };
}

/**
 * 31. Pediatric BMI-for-Age Percentiles
 * @param {number} weight - Weight in kg
 * @param {number} height - Height in cm
 * @param {number} age - Age in years (2 - 18)
 * @param {string} sex - 'male' | 'female'
 * @returns {{bmi: number, percentileEstimate: string, categoryEn: string, categoryAr: string, color: string}}
 */
function mqBmi_children(weight, height, age, sex) {
  var w = Number(weight) || 0;
  var h = Number(height) || 0;
  var a = Number(age) || 0;
  var isFemale = (typeof sex === 'string' && (sex.toLowerCase() === 'female' || sex.toLowerCase() === 'f'));

  if (w <= 0 || h <= 0 || a < 2 || a > 18) {
    return { bmi: 0, percentileEstimate: "N/A", categoryEn: "Ages 2-18 required", categoryAr: "للأعمار 2-18 سنة", color: "#94a3b8" };
  }

  var bmiVal = parseFloat((w / Math.pow(h / 100, 2)).toFixed(1));
  var medianBmi = isFemale ? (15.5 + (a - 2) * 0.45) : (15.8 + (a - 2) * 0.42);
  var ratio = bmiVal / medianBmi;

  var categoryEn = "";
  var categoryAr = "";
  var percentileEstimate = "";
  var color = "#22c55e";

  if (ratio < 0.85) {
    categoryEn = "Underweight (<5th percentile)";
    categoryAr = "نقص في الوزن (أقل من المئين 5)";
    percentileEstimate = "<5th percentile";
    color = "#3b82f6";
  } else if (ratio <= 1.15) {
    categoryEn = "Healthy weight (5th to 85th percentile)";
    categoryAr = "وزن صحي وطبيعي (بين المئين 5 والمئين 85)";
    percentileEstimate = "5th - 85th percentile";
    color = "#22c55e";
  } else if (ratio <= 1.25) {
    categoryEn = "Overweight (85th to 95th percentile)";
    categoryAr = "زيادة في الوزن (بين المئين 85 والمئين 95)";
    percentileEstimate = "85th - 95th percentile";
    color = "#f59e0b";
  } else {
    categoryEn = "Obese (≥95th percentile)";
    categoryAr = "سمنة أطفال (المئين 95 أو أكثر)";
    percentileEstimate = "≥95th percentile";
    color = "#ef4444";
  }

  return {
    bmi: bmiVal,
    percentileEstimate: percentileEstimate,
    categoryEn: categoryEn,
    categoryAr: categoryAr,
    color: color
  };
}

/**
 * 32. Pediatric Blood Pressure References
 * @param {number} age - Age in years
 * @param {string} sex - 'male' | 'female'
 * @returns {{medianSbp: number, medianDbp: number, sbp95: number, dbp95: number, interpretationEn: string, interpretationAr: string}}
 */
function mqPediatricBp(age, sex) {
  var a = Number(age) || 0;
  var isFemale = (typeof sex === 'string' && (sex.toLowerCase() === 'female' || sex.toLowerCase() === 'f'));

  var medianSbp = 90;
  var medianDbp = 60;
  var sbp95 = 105;
  var dbp95 = 70;

  if (a < 1) {
    medianSbp = 80; medianDbp = 50; sbp95 = 98; dbp95 = 65;
  } else if (a <= 3) {
    medianSbp = 95; medianDbp = 55; sbp95 = 105; dbp95 = 68;
  } else if (a <= 6) {
    medianSbp = 100; medianDbp = 62; sbp95 = 112; dbp95 = 74;
  } else if (a <= 10) {
    medianSbp = 106; medianDbp = 68; sbp95 = 118; dbp95 = 80;
  } else if (a <= 13) {
    medianSbp = 112; medianDbp = 72; sbp95 = 124; dbp95 = 82;
  } else {
    medianSbp = isFemale ? 115 : 120;
    medianDbp = 75;
    sbp95 = isFemale ? 128 : 132;
    dbp95 = 84;
  }

  return {
    medianSbp: medianSbp,
    medianDbp: medianDbp,
    sbp95: sbp95,
    dbp95: dbp95,
    interpretationEn: "Pediatric BP norms (Age " + a + "): Median BP ~" + medianSbp + "/" + medianDbp + " mmHg. 95th percentile threshold ~" + sbp95 + "/" + dbp95 + " mmHg (hypertension if sustained ≥95th percentile).",
    interpretationAr: "المعايير المرجعية لضغط الأطفال (عمر " + a + " سنة): متوسط الضغط ~" + medianSbp + "/" + medianDbp + " ملم زئبق. عتبة المئين 95 هي ~" + sbp95 + "/" + dbp95 + " ملم زئبق (يُشخص ارتفاع الضغط إذا تكرر القياس أعلى من المئين 95)."
  };
}

/**
 * 33. Ehrlich / ICU Clinical Deterioration Score
 * @param {Object|Array<string>} items
 * @returns {{score: number, riskLevel: string, riskLevelAr: string, recommendationEn: string, recommendationAr: string, color: string}}
 */
function mqEhrlichScore(items) {
  var p = items || {};
  var score = 0;

  if (Array.isArray(items)) {
    score = items.length;
  } else {
    if (p.hypotension) score += 1;
    if (p.alteredMental) score += 1;
    if (p.thrombocytopenia) score += 1;
    if (p.elevatedLactate) score += 1;
    if (p.oliguria) score += 1;
    if (p.hypoxemia) score += 1;
  }

  var riskLevel = "Low";
  var riskLevelAr = "منخفض";
  var recEn = "";
  var recAr = "";
  var color = "#22c55e";

  if (score <= 1) {
    riskLevel = "Low risk";
    riskLevelAr = "خطورة منخفضة";
    recEn = "Routine floor monitoring. Low risk of rapid clinical decompensation.";
    recAr = "مراقبة روتينية بالجناح؛ خطورة تدهور سريع منخفضة.";
    color = "#22c55e";
  } else if (score <= 3) {
    riskLevel = "Moderate risk";
    riskLevelAr = "خطورة متوسطة";
    recEn = "Intermediate monitoring / stepdown unit. Repeat vital signs and labs every 2-4 hours.";
    recAr = "مراقبة بوحدة الرعاية المتوسطة؛ إعادة الفحوصات والعلامات الحيوية كل 2-4 ساعات.";
    color = "#f59e0b";
  } else {
    riskLevel = "High risk";
    riskLevelAr = "خطورة حرجة مرتفعة";
    recEn = "Urgent ICU evaluation indicated. Aggressive resuscitation and organ support.";
    recAr = "استدعاء فوري للعناية المركزة (ICU) مع إنعاش حثيث ودعم الأعضاء المهددة بالفشل.";
    color = "#ef4444";
  }

  return {
    score: score,
    riskLevel: riskLevel,
    riskLevelAr: riskLevelAr,
    recommendationEn: recEn,
    recommendationAr: recAr,
    color: color
  };
}

/**
 * 34. NIH Stroke Scale (NIHSS) Clinical Interpretation
 * @param {number} score - Score 0 to 42
 * @returns {{score: number, severity: string, severityAr: string, tpaEligible: boolean, color: string, managementEn: string, managementAr: string}}
 */
function mqNihss_interpretation(score) {
  var s = Number(score) || 0;
  var severity = "";
  var severityAr = "";
  var tpaEligible = false;
  var color = "#22c55e";
  var mgmtEn = "";
  var mgmtAr = "";

  if (s === 0) {
    severity = "No stroke symptoms (Score 0)";
    severityAr = "لا توجد أعراض عصبية صريحة للسكتة (0)";
    tpaEligible = false;
    color = "#22c55e";
    mgmtEn = "Evaluate for alternative diagnoses or transient symptoms.";
    mgmtAr = "تقييم التشاخيص البديلة أو الأعراض العابرة.";
  } else if (s <= 4) {
    severity = "Minor stroke (Score 1 - 4)";
    severityAr = "سكتة دماغية طفيفة (1 - 4)";
    tpaEligible = true;
    color = "#84cc16";
    mgmtEn = "Consider IV thrombolysis if deficits are disabling. Dual antiplatelet therapy (DAPT) often initiated for high-risk non-disabling events.";
    mgmtAr = "بحث إعطاء مذيبات التخثر إذا كانت الأعراض مسببة للعجز. بدء مضادات الصفائح المزدوجة.";
  } else if (s <= 15) {
    severity = "Moderate stroke (Score 5 - 15)";
    severityAr = "سكتة دماغية متوسطة (5 - 15)";
    tpaEligible = true;
    color = "#f59e0b";
    mgmtEn = "Eligible for IV thrombolysis within 4.5 hours and evaluation for mechanical thrombectomy if large vessel occlusion (LVO).";
    mgmtAr = "مرشح لإذابة الجلطة وريدياً خلال 4.5 ساعة وتقييم استئصال الخثرة ميكانيكياً بالقسطرة لو كان هناك انسداد وعائي كبير.";
  } else if (s <= 20) {
    severity = "Moderate to severe stroke (Score 16 - 20)";
    severityAr = "سكتة دماغية متوسطة إلى شديدة (16 - 20)";
    tpaEligible = true;
    color = "#f97316";
    mgmtEn = "High probability of Large Vessel Occlusion (LVO). Urgent neurointerventional evaluation for thrombectomy + IV thrombolysis.";
    mgmtAr = "احتمال مرتفع لانسداد شرياني رئيسي كبير. استدعاء فريق القسطرة التداخلية العصبية فوراً.";
  } else {
    severity = "Severe stroke (Score 21 - 42)";
    severityAr = "سكتة دماغية شديدة وحرجة (21 - 42)";
    tpaEligible = true;
    color = "#ef4444";
    mgmtEn = "Very high risk of brain edema and hemorrhagic transformation. Intensive neurological ICU care, assess for thrombectomy and decompressive craniectomy.";
    mgmtAr = "خطر شديد للوذمة الدماغية والتحول النزفي. رعاية بالعناية المركزة وتقييم جراحة تخفيف الضغط القحفي.";
  }

  return {
    score: s,
    severity: severity,
    severityAr: severityAr,
    tpaEligible: tpaEligible,
    color: color,
    managementEn: mgmtEn,
    managementAr: mgmtAr
  };
}

/**
 * 35. ABCD2 Score for TIA Stroke Risk
 * @param {Object} items
 * @returns {{score: number, riskEn: string, riskAr: string, strokeRisk2Day: string, strokeRisk7Day: string, strokeRisk90Day: string, management: string, color: string}}
 */
function mqAbcd2Score(items) {
  var p = items || {};
  var score = 0;

  var age = Number(p.age) || 0;
  if (age >= 60 || p.age60OrMore) score += 1;
  if (p.bpElevated || (Number(p.sbp) >= 140 || Number(p.dbp) >= 90)) score += 1;
  if (p.unilateralWeakness) score += 2;
  else if (p.speechDisturbance) score += 1;
  var duration = Number(p.durationMin) || 0;
  if (duration >= 60 || p.duration60OrMore) score += 2;
  else if (duration >= 10 || p.duration10To59) score += 1;
  if (p.diabetes) score += 1;

  var riskEn = "";
  var riskAr = "";
  var risk2d = "";
  var risk7d = "";
  var risk90d = "";
  var mgmt = "";
  var color = "#22c55e";

  if (score <= 3) {
    riskEn = "Low Risk (Score 0 - 3)";
    riskAr = "خطورة منخفضة (0 - 3 نقاط)";
    risk2d = "1.0%";
    risk7d = "1.2%";
    risk90d = "3.1%";
    mgmt = "Outpatient neurovascular workup within 24-48 hours. Antiplatelet initiation.";
    color = "#22c55e";
  } else if (score <= 5) {
    riskEn = "Moderate Risk (Score 4 - 5)";
    riskAr = "خطورة متوسطة (4 - 5 نقاط)";
    risk2d = "4.1%";
    risk7d = "5.9%";
    risk90d = "9.8%";
    mgmt = "Hospital admission strongly considered. Urgent brain MRI/MRA, carotid Doppler, and cardiac rhythm monitoring.";
    color = "#f59e0b";
  } else {
    riskEn = "High Risk (Score 6 - 7)";
    riskAr = "خطورة مرتفعة جداً (6 - 7 نقاط)";
    risk2d = "8.1%";
    risk7d = "11.7%";
    risk90d = "17.8%";
    mgmt = "Urgent hospital admission indicated. Comprehensive stroke unit evaluation and secondary prevention protocol.";
    color = "#ef4444";
  }

  return {
    score: score,
    riskEn: riskEn,
    riskAr: riskAr,
    strokeRisk2Day: risk2d,
    strokeRisk7Day: risk7d,
    strokeRisk90Day: risk90d,
    management: mgmt,
    color: color
  };
}

/**
 * 36. Chronic Kidney Disease (CKD) Stages by eGFR
 * @param {number} egfr - mL/min/1.73m²
 * @returns {{stage: string, description: string, descriptionAr: string, color: string, recommendationEn: string, recommendationAr: string}}
 */
function mqCkd_stages(egfr) {
  var g = Number(egfr) || 0;
  var stage = "G1";
  var desc = "";
  var descAr = "";
  var color = "#22c55e";
  var recEn = "";
  var recAr = "";

  if (g >= 90) {
    stage = "Stage 1 (G1)";
    desc = "Normal or high kidney function (≥90 mL/min/1.73m²)";
    descAr = "وظيفة كلوية طبيعية أو مرتفعة (≥90 مل/دقيقة/1.73م² مع وجود تلف كلوي مسبق)";
    color = "#22c55e";
    recEn = "Diagnosis and treatment of underlying condition, risk reduction, slowing progression.";
    recAr = "علاج المرض الأساسي والحد من عوامل الخطورة وإبطاء التدهور.";
  } else if (g >= 60) {
    stage = "Stage 2 (G2)";
    desc = "Mildly decreased kidney function (60 - 89 mL/min/1.73m²)";
    descAr = "انخفاض طفيف في وظيفة الكلى (60 - 89 مل/دقيقة/1.73م²)";
    color = "#84cc16";
    recEn = "Estimating progression rate, adjusting nephrotoxic medications.";
    recAr = "متابعة معدل التدهور وتعديل الأدوية السامة للكلية.";
  } else if (g >= 45) {
    stage = "Stage 3a (G3a)";
    desc = "Mild-to-moderate decrease in kidney function (45 - 59 mL/min/1.73m²)";
    descAr = "انخفاض طفيف إلى متوسط في وظيفة الكلى (45 - 59 مل/دقيقة/1.73م²)";
    color = "#eab308";
    recEn = "Evaluating and treating complications (anemia, bone disease, BP control).";
    recAr = "تقييم وعلاج المضاعفات (فقر الدم، اضطراب الكالسيوم والفوسفور، ضبط الضغط).";
  } else if (g >= 30) {
    stage = "Stage 3b (G3b)";
    desc = "Moderate-to-severe decrease in kidney function (30 - 44 mL/min/1.73m²)";
    descAr = "انخفاض متوسط إلى شديد في وظيفة الكلى (30 - 44 مل/دقيقة/1.73م²)";
    color = "#f97316";
    recEn = "Frequent monitoring of laboratory parameters and cardiovascular risk factors.";
    recAr = "مراقبة دورية متقاربة للفحوصات المخبرية وعوامل الخطر القلبية الوعائية.";
  } else if (g >= 15) {
    stage = "Stage 4 (G4)";
    desc = "Severely decreased kidney function (15 - 29 mL/min/1.73m²)";
    descAr = "انخفاض شديد في وظيفة الكلى (15 - 29 مل/دقيقة/1.73م²)";
    color = "#ef4444";
    recEn = "Preparation for kidney replacement therapy (AV fistula creation, transplant evaluation).";
    recAr = "التجهيز لبدائل الكلى (إنشاء الناسور الشرياني الوريدي AVF وبحث زراعة الكلى).";
  } else {
    stage = "Stage 5 (G5)";
    desc = "Kidney failure / End-Stage Renal Disease (<15 mL/min/1.73m²)";
    descAr = "فشل كلوي نهائي ESRD (<15 مل/دقيقة/1.73م²)";
    color = "#7f1d1d";
    recEn = "Kidney replacement therapy required (Hemodialysis, Peritoneal Dialysis, or Kidney Transplantation).";
    recAr = "استطباب البدء بالغسيل الكلوي (دموي أو صفاقي) أو زراعة الكلى.";
  }

  return {
    stage: stage,
    description: desc,
    descriptionAr: descAr,
    color: color,
    recommendationEn: recEn,
    recommendationAr: recAr
  };
}

/**
 * 37. Daily Caloric Needs (Mifflin-St Jeor Formula)
 * @param {number} weight - Weight in kg
 * @param {number} height - Height in cm
 * @param {number} age - Age in years
 * @param {string} sex - 'male' | 'female'
 * @param {string} activity - 'sedentary' | 'light' | 'moderate' | 'very' | 'extra'
 * @returns {{bmr: number, tdee: number, bmi: number, activityLevel: string, interpretation: string, interpretationAr: string}}
 */
function mqDailyKcal(weight, height, age, sex, activity) {
  var w = Number(weight) || 70;
  var h = Number(height) || 170;
  var a = Number(age) || 30;
  var isFemale = (typeof sex === 'string' && (sex.toLowerCase() === 'female' || sex.toLowerCase() === 'f'));

  var bmr = (10 * w) + (6.25 * h) - (5 * a) + (isFemale ? -161 : 5);

  var actMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
    extra: 1.9
  };
  var act = (activity && actMultipliers[activity]) ? activity : 'sedentary';
  var mult = actMultipliers[act] || 1.2;
  var tdee = bmr * mult;

  var bmiVal = parseFloat((w / Math.pow(h / 100, 2)).toFixed(1));

  var interpEn = "Basal Metabolic Rate: " + Math.round(bmr) + " kcal/day. Total Daily Energy Expenditure (TDEE): " + Math.round(tdee) + " kcal/day for weight maintenance.";
  var interpAr = "معدل الاستقلاب الأساسي (BMR): " + Math.round(bmr) + " سعرة/يوم. إجمالي الطاقة اليومية (TDEE): " + Math.round(tdee) + " سعرة/يوم للحفاظ على الوزن الحالي.";

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    bmi: bmiVal,
    activityLevel: act,
    interpretation: interpEn,
    interpretationAr: interpAr
  };
}


/* ==========================================================================
   SECTION 2: Med Terms Dictionary (MQ_MED_TERMS & Search Function)
   ========================================================================== */

var MQ_MED_TERMS = [
  {
    "abbr": "MI",
    "fullEn": "Myocardial Infarction",
    "fullAr": "احتشاء عضلة القلب",
    "context": "Cardiology",
    "definition": "Necrosis of cardiac muscle due to prolonged ischemia from coronary artery occlusion (plaque rupture + thrombus).",
    "definitionAr": "نخر في نسيج عضلة القلب ناجم عن نقص التروية المديد إثر انسداد الشريان التاجي بتشقق اللويحة وتكوّن خثرة.",
    "wordParts": [
      {
        "part": "myo-",
        "meaning": "muscle",
        "meaningAr": "عضلة"
      },
      {
        "part": "-cardial",
        "meaning": "relating to the heart",
        "meaningAr": "متعلق بالقلب"
      },
      {
        "part": "infarct",
        "meaning": "area of tissue necrosis from ischemia",
        "meaningAr": "نخر نسيجي إقفاري"
      }
    ],
    "relatedTerms": [
      "STEMI",
      "NSTEMI",
      "ACS",
      "Troponin",
      "PCI",
      "CABG"
    ],
    "tags": [
      "cardiology",
      "emergency",
      "ischemia",
      "coronary"
    ]
  },
  {
    "abbr": "STEMI",
    "fullEn": "ST-Elevation Myocardial Infarction",
    "fullAr": "احتشاء عضلة القلب مع ارتفاع قطعة ST",
    "context": "Cardiology",
    "definition": "Transmural myocardial necrosis presenting with J-point elevation on ECG, indicating complete acute epicardial coronary occlusion requiring immediate reperfusion within 90 minutes.",
    "definitionAr": "احتشاء قلبي كامل عبر الجدار يتظاهر بارتفاع قطعة ST في التخطيط، ما يعكس انسداداً تاماً حاداً في الشريان التاجي يستدعي تدخلاً إسعافياً خلال 90 دقيقة.",
    "wordParts": [
      {
        "part": "ST",
        "meaning": "ECG ST segment",
        "meaningAr": "قطعة ST الكهربائية"
      },
      {
        "part": "elevation",
        "meaning": "upward displacement",
        "meaningAr": "ارتفاع"
      }
    ],
    "relatedTerms": [
      "MI",
      "NSTEMI",
      "PCI",
      "Thrombolysis",
      "Troponin",
      "ECG"
    ],
    "tags": [
      "cardiology",
      "emergency",
      "ECG",
      "coronary"
    ]
  },
  {
    "abbr": "NSTEMI",
    "fullEn": "Non-ST-Elevation Myocardial Infarction",
    "fullAr": "احتشاء عضلة القلب بدون ارتفاع قطعة ST",
    "context": "Cardiology",
    "definition": "Subendocardial myocardial necrosis characterized by cardiac troponin elevation without diagnostic ST segment elevation on surface ECG.",
    "definitionAr": "نخر قلبي تحت الشغاف يتميز بارتفاع التروبونين القلبي في المصل دون ارتفاع تشخيصي لقطعة ST في تخطيط القلب السطحي.",
    "wordParts": [
      {
        "part": "non-",
        "meaning": "absence of",
        "meaningAr": "عدم أو غياب"
      }
    ],
    "relatedTerms": [
      "STEMI",
      "ACS",
      "Unstable Angina",
      "Troponin",
      "Heparin"
    ],
    "tags": [
      "cardiology",
      "ischemia",
      "coronary"
    ]
  },
  {
    "abbr": "ACS",
    "fullEn": "Acute Coronary Syndrome",
    "fullAr": "متلازمة الشريان التاجي الحادة",
    "context": "Cardiology",
    "definition": "Clinical spectrum of acute myocardial ischemia ranging from unstable angina to NSTEMI and STEMI, typically precipitated by atheromatous plaque rupture.",
    "definitionAr": "طيف سريري إقفاري حاد يشمل الذبحة الصدرية غير المستقرة، NSTEMI وSTEMI، ينجم عادة عن تصدع أو تشقق لويحة عصيدية في الشريان التاجي.",
    "wordParts": [
      {
        "part": "coronary",
        "meaning": "encircling like a crown (heart vessels)",
        "meaningAr": "تاجي (شرايين القلب)"
      }
    ],
    "relatedTerms": [
      "MI",
      "STEMI",
      "NSTEMI",
      "Angina",
      "Aspirin",
      "Clopidogrel"
    ],
    "tags": [
      "cardiology",
      "emergency",
      "ischemia"
    ]
  },
  {
    "abbr": "PCI",
    "fullEn": "Percutaneous Coronary Intervention",
    "fullAr": "التدخل التاجي عبر الجلد (القسطرة التداخلية)",
    "context": "Cardiology / Interventional",
    "definition": "Minimally invasive catheter procedure used to relieve coronary arterial narrowing via balloon angioplasty and coronary stent deployment.",
    "definitionAr": "إجراء قثطري تداخلي طفيف التوغل لإعادة فتح التضيقات التاجية بواسطة البالون وزراعة الدعامات التاجية.",
    "wordParts": [
      {
        "part": "per-",
        "meaning": "through",
        "meaningAr": "عبر"
      },
      {
        "part": "cutaneous",
        "meaning": "skin",
        "meaningAr": "الجلد"
      }
    ],
    "relatedTerms": [
      "Stent",
      "Angioplasty",
      "STEMI",
      "CABG",
      "Coronary Angiogram"
    ],
    "tags": [
      "cardiology",
      "procedure",
      "intervention"
    ]
  },
  {
    "abbr": "CABG",
    "fullEn": "Coronary Artery Bypass Grafting",
    "fullAr": "جراحة مجازة الشريان التاجي (قلب مفتوح)",
    "context": "Cardiothoracic Surgery",
    "definition": "Surgical revascularization in which native arterial or venous conduits (e.g. LIMA, saphenous vein) bypass severe stenoses in native coronary arteries.",
    "definitionAr": "جراحة إعادة تروية قلبية تُستخدم فيها طعوم شريانية أو وريدية (مثل الشريان الثديي الداخلي أو الوريد الصافن) لتجاوز الانسدادات التاجية الشديدة.",
    "wordParts": [
      {
        "part": "bypass",
        "meaning": "alternative detour conduit",
        "meaningAr": "مجرى التفافي بديل"
      },
      {
        "part": "graft",
        "meaning": "transplanted tissue segment",
        "meaningAr": "طعم نسيجي"
      }
    ],
    "relatedTerms": [
      "PCI",
      "LIMA",
      "Saphenous Vein",
      "Cardiopulmonary Bypass"
    ],
    "tags": [
      "cardiology",
      "surgery",
      "revascularization"
    ]
  },
  {
    "abbr": "CHF",
    "fullEn": "Congestive Heart Failure",
    "fullAr": "قصور القلب الاحتقاني",
    "context": "Cardiology",
    "definition": "Clinical syndrome resulting from structural or functional cardiac impairment of ventricular filling or blood ejection, leading to fluid retention and dyspnea.",
    "definitionAr": "متلازمة سريرية تنجم عن خلل بنيوي أو وظيفي في امتلاء البطين أو قذف الدم، ما يؤدي لاحتقان السوائل الرئوي والمحيطي وضيق التنفس.",
    "wordParts": [
      {
        "part": "congestive",
        "meaning": "accumulation of fluid",
        "meaningAr": "تراكم واحتقان السوائل"
      }
    ],
    "relatedTerms": [
      "HFrEF",
      "HFpEF",
      "BNP",
      "Furosemide",
      "ACEi",
      "Beta-Blocker"
    ],
    "tags": [
      "cardiology",
      "chronic",
      "hemodynamics"
    ]
  },
  {
    "abbr": "HFrEF",
    "fullEn": "Heart Failure with Reduced Ejection Fraction",
    "fullAr": "قصور القلب مع انخفاض كسر القذف (القصور الانقباضي)",
    "context": "Cardiology",
    "definition": "Heart failure phenotype defined by left ventricular ejection fraction (LVEF) ≤40%, requiring quadruple guideline-directed medical therapy (GDMT).",
    "definitionAr": "نمط قصور القلب المحدد بكسر قذف البطين الأيسر ≤40%، ويستوجب العلاج الدوائي الموجه بالدلائل الإرشادية الرباعي.",
    "wordParts": [
      {
        "part": "reduced",
        "meaning": "decreased below normal",
        "meaningAr": "منخفض دون الطبيعي"
      }
    ],
    "relatedTerms": [
      "HFpEF",
      "LVEF",
      "ARNI",
      "SGLT2i",
      "Beta-Blocker",
      "MRA"
    ],
    "tags": [
      "cardiology",
      "chronic",
      "failure"
    ]
  },
  {
    "abbr": "HFpEF",
    "fullEn": "Heart Failure with Preserved Ejection Fraction",
    "fullAr": "قصور القلب مع الحفاظ على كسر القذف (القصور الانبساطي)",
    "context": "Cardiology",
    "definition": "Clinical heart failure with LVEF ≥50%, characterized by abnormal left ventricular diastolic relaxation, elevated filling pressures, and myocardial stiffness.",
    "definitionAr": "قصور قلب سريري مع كسر قذف طبيعي (≥50%)، يتسم بضعف استرخاء البطين الانبساطي وارتفاع ضغوط الامتلاء وتيبس العضلة.",
    "wordParts": [
      {
        "part": "preserved",
        "meaning": "maintained in normal range",
        "meaningAr": "محفوظ ضمن الحدود الطبيعية"
      }
    ],
    "relatedTerms": [
      "HFrEF",
      "Diastolic Dysfunction",
      "SGLT2i",
      "Hypertension"
    ],
    "tags": [
      "cardiology",
      "diastolic"
    ]
  },
  {
    "abbr": "AF",
    "fullEn": "Atrial Fibrillation",
    "fullAr": "الرجفان الأذيني",
    "context": "Cardiology / Arrhythmia",
    "definition": "Supraventricular tachyarrhythmia with uncoordinated atrial activation, absent P waves, irregularly irregular ventricular response, and high thromboembolic risk.",
    "definitionAr": "اضطراب نظم فوق بطيني يتصف بتنشيط أذيني فوضوي، غياب موجات P، استجابة بطينية غير منتظمة إطلاقاً، وخطر تشكل خثرات صمية مسببة للسكتة.",
    "wordParts": [
      {
        "part": "atrial",
        "meaning": "atria chambers",
        "meaningAr": "الأذينتان"
      },
      {
        "part": "fibrillation",
        "meaning": "rapid twitching tremor",
        "meaningAr": "ارتجاف أو رفرفة ارتعاشية"
      }
    ],
    "relatedTerms": [
      "CHA2DS2-VASc",
      "Anticoagulation",
      "DOAC",
      "Cardioversion",
      "Ablation"
    ],
    "tags": [
      "cardiology",
      "arrhythmia",
      "thrombosis"
    ]
  },
  {
    "abbr": "VT",
    "fullEn": "Ventricular Tachycardia",
    "fullAr": "تسرع القلب البطيني",
    "context": "Cardiology / Arrhythmia",
    "definition": "Wide-complex tachycardia originating distal to the bundle of His with rate >100 bpm, carries substantial risk of hemodynamic collapse or degeneration into VF.",
    "definitionAr": "تسرع قلب عريض المركب ينشأ من أسفل حزمة هيس بمعدل >100 نبضة/دقيقة، يحمل خطورة عالية للانهيار الدوراني أو التحول لرجفان بطيني.",
    "wordParts": [
      {
        "part": "ventriculo-",
        "meaning": "ventricles",
        "meaningAr": "البطينات"
      },
      {
        "part": "tachy-",
        "meaning": "rapid",
        "meaningAr": "سريع"
      }
    ],
    "relatedTerms": [
      "VF",
      "Cardioversion",
      "Amiodarone",
      "ICD",
      "Wide QRS"
    ],
    "tags": [
      "cardiology",
      "emergency",
      "arrhythmia"
    ]
  },
  {
    "abbr": "VF",
    "fullEn": "Ventricular Fibrillation",
    "fullAr": "الرجفان البطيني",
    "context": "Cardiology / Resuscitation",
    "definition": "Disorganized, chaotic ventricular electrical activity with no pulse or cardiac output, causing sudden cardiac arrest requiring immediate unsynchronized defibrillation.",
    "definitionAr": "نشاط كهربائي بطيني فوضوي وغير متناسق ينعدم معه النبض والنتاج القلبي، ويسبب توقف قلب مفاجئ يستدعي صدمة كهربائية فورية غير متزامنة.",
    "wordParts": [
      {
        "part": "fibrillation",
        "meaning": "uncoordinated quivering",
        "meaningAr": "ارتجاف غير منسق"
      }
    ],
    "relatedTerms": [
      "Defibrillation",
      "CPR",
      "Cardiac Arrest",
      "ACLS",
      "Epinephrine"
    ],
    "tags": [
      "cardiology",
      "emergency",
      "resuscitation"
    ]
  },
  {
    "abbr": "EF",
    "fullEn": "Ejection Fraction",
    "fullAr": "كسر القذف البطيني",
    "context": "Cardiology / Imaging",
    "definition": "Volumetric fraction of blood ejected from the left ventricle with each contraction (Stroke Volume / End-Diastolic Volume). Normal is 50-70%.",
    "definitionAr": "النسبة المئوية لكمية الدم المقذوفة من البطين الأيسر مع كل انقباضة نسبة لحجم نهاية الانبساط. النطاق الطبيعي 50 - 70%.",
    "wordParts": [
      {
        "part": "ejection",
        "meaning": "pumping out",
        "meaningAr": "قذف أو ضخ"
      }
    ],
    "relatedTerms": [
      "Echo",
      "HFrEF",
      "HFpEF",
      "Stroke Volume",
      "EDV"
    ],
    "tags": [
      "cardiology",
      "imaging",
      "hemodynamics"
    ]
  },
  {
    "abbr": "ECG",
    "fullEn": "Electrocardiogram",
    "fullAr": "تخطيط كهربية القلب",
    "context": "Cardiology / Diagnostic",
    "definition": "Transthoracic surface recording of the electrical currents generated by myocardial depolarization and repolarization throughout the cardiac cycle.",
    "definitionAr": "تسجيل سطحي عبر الصدر للتيارات الكهربائية المتولدة عن زوال واستقطاب ألياف العضلة القلبية عبر دورات النبض.",
    "wordParts": [
      {
        "part": "electro-",
        "meaning": "electrical",
        "meaningAr": "كهربائي"
      },
      {
        "part": "cardio-",
        "meaning": "heart",
        "meaningAr": "قلب"
      },
      {
        "part": "-gram",
        "meaning": "written recording",
        "meaningAr": "رسم أو تسجيل"
      }
    ],
    "relatedTerms": [
      "EKG",
      "Holter",
      "Arrhythmia",
      "ST segment",
      "QT interval"
    ],
    "tags": [
      "cardiology",
      "diagnostic",
      "routine"
    ]
  },
  {
    "abbr": "BNP",
    "fullEn": "B-Type Natriuretic Peptide",
    "fullAr": "الببتيد المدر للصوديوم من النوع B",
    "context": "Cardiology / Laboratory",
    "definition": "Neurohormone released from ventricular myocytes in response to wall stretch and volume overload; used to diagnose and assess heart failure severity.",
    "definitionAr": "هرمون ببتيدي تفرزه الخلايا العضلية البطينية استجابة لتمدد الجدار وفرط السوائل؛ يُعد المعيار الذهبي لتشخيص ومتابعة قصور القلب.",
    "wordParts": [
      {
        "part": "natri-",
        "meaning": "sodium",
        "meaningAr": "صوديوم"
      },
      {
        "part": "-uretic",
        "meaning": "urinary excretion",
        "meaningAr": "إطراح في البول"
      }
    ],
    "relatedTerms": [
      "NT-proBNP",
      "CHF",
      "Heart Failure",
      "Volume Overload"
    ],
    "tags": [
      "cardiology",
      "lab",
      "biomarker"
    ]
  },
  {
    "abbr": "COPD",
    "fullEn": "Chronic Obstructive Pulmonary Disease",
    "fullAr": "الداء الرئوي الانسدادي المزمن",
    "context": "Pulmonology",
    "definition": "Preventable progressive lung disorder characterized by persistent airflow limitation (post-bronchodilator FEV1/FVC < 0.70) due to airway and alveolar abnormalities from noxious particles (chiefly cigarette smoke).",
    "definitionAr": "مرض رئوي مزمن ومترقٍ يتميز بانسداد مجرى الهواء غير العكوس تماماً (FEV1/FVC <0.70 بعد الموسع) نتيجة التهاب القصبات وانتفاخ الرئة المزمن بالتدخين.",
    "wordParts": [
      {
        "part": "obstructive",
        "meaning": "blocking airflow",
        "meaningAr": "انسدادي لمجرى الهواء"
      }
    ],
    "relatedTerms": [
      "FEV1",
      "Spirometry",
      "Emphysema",
      "Chronic Bronchitis",
      "Inhaler"
    ],
    "tags": [
      "pulmonology",
      "chronic",
      "smoking"
    ]
  },
  {
    "abbr": "PE",
    "fullEn": "Pulmonary Embolism",
    "fullAr": "الانصمام الرئوي",
    "context": "Pulmonology / Emergency",
    "definition": "Occlusion of pulmonary arterial vasculature by circulating thrombi (usually arising from deep veins of lower extremities), causing ventilation-perfusion mismatch and potential right ventricular failure.",
    "definitionAr": "انسداد الشرايين الرئوية بخثرة صمية (غالباً متفتتة من أوردة الساق العميقة)، ما يسبب خللاً في تهوية وتروية الرئة وربما قصور بطيني أيمن حاد.",
    "wordParts": [
      {
        "part": "pulmonary",
        "meaning": "lungs",
        "meaningAr": "رئوي"
      },
      {
        "part": "embolism",
        "meaning": "traveling plug or clot",
        "meaningAr": "صمة متنقلة"
      }
    ],
    "relatedTerms": [
      "DVT",
      "VTE",
      "CTPA",
      "D-dimer",
      "Anticoagulation",
      "Wells PE"
    ],
    "tags": [
      "pulmonology",
      "emergency",
      "vascular"
    ]
  },
  {
    "abbr": "ARDS",
    "fullEn": "Acute Respiratory Distress Syndrome",
    "fullAr": "متلازمة الضائقة التنفسية الحادة",
    "context": "Pulmonology / Critical Care",
    "definition": "Non-cardiogenic pulmonary edema characterized by widespread inflammatory damage to alveolar-capillary membranes, bilateral infiltrates on chest imaging, and severe refractory hypoxemia (PaO2/FiO2 ≤300).",
    "definitionAr": "وذمة رئوية غير قلبية المنشأ تتصف بتلف التهابي واسع في الغشاء السنخي الشعري، ارتشاح ثنائي في الرئتين، ونقص أكسجة حاد معاند (PaO2/FiO2 ≤300).",
    "wordParts": [
      {
        "part": "respiratory",
        "meaning": "breathing",
        "meaningAr": "تنفسي"
      },
      {
        "part": "distress",
        "meaning": "severe impairment",
        "meaningAr": "ضائقة أو كرب"
      }
    ],
    "relatedTerms": [
      "PEEP",
      "Mechanical Ventilation",
      "Berlin Criteria",
      "Prone Position"
    ],
    "tags": [
      "pulmonology",
      "critical care",
      "emergency"
    ]
  },
  {
    "abbr": "ABG",
    "fullEn": "Arterial Blood Gas",
    "fullAr": "غازات الدم الشرياني",
    "context": "Pulmonology / Critical Care",
    "definition": "Diagnostic blood sampling from an artery evaluating systemic oxygenation (PaO2), alveolar ventilation (PaCO2), acid-base equilibrium (pH), and metabolic bicarbonate balance (HCO3).",
    "definitionAr": "فحص مخبري لعينة دم شريانية لقياس كفاءة أكسجة الدم الشرياني، التهوية السنخية، وتوازن الحمض والقاعدة والبيكربونات.",
    "wordParts": [
      {
        "part": "arterial",
        "meaning": "from an artery",
        "meaningAr": "شرياني"
      }
    ],
    "relatedTerms": [
      "PaO2",
      "PaCO2",
      "pH",
      "Anion Gap",
      "Acidosis",
      "Alkalosis"
    ],
    "tags": [
      "pulmonology",
      "critical care",
      "lab"
    ]
  },
  {
    "abbr": "FEV1",
    "fullEn": "Forced Expiratory Volume in 1 Second",
    "fullAr": "حجم الزفير القسري في الثانية الأولى",
    "context": "Pulmonology / Spirometry",
    "definition": "Volume of air forcefully exhaled in the first second of a forced vital capacity maneuver; primary spirometric marker of obstructive pulmonary impairment.",
    "definitionAr": "حجم الهواء المنفوخ بقوة خلال الثانية الأولى من اختبار السعة الحيوية القسرية؛ يمثل المعيار الأساسي لتقييم درجات الانسداد الرئوي.",
    "wordParts": [
      {
        "part": "expiratory",
        "meaning": "breathing out",
        "meaningAr": "زفيري"
      }
    ],
    "relatedTerms": [
      "FVC",
      "Spirometry",
      "COPD",
      "Asthma",
      "GOLD Criteria"
    ],
    "tags": [
      "pulmonology",
      "spirometry",
      "diagnostic"
    ]
  },
  {
    "abbr": "FVC",
    "fullEn": "Forced Vital Capacity",
    "fullAr": "السعة الحيوية القسرية",
    "context": "Pulmonology / Spirometry",
    "definition": "Maximum total volume of air exhaled forcefully and completely after full maximal inspiratory effort.",
    "definitionAr": "أقصى حجم كلي من الهواء يمكن زفيره بقوة وبأسرع ما يمكن بعد شهيق كامل أقصى.",
    "wordParts": [
      {
        "part": "vital",
        "meaning": "essential to life",
        "meaningAr": "حيوي"
      },
      {
        "part": "capacity",
        "meaning": "total volume holding",
        "meaningAr": "سعة"
      }
    ],
    "relatedTerms": [
      "FEV1",
      "Spirometry",
      "Restrictive Lung Disease",
      "COPD"
    ],
    "tags": [
      "pulmonology",
      "spirometry"
    ]
  },
  {
    "abbr": "OSA",
    "fullEn": "Obstructive Sleep Apnea",
    "fullAr": "انقطاع النفس الانسدادي النومي",
    "context": "Pulmonology / Sleep Medicine",
    "definition": "Repetitive episodes of upper airway collapse and obstruction during sleep leading to intermittent hypoxia, nocturnal awakenings, and excessive daytime sleepiness.",
    "definitionAr": "نوبات متكررة من انسداد وانهيار مجرى الهواء العلوي أثناء النوم تسبب نقصاً متقطعاً في الأكسجين واستيقاظاً ليلياً ونعاساً نهارياً مفرطاً.",
    "wordParts": [
      {
        "part": "a-",
        "meaning": "absence of",
        "meaningAr": "انعدام أو غياب"
      },
      {
        "part": "-pnea",
        "meaning": "breathing",
        "meaningAr": "تنفس"
      }
    ],
    "relatedTerms": [
      "CPAP",
      "Polysomnography",
      "AHI",
      "Hypoxia",
      "Snoring"
    ],
    "tags": [
      "pulmonology",
      "sleep",
      "chronic"
    ]
  },
  {
    "abbr": "PFT",
    "fullEn": "Pulmonary Function Tests",
    "fullAr": "اختبارات وظائف الرئة",
    "context": "Pulmonology / Diagnostic",
    "definition": "Battery of non-invasive respiratory physiological tests including spirometry, lung volumes (plethysmography), and diffusing capacity of lungs for carbon monoxide (DLCO).",
    "definitionAr": "حزمة فحوصات تنفسية وظيفية شاملة تتضمن قياس التنفس وسعات الرئة واختبار انتشار أول أكسيد الكربون عبر الغشاء السنخي (DLCO).",
    "wordParts": [
      {
        "part": "pulmonary",
        "meaning": "lungs",
        "meaningAr": "رئوي"
      }
    ],
    "relatedTerms": [
      "Spirometry",
      "DLCO",
      "FEV1",
      "FVC",
      "TLC"
    ],
    "tags": [
      "pulmonology",
      "diagnostic"
    ]
  },
  {
    "abbr": "CKD",
    "fullEn": "Chronic Kidney Disease",
    "fullAr": "مرض الكلى المزمن",
    "context": "Nephrology",
    "definition": "Abnormalities of kidney structure or function persisting for >3 months, stratified into stages G1-G5 by eGFR and stages A1-A3 by urinary albumin-to-creatinine ratio.",
    "definitionAr": "خلل مستمر في بنية أو وظيفة الكلى لأكثر من 3 أشهر، يُصنف إلى مراحل G1 إلى G5 بحسب eGFR وA1 إلى A3 بحسب نسبة الألبومين للكرياتينين.",
    "wordParts": [
      {
        "part": "chronic",
        "meaning": "long-standing",
        "meaningAr": "مزمن مديد"
      },
      {
        "part": "renal",
        "meaning": "kidney",
        "meaningAr": "كلوي"
      }
    ],
    "relatedTerms": [
      "eGFR",
      "ESRD",
      "Creatinine",
      "Proteinuria",
      "KDIGO"
    ],
    "tags": [
      "nephrology",
      "chronic",
      "renal"
    ]
  },
  {
    "abbr": "AKI",
    "fullEn": "Acute Kidney Injury",
    "fullAr": "الأذية الكلوية الحادة",
    "context": "Nephrology / Critical Care",
    "definition": "Abrupt reduction in renal excretory function within 48 hours (serum creatinine rise ≥0.3 mg/dL, ≥1.5-fold increase, or sustained oliguria <0.5 mL/kg/h for 6 hours).",
    "definitionAr": "تدهور سريع ومفاجئ في وظائف الكلى الإطراحية خلال 48 ساعة (ارتفاع الكرياتينين ≥0.3 ملغ/دل أو 1.5 ضعف، أو قلة البول المستمرة لأكثر من 6 ساعات).",
    "wordParts": [
      {
        "part": "acute",
        "meaning": "sharp, sudden onset",
        "meaningAr": "حاد ومفاجئ"
      }
    ],
    "relatedTerms": [
      "KDIGO",
      "FENa",
      "ATN",
      "Prerenal",
      "Dialysis"
    ],
    "tags": [
      "nephrology",
      "emergency",
      "acute"
    ]
  },
  {
    "abbr": "eGFR",
    "fullEn": "Estimated Glomerular Filtration Rate",
    "fullAr": "معدل الترشيح الكبيبي المقدّر",
    "context": "Nephrology / Laboratory",
    "definition": "Calculated mathematical estimate of renal glomeruli filtration rate expressed in mL/min/1.73m², derived from serum creatinine, age, and sex (CKD-EPI equation).",
    "definitionAr": "تقدير حسابي لكمية السائل المترشح عبر كبيبات الكلى في الدقيقة، يُحسب من الكرياتينين والعمر والجنس ويُعد المؤشر الأهم لقصور الكلى.",
    "wordParts": [
      {
        "part": "glomerulo-",
        "meaning": "capillary ball filter of kidney",
        "meaningAr": "كبيبة الكلية"
      }
    ],
    "relatedTerms": [
      "CKD",
      "CKD-EPI",
      "Cockcroft-Gault",
      "Creatinine Clearance"
    ],
    "tags": [
      "nephrology",
      "lab",
      "filtration"
    ]
  },
  {
    "abbr": "ESRD",
    "fullEn": "End-Stage Renal Disease",
    "fullAr": "المرحلة النهائية من مرض الكلى (الفشل الكلوي النهائي)",
    "context": "Nephrology",
    "definition": "Stage 5 CKD (eGFR <15 mL/min/1.73m²) in which renal function is irreversibly insufficient to sustain life without chronic renal replacement therapy.",
    "definitionAr": "المرحلة الخامسة المتقدمة من مرض الكلى (eGFR <15) حيث تعجز الكلى نهائياً عن الحفاظ على الحياة بدون الغسيل الكلوي المستديم أو الزراعة.",
    "wordParts": [
      {
        "part": "end-stage",
        "meaning": "terminal phase",
        "meaningAr": "المرحلة الانتهائية"
      }
    ],
    "relatedTerms": [
      "CKD",
      "Hemodialysis",
      "Peritoneal Dialysis",
      "Kidney Transplant"
    ],
    "tags": [
      "nephrology",
      "chronic",
      "dialysis"
    ]
  },
  {
    "abbr": "FENa",
    "fullEn": "Fractional Excretion of Sodium",
    "fullAr": "الإطراح الكسري للصوديوم",
    "context": "Nephrology / Diagnostic",
    "definition": "Diagnostic ratio measuring the percentage of sodium filtered by the kidney that is excreted in the urine: <1% indicates prerenal etiology, >2% indicates intrinsic ATN.",
    "definitionAr": "نسبة مئوية تقيس كسر الصوديوم المترشح الذي يُطرح في البول النهائي: <1% تشير لسبب قبل كلوي سليم الأنابيب، و>2% تشير لأذية أنبوبية حادة (ATN).",
    "wordParts": [
      {
        "part": "fractional",
        "meaning": "fraction or portion of total",
        "meaningAr": "كسري أو جزء من الكل"
      }
    ],
    "relatedTerms": [
      "AKI",
      "ATN",
      "Prerenal Azotemia",
      "Urine Electrolytes"
    ],
    "tags": [
      "nephrology",
      "diagnostic",
      "electrolytes"
    ]
  },
  {
    "abbr": "ATN",
    "fullEn": "Acute Tubular Necrosis",
    "fullAr": "النخر الأنبوبي الحاد",
    "context": "Nephrology / Pathology",
    "definition": "Intrinsic renal lesion characterized by death of tubular epithelial cells secondary to prolonged ischemia or nephrotoxic injury, presenting with muddy brown granular casts.",
    "definitionAr": "أذية كلوية داخلية تتسم بموت خلايا الظهارة الأنبوبية نتيجة نقص التروية المديد أو السموم الكلوية، وتتميز بأسطوانات بنية حبيبية في فحص البول.",
    "wordParts": [
      {
        "part": "tubular",
        "meaning": "kidney tubules",
        "meaningAr": "أنابيب الكلية"
      },
      {
        "part": "necrosis",
        "meaning": "tissue death",
        "meaningAr": "نخر وموت نسيجي"
      }
    ],
    "relatedTerms": [
      "AKI",
      "FENa",
      "Muddy Brown Casts",
      "Nephrotoxic"
    ],
    "tags": [
      "nephrology",
      "pathology"
    ]
  },
  {
    "abbr": "HD",
    "fullEn": "Hemodialysis",
    "fullAr": "الديال الدموي (الغسيل الكلوي)",
    "context": "Nephrology / Renal Replacement",
    "definition": "Extracorporeal blood purification technique employing an artificial dialyzer membrane to remove nitrogenous waste solutes and excess fluid in renal failure.",
    "definitionAr": "تقنية تنقية دموية خارج الجسم تعتمد على غشاء نصف نفوذ لتخليص الدم من الفضلات النتروجينية والسموم والسوائل الزائدة في الفشل الكلوي.",
    "wordParts": [
      {
        "part": "hemo-",
        "meaning": "blood",
        "meaningAr": "دم"
      },
      {
        "part": "dialysis",
        "meaning": "separation through membrane",
        "meaningAr": "فصل أو ديال"
      }
    ],
    "relatedTerms": [
      "ESRD",
      "AV Fistula",
      "Dialyzer",
      "Peritoneal Dialysis"
    ],
    "tags": [
      "nephrology",
      "procedure",
      "dialysis"
    ]
  },
  {
    "abbr": "PD",
    "fullEn": "Peritoneal Dialysis",
    "fullAr": "الديال الصفاقي",
    "context": "Nephrology / Renal Replacement",
    "definition": "Intracorporeal dialysis modality utilizing the vascular peritoneal membrane of the abdomen as a semipermeable filter across which solutes diffuse into infused hypertonic dialysate.",
    "definitionAr": "طريقة غسيل كلوي داخل الجسم تستخدم غشاء البريتوني الغني بالأوعية كمرشح لتبادل السموم مع محلول ديال خاص يُحقن داخل تجويف البطن.",
    "wordParts": [
      {
        "part": "peritoneo-",
        "meaning": "peritoneum membrane",
        "meaningAr": "الصفاق أو البريتون"
      }
    ],
    "relatedTerms": [
      "ESRD",
      "Peritonitis",
      "CAPD",
      "Hemodialysis"
    ],
    "tags": [
      "nephrology",
      "dialysis"
    ]
  },
  {
    "abbr": "CVA",
    "fullEn": "Cerebrovascular Accident",
    "fullAr": "الحادثة الوعائية الدماغية (السكتة الدماغية)",
    "context": "Neurology / Emergency",
    "definition": "Acute focal neurological deficit caused by disrupted cerebral vascular blood supply: either ischemic (85%, thrombotic/embolic) or hemorrhagic (15%, intracerebral/subarachnoid).",
    "definitionAr": "عجز عصبي بؤري مفاجئ ناتج عن انقطاع التروية الدموية الدماغية، إما إقفارياً (85% خثاري أو صمي) أو نزفياً (15% داخل المخ أو تحت العنكبوتية).",
    "wordParts": [
      {
        "part": "cerebro-",
        "meaning": "brain",
        "meaningAr": "الدماغ"
      },
      {
        "part": "vascular",
        "meaning": "blood vessels",
        "meaningAr": "الأوعية الدموية"
      }
    ],
    "relatedTerms": [
      "Stroke",
      "TIA",
      "tPA",
      "Thrombectomy",
      "NIHSS"
    ],
    "tags": [
      "neurology",
      "emergency",
      "stroke"
    ]
  },
  {
    "abbr": "TIA",
    "fullEn": "Transient Ischemic Attack",
    "fullAr": "النوبة الإقفارية العابرة",
    "context": "Neurology / Emergency",
    "definition": "Transient episode of neurological dysfunction caused by focal brain, spinal cord, or retinal ischemia, without acute tissue infarction on neuroimaging.",
    "definitionAr": "نوبة عابرة من القصور العصبي البؤري سببها نقص تروية مؤقت في الدماغ أو الشبكية تزول أعراضها دون وجود احتشاء دائم في الرنين المغناطيسي.",
    "wordParts": [
      {
        "part": "transient",
        "meaning": "temporary, fleeting",
        "meaningAr": "عابر ومؤقت"
      }
    ],
    "relatedTerms": [
      "CVA",
      "ABCD2 Score",
      "Carotid Stenosis",
      "Aspirin"
    ],
    "tags": [
      "neurology",
      "emergency",
      "vascular"
    ]
  },
  {
    "abbr": "GCS",
    "fullEn": "Glasgow Coma Scale",
    "fullAr": "مقياس غلاسكو للغيبوبة",
    "context": "Neurology / Critical Care",
    "definition": "Standardized objective neurological tool assessing depth of consciousness across eye opening (1-4), verbal (1-5), and motor responses (1-6); scores ≤8 indicate severe coma.",
    "definitionAr": "مقياس سريري موضوعي معتمد لتقييم درجة الوعي من 3 إلى 15 عبر فتح العينين (1-4)، الاستجابة اللفظية (1-5)، والاستجابة الحركية (1-6)؛ الدرجة ≤8 تستدعي التنبيب.",
    "wordParts": [
      {
        "part": "coma",
        "meaning": "deep unconsciousness",
        "meaningAr": "غيبوبة عميقة"
      }
    ],
    "relatedTerms": [
      "Intubation",
      "Traumatic Brain Injury",
      "AVPU",
      "Neurology"
    ],
    "tags": [
      "neurology",
      "critical care",
      "scoring"
    ]
  },
  {
    "abbr": "NIHSS",
    "fullEn": "National Institutes of Health Stroke Scale",
    "fullAr": "مقياس السكتة الدماغية لمعاهد الصحة الوطنية",
    "context": "Neurology",
    "definition": "11-parameter quantitative neurological examination scoring ischemic stroke impairment (0-42) to guide thrombolysis eligibility and endovascular thrombectomy decisions.",
    "definitionAr": "فحص عصبي كمي مكون من 11 بنداً لتقييم شدة السكتة الدماغية (0-42) وتحديد أهلية إعطاء مذيبات التخثر وإجراء القسطرة التداخلية لاستخراج الخثرة.",
    "wordParts": [
      {
        "part": "stroke",
        "meaning": "acute cerebral vascular event",
        "meaningAr": "سكتة دماغية"
      }
    ],
    "relatedTerms": [
      "CVA",
      "tPA",
      "Large Vessel Occlusion",
      "Thrombectomy"
    ],
    "tags": [
      "neurology",
      "scoring",
      "stroke"
    ]
  },
  {
    "abbr": "ICP",
    "fullEn": "Intracranial Pressure",
    "fullAr": "الضغط داخل الجمجمة",
    "context": "Neurology / Neurosurgery",
    "definition": "Hydrostatic pressure exerted within the rigid cranium by brain tissue, blood, and cerebrospinal fluid; normal resting values are 5-15 mmHg (Monro-Kellie doctrine).",
    "definitionAr": "الضغط الهيدروستاتيكي السائد داخل تجويف الجمجمة بفعل نسيج الدماغ والدم والسائل النخاعي؛ المستوى الطبيعي 5 - 15 ملم زئبق (مبدأ مونرو-كيلي).",
    "wordParts": [
      {
        "part": "intra-",
        "meaning": "inside",
        "meaningAr": "داخل"
      },
      {
        "part": "cranial",
        "meaning": "skull",
        "meaningAr": "الجمجمة"
      }
    ],
    "relatedTerms": [
      "Cushing Triad",
      "Mannitol",
      "EVD",
      "Herniation",
      "Papilledema"
    ],
    "tags": [
      "neurology",
      "critical care",
      "pressure"
    ]
  },
  {
    "abbr": "SAH",
    "fullEn": "Subarachnoid Hemorrhage",
    "fullAr": "النزف تحت العنكبوتية",
    "context": "Neurology / Neurosurgery",
    "definition": "Extravasation of arterial blood into the subarachnoid space (most commonly from ruptured saccular berry aneurysm), characteristically presenting as sudden \"worst headache of life\".",
    "definitionAr": "تدفق الدم الشرياني داخل الحيز تحت العنكبوتي (غالباً بسبب تمزق أم دم كيسية في دائرة ويليس)، ويتظاهر بصداع صاعق هو \"الأسوأ في حياة المريض\".",
    "wordParts": [
      {
        "part": "sub-",
        "meaning": "beneath",
        "meaningAr": "تحت"
      },
      {
        "part": "arachnoid",
        "meaning": "spider-web membrane of meninges",
        "meaningAr": "الغشاء العنكبوتي السحائي"
      }
    ],
    "relatedTerms": [
      "Berry Aneurysm",
      "Thunderclap Headache",
      "Nimodipine",
      "Xanthochromia"
    ],
    "tags": [
      "neurology",
      "emergency",
      "hemorrhage"
    ]
  },
  {
    "abbr": "ICH",
    "fullEn": "Intracerebral Hemorrhage",
    "fullAr": "النزف داخل المخ",
    "context": "Neurology / Emergency",
    "definition": "Bleeding directly into brain parenchyma, predominantly caused by chronic hypertensive lipohyalinosis of small penetrating arteries or cerebral amyloid angiopathy.",
    "definitionAr": "نزف دموي مباشر داخل نسيج الدماغ، ينجم غالباً عن الارتفاع المزمن لضغط الدم وتلف الشرايين الثاقبة الصغيرة أو اعتلال الأوعية بالنشواني.",
    "wordParts": [
      {
        "part": "intra-",
        "meaning": "within",
        "meaningAr": "داخل"
      },
      {
        "part": "cerebral",
        "meaning": "cerebrum",
        "meaningAr": "المخ"
      }
    ],
    "relatedTerms": [
      "CVA",
      "Hypertension",
      "Hematoma",
      "Mass Effect",
      "CT Head"
    ],
    "tags": [
      "neurology",
      "emergency",
      "hemorrhage"
    ]
  },
  {
    "abbr": "EEG",
    "fullEn": "Electroencephalogram",
    "fullAr": "تخطيط كهربية الدماغ",
    "context": "Neurology / Diagnostic",
    "definition": "Electrophysiological monitoring technique recording the summed electrical synaptic activity of cerebral cortical pyramidal neurons, fundamental in epilepsy evaluation.",
    "definitionAr": "تسجيل كهرومغناطيسي للنشاط الكهربائي المشبكي في القشرة المخية، يُعد الفحص الأساسي لتشخيص الصرع والنوبات والتنكس الدماغي.",
    "wordParts": [
      {
        "part": "encephalo-",
        "meaning": "brain",
        "meaningAr": "الدماغ"
      },
      {
        "part": "-gram",
        "meaning": "recorded waveform",
        "meaningAr": "رسم أو تسجيل"
      }
    ],
    "relatedTerms": [
      "Epilepsy",
      "Seizure",
      "Status Epilepticus",
      "Encephalopathy"
    ],
    "tags": [
      "neurology",
      "diagnostic",
      "epilepsy"
    ]
  },
  {
    "abbr": "DM",
    "fullEn": "Diabetes Mellitus",
    "fullAr": "داء السكري",
    "context": "Endocrinology",
    "definition": "Metabolic disorder of chronic hyperglycemia resulting from defects in insulin secretion (Type 1), insulin action/resistance (Type 2), or both.",
    "definitionAr": "اضطراب استقلابي يتسم بارتفاع مزمن في سكر الدم ينجم عن نقص إفراز الأنسولين (النوع 1) أو مقاومة خلايا الجسم لتأثيره (النوع 2) أو كليهما.",
    "wordParts": [
      {
        "part": "diabetes",
        "meaning": "siphon, running through (polyuria)",
        "meaningAr": "بوال أو جريان السوائل"
      },
      {
        "part": "mellitus",
        "meaning": "honey-sweet",
        "meaningAr": "حلو المذاق كالعسل"
      }
    ],
    "relatedTerms": [
      "HbA1c",
      "DKA",
      "Insulin",
      "Metformin",
      "Retinopathy"
    ],
    "tags": [
      "endocrinology",
      "chronic",
      "metabolic"
    ]
  },
  {
    "abbr": "DKA",
    "fullEn": "Diabetic Ketoacidosis",
    "fullAr": "الحماض الكيتوني السكري",
    "context": "Endocrinology / Emergency",
    "definition": "Life-threatening metabolic complication (chiefly in T1DM) with triad of hyperglycemia (>250 mg/dL), high anion gap metabolic acidosis (pH <7.3, HCO3 <18), and serum/urine ketosis.",
    "definitionAr": "مضاعفة استقلابية حادة وخطيرة (خاصة بالنوع 1) بثلاثي: فرط سكر الدم (>250)، حماض استقلابي مرتفع الفجوة (pH <7.3)، وفرط كيتونات في الدم والبول.",
    "wordParts": [
      {
        "part": "keto-",
        "meaning": "ketone bodies",
        "meaningAr": "أجسام كيتونية"
      },
      {
        "part": "acidosis",
        "meaning": "acidic blood pH",
        "meaningAr": "حماض حمضي"
      }
    ],
    "relatedTerms": [
      "HHS",
      "Anion Gap",
      "Insulin Infusion",
      "Potassium",
      "IV Fluids"
    ],
    "tags": [
      "endocrinology",
      "emergency",
      "metabolic"
    ]
  },
  {
    "abbr": "HHS",
    "fullEn": "Hyperosmolar Hyperglycemic State",
    "fullAr": "الحالة فرط الإسمولية مع فرط سكر الدم",
    "context": "Endocrinology / Emergency",
    "definition": "Severe metabolic emergency in T2DM characterized by profound hyperglycemia (>600 mg/dL), severe hyperosmolality (>320 mOsm/kg), and massive dehydration without significant ketoacidosis.",
    "definitionAr": "حالة طوارئ استقلابية خطيرة في سكري النوع 2 تتميز بارتفاع هائل بالسكر (>600)، فرط إسمولية مصلية شديد (>320)، وجفاف حاد مع غياب الحماض الكيتوني الصريح.",
    "wordParts": [
      {
        "part": "hyper-",
        "meaning": "excessive",
        "meaningAr": "فرط أو زيادة"
      },
      {
        "part": "osmolar",
        "meaning": "osmotic concentration",
        "meaningAr": "إسمولية"
      }
    ],
    "relatedTerms": [
      "DKA",
      "Hyperglycemia",
      "Serum Osmolality",
      "Dehydration"
    ],
    "tags": [
      "endocrinology",
      "emergency"
    ]
  },
  {
    "abbr": "HbA1c",
    "fullEn": "Glycated Hemoglobin (Hemoglobin A1c)",
    "fullAr": "الهيموجلوبين السكري (التراكمي)",
    "context": "Endocrinology / Laboratory",
    "definition": "Fraction of adult hemoglobin non-enzymatically bonded to glucose; reflects weighted average glycemic exposure over erythrocyte lifespan (~90-120 days). Diagnostic threshold ≥6.5%.",
    "definitionAr": "جزء خضاب الدم المرتبط تساهمياً بالجلوكوز بصورة لا إنزيمية؛ يعكس متوسط السكر في الدم خلال عمر كرية الدم الحمراء (2-3 أشهر). الحد التشخيصي ≥6.5%.",
    "wordParts": [
      {
        "part": "glyco-",
        "meaning": "sugar, glucose",
        "meaningAr": "سكر أو جلوكوز"
      },
      {
        "part": "hemoglobin",
        "meaning": "red blood cell oxygen carrier",
        "meaningAr": "خضاب الدم"
      }
    ],
    "relatedTerms": [
      "DM",
      "Glucose",
      "ADA Guidelines",
      "Microvascular Complications"
    ],
    "tags": [
      "endocrinology",
      "lab",
      "monitoring"
    ]
  },
  {
    "abbr": "TSH",
    "fullEn": "Thyroid-Stimulating Hormone",
    "fullAr": "الهرمون المنبه للدرقية (ثيروتروبين)",
    "context": "Endocrinology / Laboratory",
    "definition": "Anterior pituitary glycoprotein hormone regulating thyroid gland synthesis and secretion of thyroxine (T4) and triiodothyronine (T3) via negative feedback.",
    "definitionAr": "هرمون نخامي يُفرز من الفص الأمامي لتنظيم إنتاج وإفراز هرمونات الدرقية (T3 وT4) عبر آلية التلقيم الراجع السلبي.",
    "wordParts": [
      {
        "part": "thyro-",
        "meaning": "thyroid gland",
        "meaningAr": "الغدة الدرقية"
      },
      {
        "part": "-tropin",
        "meaning": "stimulating, turning toward",
        "meaningAr": "منبه أو محفز"
      }
    ],
    "relatedTerms": [
      "Free T4",
      "Hypothyroidism",
      "Hyperthyroidism",
      "Levothyroxine"
    ],
    "tags": [
      "endocrinology",
      "lab",
      "thyroid"
    ]
  },
  {
    "abbr": "SIADH",
    "fullEn": "Syndrome of Inappropriate Antidiuretic Hormone Secretion",
    "fullAr": "متلازمة الإفراز غير الملائم للهرمون المضاد لإدرار البول",
    "context": "Endocrinology / Nephrology",
    "definition": "Disorder characterized by unsuppressed release of ADH/arginine vasopressin, causing euvolemic hyponatremia, high urine osmolality (>100 mOsm/kg), and urine sodium >40 mEq/L.",
    "definitionAr": "متلازمة تتميز بالإفراز المفرط المستمر لهرمون ADH رغم انخفاض الأسمولالية، ما يؤدي لنقص صوديوم تخفيفي سوي الحجم وارتفاع أسمولية البول.",
    "wordParts": [
      {
        "part": "anti-",
        "meaning": "against",
        "meaningAr": "مضاد"
      },
      {
        "part": "-diuretic",
        "meaning": "increasing urine output",
        "meaningAr": "إدرار البول"
      }
    ],
    "relatedTerms": [
      "Hyponatremia",
      "Vasopressin",
      "Urine Osmolality",
      "Fluid Restriction"
    ],
    "tags": [
      "endocrinology",
      "electrolytes"
    ]
  },
  {
    "abbr": "GERD",
    "fullEn": "Gastroesophageal Reflux Disease",
    "fullAr": "داء الارتداد المعدي المريئي",
    "context": "Gastroenterology",
    "definition": "Chronic condition where retrograde flow of acidic gastroduodenal contents into the esophagus provokes troublesome heartburn, regurgitation, or mucosal injury.",
    "definitionAr": "حالة مزمنة يرتد فيها محتوى المعدة الحمضي صعوداً نحو المريء مسبباً حرقة الفؤاد، القلس الحمضي، وأذية محتملة لمخاطية المريء.",
    "wordParts": [
      {
        "part": "gastro-",
        "meaning": "stomach",
        "meaningAr": "المعدة"
      },
      {
        "part": "esophageal",
        "meaning": "esophagus",
        "meaningAr": "المريء"
      },
      {
        "part": "reflux",
        "meaning": "backflow",
        "meaningAr": "ارتداد عكسي"
      }
    ],
    "relatedTerms": [
      "PPI",
      "Barrett Esophagus",
      "Heartburn",
      "Endoscopy"
    ],
    "tags": [
      "gastroenterology",
      "chronic"
    ]
  },
  {
    "abbr": "IBD",
    "fullEn": "Inflammatory Bowel Disease",
    "fullAr": "مرض الأمعاء الالتهابي",
    "context": "Gastroenterology",
    "definition": "Chronic immunologically mediated relapsing inflammatory intestinal disorders, comprising Ulcerative Colitis and Crohn Disease.",
    "definitionAr": "مجموعة اضطرابات مناعية التهابية مزمنة تصيب القناة الهضمية بنوبات متكررة، وتضم التهاب القولون التقرحي وداء كرون.",
    "wordParts": [
      {
        "part": "inflammatory",
        "meaning": "immune mediated swelling and erythema",
        "meaningAr": "التهابي"
      }
    ],
    "relatedTerms": [
      "Crohn",
      "Ulcerative Colitis",
      "Colonoscopy",
      "Biologics",
      "Calprotectin"
    ],
    "tags": [
      "gastroenterology",
      "chronic",
      "autoimmune"
    ]
  },
  {
    "abbr": "UC",
    "fullEn": "Ulcerative Colitis",
    "fullAr": "التهاب القولون التقرحي",
    "context": "Gastroenterology",
    "definition": "Chronic mucosal inflammation confined strictly to the colon and rectum, beginning in the rectum and extending continuously proximally, presenting with bloody diarrhea.",
    "definitionAr": "التهاب مزمن يقتصر على مخاطية القولون والمستقيم حصراً، يبدأ دائماً من المستقيم ويمتد بصورة متصلة دون انقطاع، ويسبب إسهالاً مدمماً.",
    "wordParts": [
      {
        "part": "ulcerative",
        "meaning": "forming mucosal ulcers",
        "meaningAr": "تقرحي"
      },
      {
        "part": "colitis",
        "meaning": "colon inflammation",
        "meaningAr": "التهاب القولون"
      }
    ],
    "relatedTerms": [
      "IBD",
      "Crohn",
      "Bloody Diarrhea",
      "Mesalamine",
      "Toxic Megacolon"
    ],
    "tags": [
      "gastroenterology",
      "colon"
    ]
  },
  {
    "abbr": "CD",
    "fullEn": "Crohn Disease",
    "fullAr": "داء كرون",
    "context": "Gastroenterology",
    "definition": "Transmural granulomatous inflammation capable of affecting any segment of the gastrointestinal tract from mouth to anus, typically in non-continuous skip lesions.",
    "definitionAr": "التهاب حبيبي عبر كامل سماكة الجدار يمكن أن يصيب أي جزء من الجهاز الهضمي من الفم للشرج، ويتميز بآفات قفزية منفصلة وناسورات.",
    "wordParts": [
      {
        "part": "transmural",
        "meaning": "across entire wall thickness",
        "meaningAr": "عبر كامل سماكة الجدار"
      }
    ],
    "relatedTerms": [
      "IBD",
      "Skip Lesions",
      "Fistula",
      "Terminal Ileitis",
      "Stricture"
    ],
    "tags": [
      "gastroenterology",
      "inflammatory"
    ]
  },
  {
    "abbr": "PUD",
    "fullEn": "Peptic Ulcer Disease",
    "fullAr": "داء القرحة الهضمية",
    "context": "Gastroenterology",
    "definition": "Mucosal defect extending through the muscularis mucosae in the stomach or duodenum, predominantly caused by Helicobacter pylori infection or NSAID usage.",
    "definitionAr": "تقرح يخترق الصفيحة العضلية المخاطية في المعدة أو الاثني عشر، ينجم بالدرجة الأولى عن جرثومة المعدة (H. pylori) أو فرط استخدام مضادات الالتهاب غير الستيرويدية.",
    "wordParts": [
      {
        "part": "peptic",
        "meaning": "digestive, relating to pepsin/acid",
        "meaningAr": "هضمي أو متعلق بالببسين والحمض"
      },
      {
        "part": "ulcer",
        "meaning": "break in membrane",
        "meaningAr": "قرحة"
      }
    ],
    "relatedTerms": [
      "H. pylori",
      "NSAIDs",
      "PPI",
      "Upper GI Bleed",
      "Endoscopy"
    ],
    "tags": [
      "gastroenterology",
      "ulcer"
    ]
  },
  {
    "abbr": "SBP",
    "fullEn": "Spontaneous Bacterial Peritonitis",
    "fullAr": "التهاب الصفاق الجرثومي العفوي",
    "context": "Gastroenterology / Hepatology",
    "definition": "Acute bacterial infection of ascitic fluid in cirrhotic patients in the absence of a surgically treatable intra-abdominal infection, defined by ascitic PMN count ≥250/mm³.",
    "definitionAr": "عدوى بكتيرية حادة تصيب سائل الحبن لدى مرضى تشمع الكبد دون وجود مصدر جراحي داخل البطن، وتُشخص بارتفاع كريات النيتروفيل بالسائل ≥250/ملم³.",
    "wordParts": [
      {
        "part": "peritoneo-",
        "meaning": "peritoneal cavity",
        "meaningAr": "الصفاق"
      },
      {
        "part": "-itis",
        "meaning": "inflammation",
        "meaningAr": "التهاب"
      }
    ],
    "relatedTerms": [
      "Cirrhosis",
      "Ascites",
      "Paracentesis",
      "Cefotaxime",
      "Albumin"
    ],
    "tags": [
      "gastroenterology",
      "hepatology",
      "infection"
    ]
  },
  {
    "abbr": "CBC",
    "fullEn": "Complete Blood Count",
    "fullAr": "صورة الدم الكاملة (تعداد الدم الكامل)",
    "context": "Hematology / Laboratory",
    "definition": "Automated quantitative profiling of cellular elements in blood: red blood cells (RBC), hemoglobin, hematocrit, indices (MCV, MCH, MCHC, RDW), white blood cells (WBC) with differential, and platelets.",
    "definitionAr": "تحليل آلي كمي شامل لجميع المكونات الخلوية للدم: الكريات الحمراء، الهيموجلوبين، الهيماتوكريت، الكريات البيضاء وتفصيلها، والصفائح الدموية.",
    "wordParts": [
      {
        "part": "complete",
        "meaning": "full profile",
        "meaningAr": "كامل"
      },
      {
        "part": "count",
        "meaning": "enumeration",
        "meaningAr": "تعداد"
      }
    ],
    "relatedTerms": [
      "Hemoglobin",
      "WBC",
      "Platelets",
      "MCV",
      "Anemia"
    ],
    "tags": [
      "hematology",
      "lab",
      "routine"
    ]
  },
  {
    "abbr": "INR",
    "fullEn": "International Normalized Ratio",
    "fullAr": "النسبة المعيارية الدولية",
    "context": "Hematology / Coagulation",
    "definition": "Standardized mathematical expression of prothrombin time (PT) calibrated against international reference thromboplastin (ISI), used to monitor vitamin K antagonists (Warfarin). Target usually 2.0-3.0.",
    "definitionAr": "معيار دولي موحد لحساب زمن البروثرومبين لمراقبة تميع الدم بمضادات فيتامين K (الوارفارين) بغض النظر عن كواشف المختبر. الهدف العلاجي عادة 2.0 - 3.0.",
    "wordParts": [
      {
        "part": "normalized",
        "meaning": "adjusted to reference standard",
        "meaningAr": "معياري وموحد"
      }
    ],
    "relatedTerms": [
      "PT",
      "Warfarin",
      "Coagulation",
      "Vitamin K",
      "Bleeding Risk"
    ],
    "tags": [
      "hematology",
      "coagulation",
      "monitoring"
    ]
  },
  {
    "abbr": "PT",
    "fullEn": "Prothrombin Time",
    "fullAr": "زمن البروثرومبين",
    "context": "Hematology / Coagulation",
    "definition": "Screening coagulation assay assessing the extrinsic and common coagulation pathways (Factors VII, X, V, II, and fibrinogen).",
    "definitionAr": "اختبار تخثر يقيس كفاءة السبيل الخارجي والسبيل المشترك لشلال التخثر (العوامل VII، X، V، II والفيبرينوجين).",
    "wordParts": [
      {
        "part": "prothrombin",
        "meaning": "factor II precursor of thrombin",
        "meaningAr": "طليعة الثرومبين (العامل الثاني)"
      }
    ],
    "relatedTerms": [
      "INR",
      "aPTT",
      "Extrinsic Pathway",
      "Liver Function"
    ],
    "tags": [
      "hematology",
      "coagulation"
    ]
  },
  {
    "abbr": "aPTT",
    "fullEn": "Activated Partial Thromboplastin Time",
    "fullAr": "زمن الثرومبوبلاستين الجزئي المفعل",
    "context": "Hematology / Coagulation",
    "definition": "Coagulation assay assessing the intrinsic and common pathways (Factors XII, XI, IX, VIII, X, V, II, and I), routinely used to monitor unfractionated heparin therapy.",
    "definitionAr": "فحص تخثر يقيس سلامة السبيل الداخلي والمشترك (العوامل XII، XI، IX، VIII، X، V، II، I)، ويُستخدم لمراقبة العلاج بالهيبارين غير المجزأ.",
    "wordParts": [
      {
        "part": "thromboplastin",
        "meaning": "clotting factor complex",
        "meaningAr": "ثرومبوبلاستين التخثر"
      }
    ],
    "relatedTerms": [
      "PT",
      "Heparin",
      "Hemophilia",
      "Intrinsic Pathway"
    ],
    "tags": [
      "hematology",
      "coagulation",
      "heparin"
    ]
  },
  {
    "abbr": "DIC",
    "fullEn": "Disseminated Intravascular Coagulation",
    "fullAr": "التخثر المنتثر داخل الأوعية",
    "context": "Hematology / Critical Care",
    "definition": "Systemic pathological thrombo-hemorrhagic syndrome caused by massive uncontrolled thrombin generation, leading to widespread microvascular thrombosis and consumptive coagulopathy.",
    "definitionAr": "متلازمة خطيرة تسبب تنشيطاً واسعاً غير منضبط للتخثر داخل الأوعية، مؤدية لجلطات دقيقة واستهلاك عوامل التخثر والصفائح ونزيف حاد.",
    "wordParts": [
      {
        "part": "disseminated",
        "meaning": "scattered throughout",
        "meaningAr": "منتثر وشامل"
      },
      {
        "part": "intravascular",
        "meaning": "inside blood vessels",
        "meaningAr": "داخل الأوعية"
      }
    ],
    "relatedTerms": [
      "D-dimer",
      "Fibrinogen",
      "Thrombocytopenia",
      "Sepsis",
      "Consumptive Coagulopathy"
    ],
    "tags": [
      "hematology",
      "critical care",
      "emergency"
    ]
  },
  {
    "abbr": "DVT",
    "fullEn": "Deep Vein Thrombosis",
    "fullAr": "الخثار الوريدي العميق",
    "context": "Hematology / Vascular",
    "definition": "Formation of an occlusive blood clot within the deep veins of the lower extremity or pelvis, with high risk of embolization to the pulmonary arteries (pulmonary embolism).",
    "definitionAr": "تكون خثرة دموية داخل الأوردة العميقة للساق أو الحوض، وتحمل خطورة انفصالها وانتقالها مسببة انصماماً رئوياً مهدداً للحياة.",
    "wordParts": [
      {
        "part": "thrombosis",
        "meaning": "clot formation",
        "meaningAr": "تخثر أو تشكل جلطة"
      }
    ],
    "relatedTerms": [
      "PE",
      "VTE",
      "Anticoagulation",
      "Doppler US",
      "Wells DVT"
    ],
    "tags": [
      "hematology",
      "vascular",
      "thrombosis"
    ]
  },
  {
    "abbr": "ACEi",
    "fullEn": "Angiotensin-Converting Enzyme Inhibitor",
    "fullAr": "مثبط الإنزيم المحول للأنجيوتنسين",
    "context": "Pharmacology / Cardiovascular",
    "definition": "Antihypertensive agent that blocks conversion of angiotensin I to angiotensin II, causing systemic vasodilation and aldosterone suppression. Adverse effects: dry bradykinin cough, hyperkalemia, angioedema.",
    "definitionAr": "صنف دوائي خافض للضغط يثبط تحول الأنجيوتنسين I إلى II، مسبباً توسع الأوعية وحفظ الكلى. من آثاره: السعال الجاف، فرط البوتاسيوم، والوذمة الوعائية.",
    "wordParts": [
      {
        "part": "angio-",
        "meaning": "blood vessel",
        "meaningAr": "وعاء دموي"
      },
      {
        "part": "tensin",
        "meaning": "tension, pressure",
        "meaningAr": "توتر أو ضغط"
      }
    ],
    "relatedTerms": [
      "ARB",
      "Enalapril",
      "Lisinopril",
      "Ramipril",
      "Bradykinin"
    ],
    "tags": [
      "pharmacology",
      "cardiology",
      "antihypertensive"
    ]
  },
  {
    "abbr": "ARB",
    "fullEn": "Angiotensin Receptor Blocker",
    "fullAr": "حاصر مستقبلات الأنجيوتنسين II",
    "context": "Pharmacology / Cardiovascular",
    "definition": "Cardiovascular medication selectively blocking the angiotensin II type 1 (AT1) receptor; used for hypertension and heart failure without causing bradykinin-related dry cough.",
    "definitionAr": "دواء يحجب مستقبلات الأنجيوتنسين النوع 1 (AT1) انتقائياً؛ يُستخدم لضغط الدم وقصور القلب كبديل ممتاز لمن يعانون السعال مع ACEi.",
    "wordParts": [
      {
        "part": "blocker",
        "meaning": "receptor antagonist",
        "meaningAr": "حاصر أو مضاد مستقبل"
      }
    ],
    "relatedTerms": [
      "ACEi",
      "Losartan",
      "Valsartan",
      "Candesartan",
      "Hypertension"
    ],
    "tags": [
      "pharmacology",
      "cardiology",
      "antihypertensive"
    ]
  },
  {
    "abbr": "BB",
    "fullEn": "Beta-Blocker",
    "fullAr": "حاصرات مستقبلات بيتا الأدرينرجية",
    "context": "Pharmacology / Cardiology",
    "definition": "Class of competitive antagonists of beta-adrenergic receptors, reducing heart rate, cardiac contractility, and blood pressure (essential in HFrEF, post-MI, and arrhythmias).",
    "definitionAr": "فئة دوائية تحجب مستقبلات بيتا الأدرينرجية لإنقاص معدل ضربات القلب وجهد العضلة القلبية والضغط الشرياني (أساسية بعد الجلطة وقصور القلب).",
    "wordParts": [
      {
        "part": "adrenergic",
        "meaning": "acting on adrenaline/epinephrine",
        "meaningAr": "أدريناليني"
      }
    ],
    "relatedTerms": [
      "Metoprolol",
      "Bisoprolol",
      "Carvedilol",
      "Bradycardia",
      "Asthma"
    ],
    "tags": [
      "pharmacology",
      "cardiology"
    ]
  },
  {
    "abbr": "CCB",
    "fullEn": "Calcium Channel Blocker",
    "fullAr": "حاصرات قنوات الكالسيوم",
    "context": "Pharmacology / Cardiology",
    "definition": "Vasodilator class inhibiting L-type voltage-gated calcium channels in vascular smooth muscle (dihydropyridines, e.g. Amlodipine) or myocardium (non-dihydropyridines, e.g. Diltiazem, Verapamil).",
    "definitionAr": "أدوية تثبط قنوات الكالسيوم البطيئة في العضلات الملساء للأوعية (مثل أملوديبين للتوسع الوعائي) أو في العضلة القلبية ومراكز النظم (مثل ديلتيازيم وفيراباميل).",
    "wordParts": [
      {
        "part": "channel",
        "meaning": "ion pore",
        "meaningAr": "قناة شاردية"
      }
    ],
    "relatedTerms": [
      "Amlodipine",
      "Diltiazem",
      "Verapamil",
      "Hypertension",
      "Edema"
    ],
    "tags": [
      "pharmacology",
      "cardiology",
      "antihypertensive"
    ]
  },
  {
    "abbr": "NSAID",
    "fullEn": "Non-Steroidal Anti-Inflammatory Drug",
    "fullAr": "مضادات الالتهاب غير الستيرويدية",
    "context": "Pharmacology / Analgesia",
    "definition": "Analgesic, antipyretic, and anti-inflammatory drugs that inhibit cyclooxygenase enzymes (COX-1 and/or COX-2), decreasing prostaglandin synthesis. Adverse effects: gastric ulceration, acute renal failure, platelet inhibition.",
    "definitionAr": "مسكنات ومضادات التهاب تعمل على تثبيط إنزيمات السيكلوأوكسيجيناز (COX-1 و COX-2) وخفض البروستاغلاندين. تحمل خطر القرحة الهضمية والقصور الكلوي.",
    "wordParts": [
      {
        "part": "non-steroidal",
        "meaning": "lacking steroid chemical backbone",
        "meaningAr": "غير كورتيزوني أو غير ستيرويدي"
      }
    ],
    "relatedTerms": [
      "Ibuprofen",
      "Naproxen",
      "Celecoxib",
      "Aspirin",
      "COX-2",
      "PUD"
    ],
    "tags": [
      "pharmacology",
      "analgesia",
      "anti-inflammatory"
    ]
  },
  {
    "abbr": "DOAC",
    "fullEn": "Direct Oral Anticoagulant",
    "fullAr": "مضادات التخثر الفموية المباشرة",
    "context": "Pharmacology / Anticoagulation",
    "definition": "Novel oral anticoagulants selectively inhibiting Factor Xa (Apixaban, Rivaroxaban) or thrombin (Dabigatran), offering predictable pharmacokinetics without routine INR monitoring.",
    "definitionAr": "أدوية حديثة مضادة للتخثر تثبط العامل Xa مباشرة (مثل أبيكسابان وريفاروكسابان) أو الثرومبين (دابيغاتران) دون حاجة للمراقبة الدورية للـ INR.",
    "wordParts": [
      {
        "part": "direct",
        "meaning": "direct target inhibitor without antithrombin",
        "meaningAr": "مباشر التأثير"
      }
    ],
    "relatedTerms": [
      "NOAC",
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran",
      "Warfarin",
      "AF"
    ],
    "tags": [
      "pharmacology",
      "hematology",
      "anticoagulation"
    ]
  },
  {
    "abbr": "Lap",
    "fullEn": "Laparoscopy / Laparoscopic Surgery",
    "fullAr": "تنظير البطن الجراحي (جراحة المنظار)",
    "context": "General Surgery",
    "definition": "Minimally invasive surgical technique in which trocars and a camera are inserted through small abdominal incisions under pneumoperitoneum.",
    "definitionAr": "تقنية جراحية طفيفة التوغل تُجرى عبر فتحات بطنية صغيرة باستخدام كاميرا وأدوات دقيقة بعد نفخ التجويف البطني بغاز CO2.",
    "wordParts": [
      {
        "part": "laparo-",
        "meaning": "abdominal wall, flank",
        "meaningAr": "جدار البطن"
      },
      {
        "part": "-scopy",
        "meaning": "visual examination",
        "meaningAr": "معاينة بصرية أو تنظير"
      }
    ],
    "relatedTerms": [
      "Minimally Invasive",
      "Trocar",
      "Pneumoperitoneum",
      "Laparotomy"
    ],
    "tags": [
      "surgery",
      "procedure",
      "minimally-invasive"
    ]
  },
  {
    "abbr": "Lap Appy",
    "fullEn": "Laparoscopic Appendectomy",
    "fullAr": "استئصال الزائدة الدودية بالمنظار",
    "context": "General Surgery / Emergency",
    "definition": "Minimally invasive surgical removal of an inflamed or infected vermiform appendix through laparoscopic ports.",
    "definitionAr": "استئصال جراحي إسعافي للزائدة الدودية الملتهبة عبر تقنية تنظير البطن طفيفة التوغل.",
    "wordParts": [
      {
        "part": "append-",
        "meaning": "vermiform appendix",
        "meaningAr": "الزائدة الدودية"
      },
      {
        "part": "-ectomy",
        "meaning": "surgical excision",
        "meaningAr": "استئصال جراحي"
      }
    ],
    "relatedTerms": [
      "Appendicitis",
      "McBurney Point",
      "Right Lower Quadrant",
      "Laparoscopy"
    ],
    "tags": [
      "surgery",
      "emergency",
      "appendix"
    ]
  },
  {
    "abbr": "Lap Chole",
    "fullEn": "Laparoscopic Cholecystectomy",
    "fullAr": "استئصال المرارة بالمنظار",
    "context": "General Surgery",
    "definition": "Gold standard minimally invasive resection of the gallbladder for symptomatic cholelithiasis, acute cholecystitis, or biliary dyskinesia.",
    "definitionAr": "العملية القياسية لاستئصال كيس المرارة بالمنظار لعلاج حصوات المرارة العرضية والتهاب المرارة الحاد.",
    "wordParts": [
      {
        "part": "chole-",
        "meaning": "bile",
        "meaningAr": "صفراء"
      },
      {
        "part": "cyst-",
        "meaning": "sac, bladder",
        "meaningAr": "كيس أو حويصلة"
      },
      {
        "part": "-ectomy",
        "meaning": "surgical removal",
        "meaningAr": "استئصال"
      }
    ],
    "relatedTerms": [
      "Cholecystitis",
      "Gallstones",
      "Calot Triangle",
      "Cystic Duct"
    ],
    "tags": [
      "surgery",
      "gallbladder",
      "procedure"
    ]
  },
  {
    "abbr": "I&D",
    "fullEn": "Incision and Drainage",
    "fullAr": "الشق والتفريغ الجراحي",
    "context": "General Surgery / Emergency",
    "definition": "Minor surgical procedure to release trapped purulent material from an abscess cavity via sharp incision, breakdown of loculations, and packing or drain placement.",
    "definitionAr": "إجراء جراحي إسعافي لفتح وتفريغ الخراجات والتجمعات الصديدية عبر شق جراحي وتنظيف الجيوب وتصريف القيح.",
    "wordParts": [
      {
        "part": "incision",
        "meaning": "cutting into tissue",
        "meaningAr": "شق جراحي"
      },
      {
        "part": "drainage",
        "meaning": "evacuating fluid",
        "meaningAr": "تفريغ أو تصريف"
      }
    ],
    "relatedTerms": [
      "Abscess",
      "Purulent",
      "Cellulitis",
      "Wound Care",
      "Packing"
    ],
    "tags": [
      "surgery",
      "emergency",
      "infection"
    ]
  },
  {
    "abbr": "ORIF",
    "fullEn": "Open Reduction and Internal Fixation",
    "fullAr": "الرد المفتوح والتثبيت الداخلي للكسور",
    "context": "Orthopedic Surgery",
    "definition": "Orthopedic surgical operation to anatomically align bone fragments (open reduction) and mechanically stabilize them with hardware like plates, screws, or intramedullary rods (internal fixation).",
    "definitionAr": "عملية جراحية عظمية لإعادة محاذاة أجزاء العظم المكسور تشريحياً وتثبيتها ميكانيكياً بألواح ومسامير أو أسياخ معدنية داخل النقي.",
    "wordParts": [
      {
        "part": "reduction",
        "meaning": "restoration to normal anatomical alignment",
        "meaningAr": "رد أو إرجاع العظم لمكانه"
      },
      {
        "part": "fixation",
        "meaning": "holding rigidly in place",
        "meaningAr": "تثبيت"
      }
    ],
    "relatedTerms": [
      "Fracture",
      "Orthopedics",
      "Hardware",
      "Bone Healing"
    ],
    "tags": [
      "surgery",
      "orthopedics",
      "trauma"
    ]
  },
  {
    "abbr": "SIRS",
    "fullEn": "Systemic Inflammatory Response Syndrome",
    "fullAr": "متلازمة الاستجابة الالتهابية الجهازية",
    "context": "Critical Care / Emergency",
    "definition": "Clinical response to non-specific inflammatory insults defined by ≥2 of: Temp >38°C or <36°C, HR >90 bpm, RR >20/min or PaCO2 <32 mmHg, WBC >12,000 or <4,000/mcL or >10% bands.",
    "definitionAr": "استجابة التهابية جهازية عامة تُشخص بوجود 2 أو أكثر من: حرارة >38 أو <36، نبض >90، تنفس >20، أو تعداد الكريات البيضاء >12000 أو <4000.",
    "wordParts": [
      {
        "part": "systemic",
        "meaning": "affecting whole body",
        "meaningAr": "جهادي أو عام في الجسم"
      }
    ],
    "relatedTerms": [
      "Sepsis",
      "qSOFA",
      "SOFA",
      "Shock",
      "Cytokine Storm"
    ],
    "tags": [
      "critical care",
      "emergency",
      "inflammation"
    ]
  },
  {
    "abbr": "SOFA",
    "fullEn": "Sequential Organ Failure Assessment",
    "fullAr": "التقييم المتسلسل لفشل الأعضاء",
    "context": "Critical Care",
    "definition": "ICU mortality risk score (0-24) evaluating failure across 6 organ systems (respiratory, coagulation, hepatic, cardiovascular, neurological, and renal); an acute increase of ≥2 points identifies sepsis.",
    "definitionAr": "نظام تقييم معتمد بالعناية المركزة (0-24) يرصد درجات فشل 6 أجهزة حيوية؛ ارتفاع النتيجة نقطتين أو أكثر عن خط الأساس يُعرف الإنتان سريرياً.",
    "wordParts": [
      {
        "part": "sequential",
        "meaning": "repeated over serial intervals",
        "meaningAr": "متسلسل زمنياً"
      }
    ],
    "relatedTerms": [
      "qSOFA",
      "Sepsis-3",
      "ICU",
      "Organ Dysfunction",
      "Lactate"
    ],
    "tags": [
      "critical care",
      "scoring",
      "sepsis"
    ]
  },
  {
    "abbr": "qSOFA",
    "fullEn": "quick SOFA Score",
    "fullAr": "مقياس SOFA السريع للإنتان",
    "context": "Critical Care / Emergency",
    "definition": "Bedside clinical screening tool identifying patients with suspected infection at high risk of in-hospital deterioration: RR ≥22, Altered Mentation (GCS <15), Systolic BP ≤100 mmHg (score ≥2 is positive).",
    "definitionAr": "أداة فرز سريرية سريعة تكشف المرضى المعرضين لمخاطر الوفاة من الإنتان خارج العناية: سرعة التنفس ≥22، اضطراب الوعي، والضغط الانقباضي ≤100 (إيجابي إذا ≥2).",
    "wordParts": [
      {
        "part": "quick",
        "meaning": "bedside rapid check without labs",
        "meaningAr": "سريع دون حاجة لفحوص مخبرية"
      }
    ],
    "relatedTerms": [
      "SOFA",
      "Sepsis",
      "SIRS",
      "Shock",
      "Lactate"
    ],
    "tags": [
      "critical care",
      "emergency",
      "screening"
    ]
  },
  {
    "abbr": "MAP",
    "fullEn": "Mean Arterial Pressure",
    "fullAr": "الضغط الشرياني الوسطي",
    "context": "Critical Care / Hemodynamics",
    "definition": "Average perfusion pressure in the arterial tree throughout one cardiac cycle: MAP = DBP + 1/3(SBP - DBP). Target ≥65 mmHg in shock resuscitation for organ perfusion.",
    "definitionAr": "متوسط ضغط التروية الدموية في الشرايين خلال دورة قلبية كاملة؛ يُعد الحفاظ على MAP ≥65 ملم زئبق الهدف الرئيسي لضمان تروية الأعضاء الحيوية في الصدمة.",
    "wordParts": [
      {
        "part": "mean",
        "meaning": "time-weighted average",
        "meaningAr": "متوسط زمني"
      }
    ],
    "relatedTerms": [
      "Blood Pressure",
      "Septic Shock",
      "Norepinephrine",
      "Organ Perfusion"
    ],
    "tags": [
      "critical care",
      "hemodynamics",
      "resuscitation"
    ]
  },
  {
    "abbr": "CVP",
    "fullEn": "Central Venous Pressure",
    "fullAr": "الضغط الوريدي المركزي",
    "context": "Critical Care / Hemodynamics",
    "definition": "Direct hydrostatic pressure measured in the superior vena cava or right atrium via central venous catheter, reflecting right ventricular preload and systemic venous return.",
    "definitionAr": "الضغط المقاس في الوريد الأجوف العلوي أو الأذينة اليمنى عبر القسطرة الوريدية المركزية، ويعكس الحمل القبلي للبطين الأيمن وحجم العود الوريدي.",
    "wordParts": [
      {
        "part": "central",
        "meaning": "great central thoracic vessels",
        "meaningAr": "الأوعية الصدرية الرئيسية"
      }
    ],
    "relatedTerms": [
      "Central Line",
      "Preload",
      "Right Atrial Pressure",
      "Shock"
    ],
    "tags": [
      "critical care",
      "hemodynamics"
    ]
  },
  {
    "abbr": "Sepsis",
    "fullEn": "Sepsis",
    "fullAr": "الإنتان (تعفن الدم)",
    "context": "Infectious Disease / Critical Care",
    "definition": "Life-threatening organ dysfunction caused by a dysregulated host systemic response to infection (identified by an acute increase in SOFA score ≥2).",
    "definitionAr": "خلل وظيفي مهدد للحياة يصيب الأعضاء الحيوية بسبب استجابة مناعية والتهابية شاذة وغير متوازنة للجسم ضد العدوى الجرثومية.",
    "wordParts": [
      {
        "part": "sepsis",
        "meaning": "putrefaction or microbial decay",
        "meaningAr": "تعفن أو فساد ميكروبي"
      }
    ],
    "relatedTerms": [
      "Septic Shock",
      "SOFA",
      "qSOFA",
      "Blood Cultures",
      "Lactate"
    ],
    "tags": [
      "infection",
      "critical care",
      "emergency"
    ]
  },
  {
    "abbr": "Septic Shock",
    "fullEn": "Septic Shock",
    "fullAr": "الصدمة الإنتانية",
    "context": "Infectious Disease / Critical Care",
    "definition": "Subset of sepsis with profound circulatory and cellular/metabolic abnormalities presenting with persistent hypotension requiring vasopressors to maintain MAP ≥65 mmHg and serum lactate >2 mmol/L despite fluid resuscitation.",
    "definitionAr": "درجة قصوى من الإنتان مع انهيار دوراني وأيضي يتطلب رافعات الضغط للحفاظ على MAP ≥65 مع بقاء اللاكتات >2 مليمول/لتر رغم الإنعاش الكافي بالسوائل.",
    "wordParts": [
      {
        "part": "shock",
        "meaning": "state of acute tissue hypoperfusion",
        "meaningAr": "صدمة هبوط تروية الأنسجة"
      }
    ],
    "relatedTerms": [
      "Sepsis",
      "Norepinephrine",
      "Vasopressors",
      "Lactate",
      "Fluid Resuscitation"
    ],
    "tags": [
      "infection",
      "critical care",
      "shock"
    ]
  },
  {
    "abbr": "MRSA",
    "fullEn": "Methicillin-Resistant Staphylococcus Aureus",
    "fullAr": "المكورات العنقودية الذهبية المقاومة للميثيسيلين",
    "context": "Infectious Disease / Microbiology",
    "definition": "Staphylococcus aureus strain resistant to all beta-lactam antibiotics (penicillins, cephalosporins) mediated by mecA gene encoding altered penicillin-binding protein (PBP2a).",
    "definitionAr": "سلالة من بكتيريا العنقوديات الذهبية اكتسبت مقاومة لجميع مضادات البيتالاكتام عبر جين mecA، وتتطلب علاجات نوعية مثل الفانكومايسين أو اللينيزوليد.",
    "wordParts": [
      {
        "part": "staphyle-",
        "meaning": "cluster of grapes",
        "meaningAr": "عنقود عنب"
      },
      {
        "part": "coccus",
        "meaning": "spherical berry bacterium",
        "meaningAr": "بكتيريا كروية"
      }
    ],
    "relatedTerms": [
      "Vancomycin",
      "Linezolid",
      "Daptomycin",
      "MSSA",
      "Nosocomial"
    ],
    "tags": [
      "infection",
      "microbiology",
      "antibiotic-resistance"
    ]
  },
  {
    "abbr": "VAP",
    "fullEn": "Ventilator-Associated Pneumonia",
    "fullAr": "الالتهاب الرئوي المرتبط بالمنفسة الاصطناعية",
    "context": "Critical Care / Infectious Disease",
    "definition": "Nosocomial pulmonary parenchymal infection arising >48 hours after endotracheal intubation and mechanical ventilation, often caused by multidrug-resistant pathogens.",
    "definitionAr": "عدوى رئوية جرثومية تكتسب في العناية المركزة وتحدث بعد مرور أكثر من 48 ساعة على وضع أنبوب التنفس الاصطناعي على المنفسة.",
    "wordParts": [
      {
        "part": "pneumonia",
        "meaning": "lung inflammation from infection",
        "meaningAr": "ذات الرئة أو التهاب رئوي"
      }
    ],
    "relatedTerms": [
      "Intubation",
      "Nosocomial Infection",
      "Pseudomonas",
      "MRSA",
      "ET Tube"
    ],
    "tags": [
      "infection",
      "critical care",
      "nosocomial"
    ]
  },
  {
    "abbr": "UTI",
    "fullEn": "Urinary Tract Infection",
    "fullAr": "إنتان المسالك البولية",
    "context": "Infectious Disease / Urology",
    "definition": "Microbial invasion of urinary epithelium extending from cystitis (bladder) to acute pyelonephritis (kidney), most frequently caused by uropathogenic Escherichia coli.",
    "definitionAr": "عدوى ميكروبية تصيب مجرى البول من المثانة (التهاب مثانة) إلى الكليتين (التهاب الحويضة والكلية)، وأكثر مسبباتها الإشريكية القولونية (E. coli).",
    "wordParts": [
      {
        "part": "urinary",
        "meaning": "urine system",
        "meaningAr": "بولي"
      }
    ],
    "relatedTerms": [
      "Cystitis",
      "Pyelonephritis",
      "E. coli",
      "Dysuria",
      "Urinalysis"
    ],
    "tags": [
      "infection",
      "urology"
    ]
  },
  {
    "abbr": "tachy-",
    "fullEn": "Prefix: Fast / Rapid",
    "fullAr": "بادئة: سريع / متسارع",
    "context": "Medical Terminology",
    "definition": "Prefix indicating abnormally rapid rate or speed (e.g. tachycardia = heart rate >100 bpm, tachypnea = breathing rate >20/min).",
    "definitionAr": "بادئة تشير إلى سرعة غير طبيعية (مثل: tachycardia = تسرع القلب، tachypnea = تسرع التنفس).",
    "wordParts": [
      {
        "part": "tachy-",
        "meaning": "fast, rapid",
        "meaningAr": "سريع"
      }
    ],
    "relatedTerms": [
      "Tachycardia",
      "Tachypnea",
      "Brady-"
    ],
    "tags": [
      "terminology",
      "prefix"
    ]
  },
  {
    "abbr": "brady-",
    "fullEn": "Prefix: Slow",
    "fullAr": "بادئة: بطيء",
    "context": "Medical Terminology",
    "definition": "Prefix indicating abnormally slow rate (e.g. bradycardia = heart rate <60 bpm, bradypnea = slow breathing, bradykinesia = slowed physical movements).",
    "definitionAr": "بادئة تعني بطء غير طبيعي (مثل: bradycardia = بطء القلب، bradypnea = بطء التنفس، bradykinesia = بطء الحركة في باركنسون).",
    "wordParts": [
      {
        "part": "brady-",
        "meaning": "slow",
        "meaningAr": "بطيء"
      }
    ],
    "relatedTerms": [
      "Bradycardia",
      "Bradypnea",
      "Bradykinesia",
      "Tachy-"
    ],
    "tags": [
      "terminology",
      "prefix"
    ]
  },
  {
    "abbr": "hyper-",
    "fullEn": "Prefix: High / Excessive / Above Normal",
    "fullAr": "بادئة: فرط / زيادة / فوق الطبيعي",
    "context": "Medical Terminology",
    "definition": "Prefix denoting excess, exaggeration, or above normal baseline (e.g. hypertension = high blood pressure, hyperglycemia = elevated glucose, hyperkalemia = elevated potassium).",
    "definitionAr": "بادئة تدل على الزيادة أو الارتفاع فوق المستوى الطبيعي (مثل: hypertension = ارتفاع الضغط، hyperglycemia = ارتفاع السكر، hyperkalemia = فرط البوتاسيوم).",
    "wordParts": [
      {
        "part": "hyper-",
        "meaning": "above, over, excessive",
        "meaningAr": "فوق أو مفرط"
      }
    ],
    "relatedTerms": [
      "Hypertension",
      "Hyperglycemia",
      "Hyperkalemia",
      "Hypo-"
    ],
    "tags": [
      "terminology",
      "prefix"
    ]
  },
  {
    "abbr": "hypo-",
    "fullEn": "Prefix: Low / Deficient / Below Normal",
    "fullAr": "بادئة: نقص / هبوط / تحت الطبيعي",
    "context": "Medical Terminology",
    "definition": "Prefix denoting deficiency, reduction, or below normal limits (e.g. hypotension = low blood pressure, hypoglycemia = low glucose, hyponatremia = low sodium).",
    "definitionAr": "بادئة تدل على النقص أو الانخفاض دون المستوى الطبيعي (مثل: hypotension = هبوط الضغط، hypoglycemia = هبوط السكر، hyponatremia = نقص الصوديوم).",
    "wordParts": [
      {
        "part": "hypo-",
        "meaning": "under, below, deficient",
        "meaningAr": "تحت أو ناقص"
      }
    ],
    "relatedTerms": [
      "Hypotension",
      "Hypoglycemia",
      "Hyponatremia",
      "Hyper-"
    ],
    "tags": [
      "terminology",
      "prefix"
    ]
  },
  {
    "abbr": "dys-",
    "fullEn": "Prefix: Painful / Difficult / Abnormal / Disordered",
    "fullAr": "بادئة: عسر / صعوبة / اعتلال أو ألم",
    "context": "Medical Terminology",
    "definition": "Prefix signifying difficult, abnormal, disordered, or painful function (e.g. dyspnea = shortness of breath, dysphagia = difficulty swallowing, dysuria = painful urination).",
    "definitionAr": "بادئة تعني صعوبة أو خللاً أو ألماً في الوظيفة (مثل: dyspnea = عسر التنفس، dysphagia = صعوبة البلع، dysuria = عسر أو حرقة التبول).",
    "wordParts": [
      {
        "part": "dys-",
        "meaning": "bad, difficult, disordered",
        "meaningAr": "عسر أو صعوبة"
      }
    ],
    "relatedTerms": [
      "Dyspnea",
      "Dysphagia",
      "Dysuria",
      "Dyslipidemia"
    ],
    "tags": [
      "terminology",
      "prefix"
    ]
  },
  {
    "abbr": "poly-",
    "fullEn": "Prefix: Many / Excessive / Multi-",
    "fullAr": "بادئة: متعدد / كثير / مفرط",
    "context": "Medical Terminology",
    "definition": "Prefix indicating multiplicity, abundant amount, or excess (e.g. polyuria = excessive urination, polydipsia = excessive thirst, polyneuropathy = disease of multiple nerves).",
    "definitionAr": "بادئة تعني الكثرة أو التعدد أو الإفراط (مثل: polyuria = بوال مفرط، polydipsia = عطاش مفرط، polyneuropathy = اعتلال أعصاب متعدد).",
    "wordParts": [
      {
        "part": "poly-",
        "meaning": "many, much",
        "meaningAr": "متعدد أو كثير"
      }
    ],
    "relatedTerms": [
      "Polyuria",
      "Polydipsia",
      "Polycythemia",
      "Oligo-"
    ],
    "tags": [
      "terminology",
      "prefix"
    ]
  },
  {
    "abbr": "oligo-",
    "fullEn": "Prefix: Few / Scanty / Little",
    "fullAr": "بادئة: قلة / شح / نقص الكمية",
    "context": "Medical Terminology",
    "definition": "Prefix indicating deficiency, scarcity, or small quantity (e.g. oliguria = low urine output <400 mL/day, oligomenorrhea = infrequent menstrual periods).",
    "definitionAr": "بادئة تدل على القلة أو الشح في الكمية (مثل: oliguria = شح البول <400 مل/يوم، oligomenorrhea = شح وتأخر الطمث).",
    "wordParts": [
      {
        "part": "oligo-",
        "meaning": "few, scanty",
        "meaningAr": "قليل أو شحيح"
      }
    ],
    "relatedTerms": [
      "Oliguria",
      "Oligomenorrhea",
      "Anuria",
      "Poly-"
    ],
    "tags": [
      "terminology",
      "prefix"
    ]
  },
  {
    "abbr": "-itis",
    "fullEn": "Suffix: Inflammation",
    "fullAr": "لاحقة: التهاب",
    "context": "Medical Terminology",
    "definition": "Suffix denoting inflammatory changes in an anatomical tissue or organ (e.g. appendicitis = appendix inflammation, pancreatitis = pancreas inflammation, hepatitis = liver inflammation).",
    "definitionAr": "لاحقة تدل على حدوث التهاب في عضو أو نسيج معين (مثل: appendicitis = التهاب الزائدة، pancreatitis = التهاب البنكرياس، hepatitis = التهاب الكبد).",
    "wordParts": [
      {
        "part": "-itis",
        "meaning": "inflammation",
        "meaningAr": "التهاب"
      }
    ],
    "relatedTerms": [
      "Appendicitis",
      "Pancreatitis",
      "Hepatitis",
      "Pericarditis"
    ],
    "tags": [
      "terminology",
      "suffix"
    ]
  },
  {
    "abbr": "-oma",
    "fullEn": "Suffix: Tumor / Mass / Neoplasm",
    "fullAr": "لاحقة: ورم / كتلة نسيجية",
    "context": "Medical Terminology / Oncology",
    "definition": "Suffix designating a tumor, mass, or neoplasm (benign like adenoma, fibroma, or malignant like carcinoma, sarcoma, melanoma, lymphoma).",
    "definitionAr": "لاحقة تشير إلى وجود ورم أو كتلة نسيجية، سواء كانت حميدة (مثل adenoma) أو خبيثة (مثل carcinoma و melanoma و lymphoma).",
    "wordParts": [
      {
        "part": "-oma",
        "meaning": "tumor, mass, swelling",
        "meaningAr": "ورم أو كتلة"
      }
    ],
    "relatedTerms": [
      "Carcinoma",
      "Sarcoma",
      "Lymphoma",
      "Melanoma",
      "Hematoma"
    ],
    "tags": [
      "terminology",
      "suffix",
      "oncology"
    ]
  },
  {
    "abbr": "-ectomy",
    "fullEn": "Suffix: Surgical Excision / Removal",
    "fullAr": "لاحقة: استئصال جراحي",
    "context": "Medical Terminology / Surgery",
    "definition": "Suffix signifying operative surgical removal or total excision of a body part (e.g. appendectomy = removal of appendix, mastectomy = removal of breast tissue).",
    "definitionAr": "لاحقة تدل على استئصال جراحي كامل لعضو أو نسيج من الجسم (مثل: appendectomy = استئصال الزائدة، mastectomy = استئصال الثدي).",
    "wordParts": [
      {
        "part": "-ectomy",
        "meaning": "cutting out, excision",
        "meaningAr": "استئصال جراحي"
      }
    ],
    "relatedTerms": [
      "Appendectomy",
      "Cholecystectomy",
      "Mastectomy",
      "Nephrectomy"
    ],
    "tags": [
      "terminology",
      "suffix",
      "surgery"
    ]
  },
  {
    "abbr": "-ostomy",
    "fullEn": "Suffix: Surgical Creation of an Opening",
    "fullAr": "لاحقة: مفاغرة / إنشاء فغرة جراحية",
    "context": "Medical Terminology / Surgery",
    "definition": "Suffix designating surgical formation of an artificial opening or stoma between an internal organ and the body surface or another organ (e.g. colostomy, tracheostomy).",
    "definitionAr": "لاحقة تشير إلى فتحة أو فغرة اصطناعية جراحية تصل بين عضو داخلي وسطح الجسم (مثل: colostomy = فغرة القولون، tracheostomy = فغر الرغامي).",
    "wordParts": [
      {
        "part": "-ostomy",
        "meaning": "creation of an artificial mouth/opening",
        "meaningAr": "إنشاء فتحة أو مفاغرة"
      }
    ],
    "relatedTerms": [
      "Colostomy",
      "Tracheostomy",
      "Ileostomy",
      "-otomy"
    ],
    "tags": [
      "terminology",
      "suffix",
      "surgery"
    ]
  },
  {
    "abbr": "-otomy",
    "fullEn": "Suffix: Surgical Incision / Cutting Into",
    "fullAr": "لاحقة: شق جراحي / فتح نسيجي",
    "context": "Medical Terminology / Surgery",
    "definition": "Suffix signifying cutting into or incising an organ or tissue (e.g. laparotomy = surgical opening of abdominal wall, thoracotomy = surgical entry through chest wall).",
    "definitionAr": "لاحقة تدل على إجراء شق جراحي في عضو أو تجويف للدخول إليه دون استئصاله (مثل: laparotomy = فتح البطن الاستقصائي، thoracotomy = شق الصدر).",
    "wordParts": [
      {
        "part": "-otomy",
        "meaning": "surgical incision",
        "meaningAr": "شق جراحي"
      }
    ],
    "relatedTerms": [
      "Laparotomy",
      "Thoracotomy",
      "Craniotomy",
      "-ectomy"
    ],
    "tags": [
      "terminology",
      "suffix",
      "surgery"
    ]
  },
  {
    "abbr": "-scopy",
    "fullEn": "Suffix: Visual Examination with an Instrument",
    "fullAr": "لاحقة: تنظير أو فحص بصري بالمنظار",
    "context": "Medical Terminology / Diagnostic",
    "definition": "Suffix indicating visual endoscopic examination using an illuminated optical instrument (e.g. colonoscopy = endoscopic evaluation of large intestine, bronchoscopy = tracheobronchial inspection).",
    "definitionAr": "لاحقة تدل على إجراء فحص بصري داخلي باستخدام منظار ضوئي (مثل: colonoscopy = تنظير القولون، bronchoscopy = تنظير القصبات الهوائية).",
    "wordParts": [
      {
        "part": "-scopy",
        "meaning": "visual observation",
        "meaningAr": "تنظير أو فحص بصري"
      }
    ],
    "relatedTerms": [
      "Colonoscopy",
      "Endoscopy",
      "Bronchoscopy",
      "Laparoscopy"
    ],
    "tags": [
      "terminology",
      "suffix",
      "diagnostic"
    ]
  },
  {
    "abbr": "-penia",
    "fullEn": "Suffix: Deficiency / Reduction / Low Count",
    "fullAr": "لاحقة: نقص / قلة في التعداد",
    "context": "Medical Terminology / Hematology",
    "definition": "Suffix indicating abnormal decrease or subnormal count of cellular or biological components (e.g. thrombocytopenia = low platelets, leukopenia = low white blood cells, neutropenia = low neutrophils).",
    "definitionAr": "لاحقة تدل على نقص أو قلة في تعداد الخلايا أو المكونات (مثل: thrombocytopenia = نقص الصفائح، leukopenia = نقص الكريات البيضاء، neutropenia = قلة العدلات).",
    "wordParts": [
      {
        "part": "-penia",
        "meaning": "poverty, lack, deficiency",
        "meaningAr": "نقص أو قلة"
      }
    ],
    "relatedTerms": [
      "Thrombocytopenia",
      "Leukopenia",
      "Neutropenia",
      "Osteopenia"
    ],
    "tags": [
      "terminology",
      "suffix",
      "hematology"
    ]
  }
];

/**
 * Search the medical terms dictionary with relevance-ranked results
 * Prioritizes exact abbreviation match, followed by prefix match, English/Arabic names, tags, and definitions.
 * @param {string} query
 * @returns {Array<Object>}
 */
function mqSearchTerms(query) {
  if (!query || typeof query !== 'string') return [];
  var raw = query.trim();
  if (!raw) return [];
  var q = raw.toLowerCase();
  var qUpper = raw.toUpperCase();

  var exactAbbr = [];
  var startsWithAbbr = [];
  var containsAbbrOrName = [];
  var otherMatches = [];

  MQ_MED_TERMS.forEach(function(item) {
    var abbr = (item.abbr || '').toUpperCase();
    var fullEn = (item.fullEn || '').toLowerCase();
    var fullAr = (item.fullAr || '');
    var defEn = (item.definition || '').toLowerCase();
    var defAr = (item.definitionAr || '');
    var context = (item.context || '').toLowerCase();

    var hasRelated = item.relatedTerms && item.relatedTerms.some(function(r) {
      return r.toUpperCase() === qUpper || r.toLowerCase().indexOf(q) !== -1;
    });
    var hasTag = item.tags && item.tags.some(function(t) {
      return t.toLowerCase() === q || t.toLowerCase().indexOf(q) !== -1;
    });

    if (abbr === qUpper) {
      exactAbbr.push(item);
    } else if (abbr.indexOf(qUpper) === 0) {
      startsWithAbbr.push(item);
    } else if (abbr.indexOf(qUpper) !== -1 || fullEn.indexOf(q) !== -1 || fullAr.indexOf(raw) !== -1) {
      containsAbbrOrName.push(item);
    } else if (hasRelated || hasTag || context.indexOf(q) !== -1 || defEn.indexOf(q) !== -1 || defAr.indexOf(raw) !== -1) {
      otherMatches.push(item);
    }
  });

  return exactAbbr.concat(startsWithAbbr, containsAbbrOrName, otherMatches);
}


/* ==========================================================================
   SECTION 3: Language & i18n Utilities (MQ_LANG, mqT, mqSetLang, mqGetLang)
   ========================================================================== */

var MQ_LANG = {
  "ar": {
    "labsBtn": "القيم المعملية",
    "calcBtn": "الحاسبات الطبية",
    "termsBtn": "المصطلحات",
    "mnemonicBtn": "مختصرات الحفظ",
    "toggleTheme": "☀️/🌙",
    "search": "ابحث...",
    "noResults": "لا توجد نتائج",
    "loading": "جاري التحميل...",
    "close": "✖ إغلاق",
    "copy": "نسخ",
    "result": "النتيجة",
    "calculate": "احسب",
    "reset": "إعادة",
    "catCbc": "صورة الدم الكاملة",
    "catCoag": "دراسات التخثر",
    "catIron": "دراسات الحديد",
    "catBmp": "الكيمياء الأساسية",
    "catCmp": "الكيمياء الشاملة",
    "catLft": "وظائف الكبد",
    "catLipids": "الدهون",
    "catThyroid": "الغدة الدرقية",
    "catCardiac": "علامات القلب",
    "catDiabetes": "السكر والسكري",
    "catRenal": "وظائف الكلى",
    "catUa": "تحليل البول",
    "catHormones": "الهرمونات التناسلية",
    "catAdrenal": "الغدة الكظرية",
    "catPituitary": "الغدة النخامية",
    "catVitamins": "الفيتامينات",
    "catMinerals": "المعادن والعناصر النادرة",
    "catTumor": "علامات الأورام",
    "catAutoimmune": "مؤشرات المناعة الذاتية",
    "catInflammatory": "مؤشرات الالتهاب",
    "catCsf": "سائل النخاع الشوكي",
    "catPleural": "سائل الجنب",
    "catAscites": "سائل البطن (الاستسقاء)",
    "catSynovial": "سائل المفاصل",
    "catStool": "فحوصات البراز",
    "catSemen": "تحليل السائل المنوي",
    "catTdm": "مستويات الأدوية (TDM)",
    "catInfectious": "الأمراض المعدية",
    "catAllergy": "الحساسية والمناعة",
    "catBone": "استقلاب العظام",
    "catPancreatic": "وظائف البنكرياس",
    "catGenetics": "الجينات والبيولوجيا الجزيئية",
    "catPregnancy": "قيم الحمل",
    "catAbg": "غازات الدم الشرياني",
    "catPediatric": "القيم المرجعية للأطفال",
    "calcBmi": "مؤشر كتلة الجسم BMI",
    "calcGfr": "معدل الترشيح الكبيبي GFR",
    "calcCa": "الكالسيوم المصحح",
    "calcAg": "فجوة الأنيون",
    "calcDelta": "نسبة دلتا-دلتا",
    "calcNa": "الصوديوم المصحح",
    "calcOsm": "الأسمولالية المحسوبة",
    "calcOsmGap": "فجوة الأسمولالية",
    "calcFena": "الإطراح الكسري للصوديوم FENa",
    "calcMeld": "درجة MELD",
    "calcChildPugh": "تصنيف Child-Pugh",
    "calcWellsDvt": "Wells DVT Score",
    "calcWellsPe": "Wells PE Score",
    "calcCurb65": "CURB-65 (الالتهاب الرئوي)",
    "calcQsofa": "qSOFA (الإنتان)",
    "calcCha2": "CHA₂DS₂-VASc (الرجفان الأذيني)",
    "calcHasbled": "HAS-BLED (خطر النزيف)",
    "calcChads2": "CHADS₂",
    "calcKillip": "Killip Classification",
    "calcGcs": "مقياس غلاسكو GCS",
    "calcApache": "APACHE II",
    "calcMap": "الضغط الشرياني الوسطي MAP",
    "calcWinters": "معادلة Winters",
    "calcAaGrad": "فجوة A-a للأكسجين",
    "calcNihss": "تقييم السكتة NIHSS",
    "calcAbcd2": "خطر TIA — ABCD2",
    "calcIbw": "الوزن المثالي IBW",
    "calcBsa": "مساحة سطح الجسم BSA",
    "calcPp": "ضغط النبض Pulse Pressure",
    "calcCo2Venous": "محتوى ثاني أكسيد الكربون الوريدي",
    "calcPedBmi": "كتلة الجسم للأطفال والمراهقين",
    "calcPedBp": "الضغط المرجعي للأطفال",
    "calcEhrlich": "مقياس إيرلخ للرعاية الحرجة",
    "calcCkdStages": "مراحل مرض الكلى المزمن CKD",
    "calcKcal": "الاحتياج اليومي من السعرات Kcal"
  },
  "en": {
    "labsBtn": "Lab Values",
    "calcBtn": "Calculators",
    "termsBtn": "Med Terms",
    "mnemonicBtn": "Mnemonics",
    "toggleTheme": "☀️/🌙",
    "search": "Search...",
    "noResults": "No results found",
    "loading": "Loading...",
    "close": "✖ Close",
    "copy": "Copy",
    "result": "Result",
    "calculate": "Calculate",
    "reset": "Reset",
    "catCbc": "Complete Blood Count (CBC)",
    "catCoag": "Coagulation Studies",
    "catIron": "Iron Studies",
    "catBmp": "Basic Metabolic Panel (BMP)",
    "catCmp": "Comprehensive Metabolic Panel (CMP)",
    "catLft": "Liver Function Tests (LFT)",
    "catLipids": "Lipid Panel",
    "catThyroid": "Thyroid Function Tests",
    "catCardiac": "Cardiac Biomarkers",
    "catDiabetes": "Diabetes & Glucose Metabolism",
    "catRenal": "Renal Function Panel",
    "catUa": "Urinalysis (UA)",
    "catHormones": "Reproductive Hormones",
    "catAdrenal": "Adrenal Function",
    "catPituitary": "Pituitary Hormones",
    "catVitamins": "Vitamins Profile",
    "catMinerals": "Minerals & Trace Elements",
    "catTumor": "Tumor Markers",
    "catAutoimmune": "Autoimmune & Rheumatology",
    "catInflammatory": "Inflammatory Markers",
    "catCsf": "Cerebrospinal Fluid (CSF)",
    "catPleural": "Pleural Fluid Analysis",
    "catAscites": "Ascitic Fluid Analysis",
    "catSynovial": "Synovial Fluid Analysis",
    "catStool": "Stool Tests & Occult Blood",
    "catSemen": "Semen Analysis",
    "catTdm": "Therapeutic Drug Monitoring (TDM)",
    "catInfectious": "Infectious Disease Serology",
    "catAllergy": "Allergy & Immunology",
    "catBone": "Bone Metabolism Markers",
    "catPancreatic": "Pancreatic Enzymes",
    "catGenetics": "Genetics & Molecular Biology",
    "catPregnancy": "Maternal & Pregnancy Values",
    "catAbg": "Arterial Blood Gas (ABG)",
    "catPediatric": "Pediatric Reference Ranges",
    "calcBmi": "Body Mass Index (BMI)",
    "calcGfr": "Glomerular Filtration Rate (GFR)",
    "calcCa": "Corrected Calcium",
    "calcAg": "Serum Anion Gap",
    "calcDelta": "Delta-Delta Ratio",
    "calcNa": "Corrected Sodium in Hyperglycemia",
    "calcOsm": "Calculated Serum Osmolality",
    "calcOsmGap": "Serum Osmolar Gap",
    "calcFena": "Fractional Excretion of Sodium (FENa)",
    "calcMeld": "MELD Score (End-Stage Liver Disease)",
    "calcChildPugh": "Child-Pugh Classification",
    "calcWellsDvt": "Wells Score for DVT",
    "calcWellsPe": "Wells Score for PE",
    "calcCurb65": "CURB-65 Pneumonia Severity",
    "calcQsofa": "quick SOFA (qSOFA) Sepsis Screening",
    "calcCha2": "CHA₂DS₂-VASc Stroke Risk in AF",
    "calcHasbled": "HAS-BLED Bleeding Risk",
    "calcChads2": "CHADS₂ Stroke Risk",
    "calcKillip": "Killip Classification in AMI",
    "calcGcs": "Glasgow Coma Scale (GCS)",
    "calcApache": "APACHE II ICU Severity",
    "calcMap": "Mean Arterial Pressure (MAP)",
    "calcWinters": "Winter's Formula for Expected PaCO₂",
    "calcAaGrad": "A-a Oxygen Gradient",
    "calcNihss": "NIH Stroke Scale (NIHSS)",
    "calcAbcd2": "ABCD² TIA Stroke Risk",
    "calcIbw": "Ideal Body Weight (IBW)",
    "calcBsa": "Body Surface Area (BSA)",
    "calcPp": "Pulse Pressure",
    "calcCo2Venous": "Venous CO₂ Content",
    "calcPedBmi": "Pediatric BMI Percentiles",
    "calcPedBp": "Pediatric Blood Pressure Reference",
    "calcEhrlich": "Ehrlich ICU Deterioration Score",
    "calcCkdStages": "CKD Stages by eGFR",
    "calcKcal": "Daily Caloric Needs (TDEE / BMR)"
  }
};

/**
 * Translate a key based on active language in localStorage (default 'ar')
 * @param {string} key
 * @returns {string}
 */
function mqT(key) {
  var lang = 'ar';
  try {
    if (typeof localStorage !== 'undefined') {
      lang = localStorage.getItem('mq_lang') || 'ar';
    }
  } catch (e) {
    lang = 'ar';
  }
  return (MQ_LANG[lang] && MQ_LANG[lang][key]) || (MQ_LANG['ar'] && MQ_LANG['ar'][key]) || key;
}

/**
 * Set application language ('ar' or 'en') and dispatch change event
 * @param {string} lang - 'ar' | 'en'
 */
function mqSetLang(lang) {
  var validLang = (lang === 'en') ? 'en' : 'ar';
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('mq_lang', validLang);
    }
  } catch (e) {}

  if (typeof document !== 'undefined') {
    if (document.documentElement) {
      document.documentElement.lang = validLang;
      document.documentElement.dir = (validLang === 'ar') ? 'rtl' : 'ltr';
    }
    document.dispatchEvent(new CustomEvent('mq-lang-change', { detail: { lang: validLang } }));
  }
}

/**
 * Get current application language ('ar' or 'en')
 * @returns {string}
 */
function mqGetLang() {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('mq_lang') || 'ar';
    }
  } catch (e) {}
  return 'ar';
}

/* ==========================================================================
   WINDOW EXPORTS & BROWSER GLOBAL BINDINGS
   ========================================================================== */

if (typeof window !== 'undefined') {
  // Calculators
  window.mqBmi = mqBmi;
  window.mqCockcroftGault = mqCockcroftGault;
  window.mqCkdEpi2021 = mqCkdEpi2021;
  window.mqCorrectedCalcium = mqCorrectedCalcium;
  window.mqAnionGap = mqAnionGap;
  window.mqDeltaDelta = mqDeltaDelta;
  window.mqCorrectedSodium = mqCorrectedSodium;
  window.mqSerumOsmolality = mqSerumOsmolality;
  window.mqOsmolarGap = mqOsmolarGap;
  window.mqFena = mqFena;
  window.mqMeld = mqMeld;
  window.mqChildPugh = mqChildPugh;
  window.mqWellsDvt = mqWellsDvt;
  window.mqWellsPe = mqWellsPe;
  window.mqCurb65 = mqCurb65;
  window.mqQsofa = mqQsofa;
  window.mqCha2ds2Vasc = mqCha2ds2Vasc;
  window.mqHasBled = mqHasBled;
  window.mqChads2 = mqChads2;
  window.mqKillip = mqKillip;
  window.mqGcs = mqGcs;
  window.mqApache2 = mqApache2;
  window.mqConvertUnit = mqConvertUnit;
  window.mqIbw = mqIbw;
  window.mqBsa = mqBsa;
  window.mqMap = mqMap;
  window.mqPulsePressure = mqPulsePressure;
  window.mqCarbonDioxideContentVenus = mqCarbonDioxideContentVenus;
  window.mqExpectedPaco2 = mqExpectedPaco2;
  window.mqAaGradient = mqAaGradient;
  window.mqBmi_children = mqBmi_children;
  window.mqPediatricBp = mqPediatricBp;
  window.mqEhrlichScore = mqEhrlichScore;
  window.mqNihss_interpretation = mqNihss_interpretation;
  window.mqAbcd2Score = mqAbcd2Score;
  window.mqCkd_stages = mqCkd_stages;
  window.mqDailyKcal = mqDailyKcal;

  // Med Terms
  window.MQ_MED_TERMS = MQ_MED_TERMS;
  window.mqSearchTerms = mqSearchTerms;

  // Language & i18n
  window.MQ_LANG = MQ_LANG;
  window.mqT = mqT;
  window.mqSetLang = mqSetLang;
  window.mqGetLang = mqGetLang;
}
