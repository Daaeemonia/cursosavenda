// LearnPlus - Plataforma de Cursos Online

class LearnPlusApp {
    constructor() {
        this.courses = {
            1: {
                title: "Desenvolvimento Web Full Stack",
                instructor: "Prof. João Silva",
                category: "Tecnologia",
                price: 297,
                originalPrice: 597,
                rating: 4.9,
                reviews: 2100,
                duration: "42 horas",
                level: "Iniciante ao Avançado",
                students: 8500,
                lastUpdated: "Janeiro 2024",
                description: "Aprenda a criar aplicações web completas do zero. Domine HTML, CSS, JavaScript, React, Node.js e muito mais. Curso 100% prático com projetos reais.",
                modules: [
                    "Fundamentos de HTML5 e CSS3",
                    "JavaScript Moderno (ES6+)",
                    "React.js e Hooks",
                    "Node.js e Express",
                    "Banco de Dados MongoDB",
                    "Deploy e DevOps",
                    "Projeto Final: E-commerce Completo"
                ],
                features: [
                    "Certificado de conclusão",
                    "Acesso vitalício",
                    "Projetos práticos",
                    "Suporte individual",
                    "Atualizações gratuitas",
                    "Comunidade exclusiva"
                ],
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&w=600"
            },
            2: {
                title: "UI/UX Design Profissional",
                instructor: "Profa. Maria Santos",
                category: "Design",
                price: 247,
                originalPrice: 497,
                rating: 4.8,
                reviews: 1500,
                duration: "36 horas",
                level: "Iniciante ao Intermediário",
                students: 6200,
                lastUpdated: "Fevereiro 2024",
                description: "Domine as principais ferramentas e metodologias de Design de Interface e Experiência do Usuário. Crie designs incríveis e funcionais.",
                modules: [
                    "Fundamentos de UI/UX",
                    "Figma do Básico ao Avançado",
                    "Design System",
                    "Prototipagem Interativa",
                    "Testes de Usabilidade",
                    "Design Responsivo",
                    "Portfólio Profissional"
                ],
                features: [
                    "Certificado de conclusão", 
                    "Templates exclusivos",
                    "Mentoria em grupo",
                    "Review de portfólio",
                    "Preparação para entrevistas",
                    "Networking com designers"
                ],
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&w=600"
            },
            3: {
                title: "Data Science e Machine Learning",
                instructor: "Prof. Carlos Oliveira", 
                category: "Tecnologia",
                price: 397,
                originalPrice: 797,
                rating: 4.9,
                reviews: 1800,
                duration: "48 horas",
                level: "Intermediário ao Avançado",
                students: 5200,
                lastUpdated: "Março 2024",
                description: "Aprenda Data Science do zero até modelos complexos de Machine Learning. Python, Pandas, Scikit-learn, TensorFlow e projetos reais.",
                modules: [
                    "Python para Data Science",
                    "Análise Exploratória de Dados",
                    "Estatística e Probabilidade",
                    "Machine Learning Básico",
                    "Deep Learning e Redes Neurais",
                    "Processamento de Linguagem Natural",
                    "Projeto Final: Sistema de Recomendação"
                ],
                features: [
                    "Certificado de conclusão",
                    "Dataset exclusivos", 
                    "Code-along sessions",
                    "Suporte técnico",
                    "Preparação para o mercado",
                    "Projetos com dados reais"
                ],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=600"
            }
        };
        
        this.init();
    }

    init() {
        this.setupScrollEffects();
        this.setupFormHandlers();
        this.setupModalHandlers();
        this.setupCategoryFilters();
        this.setupAnimations();
    }

    setupScrollEffects() {
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scroll para links internos
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
    }

    setupFormHandlers() {
        const ctaForm = document.getElementById('ctaForm');
        const submitBtn = document.getElementById('submitBtn');
        const buttonText = document.getElementById('buttonText');

        ctaForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = ctaForm.querySelector('input[type="email"]').value;
            
            // Simular loading
            submitBtn.disabled = true;
            buttonText.innerHTML = '<div class="loading"></div>';
            
            // Simular requisição API
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Sucesso
            buttonText.textContent = 'Email Cadastrado!';
            submitBtn.style.background = 'var(--secondary)';
            
            // Reset após 3 segundos
            setTimeout(() => {
                submitBtn.disabled = false;
                buttonText.textContent = 'Começar Agora';
                submitBtn.style.background = '';
                ctaForm.reset();
            }, 3000);
        });
    }

    setupModalHandlers() {
        const modal = document.getElementById('courseModal');
        const closeBtn = document.getElementById('closeModal');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Fechar modal com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }

    setupCategoryFilters() {
        const categoryCards = document.querySelectorAll('.category-card');
        
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                this.filterCoursesByCategory(category);
                
                // Scroll para cursos
                document.getElementById('courses').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    filterCoursesByCategory(category) {
        // Aqui você implementaria a filtragem real dos cursos
        console.log(`Filtrando cursos por categoria: ${category}`);
        
        // Feedback visual
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.style.borderColor = 'transparent';
        });
        
        const activeCard = document.querySelector(`[data-category="${category}"]`);
        if (activeCard) {
            activeCard.style.borderColor = 'var(--primary)';
        }
    }

    setupAnimations() {
        // Animação de contadores
        this.setupCounters();
        
        // Observer para animações on scroll
        this.setupIntersectionObserver();
    }

    setupCounters() {
        const counters = [
            { element: '.stat-number', target: 50000, suffix: '+' },
            { element: '.stat-number', target: 1200, suffix: '+' },
            { element: '.stat-number', target: 98, suffix: '%' }
        ];

        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    this.animateCounters();
                    animated = true;
                }
            });
        });

        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            observer.observe(heroSection);
        }
    }

    animateCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const targets = [50000, 1200, 98];
        
        statNumbers.forEach((element, index) => {
            let current = 0;
            const target = targets[index];
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + (index === 2 ? '%' : '+');
            }, 20);
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.course-card, .feature-item, .testimonial-card').forEach(el => {
            observer.observe(el);
        });
    }

    openCourseModal(courseId) {
        const course = this.courses[courseId];
        if (!course) return;

        const modal = document.getElementById('courseModal');
        const modalContent = document.getElementById('modalContent');

        modalContent.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
                <img src="${course.image}" alt="${course.title}" style="width: 100%; height: 400px; object-fit: cover;">
                <div style="padding: 2rem;">
                    <span class="course-category">${course.category}</span>
                    <h2 style="margin: 1rem 0; font-size: 1.5rem;">${course.title}</h2>
                    <div class="course-instructor" style="margin-bottom: 1rem;">
                        <div class="instructor-avatar"></div>
                        <span>${course.instructor}</span>
                    </div>
                    <div class="course-rating" style="margin-bottom: 1rem;">
                        ⭐⭐⭐⭐⭐ <span>${course.rating} (${course.reviews} avaliações)</span>
                    </div>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.9rem;">
                        <span>⏱️ ${course.duration}</span>
                        <span>📊 ${course.level}</span>
                        <span>👥 ${course.students} alunos</span>
                    </div>
                    <p style="color: var(--gray); margin-bottom: 1.5rem;">${course.description}</p>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <h4 style="margin-bottom: 0.5rem;">O que você vai aprender:</h4>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                            ${course.modules.map(module => `
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="color: var(--secondary);">✓</span>
                                    <span style="font-size: 0.9rem;">${module}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div style="border-top: 1px solid var(--gray-light); padding-top: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <div>
                                <span style="font-size: 2rem; font-weight: 700; color: var(--primary);">
                                    R$ ${course.price},00
                                </span>
                                <span style="color: var(--gray); text-decoration: line-through; margin-left: 0.5rem;">
                                    R$ ${course.originalPrice},00
                                </span>
                            </div>
                            <div style="background: var(--danger); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem;">
                                ${Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                            </div>
                        </div>
                        <button class="btn btn-primary" style="width: 100%; margin-bottom: 0.5rem;">
                            Comprar Agora
                        </button>
                        <button class="btn btn-outline" style="width: 100%;">
                            Adicionar à Lista de Desejos
                        </button>
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'block';
    }
}

// Inicializar a aplicação
document.addEventListener('DOMContentLoaded', () => {
    window.learnPlusApp = new LearnPlusApp();
});

// Função global para abrir modal
function openCourseModal(courseId) {
    if (window.learnPlusApp) {
        window.learnPlusApp.openCourseModal(courseId);
    }
}

// Adicionar estilos para animações
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .course-card, .feature-item, .testimonial-card {
        opacity: 0;
    }
    
    .category-card {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);
