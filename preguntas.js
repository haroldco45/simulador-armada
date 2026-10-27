/* Banco de preguntas — Rumbo a la Armada (Vibras Positivas HM)
   Formato: { a: área, q:[es,en], o:[[es...],[en...]] (o null en inglés si son iguales), c: índice correcto, e:[es,en] }
   Preguntas de práctica tipo examen. No son preguntas oficiales de la Armada de Colombia. */
const AREAS = {
  mat:  { es: 'Matemáticas', en: 'Mathematics' },
  cie:  { es: 'Física y ciencias', en: 'Physics and science' },
  lec:  { es: 'Lectura crítica', en: 'Critical reading' },
  ing:  { es: 'Inglés', en: 'English' },
  raz:  { es: 'Razonamiento lógico', en: 'Logical reasoning' },
  nav:  { es: 'Cultura naval', en: 'Naval culture' },
  soc:  { es: 'Sociales y Constitución', en: 'Civics and Constitution' }
};

const PASAJE_MAR = {
  es: 'Texto: "El mar no premia la prisa, premia la preparación. Un marino que revisa su equipo antes de zarpar quizá llegue unos minutos más tarde al muelle, pero rara vez se queda a la deriva. La disciplina, que muchos confunden con rigidez, es en realidad la forma de ganar libertad cuando el clima cambia."',
  en: 'Text: "The sea does not reward haste, it rewards preparation. A sailor who checks the equipment before setting sail may reach the dock a few minutes later, but is rarely left adrift. Discipline, which many confuse with rigidity, is really the way to gain freedom when the weather changes."'
};

const BANCO = [
/* ---------- MATEMÁTICAS ---------- */
{a:'mat',q:['¿Cuánto es 3/4 + 2/3?','What is 3/4 + 2/3?'],o:[['17/12','5/7','6/7','1']],c:0,e:['Común denominador 12: 9/12 + 8/12 = 17/12.','Common denominator 12: 9/12 + 8/12 = 17/12.']},
{a:'mat',q:['¿Cuál es el 15 % de 240?','What is 15% of 240?'],o:[['36','24','30','42']],c:0,e:['240 × 0,15 = 36.','240 × 0.15 = 36.']},
{a:'mat',q:['Si 2x + 7 = 25, ¿cuánto vale x?','If 2x + 7 = 25, what is x?'],o:[['9','16','8','11']],c:0,e:['2x = 18, entonces x = 9.','2x = 18, so x = 9.']},
{a:'mat',q:['Un buque recorre 180 millas náuticas en 12 horas. ¿A qué velocidad promedio navega?','A ship covers 180 nautical miles in 12 hours. What is its average speed?'],o:[['15 nudos','12 nudos','18 nudos','20 nudos'],['15 knots','12 knots','18 knots','20 knots']],c:0,e:['180 ÷ 12 = 15 millas por hora, es decir 15 nudos.','180 ÷ 12 = 15 miles per hour, that is 15 knots.']},
{a:'mat',q:['Área de un círculo de radio 3 cm (π ≈ 3,14):','Area of a circle with radius 3 cm (π ≈ 3.14):'],o:[['28,26 cm²','18,84 cm²','9,42 cm²','37,68 cm²'],['28.26 cm²','18.84 cm²','9.42 cm²','37.68 cm²']],c:0,e:['A = π·r² = 3,14 × 9 = 28,26 cm².','A = π·r² = 3.14 × 9 = 28.26 cm².']},
{a:'mat',q:['¿Cuánto es √144 + √81?','What is √144 + √81?'],o:[['21','225','15','23']],c:0,e:['12 + 9 = 21.','12 + 9 = 21.']},
{a:'mat',q:['Resuelva: (−3)² − 2·(−4)','Solve: (−3)² − 2·(−4)'],o:[['17','1','−17','−1']],c:0,e:['9 − (−8) = 9 + 8 = 17.','9 − (−8) = 9 + 8 = 17.']},
{a:'mat',q:['Un triángulo rectángulo tiene catetos de 6 y 8. ¿Cuánto mide la hipotenusa?','A right triangle has legs of 6 and 8. How long is the hypotenuse?'],o:[['10','14','12','9']],c:0,e:['Pitágoras: √(36 + 64) = √100 = 10.','Pythagoras: √(36 + 64) = √100 = 10.']},
{a:'mat',q:['Pendiente de la recta que pasa por (1, 2) y (3, 8):','Slope of the line through (1, 2) and (3, 8):'],o:[['3','6','2','1/3']],c:0,e:['m = (8 − 2)/(3 − 1) = 6/2 = 3.','m = (8 − 2)/(3 − 1) = 6/2 = 3.']},
{a:'mat',q:['¿Cuánto es 2⁵ · 2³?','What is 2⁵ · 2³?'],o:[['256','64','4¹⁵','128']],c:0,e:['Se suman exponentes: 2⁸ = 256.','Add the exponents: 2⁸ = 256.']},
{a:'mat',q:['Si x + y = 10 y x − y = 4, ¿cuánto vale x?','If x + y = 10 and x − y = 4, what is x?'],o:[['7','3','6','5']],c:0,e:['Sumando: 2x = 14, x = 7.','Adding: 2x = 14, x = 7.']},
{a:'mat',q:['Unas botas cuestan $80.000 y tienen 25 % de descuento. ¿Cuánto se paga?','Boots cost $80,000 with a 25% discount. How much do you pay?'],o:[['$60.000','$55.000','$64.000','$20.000'],['$60,000','$55,000','$64,000','$20,000']],c:0,e:['25 % de 80.000 = 20.000; 80.000 − 20.000 = 60.000.','25% of 80,000 = 20,000; 80,000 − 20,000 = 60,000.']},
{a:'mat',q:['Promedio de 7, 9, 8, 6 y 10:','Average of 7, 9, 8, 6 and 10:'],o:[['8','7,5','8,5','9'],['8','7.5','8.5','9']],c:0,e:['Suma 40 ÷ 5 = 8.','Sum 40 ÷ 5 = 8.']},
{a:'mat',q:['¿Cuánto es log₁₀(1000)?','What is log₁₀(1000)?'],o:[['3','100','10','4']],c:0,e:['10³ = 1000.','10³ = 1000.']},
{a:'mat',q:['¿Cuál es el valor de sen 30°?','What is the value of sin 30°?'],o:[['1/2','√3/2','1','√2/2']],c:0,e:['Valor notable: sen 30° = 0,5.','Standard value: sin 30° = 0.5.']},
{a:'mat',q:['Factorice x² − 9:','Factor x² − 9:'],o:[['(x − 3)(x + 3)','(x − 9)(x + 1)','(x − 3)²','(x + 9)(x − 1)']],c:0,e:['Diferencia de cuadrados: a² − b² = (a − b)(a + b).','Difference of squares: a² − b² = (a − b)(a + b).']},
{a:'mat',q:['Perímetro de un rectángulo de 12 m por 5 m:','Perimeter of a 12 m by 5 m rectangle:'],o:[['34 m','60 m','17 m','29 m']],c:0,e:['2 × (12 + 5) = 34 m.','2 × (12 + 5) = 34 m.']},
{a:'mat',q:['4 marineros pintan un casco en 6 días. ¿Cuántos días tardan 8 marineros al mismo ritmo?','4 sailors paint a hull in 6 days. How many days for 8 sailors at the same pace?'],o:[['3','12','4','2']],c:0,e:['Proporción inversa: 4 × 6 = 8 × d, d = 3.','Inverse proportion: 4 × 6 = 8 × d, d = 3.']},
{a:'mat',q:['Probabilidad de sacar un número par al lanzar un dado:','Probability of rolling an even number on a die:'],o:[['1/2','1/3','1/6','2/3']],c:0,e:['Pares: 2, 4, 6 → 3 de 6 = 1/2.','Even: 2, 4, 6 → 3 of 6 = 1/2.']},
{a:'mat',q:['¿Cuánto es 0,25 × 0,4?','What is 0.25 × 0.4?'],o:[['0,1','1','0,01','0,65'],['0.1','1','0.01','0.65']],c:0,e:['25 × 4 = 100, con tres decimales: 0,100.','25 × 4 = 100, with three decimals: 0.100.']},
{a:'mat',q:['Volumen de un cubo de arista 4 cm:','Volume of a cube with 4 cm edges:'],o:[['64 cm³','16 cm³','48 cm³','96 cm³']],c:0,e:['4³ = 64.','4³ = 64.']},
{a:'mat',q:['Raíces de x² − 5x + 6 = 0:','Roots of x² − 5x + 6 = 0:'],o:[['2 y 3','−2 y −3','1 y 6','−1 y 6'],['2 and 3','−2 and −3','1 and 6','−1 and 6']],c:0,e:['(x − 2)(x − 3) = 0.','(x − 2)(x − 3) = 0.']},
{a:'mat',q:['Dos ángulos de un triángulo miden 50° y 60°. ¿Cuánto mide el tercero?','Two angles of a triangle are 50° and 60°. What is the third?'],o:[['70°','80°','90°','60°']],c:0,e:['180 − 110 = 70°.','180 − 110 = 70°.']},
{a:'mat',q:['Una milla náutica mide 1.852 m. ¿Cuántos metros son 5 millas náuticas?','A nautical mile is 1,852 m. How many meters are 5 nautical miles?'],o:[['9.260 m','8.045 m','9.000 m','7.408 m'],['9,260 m','8,045 m','9,000 m','7,408 m']],c:0,e:['1.852 × 5 = 9.260 m.','1,852 × 5 = 9,260 m.']},
{a:'mat',q:['Un número aumentado en su 20 % da 96. ¿Cuál es el número?','A number increased by 20% equals 96. What is the number?'],o:[['80','76','78','115']],c:0,e:['1,2 × n = 96, n = 80.','1.2 × n = 96, n = 80.']},

/* ---------- FÍSICA Y CIENCIAS ---------- */
{a:'cie',q:['Unidad de fuerza en el Sistema Internacional:','SI unit of force:'],o:[['Newton','Julio','Vatio','Pascal'],['Newton','Joule','Watt','Pascal']],c:0,e:['1 N = 1 kg·m/s².','1 N = 1 kg·m/s².']},
{a:'cie',q:['Un vehículo pasa de 0 a 20 m/s en 5 s. ¿Cuál es su aceleración?','A vehicle goes from 0 to 20 m/s in 5 s. What is its acceleration?'],o:[['4 m/s²','100 m/s²','25 m/s²','0,25 m/s²'],['4 m/s²','100 m/s²','25 m/s²','0.25 m/s²']],c:0,e:['a = Δv/t = 20/5 = 4 m/s².','a = Δv/t = 20/5 = 4 m/s².']},
{a:'cie',q:['Peso de una masa de 10 kg (g = 9,8 m/s²):','Weight of a 10 kg mass (g = 9.8 m/s²):'],o:[['98 N','10 N','9,8 N','980 N'],['98 N','10 N','9.8 N','980 N']],c:0,e:['P = m·g = 10 × 9,8 = 98 N.','W = m·g = 10 × 9.8 = 98 N.']},
{a:'cie',q:['¿Por qué flota un buque de acero?','Why does a steel ship float?'],o:[['Recibe un empuje igual al peso del agua que desaloja','El acero es menos denso que el agua','El motor lo mantiene arriba','El agua salada no deja hundir nada'],['It receives a buoyant force equal to the weight of the water it displaces','Steel is less dense than water','The engine keeps it up','Salt water lets nothing sink']],c:0,e:['Principio de Arquímedes: su forma desaloja mucha agua.','Archimedes’ principle: its shape displaces a lot of water.']},
{a:'cie',q:['Un buque pasa de un río al mar. Como el agua de mar es más densa, el buque…','A ship moves from a river into the sea. Since seawater is denser, the ship…'],o:[['Flota un poco más alto','Se hunde más','Queda igual','Pierde peso'],['Floats slightly higher','Sinks deeper','Stays the same','Loses weight']],c:0,e:['Con más densidad necesita desalojar menos volumen.','With higher density it needs to displace less volume.']},
{a:'cie',q:['Un bus viaja a 60 km/h durante 2,5 horas. ¿Qué distancia recorre?','A bus travels at 60 km/h for 2.5 hours. How far does it go?'],o:[['150 km','120 km','24 km','62,5 km'],['150 km','120 km','24 km','62.5 km']],c:0,e:['d = v·t = 60 × 2,5 = 150 km.','d = v·t = 60 × 2.5 = 150 km.']},
{a:'cie',q:['Por una resistencia de 4 Ω se aplican 12 V. ¿Qué corriente circula?','12 V are applied across a 4 Ω resistor. What current flows?'],o:[['3 A','48 A','0,33 A','16 A'],['3 A','48 A','0.33 A','16 A']],c:0,e:['Ley de Ohm: I = V/R = 12/4 = 3 A.','Ohm’s law: I = V/R = 12/4 = 3 A.']},
{a:'cie',q:['Fórmula química de la sal común:','Chemical formula of table salt:'],o:[['NaCl','KCl','H₂O','CaCO₃']],c:0,e:['Cloruro de sodio.','Sodium chloride.']},
{a:'cie',q:['Una solución con pH 7 es:','A solution with pH 7 is:'],o:[['Neutra','Ácida','Básica','Corrosiva'],['Neutral','Acidic','Basic','Corrosive']],c:0,e:['Por debajo de 7 es ácida, por encima básica.','Below 7 is acidic, above is basic.']},
{a:'cie',q:['Energía cinética de una masa de 2 kg a 3 m/s:','Kinetic energy of a 2 kg mass at 3 m/s:'],o:[['9 J','6 J','18 J','12 J']],c:0,e:['Ec = ½·m·v² = ½ × 2 × 9 = 9 J.','KE = ½·m·v² = ½ × 2 × 9 = 9 J.']},
{a:'cie',q:['Unidad de presión en el Sistema Internacional:','SI unit of pressure:'],o:[['Pascal','Newton','Bar','Atmósfera'],['Pascal','Newton','Bar','Atmosphere']],c:0,e:['1 Pa = 1 N/m².','1 Pa = 1 N/m².']},
{a:'cie',q:['¿Qué organelo produce la mayor parte de la energía de la célula?','Which organelle produces most of the cell’s energy?'],o:[['Mitocondria','Ribosoma','Núcleo','Vacuola'],['Mitochondrion','Ribosome','Nucleus','Vacuole']],c:0,e:['Allí ocurre la respiración celular.','Cellular respiration takes place there.']},
{a:'cie',q:['¿Qué gas liberan las plantas en la fotosíntesis?','Which gas do plants release during photosynthesis?'],o:[['Oxígeno','Dióxido de carbono','Nitrógeno','Hidrógeno'],['Oxygen','Carbon dioxide','Nitrogen','Hydrogen']],c:0,e:['Toman CO₂ y agua y liberan O₂.','They take in CO₂ and water and release O₂.']},
{a:'cie',q:['El sonido NO se propaga en:','Sound does NOT travel through:'],o:[['El vacío','El agua','El acero','El aire'],['A vacuum','Water','Steel','Air']],c:0,e:['Necesita un medio material.','It needs a material medium.']},
{a:'cie',q:['Se empuja una caja con 50 N a lo largo de 4 m. ¿Qué trabajo se realiza?','A box is pushed with 50 N over 4 m. How much work is done?'],o:[['200 J','12,5 J','54 J','46 J'],['200 J','12.5 J','54 J','46 J']],c:0,e:['W = F·d = 50 × 4 = 200 J.','W = F·d = 50 × 4 = 200 J.']},
{a:'cie',q:['La aguja de una brújula se orienta hacia:','A compass needle points toward:'],o:[['El norte magnético','El norte geográfico exacto','El sol','El ecuador'],['Magnetic north','Exact true north','The sun','The equator']],c:0,e:['Por eso los navegantes corrigen la declinación.','That is why navigators correct for declination.']},

/* ---------- LECTURA CRÍTICA ---------- */
{a:'lec',p:true,q:['¿Cuál es la idea principal del texto?','What is the main idea of the text?'],o:[['Prepararse bien vale más que apurarse','Los marinos siempre llegan tarde','El clima del mar es impredecible','La disciplina quita la libertad'],['Good preparation is worth more than rushing','Sailors are always late','Sea weather is unpredictable','Discipline takes freedom away']],c:0,e:['Todo el texto contrasta prisa y preparación.','The whole text contrasts haste and preparation.']},
{a:'lec',p:true,q:['Según el texto, la disciplina es:','According to the text, discipline is:'],o:[['Una forma de ganar libertad ante los cambios','Lo mismo que la rigidez','Algo que retrasa sin beneficio','Un requisito solo para capitanes'],['A way to gain freedom when things change','The same as rigidity','Something that only delays','A requirement only for captains']],c:0,e:['El autor corrige la confusión entre disciplina y rigidez.','The author corrects the confusion between discipline and rigidity.']},
{a:'lec',p:true,q:['La expresión "quedarse a la deriva" significa:','The expression "left adrift" means:'],o:[['Quedar sin control ni rumbo','Llegar primero','Anclar en el puerto','Navegar con viento a favor'],['Being left without control or course','Arriving first','Anchoring in port','Sailing with a tailwind']],c:0,e:['Una embarcación a la deriva va sin gobierno.','A vessel adrift moves without steering.']},
{a:'lec',q:['Sinónimo de "intrépido":','Synonym of "intrepid":'],o:[['Valiente','Tímido','Distraído','Lento'],['Brave','Shy','Distracted','Slow']],c:0,e:['Intrépido: que no teme al peligro.','Intrepid: not afraid of danger.']},
{a:'lec',q:['Antónimo de "efímero":','Antonym of "ephemeral":'],o:[['Duradero','Breve','Pasajero','Fugaz'],['Lasting','Brief','Passing','Fleeting']],c:0,e:['Efímero es lo que dura poco.','Ephemeral means short-lived.']},
{a:'lec',q:['¿Cuál oración está correctamente escrita?','Which Spanish sentence is correct?'],o:[['Hubo muchas personas en la ceremonia','Hubieron muchas personas en la ceremonia','Habían muchas personas en la ceremonia','Hubiesen muchas personas en la ceremonia']],c:0,e:['"Haber" impersonal va en singular: hubo, había.','Impersonal "haber" is always singular: hubo, había.']},
{a:'lec',q:['Barco es a puerto como avión es a…','Ship is to port as airplane is to…'],o:[['Aeropuerto','Piloto','Cielo','Ala'],['Airport','Pilot','Sky','Wing']],c:0,e:['Relación: vehículo y lugar donde llega.','Relationship: vehicle and the place it arrives.']},
{a:'lec',q:['Un texto cuyo propósito principal es convencer al lector es:','A text whose main purpose is to persuade the reader is:'],o:[['Argumentativo','Narrativo','Descriptivo','Instructivo'],['Argumentative','Narrative','Descriptive','Instructional']],c:0,e:['Presenta una tesis y razones para sostenerla.','It presents a thesis and reasons to support it.']},
{a:'lec',q:['¿Qué conector expresa contraste?','Which connector expresses contrast?'],o:[['Sin embargo','Además','Por lo tanto','Por ejemplo'],['However','Moreover','Therefore','For example']],c:0,e:['Introduce una idea opuesta a la anterior.','It introduces an idea opposed to the previous one.']},
{a:'lec',q:['Sujeto de: "Los marinos de la fragata izaron la bandera al amanecer".','Subject of: "The sailors of the frigate raised the flag at dawn."'],o:[['Los marinos de la fragata','La bandera','Al amanecer','Izaron'],['The sailors of the frigate','The flag','At dawn','Raised']],c:0,e:['Es quien realiza la acción del verbo.','It is who performs the action of the verb.']},
{a:'lec',q:['¿Cuál palabra está bien escrita?','Which Spanish word is spelled correctly?'],o:[['Vocación','Bocación','Vocasión','Bocasión']],c:0,e:['Vocación, del latín vocatio.','Vocación, from Latin vocatio.']},
{a:'lec',q:['Plural correcto de "el régimen":','Correct plural of Spanish "el régimen":'],o:[['Los regímenes','Los régimenes','Los regimenes','Los régimens']],c:0,e:['El acento pasa a la sílaba "gí".','The stress moves to the syllable "gí".']},

/* ---------- INGLÉS ---------- */
{a:'ing',q:['She ___ to the naval base every day.','She ___ to the naval base every day.'],o:[['goes','go','going','gone']],c:0,e:['Presente simple, tercera persona: goes.','Simple present, third person: goes.']},
{a:'ing',q:['Past tense of "swim":','Past tense of "swim":'],o:[['swam','swimmed','swum','swims']],c:0,e:['swim – swam – swum.','swim – swam – swum.']},
{a:'ing',q:['I have lived in Cartagena ___ 2020.','I have lived in Cartagena ___ 2020.'],o:[['since','for','from','during']],c:0,e:['"Since" + punto de partida en el tiempo.','"Since" + starting point in time.']},
{a:'ing',q:['The frigate is ___ than the patrol boat.','The frigate is ___ than the patrol boat.'],o:[['bigger','more big','biggest','big']],c:0,e:['Comparativo de adjetivo corto: big → bigger.','Comparative of a short adjective: big → bigger.']},
{a:'ing',q:['Where ___ you yesterday?','Where ___ you yesterday?'],o:[['were','was','are','did']],c:0,e:['Pasado de "to be" con "you": were.','Past of "to be" with "you": were.']},
{a:'ing',q:['If it rains, we ___ the training.','If it rains, we ___ the training.'],o:[['will cancel','cancelled','would cancelled','cancelling']],c:0,e:['Primer condicional: if + presente, will + verbo.','First conditional: if + present, will + verb.']},
{a:'ing',q:['The English word for "deber" is:','The English word for Spanish "deber" (obligation) is:'],o:[['duty','dust','due','dutiful']],c:0,e:['"Duty" = deber, obligación.','"Duty" = obligation.']},
{a:'ing',q:['There aren’t ___ chairs in the room.','There aren’t ___ chairs in the room.'],o:[['any','some','a','much']],c:0,e:['En negativas con plurales se usa "any".','In negatives with plurals use "any".']},
{a:'ing',q:['Reading: "The cadets wake up at 5:00 a.m. and run for thirty minutes before breakfast." What do the cadets do before breakfast?','Reading: "The cadets wake up at 5:00 a.m. and run for thirty minutes before breakfast." What do the cadets do before breakfast?'],o:[['They run','They sleep','They swim','They study']],c:0,e:['El texto dice que corren 30 minutos.','The text says they run for thirty minutes.']},
{a:'ing',q:['My sister is ___ engineer.','My sister is ___ engineer.'],o:[['an','a','the','—']],c:0,e:['"An" antes de sonido vocálico.','"An" before a vowel sound.']},
{a:'ing',q:['How ___ water do you drink every day?','How ___ water do you drink every day?'],o:[['much','many','long','often']],c:0,e:['Water es incontable: much.','Water is uncountable: much.']},
{a:'ing',q:['They ___ watching TV when the alarm rang.','They ___ watching TV when the alarm rang.'],o:[['were','was','are','have']],c:0,e:['Pasado continuo: were + -ing.','Past continuous: were + -ing.']},
{a:'ing',q:['The captain, ___ ship is new, gave a speech.','The captain, ___ ship is new, gave a speech.'],o:[['whose','who','which','whom']],c:0,e:['"Whose" indica posesión.','"Whose" shows possession.']},
{a:'ing',q:['Choose the correct sentence:','Choose the correct sentence:'],o:[['He doesn’t like cold water.','He don’t like cold water.','He not likes cold water.','He doesn’t likes cold water.']],c:0,e:['Doesn’t + verbo en forma base.','Doesn’t + base form of the verb.']},

/* ---------- RAZONAMIENTO / PSICOTÉCNICA ---------- */
{a:'raz',q:['Complete la serie: 2, 6, 12, 20, 30, ?','Complete the series: 2, 6, 12, 20, 30, ?'],o:[['42','40','36','44']],c:0,e:['Diferencias 4, 6, 8, 10, 12.','Differences 4, 6, 8, 10, 12.']},
{a:'raz',q:['Complete la serie: 3, 6, 11, 18, 27, ?','Complete the series: 3, 6, 11, 18, 27, ?'],o:[['38','36','39','35']],c:0,e:['Diferencias impares: 3, 5, 7, 9, 11.','Odd differences: 3, 5, 7, 9, 11.']},
{a:'raz',q:['Complete la serie: A, C, F, J, ?','Complete the series: A, C, F, J, ?'],o:[['O','N','M','P']],c:0,e:['Saltos de 2, 3, 4 y 5 letras.','Jumps of 2, 3, 4 and 5 letters.']},
{a:'raz',q:['Complete la serie: 1, 1, 2, 3, 5, 8, ?','Complete the series: 1, 1, 2, 3, 5, 8, ?'],o:[['13','11','12','16']],c:0,e:['Cada número es la suma de los dos anteriores.','Each number is the sum of the previous two.']},
{a:'raz',q:['Todos los cadetes saben nadar. Juan es cadete. Entonces:','All cadets can swim. Juan is a cadet. Therefore:'],o:[['Juan sabe nadar','Juan no sabe nadar','Todos los que nadan son cadetes','No se puede saber'],['Juan can swim','Juan cannot swim','Everyone who swims is a cadet','It cannot be known']],c:0,e:['Silogismo válido.','Valid syllogism.']},
{a:'raz',q:['¿Cuál no pertenece al grupo?','Which one does not belong?'],o:[['Helicóptero','Fragata','Corbeta','Submarino'],['Helicopter','Frigate','Corvette','Submarine']],c:0,e:['Los demás son buques.','The others are vessels.']},
{a:'raz',q:['¿Qué ángulo forman las agujas de un reloj a las 3:00?','What angle do the clock hands form at 3:00?'],o:[['90°','45°','180°','30°']],c:0,e:['Un cuarto de vuelta.','A quarter turn.']},
{a:'raz',q:['Si hoy es miércoles, ¿qué día será dentro de 10 días?','If today is Wednesday, what day will it be in 10 days?'],o:[['Sábado','Viernes','Domingo','Jueves'],['Saturday','Friday','Sunday','Thursday']],c:0,e:['7 días vuelve a miércoles; 3 más, sábado.','7 days is Wednesday again; 3 more, Saturday.']},
{a:'raz',q:['Pedro es más alto que Luis y Luis es más alto que Ana. ¿Quién es el más bajo?','Pedro is taller than Luis and Luis is taller than Ana. Who is the shortest?'],o:[['Ana','Luis','Pedro','No se sabe'],['Ana','Luis','Pedro','Cannot tell']],c:0,e:['Orden: Pedro > Luis > Ana.','Order: Pedro > Luis > Ana.']},
{a:'raz',q:['Mira al norte. Gira 90° a la derecha dos veces y luego 90° a la izquierda. ¿Hacia dónde mira?','You face north. Turn 90° right twice, then 90° left. Where do you face?'],o:[['Este','Oeste','Sur','Norte'],['East','West','South','North']],c:0,e:['Norte → Este → Sur → Este.','North → East → South → East.']},
{a:'raz',q:['Complete la serie: 81, 27, 9, 3, ?','Complete the series: 81, 27, 9, 3, ?'],o:[['1','0','2','1/3']],c:0,e:['Se divide entre 3.','Divide by 3.']},
{a:'raz',q:['Si MAR se codifica NBS, ¿cómo se codifica SOL?','If MAR is coded as NBS, how is SOL coded?'],o:[['TPM','RNK','TPL','SPM']],c:0,e:['Cada letra avanza una posición.','Each letter moves forward one place.']},
{a:'raz',q:['5 máquinas hacen 5 piezas en 5 minutos. ¿Cuánto tardan 100 máquinas en hacer 100 piezas?','5 machines make 5 parts in 5 minutes. How long do 100 machines take to make 100 parts?'],o:[['5 minutos','100 minutos','20 minutos','1 minuto'],['5 minutes','100 minutes','20 minutes','1 minute']],c:0,e:['Cada máquina hace 1 pieza en 5 minutos.','Each machine makes 1 part in 5 minutes.']},
{a:'raz',q:['Un cubo de 3×3×3 pintado por fuera se corta en 27 cubitos. ¿Cuántos tienen exactamente 2 caras pintadas?','A painted 3×3×3 cube is cut into 27 small cubes. How many have exactly 2 painted faces?'],o:[['12','8','6','4']],c:0,e:['Uno por cada arista: 12 aristas.','One per edge: 12 edges.']},
{a:'raz',q:['Complete la serie: 4, 9, 16, 25, ?','Complete the series: 4, 9, 16, 25, ?'],o:[['36','30','35','49']],c:0,e:['Cuadrados: 2², 3², 4², 5², 6².','Squares: 2², 3², 4², 5², 6².']},
{a:'raz',q:['¿Cuántas veces aparece la letra A en "ARMADA NACIONAL"?','How many times does the letter A appear in "ARMADA NACIONAL"?'],o:[['5','4','6','3']],c:0,e:['ARMADA tiene 3 y NACIONAL tiene 2.','ARMADA has 3 and NACIONAL has 2.']},

/* ---------- CULTURA NAVAL ---------- */
{a:'nav',q:['Héroe naval que venció en la Batalla Naval del Lago de Maracaibo:','Naval hero who won the Naval Battle of Lake Maracaibo:'],o:[['José Prudencio Padilla','Antonio Nariño','Francisco de Paula Santander','Rafael Reyes']],c:0,e:['El almirante Padilla da nombre a la Escuela Naval de Cadetes.','Admiral Padilla gives his name to the Naval Cadet School.']},
{a:'nav',q:['¿En qué fecha fue la Batalla Naval del Lago de Maracaibo?','When was the Naval Battle of Lake Maracaibo?'],o:[['24 de julio de 1823','20 de julio de 1810','7 de agosto de 1819','12 de octubre de 1492'],['July 24, 1823','July 20, 1810','August 7, 1819','October 12, 1492']],c:0,e:['Por eso el 24 de julio se conmemora a la Armada.','That is why the Navy is honored on July 24.']},
{a:'nav',q:['La Escuela Naval de Cadetes "Almirante Padilla" está en:','The "Almirante Padilla" Naval Cadet School is in:'],o:[['Cartagena','Barranquilla','Santa Marta','Buenaventura']],c:0,e:['Funciona en la isla de Manzanillo, Cartagena.','It is on Manzanillo Island, Cartagena.']},
{a:'nav',q:['La Escuela Naval de Suboficiales ARC "Barranquilla" forma a los:','The ARC "Barranquilla" Petty Officer School trains:'],o:[['Grumetes (futuros suboficiales)','Cadetes de oficial','Pilotos de la Fuerza Aérea','Policías de tránsito'],['Grumetes (future petty officers)','Officer cadets','Air Force pilots','Traffic police']],c:0,e:['Allí se forman en especialidades tecnológicas.','They train there in technical specialties.']},
{a:'nav',q:['La Escuela de Formación de Infantería de Marina está en:','The Marine Corps Training School is in:'],o:[['Coveñas (Sucre)','Tumaco','Leticia','Bogotá']],c:0,e:['Coveñas, en el golfo de Morrosquillo.','Coveñas, on the Gulf of Morrosquillo.']},
{a:'nav',q:['Buque escuela e insignia de la Armada de Colombia:','Training ship and flagship of the Colombian Navy:'],o:[['ARC Gloria','ARC Padilla','ARC Caldas','ARC Independiente']],c:0,e:['Construido en Bilbao y en servicio desde 1968.','Built in Bilbao and in service since 1968.']},
{a:'nav',q:['En un buque, "babor" es:','On a ship, "babor" (port) is:'],o:[['El lado izquierdo mirando hacia proa','El lado derecho mirando hacia proa','La parte trasera','La parte delantera'],['The left side facing the bow','The right side facing the bow','The rear','The front']],c:0,e:['Estribor es el lado derecho.','Starboard is the right side.']},
{a:'nav',q:['La "popa" de un buque es:','The "popa" (stern) of a ship is:'],o:[['La parte trasera','La parte delantera','El mástil principal','El fondo del casco'],['The rear','The front','The main mast','The bottom of the hull']],c:0,e:['La proa es la parte delantera.','The bow is the front.']},
{a:'nav',q:['Un nudo de velocidad equivale a:','One knot of speed equals:'],o:[['Una milla náutica por hora','Un kilómetro por hora','Una milla terrestre por hora','Un metro por segundo'],['One nautical mile per hour','One kilometer per hour','One statute mile per hour','One meter per second']],c:0,e:['1 nudo ≈ 1,852 km/h.','1 knot ≈ 1.852 km/h.']},
{a:'nav',q:['Grado con el que se gradúa un oficial naval de la Escuela Naval de Cadetes:','Rank a naval officer receives on graduating from the Cadet School:'],o:[['Teniente de Corbeta','Capitán de Navío','Contralmirante','Sargento'],['Teniente de Corbeta (Ensign)','Capitán de Navío (Captain)','Contralmirante (Rear Admiral)','Sargento (Sergeant)']],c:0,e:['Es el primer grado de oficial en la Armada.','It is the first officer rank in the Navy.']},
{a:'nav',q:['¿Cuál es el grado más alto en la carrera de oficial de la Armada?','Which is the highest rank in a Navy officer career?'],o:[['Almirante','Vicealmirante','Capitán de Fragata','Teniente de Navío'],['Admiral','Vice Admiral','Commander','Lieutenant']],c:0,e:['Orden: Contralmirante, Vicealmirante, Almirante.','Order: Rear Admiral, Vice Admiral, Admiral.']},
{a:'nav',q:['Colombia tiene costas sobre:','Colombia has coastlines on:'],o:[['El mar Caribe y el océano Pacífico','Solo el océano Pacífico','El Atlántico Sur','Solo el mar Caribe'],['The Caribbean Sea and the Pacific Ocean','Only the Pacific Ocean','The South Atlantic','Only the Caribbean Sea']],c:0,e:['Por eso se habla de Colombia bioceánica.','That is why Colombia is called bi-oceanic.']},
{a:'nav',q:['Isla colombiana del Pacífico declarada santuario de fauna y flora:','Colombian Pacific island declared a fauna and flora sanctuary:'],o:[['Malpelo','San Andrés','Isla Fuerte','Tierra Bomba']],c:0,e:['Famosa por sus tiburones martillo.','Famous for its hammerhead sharks.']},
{a:'nav',q:['Archipiélago colombiano en el mar Caribe:','Colombian archipelago in the Caribbean Sea:'],o:[['San Andrés, Providencia y Santa Catalina','Galápagos','Islas del Rosario y Malpelo','Gorgona y Gorgonilla'],['San Andrés, Providencia and Santa Catalina','Galápagos','Rosario Islands and Malpelo','Gorgona and Gorgonilla']],c:0,e:['Departamento insular del Caribe.','Island department in the Caribbean.']},
{a:'nav',q:['¿Dónde nació el almirante José Prudencio Padilla?','Where was Admiral José Prudencio Padilla born?'],o:[['Riohacha','Cartagena','Mompox','Santa Marta']],c:0,e:['Nació en Riohacha, La Guajira, en 1784.','He was born in Riohacha, La Guajira, in 1784.']},
{a:'nav',q:['La sigla ARC significa:','The acronym ARC stands for:'],o:[['Armada de la República de Colombia','Agrupación Regional Costera','Autoridad de Rescate Costero','Armada Regional del Caribe'],['Navy of the Republic of Colombia','Regional Coastal Group','Coastal Rescue Authority','Caribbean Regional Navy']],c:0,e:['Antecede el nombre de los buques: ARC Gloria.','It precedes ship names: ARC Gloria.']},

/* ---------- SOCIALES Y CONSTITUCIÓN ---------- */
{a:'soc',q:['¿En qué año se expidió la Constitución Política vigente de Colombia?','In what year was Colombia’s current Constitution issued?'],o:[['1991','1886','1810','2001']],c:0,e:['Reemplazó la Constitución de 1886.','It replaced the 1886 Constitution.']},
{a:'soc',q:['¿Quién es el comandante supremo de las Fuerzas Armadas?','Who is the supreme commander of the Armed Forces?'],o:[['El Presidente de la República','El Ministro de Defensa','El Comandante del Ejército','El Congreso'],['The President of the Republic','The Minister of Defense','The Army Commander','Congress']],c:0,e:['Así lo establece la Constitución.','The Constitution establishes it.']},
{a:'soc',q:['Las Fuerzas Militares de Colombia están conformadas por:','Colombia’s Military Forces are made up of:'],o:[['Ejército, Armada y Fuerza Aérea','Ejército, Policía y Armada','Armada, Policía y Fiscalía','Ejército y Policía'],['Army, Navy and Air Force','Army, Police and Navy','Navy, Police and Prosecutor’s Office','Army and Police']],c:0,e:['La Policía Nacional es un cuerpo civil armado, no Fuerza Militar.','The National Police is an armed civilian body, not a Military Force.']},
{a:'soc',q:['Ramas del poder público en Colombia:','Branches of public power in Colombia:'],o:[['Legislativa, ejecutiva y judicial','Militar, civil y religiosa','Nacional, departamental y municipal','Electoral, fiscal y militar'],['Legislative, executive and judicial','Military, civil and religious','National, departmental and municipal','Electoral, fiscal and military']],c:0,e:['Son las tres ramas clásicas.','They are the three classic branches.']},
{a:'soc',q:['Batalla que selló la independencia de la Nueva Granada:','Battle that sealed New Granada’s independence:'],o:[['Batalla de Boyacá','Batalla de Ayacucho','Batalla del Pantano de Vargas','Batalla de Pichincha'],['Battle of Boyacá','Battle of Ayacucho','Battle of Pantano de Vargas','Battle of Pichincha']],c:0,e:['7 de agosto de 1819.','August 7, 1819.']},
{a:'soc',q:['Principal arteria fluvial de Colombia:','Colombia’s main river artery:'],o:[['Río Magdalena','Río Atrato','Río Sinú','Río San Jorge'],['Magdalena River','Atrato River','Sinú River','San Jorge River']],c:0,e:['Atraviesa el país de sur a norte hasta el Caribe.','It crosses the country south to north to the Caribbean.']},
{a:'soc',q:['La acción de tutela protege:','The "acción de tutela" protects:'],o:[['Los derechos fundamentales','Los bienes del Estado','Los contratos privados','Las fronteras'],['Fundamental rights','State property','Private contracts','Borders']],c:0,e:['Mecanismo creado por la Constitución de 1991.','A mechanism created by the 1991 Constitution.']},
{a:'soc',q:['¿Cuántos departamentos tiene Colombia?','How many departments does Colombia have?'],o:[['32','30','33','28']],c:0,e:['32 departamentos y Bogotá como Distrito Capital.','32 departments plus Bogotá as Capital District.']},
{a:'soc',q:['¿Cuál NO hace parte de las Fuerzas Militares?','Which is NOT part of the Military Forces?'],o:[['La Policía Nacional','La Armada','El Ejército','La Fuerza Aérea'],['The National Police','The Navy','The Army','The Air Force']],c:0,e:['La Policía es parte de la Fuerza Pública, no de las Fuerzas Militares.','The Police belongs to the Public Force, not the Military Forces.']},
{a:'soc',q:['Autor de la letra del Himno Nacional de Colombia:','Author of the lyrics of Colombia’s National Anthem:'],o:[['Rafael Núñez','Oreste Sindici','Jorge Isaacs','José Asunción Silva']],c:0,e:['La música es de Oreste Sindici.','The music is by Oreste Sindici.']}
];

/* Generador de ejercicios numéricos nuevos para que el simulacro nunca sea igual */
function generarMat() {
  const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const tipos = [
    () => { const a = r(12, 60), p = [10, 20, 25, 30, 40, 50][r(0, 5)], v = a * 10; const ok = v * p / 100;
      return { q: [`¿Cuál es el ${p} % de ${v}?`, `What is ${p}% of ${v}?`], ok, e: [`${v} × ${p}/100 = ${ok}.`, `${v} × ${p}/100 = ${ok}.`] }; },
    () => { const x = r(2, 15), a = r(2, 9), b = r(1, 30), c = a * x + b;
      return { q: [`Si ${a}x + ${b} = ${c}, ¿cuánto vale x?`, `If ${a}x + ${b} = ${c}, what is x?`], ok: x, e: [`${a}x = ${c - b}, x = ${x}.`, `${a}x = ${c - b}, x = ${x}.`] }; },
    () => { const v = r(8, 25), t = r(2, 9), ok = v * t;
      return { q: [`Una lancha navega a ${v} nudos durante ${t} horas. ¿Cuántas millas náuticas recorre?`, `A boat sails at ${v} knots for ${t} hours. How many nautical miles does it cover?`], ok, e: [`${v} × ${t} = ${ok}.`, `${v} × ${t} = ${ok}.`] }; },
    () => { const a = r(2, 9), d = r(2, 7), n = [a, a + d, a + 2 * d, a + 3 * d], ok = a + 4 * d;
      return { q: [`Complete la serie: ${n.join(', ')}, ?`, `Complete the series: ${n.join(', ')}, ?`], ok, e: [`Aumenta de ${d} en ${d}.`, `It increases by ${d} each time.`] }; },
    () => { const w = r(3, 15), h = r(3, 15), ok = w * h;
      return { q: [`Área de una cubierta rectangular de ${w} m por ${h} m (en m²):`, `Area of a ${w} m by ${h} m rectangular deck (in m²):`], ok, e: [`${w} × ${h} = ${ok}.`, `${w} × ${h} = ${ok}.`] }; }
  ];
  const g = tipos[r(0, tipos.length - 1)]();
  const set = new Set([g.ok]);
  while (set.size < 4) { const d = g.ok + r(-12, 12); if (d !== g.ok && d > 0) set.add(d); }
  const opts = [...set].sort(() => Math.random() - .5).map(String);
  return { a: 'mat', gen: true, q: g.q, o: [opts], c: opts.indexOf(String(g.ok)), e: g.e };
}

/* =====================================================================
   PSICOTÉCNICA — baterías de aptitudes y personalidad
   ===================================================================== */
Object.assign(AREAS, {
  psV: { es: 'Razonamiento verbal', en: 'Verbal reasoning' },
  psN: { es: 'Razonamiento numérico', en: 'Numerical reasoning' },
  psA: { es: 'Razonamiento abstracto', en: 'Abstract reasoning' },
  psE: { es: 'Razonamiento espacial', en: 'Spatial reasoning' },
  psT: { es: 'Atención y concentración', en: 'Attention and focus' }
});

BANCO.push(
/* ---- Verbal ---- */
{a:'psV',q:['Médico es a hospital como maestro es a…','Doctor is to hospital as teacher is to…'],o:[['Escuela','Libro','Alumno','Tiza'],['School','Book','Student','Chalk']],c:0,e:['Lugar donde trabaja cada uno.','The place where each one works.']},
{a:'psV',q:['Timón es a barco como volante es a…','Helm is to ship as steering wheel is to…'],o:[['Carro','Avión','Motor','Llanta'],['Car','Airplane','Engine','Tire']],c:0,e:['Elemento con el que se dirige el vehículo.','The part used to steer the vehicle.']},
{a:'psV',q:['Ola es a mar como duna es a…','Wave is to sea as dune is to…'],o:[['Desierto','Montaña','Río','Playa'],['Desert','Mountain','River','Beach']],c:0,e:['Forma típica de cada paisaje.','The typical form of each landscape.']},
{a:'psV',q:['Sinónimo de "acatar":','Synonym of "comply":'],o:[['Obedecer','Ignorar','Discutir','Ordenar'],['Obey','Ignore','Argue','Command']],c:0,e:['Acatar es cumplir una orden o norma.','To comply is to follow an order or rule.']},
{a:'psV',q:['Antónimo de "diligente":','Antonym of "diligent":'],o:[['Negligente','Cuidadoso','Rápido','Atento'],['Negligent','Careful','Quick','Attentive']],c:0,e:['Diligente es quien actúa con cuidado y empeño.','Diligent means acting with care and effort.']},
{a:'psV',q:['Sinónimo de "prudente":','Synonym of "prudent":'],o:[['Sensato','Impulsivo','Tímido','Distraído'],['Sensible','Impulsive','Shy','Distracted']],c:0,e:['Actúa con juicio y cuidado.','Acts with judgment and care.']},
{a:'psV',q:['¿Qué palabra no pertenece al grupo?','Which word does not belong?'],o:[['Tenedor','Ancla','Timón','Mástil'],['Fork','Anchor','Helm','Mast']],c:0,e:['Las demás son partes o elementos de un barco.','The others are parts of a ship.']},
{a:'psV',q:['Complete: "El aspirante demostró gran ___ al cumplir la orden bajo la lluvia."','Complete: "The candidate showed great ___ by following the order in the rain."'],o:[['disciplina','pereza','desorden','indiferencia'],['discipline','laziness','disorder','indifference']],c:0,e:['Es la única que encaja con cumplir la orden.','It is the only one that fits following the order.']},
{a:'psV',q:['¿Qué significa "zarpar"?','What does Spanish "zarpar" mean?'],o:[['Salir un barco del puerto','Llegar un barco al puerto','Hundirse un barco','Reparar un barco'],['A ship leaving port','A ship arriving in port','A ship sinking','Repairing a ship']],c:0,e:['Lo contrario es atracar.','The opposite is to dock.']},
{a:'psV',q:['Continúe: lunes, miércoles, viernes, …','Continue: Monday, Wednesday, Friday, …'],o:[['Domingo','Sábado','Martes','Jueves'],['Sunday','Saturday','Tuesday','Thursday']],c:0,e:['Se salta un día cada vez.','One day is skipped each time.']},
{a:'psV',q:['Ordene la frase: "honor / el / es / deber / un"','Order the words: "duty / honor / a / is"'],o:[['El honor es un deber','Un deber el honor es','Es el honor deber un','Deber es un el honor'],['Honor is a duty','A duty honor is','Is honor a duty','Duty a is honor']],c:0,e:['Sujeto + verbo + complemento.','Subject + verb + complement.']},
{a:'psV',q:['Antónimo de "sereno":','Antonym of "calm":'],o:[['Alterado','Tranquilo','Sosegado','Pacífico'],['Agitated','Quiet','Peaceful','Relaxed']],c:0,e:['Sereno es tranquilo, sin alteración.','Calm means without agitation.']},
{a:'psV',q:['Libro es a leer como cuchara es a…','Book is to read as spoon is to…'],o:[['Comer','Cocinar','Lavar','Plato'],['Eat','Cook','Wash','Plate']],c:0,e:['Relación objeto y uso.','Object and its use.']},
/* ---- Numérico ---- */
{a:'psN',q:['Complete la serie: 7, 14, 28, 56, ?','Complete the series: 7, 14, 28, 56, ?'],o:[['112','84','70','98']],c:0,e:['Cada número se duplica.','Each number doubles.']},
{a:'psN',q:['Complete la serie: 100, 95, 85, 70, ?','Complete the series: 100, 95, 85, 70, ?'],o:[['50','55','60','45']],c:0,e:['Se resta 5, 10, 15 y 20.','Subtract 5, 10, 15 and 20.']},
{a:'psN',q:['Complete la serie: 2, 3, 5, 9, 17, ?','Complete the series: 2, 3, 5, 9, 17, ?'],o:[['33','34','25','31']],c:0,e:['Por 2 y menos 1: 17 × 2 − 1 = 33.','Times 2 minus 1: 17 × 2 − 1 = 33.']},
{a:'psN',q:['Complete la serie: 12, 6, 18, 9, 27, ?','Complete the series: 12, 6, 18, 9, 27, ?'],o:[['13,5','54','9','36'],['13.5','54','9','36']],c:0,e:['Se alterna dividir entre 2 y multiplicar por 3.','Alternate dividing by 2 and multiplying by 3.']},
{a:'psN',q:['3 cuadernos cuestan $7.500. ¿Cuánto cuestan 5?','3 notebooks cost $7,500. How much do 5 cost?'],o:[['$12.500','$10.000','$15.000','$11.500'],['$12,500','$10,000','$15,000','$11,500']],c:0,e:['Cada uno vale 2.500.','Each costs 2,500.']},
{a:'psN',q:['Ana tiene el doble de la edad de Luis y juntos suman 36 años. ¿Cuántos años tiene Ana?','Ana is twice as old as Luis and together they are 36. How old is Ana?'],o:[['24','18','12','20']],c:0,e:['Luis 12, Ana 24.','Luis 12, Ana 24.']},
{a:'psN',q:['¿Cuánto es 1/4 de la mitad de 160?','What is 1/4 of half of 160?'],o:[['20','40','10','80']],c:0,e:['Mitad 80; un cuarto de 80 = 20.','Half is 80; a quarter of 80 = 20.']},
{a:'psN',q:['Un tanque de 600 litros se llena a 25 litros por minuto. ¿En cuántos minutos se llena?','A 600-liter tank fills at 25 liters per minute. How many minutes to fill it?'],o:[['24','20','30','15']],c:0,e:['600 ÷ 25 = 24.','600 ÷ 25 = 24.']},
{a:'psN',q:['3 trabajadores tardan 12 horas. ¿Cuánto tardan 9 trabajadores al mismo ritmo?','3 workers take 12 hours. How long do 9 workers take at the same pace?'],o:[['4 horas','36 horas','6 horas','3 horas'],['4 hours','36 hours','6 hours','3 hours']],c:0,e:['3 × 12 = 9 × h, h = 4.','3 × 12 = 9 × h, h = 4.']},
{a:'psN',q:['El promedio de 3 notas es 4,0. Dos son 3,5 y 4,5. ¿Cuál es la tercera?','The average of 3 grades is 4.0. Two are 3.5 and 4.5. What is the third?'],o:[['4,0','3,5','4,5','5,0'],['4.0','3.5','4.5','5.0']],c:0,e:['Suma total 12; 12 − 8 = 4.','Total 12; 12 − 8 = 4.']},
/* ---- Espacial ---- */
{a:'psE',q:['Si gira la letra "b" media vuelta (180°) sobre la hoja, ¿qué letra parece?','If you rotate the letter "b" half a turn (180°) on the page, what letter does it look like?'],o:[['q','d','p','b']],c:0,e:['El palo queda abajo a la derecha y la panza arriba a la izquierda.','The stem ends at bottom right and the bowl at top left.']},
{a:'psE',q:['¿Cómo se ve la letra "p" en un espejo puesto a su lado?','How does the letter "p" look in a mirror placed beside it?'],o:[['q','b','d','p']],c:0,e:['El espejo invierte izquierda y derecha.','The mirror swaps left and right.']},
{a:'psE',q:['Un reloj marca las 3:00. ¿Qué hora parece si se mira en un espejo?','A clock shows 3:00. What time does it seem to show in a mirror?'],o:[['9:00','3:00','6:00','12:00']],c:0,e:['La aguja del 3 aparece en el lado del 9.','The hand at 3 appears on the 9 side.']},
{a:'psE',q:['En un dado normal, ¿qué número está en la cara opuesta al 2?','On a standard die, which number is opposite the 2?'],o:[['5','4','6','3']],c:0,e:['Las caras opuestas suman 7.','Opposite faces add up to 7.']},
{a:'psE',q:['Dobla una hoja por la mitad y otra vez por la mitad. Hace un solo hueco que atraviesa todas las capas. Al desdoblarla, ¿cuántos huecos hay?','Fold a sheet in half and in half again. Punch one hole through all layers. Unfolded, how many holes are there?'],o:[['4','2','1','8']],c:0,e:['Dos dobleces dan 4 capas.','Two folds make 4 layers.']},
{a:'psE',q:['¿Cuántas aristas tiene un cubo?','How many edges does a cube have?'],o:[['12','8','6','10']],c:0,e:['6 caras, 8 vértices y 12 aristas.','6 faces, 8 vertices and 12 edges.']},
{a:'psE',q:['Mira al este. Gira 180° y luego 90° a la derecha. ¿Hacia dónde mira?','You face east. Turn 180° and then 90° to the right. Where do you face?'],o:[['Norte','Sur','Este','Oeste'],['North','South','East','West']],c:0,e:['Este → Oeste → Norte.','East → West → North.']},
{a:'psE',q:['¿Cuántos cubitos forman un cubo de 2 × 2 × 2?','How many small cubes make a 2 × 2 × 2 cube?'],o:[['8','6','4','12']],c:0,e:['2 × 2 × 2 = 8.','2 × 2 × 2 = 8.']},
{a:'psE',q:['Si gira la letra "N" un cuarto de vuelta (90°), ¿a qué letra se parece?','If you rotate the letter "N" a quarter turn (90°), which letter does it resemble?'],o:[['Z','M','W','S']],c:0,e:['Las patas quedan horizontales y la diagonal se mantiene.','The legs become horizontal and the diagonal remains.']}
);

/* ---------- Generadores psicotécnicos ---------- */
const _r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const _uniq = (ans, cand) => { const s = [ans]; cand.forEach(x => { if (!s.includes(x) && s.length < 4) s.push(x); }); return s; };

function _fig(sp) {
  const C = 'var(--ink)', A = 'var(--sea)';
  let inner = '';
  if (sp.t === 'arrow') inner = `<path d="M30 8 L48 30 L37 30 L37 52 L23 52 L23 30 L12 30 Z" fill="${A}" transform="rotate(${sp.v} 30 30)"/>`;
  if (sp.t === 'poly') { const n = sp.v, pts = []; for (let i = 0; i < n; i++) { const an = -Math.PI / 2 + i * 2 * Math.PI / n; pts.push((30 + 22 * Math.cos(an)).toFixed(1) + ',' + (30 + 22 * Math.sin(an)).toFixed(1)); } inner = `<polygon points="${pts.join(' ')}" fill="none" stroke="${A}" stroke-width="3"/>`; }
  if (sp.t === 'dots') { const n = sp.v; for (let i = 0; i < n; i++) { const x = 14 + (i % 3) * 16, y = 14 + Math.floor(i / 3) * 16; inner += `<circle cx="${x}" cy="${y}" r="5" fill="${A}"/>`; } }
  if (sp.t === 'quad') { const q = [[8, 8], [30, 8], [30, 30], [8, 30]][sp.v]; inner = `<rect x="8" y="8" width="44" height="44" fill="none" stroke="${C}" stroke-width="2"/><line x1="30" y1="8" x2="30" y2="52" stroke="${C}" stroke-width="2"/><line x1="8" y1="30" x2="52" y2="30" stroke="${C}" stroke-width="2"/><rect x="${q[0]}" y="${q[1]}" width="22" height="22" fill="${A}"/>`; }
  return `<svg viewBox="0 0 60 60" width="54" height="54" style="vertical-align:middle">${inner}</svg>`;
}
function generarAbstracto() {
  const tipo = ['arrow', 'poly', 'dots', 'quad'][_r(0, 3)];
  let seq, ans, cand;
  if (tipo === 'arrow') { const st = [45, 90, 135][_r(0, 2)], a0 = _r(0, 7) * 45; seq = [0, 1, 2, 3].map(k => (a0 + k * st) % 360); ans = (a0 + 4 * st) % 360; cand = [(ans + st) % 360, (ans + 360 - st) % 360, (ans + 180) % 360, (ans + 45) % 360]; }
  if (tipo === 'poly') { const n0 = 3; seq = [3, 4, 5, 6]; ans = 7; cand = [6, 8, 5, 4]; }
  if (tipo === 'dots') { const st = _r(1, 2), d0 = 1; seq = [0, 1, 2, 3].map(k => d0 + k * st); ans = d0 + 4 * st; cand = [ans - 1, ans + 1, ans - st, ans + 2]; }
  if (tipo === 'quad') { const q0 = _r(0, 3), dir = _r(0, 1) ? 1 : 3; seq = [0, 1, 2, 3].map(k => (q0 + k * dir) % 4); ans = (q0 + 4 * dir) % 4; cand = [0, 1, 2, 3]; }
  const vals = _uniq(ans, cand).sort(() => Math.random() - .5);
  const serie = `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px">${seq.map(v => `<span style="border:1.5px solid var(--line);border-radius:10px;padding:4px;display:inline-block">${_fig({ t: tipo, v })}</span>`).join('')}<span style="border:2px dashed var(--gold);border-radius:10px;width:64px;height:64px;display:inline-grid;place-items:center;font-weight:800;font-size:26px">?</span></div>`;
  return { a: 'psA', gen: true, q: ['¿Qué figura continúa la serie?' + serie, 'Which figure comes next in the series?' + serie], o: [vals.map(v => _fig({ t: tipo, v }))], c: vals.indexOf(ans),
    e: { arrow: ['La flecha gira siempre el mismo ángulo.', 'The arrow turns by the same angle each time.'], poly: ['Cada figura tiene un lado más.', 'Each figure has one more side.'], dots: ['Los puntos aumentan en la misma cantidad.', 'The dots increase by the same amount.'], quad: ['El cuadro sombreado avanza una casilla en el mismo sentido.', 'The shaded square moves one cell in the same direction.'] }[tipo] };
}
function generarAtencion() {
  if (_r(0, 1)) {
    const t = _r(1, 9), digs = []; let cnt = 0;
    for (let i = 0; i < 24; i++) { let d = _r(0, 9); if (Math.random() < .2) d = t; if (d === t) cnt++; digs.push(d); }
    if (cnt < 2) { digs[3] = t; digs[15] = t; cnt = digs.filter(d => d === t).length; }
    const vals = _uniq(cnt, [cnt + 1, cnt - 1, cnt + 2, cnt - 2, cnt + 3].filter(x => x >= 0)).sort((a, b) => a - b).map(String);
    const s = `<div style="font-family:monospace;font-size:22px;letter-spacing:4px;margin-top:10px;word-break:break-all">${digs.join(' ')}</div>`;
    return { a: 'psT', gen: true, q: [`¿Cuántas veces aparece el número ${t}?` + s, `How many times does the number ${t} appear?` + s], o: [vals], c: vals.indexOf(String(cnt)), e: [`Aparece ${cnt} veces. Recorra la fila con el dedo, de izquierda a derecha.`, `It appears ${cnt} times. Scan the row left to right with your finger.`] };
  }
  const ch = 'ABCDEFGHJKLMNPRSTUVXYZ23456789', code = () => Array.from({ length: 7 }, () => ch[_r(0, ch.length - 1)]).join('');
  let iguales = 0; const filas = [];
  for (let i = 0; i < 5; i++) { const a = code(); let b = a; if (Math.random() < .55) { const p = _r(0, 6); let nc; do { nc = ch[_r(0, ch.length - 1)]; } while (nc === a[p]); b = a.slice(0, p) + nc + a.slice(p + 1); } else iguales++; filas.push([a, b]); }
  const vals = _uniq(iguales, [iguales + 1, iguales - 1, iguales + 2, iguales - 2, 0, 1, 2, 3, 4, 5].filter(x => x >= 0 && x <= 5)).sort((a, b) => a - b).map(String);
  const s = `<table style="font-family:monospace;font-size:20px;letter-spacing:3px;margin-top:10px;width:auto">${filas.map(f => `<tr><td style="padding:4px 14px 4px 0">${f[0]}</td><td style="padding:4px 0">${f[1]}</td></tr>`).join('')}</table>`;
  return { a: 'psT', gen: true, q: ['¿Cuántos pares de códigos son exactamente iguales?' + s, 'How many code pairs are exactly the same?' + s], o: [vals], c: vals.indexOf(String(iguales)), e: [`Hay ${iguales} pares iguales. Compare carácter por carácter.`, `There are ${iguales} identical pairs. Compare character by character.`] };
}
function generarNumerico() {
  const a = _r(2, 6), q = _r(2, 3), seq = [0, 1, 2, 3].map(k => a * q ** k), ok = a * q ** 4;
  const vals = _uniq(ok, [ok + a, ok - q, seq[3] * 2 + 1, ok + q * 2]).sort(() => Math.random() - .5).map(String);
  return { a: 'psN', gen: true, q: [`Complete la serie: ${seq.join(', ')}, ?`, `Complete the series: ${seq.join(', ')}, ?`], o: [vals], c: vals.indexOf(String(ok)), e: [`Cada término se multiplica por ${q}.`, `Each term is multiplied by ${q}.`] };
}
const GENERADORES = { mat: generarMat, psA: generarAbstracto, psT: generarAtencion, psN: generarNumerico };

/* ---------- Cuestionario de personalidad (sin respuestas buenas o malas) ---------- */
const DIMS = {
  dis: { es: 'Disciplina y orden', en: 'Discipline and order' },
  equ: { es: 'Trabajo en equipo', en: 'Teamwork' },
  est: { es: 'Estabilidad emocional', en: 'Emotional stability' },
  lid: { es: 'Liderazgo e iniciativa', en: 'Leadership and initiative' },
  hon: { es: 'Honestidad', en: 'Honesty' }
};
const PERSONALIDAD = [
  ['dis', 0, 'Me gusta tener mis cosas en orden.', 'I like to keep my things in order.'],
  ['equ', 0, 'Prefiero trabajar en equipo que solo.', 'I prefer working in a team to working alone.'],
  ['est', 0, 'Mantengo la calma cuando me presionan.', 'I stay calm when I am under pressure.'],
  ['lid', 0, 'Me ofrezco para organizar al grupo.', 'I volunteer to organize the group.'],
  ['ctl', 0, 'Nunca en mi vida he dicho una mentira.', 'I have never told a lie in my life.'],
  ['dis', 0, 'Cumplo los horarios aunque nadie me esté vigilando.', 'I keep to schedules even when nobody is watching.'],
  ['hon', 0, 'Reconozco mis errores aunque eso me traiga problemas.', 'I admit my mistakes even if it gets me in trouble.'],
  ['est', 1, 'Me altero con facilidad cuando algo sale mal.', 'I get upset easily when something goes wrong.'],
  ['equ', 0, 'Ayudo a un compañero aunque eso me quite tiempo.', 'I help a teammate even if it takes my time.'],
  ['lid', 0, 'Tomo decisiones rápido cuando hace falta.', 'I make quick decisions when needed.'],
  ['dis', 1, 'Dejo las tareas para el último momento.', 'I leave tasks until the last minute.'],
  ['ctl', 0, 'Jamás me he enojado con nadie.', 'I have never been angry with anyone.'],
  ['hon', 0, 'Si encuentro algo que no es mío, lo devuelvo.', 'If I find something that is not mine, I return it.'],
  ['equ', 1, 'Me molesta seguir ideas que no son mías.', 'It bothers me to follow ideas that are not mine.'],
  ['est', 0, 'Cuando me corrigen, lo tomo como aprendizaje.', 'When I am corrected, I take it as a lesson.'],
  ['lid', 1, 'Prefiero que otro asuma la responsabilidad.', 'I prefer someone else to take responsibility.'],
  ['dis', 0, 'Termino lo que empiezo aunque sea aburrido.', 'I finish what I start even if it is boring.'],
  ['hon', 1, 'A veces exagero para quedar bien.', 'Sometimes I exaggerate to look good.'],
  ['equ', 0, 'Escucho las opiniones de otros antes de decidir.', 'I listen to others’ opinions before deciding.'],
  ['est', 1, 'Me cuesta dormir cuando estoy preocupado.', 'I find it hard to sleep when I am worried.'],
  ['ctl', 0, 'Siempre he cumplido todas las normas, sin excepción.', 'I have always followed every rule, without exception.'],
  ['lid', 0, 'Me gusta dar ejemplo a los demás.', 'I like to set an example for others.'],
  ['hon', 0, 'Digo la verdad aunque no me convenga.', 'I tell the truth even when it does not suit me.'],
  ['dis', 0, 'Cuido mi presentación personal todos los días.', 'I take care of my personal appearance every day.']
];

/* =====================================================================
   MÁS PREGUNTAS Y GENERADORES — para que cada examen salga distinto
   ===================================================================== */
BANCO.push(
/* Verbal */
{a:'psV',q:['Faro es a costa como semáforo es a…','Lighthouse is to coast as traffic light is to…'],o:[['Calle','Carro','Luz','Policía'],['Street','Car','Light','Police']],c:0,e:['Ambos orientan en su lugar.','Both guide in their place.']},
{a:'psV',q:['Sinónimo de "lealtad":','Synonym of "loyalty":'],o:[['Fidelidad','Rebeldía','Olvido','Envidia'],['Faithfulness','Rebellion','Oblivion','Envy']],c:0,e:['Lealtad es fidelidad a una causa o persona.','Loyalty is faithfulness to a cause or person.']},
{a:'psV',q:['Antónimo de "escaso":','Antonym of "scarce":'],o:[['Abundante','Poco','Raro','Limitado'],['Abundant','Little','Rare','Limited']],c:0,e:['Escaso es lo que hay poco.','Scarce means there is little of it.']},
{a:'psV',q:['¿Qué palabra no pertenece al grupo?','Which word does not belong?'],o:[['Martillo','Fragata','Corbeta','Lancha'],['Hammer','Frigate','Corvette','Launch']],c:0,e:['Las demás son embarcaciones.','The others are vessels.']},
{a:'psV',q:['Capitán es a buque como piloto es a…','Captain is to ship as pilot is to…'],o:[['Avión','Aeropuerto','Pasajero','Cielo'],['Airplane','Airport','Passenger','Sky']],c:0,e:['Quien conduce cada vehículo.','Who is in command of each vehicle.']},
{a:'psV',q:['Sinónimo de "perseverar":','Synonym of "persevere":'],o:[['Insistir','Abandonar','Dudar','Descansar'],['Persist','Give up','Doubt','Rest']],c:0,e:['Mantenerse firme en un propósito.','To keep firm in a purpose.']},
{a:'psV',q:['Antónimo de "humilde":','Antonym of "humble":'],o:[['Soberbio','Sencillo','Modesto','Pobre'],['Arrogant','Simple','Modest','Poor']],c:0,e:['La soberbia es lo contrario de la humildad.','Arrogance is the opposite of humility.']},
{a:'psV',q:['Semilla es a árbol como huevo es a…','Seed is to tree as egg is to…'],o:[['Ave','Nido','Cáscara','Comida'],['Bird','Nest','Shell','Food']],c:0,e:['Origen y ser que se forma.','Origin and the being that grows from it.']},
/* Lectura */
{a:'lec',q:['¿Qué significa "inminente"?','What does "imminent" mean?'],o:[['Que está por suceder','Que ya pasó','Que es muy famoso','Que es imposible'],['About to happen','Already happened','Very famous','Impossible']],c:0,e:['Algo inminente ocurrirá muy pronto.','Something imminent will happen very soon.']},
{a:'lec',q:['En "Aunque llovía, la tripulación zarpó", la palabra "aunque" indica:','In "Although it was raining, the crew set sail", "although" shows:'],o:[['Concesión u oposición','Causa','Consecuencia','Tiempo'],['Concession or contrast','Cause','Consequence','Time']],c:0,e:['Presenta un obstáculo que no impide la acción.','It presents an obstacle that does not stop the action.']},
{a:'lec',q:['¿Cuál es un hecho y no una opinión?','Which is a fact and not an opinion?'],o:[['Colombia tiene costas en dos océanos','El mar Caribe es el más bonito','Los barcos grandes son mejores','Navegar es aburrido'],['Colombia has coasts on two oceans','The Caribbean is the most beautiful sea','Big ships are better','Sailing is boring']],c:0,e:['Un hecho se puede comprobar.','A fact can be verified.']},
{a:'lec',q:['¿Qué palabra lleva tilde correctamente?','Which word has the accent mark correctly?'],o:[['Marítimo','Maritímo','Máritimo','Maritimó']],c:0,e:['Esdrújula: siempre lleva tilde en la antepenúltima sílaba.','Proparoxytone: always accented on the third-to-last syllable.']},
/* Inglés */
{a:'ing',q:['We ___ to Cartagena next week.','We ___ to Cartagena next week.'],o:[['are going to travel','travelled','travels','have travel']],c:0,e:['Plan futuro: be going to + verbo.','Future plan: be going to + verb.']},
{a:'ing',q:['The ship ___ built in 1968.','The ship ___ built in 1968.'],o:[['was','is','were','has']],c:0,e:['Voz pasiva en pasado: was + participio.','Past passive: was + past participle.']},
{a:'ing',q:['You ___ wear your uniform during the ceremony. It is mandatory.','You ___ wear your uniform during the ceremony. It is mandatory.'],o:[['must','might','could','would']],c:0,e:['"Must" expresa obligación.','"Must" expresses obligation.']},
{a:'ing',q:['The opposite of "early" is:','The opposite of "early" is:'],o:[['late','soon','fast','first']],c:0,e:['early (temprano) / late (tarde).','early / late.']},
{a:'ing',q:['She has been a cadet ___ three years.','She has been a cadet ___ three years.'],o:[['for','since','ago','during']],c:0,e:['"For" + duración.','"For" + duration.']},
{a:'ing',q:['Which word means "barco"?','Which word means "barco"?'],o:[['ship','sheep','shop','chip']],c:0,e:['ship = barco; sheep = oveja.','ship = barco; sheep = oveja (sheep).']},
{a:'ing',q:['I ___ my homework yet.','I ___ my homework yet.'],o:[['haven’t finished','didn’t finished','don’t finish','not finished']],c:0,e:['Presente perfecto negativo con "yet".','Negative present perfect with "yet".']},
{a:'ing',q:['This is the ___ day of the training.','This is the ___ day of the training.'],o:[['hardest','most hard','harder','hard']],c:0,e:['Superlativo: hard → hardest.','Superlative: hard → hardest.']},
/* Cultura naval */
{a:'nav',q:['La parte delantera de un buque se llama:','The front part of a ship is called:'],o:[['Proa','Popa','Babor','Quilla'],['Bow (proa)','Stern (popa)','Port (babor)','Keel (quilla)']],c:0,e:['La popa es la parte trasera.','The stern is the rear.']},
{a:'nav',q:['El lado derecho de un buque, mirando hacia proa, es:','The right side of a ship, facing the bow, is:'],o:[['Estribor','Babor','Popa','Sotavento'],['Starboard (estribor)','Port (babor)','Stern (popa)','Leeward (sotavento)']],c:0,e:['Babor es el lado izquierdo.','Port is the left side.']},
{a:'nav',q:['La "quilla" de un buque es:','The "quilla" (keel) of a ship is:'],o:[['La pieza que va por el fondo, de proa a popa','El mástil más alto','La bandera de popa','El ancla principal'],['The piece running along the bottom from bow to stern','The tallest mast','The stern flag','The main anchor']],c:0,e:['Es la columna vertebral del casco.','It is the backbone of the hull.']},
{a:'nav',q:['¿En qué ciudad está la Escuela de Formación de Infantería de Marina?','In which town is the Marine Corps Training School?'],o:[['Coveñas','Cartagena','Turbo','Tumaco']],c:0,e:['Coveñas, en Sucre.','Coveñas, in Sucre.']},
{a:'nav',q:['Isla del Pacífico colombiano que fue prisión y hoy es parque nacional natural:','Colombian Pacific island that was a prison and is now a national park:'],o:[['Gorgona','Malpelo','San Andrés','Barú']],c:0,e:['La cárcel cerró en 1984 y luego fue parque natural.','The prison closed in 1984 and it later became a national park.']}
);

/* ---------- Generadores extra ---------- */
function _opts(ok, cand, fmt = String) {
  const s = [ok]; cand.forEach(x => { if (!s.includes(x) && s.length < 4) s.push(x); });
  let k = 1; while (s.length < 4) { const v = ok + k * (k % 2 ? 1 : -1) * 3; if (!s.includes(v)) s.push(v); k++; }
  const v = s.sort(() => Math.random() - .5); return { vals: v.map(fmt), c: v.indexOf(ok) };
}
const DIAS = [['lunes','martes','miércoles','jueves','viernes','sábado','domingo'],['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']];
const RUMBOS = [['Norte','Este','Sur','Oeste'],['North','East','South','West']];

function generarLogico() {
  const t = _r(0, 5);
  if (t === 0) { // serie con diferencias crecientes
    const a = _r(1, 9), d = _r(1, 4), inc = _r(1, 3), s = [a]; let step = d;
    for (let i = 0; i < 4; i++) { s.push(s[i] + step); step += inc; }
    const ok = s[4] + step; const o = _opts(ok, [ok + inc, ok - inc, ok + 1]);
    return { a:'raz', gen:true, q:[`Complete la serie: ${s.join(', ')}, ?`,`Complete the series: ${s.join(', ')}, ?`], o:[o.vals], c:o.c, e:[`Las diferencias aumentan de ${inc} en ${inc}.`,`Differences grow by ${inc} each time.`] };
  }
  if (t === 1) { // serie de letras
    const ab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', st = _r(2, 4), a = _r(0, 6), s = [0,1,2,3].map(k => ab[a + k * st]), ok = ab[a + 4 * st];
    const cand = [ab[a + 4 * st + 1], ab[a + 4 * st - 1], ab[a + 3 * st + 1], ab[a + 4 * st + 2], ab[a + 4 * st - 2]];
    const vals = _uniq(ok, cand).sort(() => Math.random() - .5);
    return { a:'raz', gen:true, q:[`Complete la serie: ${s.join(', ')}, ?`,`Complete the series: ${s.join(', ')}, ?`], o:[vals], c:vals.indexOf(ok), e:[`Se avanza de ${st} en ${st} letras.`,`It moves forward ${st} letters each time.`] };
  }
  if (t === 2) { // días
    const h = _r(0, 6), n = _r(9, 40), ok = (h + n) % 7;
    const vals = _uniq(ok, [(ok + 1) % 7, (ok + 6) % 7, (ok + 2) % 7]).sort(() => Math.random() - .5);
    return { a:'raz', gen:true, q:[`Si hoy es ${DIAS[0][h]}, ¿qué día será dentro de ${n} días?`,`If today is ${DIAS[1][h]}, what day will it be in ${n} days?`], o:[vals.map(v => DIAS[0][v]), vals.map(v => DIAS[1][v])], c:vals.indexOf(ok), e:[`${n} = ${Math.floor(n/7)} semanas + ${n%7} días.`,`${n} = ${Math.floor(n/7)} weeks + ${n%7} days.`] };
  }
  if (t === 3) { // reloj
    const hh = _r(1, 11), mm = [0, 30][_r(0, 1)];
    let ang = Math.abs(30 * hh + 0.5 * mm - 6 * mm); if (ang > 180) ang = 360 - ang;
    const o = _opts(ang, [ang + 15, Math.abs(ang - 15), ang + 30, Math.abs(ang - 30)].filter(x => x !== ang), v => v + '°');
    return { a:'raz', gen:true, q:[`¿Qué ángulo menor forman las agujas del reloj a las ${hh}:${mm ? '30' : '00'}?`,`What is the smaller angle between the clock hands at ${hh}:${mm ? '30' : '00'}?`], o:[o.vals], c:o.c, e:['Horario: 30° por hora y 0,5° por minuto. Minutero: 6° por minuto.','Hour hand: 30° per hour and 0.5° per minute. Minute hand: 6° per minute.'] };
  }
  if (t === 4) { // orden de alturas
    const N = [['Ana','Luis','Pedro','Sofía','Juan'],['Ana','Luis','Pedro','Sofía','Juan']][0].sort(() => Math.random() - .5).slice(0, 4);
    const es = `${N[0]} es más rápido que ${N[1]}, ${N[1]} es más rápido que ${N[2]} y ${N[2]} es más rápido que ${N[3]}. ¿Quién es el más lento?`;
    const en = `${N[0]} is faster than ${N[1]}, ${N[1]} is faster than ${N[2]} and ${N[2]} is faster than ${N[3]}. Who is the slowest?`;
    const vals = N.slice().sort(() => Math.random() - .5);
    return { a:'raz', gen:true, q:[es, en], o:[vals], c:vals.indexOf(N[3]), e:[`Orden: ${N.join(' > ')}.`,`Order: ${N.join(' > ')}.`] };
  }
  // multiplicación alterna
  const a = _r(2, 6), m = _r(2, 3), p = _r(1, 5), s = [a]; for (let i = 0; i < 4; i++) s.push(i % 2 ? s[i] + p : s[i] * m);
  const ok = s[4] * m; const o = _opts(ok, [s[4] + p, ok + p, ok - m]);
  return { a:'raz', gen:true, q:[`Complete la serie: ${s.join(', ')}, ?`,`Complete the series: ${s.join(', ')}, ?`], o:[o.vals], c:o.c, e:[`Se alterna multiplicar por ${m} y sumar ${p}.`,`Alternate multiplying by ${m} and adding ${p}.`] };
}

function generarEspacial() {
  const t = _r(0, 2);
  if (t === 0) { // giros
    let d = _r(0, 3); const ini = d, giros = []; const n = _r(2, 4);
    for (let i = 0; i < n; i++) { const g = [90, 180, -90][_r(0, 2)]; giros.push(g); d = (d + g / 90 + 4) % 4; }
    const tx = g => g === 90 ? ['90° a la derecha','90° to the right'] : g === -90 ? ['90° a la izquierda','90° to the left'] : ['media vuelta','a half turn'];
    const vals = [0,1,2,3].sort(() => Math.random() - .5);
    return { a:'psE', gen:true, q:[`Mira al ${RUMBOS[0][ini]}. Gira ${giros.map(g => tx(g)[0]).join(', luego ')}. ¿Hacia dónde mira?`,`You face ${RUMBOS[1][ini]}. Turn ${giros.map(g => tx(g)[1]).join(', then ')}. Where do you face?`], o:[vals.map(v => RUMBOS[0][v]), vals.map(v => RUMBOS[1][v])], c:vals.indexOf(d), e:[`Termina mirando al ${RUMBOS[0][d]}.`,`You end up facing ${RUMBOS[1][d]}.`] };
  }
  if (t === 1) { // cubos
    const n = _r(3, 5), k = _r(0, 2);
    const res = [[(n - 2) * 12, 'exactamente 2 caras pintadas','exactly 2 painted faces','Cubitos de las aristas sin las esquinas: 12 × (n − 2).','Edge cubes without corners: 12 × (n − 2).'],
                 [8, 'exactamente 3 caras pintadas','exactly 3 painted faces','Solo las 8 esquinas tienen 3 caras.','Only the 8 corners have 3 faces.'],
                 [(n - 2) ** 3, 'ninguna cara pintada','no painted faces','El cubo interior: (n − 2)³.','The inner cube: (n − 2)³.']][k];
    const o = _opts(res[0], [res[0] + 4, Math.abs(res[0] - 4), res[0] * 2, res[0] + 8].filter(x => x !== res[0]));
    return { a:'psE', gen:true, q:[`Un cubo de ${n}×${n}×${n} pintado por fuera se corta en ${n**3} cubitos. ¿Cuántos tienen ${res[1]}?`,`A painted ${n}×${n}×${n} cube is cut into ${n**3} small cubes. How many have ${res[2]}?`], o:[o.vals], c:o.c, e:[res[3], res[4]] };
  }
  const f = _r(1, 6), ok = 7 - f; const vals = _uniq(ok, [1,2,3,4,5,6].filter(x => x !== f && x !== ok).sort(() => Math.random() - .5)).sort(() => Math.random() - .5);
  return { a:'psE', gen:true, q:[`En un dado normal, ¿qué número está en la cara opuesta al ${f}?`,`On a standard die, which number is opposite the ${f}?`], o:[vals.map(String)], c:vals.indexOf(ok), e:['Las caras opuestas suman 7.','Opposite faces add up to 7.'] };
}

function generarCiencias() {
  const t = _r(0, 4);
  if (t === 0) { const v = _r(4, 30), tt = _r(2, 9), ok = v * tt; const o = _opts(ok, [v + tt, ok + v, ok - tt]);
    return { a:'cie', gen:true, q:[`Un objeto se mueve a ${v} m/s durante ${tt} s. ¿Qué distancia recorre (en metros)?`,`An object moves at ${v} m/s for ${tt} s. How far does it go (in meters)?`], o:[o.vals], c:o.c, e:[`d = v·t = ${v} × ${tt} = ${ok} m.`,`d = v·t = ${v} × ${tt} = ${ok} m.`] }; }
  if (t === 1) { const i = _r(2, 6), r = _r(2, 12), ok = i * r; const o = _opts(ok, [i + r, ok + r, Math.round(r / i) || 1]);
    return { a:'cie', gen:true, q:[`Por una resistencia de ${r} Ω circulan ${i} A. ¿Qué voltaje tiene (en voltios)?`,`A current of ${i} A flows through a ${r} Ω resistor. What is the voltage (in volts)?`], o:[o.vals], c:o.c, e:[`V = I·R = ${i} × ${r} = ${ok} V.`,`V = I·R = ${i} × ${r} = ${ok} V.`] }; }
  if (t === 2) { const m = _r(2, 40), ok = m * 10; const o = _opts(ok, [m, ok + 10, ok * 10]);
    return { a:'cie', gen:true, q:[`Peso de una masa de ${m} kg tomando g = 10 m/s² (en newtons):`,`Weight of a ${m} kg mass taking g = 10 m/s² (in newtons):`], o:[o.vals], c:o.c, e:[`P = m·g = ${m} × 10 = ${ok} N.`,`W = m·g = ${m} × 10 = ${ok} N.`] }; }
  if (t === 3) { const F = _r(2, 20) * 5, d = _r(2, 9), ok = F * d; const o = _opts(ok, [F + d, ok + F, ok - d]);
    return { a:'cie', gen:true, q:[`Se empuja una caja con ${F} N a lo largo de ${d} m. ¿Qué trabajo se hace (en julios)?`,`A box is pushed with ${F} N over ${d} m. How much work is done (in joules)?`], o:[o.vals], c:o.c, e:[`W = F·d = ${F} × ${d} = ${ok} J.`,`W = F·d = ${F} × ${d} = ${ok} J.`] }; }
  const tt = _r(2, 8), a = _r(2, 6), v = a * tt; const o = _opts(a, [v, tt, a + 1]);
  return { a:'cie', gen:true, q:[`Un vehículo pasa de 0 a ${v} m/s en ${tt} s. ¿Cuál es su aceleración (en m/s²)?`,`A vehicle goes from 0 to ${v} m/s in ${tt} s. What is its acceleration (in m/s²)?`], o:[o.vals], c:o.c, e:[`a = Δv/t = ${v}/${tt} = ${a} m/s².`,`a = Δv/t = ${v}/${tt} = ${a} m/s².`] };
}
Object.assign(GENERADORES, { raz: generarLogico, psE: generarEspacial, cie: generarCiencias });
