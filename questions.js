// Python Exam Questions Database - Bilingual (FA/EN)
// Exposed globally via window.PYTHON_QUESTIONS for cross-script access

window.PYTHON_QUESTIONS = {
      fa: {
        beginner: [
          {
            id: 1,
            text: 'خروجی دستور زیر چیست؟\n\nprint(2 + 3 * 2)',
            options: ['10', '8', '6', '7'],
            correct: 1
          },
          {
            id: 2,
            text: 'کدام یک از موارد زیر یک متغیر معتبر در Python است؟',
            options: ['2var', '_var', 'class', 'def'],
            correct: 1
          },
          {
            id: 3,
            text: 'خروجی کد زیر چیست؟\n\nname = "Python"\nprint(len(name))',
            options: ['5', '6', '7', 'خطا'],
            correct: 1
          },
          {
            id: 4,
            text: 'لیست در Python چیست؟',
            options: ['مجموعه نامرتب', 'دنباله مرتب', 'مجموعه بدون تکرار', 'فرهنگ'],
            correct: 1
          },
          {
            id: 5,
            text: 'خروجی کد زیر چیست؟\n\nx = [1, 2, 3]\nx.append(4)\nprint(x)',
            options: ['[1, 2, 3, 4]', '[1, 2, 3]', '4', 'خطا'],
            correct: 0
          },
          {
            id: 6,
            text: 'مقدار i در انتهای حلقه چیست؟\n\nfor i in range(5):\n    pass',
            options: ['4', '5', '0', '6'],
            correct: 0
          },
          {
            id: 7,
            text: 'خروجی کد زیر چیست؟\n\nif 5 > 3:\n    print("بله")\nelse:\n    print("خیر")',
            options: ['خیر', 'بله', 'خطا', 'هیچکدام'],
            correct: 1
          },
          {
            id: 8,
            text: 'کدام تابع برای دریافت طول یک رشته استفاده می‌شود؟',
            options: ['length()', 'size()', 'len()', 'count()'],
            correct: 2
          },
          {
            id: 9,
            text: 'نوع داده متغیر x چیست؟\n\nx = 3.14',
            options: ['int', 'str', 'float', 'bool'],
            correct: 2
          },
          {
            id: 10,
            text: 'خروجی کد زیر چیست؟\n\nprint("Hello" + " " + "World")',
            options: ['Hello World', 'Hello + + World', '"Hello World"', 'خطا'],
            correct: 0
          }
        ],
        intermediate: [
          {
            id: 1,
            text: 'خروجی کد زیر چیست؟\n\ndef add(a, b):\n    return a + b\nprint(add(2, 3))',
            options: ['5', 'add(2, 3)', 'None', 'خطا'],
            correct: 0
          },
          {
            id: 2,
            text: 'lambda در Python برای چه استفاده می‌شود؟',
            options: ['تابع ناشناس', 'حلقه', 'شرط', 'مودول'],
            correct: 0
          },
          {
            id: 3,
            text: 'خروجی کد زیر چیست؟\n\nmy_dict = {"name": "Ali", "age": 25}\nprint(my_dict["name"])',
            options: ['Ali', 'name', 'خطا', 'None'],
            correct: 0
          },
          {
            id: 4,
            text: 'خروجی list comprehension زیر چیست؟\n\n[x*2 for x in range(3)]',
            options: ['[0, 2, 4]', '[1, 2, 3]', '[2, 4, 6]', '[0, 1, 2]'],
            correct: 0
          },
          {
            id: 5,
            text: 'تفاوت بین extend() و append() چیست؟',
            options: ['append عنصر، extend لیست اضافه می‌کند', 'extend عنصر، append لیست', 'بدون تفاوت', 'extend فقط برای لیست'],
            correct: 0
          },
          {
            id: 6,
            text: 'خروجی کد زیر چیست؟\n\nmy_set = {1, 2, 2, 3}\nprint(len(my_set))',
            options: ['3', '4', '2', 'خطا'],
            correct: 0
          },
          {
            id: 7,
            text: 'خروجی کد زیر چیست؟\n\ntry:\n    print(1/0)\nexcept:\n    print("خطا")',
            options: ['خطا', '1', 'Exception', 'None'],
            correct: 0
          },
          {
            id: 8,
            text: 'کدام تابع فاصله‌های خالی را حذف می‌کند؟',
            options: ['clean()', 'strip()', 'remove()', 'trim()'],
            correct: 1
          },
          {
            id: 9,
            text: 'خروجی کد زیر چیست؟\n\na = [1, 2, 3]\nprint(a[-1])',
            options: ['3', '-1', '1', 'خطا'],
            correct: 0
          },
          {
            id: 10,
            text: 'import math برای چه استفاده می‌شود؟',
            options: ['ماژول ریاضی', 'متغیر ریاضی', 'اصلاح خطا', 'تایید اعداد'],
            correct: 0
          }
        ],
        advanced: [
          {
            id: 1,
            text: 'خروجی کد زیر چیست؟\n\nclass Animal:\n    def sound(self):\n        return "صدا"\nclass Dog(Animal):\n    def sound(self):\n        return "واو"\nprint(Dog().sound())',
            options: ['واو', 'صدا', 'خطا', 'None'],
            correct: 0
          },
          {
            id: 2,
            text: 'Decorator برای چه استفاده می‌شود؟',
            options: ['تغییر رفتار تابع', 'تابع جدید', 'ذخیره داده', 'بهتری performance'],
            correct: 0
          },
          {
            id: 3,
            text: 'خروجی کد زیر چیست؟\n\ndef outer():\n    x = 10\n    def inner():\n        return x\n    return inner()\nprint(outer())',
            options: ['10', 'خطا', 'None', 'inner'],
            correct: 0
          },
          {
            id: 4,
            text: 'خروجی کد زیر چیست؟\n\nfrom functools import reduce\nfrom operator import add\nresult = reduce(add, [1, 2, 3, 4])\nprint(result)',
            options: ['10', '[1, 2, 3, 4]', '4', 'خطا'],
            correct: 0
          },
          {
            id: 5,
            text: '*args برای چه استفاده می‌شود؟',
            options: ['آرگومان نامشخص', 'یک آرگومان', 'لیست', 'دیکشنری'],
            correct: 0
          },
          {
            id: 6,
            text: 'خروجی کد زیر چیست؟\n\nimport json\ndata = {"name": "Ali"}\njson_str = json.dumps(data)\nprint(type(json_str))',
            options: ["<class 'str'>", "<class 'dict'>", "<class 'list'>", 'خطا'],
            correct: 0
          },
          {
            id: 7,
            text: 'Generator چیست؟',
            options: ['تابع yield', 'تابع یکبار', 'بدون return', 'خصوصی'],
            correct: 0
          },
          {
            id: 8,
            text: 'خروجی کد زیر چیست؟\n\ndef multi(a, b=2):\n    return a ** b\nprint(multi(3))',
            options: ['9', '6', '3', 'خطا'],
            correct: 0
          },
          {
            id: 9,
            text: 'Context manager (with) برای چه استفاده می‌شود؟',
            options: ['مدیریت منابع', 'متغیر', 'حلقه', 'کلاس'],
            correct: 0
          },
          {
            id: 10,
            text: 'خروجی کد زیر چیست؟\n\nfrom collections import defaultdict\ndd = defaultdict(list)\ndd["key"].append(1)\nprint(dd["key"])',
            options: ['[1]', 'خطا', '[]', '1'],
            correct: 0
          }
        ]
      },
      en: {
        beginner: [
          {
            id: 1,
            text: 'What is the output of the following statement?\n\nprint(2 + 3 * 2)',
            options: ['10', '8', '6', '7'],
            correct: 1
          },
          {
            id: 2,
            text: 'Which of the following is a valid variable name in Python?',
            options: ['2var', '_var', 'class', 'def'],
            correct: 1
          },
          {
            id: 3,
            text: 'What is the output of the following code?\n\nname = "Python"\nprint(len(name))',
            options: ['5', '6', '7', 'Error'],
            correct: 1
          },
          {
            id: 4,
            text: 'What is a list in Python?',
            options: ['An unordered collection', 'An ordered sequence', 'A collection without duplicates', 'A dictionary'],
            correct: 1
          },
          {
            id: 5,
            text: 'What is the output of the following code?\n\nx = [1, 2, 3]\nx.append(4)\nprint(x)',
            options: ['[1, 2, 3, 4]', '[1, 2, 3]', '4', 'Error'],
            correct: 0
          },
          {
            id: 6,
            text: 'What is the value of i at the end of the loop?\n\nfor i in range(5):\n    pass',
            options: ['4', '5', '0', '6'],
            correct: 0
          },
          {
            id: 7,
            text: 'What is the output of the following code?\n\nif 5 > 3:\n    print("Yes")\nelse:\n    print("No")',
            options: ['No', 'Yes', 'Error', 'None of these'],
            correct: 1
          },
          {
            id: 8,
            text: 'Which function is used to get the length of a string?',
            options: ['length()', 'size()', 'len()', 'count()'],
            correct: 2
          },
          {
            id: 9,
            text: 'What is the data type of variable x?\n\nx = 3.14',
            options: ['int', 'str', 'float', 'bool'],
            correct: 2
          },
          {
            id: 10,
            text: 'What is the output of the following code?\n\nprint("Hello" + " " + "World")',
            options: ['Hello World', 'Hello + + World', '"Hello World"', 'Error'],
            correct: 0
          }
        ],
        intermediate: [
          {
            id: 1,
            text: 'What is the output of the following code?\n\ndef add(a, b):\n    return a + b\nprint(add(2, 3))',
            options: ['5', 'add(2, 3)', 'None', 'Error'],
            correct: 0
          },
          {
            id: 2,
            text: 'What is lambda used for in Python?',
            options: ['Anonymous function', 'Loop', 'Condition', 'Module'],
            correct: 0
          },
          {
            id: 3,
            text: 'What is the output of the following code?\n\nmy_dict = {"name": "Ali", "age": 25}\nprint(my_dict["name"])',
            options: ['Ali', 'name', 'Error', 'None'],
            correct: 0
          },
          {
            id: 4,
            text: 'What is the output of the following list comprehension?\n\n[x*2 for x in range(3)]',
            options: ['[0, 2, 4]', '[1, 2, 3]', '[2, 4, 6]', '[0, 1, 2]'],
            correct: 0
          },
          {
            id: 5,
            text: 'What is the difference between extend() and append()?',
            options: ['append adds an element, extend adds a list', 'extend adds an element, append adds a list', 'No difference', 'extend only works for lists'],
            correct: 0
          },
          {
            id: 6,
            text: 'What is the output of the following code?\n\nmy_set = {1, 2, 2, 3}\nprint(len(my_set))',
            options: ['3', '4', '2', 'Error'],
            correct: 0
          },
          {
            id: 7,
            text: 'What is the output of the following code?\n\ntry:\n    print(1/0)\nexcept:\n    print("Error")',
            options: ['Error', '1', 'Exception', 'None'],
            correct: 0
          },
          {
            id: 8,
            text: 'Which function removes whitespace from a string?',
            options: ['clean()', 'strip()', 'remove()', 'trim()'],
            correct: 1
          },
          {
            id: 9,
            text: 'What is the output of the following code?\n\na = [1, 2, 3]\nprint(a[-1])',
            options: ['3', '-1', '1', 'Error'],
            correct: 0
          },
          {
            id: 10,
            text: 'What is import math used for?',
            options: ['Math module', 'Math variable', 'Fix errors', 'Validate numbers'],
            correct: 0
          }
        ],
        advanced: [
          {
            id: 1,
            text: 'What is the output of the following code?\n\nclass Animal:\n    def sound(self):\n        return "Sound"\nclass Dog(Animal):\n    def sound(self):\n        return "Woof"\nprint(Dog().sound())',
            options: ['Woof', 'Sound', 'Error', 'None'],
            correct: 0
          },
          {
            id: 2,
            text: 'What is a decorator used for?',
            options: ['Modifying function behavior', 'New function', 'Storing data', 'Better performance'],
            correct: 0
          },
          {
            id: 3,
            text: 'What is the output of the following code?\n\ndef outer():\n    x = 10\n    def inner():\n        return x\n    return inner()\nprint(outer())',
            options: ['10', 'Error', 'None', 'inner'],
            correct: 0
          },
          {
            id: 4,
            text: 'What is the output of the following code?\n\nfrom functools import reduce\nfrom operator import add\nresult = reduce(add, [1, 2, 3, 4])\nprint(result)',
            options: ['10', '[1, 2, 3, 4]', '4', 'Error'],
            correct: 0
          },
          {
            id: 5,
            text: 'What is *args used for?',
            options: ['Unspecified number of arguments', 'One argument', 'A list', 'A dictionary'],
            correct: 0
          },
          {
            id: 6,
            text: 'What is the output of the following code?\n\nimport json\ndata = {"name": "Ali"}\njson_str = json.dumps(data)\nprint(type(json_str))',
            options: ["<class 'str'>", "<class 'dict'>", "<class 'list'>", 'Error'],
            correct: 0
          },
          {
            id: 7,
            text: 'What is a generator?',
            options: ['yield function', 'One-time function', 'No return', 'Private'],
            correct: 0
          },
          {
            id: 8,
            text: 'What is the output of the following code?\n\ndef multi(a, b=2):\n    return a ** b\nprint(multi(3))',
            options: ['9', '6', '3', 'Error'],
            correct: 0
          },
          {
            id: 9,
            text: 'What is a context manager (with) used for?',
            options: ['Resource management', 'Variable', 'Loop', 'Class'],
            correct: 0
          },
          {
            id: 10,
            text: 'What is the output of the following code?\n\nfrom collections import defaultdict\ndd = defaultdict(list)\ndd["key"].append(1)\nprint(dd["key"])',
            options: ['[1]', 'Error', '[]', '1'],
            correct: 0
          }
        ]
      }
    };
// Function to get random questions for a level and language
function getRandomQuestions(level, lang, count) {
  count = count || 10;
  var questions = (window.PYTHON_QUESTIONS[lang] && window.PYTHON_QUESTIONS[lang][level]) || [];
  var shuffled = questions.slice().sort(function() { return Math.random() - 0.5; });
  return shuffled.slice(0, count);
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PYTHON_QUESTIONS: window.PYTHON_QUESTIONS, getRandomQuestions: getRandomQuestions };
}
