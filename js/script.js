// --- КОЭФФИЦИЕНТЫ МОДЕЛЕЙ ---

const cd81 = [
    { id: 'RELY', name: 'Надежность (RELY)', vals: { vlow: 0.75, low: 0.88, nom: 1.0, high: 1.15, vhigh: 1.40 } },
    { id: 'DATA', name: 'Размер БД (DATA)', vals: { low: 0.94, nom: 1.0, high: 1.08, vhigh: 1.16 } },
    { id: 'CPLX', name: 'Сложность (CPLX)', vals: { vlow: 0.7, low: 0.85, nom: 1.0, high: 1.15, vhigh: 1.3, exhigh: 1.65 } },
    { id: 'TIME', name: 'Огр. времени (TIME)', vals: { nom: 1.0, high: 1.11, vhigh: 1.3, exhigh: 1.66 } },
    { id: 'STOR', name: 'Огр. памяти (STOR)', vals: { nom: 1.0, high: 1.06, vhigh: 1.21, exhigh: 1.56 } },
    { id: 'VIRT', name: 'Неуст. платформы (VIRT)', vals: { low: 0.87, nom: 1.0, high: 1.15, vhigh: 1.3 } },
    { id: 'TURN', name: 'Время отклика (TURN)', vals: { low: 0.87, nom: 1.0, high: 1.07, vhigh: 1.15 } },
    { id: 'ACAP', name: 'Способности аналитика (ACAP)', vals: { vlow: 1.46, low: 1.19, nom: 1.0, high: 0.86, vhigh: 0.71 } },
    { id: 'AEXP', name: 'Опыт приложений (AEXP)', vals: { vlow: 1.29, low: 1.13, nom: 1.0, high: 0.91, vhigh: 0.82 } },
    { id: 'PCAP', name: 'Способности прогр. (PCAP)', vals: { vlow: 1.42, low: 1.17, nom: 1.0, high: 0.86, vhigh: 0.7 } },
    { id: 'VEXP', name: 'Опыт платформы (VEXP)', vals: { vlow: 1.21, low: 1.1, nom: 1.0, high: 0.9 } },
    { id: 'LEXP', name: 'Опыт языка (LEXP)', vals: { vlow: 1.14, low: 1.07, nom: 1.0, high: 0.95 } },
    { id: 'MODP', name: 'Методы ПО (MODP)', vals: { vlow: 1.24, low: 1.1, nom: 1.0, high: 0.91, vhigh: 0.82 } },
    { id: 'TOOL', name: 'Инструментарий (TOOL)', vals: { vlow: 1.24, low: 1.1, nom: 1.0, high: 0.91, vhigh: 0.83 } },
    { id: 'SCED', name: 'График (SCED)', vals: { vlow: 1.23, low: 1.08, nom: 1.0, high: 1.04, vhigh: 1.1 } }
];

const cdPostArch = [
    { id: 'RELY', name: 'Reliability (RELY)', vals: { vlow: 0.82, low: 0.92, nom: 1.0, high: 1.10, vhigh: 1.26 } },
    { id: 'DATA', name: 'Database Size (DATA)', vals: { low: 0.90, nom: 1.0, high: 1.14, vhigh: 1.28 } },
    { id: 'CPLX', name: 'Complexity (CPLX)', vals: { vlow: 0.73, low: 0.87, nom: 1.0, high: 1.17, vhigh: 1.34, exhigh: 1.74 } },
    { id: 'RUSE', name: 'Reusability (RUSE)', vals: { low: 0.95, nom: 1.0, high: 1.07, vhigh: 1.15, exhigh: 1.24 } },
    { id: 'DOCU', name: 'Documentation (DOCU)', vals: { vlow: 0.81, low: 0.91, nom: 1.0, high: 1.11, vhigh: 1.23 } },
    { id: 'TIME', name: 'Execution Time (TIME)', vals: { nom: 1.0, high: 1.11, vhigh: 1.29, exhigh: 1.63 } },
    { id: 'STOR', name: 'Main Storage (STOR)', vals: { nom: 1.0, high: 1.05, vhigh: 1.17, exhigh: 1.46 } },
    { id: 'PVOL', name: 'Platform Volatility (PVOL)', vals: { low: 0.87, nom: 1.0, high: 1.15, vhigh: 1.30 } },
    { id: 'ACAP', name: 'Analyst Capability (ACAP)', vals: { vlow: 1.42, low: 1.19, nom: 1.0, high: 0.85, vhigh: 0.71 } },
    { id: 'PCAP', name: 'Programmer Capability (PCAP)', vals: { vlow: 1.34, low: 1.15, nom: 1.0, high: 0.88, vhigh: 0.76 } },
    { id: 'PCON', name: 'Personnel Continuity (PCON)', vals: { vlow: 1.29, low: 1.12, nom: 1.0, high: 0.90, vhigh: 0.81 } },
    { id: 'AEXP', name: 'Applications Experience (AEXP)', vals: { vlow: 1.22, low: 1.10, nom: 1.0, high: 0.88, vhigh: 0.81 } },
    { id: 'PEXP', name: 'Platform Experience (PEXP)', vals: { vlow: 1.19, low: 1.09, nom: 1.0, high: 0.91, vhigh: 0.85 } },
    { id: 'LTEX', name: 'Language/Tool Exp. (LTEX)', vals: { vlow: 1.20, low: 1.09, nom: 1.0, high: 0.91, vhigh: 0.84 } },
    { id: 'TOOL', name: 'Use of SW Tools (TOOL)', vals: { vlow: 1.17, low: 1.09, nom: 1.0, high: 0.90, vhigh: 0.78 } },
    { id: 'SITE', name: 'Multisite Dev. (SITE)', vals: { vlow: 1.22, low: 1.09, nom: 1.0, high: 0.93, vhigh: 0.86, exhigh: 0.80 } },
    { id: 'SCED', name: 'Schedule (SCED)', vals: { vlow: 1.43, low: 1.14, nom: 1.0, high: 1.00, vhigh: 1.00 } }
];

const edData = [
    { id: 'PERS', name: 'Personnel (PERS)', vals: { exlow: 2.12, vlow: 1.62, low: 1.26, nom: 1.0, high: 0.83, vhigh: 0.63, exhigh: 0.5 } },
    { id: 'RCPX', name: 'Reliability/Comp. (RCPX)', vals: { exlow: 0.49, vlow: 0.60, low: 0.83, nom: 1.0, high: 1.33, vhigh: 1.91, exhigh: 2.72 } },
    { id: 'RUSE', name: 'Reusability (RUSE)', vals: { low: 0.95, nom: 1.0, high: 1.07, vhigh: 1.15, exhigh: 1.24 } },
    { id: 'PDIF', name: 'Platform Diff. (PDIF)', vals: { low: 0.87, nom: 1.0, high: 1.29, vhigh: 1.81, exhigh: 2.61 } },
    { id: 'PREX', name: 'Personnel Exp. (PREX)', vals: { exlow: 1.59, vlow: 1.33, low: 1.22, nom: 1.0, high: 0.87, vhigh: 0.74, exhigh: 0.62 } },
    { id: 'FCIL', name: 'Facilities (FCIL)', vals: { exlow: 1.43, vlow: 1.30, low: 1.10, nom: 1.0, high: 0.87, vhigh: 0.73, exhigh: 0.62 } },
    { id: 'SCED', name: 'Schedule (SCED)', vals: { vlow: 1.43, low: 1.14, nom: 1.0, high: 1.0 } }
];

const sfData = [
    { id: 'PREC', name: 'PREC (Прецедентность)', vals: { vlow: 6.2, low: 4.96, nom: 3.72, high: 2.48, vhigh: 1.24, exhigh: 0 } },
    { id: 'FLEX', name: 'FLEX (Гибкость)', vals: { vlow: 5.07, low: 4.05, nom: 3.04, high: 2.03, vhigh: 1.01, exhigh: 0 } },
    { id: 'RESL', name: 'RESL (Архитектура)', vals: { vlow: 7.07, low: 5.65, nom: 4.24, high: 2.83, vhigh: 1.41, exhigh: 0 } },
    { id: 'TEAM', name: 'TEAM (Сплоченность)', vals: { vlow: 5.48, low: 4.38, nom: 3.29, high: 2.19, vhigh: 1.1, exhigh: 0 } },
    { id: 'PMAT', name: 'PMAT (Зрелость)', vals: { vlow: 7.8, low: 6.24, nom: 4.68, high: 3.12, vhigh: 1.56, exhigh: 0 } }
];

const modelDescriptions = {
    basic: "Базовая модель (Basic COCOMO) — это статическая одноразмерная модель, которая вычисляет затраты программной разработки (и стоимость) как функцию размера программы, выраженную в количестве строк исходного кода (KSLOC). Оценка использует только базовые коэффициенты для трех типов проектов и подходит для ранней, быстрой прикидки.",
    intermediate: "Промежуточная модель (Intermediate COCOMO) — расширяет базовую модель за счет введения 15 атрибутов стоимости (Cost Drivers), оценивающих программный продукт, аппаратную платформу, персонал и современные методы разработки. Это позволяет существенно повысить точность расчетов за счет коэффициента EAF.",
    early_design: "Модель раннего проектирования (COCOMO II Early Design) — применяется на этапах, когда архитектура системы еще полностью не определена. Использует укрупненные 7 факторов стоимости (вместо 17) и 5 факторов масштаба (Scale Factors) для прогнозирования базовой трудоемкости проекта.",
    post_architecture: "Пост-архитектурная модель (COCOMO II Post-Architecture) — наиболее детальная модель COCOMO II. Используется в процессе фактической разработки и сопровождения ПО. Оценка включает 5 факторов масштаба и полный набор из 17 детальных атрибутов стоимости (Cost Drivers)."
};

// --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ---

function render(data, targetId) {
    const cont = document.getElementById(targetId);
    cont.innerHTML = '';
    data.forEach(d => {
        let html = `<div class="radio-group"><h4>${d.name}</h4><div class="radio-options">`;
        Object.entries(d.vals).forEach(([lvl, val]) => {
            let chk = lvl === 'nom' ? 'checked' : '';
            html += `<label><input type="radio" name="${d.id}" value="${val}" ${chk}> ${lvl.toUpperCase()} (${val})</label>`;
        });
        cont.innerHTML += html + `</div></div>`;
    });
}

function updateDescription(modelKey) {
    document.getElementById('model-desc-text').innerText = modelDescriptions[modelKey] || "";
}

// --- НАВИГАЦИЯ (ВКЛАДКИ) ---
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.id-tab-content').forEach(c => c.style.display = 'none');
        
        e.target.classList.add('active');
        const targetTab = e.target.getAttribute('data-tab');
        document.getElementById(targetTab).style.display = (targetTab === 'calc-tab') ? 'grid' : 'block';
    };
});

// --- ОБРАБОТЧИКИ СОБЫТИЙ ---

document.getElementById('declineBtn').onclick = () => {
    alert("Вы не сможете пользоваться продуктом без принятия лицензионного соглашения.");
};

document.getElementById('acceptBtn').onclick = () => {
    document.getElementById('eula-overlay').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    
    // Принудительно триггерим обработчик, чтобы установить Basic при старте
    document.getElementById('model-select').dispatchEvent(new Event('change'));
};

document.getElementById('model-select').onchange = (e) => {
    const m = e.target.value;
    
    // Управление видимостью селектора типов и факторов масштаба
    document.getElementById('type-container').style.display = (m === 'basic' || m === 'intermediate') ? 'block' : 'none';
    document.getElementById('sf-card').style.display = (m.includes('early') || m.includes('post')) ? 'block' : 'none';
    
    // Полное скрытие блока Cost Drivers для Basic, отображение для остальных моделей
    document.getElementById('cd-card').style.display = (m === 'basic') ? 'none' : 'block';
    
    // Отрисовка атрибутов стоимости
    if (m === 'intermediate') render(cd81, 'cd-container');
    else if (m === 'early_design') render(edData, 'cd-container');
    else if (m === 'post_architecture') render(cdPostArch, 'cd-container');
    else render([], 'cd-container');

    // Отрисовка факторов масштаба
    if (m.includes('early') || m.includes('post')) render(sfData, 'sf-container');
    
    updateDescription(m);
};

document.getElementById('calcBtn').onclick = () => {
    const size = parseFloat(document.getElementById('size-input').value);
    const model = document.getElementById('model-select').value;
    const type = document.getElementById('type-select').value;
    
    if (!size || size <= 0) {
        alert("Введите корректный объем кода!");
        return;
    }

    let pm = 0, tm = 0;

    if (model === 'basic' || model === 'intermediate') {
        const table = {
            organic: { ab: 2.4, bb: 1.05, ai: 3.2, bi: 1.05, c: 2.5, d: 0.38 },
            semidetached: { ab: 3.0, bb: 1.12, ai: 3.0, bi: 1.12, c: 2.5, d: 0.35 },
            embedded: { ab: 3.6, bb: 1.2, ai: 2.8, bi: 1.2, c: 2.5, d: 0.32 }
        };
        const cfg = table[type];
        let eaf = 1.0;
        
        if (model === 'intermediate') {
            document.querySelectorAll('#cd-container input:checked').forEach(i => eaf *= parseFloat(i.value));
        }
        
        pm = (model === 'basic' ? cfg.ab : cfg.ai) * Math.pow(size, (model === 'basic' ? cfg.bb : cfg.bi)) * eaf;
        tm = cfg.c * Math.pow(pm, cfg.d);
    } 
    else {
        let sumSF = 0;
        document.querySelectorAll('#sf-container input:checked').forEach(i => sumSF += parseFloat(i.value));
        
        let E = 0.91 + (0.01 * sumSF);
        let eaf = 1.0;
        document.querySelectorAll('#cd-container input:checked').forEach(i => eaf *= parseFloat(i.value));
        
        const A = (model === 'early_design') ? 2.94 : 2.45;
        pm = A * Math.pow(size, E) * eaf;
        tm = 3.67 * Math.pow(pm, (0.28 + 0.2 * (E - 0.91)));
    }
    
    document.getElementById('pm-out').innerText = pm.toFixed(2);
    document.getElementById('tm-out').innerText = tm.toFixed(2);
    document.getElementById('ss-out').innerText = (pm / tm).toFixed(1);
};