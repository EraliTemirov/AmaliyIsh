function isValidEmail(email: string): boolean {
   // E-mailni `@` belgisi bo'yicha ikkiga bo'lamiz
   const parts = email.split('@');
   
   // `@` belgisi faqat bitta bo'lishi kerak
   if (parts.length !== 2) return false;
 
   const [localPart, domainPart] = parts;
 
   // `localPart` bo'sh bo'lmasligi kerak
   if (!localPart) return false;
 
   // `domainPart` bo'sh bo'lmasligi kerak
   if (!domainPart) return false;
 
   // `domainPart`ni oxirgi nuqta (`.`) bo'yicha ikkiga bo'lamiz
   const domainParts = domainPart.split('.');
   if (domainParts.length < 2) return false;
 
   const tld = domainParts.pop(); // Oxirgi qism TLD bo'ladi
   const domain = domainParts.join('.');
 
   // `tld` kamida 2 ta belgidan iborat bo'lishi va faqat harflardan iborat bo'lishi kerak
   if (!tld || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) return false;
 
   // `localPart`ni tekshirish
   if (!isValidLocalPart(localPart)) return false;
 
   // `domain`ni tekshirish
   if (!isValidDomain(domain)) return false;
 
   return true;
 }
 
 function isValidLocalPart(local: string): boolean {
   // Local qismda faqat harflar, raqamlar, `.` , `-`, `_` belgilar bo'lishi mumkin
   for (let i = 0; i < local.length; i++) {
     const char = local[i];
     if (!isAlphaNumeric(char) && char !== '.' && char !== '-' && char !== '_') {
       return false;
     }
   }
 
   // Boshlanishida yoki tugashida nuqta bo'lmasligi kerak
   if (local.startsWith('.') || local.endsWith('.')) return false;
 
   // Ketma-ket ikkita nuqta bo'lmasligi kerak
   if (local.includes('..')) return false;
 
   return true;
 }
 
 function isValidDomain(domain: string): boolean {
   // Domain qismida faqat harflar, raqamlar va tire bo'lishi mumkin
   for (let i = 0; i < domain.length; i++) {
     const char = domain[i];
     if (!isAlphaNumeric(char) && char !== '-') {
       return false;
     }
   }
 
   // Boshlanishida yoki tugashida tire bo'lmasligi kerak
   if (domain.startsWith('-') || domain.endsWith('-')) return false;
 
   return true;
 }
 
 function isAlphaNumeric(char: string): boolean {
   return /^[a-zA-Z0-9]$/.test(char);
 }
 
 // Sinov uchun namunalar
 const testEmails = [
   'user@example.com',           // To'g'ri
   'user.name@domain.co',        // To'g'ri
   'user_name@sub.domain.com',   // To'g'ri
   'user-name123@domain.io',     // To'g'ri
   'username@domain',            // Noto'g'ri (TLD yo'q)
   'user@.com',                  // Noto'g'ri (domain noto'g'ri)
   'user@domain..com',           // Noto'g'ri (ikkita nuqta ketma-ket)
   '@domain.com',                // Noto'g'ri (local qism yo'q)
   'user@domain.c',              // Noto'g'ri (TLD juda qisqa)
   'user@domain.toolongtld',     // To'g'ri
   'user..name@domain.com',      // Noto'g'ri (local qismida ikki nuqta ketma-ket)
   'user@domain-with-dash.com',  // To'g'ri
 ];
 
 testEmails.forEach((email) => {
   if (isValidEmail(email)) {
     console.log(`${email}: To'g'ri e-mail manzili`);
   } else {
     console.log(`${email}: Noto'g'ri e-mail manzili`);
   }
 });

 
// user@example.com: To'g'ri e-mail manzili
// user.name@domain.co: To'g'ri e-mail manzili
// user_name@sub.domain.com: To'g'ri e-mail manzili
// user-name123@domain.io: To'g'ri e-mail manzili
// username@domain: Noto'g'ri e-mail manzili
// user@.com: Noto'g'ri e-mail manzili
// user@domain..com: Noto'g'ri e-mail manzili
// @domain.com: Noto'g'ri e-mail manzili
// user@domain.c: Noto'g'ri e-mail manzili
// user@domain.toolongtld: To'g'ri e-mail manzili
// user..name@domain.com: Noto'g'ri e-mail manzili
// user@domain-with-dash.com: To'g'ri e-mail manzili
