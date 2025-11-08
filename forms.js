// js/forms.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Fonction principale de gestion des formulaires
    function setupForm(formId, successMessageText) {
        const form = document.getElementById(formId);
        
        if (form) {
            const formMessage = form.querySelector('#form-message');

            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Empêche l'envoi réel du formulaire par défaut

                // 1. Validation Basique (vérifie si les champs requis sont remplis)
                let isValid = true;
                const requiredFields = form.querySelectorAll('[required]');

                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('is-invalid'); // Style d'erreur (à définir dans CSS si besoin)
                    } else {
                        field.classList.remove('is-invalid');
                    }
                });

                // 2. Traitement si la validation réussit
                if (isValid) {
                    
                    // SIMULATION DE L'ENVOI (dans un vrai projet, le code ici ferait une requête fetch/AJAX)
                    
                    // Réinitialisation de l'affichage
                    if (formMessage) {
                        formMessage.style.display = 'none';
                    }

                    // Affichage du message de succès
                    if (formMessage) {
                        formMessage.textContent = successMessageText;
                        formMessage.style.display = 'block';
                    }

                    // Réinitialisation des champs du formulaire
                    form.reset();

                    // Optionnel : Désactiver le bouton temporairement pour éviter les doubles clics
                    const submitButton = form.querySelector('button[type="submit"]');
                    if (submitButton) {
                        submitButton.disabled = true;
                        setTimeout(() => {
                            submitButton.disabled = false;
                            if (formMessage) {
                                formMessage.style.display = 'none'; // Cacher le message après un court délai
                            }
                        }, 5000); // 5 secondes
                    }

                } else {
                    // Affichage d'un message d'erreur si la validation échoue
                    if (formMessage) {
                        formMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
                        formMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                        formMessage.style.borderColor = '#dc3545';
                        formMessage.style.color = '#dc3545';
                        formMessage.style.display = 'block';
                    }
                }
            });
        }
    }

    // Initialisation pour le formulaire de parrainage
    setupForm('parrainage-form', "✅ Votre demande a été envoyée ! Nous vous contacterons par email sous 48h pour vous mettre en relation.");

    // Initialisation pour le formulaire de contact
    setupForm('contact-form', "✅ Votre message a été transmis à l'équipe. Merci de votre contribution !");
});