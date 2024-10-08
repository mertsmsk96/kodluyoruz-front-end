// ************** let ve const ile değişken tanımlama *************

// var ile değişken tanımlama
/*not: var ile tanımlama yapma işlemi yeni standartla birlikte
 çok kullanılmamaya başlandı.bunun yerine let ve const geldi

var serverName = "kodluyoruz.org"
console.log(serverName)
*/

// let ile değişkeni boş tanımlamak

let serverName;
console.log(serverName)

//let ile değişkene bilgi atamak
serverName = "https://kodluyoruz.org"
console.log(serverName)

/*let ile değişkene bilgi atayarak tanımlamak

let password = "1234";
console.log(password)
*/

/*değişken ataması yapmadan önce kullanmaya çalışmak
//bu hatalı bi işlemdir.

console.log(mylocation)
let mylocation = "izmir"
*/

// const ile değişkeni boş tanımlamaya çalışmak
/*const word; //hata verecektir
!!const ile değişken tanımlanacaksa bu değer boş olamaz!!
*/

// const ile değişken tanımlamak
const serverpassword = "svkvmksnvkmvks"
console.log(serverpassword)
/*const ile değişken tanımlandıktan sonra bir daha değiştirilemez
eğer sonradan değiştirilecek bir değişken tanımlanacaksa let
değişmeyecek bir şey tanımlanacaksa const kullanılır
*/
//serverpassword="sknksnb"
//console.log(serverpassword)//hata verir çünkü değişmez

// notlar
/*
Değişkenler en basit tabirle değerleri hafızada tutmak için kullanılan yapılardır. Bir tanımlayıcı ile tanımlanır. Tanımlayıcı öncesi var, let veya const deklarasyonlarından biri kullanılarak deklare edilir. Değişken isimlendirmede dikkat etmemiz gerekenler şunlardır.

Değişken isimleri harf, _ veya $ işareti ile başlayabilir. Fakat ES5 (ECMAScript 5) birlikte gelen özellikle UNICODE kodları kullanılırken kaçış karakteri olarak kullanılan \ işareti ilk karakter olarak kullanılabilir.
İlk harften sonra değişken isimlerinde rakamlar da kullanılabilir. $ ve _ dışında başka noktalama işaretleri kullanılamaz
Değişken ismindeki harfler arasında boşluk kullanılamaz.
İsimlendirme kurallarının dışında, isimlendirme yazım çeşitleri hakkında bilgi almak için https://devopedia.org/naming-conventions adresini inceleyebilirsiniz.

Değişkene Değer Atama ve Veri Türleri
Değişkenlere değer atama = operatörü ile yapılır.

Şeklinde bir değişken tanımladığımızda okulNumarasi değişkenine sayısal bir değer olan 12 değeri atanır.

Yukarıda kod parçasında görüldüğü gibi ilk olarak değişken tanımlaması yapılıp, değer ataması daha sonra yapılabilir. Değişkenler değer atanmadığı takdirde undefined değerini alırlar.

Yukarıdaki kod parçasında olduğu gibi tek bir satırda, deklarasyonları aynı fakat farklı tanımlayıcılar ile tanımlamış değişkenler tek bir satırda tanımlanabilir ve değer atanabilir.

JavaScript loosely typed bir programlama dilidir. Yani bir değişkeni tanımlarken değişkenin türünü (sayısal, metinsel, boolean) belirtmemize gerek yoktur.

Yazdığımız zaman 12 değerinin sayısal bir değer olduğunu anlar. Bir değişkene aşağıdaki veri tiplerini atayabiliriz.

Boolean = Mantıksal ifadedir. true veya false değeri atanabilir
Number = Sayısal ifadedir. 2^53 -1 değerine kadar sayısal değerler atanabilir.
BigInt = 2^53-1 değerinden büyük değerleri atayabilir.
String = Metinsel ifadelerdir. Metinsel ifade tanımlanırken ifade “ ” veya ‘ ’ işaretleri arasına yazılır.
Object = Yukarıda ki 7 veri türü de primitive tiplidir. Objelerde ( nesne, dizi ) gibi referans tipler de değişkenlere atanabilir.
var
Global scope veya function scope'ta deklarasyon sağlamaya yarayan keyword'dur. Scope özelliklerini daha sonra örneklerle açıklayacağız. var ile tanımlanan değişkenlerin özellikleri şunlardır.

Değişken değerleri değiştirilebilir.
Aynı isimle tekrardan tanımlanabilirler.
var ile tanımlanan değişkenler global scope veya function scope'tur. Global scope'ta tanımlanan değişkenlere her yerden ulaşılabilir. Function içerisinde tanımlanan değişkenlere ise tanımlı olduğu fonksiyonda ulaşılabilir. Bu konuyu örneklerle açıklayalım.
Aşağıda codepen ile deneyimleyebilirsiniz!

Kod parçasında görüldüğü gibi globalde tanımladığımız degisken isimli değişkene her yerden erişebiliriz.

Aşağıda codepen ile deneyimleyebilirsiniz!

Yukarıdaki kod parçasını incelediğimizde functionScopeDegisken isimli değişken function scope'ta tanımlanmıştır. Function scope'ta yer alan değişkenlere tanımlı oldukları fonksiyonun block'larından erişilebilir. Function scope'ta tanımlı değişkenlere fonksiyon dışında erişilmeye çalışıldığı zaman ReferenceError hatasını verir. Bunun sebebi function scope'ta tanımlı olmasıdır.

blocktaTanimliDegisken isimli değişken block içerisinde tanımla olsa bile, bulunduğu fonksiyonda tanımlı olduğu için tanımlı olduğu fonksiyonun her yerinden ulaşılabilir, fakat fonksiyon dışından erişilemez.

var ile tanımlanan değişkenlerin block scope olmamasından dolayı karşımıza bazı sorunlar çıkabilir.

Örneğin:

Aşağıda codepen ile deneyimleyebilirsiniz!

weLove değişkeninin if bloğunun içine girdikten sonra Bootcamp ile değişmesini ve blok içerisinde Bootcamp değeri ile işlem yapmak istiyoruz, fakat var ile tanımlanan değişkenin block scope olmamasından dolayı globalde tanımladığımız değişken değeri de değişiyor. Bu istenmeyen sonuçlar elde etmemize neden olabilir.

2015 yılında ES6 çıkmasıyla beraber değişken tanımlamak için let ve const keyword'leri de kullanılmaya başlanmıştır.

let
Değişkenleri block scope'ta tanımlayan deklarasyondur. let ile tanımlanan değişkenlerin özellikleri şunlardır.

Değişken değerleri değiştirilebilir.
Aynı isimle tekrardan aynı blokta tanımlanamaz. Farklı block'larda aynı isimle tanımlanabilir.
Aşağıda codepen ile deneyimleyebilirsiniz!

Yukarıdaki kod parçası aynı zamanda block scope kavramını açıklamamıza da yardımcı olur. let ile deklare edilen her değişken bulunduğu blokta tanımlıdır. Başka bir örnek vermek gerekirse

Aşağıda codepen ile deneyimleyebilirsiniz!

Yukarıdaki kod parçasını incelediğimizde ilkDegisken isimli değişkenimiz fonksiyon bloğumuzda tanımlıdır ve alt bloklardan da erişilebilir. ikinciDegisken isimli değişkenimiz ise if bloğunun içindedir ve sadece orada tanımlıdır, başka yerlerden erişilemez. var ile tanımladığımız değişkenler function scope oluyorlardı. İkisi arasındaki farkı scope'larını açıkladığımız örnekleri inceleyerek gözden geçirebilirsiniz.

const
Block scope da tanımlı, değeri sonradan değiştirilemez değişkenleri deklare etmek için kullanılan keyword'dür.

Const ile tanımlanan objelerin özellikleri (properties) değiştirilebilir fakat objenin kendisi değiştirilemez. Diziler içinde aynısı geçerlidir. Dizi değerleri değiştirilebilir fakat dizinin kendisi değiştirilemez.
Aşağıda codepen ile deneyimleyebilirsiniz!

Hoisting
Değişkenlerden bahsederken, değişkenleri kullanıp daha sonra tanımlamamızı sağlayan hoisting kavramından da bahsetmemiz gerekir. JavaScript’te tanımlanan değişkenler yorumlanırken tanımladığınız değişkenler fonksiyon veya ifadenin yukarısına alınarak yorumlanır. Buna hoisting (yukarı alma) denir. Yukarıya alınan değişkenler var ile deklare edildiyse atandıkları değer yerine undefined değerini alır. let veya const ile deklare edildi ise ReferanceError hatası verir. let ve const ile deklare edilen değişkenler bloğun başlangıcından itibaren tanımının yapıldığı yere kadar kadar geçici (temporal dead zone) bölgededir. Hoisting hakkında daha fazla bilgi almak için bu sayfayı inceleyebilirsiniz.

Örneklerle hoisting'i açıklayalım.

Aşağıda codepen ile deneyimleyebilirsiniz!

Yukarıdaki kod parçasının adım adım çalışması,

şeklindedir. Hoisting kavramını daha iyi anlamak için JavaScript görselleştiriciyi inceleyebilirsiniz. Aşağıdaki Codepen aracılığıyla hoisting üzerine daha fazla açıklamalı örnek inceleyebilirsiniz.
*/






