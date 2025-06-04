 // Menu mobile
        const menuBtn = document.querySelector('.menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        const overlay = document.querySelector('.overlay');
        const navLinks = document.querySelectorAll('.nav-link');

        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        overlay.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        // Animation de texte
        const typedText = document.getElementById('typed-text');
        const text = "Passionnée de la lecture et de l'écriture, bienvenue dans mon univers !!!";
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typedText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 200);
            }
        }

        // Démarrer l'animation après un léger délai
        setTimeout(typeWriter, 500);

        // Dark mode
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        const darkModeIcon = darkModeToggle.querySelector('i');

        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                darkModeIcon.classList.remove('fa-moon');
                darkModeIcon.classList.add('fa-sun');
            } else {
                darkModeIcon.classList.remove('fa-sun');
                darkModeIcon.classList.add('fa-moon');
            }
        });

        // Bouton retour en haut
        const backToTopBtn = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Animation entre sections
        const sections = document.querySelectorAll('section');

        function checkScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight - 100) {
                    section.classList.add('active');
                }
            });
        }

        // Vérifier au chargement
        window.addEventListener('load', checkScroll);
        // Vérifier au scroll
        window.addEventListener('scroll', checkScroll);

        // Formulaire de contact
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Espace code pour envoyer le formulaire de contact

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Création du corps du mail
            const mailBody = `
            Nom : ${name}
            Email : ${email}

            Message : ${message}
            `;
            // Encodage du message mail depuis le formulaire apte pour l'envoie

            const subject = encodeURIComponent("Message deouis le portfolio");
            const body = encodeURIComponent(mailBody);

            // Destination
            const toEmail = "oceaneamoussou407@gmail.com";

            // Ouverture 
            window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
            alert('Merci pour votre message ! Je vous répondrai dès que possible.');
            contactForm.reset();
        });

        // Smooth scroll pour les liens
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });