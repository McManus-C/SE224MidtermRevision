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
    relatedTopicIds: ['creatine-supplementation']
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
    relatedTopicIds: ['metabolic-adaptations', 'dietary-strategies', 'caffeine-supplementation']
  },
  {
    id: 'g-per-kg',
    term: 'g/kg/day (Grams per Kilogram)',
    definition: 'A relative unit of measurement used to prescribe nutrient intake based on an individual\'s body mass.',
    example: 'An 80kg athlete aiming for 1.5g/kg of protein would eat 120g of protein per day.',
    category: 'Units',
    relatedTopicIds: ['protein-metabolism', 'creatine-supplementation']
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
  },

  // --- Supplements (Creatine) ---
  {
    id: 'creatine',
    term: 'Creatine',
    definition: 'A nitrogenous organic acid synthesized in the liver and kidneys, and found in meat/fish, that helps supply energy to all cells, primarily muscle.',
    example: 'Vegetarians often have lower resting muscle creatine stores due to lack of dietary intake.',
    category: 'Supplements',
    relatedTopicIds: ['creatine-supplementation']
  },
  {
    id: 'phosphocreatine',
    term: 'Phosphocreatine (PCr)',
    definition: 'The phosphorylated form of creatine stored in muscles. It donates a phosphate group to ADP to rapidly regenerate ATP.',
    example: 'PCr stores are depleted within the first 10 seconds of a 100m sprint.',
    category: 'Energy Systems',
    relatedTopicIds: ['creatine-supplementation']
  },
  {
    id: 'creatine-kinase',
    term: 'Creatine Kinase',
    definition: 'The enzyme that catalyzes the reaction: PCr + ADP + H+ ↔ Creatine + ATP.',
    example: 'High concentrations of creatine kinase allow for rapid energy release during explosive movements.',
    category: 'Metabolism',
    relatedTopicIds: ['creatine-supplementation']
  },
  {
    id: 'nonresponder',
    term: 'Non-responder (Creatine)',
    definition: 'An individual who does not show a significant increase in muscle creatine stores (>20 mmol/kg) following supplementation.',
    example: 'Athletes who already have very high resting creatine levels are more likely to be non-responders.',
    category: 'Supplements',
    relatedTopicIds: ['creatine-supplementation']
  },
  {
    id: 'cell-swelling',
    term: 'Cell Swelling',
    definition: 'An increase in intracellular water content. In the context of creatine, it acts as an anabolic signal stimulating protein synthesis.',
    example: 'The rapid weight gain of 1-2kg during creatine loading is primarily due to water retention and cell swelling.',
    category: 'Physiology',
    relatedTopicIds: ['creatine-supplementation']
  },

  // --- Supplements (Caffeine) ---
  {
    id: 'adenosine-antagonist',
    term: 'Adenosine Antagonist',
    definition: 'A substance (like caffeine) that blocks the action of adenosine receptors in the brain, reducing the perception of fatigue and pain.',
    example: 'Caffeine acts as an adenosine antagonist, keeping the athlete alert and making the effort feel easier.',
    analogy: 'Adenosine is the "sleepy signal". Caffeine puts tape over the signal receiver so your brain doesn\'t get the message that it is tired.',
    category: 'Supplements',
    relatedTopicIds: ['caffeine-supplementation']
  },
  {
    id: 'diuretic',
    term: 'Diuretic',
    definition: 'A substance that increases the production of urine.',
    example: 'While caffeine is technically a mild diuretic at rest, it does NOT cause dehydration during exercise because catecholamines reduce kidney blood flow.',
    category: 'Physiology',
    relatedTopicIds: ['caffeine-supplementation']
  },
  {
    id: 'cyp1a2',
    term: 'CYP1A2',
    definition: 'The gene responsible for the enzyme that metabolizes (breaks down) caffeine in the liver.',
    example: 'Fast metabolizers (with a specific CYP1A2 variant) clear caffeine quickly, while slow metabolizers keep it in their system longer.',
    category: 'Molecular Biology',
    relatedTopicIds: ['caffeine-supplementation']
  },
  {
    id: 'adora2a',
    term: 'ADORA2A',
    definition: 'A gene associated with caffeine sensitivity and anxiety responses.',
    example: 'Some athletes get "jitters" or anxiety from caffeine due to their ADORA2A genotype.',
    category: 'Molecular Biology',
    relatedTopicIds: ['caffeine-supplementation']
  },
  {
    id: 'methylated-xanthine',
    term: 'Methylated Xanthine',
    definition: 'The chemical class to which caffeine belongs. Found naturally in coffee, tea, and chocolate.',
    example: 'Theophylline (in tea) is another type of methylated xanthine.',
    category: 'Supplements',
    relatedTopicIds: ['caffeine-supplementation']
  },

  // --- Supplements (Buffers) ---
  {
    id: 'alkalinizer',
    term: 'Alkalinizer',
    definition: 'A substance that increases the pH (makes it less acidic) or buffering capacity of the blood.',
    example: 'Sodium bicarbonate is a blood alkalinizer used to delay fatigue in 400m-800m runners.',
    category: 'Supplements',
    relatedTopicIds: ['buffering-agents']
  },
  {
    id: 'anaerobic-glycolysis',
    term: 'Anaerobic Glycolysis',
    definition: 'The metabolic pathway that breaks down glucose without oxygen, producing ATP and lactic acid (lactate + H+).',
    example: 'Events lasting 1-10 minutes rely heavily on anaerobic glycolysis.',
    category: 'Energy Systems',
    relatedTopicIds: ['buffering-agents', 'fluid-hydration']
  },
  {
    id: 'sodium-bicarbonate',
    term: 'Sodium Bicarbonate',
    definition: 'Commonly known as baking soda. A supplement used to increase blood buffering capacity against acidity.',
    example: 'Taking 0.3g/kg of sodium bicarbonate can improve performance in rowing events.',
    category: 'Supplements',
    relatedTopicIds: ['buffering-agents']
  },
  {
    id: 'buffer-capacity',
    term: 'Buffer Capacity',
    definition: 'The ability of the blood or muscle to resist changes in pH when acids (H+) are added.',
    example: 'Higher buffer capacity allows an athlete to sprint longer before the "burn" (acidity) slows them down.',
    analogy: 'Like a sponge absorbing water. A bigger sponge (higher buffer capacity) can soak up more acid spill before it makes a mess.',
    category: 'Physiology',
    relatedTopicIds: ['buffering-agents']
  },

  // --- Hydration ---
  {
    id: 'dehydration',
    term: 'Dehydration',
    definition: 'A reduction in the body\'s water content (hypohydration).',
    example: 'Performance impairment typically begins when dehydration exceeds 2% of body mass.',
    category: 'Physiology',
    relatedTopicIds: ['fluid-hydration']
  },
  {
    id: 'euhydration',
    term: 'Euhydration',
    definition: 'A state of normal body water content.',
    example: 'Athletes should aim to start exercise in a state of euhydration.',
    category: 'Physiology',
    relatedTopicIds: ['fluid-hydration']
  },
  {
    id: 'hyponatremia',
    term: 'Hyponatremia',
    definition: 'A dangerous condition characterized by low blood sodium concentration (<135 mmol/L), often caused by drinking excessive plain water during prolonged exercise.',
    example: 'Slow marathon runners who drink at every aid station are at higher risk of hyponatremia than faster runners.',
    category: 'Physiology',
    relatedTopicIds: ['fluid-hydration']
  },
  {
    id: 'osmolarity',
    term: 'Osmolarity',
    definition: 'The concentration of a solution expressed as the total number of solute particles per liter.',
    example: 'Sports drinks should be isotonic (similar osmolarity to blood) to maximize absorption.',
    category: 'Units',
    relatedTopicIds: ['fluid-hydration']
  },
  {
    id: 'gastric-emptying',
    term: 'Gastric Emptying',
    definition: 'The rate at which fluid leaves the stomach and enters the small intestine for absorption.',
    example: 'High concentrations of carbohydrate (>8%) slow down gastric emptying, potentially causing stomach upset.',
    category: 'Physiology',
    relatedTopicIds: ['fluid-hydration']
  },
  {
    id: 'cardiac-drift',
    term: 'Cardiac Drift',
    definition: 'The upward drift of heart rate during steady-state exercise, often caused by dehydration reducing blood volume.',
    example: 'If you run at the same speed for an hour but your HR climbs 10 beats, that is cardiac drift, likely due to fluid loss.',
    category: 'Physiology',
    relatedTopicIds: ['fluid-hydration']
  },

  // --- Supplement Safety ---
  {
    id: 'contamination',
    term: 'Contamination (Supplements)',
    definition: 'The accidental or purposeful addition of banned substances (e.g., steroids, stimulants) into a supplement during manufacturing.',
    example: 'An athlete failed a drug test because their vitamin pill was contaminated with trace amounts of nandrolone.',
    category: 'Supplements',
    relatedTopicIds: ['supplement-safety']
  },
  {
    id: 'informed-sport',
    term: 'Informed Sport',
    definition: 'A global quality assurance program that tests specific batches of supplements for banned substances.',
    example: 'Elite athletes should only use supplements that display the Informed Sport logo to minimize risk.',
    category: 'Research',
    relatedTopicIds: ['supplement-safety']
  },
  {
    id: 'strict-liability',
    term: 'Strict Liability',
    definition: 'The anti-doping rule stating that an athlete is solely responsible for whatever is found in their body, regardless of intent or negligence.',
    example: 'Even if a supplement label was wrong, the athlete is still banned under strict liability rules.',
    category: 'Research',
    relatedTopicIds: ['supplement-safety']
  },
  {
    id: 'proprietary-blend',
    term: 'Proprietary Blend',
    definition: 'A labeling tactic where manufacturers list ingredients but not their specific amounts, often hiding low doses or dangerous stimulants.',
    example: 'Avoid pre-workouts with "proprietary blends" as you cannot verify if the dosage is safe or effective.',
    category: 'Supplements',
    relatedTopicIds: ['supplement-safety']
  },

  // --- Research Standards ---
  {
    id: 'internal-validity',
    term: 'Internal Validity',
    definition: 'The extent to which a study establishes a trustworthy cause-and-effect relationship between the treatment (e.g., caffeine) and the outcome (performance).',
    example: 'Good internal validity is achieved by controlling variables like temperature and diet.',
    category: 'Research',
    relatedTopicIds: ['research-standards']
  },
  {
    id: 'external-validity',
    term: 'External Validity',
    definition: 'The extent to which study results can be generalized (applied) to other situations, people, or settings.',
    example: 'A study on rats has low external validity for human Olympic sprinters.',
    category: 'Research',
    relatedTopicIds: ['research-standards']
  },
  {
    id: 'placebo-effect',
    term: 'Placebo Effect',
    definition: 'A beneficial effect produced by a dummy treatment, which cannot be attributed to the properties of the placebo itself, and must therefore be due to the patient\'s belief.',
    example: 'Athletes often run faster just because they THINK they took caffeine, even if they didn\'t.',
    category: 'Research',
    relatedTopicIds: ['research-standards']
  },
  {
    id: 'double-blind',
    term: 'Double Blind',
    definition: 'A study design where neither the participants nor the researchers know who is receiving a particular treatment.',
    example: 'Double blind studies prevent researcher bias from influencing the results.',
    category: 'Research',
    relatedTopicIds: ['research-standards']
  },
  {
    id: 'crossover-design',
    term: 'Crossover Design',
    definition: 'A study where participants receive ALL treatments (e.g., both supplement AND placebo) in a random order, separated by a washout period.',
    example: 'Crossover designs are powerful because each athlete acts as their own control, reducing genetic variability.',
    category: 'Research',
    relatedTopicIds: ['research-standards']
  },
  {
    id: 'washout-period',
    term: 'Washout Period',
    definition: 'The time between treatments in a crossover study to ensure the effects of the first treatment have completely disappeared.',
    example: 'A creatine study needs a washout period of 4 weeks to ensure muscle stores return to baseline.',
    category: 'Research',
    relatedTopicIds: ['research-standards']
  },

  // --- Data Analysis ---
  {
    id: 'indirect-calorimetry',
    term: 'Indirect Calorimetry',
    definition: 'A method of estimating energy expenditure and substrate utilization by measuring oxygen consumption (VO2) and carbon dioxide production (VCO2).',
    example: 'Indirect calorimetry allows us to calculate how much fat vs carbohydrate an athlete is burning at 200 Watts.',
    category: 'Analysis',
    relatedTopicIds: ['data-analysis']
  },
  {
    id: 'rer',
    term: 'Respiratory Exchange Ratio (RER)',
    definition: 'The ratio of carbon dioxide produced to oxygen consumed (VCO2/VO2). Indicates fuel usage: 0.70 = 100% Fat, 1.00 = 100% Carbohydrate.',
    example: 'An RER of 0.85 indicates a mix of approximately 50% fat and 50% carbohydrate oxidation.',
    category: 'Analysis',
    relatedTopicIds: ['data-analysis']
  },
  {
    id: 'lbm',
    term: 'Lean Body Mass (LBM)',
    definition: 'Total body weight minus fat mass. It is the primary determinant of Resting Metabolic Rate (RMR).',
    example: 'The Cunningham equation uses LBM to calculate calorie needs because muscle burns more energy than fat.',
    category: 'Analysis',
    relatedTopicIds: ['data-analysis']
  },
  {
    id: 'sweat-rate',
    term: 'Sweat Rate',
    definition: 'The volume of fluid lost per hour of exercise, calculated by measuring body mass change and fluid intake.',
    example: 'Calculating sweat rate is essential for developing a personalized hydration strategy for a marathon.',
    category: 'Analysis',
    relatedTopicIds: ['data-analysis', 'fluid-hydration']
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
  },
  {
    id: 'creatine-supplementation',
    title: 'Creatine Supplementation',
    description: 'Efficacy, dosing protocols, mechanisms of action, and potential side effects.',
    learningObjectives: [
      'Explain the mechanism of action of creatine (PCr availability and buffer capacity).',
      'Compare rapid loading (20g/day) vs. slow loading (3g/day) protocols.',
      'Identify "Responders" vs "Non-responders".',
      'Evaluate the impact of creatine on different exercise modes (Sprint vs Endurance).'
    ],
    keyPoints: [
      'Increases muscle PCr stores by ~20%, improving rapid ATP regeneration.',
      'Typical Loading: 20g/day for 5-6 days, followed by 2-3g/day maintenance.',
      'Causes ~1-2kg weight gain due to water retention (cell swelling).',
      'Effective for high-intensity, repetitive bouts (sprints/weights), but NOT for endurance performance.',
      '~30% of people are "non-responders" (usually those with high initial stores).'
    ],
    quickSummary: [
      '<strong>Primary Function:</strong> Increases muscle <em>Phosphocreatine (PCr)</em> stores. This allows for faster ATP regeneration during maximal efforts (0-10 seconds).',
      '<strong>Dosing Protocols:</strong> Two main methods exist. <em>Rapid Loading:</em> 20g/day (4x5g) for nearly a week, then maintenance. <em>Slow Loading:</em> 3g/day for a month. Both reach the same endpoint eventually.',
      '<strong>Performance Benefits:</strong> Proven effective for repeated sprints, strength, and power. <em>Ineffective</em> for long-distance endurance (and the weight gain may actually hurt endurance).',
      '<strong>Side Effects:</strong> Weight gain (1-2kg) is the only consistently reported "side effect", primarily due to water retention. No evidence of renal damage in healthy individuals.',
      '<strong>Responders:</strong> Vegetarians often see huge benefits (low initial stores). People with naturally high creatine levels may see no benefit (Non-responders).'
    ],
    fullNotes: `
      <h3>Mechanism of Action</h3>
      <p>Creatine is not just a fuel; it facilitates high-intensity work via several pathways:</p>
      <ul>
        <li><strong>PCr Availability:</strong> It increases resting Phosphocreatine (PCr) stores. During maximal exercise (like a 100m sprint), PCr donates a phosphate to ADP to regenerate ATP. More PCr = capacity to maintain high intensity for slightly longer.</li>
        <li><strong>Faster Resynthesis:</strong> It accelerates the recovery of PCr between sprint bouts (e.g., between sets in the gym or sprints in rugby).</li>
        <li><strong>Buffering:</strong> The breakdown of PCr consumes Hydrogen ions (H+), potentially acting as a buffer against acidity.</li>
        <li><strong>Anabolic Signal:</strong> "Cell Swelling" (water retention) may act as a signal to stimulate protein synthesis.</li>
      </ul>

      <h3>Loading Protocols</h3>
      <p>You can fill the muscle "tank" in two ways:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded border border-blue-200">
          <h4 class="font-bold text-blue-900">Rapid Loading</h4>
          <p class="text-sm">20g per day (split into 4 doses) for 5-6 days.</p>
          <p class="text-sm mt-2"><strong>Pros:</strong> Benefits felt within a week.<br/><strong>Cons:</strong> Higher risk of GI distress/bloating.</p>
        </div>
        <div class="bg-green-50 p-4 rounded border border-green-200">
          <h4 class="font-bold text-green-900">Slow Loading</h4>
          <p class="text-sm">3g per day consistently for ~28 days.</p>
          <p class="text-sm mt-2"><strong>Pros:</strong> Less GI distress.<br/><strong>Cons:</strong> Takes a month to see full benefits.</p>
        </div>
      </div>
      <p><strong>Maintenance:</strong> Once loaded, only 2g/day is needed to keep levels high. If you stop, levels return to baseline in about 4 weeks.</p>

      <h3>Responders vs. Non-Responders</h3>
      <p>Not everyone benefits. About <strong>30% of individuals are "non-responders"</strong>. The main factor is initial baseline levels. If your muscles are already full of creatine (e.g., huge red meat eaters), supplements won't add much more. Vegetarians, conversely, often respond best.</p>

      <h3>Performance Effects</h3>
      <ul>
        <li><strong>Strength/Power:</strong> Consistent improvements in reps to failure and 1RM strength.</li>
        <li><strong>Sprints:</strong> Improves repeated sprint ability (e.g., 10 x 6s sprints).</li>
        <li><strong>Endurance:</strong> generally <strong>NO effect</strong>. Creatine does not help oxidative phosphorylation. The associated weight gain (1-2kg) might actually increase the energy cost of running, hurting performance.</li>
      </ul>
    `
  },
  {
    id: 'caffeine-supplementation',
    title: 'Caffeine Supplementation',
    description: 'Mechanism of action, dosing strategies, and effects on endurance vs sprint performance.',
    learningObjectives: [
      'Contrast the "Metabolic Theory" (Fat oxidation) vs. "Central Nervous System Theory" (Adenosine Antagonist).',
      'Identify optimal dosing strategies (3-6mg/kg).',
      'Debunk myths regarding caffeine and dehydration.',
      'Explain the role of genetics (CYP1A2/ADORA2A) in individual response.'
    ],
    keyPoints: [
      'Caffeine acts primarily as an adenosine antagonist in the brain, reducing perceived exertion.',
      'Optimal dose is 3-6 mg/kg taken ~60 mins before exercise.',
      'Higher doses (>9 mg/kg) do NOT increase performance and increase side effects.',
      'Does NOT cause dehydration during exercise (catecholamines reduce kidney blood flow).',
      'Effective for endurance, intermittent sports, and sustained high-intensity efforts (~100% VO2max).'
    ],
    quickSummary: [
      '<strong>Primary Mechanism:</strong> It blocks <em>Adenosine Receptors</em> in the brain. Adenosine normally signals fatigue/sleepiness. By blocking it, caffeine maintains alertness and reduces Rating of Perceived Exertion (RPE).',
      '<strong>The "Fat Burning" Myth:</strong> Early studies suggested caffeine improved performance by burning more fat (glycogen sparing). While caffeine *does* release fatty acids, most modern research shows performance improves <em>even without</em> changes in fat oxidation. The brain effect is dominant.',
      '<strong>Optimal Dosage:</strong> Low to moderate doses (3 - 6 mg/kg body weight) are optimal. Taking more (e.g., 9 mg/kg) does not make you faster but increases jitters/anxiety.',
      '<strong>Hydration:</strong> Caffeine is a mild diuretic at rest, but <em>during exercise</em>, the body retains fluid (due to catecholamines), so it does not cause dehydration.',
      '<strong>Genetics:</strong> Responses vary wildly. Fast metabolizers (CYP1A2 gene) may benefit more than slow metabolizers.'
    ],
    fullNotes: `
      <h3>Mechanisms of Action</h3>
      <p>How does it actually work? There are two main theories, but one is the clear winner.</p>
      
      <h4>1. The Metabolic Theory (Old View)</h4>
      <p>Early studies (Costill et al., 1978) thought caffeine stimulated fat breakdown (lipolysis), thereby "sparing" muscle glycogen. 
      <br/><em>Verdict:</em> While caffeine releases fat into the blood, the muscle doesn't always burn it. Performance improves even when glycogen isn't spared. This is likely a secondary mechanism.</p>

      <h4>2. The CNS Theory (Current View)</h4>
      <p>Caffeine crosses the blood-brain barrier and acts as an <strong>Adenosine Antagonist</strong>. 
      <br/>- <strong>Adenosine:</strong> A molecule that accumulates in the brain causing sedation/fatigue.
      <br/>- <strong>Caffeine:</strong> Has a similar shape to adenosine. It binds to the receptors but doesn't activate them, effectively "blocking" the fatigue signal.
      <br/><em>Result:</em> Reduced perception of effort (RPE). Running at 15km/h feels easier.</p>

      <h3>Dosage Strategy</h3>
      <p>More is not better. The relationship is curvilinear.</p>
      <ul>
        <li><strong>Low (1-3 mg/kg):</strong> Can improve cognitive function and some performance.</li>
        <li><strong>Moderate (3-6 mg/kg):</strong> The "Sweet Spot" for maximum ergogenic benefit. For a 70kg athlete, this is ~210-420mg (roughly 2-4 cups of coffee or a strong pre-workout).</li>
        <li><strong>High (>9 mg/kg):</strong> No further benefit, high risk of side effects (tremors, anxiety, GI distress).</li>
      </ul>
      <p><strong>Timing:</strong> Blood levels peak approx 60 mins after ingestion.</p>

      <h3>Does Coffee = Caffeine?</h3>
      <p>Generally, yes. However, the amount of caffeine in a cup of coffee is highly variable. Some studies (Graham et al., 1998) suggested pure caffeine (capsules) worked better than coffee, but later studies (Hodgson et al., 2013) showed they are equally effective if the caffeine dose is matched.</p>

      <h3>The Hydration Myth</h3>
      <p>You will often hear "Caffeine dehydrates you".</p>
      <p><strong>The Science:</strong> While caffeine increases urine output at rest, <strong>during exercise</strong>, the body releases catecholamines (adrenaline) which constrict blood flow to the kidneys. This overrides the diuretic effect. Moderate caffeine use does not compromise hydration status during sport.</p>
    `
  },
  {
    id: 'buffering-agents',
    title: 'Blood-Acid Buffers (Sodium Bicarbonate)',
    description: 'Mechanism of extracellular buffering, dosage strategies, and management of side effects.',
    learningObjectives: [
      'Explain how anaerobic glycolysis leads to muscle acidity and fatigue.',
      'Describe the mechanism by which sodium bicarbonate improves performance (extracellular buffering).',
      'Identify the optimal dosage (300 mg/kg) and timing.',
      'Recognize the effective exercise duration window (1-10 minutes).'
    ],
    keyPoints: [
      'High-intensity exercise (1-10 min) relies on anaerobic glycolysis, producing H+ ions (acidity).',
      'Sodium Bicarbonate increases blood pH and buffering capacity.',
      'It pulls H+ out of the muscle cell (efflux), delaying intracellular fatigue.',
      'Optimal Dose: 0.3 g/kg (300 mg/kg) taken 1-2 hours before exercise.',
      'Major Side Effect: Severe GI distress (diarrhea, bloating) due to high sodium load and CO2 production.'
    ],
    quickSummary: [
      '<strong>The Problem:</strong> During high-intensity exercise (e.g., 800m run, 2km row), muscles produce Lactic Acid (Lactate + Hydrogen ions). The Hydrogen ions (H+) cause acidity, which stops muscles from contracting.',
      '<strong>The Solution:</strong> Sodium Bicarbonate (Baking Soda) acts as a blood buffer. It increases the pH of the blood (making it more alkaline).',
      '<strong>Mechanism:</strong> By making the blood more alkaline, it creates a gradient that pulls H+ <em>out</em> of the muscle faster. This delays the acidity buildup inside the muscle.',
      '<strong>Window of Effectiveness:</strong> Only works for events lasting <strong>1 to 10 minutes</strong>. Not useful for short sprints (<30s) or long endurance (>1 hour).',
      '<strong>Side Effects:</strong> Very high risk of "explosive" diarrhea and bloating. Dosage splitting or drinking plenty of water can help manage this.'
    ],
    fullNotes: `
      <h3>The Physiology of Acidosis</h3>
      <p>When you exercise maximally for 60 seconds to 10 minutes, you rely heavily on <strong>Anaerobic Glycolysis</strong>.
      <br/>- This pathway produces ATP quickly but generates Lactic Acid.
      <br/>- Lactic Acid dissociates into Lactate and Hydrogen Ions (H+).
      <br/>- <strong>It is the H+ (acidity)</strong>, not the lactate, that causes fatigue by interfering with muscle contraction enzymes.</p>

      <h3>How Bicarbonate Works</h3>
      <p>The body has natural buffers (proteins, phosphates, bicarbonate). When these are overwhelmed, pH drops (Acidosis).
      <br/>- Muscle pH drops from ~7.0 to ~6.5.
      <br/>- Sodium Bicarbonate (NaHCO3) ingested orally increases the <strong>extracellular (blood) buffering capacity</strong>.
      <br/>- <strong>H+ Efflux:</strong> Because the blood is now very alkaline (high pH), it draws H+ ions out of the muscle cell more rapidly. This keeps the muscle pH stable for longer, allowing you to push harder.</p>

      <h3>Dosage Strategy</h3>
      <div class="bg-amber-50 p-4 rounded-md border border-amber-200 my-4">
        <strong>The Golden Rule:</strong> 300 mg/kg body weight (0.3 g/kg).
        <br/><em>Example:</em> A 70kg athlete needs 21 grams. This is a LOT of powder!
      </div>
      <ul>
        <li><strong>Timing:</strong> 1 to 2 hours before the event.</li>
        <li><strong>Minimum Effective Dose:</strong> 200 mg/kg (less side effects, but less effective).</li>
        <li><strong>Maximum:</strong> Doses >300 mg/kg don't provide extra benefit but guarantee stomach issues.</li>
      </ul>

      <h3>The "Explosive" Side Effects</h3>
      <p>Sodium bicarbonate reacts with stomach acid (HCl) to produce salt, water, and <strong>Carbon Dioxide (CO2)</strong>.
      <br/>- The CO2 causes massive bloating.
      <br/>- The high sodium load draws water into the gut (osmotic effect), causing urgent diarrhea.
      <br/><em>Mitigation:</em> Split the dose over an hour, drink plenty of water, or use delayed-release capsules.</p>

      <h3>Sodium Citrate</h3>
      <p>An alternative buffer. Dosage ~300-500 mg/kg. Mechanism is similar, side effects are similar, but taste is reportedly worse.</p>
    `
  },
  {
    id: 'fluid-hydration',
    title: 'Fluid Intake & Hydration Strategies',
    description: 'Impact of dehydration on performance, individual sweat rates, and rehydration protocols.',
    learningObjectives: [
      'Quantify the effect of dehydration (>2% body mass loss) on aerobic performance.',
      'Critique the "drink to thirst" vs "planned drinking" debate.',
      'Calculate post-exercise rehydration needs (1.5 L per kg lost).',
      'Explain the risks of hyponatremia and overhydration.'
    ],
    keyPoints: [
      'Dehydration >2% body mass impairs aerobic performance, especially in heat.',
      'Sweat rates vary massively (0.5 - 3.0 L/hour); individual plans are essential.',
      'Thirst is a delayed signal; planned drinking helps prevents >2% loss.',
      'Rehydration requires replacing 150% of losses (1.5 L per kg lost) to account for urine production.',
      'Hyponatremia is a risk with excessive water intake (diluting blood sodium).'
    ],
    quickSummary: [
      '<strong>Dehydration & Performance:</strong> A loss of body water >2% of body weight consistently impairs endurance performance in hot conditions. It increases cardiovascular strain (lower stroke volume, higher heart rate) and core temperature.',
      '<strong>Sweat Rates:</strong> Highly individual. Can range from 0.5 L/hr to >3 L/hr. You cannot use a "one size fits all" drinking plan.',
      '<strong>Hyponatremia:</strong> Drinking <em>too much</em> plain water can be fatal. It dilutes blood sodium levels (<135 mmol/L). Symptoms include headache, confusion, and seizure.',
      '<strong>Rehydration Rule:</strong> After exercise, you must drink more than you lost. The golden rule is <strong>1.5 Liters for every 1 kg lost</strong>. This extra 50% accounts for the urine you will produce while rehydrating.',
      '<strong>Sports Drinks:</strong> Needed for events >1 hour. They provide Fluid (water), Fuel (carbs), and Electrolytes (sodium) to stimulate thirst and retention.'
    ],
    fullNotes: `
      <h3>Physiological Effects of Dehydration</h3>
      <p>Water is critical for cooling (sweat) and circulation (blood plasma). When you sweat heavily without drinking:</p>
      <ul>
        <li><strong>Plasma Volume drops:</strong> Blood gets thicker (viscosity increases).</li>
        <li><strong>Stroke Volume drops:</strong> The heart pumps less blood per beat.</li>
        <li><strong>Heart Rate rises:</strong> To compensate, HR increases (Cardiac Drift).</li>
        <li><strong>Core Temperature rises:</strong> Skin blood flow is reduced to save blood for muscles, so you "cook" from the inside.</li>
      </ul>
      <p><strong>The 2% Threshold:</strong> Generally, performance suffers noticeably once 2% of body mass is lost (e.g., 1.4kg for a 70kg runner), especially in the heat.</p>

      <h3>Hyperhydration vs. Hypohydration</h3>
      <ul>
        <li><strong>Hypohydration:</strong> State of low body water (Dehydrated).</li>
        <li><strong>Euhydration:</strong> State of normal body water (Balanced).</li>
        <li><strong>Hyperhydration:</strong> Excess body water. Sometimes induced before events using <em>Glycerol</em> to store extra water, though this can cause weight gain and feeling heavy.</li>
      </ul>

      <h3>Fluid Recommendations</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded border border-blue-200">
          <h4 class="font-bold text-blue-900">Before</h4>
          <p class="text-sm">5-7 ml/kg roughly 4 hours before. If no urine produced, drink another 3-5 ml/kg 2 hours before.</p>
        </div>
        <div class="bg-green-50 p-4 rounded border border-green-200">
          <h4 class="font-bold text-green-900">During</h4>
          <p class="text-sm">Prevent >2% loss. For events >1hr, use drinks with 30-60g carbs and sodium. Drink to thirst for slower athletes; plan for elites.</p>
        </div>
        <div class="bg-amber-50 p-4 rounded border border-amber-200">
          <h4 class="font-bold text-amber-900">After</h4>
          <p class="text-sm"><strong>The 150% Rule:</strong> Drink 1.5 L fluid for every 1 kg of body weight lost. Must contain sodium to retain the fluid.</p>
        </div>
      </div>

      <h3>Hyponatremia: The Silent Killer</h3>
      <p><strong>Cause:</strong> Drinking fluid (usually plain water) faster than you sweat/pee it out. This dilutes blood sodium levels.</p>
      <p><strong>Risk Factors:</strong> Slow runners (4+ hour marathoners), excessive drinking advice ("drink as much as possible"), and low body weight.</p>
      <p><strong>Symptoms:</strong> Bloating, headache, confusion, nausea. Often mistaken for dehydration!</p>

      <h3>Gastric Emptying</h3>
      <p>Fluid must leave the stomach to be absorbed. High intensity exercise (>80% VO2max) and high carbohydrate concentrations (>8% sugar solutions) slow this down. Sports drinks are usually 6% carb to balance fuel delivery with fluid absorption.</p>
    `
  },
  {
    id: 'supplement-safety',
    title: 'Contaminant Testing & Safety with Supplements',
    description: 'Understanding supplement regulation, contamination risks, and safety protocols (Informed Sport).',
    learningObjectives: [
      'Critique the regulation of dietary supplements compared to pharmaceuticals.',
      'Estimate the prevalence of supplement contamination (10-15%).',
      'Apply the principle of "Strict Liability" to supplement use.',
      'Identify strategies to minimize risk (e.g., batch testing).'
    ],
    keyPoints: [
      'Supplements are less regulated than drugs; safety testing is not mandatory before sale.',
      'Contamination with banned substances (steroids, stimulants) occurs in 10-25% of products.',
      'Inadvertent doping accounts for a significant portion of positive drug tests.',
      '<strong>Strict Liability:</strong> Athletes are 100% responsible for what is in their body.',
      '<strong>Informed Sport:</strong> The gold standard for batch testing to minimize risk.'
    ],
    quickSummary: [
      '<strong>The Wild West:</strong> Unlike medicines, supplements do not need to prove they are safe or effective before being sold. This "post-market regulation" means dangerous products can be on shelves until people get sick.',
      '<strong>Contamination Risk:</strong> Studies (e.g., the Cologne study) show that ~15% of supplements contain banned substances (like steroids or prohormones) not listed on the label. This happens due to cross-contamination in factories.',
      '<strong>Strict Liability:</strong> The most important rule in anti-doping. If it is in your body, you are guilty. "I didn\'t know" or "It wasn\'t on the label" is not a valid defense.',
      '<strong>Risk Management:</strong> Athletes must use products that have been <strong>batch tested</strong> by third parties like <em>Informed Sport</em>. While not a 100% guarantee, it drastically reduces the risk.',
      '<strong>Red Flags:</strong> Avoid products claiming to "cure" diseases, products with "proprietary blends", or those marketed for weight loss/sexual enhancement.'
    ],
    fullNotes: `
      <h3>Regulation: Food vs. Drug</h3>
      <p>In the USA (DSHEA 1994) and many other countries, supplements are regulated more like food than drugs.
      <br/>- <strong>Drugs:</strong> Must prove safety and efficacy <em>before</em> sale.
      <br/>- <strong>Supplements:</strong> Manufacturers are responsible for safety, but the FDA/government only steps in <em>after</em> a problem is reported.
      <br/><em>Consequence:</em> You cannot trust that the label accurately reflects what is in the bottle.</p>

      <h3>The Scale of Contamination</h3>
      <p>The famous "Cologne Study" (Geyer et al.) tested 634 non-hormonal supplements from 13 countries.
      <br/>- <strong>14.8%</strong> contained anabolic androgenic steroids (prohormones) not declared on the label.
      <br/>- Causes: Poor manufacturing practices (cleaning vats), sourcing raw materials from unreliable suppliers, or deliberate spiking to make the product "work".</p>

      <h3>Strict Liability</h3>
      <p>Under the WADA Code, the principle of <strong>Strict Liability</strong> applies.
      <br/>- An athlete is solely responsible for any prohibited substance found in their system.
      <br/>- Intent does not matter. An accidental positive test from a tainted vitamin results in a ban (often 2-4 years).</p>

      <h3>Minimizing Risk: The 4 Steps (USADA)</h3>
      <ol>
        <li><strong>Need:</strong> Do you really need it? Can you get it from food?</li>
        <li><strong>Certification:</strong> Look for third-party testing logos. <strong>Informed Sport</strong> is the gold standard for elite athletes because they test <em>every single batch</em>. NSF Certified for Sport is another reputable one.</li>
        <li><strong>Red Flags:</strong> Avoid "Proprietary Blends" (hides ingredients), weight loss pills, and muscle builders.</li>
        <li><strong>Global DRO:</strong> Check ingredients against the Global Drug Reference Online database.</li>
      </ol>
    `
  },
  // --- NEW TOPIC: Research Standards ---
  {
    id: 'research-standards',
    title: 'Standardising Research & Evaluating Studies',
    description: 'A framework for critiquing supplement research: validity, study design, and relevance to athletes.',
    learningObjectives: [
      'Distinguish between internal validity (is the effect real?) and external validity (does it apply to my athlete?).',
      'Evaluate the importance of placebo controls and blinding in sports nutrition.',
      'Assess how dietary controls (carbs, caffeine, timing) impact study reliability.',
      'Critique study populations (mice vs. students vs. elites).'
    ],
    keyPoints: [
      '<strong>Internal Validity:</strong> Did the study control enough variables to prove the supplement caused the effect?',
      '<strong>External Validity:</strong> Can these results be applied to the real world?',
      'Placebo effects are powerful; blinded, randomized, crossover trials are the gold standard.',
      'Dietary control is crucial: differences in pre-trial carbs or caffeine can mask or exaggerate results.',
      'Training Status matters: Elite athletes have smaller margins for improvement than untrained students.'
    ],
    quickSummary: [
      '<strong>The Two Key Questions:</strong> When reading a paper, ask: 1) Is the effect real? (Internal Validity) and 2) Does this apply to my athletes? (External Validity).',
      '<strong>Study Design Gold Standard:</strong> Look for <em>Randomized, Double-Blind, Placebo-Controlled, Crossover</em> trials. This minimizes bias and genetic variability.',
      '<strong>The "File Drawer" Problem:</strong> Be wary of a single positive study that contradicts ten negative ones. Science is about consensus, not outliers.',
      '<strong>Subjects Matter:</strong> A study on mice or sedentary students does not automatically apply to elite female runners. Physiology and training status change the response.',
      '<strong>Dietary Noise:</strong> If a study didn\'t control for pre-exercise carbohydrates, caffeine, or fluid, the results are unreliable. Was it the supplement or just a better breakfast?'
    ],
    fullNotes: `
      <h3>1. Internal Validity (Is it real?)</h3>
      <p>This asks: "Did the supplement actually cause the change, or was it something else?"</p>
      <ul>
        <li><strong>Placebo Effect:</strong> Athletes perform better just because they <em>believe</em> they took something. A study MUST have a placebo group.</li>
        <li><strong>Blinding:</strong> "Double Blind" means neither the athlete nor the researcher knows who got the real pill. This prevents subconscious coaching bias ("push harder!").</li>
        <li><strong>Randomization:</strong> Groups must be randomized to prevent selection bias (e.g., putting all the fit people in the supplement group).</li>
      </ul>

      <h3>2. External Validity (Does it apply?)</h3>
      <p>This asks: "Can I use this finding for my athlete?"</p>
      <ul>
        <li><strong>Population:</strong> Mice are not men. Sedentary students are not Olympians. Elite athletes are closer to their genetic ceiling, so gains are harder to find.</li>
        <li><strong>Protocol:</strong> A "time to exhaustion" test in a lab is psychologically different from a "time trial" or race. Time trials have higher ecological validity.</li>
      </ul>

      <h3>3. Controlling the Noise</h3>
      <p>Sports performance is noisy. Good research reduces noise by standardizing:</p>
      <ul>
        <li><strong>Diet:</strong> Standardized meals 24h before testing.</li>
        <li><strong>Caffeine:</strong> Must be restricted or standardized, as it is a potent ergogenic aid itself.</li>
        <li><strong>Training:</strong> Participants should not do a heavy leg workout the day before a sprint test.</li>
        <li><strong>Familiarization:</strong> Subjects need to practice the test first to get past the "learning effect".</li>
      </ul>

      <h3>4. Study Types</h3>
      <p><strong>Crossover Design:</strong> The same athlete does BOTH the supplement and placebo trials (separated by a washout period). This is powerful because the athlete acts as their own control, removing genetic differences.</p>
      <p><strong>Parallel Group:</strong> Group A gets supplement, Group B gets placebo. Requires larger sample sizes to be reliable.</p>
    `
  },
  // --- NEW TOPIC: Focus on Data Analysis ---
  {
    id: 'data-analysis',
    title: 'Focus on Data Analysis & Interpretation',
    description: 'Learn to calculate RER, substrate oxidation rates, energy expenditure (Cunningham), and fluid balance.',
    learningObjectives: [
      'Calculate RER and substrate oxidation rates using stoichiometry formulas.',
      'Estimate daily energy expenditure (TDEE) using the Cunningham equation.',
      'Determine sweat rates and fluid needs from body mass changes.'
    ],
    keyPoints: [
      'RER = VCO2/VO2 (0.7 = 100% fat, 1.0 = 100% carbs).',
      'Energy Expenditure (RMR) is best estimated by Lean Body Mass (LBM) in athletes.',
      'Sweat Rate = (Pre Weight - Post Weight + Fluid Intake) / Time.'
    ],
    quickSummary: [
      '<strong>Quantifying Physiology:</strong> Sports nutrition relies on numbers. You must be able to calculate how much fuel an athlete burns and how much fluid they lose.',
      '<strong>Substrate Oxidation:</strong> Using VO2 (oxygen consumed) and VCO2 (carbon dioxide produced), we can calculate exactly how many grams of fat and carbs are being burned per minute.',
      '<strong>Energy Balance:</strong> To prescribe a diet, we first estimate Resting Metabolic Rate (RMR) and multiply by an Activity Factor. The Cunningham equation is preferred for athletes because it accounts for muscle mass.',
      '<strong>Hydration math:</strong> Measuring weight loss during a session allows us to calculate sweat rate. Remember: 1kg of weight loss = 1L of fluid loss.'
    ],
    fullNotes: `
      <h3>1. Indirect Calorimetry & Substrate Oxidation</h3>
      <p>We measure gas exchange to see what fuel the body is using.</p>
      <div class="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
        <strong>The Formulas:</strong><br/>
        RER = VCO2 / VO2<br/>
        Carb Oxidation (g/min) = 4.210 × VCO2 – 2.962 × VO2<br/>
        Fat Oxidation (g/min) = 1.695 × VO2 – 1.701 × VCO2
      </div>
      <h4>Example Walkthrough:</h4>
      <p>Athlete data: VCO2 = 1.5 L/min, VO2 = 1.8 L/min.</p>
      <ul>
        <li><strong>RER:</strong> 1.5 / 1.8 = <strong>0.83</strong></li>
        <li><strong>Carb Ox:</strong> (4.210 × 1.5) - (2.962 × 1.8) = 6.315 - 5.332 = <strong>0.98 g/min</strong></li>
        <li><strong>Fat Ox:</strong> (1.695 × 1.8) - (1.701 × 1.5) = 3.051 - 2.552 = <strong>0.50 g/min</strong></li>
      </ul>

      <h3>2. Energy Expenditure (Cunningham Equation)</h3>
      <p>This equation is better for athletes because it uses Lean Body Mass (LBM).</p>
      <div class="bg-green-50 p-4 rounded border border-green-200 mb-4">
        <strong>Formula:</strong> RMR = 500 + (22 × LBM in kg)<br/>
        Total Daily Energy Expenditure (TDEE) = RMR × Activity Factor
      </div>
      <h4>Example Walkthrough:</h4>
      <p>Athlete: 60kg, 15% Body Fat. Activity Factor 1.5.</p>
      <ol>
        <li><strong>Calculate Fat Mass:</strong> 60kg × 0.15 = 9kg Fat.</li>
        <li><strong>Calculate LBM:</strong> 60kg - 9kg = 51kg LBM.</li>
        <li><strong>Calculate RMR:</strong> 500 + (22 × 51) = 500 + 1122 = <strong>1622 kcal/day</strong>.</li>
        <li><strong>Calculate TDEE:</strong> 1622 × 1.5 = <strong>2433 kcal/day</strong>.</li>
      </ol>

      <h3>3. Fluid Balance & Sweat Rate</h3>
      <p>Used to create hydration plans.</p>
      <div class="bg-amber-50 p-4 rounded border border-amber-200 mb-4">
        <strong>Formula:</strong> Total Sweat Loss = (Start Weight - End Weight) + Fluid Intake
      </div>
      <h4>Example Walkthrough:</h4>
      <p>Start: 70kg. End: 69kg. Drank: 300ml. Duration: 30 mins.</p>
      <ol>
        <li><strong>Weight Loss:</strong> 70 - 69 = 1kg (1000ml).</li>
        <li><strong>Total Sweat:</strong> 1000ml (loss) + 300ml (intake) = <strong>1300ml</strong> total loss.</li>
        <li><strong>Rate per Hour:</strong> 1300ml in 30 mins = 2600ml per 60 mins (2.6 L/hr).</li>
        <li><strong>% Dehydration:</strong> (1kg loss / 70kg start) × 100 = <strong>1.4%</strong>.</li>
      </ol>
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
  },
  // --- Creatine Questions ---
  {
    id: 'q_cr_1',
    topicId: 'creatine-supplementation',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What is the primary mechanism by which creatine supplementation improves high-intensity exercise performance?',
    options: [
      'It increases oxidative phosphorylation in the mitochondria',
      'It enhances glycogen storage in the liver',
      'It increases muscle Phosphocreatine (PCr) stores for rapid ATP regeneration',
      'It stimulates direct breakdown of body fat'
    ],
    correctAnswer: 2,
    explanation: 'Creatine supplementation increases intramuscular PCr stores. This allows for faster regeneration of ATP from ADP during the first few seconds of maximal intensity exercise.',
    sourceRef: 'Creatine / Mechanisms'
  },
  {
    id: 'q_cr_2',
    topicId: 'creatine-supplementation',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Which athlete profile is most likely to be a "non-responder" to creatine supplementation?',
    options: [
      'A strict vegan with low baseline creatine stores',
      'An athlete with naturally high resting muscle creatine levels',
      'A sprinter with a high percentage of Type II fibers',
      'An untrained individual starting a resistance program'
    ],
    correctAnswer: 1,
    explanation: 'The magnitude of increase in muscle creatine is inversely related to initial levels. Athletes with naturally high stores (often heavy meat eaters) have a "ceiling" and gain little benefit, making them non-responders.',
    sourceRef: 'Creatine / Non-responders'
  },
  {
    id: 'q_cr_3',
    topicId: 'creatine-supplementation',
    type: QuestionType.MCQ,
    difficulty: 'Level 4',
    text: 'What is the typical weight gain associated with a creatine loading phase (20g/day for 5 days)?',
    options: [
      'No weight gain',
      '0.5 to 1.5 kg (approx 1-3 lbs)',
      '4 to 5 kg',
      'Weight loss due to increased metabolism'
    ],
    correctAnswer: 1,
    explanation: 'Creatine loading typically causes a rapid weight gain of 0.5 - 1.5 kg, primarily attributed to water retention (cell swelling) rather than fat or dry muscle mass.',
    sourceRef: 'Creatine / Weight Gain'
  },
  {
    id: 'q_cr_4',
    topicId: 'creatine-supplementation',
    type: QuestionType.SHORT_ANSWER,
    difficulty: 'Level 5',
    text: 'Explain why creatine supplementation is generally NOT recommended for marathon runners.',
    correctAnswer: 'It does not improve oxidative (aerobic) energy production, but it causes weight gain which increases the energy cost of running.',
    explanation: 'Creatine helps the ATP-PCr system (0-10s duration). It has no direct benefit for the oxidative system used in marathons. Furthermore, the associated weight gain (fluid retention) reduces power-to-weight ratio and running economy.',
    sourceRef: 'Creatine / Endurance'
  },
  // --- Caffeine Questions ---
  {
    id: 'q_caf_1',
    topicId: 'caffeine-supplementation',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Which of the following best describes the primary mechanism of caffeine\'s ergogenic effect?',
    options: [
      'It stimulates direct breakdown of body fat',
      'It increases muscle glycogen storage',
      'It acts as an adenosine antagonist in the central nervous system',
      'It increases kidney blood flow significantly during exercise'
    ],
    correctAnswer: 2,
    explanation: 'Caffeine blocks adenosine receptors in the brain. This reduces the perception of effort (RPE) and fatigue, allowing athletes to sustain higher intensities.',
    sourceRef: 'Caffeine / Mechanisms'
  },
  {
    id: 'q_caf_2',
    topicId: 'caffeine-supplementation',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'According to current research, what is the optimal dose of caffeine for performance improvement?',
    options: [
      '1 - 2 mg/kg',
      '3 - 6 mg/kg',
      '9 - 13 mg/kg',
      '15+ mg/kg'
    ],
    correctAnswer: 1,
    explanation: 'Doses of 3-6 mg/kg (moderate dose) provide the maximum benefit. Doses higher than 9 mg/kg do not increase performance further but significantly increase the risk of side effects.',
    sourceRef: 'Caffeine / Dosage'
  },
  {
    id: 'q_caf_3',
    topicId: 'caffeine-supplementation',
    type: QuestionType.MCQ,
    difficulty: 'Level 4',
    text: 'Why does caffeine NOT cause dehydration during exercise despite being a diuretic?',
    options: [
      'Athletes drink more water when taking caffeine',
      'Exercise-induced release of catecholamines (adrenaline) constricts renal blood flow',
      'Caffeine promotes water retention in muscle cells',
      'The kidneys stop functioning during exercise'
    ],
    correctAnswer: 1,
    explanation: 'During exercise, the "fight or flight" response (catecholamines) restricts blood flow to the kidneys to prioritize muscles. This overrides the diuretic effect of caffeine, preserving hydration.',
    sourceRef: 'Caffeine / Hydration'
  },
  {
    id: 'q_caf_4',
    topicId: 'caffeine-supplementation',
    type: QuestionType.SHORT_ANSWER,
    difficulty: 'Level 6',
    text: 'Briefly explain why the "Metabolic Theory" (Fat Oxidation) is no longer considered the primary explanation for caffeine\'s performance benefits.',
    correctAnswer: 'Performance improvements are observed even in studies where fat oxidation does not increase.',
    explanation: 'While caffeine can increase fatty acid mobilization, studies show ergogenic effects occur without changes in RER (Respiratory Exchange Ratio) or muscle glycogen sparing, indicating the CNS mechanism is more dominant.',
    sourceRef: 'Caffeine / Mechanisms'
  },
  // --- Buffers (Sodium Bicarbonate) Questions ---
  {
    id: 'q_buf_1',
    topicId: 'buffering-agents',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'For which of the following events would Sodium Bicarbonate supplementation be most effective?',
    options: [
      '100m Sprint (approx 10s)',
      'Marathon (approx 3 hours)',
      '800m Run (approx 2 mins)',
      'Olympic Weightlifting (single rep)'
    ],
    correctAnswer: 2,
    explanation: 'Bicarbonate buffers H+ ions produced during intense anaerobic glycolysis. This pathway is dominant in events lasting 1-10 minutes. It is less useful for very short (<30s) or very long aerobic events.',
    sourceRef: 'Buffers / Efficacy Window'
  },
  {
    id: 'q_buf_2',
    topicId: 'buffering-agents',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What is the generally recommended dosage for Sodium Bicarbonate loading?',
    options: [
      '100 mg/kg',
      '300 mg/kg (0.3 g/kg)',
      '1000 mg/kg',
      '5 g total per day'
    ],
    correctAnswer: 1,
    explanation: '0.3 g/kg (300 mg/kg) is the standard ergogenic dose. Doses lower than 0.2 g/kg are often ineffective, while higher doses increase GI distress risk without added benefit.',
    sourceRef: 'Buffers / Dosage'
  },
  {
    id: 'q_buf_3',
    topicId: 'buffering-agents',
    type: QuestionType.SHORT_ANSWER,
    difficulty: 'Level 5',
    text: 'Why does Sodium Bicarbonate ingestion frequently cause gastrointestinal (GI) distress?',
    correctAnswer: 'Reaction with stomach acid produces CO2 gas (bloating), and high sodium load draws water into the gut (diarrhea).',
    explanation: 'Bicarbonate reacts with HCl in the stomach to form Carbon Dioxide gas, leading to bloating. Additionally, it is a high salt load that causes an osmotic flush (water entering the gut), leading to diarrhea.',
    sourceRef: 'Buffers / Side Effects'
  },
  {
    id: 'q_buf_4',
    topicId: 'buffering-agents',
    type: QuestionType.MCQ,
    difficulty: 'Level 6',
    text: 'Mechanistically, how does increased blood bicarbonate improve muscle performance?',
    options: [
      'It enters the muscle cell and buffers acidity directly inside the mitochondria',
      'It increases the pH gradient between muscle and blood, accelerating H+ efflux from the muscle',
      'It reduces the production of lactic acid by inhibiting glycolysis',
      'It acts as a fuel source for the Krebs cycle'
    ],
    correctAnswer: 1,
    explanation: 'Bicarbonate stays in the extracellular fluid (blood). By making the blood more alkaline, it draws Hydrogen ions OUT of the muscle cell (efflux) faster, preventing intracellular acidosis.',
    sourceRef: 'Buffers / Mechanism'
  },
  // --- Fluid & Hydration Questions ---
  {
    id: 'q_hyd_1',
    topicId: 'fluid-hydration',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'At what percentage of body mass loss due to dehydration is aerobic performance consistently impaired in the heat?',
    options: [
      '0.5%',
      '1%',
      '2%',
      '5%'
    ],
    correctAnswer: 2,
    explanation: 'A body-water deficit greater than 2% of body mass is generally accepted as the threshold where physiological strain (HR, Core Temp) significantly impairs endurance performance in hot conditions.',
    sourceRef: 'Hydration / Thresholds'
  },
  {
    id: 'q_hyd_2',
    topicId: 'fluid-hydration',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What is the recommended volume of fluid to consume after exercise to ensure complete rehydration?',
    options: [
      '100% of weight lost (1 L per kg)',
      '150% of weight lost (1.5 L per kg)',
      '50% of weight lost',
      'Drink to thirst only'
    ],
    correctAnswer: 1,
    explanation: 'To account for obligatory urine losses that occur during the rehydration period, athletes should drink ~1.5L for every 1kg of weight lost (150% replacement).',
    sourceRef: 'Hydration / Post-Exercise'
  },
  {
    id: 'q_hyd_3',
    topicId: 'fluid-hydration',
    type: QuestionType.SHORT_ANSWER,
    difficulty: 'Level 5',
    text: 'Define "Cardiac Drift" and explain how dehydration contributes to it.',
    correctAnswer: 'Cardiac Drift is the progressive rise in heart rate during steady-state exercise. Dehydration reduces blood plasma volume, lowering stroke volume. To maintain Cardiac Output, Heart Rate must increase.',
    explanation: 'As blood volume drops due to sweating, the heart pumps less blood per beat (decreased Stroke Volume). To keep the same amount of blood flowing to muscles (Cardiac Output), the heart rate must drift upwards.',
    sourceRef: 'Hydration / Physiology'
  },
  {
    id: 'q_hyd_4',
    topicId: 'fluid-hydration',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What is the primary cause of exercise-associated Hyponatremia?',
    options: [
      'Eating too much salt before exercise',
      'Drinking excessive hypotonic fluid (water) faster than sweat loss',
      'Excessive sweating of salt',
      'Kidney failure'
    ],
    correctAnswer: 1,
    explanation: 'Hyponatremia (low blood sodium) is most commonly caused by "over-drinking" plain water or weak sports drinks, which dilutes the sodium concentration in the blood.',
    sourceRef: 'Hydration / Hyponatremia'
  },
  // --- Supplement Safety Questions ---
  {
    id: 'q_sup_1',
    topicId: 'supplement-safety',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'According to the "Cologne Study" and similar research, approximately what percentage of commercially available supplements contain undeclared banned substances?',
    options: [
      'Less than 1%',
      '10 - 15%',
      '50%',
      '90%'
    ],
    correctAnswer: 1,
    explanation: 'Studies consistently estimate that 10-15% (sometimes up to 25% depending on the country) of supplements are contaminated with steroids or stimulants not listed on the label.',
    sourceRef: 'Supplement Safety / Contamination'
  },
  {
    id: 'q_sup_2',
    topicId: 'supplement-safety',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'What does the principle of "Strict Liability" mean in the context of anti-doping?',
    options: [
      'Athletes are only liable if they intentionally take a banned substance',
      'Coaches are responsible for what their athletes take',
      'An athlete is solely responsible for any prohibited substance found in their body, regardless of intent',
      'Supplement manufacturers are liable for positive drug tests'
    ],
    correctAnswer: 2,
    explanation: 'Strict Liability means the athlete is 100% responsible. "I didn\'t know it was contaminated" or "My coach gave it to me" is not a valid defense against a ban.',
    sourceRef: 'Supplement Safety / Strict Liability'
  },
  {
    id: 'q_sup_3',
    topicId: 'supplement-safety',
    type: QuestionType.SHORT_ANSWER,
    difficulty: 'Level 5',
    text: 'Identify two strategies an athlete can use to minimize the risk of inadvertent doping from supplements.',
    correctAnswer: '1. Use products batch-tested by third parties (e.g., Informed Sport). 2. Avoid products with red flags (e.g., proprietary blends, weight loss claims).',
    explanation: 'Using batch-tested programs (Informed Sport) is the most effective strategy. Checking ingredients on Global DRO and avoiding high-risk categories (weight loss, muscle building) also reduces risk.',
    sourceRef: 'Supplement Safety / Risk Reduction'
  },
  // --- Research Standards Questions ---
  {
    id: 'q_res_1',
    topicId: 'research-standards',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Which study design provides the highest level of evidence for the ergogenic effect of a supplement?',
    options: [
      'Single-blind, parallel group study',
      'Randomized, double-blind, placebo-controlled, crossover trial',
      'Observational cohort study',
      'In vitro (cell culture) study'
    ],
    correctAnswer: 1,
    explanation: 'A randomized, double-blind, placebo-controlled crossover trial minimizes bias (blinding), accounts for individual variability (crossover), and controls for the placebo effect, making it the gold standard.',
    sourceRef: 'Research Standards / Design'
  },
  {
    id: 'q_res_2',
    topicId: 'research-standards',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Why is "Internal Validity" important when evaluating a sports nutrition study?',
    options: [
      'It ensures the results can be applied to all athletes globally',
      'It ensures the study was conducted in a laboratory',
      'It ensures that the observed effect was actually caused by the treatment and not confounding variables',
      'It ensures the study is published in a high-impact journal'
    ],
    correctAnswer: 2,
    explanation: 'Internal validity refers to the trustworthiness of the cause-and-effect relationship. High internal validity means variables (diet, sleep, training) were controlled so we know the supplement caused the result.',
    sourceRef: 'Research Standards / Validity'
  },
  {
    id: 'q_res_3',
    topicId: 'research-standards',
    type: QuestionType.SHORT_ANSWER,
    difficulty: 'Level 6',
    text: 'Explain why a study using untrained students might have low "External Validity" for an elite athlete.',
    correctAnswer: 'Untrained subjects have greater potential for improvement and different physiology. Results may not extrapolate to elites who are closer to their genetic ceiling.',
    explanation: 'External validity is about applicability. Untrained individuals respond to almost any stimulus (training or nutrition). Elite athletes have "marginal gains". What works for a novice (e.g., any protein) might not be specific enough for an Olympian.',
    sourceRef: 'Research Standards / External Validity'
  },

  // --- NEW Data Analysis Questions ---
  {
    id: 'q_calc_1',
    topicId: 'data-analysis',
    type: QuestionType.SCENARIO,
    difficulty: 'Level 6',
    text: 'Scenario: Indirect calorimetry data shows VCO2 = 2.5 L/min and VO2 = 2.5 L/min. 1) Calculate the RER. 2) Based on this RER, what is the primary fuel source?',
    correctAnswer: 'RER = 1.0. Primary fuel is 100% Carbohydrate.',
    explanation: 'RER = VCO2/VO2 = 2.5/2.5 = 1.0. An RER of 1.0 indicates that carbohydrates are the exclusive fuel source being oxidized.',
    sourceRef: 'Data Analysis / Substrate Oxidation'
  },
  {
    id: 'q_calc_2',
    topicId: 'data-analysis',
    type: QuestionType.SCENARIO,
    difficulty: 'Level 6',
    text: 'Scenario: An athlete weighs 80kg with 10% body fat. Using the Cunningham Equation (RMR = 500 + 22 x LBM), calculate their Resting Metabolic Rate (RMR).',
    correctAnswer: '2084 kcal/day',
    explanation: '1. Fat Mass = 80 * 0.10 = 8kg. 2. LBM = 80 - 8 = 72kg. 3. RMR = 500 + (22 * 72) = 500 + 1584 = 2084 kcal/day.',
    sourceRef: 'Data Analysis / Energy Expenditure'
  },
  {
    id: 'q_calc_3',
    topicId: 'data-analysis',
    type: QuestionType.SCENARIO,
    difficulty: 'Level 6',
    text: 'Scenario: A runner starts a 1-hour race at 60kg and finishes at 59kg. They drank 500ml of water during the run. Calculate their total sweat rate in L/hr.',
    correctAnswer: '1.5 L/hr',
    explanation: 'Weight loss = 1kg (1000ml). Fluid intake = 500ml. Total sweat loss = 1000 + 500 = 1500ml. Since the run was 1 hour, the rate is 1.5 L/hr.',
    sourceRef: 'Data Analysis / Fluid Balance'
  }

];