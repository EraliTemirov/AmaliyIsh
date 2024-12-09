function isValidUzbekPhoneNumber(phone: string): boolean {
   // Raqamdan barcha bo'sh joylar va maxsus belgilarni olib tashlaymiz
   const cleaned = phone.replace(/[\s\-\(\)]/g, '');
 
   // +998 bilan boshlanishi yoki 998 bilan boshlanishi kerak
   const regex = /^(?:\+998|998)\d{9}$/;
 
   return regex.test(cleaned);
 }
 
 // Sinov uchun namunalar
 const testNumbers = [
   '+998901234567',
   '998901234567',
   '+998 (90) 123-45-67',
   '90 123 45 67',
   '1234567890',      // noto'g'ri
   '+123901234567',   // noto'g'ri
   '99890123'         // noto'g'ri
 ];
 
 testNumbers.forEach((num) => {
   if (isValidUzbekPhoneNumber(num)) {
     console.log(`${num}: To'g'ri telefon raqami`);
   } else {
     console.log(`${num}: Noto'g'ri telefon raqami`);
   }
 });

 
// +998901234567: To'g'ri telefon raqami
// 998901234567: To'g'ri telefon raqami
// +998 (90) 123-45-67: To'g'ri telefon raqami
// 90 123 45 67: Noto'g'ri telefon raqami
// 1234567890: Noto'g'ri telefon raqami
// +123901234567: Noto'g'ri telefon raqami
// 99890123: Noto'g'ri telefon raqami
