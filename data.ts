import { Question, QuestionType, Topic, GlossaryTerm } from './types';

export const GLOSSARY: GlossaryTerm[] = [
  // --- Foundations / Basics ---
  {
    id: 'macronutrient',
    term: 'Macronutrient',
    definition: 'Nutrients required in large amounts by the body for energy and structure: Carbohydrates, Proteins, and Fats.',
    example: 'Endurance athletes require high carbohydrate macronutrient intake.',
    category: 'Basics',
    relatedTopicIds: ['protein-metabolism', 'dietary-strategies']
  },
  {
    id: 'energy-balance',
    term: 'Energy Balance',
    definition: 'The relationship between Energy In (food/drink) and Energy Out (BMR + Activity).',
    example: 'To lose weight, an athlete must be in a negative energy balance (deficit).',
    analogy: 'Like a bank account: if you spend more than you earn, your savings (body fat) go down.',
    category: 'Basics',
    relatedTopicIds: ['protein-metabolism']
  },
  {
    id: 'atp-pcr',
    term: 'ATP-PCr System',
    definition: 'The immediate energy system used for high-intensity bursts (0-10 seconds) using stored ATP and Phosphocreatine.',
    example: 'A 100m sprinter relies almost entirely on the ATP-PCr system.',
    category: 'Energy Systems',
    relatedTopicIds: []
  },
  
  // --- Energy Systems & Units ---
  {
    id: 'atp',
    term: 'ATP (Adenosine Triphosphate)',
    definition: 'The "energy currency" of the cell. It provides the energy for muscle contraction, nerve impulse transmission, and chemical synthesis.',
    example: 'Muscle stores of ATP are very small and must be resynthesized continuously during exercise.',
    analogy: 'Think of ATP like cash in your wallet. You need it to buy things immediately, but you only carry a little bit and need to go to the bank (energy systems) to get more.',
    category: 'Energy Systems',
    relatedTopicIds: ['metabolic-adaptations']
  },
  {
    id: 'vo2max',
    term: 'VO2max',
    definition: 'The maximum rate at which the heart, lungs, and muscles can effectively use oxygen during exercise. It is a measure of aerobic capacity.',
    example: 'Training intensities are often prescribed as a percentage of VO2max (e.g., cycling at 70% VO2max).',
    category: 'Physiology',
    relatedTopicIds: ['metabolic-adaptations', 'dietary-strategies']
  },
  {
    id: 'g-per-kg',
    term: 'g/kg/day (Grams per Kilogram)',
    definition: 'A relative unit of measurement used to prescribe nutrient intake based on an individual\'s body mass.',
    example: 'An 80kg athlete aiming for 1.5g/kg of protein would eat 120g of protein per day.',
    category: 'Units',
    relatedTopicIds: ['protein-metabolism']
  },
  
  // --- Metabolism & Molecular Biology ---
  {
    id: 'ampk',
    term: 'AMPK',
    definition: 'AMP-activated protein kinase. A cellular energy sensor that switches on catabolic pathways (like fat oxidation) to generate ATP when energy status is low.',
    example: 'Training with low glycogen increases AMPK activity, which signals the muscle to build more mitochondria.',
    analogy: 'AMPK is like a "low battery" warning light that automatically turns on power-saving mode and triggers charging.',
    category: 'Molecular Biology',
    relatedTopicIds: ['metabolic-adaptations']
  },
  {
    id: 'ppars',
    term: 'PPARs',
    definition: 'Peroxisome Proliferator-Activated Receptors. Transcription factors that regulate the expression of genes involved in lipid (fat) metabolism.',
    example: 'PPAR-delta helps muscle cells switch to burning more fat during endurance exercise.',
    category: 'Molecular Biology',
    relatedTopicIds: ['molecular-biology']
  },
  {
    id: 'citrate-synthase',
    term: 'Citrate Synthase',
    definition: 'A key enzyme in the Krebs (TCA) cycle. Its activity level is a marker for mitochondrial density.',
    example: 'Increased citrate synthase activity after a training block indicates improved aerobic fitness.',
    category: 'Metabolism',
    relatedTopicIds: ['molecular-biology', 'metabolic-adaptations']
  },
  {
    id: 'pdh',
    term: 'Pyruvate Dehydrogenase (PDH)',
    definition: 'An enzyme complex that controls the entry of carbohydrate-derived pyruvate into the mitochondria to be burned for energy.',
    example: 'High-fat diets can reduce PDH activity, making it harder to sprint or climb hills using carbohydrates.',
    analogy: 'PDH is the "gatekeeper" that allows sugar to enter the energy factory. If the gate is rusty (downregulated), sugar can\'t get in.',
    category: 'Metabolism',
    relatedTopicIds: ['dietary-strategies']
  },
  {
    id: 'mtorc1',
    term: 'mTORC1',
    definition: 'Mammalian Target of Rapamycin Complex 1. A master regulator of protein synthesis and cell growth.',
    example: 'Leucine activates mTORC1, starting the process of muscle repair after lifting weights.',
    category: 'Molecular Biology',
    relatedTopicIds: ['protein-metabolism']
  },

  // --- Nutrition ---
  {
    id: 'glycogen',
    term: 'Glycogen',
    definition: 'The stored form of carbohydrate in the liver and muscles.',
    example: '"Train Low" involves exercising when muscle glycogen stores are intentionally depleted.',
    analogy: 'Glycogen is like the fuel tank in a car. You fill it up at a gas station (eating carbs) and drain it while driving (exercise).',
    category: 'Nutrition',
    relatedTopicIds: ['metabolic-adaptations', 'dietary-strategies']
  },
  {
    id: 'ketosis',
    term: 'Ketosis',
    definition: 'A metabolic state where the body produces ketone bodies from fat to use as fuel, usually occurring when carbohydrate intake is extremely low (<50g/day).',
    example: 'Athletes on a ketogenic diet use ketones for brain fuel since glucose is scarce.',
    category: 'Nutrition',
    relatedTopicIds: ['dietary-strategies']
  },
  {
    id: 'leucine',
    term: 'Leucine',
    definition: 'An essential branched-chain amino acid (BCAA) that acts as a primary trigger for muscle protein synthesis.',
    example: 'Whey protein is effective because it is naturally high in leucine.',
    analogy: 'Leucine is like the ignition key for the muscle-building engine. You need other amino acids (fuel) too, but leucine starts the car.',
    category: 'Nutrition',
    relatedTopicIds: ['protein-metabolism']
  },
  {
    id: 'immunodepression',
    term: 'Immunodepression',
    definition: 'A temporary reduction in immune system function, often caused by heavy training loads combined with low carbohydrate availability.',
    example: 'Training "low" too often can lead to immunodepression and increased risk of upper respiratory tract infections.',
    category: 'Physiology',
    relatedTopicIds: ['metabolic-adaptations']
  }
];

export const TOPICS: Topic[] = [
  {
    id: 'metabolic-adaptations',
    title: 'Metabolic Adaptations to Training States',
    description: 'Understand how manipulating glycogen availability ("Train Low") and fasting affects cell signaling and performance.',
    learningObjectives: [
      'Explain the signaling response (AMPK, p38 MAPK) to low glycogen training.',
      'Differentiate between "Train Low" and "Fasted Training".',
      'Assess risks like immunodepression and overreaching.'
    ],
    keyPoints: [
      'Low glycogen increases AMPK and p38 MAPK activity.',
      'Hansen et al. (2005) showed "Train Low" improved endurance in untrained subjects.',
      'Yeo et al. (2008) showed metabolic changes but no performance benefit in elites.',
      'Risks include reduced training intensity and immunodepression.',
      'Fasted training mainly increases fat oxidation during the session, not necessarily performance.'
    ],
    quickSummary: [
      '<strong>The Core Concept:</strong> Starting exercise with low muscle glycogen acts as a stronger stress signal than exercise with high glycogen.',
      '<strong>Key Signals:</strong> Low glycogen amplifies <em>AMPK</em> and <em>p38 MAPK</em>, which turn on genes for mitochondrial biogenesis.',
      '<strong>Train Low Strategies:</strong> include twice-a-day training (second session is low), fasted training, or sleep-low/train-low.',
      '<strong>Outcomes:</strong> consistently shows increased oxidative enzymes (like Citrate Synthase), but <em>performance benefits</em> in elite athletes are inconsistent.',
      '<strong>The Trade-off:</strong> Training low is harder. It can reduce power output, increase perceived effort, and risk illness.'
    ],
    fullNotes: `
      <h3>Glycogen as a Regulator</h3>
      <p>Muscle glycogen is not just a fuel tank; it acts as a cellular regulator. When glycogen is low, the muscle cell senses an "energy crisis".</p>
      <ul>
        <li><strong>AMPK (AMP-activated protein kinase):</strong> This sensor becomes more active when glycogen is low. It contains a glycogen-binding domain.</li>
        <li><strong>p38 MAPK:</strong> Another signaling protein activated by stress and low fuel availability.</li>
      </ul>
      <p>Together, these signals enter the cell nucleus and increase the transcription of genes (like <em>PGC-1α</em>) that build mitochondria and improve fat metabolism.</p>

      <h3>"Train Low, Compete High" Studies</h3>
      <p><strong>Hansen et al. (2005):</strong> This landmark study used untrained subjects kicking one leg. The leg that trained with low glycogen (twice every second day) improved endurance capacity far more than the leg that trained daily with high glycogen.</p>
      <p><strong>Yeo et al. (2008):</strong> This study looked at trained cyclists. While the "low" group had higher levels of fat-burning enzymes (like beta-HAD), their time-trial performance <em>did not improve</em> more than the control group. This suggests that metabolic changes don't always equal faster racing.</p>

      <h3>Fasted Training vs. Low Glycogen</h3>
      <p><strong>Fasted Training:</strong> Usually implies an overnight fast. Liver glycogen is low, but muscle glycogen might still be high. It increases fat oxidation during the specific exercise bout because insulin is low.</p>
      <p><strong>Low Glycogen Training:</strong> Specifically requires depleting muscle glycogen (e.g., via a prior workout). This is a much more potent signal for adaptation.</p>

      <h3>Practical Risks</h3>
      <p>Training "low" is not a magic bullet. If done too often:</p>
      <ol>
        <li><strong>Intensity drops:</strong> You cannot sprint or hit high power outputs without glycogen.</li>
        <li><strong>Immunity drops:</strong> Carbohydrate restriction increases stress hormones (cortisol), leading to immunodepression.</li>
        <li><strong>Muscle loss:</strong> Low energy availability can increase muscle protein breakdown.</li>
      </ol>
    `
  },
  {
    id: 'molecular-biology',
    title: 'Molecular Biology & Cellular Metabolism',
    description: 'The key enzymes and transcription factors (PPARs) that drive the endurance phenotype.',
    learningObjectives: [
      'Describe the role of PPARs as transcription factors.',
      'Identify key enzymes: Citrate Synthase (CS) and Pyruvate Dehydrogenase (PDH).',
      'Explain mitochondrial biogenesis.'
    ],
    keyPoints: [
      'PPARs regulate lipid metabolism genes.',
      'PPAR-delta overexpression creates an endurance phenotype.',
      'Citrate Synthase is the marker for mitochondrial volume.',
      'PDH is the gatekeeper for carbohydrate oxidation.'
    ],
    quickSummary: [
      '<strong>Transcription Factors:</strong> Proteins like PPARs bind to DNA to turn genes on or off. They dictate the "type" of muscle cell (e.g., endurance vs. sprint).',
      '<strong>PPAR-delta:</strong> Known as the "endurance" receptor. Activating it increases fat burning enzymes. In animal studies, it massively improved endurance even without training.',
      '<strong>Citrate Synthase (CS):</strong> The first enzyme in the Krebs Cycle. Scientists measure this to see if your mitochondria have grown (biogenesis).',
      '<strong>Pyruvate Dehydrogenase (PDH):</strong> The enzyme that converts Pyruvate → Acetyl-CoA. It is essential for burning carbs. High-fat diets make this enzyme less active.'
    ],
    fullNotes: `
      <h3>Nuclear Receptors: The Managers of Adaptation</h3>
      <p>Adaptation isn't random; it's controlled by transcription factors.</p>
      <h4>PPARs (Peroxisome Proliferator-Activated Receptors)</h4>
      <p>These are nuclear receptors that specifically regulate fat metabolism.</p>
      <ul>
        <li><strong>PPAR-alpha:</strong> Mainly in the liver and skeletal muscle, drives fatty acid oxidation.</li>
        <li><strong>PPAR-delta:</strong> Crucial for skeletal muscle endurance. Research shows that activating PPAR-delta can mimic the effects of endurance training ("exercise in a pill").</li>
      </ul>

      <h3>Key Enzymes to Know</h3>
      <p>Enzymes control the rate of metabolic pathways.</p>
      <div class="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 my-4">
        <strong>Citrate Synthase (CS):</strong> Found in the mitochondria. More CS activity = More Mitochondria = Better Aerobic Fitness.
      </div>
      <div class="bg-amber-50 p-4 rounded-md border-l-4 border-amber-500 my-4">
        <strong>Pyruvate Dehydrogenase (PDH):</strong> The bridge between Glycolysis (carbs) and the Krebs Cycle. If PDH is inactive (e.g., during a high-fat diet), you become "metabolically inflexible" and cannot easily switch to burning carbs.
      </div>
    `
  },
  {
    id: 'protein-metabolism',
    title: 'Protein Requirements & Metabolism',
    description: 'Protein needs for athletes, the "Leucine Trigger", and the protein-sparing effect of training.',
    learningObjectives: [
      'Critique protein requirements for endurance (1.2-1.7g/kg) vs strength.',
      'Explain the "Leucine Trigger" and mTORC1 pathway.',
      'Analyze the impact of training status on protein oxidation.'
    ],
    keyPoints: [
      'Endurance athletes need 1.2–1.7 g/kg due to BCAA oxidation.',
      'Strength athletes need ~1.6–1.7 g/kg for hypertrophy.',
      'Leucine triggers mTORC1 to start synthesis.',
      'Training reduces protein oxidation at the same absolute workload (Protein Sparing).'
    ],
    quickSummary: [
      '<strong>Endurance Needs:</strong> Higher than sedentary people (1.2 - 1.4 g/kg/day) because prolonged exercise burns BCAAs (Leucine, Valine, Isoleucine) for fuel.',
      '<strong>Strength Needs:</strong> ~1.6 - 1.7 g/kg/day to support muscle growth (hypertrophy). Higher intakes (>2.0) generally offer no extra benefit.',
      '<strong>Leucine Trigger:</strong> Leucine is the specific amino acid that "switches on" muscle building via the <em>mTORC1</em> pathway.',
      '<strong>Protein Sparing Effect:</strong> As you get fitter, your body becomes better at burning fat and glycogen, so you actually burn <em>less</em> protein during exercise than an untrained person.',
      '<strong>Timing:</strong> Total daily intake is most important, but post-exercise protein helps maximize the synthesis window.'
    ],
    fullNotes: `
      <h3>Do Athletes Need More Protein?</h3>
      <p>Yes. The RDA for sedentary people is ~0.8 g/kg. Athletes need approximately double this.</p>
      <h4>Endurance Athletes (1.2 - 1.7 g/kg)</h4>
      <p>Why? During long rides or runs, especially when glycogen gets low, the body breaks down protein (BCAAs) to provide about 5-10% of total energy. This damage must be repaired.</p>
      <h4>Strength Athletes (1.6 - 1.7 g/kg)</h4>
      <p>Why? To provide the "bricks" for building new muscle tissue (hypertrophy).</p>

      <h3>The "Leucine Trigger"</h3>
      <p>Muscle Protein Synthesis (MPS) is like a light switch. You need a certain amount of Leucine (~2-3g in a meal) to flip the switch.</p>
      <ul>
        <li><strong>mTORC1:</strong> The cellular complex that controls growth.</li>
        <li><strong>Leucine:</strong> The signal that activates mTORC1.</li>
      </ul>
      <p><em>Application:</em> This is why whey protein (high in leucine) is often preferred post-workout over plant sources (often lower in leucine) unless the plant source is fortified or consumed in larger amounts.</p>

      <h3>Training Status & Efficiency</h3>
      <p><strong>The Paradox:</strong> While athletes need more protein overall (due to high volume), their bodies are actually <em>more efficient</em>. A trained body oxidizes less leucine than an untrained body at the same power output. This is called the "protein sparing" effect of training.</p>
    `
  },
  {
    id: 'dietary-strategies',
    title: 'Dietary Strategies & Performance',
    description: 'High-fat diets, Ketogenic diets, and the truth about fuel utilization.',
    learningObjectives: [
      'Evaluate Ketogenic diets for high-intensity performance.',
      'Debunk the "Fat Burning Zone" switch misconception.',
      'Explain how high-carb diets influence fat oxidation.'
    ],
    keyPoints: [
      'Fat and carbs are oxidized simultaneously (continuum), not sequentially.',
      'High-Fat Low-Carb (HFLC) diets impair exercise economy.',
      'HFLC downregulates PDH, impairing sprint performance.',
      'Insulin suppresses lipolysis (fat breakdown).'
    ],
    quickSummary: [
      '<strong>Fuel Mixing:</strong> There is no "switch" where you stop burning carbs and start burning fat. Both are used simultaneously. Intensity determines the ratio.',
      '<strong>High Fat Diets (LCHF):</strong> Drastically increase fat oxidation rates (up to 1.5g/min). <em>However</em>, they reduce the ability to use carbohydrates.',
      '<strong>The Mechanism:</strong> LCHF diets reduce the activity of <em>PDH</em>. This makes the "glycolytic pathway" rusty.',
      '<strong>Performance Cost:</strong> Fat requires more oxygen to produce energy than carbs. Therefore, LCHF reduces "Economy" (you work harder for the same speed).',
      '<strong>Ketogenic Diets:</strong> Generally shown to impair high-intensity performance (race pace) even if fat burning is high.'
    ],
    fullNotes: `
      <h3>Fuel Utilization Myths</h3>
      <p>Commonly, people think "low intensity = fat burning" and "high intensity = carb burning" as separate zones. In reality, it is a <strong>continuum</strong>.</p>
      <ul>
        <li>At rest: Mostly fat.</li>
        <li>Moderate exercise: Mix of fat and carbs.</li>
        <li>Maximal exercise: Almost entirely carbohydrate.</li>
      </ul>

      <h3>High-Fat Low-Carb (HFLC) & Ketogenic Diets</h3>
      <p><strong>The Theory:</strong> If we can teach the body to burn fat, we spare our limited glycogen stores for the end of the race.</p>
      <p><strong>The Reality:</strong>
      <ol>
        <li><strong>Adaptation:</strong> After 5+ days on LCHF, fat oxidation doubles. The body becomes a fat-burning machine.</li>
        <li><strong>The Downside (PDH):</strong> The enzyme Pyruvate Dehydrogenase (PDH) is downregulated. When the athlete tries to sprint or climb (needing carbs), they can't access that energy quickly.</li>
        <li><strong>Economy:</strong> Fat is a "premium" fuel in terms of storage, but "expensive" in terms of oxygen. You get less ATP per molecule of Oxygen when burning fat compared to carbs.</li>
      </ol>
      </p>
      <p><strong>Burke et al. (2017) Study:</strong> Elite race walkers on a Keto diet burned tons of fat, but their race times got slower because their exercise economy worsened.</p>

      <h3>Carbohydrate Intake & Fat Oxidation</h3>
      <p>Eating carbs before exercise releases <strong>Insulin</strong>. Insulin is a potent inhibitor of lipolysis (fat breakdown). This is why pre-exercise carbs can lower fat oxidation rates during the session.</p>
    `
  },
  {
    id: 'research-methods',
    title: 'Research Methods in Physiology',
    description: 'How to critique study designs: subjects, modes, and compliance.',
    learningObjectives: [
      'Identify limitations in "Train Low" studies (e.g., single-leg kicking).',
      'Discuss methods for monitoring dietary compliance (ketones).',
      'Critique extrapolation of untrained subject data to elite athletes.'
    ],
    keyPoints: [
      'Single-leg kicking studies (Hansen) are hard to extrapolate to whole-body sport.',
      'Monitoring ketones is essential for Keto compliance.',
      'Self-reported food diaries are often inaccurate.',
      'Mechanisms (enzymes) do not always equal Performance (medals).'
    ],
    quickSummary: [
      '<strong>Subject Population:</strong> Untrained people adapt to almost anything. Elite athletes are hard to improve. <em>Never</em> assume results from students apply to Olympians.',
      '<strong>Exercise Mode:</strong> "Single-leg kicking" is often used in labs (like the Hansen study) because it controls variables well, but it doesn\'t stress the heart/lungs like real running or cycling.',
      '<strong>Dietary Compliance:</strong> How do we know athletes followed the diet? For Keto studies, measuring blood/urine <em>ketones</em> is mandatory.',
      '<strong>Mechanism vs Outcome:</strong> Just because a marker (like Citrate Synthase) increased, doesn\'t mean the athlete is faster. Always look for performance tests (time trials).'
    ],
    fullNotes: `
      <h3>Critiquing the Literature</h3>
      <p>When revising for Level 5, you must look at the methods section of a paper.</p>
      
      <h4>1. The "Single Leg" Model</h4>
      <p>Used in the famous Hansen (2005) Train Low study.
      <br/><strong>Pro:</strong> One leg is the experimental group, the other is the control. Perfect genetic match.
      <br/><strong>Con:</strong> It excludes the central cardiovascular system. You can't "race" with one leg.</p>

      <h4>2. Training Status</h4>
      <ul>
        <li><strong>Hansen et al. (2005):</strong> Untrained subjects. Result: "Train Low" worked.</li>
        <li><strong>Yeo et al. (2008):</strong> Trained cyclists. Result: "Train Low" changed enzymes, but didn't improve power output.</li>
      </ul>
      <p><em>Lesson:</em> As you get fitter, it gets harder to find improvements.</p>

      <h4>3. Monitoring Compliance</h4>
      <p>Self-reported food diaries are notoriously inaccurate. In high-fat diet studies, if researchers don't measure ketone levels, we don't know if the subjects were actually in ketosis. This validity check is crucial.</p>
    `
  }
];

export const QUESTIONS: Question[] = [
  // --- From OCR Page 3/4/5 (The 14 provided questions) ---
  {
    id: 'q1',
    topicId: 'metabolic-adaptations',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What is one proposed benefit of commencing endurance exercise with low muscle glycogen?',
    options: [
      'Decreased activity of metabolic genes',
      'Enhanced activation of signalling proteins like AMPK and p38 MAPK',
      'Reduced fat oxidation during exercise',
      'Increased muscle glycogen content at rest'
    ],
    correctAnswer: 1,
    explanation: 'Commencing exercise with low glycogen increases the activity of signaling proteins such as AMPK and p38 MAPK, which are critical for mitochondrial biogenesis and training adaptations.',
    sourceRef: 'Metabolic Adaptations to Training States'
  },
  {
    id: 'q2',
    topicId: 'metabolic-adaptations',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What is a potential risk associated with training with low carbohydrate availability?',
    options: [
      'Improved recovery times',
      'Increased risk of overreaching or overtraining',
      'Enhanced immune function',
      'Decreased activation of PPARs'
    ],
    correctAnswer: 1,
    explanation: 'Training with low CHO availability increases the stress of training, potentially leading to longer recovery times, immunodepression, and a higher risk of overreaching (Achten et al. 2004).',
    sourceRef: 'Metabolic Adaptations / Train Low'
  },
  {
    id: 'q3',
    topicId: 'metabolic-adaptations',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'In the context of "Fasted Training," what was observed in athletes who trained in the fasted state compared to those who trained in the fed state?',
    options: [
      'Increased muscle glycogen use',
      'Decreased activity of proteins involved in fat metabolism',
      'Same fat oxidation during exercise despite training state',
      'Enhanced performance in high-intensity exercise'
    ],
    correctAnswer: 2,
    explanation: 'DeBock et al. (2008) observed that fat oxidation during exercise was the same in both groups (fasted vs fed) post-training, despite molecular changes favoring fat metabolism.',
    sourceRef: 'Fasted Training'
  },
  {
    id: 'q4',
    topicId: 'molecular-biology',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What role do PPARs (Peroxisome Proliferator-Activated Receptors) play in muscle adaptation?',
    options: [
      'They act as enzymes that catalyze metabolic reactions',
      'They are transcription factors that regulate gene expression',
      'They serve as energy storage molecules',
      'They are simple carbohydrates used during exercise'
    ],
    correctAnswer: 1,
    explanation: 'PPARs are nuclear receptor proteins that function as transcription factors, regulating the expression of genes involved in lipid and glucose metabolism.',
    sourceRef: 'Molecular Biology / PPARs'
  },
  {
    id: 'q5',
    topicId: 'molecular-biology',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Which enzyme is critical for controlling the entry of substrates into the TCA (Krebs) cycle during carbohydrate metabolism?',
    options: [
      'Citrate synthase',
      'Pyruvate dehydrogenase',
      'Hexokinase II',
      'Carnitine palmitoyl transferase I'
    ],
    correctAnswer: 1,
    explanation: 'Pyruvate dehydrogenase (PDH) catalyzes the conversion of pyruvate to acetyl-CoA, thereby controlling carbohydrate entry into the TCA cycle.',
    sourceRef: 'Molecular Biology / Enzymes'
  },
  {
    id: 'q6',
    topicId: 'molecular-biology',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What is the significance of increased citrate synthase activity in muscle as a result of certain training protocols?',
    options: [
      'It indicates decreased mitochondrial density',
      'It suggests enhanced capacity for oxidative metabolism',
      'It shows reduced reliance on fat as a fuel source',
      'It reflects decreased endurance performance'
    ],
    correctAnswer: 1,
    explanation: 'Citrate synthase is a marker enzyme for the TCA cycle. Increased activity indicates higher mitochondrial density and an enhanced capacity for oxidative metabolism.',
    sourceRef: 'Molecular Biology / Enzymes'
  },
  {
    id: 'q7',
    topicId: 'protein-metabolism',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Why might endurance athletes have increased protein requirements?',
    options: [
      'Because they consume less protein than sedentary individuals',
      'Due to increased oxidation of essential amino acids during prolonged exercise',
      'Because protein contributes over 20% to energy expenditure during exercise',
      'As a result of decreased muscle protein synthesis post-exercise'
    ],
    correctAnswer: 1,
    explanation: 'During prolonged exercise, oxidation of BCAAs (Leucine, Isoleucine, Valine) increases, necessitating higher dietary intake to maintain nitrogen balance.',
    sourceRef: 'Protein Requirements'
  },
  {
    id: 'q8',
    topicId: 'protein-metabolism',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'How does training status affect protein oxidation and breakdown during exercise?',
    options: [
      'Training increases protein oxidation and breakdown',
      'Well-trained individuals have higher protein breakdown during exercise',
      'Training decreases protein oxidation and breakdown, creating a protein-sparing effect',
      'Training status has no effect on protein metabolism'
    ],
    correctAnswer: 2,
    explanation: 'Endurance training induces a "protein-sparing" effect. At the same absolute intensity, a trained person oxidizes less protein than an untrained person.',
    sourceRef: 'Protein Requirements / Training Status'
  },
  {
    id: 'q9',
    topicId: 'protein-metabolism',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What is the role of leucine in muscle protein synthesis post-exercise?',
    options: [
      'It inhibits signalling pathways, reducing protein synthesis',
      'It stimulates signalling pathways, enhancing protein synthesis',
      'It provides energy for muscle contractions',
      'It has no significant impact on protein synthesis'
    ],
    correctAnswer: 1,
    explanation: 'Leucine acts as a signal (trigger) to activate the mTORC1 pathway, which is essential for initiating muscle protein synthesis.',
    sourceRef: 'Protein / Leucine'
  },
  {
    id: 'q10',
    topicId: 'dietary-strategies',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Why do short-term high-fat, low-carbohydrate diets typically impair endurance performance?',
    options: [
      'They enhance muscle glycogen stores excessively',
      'They lead to a reduction in muscle and liver glycogen stores',
      'They cause overhydration and electrolyte imbalances',
      'They decrease fat oxidation capacity'
    ],
    correctAnswer: 1,
    explanation: 'Short-term (<5 days) high-fat diets deplete glycogen reserves. Since glycogen is crucial for high-intensity output, performance and fatigue resistance are impaired.',
    sourceRef: 'Dietary Strategies / High Fat'
  },
  {
    id: 'q11',
    topicId: 'dietary-strategies',
    type: QuestionType.MCQ,
    difficulty: 'Level 4',
    text: 'Which of the following statements is a common misconception about fuel utilization during endurance exercise?',
    options: [
      'Fat and carbohydrate are used simultaneously during exercise',
      'There is a switch from carbohydrate to fat as the primary fuel source',
      'Carbohydrates are never used during prolonged exercise',
      'Fat oxidation decreases as exercise duration increases'
    ],
    correctAnswer: 1,
    explanation: 'It is a myth that the body "switches" fuels. Both fat and carbs are oxidized simultaneously, with the ratio depending on intensity and duration.',
    sourceRef: 'Dietary Strategies / Fuel Use'
  },
  {
    id: 'q12',
    topicId: 'dietary-strategies',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'How does carbohydrate intake influence fatty acid oxidation during exercise?',
    options: [
      'It has no effect on fat oxidation',
      'Carbohydrate intake before exercise enhances fat oxidation',
      'Carbohydrate intake can reduce fat oxidation by suppressing lipolysis',
      'Carbohydrate intake increases the concentration of ketone bodies'
    ],
    correctAnswer: 2,
    explanation: 'Carbohydrate intake stimulates insulin release. Insulin is a potent inhibitor of lipolysis (breakdown of fat), thus reducing FA availability and oxidation.',
    sourceRef: 'Dietary Strategies / CHO Intake'
  },
  {
    id: 'q13',
    topicId: 'research-methods',
    type: QuestionType.MCQ,
    difficulty: 'Level 6',
    text: 'What is a key limitation of the Hansen et al. (2005) study that makes it difficult to apply the findings to real-life athletes?',
    options: [
      'The subjects were elite athletes with extensive training backgrounds',
      'The mode of training was single leg kicking, not representative of typical sports activities',
      'The study used a progressively varied exercise intensity similar to real competitions',
      'The study duration was too long to observe meaningful adaptations'
    ],
    correctAnswer: 1,
    explanation: 'Hansen et al. used a single-leg knee extensor model with untrained subjects. This unnatural movement pattern and population make it hard to extrapolate results to elite athletes running or cycling.',
    sourceRef: 'Research Methods / Hansen Study'
  },
  {
    id: 'q14',
    topicId: 'research-methods',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Why is regular monitoring of ketone levels important in studies investigating ketogenic diets?',
    options: [
      'To ensure participants maintain high blood glucose levels',
      'To confirm compliance with the high-fat diet and verify the state of ketosis',
      'To adjust electrolyte intake accordingly',
      'To measure improvements in muscle glycogen stores'
    ],
    correctAnswer: 1,
    explanation: 'Dietary compliance is difficult. Measuring blood or urinary ketones is the only way to verify the participant is actually in ketosis and adhering to the <20g CHO restriction.',
    sourceRef: 'Research Methods / Keto Compliance'
  },
  // --- Additional Generated Questions for Retrieval Practice ---
  {
    id: 'q15',
    topicId: 'dietary-strategies',
    type: QuestionType.SHORT_ANSWER,
    difficulty: 'Level 6',
    text: 'Explain the effect of a Low-Carb High-Fat (LCHF) diet on the enzyme Pyruvate Dehydrogenase (PDH) and the subsequent impact on exercise economy.',
    correctAnswer: 'PDH activity is downregulated/reduced. This impairs the ability to oxidize carbohydrates efficiently at high intensities, leading to reduced exercise economy (more oxygen required for the same work rate).',
    explanation: 'LCHF diets lead to a downregulation of PDH. Since PDH regulates carb entry into the TCA cycle, its reduction means the body cannot access its high-octane fuel (glycogen) quickly during sprints or hills, reducing economy (Burke et al., 2017).',
    sourceRef: 'Dietary Strategies / High Fat'
  },
  {
    id: 'q16',
    topicId: 'protein-metabolism',
    type: QuestionType.SCENARIO,
    difficulty: 'Level 5',
    text: 'Scenario: An elite cyclist consumes 0.8g protein/kg/day. They report fatigue and poor recovery. Based on current guidelines, what would you recommend regarding their protein intake?',
    correctAnswer: 'Increase protein intake to 1.2 - 1.7 g/kg/day.',
    explanation: '0.8g/kg is the RDA for sedentary people. Elite endurance athletes have higher turnover and oxidation rates. Increasing to ~1.4-1.6g/kg would support repair and adaptation (Tarnopolsky 2004).',
    sourceRef: 'Protein Requirements / Recommendations'
  }
];