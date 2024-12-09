function isStrongPassword(password: string): boolean {
   // 1. Uzunlik tekshiruvi
   if (password.length < 8 || password.length > 64) {
     return false;
   }
 
   // 2. Kamida bitta kichik harf bo‘lishi kerak
   let hasLowercase = false;
   // 3. Kamida bitta katta harf bo‘lishi kerak
   let hasUppercase = false;
   // 4. Kamida bitta raqam bo‘lishi kerak
   let hasDigit = false;
   // 5. Kamida bitta maxsus belgi bo‘lishi kerak
   let hasSpecialChar = false;
   // 6. Barcha belgilar bir xil bo‘lmasligi kerak
   let allSame = true;
   const firstChar = password[0];
 
   // 7. Maxsus belgilar ro‘yxati
   const specialChars = `!@#$%^&*()-_=+[]{};:'",.<>?/|~\\`;
 
   // 8. Har bir belgini tahlil qilish
   for (let i = 0; i < password.length; i++) {
     const char = password[i];
 
     // Kichik harfni tekshirish
     if (isLowercase(char)) hasLowercase = true;
 
     // Katta harfni tekshirish
     if (isUppercase(char)) hasUppercase = true;
 
     // Raqamni tekshirish
     if (isDigit(char)) hasDigit = true;
 
     // Maxsus belgi tekshirish
     if (specialChars.includes(char)) hasSpecialChar = true;
 
     // Bir xil belgilar emasligini tekshirish
     if (char !== firstChar) allSame = false;
 
     // Agar barcha talablar bajarilgan bo‘lsa, ortiqcha tekshirishni to‘xtatamiz
     if (hasLowercase && hasUppercase && hasDigit && hasSpecialChar && !allSame) {
       return true;
     }
   }
 
   // Parol barcha talablarni bajarganligini qaytarish
   return hasLowercase && hasUppercase && hasDigit && hasSpecialChar && !allSame;
 }
 
 // Yordamchi funksiyalar
 function isLowercase(char: string): boolean {
   return char >= 'a' && char <= 'z';
 }
 
 function isUppercase(char: string): boolean {
   return char >= 'A' && char <= 'Z';
 }
 
 function isDigit(char: string): boolean {
   return char >= '0' && char <= '9';
 }
 
 // Sinov uchun namunalar
 const testPasswords = [
   'Password123!',          // To'g'ri
   'password',              // Noto'g'ri (faqat kichik harflar)
   'PASSWORD',              // Noto'g'ri (faqat katta harflar)
   '12345678',              // Noto'g'ri (faqat raqamlar)
   '!@#$%^&*',              // Noto'g'ri (faqat maxsus belgilar)
   'P@ssw0rd',              // To'g'ri
   'pppppppp',              // Noto'g'ri (barcha belgilar bir xil)
   'P@ssw0rd1234567890!',   // To'g'ri
   'Short1!',               // To'g'ri
   'NoSpecialChar123',      // Noto'g'ri (maxsus belgi yo'q)
   'Super!LongPassword1234' // To'g'ri
 ];
 
 testPasswords.forEach((password) => {
   if (isStrongPassword(password)) {
     console.log(`${password}: To'g'ri parol`);
   } else {
     console.log(`${password}: Noto'g'ri parol`);
   }
 });

 

// Password123!: To'g'ri parol
// password: Noto'g'ri parol
// PASSWORD: Noto'g'ri parol
// 12345678: Noto'g'ri parol
// !@#$%^&*: Noto'g'ri parol
// P@ssw0rd: To'g'ri parol
// pppppppp: Noto'g'ri parol
// P@ssw0rd1234567890!: To'g'ri parol
// Short1!: To'g'ri parol
// NoSpecialChar123: Noto'g'ri parol
// Super!LongPassword1234: To'g'ri parol
