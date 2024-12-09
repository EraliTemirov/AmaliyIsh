function isValidUsername(username: string): boolean {
   // 1. Uzunlikni tekshirish (3 dan 20 belgigacha)
   if (username.length < 3 || username.length > 20) {
     return false;
   }
 
   // 2. Harf bilan boshlanishi kerak
   if (!isLetter(username[0])) {
     return false;
   }
 
   // 3. Harf yoki raqam bilan tugashi kerak
   if (!isLetterOrDigit(username[username.length - 1])) {
     return false;
   }
 
   // 4. Har bir belgini tekshirish va ketma-ket `_` yoki `-` belgilarini oldini olish
   for (let i = 0; i < username.length; i++) {
     const char = username[i];
 
     // Ruxsat etilgan belgilarni tekshirish
     if (!isLetterOrDigit(char) && char !== '_' && char !== '-') {
       return false;
     }
 
     // Ketma-ket `_` yoki `-` belgilarining kelmasligini tekshirish
     if (
       (char === '_' || char === '-') &&
       (username[i + 1] === '_' || username[i + 1] === '-')
     ) {
       return false;
     }
   }
 
   return true;
 }
 
 // Yordamchi funksiyalar
 function isLetter(char: string): boolean {
   return /^[a-zA-Z]$/.test(char);
 }
 
 function isLetterOrDigit(char: string): boolean {
   return /^[a-zA-Z0-9]$/.test(char);
 }
 
 // Sinov uchun namunalar
 const testUsernames = [
   'user123',         // To'g'ri
   'User_Name',       // To'g'ri
   'user-name',       // To'g'ri
   '1username',       // Noto'g'ri (raqam bilan boshlanadi)
   'user__name',      // Noto'g'ri (ikki `_` ketma-ket)
   'user--name',      // Noto'g'ri (ikki `-` ketma-ket)
   'us',              // Noto'g'ri (juda qisqa)
   'thisusernameistoolong123', // Noto'g'ri (juda uzun)
   'user$',           // Noto'g'ri (ruxsat etilmagan belgi `$`)
   '_username',       // Noto'g'ri ( `_` bilan boshlanadi)
   'username-',       // Noto'g'ri ( `-` bilan tugaydi)
 ];
 
 testUsernames.forEach((username) => {
   if (isValidUsername(username)) {
     console.log(`${username}: To'g'ri username`);
   } else {
     console.log(`${username}: Noto'g'ri username`);
   }
 });
 


// user123: To'g'ri username
// User_Name: To'g'ri username
// user-name: To'g'ri username
// 1username: Noto'g'ri username
// user__name: Noto'g'ri username
// user--name: Noto'g'ri username
// us: Noto'g'ri username
// thisusernameistoolong123: Noto'g'ri username
// user$: Noto'g'ri username
// _username: Noto'g'ri username
// username-: Noto'g'ri username
