/**
 * Junior MBA Portfolio - Main JavaScript
 * Handles navigation, modals, and animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initModalEvents();
    lucide.createIcons();
});

/* --------------------------------------------------------------------------
   Navigation
   -------------------------------------------------------------------------- */
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
}

/* --------------------------------------------------------------------------
   Scroll Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.project-card, .skill-category').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
        observer.observe(el);
    });
    
    const style = document.createElement('style');
    style.textContent = `.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
}

/* --------------------------------------------------------------------------
   Modal System
   -------------------------------------------------------------------------- */
const projectsData = {
    miecolo: {
        title: "Système IoT Multi-Connectivité — Miecolo",
        category: "STAGE · IOT EMBARQUÉ",
        year: "2026",
        content: `
            <div class="modal-section">
                <p class="modal-section-title">Architecture Système</p>
                <div class="architecture-diagram">
                    <p style="text-align: center; font-weight: 600; margin-bottom: 1rem; color: var(--color-text-primary);">PLATEFORME IOT MULTI-CONNECTIVITÉ</p>
                    <div class="pipeline">
                        <div class="pipeline-block input">Capteurs<small>Analog/I2C</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block process">MCU<small>Embarqué</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block cpu">GPS<small>Telit</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block queue">4G LTE<small>Modem</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block output">Cloud<small>Données</small></div>
                    </div>
                </div>
            </div>
            
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Contexte & Mission</h3>
                    <p>Stage de fin d'études chez Miecolo — conception et intégration d'un système embarqué IoT multi-connectivité pour la localisation et la transmission de données en temps réel.</p>
                    <ul>
                        <li>Intégration et configuration d'un module GPS Telit pour la localisation temps réel</li>
                        <li>Stabilisation et optimisation de la connexion 4G pour la transmission fiable des données</li>
                        <li>Conception et test d'un générateur de tension ±20V/24V pour l'alimentation des capteurs</li>
                        <li>Développement de la communication Bluetooth pour l'interfaçage avec des périphériques externes</li>
                        <li>Participation à l'architecture et à l'implémentation logicielle embarquée sur microcontrôleur</li>
                        <li>Réalisation de tests fonctionnels et débogage des modules électroniques et logiciels</li>
                    </ul>
                    
                    <h3>Défis Techniques</h3>
                    <p>Gestion de la cohabitation de multiples protocoles sans fil (GPS, 4G, Bluetooth) sur une même plateforme, avec les contraintes CEM et d'alimentation associées. Conception d'un étage de puissance ±20V/24V fiable pour des capteurs industriels.</p>
                    
                    <div class="highlight-box">
                        <p><strong>Point clé :</strong> Approche système complète — du design de l'alimentation analogique à l'implémentation logicielle embarquée, en passant par l'intégration et le test de chaque module de connectivité.</p>
                    </div>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">C</span>
                            <span class="tech-tag">GPS (Telit)</span>
                            <span class="tech-tag">4G LTE</span>
                            <span class="tech-tag">Bluetooth</span>
                            <span class="tech-tag">Conception d'alimentation</span>
                            <span class="tech-tag">Microcontrôleur</span>
                            <span class="tech-tag">UART / SPI / I2C</span>
                            <span class="tech-tag">Test & Debug</span>
                        </div>
                    </div>
                    
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Livrables</h4>
                        <div class="deliverable-list">
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Module GPS intégré et fonctionnel</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Liaison 4G stabilisée</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Générateur ±20V/24V validé</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Communication Bluetooth opérationnelle</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Firmware embarqué</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    ecotrack: {
        title: "EcoTrack-Foot",
        category: "VISION / IA EMBARQUÉE",
        year: "2025",
        content: `
            <div class="modal-section">
                <p class="modal-section-title">Architecture Technique</p>
                <div class="architecture-diagram">
                    <p style="text-align: center; font-weight: 600; margin-bottom: 1rem; color: var(--color-text-primary);">ARCHITECTURE PIPELINE ASYNCHRONE</p>
                    <div class="pipeline">
                        <div class="pipeline-block input">Vidéo<small>1080p</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block process">Reader<small>Thread 1</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block queue">Queue<small>max 5</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block cpu">Detector<small>YOLOv8 INT8</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block cpu">Tracker<small>Kalman</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block queue">Queue<small>max 3</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block output">Export<small>CSV + H.264</small></div>
                    </div>
                </div>
            </div>
            
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-value green">≥25</div>
                    <div class="stat-label">FPS Temps Réel</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value blue">>85%</div>
                    <div class="stat-label">Recall</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value orange"><200ms</div>
                    <div class="stat-label">Latence</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value red"><150€</div>
                    <div class="stat-label">Coût Total</div>
                </div>
            </div>
            
            <div class="terminal">
                <div class="terminal-header">
                    <div class="terminal-dots"><span></span><span></span><span></span></div>
                    <span class="terminal-title">bash</span>
                </div>
                <div class="terminal-body">
                    <span class="prompt">user@linux:~$</span> <span class="command">python run_pipeline.py --input match.mp4 --monitor</span><br>
                    <span class="info">[INFO] Loading YOLOv8n INT8 model...</span><br>
                    <span class="info">[INFO] Model loaded in 1.2s (4MB RAM)</span><br>
                    <span class="info">[INFO] Starting pipeline on Raspberry Pi 5</span><br>
                    <span class="info">[INFO] FPS: 27.3 | Temp: 62°C | Queue: 2/5</span><br>
                    <span class="success">[INFO] Ball detected at (0.45, 0.32) conf=0.91</span><br>
                    <span class="track">[TRACK] Kalman update: velocity=(12.3, -5.1) px/f</span><br>
                    <span class="info">[INFO] Frame 1800/54000 processed (3.3%)</span>
                </div>
            </div>
            
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Contexte & Objectifs</h3>
                    <p>Solution destinée aux clubs de football amateurs pour automatiser l'analyse vidéo. Budget contraint (<150€) imposant une architecture optimisée sur Raspberry Pi 5.</p>
                    <ul>
                        <li>Traitement temps réel ≥25 FPS sur vidéo 1080p</li>
                        <li>Détection robuste du ballon (Recall >85%)</li>
                        <li>Tracking continu avec gestion des occlusions (<1.5s)</li>
                        <li>Autonomie pour un match complet (2×45 min)</li>
                    </ul>
                    
                    <h3>Architecture & Défis</h3>
                    <p>Pipeline asynchrone multiprocessing : Reader Thread → Queue → Detector/Tracker Process → Exporter Thread. Modèle YOLOv8 Nano quantifié INT8 (TFLite) pour l'inférence <30ms. Filtre de Kalman linéaire (état 4D : x, y, ẋ, ẏ) pour la prédiction en cas d'occlusion.</p>
                    
                    <div class="highlight-box">
                        <p><strong>Défi technique :</strong> Optimisation du budget mémoire (3.5GB) et gestion thermique (<75°C) sur Pi 5. Implémentation d'une stratégie de mode dégradé (skip frames, réduction résolution) et de reset tracker intelligent (divergence >200px, vélocité impossible).</p>
                    </div>
                    
                    <h3>Résultats</h3>
                    <p>Système validé sur dataset de 1500 images et 35 séquences vidéo. Métriques MOTA >75%, latence bout-en-bout <200ms. Prêt pour déploiement terrain.</p>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">OpenCV</span>
                            <span class="tech-tag">TensorFlow Lite</span>
                            <span class="tech-tag">NumPy</span>
                            <span class="tech-tag">YOLOv8</span>
                            <span class="tech-tag">Filtre de Kalman</span>
                            <span class="tech-tag">Raspberry Pi 5</span>
                            <span class="tech-tag">Multiprocessing</span>
                        </div>
                    </div>
                    
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Livrables</h4>
                        <div class="deliverable-list">
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Modèle YOLOv8n quantifié INT8</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Pipeline Python multiprocess</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Export CSV + vidéo overlay</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Documentation technique complète</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    gazelle: {
        title: "Simulateur Hélicoptère Gazelle",
        category: "SIMULATION / DÉFENSE",
        year: "2023",
        content: `
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Contexte & Mission</h3>
                    <p>Remise en service et modernisation d'un cockpit réel de Gazelle SA 342 pour l'entraînement des pilotes de l'Armée de Terre. Projet réalisé en collaboration avec un centre de simulation militaire.</p>
                    <ul>
                        <li>Diagnostic et réparation des systèmes avioniques d'origine</li>
                        <li>Intégration de nouveaux écrans et interfaces</li>
                        <li>Développement des interfaces de communication</li>
                        <li>Calibration des commandes de vol</li>
                    </ul>
                    
                    <h3>Défis Techniques</h3>
                    <p>Rétro-ingénierie des protocoles de communication du cockpit d'origine (ARINC 429, RS-422). Adaptation des signaux analogiques vers interfaces numériques modernes tout en conservant le réalisme des sensations de pilotage.</p>
                    
                    <div class="highlight-box">
                        <p><strong>Contrainte critique :</strong> Respect strict des normes de sécurité et des procédures militaires. Documentation exhaustive de chaque modification pour certification.</p>
                    </div>
                    
                    <h3>Résultats</h3>
                    <p>Simulateur opérationnel et certifié pour l'entraînement. Réduction significative des coûts de formation par rapport aux heures de vol réelles.</p>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">ARINC 429</span>
                            <span class="tech-tag">RS-422</span>
                            <span class="tech-tag">Avionique</span>
                            <span class="tech-tag">C/C++</span>
                            <span class="tech-tag">Systèmes temps réel</span>
                            <span class="tech-tag">Interface HMI</span>
                        </div>
                    </div>
                    
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Livrables</h4>
                        <div class="deliverable-list">
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Cockpit fonctionnel</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Documentation technique</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Certification formation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    vga: {
        title: "Contrôleur VGA sur FPGA",
        category: "FPGA / VHDL",
        year: "2024",
        content: `
            <div class="modal-section">
                <p class="modal-section-title">Architecture RTL</p>
                <div class="architecture-diagram">
                    <div class="pipeline">
                        <div class="pipeline-block process">Clock Divider<small>100MHz → 25MHz</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block cpu">VGA_SYNC<small>H/V Counters</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block cpu">VGA_DISPLAY<small>RGB Logic</small></div>
                        <span class="pipeline-arrow">→</span>
                        <div class="pipeline-block output">VGA Port<small>RGB + Sync</small></div>
                    </div>
                </div>
            </div>
            
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-value blue">640×480</div>
                    <div class="stat-label">Résolution</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value green">60 Hz</div>
                    <div class="stat-label">Refresh Rate</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value orange">12-bit</div>
                    <div class="stat-label">RGB Color</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value red">0 IP</div>
                    <div class="stat-label">Propriétaire</div>
                </div>
            </div>
            
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Objectifs</h3>
                    <p>Conception from scratch d'un contrôleur VGA en VHDL sans utiliser d'IP propriétaire Xilinx. Projet pédagogique pour maîtriser les timings vidéo et l'architecture RTL modulaire.</p>
                    <ul>
                        <li>Génération des signaux HSYNC et VSYNC conformes au standard VGA</li>
                        <li>Compteurs de pixels et de lignes synchronisés</li>
                        <li>Génération de patterns de test (mires, dégradés)</li>
                        <li>Architecture modulaire et réutilisable</li>
                    </ul>
                    
                    <h3>Architecture</h3>
                    <p>Séparation claire entre le module de synchronisation (VGA_SYNC) et le module d'affichage (VGA_DISPLAY). Le Top Controller orchestre les deux modules et gère la division d'horloge de 100MHz à 25.175MHz.</p>
                    
                    <div class="highlight-box">
                        <p><strong>Point clé :</strong> Respect strict des timings VGA (front porch, sync pulse, back porch) validé par simulation exhaustive avant implémentation sur carte Basys3.</p>
                    </div>
                    
                    <h3>Validation</h3>
                    <p>Testbenches complets avec vérification automatique des timings. Simulation fonctionnelle puis implémentation et test sur écran réel.</p>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">VHDL</span>
                            <span class="tech-tag">Vivado</span>
                            <span class="tech-tag">Basys3</span>
                            <span class="tech-tag">Artix-7</span>
                            <span class="tech-tag">ModelSim</span>
                            <span class="tech-tag">Testbench</span>
                        </div>
                    </div>
                    
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Livrables</h4>
                        <div class="deliverable-list">
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Code VHDL modulaire</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Testbenches automatisés</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Bitstream Basys3</span>
                            </div>
                            <div class="deliverable-item">
                                <i data-lucide="check" class="icon"></i>
                                <span>Rapport de synthèse</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    nanomotor: {
        title: "Contrôle Moteur Nanométrique",
        category: "INDUSTRIE / TEMPS RÉEL",
        year: "2022",
        content: `
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Contexte Industriel</h3>
                    <p>Développement du logiciel de contrôle temps réel pour des machines de métrologie industrielle de haute précision (positionnement nanométrique). Environnement industriel exigeant avec contraintes de temps de cycle strictes.</p>
                    <ul>
                        <li>Boucle de contrôle temps réel < 1ms</li>
                        <li>Précision de positionnement nanométrique</li>
                        <li>Interface opérateur industrielle</li>
                        <li>Gestion des alarmes et sécurités</li>
                    </ul>
                    
                    <h3>Architecture Logicielle</h3>
                    <p>Application C++ multi-threadée avec séparation stricte entre la couche temps réel (contrôle moteur) et la couche applicative (IHM, logs). Communication inter-threads par queues lock-free.</p>
                    
                    <div class="highlight-box">
                        <p><strong>Contrainte critique :</strong> Garantie de temps de réponse déterministe. Utilisation de techniques de programmation temps réel (thread priority, memory locking, cache optimization).</p>
                    </div>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">C++17</span>
                            <span class="tech-tag">Temps Réel</span>
                            <span class="tech-tag">Multi-threading</span>
                            <span class="tech-tag">Qt</span>
                            <span class="tech-tag">EtherCAT</span>
                            <span class="tech-tag">PID Control</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    gpio: {
        title: "Driver Linux GPIO",
        category: "LINUX KERNEL",
        year: "2024",
        content: `
            <div class="terminal">
                <div class="terminal-header">
                    <div class="terminal-dots"><span></span><span></span><span></span></div>
                    <span class="terminal-title">bash</span>
                </div>
                <div class="terminal-body">
                    <span class="prompt">root@embedded:~#</span> <span class="command">insmod gpio_driver.ko</span><br>
                    <span class="success">[GPIO] Module loaded successfully</span><br>
                    <span class="info">[GPIO] Character device registered: /dev/gpio_ctrl</span><br>
                    <span class="prompt">root@embedded:~#</span> <span class="command">echo "1" > /dev/gpio_ctrl</span><br>
                    <span class="success">[GPIO] Pin 17 set HIGH</span><br>
                    <span class="prompt">root@embedded:~#</span> <span class="command">cat /dev/gpio_ctrl</span><br>
                    <span class="info">GPIO Status: Pin 17=HIGH, Pin 18=LOW</span>
                </div>
            </div>
            
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Objectifs</h3>
                    <p>Écriture d'un module noyau Linux (Character Device Driver) pour la gestion performante des GPIO. Projet de cours pour comprendre l'architecture des drivers Linux et l'interface avec le hardware.</p>
                    <ul>
                        <li>Implémentation des file operations (open, read, write, ioctl)</li>
                        <li>Gestion des interruptions GPIO</li>
                        <li>Interface sysfs pour configuration</li>
                        <li>Gestion propre des ressources (probe/remove)</li>
                    </ul>
                    
                    <h3>Architecture</h3>
                    <p>Driver Character Device avec support des opérations asynchrones. Utilisation du framework GPIO du noyau Linux pour la portabilité entre plateformes (Raspberry Pi, BeagleBone).</p>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">C</span>
                            <span class="tech-tag">Linux Kernel</span>
                            <span class="tech-tag">Device Drivers</span>
                            <span class="tech-tag">GPIO Subsystem</span>
                            <span class="tech-tag">Interrupts</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    rtos: {
        title: "Système Acquisition RTOS",
        category: "STM32 / FREERTOS",
        year: "2025",
        content: `
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Description</h3>
                    <p>Conception d'un firmware multitâche sur STM32 avec FreeRTOS pour l'acquisition et le traitement de données capteurs en temps réel. Architecture producteur-consommateur avec gestion des priorités.</p>
                    <ul>
                        <li>Tâche haute priorité : acquisition ADC</li>
                        <li>Tâche moyenne priorité : traitement/filtrage</li>
                        <li>Tâche basse priorité : communication UART</li>
                        <li>Watchdog et gestion d'erreurs</li>
                    </ul>
                    
                    <h3>Implémentation</h3>
                    <p>Utilisation des primitives FreeRTOS : queues pour la communication inter-tâches, mutex pour les ressources partagées, semaphores pour la synchronisation. Configuration optimisée du scheduler pour minimiser la latence.</p>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">STM32</span>
                            <span class="tech-tag">FreeRTOS</span>
                            <span class="tech-tag">C</span>
                            <span class="tech-tag">HAL</span>
                            <span class="tech-tag">ADC/DMA</span>
                            <span class="tech-tag">UART</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    fir: {
        title: "Filtre Numérique FIR",
        category: "DSP / SIGNAL",
        year: "2024",
        content: `
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Objectifs</h3>
                    <p>Implémentation et optimisation d'un filtre FIR passe-bas sur microcontrôleur à ressources limitées. Comparaison des performances entre implémentation naïve et optimisée.</p>
                    <ul>
                        <li>Design du filtre avec MATLAB/Python</li>
                        <li>Implémentation en virgule fixe (Q15)</li>
                        <li>Optimisation SIMD/DSP instructions</li>
                        <li>Validation par analyse spectrale</li>
                    </ul>
                    
                    <h3>Optimisations</h3>
                    <p>Utilisation des instructions DSP du Cortex-M4 (MAC, SIMD). Buffer circulaire pour éviter les copies mémoire. Quantification des coefficients en Q15 avec analyse de l'erreur de quantification.</p>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">C</span>
                            <span class="tech-tag">CMSIS-DSP</span>
                            <span class="tech-tag">ARM Cortex-M4</span>
                            <span class="tech-tag">MATLAB</span>
                            <span class="tech-tag">Fixed-Point</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    yocto: {
        title: "Linux From Scratch (Yocto)",
        category: "LINUX SYSTÈME",
        year: "2024",
        content: `
            <div class="terminal">
                <div class="terminal-header">
                    <div class="terminal-dots"><span></span><span></span><span></span></div>
                    <span class="terminal-title">bash</span>
                </div>
                <div class="terminal-body">
                    <span class="prompt">dev@build:~/yocto$</span> <span class="command">bitbake core-image-minimal</span><br>
                    <span class="info">Loading cache: 100%</span><br>
                    <span class="info">Parsing recipes: 100%</span><br>
                    <span class="success">Build completed successfully</span><br>
                    <span class="info">Image size: 8.2 MB (rootfs)</span>
                </div>
            </div>
            
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Description</h3>
                    <p>Construction d'une distribution Linux sur-mesure avec Yocto Project, optimisée pour l'embarqué. Création de layers custom, recettes, et configuration BSP.</p>
                    <ul>
                        <li>Configuration du BSP pour cible ARM</li>
                        <li>Création de layers et recettes custom</li>
                        <li>Optimisation de la taille de l'image</li>
                        <li>Intégration d'applications métier</li>
                    </ul>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">Yocto</span>
                            <span class="tech-tag">BitBake</span>
                            <span class="tech-tag">Linux</span>
                            <span class="tech-tag">Shell</span>
                            <span class="tech-tag">Cross-compilation</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    meteo: {
        title: "Station Météo Connectée",
        category: "PROJET ACMG",
        year: "2025",
        content: `
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Description</h3>
                    <p>Développement complet d'un système d'acquisition de données environnementales : température, humidité, pression, qualité de l'air. Transmission des données vers serveur cloud.</p>
                    <ul>
                        <li>Acquisition multi-capteurs (I2C, SPI)</li>
                        <li>Traitement et filtrage local</li>
                        <li>Transmission WiFi/LoRa</li>
                        <li>Dashboard de visualisation</li>
                    </ul>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">ESP32</span>
                            <span class="tech-tag">Capteurs I2C</span>
                            <span class="tech-tag">MQTT</span>
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">InfluxDB</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    aqua: {
        title: "Carte Électronique Aquaculture",
        category: "PROJET DREAM",
        year: "2024",
        content: `
            <div class="modal-grid">
                <div class="modal-main">
                    <h3>Description</h3>
                    <p>Conception, routage et validation d'un PCB multicouche pour environnement sévère (humidité, salinité). Carte de contrôle pour système d'aquaculture automatisé.</p>
                    <ul>
                        <li>Schématique et sélection composants</li>
                        <li>Routage PCB 4 couches</li>
                        <li>Design for Manufacturing (DFM)</li>
                        <li>Tests et validation</li>
                    </ul>
                    
                    <div class="highlight-box">
                        <p><strong>Contrainte :</strong> Protection IP67 et conformité aux normes de sécurité pour environnement aquatique.</p>
                    </div>
                </div>
                
                <div class="modal-sidebar">
                    <div class="sidebar-section">
                        <h4 class="sidebar-title">Technologies</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">Altium Designer</span>
                            <span class="tech-tag">PCB Design</span>
                            <span class="tech-tag">EMC</span>
                            <span class="tech-tag">Power Supply</span>
                            <span class="tech-tag">STM32</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

function initModalEvents() {
    const overlay = document.getElementById('modalOverlay');
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-meta">
                <span class="tag ${getTagColor(project.category)}">${project.category}</span>
                <span>•</span>
                <span>${project.year}</span>
            </div>
        </div>
        ${project.content}
    `;
    
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reinitialize icons in modal
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function getTagColor(category) {
    const colors = {
        'STAGE · IOT EMBARQUÉ': 'emerald',
        'VISION / IA EMBARQUÉE': 'blue',
        'SIMULATION / DÉFENSE': 'purple',
        'INDUSTRIE / TEMPS RÉEL': 'orange',
        'FPGA / VHDL': 'cyan',
        'LINUX KERNEL': 'red',
        'STM32 / FREERTOS': 'green',
        'DSP / SIGNAL': 'yellow',
        'LINUX SYSTÈME': 'teal',
        'PROJET ACMG': 'pink',
        'PROJET DREAM': 'indigo'
    };
    return colors[category] || 'blue';
}

// Console Easter Egg
console.log('%c🔧 Junior MBA - Ingénieur Systèmes Embarqués', 
    'font-size: 16px; font-weight: bold; color: #3b82f6;');
console.log('%cMerci de visiter mon portfolio!', 
    'font-size: 12px; color: #94a3b8;');
