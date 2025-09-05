// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {

    // -------------------------
    // Navigation mobile
    // -------------------------
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // -------------------------
    // Navigation fluide
    // -------------------------
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const projectsSection = document.querySelector('#projets');
            if (projectsSection) {
                const offsetTop = projectsSection.offsetTop - 70;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    }

    // -------------------------
    // Animation des barres de compétences
    // -------------------------
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const targetWidth = skillBar.getAttribute('data-width') + '%';
                    skillBar.style.setProperty('--target-width', targetWidth);
                    skillBar.classList.add('animated');
                    observer.unobserve(skillBar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }
    animateSkillBars();

    // -------------------------
    // Mise à jour nav active selon section visible
    // -------------------------
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    }
    window.addEventListener('scroll', updateActiveNavLink);

    // -------------------------
    // Animation scroll pour projets
    // -------------------------
    function animateOnScroll() {
        const projectCards = document.querySelectorAll('.project-card');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index*0.1}s, transform 0.6s ease ${index*0.1}s`;
            observer.observe(card);
        });
    }

    // -------------------------
    // Animation scroll pour toutes les sections
    // -------------------------
    function animateSections() {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        sections.forEach((sec, index) => {
            sec.style.opacity = '0';
            sec.style.transform = 'translateY(50px)';
            sec.style.transition = `opacity 0.8s ease ${index*0.1}s, transform 0.8s ease ${index*0.1}s`;
            observer.observe(sec);
        });
    }
    animateSections();
    animateOnScroll();

    // -------------------------
    // Formulaire de contact
    // -------------------------
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Envoi via FormSubmit
            const formData = new FormData(this);
            fetch("https://formsubmit.co/ajax/alliancebodjrenou8@gmail.com", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                alert("Message envoyé avec succès !");
                contactForm.reset();
            })
            .catch(error => alert("Erreur lors de l'envoi du message."));
        });
    }

// -------------------------
// Typing animation (préserve la mise en forme HTML)
// -------------------------
function typeWriter() {
    const titleElement = document.querySelector('.hero-text h1');
    if (!titleElement) return;
    
    const originalHTML = titleElement.innerHTML;
    
    // Parse le HTML original dans un conteneur temporaire
    const temp = document.createElement('div');
    temp.innerHTML = originalHTML;
    
    // Clone la structure en gardant les styles, mais vide les textes
    const textNodes = []; // { node: TextNodeCloné, fullText: string }
    
    function cloneStructure(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const clonedText = document.createTextNode('');
            textNodes.push({ node: clonedText, fullText: node.nodeValue });
            return clonedText;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const clonedEl = node.cloneNode(false); // clone sans enfants
            node.childNodes.forEach(child => clonedEl.appendChild(cloneStructure(child)));
            return clonedEl;
        } else {
            // Par sécurité, on ignore les autres types (commentaires, etc.)
            return document.createTextNode('');
        }
    }
    
    // Reconstruit le h1 avec la structure clonée mais sans texte
    titleElement.innerHTML = '';
    temp.childNodes.forEach(child => titleElement.appendChild(cloneStructure(child)));
    
    // Curseur
    titleElement.style.borderRight = '2px solid var(--primary-color)';
    
    // Anime les nœuds de texte, caractère par caractère
    let seg = 0; // index du nœud de texte courant
    let idx = 0; // index du caractère dans ce nœud
    const speed = 50; // ms
    
    function step() {
        if (seg >= textNodes.length) {
            titleElement.style.borderRight = 'none';
            return;
        }
        const current = textNodes[seg];
        current.node.textContent = current.fullText.slice(0, idx + 1);
        
        idx++;
        if (idx >= current.fullText.length) {
            seg++;
            idx = 0;
        }
        setTimeout(step, speed);
    }
    
    setTimeout(step, 1000); // petit délai avant de commencer
}
typeWriter();

    // -------------------------
    // Effet parallax sur hero
    // -------------------------
    function parallaxEffect() {
        const heroSection = document.querySelector('.hero-section');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        if (heroSection && scrolled < heroSection.offsetHeight) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    }
    window.addEventListener('scroll', () => requestAnimationFrame(parallaxEffect));

    // -------------------------
    // Animation clic sur boutons projets
    // -------------------------
    document.querySelectorAll('.project-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => this.style.transform = 'scale(1)', 150);
            console.log('Ouverture du projet...');
        });
    });

    // -------------------------
    // Téléchargement du CV
    // -------------------------
    const downloadCvBtn = document.querySelector('.download-cv');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => this.style.transform = 'scale(1)', 150);
            console.log('Téléchargement du CV...');
            alert('Fonctionnalité de téléchargement à implémenter !');
        });
    }

    // -------------------------
    // Navbar transparente au scroll
    // -------------------------
    function handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26,26,26,0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--secondary-color)';
            navbar.style.backdropFilter = 'none';
        }
    }
    window.addEventListener('scroll', handleNavbarScroll);

    console.log('Portfolio initialisé avec succès !');
});



// Sélection des éléments de la modale
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = modal.querySelector('.close');

document.querySelectorAll('.project-card').forEach((card, index) => {
    const btn = card.querySelector('.project-btn');
    btn.addEventListener('click', function() {
        // Remplir la modale avec les infos du projet
        modalTitle.textContent = projects[index].title;
        modalDescription.textContent = projects[index].description;
        
        // Afficher la modale
        modal.style.display = 'block';
    });
});

// Fermer la modale
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fermer la modale en cliquant en dehors
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
const projects = [
    {
        title: "Réalisation de la Carte Mentale sur le Web et ses Principes de base ",
        description: "Un jeu interactif où l'utilisateur doit deviner un nombre aléatoire.",
        link: "https://github.com/alliance-com/Formation_Dclic/tree/0e8f3e09fbed7c9d086a465b7f157b1c40d5bc29/Projet1"
    },
    {
        title: "Projet final - Calculateur de prêt hypothécaire",
        description: "Calculateur",
        link: "https://github.com/alliance-com/Formation_Dclic/tree/main/Projet5/Exercice6"
    },
    {
        title: "Manipulation de Tableaux",
        description: "Réalisation de tableau .",
        link: "https://github.com/alliance-com/Formation_Dclic/tree/main/Projet5/Exercice5"
    }
];

document.querySelectorAll('.project-card').forEach((card, index) => {
    const btn = card.querySelector('.project-btn');
    btn.addEventListener('click', function() {
        modalTitle.textContent = projects[index].title;
        modalDescription.innerHTML = `${projects[index].description} <br><a href="${projects[index].link}" target="_blank">Voir le projet</a>`;
        
        modal.style.display = 'block';
    });
});


