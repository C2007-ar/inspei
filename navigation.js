// js/navigation.js

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        // Gère l'événement de clic sur le bouton du menu hamburger
        navToggle.addEventListener('click', function() {
            // 1. Bascule la classe 'open' sur la liste des liens
            navLinks.classList.toggle('open');
            
            // 2. Met à jour les attributs d'accessibilité (ARIA)
            const isOpened = navLinks.classList.contains('open');
            navToggle.setAttribute('aria-expanded', isOpened);
            
            // 3. Change l'icône du bouton (☰ ou ✕)
            navToggle.textContent = isOpened ? '✕' : '☰'; 
        });

        // OPTIONNEL : Fermer le menu après qu'un lien a été cliqué (pour une meilleure UX mobile)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Vérifie si l'écran est petit (selon votre media query CSS max-width: 600px)
                if (window.innerWidth <= 600) { 
                    navLinks.classList.remove('open');
                    navToggle.textContent = '☰';
                    navToggle.setAttribute('aria-expanded', false);
                }
            });
        });
    }
});