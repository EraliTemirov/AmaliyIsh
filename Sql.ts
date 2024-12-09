function isNotSQLQuery(input: string): boolean {
   // 1. SQL kalit so‘zlarining ro‘yxati
   const sqlKeywords = [
     "SELECT", "INSERT", "DELETE", "UPDATE", "DROP", "TRUNCATE", "ALTER", 
     "CREATE", "JOIN", "UNION", "FROM", "WHERE", "OR", "AND", "TABLE", 
     "DATABASE", "VALUES", "SET", "LIKE", "INTO", "EXEC", "EXECUTE"
   ];
 
   // 2. SQL kalit so‘zlari bo‘yicha tekshirish
   const words = input.split(/\s+/);
   for (const word of words) {
     for (const keyword of sqlKeywords) {
       if (word.toUpperCase() === keyword) {
         return false;
       }
     }
   }
 
   // 3. SQL injection uchun maxsus belgilarni tekshirish
   const specialCharacters = ["--", ";", "'", '"'];
   for (const char of specialCharacters) {
     if (input.includes(char)) {
       return false;
     }
   }
 
   return true;
 }
 
 // Sinov uchun namunalar
 const testInputs = [
   "Hello, how are you?",               // To'g'ri
   "SELECT * FROM users;",              // Noto'g'ri (SQL so'rovi)
   "DROP TABLE students",               // Noto'g'ri (SQL buyrug'i)
   "Hi there! Nice to meet you.",       // To'g'ri
   "1; DROP DATABASE;",                 // Noto'g'ri (SQL injection)
   "DELETE FROM accounts WHERE 1=1",    // Noto'g'ri (SQL so'rovi)
   "This is a normal message",          // To'g'ri
   "username' OR '1'='1",               // Noto'g'ri (SQL injection)
   "Welcome to the site!",              // To'g'ri
   "-- This is a comment in SQL"        // Noto'g'ri (SQL comment)
 ];
 
 testInputs.forEach((input) => {
   if (isNotSQLQuery(input)) {
     console.log(`"${input}": To'g'ri matn`);
   } else {
     console.log(`"${input}": SQL so'rovi yoki injection topildi`);
   }
 });

 
//  "Hello, how are you?": To'g'ri matn
// "SELECT * FROM users;": SQL so'rovi yoki injection topildi
// "DROP TABLE students": SQL so'rovi yoki injection topildi
// "Hi there! Nice to meet you.": To'g'ri matn
// "1; DROP DATABASE;": SQL so'rovi yoki injection topildi
// "DELETE FROM accounts WHERE 1=1": SQL so'rovi yoki injection topildi
// "This is a normal message": To'g'ri matn
// "username' OR '1'='1": SQL so'rovi yoki injection topildi
// "Welcome to the site!": To'g'ri matn
// "-- This is a comment in SQL": SQL so'rovi yoki injection topildi
