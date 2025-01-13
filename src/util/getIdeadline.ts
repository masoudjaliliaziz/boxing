function getIdeadline(date) {
  const time = new Date(date);
  // افزودن 12 ماه به تاریخ ورودی
  time.setMonth(time.getMonth() + 12);

  const now = new Date();

  // اگر تاریخ فعلی از تاریخ انقضا عبور کرده باشد
  if (now.getTime() > time.getTime()) {
    return {
      expired: true, // نشان‌دهنده اینکه بیمه منقضی شده است
      daysRemaining: 0, // روزهای باقی‌مانده صفر است
    };
  }

  // محاسبه تعداد روزهای باقی‌مانده
  const daysRemaining = Math.ceil(
    (time.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    expired: false, // بیمه هنوز معتبر است
    daysRemaining, // تعداد روزهای باقی‌مانده
  };
}

export { getIdeadline };
