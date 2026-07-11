// Python Exam Questions Database - Bilingual (English & Persian)

const PYTHON_QUESTIONS = {
  beginner: [
    {
      id: 1,
      text: {
        en: 'What is the output of the following command?\n\nprint(2 + 3 * 2)',
        fa: 'خروجی دستور زیر چیست؟\n\nprint(2 + 3 * 2)'
      },
      options: {
        en: ['10', '8', '6', '7'],
        fa: ['10', '8', '6', '7']
      },
      correct: 1 // index 1 = 8
    },
    {
      id: 2,
      text: {
        en: 'Which of the following is a valid variable in Python?',
        fa: 'کدام یک از موارد زیر یک متغیر معتبر در Python است؟'
      },
      options: {
        en: ['2var', '_var', 'class', 'def'],
        fa: ['2var', '_var', 'class', 'def']
      },
      correct: 1 // _var
    },
    {
      id: 3,
      text: {
        en: 'What is the output of the following code?\n\nname = "Python"\nprint(len(name))',
        fa: 'خروجی کد زیر چیست؟\n\nname = "Python"\nprint(len(name))'
      },
      options: {
        en: ['5', '6', '7', 'Error'],
        fa: ['5', '6', '7', 'Error']
      },
      correct: 1 // 6
    },
    {
      id: 4,
      text: {
        en: 'What is a list in Python?',
        fa: 'لیست در Python چیست؟'
      },
      options: {
        en: ['An unordered collection of elements', 'An ordered sequence of elements', 'A collection without repetition', 'A data dictionary'],
        fa: ['مجموعه‌ای نامرتب از عناصر', 'دنباله‌ای مرتب از عناصر', 'مجموعه‌ای بدون تکرار', 'فرهنگ داده']
      },
      correct: 1 // ordered sequence
    },
    {
      id: 5,
      text: {
        en: 'What is the output of the following code?\n\nx = [1, 2, 3]\nx.append(4)\nprint(x)',
        fa: 'خروجی کد زیر چیست؟\n\nx = [1, 2, 3]\nx.append(4)\nprint(x)'
      },
      options: {
        en: ['[1, 2, 3, 4]', '[1, 2, 3]', '4', 'Error'],
        fa: ['[1, 2, 3, 4]', '[1, 2, 3]', '4', 'Error']
      },
      correct: 0 // [1, 2, 3, 4]
    },
    {
      id: 6,
      text: {
        en: 'What is the value of i at the end of the loop?\n\nfor i in range(5):\n    pass',
        fa: 'مقدار i در انتهای حلقه چیست؟\n\nfor i in range(5):\n    pass'
      },
      options: {
        en: ['4', '5', '0', '6'],
        fa: ['4', '5', '0', '6']
      },
      correct: 0 // 4
    },
    {
      id: 7,
      text: {
        en: 'What is the output of the following code?\n\nif 5 > 3:\n    print("Yes")\nelse:\n    print("No")',
        fa: 'خروجی کد زیر چیست؟\n\nif 5 > 3:\n    print("بله")\nelse:\n    print("خیر")'
      },
      options: {
        en: ['No', 'Yes', 'Error', 'None'],
        fa: ['خیر', 'بله', 'Error', 'None']
      },
      correct: 1 // Yes
    },
    {
      id: 8,
      text: {
        en: 'Which function is used to get the length of a string?',
        fa: 'کدام تابع برای دریافت طول یک رشته استفاده می‌شود؟'
      },
      options: {
        en: ['length()', 'size()', 'len()', 'count()'],
        fa: ['length()', 'size()', 'len()', 'count()']
      },
      correct: 2 // len()
    },
    {
      id: 9,
      text: {
        en: 'What is the data type of variable x?\n\nx = 3.14',
        fa: 'نوع داده‌ای متغیر x چیست؟\n\nx = 3.14'
      },
      options: {
        en: ['int', 'str', 'float', 'bool'],
        fa: ['int', 'str', 'float', 'bool']
      },
      correct: 2 // float
    },
    {
      id: 10,
      text: {
        en: 'What is the output of the following code?\n\nprint("Hello" + " " + "World")',
        fa: 'خروجی کد زیر چیست؟\n\nprint("Hello" + " " + "World")'
      },
      options: {
        en: ['Hello World', 'Hello + + World', '"Hello World"', 'Error'],
        fa: ['Hello World', 'Hello + + World', '"Hello World"', 'Error']
      },
      correct: 0 // Hello World
    }
  ],

  intermediate: [
    {
      id: 1,
      text: {
        en: 'What is the output of the following code?\n\ndef add(a, b):\n    return a + b\nprint(add(2, 3))',
        fa: 'خروجی کد زیر چیست؟\n\ndef add(a, b):\n    return a + b\nprint(add(2, 3))'
      },
      options: {
        en: ['5', 'add(2, 3)', 'None', 'Error'],
        fa: ['5', 'add(2, 3)', 'None', 'Error']
      },
      correct: 0 // 5
    },
    {
      id: 2,
      text: {
        en: 'What is lambda used for in Python?',
        fa: 'lambda در Python برای چه استفاده می‌شود؟'
      },
      options: {
        en: ['Create anonymous functions', 'Create loops', 'Create conditions', 'Import modules'],
        fa: ['ایجاد تابع ناشناس', 'ایجاد حلقه', 'ایجاد شرط', 'وارد کردن مودول']
      },
      correct: 0 // anonymous functions
    },
    {
      id: 3,
      text: {
        en: 'What is the output of the following code?\n\nmy_dict = {"name": "Ali", "age": 25}\nprint(my_dict["name"])',
        fa: 'خروجی کد زیر چیست؟\n\nmy_dict = {"name": "Ali", "age": 25}\nprint(my_dict["name"])'
      },
      options: {
        en: ['Ali', 'name', 'Error', 'None'],
        fa: ['Ali', 'name', 'Error', 'None']
      },
      correct: 0 // Ali
    },
    {
      id: 4,
      text: {
        en: 'What is the output of the following list comprehension?\n\n[x*2 for x in range(3)]',
        fa: 'خروجی list comprehension زیر چیست؟\n\n[x*2 for x in range(3)]'
      },
      options: {
        en: ['[0, 2, 4]', '[1, 2, 3]', '[2, 4, 6]', '[0, 1, 2]'],
        fa: ['[0, 2, 4]', '[1, 2, 3]', '[2, 4, 6]', '[0, 1, 2]']
      },
      correct: 0 // [0, 2, 4]
    },
    {
      id: 5,
      text: {
        en: 'What is the difference between extend() and append() in a list?',
        fa: 'تفاوت بین extend() و append() در لیست چیست؟'
      },
      options: {
        en: ['append adds a new list, extend adds elements', 'extend adds a new list, append adds elements', 'No difference', 'extend is only for lists'],
        fa: ['append لیست جدید اضافه می‌کند، extend عناصر', 'extend لیست جدید اضافه می‌کند، append عناصر', 'هیچ تفاوتی ندارند', 'extend تنها برای لیست است']
      },
      correct: 1 // extend adds elements
    },
    {
      id: 6,
      text: {
        en: 'What is the output of the following code?\n\nmy_set = {1, 2, 2, 3}\nprint(len(my_set))',
        fa: 'خروجی کد زیر چیست؟\n\nmy_set = {1, 2, 2, 3}\nprint(len(my_set))'
      },
      options: {
        en: ['3', '4', '2', 'Error'],
        fa: ['3', '4', '2', 'Error']
      },
      correct: 0 // 3 (duplicates removed)
    },
    {
      id: 7,
      text: {
        en: 'What is the output of the following code?\n\ntry:\n    print(1/0)\nexcept:\n    print("Error")',
        fa: 'خروجی کد زیر چیست؟\n\ntry:\n    print(1/0)\nexcept:\n    print("Error")'
      },
      options: {
        en: ['Error', '1', 'Exception', 'None'],
        fa: ['Error', '1', 'Exception', 'None']
      },
      correct: 0 // Error
    },
    {
      id: 8,
      text: {
        en: 'Which is used to remove whitespace from a string?',
        fa: 'کدام یک برای اصلاح فاصله‌های خالی در رشته استفاده می‌شود؟'
      },
      options: {
        en: ['clean()', 'strip()', 'remove()', 'trim()'],
        fa: ['clean()', 'strip()', 'remove()', 'trim()']
      },
      correct: 1 // strip()
    },
    {
      id: 9,
      text: {
        en: 'What is the output of the following code?\n\na = [1, 2, 3]\nprint(a[-1])',
        fa: 'خروجی کد زیر چیست؟\n\na = [1, 2, 3]\nprint(a[-1])'
      },
      options: {
        en: ['3', '-1', '1', 'Error'],
        fa: ['3', '-1', '1', 'Error']
      },
      correct: 0 // 3 (last element)
    },
    {
      id: 10,
      text: {
        en: 'What is import math used for in Python?',
        fa: 'import math در Python برای چه استفاده می‌شود؟'
      },
      options: {
        en: ['Import mathematical module', 'Create mathematical variable', 'Fix mathematical errors', 'Verify mathematical numbers'],
        fa: ['وارد کردن ماژول ریاضی', 'ایجاد متغیر ریاضی', 'اصلاح خطاهای ریاضی', 'تایید اعداد ریاضی']
      },
      correct: 0 // import math module
    }
  ],

  advanced: [
    {
      id: 1,
      text: {
        en: 'What is the output of the following code?\n\nclass Animal:\n    def sound(self):\n        return "sound"\n\nclass Dog(Animal):\n    def sound(self):\n        return "woof"\n\nprint(Dog().sound())',
        fa: 'خروجی کد زیر چیست؟\n\nclass Animal:\n    def sound(self):\n        return "صدا"\n\nclass Dog(Animal):\n    def sound(self):\n        return "واو"\n\nprint(Dog().sound())'
      },
      options: {
        en: ['woof', 'sound', 'Error', 'None'],
        fa: ['واو', 'صدا', 'Error', 'None']
      },
      correct: 0 // woof (override)
    },
    {
      id: 2,
      text: {
        en: 'What is a Decorator used for in Python?',
        fa: 'Decorator در Python برای چه استفاده می‌شود؟'
      },
      options: {
        en: ['Change function behavior', 'Create new function', 'Store data', 'Improve performance'],
        fa: ['تغییر رفتار تابع', 'ایجاد تابع جدید', 'ذخیره داده', 'بهتر شدن performance']
      },
      correct: 0 // change behavior
    },
    {
      id: 3,
      text: {
        en: 'What is the output of the following code?\n\ndef outer():\n    x = 10\n    def inner():\n        return x\n    return inner()\nprint(outer())',
        fa: 'خروجی کد زیر چیست؟\n\ndef outer():\n    x = 10\n    def inner():\n        return x\n    return inner()\nprint(outer())'
      },
      options: {
        en: ['10', 'Error', 'None', 'inner'],
        fa: ['10', 'Error', 'None', 'inner']
      },
      correct: 0 // 10 (closure)
    },
    {
      id: 4,
      text: {
        en: 'What is the output of the following code?\n\nfrom functools import reduce\nfrom operator import add\nresult = reduce(add, [1, 2, 3, 4])\nprint(result)',
        fa: 'خروجی کد زیر چیست؟\n\nfrom functools import reduce\nfrom operator import add\nresult = reduce(add, [1, 2, 3, 4])\nprint(result)'
      },
      options: {
        en: ['10', '[1, 2, 3, 4]', '4', 'Error'],
        fa: ['10', '[1, 2, 3, 4]', '4', 'Error']
      },
      correct: 0 // 10 (1+2+3+4)
    },
    {
      id: 5,
      text: {
        en: 'What is *args used for in a function?',
        fa: '*args در تابع برای چه استفاده می‌شود؟'
      },
      options: {
        en: ['Accept any number of arguments', 'Accept only one argument', 'Accept a list', 'Accept a dictionary'],
        fa: ['دریافت تعداد نامشخصی آرگومان', 'دریافت فقط یک آرگومان', 'دریافت لیست', 'دریافت دیکشنری']
      },
      correct: 0 // any number
    },
    {
      id: 6,
      text: {
        en: 'What is the output of the following code?\n\nimport json\ndata = {"name": "Ali"}\njson_str = json.dumps(data)\nprint(type(json_str))',
        fa: 'خروجی کد زیر چیست؟\n\nimport json\ndata = {"name": "Ali"}\njson_str = json.dumps(data)\nprint(type(json_str))'
      },
      options: {
        en: ["<class 'str'>", "<class 'dict'>", "<class 'list'>", 'Error'],
        fa: ["<class 'str'>", "<class 'dict'>", "<class 'list'>", 'Error']
      },
      correct: 0 // str
    },
    {
      id: 7,
      text: {
        en: 'What is a Generator in Python?',
        fa: 'Generator در Python چیست؟'
      },
      options: {
        en: ['One-time use function', 'A function that yields', 'Function without return', 'Private function'],
        fa: ['تابع یکبار استفاده', 'تابع yield کننده', 'تابع بدون return', 'تابع خصوصی']
      },
      correct: 1 // function that yields
    },
    {
      id: 8,
      text: {
        en: 'What is the output of the following code?\n\ndef multi(a, b=2):\n    return a ** b\nprint(multi(3))',
        fa: 'خروجی کد زیر چیست؟\n\ndef multi(a, b=2):\n    return a ** b\nprint(multi(3))'
      },
      options: {
        en: ['9', '6', '3', 'Error'],
        fa: ['9', '6', '3', 'Error']
      },
      correct: 0 // 9 (3^2)
    },
    {
      id: 9,
      text: {
        en: 'What is the Context manager (with statement) used for?',
        fa: 'Context manager (with statement) برای چه استفاده می‌شود؟'
      },
      options: {
        en: ['Manage resources and automatic cleanup', 'Create variable', 'Create loop', 'Define class'],
        fa: ['مدیریت منابع و تمیزکاری خودکار', 'ایجاد متغیر', 'ایجاد حلقه', 'تعریف کلاس']
      },
      correct: 0 // manage resources
    },
    {
      id: 10,
      text: {
        en: 'What is the output of the following code?\n\nfrom collections import defaultdict\ndd = defaultdict(list)\ndd["key"].append(1)\nprint(dd["key"])',
        fa: 'خروجی کد زیر چیست؟\n\nfrom collections import defaultdict\ndd = defaultdict(list)\ndd["key"].append(1)\nprint(dd["key"])'
      },
      options: {
        en: ['[1]', 'Error', '[]', '1'],
        fa: ['[1]', 'Error', '[]', '1']
      },
      correct: 0 // [1]
    }
  ]
};

// Function to get random questions for a level
function getRandomQuestions(level, count = 10, lang = 'en') {
  const questions = PYTHON_QUESTIONS[level] || [];
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Export for use in exam
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PYTHON_QUESTIONS, getRandomQuestions };
}
