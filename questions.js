// Python Exam Questions Database

const PYTHON_QUESTIONS = {
  beginner: [
    {
      id: 1,
      text: 'خروجی دستور زیر چیست؟\n\nprint(2 + 3 * 2)',
      options: [
        '10',
        '8',
        '6',
        '7'
      ],
      correct: 1 // index 1 = 8
    },
    {
      id: 2,
      text: 'کدام یک از موارد زیر یک متغیر معتبر در Python است؟',
      options: [
        '2var',
        '_var',
        'class',
        'def'
      ],
      correct: 1 // _var
    },
    {
      id: 3,
      text: 'خروجی کود زیر چیست؟\n\nname = "Python"\nprint(len(name))',
      options: [
        '5',
        '6',
        '7',
        'Error'
      ],
      correct: 1 // 6
    },
    {
      id: 4,
      text: 'لیست در Python چیست؟',
      options: [
        'مجموعه‌ای نامرتب از عناصر',
        'دنباله‌ای مرتب از عناصر',
        'مجموعه‌ای بدون تکرار',
        'فرهنگ داده'
      ],
      correct: 1 // دنباله مرتب
    },
    {
      id: 5,
      text: 'خروجی کد زیر چیست؟\n\nx = [1, 2, 3]\nx.append(4)\nprint(x)',
      options: [
        '[1, 2, 3, 4]',
        '[1, 2, 3]',
        '4',
        'Error'
      ],
      correct: 0 // [1, 2, 3, 4]
    },
    {
      id: 6,
      text: 'مقدار i در انتهای حلقه چیست؟\n\nfor i in range(5):\n    pass',
      options: [
        '4',
        '5',
        '0',
        '6'
      ],
      correct: 0 // 4
    },
    {
      id: 7,
      text: 'خروجی کد زیر چیست؟\n\nif 5 > 3:\n    print("بله")\nelse:\n    print("خیر")',
      options: [
        'خیر',
        'بله',
        'Error',
        'هیچکدام'
      ],
      correct: 1 // بله
    },
    {
      id: 8,
      text: 'کدام تابع برای دریافت طول یک رشته استفاده می‌شود؟',
      options: [
        'length()',
        'size()',
        'len()',
        'count()'
      ],
      correct: 2 // len()
    },
    {
      id: 9,
      text: 'نوع داده‌ای متغیر x چیست؟\n\nx = 3.14',
      options: [
        'int',
        'str',
        'float',
        'bool'
      ],
      correct: 2 // float
    },
    {
      id: 10,
      text: 'خروجی کد زیر چیست؟\n\nprint("Hello" + " " + "World")',
      options: [
        'Hello World',
        'Hello + + World',
        '"Hello World"',
        'Error'
      ],
      correct: 0 // Hello World
    }
  ],

  intermediate: [
    {
      id: 1,
      text: 'خروجی کد زیر چیست؟\n\ndef add(a, b):\n    return a + b\nprint(add(2, 3))',
      options: [
        '5',
        'add(2, 3)',
        'None',
        'Error'
      ],
      correct: 0 // 5
    },
    {
      id: 2,
      text: 'lambda در Python برای چه استفاده می‌شود؟',
      options: [
        'ایجاد تابع ناشناس',
        'ایجاد حلقه',
        'ایجاد شرط',
        'وارد کردن مودول'
      ],
      correct: 0 // ایجاد تابع ناشناس
    },
    {
      id: 3,
      text: 'خروجی کد زیر چیست؟\n\nmy_dict = {"name": "Ali", "age": 25}\nprint(my_dict["name"])',
      options: [
        'Ali',
        'name',
        'Error',
        'None'
      ],
      correct: 0 // Ali
    },
    {
      id: 4,
      text: 'خروجی list comprehension زیر چیست؟\n\n[x*2 for x in range(3)]',
      options: [
        '[0, 2, 4]',
        '[1, 2, 3]',
        '[2, 4, 6]',
        '[0, 1, 2]'
      ],
      correct: 0 // [0, 2, 4]
    },
    {
      id: 5,
      text: 'تفاوت بین extend() و append() در لیست چیست؟',
      options: [
        'append لیست جدید اضافه می‌کند، extend عناصر',
        'extend لیست جدید اضافه می‌کند، append عناصر',
        'هیچ تفاوتی ندارند',
        'extend تنها برای لیست است'
      ],
      correct: 0 // append عنصر یک، extend عناصر لیست
    },
    {
      id: 6,
      text: 'خروجی کد زیر چیست؟\n\nmy_set = {1, 2, 2, 3}\nprint(len(my_set))',
      options: [
        '3',
        '4',
        '2',
        'Error'
      ],
      correct: 0 // 3 (تکرارها حذف می‌شوند)
    },
    {
      id: 7,
      text: 'خروجی کد زیر چیست؟\n\ntry:\n    print(1/0)\nexcept:\n    print("Error")',
      options: [
        'Error',
        '1',
        'Exception',
        'None'
      ],
      correct: 0 // Error
    },
    {
      id: 8,
      text: 'کدام یک برای اصلاح فاصله‌های خالی در رشته استفاده می‌شود؟',
      options: [
        'clean()',
        'strip()',
        'remove()',
        'trim()'
      ],
      correct: 1 // strip()
    },
    {
      id: 9,
      text: 'خروجی کد زیر چیست؟\n\na = [1, 2, 3]\nprint(a[-1])',
      options: [
        '3',
        '-1',
        '1',
        'Error'
      ],
      correct: 0 // 3 (آخرین عنصر)
    },
    {
      id: 10,
      text: 'import math در Python برای چه استفاده می‌شود؟',
      options: [
        'وارد کردن ماژول ریاضی',
        'ایجاد متغیر ریاضی',
        'اصلاح خطاهای ریاضی',
        'تایید اعداد ریاضی'
      ],
      correct: 0 // وارد کردن ماژول ریاضی
    }
  ],

  advanced: [
    {
      id: 1,
      text: 'خروجی کد زیر چیست؟\n\nclass Animal:\n    def sound(self):\n        return "صدا"\n\nclass Dog(Animal):\n    def sound(self):\n        return "واو"\n\nprint(Dog().sound())',
      options: [
        'واو',
        'صدا',
        'Error',
        'None'
      ],
      correct: 0 // واو (override)
    },
    {
      id: 2,
      text: 'Decorator در Python برای چه استفاده می‌شود؟',
      options: [
        'تغییر رفتار تابع',
        'ایجاد تابع جدید',
        'ذخیره داده',
        'بهتر شدن performance'
      ],
      correct: 0 // تغییر رفتار تابع
    },
    {
      id: 3,
      text: 'خروجی کد زیر چیست؟\n\ndef outer():\n    x = 10\n    def inner():\n        return x\n    return inner()\nprint(outer())',
      options: [
        '10',
        'Error',
        'None',
        'inner'
      ],
      correct: 0 // 10 (closure)
    },
    {
      id: 4,
      text: 'خروجی کد زیر چیست؟\n\nfrom functools import reduce\nfrom operator import add\nresult = reduce(add, [1, 2, 3, 4])\nprint(result)',
      options: [
        '10',
        '[1, 2, 3, 4]',
        '4',
        'Error'
      ],
      correct: 0 // 10 (1+2+3+4)
    },
    {
      id: 5,
      text: '*args در تابع برای چه استفاده می‌شود؟',
      options: [
        'دریافت تعداد نامشخصی آرگومان',
        'دریافت فقط یک آرگومان',
        'دریافت لیست',
        'دریافت دیکشنری'
      ],
      correct: 0 // تعداد نامشخصی
    },
    {
      id: 6,
      text: 'خروجی کد زیر چیست؟\n\nimport json\ndata = {"name": "Ali"}\njson_str = json.dumps(data)\nprint(type(json_str))',
      options: [
        '<class \'str\'>',
        '<class \'dict\'>',
        '<class \'list\'>',
        'Error'
      ],
      correct: 0 // str
    },
    {
      id: 7,
      text: 'Generator در Python چیست؟',
      options: [
        'تابع یکبار استفاده',
        'تابع yield کننده',
        'تابع بدون return',
        'تابع خصوصی'
      ],
      correct: 1 // تابع yield کننده
    },
    {
      id: 8,
      text: 'خروجی کد زیر چیست؟\n\ndef multi(a, b=2):\n    return a ** b\nprint(multi(3))',
      options: [
        '9',
        '6',
        '3',
        'Error'
      ],
      correct: 0 // 9 (3^2)
    },
    {
      id: 9,
      text: 'Context manager (with statement) برای چه استفاده می‌شود؟',
      options: [
        'مدیریت منابع و تمیزکاری خودکار',
        'ایجاد متغیر',
        'ایجاد حلقه',
        'تعریف کلاس'
      ],
      correct: 0 // مدیریت منابع
    },
    {
      id: 10,
      text: 'خروجی کد زیر چیست؟\n\nfrom collections import defaultdict\ndd = defaultdict(list)\ndd["key"].append(1)\nprint(dd["key"])',
      options: [
        '[1]',
        'Error',
        '[]',
        '1'
      ],
      correct: 0 // [1]
    }
  ]
};

// Function to get random questions for a level
function getRandomQuestions(level, count = 10) {
  const questions = PYTHON_QUESTIONS[level] || [];
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Export for use in exam
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PYTHON_QUESTIONS, getRandomQuestions };
}
