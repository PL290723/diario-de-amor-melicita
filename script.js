// Sistema de generación de mensajes dinámicos
const messageComponents = {
    greetings: {
        morning: ["¡Buenos días", "¡Feliz mañana", "¡Hola", "¡Amanecer hermoso"],
        afternoon: ["¡Buenas tardes", "¡Hola", "¡Tarde perfecta", "¡Qué hermosa tarde"],
        evening: ["¡Buenas noches se acercan", "¡Atardecer mágico", "¡Hola", "¡Noche hermosa"],
        night: ["¡Buenas noches", "¡Dulces sueños", "¡Noche estrellada", "¡Hora de descansar"]
    },
    terms: ["mi vida", "mi amor", "mi corazón", "mi princesa", "mi reina", "mi estrella", "mi tesoro", "mi cielo", "mi sol"],
    compliments: [
        "eres la razón de mi felicidad",
        "tu sonrisa ilumina mi mundo",
        "eres más hermosa que las estrellas",
        "tu amor me da fuerzas",
        "eres mi inspiración diaria",
        "tu belleza interior me fascina",
        "eres mi persona favorita",
        "tu risa es mi melodía preferida",
        "eres mi hogar y mi aventura",
        "tu amor es mi tesoro más preciado"
    ],
    emotions: [
        "Cada día me enamoro más de ti",
        "Mi corazón late más fuerte cuando pienso en ti",
        "Eres mi sueño hecho realidad",
        "Contigo he encontrado la felicidad verdadera",
        "Tu amor es mi refugio y mi fortaleza",
        "Eres la respuesta a todas mis oraciones",
        "Mi alma encuentra paz cuando estás cerca",
        "Eres mi complemento perfecto"
    ],
    wishes: [
        "Que tengas un día tan hermoso como tú",
        "Espero que todos tus sueños se cumplan",
        "Que la felicidad te acompañe siempre",
        "Deseo llenarte de amor y alegría",
        "Que cada momento sea especial para ti",
        "Espero verte sonreír todo el día",
        "Que el amor nos mantenga siempre unidos",
        "Deseo ser la razón de tu felicidad"
    ],
    motivational: [
        "Eres más fuerte de lo que imaginas",
        "No hay nada que no puedas lograr",
        "Tus sueños están esperando por ti",
        "Eres capaz de cosas increíbles",
        "Tu determinación me inspira",
        "Brillas con luz propia",
        "Eres una mujer extraordinaria",
        "El mundo necesita tu magia"
    ],
    emojis: ["💜", "💙", "✨", "🌟", "💕", "🌸", "🦋", "🌺", "💫", "🌙", "☀️", "🌈", "💎", "🌹", "👑", "💖"]
};

// Función para generar un mensaje único y personalizado
function generateUniqueMessage(timeOfDay, isMotivational = false, isSpecial = false) {
    if (isSpecial) {
        return generateSpecialMessage();
    }
    
    if (isMotivational) {
        return generateMotivationalMessage();
    }
    
    const greeting = getRandomFromArray(messageComponents.greetings[timeOfDay]);
    const term = getRandomFromArray(messageComponents.terms);
    const compliment = getRandomFromArray(messageComponents.compliments);
    const emotion = getRandomFromArray(messageComponents.emotions);
    const wish = getRandomFromArray(messageComponents.wishes);
    const emoji1 = getRandomFromArray(messageComponents.emojis);
    const emoji2 = getRandomFromArray(messageComponents.emojis);
    
    // Diferentes estructuras de mensajes para variedad
    const structures = [
        `${greeting}, ${term}! ${emoji1} ${compliment.charAt(0).toUpperCase() + compliment.slice(1)}. ${emotion}. ${wish}. ${emoji2}`,
        `${greeting}, ${term}! ${emotion}. ${emoji1} ${compliment.charAt(0).toUpperCase() + compliment.slice(1)}. ${wish}. ${emoji2}`,
        `${emoji1} ${greeting}, ${term}! ${wish}. ${compliment.charAt(0).toUpperCase() + compliment.slice(1)} y ${emotion.toLowerCase()}. ${emoji2}`,
        `${greeting}, ${term} hermosa! ${emoji1} ${emotion}. ${compliment.charAt(0).toUpperCase() + compliment.slice(1)}. ${wish}. ${emoji2}`,
        `${term.charAt(0).toUpperCase() + term.slice(1)}, ${greeting.toLowerCase()}! ${emoji1} ${compliment.charAt(0).toUpperCase() + compliment.slice(1)}. ${emotion}. ${wish}. ${emoji2}`
    ];
    
    return getRandomFromArray(structures);
}

// Función para generar mensajes motivacionales únicos
function generateMotivationalMessage() {
    const term = getRandomFromArray(messageComponents.terms);
    const motivational = getRandomFromArray(messageComponents.motivational);
    const compliment = getRandomFromArray(messageComponents.compliments);
    const emoji1 = getRandomFromArray(messageComponents.emojis);
    const emoji2 = getRandomFromArray(messageComponents.emojis);
    
    const motivationalStructures = [
        `${term.charAt(0).toUpperCase() + term.slice(1)}, ${motivational.toLowerCase()}! ${emoji1} ${compliment.charAt(0).toUpperCase() + compliment.slice(1)}. ¡Yo creo en ti siempre! ${emoji2}`,
        `¡Recuerda, ${term}! ${motivational} ${emoji1} ${compliment.charAt(0).toUpperCase() + compliment.slice(1)} y eso te hace imparable. ${emoji2}`,
        `${emoji1} ${term.charAt(0).toUpperCase() + term.slice(1)}, ${motivational.toLowerCase()}. ${compliment.charAt(0).toUpperCase() + compliment.slice(1)}. ¡Adelante, mi campeona! ${emoji2}`,
        `¡Oye, ${term}! ${motivational} ${emoji1} ${compliment.charAt(0).toUpperCase() + compliment.slice(1)}. El mundo necesita ver tu brillo. ${emoji2}`
    ];
    
    return getRandomFromArray(motivationalStructures);
}

// Función para generar mensajes especiales únicos
function generateSpecialMessage() {
    const term = getRandomFromArray(messageComponents.terms);
    const emotion = getRandomFromArray(messageComponents.emotions);
    const compliment = getRandomFromArray(messageComponents.compliments);
    const emoji1 = getRandomFromArray(messageComponents.emojis.slice(0, 4)); // Emojis más románticos
    const emoji2 = getRandomFromArray(messageComponents.emojis.slice(0, 4));
    
    const specialStructures = [
        `¿Sabías que ${compliment.toLowerCase()}? ${emoji1} ${emotion}. ${term.charAt(0).toUpperCase() + term.slice(1)}, eres mi universo completo. ${emoji2}`,
        `${term.charAt(0).toUpperCase() + term.slice(1)}, ${emotion.toLowerCase()}. ${emoji1} ${compliment.charAt(0).toUpperCase() + compliment.slice(1)} y eso me hace el más afortunado. ${emoji2}`,
        `Desde que llegaste a mi vida, ${compliment.toLowerCase()}. ${emoji1} ${emotion}. Gracias por ser tú, ${term}. ${emoji2}`,
        `${emoji1} ${term.charAt(0).toUpperCase() + term.slice(1)}, ${emotion.toLowerCase()}. ${compliment.charAt(0).toUpperCase() + compliment.slice(1)} y cada día descubro algo nuevo que me enamora. ${emoji2}`
    ];
    
    return getRandomFromArray(specialStructures);
}

// Función auxiliar para obtener elemento aleatorio de un array
function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Configuración de la aplicación
const config = {
    startDate: new Date('2025-06-13'), // Fecha cuando empezaron su relación ❤️
    messagesCounter: parseInt(localStorage.getItem('messagesCounter')) || 1,
    lastMessageHour: parseInt(localStorage.getItem('lastMessageHour')) || -1
};

// Referencias a elementos del DOM
const elements = {
    currentDate: document.getElementById('currentDate'),
    currentTime: document.getElementById('currentTime'),
    loveMessage: document.getElementById('loveMessage'),
    messageTime: document.getElementById('messageTime'),
    daysCounter: document.getElementById('daysCounter'),
    hoursCounter: document.getElementById('hoursCounter'),
    messagesCounter: document.getElementById('messagesCounter'),
    nextMessageTime: document.getElementById('nextMessageTime')
};

// Función para obtener un mensaje basado en la hora
function getMessageByTime(hour) {
    if (hour >= 6 && hour < 12) {
        return generateUniqueMessage('morning');
    } else if (hour >= 12 && hour < 18) {
        return generateUniqueMessage('afternoon');
    } else if (hour >= 18 && hour < 22) {
        return generateUniqueMessage('evening');
    } else {
        return generateUniqueMessage('night');
    }
}

// Función para obtener un mensaje especial ocasionalmente
function getSpecialMessage() {
    // 25% de probabilidad de mensaje especial
    if (Math.random() < 0.25) {
        return generateUniqueMessage('morning', false, true);
    }
    // 35% de probabilidad de mensaje motivacional
    if (Math.random() < 0.35) {
        const timeOfDay = getCurrentTimeOfDay();
        return generateUniqueMessage(timeOfDay, true, false);
    }
    return null;
}

// Función auxiliar para obtener el momento del día actual
function getCurrentTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 18) return 'afternoon';
    if (hour >= 18 && hour < 22) return 'evening';
    return 'night';
}

// Función para formatear la fecha
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('es-ES', options);
}

// Función para formatear la hora
function formatTime(date) {
    return date.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
}

// Función para calcular días juntos
function calculateDaysTogether() {
    const now = new Date();
    const diffTime = Math.abs(now - config.startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Función para calcular horas de amor
function calculateHoursOfLove() {
    const now = new Date();
    const diffTime = Math.abs(now - config.startDate);
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    return diffHours;
}

// Función para actualizar el mensaje
function updateMessage() {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Solo actualizar si es una nueva hora
    if (currentHour !== config.lastMessageHour) {
        let message = getSpecialMessage() || getMessageByTime(currentHour);
        
        elements.loveMessage.innerHTML = message;
        elements.messageTime.textContent = `Mensaje enviado a las ${formatTime(now)}`;
        
        // Actualizar contador de mensajes
        config.messagesCounter++;
        elements.messagesCounter.textContent = config.messagesCounter;
        
        // Guardar en localStorage
        localStorage.setItem('messagesCounter', config.messagesCounter);
        localStorage.setItem('lastMessageHour', currentHour);
        config.lastMessageHour = currentHour;
        
        // Animación del mensaje
        elements.loveMessage.parentElement.style.animation = 'none';
        setTimeout(() => {
            elements.loveMessage.parentElement.style.animation = 'glow 3s ease-in-out infinite alternate';
        }, 10);
    }
}

// Función para calcular tiempo hasta el próximo mensaje
function updateNextMessageTime() {
    const now = new Date();
    const nextHour = new Date(now);
    nextHour.setHours(now.getHours() + 1, 0, 0, 0);
    
    const timeDiff = nextHour - now;
    const minutes = Math.floor(timeDiff / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    elements.nextMessageTime.textContent = `${minutes}m ${seconds}s`;
}

// Función para actualizar toda la información
function updateDisplay() {
    const now = new Date();
    
    // Actualizar fecha y hora
    elements.currentDate.textContent = formatDate(now);
    elements.currentTime.textContent = formatTime(now);
    
    // Actualizar contadores
    elements.daysCounter.textContent = calculateDaysTogether();
    elements.hoursCounter.textContent = calculateHoursOfLove().toLocaleString();
    
    // Actualizar mensaje si es necesario
    updateMessage();
    
    // Actualizar tiempo hasta próximo mensaje
    updateNextMessageTime();
}

// Función para crear efectos de partículas
function createParticleEffect() {
    const particles = ['💜', '💙', '✨', '💫', '🌟', '💕', '🦋', '🌸'];
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.fontSize = Math.random() * 20 + 15 + 'px';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';
    particle.textContent = particles[Math.floor(Math.random() * particles.length)];
    particle.style.animation = `float ${Math.random() * 3 + 4}s ease-out forwards`;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

// Función de inicialización
function init() {
    // Actualizar display inmediatamente
    updateDisplay();
    
    // Si es el primer mensaje o no hay mensaje para esta hora
    if (config.lastMessageHour === -1) {
        const now = new Date();
        const welcomeMessages = [
            "¡Hola mi amor! 💜 Bienvenida a nuestro diario especial. Aquí recibirás mensajes de amor únicos cada hora, hechos especialmente para ti con todo mi corazón.",
            "¡Mi vida hermosa! ✨ He creado este espacio mágico lleno de amor para recordarte cada hora lo increíblemente especial que eres para mí y cuánto te amo.",
            "¡Mi corazón! 💙 Este es nuestro rincón romántico donde el amor nunca duerme y siempre hay un mensaje único esperándote, generado especialmente para ti.",
            "¡Mi princesa! 🌟 Desde el 13 de junio de 2025, cada hora es una nueva oportunidad para decirte lo mucho que significas para mí. ¡Bienvenida a nuestro diario de amor!"
        ];
        
        elements.loveMessage.innerHTML = getRandomFromArray(welcomeMessages);
        elements.messageTime.textContent = `Mensaje de bienvenida - ${formatTime(now)}`;
    }
    
    // Actualizar cada segundo
    setInterval(updateDisplay, 1000);
    
    // Crear efectos de partículas cada 8 segundos (más frecuente para más romance)
    setInterval(createParticleEffect, 8000);
    
    // Efecto inicial de partículas
    setTimeout(createParticleEffect, 1500);
    
    // Efecto especial cada 30 segundos para más magia
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% de probabilidad
            createParticleEffect();
        }
    }, 30000);
}

// Agregar estilos para la animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Agregar event listeners para interactividad
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Efecto de click en el mensaje
    elements.loveMessage.addEventListener('click', () => {
        createParticleEffect();
        // Pequeña animación de "like"
        elements.loveMessage.style.transform = 'scale(1.05)';
        setTimeout(() => {
            elements.loveMessage.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Efecto hover en los contadores
    const counterItems = document.querySelectorAll('.counter-item');
    counterItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            createParticleEffect();
        });
    });
});

// Detectar cuando la página se vuelve visible (cuando regresa de otra pestaña)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        updateDisplay();
    }
});

// Función para compartir (bonus)
function shareMessage() {
    const message = elements.loveMessage.textContent;
    if (navigator.share) {
        navigator.share({
            title: 'Mensaje de Amor',
            text: message,
            url: window.location.href
        });
    } else {
        // Fallback: copiar al portapapeles
        if (navigator.clipboard) {
            navigator.clipboard.writeText(message);
            alert('¡Mensaje copiado al portapapeles! 💜');
        }
    }
}
