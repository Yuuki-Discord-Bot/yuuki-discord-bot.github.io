// Direkte Einbindung der Übersetzungen
const translations = {
    en: {
        nav_home: "Home",
        nav_features: "Features",
        nav_commands: "Commands",
        nav_invite: "Invite",
        title: "Yuuki Bot",
        welcome: "An anime-inspired moderation bot from Sword Art Online – bringing order and style to your server.",
        invite_button: "Invite Bot",
        features_title: "Features",
        moderation: "Moderation",
        moderation_desc: "Effective tools for banning, kicking, and muting.",
        automation: "Automation",
        automation_desc: "Protection against spam and inappropriate content.",
        anime_style: "Anime Style",
        anime_style_desc: "Responses with unique SAO flair.",
        invite_section_title: "Invite Yuuki",
        invite_section_desc: "Bring order and anime vibes to your Discord server.",
        invite_section_button: "Invite Now",
        footer: "© 2025 Yuuki Bot. Inspired by Sword Art Online.",
        commands_title: "Slash Commands",
        commands_desc: "Discover all of Yuuki's commands, organized by category.",
        moderation_commands: "Moderation Commands",
        moderation_ban: "/ban @user [reason] - Bans a user.",
        moderation_kick: "/kick @user [reason] - Kicks a user.",
        moderation_mute: "/mute @user [duration] - Mutes a user.",
        utility_commands: "Utility Commands",
        utility_info: "/info @user - User information.",
        utility_serverinfo: "/serverinfo - Server information.",
        fun_commands: "Fun Commands",
        fun_quote: "/quote - Random SAO quote.",
        fun_animefact: "/animefact - Anime fun fact."
    },
    de: {
        nav_home: "Home",
        nav_features: "Features",
        nav_commands: "Commands",
        nav_invite: "Invite",
        title: "Yuuki Bot",
        welcome: "Ein Anime-inspirierter Moderations-Bot aus Sword Art Online – für Ordnung und Stil auf deinem Server.",
        invite_button: "Bot einladen",
        features_title: "Features",
        moderation: "Moderation",
        moderation_desc: "Effektive Tools zum Bannen, Kicken und Muten.",
        automation: "Automatisierung",
        automation_desc: "Schutz vor Spam und unangemessenen Inhalten.",
        anime_style: "Anime-Stil",
        anime_style_desc: "Antworten im einzigartigen SAO-Flair.",
        invite_section_title: "Lade Yuuki ein",
        invite_section_desc: "Bringe Ordnung und Anime-Vibes in deinen Discord-Server.",
        invite_section_button: "Jetzt einladen",
        footer: "© 2025 Yuuki Bot. Inspiriert von Sword Art Online.",
        commands_title: "Slash Commands",
        commands_desc: "Entdecke alle Commands von Yuuki, übersichtlich in Kategorien.",
        moderation_commands: "Moderation Commands",
        moderation_ban: "/ban @user [reason] - Bannt einen User.",
        moderation_kick: "/kick @user [reason] - Kickt einen User.",
        moderation_mute: "/mute @user [duration] - Mutet einen User.",
        utility_commands: "Utility Commands",
        utility_info: "/info @user - User-Informationen.",
        utility_serverinfo: "/serverinfo - Server-Informationen.",
        fun_commands: "Fun Commands",
        fun_quote: "/quote - Zufälliges SAO-Zitat.",
        fun_animefact: "/animefact - Anime-Funfact."
    },
    ru: {
        nav_home: "Главная",
        nav_features: "Функции",
        nav_commands: "Команды",
        nav_invite: "Пригласить",
        title: "Юки Бот",
        welcome: "Бот-модератор, вдохновленный аниме Sword Art Online – привносит порядок и стиль на ваш сервер.",
        invite_button: "Пригласить бота",
        features_title: "Функции",
        moderation: "Модерация",
        moderation_desc: "Эффективные инструменты для бана, кика и мута.",
        automation: "Автоматизация",
        automation_desc: "Защита от спама и неподобающего контента.",
        anime_style: "Аниме-стиль",
        anime_style_desc: "Ответы в уникальном стиле SAO.",
        invite_section_title: "Пригласите Юки",
        invite_section_desc: "Привнесите порядок и аниме-атмосферу на ваш Discord-сервер.",
        invite_section_button: "Пригласить сейчас",
        footer: "© 2025 Юки Бот. Вдохновлено Sword Art Online.",
        commands_title: "Слэш-команды",
        commands_desc: "Ознакомьтесь со всеми командами Юки, разделенными по категориям.",
        moderation_commands: "Команды модерации",
        moderation_ban: "/ban @user [reason] - Банит пользователя.",
        moderation_kick: "/kick @user [reason] - Кикает пользователя.",
        moderation_mute: "/mute @user [duration] - Мутит пользователя.",
        utility_commands: "Утилитарные команды",
        utility_info: "/info @user - Информация о пользователе.",
        utility_serverinfo: "/serverinfo - Информация о сервере.",
        fun_commands: "Развлекательные команды",
        fun_quote: "/quote - Случайная цитата из SAO.",
        fun_animefact: "/animefact - Интересный факт об аниме."
    }
};

// Sprachumschaltung
function updateLanguage(lang) {
    console.log(`Updating language to: ${lang}`);
    if (typeof translations === 'undefined') {
        console.error('Translations not defined.');
        return;
    }
    const elements = document.querySelectorAll('[data-lang]');
    if (!translations[lang]) {
        console.error(`Language ${lang} not found in translations`);
        return;
    }
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Translation key "${key}" not found for language "${lang}"`);
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
}

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - initializing scripts');
    const languageSelect = document.getElementById('language-select');
    if (!languageSelect) {
        console.error('Language select element not found');
        return;
    }

    const savedLang = localStorage.getItem('language') || 'en';
    console.log(`Loaded saved language: ${savedLang}`);
    languageSelect.value = savedLang;
    updateLanguage(savedLang);

    languageSelect.addEventListener('change', (e) => {
        const newLang = e.target.value;
        console.log(`Language changed to: ${newLang}`);
        updateLanguage(newLang);
    });

    // Smooth Scroll für Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.getAttribute('href').startsWith('#')) {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Accordion/Dropdown Funktionalität
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isOpen = !content.classList.contains('hidden');

            if (isOpen) {
                content.classList.add('hidden');
                button.classList.remove('active');
            } else {
                document.querySelectorAll('.accordion-content').forEach(otherContent => {
                    otherContent.classList.add('hidden');
                });
                document.querySelectorAll('.accordion-button').forEach(otherButton => {
                    otherButton.classList.remove('active');
                });
                content.classList.remove('hidden');
                button.classList.add('active');
            }
        });
    });
});

// Particles.js Konfiguration
particlesJS('particles-js', {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 1000 } },
        color: { value: '#b794f4' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 2, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 2 } }
    },
    retina_detect: true
});