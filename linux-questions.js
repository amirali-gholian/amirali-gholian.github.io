// ============================================================
// سوالات آزمون Linux (LPIC-1 و LPIC-2)
// ============================================================

const LINUX_QUESTIONS = {
  "101": [
    {
      id: 1,
      text: 'کدام دستور برای مشاهده اطلاعات دستگاه‌های PCI متصل به سیستم استفاده می‌شود؟',
      options: ['lsusb', 'lspci', 'lsblk', 'lsof'],
      correct: 1
    },
    {
      id: 2,
      text: 'کدام دستور اطلاعات دستگاه‌های USB متصل را نمایش می‌دهد؟',
      options: ['lspci', 'lsusb', 'lsmod', 'lscpu'],
      correct: 1
    },
    {
      id: 3,
      text: 'کدام دستور برای دیدن فایل‌های آپشن بوت استفاده می‌شود؟',
      options: ['cat /proc/cmdline', 'dmesg', 'lsmod', 'cat /etc/fstab'],
      correct: 0
    },
    {
      id: 4,
      text: 'کدام فایل حاوی اطلاعات نقاط اتصال (Mount Points) سیستم است؟',
      options: ['/etc/fstab', '/etc/mtab', '/proc/mounts', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 5,
      text: 'کدام دستور برای تعیین کردن سطح اجازه دسترسی فایل استفاده می‌شود؟',
      options: ['chown', 'chmod', 'chgrp', 'ls -l'],
      correct: 1
    },
    {
      id: 6,
      text: 'دستور chmod 755 چه معنی دارد؟',
      options: ['صاحب: rwx، گروه: r-x، دیگران: r-x', 'صاحب: rwx، گروه: rw-، دیگران: r--', 'صاحب: rw-، گروه: rw-، دیگران: r--', 'صاحب: r-x، گروه: r-x، دیگران: r-x'],
      correct: 0
    },
    {
      id: 7,
      text: 'کدام دستور برای تغییر صاحب فایل استفاده می‌شود؟',
      options: ['chmod', 'chgrp', 'chown', 'chsh'],
      correct: 2
    },
    {
      id: 8,
      text: 'درایو SSD چه مزیتی نسبت به HDD دارد؟',
      options: ['ظرفیت بیشتر', 'سرعت بیشتر و کم‌تر نویز', 'دمای کمتر', 'مصرف برق کمتر'],
      correct: 1
    },
    {
      id: 9,
      text: 'کدام فایل برای نصب بسته‌های نرم‌افزار Debian استفاده می‌شود؟',
      options: ['.rpm', '.deb', '.tar.gz', '.exe'],
      correct: 1
    },
    {
      id: 10,
      text: 'کدام دستور برای جستجوی دستور‌های شل استفاده می‌شود؟',
      options: ['man', 'which', 'whereis', 'find'],
      correct: 1
    },
    {
      id: 11,
      text: 'کدام دستور برای نمایش محتویات یک فایل متن استفاده می‌شود؟',
      options: ['cat', 'less', 'more', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 12,
      text: 'دستور grep برای چه کاری استفاده می‌شود؟',
      options: ['جستجوی الگو در فایل‌ها', 'اصلاح متن', 'حذف خطوط', 'ترتیب داده‌ها'],
      correct: 0
    },
    {
      id: 13,
      text: 'کدام دستور برای جستجوی فایل در سیستم استفاده می‌شود؟',
      options: ['locate', 'find', 'which', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 14,
      text: 'دستور wc -l file.txt چه چیزی را برمی‌گرداند؟',
      options: ['تعداد کاراکترهای فایل', 'تعداد کلمات فایل', 'تعداد خطوط فایل', 'حجم فایل'],
      correct: 2
    },
    {
      id: 15,
      text: 'کدام دستور برای نمایش 10 خط اول فایل استفاده می‌شود؟',
      options: ['tail -10', 'head -10', 'cat | head 10', 'sed -n "1,10p"'],
      correct: 1
    },
    {
      id: 16,
      text: 'کدام دستور برای نمایش 10 خط آخر فایل استفاده می‌شود؟',
      options: ['head -10', 'tail -10', 'sed -n "$-10,$p"', 'less'],
      correct: 1
    },
    {
      id: 17,
      text: 'دستور awk برای چه کاری استفاده می‌شود؟',
      options: ['جستجو و اصلاح متن', 'پردازش و استخراج داده‌های متنی', 'حذف فایل‌ها', 'تغییر اجازه دسترسی'],
      correct: 1
    },
    {
      id: 18,
      text: 'کدام دستور برای ترتیب خطوط فایل استفاده می‌شود؟',
      options: ['grep', 'sort', 'sed', 'cut'],
      correct: 1
    },
    {
      id: 19,
      text: 'دستور cut برای چه کاری استفاده می‌شود؟',
      options: ['حذف فایل‌ها', 'جدا کردن ستون‌ها یا بخش‌های متن', 'ترتیب داده‌ها', 'جایگزینی متن'],
      correct: 1
    },
    {
      id: 20,
      text: 'کدام دستور برای شمارش تعداد فایل‌ها در یک دایرکتوری استفاده می‌شود؟',
      options: ['ls | wc -l', 'find . -type f | wc -l', 'du -sh .', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 21,
      text: 'فایل سیستم ext4 چه ویژگی‌های خاصی دارد؟',
      options: ['پشتیبانی از فایل‌های بزرگ', 'سرعت بیشتر نسبت به ext3', 'بازیابی بهتر', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 22,
      text: 'کدام دستور برای نمایش اطلاعات فایل سیستم استفاده می‌شود؟',
      options: ['df', 'du', 'stat', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 23,
      text: 'دستور du -sh برای چه کاری استفاده می‌شود؟',
      options: ['نمایش فضای خالی', 'نمایش کل استفاده شده فضای دیسک', 'نمایش نوع فایل سیستم', 'نمایش نقاط اتصال'],
      correct: 1
    },
    {
      id: 24,
      text: 'کدام دستور برای mount کردن فایل سیستم استفاده می‌شود؟',
      options: ['unmount', 'mount', 'fsck', 'mkfs'],
      correct: 1
    },
    {
      id: 25,
      text: 'دستور fdisk برای چه کاری استفاده می‌شود؟',
      options: ['مدیریت پارتیشن‌های دیسک', 'بررسی فایل سیستم', 'نمایش فضای دیسک', 'اتصال دیسک'],
      correct: 0
    },
    {
      id: 26,
      text: 'کدام دستور برای بررسی و تصحیح خرابی‌های فایل سیستم استفاده می‌شود؟',
      options: ['mount', 'fsck', 'mkfs', 'partprobe'],
      correct: 1
    },
    {
      id: 27,
      text: 'دستور mkfs برای چه کاری استفاده می‌شود؟',
      options: ['بررسی فایل سیستم', 'ایجاد فایل سیستم جدید', 'mount کردن', 'حذف فایل سیستم'],
      correct: 1
    },
    {
      id: 28,
      text: 'کدام فایل برای ذخیره کلمات عبور کاربران استفاده می‌شود؟',
      options: ['/etc/group', '/etc/passwd', '/etc/shadow', '/etc/sudoers'],
      correct: 2
    },
    {
      id: 29,
      text: 'کدام دستور برای اضافه کردن کاربر جدید استفاده می‌شود؟',
      options: ['usermod', 'userdel', 'useradd', 'user -add'],
      correct: 2
    },
    {
      id: 30,
      text: 'کدام دستور برای تغییر رمز عبور کاربر استفاده می‌شود؟',
      options: ['chpass', 'passwd', 'chpwd', 'setpass'],
      correct: 1
    },
    {
      id: 31,
      text: 'کدام دستور برای حذف کاربر استفاده می‌شود؟',
      options: ['usermod', 'useradd', 'userdel', 'userlist'],
      correct: 2
    },
    {
      id: 32,
      text: 'کدام فایل برای نگهداری گروه‌های کاربری استفاده می‌شود؟',
      options: ['/etc/passwd', '/etc/group', '/etc/shadow', '/etc/users'],
      correct: 1
    },
    {
      id: 33,
      text: 'کدام دستور برای مشاهده گروه‌های کاربر فعلی استفاده می‌شود؟',
      options: ['id', 'whoami', 'groups', 'موارد 1 و 3 درست'],
      correct: 3
    },
    {
      id: 34,
      text: 'دستور sudo برای چه کاری استفاده می‌شود؟',
      options: ['اجازه دادن به کاربران عادی برای اجرای دستورات ریشه', 'تغییر شناسه کاربر', 'ایجاد کاربر جدید', 'حذف اجازه دسترسی'],
      correct: 0
    },
    {
      id: 35,
      text: 'کدام فایل برای تنظیم اجازه‌های sudo استفاده می‌شود؟',
      options: ['/etc/sudoers', '/etc/sudo', '/root/.sudoers', '/etc/security/sudo'],
      correct: 0
    },
    {
      id: 36,
      text: 'دستور chmod a+x برای چه کاری استفاده می‌شود؟',
      options: ['حذف اجازه اجرا از همه', 'اضافه کردن اجازه اجرا برای همه', 'حذف اجازه نوشتن', 'اضافه کردن اجازه خواندن'],
      correct: 1
    },
    {
      id: 37,
      text: 'کدام دستور برای نمایش ساختار دایرکتوری استفاده می‌شود؟',
      options: ['ls -la', 'tree', 'find', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 38,
      text: 'کدام دستور برای کپی کردن فایل‌ها استفاده می‌شود؟',
      options: ['mv', 'cp', 'rm', 'ls'],
      correct: 1
    },
    {
      id: 39,
      text: 'کدام دستور برای انتقال یا تغییر نام فایل استفاده می‌شود؟',
      options: ['cp', 'mv', 'rm', 'ln'],
      correct: 1
    },
    {
      id: 40,
      text: 'کدام دستور برای ایجاد لینک سخت استفاده می‌شود؟',
      options: ['ln -s', 'ln', 'link', 'symlink'],
      correct: 1
    },
    {
      id: 41,
      text: 'کدام دستور برای ایجاد لینک نرم (Symbolic Link) استفاده می‌شود؟',
      options: ['ln', 'ln -s', 'link -s', 'symlink'],
      correct: 1
    },
    {
      id: 42,
      text: 'کدام دستور برای حذف دایرکتوری استفاده می‌شود؟',
      options: ['rm', 'rmdir', 'rm -rf', 'موارد 2 و 3 درست'],
      correct: 3
    },
    {
      id: 43,
      text: 'کدام دستور برای ایجاد دایرکتوری جدید استفاده می‌شود؟',
      options: ['mkdir', 'createdir', 'newdir', 'mkpath'],
      correct: 0
    },
    {
      id: 44,
      text: 'دستور tar -xzf برای چه کاری استفاده می‌شود؟',
      options: ['ایجاد فایل فشرده gzip', 'استخراج فایل فشرده gzip', 'حذف فایل', 'نمایش محتویات'],
      correct: 1
    },
    {
      id: 45,
      text: 'کدام دستور برای فشرده کردن فایل‌ها استفاده می‌شود؟',
      options: ['zip', 'gzip', 'tar', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 46,
      text: 'دستور ps برای چه کاری استفاده می‌شود؟',
      options: ['نمایش فرآیندهای در حال اجرا', 'نمایش حالت سیستم', 'نمایش فضای دیسک', 'نمایش کاربران متصل'],
      correct: 0
    },
    {
      id: 47,
      text: 'کدام دستور برای نمایش فرآیندهای به صورت تصویری استفاده می‌شود؟',
      options: ['ps', 'top', 'htop', 'موارد 2 و 3 درست'],
      correct: 3
    },
    {
      id: 48,
      text: 'کدام دستور برای متوقف کردن یک فرآیند استفاده می‌شود؟',
      options: ['stop', 'kill', 'terminate', 'halt'],
      correct: 1
    },
    {
      id: 49,
      text: 'دستور nice برای چه کاری استفاده می‌شود؟',
      options: ['تغییر اولویت فرآیند', 'مشاهده فرآیندها', 'متوقف کردن فرآیند', 'ایجاد فرآیند'],
      correct: 0
    },
    {
      id: 50,
      text: 'کدام دستور برای نمایش اطلاعات سیستم استفاده می‌شود؟',
      options: ['uname', 'systeminfo', 'info', 'about'],
      correct: 0
    },
    {
      id: 51,
      text: 'دستور uname -a برای چه کاری استفاده می‌شود؟',
      options: ['نام کاربر', 'تمام اطلاعات سیستم', 'نام میزبان', 'نسخه کرنل'],
      correct: 1
    },
    {
      id: 52,
      text: 'کدام دستور برای نمایش کاربران متصل به سیستم استفاده می‌شود؟',
      options: ['who', 'whoami', 'id', 'users'],
      correct: 0
    },
    {
      id: 53,
      text: 'کدام دستور برای نمایش کاربر فعلی استفاده می‌شود؟',
      options: ['who', 'whoami', 'id', 'current'],
      correct: 1
    },
    {
      id: 54,
      text: 'کدام دستور برای نمایش آخرین دستورات استفاده شده استفاده می‌شود؟',
      options: ['log', 'history', 'last', 'record'],
      correct: 1
    },
    {
      id: 55,
      text: 'کدام دستور برای تغییر دایرکتوری کاری استفاده می‌شود؟',
      options: ['changedir', 'cd', 'chdir', 'goto'],
      correct: 1
    },
    {
      id: 56,
      text: 'کدام دستور برای نمایش مسیر دایرکتوری کاری فعلی استفاده می‌شود؟',
      options: ['getdir', 'pwd', 'where', 'path'],
      correct: 1
    },
    {
      id: 57,
      text: 'کدام دستور برای نمایش متغیرهای محیطی استفاده می‌شود؟',
      options: ['env', 'set', 'export', 'vars'],
      correct: 0
    },
    {
      id: 58,
      text: 'دستور echo برای چه کاری استفاده می‌شود؟',
      options: ['حذف متن', 'نمایش متن', 'ذخیره متن', 'ویرایش متن'],
      correct: 1
    },
    {
      id: 59,
      text: 'کدام دستور برای ایجاد فایل خالی استفاده می‌شود؟',
      options: ['touch', 'create', 'new', 'make'],
      correct: 0
    },
    {
      id: 60,
      text: 'دستور >> برای چه کاری استفاده می‌شود؟',
      options: ['جایگزینی محتویات فایل', 'افزودن محتویات به پایان فایل', 'حذف فایل', 'خواندن فایل'],
      correct: 1
    }
  ],

  "102": [
    {
      id: 1,
      text: 'کدام شل (Shell) پیش‌فرض برای کاربران عادی است؟',
      options: ['/bin/sh', '/bin/bash', '/bin/csh', '/bin/ksh'],
      correct: 1
    },
    {
      id: 2,
      text: 'کدام فایل برای تنظیمات شروع شل استفاده می‌شود؟',
      options: ['.bashrc', '.bash_profile', '.bash_login', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 3,
      text: 'دستور source برای چه کاری استفاده می‌شود؟',
      options: ['نمایش محتویات فایل', 'اجرای دستورات شل از فایل', 'حذف فایل', 'کپی فایل'],
      correct: 1
    },
    {
      id: 4,
      text: 'کدام متغیر محیطی مسیر برنامه‌ها را نشان می‌دهد؟',
      options: ['HOME', 'PATH', 'USER', 'SHELL'],
      correct: 1
    },
    {
      id: 5,
      text: 'دستور export برای چه کاری استفاده می‌شود؟',
      options: ['کپی کردن فایل', 'دسترسی به متغیر در فرآیندهای فرزند', 'حذف متغیر', 'نمایش متغیر'],
      correct: 1
    },
    {
      id: 6,
      text: 'کدام دستور برای ایجاد متغیر محیطی استفاده می‌شود؟',
      options: ['let', 'set', 'export', 'define'],
      correct: 1
    },
    {
      id: 7,
      text: 'در اسکریپت شل، برای چه کاری از {} استفاده می‌شود؟',
      options: ['کامنت‌ها', 'بدنه حلقه', 'گروه‌بندی دستورات', 'آرایه‌ها'],
      correct: 2
    },
    {
      id: 8,
      text: 'کدام دستور برای بررسی شرط استفاده می‌شود؟',
      options: ['if', 'then', 'else', 'elif'],
      correct: 0
    },
    {
      id: 9,
      text: 'دستور for در شل برای چه کاری استفاده می‌شود؟',
      options: ['شرط‌های', 'حلقه تکرار', 'تابع‌ها', 'دستورات شرطی'],
      correct: 1
    },
    {
      id: 10,
      text: 'کدام دستور برای تکرار حلقه تا زمان درست بودن شرط استفاده می‌شود؟',
      options: ['for', 'while', 'until', 'do'],
      correct: 1
    },
    {
      id: 11,
      text: 'در اسکریپت شل، آرگومان‌های ورودی با چه نشان داده می‌شوند؟',
      options: ['&1, &2, &3', '%1, %2, %3', '$1, $2, $3', '@1, @2, @3'],
      correct: 2
    },
    {
      id: 12,
      text: 'دستور $# برای چه کاری استفاده می‌شود؟',
      options: ['نام اسکریپت', 'تعداد آرگومان‌ها', 'شماره خط', 'شناسه فرآیند'],
      correct: 1
    },
    {
      id: 13,
      text: 'کدام دستور برای ایجاد تابع در شل استفاده می‌شود؟',
      options: ['def', 'func', 'function', 'sub'],
      correct: 2
    },
    {
      id: 14,
      text: 'در شل، کدام سمبل برای Redirect کردن output استفاده می‌شود؟',
      options: ['<', '>', '<<', '>>'],
      correct: 1
    },
    {
      id: 15,
      text: 'دستور 2> برای چه کاری استفاده می‌شود؟',
      options: ['Redirect stdout', 'Redirect stderr', 'Redirect stdin', 'Pipe'],
      correct: 1
    },
    {
      id: 16,
      text: 'سمبل | (Pipe) برای چه کاری استفاده می‌شود؟',
      options: ['جدا کردن دستورات', 'اتصال output یک دستور به input دستور دیگر', 'Comment', 'Redirect'],
      correct: 1
    },
    {
      id: 17,
      text: 'کدام دستور برای جستجوی الگو در فایل‌ها استفاده می‌شود؟',
      options: ['find', 'grep', 'sed', 'awk'],
      correct: 1
    },
    {
      id: 18,
      text: 'دستور sed برای چه کاری استفاده می‌شود؟',
      options: ['جستجو', 'جایگزینی متن در جریان', 'حذف فایل', 'نمایش فایل'],
      correct: 1
    },
    {
      id: 19,
      text: 'کدام دستور برای برنامه‌ریزی وظایف خودکار استفاده می‌شود؟',
      options: ['cron', 'schedule', 'task', 'timer'],
      correct: 0
    },
    {
      id: 20,
      text: 'کدام فایل برای برنامه‌ریزی تکاور cron استفاده می‌شود؟',
      options: ['/etc/cron.daily', '/etc/crontab', '/var/spool/cron/crontabs/', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 21,
      text: 'کدام دستور برای مدیریت cron jobs استفاده می‌شود؟',
      options: ['cron', 'crontab', 'crond', 'schedule'],
      correct: 1
    },
    {
      id: 22,
      text: 'دستور crontab -l برای چه کاری استفاده می‌شود؟',
      options: ['ایجاد cron job جدید', 'نمایش cron jobs', 'حذف cron job', 'ویرایش cron job'],
      correct: 1
    },
    {
      id: 23,
      text: 'کدام دستور برای پیدا کردن تمامی فایل‌های SUID استفاده می‌شود؟',
      options: ['find . -perm -4000', 'find . -perm -2000', 'find . -perm -1000', 'find . -type s'],
      correct: 0
    },
    {
      id: 24,
      text: 'بیت SUID چه نقشی دارد؟',
      options: ['اجازه نوشتن برای گروه', 'اجرا با اجازات صاحب فایل', 'اجرا با اجازات گروه', 'اجازه sticky bit'],
      correct: 1
    },
    {
      id: 25,
      text: 'کدام دستور برای اعمال بیت SGID استفاده می‌شود؟',
      options: ['chmod u+s', 'chmod g+s', 'chmod o+s', 'chmod a+s'],
      correct: 1
    },
    {
      id: 26,
      text: 'Sticky bit برای چه کاری استفاده می‌شود؟',
      options: ['اجازه حذف فایل‌های دیگران', 'جلوگیری از حذف فایل‌های دیگران', 'اجازه نوشتن', 'اجازه اجرا'],
      correct: 1
    },
    {
      id: 27,
      text: 'کدام دستور برای اعمال sticky bit استفاده می‌شود؟',
      options: ['chmod u+t', 'chmod g+t', 'chmod o+t', 'chmod a+t'],
      correct: 3
    },
    {
      id: 28,
      text: 'کدام فایل برای نگهداری رمز عبور‌های کاربران در SHA-512 است؟',
      options: ['/etc/passwd', '/etc/shadow', '/etc/group', '/etc/sudoers'],
      correct: 1
    },
    {
      id: 29,
      text: 'دستور passwd -l برای چه کاری استفاده می‌شود؟',
      options: ['لیست کردن کاربران', 'قفل کردن اکاؤنت کاربر', 'تغییر رمز عبور', 'حذف اکاؤنت'],
      correct: 1
    },
    {
      id: 30,
      text: 'کدام دستور برای مشاهده اطلاعات شبکه استفاده می‌شود؟',
      options: ['ifconfig', 'ip addr', 'netstat', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 31,
      text: 'کدام دستور برای تنظیم آدرس IP استفاده می‌شود؟',
      options: ['ipconfig', 'ifconfig', 'setip', 'ipset'],
      correct: 1
    },
    {
      id: 32,
      text: 'دستور hostname برای چه کاری استفاده می‌شود؟',
      options: ['تغییر نام میزبان', 'نمایش نام میزبان', 'موارد 1 و 2 درست', 'نمایش IP'],
      correct: 2
    },
    {
      id: 33,
      text: 'کدام دستور برای تست اتصال به میزبان دیگری استفاده می‌شود؟',
      options: ['ping', 'traceroute', 'telnet', 'ssh'],
      correct: 0
    },
    {
      id: 34,
      text: 'دستور netstat برای چه کاری استفاده می‌شود؟',
      options: ['نمایش اتصالات شبکه و اطلاعات راوتینگ', 'تنظیم شبکه', 'تست اتصال', 'نمایش DNS'],
      correct: 0
    },
    {
      id: 35,
      text: 'کدام دستور برای نمایش جدول راوتینگ استفاده می‌شود؟',
      options: ['route', 'traceroute', 'netstat -r', 'موارد 1 و 3 درست'],
      correct: 3
    },
    {
      id: 36,
      text: 'کدام دستور برای نمایش اطلاعات DNS استفاده می‌شود؟',
      options: ['dns', 'nslookup', 'dig', 'موارد 2 و 3 درست'],
      correct: 3
    },
    {
      id: 37,
      text: 'کدام فایل برای تنظیمات DNS محلی استفاده می‌شود؟',
      options: ['/etc/hosts', '/etc/resolv.conf', '/etc/hostname', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 38,
      text: 'کدام دستور برای پیدا کردن آدرس IP درخواستی استفاده می‌شود؟',
      options: ['host', 'nslookup', 'dig', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 39,
      text: 'کدام دستور برای انتقال فایل به سرور دور استفاده می‌شود؟',
      options: ['scp', 'sftp', 'rsync', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 40,
      text: 'کدام دستور برای ورود امن به سرور دور استفاده می‌شود؟',
      options: ['telnet', 'ssh', 'rsh', 'ftp'],
      correct: 1
    },
    {
      id: 41,
      text: 'کدام دستور برای نمایش فایل‌های log استفاده می‌شود؟',
      options: ['tail', 'cat', 'less', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 42,
      text: 'کدام دایرکتوری برای ذخیره فایل‌های log سیستم است؟',
      options: ['/var/log', '/etc/log', '/tmp/log', '/home/log'],
      correct: 0
    },
    {
      id: 43,
      text: 'کدام فایل برای نگهداری log‌های Kernel است؟',
      options: ['/var/log/kernel', '/var/log/syslog', '/var/log/dmesg', '/var/log/messages'],
      correct: 3
    },
    {
      id: 44,
      text: 'کدام دستور برای نمایش پیام‌های Kernel استفاده می‌شود؟',
      options: ['dmesg', 'kernel', 'kernlog', 'syslog'],
      correct: 0
    },
    {
      id: 45,
      text: 'کدام دستور برای نمایش فایل‌های دقیقاً باز شده توسط یک فرآیند است؟',
      options: ['lsof', 'fuser', 'ps', 'jobs'],
      correct: 0
    },
    {
      id: 46,
      text: 'کدام دستور برای نمایش فرآیندهایی که فایل خاصی را استفاده می‌کنند است؟',
      options: ['lsof', 'fuser', 'ps aux', 'find'],
      correct: 1
    },
    {
      id: 47,
      text: 'کدام دستور برای بروزرسانی سیستم در Debian استفاده می‌شود؟',
      options: ['apt-get install', 'apt-get update', 'apt-get upgrade', 'موارد 2 و 3 درست'],
      correct: 3
    },
    {
      id: 48,
      text: 'کدام دستور برای نصب بسته جدید استفاده می‌شود؟',
      options: ['apt install', 'apt-get install', 'dpkg -i', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 49,
      text: 'کدام دستور برای حذف بسته استفاده می‌شود؟',
      options: ['apt remove', 'apt-get remove', 'dpkg -r', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 50,
      text: 'کدام دستور برای جستجوی بسته استفاده می‌شود؟',
      options: ['apt search', 'apt-cache search', 'dpkg -S', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 51,
      text: 'کدام دستور برای نمایش اطلاعات سرویس استفاده می‌شود؟',
      options: ['service status', 'systemctl status', 'chkconfig', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 52,
      text: 'کدام دستور برای شروع سرویس استفاده می‌شود؟',
      options: ['systemctl start', 'service start', 'chkconfig on', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 53,
      text: 'کدام دستور برای متوقف کردن سرویس استفاده می‌شود؟',
      options: ['systemctl stop', 'service stop', 'chkconfig off', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 54,
      text: 'کدام دستور برای راه‌اندازی مجدد سرویس استفاده می‌شود؟',
      options: ['systemctl restart', 'service restart', 'restart', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 55,
      text: 'کدام دستور برای فعال کردن سرویس در Boot Time است؟',
      options: ['systemctl enable', 'chkconfig on', 'service enable', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 56,
      text: 'کدام دستور برای نمایش تمام سرویس‌های فعال استفاده می‌شود؟',
      options: ['systemctl list-units', 'chkconfig --list', 'service --status-all', 'همه موارد فوق'],
      correct: 3
    },
    {
      id: 57,
      text: 'کدام فایل برای تنظیمات kernel parameter است؟',
      options: ['/etc/sysctl.conf', '/proc/sys/', '/etc/kernel.conf', 'موارد 1 و 2 درست'],
      correct: 3
    },
    {
      id: 58,
      text: 'کدام دستور برای اعمال تغییرات sysctl استفاده می‌شود؟',
      options: ['sysctl -p', 'sysctl -a', 'sysctl -w', 'sysctl -l'],
      correct: 0
    },
    {
      id: 59,
      text: 'کدام دستور برای مدیریت انجن‌های کریپتوگرافی است؟',
      options: ['openssl', 'gpg', 'ssl', 'crypto'],
      correct: 0
    },
    {
      id: 60,
      text: 'کدام دستور برای ایجاد گواهی‌های SSL استفاده می‌شود؟',
      options: ['ssl', 'cert', 'openssl req', 'certificate'],
      correct: 2
    }
  ],

  "201": [
    { id: 1, text: 'کدام فایل برای Bootloader Grub است؟', options: ['/boot/grub', '/grub/boot', '/etc/grub', '/var/grub'], correct: 0 },
    { id: 2, text: 'کدام دستور برای نمایش kernel messages استفاده می‌شود؟', options: ['dmesg', 'journalctl', 'tail /var/log/kernel', 'موارد 1 و 2'], correct: 3 },
    { id: 3, text: 'کدام دستور برای مدیریت بوت پارامترها استفاده می‌شود؟', options: ['bootctl', 'grub-editenv', 'kernel-param', 'boot-manager'], correct: 0 },
    { id: 4, text: 'کدام دستور برای ایجاد initramfs استفاده می‌شود؟', options: ['mkinitramfs', 'update-initramfs', 'dracut', 'همه موارد'], correct: 3 },
    { id: 5, text: 'کدام فایل برای runlevel سیستم است؟', options: ['/etc/rc.local', '/etc/inittab', '/etc/systemd/default.target', 'موارد 2 و 3'], correct: 3 },
    { id: 6, text: 'کدام runlevel برای GUI است؟', options: ['3', '4', '5', '6'], correct: 2 },
    { id: 7, text: 'کدام دستور برای نمایش runlevel فعلی استفاده می‌شود؟', options: ['runlevel', 'init', 'systemctl', 'target'], correct: 0 },
    { id: 8, text: 'کدام دستور برای تغییر runlevel استفاده می‌شود؟', options: ['runlevel', 'init', 'telinit', 'موارد 2 و 3'], correct: 3 },
    { id: 9, text: 'LVM برای چه کاری استفاده می‌شود؟', options: ['مدیریت فضای دیسک', 'بکاپ', 'نتورک', 'سرویس‌ها'], correct: 0 },
    { id: 10, text: 'کدام دستور برای ایجاد Physical Volume استفاده می‌شود؟', options: ['pvcreate', 'pvcreate', 'lvcreate', 'vgcreate'], correct: 0 },
    { id: 11, text: 'کدام دستور برای ایجاد Volume Group استفاده می‌شود؟', options: ['pvcreate', 'vgcreate', 'lvcreate', 'lvextend'], correct: 1 },
    { id: 12, text: 'کدام دستور برای ایجاد Logical Volume استفاده می‌شود؟', options: ['pvcreate', 'vgcreate', 'lvcreate', 'lvextend'], correct: 2 },
    { id: 13, text: 'کدام دستور برای بزرگ‌کردن Logical Volume استفاده می‌شود؟', options: ['lvcreate', 'lvextend', 'lvreduce', 'lvremove'], correct: 1 },
    { id: 14, text: 'کدام دستور برای کوچک‌کردن Logical Volume استفاده می‌شود؟', options: ['lvcreate', 'lvextend', 'lvreduce', 'lvremove'], correct: 2 },
    { id: 15, text: 'RAID 1 برای چه کاری است؟', options: ['Mirror', 'Stripe', 'Striping+Parity', 'همه'], correct: 0 },
    { id: 16, text: 'RAID 5 برای چه کاری است؟', options: ['Mirror', 'Stripe', 'Striping+Parity', 'Parity'], correct: 2 },
    { id: 17, text: 'کدام دستور برای مدیریت RAID استفاده می‌شود؟', options: ['mdadm', 'raidctl', 'raid', 'mdctl'], correct: 0 },
    { id: 18, text: 'کدام دستور برای mount کردن لازمی استفاده می‌شود؟', options: ['mount', 'mount -a', 'mount -l', 'mount -v'], correct: 0 },
    { id: 19, text: 'کدام دستور برای unmount کردن استفاده می‌شود؟', options: ['umount', 'mount -u', 'unmount', 'eject'], correct: 0 },
    { id: 20, text: 'کدام دستور برای نمایش quotas استفاده می‌شود؟', options: ['quota', 'quotacheck', 'quotaon', 'edquota'], correct: 0 },
    { id: 21, text: 'کدام فایل برای تنظیمات Firewall است؟', options: ['/etc/iptables', '/etc/nftables.conf', '/etc/firewalld/firewalld.conf', 'همه'], correct: 3 },
    { id: 22, text: 'کدام دستور برای مدیریت Firewall Rules استفاده می‌شود؟', options: ['iptables', 'firewall-cmd', 'nft', 'همه'], correct: 3 },
    { id: 23, text: 'کدام دستور برای نمایش iptables rules استفاده می‌شود؟', options: ['iptables -L', 'iptables -n', 'iptables -v', 'همه'], correct: 3 },
    { id: 24, text: 'کدام دستور برای اضافه کردن iptables rule استفاده می‌شود؟', options: ['iptables -A', 'iptables -I', 'iptables -P', 'موارد 1 و 2'], correct: 3 },
    { id: 25, text: 'کدام دستور برای حذف iptables rule استفاده می‌شود؟', options: ['iptables -D', 'iptables -R', 'iptables -X', 'موارد 1 و 2'], correct: 1 },
    { id: 26, text: 'SSH default port کدام است؟', options: ['22', '23', '2222', '222'], correct: 0 },
    { id: 27, text: 'کدام فایل برای SSH configuration است؟', options: ['/etc/ssh/ssh_config', '/etc/ssh/sshd_config', '/root/.ssh/config', 'همه'], correct: 3 },
    { id: 28, text: 'کدام دستور برای ایجاد SSH keys استفاده می‌شود؟', options: ['ssh-gen', 'ssh-keygen', 'ssh-key-gen', 'keygen'], correct: 1 },
    { id: 29, text: 'کدام دستور برای کپی کردن SSH public key استفاده می‌شود؟', options: ['ssh-copy-id', 'ssh-copy-key', 'copy-id', 'scp'], correct: 0 },
    { id: 30, text: 'کدام دستور برای فعال کردن X11 forwarding استفاده می‌شود؟', options: ['ssh -X', 'ssh -Y', 'ssh -x', 'موارد 1 و 2'], correct: 3 }
  ],

  "202": [
    { id: 1, text: 'کدام دستور برای نمایش اطلاعات DNS server است؟', options: ['nslookup', 'dig', 'host', 'همه'], correct: 3 },
    { id: 2, text: 'کدام فایل برای تنظیمات DNS server (BIND) است؟', options: ['/etc/bind/named.conf', '/etc/named.conf', '/var/named/', 'همه'], correct: 3 },
    { id: 3, text: 'کدام دستور برای شروع سرویس DNS است؟', options: ['service bind9 start', 'systemctl start named', 'service dns start', 'موارد 1 و 2'], correct: 3 },
    { id: 4, text: 'کدام دستور برای نمایش network statistics استفاده می‌شود؟', options: ['netstat', 'ss', 'nstat', 'موارد 1 و 2'], correct: 3 },
    { id: 5, text: 'کدام دستور برای نمایش routing table است؟', options: ['route', 'netstat -r', 'ip route', 'همه'], correct: 3 },
    { id: 6, text: 'کدام دستور برای اضافه کردن route استفاده می‌شود؟', options: ['route add', 'ip route add', 'network route', 'موارد 1 و 2'], correct: 3 },
    { id: 7, text: 'کدام دستور برای نمایش network interfaces است؟', options: ['ifconfig', 'ip link', 'ip addr', 'موارد 2 و 3'], correct: 3 },
    { id: 8, text: 'کدام دستور برای تنظیم IP address استفاده می‌شود؟', options: ['ifconfig', 'ip addr add', 'ipconfig', 'موارد 1 و 2'], correct: 3 },
    { id: 9, text: 'کدام فایل برای تنظیمات network (Debian) است؟', options: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netplan/', 'همه'], correct: 3 },
    { id: 10, text: 'کدام دستور برای نمایش listening ports است؟', options: ['netstat -l', 'ss -l', 'lsof -i', 'همه'], correct: 3 },
    { id: 11, text: 'کدام دستور برای نمایش established connections است؟', options: ['netstat -e', 'netstat -t', 'ss -t', 'موارد 2 و 3'], correct: 3 },
    { id: 12, text: 'کدام دستور برای نمایش bandwidth usage است؟', options: ['iftop', 'nethogs', 'bwm-ng', 'همه'], correct: 3 },
    { id: 13, text: 'کدام دستور برای نمایش TCP/IP stack statistics است؟', options: ['netstat -s', 'ss -s', 'nstat', 'همه'], correct: 3 },
    { id: 14, text: 'کدام دستور برای trace route packets است؟', options: ['traceroute', 'tracepath', 'mtr', 'همه'], correct: 3 },
    { id: 15, text: 'Proxy Server برای چه کاری است؟', options: ['شبکه', 'امنیت', 'بهتری کارایی', 'همه'], correct: 3 },
    { id: 16, text: 'کدام server برای Proxy استفاده می‌شود؟', options: ['Squid', 'Tinyproxy', 'Nginx', 'همه'], correct: 3 },
    { id: 17, text: 'کدام دستور برای نمایش active users است؟', options: ['who', 'w', 'users', 'همه'], correct: 3 },
    { id: 18, text: 'کدام دستور برای نمایش login history است؟', options: ['last', 'lastlog', 'wtmp', 'موارد 1 و 2'], correct: 3 },
    { id: 19, text: 'کدام دستور برای نمایش failed login attempts است؟', options: ['lastb', 'btmp', 'faillog', 'همه'], correct: 3 },
    { id: 20, text: 'کدام دستور برای نمایش disk usage per user است؟', options: ['quota', 'du', 'df -h', 'quotacheck'], correct: 0 }
  ]
};

// ✅ کامل و حاضر برای استفاده!
