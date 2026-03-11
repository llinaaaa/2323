// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .project-card-link');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                const category = card.getAttribute('data-category');
                if (category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active state for mobile navigation
function updateMobileNavActive() {
    const sections = document.querySelectorAll('section[id]');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    mobileNavItems.forEach(item => {
        const href = item.getAttribute('href');
        const targetId = href.replace('#', '');
        item.classList.toggle('active', targetId === currentSection || (currentSection === '' && targetId === 'work'));
    });
}

// Update active state on scroll
window.addEventListener('scroll', updateMobileNavActive);
window.addEventListener('load', updateMobileNavActive);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.section-title, .about-text, .skills').forEach(el => {
    observer.observe(el);
});

// Video autoplay on hover for motion design projects
function initVideoPlayers() {
    const motionCards = document.querySelectorAll('.project-card[data-category="motion"]');
    const vimeoPlayers = {};

    motionCards.forEach((card, index) => {
        const vimeoIframe = card.querySelector('.vimeo-player');
        const regularVideo = card.querySelector('.project-video');
        
        // Handle Vimeo videos
        if (vimeoIframe) {
            if (typeof Vimeo !== 'undefined') {
                const playerId = `vimeo-player-${index}`;
                vimeoIframe.id = playerId;
                const player = new Vimeo.Player(vimeoIframe);
                vimeoPlayers[playerId] = player;
                
                card.addEventListener('mouseenter', () => {
                    player.play().catch(e => console.log('Vimeo autoplay prevented:', e));
                });
                
                card.addEventListener('mouseleave', () => {
                    player.pause();
                    player.setCurrentTime(0);
                });
            } else {
                // Fallback: wait for Vimeo script to load
                window.addEventListener('load', () => {
                    if (typeof Vimeo !== 'undefined') {
                        const playerId = `vimeo-player-${index}`;
                        vimeoIframe.id = playerId;
                        const player = new Vimeo.Player(vimeoIframe);
                        vimeoPlayers[playerId] = player;
                        
                        card.addEventListener('mouseenter', () => {
                            player.play().catch(e => console.log('Vimeo autoplay prevented:', e));
                        });
                        
                        card.addEventListener('mouseleave', () => {
                            player.pause();
                            player.setCurrentTime(0);
                        });
                    }
                });
            }
        }
        
        // Handle regular HTML5 videos
        if (regularVideo) {
            card.addEventListener('mouseenter', () => {
                regularVideo.play().catch(e => console.log('Video autoplay prevented:', e));
            });
            
            card.addEventListener('mouseleave', () => {
                regularVideo.pause();
                regularVideo.currentTime = 0;
            });
        }
    });
}

// Pricing calculator configuration
const serviceCategories = {
    graphic: {
        name: 'Графический дизайн',
        services: [
            {
                id: 'logo-basic',
                name: 'Разработка логотипа',
                basePrice: 15000,
                included: [
                    '1 основной вариант логотипа',
                    'Файлы в форматах SVG и PNG',
                    'Варианты для светлого и тёмного фона'
                ],
                addons: [
                    {
                        id: 'logo-extra-variant',
                        name: 'Дополнительный вариант логотипа',
                        price: 1500,
                        type: 'quantity',
                        unitLabel: 'вариант'
                    },
                    {
                        id: 'logo-extra-pack',
                        name: 'Дополнительный пакет файлов (PDF, mockup, исходники для печати)',
                        price: 2000,
                        type: 'boolean'
                    }
                ]
            },
            {
                id: 'social-full',
                name: 'Оформление соцсети под ключ',
                basePrice: 25000,
                included: [
                    'Аватарка и шапка профиля',
                    '5 шаблонов постов / сторис',
                    'Единый визуальный стиль ленты'
                ],
                addons: [
                    {
                        id: 'social-extra-template',
                        name: 'Дополнительный шаблон поста/сторис',
                        price: 2000,
                        type: 'quantity',
                        unitLabel: 'шаблон'
                    }
                ]
            },
            {
                id: 'social-post',
                name: 'Дизайн отдельного поста',
                basePrice: 3000,
                included: [
                    '1 вариант поста (лента или сторис)',
                    'Файл для публикации в PNG/JPEG',
                    'Исходник в Figma/PSD по запросу'
                ],
                addons: [
                    {
                        id: 'post-extra-variant',
                        name: 'Дополнительный вариант поста',
                        price: 2000,
                        type: 'quantity',
                        unitLabel: 'вариант'
                    }
                ]
            }
        ]
    },
    web: {
        name: 'Веб‑дизайн',
        services: [
            {
                id: 'hero-design',
                name: 'Дизайн hero‑экрана',
                basePrice: 12000,
                included: [
                    '1 ключевой экран (desktop)',
                    'Продуманная структура блока и смысловые акценты',
                    'Подготовка к вёрстке (сетka, стили, компоненты)'
                ],
                addons: [
                    {
                        id: 'hero-mobile',
                        name: 'Адаптация hero‑экрана под мобильную версию',
                        price: 5000,
                        type: 'boolean'
                    }
                ]
            },
            {
                id: 'landing-basic',
                name: 'Дизайн лендинга (до 7 блоков)',
                basePrice: 70000,
                included: [
                    'Структура и прототип лендинга',
                    'Дизайн до 7 блоков (desktop‑версия)',
                    'Единая визуальная система и компоненты'
                ],
                addons: [
                    {
                        id: 'landing-extra-block',
                        name: 'Дополнительный блок сверх 7 базовых',
                        price: 2000,
                        type: 'quantity',
                        unitLabel: 'блок'
                    },
                    {
                        id: 'landing-mobile',
                        name: 'Адаптация лендинга под мобильные устройства',
                        price: 20000,
                        type: 'boolean'
                    }
                ]
            }
        ]
    }
};

function formatPrice(value) {
    return value.toLocaleString('ru-RU');
}

// Pricing calculator initialization
function initServiceCalculator() {
    const calculatorSection = document.querySelector('.pricing-calculator-section');
    if (!calculatorSection) return;

    const categoryButtons = calculatorSection.querySelectorAll('.calculator-category-btn');
    const serviceSelect = calculatorSection.querySelector('#serviceSelect');
    const serviceIncludedEl = calculatorSection.querySelector('#serviceIncluded');
    const addonsContainer = calculatorSection.querySelector('#addonsContainer');
    const checkServiceEl = calculatorSection.querySelector('#checkService');
    const checkItemsEl = calculatorSection.querySelector('#checkItems');
    const checkTotalEl = calculatorSection.querySelector('#checkTotal');

    if (!serviceSelect || !serviceIncludedEl || !addonsContainer || !checkServiceEl || !checkItemsEl || !checkTotalEl) {
        return;
    }

    let currentCategoryKey = 'graphic';
    let currentServiceId = null;

    function getCurrentCategory() {
        return serviceCategories[currentCategoryKey];
    }

    function getCurrentService() {
        const category = getCurrentCategory();
        if (!category) return null;
        return category.services.find(service => service.id === currentServiceId) || category.services[0];
    }

    function renderServiceOptions() {
        const category = getCurrentCategory();
        if (!category) return;

        serviceSelect.innerHTML = '';
        category.services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            option.textContent = `${service.name} — от ${formatPrice(service.basePrice)} ₽`;
            serviceSelect.appendChild(option);
        });

        currentServiceId = category.services[0] ? category.services[0].id : null;
        if (currentServiceId) {
            serviceSelect.value = currentServiceId;
        }
    }

    function renderIncludedAndAddons() {
        const service = getCurrentService();
        if (!service) return;

        // Included block
        serviceIncludedEl.innerHTML = '';
        const includedTitle = document.createElement('h3');
        includedTitle.className = 'calculator-block-title';
        includedTitle.textContent = 'В базовый пакет входит:';
        serviceIncludedEl.appendChild(includedTitle);

        const list = document.createElement('ul');
        list.className = 'calculator-included-list';
        service.included.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
        serviceIncludedEl.appendChild(list);

        // Addons block
        addonsContainer.innerHTML = '';
        if (service.addons && service.addons.length > 0) {
            const addonsTitle = document.createElement('h3');
            addonsTitle.className = 'calculator-block-title';
            addonsTitle.textContent = 'Дополнительно:';
            addonsContainer.appendChild(addonsTitle);

            service.addons.forEach(addon => {
                const row = document.createElement('div');
                row.className = 'calculator-addon-row';

                const info = document.createElement('div');
                info.className = 'calculator-addon-info';

                const nameEl = document.createElement('div');
                nameEl.className = 'calculator-addon-name';
                nameEl.textContent = addon.name;

                const priceEl = document.createElement('div');
                priceEl.className = 'calculator-addon-price';
                priceEl.textContent = `+ ${formatPrice(addon.price)} ₽` + (addon.type === 'quantity' ? ` за ${addon.unitLabel || 'ед.'}` : '');

                info.appendChild(nameEl);
                info.appendChild(priceEl);

                const control = document.createElement('div');
                control.className = 'calculator-addon-control';

                if (addon.type === 'quantity') {
                    const input = document.createElement('input');
                    input.type = 'number';
                    input.min = '0';
                    input.step = '1';
                    input.value = '0';
                    input.dataset.addonId = addon.id;
                    input.className = 'calculator-addon-qty';
                    control.appendChild(input);
                } else {
                    const label = document.createElement('label');
                    label.className = 'calculator-switch';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.dataset.addonId = addon.id;

                    const slider = document.createElement('span');
                    slider.className = 'calculator-switch-slider';

                    label.appendChild(checkbox);
                    label.appendChild(slider);
                    control.appendChild(label);
                }

                row.appendChild(info);
                row.appendChild(control);
                addonsContainer.appendChild(row);
            });
        }

        calculateTotal();
    }

    function collectAddonSelections(service) {
        const selections = [];
        if (!service || !service.addons) return selections;

        service.addons.forEach(addon => {
            if (addon.type === 'quantity') {
                const input = addonsContainer.querySelector(`.calculator-addon-qty[data-addon-id="${addon.id}"]`);
                if (input) {
                    const qty = parseInt(input.value, 10) || 0;
                    if (qty > 0) {
                        selections.push({
                            ...addon,
                            quantity: qty,
                            total: addon.price * qty
                        });
                    }
                }
            } else {
                const checkbox = addonsContainer.querySelector(`input[type="checkbox"][data-addon-id="${addon.id}"]`);
                if (checkbox && checkbox.checked) {
                    selections.push({
                        ...addon,
                        quantity: 1,
                        total: addon.price
                    });
                }
            }
        });

        return selections;
    }

    function calculateTotal() {
        const service = getCurrentService();
        if (!service) return;

        const base = service.basePrice;
        const addonsSelected = collectAddonSelections(service);
        const addonsSum = addonsSelected.reduce((sum, addon) => sum + addon.total, 0);
        const total = base + addonsSum;

        checkServiceEl.textContent = service.name;
        checkItemsEl.innerHTML = '';

        const baseItem = document.createElement('li');
        baseItem.className = 'check-item';
        baseItem.textContent = `Базовый пакет — ${formatPrice(base)} ₽`;
        checkItemsEl.appendChild(baseItem);

        addonsSelected.forEach(addon => {
            const li = document.createElement('li');
            li.className = 'check-item';
            const qtyLabel = addon.type === 'quantity' && addon.quantity > 1 ? ` × ${addon.quantity}` : '';
            li.textContent = `${addon.name}${qtyLabel} — ${formatPrice(addon.total)} ₽`;
            checkItemsEl.appendChild(li);
        });

        checkTotalEl.textContent = `${formatPrice(total)} ₽`;
    }

    // Events
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.dataset.category;
            if (!serviceCategories[key]) return;

            currentCategoryKey = key;
            categoryButtons.forEach(btn => btn.classList.toggle('active', btn === button));
            renderServiceOptions();
            renderIncludedAndAddons();
        });
    });

    serviceSelect.addEventListener('change', () => {
        currentServiceId = serviceSelect.value;
        renderIncludedAndAddons();
    });

    addonsContainer.addEventListener('input', (event) => {
        if (event.target.matches('.calculator-addon-qty')) {
            const value = parseInt(event.target.value, 10);
            if (isNaN(value) || value < 0) {
                event.target.value = '0';
            }
            calculateTotal();
        }
    });

    addonsContainer.addEventListener('change', (event) => {
        if (event.target.type === 'checkbox') {
            calculateTotal();
        }
    });

    // Initial render
    renderServiceOptions();
    renderIncludedAndAddons();
}

function initPageScripts() {
    initVideoPlayers();
    initServiceCalculator();

    // Prevent card link clicks when clicking on video iframe
    document.querySelectorAll('.vimeo-player, .project-video').forEach(video => {
        video.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPageScripts);
} else {
    initPageScripts();
}

