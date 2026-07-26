// ============================================================
// Linux Exam Questions (LPIC-1 & LPIC-2) - Bilingual Edition
// سوالات آزمون Linux (LPIC-1 و LPIC-2) - نسخه دو زبانه
// ============================================================

const LINUX_QUESTIONS = {
  "101": [
    {
      id: 1,
      text: {
        fa: 'کدام دستور برای مشاهده اطلاعات دستگاه‌های PCI متصل به سیستم استفاده می‌شود؟',
        en: 'Which command is used to view information about PCI devices connected to the system?'
      },
      options: {
        fa: ['lsusb', 'lspci', 'lsblk', 'lsof'],
        en: ['lsusb', 'lspci', 'lsblk', 'lsof']
      },
      correct: 1
    },
    {
      id: 2,
      text: {
        fa: 'کدام دستور اطلاعات دستگاه‌های USB متصل را نمایش می‌دهد؟',
        en: 'Which command displays information about connected USB devices?'
      },
      options: {
        fa: ['lspci', 'lsusb', 'lsmod', 'lscpu'],
        en: ['lspci', 'lsusb', 'lsmod', 'lscpu']
      },
      correct: 1
    },
    {
      id: 3,
      text: {
        fa: 'کدام دستور برای دیدن فایل‌های آپشن بوت استفاده می‌شود؟',
        en: 'Which command is used to view boot option files?'
      },
      options: {
        fa: ['cat /proc/cmdline', 'dmesg', 'lsmod', 'cat /etc/fstab'],
        en: ['cat /proc/cmdline', 'dmesg', 'lsmod', 'cat /etc/fstab']
      },
      correct: 0
    },
    {
      id: 4,
      text: {
        fa: 'کدام فایل حاوی اطلاعات نقاط اتصال (Mount Points) سیستم است؟',
        en: 'Which file contains information about system mount points?'
      },
      options: {
        fa: ['/etc/fstab', '/etc/mtab', '/proc/mounts', 'همه موارد فوق'],
        en: ['/etc/fstab', '/etc/mtab', '/proc/mounts', 'All of the above']
      },
      correct: 3
    },
    {
      id: 5,
      text: {
        fa: 'کدام دستور برای تعیین کردن سطح اجازه دسترسی فایل استفاده می‌شود؟',
        en: 'Which command is used to set file permission levels?'
      },
      options: {
        fa: ['chown', 'chmod', 'chgrp', 'ls -l'],
        en: ['chown', 'chmod', 'chgrp', 'ls -l']
      },
      correct: 1
    },
    {
      id: 6,
      text: {
        fa: 'دستور chmod 755 چه معنی دارد؟',
        en: 'What does the chmod 755 command mean?'
      },
      options: {
        fa: ['صاحب: rwx، گروه: r-x، دیگران: r-x', 'صاحب: rwx، گروه: rw-، دیگران: r--', 'صاحب: rw-، گروه: rw-، دیگران: r--', 'صاحب: r-x، گروه: r-x، دیگران: r-x'],
        en: ['Owner: rwx, Group: r-x, Others: r-x', 'Owner: rwx, Group: rw-, Others: r--', 'Owner: rw-, Group: rw-, Others: r--', 'Owner: r-x, Group: r-x, Others: r-x']
      },
      correct: 0
    },
    {
      id: 7,
      text: {
        fa: 'کدام دستور برای تغییر صاحب فایل استفاده می‌شود؟',
        en: 'Which command is used to change the file owner?'
      },
      options: {
        fa: ['chmod', 'chgrp', 'chown', 'chsh'],
        en: ['chmod', 'chgrp', 'chown', 'chsh']
      },
      correct: 2
    },
    {
      id: 8,
      text: {
        fa: 'درایو SSD چه مزیتی نسبت به HDD دارد؟',
        en: 'What advantage does an SSD drive have over an HDD?'
      },
      options: {
        fa: ['ظرفیت بیشتر', 'سرعت بیشتر و کم‌تر نویز', 'دمای کمتر', 'مصرف برق کمتر'],
        en: ['More capacity', 'Higher speed and less noise', 'Lower temperature', 'Less power consumption']
      },
      correct: 1
    },
    {
      id: 9,
      text: {
        fa: 'کدام فایل برای نصب بسته‌های نرم‌افزار Debian استفاده می‌شود؟',
        en: 'Which file is used to install Debian software packages?'
      },
      options: {
        fa: ['.rpm', '.deb', '.tar.gz', '.exe'],
        en: ['.rpm', '.deb', '.tar.gz', '.exe']
      },
      correct: 1
    },
    {
      id: 10,
      text: {
        fa: 'کدام دستور برای جستجوی دستور‌های شل استفاده می‌شود؟',
        en: 'Which command is used to search for shell commands?'
      },
      options: {
        fa: ['man', 'which', 'whereis', 'find'],
        en: ['man', 'which', 'whereis', 'find']
      },
      correct: 1
    },
    {
      id: 11,
      text: {
        fa: 'کدام دستور برای نمایش محتویات یک فایل متن استفاده می‌شود؟',
        en: 'Which command is used to display the contents of a text file?'
      },
      options: {
        fa: ['cat', 'less', 'more', 'همه موارد فوق'],
        en: ['cat', 'less', 'more', 'All of the above']
      },
      correct: 3
    },
    {
      id: 12,
      text: {
        fa: 'دستور grep برای چه کاری استفاده می‌شود؟',
        en: 'What is the grep command used for?'
      },
      options: {
        fa: ['جستجوی الگو در فایل‌ها', 'اصلاح متن', 'حذف خطوط', 'ترتیب داده‌ها'],
        en: ['Pattern search in files', 'Text editing', 'Deleting lines', 'Sorting data']
      },
      correct: 0
    },
    {
      id: 13,
      text: {
        fa: 'کدام دستور برای جستجوی فایل در سیستم استفاده می‌شود؟',
        en: 'Which command is used to search for files in the system?'
      },
      options: {
        fa: ['locate', 'find', 'which', 'موارد 1 و 2 درست'],
        en: ['locate', 'find', 'which', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 14,
      text: {
        fa: 'دستور wc -l file.txt چه چیزی را برمی‌گرداند؟',
        en: 'What does the wc -l file.txt command return?'
      },
      options: {
        fa: ['تعداد کاراکترهای فایل', 'تعداد کلمات فایل', 'تعداد خطوط فایل', 'حجم فایل'],
        en: ['Number of characters in the file', 'Number of words in the file', 'Number of lines in the file', 'File size']
      },
      correct: 2
    },
    {
      id: 15,
      text: {
        fa: 'کدام دستور برای نمایش 10 خط اول فایل استفاده می‌شود؟',
        en: 'Which command is used to display the first 10 lines of a file?'
      },
      options: {
        fa: ['tail -10', 'head -10', 'cat | head 10', 'sed -n "1,10p"'],
        en: ['tail -10', 'head -10', 'cat | head 10', 'sed -n "1,10p"']
      },
      correct: 1
    },
    {
      id: 16,
      text: {
        fa: 'کدام دستور برای نمایش 10 خط آخر فایل استفاده می‌شود؟',
        en: 'Which command is used to display the last 10 lines of a file?'
      },
      options: {
        fa: ['head -10', 'tail -10', 'sed -n "$-10,$p"', 'less'],
        en: ['head -10', 'tail -10', 'sed -n "$-10,$p"', 'less']
      },
      correct: 1
    },
    {
      id: 17,
      text: {
        fa: 'دستور awk برای چه کاری استفاده می‌شود؟',
        en: 'What is the awk command used for?'
      },
      options: {
        fa: ['جستجو و اصلاح متن', 'پردازش و استخراج داده‌های متنی', 'حذف فایل‌ها', 'تغییر اجازه دسترسی'],
        en: ['Search and edit text', 'Processing and extracting text data', 'Deleting files', 'Changing permissions']
      },
      correct: 1
    },
    {
      id: 18,
      text: {
        fa: 'کدام دستور برای ترتیب خطوط فایل استفاده می‌شود؟',
        en: 'Which command is used to sort file lines?'
      },
      options: {
        fa: ['grep', 'sort', 'sed', 'cut'],
        en: ['grep', 'sort', 'sed', 'cut']
      },
      correct: 1
    },
    {
      id: 19,
      text: {
        fa: 'دستور cut برای چه کاری استفاده می‌شود؟',
        en: 'What is the cut command used for?'
      },
      options: {
        fa: ['حذف فایل‌ها', 'جدا کردن ستون‌ها یا بخش‌های متن', 'ترتیب داده‌ها', 'جایگزینی متن'],
        en: ['Deleting files', 'Separating columns or text sections', 'Sorting data', 'Text replacement']
      },
      correct: 1
    },
    {
      id: 20,
      text: {
        fa: 'کدام دستور برای شمارش تعداد فایل‌ها در یک دایرکتوری استفاده می‌شود؟',
        en: 'Which command is used to count the number of files in a directory?'
      },
      options: {
        fa: ['ls | wc -l', 'find . -type f | wc -l', 'du -sh .', 'موارد 1 و 2 درست'],
        en: ['ls | wc -l', 'find . -type f | wc -l', 'du -sh .', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 21,
      text: {
        fa: 'فایل سیستم ext4 چه ویژگی‌های خاصی دارد؟',
        en: 'What special features does the ext4 filesystem have?'
      },
      options: {
        fa: ['پشتیبانی از فایل‌های بزرگ', 'سرعت بیشتر نسبت به ext3', 'بازیابی بهتر', 'همه موارد فوق'],
        en: ['Support for large files', 'Faster than ext3', 'Better recovery', 'All of the above']
      },
      correct: 3
    },
    {
      id: 22,
      text: {
        fa: 'کدام دستور برای نمایش اطلاعات فایل سیستم استفاده می‌شود؟',
        en: 'Which command is used to display filesystem information?'
      },
      options: {
        fa: ['df', 'du', 'stat', 'موارد 1 و 2 درست'],
        en: ['df', 'du', 'stat', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 23,
      text: {
        fa: 'دستور du -sh برای چه کاری استفاده می‌شود؟',
        en: 'What is the du -sh command used for?'
      },
      options: {
        fa: ['نمایش فضای خالی', 'نمایش کل استفاده شده فضای دیسک', 'نمایش نوع فایل سیستم', 'نمایش نقاط اتصال'],
        en: ['Display free space', 'Display total disk space used', 'Display filesystem type', 'Display mount points']
      },
      correct: 1
    },
    {
      id: 24,
      text: {
        fa: 'کدام دستور برای mount کردن فایل سیستم استفاده می‌شود؟',
        en: 'Which command is used to mount a filesystem?'
      },
      options: {
        fa: ['unmount', 'mount', 'fsck', 'mkfs'],
        en: ['unmount', 'mount', 'fsck', 'mkfs']
      },
      correct: 1
    },
    {
      id: 25,
      text: {
        fa: 'دستور fdisk برای چه کاری استفاده می‌شود؟',
        en: 'What is the fdisk command used for?'
      },
      options: {
        fa: ['مدیریت پارتیشن‌های دیسک', 'بررسی فایل سیستم', 'نمایش فضای دیسک', 'اتصال دیسک'],
        en: ['Managing disk partitions', 'Checking filesystem', 'Displaying disk space', 'Connecting disk']
      },
      correct: 0
    },
    {
      id: 26,
      text: {
        fa: 'کدام دستور برای بررسی و تصحیح خرابی‌های فایل سیستم استفاده می‌شود؟',
        en: 'Which command is used to check and repair filesystem corruption?'
      },
      options: {
        fa: ['mount', 'fsck', 'mkfs', 'partprobe'],
        en: ['mount', 'fsck', 'mkfs', 'partprobe']
      },
      correct: 1
    },
    {
      id: 27,
      text: {
        fa: 'دستور mkfs برای چه کاری استفاده می‌شود؟',
        en: 'What is the mkfs command used for?'
      },
      options: {
        fa: ['بررسی فایل سیستم', 'ایجاد فایل سیستم جدید', 'mount کردن', 'حذف فایل سیستم'],
        en: ['Checking filesystem', 'Creating new filesystem', 'Mounting', 'Deleting filesystem']
      },
      correct: 1
    },
    {
      id: 28,
      text: {
        fa: 'کدام فایل برای ذخیره کلمات عبور کاربران استفاده می‌شود؟',
        en: 'Which file is used to store user passwords?'
      },
      options: {
        fa: ['/etc/group', '/etc/passwd', '/etc/shadow', '/etc/sudoers'],
        en: ['/etc/group', '/etc/passwd', '/etc/shadow', '/etc/sudoers']
      },
      correct: 2
    },
    {
      id: 29,
      text: {
        fa: 'کدام دستور برای اضافه کردن کاربر جدید استفاده می‌شود؟',
        en: 'Which command is used to add a new user?'
      },
      options: {
        fa: ['usermod', 'userdel', 'useradd', 'user -add'],
        en: ['usermod', 'userdel', 'useradd', 'user -add']
      },
      correct: 2
    },
    {
      id: 30,
      text: {
        fa: 'کدام دستور برای تغییر رمز عبور کاربر استفاده می‌شود؟',
        en: 'Which command is used to change a user\'s password?'
      },
      options: {
        fa: ['chpass', 'passwd', 'chpwd', 'setpass'],
        en: ['chpass', 'passwd', 'chpwd', 'setpass']
      },
      correct: 1
    },
    {
      id: 31,
      text: {
        fa: 'کدام دستور برای حذف کاربر استفاده می‌شود؟',
        en: 'Which command is used to delete a user?'
      },
      options: {
        fa: ['usermod', 'useradd', 'userdel', 'userlist'],
        en: ['usermod', 'useradd', 'userdel', 'userlist']
      },
      correct: 2
    },
    {
      id: 32,
      text: {
        fa: 'کدام فایل برای نگهداری گروه‌های کاربری استفاده می‌شود؟',
        en: 'Which file is used to store user groups?'
      },
      options: {
        fa: ['/etc/passwd', '/etc/group', '/etc/shadow', '/etc/users'],
        en: ['/etc/passwd', '/etc/group', '/etc/shadow', '/etc/users']
      },
      correct: 1
    },
    {
      id: 33,
      text: {
        fa: 'کدام دستور برای مشاهده گروه‌های کاربر فعلی استفاده می‌شود؟',
        en: 'Which command is used to view the current user\'s groups?'
      },
      options: {
        fa: ['id', 'whoami', 'groups', 'موارد 1 و 3 درست'],
        en: ['id', 'whoami', 'groups', 'Options 1 and 3 are correct']
      },
      correct: 3
    },
    {
      id: 34,
      text: {
        fa: 'دستور sudo برای چه کاری استفاده می‌شود؟',
        en: 'What is the sudo command used for?'
      },
      options: {
        fa: ['اجازه دادن به کاربران عادی برای اجرای دستورات ریشه', 'تغییر شناسه کاربر', 'ایجاد کاربر جدید', 'حذف اجازه دسترسی'],
        en: ['Allowing regular users to execute root commands', 'Changing user ID', 'Creating new user', 'Removing permissions']
      },
      correct: 0
    },
    {
      id: 35,
      text: {
        fa: 'کدام فایل برای تنظیم اجازه‌های sudo استفاده می‌شود؟',
        en: 'Which file is used to configure sudo permissions?'
      },
      options: {
        fa: ['/etc/sudoers', '/etc/sudo', '/root/.sudoers', '/etc/security/sudo'],
        en: ['/etc/sudoers', '/etc/sudo', '/root/.sudoers', '/etc/security/sudo']
      },
      correct: 0
    },
    {
      id: 36,
      text: {
        fa: 'دستور chmod a+x برای چه کاری استفاده می‌شود؟',
        en: 'What is the chmod a+x command used for?'
      },
      options: {
        fa: ['حذف اجازه اجرا از همه', 'اضافه کردن اجازه اجرا برای همه', 'حذف اجازه نوشتن', 'اضافه کردن اجازه خواندن'],
        en: ['Removing execute permission from all', 'Adding execute permission for all', 'Removing write permission', 'Adding read permission']
      },
      correct: 1
    },
    {
      id: 37,
      text: {
        fa: 'کدام دستور برای نمایش ساختار دایرکتوری استفاده می‌شود؟',
        en: 'Which command is used to display directory structure?'
      },
      options: {
        fa: ['ls -la', 'tree', 'find', 'موارد 1 و 2 درست'],
        en: ['ls -la', 'tree', 'find', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 38,
      text: {
        fa: 'کدام دستور برای کپی کردن فایل‌ها استفاده می‌شود؟',
        en: 'Which command is used to copy files?'
      },
      options: {
        fa: ['mv', 'cp', 'rm', 'ls'],
        en: ['mv', 'cp', 'rm', 'ls']
      },
      correct: 1
    },
    {
      id: 39,
      text: {
        fa: 'کدام دستور برای انتقال یا تغییر نام فایل استفاده می‌شود؟',
        en: 'Which command is used to move or rename files?'
      },
      options: {
        fa: ['cp', 'mv', 'rm', 'ln'],
        en: ['cp', 'mv', 'rm', 'ln']
      },
      correct: 1
    },
    {
      id: 40,
      text: {
        fa: 'کدام دستور برای ایجاد لینک سخت استفاده می‌شود؟',
        en: 'Which command is used to create a hard link?'
      },
      options: {
        fa: ['ln -s', 'ln', 'link', 'symlink'],
        en: ['ln -s', 'ln', 'link', 'symlink']
      },
      correct: 1
    },
    {
      id: 41,
      text: {
        fa: 'کدام دستور برای ایجاد لینک نرم (Symbolic Link) استفاده می‌شود؟',
        en: 'Which command is used to create a symbolic link?'
      },
      options: {
        fa: ['ln', 'ln -s', 'link -s', 'symlink'],
        en: ['ln', 'ln -s', 'link -s', 'symlink']
      },
      correct: 1
    },
    {
      id: 42,
      text: {
        fa: 'کدام دستور برای حذف دایرکتوری استفاده می‌شود؟',
        en: 'Which command is used to delete a directory?'
      },
      options: {
        fa: ['rm', 'rmdir', 'rm -rf', 'موارد 2 و 3 درست'],
        en: ['rm', 'rmdir', 'rm -rf', 'Options 2 and 3 are correct']
      },
      correct: 3
    },
    {
      id: 43,
      text: {
        fa: 'کدام دستور برای ایجاد دایرکتوری جدید استفاده می‌شود؟',
        en: 'Which command is used to create a new directory?'
      },
      options: {
        fa: ['mkdir', 'createdir', 'newdir', 'mkpath'],
        en: ['mkdir', 'createdir', 'newdir', 'mkpath']
      },
      correct: 0
    },
    {
      id: 44,
      text: {
        fa: 'دستور tar -xzf برای چه کاری استفاده می‌شود؟',
        en: 'What is the tar -xzf command used for?'
      },
      options: {
        fa: ['ایجاد فایل فشرده gzip', 'استخراج فایل فشرده gzip', 'حذف فایل', 'نمایش محتویات'],
        en: ['Creating gzip compressed file', 'Extracting gzip compressed file', 'Deleting file', 'Displaying contents']
      },
      correct: 1
    },
    {
      id: 45,
      text: {
        fa: 'کدام دستور برای فشرده کردن فایل‌ها استفاده می‌شود؟',
        en: 'Which command is used to compress files?'
      },
      options: {
        fa: ['zip', 'gzip', 'tar', 'موارد 1 و 2 درست'],
        en: ['zip', 'gzip', 'tar', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 46,
      text: {
        fa: 'دستور ps برای چه کاری استفاده می‌شود؟',
        en: 'What is the ps command used for?'
      },
      options: {
        fa: ['نمایش فرآیندهای در حال اجرا', 'نمایش حالت سیستم', 'نمایش فضای دیسک', 'نمایش کاربران متصل'],
        en: ['Displaying running processes', 'Displaying system status', 'Displaying disk space', 'Displaying connected users']
      },
      correct: 0
    },
    {
      id: 47,
      text: {
        fa: 'کدام دستور برای نمایش فرآیندهای به صورت تصویری استفاده می‌شود؟',
        en: 'Which command is used to display processes visually?'
      },
      options: {
        fa: ['ps', 'top', 'htop', 'موارد 2 و 3 درست'],
        en: ['ps', 'top', 'htop', 'Options 2 and 3 are correct']
      },
      correct: 3
    },
    {
      id: 48,
      text: {
        fa: 'کدام دستور برای متوقف کردن یک فرآیند استفاده می‌شود؟',
        en: 'Which command is used to stop a process?'
      },
      options: {
        fa: ['stop', 'kill', 'terminate', 'halt'],
        en: ['stop', 'kill', 'terminate', 'halt']
      },
      correct: 1
    },
    {
      id: 49,
      text: {
        fa: 'دستور nice برای چه کاری استفاده می‌شود؟',
        en: 'What is the nice command used for?'
      },
      options: {
        fa: ['تغییر اولویت فرآیند', 'مشاهده فرآیندها', 'متوقف کردن فرآیند', 'ایجاد فرآیند'],
        en: ['Changing process priority', 'Viewing processes', 'Stopping process', 'Creating process']
      },
      correct: 0
    },
    {
      id: 50,
      text: {
        fa: 'کدام دستور برای نمایش اطلاعات سیستم استفاده می‌شود؟',
        en: 'Which command is used to display system information?'
      },
      options: {
        fa: ['uname', 'systeminfo', 'info', 'about'],
        en: ['uname', 'systeminfo', 'info', 'about']
      },
      correct: 0
    },
    {
      id: 51,
      text: {
        fa: 'دستور uname -a برای چه کاری استفاده می‌شود؟',
        en: 'What is the uname -a command used for?'
      },
      options: {
        fa: ['نام کاربر', 'تمام اطلاعات سیستم', 'نام میزبان', 'نسخه کرنل'],
        en: ['Username', 'All system information', 'Hostname', 'Kernel version']
      },
      correct: 1
    },
    {
      id: 52,
      text: {
        fa: 'کدام دستور برای نمایش کاربران متصل به سیستم استفاده می‌شود؟',
        en: 'Which command is used to display users connected to the system?'
      },
      options: {
        fa: ['who', 'whoami', 'id', 'users'],
        en: ['who', 'whoami', 'id', 'users']
      },
      correct: 0
    },
    {
      id: 53,
      text: {
        fa: 'کدام دستور برای نمایش کاربر فعلی استفاده می‌شود؟',
        en: 'Which command is used to display the current user?'
      },
      options: {
        fa: ['who', 'whoami', 'id', 'current'],
        en: ['who', 'whoami', 'id', 'current']
      },
      correct: 1
    },
    {
      id: 54,
      text: {
        fa: 'کدام دستور برای نمایش آخرین دستورات استفاده شده استفاده می‌شود؟',
        en: 'Which command is used to display recently used commands?'
      },
      options: {
        fa: ['log', 'history', 'last', 'record'],
        en: ['log', 'history', 'last', 'record']
      },
      correct: 1
    },
    {
      id: 55,
      text: {
        fa: 'کدام دستور برای تغییر دایرکتوری کاری استفاده می‌شود؟',
        en: 'Which command is used to change the working directory?'
      },
      options: {
        fa: ['changedir', 'cd', 'chdir', 'goto'],
        en: ['changedir', 'cd', 'chdir', 'goto']
      },
      correct: 1
    },
    {
      id: 56,
      text: {
        fa: 'کدام دستور برای نمایش مسیر دایرکتوری کاری فعلی استفاده می‌شود؟',
        en: 'Which command is used to display the current working directory path?'
      },
      options: {
        fa: ['getdir', 'pwd', 'where', 'path'],
        en: ['getdir', 'pwd', 'where', 'path']
      },
      correct: 1
    },
    {
      id: 57,
      text: {
        fa: 'کدام دستور برای نمایش متغیرهای محیطی استفاده می‌شود؟',
        en: 'Which command is used to display environment variables?'
      },
      options: {
        fa: ['env', 'set', 'export', 'vars'],
        en: ['env', 'set', 'export', 'vars']
      },
      correct: 0
    },
    {
      id: 58,
      text: {
        fa: 'دستور echo برای چه کاری استفاده می‌شود؟',
        en: 'What is the echo command used for?'
      },
      options: {
        fa: ['حذف متن', 'نمایش متن', 'ذخیره متن', 'ویرایش متن'],
        en: ['Deleting text', 'Displaying text', 'Saving text', 'Editing text']
      },
      correct: 1
    },
    {
      id: 59,
      text: {
        fa: 'کدام دستور برای ایجاد فایل خالی استفاده می‌شود؟',
        en: 'Which command is used to create an empty file?'
      },
      options: {
        fa: ['touch', 'create', 'new', 'make'],
        en: ['touch', 'create', 'new', 'make']
      },
      correct: 0
    },
    {
      id: 60,
      text: {
        fa: 'دستور >> برای چه کاری استفاده می‌شود؟',
        en: 'What is the >> operator used for?'
      },
      options: {
        fa: ['جایگزینی محتویات فایل', 'افزودن محتویات به پایان فایل', 'حذف فایل', 'خواندن فایل'],
        en: ['Replacing file contents', 'Appending contents to end of file', 'Deleting file', 'Reading file']
      },
      correct: 1
    }
  ],
  "102": [
    {
      id: 1,
      text: {
        fa: 'کدام شل (Shell) پیش‌فرض برای کاربران عادی است؟',
        en: 'Which shell is the default for regular users?'
      },
      options: {
        fa: ['/bin/sh', '/bin/bash', '/bin/csh', '/bin/ksh'],
        en: ['/bin/sh', '/bin/bash', '/bin/csh', '/bin/ksh']
      },
      correct: 1
    },
    {
      id: 2,
      text: {
        fa: 'کدام فایل برای تنظیمات شروع شل استفاده می‌شود؟',
        en: 'Which file is used for shell startup configuration?'
      },
      options: {
        fa: ['.bashrc', '.bash_profile', '.bash_login', 'همه موارد فوق'],
        en: ['.bashrc', '.bash_profile', '.bash_login', 'All of the above']
      },
      correct: 3
    },
    {
      id: 3,
      text: {
        fa: 'دستور source برای چه کاری استفاده می‌شود؟',
        en: 'What is the source command used for?'
      },
      options: {
        fa: ['نمایش محتویات فایل', 'اجرای دستورات شل از فایل', 'حذف فایل', 'کپی فایل'],
        en: ['Displaying file contents', 'Executing shell commands from file', 'Deleting file', 'Copying file']
      },
      correct: 1
    },
    {
      id: 4,
      text: {
        fa: 'کدام متغیر محیطی مسیر برنامه‌ها را نشان می‌دهد؟',
        en: 'Which environment variable shows the program path?'
      },
      options: {
        fa: ['HOME', 'PATH', 'USER', 'SHELL'],
        en: ['HOME', 'PATH', 'USER', 'SHELL']
      },
      correct: 1
    },
    {
      id: 5,
      text: {
        fa: 'دستور export برای چه کاری استفاده می‌شود؟',
        en: 'What is the export command used for?'
      },
      options: {
        fa: ['کپی کردن فایل', 'دسترسی به متغیر در فرآیندهای فرزند', 'حذف متغیر', 'نمایش متغیر'],
        en: ['Copying a file', 'Accessing variable in child processes', 'Deleting variable', 'Displaying variable']
      },
      correct: 1
    },
    {
      id: 6,
      text: {
        fa: 'کدام دستور برای ایجاد متغیر محیطی استفاده می‌شود؟',
        en: 'Which command is used to create an environment variable?'
      },
      options: {
        fa: ['let', 'set', 'export', 'define'],
        en: ['let', 'set', 'export', 'define']
      },
      correct: 1
    },
    {
      id: 7,
      text: {
        fa: 'در اسکریپت شل، برای چه کاری از {} استفاده می‌شود؟',
        en: 'In shell scripts, what are {} used for?'
      },
      options: {
        fa: ['کامنت‌ها', 'بدنه حلقه', 'گروه‌بندی دستورات', 'آرایه‌ها'],
        en: ['Comments', 'Loop body', 'Grouping commands', 'Arrays']
      },
      correct: 2
    },
    {
      id: 8,
      text: {
        fa: 'کدام دستور برای بررسی شرط استفاده می‌شود؟',
        en: 'Which command is used to check conditions?'
      },
      options: {
        fa: ['if', 'then', 'else', 'elif'],
        en: ['if', 'then', 'else', 'elif']
      },
      correct: 0
    },
    {
      id: 9,
      text: {
        fa: 'دستور for در شل برای چه کاری استفاده می‌شود؟',
        en: 'What is the for command in shell used for?'
      },
      options: {
        fa: ['شرط‌های', 'حلقه تکرار', 'تابع‌ها', 'دستورات شرطی'],
        en: ['Conditions', 'Loop iteration', 'Functions', 'Conditional commands']
      },
      correct: 1
    },
    {
      id: 10,
      text: {
        fa: 'کدام دستور برای تکرار حلقه تا زمان درست بودن شرط استفاده می‌شود؟',
        en: 'Which command is used to repeat a loop while a condition is true?'
      },
      options: {
        fa: ['for', 'while', 'until', 'do'],
        en: ['for', 'while', 'until', 'do']
      },
      correct: 1
    },
    {
      id: 11,
      text: {
        fa: 'در اسکریپت شل، آرگومان‌های ورودی با چه نشان داده می‌شوند؟',
        en: 'In shell scripts, how are input arguments represented?'
      },
      options: {
        fa: ['&1, &2, &3', '%1, %2, %3', '$1, $2, $3', '@1, @2, @3'],
        en: ['&1, &2, &3', '%1, %2, %3', '$1, $2, $3', '@1, @2, @3']
      },
      correct: 2
    },
    {
      id: 12,
      text: {
        fa: 'دستور $# برای چه کاری استفاده می‌شود؟',
        en: 'What is the $# command used for?'
      },
      options: {
        fa: ['نام اسکریپت', 'تعداد آرگومان‌ها', 'شماره خط', 'شناسه فرآیند'],
        en: ['Script name', 'Number of arguments', 'Line number', 'Process ID']
      },
      correct: 1
    },
    {
      id: 13,
      text: {
        fa: 'کدام دستور برای ایجاد تابع در شل استفاده می‌شود؟',
        en: 'Which command is used to create a function in shell?'
      },
      options: {
        fa: ['def', 'func', 'function', 'sub'],
        en: ['def', 'func', 'function', 'sub']
      },
      correct: 2
    },
    {
      id: 14,
      text: {
        fa: 'در شل، کدام سمبل برای Redirect کردن output استفاده می‌شود؟',
        en: 'In shell, which symbol is used to redirect output?'
      },
      options: {
        fa: ['<', '>', '<<', '>>'],
        en: ['<', '>', '<<', '>>']
      },
      correct: 1
    },
    {
      id: 15,
      text: {
        fa: 'دستور 2> برای چه کاری استفاده می‌شود؟',
        en: 'What is the 2> command used for?'
      },
      options: {
        fa: ['Redirect stdout', 'Redirect stderr', 'Redirect stdin', 'Pipe'],
        en: ['Redirect stdout', 'Redirect stderr', 'Redirect stdin', 'Pipe']
      },
      correct: 1
    },
    {
      id: 16,
      text: {
        fa: 'سمبل | (Pipe) برای چه کاری استفاده می‌شود؟',
        en: 'What is the | (Pipe) symbol used for?'
      },
      options: {
        fa: ['جدا کردن دستورات', 'اتصال output یک دستور به input دستور دیگر', 'Comment', 'Redirect'],
        en: ['Separating commands', 'Connecting output of one command to input of another', 'Comment', 'Redirect']
      },
      correct: 1
    },
    {
      id: 17,
      text: {
        fa: 'کدام دستور برای جستجوی الگو در فایل‌ها استفاده می‌شود؟',
        en: 'Which command is used to search for patterns in files?'
      },
      options: {
        fa: ['find', 'grep', 'sed', 'awk'],
        en: ['find', 'grep', 'sed', 'awk']
      },
      correct: 1
    },
    {
      id: 18,
      text: {
        fa: 'دستور sed برای چه کاری استفاده می‌شود؟',
        en: 'What is the sed command used for?'
      },
      options: {
        fa: ['جستجو', 'جایگزینی متن در جریان', 'حذف فایل', 'نمایش فایل'],
        en: ['Search', 'Text replacement in stream', 'Deleting file', 'Displaying file']
      },
      correct: 1
    },
    {
      id: 19,
      text: {
        fa: 'کدام دستور برای برنامه‌ریزی وظایف خودکار استفاده می‌شود؟',
        en: 'Which command is used to schedule automated tasks?'
      },
      options: {
        fa: ['cron', 'schedule', 'task', 'timer'],
        en: ['cron', 'schedule', 'task', 'timer']
      },
      correct: 0
    },
    {
      id: 20,
      text: {
        fa: 'کدام فایل برای برنامه‌ریزی تکاور cron استفاده می‌شود؟',
        en: 'Which file is used for scheduling cron tasks?'
      },
      options: {
        fa: ['/etc/cron.daily', '/etc/crontab', '/var/spool/cron/crontabs/', 'همه موارد فوق'],
        en: ['/etc/cron.daily', '/etc/crontab', '/var/spool/cron/crontabs/', 'All of the above']
      },
      correct: 3
    },
    {
      id: 21,
      text: {
        fa: 'کدام دستور برای مدیریت cron jobs استفاده می‌شود؟',
        en: 'Which command is used to manage cron jobs?'
      },
      options: {
        fa: ['cron', 'crontab', 'crond', 'schedule'],
        en: ['cron', 'crontab', 'crond', 'schedule']
      },
      correct: 1
    },
    {
      id: 22,
      text: {
        fa: 'دستور crontab -l برای چه کاری استفاده می‌شود؟',
        en: 'What is the crontab -l command used for?'
      },
      options: {
        fa: ['ایجاد cron job جدید', 'نمایش cron jobs', 'حذف cron job', 'ویرایش cron job'],
        en: ['Creating new cron job', 'Displaying cron jobs', 'Deleting cron job', 'Editing cron job']
      },
      correct: 1
    },
    {
      id: 23,
      text: {
        fa: 'کدام دستور برای پیدا کردن تمامی فایل‌های SUID استفاده می‌شود؟',
        en: 'Which command is used to find all SUID files?'
      },
      options: {
        fa: ['find . -perm -4000', 'find . -perm -2000', 'find . -perm -1000', 'find . -type s'],
        en: ['find . -perm -4000', 'find . -perm -2000', 'find . -perm -1000', 'find . -type s']
      },
      correct: 0
    },
    {
      id: 24,
      text: {
        fa: 'بیت SUID چه نقشی دارد؟',
        en: 'What role does the SUID bit play?'
      },
      options: {
        fa: ['اجازه نوشتن برای گروه', 'اجرا با اجازات صاحب فایل', 'اجرا با اجازات گروه', 'اجازه sticky bit'],
        en: ['Write permission for group', 'Execute with file owner permissions', 'Execute with group permissions', 'Sticky bit permission']
      },
      correct: 1
    },
    {
      id: 25,
      text: {
        fa: 'کدام دستور برای اعمال بیت SGID استفاده می‌شود؟',
        en: 'Which command is used to apply the SGID bit?'
      },
      options: {
        fa: ['chmod u+s', 'chmod g+s', 'chmod o+s', 'chmod a+s'],
        en: ['chmod u+s', 'chmod g+s', 'chmod o+s', 'chmod a+s']
      },
      correct: 1
    },
    {
      id: 26,
      text: {
        fa: 'Sticky bit برای چه کاری استفاده می‌شود؟',
        en: 'What is the sticky bit used for?'
      },
      options: {
        fa: ['اجازه حذف فایل‌های دیگران', 'جلوگیری از حذف فایل‌های دیگران', 'اجازه نوشتن', 'اجازه اجرا'],
        en: ['Permission to delete others\' files', 'Preventing deletion of others\' files', 'Write permission', 'Execute permission']
      },
      correct: 1
    },
    {
      id: 27,
      text: {
        fa: 'کدام دستور برای اعمال sticky bit استفاده می‌شود؟',
        en: 'Which command is used to apply the sticky bit?'
      },
      options: {
        fa: ['chmod u+t', 'chmod g+t', 'chmod o+t', 'chmod a+t'],
        en: ['chmod u+t', 'chmod g+t', 'chmod o+t', 'chmod a+t']
      },
      correct: 3
    },
    {
      id: 28,
      text: {
        fa: 'کدام فایل برای نگهداری رمز عبور‌های کاربران در SHA-512 است؟',
        en: 'Which file stores user passwords in SHA-512?'
      },
      options: {
        fa: ['/etc/passwd', '/etc/shadow', '/etc/group', '/etc/sudoers'],
        en: ['/etc/passwd', '/etc/shadow', '/etc/group', '/etc/sudoers']
      },
      correct: 1
    },
    {
      id: 29,
      text: {
        fa: 'دستور passwd -l برای چه کاری استفاده می‌شود؟',
        en: 'What is the passwd -l command used for?'
      },
      options: {
        fa: ['لیست کردن کاربران', 'قفل کردن اکاؤنت کاربر', 'تغییر رمز عبور', 'حذف اکاؤنت'],
        en: ['Listing users', 'Locking user account', 'Changing password', 'Deleting account']
      },
      correct: 1
    },
    {
      id: 30,
      text: {
        fa: 'کدام دستور برای مشاهده اطلاعات شبکه استفاده می‌شود؟',
        en: 'Which command is used to view network information?'
      },
      options: {
        fa: ['ifconfig', 'ip addr', 'netstat', 'موارد 1 و 2 درست'],
        en: ['ifconfig', 'ip addr', 'netstat', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 31,
      text: {
        fa: 'کدام دستور برای تنظیم آدرس IP استفاده می‌شود؟',
        en: 'Which command is used to set the IP address?'
      },
      options: {
        fa: ['ipconfig', 'ifconfig', 'setip', 'ipset'],
        en: ['ipconfig', 'ifconfig', 'setip', 'ipset']
      },
      correct: 1
    },
    {
      id: 32,
      text: {
        fa: 'دستور hostname برای چه کاری استفاده می‌شود؟',
        en: 'What is the hostname command used for?'
      },
      options: {
        fa: ['تغییر نام میزبان', 'نمایش نام میزبان', 'موارد 1 و 2 درست', 'نمایش IP'],
        en: ['Changing the hostname', 'Displaying the hostname', 'Options 1 and 2 are correct', 'Displaying the IP']
      },
      correct: 2
    },
    {
      id: 33,
      text: {
        fa: 'کدام دستور برای تست اتصال به میزبان دیگری استفاده می‌شود؟',
        en: 'Which command is used to test connection to another host?'
      },
      options: {
        fa: ['ping', 'traceroute', 'telnet', 'ssh'],
        en: ['ping', 'traceroute', 'telnet', 'ssh']
      },
      correct: 0
    },
    {
      id: 34,
      text: {
        fa: 'دستور netstat برای چه کاری استفاده می‌شود؟',
        en: 'What is the netstat command used for?'
      },
      options: {
        fa: ['نمایش اتصالات شبکه و اطلاعات راوتینگ', 'تنظیم شبکه', 'تست اتصال', 'نمایش DNS'],
        en: ['Displaying network connections and routing info', 'Configuring network', 'Testing connection', 'Displaying DNS']
      },
      correct: 0
    },
    {
      id: 35,
      text: {
        fa: 'کدام دستور برای نمایش جدول راوتینگ استفاده می‌شود؟',
        en: 'Which command is used to display the routing table?'
      },
      options: {
        fa: ['route', 'traceroute', 'netstat -r', 'موارد 1 و 3 درست'],
        en: ['route', 'traceroute', 'netstat -r', 'Options 1 and 3 are correct']
      },
      correct: 3
    },
    {
      id: 36,
      text: {
        fa: 'کدام دستور برای نمایش اطلاعات DNS استفاده می‌شود؟',
        en: 'Which command is used to display DNS information?'
      },
      options: {
        fa: ['dns', 'nslookup', 'dig', 'موارد 2 و 3 درست'],
        en: ['dns', 'nslookup', 'dig', 'Options 2 and 3 are correct']
      },
      correct: 3
    },
    {
      id: 37,
      text: {
        fa: 'کدام فایل برای تنظیمات DNS محلی استفاده می‌شود؟',
        en: 'Which file is used for local DNS configuration?'
      },
      options: {
        fa: ['/etc/hosts', '/etc/resolv.conf', '/etc/hostname', 'موارد 1 و 2 درست'],
        en: ['/etc/hosts', '/etc/resolv.conf', '/etc/hostname', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 38,
      text: {
        fa: 'کدام دستور برای پیدا کردن آدرس IP درخواستی استفاده می‌شود؟',
        en: 'Which command is used to find the requested IP address?'
      },
      options: {
        fa: ['host', 'nslookup', 'dig', 'همه موارد فوق'],
        en: ['host', 'nslookup', 'dig', 'All of the above']
      },
      correct: 3
    },
    {
      id: 39,
      text: {
        fa: 'کدام دستور برای انتقال فایل به سرور دور استفاده می‌شود؟',
        en: 'Which command is used to transfer files to a remote server?'
      },
      options: {
        fa: ['scp', 'sftp', 'rsync', 'همه موارد فوق'],
        en: ['scp', 'sftp', 'rsync', 'All of the above']
      },
      correct: 3
    },
    {
      id: 40,
      text: {
        fa: 'کدام دستور برای ورود امن به سرور دور استفاده می‌شود؟',
        en: 'Which command is used for secure login to a remote server?'
      },
      options: {
        fa: ['telnet', 'ssh', 'rsh', 'ftp'],
        en: ['telnet', 'ssh', 'rsh', 'ftp']
      },
      correct: 1
    },
    {
      id: 41,
      text: {
        fa: 'کدام دستور برای نمایش فایل‌های log استفاده می‌شود؟',
        en: 'Which command is used to display log files?'
      },
      options: {
        fa: ['tail', 'cat', 'less', 'همه موارد فوق'],
        en: ['tail', 'cat', 'less', 'All of the above']
      },
      correct: 3
    },
    {
      id: 42,
      text: {
        fa: 'کدام دایرکتوری برای ذخیره فایل‌های log سیستم است؟',
        en: 'Which directory is used to store system log files?'
      },
      options: {
        fa: ['/var/log', '/etc/log', '/tmp/log', '/home/log'],
        en: ['/var/log', '/etc/log', '/tmp/log', '/home/log']
      },
      correct: 0
    },
    {
      id: 43,
      text: {
        fa: 'کدام فایل برای نگهداری log‌های Kernel است؟',
        en: 'Which file is used to store Kernel logs?'
      },
      options: {
        fa: ['/var/log/kernel', '/var/log/syslog', '/var/log/dmesg', '/var/log/messages'],
        en: ['/var/log/kernel', '/var/log/syslog', '/var/log/dmesg', '/var/log/messages']
      },
      correct: 3
    },
    {
      id: 44,
      text: {
        fa: 'کدام دستور برای نمایش پیام‌های Kernel استفاده می‌شود؟',
        en: 'Which command is used to display Kernel messages?'
      },
      options: {
        fa: ['dmesg', 'kernel', 'kernlog', 'syslog'],
        en: ['dmesg', 'kernel', 'kernlog', 'syslog']
      },
      correct: 0
    },
    {
      id: 45,
      text: {
        fa: 'کدام دستور برای نمایش فایل‌های دقیقاً باز شده توسط یک فرآیند است؟',
        en: 'Which command is used to display files exactly opened by a process?'
      },
      options: {
        fa: ['lsof', 'fuser', 'ps', 'jobs'],
        en: ['lsof', 'fuser', 'ps', 'jobs']
      },
      correct: 0
    },
    {
      id: 46,
      text: {
        fa: 'کدام دستور برای نمایش فرآیندهایی که فایل خاصی را استفاده می‌کنند است؟',
        en: 'Which command is used to display processes using a specific file?'
      },
      options: {
        fa: ['lsof', 'fuser', 'ps aux', 'find'],
        en: ['lsof', 'fuser', 'ps aux', 'find']
      },
      correct: 1
    },
    {
      id: 47,
      text: {
        fa: 'کدام دستور برای بروزرسانی سیستم در Debian استفاده می‌شود؟',
        en: 'Which command is used to update the system in Debian?'
      },
      options: {
        fa: ['apt-get install', 'apt-get update', 'apt-get upgrade', 'موارد 2 و 3 درست'],
        en: ['apt-get install', 'apt-get update', 'apt-get upgrade', 'Options 2 and 3 are correct']
      },
      correct: 3
    },
    {
      id: 48,
      text: {
        fa: 'کدام دستور برای نصب بسته جدید استفاده می‌شود؟',
        en: 'Which command is used to install a new package?'
      },
      options: {
        fa: ['apt install', 'apt-get install', 'dpkg -i', 'همه موارد فوق'],
        en: ['apt install', 'apt-get install', 'dpkg -i', 'All of the above']
      },
      correct: 3
    },
    {
      id: 49,
      text: {
        fa: 'کدام دستور برای حذف بسته استفاده می‌شود؟',
        en: 'Which command is used to remove a package?'
      },
      options: {
        fa: ['apt remove', 'apt-get remove', 'dpkg -r', 'همه موارد فوق'],
        en: ['apt remove', 'apt-get remove', 'dpkg -r', 'All of the above']
      },
      correct: 3
    },
    {
      id: 50,
      text: {
        fa: 'کدام دستور برای جستجوی بسته استفاده می‌شود؟',
        en: 'Which command is used to search for a package?'
      },
      options: {
        fa: ['apt search', 'apt-cache search', 'dpkg -S', 'موارد 1 و 2 درست'],
        en: ['apt search', 'apt-cache search', 'dpkg -S', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 51,
      text: {
        fa: 'کدام دستور برای نمایش اطلاعات سرویس استفاده می‌شود؟',
        en: 'Which command is used to display service information?'
      },
      options: {
        fa: ['service status', 'systemctl status', 'chkconfig', 'موارد 1 و 2 درست'],
        en: ['service status', 'systemctl status', 'chkconfig', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 52,
      text: {
        fa: 'کدام دستور برای شروع سرویس استفاده می‌شود؟',
        en: 'Which command is used to start a service?'
      },
      options: {
        fa: ['systemctl start', 'service start', 'chkconfig on', 'موارد 1 و 2 درست'],
        en: ['systemctl start', 'service start', 'chkconfig on', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 53,
      text: {
        fa: 'کدام دستور برای متوقف کردن سرویس استفاده می‌شود؟',
        en: 'Which command is used to stop a service?'
      },
      options: {
        fa: ['systemctl stop', 'service stop', 'chkconfig off', 'موارد 1 و 2 درست'],
        en: ['systemctl stop', 'service stop', 'chkconfig off', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 54,
      text: {
        fa: 'کدام دستور برای راه‌اندازی مجدد سرویس استفاده می‌شود؟',
        en: 'Which command is used to restart a service?'
      },
      options: {
        fa: ['systemctl restart', 'service restart', 'restart', 'موارد 1 و 2 درست'],
        en: ['systemctl restart', 'service restart', 'restart', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 55,
      text: {
        fa: 'کدام دستور برای فعال کردن سرویس در Boot Time است؟',
        en: 'Which command is used to enable a service at boot time?'
      },
      options: {
        fa: ['systemctl enable', 'chkconfig on', 'service enable', 'موارد 1 و 2 درست'],
        en: ['systemctl enable', 'chkconfig on', 'service enable', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 56,
      text: {
        fa: 'کدام دستور برای نمایش تمام سرویس‌های فعال استفاده می‌شود؟',
        en: 'Which command is used to display all active services?'
      },
      options: {
        fa: ['systemctl list-units', 'chkconfig --list', 'service --status-all', 'همه موارد فوق'],
        en: ['systemctl list-units', 'chkconfig --list', 'service --status-all', 'All of the above']
      },
      correct: 3
    },
    {
      id: 57,
      text: {
        fa: 'کدام فایل برای تنظیمات kernel parameter است؟',
        en: 'Which file is used for kernel parameter configuration?'
      },
      options: {
        fa: ['/etc/sysctl.conf', '/proc/sys/', '/etc/kernel.conf', 'موارد 1 و 2 درست'],
        en: ['/etc/sysctl.conf', '/proc/sys/', '/etc/kernel.conf', 'Options 1 and 2 are correct']
      },
      correct: 3
    },
    {
      id: 58,
      text: {
        fa: 'کدام دستور برای اعمال تغییرات sysctl استفاده می‌شود؟',
        en: 'Which command is used to apply sysctl changes?'
      },
      options: {
        fa: ['sysctl -p', 'sysctl -a', 'sysctl -w', 'sysctl -l'],
        en: ['sysctl -p', 'sysctl -a', 'sysctl -w', 'sysctl -l']
      },
      correct: 0
    },
    {
      id: 59,
      text: {
        fa: 'کدام دستور برای مدیریت انجن‌های کریپتوگرافی است؟',
        en: 'Which command is used to manage cryptography engines?'
      },
      options: {
        fa: ['openssl', 'gpg', 'ssl', 'crypto'],
        en: ['openssl', 'gpg', 'ssl', 'crypto']
      },
      correct: 0
    },
    {
      id: 60,
      text: {
        fa: 'کدام دستور برای ایجاد گواهی‌های SSL استفاده می‌شود؟',
        en: 'Which command is used to create SSL certificates?'
      },
      options: {
        fa: ['ssl', 'cert', 'openssl req', 'certificate'],
        en: ['ssl', 'cert', 'openssl req', 'certificate']
      },
      correct: 2
    }
  ],
  "201": [
    {
      id: 1,
      text: {
        fa: 'کدام فایل برای Bootloader Grub است؟',
        en: 'Which file is for the Grub Bootloader?'
      },
      options: {
        fa: ['/boot/grub', '/grub/boot', '/etc/grub', '/var/grub'],
        en: ['/boot/grub', '/grub/boot', '/etc/grub', '/var/grub']
      },
      correct: 0
    },
    {
      id: 2,
      text: {
        fa: 'کدام دستور برای نمایش kernel messages استفاده می‌شود؟',
        en: 'Which command is used to display kernel messages?'
      },
      options: {
        fa: ['dmesg', 'journalctl', 'tail /var/log/kernel', 'موارد 1 و 2'],
        en: ['dmesg', 'journalctl', 'tail /var/log/kernel', 'Options 1 and 2']
      },
      correct: 3
    },
    {
      id: 3,
      text: {
        fa: 'کدام دستور برای مدیریت بوت پارامترها استفاده می‌شود؟',
        en: 'Which command is used to manage boot parameters?'
      },
      options: {
        fa: ['bootctl', 'grub-editenv', 'kernel-param', 'boot-manager'],
        en: ['bootctl', 'grub-editenv', 'kernel-param', 'boot-manager']
      },
      correct: 0
    },
    {
      id: 4,
      text: {
        fa: 'کدام دستور برای ایجاد initramfs استفاده می‌شود؟',
        en: 'Which command is used to create initramfs?'
      },
      options: {
        fa: ['mkinitramfs', 'update-initramfs', 'dracut', 'همه موارد'],
        en: ['mkinitramfs', 'update-initramfs', 'dracut', 'All of the above']
      },
      correct: 3
    },
    {
      id: 5,
      text: {
        fa: 'کدام فایل برای runlevel سیستم است؟',
        en: 'Which file is for the system runlevel?'
      },
      options: {
        fa: ['/etc/rc.local', '/etc/inittab', '/etc/systemd/default.target', 'موارد 2 و 3'],
        en: ['/etc/rc.local', '/etc/inittab', '/etc/systemd/default.target', 'Options 2 and 3']
      },
      correct: 3
    },
    {
      id: 6,
      text: {
        fa: 'کدام runlevel برای GUI است؟',
        en: 'Which runlevel is for GUI?'
      },
      options: {
        fa: ['3', '4', '5', '6'],
        en: ['3', '4', '5', '6']
      },
      correct: 2
    },
    {
      id: 7,
      text: {
        fa: 'کدام دستور برای نمایش runlevel فعلی استفاده می‌شود؟',
        en: 'Which command is used to display the current runlevel?'
      },
      options: {
        fa: ['runlevel', 'init', 'systemctl', 'target'],
        en: ['runlevel', 'init', 'systemctl', 'target']
      },
      correct: 0
    },
    {
      id: 8,
      text: {
        fa: 'کدام دستور برای تغییر runlevel استفاده می‌شود؟',
        en: 'Which command is used to change the runlevel?'
      },
      options: {
        fa: ['runlevel', 'init', 'telinit', 'موارد 2 و 3'],
        en: ['runlevel', 'init', 'telinit', 'Options 2 and 3']
      },
      correct: 3
    },
    {
      id: 9,
      text: {
        fa: 'LVM برای چه کاری استفاده می‌شود؟',
        en: 'What is LVM used for?'
      },
      options: {
        fa: ['مدیریت فضای دیسک', 'بکاپ', 'نتورک', 'سرویس‌ها'],
        en: ['Managing disk space', 'Backup', 'Network', 'Services']
      },
      correct: 0
    },
    {
      id: 10,
      text: {
        fa: 'کدام دستور برای ایجاد Physical Volume استفاده می‌شود؟',
        en: 'Which command is used to create a Physical Volume?'
      },
      options: {
        fa: ['pvcreate', 'pvcreate', 'lvcreate', 'vgcreate'],
        en: ['pvcreate', 'pvcreate', 'lvcreate', 'vgcreate']
      },
      correct: 0
    },
    {
      id: 11,
      text: {
        fa: 'کدام دستور برای ایجاد Volume Group استفاده می‌شود؟',
        en: 'Which command is used to create a Volume Group?'
      },
      options: {
        fa: ['pvcreate', 'vgcreate', 'lvcreate', 'lvextend'],
        en: ['pvcreate', 'vgcreate', 'lvcreate', 'lvextend']
      },
      correct: 1
    },
    {
      id: 12,
      text: {
        fa: 'کدام دستور برای ایجاد Logical Volume استفاده می‌شود؟',
        en: 'Which command is used to create a Logical Volume?'
      },
      options: {
        fa: ['pvcreate', 'vgcreate', 'lvcreate', 'lvextend'],
        en: ['pvcreate', 'vgcreate', 'lvcreate', 'lvextend']
      },
      correct: 2
    },
    {
      id: 13,
      text: {
        fa: 'کدام دستور برای بزرگ‌کردن Logical Volume استفاده می‌شود؟',
        en: 'Which command is used to extend a Logical Volume?'
      },
      options: {
        fa: ['lvcreate', 'lvextend', 'lvreduce', 'lvremove'],
        en: ['lvcreate', 'lvextend', 'lvreduce', 'lvremove']
      },
      correct: 1
    },
    {
      id: 14,
      text: {
        fa: 'کدام دستور برای کوچک‌کردن Logical Volume استفاده می‌شود؟',
        en: 'Which command is used to reduce a Logical Volume?'
      },
      options: {
        fa: ['lvcreate', 'lvextend', 'lvreduce', 'lvremove'],
        en: ['lvcreate', 'lvextend', 'lvreduce', 'lvremove']
      },
      correct: 2
    },
    {
      id: 15,
      text: {
        fa: 'RAID 1 برای چه کاری است؟',
        en: 'What is RAID 1 used for?'
      },
      options: {
        fa: ['Mirror', 'Stripe', 'Striping+Parity', 'همه'],
        en: ['Mirror', 'Stripe', 'Striping+Parity', 'All of the above']
      },
      correct: 0
    },
    {
      id: 16,
      text: {
        fa: 'RAID 5 برای چه کاری است؟',
        en: 'What is RAID 5 used for?'
      },
      options: {
        fa: ['Mirror', 'Stripe', 'Striping+Parity', 'Parity'],
        en: ['Mirror', 'Stripe', 'Striping+Parity', 'Parity']
      },
      correct: 2
    },
    {
      id: 17,
      text: {
        fa: 'کدام دستور برای مدیریت RAID استفاده می‌شود؟',
        en: 'Which command is used to manage RAID?'
      },
      options: {
        fa: ['mdadm', 'raidctl', 'raid', 'mdctl'],
        en: ['mdadm', 'raidctl', 'raid', 'mdctl']
      },
      correct: 0
    },
    {
      id: 18,
      text: {
        fa: 'کدام دستور برای mount کردن لازمی استفاده می‌شود؟',
        en: 'Which command is used for mounting?'
      },
      options: {
        fa: ['mount', 'mount -a', 'mount -l', 'mount -v'],
        en: ['mount', 'mount -a', 'mount -l', 'mount -v']
      },
      correct: 0
    },
    {
      id: 19,
      text: {
        fa: 'کدام دستور برای unmount کردن استفاده می‌شود؟',
        en: 'Which command is used for unmounting?'
      },
      options: {
        fa: ['umount', 'mount -u', 'unmount', 'eject'],
        en: ['umount', 'mount -u', 'unmount', 'eject']
      },
      correct: 0
    },
    {
      id: 20,
      text: {
        fa: 'کدام دستور برای نمایش quotas استفاده می‌شود؟',
        en: 'Which command is used to display quotas?'
      },
      options: {
        fa: ['quota', 'quotacheck', 'quotaon', 'edquota'],
        en: ['quota', 'quotacheck', 'quotaon', 'edquota']
      },
      correct: 0
    },
    {
      id: 21,
      text: {
        fa: 'کدام فایل برای تنظیمات Firewall است؟',
        en: 'Which file is used for Firewall configuration?'
      },
      options: {
        fa: ['/etc/iptables', '/etc/nftables.conf', '/etc/firewalld/firewalld.conf', 'همه'],
        en: ['/etc/iptables', '/etc/nftables.conf', '/etc/firewalld/firewalld.conf', 'All of the above']
      },
      correct: 3
    },
    {
      id: 22,
      text: {
        fa: 'کدام دستور برای مدیریت Firewall Rules استفاده می‌شود؟',
        en: 'Which command is used to manage Firewall Rules?'
      },
      options: {
        fa: ['iptables', 'firewall-cmd', 'nft', 'همه'],
        en: ['iptables', 'firewall-cmd', 'nft', 'All of the above']
      },
      correct: 3
    },
    {
      id: 23,
      text: {
        fa: 'کدام دستور برای نمایش iptables rules استفاده می‌شود؟',
        en: 'Which command is used to display iptables rules?'
      },
      options: {
        fa: ['iptables -L', 'iptables -n', 'iptables -v', 'همه'],
        en: ['iptables -L', 'iptables -n', 'iptables -v', 'All of the above']
      },
      correct: 3
    },
    {
      id: 24,
      text: {
        fa: 'کدام دستور برای اضافه کردن iptables rule استفاده می‌شود؟',
        en: 'Which command is used to add an iptables rule?'
      },
      options: {
        fa: ['iptables -A', 'iptables -I', 'iptables -P', 'موارد 1 و 2'],
        en: ['iptables -A', 'iptables -I', 'iptables -P', 'Options 1 and 2']
      },
      correct: 3
    },
    {
      id: 25,
      text: {
        fa: 'کدام دستور برای حذف iptables rule استفاده می‌شود؟',
        en: 'Which command is used to delete an iptables rule?'
      },
      options: {
        fa: ['iptables -D', 'iptables -R', 'iptables -X', 'موارد 1 و 2'],
        en: ['iptables -D', 'iptables -R', 'iptables -X', 'Options 1 and 2']
      },
      correct: 1
    },
    {
      id: 26,
      text: {
        fa: 'SSH default port کدام است؟',
        en: 'Which is the SSH default port?'
      },
      options: {
        fa: ['22', '23', '2222', '222'],
        en: ['22', '23', '2222', '222']
      },
      correct: 0
    },
    {
      id: 27,
      text: {
        fa: 'کدام فایل برای SSH configuration است؟',
        en: 'Which file is for SSH configuration?'
      },
      options: {
        fa: ['/etc/ssh/ssh_config', '/etc/ssh/sshd_config', '/root/.ssh/config', 'همه'],
        en: ['/etc/ssh/ssh_config', '/etc/ssh/sshd_config', '/root/.ssh/config', 'All of the above']
      },
      correct: 3
    },
    {
      id: 28,
      text: {
        fa: 'کدام دستور برای ایجاد SSH keys استفاده می‌شود؟',
        en: 'Which command is used to create SSH keys?'
      },
      options: {
        fa: ['ssh-gen', 'ssh-keygen', 'ssh-key-gen', 'keygen'],
        en: ['ssh-gen', 'ssh-keygen', 'ssh-key-gen', 'keygen']
      },
      correct: 1
    },
    {
      id: 29,
      text: {
        fa: 'کدام دستور برای کپی کردن SSH public key استفاده می‌شود؟',
        en: 'Which command is used to copy the SSH public key?'
      },
      options: {
        fa: ['ssh-copy-id', 'ssh-copy-key', 'copy-id', 'scp'],
        en: ['ssh-copy-id', 'ssh-copy-key', 'copy-id', 'scp']
      },
      correct: 0
    },
    {
      id: 30,
      text: {
        fa: 'کدام دستور برای فعال کردن X11 forwarding استفاده می‌شود؟',
        en: 'Which command is used to enable X11 forwarding?'
      },
      options: {
        fa: ['ssh -X', 'ssh -Y', 'ssh -x', 'موارد 1 و 2'],
        en: ['ssh -X', 'ssh -Y', 'ssh -x', 'Options 1 and 2']
      },
      correct: 3
    },
    {
      id: 31,
      text: {
        fa: 'کدام دستور برای نمایش مصرف CPU در لحظه استفاده می‌شود؟',
        en: 'Which command is used to display real-time CPU usage?'
      },
      options: {
        fa: ['free', 'top', 'df', 'du'],
        en: ['free', 'top', 'df', 'du']
      },
      correct: 1
    },
    {
      id: 32,
      text: {
        fa: 'کدام دستور برای نمایش مصرف حافظه RAM استفاده می‌شود؟',
        en: 'Which command is used to display RAM memory usage?'
      },
      options: {
        fa: ['free -h', 'top', 'vmstat', 'همه موارد فوق'],
        en: ['free -h', 'top', 'vmstat', 'All of the above']
      },
      correct: 3
    },
    {
      id: 33,
      text: {
        fa: 'دستور vmstat برای چه کاری استفاده می‌شود؟',
        en: 'What is the vmstat command used for?'
      },
      options: {
        fa: ['نمایش آمار حافظه مجازی', 'نمایش فضای دیسک', 'نمایش فرآیندها', 'نمایش شبکه'],
        en: ['Displaying virtual memory statistics', 'Displaying disk space', 'Displaying processes', 'Displaying network']
      },
      correct: 0
    },
    {
      id: 34,
      text: {
        fa: 'کدام دستور برای نمایش I/O دیسک استفاده می‌شود؟',
        en: 'Which command is used to display disk I/O?'
      },
      options: {
        fa: ['iostat', 'vmstat', 'mpstat', 'sar'],
        en: ['iostat', 'vmstat', 'mpstat', 'sar']
      },
      correct: 0
    },
    {
      id: 35,
      text: {
        fa: 'کدام ابزار برای مانیتورینگ شبکه در لحظه استفاده می‌شود؟',
        en: 'Which tool is used for real-time network monitoring?'
      },
      options: {
        fa: ['nagios', 'iftop', 'nethogs', 'همه موارد فوق'],
        en: ['nagios', 'iftop', 'nethogs', 'All of the above']
      },
      correct: 3
    },
    {
      id: 36,
      text: {
        fa: 'کدام دایرکتوری حاوی ماژول‌های کرنل لینوکس است؟',
        en: 'Which directory contains Linux kernel modules?'
      },
      options: {
        fa: ['/lib/modules', '/usr/src/linux', '/boot/modules', '/etc/modules'],
        en: ['/lib/modules', '/usr/src/linux', '/boot/modules', '/etc/modules']
      },
      correct: 0
    },
    {
      id: 37,
      text: {
        fa: 'کدام دستور برای لیست کردن ماژول‌های لود شده کرنل استفاده می‌شود؟',
        en: 'Which command is used to list loaded kernel modules?'
      },
      options: {
        fa: ['lsmod', 'modprobe', 'insmod', 'rmmod'],
        en: ['lsmod', 'modprobe', 'insmod', 'rmmod']
      },
      correct: 0
    },
    {
      id: 38,
      text: {
        fa: 'دستور modprobe برای چه کاری استفاده می‌شود؟',
        en: 'What is the modprobe command used for?'
      },
      options: {
        fa: ['لود کردن ماژول کرنل', 'حذف ماژول کرنل', 'لیست ماژول‌ها', 'کامپایل کرنل'],
        en: ['Loading kernel module', 'Removing kernel module', 'Listing modules', 'Compiling kernel']
      },
      correct: 0
    },
    {
      id: 39,
      text: {
        fa: 'کدام دستور برای کامپایل کرنل لینوکس استفاده می‌شود؟',
        en: 'Which command is used to compile the Linux kernel?'
      },
      options: {
        fa: ['make', 'gcc', 'configure', 'build'],
        en: ['make', 'gcc', 'configure', 'build']
      },
      correct: 0
    },
    {
      id: 40,
      text: {
        fa: 'کدام فایل پیکربندی برای ماژول‌های کرنل استفاده می‌شود؟',
        en: 'Which configuration file is used for kernel modules?'
      },
      options: {
        fa: ['/etc/modprobe.conf', '/etc/modules.conf', '/etc/modprobe.d/', 'همه موارد فوق'],
        en: ['/etc/modprobe.conf', '/etc/modules.conf', '/etc/modprobe.d/', 'All of the above']
      },
      correct: 3
    },
    {
      id: 41,
      text: {
        fa: 'دستور depmod برای چه کاری استفاده می‌شود؟',
        en: 'What is the depmod command used for?'
      },
      options: {
        fa: ['ایجاد فایل وابستگی‌های ماژول', 'لود کردن ماژول', 'حذف ماژول', 'کامپایل ماژول'],
        en: ['Creating module dependency file', 'Loading module', 'Removing module', 'Compiling module']
      },
      correct: 0
    },
    {
      id: 42,
      text: {
        fa: 'کدام دستور برای ایجاد فایل initrd استفاده می‌شود؟',
        en: 'Which command is used to create the initrd file?'
      },
      options: {
        fa: ['mkinitrd', 'mkinitramfs', 'dracut', 'همه موارد فوق'],
        en: ['mkinitrd', 'mkinitramfs', 'dracut', 'All of the above']
      },
      correct: 3
    },
    {
      id: 43,
      text: {
        fa: 'کدام پارامتر کرنل برای رفتن به حالت تک‌کاربره (Single User) استفاده می‌شود؟',
        en: 'Which kernel parameter is used to enter single user mode?'
      },
      options: {
        fa: ['single', '1', 's', 'همه موارد فوق'],
        en: ['single', '1', 's', 'All of the above']
      },
      correct: 3
    },
    {
      id: 44,
      text: {
        fa: 'کدام دستور برای نمایش نسخه کرنل استفاده می‌شود؟',
        en: 'Which command is used to display the kernel version?'
      },
      options: {
        fa: ['uname -r', 'uname -v', 'cat /proc/version', 'همه موارد فوق'],
        en: ['uname -r', 'uname -v', 'cat /proc/version', 'All of the above']
      },
      correct: 3
    },
    {
      id: 45,
      text: {
        fa: 'کدام دایرکتوری حاوی سورس کد کرنل است؟',
        en: 'Which directory contains the kernel source code?'
      },
      options: {
        fa: ['/usr/src/linux', '/lib/modules', '/boot', '/etc/kernel'],
        en: ['/usr/src/linux', '/lib/modules', '/boot', '/etc/kernel']
      },
      correct: 0
    },
    {
      id: 46,
      text: {
        fa: 'کدام دستور برای بررسی سلامت فایل سیستم ext4 استفاده می‌شود؟',
        en: 'Which command is used to check ext4 filesystem health?'
      },
      options: {
        fa: ['e2fsck', 'fsck.ext4', 'fsck', 'همه موارد فوق'],
        en: ['e2fsck', 'fsck.ext4', 'fsck', 'All of the above']
      },
      correct: 3
    },
    {
      id: 47,
      text: {
        fa: 'دستور tune2fs برای چه کاری استفاده می‌شود؟',
        en: 'What is the tune2fs command used for?'
      },
      options: {
        fa: ['تنظیم پارامترهای فایل سیستم ext', 'بررسی فایل سیستم', 'ایجاد فایل سیستم', 'حذف فایل سیستم'],
        en: ['Tuning ext filesystem parameters', 'Checking filesystem', 'Creating filesystem', 'Deleting filesystem']
      },
      correct: 0
    },
    {
      id: 48,
      text: {
        fa: 'کدام دستور برای نمایش UUID یک پارتیشن استفاده می‌شود؟',
        en: 'Which command is used to display a partition\'s UUID?'
      },
      options: {
        fa: ['blkid', 'lsblk', 'fdisk -l', 'همه موارد فوق'],
        en: ['blkid', 'lsblk', 'fdisk -l', 'All of the above']
      },
      correct: 3
    },
    {
      id: 49,
      text: {
        fa: 'کدام فایل سیستم از B-tree استفاده می‌کند؟',
        en: 'Which filesystem uses B-tree?'
      },
      options: {
        fa: ['btrfs', 'ext4', 'xfs', 'ntfs'],
        en: ['btrfs', 'ext4', 'xfs', 'ntfs']
      },
      correct: 0
    },
    {
      id: 50,
      text: {
        fa: 'دستور resize2fs برای چه کاری استفاده می‌شود؟',
        en: 'What is the resize2fs command used for?'
      },
      options: {
        fa: ['تغییر اندازه فایل سیستم ext', 'بررسی فایل سیستم', 'ایجاد فایل سیستم', 'کپی فایل سیستم'],
        en: ['Resizing ext filesystem', 'Checking filesystem', 'Creating filesystem', 'Copying filesystem']
      },
      correct: 0
    },
    {
      id: 51,
      text: {
        fa: 'کدام دستور برای ایجاد فایل swap استفاده می‌شود؟',
        en: 'Which command is used to create a swap file?'
      },
      options: {
        fa: ['mkswap', 'swapon', 'swapoff', 'mkfs.swap'],
        en: ['mkswap', 'swapon', 'swapoff', 'mkfs.swap']
      },
      correct: 0
    },
    {
      id: 52,
      text: {
        fa: 'کدام دستور برای فعال کردن فایل swap استفاده می‌شود؟',
        en: 'Which command is used to activate a swap file?'
      },
      options: {
        fa: ['swapon', 'mkswap', 'swapoff', 'mount'],
        en: ['swapon', 'mkswap', 'swapoff', 'mount']
      },
      correct: 0
    },
    {
      id: 53,
      text: {
        fa: 'کدام فایل برای پیکربندی خودکار mount استفاده می‌شود؟',
        en: 'Which file is used for automatic mount configuration?'
      },
      options: {
        fa: ['/etc/fstab', '/etc/mtab', '/etc/auto.master', '/etc/mount.conf'],
        en: ['/etc/fstab', '/etc/mtab', '/etc/auto.master', '/etc/mount.conf']
      },
      correct: 0
    },
    {
      id: 54,
      text: {
        fa: 'دستور hdparm برای چه کاری استفاده می‌شود؟',
        en: 'What is the hdparm command used for?'
      },
      options: {
        fa: ['تنظیم پارامترهای هارد دیسک IDE/SATA', 'فرمت کردن دیسک', 'پارتیشن‌بندی', 'نمایش فضای دیسک'],
        en: ['Setting IDE/SATA hard disk parameters', 'Formatting disk', 'Partitioning', 'Displaying disk space']
      },
      correct: 0
    },
    {
      id: 55,
      text: {
        fa: 'کدام دستور برای نمایش اطلاعات SMART هارد دیسک استفاده می‌شود؟',
        en: 'Which command is used to display SMART hard disk information?'
      },
      options: {
        fa: ['smartctl', 'hdparm', 'fdisk', 'parted'],
        en: ['smartctl', 'hdparm', 'fdisk', 'parted']
      },
      correct: 0
    },
    {
      id: 56,
      text: {
        fa: 'کدام دستور برای پارتیشن‌بندی با GPT استفاده می‌شود؟',
        en: 'Which command is used for GPT partitioning?'
      },
      options: {
        fa: ['gdisk', 'fdisk', 'parted', 'همه موارد فوق'],
        en: ['gdisk', 'fdisk', 'parted', 'All of the above']
      },
      correct: 3
    },
    {
      id: 57,
      text: {
        fa: 'دستور partprobe برای چه کاری استفاده می‌شود؟',
        en: 'What is the partprobe command used for?'
      },
      options: {
        fa: ['اعلام تغییرات پارتیشن به کرنل', 'ایجاد پارتیشن', 'حذف پارتیشن', 'فرمت پارتیشن'],
        en: ['Informing kernel of partition changes', 'Creating partition', 'Deleting partition', 'Formatting partition']
      },
      correct: 0
    },
    {
      id: 58,
      text: {
        fa: 'کدام دستور برای نمایش فضای استفاده شده توسط هر کاربر استفاده می‌شود؟',
        en: 'Which command is used to display disk usage per user?'
      },
      options: {
        fa: ['quota', 'repquota', 'edquota', 'همه موارد فوق'],
        en: ['quota', 'repquota', 'edquota', 'All of the above']
      },
      correct: 3
    },
    {
      id: 59,
      text: {
        fa: 'کدام فایل برای فعال کردن quota روی فایل سیستم استفاده می‌شود؟',
        en: 'Which file is used to enable quota on a filesystem?'
      },
      options: {
        fa: ['/etc/fstab', '/etc/quota.conf', '/etc/quotas', '/var/quota'],
        en: ['/etc/fstab', '/etc/quota.conf', '/etc/quotas', '/var/quota']
      },
      correct: 0
    },
    {
      id: 60,
      text: {
        fa: 'دستور quotacheck برای چه کاری استفاده می‌شود؟',
        en: 'What is the quotacheck command used for?'
      },
      options: {
        fa: ['بررسی و ایجاد فایل‌های quota', 'نمایش quota', 'ویرایش quota', 'فعال کردن quota'],
        en: ['Checking and creating quota files', 'Displaying quota', 'Editing quota', 'Enabling quota']
      },
      correct: 0
    }
  ],
  "202": [
    {
      id: 1,
      text: {
        fa: 'کدام دستور برای نمایش اطلاعات DNS server است؟',
        en: 'Which command is used to display DNS server information?'
      },
      options: {
        fa: ['nslookup', 'dig', 'host', 'همه'],
        en: ['nslookup', 'dig', 'host', 'All of the above']
      },
      correct: 3
    },
    {
      id: 2,
      text: {
        fa: 'کدام فایل برای تنظیمات DNS server (BIND) است؟',
        en: 'Which file is for DNS server (BIND) configuration?'
      },
      options: {
        fa: ['/etc/bind/named.conf', '/etc/named.conf', '/var/named/', 'همه'],
        en: ['/etc/bind/named.conf', '/etc/named.conf', '/var/named/', 'All of the above']
      },
      correct: 3
    },
    {
      id: 3,
      text: {
        fa: 'کدام دستور برای شروع سرویس DNS است؟',
        en: 'Which command is used to start the DNS service?'
      },
      options: {
        fa: ['service bind9 start', 'systemctl start named', 'service dns start', 'موارد 1 و 2'],
        en: ['service bind9 start', 'systemctl start named', 'service dns start', 'Options 1 and 2']
      },
      correct: 3
    },
    {
      id: 4,
      text: {
        fa: 'کدام دستور برای نمایش network statistics استفاده می‌شود؟',
        en: 'Which command is used to display network statistics?'
      },
      options: {
        fa: ['netstat', 'ss', 'nstat', 'موارد 1 و 2'],
        en: ['netstat', 'ss', 'nstat', 'Options 1 and 2']
      },
      correct: 3
    },
    {
      id: 5,
      text: {
        fa: 'کدام دستور برای نمایش routing table است؟',
        en: 'Which command is used to display the routing table?'
      },
      options: {
        fa: ['route', 'netstat -r', 'ip route', 'همه'],
        en: ['route', 'netstat -r', 'ip route', 'All of the above']
      },
      correct: 3
    },
    {
      id: 6,
      text: {
        fa: 'کدام دستور برای اضافه کردن route استفاده می‌شود؟',
        en: 'Which command is used to add a route?'
      },
      options: {
        fa: ['route add', 'ip route add', 'network route', 'موارد 1 و 2'],
        en: ['route add', 'ip route add', 'network route', 'Options 1 and 2']
      },
      correct: 3
    },
    {
      id: 7,
      text: {
        fa: 'کدام دستور برای نمایش network interfaces است؟',
        en: 'Which command is used to display network interfaces?'
      },
      options: {
        fa: ['ifconfig', 'ip link', 'ip addr', 'موارد 2 و 3'],
        en: ['ifconfig', 'ip link', 'ip addr', 'Options 2 and 3']
      },
      correct: 3
    },
    {
      id: 8,
      text: {
        fa: 'کدام دستور برای تنظیم IP address استفاده می‌شود؟',
        en: 'Which command is used to set the IP address?'
      },
      options: {
        fa: ['ifconfig', 'ip addr add', 'ipconfig', 'موارد 1 و 2'],
        en: ['ifconfig', 'ip addr add', 'ipconfig', 'Options 1 and 2']
      },
      correct: 3
    },
    {
      id: 9,
      text: {
        fa: 'کدام فایل برای تنظیمات network (Debian) است؟',
        en: 'Which file is used for network configuration (Debian)?'
      },
      options: {
        fa: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netplan/', 'همه'],
        en: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netplan/', 'All of the above']
      },
      correct: 3
    },
    {
      id: 10,
      text: {
        fa: 'کدام دستور برای نمایش listening ports است؟',
        en: 'Which command is used to display listening ports?'
      },
      options: {
        fa: ['netstat -l', 'ss -l', 'lsof -i', 'همه'],
        en: ['netstat -l', 'ss -l', 'lsof -i', 'All of the above']
      },
      correct: 3
    },
    {
      id: 11,
      text: {
        fa: 'کدام دستور برای نمایش established connections است؟',
        en: 'Which command is used to display established connections?'
      },
      options: {
        fa: ['netstat -e', 'netstat -t', 'ss -t', 'موارد 2 و 3'],
        en: ['netstat -e', 'netstat -t', 'ss -t', 'Options 2 and 3']
      },
      correct: 3
    },
    {
      id: 12,
      text: {
        fa: 'کدام دستور برای نمایش bandwidth usage است؟',
        en: 'Which command is used to display bandwidth usage?'
      },
      options: {
        fa: ['iftop', 'nethogs', 'bwm-ng', 'همه'],
        en: ['iftop', 'nethogs', 'bwm-ng', 'All of the above']
      },
      correct: 3
    },
    {
      id: 13,
      text: {
        fa: 'کدام دستور برای نمایش TCP/IP stack statistics است؟',
        en: 'Which command is used to display TCP/IP stack statistics?'
      },
      options: {
        fa: ['netstat -s', 'ss -s', 'nstat', 'همه'],
        en: ['netstat -s', 'ss -s', 'nstat', 'All of the above']
      },
      correct: 3
    },
    {
      id: 14,
      text: {
        fa: 'کدام دستور برای trace route packets است؟',
        en: 'Which command is used to trace route packets?'
      },
      options: {
        fa: ['traceroute', 'tracepath', 'mtr', 'همه'],
        en: ['traceroute', 'tracepath', 'mtr', 'All of the above']
      },
      correct: 3
    },
    {
      id: 15,
      text: {
        fa: 'Proxy Server برای چه کاری است؟',
        en: 'What is a Proxy Server used for?'
      },
      options: {
        fa: ['شبکه', 'امنیت', 'بهتری کارایی', 'همه'],
        en: ['Network', 'Security', 'Better performance', 'All of the above']
      },
      correct: 3
    },
    {
      id: 16,
      text: {
        fa: 'کدام server برای Proxy استفاده می‌شود؟',
        en: 'Which server is used for Proxy?'
      },
      options: {
        fa: ['Squid', 'Tinyproxy', 'Nginx', 'همه'],
        en: ['Squid', 'Tinyproxy', 'Nginx', 'All of the above']
      },
      correct: 3
    },
    {
      id: 17,
      text: {
        fa: 'کدام دستور برای نمایش active users است؟',
        en: 'Which command is used to display active users?'
      },
      options: {
        fa: ['who', 'w', 'users', 'همه'],
        en: ['who', 'w', 'users', 'All of the above']
      },
      correct: 3
    },
    {
      id: 18,
      text: {
        fa: 'کدام دستور برای نمایش login history است؟',
        en: 'Which command is used to display login history?'
      },
      options: {
        fa: ['last', 'lastlog', 'wtmp', 'موارد 1 و 2'],
        en: ['last', 'lastlog', 'wtmp', 'Options 1 and 2']
      },
      correct: 3
    },
    {
      id: 19,
      text: {
        fa: 'کدام دستور برای نمایش failed login attempts است؟',
        en: 'Which command is used to display failed login attempts?'
      },
      options: {
        fa: ['lastb', 'btmp', 'faillog', 'همه'],
        en: ['lastb', 'btmp', 'faillog', 'All of the above']
      },
      correct: 3
    },
    {
      id: 20,
      text: {
        fa: 'کدام دستور برای نمایش disk usage per user است؟',
        en: 'Which command is used to display disk usage per user?'
      },
      options: {
        fa: ['quota', 'du', 'df -h', 'quotacheck'],
        en: ['quota', 'du', 'df -h', 'quotacheck']
      },
      correct: 0
    },
    {
      id: 21,
      text: {
        fa: 'کدام دستور برای بررسی صحت فایل پیکربندی BIND استفاده می‌شود؟',
        en: 'Which command is used to check the validity of the BIND configuration file?'
      },
      options: {
        fa: ['named-checkconf', 'named-checkzone', 'rndc', 'dig'],
        en: ['named-checkconf', 'named-checkzone', 'rndc', 'dig']
      },
      correct: 0
    },
    {
      id: 22,
      text: {
        fa: 'کدام دستور برای بررسی صحت فایل zone DNS استفاده می‌شود؟',
        en: 'Which command is used to check the validity of a DNS zone file?'
      },
      options: {
        fa: ['named-checkzone', 'named-checkconf', 'host', 'nslookup'],
        en: ['named-checkzone', 'named-checkconf', 'host', 'nslookup']
      },
      correct: 0
    },
    {
      id: 23,
      text: {
        fa: 'دستور rndc برای چه کاری استفاده می‌شود؟',
        en: 'What is the rndc command used for?'
      },
      options: {
        fa: ['مدیریت سرور BIND', 'بررسی zone', 'جستجوی DNS', 'کامپایل BIND'],
        en: ['Managing the BIND server', 'Checking a zone', 'DNS lookup', 'Compiling BIND']
      },
      correct: 0
    },
    {
      id: 24,
      text: {
        fa: 'کدام رکورد DNS برای تبدیل نام به IP استفاده می‌شود؟',
        en: 'Which DNS record is used to convert a name to an IP address?'
      },
      options: {
        fa: ['A', 'MX', 'CNAME', 'NS'],
        en: ['A', 'MX', 'CNAME', 'NS']
      },
      correct: 0
    },
    {
      id: 25,
      text: {
        fa: 'کدام رکورد DNS برای تبدیل IP به نام استفاده می‌شود؟',
        en: 'Which DNS record is used to convert an IP address to a name?'
      },
      options: {
        fa: ['PTR', 'A', 'MX', 'CNAME'],
        en: ['PTR', 'A', 'MX', 'CNAME']
      },
      correct: 0
    },
    {
      id: 26,
      text: {
        fa: 'کدام رکورد DNS برای مشخص کردن سرور ایمیل استفاده می‌شود؟',
        en: 'Which DNS record is used to specify the mail server?'
      },
      options: {
        fa: ['MX', 'A', 'TXT', 'SRV'],
        en: ['MX', 'A', 'TXT', 'SRV']
      },
      correct: 0
    },
    {
      id: 27,
      text: {
        fa: 'کدام رکورد DNS برای alias استفاده می‌شود؟',
        en: 'Which DNS record is used for an alias?'
      },
      options: {
        fa: ['CNAME', 'A', 'MX', 'NS'],
        en: ['CNAME', 'A', 'MX', 'NS']
      },
      correct: 0
    },
    {
      id: 28,
      text: {
        fa: 'کدام رکورد DNS برای nameserver استفاده می‌شود؟',
        en: 'Which DNS record is used to specify a nameserver?'
      },
      options: {
        fa: ['NS', 'A', 'MX', 'SOA'],
        en: ['NS', 'A', 'MX', 'SOA']
      },
      correct: 0
    },
    {
      id: 29,
      text: {
        fa: 'کدام فایل حاوی رکورد SOA برای یک zone است؟',
        en: 'Which file contains the SOA record for a zone?'
      },
      options: {
        fa: ['فایل zone', 'named.conf', 'resolv.conf', 'hosts'],
        en: ['Zone file', 'named.conf', 'resolv.conf', 'hosts']
      },
      correct: 0
    },
    {
      id: 30,
      text: {
        fa: 'کدام دستور برای reload کردن پیکربندی BIND بدون restart استفاده می‌شود؟',
        en: 'Which command is used to reload the BIND configuration without restarting?'
      },
      options: {
        fa: ['rndc reload', 'systemctl reload named', 'kill -HUP', 'همه موارد فوق'],
        en: ['rndc reload', 'systemctl reload named', 'kill -HUP', 'All of the above']
      },
      correct: 3
    },
    {
      id: 31,
      text: {
        fa: 'کدام فایل پیکربندی اصلی Apache است؟',
        en: 'Which is the main Apache configuration file?'
      },
      options: {
        fa: ['/etc/apache2/apache2.conf', '/etc/httpd/conf/httpd.conf', 'همه موارد فوق', '/etc/apache/httpd.conf'],
        en: ['/etc/apache2/apache2.conf', '/etc/httpd/conf/httpd.conf', 'All of the above', '/etc/apache/httpd.conf']
      },
      correct: 2
    },
    {
      id: 32,
      text: {
        fa: 'کدام دستور برای تست پیکربندی Apache استفاده می‌شود؟',
        en: 'Which command is used to test Apache configuration?'
      },
      options: {
        fa: ['apachectl configtest', 'httpd -t', 'apache2ctl configtest', 'همه موارد فوق'],
        en: ['apachectl configtest', 'httpd -t', 'apache2ctl configtest', 'All of the above']
      },
      correct: 3
    },
    {
      id: 33,
      text: {
        fa: 'کدام دایرکتوری برای Virtual Hosts در Apache استفاده می‌شود؟',
        en: 'Which directory is used for Apache Virtual Hosts?'
      },
      options: {
        fa: ['/etc/apache2/sites-available/', '/etc/httpd/conf.d/', 'همه موارد فوق', '/var/www/'],
        en: ['/etc/apache2/sites-available/', '/etc/httpd/conf.d/', 'All of the above', '/var/www/']
      },
      correct: 2
    },
    {
      id: 34,
      text: {
        fa: 'کدام فایل برای گواهی SSL خودامضا در Apache استفاده می‌شود؟',
        en: 'Which file is used for self-signed SSL certificate in Apache?'
      },
      options: {
        fa: ['.crt', '.key', '.csr', 'همه موارد فوق'],
        en: ['.crt', '.key', '.csr', 'All of the above']
      },
      correct: 3
    },
    {
      id: 35,
      text: {
        fa: 'کدام دستور برای ایجاد CSR برای Apache استفاده می‌شود؟',
        en: 'Which command is used to create CSR for Apache?'
      },
      options: {
        fa: ['openssl req', 'openssl genrsa', 'openssl x509', 'openssl ca'],
        en: ['openssl req', 'openssl genrsa', 'openssl x509', 'openssl ca']
      },
      correct: 0
    },
    {
      id: 36,
      text: {
        fa: 'کدام فایل پیکربندی اصلی Nginx است؟',
        en: 'Which is the main Nginx configuration file?'
      },
      options: {
        fa: ['/etc/nginx/nginx.conf', '/etc/nginx/conf.d/', '/usr/local/nginx/conf/nginx.conf', 'همه موارد فوق'],
        en: ['/etc/nginx/nginx.conf', '/etc/nginx/conf.d/', '/usr/local/nginx/conf/nginx.conf', 'All of the above']
      },
      correct: 0
    },
    {
      id: 37,
      text: {
        fa: 'کدام دستور برای تست پیکربندی Nginx استفاده می‌شود؟',
        en: 'Which command is used to test Nginx configuration?'
      },
      options: {
        fa: ['nginx -t', 'nginx -s reload', 'nginx -v', 'nginx -c'],
        en: ['nginx -t', 'nginx -s reload', 'nginx -v', 'nginx -c']
      },
      correct: 0
    },
    {
      id: 38,
      text: {
        fa: 'Nginx به عنوان Reverse Proxy چه کاری انجام می‌دهد؟',
        en: 'What does Nginx do as a Reverse Proxy?'
      },
      options: {
        fa: ['هدایت درخواست‌ها به سرورهای پشتی', 'کش کردن محتوا', 'Load balancing', 'همه موارد فوق'],
        en: ['Forwarding requests to backend servers', 'Caching content', 'Load balancing', 'All of the above']
      },
      correct: 3
    },
    {
      id: 39,
      text: {
        fa: 'کدام فایل پیکربندی اصلی Squid است؟',
        en: 'Which is the main Squid configuration file?'
      },
      options: {
        fa: ['/etc/squid/squid.conf', '/etc/squid.conf', '/usr/local/squid/etc/squid.conf', 'همه موارد فوق'],
        en: ['/etc/squid/squid.conf', '/etc/squid.conf', '/usr/local/squid/etc/squid.conf', 'All of the above']
      },
      correct: 3
    },
    {
      id: 40,
      text: {
        fa: 'کدام directive در Squid برای تعریف ACL استفاده می‌شود؟',
        en: 'Which directive in Squid is used to define ACL?'
      },
      options: {
        fa: ['acl', 'http_access', 'allow', 'deny'],
        en: ['acl', 'http_access', 'allow', 'deny']
      },
      correct: 0
    },
    {
      id: 41,
      text: {
        fa: 'کدام فایل پیکربندی اصلی Samba است؟',
        en: 'Which is the main Samba configuration file?'
      },
      options: {
        fa: ['/etc/samba/smb.conf', '/etc/smb.conf', '/usr/local/samba/lib/smb.conf', 'همه موارد فوق'],
        en: ['/etc/samba/smb.conf', '/etc/smb.conf', '/usr/local/samba/lib/smb.conf', 'All of the above']
      },
      correct: 3
    },
    {
      id: 42,
      text: {
        fa: 'کدام دستور برای بررسی پیکربندی Samba استفاده می‌شود؟',
        en: 'Which command is used to check Samba configuration?'
      },
      options: {
        fa: ['testparm', 'smbstatus', 'smbclient', 'nmblookup'],
        en: ['testparm', 'smbstatus', 'smbclient', 'nmblookup']
      },
      correct: 0
    },
    {
      id: 43,
      text: {
        fa: 'کدام پروتکل برای اشتراک فایل در شبکه‌های ویندوز استفاده می‌شود؟',
        en: 'Which protocol is used for file sharing in Windows networks?'
      },
      options: {
        fa: ['SMB/CIFS', 'NFS', 'FTP', 'HTTP'],
        en: ['SMB/CIFS', 'NFS', 'FTP', 'HTTP']
      },
      correct: 0
    },
    {
      id: 44,
      text: {
        fa: 'کدام پروتکل برای اشتراک فایل در شبکه‌های یونیکس/لینوکس استفاده می‌شود؟',
        en: 'Which protocol is used for file sharing in Unix/Linux networks?'
      },
      options: {
        fa: ['NFS', 'SMB', 'FTP', 'SSH'],
        en: ['NFS', 'SMB', 'FTP', 'SSH']
      },
      correct: 0
    },
    {
      id: 45,
      text: {
        fa: 'کدام فایل برای export کردن دایرکتوری‌ها در NFS استفاده می‌شود؟',
        en: 'Which file is used to export directories in NFS?'
      },
      options: {
        fa: ['/etc/exports', '/etc/nfs.conf', '/etc/fstab', '/etc/nfs/exports'],
        en: ['/etc/exports', '/etc/nfs.conf', '/etc/fstab', '/etc/nfs/exports']
      },
      correct: 0
    },
    {
      id: 46,
      text: {
        fa: 'کدام دستور برای نمایش shareهای SMB استفاده می‌شود؟',
        en: 'Which command is used to display SMB shares?'
      },
      options: {
        fa: ['smbclient -L', 'smbstatus', 'testparm', 'nmblookup'],
        en: ['smbclient -L', 'smbstatus', 'testparm', 'nmblookup']
      },
      correct: 0
    },
    {
      id: 47,
      text: {
        fa: 'کدام دستور برای mount کردن share SMB استفاده می‌شود؟',
        en: 'Which command is used to mount an SMB share?'
      },
      options: {
        fa: ['mount -t cifs', 'mount -t smbfs', 'smbmount', 'همه موارد فوق'],
        en: ['mount -t cifs', 'mount -t smbfs', 'smbmount', 'All of the above']
      },
      correct: 3
    },
    {
      id: 48,
      text: {
        fa: 'کدام دستور برای نمایش وضعیت NFS exports استفاده می‌شود؟',
        en: 'Which command is used to display NFS exports status?'
      },
      options: {
        fa: ['showmount -e', 'exportfs', 'nfsstat', 'همه موارد فوق'],
        en: ['showmount -e', 'exportfs', 'nfsstat', 'All of the above']
      },
      correct: 3
    },
    {
      id: 49,
      text: {
        fa: 'کدام گزینه در /etc/exports برای read-only access استفاده می‌شود؟',
        en: 'Which option in /etc/exports is used for read-only access?'
      },
      options: {
        fa: ['ro', 'rw', 'no_root_squash', 'sync'],
        en: ['ro', 'rw', 'no_root_squash', 'sync']
      },
      correct: 0
    },
    {
      id: 50,
      text: {
        fa: 'کدام دستور برای restart کردن سرویس NFS استفاده می‌شود؟',
        en: 'Which command is used to restart the NFS service?'
      },
      options: {
        fa: ['systemctl restart nfs-server', 'service nfs restart', 'exportfs -r', 'همه موارد فوق'],
        en: ['systemctl restart nfs-server', 'service nfs restart', 'exportfs -r', 'All of the above']
      },
      correct: 3
    },
    {
      id: 51,
      text: {
        fa: 'کدام فایل پیکربندی اصلی DHCP server است؟',
        en: 'Which is the main DHCP server configuration file?'
      },
      options: {
        fa: ['/etc/dhcp/dhcpd.conf', '/etc/dhcpd.conf', '/usr/local/etc/dhcpd.conf', 'همه موارد فوق'],
        en: ['/etc/dhcp/dhcpd.conf', '/etc/dhcpd.conf', '/usr/local/etc/dhcpd.conf', 'All of the above']
      },
      correct: 3
    },
    {
      id: 52,
      text: {
        fa: 'کدام فایل برای نگهداری leaseهای DHCP استفاده می‌شود؟',
        en: 'Which file is used to store DHCP leases?'
      },
      options: {
        fa: ['/var/lib/dhcp/dhcpd.leases', '/var/db/dhcpd.leases', '/etc/dhcp/dhcpd.leases', 'همه موارد فوق'],
        en: ['/var/lib/dhcp/dhcpd.leases', '/var/db/dhcpd.leases', '/etc/dhcp/dhcpd.leases', 'All of the above']
      },
      correct: 3
    },
    {
      id: 53,
      text: {
        fa: 'کدام فایل برای پیکربندی PAM استفاده می‌شود؟',
        en: 'Which file is used for PAM configuration?'
      },
      options: {
        fa: ['/etc/pam.d/', '/etc/pam.conf', 'همه موارد فوق', '/etc/security/'],
        en: ['/etc/pam.d/', '/etc/pam.conf', 'All of the above', '/etc/security/']
      },
      correct: 2
    },
    {
      id: 54,
      text: {
        fa: 'کدام module PAM برای احراز هویت با LDAP استفاده می‌شود؟',
        en: 'Which PAM module is used for LDAP authentication?'
      },
      options: {
        fa: ['pam_ldap.so', 'pam_unix.so', 'pam_krb5.so', 'pam_sss.so'],
        en: ['pam_ldap.so', 'pam_unix.so', 'pam_krb5.so', 'pam_sss.so']
      },
      correct: 0
    },
    {
      id: 55,
      text: {
        fa: 'کدام فایل برای پیکربندی OpenLDAP server استفاده می‌شود؟',
        en: 'Which file is used for OpenLDAP server configuration?'
      },
      options: {
        fa: ['/etc/openldap/slapd.conf', '/etc/ldap/slapd.conf', 'همه موارد فوق', '/etc/slapd.conf'],
        en: ['/etc/openldap/slapd.conf', '/etc/ldap/slapd.conf', 'All of the above', '/etc/slapd.conf']
      },
      correct: 2
    },
    {
      id: 56,
      text: {
        fa: 'کدام دستور برای جستجو در دایرکتوری LDAP استفاده می‌شود؟',
        en: 'Which command is used to search the LDAP directory?'
      },
      options: {
        fa: ['ldapsearch', 'ldapadd', 'ldapmodify', 'ldapdelete'],
        en: ['ldapsearch', 'ldapadd', 'ldapmodify', 'ldapdelete']
      },
      correct: 0
    },
    {
      id: 57,
      text: {
        fa: 'کدام فرمت برای import/export داده‌های LDAP استفاده می‌شود؟',
        en: 'Which format is used for LDAP data import/export?'
      },
      options: {
        fa: ['LDIF', 'XML', 'JSON', 'CSV'],
        en: ['LDIF', 'XML', 'JSON', 'CSV']
      },
      correct: 0
    },
    {
      id: 58,
      text: {
        fa: 'کدام فایل برای تنظیمات nsswitch (Name Service Switch) استفاده می‌شود؟',
        en: 'Which file is used for nsswitch (Name Service Switch) configuration?'
      },
      options: {
        fa: ['/etc/nsswitch.conf', '/etc/ldap.conf', '/etc/pam.d/nss', '/etc/nis.conf'],
        en: ['/etc/nsswitch.conf', '/etc/ldap.conf', '/etc/pam.d/nss', '/etc/nis.conf']
      },
      correct: 0
    },
    {
      id: 59,
      text: {
        fa: 'کدام دستور برای تغییر رمز عبور در LDAP استفاده می‌شود؟',
        en: 'Which command is used to change password in LDAP?'
      },
      options: {
        fa: ['ldappasswd', 'passwd', 'chpasswd', 'slappasswd'],
        en: ['ldappasswd', 'passwd', 'chpasswd', 'slappasswd']
      },
      correct: 0
    },
    {
      id: 60,
      text: {
        fa: 'کدام فایل برای پیکربندی client LDAP استفاده می‌شود؟',
        en: 'Which file is used for LDAP client configuration?'
      },
      options: {
        fa: ['/etc/ldap/ldap.conf', '/etc/openldap/ldap.conf', 'همه موارد فوق', '/etc/ldap.conf'],
        en: ['/etc/ldap/ldap.conf', '/etc/openldap/ldap.conf', 'All of the above', '/etc/ldap.conf']
      },
      correct: 2
    }
  ]
};

// ✅ Bilingual version ready for use!
// ✅ نسخه دو زبانه آماده استفاده!
