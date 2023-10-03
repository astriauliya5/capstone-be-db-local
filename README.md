 # untuk ADAM
 npm install express

 bikin dulu db nya: di terminal -> mysql -u root
 mysql> CREATE DATABASE IF NOT EXIST capstone_local;

 cek if capstone_local masuk di local dir: mysql> SHOW DATABASES
 kalo ada, run di terminal yg bukan mysql: npx prisma db push
 klo udah, di terminal mysql> use capstone_local;
 habistu coba buka phpmyadmin nya semoga capstone_local nya ada
 habistu udah deh, coba cari sql/query nya dr phpmyadmin situ.. semoga ketemu

 klo soal datanya pasti gaada yg di local, soalnya astri nambahin data2 nya di railway langsung
 klo mau test2 tambahin sendiri aja datnya di phpmyadmin nya

 btw yg cart emang belum sempurna, nganu relasinya sm buat method PUT nya masih kesusahan si astri huhuu 
