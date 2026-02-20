/* Portfolio v4 — JS */

function toggleMenu(){
    document.getElementById('navLinks').classList.toggle('open');
}

// Close menu on nav click
document.querySelectorAll('.nav-links a').forEach(function(a){
    a.addEventListener('click',function(){
        document.getElementById('navLinks').classList.remove('open');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
        e.preventDefault();
        var t=document.querySelector(this.getAttribute('href'));
        if(t){window.scrollTo({top:t.offsetTop-60,behavior:'smooth'});}
    });
});

/* =================== MODAL =================== */
var projects={

miecolo:{
    title:"Plateforme IoT Multi-Connectivité",
    tag:"STAGE · IOT EMBARQUÉ",year:"2026",
    html:'<h3>Contexte</h3><p>Stage de fin d\'études chez <strong>Miecolo</strong> (Bordeaux) — conception et intégration d\'un système embarqué IoT multi-connectivité pour la localisation et la transmission de données terrain en temps réel.</p><h3>Missions réalisées</h3><ul><li>Intégration et configuration d\'un module <strong>GPS Telit</strong> pour la localisation temps réel</li><li>Stabilisation et optimisation de la connexion <strong>4G LTE</strong> pour la transmission fiable des données</li><li>Conception et test d\'un générateur de tension <strong>±20V/24V</strong> pour l\'alimentation des capteurs analogiques</li><li>Développement de la communication <strong>Bluetooth Low Energy</strong> pour l\'interfaçage avec des périphériques externes</li><li>Implémentation du <strong>firmware embarqué</strong> sur microcontrôleur (gestion multi-protocoles)</li><li>Réalisation de <strong>tests fonctionnels</strong> et débogage matériel/logiciel</li></ul><h3>Défis techniques</h3><p>Gestion de la cohabitation de multiples protocoles sans fil (GPS, 4G, BLE) sur une même plateforme, avec les contraintes CEM et de consommation associées.</p><div class="m-highlight"><p><strong>Approche système complète</strong> — du design de l\'alimentation analogique à l\'implémentation firmware, en passant par l\'intégration et la validation de chaque module RF.</p></div><div class="m-tech"><span>C</span><span>GPS Telit</span><span>4G LTE</span><span>Bluetooth</span><span>Power Design</span><span>UART</span><span>SPI</span><span>I2C</span></div>'
},

gazelle:{
    title:"Simulateur Hélicoptère Gazelle SA 342",
    tag:"ALTERNANCE · DÉFENSE",year:"2023",
    html:'<div class="m-gallery"><img src="assets/images/gazelle-simulator.jpg" alt="Simulateur"><img src="assets/images/gazelle-helicopter.jpg" alt="Hélicoptère"><img src="assets/images/gazelle-cockpit.jpg" alt="Cockpit"></div><h3>Contexte</h3><p>Alternance au sein d\'un centre de simulation de l\'<strong>Armée de Terre</strong> — remise en service et modernisation d\'un cockpit réel de Gazelle SA 342 utilisé pour la formation des pilotes d\'hélicoptère.</p><h3>Travaux réalisés</h3><ul><li>Diagnostic et <strong>rétro-ingénierie</strong> des protocoles avioniques d\'origine (<strong>ARINC 429</strong>, <strong>RS-422</strong>)</li><li>Intégration de nouveaux écrans et interfaces numériques</li><li>Développement des modules de communication cockpit ↔ simulateur</li><li>Calibration des commandes de vol (manche cyclique, collectif, pédales)</li><li>Documentation technique exhaustive de chaque modification</li></ul><div class="m-highlight"><p><strong>Contrainte critique :</strong> respect strict des normes de sécurité et des procédures militaires. Chaque modification documentée et validée avant mise en service.</p></div><div class="m-tech"><span>C/C++</span><span>ARINC 429</span><span>RS-422</span><span>Avionique</span><span>Temps Réel</span><span>HMI</span></div>'
},

meteo:{
    title:"Station Météo Connectée",
    tag:"STAGE · IOT",year:"2025",
    html:'<h3>Contexte</h3><p>Stage chez <strong>ACMG</strong> — conception d\'un système complet d\'acquisition de données environnementales pour le monitoring en continu de conditions météorologiques.</p><h3>Réalisations</h3><ul><li>Acquisition multi-capteurs via <strong>I2C et SPI</strong> (température, humidité, pression, qualité de l\'air)</li><li>Traitement et filtrage local des données sur <strong>ESP32</strong></li><li>Transmission des données via <strong>WiFi</strong> et <strong>LoRa</strong> vers un serveur cloud</li><li>Base de données <strong>InfluxDB</strong> et dashboard de visualisation</li><li>Protocole <strong>MQTT</strong> pour la communication publish/subscribe</li></ul><div class="m-tech"><span>ESP32</span><span>I2C</span><span>SPI</span><span>MQTT</span><span>LoRa</span><span>InfluxDB</span><span>Python</span></div>'
},

aqua:{
    title:"Carte Électronique pour Aquaculture",
    tag:"STAGE · PCB",year:"2024",
    html:'<h3>Contexte</h3><p>Stage chez <strong>DREAM Électronique</strong> — conception d\'une carte électronique destinée à un système de monitoring pour l\'aquaculture, fonctionnant en environnement sévère (humidité, salinité, immersion partielle).</p><h3>Réalisations</h3><ul><li>Schématique complète et sélection des composants</li><li>Routage <strong>PCB 4 couches</strong> sous <strong>Altium Designer</strong></li><li>Respect des règles de <strong>compatibilité électromagnétique</strong> (CEM)</li><li>Design for Manufacturing (DFM) et Design for Test (DFT)</li><li>Validation fonctionnelle et tests de robustesse</li></ul><div class="m-highlight"><p><strong>Contrainte :</strong> protection <strong>IP67</strong> et conformité aux normes de sécurité pour environnement aquatique. Tolérance aux variations de température et d\'humidité extrêmes.</p></div><div class="m-tech"><span>Altium Designer</span><span>PCB 4 couches</span><span>CEM</span><span>Power Supply</span><span>STM32</span><span>DFM</span></div>'
},

nanomotor:{
    title:"Contrôle Moteur Nanométrique",
    tag:"STAGE · TEMPS RÉEL",year:"2022",
    html:'<h3>Contexte</h3><p>Stage chez <strong>Industrial Metrology Solutions</strong> — développement du logiciel de contrôle temps réel pour des machines de métrologie de haute précision (<strong>ZeroTouch®</strong>). Positionnement nanométrique par servo-commande EtherCAT.</p><h3>Travaux réalisés</h3><ul><li>Boucle de contrôle temps réel <strong>&lt;1ms</strong> avec régulation <strong>PID</strong></li><li>Architecture C++ <strong>multi-threadée</strong> (séparation couche RT / couche applicative)</li><li>Interface opérateur industrielle avec <strong>Qt</strong></li><li>Communication <strong>EtherCAT</strong> pour le pilotage des moteurs</li><li>Gestion des alarmes, sécurités et modes dégradés</li></ul><div class="m-highlight"><p><strong>Défi :</strong> garantie de temps de réponse déterministe. Thread priority, memory locking, communication inter-threads par queues lock-free.</p></div><div class="m-tech"><span>C++17</span><span>Temps Réel</span><span>Multi-threading</span><span>Qt</span><span>EtherCAT</span><span>PID</span><span>Lock-free</span></div>'
},

ecotrack:{
    title:"EcoTrack-Foot",
    tag:"PFE · VISION / IA EMBARQUÉE",year:"2025",
    html:'<h3>Contexte & Objectifs</h3><p>Solution destinée aux <strong>clubs de football amateurs</strong> pour automatiser l\'analyse vidéo à moindre coût (&lt;150 €). Le système doit tourner en temps réel (≥25 FPS) sur <strong>Raspberry Pi 5</strong> sans GPU dédié.</p><h3>Architecture technique</h3><ul><li><strong>Pipeline asynchrone multiprocessing</strong> : Reader → Queue → Detector → Tracker → Export</li><li>Modèle <strong>YOLOv8 Nano</strong> quantifié <strong>INT8</strong> (TensorFlow Lite) — inférence &lt;30ms</li><li>Filtre de <strong>Kalman linéaire</strong> pour le tracking continu (gestion des occlusions &lt;1.5s)</li><li>Export CSV des trajectoires + vidéo avec overlay H.264</li></ul><h3>Résultats</h3><ul><li>≥25 FPS en temps réel sur vidéo 1080p</li><li>Recall &gt;85% sur la détection du ballon</li><li>Latence bout-en-bout &lt;200ms</li><li>Budget mémoire &lt;3.5 GB, température &lt;75°C</li></ul><div class="m-highlight"><p><strong>Défi technique :</strong> optimisation agressive du modèle (pruning, quantification INT8) et gestion thermique sur hardware contraint, sans ventilateur actif.</p></div><div class="m-tech"><span>Python</span><span>YOLOv8</span><span>OpenCV</span><span>TensorFlow Lite</span><span>Kalman</span><span>Raspberry Pi 5</span><span>Multiprocessing</span></div>'
},

vga:{
    title:"Contrôleur VGA sur FPGA",
    tag:"ACADÉMIQUE · FPGA",year:"2024",
    html:'<h3>Objectifs</h3><p>Conception <strong>from scratch</strong> en VHDL d\'un contrôleur d\'affichage vidéo 640×480@60Hz sans IP propriétaire. Validation par simulation exhaustive puis déploiement sur carte <strong>Basys3</strong> (Artix-7).</p><h3>Architecture RTL</h3><ul><li><strong>Clock Divider</strong> : 100 MHz → 25.175 MHz (pixel clock)</li><li><strong>VGA_SYNC</strong> : compteurs horizontaux/verticaux, génération HSYNC/VSYNC</li><li><strong>VGA_DISPLAY</strong> : logique de couleur RGB conditionnelle</li><li>Génération de patterns de test (mires, dégradés, split-screen)</li></ul><div class="m-highlight"><p><strong>Méthodologie :</strong> testbench VHDL pour chaque module, vérification des timings VGA par simulation avant synthèse. Zéro IP propriétaire Xilinx utilisée.</p></div><div class="m-tech"><span>VHDL</span><span>Vivado</span><span>Basys3</span><span>Artix-7</span><span>ModelSim</span><span>Testbench</span></div>'
},

fir:{
    title:"Filtre Numérique FIR",
    tag:"ACADÉMIQUE · DSP",year:"2024",
    html:'<h3>Objectifs</h3><p>Implémentation et optimisation d\'un filtre passe-bas FIR sur microcontrôleur <strong>ARM Cortex-M4</strong> à ressources limitées.</p><h3>Approche</h3><ul><li>Design du filtre (ordre, fréquence de coupure) avec <strong>MATLAB</strong></li><li>Quantification en <strong>virgule fixe Q15</strong> avec analyse de l\'erreur de troncature</li><li>Exploitation des instructions <strong>DSP SIMD</strong> du Cortex-M4 (MAC, multiply-accumulate)</li><li><strong>Buffer circulaire</strong> pour éviter les copies mémoire coûteuses</li><li>Validation par analyse spectrale (FFT) du signal filtré</li></ul><div class="m-tech"><span>C</span><span>CMSIS-DSP</span><span>ARM Cortex-M4</span><span>MATLAB</span><span>Fixed-Point Q15</span></div>'
},

gpio:{
    title:"Driver Linux GPIO",
    tag:"ACADÉMIQUE · LINUX KERNEL",year:"2024",
    html:'<h3>Description</h3><p>Écriture d\'un <strong>module noyau Linux</strong> (Character Device Driver) pour la gestion performante des GPIO sur système embarqué.</p><h3>Implémentation</h3><ul><li>File operations : <strong>open, read, write, ioctl, release</strong></li><li>Gestion des <strong>interruptions matérielles</strong> GPIO (IRQ handler)</li><li>Interface <strong>sysfs</strong> pour configuration depuis l\'espace utilisateur</li><li>Gestion propre des ressources : <strong>probe/remove</strong>, compteurs de références</li><li>Respect des conventions du kernel (coding style, documentation)</li></ul><div class="m-tech"><span>C</span><span>Linux Kernel</span><span>Character Device</span><span>GPIO</span><span>IRQ</span><span>sysfs</span></div>'
},

rtos:{
    title:"Système d\'Acquisition RTOS",
    tag:"ACADÉMIQUE · STM32",year:"2025",
    html:'<h3>Description</h3><p>Firmware multitâche sur <strong>STM32</strong> avec ordonnancement <strong>FreeRTOS</strong> pour l\'acquisition et le traitement de données capteurs en temps réel.</p><h3>Architecture</h3><ul><li><strong>Tâche haute priorité :</strong> acquisition ADC via DMA</li><li><strong>Tâche moyenne priorité :</strong> filtrage numérique et traitement</li><li><strong>Tâche basse priorité :</strong> communication UART vers PC</li><li>Communication inter-tâches par <strong>queues</strong></li><li>Protection des ressources partagées par <strong>mutex</strong></li><li><strong>Watchdog</strong> et gestion d\'erreurs</li></ul><div class="m-tech"><span>STM32</span><span>FreeRTOS</span><span>C</span><span>HAL</span><span>ADC/DMA</span><span>UART</span><span>Watchdog</span></div>'
},

yocto:{
    title:"Distribution Linux Embarqué (Yocto)",
    tag:"ACADÉMIQUE · LINUX",year:"2024",
    html:'<h3>Description</h3><p>Construction d\'une <strong>distribution Linux sur-mesure</strong> avec Yocto Project, optimisée pour cible embarquée ARM.</p><h3>Réalisations</h3><ul><li>Configuration du <strong>BSP</strong> (Board Support Package) pour cible ARM</li><li>Création de <strong>layers</strong> et recettes <strong>BitBake</strong> personnalisées</li><li>Intégration d\'applications métier dans l\'image</li><li>Optimisation de la taille : image rootfs de <strong>8.2 MB</strong></li><li>Cross-compilation et déploiement sur cible</li></ul><div class="m-tech"><span>Yocto</span><span>BitBake</span><span>Linux</span><span>Shell</span><span>Cross-compilation</span><span>BSP ARM</span></div>'
},

linefollower:{
    title:"Robot Suiveur de Ligne (ROS/Gazebo)",
    tag:"ACADÉMIQUE · ROBOTIQUE",year:"2024",
    html:'<h3>Contexte</h3><p>Modélisation d\'un robot à <strong>entraînement différentiel</strong> sous <strong>Fusion 360</strong> et simulation complète de son comportement de suivi de ligne dans l\'environnement <strong>ROS1 / Gazebo</strong>.</p><h3>Caractéristiques & Implémentation</h3><ul><li><strong>Modélisation CAD :</strong> robot différentiel conçu sous Fusion 360, exporté en URDF pour intégration dans Gazebo</li><li><strong>Perception :</strong> caméra embarquée simulée pour la détection de la ligne au sol par traitement d\'image</li><li><strong>Contrôle :</strong> régulateur <strong>PID</strong> calibré pour un suivi stable et réactif de la trajectoire</li><li><strong>Simulation :</strong> environnement Gazebo avec piste personnalisée et conditions réalistes de frottement</li><li><strong>ROS :</strong> architecture nodale (topics /cmd_vel, /camera/image_raw) avec communication publisher/subscriber</li></ul><div class="m-highlight"><p><strong>Compétence clé :</strong> maîtrise de la chaîne complète CAD → simulation → contrôle dans l\'écosystème ROS, applicable directement au prototypage rapide de robots autonomes.</p></div><div class="m-tech"><span>ROS1</span><span>Gazebo</span><span>Fusion 360</span><span>Python</span><span>PID</span><span>URDF</span><span>OpenCV</span></div>'
},

omnibot:{
    title:"Robot Omnidirectionnel (Omni Bot)",
    tag:"ACADÉMIQUE · ROBOTIQUE",year:"2024",
    html:'<h3>Contexte</h3><p>Conception et réalisation d\'un <strong>robot à 4 roues omnidirectionnelles</strong> permettant un mouvement holonomique — déplacement dans toutes les directions sans changement d\'orientation.</p><h3>Caractéristiques & Implémentation</h3><ul><li><strong>Système de locomotion :</strong> 4 roues Mecanum en configuration X, offrant un mouvement holonomique (avant, arrière, latéral, diagonal)</li><li><strong>Contrôle matériel :</strong> <strong>Arduino</strong> comme microcontrôleur central, avec <strong>drivers moteur Cytron</strong> pour le contrôle en courant et PWM des 4 moteurs DC</li><li><strong>Alimentation :</strong> batterie <strong>LiPo 3S</strong> fournissant tension et courant suffisants pour les 4 moteurs simultanément</li><li><strong>Interface utilisateur :</strong> pilotage via <strong>manette PS3</strong>, avec mapping joystick → vecteurs de vitesse pour une téléopération intuitive</li><li><strong>Algorithmes :</strong> transformations cinématiques inverses pour convertir les entrées joystick en vitesses individuelles par roue, gestion de l\'accélération/décélération douce pour minimiser le glissement</li></ul><div class="m-highlight"><p><strong>Compétence clé :</strong> compréhension approfondie de la cinématique holonomique et du contrôle moteur PWM — applicable aux plateformes mobiles industrielles et à la robotique de service.</p></div><div class="m-tech"><span>Arduino</span><span>Cytron Motor Drivers</span><span>PWM</span><span>LiPo 3S</span><span>Cinématique inverse</span><span>PS3 Controller</span><span>C/C++</span></div>'
},

ugv:{
    title:"Véhicule Terrestre Autonome Intelligent (UGV)",
    tag:"ACADÉMIQUE · ROBOTIQUE AUTONOME",year:"2024",
    html:'<h3>Contexte</h3><p>Conception d\'un <strong>robot terrestre autonome</strong> capable de naviguer en intérieur, cartographier son environnement et éviter les obstacles. La plateforme combine calcul embarqué, perception de profondeur et contrôle moteur.</p><h3>Caractéristiques & Implémentation</h3><ul><li><strong>Calcul & Contrôle :</strong><ul><li><strong>Raspberry Pi</strong> comme unité de traitement principale exécutant ROS pour la navigation et la perception</li><li><strong>Arduino + L293D</strong> pour le contrôle des moteurs DC en entraînement différentiel</li></ul></li><li><strong>Perception :</strong><ul><li>Caméra <strong>Intel RealSense</strong> pour la perception de profondeur, la cartographie d\'environnement et l\'évitement d\'obstacles</li><li><strong>Moteur pas-à-pas</strong> pour articuler la caméra et permettre un champ de vision ajustable</li></ul></li><li><strong>Navigation :</strong> algorithme d\'évitement d\'obstacles réactif basé sur les données de profondeur en temps réel</li><li><strong>Architecture ROS :</strong> nœuds séparés pour perception, décision et actionnement — communication par topics</li></ul><div class="m-highlight"><p><strong>Compétence clé :</strong> intégration multi-systèmes (vision, navigation, actionnement) sur une plateforme embarquée contrainte — expérience directement transférable aux véhicules autonomes et à la robotique industrielle.</p></div><div class="m-tech"><span>Raspberry Pi</span><span>ROS</span><span>Arduino</span><span>Intel RealSense</span><span>L293D</span><span>Python</span><span>Stepper Motor</span><span>Navigation autonome</span></div>'
}

};

function openModal(id){
    var p=projects[id];
    if(!p)return;
    document.getElementById('modalBody').innerHTML=
        '<h2>'+p.title+'</h2>'+
        '<div class="m-meta"><span class="m-tag">'+p.tag+'</span><span class="m-year">'+p.year+'</span></div>'+
        p.html;
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow='hidden';
}

function closeModal(e){
    if(e&&e.target&&e.target!==document.getElementById('modalOverlay'))return;
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow='';
}

document.addEventListener('keydown',function(e){
    if(e.key==='Escape')closeModal();
});
