import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Copy, Trash2, Play, Settings, Facebook, AlertTriangle } from "lucide-react";
import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import TranslationSettings from "./TranslationSettings";

interface CodeEditorProps {
  language: "javascript" | "python";
}

type TranslationMode = "full" | "partial" | "mixed";

const CodeEditor = ({ language }: CodeEditorProps) => {
  const [arabicCode, setArabicCode] = useState("");
  const [translatedCode, setTranslatedCode] = useState("");
  const [translationMode, setTranslationMode] = useState<TranslationMode>("partial");
  const [showSupportDialog, setShowSupportDialog] = useState(false);
  const [clickedWord, setClickedWord] = useState<string | null>(null);
  const { toast } = useToast();

  // Enhanced and expanded translation dictionaries with comprehensive terms
  const jsTranslations = {
    // Basic keywords
    "متغير": "let",
    "ثابت": "const", 
    "دالة": "function",
    "ارجع": "return",
    "اذا": "if",
    "والا": "else",
    "وإلا_اذا": "else if",
    "لكل": "for",
    "بينما": "while",
    "اعمل_بينما": "do while",
    "كسر": "break",
    "استمر": "continue",
    "جرب": "try",
    "التقط": "catch",
    "اخيرا": "finally",
    "ارمي": "throw",
    "جديد": "new",
    "هذا": "this",
    "فئة": "class",
    "يمتد": "extends",
    "تصدير": "export",
    "استيراد": "import",
    "من": "from",
    "افتراضي": "default",
    "نوع_من": "typeof",
    "مثيل_من": "instanceof",
    "في": "in",
    "حذف": "delete",
    "فارغة": "void",
    "انتظر": "await",
    "غير_متزامن": "async",
    "ثابت_الكتلة": "const",
    "متغير_الكتلة": "let",
    "متغير_عام": "var",
    "اصطياد": "catch",
    "رمي": "throw",
    "بناء": "constructor",
    "احصل": "get",
    "اضبط": "set",
    "ثابت_فئة": "static",
    "تطبيق": "apply",
    "استدعاء": "call",
    "ربط_this": "bind",
    
    // Built-in objects and methods
    "اطبع": "console.log",
    "خطأ": "console.error",
    "تحذير": "console.warn",
    "معلومات": "console.info",
     "تتبع": "console.trace",
     "جدول": "console.table",
     "مجموعة_كونسول": "console.group",
     "نهاية_مجموعة": "console.groupEnd",
    "توقيت": "console.time",
    "نهاية_توقيت": "console.timeEnd",
    "عدادات": "console.count",
    "مسح_عدادات": "console.countReset",
    "تنبيه": "alert",
    "تأكيد": "confirm",
    "مطالبة": "prompt",
    "سلسلة": "String",
    "رقم": "Number",
    "رقم_كبير": "BigInt",
    "منطقي": "Boolean",
    "مصفوفة": "Array",
    "كائن": "Object",
    "تاريخ": "Date",
    "رياضيات": "Math",
    "جيسون": "JSON",
    "تعبير_نمطي": "RegExp",
    "خريطة": "Map",
    "خريطة_ضعيفة": "WeakMap",
    "مجموعة": "Set",
    "مجموعة_ضعيفة": "WeakSet",
    "وعد": "Promise",
    "رمز": "Symbol",
    "متكرر": "Iterator",
    "مولد": "Generator",
    "بوكسي": "Proxy",
    "تأمل": "Reflect",
    "مصفوفة_مؤقتة": "ArrayBuffer",
    "عرض_بيانات": "DataView",
    "مصفوفة_مكتوبة": "TypedArray",
    "عدد_صحيح_8": "Int8Array",
    "عدد_صحيح_16": "Int16Array",
    "عدد_صحيح_32": "Int32Array",
    "عدد_صحيح_كبير_64": "BigInt64Array",
    "عدد_غير_سالب_8": "Uint8Array",
    "عدد_غير_سالب_16": "Uint16Array",
    "عدد_غير_سالب_32": "Uint32Array",
    "عدد_غير_سالب_كبير_64": "BigUint64Array",
    "عدد_عشري_32": "Float32Array",
    "عدد_عشري_64": "Float64Array",
    "مصفوفة_مؤقتة_مشتركة": "SharedArrayBuffer",
    "عمليات_ذرية": "Atomics",
    
    // Array methods - comprehensive
    "ادفع": "push",
    "اسحب": "pop",
    "انزع": "shift",
    "ادرج": "unshift",
    "شريحة": "slice",
    "ربط": "splice",
    "اربط": "join",
    "عكس": "reverse",
    "رتب": "sort",
    "اعثر": "find",
    "اعثر_على_فهرس": "findIndex",
    "اعثر_آخر": "findLast",
    "اعثر_على_فهرس_آخر": "findLastIndex",
    "رشح": "filter",
    "اربط_كل": "map",
    "تقليل": "reduce",
    "تقليل_يمين": "reduceRight",
    "لكل_عنصر": "forEach",
    "بعض": "some",
    "كل": "every",
    "يشمل": "includes",
    "فهرس_من": "indexOf",
    "آخر_فهرس_من": "lastIndexOf",
    "مسطح": "flat",
    "اربط_مسطح": "flatMap",
    "نسخ_داخل": "copyWithin",
    "ملء": "fill",
    "من_مصفوفة": "from",
    "هو_مصفوفة": "isArray",
    "من_فهارس": "keys",
    "قيم_مصفوفة": "values",
    "ادخالات_مصفوفة": "entries",
    "في_موضع": "at",
    "تحديث_كل": "with",
    
    // String methods - comprehensive
    "الطول": "length",
    "يحتوي": "includes",
    "يبدأ_بـ": "startsWith",
    "ينتهي_بـ": "endsWith",
    "استبدل": "replace",
    "استبدل_الكل": "replaceAll",
    "تقسيم": "split",
    "تشذيب": "trim",
    "تشذيب_البداية": "trimStart",
    "تشذيب_النهاية": "trimEnd",
    "كبير": "toUpperCase",
    "صغير": "toLowerCase",
    "موضعي_كبير": "toLocaleUpperCase",
    "موضعي_صغير": "toLocaleLowerCase",
    "تكرار": "repeat",
    "حشو_البداية": "padStart",
    "حشو_النهاية": "padEnd",
    "رمز_في": "charAt",
    "كود_رمز_في": "charCodeAt",
    "نقطة_كود_في": "codePointAt",
    "مطابقة": "match",
    "مطابقة_الكل": "matchAll",
    "بحث": "search",
    "تطبيع": "normalize",
    "سلسلة_فرعية": "substring",
    "فرعي": "substr",
    "موضعي_مقارنة": "localeCompare",
    "من_نقطة_كود": "fromCodePoint",
    "من_كود_رمز": "fromCharCode",
    "خام": "raw",
    "في_موضع_نص": "at",
    
    // Math methods - comprehensive
    "عشوائي": "random",
    "دائري": "round",
    "سقف": "ceil",
    "ارضية": "floor",
    "اقطع": "trunc",
    "اشارة": "sign",
    "مطلق": "abs",
    "اكبر": "max",
    "اصغر": "min",
    "قوة": "pow",
    "جذر_تربيعي": "sqrt",
    "جذر_مكعب": "cbrt",
    "جذر_تربيعي_مجموع_مربعات": "hypot",
    "لوغاريتم": "log",
    "لوغاريتم_10": "log10",
    "لوغاريتم_2": "log2",
    "لوغاريتم_واحد_زائد": "log1p",
    "أس": "exp",
    "أس_ناقص_واحد": "expm1",
    "جيب": "sin",
    "جيب_تمام": "cos",
    "ظل": "tan",
    "جيب_زاوي": "sinh",
    "جيب_تمام_زاوي": "cosh",
    "ظل_زاوي": "tanh",
    "جيب_عكسي": "asin",
    "جيب_تمام_عكسي": "acos",
    "ظل_عكسي": "atan",
    "ظل_عكسي_ثنائي": "atan2",
    "جيب_زاوي_عكسي": "asinh",
    "جيب_تمام_زاوي_عكسي": "acosh",
    "ظل_زاوي_عكسي": "atanh",
    "ضرب_وجمع": "fma",
    "ضرب_32": "imul",
    "زعيم_الاصفار": "clz32",
    "باي": "PI",
    "أويلر": "E",
    "لوغاريتم_2_أويلر": "LN2",
    "لوغاريتم_10_أويلر": "LN10",
    "لوغاريتم_أويلر_2": "LOG2E",
    "لوغاريتم_أويلر_10": "LOG10E",
    "جذر_تربيعي_نصف": "SQRT1_2",
    "جذر_تربيعي_اثنين": "SQRT2",
    
    // Object methods - comprehensive
    "مفاتيح": "keys",
    "قيم": "values",
    "مدخلات": "entries",
    "لديه_خاصية": "hasOwnProperty",
    "لديه_خاصية_ذاتية": "hasOwnProperty",
    "قابل_للعد": "propertyIsEnumerable",
    "تجميد": "freeze",
    "اختام": "seal",
    "منع_التمديد": "preventExtensions",
    "مجمد": "isFrozen",
    "مختوم": "isSealed",
    "قابل_للتمديد": "isExtensible",
    "نسخ": "assign",
    "انشاء": "create",
    "تعريف_خاصية": "defineProperty",
    "تعريف_خصائص": "defineProperties",
    "وصف_خاصية": "getOwnPropertyDescriptor",
    "وصف_خصائص": "getOwnPropertyDescriptors",
    "اسماء_خصائص": "getOwnPropertyNames",
    "رموز_خصائص": "getOwnPropertySymbols",
    "احصل_على_الأصل": "getPrototypeOf",
    "اضبط_الأصل": "setPrototypeOf",
    "هو": "is",
    "مفاتيح_ذاتية": "getOwnPropertyNames",
    "من_ادخالات": "fromEntries",
    
    // Date methods - comprehensive  
    "الآن": "now",
    "تحليل": "parse",
    "عالمي_توقيت": "UTC",
    "السنة": "getFullYear",
    "السنة_عالمي": "getUTCFullYear",
    "الشهر": "getMonth",
    "الشهر_عالمي": "getUTCMonth",
    "التاريخ": "getDate",
    "التاريخ_عالمي": "getUTCDate",
    "اليوم": "getDay",
    "اليوم_عالمي": "getUTCDay",
    "الساعات": "getHours",
    "الساعات_عالمي": "getUTCHours",
    "الدقائق": "getMinutes",
    "الدقائق_عالمي": "getUTCMinutes",
    "الثواني": "getSeconds",
    "الثواني_عالمي": "getUTCSeconds",
    "الملي_ثواني": "getMilliseconds",
    "الملي_ثواني_عالمي": "getUTCMilliseconds",
    "اضبط_السنة": "setFullYear",
    "اضبط_السنة_عالمي": "setUTCFullYear",
    "اضبط_الشهر": "setMonth",
    "اضبط_الشهر_عالمي": "setUTCMonth",
    "اضبط_التاريخ": "setDate",
    "اضبط_التاريخ_عالمي": "setUTCDate",
    "اضبط_الساعات": "setHours",
    "اضبط_الساعات_عالمي": "setUTCHours",
    "اضبط_الدقائق": "setMinutes",
    "اضبط_الدقائق_عالمي": "setUTCMinutes",
    "اضبط_الثواني": "setSeconds",
    "اضبط_الثواني_عالمي": "setUTCSeconds",
    "اضبط_الملي_ثواني": "setMilliseconds",
    "اضبط_الملي_ثواني_عالمي": "setUTCMilliseconds",
    "اضبط_الوقت": "setTime",
    "احصل_على_الوقت": "getTime",
    "فرق_المنطقة_الزمنية": "getTimezoneOffset",
    "الى_سلسلة": "toString",
    "الى_سلسلة_تاريخ": "toDateString",
    "الى_سلسلة_وقت": "toTimeString",
    "الى_سلسلة_ايزو": "toISOString",
    "الى_سلسلة_جيسون": "toJSON",
    "الى_سلسلة_عالمي": "toUTCString",
    "الى_سلسلة_محلي": "toLocaleString",
    "الى_سلسلة_تاريخ_محلي": "toLocaleDateString",
    "الى_سلسلة_وقت_محلي": "toLocaleTimeString",
    "قيمة_من": "valueOf",
    
    // Operators and logical - comprehensive
    "يساوي": "===",
    "لا_يساوي": "!==",
    "يساوي_تقريبا": "==",
    "لا_يساوي_تقريبا": "!=",
    "اكبر_من": ">",
    "اصغر_من": "<",
    "اكبر_او_يساوي": ">=",
    "اصغر_او_يساوي": "<=",
    "و": "&&",
    "او": "||",
    "ليس": "!",
    "او_الفارغ": "??",
    "اختيار_اذا": "?:",
    "زائد": "+",
    "ناقص": "-",
    "ضرب": "*",
    "قسمة": "/",
    "باقي": "%",
    "قوة_رمز": "**",
    "زائد_يساوي": "+=",
    "ناقص_يساوي": "-=",
    "ضرب_يساوي": "*=",
    "قسمة_يساوي": "/=",
    "باقي_يساوي": "%=",
    "قوة_يساوي": "**=",
    "زيادة": "++",
    "نقص": "--",
    "و_بتي": "&",
    "او_بتي": "|",
    "او_حصري_بتي": "^",
    "ليس_بتي": "~",
    "ازاحة_يسار": "<<",
    "ازاحة_يمين": ">>",
    "ازاحة_يمين_غير_موقع": ">>>",
    "و_بتي_يساوي": "&=",
    "او_بتي_يساوي": "|=",
    "او_حصري_بتي_يساوي": "^=",
    "ازاحة_يسار_يساوي": "<<=",
    "ازاحة_يمين_يساوي": ">>=",
    "ازاحة_يمين_غير_موقع_يساوي": ">>>=",
    
    // Common values
    "صحيح": "true",
    "خطأ_قيمة": "false",
    "فارغ": "null",
    "غير_معرف": "undefined",
    "لا_نهاية": "Infinity",
    "لا_نهاية_سالبة": "-Infinity",
    "ليس_رقم": "NaN",
    
    // Control flow - comprehensive
    "تبديل": "switch",
    "حالة": "case",
    "افتراضي_حالة": "default",
    "مع": "with",
    "تسمية": "label",
    "استمرار_الى": "continue",
    "كسر_الى": "break",
    
    // Error handling - comprehensive
    "خطأ_عام": "Error",
    "خطأ_تجميع": "AggregateError",
    "خطأ_داخلي": "InternalError",
    "خطأ_نوع": "TypeError",
    "خطأ_مرجع": "ReferenceError",
    "خطأ_نطاق": "RangeError",
    "خطأ_تقييم": "EvalError",
    "خطأ_صيغة": "SyntaxError",
    "خطأ_يوري": "URIError",
    "خطأ_تأكيد": "AssertionError",
    
    // Modern JavaScript - comprehensive
    "تدمير": "destructuring",
    "انتشار": "...",
    "راحة": "rest",
    "قالب_نصي": "template literal",
    "مترابط_سلسلة": "tagged template",
    "سهم": "=>",
     "مولد_دالة": "function*",
     "استسلام": "yield",
     "استسلام_من": "yield*",
    "وحدة": "module",
    "ديناميكي_استيراد": "import()",
    "ميتا_استيراد": "import.meta",
    "تصدير_جميع": "export *",
    "تصدير_من": "export from",
    "فئة_تعبير": "class expression",
    "فئة_إعلان": "class declaration",
    "كائن_حرفي": "object literal",
    "مصفوفة_حرفية": "array literal",
    "تعبير_نمطي_حرفي": "regex literal",
    "حاسبة_خصائص": "computed properties",
    "طريقة_مختصرة": "method shorthand",
    "خاصية_مختصرة": "property shorthand",
    "معاملات_افتراضية": "default parameters",
    "معاملات_راحة": "rest parameters",
    "معاملات_انتشار": "spread parameters",
    "تدمير_كائن": "object destructuring",
    "تدمير_مصفوفة": "array destructuring",
    "عامل_تسلسل": "chaining operator",
    "عامل_تسلسل_اختياري": "optional chaining",
    "اسناد_فارغ": "nullish coalescing",
    "اسناد_منطقي": "logical assignment",
    "تخصيص_خاص": "private fields",
    "طريقة_خاصة": "private methods",
    "طريقة_ثابتة_خاصة": "private static methods",
    "حقل_ثابت_خاص": "private static fields",
    "حقول_عامة": "public fields",
    "طرق_ثابتة": "static methods",
    "مطابقة_انماط": "pattern matching",
    "رقم_كبير_حرفي": "bigint literal",
    "استكمال_عالي_الترتيب": "higher-order functions",
    "اغلاقات": "closures",
    "نطاق": "scope",
    "نطاق_المعجم": "lexical scope",
    "رفع": "hoisting",
    "منطقة_زمنية_ميتة": "temporal dead zone",
    "كومة": "heap",
    "مكدس_استدعاء": "call stack",
    "حلقة_الاحداث": "event loop",
    "مهام_صغيرة": "microtasks",
    "مهام_كبيرة": "macrotasks",
    "تشغيل_متوازي": "concurrency",
    "تشغيل_متوازي_حقيقي": "parallelism",
  };

  const pythonTranslations = {
    // Basic keywords
    "دالة": "def",
    "ارجع": "return",
    "اذا": "if",
    "والا": "else",
    "والا_اذا": "elif",
    "لكل": "for",
    "في": "in",
    "بينما": "while",
    "كسر": "break",
    "استمر": "continue",
    "مرر": "pass",
    "جرب": "try",
    "الا": "except",
    "اخيرا": "finally",
    "ارفع": "raise",
    "مع": "with",
    "كما": "as",
    "من": "from",
    "استيراد": "import",
    "فئة": "class",
    "ذاتي": "self",
    "عالمي": "global",
    "غير_محلي": "nonlocal",
    "لامدا": "lambda",
    "استسلم": "yield",
    "من_استسلم": "yield from",
    "تأكيد": "assert",
    "حذف": "del",
    "هو": "is",
    "ليس": "not",
    "ليس_هو": "is not",
    "في_لا": "not in",
    "و": "and",
    "او": "or",
    
    // Built-in functions
    "اطبع": "print",
    "دخل": "input",
    "طول": "len",
    "نوع": "type",
    "مجال": "range",
    "قائمة": "list",
    "صف": "tuple",
    "قاموس": "dict",
    "مجموعة": "set",
    "مجموعة_مجمدة": "frozenset",
    "سلسلة": "str",
    "رقم_صحيح": "int",
    "رقم_عشري": "float",
    "معقد": "complex",
    "منطقي": "bool",
    "بايتات": "bytes",
    "مصفوفة_بايت": "bytearray",
    "عرض_ذاكرة": "memoryview",
    "مجموع": "sum",
    "اكبر": "max",
    "اصغر": "min",
    "مرتب": "sorted",
    "عكسي": "reversed",
    "تعداد": "enumerate",
    "ملف_مفتوح": "open",
    "مضغوط": "zip",
    "خريطة": "map",
    "مرشح": "filter",
    "كل": "all",
    "اي": "any",
    "كل_متغيرات": "vars",
    "كل_اتجاهات": "dir",
    "قابل_للاستدعاء": "callable",
    "كود": "eval",
    "تنفيذ": "exec",
    "تجميع_كود": "compile",
    "تنسيق_نص": "format",
    "تمثيل": "repr",
    "اسكي_دالة": "ascii",
    "ترقيم": "ord",
    "رمز": "chr",
    "تقريب": "round",
    "مطلق": "abs",
    "قوة_دالة": "pow",
    "قسمة_ونتيجة": "divmod",
    "تكرار": "iter",
    "التالي": "next",
    "كائن": "object",
    "خاصية": "property",
    "فائق": "super",
    "ثابت": "staticmethod",
    "فئة_طريقة": "classmethod",
    "تجميع_هاش": "hash",
    "معرف": "id",
    "مساعدة": "help",
    
    // String methods
    "استبدال": "replace",
    "تقسيم": "split",
    "تقسيم_اسطر": "splitlines",
    "تجزئة": "partition",
    "تجزئة_يمين": "rpartition",
    "ربط": "join",
    "تشذيب": "strip",
    "تشذيب_يسار": "lstrip",
    "تشذيب_يمين": "rstrip",
    "كبير": "upper",
    "صغير": "lower",
    "تبديل_حالة": "swapcase",
    "عنوان": "title",
    "كبير_اول": "capitalize",
    "طي_حالة": "casefold",
    "يبدا_بـ": "startswith",
    "ينتهي_بـ": "endswith",
    "عثور": "find",
    "عثور_يمين": "rfind",
    "فهرس": "index",
    "فهرس_يمين": "rindex",
    "عد": "count",
    "تشفير": "encode",
    "فك_تشفير": "decode",
    "محاذاة_وسط": "center",
    "محاذاة_يسار": "ljust",
    "محاذاة_يمين": "rjust",
    "ملء_اصفار": "zfill",
    "قابل_للطباعة": "isprintable",
    "رقمي": "isdigit",
    "عشري": "isdecimal",
    "رقمي_شامل": "isnumeric",
    "ابجدي": "isalpha",
    "ابجدي_رقمي": "isalnum",
    "اسكي_نص": "isascii",
    "مسافة": "isspace",
    "عنوان_صحيح": "istitle",
    "كبير_صحيح": "isupper",
    "صغير_صحيح": "islower",
    "معرف_صحيح": "isidentifier",
    "تنسيق_سلسلة": "format",
    "خريطة_تنسيق": "format_map",
    "ترجمة": "translate",
    "جدول_ترجمة": "maketrans",
    
    // List methods
    "اضافة": "append",
    "امتداد": "extend",
    "ادراج": "insert",
    "ازالة": "remove",
    "اخراج": "pop",
    "فهرس_قائمة": "index",
    "عد_عناصر": "count",
    "ترتيب": "sort",
    "عكس": "reverse",
    "نسخة": "copy",
    "واضح": "clear",
    
    // Dictionary methods
    "مفاتيح": "keys",
    "قيم": "values",
    "عناصر": "items",
    "الحصول": "get",
    "اخراج_عنصر": "pop",
    "اخراج_عنصر_عشوائي": "popitem",
    "تحديث": "update",
    "نسخة_قاموس": "copy",
    "واضح_قاموس": "clear",
    "افتراضي": "setdefault",
    "من_مفاتيح": "fromkeys",
    
    // Set methods
    "اضافة_مجموعة": "add",
    "تحديث_مجموعة": "update",
    "ازالة_مجموعة": "remove",
    "تجاهل": "discard",
    "اخراج_مجموعة": "pop",
    "واضح_مجموعة": "clear",
    "نسخة_مجموعة": "copy",
    "اتحاد": "union",
    "تقاطع": "intersection",
    "فرق": "difference",
    "فرق_متماثل": "symmetric_difference",
    "جزء_من": "issubset",
    "يحتوي_على": "issuperset",
    "منفصل": "isdisjoint",
    "تحديث_اتحاد": "update",
    "تحديث_تقاطع": "intersection_update",
    "تحديث_فرق": "difference_update",
    "تحديث_فرق_متماثل": "symmetric_difference_update",
    
    // File operations
    "قراءة": "read",
    "قراءة_سطر": "readline",
    "قراءة_اسطر": "readlines",
    "كتابة": "write",
    "كتابة_اسطر": "writelines",
    "اغلاق": "close",
    "تدفق": "flush",
    "بحث": "seek",
    "اخبار": "tell",
    "قابل_للقراءة": "readable",
    "قابل_للكتابة": "writable",
    "قابل_للبحث": "seekable",
    "مغلق": "closed",
    "اسم": "name",
    "وضع": "mode",
    
    // Math operations (as symbols)
    "زائد": "+",
    "ناقص": "-",
    "ضرب": "*",
    "قسمة": "/",
    "قوة_رمز": "**",
    "قسمة_صحيحة": "//",
    "باقي": "%",
    "زائد_يساوي": "+=",
    "ناقص_يساوي": "-=",
    "ضرب_يساوي": "*=",
    "قسمة_يساوي": "/=",
    "قوة_يساوي": "**=",
    "قسمة_صحيحة_يساوي": "//=",
    "باقي_يساوي": "%=",
    
    // Comparison operators
    "يساوي": "==",
    "لا_يساوي": "!=",
    "اكبر_من": ">",
    "اصغر_من": "<",
    "اكبر_او_يساوي": ">=",
    "اصغر_او_يساوي": "<=",
    
    // Bitwise operations
    "و_بتي": "&",
    "او_بتي": "|",
    "او_حصري_بتي": "^",
    "ازاحة_يسار": "<<",
    "ازاحة_يمين": ">>",
    "نفي_بتي": "~",
    
    // Built-in constants
    "صحيح": "True",
    "خطأ": "False",
    "لا_شيء": "None",
    "حذف_نقاط": "...",
    "مفقود": "__debug__",
    
    // Exception types
    "استثناء": "Exception",
    "خطأ_قيمة": "ValueError",
    "خطأ_نوع": "TypeError",
    "خطأ_فهرس": "IndexError",
    "خطأ_مفتاح": "KeyError",
    "خطأ_اسم": "NameError",
    "خطأ_صيغة": "SyntaxError",
    "خطأ_مسافة_بادئة": "IndentationError",
    "خطأ_تبويب": "TabError",
    "خطأ_مرجع": "AttributeError",
    "خطأ_استيراد": "ImportError",
    "خطأ_وحدة_غير_موجودة": "ModuleNotFoundError",
    "خطأ_نظام": "SystemError",
    "خطأ_ذاكرة": "MemoryError",
    "خطأ_تجاوز": "OverflowError",
    "خطأ_قسمة_صفر": "ZeroDivisionError",
    "خطأ_تكرار": "RecursionError",
    "خطأ_انقطاع": "KeyboardInterrupt",
    "خطأ_نظام_خروج": "SystemExit",
    "خطأ_مولد_خروج": "GeneratorExit",
    "خطأ_توقف_تكرار": "StopIteration",
    "خطأ_عدم_تنفيذ": "NotImplementedError",
    "خطأ_وقت_تشغيل": "RuntimeError",
    "خطأ_تأكيد": "AssertionError",
    "خطأ_ملف_غير_موجود": "FileNotFoundError",
    "خطأ_صلاحية": "PermissionError",
    "خطأ_اتصال": "ConnectionError",
    "خطأ_مهلة": "TimeoutError",
    
    // Common modules (partial translation for context)
    "رياضيات": "math",
    "عشوائي": "random",
    "وقت": "time",
    "تاريخ": "datetime",
    "نظام": "os",
    "مسار": "sys",
    "تعبير_نمطي": "re",
    "جيسون": "json",
    "طلبات": "requests",
    "مجموعات": "collections",
    "تكرار_ادوات": "itertools",
    "ادوات_دالة": "functools",
    "اختبار_وحدة": "unittest",
    "مسلسل": "threading",
    "متعدد_عمليات": "multiprocessing",
    "غير_متزامن": "asyncio",
    
    // Additional comprehensive programming terms
    "فئة_اساسية": "BaseClass",
    "وراثة": "inheritance",
    "تغليف": "encapsulation",
    "تعدد_اشكال": "polymorphism",
    "تجريد": "abstraction",
    "واجهة": "interface",
    "بروتوكول_برمجة": "protocol",
    "مصنع": "factory",
    "نمط_تصميم": "design_pattern",
    "وحدة_نمطية": "module",
    "حزمة_برامج": "package",
    "مكتبة_برامج": "library",
    "اطار_عمل": "framework",
    "مترجم": "compiler",
    "مفسر": "interpreter",
    "متغير_بيئة": "environment_variable",
    "مسار_ملف": "file_path",
    "دليل": "directory",
    "مجلد": "folder",
    "جذر": "root",
    "فرع": "branch",
    "عقدة": "node",
    "شجرة": "tree",
    "رسم_بياني": "graph",
    "خوارزمية": "algorithm",
    "بنية_بيانات": "data_structure",
    "مكدس": "stack",
    "طابور": "queue",
    "قائمة_مرتبطة": "linked_list",
    "جدول_هاش": "hash_table",
    "شجرة_بحث": "search_tree",
    "ترتيب_فقاعي": "bubble_sort",
    "ترتيب_سريع": "quick_sort",
    "ترتيب_دمج": "merge_sort",
    "بحث_خطي": "linear_search",
    "بحث_ثنائي": "binary_search",
    "تعقيد_زمني": "time_complexity",
    "تعقيد_مكاني": "space_complexity",
    "تحسين": "optimization",
    "تنقيح": "debugging",
    "اختبار_برامج": "testing",
    "اختبار_وحدة_برامج": "unit_testing",
    "اختبار_تكامل": "integration_testing",
    "اختبار_نظام": "system_testing",
    "ادارة_اصدار": "version_control",
    "جيت": "git",
    "التزام": "commit",
    "دفع": "push",
    "سحب": "pull",
    "دمج": "merge",
    "تفريع": "branch",
    "مستودع": "repository",
    "استنساخ": "clone",
    "شوكة": "fork",
    "طلب_سحب": "pull_request",
    "اصدار": "release",
    "علامة": "tag",
    "نشر": "deployment",
    "تطوير": "development",
    "انتاج": "production",
    "اختبار_بيئة": "testing_environment",
    "تدريج": "staging",
    "تحديث_برامج": "update",
    "ترقية": "upgrade",
    "تصحيح": "patch",
    "تهجير": "migration",
    "نسخ_احتياطي": "backup",
    "استعادة": "restore",
    "قاعدة_بيانات": "database",
    "جدول_بيانات": "table",
    "صف_بيانات": "row",
    "عمود_بيانات": "column",
    "مؤشر_بيانات": "index", 
    "مفتاح_اساسي": "primary_key",
    "مفتاح_اجنبي": "foreign_key",
    "قيد": "constraint",
    "علاقة": "relationship",
    "تطبيع": "normalization",
    "استعلام": "query",
    "اختيار": "select",
    "ادراج_بيانات": "insert",
    "تحديث_جدول": "update",
    "حذف_جدول": "delete",
    "انضمام": "join",
    "تجميع": "group_by",
    "ترتيب_بـ": "order_by",
    "امتلاك": "having",
    "حيث": "where",
    "من_جدول": "from",
    "في_جدول": "into",
    "قيم_بيانات": "values",
    "مميز": "distinct",
    "عد_البيانات": "count",
    "مجموع_البيانات": "sum",
    "متوسط": "avg",
    "اكبر_قيمة": "max",
    "اصغر_قيمة": "min",
    "خادم": "server",
    "عميل": "client",
    "شبكة": "network",
    "بروتوكول_شبكة": "protocol",
    "اتش_تي_تي_بي": "HTTP",
    "اتش_تي_تي_بي_اس": "HTTPS",
    "ف_تي_بي": "FTP",
    "اس_اس_اتش": "SSH",
    "تي_سي_بي": "TCP",
    "يو_دي_بي": "UDP",
    "عنوان_اي_بي": "IP_address",
    "منفذ": "port",
    "طلب": "request",
    "استجابة": "response",
    "رأس": "header",
    "جسم": "body",
    "كوكيز": "cookies",
    "جلسة": "session",
    "رمز_مميز": "token",
    "مصادقة": "authentication",
    "تفويض": "authorization",
    "تشفير_بيانات": "encryption",
    "فك_تشفير_بيانات": "decryption",
    "هاش": "hash",
    "ملح": "salt"
  };

  // Error detection logic
  const detectErrors = useMemo(() => {
    if (!arabicCode.trim()) return [];
    
    const translations = language === "javascript" ? jsTranslations : pythonTranslations;
    const words = arabicCode.match(/[\u0600-\u06FF\w]+/g) || [];
    const errors = [];
    
    for (const word of words) {
      if (word.match(/[\u0600-\u06FF]/)) { // Arabic characters
        if (!translations[word]) {
          // Check if it's a basic syntax error
          const basicJSErrors = ["؛", "،", "\"", "'", "(", ")", "{", "}", "[", "]"];
          const basicPythonErrors = [":", "،", "\"", "'", "(", ")", "[", "]"];
          const basicErrors = language === "javascript" ? basicJSErrors : basicPythonErrors;
          
          if (basicErrors.some(err => word.includes(err))) {
            errors.push({
              word,
              type: "syntax",
              message: `خطأ في أساسيات لغة ${language === "javascript" ? "الجافاسكريبت" : "البايثون"}`
            });
          } else {
            errors.push({
              word,
              type: "translation",
              message: "كلمة غير موجودة في قاعدة بيانات الترجمة"
            });
          }
        }
      }
    }
    
    return errors;
  }, [arabicCode, language, jsTranslations, pythonTranslations]);

  const highlightErrors = (text: string) => {
    if (!detectErrors.length) return text;
    
    let highlightedText = text;
    detectErrors.forEach(error => {
      const regex = new RegExp(`\\b${error.word}\\b`, 'g');
      highlightedText = highlightedText.replace(
        regex, 
        `<span class="error-highlight cursor-pointer" data-word="${error.word}" data-error="${error.message}">${error.word}</span>`
      );
    });
    
    return highlightedText;
  };

  const handleWordClick = (word: string, errorMessage: string) => {
    setClickedWord(word);
    toast({
      title: "تفاصيل الخطأ",
      description: errorMessage,
      variant: "destructive",
    });
  };

  const translateCode = () => {
    if (!arabicCode.trim()) {
      toast({
        title: "تنبيه",
        description: "الرجاء كتابة الكود العربي أولاً",
        variant: "destructive",
      });
      return;
    }

    const translations = language === "javascript" ? jsTranslations : pythonTranslations;
    let translated = arabicCode;

    switch (translationMode) {
      case "full":
        // Replace all Arabic terms with English equivalents
        Object.entries(translations).forEach(([arabic, english]) => {
          const regex = new RegExp(`\\b${arabic}\\b`, 'g');
          translated = translated.replace(regex, english);
        });
        break;
        
      case "partial":
        // Translate core programming keywords and essential methods - expanded list
        const coreKeywords = language === "javascript" 
          ? [
              // Core language keywords
              "متغير", "ثابت", "دالة", "ارجع", "اذا", "والا", "وإلا_اذا", "لكل", "بينما", "كسر", "استمر",
              "جرب", "التقط", "اخيرا", "ارمي", "جديد", "هذا", "فئة", "يمتد", "تصدير", "استيراد", "من", "افتراضي",
              "انتظر", "غير_متزامن", "استسلام", "نوع_من", "مثيل_من", "في", "حذف", "صحيح", "خطأ_قيمة", "فارغ", "غير_معرف",
              // Essential built-ins and methods
              "اطبع", "خطأ", "تحذير", "معلومات", "تنبيه", "تأكيد", "مطالبة",
              "سلسلة", "رقم", "منطقي", "مصفوفة", "كائن", "تاريخ", "رياضيات", "جيسون",
              // Common array methods
              "ادفع", "اسحب", "انزع", "ادرج", "شريحة", "ربط", "اربط", "عكس", "رتب",
              "اعثر", "اعثر_على_فهرس", "رشح", "اربط_كل", "تقليل", "لكل_عنصر", "بعض", "كل", "يشمل",
              // Common string methods
              "الطول", "يحتوي", "يبدأ_بـ", "ينتهي_بـ", "استبدل", "تقسيم", "تشذيب", "كبير", "صغير",
              // Basic math methods
              "عشوائي", "دائري", "سقف", "ارضية", "مطلق", "اكبر", "اصغر", "قوة", "جذر_تربيعي",
              // Basic operators
              "يساوي", "لا_يساوي", "اكبر_من", "اصغر_من", "اكبر_او_يساوي", "اصغر_او_يساوي", "و", "او", "ليس",
              // Control flow
              "تبديل", "حالة", "افتراضي_حالة"
            ]
          : [
              // Core Python keywords
              "دالة", "ارجع", "اذا", "والا", "والا_اذا", "لكل", "في", "بينما", "كسر", "استمر", "مرر",
              "جرب", "الا", "اخيرا", "ارفع", "مع", "كما", "من", "استيراد", "فئة", "ذاتي", "عالمي", "غير_محلي",
              "لامدا", "استسلم", "من_استسلم", "تأكيد", "حذف", "هو", "ليس", "في_لا", "و", "او", "صحيح", "خطأ", "لا_شيء",
              // Essential built-ins
              "اطبع", "دخل", "طول", "نوع", "مجال", "قائمة", "صف", "قاموس", "مجموعة", "سلسلة", "رقم_صحيح", "رقم_عشري", "منطقي",
              "مجموع", "اكبر", "اصغر", "مرتب", "عكسي", "تعداد", "ملف_مفتوح", "مضغوط", "خريطة", "مرشح", "كل", "اي",
              // Common list methods
              "اضافة", "امتداد", "ادراج", "ازالة", "اخراج", "فهرس_قائمة", "عد_عناصر", "ترتيب", "عكس", "نسخة", "واضح",
              // Common string methods
              "استبدال", "تقسيم", "ربط", "تشذيب", "كبير", "صغير", "يبدا_بـ", "ينتهي_بـ", "عثور", "عد",
              // Common dict methods
              "مفاتيح", "قيم", "عناصر", "الحصول", "اخراج_عنصر", "تحديث", "واضح_قاموس",
              // Comparison operators
              "يساوي", "لا_يساوي", "اكبر_من", "اصغر_من", "اكبر_او_يساوي", "اصغر_او_يساوي",
              // Math operations
              "زائد", "ناقص", "ضرب", "قسمة", "قوة_رمز", "قسمة_صحيحة", "باقي"
            ];
        
        coreKeywords.forEach(keyword => {
          if (translations[keyword]) {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            translated = translated.replace(regex, translations[keyword]);
          }
        });
        break;
        
      case "mixed":
        // Translate keywords and keep comments in Arabic
        Object.entries(translations).forEach(([arabic, english]) => {
          // Skip translation if it's inside a comment
          const lines = translated.split('\n');
          translated = lines.map(line => {
            const commentIndex = line.indexOf('//');
            if (commentIndex !== -1) {
              const beforeComment = line.substring(0, commentIndex);
              const afterComment = line.substring(commentIndex);
              const regex = new RegExp(`\\b${arabic}\\b`, 'g');
              return beforeComment.replace(regex, english) + afterComment;
            } else {
              const regex = new RegExp(`\\b${arabic}\\b`, 'g');
              return line.replace(regex, english);
            }
          }).join('\n');
        });
        break;
    }

    setTranslatedCode(translated);
    
    toast({
      title: "تم!",
      description: `تم ترجمة الكود بنظام ${
        translationMode === "full" ? "الترجمة الكلية" : 
        translationMode === "partial" ? "الترجمة الجزئية" : 
        "الترجمة المختلطة"
      }`,
    });
  };

  const copyCode = async () => {
    if (translatedCode) {
      await navigator.clipboard.writeText(translatedCode);
      toast({
        title: "تم النسخ",
        description: "تم نسخ الكود إلى الحافظة",
      });
    }
  };

  const clearCode = () => {
    setArabicCode("");
    setTranslatedCode("");
    toast({
      title: "تم المسح",
      description: "تم مسح المحرر",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold">محرر الأكواد العربي</h3>
          </div>
          <Badge variant="secondary" className="font-semibold">
            {language === "javascript" ? "جافاسكريبت" : "بايثون"}
          </Badge>
        </div>
      </div>

      {/* Translation Mode Info */}
      <div className="bg-card/50 p-4 rounded-lg border border-border">
        <div className="text-sm text-muted-foreground">
          <strong>نظام الترجمة الحالي:</strong> {
            translationMode === "full" ? "الترجمة الكلية - ترجمة جميع المصطلحات العربية" :
            translationMode === "partial" ? "الترجمة الجزئية - ترجمة الكلمات الأساسية فقط" :
            "الترجمة المختلطة - ترجمة الكود مع الحفاظ على التعليقات بالعربية"
          }
        </div>
      </div>

      <div className="space-y-6">
        {/* Arabic Code Editor */}
        <Card className="p-6 gradient-card">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-primary">
              اكتب الكود بالعربية
            </h4>
            <div className="flex gap-2">
              <Button onClick={clearCode} variant="outline" size="sm" className="gap-2">
                <Trash2 className="h-4 w-4" />
                مسح
              </Button>
              {detectErrors.length > 0 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="destructive" className="gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        {detectErrors.length} خطأ
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>اضغط على الكلمات المحددة بالأحمر لمعرفة سبب الخطأ</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
          
          <div className="relative">
            <Textarea
              value={arabicCode}
              onChange={(e) => setArabicCode(e.target.value)}
              placeholder={language === "javascript" ? 
                `// اكتب الكود بالعربية هنا
// مثال:
دالة مرحبا() {
  اطبع("أهلا وسهلا")
}

اذا (صحيح) {
  مرحبا()
}

متغير اسم = "أحمد"
متغير عمر = 25

اذا (عمر اكبر_او_يساوي 18) {
  اطبع("بالغ")
} والا {
  اطبع("قاصر")
}` :
                `# اكتب الكود بالعربية هنا
# مثال:
دالة مرحبا():
    اطبع("أهلا وسهلا")

اذا صحيح:
    مرحبا()

اسم = "فاطمة" 
عمر = 22

اذا عمر >= 18:
    اطبع("بالغة")
والا:
    اطبع("قاصرة")`
              }
              className="min-h-[400px] code-editor resize-y font-mono text-sm arabic-text"
              dir="rtl"
            />
            {/* Error highlighting overlay */}
            {detectErrors.length > 0 && (
              <div 
                className="absolute inset-0 pointer-events-none min-h-[400px] p-3 overflow-auto font-mono text-sm"
                style={{ 
                  color: 'transparent',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
                dir="rtl"
                dangerouslySetInnerHTML={{ 
                  __html: highlightErrors(arabicCode || '') 
                }}
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.classList.contains('error-highlight')) {
                    const word = target.dataset.word;
                    const error = target.dataset.error;
                    if (word && error) {
                      handleWordClick(word, error);
                    }
                  }
                }}
              />
            )}
          </div>
        </Card>

        {/* Translation Systems Bar */}
        <div className="flex justify-center items-center gap-4 py-4 px-6 bg-card/30 rounded-lg border border-border/50">
          <Button
            variant={translationMode === "full" ? "default" : "outline"}
            onClick={() => {
              setTranslationMode("full");
              if (arabicCode.trim()) translateCode();
            }}
            className="h-10 px-6"
          >
            الترجمة الكلية
          </Button>
          
          <Button
            variant={translationMode === "partial" ? "default" : "outline"}
            onClick={() => {
              setTranslationMode("partial");
              if (arabicCode.trim()) translateCode();
            }}
            className="h-10 px-6"
          >
            الترجمة الجزئية
          </Button>
          
          <Button
            variant={translationMode === "mixed" ? "default" : "outline"}
            onClick={() => {
              setTranslationMode("mixed");
              if (arabicCode.trim()) translateCode();
            }}
            className="h-10 px-6"
          >
            الترجمة المختلطة
          </Button>
        </div>

        {/* Translated Code Display */}
        <Card className="p-6 gradient-card">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-primary">
              الكود المترجم
            </h4>
            <Button 
              onClick={copyCode} 
              variant="outline" 
              size="sm" 
              className="gap-2"
              disabled={!translatedCode}
            >
              <Copy className="h-4 w-4" />
              نسخ
            </Button>
          </div>
          
          <div className="code-output h-[400px] p-4 overflow-auto bg-muted/20 rounded-md border">
            <pre className="text-sm whitespace-pre-wrap">
              <code className="text-foreground">
                {translatedCode || `// سيظهر الكود المترجم هنا بعد الضغط على 'ترجم'
// استخدم أنظمة الترجمة المختلفة حسب احتياجك:
// - الترجمة الكلية: لترجمة جميع المصطلحات
// - الترجمة الجزئية: للحفاظ على أسماء المتغيرات العربية
// - الترجمة المختلطة: للحفاظ على التعليقات العربية`}
              </code>
            </pre>
          </div>
        </Card>
      </div>

      {/* Support Dialog */}
      <Dialog open={showSupportDialog} onOpenChange={setShowSupportDialog}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-primary">
              ميزة قيد التطوير 🚀
            </DialogTitle>
            <DialogDescription className="space-y-4 text-sm">
              <div className="text-muted-foreground">
                هذه الميزة ستنزل في التحديث القادم
              </div>
              
              <div className="bg-muted/20 p-4 rounded-lg">
                <p className="text-foreground mb-3">
                  حالياً المطور واحد يطور، والتطوير يستاهل أموال لدعمه!
                </p>
                
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Button 
                    onClick={() => window.open('https://www.facebook.com/groups/2275552176209029/', '_blank')} 
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
                    variant="default"
                  >
                    <Facebook className="h-5 w-5" />
                    منتدى ZAS-برمجة
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  انضم لمنتدانا على الفيسبوك للنقاش والمساعدة في البرمجة
                </p>
                
                <p className="text-sm text-muted-foreground mb-4">
                  يمكنك أيضاً الدخول على موقعنا لدعمنا - يحتوي على بعض الإعلانات
                </p>
                
                <Button 
                  onClick={() => window.open('https://zas-code-journey.vercel.app', '_blank')} 
                  className="w-full gap-2"
                  variant="outline"
                >
                  اضغط هنا للدعم ✨
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CodeEditor;
