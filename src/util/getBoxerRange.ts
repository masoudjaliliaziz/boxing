// import { ageRanges } from "../Types/types";

// function getAgeRange(birth: string): string | undefined {
//   const ageRanges: ageRanges[] = [
//     { start: "1985-01-01", end: "2003-01-01", label: "بزرگسالان" }, // معادل ۱۳۶۳/۱۰/۱۱ تا ۱۳۸۵/۱۰/۱۰
//     { start: "2003-01-01", end: "2005-01-01", label: "امید" }, // معادل ۱۳۸۱/۱۰/۱۱ تا ۱۳۸۵/۱۰/۱۰
//     { start: "2005-01-01", end: "2007-01-02", label: "جوانان" }, // معادل ۱۳۸۳/۱۰/۱۱ تا ۱۳۸۵/۱۰/۱۱
//     { start: "2009-01-01", end: "2011-12-31", label: "نوجوانان" }, // معادل ۱۳۸۷/۱۰/۱۲ تا ۱۳۸۹/۱۰/۱۰
//     { start: "2011-01-01", end: "2013-12-31", label: "نونهالان" }, // معادل ۱۳۸۹/۱۰/۱۱ تا ۱۳۹۱/۱۰/۱۰
//   ];
//   if (!birth) return "undefined";
//   const birthday = new Date(birth);
//   for (const range of ageRanges) {
//     const start = new Date(range.start);
//     const end = new Date(range.end);
//     if (birthday >= start && birthday <= end) {
//       return range.label;
//     }
//   }
//   return "خارج از بازه های مشخص شده";
// }
// export { getAgeRange };

// import { ageRanges } from "../Types/types";

// function getAgeRange(birth: string): string | undefined {
//   const ageRanges: ageRanges[] = [
//     {
//       start: "1985-01-01T00:00:00.000Z",
//       end: "2003-01-01T00:00:00.000Z",
//       label: "بزرگسالان",
//     }, // معادل ۱۳۶۳/۱۰/۱۱ تا ۱۳۸۵/۱۰/۱۰
//     {
//       start: "2003-01-01T00:00:00.000Z",
//       end: "2005-01-01T00:00:00.000Z",
//       label: "امید",
//     }, // معادل ۱۳۸۱/۱۰/۱۱ تا ۱۳۸۵/۱۰/۱۰
//     {
//       start: "2005-01-01T00:00:00.000Z",
//       end: "2007-01-02T00:00:00.000Z",
//       label: "جوانان",
//     }, // معادل ۱۳۸۳/۱۰/۱۱ تا ۱۳۸۵/۱۰/۱۱
//     {
//       start: "2009-01-01T00:00:00.000Z",
//       end: "2011-12-31T00:00:00.000Z",
//       label: "نوجوانان",
//     }, // معادل ۱۳۸۷/۱۰/۱۲ تا ۱۳۸۹/۱۰/۱۰
//     {
//       start: "2011-01-01T00:00:00.000Z",
//       end: "2013-12-31T00:00:00.000Z",
//       label: "نونهالان",
//     }, // معادل ۱۳۸۹/۱۰/۱۱ تا ۱۳۹۱/۱۰/۱۰
//   ];

//   if (!birth) return "undefined"; // اگر تاریخ تولد وجود نداشت، undefined را باز می‌گرداند

//   // ورودی birth قبلاً به فرمت ISO است و نیازی به تبدیل ندارد
//   const birthday = new Date(birth).toISOString(); // اطمینان حاصل کردن از اینکه تاریخ ورودی به فرمت ISO باشد

//   for (const range of ageRanges) {
//     const start = range.start; // تاریخ شروع بازه به فرمت ISO
//     const end = range.end; // تاریخ پایان بازه به فرمت ISO

//     if (birthday >= start && birthday <= end) {
//       return range.label; // بازگرداندن برچسب اگر تاریخ تولد در بازه باشد
//     }
//   }

//   return "خارج از بازه های مشخص شده"; // اگر هیچ بازه‌ای تطابق نداشت، پیغام داده می‌شود
// }

// export { getAgeRange };

// import { ageRanges } from "../Types/types";

// function getAgeRange(birth: string): string | undefined {
//   const ageRanges: ageRanges[] = [
//     {
//       start: "1985-01-01T00:00:00.000Z",
//       end: "2003-01-01T00:00:00.000Z",
//       label: "بزرگسالان",
//     },
//     {
//       start: "2003-01-01T00:00:00.000Z",
//       end: "2005-01-01T00:00:00.000Z",
//       label: "امید",
//     },
//     {
//       start: "2005-01-01T00:00:00.000Z",
//       end: "2007-01-02T00:00:00.000Z",
//       label: "جوانان",
//     },
//     {
//       start: "2009-01-01T00:00:00.000Z",
//       end: "2011-12-31T00:00:00.000Z",
//       label: "نوجوانان",
//     },
//     {
//       start: "2011-01-01T00:00:00.000Z",
//       end: "2013-12-31T00:00:00.000Z",
//       label: "نونهالان",
//     },
//   ];

//   if (!birth) return "undefined"; // اگر تاریخ تولد وجود نداشت، undefined را باز می‌گرداند

//   const birthday = new Date(birth); // تاریخ تولد به عنوان یک شیء Date

//   for (const range of ageRanges) {
//     const start = new Date(range.start); // تاریخ شروع بازه به عنوان شیء Date
//     const end = new Date(range.end); // تاریخ پایان بازه به عنوان شیء Date

//     // مقایسه تاریخ‌ها با استفاده از شیء Date
//     if (birthday >= start && birthday <= end) {
//       return range.label; // بازگرداندن برچسب اگر تاریخ تولد در بازه باشد
//     }
//   }

//   return "خارج از بازه های مشخص شده"; // اگر هیچ بازه‌ای تطابق نداشت، پیغام داده می‌شود
// }

// export { getAgeRange };

// import { ageRanges } from "../Types/types";

// function getAgeRange(birth: string): string | undefined {
//   const ageRanges: ageRanges[] = [
//     {
//       start: "1985-01-01T00:00:00.000Z",
//       end: "2003-01-01T00:00:00.000Z",
//       label: "بزرگسالان",
//     },
//     {
//       start: "2003-01-01T00:00:00.000Z",
//       end: "2005-01-01T00:00:00.000Z",
//       label: "امید",
//     },
//     {
//       start: "2005-01-01T00:00:00.000Z",
//       end: "2007-01-02T00:00:00.000Z",
//       label: "جوانان",
//     },
//     {
//       start: "2009-01-01T00:00:00.000Z",
//       end: "2011-12-31T00:00:00.000Z",
//       label: "نوجوانان",
//     },
//     {
//       start: "2011-01-01T00:00:00.000Z",
//       end: "2013-12-31T00:00:00.000Z",
//       label: "نونهالان",
//     },
//   ];

//   if (!birth) return "undefined"; // اگر تاریخ تولد وجود نداشت، undefined را باز می‌گرداند

//   const birthday = new Date(birth); // تاریخ تولد به عنوان یک شیء Date

//   // برای مقایسه فقط تاریخ بدون زمان
//   const birthdayDateOnly = new Date(
//     birthday.getFullYear(),
//     birthday.getMonth(),
//     birthday.getDate()
//   );

//   for (const range of ageRanges) {
//     const start = new Date(range.start); // تاریخ شروع بازه به عنوان شیء Date
//     const end = new Date(range.end); // تاریخ پایان بازه به عنوان شیء Date

//     // برای مقایسه فقط تاریخ بدون زمان
//     const startDateOnly = new Date(
//       start.getFullYear(),
//       start.getMonth(),
//       start.getDate()
//     );
//     const endDateOnly = new Date(
//       end.getFullYear(),
//       end.getMonth(),
//       end.getDate()
//     );

//     // مقایسه تاریخ‌ها با استفاده از تاریخ بدون زمان
//     if (birthdayDateOnly >= startDateOnly && birthdayDateOnly <= endDateOnly) {
//       return range.label; // بازگرداندن برچسب اگر تاریخ تولد در بازه باشد
//     }
//   }

//   return "خارج از بازه های مشخص شده"; // اگر هیچ بازه‌ای تطابق نداشت، پیغام داده می‌شود
// }

// export { getAgeRange };

import { ageRanges } from "../Types/types";

function getAgeRange(birth: string): string | undefined {
  const ageRanges: ageRanges[] = [
    {
      start: "1985-01-01T00:00:00.000Z",
      end: "2003-01-01T00:00:00.000Z",
      label: "بزرگسالان",
    },
    {
      start: "2003-01-01T00:00:00.000Z",
      end: "2005-01-01T00:00:00.000Z",
      label: "امید",
    },
    {
      start: "2005-01-01T00:00:00.000Z",
      end: "2007-01-02T00:00:00.000Z",
      label: "جوانان",
    },
    {
      start: "2009-01-01T00:00:00.000Z",
      end: "2011-12-31T00:00:00.000Z",
      label: "نوجوانان",
    },
    {
      start: "2011-01-01T00:00:00.000Z",
      end: "2013-12-31T00:00:00.000Z",
      label: "نونهالان",
    },
  ];

  if (!birth) return "undefined"; // اگر تاریخ تولد وجود نداشت، undefined را باز می‌گرداند

  // تبدیل تاریخ ورودی به شیء Date و حذف زمان
  const birthday = new Date(birth);
  const birthdayDateOnly = new Date(
    birthday.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  for (const range of ageRanges) {
    const start = new Date(range.start); // تاریخ شروع بازه به عنوان شیء Date
    const end = new Date(range.end); // تاریخ پایان بازه به عنوان شیء Date

    // حذف زمان از تاریخ‌های رنج
    const startDateOnly = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    );
    const endDateOnly = new Date(
      end.getFullYear(),
      end.getMonth(),
      end.getDate()
    );

    // مقایسه تاریخ‌ها بدون زمان
    if (birthdayDateOnly >= startDateOnly && birthdayDateOnly <= endDateOnly) {
      return range.label; // بازگرداندن برچسب اگر تاریخ تولد در بازه باشد
    }
  }

  return "خارج از بازه های مشخص شده"; // اگر هیچ بازه‌ای تطابق نداشت، پیغام داده می‌شود
}

export { getAgeRange };
