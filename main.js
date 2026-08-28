/* ============================================================
   main.js — ONE shared script for the whole site
   - network_lab.html / project.html: no data-page attribute,
     runs the Network Lab section below unconditionally
     (it only touches elements that exist on those two pages).
   - index.html / doc.html / ai.html / linux.html / netsec.html /
     python.html: each IIFE below checks <html data-page="...">
     and only runs its own block on the matching page.
   ============================================================ */

/* ============================================================
   Network Lab — shared script
   - index.html: render the project grid
   - project.html: render a single project (id from ?id=...)
   - lightbox for image previews
   ============================================================ */

/* ---------- Project data ---------- */
const PROJECTS = [
  {
    id: 'p1',
    num: '01',
    title: 'Setting Up an Internal Network',
    tagline: 'Cisco Packet Tracer · Internal Network',
    lead: 'A complete end-to-end simulation of an internal office network. The scenario covers switch and router configuration, DHCP addressing on a dedicated server, mixing DHCP and static clients, default routing to an upstream router, and end-to-end connectivity tests from every PC to the gateway and the simulated Internet.',
    cover: 'images/p1_01.webp',
    images: ['images/p1_01.webp', 'images/p1_05.webp'],
    tags: ['DHCP', 'VLAN', 'Routing', 'Switching', 'End-to-End Test', 'Internal LAN'],
    tools: [
      { icon: 'PT', name: 'Cisco Packet Tracer', desc: 'Network simulation & testing' },
      { icon: 'DH', name: 'DHCP', desc: 'Automatic client addressing' },
      { icon: 'VL', name: 'VLAN', desc: 'Network segmentation & isolation' },
      { icon: 'RT', name: 'Routing', desc: 'Inter-VLAN & default routes' },
      { icon: 'SW', name: 'Switching', desc: 'Access & trunk ports' },
      { icon: 'TC', name: 'Ping / Test', desc: 'Connectivity verification' },
    ],
    stats: [
      { value: '2', label: 'Routers' },
      { value: '1', label: 'Switch' },
      { value: '1', label: 'Server' },
      { value: '3', label: 'PCs' },
    ],
    downloads: [
      { type: 'pkt', label: 'Packet Tracer Project', desc: 'Open the complete Cisco Packet Tracer topology.', file: 'downloads/p1_network.pkt' },
      { type: 'doc', label: 'Project Report', desc: 'Full explanation, addressing, commands, tests and final result.', file: 'downloads/p1_internal_network_report.docx' },
    ],
  },
  {
    id: 'p2',
    num: '02',
    title: 'Tehran University LAN Scenario',
    tagline: 'Cisco Packet Tracer · University LAN',
    lead: 'A realistic university campus LAN scenario. Multiple faculties are connected through departmental routers and a backbone router, each with its own DHCP pool and static routes between them. ACLs are added to restrict traffic between departments, and full end-to-end tests prove that any faculty can reach any other faculty - or not, depending on the policy.',
    cover: 'images/p2_01.webp',
    images: ['images/p2_01.webp', 'images/p2_03.webp', 'images/p2_05.webp', 'images/p2_07.webp'],
    tags: ['DHCP', 'Static Routing', 'ACLs', 'VLAN', 'Campus LAN', 'Multi-Router'],
    tools: [
      { icon: 'PT', name: 'Cisco Packet Tracer', desc: 'Network simulation & testing' },
      { icon: 'DH', name: 'DHCP', desc: 'Per-department pools' },
      { icon: 'SR', name: 'Static Routing', desc: 'Manual path configuration' },
      { icon: 'AC', name: 'ACLs', desc: 'Per-department traffic filtering' },
      { icon: 'VL', name: 'VLAN', desc: 'Department segmentation' },
      { icon: 'RT', name: 'Routers', desc: 'Multi-router topology' },
    ],
    stats: [
      { value: '3', label: 'Routers' },
      { value: '2', label: 'Switches' },
      { value: '2', label: 'PCs' },
      { value: '2', label: 'Departments' },
    ],
    downloads: [
      { type: 'pkt', label: 'Packet Tracer Project', desc: 'Open the complete university LAN topology.', file: 'downloads/p2_lan_university.pkt' },
      { type: 'doc', label: 'Project Report', desc: 'Full scenario walkthrough, configurations, ACLs and tests.', file: 'downloads/p2_university_lan_report.docx' },
    ],
  },
  {
    id: 'p3',
    num: '03',
    title: 'Connecting to Google Web Server',
    tagline: 'Cisco Packet Tracer · End-to-End Internet',
    lead: 'A complete end-to-end simulation of a browser reaching www.google.com. The chain inside Packet Tracer: DHCP leases for the client PCs, DNS resolution on the simulated Google DNS server, PAT/NAT on the edge router so private IPs can reach the public Internet, and a real HTTP and HTTPS request to the simulated Google Web Server.',
    cover: 'images/p3_05.webp',
    images: ['images/p3_01.webp', 'images/p3_05.webp'],
    tags: ['DHCP', 'DNS', 'Routing', 'Default Route', 'NAT / PAT', 'TCP / HTTPS'],
    tools: [
      { icon: 'PT', name: 'Cisco Packet Tracer', desc: 'Network simulation & testing' },
      { icon: 'DH', name: 'DHCP', desc: 'Automatic client addressing' },
      { icon: 'DN', name: 'DNS', desc: 'Domain name resolution' },
      { icon: 'RT', name: 'Routing', desc: 'Static & default routing' },
      { icon: 'NP', name: 'NAT / PAT', desc: 'Inside-to-outside translation' },
      { icon: 'TC', name: 'TCP / HTTPS', desc: 'Application traffic testing' },
    ],
    stats: [
      { value: '3', label: 'PCs' },
      { value: '2', label: 'Routers' },
      { value: '1', label: 'Switch' },
      { value: '2', label: 'Servers' },
    ],
    downloads: [
      { type: 'pkt', label: 'Packet Tracer Project', desc: 'Open the complete Cisco Packet Tracer topology.', file: 'downloads/p3_google_webserver.pkt' },
      { type: 'doc', label: 'Project Report', desc: 'Full explanation, addressing, commands, tests and final result.', file: 'downloads/p3_google_webserver_report.docx' },
    ],
  },
];

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const escape = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ---------- Lightbox ---------- */
const lightboxState = { images: [], index: 0 };

function openLightbox(images, index, caption) {
  lightboxState.images = images;
  lightboxState.index = index;
  const lb = $('#lightbox');
  if (!lb) return;
  $('#lightboxImg').src = images[index];
  $('#lightboxImg').alt = caption || '';
  $('#lightboxCaption').textContent = caption || `Image ${index + 1} of ${images.length}`;
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = $('#lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function lightboxStep(dir) {
  if (!lightboxState.images.length) return;
  const len = lightboxState.images.length;
  lightboxState.index = (lightboxState.index + dir + len) % len;
  $('#lightboxImg').src = lightboxState.images[lightboxState.index];
  $('#lightboxCaption').textContent = `Image ${lightboxState.index + 1} of ${len}`;
}

function setupLightbox() {
  $('#lightboxClose')?.addEventListener('click', closeLightbox);
  $('#lightboxPrev')?.addEventListener('click', () => lightboxStep(-1));
  $('#lightboxNext')?.addEventListener('click', () => lightboxStep(1));
  $('#lightbox')?.addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    const lb = $('#lightbox');
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxStep(-1);
    if (e.key === 'ArrowRight') lightboxStep(1);
  });
}

/* ---------- Smooth scroll for anchor links ---------- */
function setupSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================================
   INDEX PAGE — render project grid
   ============================================================ */
function renderProjectsIndex() {
  const grid = $('#projectsGrid');
  if (!grid) return;
  $('#projectCount').textContent = `${PROJECTS.length} projects`;

  grid.innerHTML = PROJECTS.map(p => `
    <a class="project-tile" href="project.html?id=${p.id}" data-id="${p.id}">
      <div class="project-tile-cover">
        <span class="project-tile-num">PROJECT ${p.num}</span>
        <span class="project-tile-count">${p.images.length} screenshots</span>
        <img src="${p.cover}" alt="${escape(p.title)}" loading="lazy">
      </div>
      <div class="project-tile-body">
        <h3>${escape(p.title)}</h3>
        <p>${escape(p.lead)}</p>
        <div class="project-tile-tags">
          ${p.tags.slice(0, 4).map(t => `<span>${escape(t)}</span>`).join('')}
          ${p.tags.length > 4 ? `<span>+${p.tags.length - 4}</span>` : ''}
        </div>
        <div class="project-tile-cta">
          <span>View project</span>
          <span class="arrow">→</span>
        </div>
      </div>
    </a>
  `).join('');
}

/* ============================================================
   PROJECT PAGE — render single project
   ============================================================ */
function renderProjectPage() {
  const id = getParam('id') || 'p1';
  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];

  // Title and meta
  document.title = `${project.title} — Network Lab | Amirali Gholian`;
  $('#crumbProject').textContent = `Project ${project.num} — ${project.title}`;
  $('#projectTagline').textContent = project.tagline;
  $('#projectTitle').textContent = project.title;
  $('#projectLead').textContent = project.lead;

  // Stats
  $('#projectStats').innerHTML = project.stats.map(s => `
    <div><strong>${s.value}</strong><small>${s.label}</small></div>
  `).join('');

  // Tags
  $('#projectTags').innerHTML = project.tags.map(t => `<span>${escape(t)}</span>`).join('');

  // Cover
  $('#coverImg').src = project.cover;
  $('#coverImg').alt = project.title;
  $('#coverCaption').textContent = `Cover image · ${project.images.length} screenshots total — click any image to enlarge`;
  $('#imageCount').textContent = `${project.images.length} screenshots`;

  // Gallery
  $('#galleryGrid').innerHTML = project.images.map((src, i) => `
    <div class="gallery-item" data-index="${i}">
      <span class="gallery-num">${String(i + 1).padStart(2, '0')}</span>
      <img src="${src}" alt="${escape(project.title)} screenshot ${i + 1}" loading="lazy">
    </div>
  `).join('');

  // Open lightbox on cover click
  $('#coverImg')?.addEventListener('click', () => openLightbox(project.images, 0, `${project.title} — cover`));

  // Open lightbox on gallery click
  $$('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const i = parseInt(item.dataset.index, 10) || 0;
      openLightbox(project.images, i, `${project.title} — image ${i + 1}/${project.images.length}`);
    });
  });

  // Tools (rendered as clickable cards; clicking opens picker if shared with other projects)
  const skillIndex = buildSkillProjectsIndex();
  const toolsGrid = $('#toolsGrid');
  toolsGrid.dataset.currentProject = project.id;
  toolsGrid.innerHTML = project.tools.map(t => {
    const skillKey = normalizeSkillName(t.name);
    const ids = skillIndex[skillKey] || [project.id];
    const href = `project.html?id=${project.id}`;
    const isShared = ids.length > 1;
    return `
    <a class="tool-card${isShared ? ' is-shared' : ''}" href="${href}" data-skill="${escape(skillKey)}" data-projects="${ids.join(',')}">
      <span class="tool-icon">${t.icon}</span>
      <div>
        <h3>${escape(t.name)}</h3>
        <p>${escape(t.desc)}</p>
        <small>${isShared ? `Used in ${ids.length} projects · choose →` : `Only in this project`}</small>
      </div>
    </a>`;
  }).join('');

  // Downloads
  $('#downloadGrid').innerHTML = project.downloads.map(d => `
    <a class="download-card" href="${d.file}" download>
      <span class="file-type ${d.type}">.${d.type.toUpperCase()}</span>
      <div>
        <h3>${escape(d.label)}</h3>
        <p>${escape(d.desc)}</p>
      </div>
      <span class="arrow">↗</span>
    </a>
  `).join('');

  // Other projects
  const others = PROJECTS.filter(p => p.id !== project.id);
  $('#moreGrid').innerHTML = others.map(p => `
    <a class="more-card" href="project.html?id=${p.id}">
      <img src="${p.cover}" alt="${escape(p.title)}">
      <div>
        <h3>${escape(p.title)}</h3>
        <small>${p.images.length} screenshots · ${p.downloads.length} files</small>
      </div>
      <span class="arrow">→</span>
    </a>
  `).join('');
}

/* ============================================================
   SKILL INDEX — map normalized skill name → list of project ids
   Built once from PROJECTS so each tool card knows if it's shared.
   ============================================================ */
function normalizeSkillName(name) {
  return String(name || '').toLowerCase().trim();
}

function buildSkillProjectsIndex() {
  const idx = {};
  PROJECTS.forEach(p => {
    (p.tools || []).forEach(t => {
      const key = normalizeSkillName(t.name);
      if (!idx[key]) idx[key] = [];
      if (!idx[key].includes(p.id)) idx[key].push(p.id);
    });
  });
  return idx;
}

/* ============================================================
   TOAST — non-blocking notification (replaces alert())
   ============================================================ */
const Toast = {
  container: null,
  ensure() {
    if (this.container) return this.container;
    this.container = $('#toastContainer');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toastContainer';
      this.container.className = 'toast-container';
      this.container.setAttribute('aria-live', 'polite');
      this.container.setAttribute('aria-atomic', 'true');
      document.body.appendChild(this.container);
    }
    return this.container;
  },
  show(message, type = 'info', duration = 3200) {
    const c = this.ensure();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'status');
    const icon = type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${escape(message)}</span>`;
    c.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, duration);
  }
};

/* ============================================================
   PICKER MODAL — multi-project skills
   Works on both index and project pages.
   - Shared skill (ids.length > 1) → open picker so user can switch project
   - Single-project skill:
       · on index page → navigate to that project's page
       · on project page → toast "Only used in this project"
   ============================================================ */
function setupSkillPicker() {
  const picker = $('#picker');
  const onProjectPage = !!$('#projectTitle') || document.body.classList.contains('page-project');

  const titleEl  = picker ? $('#pickerTitle')  : null;
  const subEl    = picker ? $('#pickerSub')    : null;
  const listEl   = picker ? $('#pickerList')   : null;
  const closeBtn = picker ? $('#pickerClose')  : null;

  function openPicker(skillName, projectIds) {
    if (!picker) return;
    // Try to detect the current project from the project page (if any)
    const toolsGrid = $('#toolsGrid');
    const currentProjectId = toolsGrid ? toolsGrid.dataset.currentProject : null;

    if (titleEl) titleEl.textContent = `${skillName}  -  choose a project`;
    if (subEl) {
      if (currentProjectId && projectIds.includes(currentProjectId)) {
        subEl.textContent = `This skill is used in ${projectIds.length} projects. Your current project is highlighted below.`;
      } else {
        subEl.textContent = `This skill is used in ${projectIds.length} projects. Pick the one you want to open.`;
      }
    }
    if (listEl) {
      listEl.innerHTML = projectIds.map(id => {
        const proj = PROJECTS.find(p => p.id === id);
        if (!proj) return '';
        const isCurrent = currentProjectId === proj.id;
        return `
          <a class="picker-item${isCurrent ? ' is-current' : ''}" href="project.html?id=${proj.id}" data-id="${proj.id}">
            <span class="picker-item-num">${proj.num}</span>
            <div class="picker-item-body">
              <h4 class="picker-item-title">${escape(proj.title)}</h4>
              <p class="picker-item-sub">${escape(proj.tagline)}</p>
            </div>
            <span class="picker-item-badge">${isCurrent ? 'You are here' : 'Open →'}</span>
          </a>`;
      }).join('');
    }
    picker.classList.add('open');
    picker.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closePicker() {
    if (!picker) return;
    picker.classList.remove('open');
    picker.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Use event delegation so dynamically injected tool cards (rendered
  // AFTER setupSkillPicker runs) still receive clicks.
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.tool-card[data-projects]');
    if (!card) return;
    e.preventDefault();
    const skillName = card.querySelector('h3')?.textContent || 'Skill';
    const ids = (card.dataset.projects || '').split(',').map(s => s.trim()).filter(Boolean);
    const href = card.getAttribute('href') || '#';

    if (typeof console !== 'undefined') console.log('[skill-card]', { skillName, ids, onProjectPage });

    if (ids.length > 1) {
      // Shared skill — open the picker so user can switch
      openPicker(skillName, ids);
    } else if (onProjectPage) {
      // Already on a project page and this skill only lives here → toast
      Toast.show(`${skillName} is already covered by the project you're viewing.`, 'info');
    } else {
      // On index page — navigate to that single project's page
      window.location.href = href;
    }
  });

  // When the user clicks a picker item that targets the project they're already on,
  // don't reload — just show a toast and close the picker.
  if (picker) {
    picker.addEventListener('click', (e) => {
      const item = e.target.closest('.picker-item');
      if (!item || !picker.contains(item)) return;
      const toolsGrid = $('#toolsGrid');
      const currentProjectId = toolsGrid ? toolsGrid.dataset.currentProject : null;
      if (currentProjectId && item.dataset.id === currentProjectId) {
        e.preventDefault();
        closePicker();
        const skillName = (titleEl && titleEl.textContent || '').split(' - ')[0].trim() || 'This skill';
        Toast.show(`${skillName} is already covered by the project you're viewing.`, 'info');
      }
    });
  }

  if (picker) {
    closeBtn?.addEventListener('click', closePicker);
    picker.addEventListener('click', (e) => { if (e.target === picker) closePicker(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && picker.classList.contains('open')) closePicker();
    });
  }
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  setupSmoothScroll();
  setupLightbox();
  setupSkillPicker();

  if ($('#projectsGrid')) renderProjectsIndex();
  if ($('#projectTitle') || document.body.classList.contains('page-project')) renderProjectPage();
});


/* ============================================================
   Shared script for index / doc / ai / linux / netsec / python
   Each block below checks document.documentElement's data-page
   attribute and only runs the code relevant to that page.
   ============================================================ */

/* ============================================================
   main.js — single shared script for the whole site
   Replaces: ai-data.js, linux-data.js, netsec-data.js, python-data.js,
             docs-common.js, doc.js, index.js
   Loaded on every page. Each block checks document.documentElement's
   data-page attribute and only runs the code relevant to that page.
   ============================================================ */

// ==================== SEARCH INDEXES (per docs page) ====================
const pageSearchIndexes = {
  ai: [
    { title: "Introduction to AI & ML", desc: "What AI and ML are, and how they relate", id: "intro" },
    { title: "Types of Machine Learning", desc: "Supervised, unsupervised, reinforcement", id: "ml-types" },
    { title: "Math Foundations", desc: "Linear algebra, calculus, probability", id: "math-foundations" },
    { title: "Environment Setup", desc: "venv, conda, TensorFlow, PyTorch, Jupyter", id: "setup" },
    { title: "NumPy Fundamentals", desc: "Arrays, broadcasting, vectorized ops", id: "numpy" },
    { title: "Pandas for Data Manipulation", desc: "DataFrames, cleaning, grouping, merging", id: "pandas" },
    { title: "Data Visualization", desc: "Matplotlib, Seaborn, distributions, heatmaps", id: "visualization" },
    { title: "Data Preprocessing", desc: "Scaling, encoding, feature engineering", id: "preprocessing" },
    { title: "Scikit-learn Basics", desc: "Pipelines, fit/predict API", id: "sklearn" },
    { title: "Regression Algorithms", desc: "Linear, Ridge, Lasso, tree-based regressors", id: "regression" },
    { title: "Classification Algorithms", desc: "Logistic regression, SVM, trees, boosting", id: "classification" },
    { title: "Clustering & Dim. Reduction", desc: "K-Means, DBSCAN, PCA, t-SNE", id: "clustering" },
    { title: "Ensemble Methods", desc: "Bagging, boosting, stacking, XGBoost", id: "ensemble" },
    { title: "Evaluation Metrics", desc: "Accuracy, precision, recall, F1, ROC-AUC", id: "metrics" },
    { title: "Overfitting & Regularization", desc: "L1/L2, dropout, early stopping", id: "regularization" },
    { title: "Cross-Validation & Tuning", desc: "K-Fold, GridSearchCV, Optuna", id: "tuning" },
    { title: "Neural Network Fundamentals", desc: "Neurons, activations, backpropagation", id: "neural-networks" },
    { title: "TensorFlow & Keras", desc: "Sequential models, compile, fit", id: "tensorflow" },
    { title: "PyTorch", desc: "nn.Module, autograd, training loops", id: "pytorch" },
    { title: "Convolutional Networks", desc: "CNNs for computer vision", id: "cnn" },
    { title: "Recurrent Networks & Sequences", desc: "RNN, LSTM, GRU, Seq2Seq", id: "rnn" },
    { title: "Transformers & Attention", desc: "Self-attention, BERT, GPT architecture", id: "transformers" },
    { title: "Natural Language Processing", desc: "Embeddings, NER, sentiment analysis", id: "nlp" },
    { title: "Computer Vision", desc: "Detection, segmentation, image generation", id: "computer-vision" },
    { title: "Generative AI & LLMs", desc: "LLMs, diffusion models, RAG, RLHF", id: "generative-ai" },
    { title: "Transfer Learning", desc: "Pretrained models, fine-tuning", id: "transfer-learning" },
    { title: "Reinforcement Learning", desc: "Agents, rewards, Q-learning, PPO", id: "reinforcement-learning" },
    { title: "Model Deployment & MLOps", desc: "Serving, versioning, monitoring", id: "deployment" },
    { title: "Ethics & Responsible AI", desc: "Bias, fairness, privacy, explainability", id: "ethics" }
  ],
  linux: [
    { title: "Introduction to Linux", desc: "What Linux is and why it matters", id: "intro" },
    { title: "Linux Distributions", desc: "Debian, Red Hat, Arch, SUSE and more", id: "distributions" },
    { title: "Terminal Basics", desc: "Shells, history, keyboard shortcuts", id: "terminal" },
    { title: "File System Hierarchy", desc: "The FHS directory structure", id: "filesystem" },
    { title: "Navigation Commands", desc: "pwd, cd, ls, tree, file", id: "navigation" },
    { title: "File Operations", desc: "touch, cp, mv, rm, mkdir, ln", id: "file-ops" },
    { title: "File Permissions", desc: "chmod, umask, rwx notation", id: "permissions" },
    { title: "Ownership & ACL", desc: "chown, chgrp, setfacl, getfacl", id: "ownership" },
    { title: "Archiving & Compression", desc: "tar, gzip, bzip2, xz, zip", id: "archiving" },
    { title: "grep & Regular Expressions", desc: "Pattern matching in text", id: "grep" },
    { title: "sed Stream Editor", desc: "Non-interactive text substitution", id: "sed" },
    { title: "awk Programming", desc: "Column-based text processing", id: "awk" },
    { title: "Pipes & Redirection", desc: "stdin, stdout, stderr, tee", id: "pipes" },
    { title: "Users & Groups", desc: "useradd, usermod, groups", id: "users" },
    { title: "sudo & Privileges", desc: "Privilege escalation, sudoers", id: "sudo" },
    { title: "SSH & Remote Access", desc: "Secure shell, scp, rsync, keys", id: "ssh" },
    { title: "Processes & Jobs", desc: "ps, top, htop, job control", id: "processes" },
    { title: "Signals & Kill", desc: "SIGTERM, SIGKILL, kill, pkill", id: "signals" },
    { title: "Cron & Scheduling", desc: "crontab and systemd timers", id: "cron" },
    { title: "Network Commands", desc: "ip, ping, curl, wget, ss", id: "net-commands" },
    { title: "Firewall & iptables", desc: "ufw, firewalld, netfilter rules", id: "firewall" },
    { title: "DNS & Hostname", desc: "dig, nslookup, /etc/hosts", id: "dns" },
    { title: "APT (Debian/Ubuntu)", desc: "apt, dpkg package management", id: "apt" },
    { title: "DNF/YUM (RHEL/Fedora)", desc: "dnf, rpm package management", id: "dnf" },
    { title: "Pacman (Arch)", desc: "Arch Linux package management", id: "pacman" },
    { title: "Snap, Flatpak & AppImage", desc: "Distro-agnostic packaging", id: "universal" },
    { title: "systemd & Services", desc: "systemctl, unit files", id: "systemd" },
    { title: "journalctl & Logs", desc: "Reading the systemd journal", id: "journalctl" },
    { title: "Kernel Modules", desc: "lsmod, modprobe, insmod", id: "kernel" },
    { title: "Disk & Storage", desc: "df, du, lsblk, mount, LVM", id: "disk" },
    { title: "Bash Basics", desc: "Writing your first shell scripts", id: "bash-basics" },
    { title: "Variables & Expansion", desc: "Shell variables, arrays, arithmetic", id: "variables" },
    { title: "Conditionals & Loops", desc: "if, for, while, case", id: "conditionals" },
    { title: "Functions", desc: "Reusable bash functions", id: "functions" },
    { title: "Security Basics", desc: "Hardening a Linux system", id: "security-basics" },
    { title: "SELinux & AppArmor", desc: "Mandatory access control", id: "selinux" },
    { title: "Encryption & Keys", desc: "LUKS, GPG, checksums, TLS", id: "encryption" },
    { title: "Containers & Docker", desc: "Docker, Dockerfile, Compose", id: "containers" },
    { title: "Virtualization", desc: "KVM, QEMU, libvirt", id: "virtualization" },
    { title: "Performance Tuning", desc: "vmstat, iostat, strace, lsof", id: "performance" }
  ],
  netsec: [
    { title: "Introduction to Network Security", desc: "CIA triad, security domains, and fundamentals", id: "intro" },
    { title: "OSI Model", desc: "Seven-layer reference model for network communication", id: "osi-model" },
    { title: "TCP/IP Stack", desc: "The practical four-layer internet protocol suite", id: "tcp-ip" },
    { title: "Network Protocols", desc: "ARP, DNS, ICMP and their security implications", id: "protocols" },
    { title: "Firewall Concepts", desc: "Types of firewalls and traffic filtering", id: "firewall-concepts" },
    { title: "iptables", desc: "Classic Linux netfilter firewall", id: "iptables" },
    { title: "nftables", desc: "Modern replacement for iptables", id: "nftables" },
    { title: "firewalld", desc: "Dynamic firewall for RHEL systems", id: "firewalld" },
    { title: "UFW", desc: "Uncomplicated Firewall for Ubuntu/Debian", id: "ufw" },
    { title: "Penetration Testing Basics", desc: "Types, methodology, and legal considerations", id: "pentest-intro" },
    { title: "Reconnaissance", desc: "Passive and active information gathering", id: "reconnaissance" },
    { title: "Scanning & Enumeration", desc: "Nmap, service discovery, and enumeration", id: "scanning" },
    { title: "Exploitation", desc: "Vulnerability exploitation with Metasploit", id: "exploitation" },
    { title: "Post-Exploitation", desc: "Privilege escalation, lateral movement, persistence", id: "post-exploitation" },
    { title: "Wireless Standards", desc: "IEEE 802.11 family and wireless modes", id: "wireless-standards" },
    { title: "WEP & WPA", desc: "Wireless encryption evolution and attacks", id: "wep-wpa" },
    { title: "Wireless Attacks", desc: "Evil twin, deauth, WPS, and PMKID attacks", id: "wireless-attacks" },
    { title: "Wireless Defense", desc: "Securing Wi-Fi networks against attacks", id: "wireless-defense" },
    { title: "IDS/IPS Concepts", desc: "Intrusion detection and prevention fundamentals", id: "ids-ips-concepts" },
    { title: "Snort", desc: "Open-source IDS/IPS with rule-based detection", id: "snort" },
    { title: "Suricata", desc: "High-performance multi-threaded IDS/IPS", id: "suricata" },
    { title: "Zeek", desc: "Network analysis framework for security monitoring", id: "zeek" },
    { title: "SIEM & Log Analysis", desc: "Centralized security monitoring and threat detection", id: "siem" },
    { title: "VPN Types", desc: "Remote access, site-to-site, and mesh VPNs", id: "vpn-types" },
    { title: "OpenVPN", desc: "SSL/TLS VPN setup and configuration", id: "openvpn" },
    { title: "WireGuard", desc: "Modern fast and simple VPN protocol", id: "wireguard" },
    { title: "IPsec", desc: "Standard protocol suite for secure IP communications", id: "ipsec" },
    { title: "TLS/SSL", desc: "Transport Layer Security and certificate management", id: "tls-ssl" },
    { title: "Nmap", desc: "Network discovery and security auditing", id: "nmap" },
    { title: "Metasploit", desc: "Penetration testing framework", id: "metasploit" },
    { title: "Burp Suite", desc: "Web application security testing platform", id: "burp-suite" },
    { title: "Wireshark", desc: "Network protocol analyzer", id: "wireshark" },
    { title: "Hashcat & John", desc: "Password recovery and hash cracking", id: "hashcat" },
    { title: "OWASP Top 10", desc: "Critical web application security risks", id: "owasp-top10" },
    { title: "XSS", desc: "Cross-site scripting attacks and prevention", id: "xss" },
    { title: "SQL Injection", desc: "Database query manipulation and defense", id: "sql-injection" },
    { title: "CSRF", desc: "Cross-site request forgery and protection", id: "csrf" },
    { title: "Web Defense", desc: "Security headers, WAF, and best practices", id: "web-defense" },
    { title: "Network Segmentation", desc: "VLANs, zones, and isolation strategies", id: "network-segmentation" },
    { title: "Bastion Host", desc: "Hardened gateway for secure admin access", id: "bastion-host" },
    { title: "Zero Trust", desc: "Never trust, always verify architecture", id: "zero-trust" },
    { title: "Hardening", desc: "System hardening and security benchmarks", id: "hardening" }
  ],
  python: [
    { title: "Introduction to Python", desc: "Python What is it and why should you or", id: "intro" },
    { title: "Installation and Setup", desc: "Python and creating virtual environment", id: "install" },
    { title: "Basic Syntax", desc: "Basic rules for writing Python code", id: "syntax" },
    { title: "Variables and Data Types", desc: "Storing and managing data‌", id: "variables" },
    { title: "Operators", desc: "OperatorsPython", id: "operators" },
    { title: "Conditional if-else", desc: "orWith condition‌", id: "if-else" },
    { title: "Loops", desc: "for while", id: "loops" },
    { title: "Comprehension", desc: "Data Structures ", id: "comprehensions" },
    { title: "Match-Case", desc: "Pattern Matching in Python 3.10+", id: "match-case" },
    { title: "Lists", desc: "Sequential and mutable data structure", id: "lists" },
    { title: "Tuples", desc: "Data Immutable", id: "tuples" },
    { title: "Dictionaries", desc: "Key-value data structure", id: "dicts" },
    { title: "Sets", desc: "Data structure with unique members", id: "sets" },
    { title: "Strings", desc: "Working with text in Python", id: "strings" },
    { title: "Functions", desc: "Definition and use of Functions", id: "functions" },
    { title: "Lambda", desc: "Anonymous one-line functions", id: "lambda" },
    { title: "Decorators", desc: "Functions", id: "decorators" },
    { title: "Modules and Packages", desc: "Organization", id: "modules" },
    { title: "Generators", desc: "Generating values lazily", id: "generators" },
    { title: "Classes and Objects", desc: "With OOP", id: "classes" },
    { title: "Inheritance", desc: "‌Class‌", id: "inheritance" },
    { title: "Encapsulation", desc: "‌Data‌", id: "encapsulation" },
    { title: "Polymorphism", desc: "One interface, different implementations", id: "polymorphism" },
    { title: "Magic Methods", desc: "Methoddunder", id: "magic-methods" },
    { title: "Read and write File", desc: "File Handling", id: "file-io" },
    { title: "Context Manager", desc: "Managing resources with with", id: "context-managers" },
    { title: "CSV and JSON", desc: "Format‌Data", id: "csv-json" },
    { title: "Try-Except", desc: "Error Handling", id: "try-except" },
    { title: "Custom Exceptions", desc: "Creating your own exceptions", id: "custom-exceptions" },
    { title: "Finally and Else", desc: "Complementary parts of try-except", id: "finally-else" },
    { title: "Iterators", desc: "And iteration", id: "iterators" },
    { title: "Contextlib", desc: "Context Manager tools", id: "contextlib" },
    { title: "Metaclasses", desc: "Classes that create classes", id: "metaclasses" },
    { title: "Async/Await", desc: "Name‌Asynchronous", id: "async" },
    { title: "Type Hints", desc: "Python type system", id: "typing" },
    { title: "os and sys", desc: "Interacting with the operating system", id: "os-sys" },
    { title: "datetime", desc: "Working with dates and times", id: "datetime" },
    { title: "Regular Expressions", desc: "Pattern matching regex", id: "re" },
    { title: "Collections", desc: "Specialized data structures", id: "collections" },
    { title: "Itertools", desc: "Iterator tools", id: "itertools" },
    { title: "unittest", desc: "Test", id: "unittest" },
    { title: "pytest", desc: "‌Test", id: "pytest" },
    { title: "Debugging Techniques", desc: "And Debugging Techniques", id: "debugging" },
    { title: "Performance Tips", desc: "Optimizing Python code", id: "performance" },
    { title: "Profiling", desc: "Analyzing code performance", id: "profiling" },
    { title: "Memory Management", desc: "Understanding and optimizing memory usage", id: "memory" }
  ]
};

// ==================== DOCS PAGES (ai / linux / netsec / python) ====================
(function() {
  const page = document.documentElement.getAttribute('data-page');
  if (!['ai', 'linux', 'netsec', 'python'].includes(page)) return;

  const searchIndex = pageSearchIndexes[page] || [];

  // ─── Keep sidebar/layout aligned with the real header height ───
  function syncTopbarHeight() {
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    const h = Math.ceil(topbar.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--topbar-h', h + 'px');
  }
  syncTopbarHeight();
  window.addEventListener('load', syncTopbarHeight);
  window.addEventListener('resize', syncTopbarHeight);
  window.addEventListener('orientationchange', syncTopbarHeight);
  if (window.ResizeObserver) {
    const topbarEl = document.querySelector('.topbar');
    if (topbarEl) new ResizeObserver(syncTopbarHeight).observe(topbarEl);
  }

  // ─── Sidebar Toggle ───
  // Exposed on window because the HTML calls these via inline
  // onclick="..." attributes (e.g. onclick="toggleSidebar()").
  window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('open');
    overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
  };

  window.closeSidebar = function() {
    if (window.innerWidth <= 1024) {
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('sidebar-overlay').style.display = 'none';
    }
  };

  // ─── Section Toggle ───
  window.toggleSection = function(header) {
    const links = header.nextElementSibling;
    header.classList.toggle('collapsed');
    links.classList.toggle('collapsed');
    if (!links.classList.contains('collapsed')) {
      links.style.maxHeight = links.scrollHeight + 'px';
    } else {
      links.style.maxHeight = '0';
    }
  };

  // ─── Initialize sections ───
  document.querySelectorAll('.sidebar-links').forEach(links => {
    links.style.maxHeight = links.scrollHeight + 'px';
  });

  // ─── Active Link ───
  function updateActiveLink() {
    const sections = document.querySelectorAll('.content-section');
    const links = document.querySelectorAll('.sidebar-links li a');
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });

    // Progress
    const totalSections = sections.length;
    const currentIndex = Array.from(sections).findIndex(s => s.getAttribute('id') === current);
    const progress = totalSections ? Math.round(((currentIndex + 1) / totalSections) * 100) : 0;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    if (progressFill) progressFill.style.width = progress + '%';
    if (progressText) progressText.textContent = progress + '%';
  }
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  // ─── Copy Code ───
  window.copyCode = function(button) {
    const code = button.closest('.code-container').querySelector('.code-block').textContent;
    navigator.clipboard.writeText(code).then(() => {
      const original = button.innerText;
      button.innerText = '✓ Copied!';
      button.classList.add('copied');
      setTimeout(() => {
        button.innerText = original;
        button.classList.remove('copied');
      }, 2000);
    });
  };

  // ─── Search ───
  window.searchDocs = function() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('searchResults');
    if (!query) {
      resultsDiv.classList.remove('active');
      return;
    }
    const filtered = searchIndex.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );
    if (filtered.length === 0) {
      resultsDiv.innerHTML = '<div class="search-result-item"><span class="result-title">No result found</span></div>';
    } else {
      resultsDiv.innerHTML = filtered.map(item =>
        `<div class="search-result-item" onclick="navigateTo('${item.id}')">
          <span class="result-title">${item.title}</span>
          <span class="result-desc">${item.desc}</span>
        </div>`
      ).join('');
    }
    resultsDiv.classList.add('active');
  };

  window.showSearchResults = function() {
    const input = document.getElementById('searchInput');
    if (input && input.value.trim()) {
      window.searchDocs();
    }
  };

  window.navigateTo = function(id) {
    document.getElementById('searchResults').classList.remove('active');
    document.getElementById('searchInput').value = '';
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Close search on outside click
  document.addEventListener('click', function(e) {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer && !searchContainer.contains(e.target)) {
      document.getElementById('searchResults').classList.remove('active');
    }
  });

  // ─── Smooth scroll for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ─── Scroll to Top ───
  window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
  }
})();

// ==================== DOC HUB PAGE (doc.html) ====================
if (document.documentElement.getAttribute("data-page") === "doc") {
(function() {

  // ─── Typewriter Effect ───
  const phrases = ["Python", "Linux", "AI & ML", "Networking", "Cybersecurity", "Cloud"];
  let phraseIndex = 0, charIndex = 0, isDeleting = false;
  const typeEl = document.getElementById('typewriter');

  function type() {
    const current = phrases[phraseIndex];
    if (isDeleting) {
      typeEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 500;
    }
    setTimeout(type, speed);
  }
  if (typeEl) type();

  // ─── Copy Code ───
  document.querySelectorAll('.code-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.code-container').querySelector('.code-block').textContent;
      navigator.clipboard.writeText(code).then(() => {
        const original = btn.innerHTML;
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = original;
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // ─── Smooth scroll for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

})();
}

// ==================== NETWORK LAB PAGES (network_lab.html / project.html) ====================
if (document.documentElement.getAttribute("data-page") === "network_lab") {
(function() {

  // ─── Typewriter Effect (hero) ───
  const phrases = ["VLANs", "DHCP", "Static Routing", "ACLs", "NAT / PAT", "DNS"];
  let phraseIndex = 0, charIndex = 0, isDeleting = false;
  const typeEl = document.getElementById('typewriter');

  function type() {
    const current = phrases[phraseIndex];
    if (isDeleting) {
      typeEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 500;
    }
    setTimeout(type, speed);
  }
  if (typeEl) type();

})();
}

// ==================== INDEX PAGE (index.html) ====================
if (document.documentElement.getAttribute("data-page") === "index") {
(function() {

  // Toast notification system - replaces alert()
  const Toast = {
    container: document.getElementById('toastContainer'),
    show(message, type = 'info', duration = 4000) {
      if (!this.container) return;
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.textContent = message;
      toast.setAttribute('role', 'alert');
      this.container.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('show'));
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
      }, duration);
    }
  };

  // Image error handling - replaces inline onerror
  function setupImageFallback(img, fallbackText) {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = 'avatar';
      fallback.style.cssText = 'width:44px;height:44px;font-size:1rem;';
      fallback.innerHTML = `<span>${fallbackText}</span>`;
      this.parentNode.insertBefore(fallback, this);
    });
  }

  document.getElementById('brandAvatar') && setupImageFallback(document.getElementById('brandAvatar'), 'AG');
  document.getElementById('profilePhoto') && setupImageFallback(document.getElementById('profilePhoto'), 'AG');

  // Supabase configuration
  const SUPABASE_URL = 'https://cwwqmushilpxzpcpjute.supabase.co';
  const SUPABASE_KEY = 'sb_publishable__AzVitbAoaYfEyvJMnIkkQ_AOkXCfbK';
  const SUPABASE = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  // Check session and update UI
  async function checkUserSession() {
    try {
      const { data: { session } } = await SUPABASE.auth.getSession();
      if (session) {
        await loadUserProfile(session.user.id, session.user.email);
      }
    } catch (err) {
      // Silently handle session check errors
    }
  }

  async function loadUserProfile(userId, email) {
    try {
      const { data } = await SUPABASE
        .from('profiles')
        .select('username, avatar_url, first_name')
        .eq('id', userId)
        .single();
      updateAuthUI(data, email);
    } catch (err) {
      updateAuthUI(null, email);
    }
  }

  function updateAuthUI(profile, email) {
    const authUserMenu = document.getElementById('authUserMenu');
    if (!authUserMenu) return;

    if (!profile && !email) {
      authUserMenu.innerHTML = '<a href="./login/login.html">Sign in</a>';
    } else {
      const username = profile?.first_name || profile?.username || email.split('@')[0];
      const avatar = profile?.avatar_url;
      const initial = username[0].toUpperCase();

      authUserMenu.classList.add('authenticated');
      authUserMenu.innerHTML = `
        <div class="user-profile-icon" title="${escapeHtml(username)}">
          <button type="button" class="avatar-btn" id="profileMenuBtn" aria-label="User menu" aria-haspopup="true" aria-expanded="false">
            ${avatar ? `<img src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}" style="width:100%;height:100%;object-fit:cover;">` : `<span>${escapeHtml(initial)}</span>`}
          </button>
          <div class="profile-dropdown" id="profileDropdown" role="menu">
            <div class="dropdown-header">
              <div class="dropdown-avatar">
                ${avatar ? `<img src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}">` : `<span>${escapeHtml(initial)}</span>`}
              </div>
              <div class="dropdown-user-info">
                <p class="dropdown-username">${escapeHtml(username)}</p>
                <p class="dropdown-email">${escapeHtml(email)}</p>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <a href="./profile.html" class="dropdown-item" role="menuitem">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Profile
            </a>
            <div class="dropdown-divider"></div>
            <button type="button" id="signOutDropdownBtn" class="dropdown-item dropdown-logout" role="menuitem">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              Sign Out
            </button>
          </div>
        </div>
      `;

      const profileMenuBtn = document.getElementById('profileMenuBtn');
      const profileDropdown = document.getElementById('profileDropdown');

      profileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = profileDropdown.classList.toggle('open');
        profileMenuBtn.setAttribute('aria-expanded', isOpen);
      });

      document.addEventListener('click', (e) => {
        if (!authUserMenu.contains(e.target)) {
          profileDropdown.classList.remove('open');
          profileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });

      document.getElementById('signOutDropdownBtn').addEventListener('click', async (e) => {
        e.preventDefault();
        await SUPABASE.auth.signOut();
        location.reload();
      });
    }
  }

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  checkUserSession();

  // Clear any stale OAuth flags on page load
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('fromLogin') === 'true') {
    sessionStorage.removeItem('oauthLoginPending');
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Smooth anchor handling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Hero tilt interaction
  const hero = document.getElementById('heroCard');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.transform = `perspective(1200px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-1px)`;
    });
    hero.addEventListener('mouseleave', () => {
      hero.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }

  // Typewriter-like rotating role
  const roles = ["Python Developer", "Linux Enthusiast", "Networking & Cybersecurity", "AI & Machine Learning"];
  const typeText = document.getElementById('typeText');
  let roleIndex = 0;
  function rotateRole() {
    if (!typeText) return;
    typeText.style.opacity = 0;
    setTimeout(() => {
      typeText.textContent = roles[roleIndex];
      typeText.style.opacity = 1;
      roleIndex = (roleIndex + 1) % roles.length;
    }, 240);
  }
  if (typeText) {
    typeText.style.transition = 'opacity .24s ease';
    rotateRole();
    setInterval(rotateRole, 2200);
  }

  // Certificate lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(img, title, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || title || 'Certificate preview';
    lightboxTitle.textContent = title || 'Certificate preview';
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lightboxImg) lightboxImg.src = '';
  }

  document.querySelectorAll('.certificate-card').forEach((card) => {
    const img = card.querySelector('img');
    const h4 = card.querySelector('h4');
    const p = card.querySelector('p');
    const title = h4 ? h4.textContent.trim() : 'Certificate';
    const caption = p ? p.textContent.trim() : '';
    card.addEventListener('click', () => img && openLightbox(img, title, caption));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        img && openLightbox(img, title, caption);
      }
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        await navigator.serviceWorker.register("/service-worker.js");
      } catch (err) {
        // Silently handle service worker errors
      }
    });
  }

})();
}
