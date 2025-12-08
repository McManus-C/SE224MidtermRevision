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
    description: 'How different dietary strategies (high carbohydrate, low carbohydrate, ketogenic, and pre-exercise fuelling) alter substrate utilisation, physiology, and performance in different sports.',
    learningObjectives: [
      'Describe the main energy systems (ATP-PCr, glycolytic, oxidative) and their preferred substrates during different types of exercise.',
      'Explain how high carbohydrate diets and carbohydrate loading increase muscle and liver glycogen, and how this influences endurance and high-intensity performance.',
      'Discuss the metabolic and hormonal adaptations to low carbohydrate and ketogenic diets, including increased fat oxidation, ketosis, and the typical adaptation period.',
      'Evaluate how pre-exercise carbohydrate intake affects substrate availability and utilisation during exercise, and the implications for performance.',
      'Apply dietary strategies in an individualised way, considering hormones, cellular signalling, oxidative stress, inflammation, sport-specific demands, and athlete characteristics (including sex and training status).'
    ],
    keyPoints: [
      'Substrate utilisation reflects a continuum: ATP-PCr, glycolytic, and oxidative systems all contribute, with relative use of carbohydrate and fat determined largely by exercise intensity and duration.',
      'High carbohydrate diets and carbohydrate loading protocols increase muscle and liver glycogen stores, improving capacity for prolonged high-intensity efforts and repeated sprints.',
      'Low carbohydrate and ketogenic diets markedly increase fat oxidation but downregulate key carbohydrate-oxidising enzymes (such as PDH), often impairing exercise economy and high-intensity performance despite high fat use.',
      'Pre-exercise carbohydrate intake increases blood glucose and insulin, supports high-intensity performance, but acutely suppresses fat oxidation by inhibiting lipolysis.',
      'Optimal dietary strategy is sport- and athlete-specific, influenced by hormonal responses, training phase, sex, gastrointestinal tolerance, and the relative importance of sustained high intensity versus maximal fat oxidation.'
    ],
    quickSummary: [
      '<strong>Energy systems & substrates:</strong> All three energy systems (ATP-PCr, glycolytic, oxidative) operate together. The ATP-PCr system and glycolysis rely primarily on carbohydrate (phosphocreatine and muscle glycogen), while oxidative metabolism uses both carbohydrate and fat. Intensity, duration, and training status determine the relative mix.',
      '<strong>High carbohydrate diets:</strong> High carbohydrate intake, especially when periodised around training, increases muscle and liver glycogen and supports high-intensity and prolonged endurance performance. Carbohydrate loading before long events further increases glycogen stores and delays fatigue.',
      '<strong>Low carbohydrate & ketogenic diets:</strong> LCHF and ketogenic diets substantially increase fat oxidation and can induce nutritional ketosis (elevated blood ketones), but often reduce PDH activity and exercise economy at race pace. This usually impairs high-intensity performance despite excellent fat use.',
      '<strong>Pre-exercise carbohydrate:</strong> Carbohydrate before exercise elevates blood glucose and insulin, prioritising carbohydrate use during the early part of exercise. This can benefit high-intensity or key sessions but will reduce fat oxidation compared with fasted or low-glycogen conditions.',
      '<strong>Applied practice:</strong> Dietary strategies should be matched to the event (duration, intensity), the athlete (metabolic profile, GI tolerance, sex), and the training phase. There is no universal “best” diet, only strategies that are more or less appropriate for a given context.'
    ],
    fullNotes: `
      <h3>1. Substrate Utilisation and Energy Systems</h3>
      <p>During exercise, ATP is resynthesised by three overlapping energy systems, each with preferred substrates:</p>
      <ul>
        <li><strong>ATP-PCr system:</strong> Dominant for very short, explosive efforts (~0–10 seconds). Uses stored ATP and phosphocreatine (PCr) within the muscle. Substrate is phosphagen, not carbohydrate or fat per se.</li>
        <li><strong>Glycolytic system:</strong> Dominant during high-intensity efforts lasting roughly 30 seconds to a few minutes. Uses <strong>muscle glycogen</strong> and blood glucose to generate ATP rapidly, producing lactate and H+ when flux is high.</li>
        <li><strong>Oxidative system (aerobic):</strong> Uses both <strong>carbohydrate (glucose/glycogen)</strong> and <strong>fat (plasma FFA, intramuscular triglyceride)</strong> to produce ATP in mitochondria. Dominant at rest and during prolonged, lower intensity exercise.</li>
      </ul>
      <p>There is no absolute “switch” from carbohydrate to fat. Instead, as intensity increases, the proportion of ATP derived from carbohydrate rises and the contribution from fat falls, even though both substrates are usually being used simultaneously.</p>

      <h3>2. High Carbohydrate Diets and Carbohydrate Loading</h3>
      <p><strong>High carbohydrate diets</strong> supply the main fuel for high-intensity and long-duration exercise:</p>
      <ul>
        <li><strong>Glycogen storage:</strong> High carbohydrate intake (for example 6–10 g/kg/day in endurance athletes) increases muscle and liver glycogen stores, which are key determinants of endurance performance.</li>
        <li><strong>Carbohydrate loading:</strong> In the 24–48 hours before long events (typically >90 minutes), increasing intake to ~8–12 g/kg/day can super-compensate glycogen stores, delaying fatigue and improving time-trial performance.</li>
        <li><strong>Nutrient timing:</strong> Concentrating carbohydrate intake in the 24–36 hours before competition is more efficient than spreading very high intakes over many days. Post-exercise carbohydrate (1.0–1.2 g/kg/h in early recovery) accelerates glycogen resynthesis between sessions.</li>
        <li><strong>Hormonal responses:</strong> High carbohydrate availability stimulates insulin secretion, which promotes glucose uptake into muscle (via GLUT4), glycogen synthase activation, and glycogen storage. Over time, regular training plus appropriate carbohydrate intake can enhance insulin sensitivity.</li>
      </ul>
      <div class="bg-blue-50 p-4 rounded-md border border-blue-200 my-4">
        <strong>Applied example:</strong> A marathon runner tapering training in race week may raise carbohydrate intake to ~8–10 g/kg/day in the final 36–48 hours to maximise muscle and liver glycogen, while moderating fibre and fat to reduce GI load.
      </div>

      <h3>3. Low Carbohydrate and Ketogenic Diets</h3>
      <p><strong>Low-carbohydrate high-fat (LCHF)</strong> and <strong>ketogenic</strong> diets substantially change substrate use and hormonal environment:</p>
      <ul>
        <li><strong>Substrate shifts:</strong> With carbohydrate intake markedly reduced (for example <50 g/day in strict ketogenic diets), liver glycogen falls, insulin levels are low, glucagon and catecholamines rise, and fat oxidation rates increase markedly.</li>
        <li><strong>Ketosis:</strong> In ketogenic diets, the liver produces ketone bodies (β-hydroxybutyrate, acetoacetate). Blood ketone concentrations are often maintained above ~0.5–1.0 mmol/L as a practical threshold for “nutritional ketosis”.</li>
        <li><strong>Enzyme adaptations:</strong> LCHF and ketogenic diets upregulate enzymes for fat oxidation but downregulate carbohydrate-oxidising enzymes such as <em>Pyruvate Dehydrogenase (PDH)</em>. This impairs the ability to use carbohydrate rapidly at high intensities.</li>
        <li><strong>Exercise economy:</strong> Oxidising fat requires more oxygen per unit of ATP than carbohydrate. As a result, at a given running or cycling speed, oxygen cost increases and exercise economy worsens in many athletes on LCHF diets, particularly at race pace.</li>
        <li><strong>Adaptation period:</strong> The initial 1–2 weeks of a ketogenic diet are often associated with fatigue, reduced high-intensity capacity, and sometimes GI or cognitive symptoms. Some adaptations (for example maximal fat oxidation) may continue to develop over several weeks.</li>
        <li><strong>Biomarker monitoring:</strong> In research and high-performance settings, blood or breath ketone measurements are used to confirm adherence and to quantify the degree of ketosis, rather than relying on diet records alone.</li>
      </ul>
      <p><strong>Performance implications:</strong> While LCHF and ketogenic diets can markedly increase fat oxidation, many studies show no improvement or even impaired performance in events requiring sustained high intensity, especially once athletes are well trained. They may have niche applications (for example some ultra-endurance scenarios) but are rarely optimal for sports demanding repeated high-intensity efforts.</p>

      <h3>4. Pre-Exercise Carbohydrate Intake</h3>
      <p>Pre-exercise carbohydrate intake influences which substrates are used, particularly in the early part of exercise:</p>
      <ul>
        <li><strong>Substrate availability:</strong> A pre-exercise meal or snack containing carbohydrate increases blood glucose and tops up liver glycogen, supporting performance in prolonged or high-intensity sessions.</li>
        <li><strong>Hormonal effect:</strong> Carbohydrate ingestion raises insulin, which suppresses lipolysis and reduces plasma free fatty acids. Consequently, fat oxidation is reduced, and carbohydrate use is increased during early exercise.</li>
        <li><strong>Timing:</strong> Larger mixed meals are typically consumed 2–4 hours before exercise, while smaller, more easily digestible snacks (for example 1–2 g/kg carbohydrate) can be taken in the final 60 minutes, depending on GI tolerance.</li>
        <li><strong>Performance impact:</strong> For most moderate to high-intensity events, especially where carbohydrate is a primary fuel, pre-exercise carbohydrate tends to improve performance. In contrast, fasted or low-glycogen training sessions may be used strategically to emphasise metabolic adaptation rather than acute performance.</li>
      </ul>

      <h3>5. Hormones, Signalling, and Substrate Utilisation</h3>
      <p>Hormones and cellular signalling pathways integrate diet, training, and substrate use:</p>
      <ul>
        <li><strong>Insulin:</strong> Promotes glucose uptake, glycogen synthesis, and lipogenesis; suppresses lipolysis and ketogenesis. High carbohydrate intake and feeding states favour carbohydrate use and storage.</li>
        <li><strong>Glucagon and catecholamines (adrenaline/noradrenaline):</strong> Promote glycogenolysis and lipolysis, increasing availability of glucose and free fatty acids during exercise and fasting.</li>
        <li><strong>Cortisol:</strong> Supports gluconeogenesis and mobilisation of fuels under prolonged stress. Excessive energy deficit or chronically low carbohydrate availability can elevate cortisol and may contribute to impaired recovery and immune suppression.</li>
        <li><strong>Cellular signalling:</strong> Low glycogen availability and high metabolic stress activate AMPK and p38 MAPK, which increase expression of genes involved in mitochondrial biogenesis and fat oxidation. Conversely, high carbohydrate availability around key sessions may support higher training quality at the cost of a smaller “stress” signal.</li>
      </ul>
      <p><strong>Oxidative stress and inflammation:</strong> Both very high training loads and aggressive low-carbohydrate approaches can increase markers of oxidative stress and inflammation. Adequate carbohydrate around key sessions generally supports immune function and limits excessive stress responses, particularly during heavy training blocks.</p>

      <h3>6. Application in Sports and Individual Considerations</h3>
      <p>The “best” dietary strategy depends on the sport, the event demands, and the individual athlete.</p>
      <ul>
        <li><strong>Endurance sports (running, cycling, triathlon):</strong> Typically benefit from high carbohydrate availability for key sessions and competition (including carbohydrate loading for longer events), alongside occasional low-glycogen sessions if used carefully for adaptation.</li>
        <li><strong>Intermittent team sports (football, rugby, hockey):</strong> Require high glycogen availability to sustain repeated sprints and high-intensity efforts across a match. Between-game nutrition focuses on restoring glycogen with adequate carbohydrate and energy.</li>
        <li><strong>Strength and power sports:</strong> Still require sufficient carbohydrate to support high-intensity training, but total energy and protein are often the primary focus. Very low-carbohydrate diets are usually not advised in heavy training phases.</li>
        <li><strong>Ultra-endurance and adventure racing:</strong> Higher relative fat oxidation may be advantageous in some contexts, but athletes still benefit from carbohydrate availability at key stages; mixed strategies are often used rather than extreme diets.</li>
      </ul>
      <p><strong>Individual factors:</strong></p>
      <ul>
        <li><strong>Sex:</strong> There are average sex differences in substrate use (for example women often oxidise relatively more fat at the same absolute intensity), but there is large individual variability. Strategies should be based on the individual, not only on sex.</li>
        <li><strong>GI tolerance:</strong> Some athletes struggle with large carbohydrate loads or high-fibre foods close to exercise and may need more gradual fuelling or tailored product choices.</li>
        <li><strong>Metabolic profile:</strong> Laboratory testing (for example RER–intensity curves, maximal fat oxidation assessments) can help fine-tune fuelling plans but do not replace the need for field testing of strategies in training.</li>
        <li><strong>Training phase:</strong> Off-season, heavy training blocks, taper, and competition phases may all warrant different emphases (for example more aggressive carbohydrate loading in taper, more flexibility off-season).</li>
      </ul>
      <p>Overall, dietary strategies should be periodised and individualised, aiming to align substrate availability with the demands of each session and competition, while supporting long-term health, recovery, and adaptation.</p>
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
    description: 'How sodium bicarbonate acts as an extracellular buffer, its biochemical effects on glycolysis and pH, dosing strategies, blood bicarbonate threshold concepts, and sport-specific applications.',
    learningObjectives: [
      'Define what a blood acid buffer is and explain why maintaining blood and muscle pH is important during intense exercise.',
      'Describe how anaerobic glycolysis and lactic acid production lead to increased hydrogen ion (H+) accumulation and acidosis.',
      'Explain how sodium bicarbonate increases extracellular buffering capacity, facilitates H+ efflux from muscle, and can delay fatigue in high intensity exercise.',
      'Outline the biochemical links between glycolysis, lactic acid, NAD+ regeneration, and the need for buffering to maintain enzyme function and ATP production.',
      'Discuss dosing strategies, the blood bicarbonate threshold concept (e.g. ≥6 mmol/L increase from baseline), side effects, inter-individual variability, and the types of sports where sodium bicarbonate is most effective.'
    ],
    keyPoints: [
      'High intensity exercise (roughly 1–10 minutes) relies heavily on anaerobic glycolysis, producing lactate and H+ which lower pH and impair muscle function.',
      'Blood bicarbonate (HCO3–) is a major extracellular buffer that reacts with H+ to form carbonic acid, which is converted to CO2 and water and then exhaled.',
      'Sodium bicarbonate supplementation raises blood bicarbonate concentration and pH, increasing the gradient for H+ efflux from muscle and delaying intracellular acidosis.',
      'The blood bicarbonate threshold concept suggests that an increase of around 6 mmol/L above baseline is associated with a high likelihood of an ergogenic effect, and the earliest time this rise is achieved can be used to time exercise onset.',
      'Typical doses are 0.2–0.3 g/kg body mass, but gastrointestinal side effects (bloating, nausea, diarrhoea) are common and dosing and timing must be individualised.'
    ],
    quickSummary: [
      '<strong>What is a buffer?</strong> A blood acid buffer (such as bicarbonate) helps maintain pH by binding excess H+ and converting it into CO2 and water, which can be removed via the lungs.',
      '<strong>Why is it needed?</strong> High intensity exercise increases H+ production from glycolysis and lactic acid formation, lowering pH and interfering with enzyme activity and muscle contraction.',
      '<strong>How sodium bicarbonate works:</strong> Ingested NaHCO3 raises blood bicarbonate and pH. This enlarges the gradient for H+ to leave the muscle, so intracellular pH drops more slowly and high intensity efforts can be sustained for longer.',
      '<strong>Blood bicarbonate threshold:</strong> An increase of about 6 mmol/L above resting blood bicarbonate is often used as a practical threshold for a likely ergogenic effect. The earliest time point at which this Δ[HCO3–] ≥ 6 mmol/L is reached indicates when exercise should begin.',
      '<strong>Applied use:</strong> Doses of ~0.3 g/kg taken before events lasting 1–10 minutes can improve performance, but side effects and variation in time to peak or threshold mean that testing dose and timing in training is essential.'
    ],
    fullNotes: `
      <h3>Blood Acid Buffers and pH Balance</h3>
      <p>The body tightly regulates pH because many enzymes and ion channels function optimally within a narrow pH range. During intense exercise, hydrogen ions (H+) accumulate in muscle and blood, lowering pH and contributing to fatigue.</p>
      <ul>
        <li><strong>Blood acid buffer:</strong> A substance that can accept or donate H+ to resist changes in pH. In blood, the main buffer system is the bicarbonate (HCO3–) system.</li>
        <li><strong>Bicarbonate system:</strong> H+ + HCO3– ↔ H2CO3 ↔ CO2 + H2O. Carbon dioxide is then exhaled by the lungs.</li>
        <li><strong>Why during exercise?</strong> When exercise intensity is high, H+ production exceeds the capacity of intrinsic intracellular buffers, so extracellular buffers like bicarbonate become critical to help maintain pH.</li>
      </ul>

      <h3>Mechanism of Action of Sodium Bicarbonate</h3>
      <p>Sodium bicarbonate (NaHCO3) is ingested as a supplement, absorbed into the blood, and increases plasma bicarbonate concentration and pH.</p>
      <ul>
        <li><strong>Increased [HCO3–]:</strong> Raises blood buffering capacity and makes the blood more alkaline.</li>
        <li><strong>H+ efflux:</strong> The higher extracellular pH creates a steeper gradient for H+ to move out of the muscle cell into the blood via transporters (for example MCT co-transport of lactate and H+).</li>
        <li><strong>Net effect:</strong> Muscle pH is better preserved at a given workload, so glycolytic enzymes and excitation–contraction coupling can continue to function for longer.</li>
      </ul>
      <div class="bg-amber-50 p-4 rounded-md border border-amber-200 my-4">
        <strong>Key idea:</strong> Sodium bicarbonate does not stop H+ production, it simply helps remove H+ from the muscle more quickly by providing more buffering capacity in the blood.
      </div>

      <h3>Relationship with Energy Systems and Glycolysis</h3>
      <p>During high intensity exercise (roughly 30 seconds to 10 minutes), energy demand is high and anaerobic glycolysis becomes a major source of ATP.</p>
      <ul>
        <li><strong>Glycolysis:</strong> Glucose is broken down to pyruvate, producing ATP and NADH. Under limited oxygen availability or very high flux, pyruvate is converted to lactate by lactate dehydrogenase.</li>
        <li><strong>Lactic acid concept:</strong> "Lactic acid" is formed but rapidly dissociates into lactate and H+. It is the accumulation of H+, not lactate itself, that is more strongly linked to acidosis and impaired function.</li>
        <li><strong>NAD+ regeneration:</strong> The conversion of pyruvate to lactate converts NADH back to NAD+, allowing glycolysis to continue. If pH drops too far, enzyme activity and ion handling are impaired and ATP production becomes less efficient.</li>
      </ul>
      <p><strong>Role of buffering:</strong> By buffering H+ in the blood, sodium bicarbonate allows more H+ to exit the muscle. This helps maintain a more favourable intracellular pH, permits continued high glycolytic flux, and supports ongoing ATP production during sustained high intensity efforts.</p>
      <p><strong>Lactate threshold and tolerance:</strong> Sodium bicarbonate does not fundamentally change the long term training determined lactate threshold, but acutely it can increase tolerance to high lactate and H+ levels. This allows athletes to sustain intensities at or above their usual threshold for longer.</p>

      <h3>Blood Bicarbonate Threshold Concept and Timing</h3>
      <p>There is substantial individual variability in how quickly and how much blood bicarbonate rises after ingestion of sodium bicarbonate. Rather than relying only on a fixed time (for example 60 minutes), some practitioners use a "blood bicarbonate threshold" to guide timing.</p>
      <ul>
        <li><strong>Threshold definition:</strong> An increase in blood bicarbonate of roughly <strong>6 mmol/L above baseline</strong> is often used as a practical threshold associated with a high probability of ergogenic benefit.</li>
        <li><strong>Δ[HCO3–] calculation:</strong> Δ[HCO3–] = [HCO3–]<sub>time</sub> – [HCO3–]<sub>baseline</sub>.</li>
        <li><strong>Earliest time to threshold:</strong> Blood samples are taken at intervals (for example every 20–30 minutes) after ingestion. The <strong>earliest time point</strong> at which Δ[HCO3–] ≥ 6 mmol/L is considered the point from which exercise should begin.</li>
        <li><strong>Application:</strong> If baseline [HCO3–] is 24 mmol/L and measurements after ingestion are 28 mmol/L at 45 minutes, 30 mmol/L at 75 minutes, and 31 mmol/L at 105 minutes, then Δ[HCO3–] is 4, 6, and 7 mmol/L respectively. The threshold is first reached at 75 minutes, so exercise (or race start) would ideally be timed from this point.</li>
      </ul>
      <div class="bg-blue-50 p-4 rounded-md border border-blue-200 my-4">
        <strong>Practical takeaway:</strong> Time to peak bicarbonate and time to reach the 6 mmol/L threshold can differ between individuals. Testing in advance allows athletes to plan ingestion so that threshold is reached shortly before their warm up and main effort.
      </div>

      <h3>Applied Considerations: Dosing, Performance, and Sport Types</h3>
      <p><strong>Performance effects:</strong> Meta-analyses generally show small to moderate improvements in performance (often a few percent) in events that are heavily reliant on anaerobic glycolysis, such as 400–1500 m track events, 1–10 minute cycling time trials, repeated sprints, and some combat sports.</p>
      <ul>
        <li><strong>Most responsive events:</strong> Efforts lasting approximately 1–10 minutes where anaerobic glycolysis and H+ accumulation are pronounced.</li>
        <li><strong>Less responsive events:</strong> Very short sprints (<30 seconds) that are dominated by the ATP–PCr system, or long endurance events where fatigue is driven by other factors.</li>
      </ul>

      <h4>Dosing strategies</h4>
      <ul>
        <li><strong>Standard single dose:</strong> ~0.3 g/kg body mass (300 mg/kg) taken in a single bolus 60–180 minutes before exercise.</li>
        <li><strong>Lower doses:</strong> 0.2 g/kg may still raise bicarbonate but with smaller effects and fewer side effects.</li>
        <li><strong>Split or serial dosing:</strong> Dividing the total dose into smaller portions over 60–90 minutes, or taking repeated smaller doses across a day, can reduce gastrointestinal discomfort and create a more stable elevation in bicarbonate.</li>
        <li><strong>Timing:</strong> Without individual blood testing, many protocols use ~60–120 minutes pre exercise as a starting point and refine based on performance and symptoms. With blood testing, the earliest time at which Δ[HCO3–] ≥ 6 mmol/L can be used to fine tune timing.</li>
      </ul>

      <h4>Side effects and safety</h4>
      <ul>
        <li><strong>Gastrointestinal symptoms:</strong> Bloating, nausea, stomach cramps, and diarrhoea are common because NaHCO3 reacts with stomach acid (HCl) to produce CO2 gas and because the high sodium load draws water into the gut.</li>
        <li><strong>Mitigation strategies:</strong> Taking with a small carbohydrate rich meal, using capsules rather than powder, splitting the dose over time, or slightly reducing total dose can help.</li>
        <li><strong>Sodium load:</strong> The supplement contributes a large sodium load, which may need consideration in athletes with hypertension or renal issues, though this is less relevant in otherwise healthy individuals.</li>
      </ul>

      <h4>Individualisation</h4>
      <p>There is considerable variation in response to sodium bicarbonate:</p>
      <ul>
        <li><strong>Responder versus non responder:</strong> Some athletes show large increases in [HCO3–] and clear performance benefits; others have smaller biochemical changes or poorer tolerance.</li>
        <li><strong>Trial in training:</strong> Dose, timing, and co ingestion with food should be tested in training sessions that mimic competition demands, rather than introduced for the first time on race day.</li>
        <li><strong>Sport and position specific use:</strong> For example, a middle distance runner or rower may use bicarbonate differently compared with a team sport athlete relying on repeated sprints.</li>
      </ul>
    `
  },
   {
    id: 'fluid-hydration',
    title: 'Fluid Intake & Hydration Strategies',
    description: 'Pre-, during- and post-exercise hydration strategies, individual sweat rates, rehydration protocols, and risks of both under- and overhydration.',
    learningObjectives: [
      'Explain the physiological consequences of dehydration and overhydration on cardiovascular function, thermoregulation, and performance.',
      'Outline evidence-based pre-exercise hydration guidelines, including recommended fluid volumes, timing, electrolytes, and individual considerations.',
      'Describe the goals and practical strategies for fluid intake during exercise, including the role of sweat rate assessment, carbohydrates, and electrolytes.',
      'Calculate post-exercise rehydration needs (1.25–1.5 times the fluid deficit) and explain the importance of sodium and timing for recovery.',
      'Discuss general and special considerations for hydration, including individual variability, hyponatraemia risk, urine colour, body mass monitoring, beverage choice, environmental conditions, and the impact of caffeine and alcohol.'
    ],
    keyPoints: [
      'Athletes should begin exercise in a euhydrated state, typically by consuming ~5–7 ml/kg body mass 2–4 hours before exercise, with a smaller top-up if needed.',
      'During exercise, the main goal is to limit body mass loss to <2% by using individualised plans based on sweat rate, exercise duration, intensity, and environment.',
      'For post-exercise rehydration, athletes should ingest ~125–150% of the fluid lost (1.25–1.5 L per kg body mass lost), including sodium, to fully restore fluid balance.',
      'Hydration needs vary considerably; simple tools such as urine colour and pre- to post-exercise body mass changes help monitor hydration and guide individual plans.',
      'Overhydration with low-sodium fluids can cause hyponatraemia; athletes should avoid “drinking as much as possible” without considering sodium intake and body mass changes.'
    ],
    quickSummary: [
      '<strong>Pre-Exercise:</strong> Start in a well-hydrated (euhydrated) state. A practical guideline is ~5–7 ml/kg body mass 2–4 hours before exercise, with a smaller additional drink (3–5 ml/kg) 1–2 hours before if urine is still dark or minimal. Including some sodium (e.g. in a sports drink or salted snack) helps retain fluid.',
      '<strong>During Exercise:</strong> The goal is to prevent excessive dehydration (generally >2% body mass loss) and maintain performance. Typical intake is often ~0.4–0.8 L/hour, but this should be individualised based on sweat rate, exercise duration and environmental conditions. For events >60–90 minutes, drinks containing both carbohydrates and electrolytes are advantageous.',
      '<strong>Post-Exercise:</strong> After exercise, aim to replace approximately 125–150% of the fluid deficit (about 1.25–1.5 L per kg of body mass lost) over the next few hours. Sodium in the recovery drink (or food) is critical to restore plasma volume and reduce urine losses.',
      '<strong>Monitoring & General Considerations:</strong> Hydration needs are highly individual. Track pre- and post-exercise body mass, observe urine colour, and repeat sweat rate assessments to refine personal plans. Be aware of overdrinking and the risk of exercise-associated hyponatraemia, especially during long events.',
      '<strong>Special Situations:</strong> Hydration strategies must be adapted for heat, humidity, cold, altitude, sex differences, and sport type. Caffeine has only a small diuretic effect at rest and little impact on hydration during exercise, whereas alcohol is counterproductive to early recovery. Athletes should use trial and error in training to refine what works best for them.'
    ],
    fullNotes: `
      <h3>Physiological Effects of Dehydration and Overhydration</h3>
      <p>Water is essential for thermoregulation (sweat production) and circulation (blood plasma volume). When you sweat heavily without adequate drinking:</p>
      <ul>
        <li><strong>Plasma volume falls:</strong> Blood becomes more viscous.</li>
        <li><strong>Stroke volume decreases:</strong> The heart pumps less blood per beat.</li>
        <li><strong>Heart rate rises:</strong> To maintain cardiac output, heart rate drifts upwards (cardiac drift).</li>
        <li><strong>Core temperature rises:</strong> Skin blood flow is reduced and heat dissipation becomes less effective.</li>
      </ul>
      <p><strong>The ~2% threshold:</strong> Endurance performance is consistently impaired once body mass loss exceeds about 2%, especially in hot environments.</p>
      <p><strong>Overhydration:</strong> Drinking more fluid than is lost, particularly if that fluid is low in sodium, can dilute blood sodium concentration and lead to hyponatraemia. Both dehydration and overhydration can be harmful to health and performance.</p>

      <h3>Pre-Exercise Hydration</h3>
      <p>Starting exercise in a euhydrated state reduces cardiovascular and thermal strain and helps maintain performance.</p>
      <ul>
        <li><strong>Why start well hydrated?</strong> Starting in a fluid deficit means that any additional sweat loss rapidly pushes the athlete towards the 2% performance-impairing threshold.</li>
        <li><strong>Volume guidelines:</strong> A common recommendation is to consume approximately <strong>5–7 ml/kg body mass</strong> of fluid <strong>2–4 hours before exercise</strong>. For a 70 kg athlete this equates to 350–490 ml.</li>
        <li><strong>Top-up strategy:</strong> If urine is still dark or minimal 2 hours before exercise, a further <strong>3–5 ml/kg</strong> (210–350 ml for 70 kg) can be consumed.</li>
        <li><strong>Electrolytes:</strong> Including sodium in the pre-exercise fluid (via a sports drink or salted snack) supports fluid retention and stimulates thirst, which is useful if the athlete tends to underdrink.</li>
        <li><strong>Individual variation:</strong> Heavier sweaters, those not acclimatised to heat, or athletes with a history of cramping may benefit from slightly higher pre-exercise sodium and fluid intake.</li>
        <li><strong>Urine colour:</strong> A light straw colour is consistent with euhydration. Very dark urine suggests underhydration, very pale urine may indicate overdrinking.</li>
      </ul>

      <h3>Fluid Intake During Exercise</h3>
      <p>The primary goals during exercise are to limit excessive dehydration, maintain cardiovascular function and thermoregulation, and avoid overhydration.</p>
      <ul>
        <li><strong>Goal:</strong> Limit body mass loss to around <strong>2% or less</strong> for most events. Some highly trained athletes may tolerate slightly larger losses, but this should be tested in training.</li>
        <li><strong>General intake ranges:</strong> Many guidelines suggest starting with around <strong>0.4–0.8 L/hour</strong>, then refining based on measured sweat rate, gastrointestinal tolerance, and event conditions.</li>
        <li><strong>Individual sweat rates:</strong> Sweat rates can range from <strong>0.5–3.0 L/hour</strong> or more, so a fixed drinking volume for all athletes is not appropriate.</li>
        <li><strong>Role of carbohydrates:</strong> For continuous exercise lasting >60–90 minutes, fluids containing <strong>30–60 g carbohydrate per hour</strong> support performance. In very long events, intakes may rise towards 90 g/hour from mixed carbohydrate sources if tolerated.</li>
        <li><strong>Role of electrolytes:</strong> Sodium concentrations in sports drinks are typically 20–60 mmol/L. Sodium helps maintain thirst, supports fluid retention and reduces the risk of hyponatraemia compared with plain water.</li>
        <li><strong>Adjusting for conditions:</strong> Hot, humid or high-intensity conditions increase sweat loss and may justify higher fluid intake within the athlete’s tolerance. In cool environments or low-intensity sessions, aggressive drinking is unnecessary and may increase hyponatraemia risk.</li>
        <li><strong>Determining individual needs:</strong> A simple sweat test compares pre- and post-exercise body mass, accounting for fluid intake and urine losses, to estimate sweat rate. Repeating this under different conditions allows an athlete to build an individualised drinking plan.</li>
      </ul>

      <h3>Post-Exercise Rehydration</h3>
      <p>After exercise, the objectives are to restore fluid and electrolyte balance, support recovery, and prepare for the next session or competition.</p>
      <ul>
        <li><strong>Volume:</strong> Because some of the ingested fluid will be lost as urine, athletes are advised to consume approximately <strong>125–150% of the fluid deficit</strong>. Practically, this equates to <strong>1.25–1.5 L per kg of body mass lost</strong>.</li>
        <li><strong>Sodium:</strong> Sodium is key to effective rehydration. It promotes fluid retention and stimulates thirst. Recovery drinks should contain sodium, or athletes should consume salty foods alongside fluid.</li>
        <li><strong>Timing:</strong> If recovery time before the next bout is short (e.g. same day or next morning), aggressive rehydration in the first <strong>2–4 hours</strong> post-exercise is important.</li>
        <li><strong>Beverage type:</strong> Water is suitable if combined with salty food. Sports drinks, milk-based drinks, and oral rehydration solutions may enhance fluid retention due to their electrolyte content and energy density.</li>
        <li><strong>Performance implications:</strong> Inadequate rehydration can impair subsequent training quality or competition performance, particularly in tournaments or multi-stage events.</li>
      </ul>

      <h3>Monitoring Hydration Status</h3>
      <p>Hydration strategies should be individualised and adjusted based on monitoring.</p>
      <ul>
        <li><strong>Body mass changes:</strong> Regularly measuring body mass before and after sessions provides a practical estimate of fluid loss. A ~1 kg loss equates to ~1 L of fluid deficit.</li>
        <li><strong>Urine colour:</strong> Simple urine colour charts are useful screening tools, although they are influenced by diet and supplements. They should not be used in isolation.</li>
        <li><strong>Symptom awareness:</strong> Thirst, dry mouth, headache, and an unusual perception of effort can flag issues with hydration, but they are not precise diagnostic tools by themselves.</li>
      </ul>

      <h3>Hyponatraemia and Overhydration</h3>
      <p><strong>Hyponatraemia</strong> is a dangerous fall in blood sodium concentration, often defined as <135 mmol/L. In the exercise setting it is usually caused by overdrinking low-sodium fluids.</p>
      <ul>
        <li><strong>Primary cause:</strong> Drinking at rates that exceed sweat and urine losses, especially when the fluid is plain water or very low in sodium.</li>
        <li><strong>Risk factors:</strong> Slow competitors in long events (e.g. marathons >4 hours), “drink as much as possible” advice, low body mass, and high availability of fluid on the course.</li>
        <li><strong>Symptoms:</strong> Bloating, headache, nausea, confusion, and in severe cases seizure and coma. Symptoms may mimic dehydration, making misdiagnosis a risk.</li>
        <li><strong>Prevention:</strong> Encourage athletes to avoid drinking beyond their likely losses, use sodium-containing drinks in prolonged events, and monitor body mass changes when possible.</li>
      </ul>

      <h3>Beverage Choice and General Considerations</h3>
      <p>Different beverages have different effects on hydration and recovery.</p>
      <ul>
        <li><strong>Water:</strong> Appropriate for many situations, but if used alone after heavy sweating it should be combined with salty foods to replace sodium.</li>
        <li><strong>Sports drinks:</strong> Provide water, carbohydrates, and sodium in one product. Useful during prolonged or intense exercise and after sessions with high sweat loss.</li>
        <li><strong>Electrolyte solutions:</strong> Low- or zero-calorie drinks with electrolytes are useful when the goal is primarily fluid and sodium replacement without extra energy.</li>
        <li><strong>Milk-based drinks:</strong> Provide fluid, electrolytes, protein, and carbohydrate, and can be effective post-exercise recovery beverages.</li>
        <li><strong>Caffeine:</strong> At typical sports doses, caffeine has a modest diuretic effect at rest but does not meaningfully worsen dehydration during exercise. It should be considered within the whole plan rather than avoided outright.</li>
        <li><strong>Alcohol:</strong> Alcohol increases urine output and can interfere with glycogen resynthesis and muscle repair; it is best avoided in the early post-exercise recovery phase.</li>
      </ul>

      <h3>Special Considerations and Individualisation</h3>
      <p>Hydration strategies should be refined through practice and tailored to the athlete, the sport, and the environment.</p>
      <ul>
        <li><strong>Sport-specific patterns:</strong> Team sports with breaks, racket sports with changeovers, and continuous endurance events all present different opportunities to drink and may require different strategies.</li>
        <li><strong>Environmental conditions:</strong> In heat and humidity, sweat rates rise and more aggressive hydration and sodium strategies may be required. At altitude, increased ventilation and diuresis can alter fluid needs. Cold can blunt thirst and reduce spontaneous drinking.</li>
        <li><strong>Sex and body size:</strong> Average sweat rates and body mass differ between men and women, but there is large overlap. Individual testing is more important than assumptions based on sex alone.</li>
        <li><strong>Trial and error:</strong> Athletes should test different volumes, beverage types, and sodium contents in training to find a strategy that maintains performance without causing gastrointestinal discomfort.</li>
      </ul>
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
    description: 'Learn to calculate RER, substrate oxidation rates, daily energy requirements, fluid balance, and blood bicarbonate changes.',
    learningObjectives: [
      'Calculate RER and carbohydrate and fat oxidation rates (g/min and g/hour) using provided formulas.',
      'Estimate daily energy requirements using the Cunningham equation and derive macronutrient quantities.',
      'Determine sweat rates (L/hour) and percentage body mass change.',
      'Interpret blood bicarbonate graphs to identify optimal dosing, time to peak, and the onset of the ergogenic window.'
    ],
    keyPoints: [
      'RER = VCO2 / VO2 (0.7 = 100% fat, 1.0 = 100% carbs).',
      'Cunningham: RMR = 500 + 22 × LBM; TDEE = RMR × Activity Factor.',
      'Sweat Rate = (Pre - Post + Drink) / Time.',
      'Bicarbonate Threshold: An increase of ≥6 mmol/L from baseline indicates the ergogenic window.',
      'Optimal Bicarbonate Dose: typically 0.3 - 0.5 g/kg to achieve the required +6 mmol/L rise.'
    ],
    quickSummary: [
      '<strong>1. Substrate Use:</strong> Calculate RER and oxidation rates from gas exchange data.',
      '<strong>2. Energy Needs:</strong> Use Cunningham (based on LBM) for athletes.',
      '<strong>3. Fluid Balance:</strong> Calculate sweat loss and % dehydration.',
      '<strong>4. Bicarbonate Analysis:</strong> Identify "Time to Peak" and "Time to Threshold" (≥6 mmol/L increase) from blood graphs to time ingestion correctly.'
    ],
    fullNotes: `
      <h3>1. Indirect Calorimetry, RER & Substrate Oxidation</h3>
      <p>Indirect calorimetry measures oxygen consumption (VO<sub>2</sub>) and carbon dioxide production (VCO<sub>2</sub>). From these, we calculate RER and fuel usage.</p>
      <div class="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
        <strong>Key formulas (you will be given these):</strong><br/>
        RER = VCO<sub>2</sub> / VO<sub>2</sub><br/>
        Carbohydrate oxidation (g/min) = 4.210 × VCO<sub>2</sub> – 2.962 × VO<sub>2</sub><br/>
        Fat oxidation (g/min) = 1.695 × VO<sub>2</sub> – 1.701 × VCO<sub>2</sub>
      </div>
      <h4>Worked example:</h4>
      <p>VCO<sub>2</sub> = 1.5 L/min, VO<sub>2</sub> = 1.8 L/min.</p>
      <ul>
        <li><strong>RER:</strong> 1.5 / 1.8 = 0.83</li>
        <li><strong>Carb Ox:</strong> (4.210 × 1.5) - (2.962 × 1.8) ≈ 0.98 g/min (× 60 = 59 g/hr)</li>
        <li><strong>Fat Ox:</strong> (1.695 × 1.8) - (1.701 × 1.5) ≈ 0.50 g/min (× 60 = 30 g/hr)</li>
      </ul>

      <hr class="my-6"/>

      <h3>2. Energy Expenditure (Cunningham) & Macronutrient Targets</h3>
      <p>The Cunningham equation uses Lean Body Mass (LBM) to estimate Resting Metabolic Rate (RMR).</p>

      <div class="bg-green-50 p-4 rounded border border-green-200 mb-4">
        <strong>Formula provided in the exam:</strong><br/>
        Resting Metabolic Rate (RMR, kcal/day) = 500 + 22 × LBM (kg)
      </div>

      <div class="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
        <strong>Calculations you need to be aware of (memorize these):</strong><br/>
        Fat Mass (kg) = Body Mass × Body Fat %<br/>
        Lean Body Mass (kg) = Body Mass – Fat Mass<br/><br/>
        TDEE = RMR × Activity Factor<br/><br/>
        Macronutrient grams = Body Mass × g/kg target<br/>
        Kcal from macro = grams × 4 (CHO/Pro) or 9 (Fat)
      </div>

      <h4>Worked example:</h4>
      <p>60kg athlete, 15% body fat, Activity Factor 1.5.</p>
      <ul>
        <li><strong>LBM:</strong> 60 - (60 × 0.15) = 51 kg</li>
        <li><strong>RMR:</strong> 500 + (22 × 51) = 1622 kcal</li>
        <li><strong>TDEE:</strong> 1622 × 1.5 = 2433 kcal</li>
      </ul>

      <hr class="my-6"/>

      <h3>3. Fluid Balance, Sweat Rate & Percentage Body Mass Change</h3>
      <p>Used to estimate fluid needs.</p>

      <div class="bg-amber-50 p-4 rounded border border-amber-200 mb-4">
        <strong>Calculations you need to be aware of (memorize these):</strong><br/>
        Total Sweat Loss (L) = (Pre mass – Post mass) + Fluid Intake<br/>
        Sweat Rate (L/hour) = Total Sweat Loss / Duration (hours)<br/>
        % Body Mass Change = (Mass Loss / Pre mass) × 100
      </div>

      <h4>Worked example:</h4>
      <p>70kg start, 69kg finish, 300ml drink (0.3L), 30 mins (0.5h).</p>
      <ul>
        <li><strong>Mass Loss:</strong> 1 kg</li>
        <li><strong>Total Sweat:</strong> 1.0 + 0.3 = 1.3 L</li>
        <li><strong>Sweat Rate:</strong> 1.3 / 0.5 = 2.6 L/hr</li>
        <li><strong>% Change:</strong> (1 / 70) × 100 = 1.4%</li>
      </ul>

      <hr class="my-6"/>

      <h3>4. Blood Bicarbonate Changes (Graph Analysis)</h3>
      <p>In the exam, you may be presented with a graph plotting <strong>Blood Bicarbonate Concentration (mmol/L)</strong> against <strong>Time (minutes)</strong> for different doses of sodium citrate or bicarbonate.</p>

      <div class="bg-purple-50 p-4 rounded border border-purple-200 mb-4">
        <strong>Key Concepts for Analysis:</strong>
        <ul class="list-disc ml-5 mt-2">
            <li><strong>Baseline:</strong> The starting bicarbonate level at Time 0 (typically ~22-24 mmol/L).</li>
            <li><strong>The Threshold (+6 mmol/L):</strong> Research suggests performance benefits are most likely when blood bicarbonate rises by at least <strong>6 mmol/L above baseline</strong>.</li>
            <li><strong>Time to Peak:</strong> The time point where the concentration is highest.</li>
            <li><strong>Optimal Dose:</strong> The dose that successfully elevates bicarbonate above the +6 mmol/L threshold (often >0.3 g/kg). Lower doses (e.g., 0.1 g/kg) often fail to reach this.</li>
        </ul>
      </div>

      <h4>How to Analyze the Graph (Example Task):</h4>
      <p><strong>Scenario:</strong> You see a graph with three lines (0.1, 0.3, and 0.5 g/kg). Baseline is 22 mmol/L.</p>
      <p><strong>Task 1: Determine Optimal Dose & Time to Peak.</strong><br/>
      Look for the curve that goes highest. If the 0.5 g/kg line peaks at 30 mmol/L at 150 mins, then:
      <br/>- <em>Optimal Dose:</em> 0.5 g/kg (as it causes the greatest shift).
      <br/>- <em>Time to Peak:</em> 150 mins.</p>

      <p><strong>Task 2: Identify Start Time based on Threshold.</strong><br/>
      Calculate the target: Baseline (22) + 6 = <strong>28 mmol/L</strong>.
      <br/>Look at the 0.5 g/kg curve. Find the <em>first</em> time point where the line crosses 28 mmol/L.
      <br/>- If it crosses 28 mmol/L at 120 mins, then <strong>120 minutes</strong> is the earliest time to start exercise to ensure the ergogenic effect.</p>

      <div class="mt-4">
         <img src="public/images/bicarbonate_graph.png" alt="Graph of Blood Bicarbonate vs Time" class="w-full max-w-md mx-auto border rounded shadow-sm opacity-50" />
         <p class="text-xs text-center text-gray-500 mt-1">(Note: In the real app, insert your graph image here)</p>
      </div>
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
    {
    id: 'q_buf_5',
    topicId: 'buffering-agents',
    type: QuestionType.SCENARIO,
    difficulty: 'Level 6',
    text: 'Scenario: A sport scientist is testing an athlete\'s response to sodium bicarbonate. Resting blood bicarbonate is 24 mmol/L.\n\nAfter ingesting 0.3 g/kg sodium bicarbonate, blood bicarbonate is measured at:\n• 45 minutes: 28 mmol/L\n• 75 minutes: 30 mmol/L\n• 105 minutes: 31 mmol/L\n\nUse the following formula and threshold:\nΔ[HCO3–] = [HCO3–]time – [HCO3–]baseline\nA rise of ≥6 mmol/L above baseline is considered a practical blood bicarbonate threshold for a likely ergogenic effect.\n\nTasks:\na) Calculate Δ[HCO3–] at each time point.\nb) Identify the earliest time at which the blood bicarbonate threshold is reached.\nc) Based on this, when should the main high intensity performance bout ideally begin relative to ingestion?',
    correctAnswer: 'a) Δ[HCO3–] values: 4 mmol/L at 45 min, 6 mmol/L at 75 min, and 7 mmol/L at 105 min. b) The threshold (Δ[HCO3–] ≥ 6 mmol/L) is first reached at 75 minutes. c) The main high intensity effort should be scheduled to start from around 75 minutes after ingestion, with the warm up arranged so that the key bout begins once the threshold has been reached.',
    explanation: 'Baseline [HCO3–] is 24 mmol/L.\n\nAt 45 min: 28 – 24 = 4 mmol/L (below threshold).\nAt 75 min: 30 – 24 = 6 mmol/L (meets threshold).\nAt 105 min: 31 – 24 = 7 mmol/L (above threshold).\n\nThe earliest time at which Δ[HCO3–] ≥ 6 mmol/L is 75 min. According to the blood bicarbonate threshold concept, this earliest time point is used to guide when exercise should begin. In practice, the athlete would ingest sodium bicarbonate so that their main high intensity performance starts around this time, with their warm up scheduled accordingly.',
    sourceRef: 'Buffers / Threshold Concept'
  },
  {
    id: 'q_buf_6',
    topicId: 'buffering-agents',
    type: QuestionType.SHORT_ANSWER,
    difficulty: 'Level 6',
    text: 'Briefly define the blood bicarbonate threshold concept in the context of sodium bicarbonate supplementation and explain how it is used to individualise the timing of exercise.',
    correctAnswer: 'The blood bicarbonate threshold concept states that an increase in blood bicarbonate of roughly 6 mmol/L or more above baseline is associated with a high likelihood of an ergogenic effect. By taking repeated blood samples after ingestion and calculating Δ[HCO3–] at each time point, the earliest time at which this threshold is reached is identified. Exercise, or the main performance bout, is then scheduled to begin from this time onwards to coincide with the period when extracellular buffering capacity is maximally elevated for that individual.',
    explanation: 'Rather than assuming a fixed time to peak (for example 60 minutes for everyone), the threshold approach looks for the smallest time point at which Δ[HCO3–] is at least 6 mmol/L above baseline. This respects inter-individual variability in absorption and distribution and provides a more precise way to time sodium bicarbonate ingestion relative to the start of the warm up and the key performance effort.',
    sourceRef: 'Buffers / Threshold Concept'
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
    {
    id: 'q_hyd_5',
    topicId: 'fluid-hydration',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Which of the following pre-exercise hydration strategies best reflects current guidelines for a 70 kg athlete starting a training session in a temperate environment?',
    options: [
      'Drink 200–300 ml of water 5 minutes before exercise only.',
      'Drink approximately 350–490 ml of fluid (5–7 ml/kg) 2–4 hours before exercise, with a small top-up if urine remains dark.',
      'Avoid drinking anything before exercise to prevent bathroom breaks.',
      'Drink 2–3 litres of plain water in the hour before exercise to ensure maximal hydration.'
    ],
    correctAnswer: 1,
    explanation: 'Pre-exercise guidelines typically recommend ~5–7 ml/kg body mass 2–4 hours before exercise. For a 70 kg athlete this is 350–490 ml. If urine remains dark or minimal, a smaller additional drink (3–5 ml/kg) 1–2 hours before may be used. Drinking excessively in the final hour, or not drinking at all, is not recommended.',
    sourceRef: 'Hydration / Pre-Exercise'
  },
  {
    id: 'q_hyd_6',
    topicId: 'fluid-hydration',
    type: QuestionType.SCENARIO,
    difficulty: 'Level 5',
    text: 'Scenario: A 80 kg athlete wants to follow pre-exercise hydration guidelines of 5–7 ml/kg 2–4 hours before training.\n\nUse the following formula:\nPre-exercise fluid volume (ml) = Body mass (kg) × Recommended ml/kg\n\nTasks:\na) Calculate the lower and upper range (in ml) of fluid they should aim to drink 2–4 hours before exercise.\nReport both values as whole numbers.',
    correctAnswer: 'Lower end ≈ 400 ml, upper end ≈ 560 ml.',
    explanation: 'Using the formula: Volume (ml) = Body mass × ml/kg.\nLower end: 80 kg × 5 ml/kg = 400 ml.\nUpper end: 80 kg × 7 ml/kg = 560 ml.\nTherefore, a practical range is about 400–560 ml 2–4 hours before exercise.',
    sourceRef: 'Hydration / Pre-Exercise'
  },
  {
    id: 'q_hyd_7',
    topicId: 'fluid-hydration',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Which in-exercise fluid strategy is most appropriate for a 90-minute continuous run in warm conditions for a well-trained endurance runner?',
    options: [
      'Drink only plain water ad libitum, aiming to replace 100% of sweat losses every 15 minutes.',
      'Avoid drinking during exercise to minimise gastrointestinal discomfort and bathroom breaks.',
      'Drink an individualised volume based on sweat rate (typically ~0.4–0.8 L/hour), using a sports drink providing carbohydrates and sodium.',
      'Drink as much as possible at every opportunity to ensure body mass does not change.'
    ],
    correctAnswer: 2,
    explanation: 'During prolonged exercise in the heat, the goal is to limit excessive dehydration (generally <2% body mass loss) while avoiding overdrinking. Individualised plans based on measured or estimated sweat rate (often ~0.4–0.8 L/hour) using drinks containing both carbohydrates and sodium are recommended. Strategies to replace 100% of sweat loss or to “drink as much as possible” increase the risk of hyponatraemia.',
    sourceRef: 'Hydration / During Exercise'
  },
  {
    id: 'q_hyd_8',
    topicId: 'fluid-hydration',
    type: QuestionType.SCENARIO,
    difficulty: 'Level 5',
    text: 'Scenario: A footballer weighs 75 kg before a match and 73.8 kg afterwards. They did not urinate during the match.\n\nYou are told that effective post-exercise rehydration should replace 125–150% of the fluid deficit using the following formula:\nFluid volume to ingest (L) = Body mass lost (kg) × Replacement factor (1.25–1.5)\n\nTasks:\na) Calculate the body mass lost during the match.\nb) Calculate the recommended minimum and maximum fluid volumes they should aim to drink in the hours after the match. Report your answers in litres to one decimal place.',
    correctAnswer: 'a) Mass lost = 1.2 kg. b) Recommended range ≈ 1.5–1.8 L.',
    explanation: 'Mass loss: 75.0 – 73.8 = 1.2 kg.\nFluid volume: 1.2 kg × 1.25 = 1.5 L (minimum) and 1.2 kg × 1.5 = 1.8 L (maximum).\nTherefore, they should aim for roughly 1.5–1.8 L over the next few hours, ideally including sodium to support fluid retention.',
    sourceRef: 'Hydration / Post-Exercise'
  },
  {
    id: 'q_hyd_9',
    topicId: 'fluid-hydration',
    type: QuestionType.SHORT_ANSWER,
    difficulty: 'Level 5',
    text: 'Identify two simple field-based methods an athlete or practitioner can use to monitor hydration status across training days and briefly explain how each is interpreted.',
    correctAnswer: '1) Pre- to post-exercise body mass: repeated measurements allow estimation of fluid losses; a body mass loss >2% in single sessions suggests excessive dehydration. 2) Urine colour: light straw-coloured urine is generally consistent with euhydration, while very dark urine suggests underhydration and very pale urine may indicate overdrinking.',
    explanation: 'Changes in body mass across a session (1 kg ≈ 1 L) provide a practical estimate of acute fluid loss and can be tracked over time. Urine colour charts give a quick, low-cost indication of hydration status, though they can be influenced by diet and supplements and should be interpreted alongside other information.',
    sourceRef: 'Hydration / Monitoring'
  },
  {
    id: 'q_hyd_10',
    topicId: 'fluid-hydration',
    type: QuestionType.MCQ,
    difficulty: 'Level 6',
    text: 'Which of the following scenarios MOST increases the risk of exercise-associated hyponatraemia in endurance events?',
    options: [
      'A runner who loses 3% of body mass during a marathon in hot conditions despite drinking a sodium-containing sports drink.',
      'A slow marathon runner who gains 1–2% body mass during the race by frequently drinking large volumes of plain water at every aid station.',
      'An elite runner who drinks to thirst and finishes with a 2% body mass loss.',
      'An athlete who drinks a moderate volume of sports drink and consumes salty snacks during an ultramarathon.'
    ],
    correctAnswer: 1,
    explanation: 'Hyponatraemia is most commonly associated with overdrinking hypotonic or low-sodium fluids, leading to a net gain in body mass and dilution of plasma sodium. A slow runner who gains body mass during a race by consuming large volumes of plain water fits this high-risk profile. Moderate body mass losses with sodium-containing drinks are far less risky.',
    sourceRef: 'Hydration / Hyponatraemia'
  },
  {
    id: 'q_hyd_11',
    topicId: 'fluid-hydration',
    type: QuestionType.MCQ,
    difficulty: 'Level 5',
    text: 'Which statement best describes the impact of caffeine and alcohol on hydration in the context of exercise?',
    options: [
      'Caffeine and alcohol both cause large diuresis during exercise, so neither should ever be consumed around training or competition.',
      'Caffeine at typical sports doses has little practical impact on hydration during exercise, whereas alcohol after exercise can impair rehydration and recovery.',
      'Caffeine completely prevents dehydration during exercise, whereas alcohol improves sodium retention.',
      'Caffeine and alcohol have no effect on urine output or recovery, so they can be ignored in hydration planning.'
    ],
    correctAnswer: 1,
    explanation: 'At usual ergogenic doses, caffeine has only a modest diuretic effect at rest and does not meaningfully worsen dehydration during exercise; it can be used within an overall hydration plan. Alcohol, in contrast, increases urine output and can interfere with optimal rehydration and recovery and is therefore best limited in the early post-exercise period.',
    sourceRef: 'Hydration / Beverage Choice'
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
    text: 'Scenario: An athlete is undergoing an exercise test in a physiology laboratory. The indirect calorimetry data show a rate of CO2 release (V̇CO2) of 1500 mL/min and oxygen consumption (V̇O2) of 1800 mL/min.\n\nUse the following equations:\nRER = VCO2 / VO2\nCarbohydrate oxidation (g/min) = 4.210 × VCO2 – 2.962 × VO2\nFat oxidation (g/min) = 1.695 × VO2 – 1.701 × VCO2\n\nRemember to convert mL/min to L/min before using the equations.\n\nTasks:\na) Calculate the Respiratory Exchange Ratio (RER) for this athlete. Report your answer to two decimal places.\nb) Calculate the rate of carbohydrate oxidation in grams per hour. Report your answer to one decimal place.\nc) Calculate the rate of fat oxidation in grams per hour. Report your answer to one decimal place.',
    correctAnswer: 'a) RER = 0.83. b) Carbohydrate oxidation ≈ 59.0 g/hour. c) Fat oxidation ≈ 30.0 g/hour.',
    explanation: 'First convert to L/min: VCO2 = 1500 mL/min = 1.5 L/min, VO2 = 1800 mL/min = 1.8 L/min.\n\na) RER = VCO2 / VO2 = 1.5 / 1.8 = 0.833..., which rounds to 0.83 (two decimal places).\n\nb) Carbohydrate oxidation (g/min) = (4.210 × 1.5) – (2.962 × 1.8)\n= 6.315 – 5.3316 ≈ 0.98 g/min.\nTo convert to g/hour, multiply by 60: 0.98 × 60 ≈ 58.8 ≈ 59.0 g/hour (one decimal place).\n\nc) Fat oxidation (g/min) = (1.695 × 1.8) – (1.701 × 1.5)\n= 3.051 – 2.5515 ≈ 0.50 g/min.\nConvert to g/hour: 0.50 × 60 ≈ 30.0 g/hour (one decimal place).',
    sourceRef: 'Data Analysis / Substrate Oxidation'
  },
    {
    id: 'q_calc_2',
    topicId: 'data-analysis',
    type: QuestionType.SCENARIO,
    difficulty: 'Level 6',
    text: 'Scenario: You are provided with the following information about an individual:\n• Body Mass: 60 kg\n• Body Fat Percentage: 15%\n• Height: 160 cm\n• Age: 20 years\n• Activity Factor: 1.5\n• Protein Requirement: 1.5 g/kg of body mass per day\n• Carbohydrate Requirement: 6.0 g/kg of body mass per day\n\nUse the Cunningham equation:\nResting metabolic rate (RMR, kcal/day) = 500 + 22 × Lean Body Mass (kg)\nTotal daily energy expenditure (TDEE, kcal/day) = RMR × Activity Factor\n\nUse the following energy values:\n• Carbohydrate = 4 kcal/g\n• Protein = 4 kcal/g\n• Fat = 9 kcal/g\n\nTasks:\na) Use the Cunningham equation to calculate their daily energy requirement (TDEE). Report to the nearest whole number.\nb) Calculate the daily quantity of carbohydrate required in grams. Report as a whole number.\nc) Calculate the daily quantity of protein required in grams. Report as a whole number.\nd) Given the energy requirement and the carbohydrate and protein quantities, calculate the quantity of fat required daily in grams. Report as a whole number.',
    correctAnswer: 'a) TDEE ≈ 2433 kcal/day. b) Carbohydrate ≈ 360 g/day. c) Protein ≈ 90 g/day. d) Fat ≈ 70 g/day.',
    explanation: 'Step 1 – Calculate Lean Body Mass (LBM):\nFat Mass = 60 × 0.15 = 9 kg.\nLBM = 60 – 9 = 51 kg.\n\nStep 2 – Calculate RMR (Cunningham):\nRMR = 500 + 22 × 51 = 500 + 1122 = 1622 kcal/day.\n\nStep 3 – Calculate TDEE:\nTDEE = 1622 × 1.5 = 2433 kcal/day (nearest whole number).\n\nStep 4 – Carbohydrate grams:\nCHO grams = 60 × 6.0 = 360 g/day.\n\nStep 5 – Protein grams:\nProtein grams = 60 × 1.5 = 90 g/day.\n\nStep 6 – Energy from CHO and protein:\nEnergy from CHO = 360 × 4 = 1440 kcal.\nEnergy from protein = 90 × 4 = 360 kcal.\nTotal = 1440 + 360 = 1800 kcal.\n\nStep 7 – Energy and grams of fat:\nRemaining kcal = TDEE – 1800 = 2433 – 1800 = 633 kcal.\nFat grams = 633 ÷ 9 ≈ 70.3, which rounds to 70 g/day.',
    sourceRef: 'Data Analysis / Energy Expenditure'
  },
    {
    id: 'q_calc_3',
    topicId: 'data-analysis',
    type: QuestionType.SCENARIO,
    difficulty: 'Level 6',
    text: 'Scenario: An individual participating in a training session is recorded to have a body mass of 70 kg before starting exercise. After completing a 30-minute session, their body mass is measured at 69 kg. It is also noted that the individual consumed 300 ml of fluid during this period.\n\nUse the following formulas:\nTotal Sweat Loss (L) = (Pre-exercise mass – Post-exercise mass) in kg + Fluid Intake (L)\nSweat Rate (L/hour) = Total Sweat Loss (L) ÷ Exercise Duration (hours)\n% Body Mass Change = (Mass Loss (kg) ÷ Pre-exercise Mass (kg)) × 100\n\nTasks:\na) Calculate the total sweat loss during the training session and express it as a rate per hour. Include the appropriate unit of measurement and report the sweat rate to one decimal place.\nb) Determine the percentage change in body mass that occurred as a result of the training session. Express your answer to one decimal place.',
    correctAnswer: 'a) Total sweat loss = 1.3 L; Sweat rate ≈ 2.6 L/hour. b) Percentage body mass loss ≈ 1.4%.',
    explanation: 'Step 1 – Mass loss:\nMass loss = 70 – 69 = 1 kg.\n\nStep 2 – Convert fluid intake to litres:\n300 ml = 0.3 L.\n\nStep 3 – Total Sweat Loss:\nTotal Sweat Loss = 1.0 L (from mass loss) + 0.3 L (fluid consumed) = 1.3 L.\n\nStep 4 – Sweat Rate:\nExercise duration = 30 minutes = 0.5 hours.\nSweat Rate = 1.3 L ÷ 0.5 h = 2.6 L/hour (one decimal place).\n\nStep 5 – % Body Mass Change:\n% change = (Mass loss ÷ Starting mass) × 100 = (1 ÷ 70) × 100 = 1.428..., which rounds to 1.4% body mass loss (one decimal place).',
    sourceRef: 'Data Analysis / Fluid Balance'
  },
 ];