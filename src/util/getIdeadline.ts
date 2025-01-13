function getIdeadline(date) {
  const time = new Date(date);
  // افزودن 12 ماه به تاریخ ورودی
  time.setMonth(time.getMonth() + 12);

  const now = new Date();
  // تبدیل تاریخ‌ها به زمان بر حسب میلی‌ثانیه و مقایسه
  return now.getTime() > time.getTime();
}

export { getIdeadline };
