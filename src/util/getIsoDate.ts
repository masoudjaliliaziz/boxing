function getIsoDate(day: number): string {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() + day); // 10 روز قبل
  const formattedDate = tenDaysAgo.toISOString(); // تبدیل به فرمت ISO
  return formattedDate;
}

export { getIsoDate };
