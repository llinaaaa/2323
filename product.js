// Product data
const products = {
    1: {
        category: 'UX/UI',
        title: 'Мобильное приложение',
        client: 'FinTech Startup',
        year: '2024',
        role: 'UX/UI Дизайнер',
        description: 'Разработка современного мобильного приложения для управления финансами. Проект включал полный цикл дизайна: от исследования пользователей до финальных макетов и прототипирования.',
        tasks: [
            'Провести исследование целевой аудитории',
            'Создать информационную архитектуру',
            'Разработать дизайн-систему',
            'Создать интерактивные прототипы',
            'Подготовить assets для разработки'
        ],
        solution: 'Создал интуитивный интерфейс с фокусом на простоту использования. Использовал минималистичный дизайн с акцентом на важные функции. Внедрил систему микроинтеракций для улучшения пользовательского опыта.'
    },
    2: {
        category: 'UX/UI',
        title: 'Веб-платформа',
        client: 'Корпорация',
        year: '2024',
        role: 'UX/UI Дизайнер',
        description: 'Комплексный редизайн корпоративного веб-сайта с улучшенной навигацией и визуальной иерархией. Проект включал аудит существующего сайта и создание нового дизайна.',
        tasks: [
            'Провести UX-аудит существующего сайта',
            'Разработать новую структуру навигации',
            'Создать современный визуальный стиль',
            'Адаптировать дизайн для всех устройств',
            'Создать компонентную библиотеку'
        ],
        solution: 'Разработал новую информационную архитектуру с улучшенной навигацией. Создал современный визуальный стиль, который отражает корпоративные ценности. Все компоненты были адаптированы для мобильных устройств.'
    },
    3: {
        category: 'WEB-разработка',
        title: 'E-commerce платформа',
        client: 'Retail Company',
        year: '2024',
        role: 'Full-stack Разработчик',
        description: 'Разработка полнофункциональной платформы для интернет-магазина с современными технологиями, оптимизацией производительности и интеграцией платежных систем.',
        tasks: [
            'Разработать архитектуру приложения',
            'Реализовать систему управления товарами',
            'Интегрировать платежные системы',
            'Оптимизировать производительность',
            'Обеспечить безопасность данных'
        ],
        solution: 'Использовал современный стек технологий для создания быстрой и надежной платформы. Реализовал систему кэширования для улучшения производительности. Внедрил лучшие практики безопасности для защиты пользовательских данных.'
    },
    4: {
        category: 'WEB-разработка',
        title: 'Корпоративный сайт',
        client: 'Tech Company',
        year: '2024',
        role: 'Frontend Разработчик',
        description: 'Создание адаптивного корпоративного сайта с интерактивными элементами и системой управления контентом. Сайт включает анимации и современные веб-технологии.',
        tasks: [
            'Разработать адаптивный дизайн',
            'Реализовать интерактивные элементы',
            'Интегрировать CMS',
            'Оптимизировать для SEO',
            'Добавить анимации и переходы'
        ],
        solution: 'Создал полностью адаптивный сайт с использованием современных CSS и JavaScript технологий. Реализовал плавные анимации и переходы для улучшения пользовательского опыта. Интегрировал систему управления контентом для удобства обновления.'
    },
    5: {
        category: 'Анимация',
        title: 'Брендинг анимация',
        client: 'Startup',
        year: '2024',
        role: 'Motion Дизайнер',
        description: 'Создание динамичной анимации логотипа и бренд-ассетов для технологического стартапа. Проект включал разработку анимационного стиля и создание различных вариантов анимации.',
        tasks: [
            'Разработать концепцию анимации',
            'Создать анимацию логотипа',
            'Разработать бренд-ассеты',
            'Создать варианты для разных платформ',
            'Подготовить файлы для разработчиков'
        ],
        solution: 'Создал уникальный анимационный стиль, который отражает инновационность бренда. Разработал несколько вариантов анимации для использования в разных контекстах. Все анимации оптимизированы для веб и мобильных платформ.'
    },
    6: {
        category: 'Анимация',
        title: 'Интерактивные переходы',
        client: 'Digital Agency',
        year: '2024',
        role: 'Motion Дизайнер',
        description: 'Разработка плавных анимаций переходов и микроинтеракций для улучшения пользовательского опыта веб-приложения. Проект включал создание библиотеки анимаций.',
        tasks: [
            'Исследовать лучшие практики анимаций',
            'Создать библиотеку переходов',
            'Разработать микроинтеракции',
            'Оптимизировать производительность',
            'Документировать использование'
        ],
        solution: 'Создал комплексную библиотеку анимаций, которая улучшает восприятие интерфейса. Все анимации оптимизированы для производительности и работают плавно на всех устройствах. Документировал использование для команды разработчиков.'
    },
    7: {
        category: 'Музыка',
        title: 'Электронный альбом',
        client: 'Independent Release',
        year: '2024',
        role: 'Музыкальный продюсер',
        description: 'Создание полноценного музыкального альбома в жанре электронной музыки. Проект включал композицию, аранжировку, продакшен, сведение и мастеринг всех треков. Альбом состоит из 8 композиций с единой концепцией и звучанием.',
        tasks: [
            'Разработать концепцию альбома',
            'Создать композиции и аранжировки',
            'Провести продакшен всех треков',
            'Выполнить сведение и мастеринг',
            'Подготовить релиз и обложку'
        ],
        solution: 'Создал целостный музыкальный альбом с уникальным звучанием. Использовал современные техники продакшена и синтеза для создания атмосферных композиций. Все треки были профессионально сведены и отмастерены для различных платформ.'
    },
    8: {
        category: 'Музыка',
        title: 'Саундтрек для проекта',
        client: 'Video Production',
        year: '2024',
        role: 'Композитор',
        description: 'Написание оригинальной музыкальной композиции для видеопроекта. Музыка должна была соответствовать визуальному ряду, создавать нужную атмосферу и эмоциональный настрой. Работа включала создание нескольких вариантов и финальную адаптацию под видео.',
        tasks: [
            'Изучить концепцию видеопроекта',
            'Создать музыкальную концепцию',
            'Написать основную композицию',
            'Адаптировать под временные метки',
            'Выполнить финальный микс'
        ],
        solution: 'Создал атмосферную композицию, которая идеально дополняет визуальный ряд. Использовал динамические переходы и эмоциональные акценты для усиления воздействия видео. Музыка была точно синхронизирована с ключевыми моментами проекта.'
    },
    9: {
        category: 'WEB-разработка',
        title: 'INNNOWHITE',
        client: 'Беларусь',
        year: '2024',
        role: 'Full-stack Разработчик',
        description: 'Innowhite — ведущий разработчик и производитель отбеливающей косметики для полости рта. Мы создаём инновационные продукты, которые не только эффективно отбеливают зубы, но и заботятся о здоровье вашей улыбки. Наша команда — это группа профессионалов и единомышленников, объединённых общей целью: делать улыбки ярче, а жизнь — увереннее. Мы верим, что красивая и здоровая улыбка должна быть доступной каждому, и поэтому разрабатываем безопасные, научно обоснованные и действенные решения. Продукция Innowhite создаётся с использованием современных технологий и проверенных ингредиентов. Мы строго соблюдаем стандарты качества на каждом этапе — от идеи до готового продукта.',
        tasks: [
            'Создать варфреймы и прототипы',
            'Разработать адаптивный дизайн',
            'Реализовать кросс-платформенную адаптацию',
            'Интегрировать контент-менеджмент',
            'Оптимизировать для всех устройств',
            'Довести проект до полноценного продукта'
        ],
        solution: 'Создан полнофункциональный сайт с нуля: от варфреймов до готового продукта. Реализована полная кросс-платформенная адаптация для всех устройств. Сайт отражает миссию компании по созданию безопасных и эффективных решений для отбеливания зубов.',
        link: 'https://fridrix19.github.io/innowhite_test/',
        image: 'img/inno.png'
    },
    10: {
        category: 'WEB-разработка',
        title: 'BEATFOUND',
        client: 'Зарубеж',
        year: '2024',
        role: 'Full-stack Разработчик',
        description: 'BEATFOUND - веб-приложение (дистрибьютор), занимающееся продвижением треков и обнаружением совпадений в битах среди всех треков на площадках. Платформа помогает музыкантам и продюсерам находить похожие биты, отслеживать использование их музыки и продвигать свои треки на различных площадках.',
        tasks: [
            'Создать варфреймы и прототипы',
            'Разработать веб-приложение с функционалом дистрибьютора',
            'Реализовать систему обнаружения совпадений в битах',
            'Создать кросс-платформенную адаптацию',
            'Интегрировать API для работы с музыкальными площадками',
            'Довести проект до полноценного продукта'
        ],
        solution: 'Разработано полнофункциональное веб-приложение от концепции до реализации. Создана система для продвижения треков и обнаружения совпадений в битах. Реализована полная кросс-платформенная адаптация для работы на всех устройствах.',
        link: 'https://fridrix19.github.io/laba3vercc/index.html',
        image: 'img/beat.png'
    },
    11: {
        category: 'WEB-разработка',
        title: 'ГИГАПИН',
        client: 'Хакатон кафедры ЦИАТ',
        year: '2024',
        role: 'Разработчик (в команде с Бурмистровой Полиной)',
        description: 'ГИГАПИН — образовательное приложение с системой рейтинга и геймификацией. Мы используем систему рейтинга, которая растёт за честное обучение и снижается при попытках обойти процесс. От рейтинга зависят доступные функции, бонусы и статус пользователя. Обучение построено на трёх уровнях сложности — от быстрого решения до настоящих испытаний. Поведение пользователя в каждом уровне напрямую влияет на его рейтинг и награды. За успехи выдаются поинты, за которые можно покупать одежду и аксессуары для маскота. Так внешний вид персонажа становится визуальным отражением реального прогресса.',
        tasks: [
            'Разработать систему рейтинга за честное обучение',
            'Создать три уровня сложности обучения',
            'Реализовать систему поинтов и наград',
            'Разработать систему кастомизации маскота',
            'Создать геймифицированный образовательный процесс',
            'Интегрировать визуальное отражение прогресса'
        ],
        solution: 'Создано образовательное приложение с уникальной системой мотивации. Фирменная монета стала основой внутренней экономики приложения — это универсальный символ прогресса, который пользователь зарабатывает исключительно за реальные действия, внимание и вовлечённость. Маскот отражает путь пользователя, а одежда, купленная за поинты, — наглядный результат того, что он не просто "ходил в приложение", а действительно рос и учился. Проект занял 2 место на хакатоне кафедры ЦИАТ.',
        images: ['img/giga1.png', 'img/giga2.png', 'img/giga3.png', 'img/giga4.png'],
        image: 'img/giga1.png'
    },
    12: {
        category: 'МОУШН-ДИЗАЙН',
        title: 'LAYERZERO МОУШН-ИНТЕРВЬЮ',
        client: 'LAYERZERO',
        year: '2024',
        role: 'Моушн-дизайнер',
        description: 'Интервью‑шоу анимация для компании LayerZero, оформленный в минималистичном моушн‑дизайне с интерактивными элементами. Проект представляет собой динамичную композицию с модульной сеткой интерфейса, включающую элементы хост-панели, центральный вопрос и навигационное меню.',
        tasks: [
            'Разработка концепции минималистичного моушн‑дизайна',
            'Создание модульной сетки интерфейса',
            'Дизайн верхней панели с Host и Guest блоками',
            'Разработка центрального вопроса с динамичной типографикой',
            'Создание нижнего меню навигации',
            'Интеграция интерактивных элементов',
            'Анимация и композитинг',
            'Финальный рендер и оптимизация'
        ],
        solution: 'Создана минималистичная анимация интервью‑шоу с интерактивными элементами. Темная фоновая сцена с крупной центральной надписью создает сильный визуальный акцент. Модульная сетка интерфейса разделяет экран на функциональные блоки: верхняя панель с Host (Dom | LZ) и Guest (Romy) персонажами, центральный вопрос "WHAT IS ABRACADABRA?" и нижнее меню с навигацией. Композиция подчеркивает моушн‑характер через динамичную типографику и контрастные элементы.',
        vimeoId: '1151519805',
        isVideo: true
    },
    13: {
        category: 'МОУШН-ДИЗАЙН',
        title: 'Проект 2',
        client: 'Клиент',
        year: '2024',
        role: 'Моушн-дизайнер',
        description: 'Описание проекта моушн-дизайна. Создание анимации для цифрового продукта.',
        tasks: [
            'Разработка концепции анимации',
            'Создание ключевых кадров',
            'Анимация и композитинг',
            'Финальный рендер и оптимизация'
        ],
        solution: 'Создана уникальная анимация, которая отражает концепцию проекта и улучшает пользовательский опыт.',
        isVideo: true
    },
    14: {
        category: 'МОУШН-ДИЗАЙН',
        title: 'Проект 3',
        client: 'Клиент',
        year: '2024',
        role: 'Моушн-дизайнер',
        description: 'Описание проекта моушн-дизайна. Создание анимации для цифрового продукта.',
        tasks: [
            'Разработка концепции анимации',
            'Создание ключевых кадров',
            'Анимация и композитинг',
            'Финальный рендер и оптимизация'
        ],
        solution: 'Создана уникальная анимация, которая отражает концепцию проекта и улучшает пользовательский опыт.',
        isVideo: true
    }
};

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id') || '1';

// Load product data
const product = products[productId];

// Function to load product data
function loadProductData() {
    if (!product) return;
    
    const categoryEl = document.getElementById('productCategory');
    const titleEl = document.getElementById('productTitle');
    const clientEl = document.getElementById('productClient');
    const yearEl = document.getElementById('productYear');
    const roleEl = document.getElementById('productRole');
    const descriptionEl = document.getElementById('productDescription');
    const solutionEl = document.getElementById('productSolution');
    const tasksList = document.getElementById('productTasks');
    
    if (categoryEl) categoryEl.textContent = product.category;
    if (titleEl) titleEl.textContent = product.title;
    if (clientEl) clientEl.textContent = product.client;
    if (yearEl) yearEl.textContent = product.year;
    if (roleEl) roleEl.textContent = product.role;
    if (descriptionEl) descriptionEl.textContent = product.description;
    if (solutionEl) solutionEl.textContent = product.solution;
    
    if (tasksList) {
        tasksList.innerHTML = '';
        product.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            tasksList.appendChild(li);
        });
    }
    
    // Show link if available
    const linkContainer = document.getElementById('productLinkContainer');
    const productLink = document.getElementById('productLink');
    if (product.link && linkContainer && productLink) {
        productLink.href = product.link;
        productLink.setAttribute('target', '_blank');
        productLink.setAttribute('rel', 'noopener noreferrer');
        linkContainer.style.display = 'block';
    } else if (linkContainer) {
        linkContainer.style.display = 'none';
    }
    
    // Update hero image or video if available
    const heroImage = document.getElementById('productHeroImage');
    if (heroImage) {
        if (product.isVideo && product.vimeoId) {
            // Replace with Vimeo video
            heroImage.innerHTML = `
                <div style="padding:56.25% 0 0 0;position:relative;width:100%;height:100%;">
                    <iframe 
                        src="https://player.vimeo.com/video/${product.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1" 
                        frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        style="position:absolute;top:0;left:0;width:100%;height:100%;" 
                        title="${product.title}">
                    </iframe>
                </div>
            `;
            heroImage.style.backgroundImage = 'none';
            heroImage.style.padding = '0';
        } else if (product.image) {
            heroImage.innerHTML = '';
            heroImage.style.backgroundImage = `url('${product.image}')`;
            heroImage.style.backgroundSize = 'contain';
            heroImage.style.backgroundPosition = 'center';
            heroImage.style.backgroundRepeat = 'no-repeat';
        }
    }
    
    // Setup gallery or slider
    const galleryContainer = document.getElementById('galleryContainer');
    const productSlider = document.getElementById('productSlider');
    
    if (product.images && product.images.length > 0) {
        // Show slider for projects with multiple images
        if (galleryContainer) galleryContainer.style.display = 'none';
        if (productSlider) {
            productSlider.style.display = 'block';
            setupSlider(product.images);
        }
    } else {
        // Show regular gallery for projects without multiple images
        if (productSlider) productSlider.style.display = 'none';
        if (galleryContainer) {
            galleryContainer.style.display = 'grid';
            // Create default gallery items if needed
            if (galleryContainer.children.length === 0) {
                for (let i = 0; i < 3; i++) {
                    const item = document.createElement('div');
                    item.className = 'gallery-item';
                    galleryContainer.appendChild(item);
                }
            }
        }
    }
    
    // Update page title
    document.title = `${product.title} — FRIDRIX`;
}

// Load product data when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProductData);
} else {
    loadProductData();
}

// Slider functionality
function setupSlider(images) {
    const sliderTrack = document.getElementById('sliderTrack');
    const sliderDots = document.getElementById('sliderDots');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    
    if (!sliderTrack || !sliderDots) return;
    
    let currentSlide = 0;
    
    // Clear existing content
    sliderTrack.innerHTML = '';
    sliderDots.innerHTML = '';
    
    // Create slider items
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'slider-item';
        item.style.backgroundImage = `url('${image}')`;
        sliderTrack.appendChild(item);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    
    function goToSlide(index) {
        currentSlide = index;
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        const dots = sliderDots.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
        
        // Update buttons
        if (sliderPrev) sliderPrev.disabled = currentSlide === 0;
        if (sliderNext) sliderNext.disabled = currentSlide === images.length - 1;
    }
    
    function nextSlide() {
        if (currentSlide < images.length - 1) {
            goToSlide(currentSlide + 1);
        }
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    }
    
    // Event listeners
    if (sliderNext) {
        sliderNext.addEventListener('click', nextSlide);
    }
    if (sliderPrev) {
        sliderPrev.addEventListener('click', prevSlide);
    }
    
    // Initialize
    goToSlide(0);
    
    // Auto-play (optional)
    // setInterval(() => {
    //     if (currentSlide < images.length - 1) {
    //         nextSlide();
    //     } else {
    //         goToSlide(0);
    //     }
    // }, 5000);
}

