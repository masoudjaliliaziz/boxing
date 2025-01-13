function getSdeadline(date) {
  const time = new Date(date);
  // افزودن 1 ماه به تاریخ ورودی
  time.setMonth(time.getMonth() + 1);

  const now = new Date();

  // اگر تاریخ فعلی از تاریخ انقضا عبور کرده باشد
  if (now.getTime() > time.getTime()) {
    return {
      expired: true, // نشان‌دهنده اینکه شهریه منقضی شده است
      daysRemaining: 0, // روزهای باقی‌مانده صفر است
    };
  }

  // محاسبه تعداد روزهای باقی‌مانده
  const daysRemaining = Math.ceil(
    (time.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    expired: false, // شهریه هنوز معتبر است
    daysRemaining, // تعداد روزهای باقی‌مانده
  };
}

export { getSdeadline };
