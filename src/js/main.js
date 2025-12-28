/**
 * ============================================================================
 * PAWEL TRACZ - KONKRETNY TRENER | Main JavaScript
 * ============================================================================
 *
 * Features:
 * - Lucide Icons initialization
 * - Header scroll effect
 * - Mobile menu toggle
 * - FAQ accordion
 * - Scroll reveal animations (IntersectionObserver)
 * - Scroll to top button
 *
 * ============================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // =========================================================================
    // LUCIDE ICONS INITIALIZATION
    // =========================================================================

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // =========================================================================
    // HEADER SCROLL EFFECT
    // =========================================================================

    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    function handleScroll() {
        const scrollY = window.scrollY;

        // Header background on scroll
        if (header) {
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Show/hide scroll to top button
        if (scrollTopBtn) {
            if (scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // =========================================================================
    // MOBILE MENU
    // =========================================================================

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        if (!mobileMenuOverlay) return;

        const isActive = mobileMenuOverlay.classList.toggle('active');

        // Toggle body class for hamburger X transform
        document.body.classList.toggle('menu-open', isActive);
        document.body.style.overflow = isActive ? 'hidden' : 'auto';

        // Update ARIA attributes
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', isActive);
            mobileMenuBtn.setAttribute('aria-label', isActive ? 'Zamknij menu' : 'Otwórz menu');
        }
    }

    function closeMenuOnEscape(e) {
        if (e.key === 'Escape' && mobileMenuOverlay?.classList.contains('active')) {
            toggleMenu();
            if (mobileMenuBtn) mobileMenuBtn.focus();
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    mobileLinks.forEach(function(link) {
        link.addEventListener('click', toggleMenu);
    });

    document.addEventListener('keydown', closeMenuOnEscape);

    // =========================================================================
    // FAQ ACCORDION
    // =========================================================================

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(button) {
        button.addEventListener('click', function() {
            const item = button.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.faq-item.active').forEach(function(activeItem) {
                if (activeItem !== item) {
                    activeItem.classList.remove('active');
                    const activeAnswer = activeItem.querySelector('.faq-answer');
                    if (activeAnswer) {
                        activeAnswer.setAttribute('aria-hidden', 'true');
                    }
                }
            });

            // Toggle current item
            item.classList.toggle('active');

            // Update ARIA attributes
            button.setAttribute('aria-expanded', !isActive);
            if (answer) {
                answer.setAttribute('aria-hidden', isActive);
            }
        });

        // Initialize ARIA attributes
        button.setAttribute('aria-expanded', 'false');
        const answer = button.parentElement.querySelector('.faq-answer');
        if (answer) {
            answer.setAttribute('aria-hidden', 'true');
        }
    });

    // =========================================================================
    // SCROLL REVEAL ANIMATIONS
    // =========================================================================

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optionally unobserve after animation (performance)
                    // revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(function(el) {
            revealObserver.observe(el);
        });
    } else {
        // If reduced motion is preferred, show all elements immediately
        document.querySelectorAll('.reveal').forEach(function(el) {
            el.classList.add('active');
        });
    }

    // =========================================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // =========================================================================

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();

                // Account for fixed header height
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                // Set focus on target for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus({ preventScroll: true });
            }
        });
    });

    // =========================================================================
    // CURRENT YEAR IN FOOTER
    // =========================================================================

    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
