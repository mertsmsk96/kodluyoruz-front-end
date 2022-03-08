---
title: "FİLE UPLOAD"
tags: ""
---

# NEDİR?

File Upload sunucu üzerinde tam kontrol sağlayabilmek için güçlü bir saldırı yöntemidir. Hemen hemen her uygulama üzerinde dosya yükleme alanı vardır. Bu alanların çoğu ise kontrolsüzdür. Yani yüklenen şeyin türünü, boyutunu ya da diğer özelliklerini önemsemez. Sadece bir şey yüklendi mi diye bakar. Bizde bu açığı kullanarak uygulamaya uzaktan çalıştıracağımız bir dosya yükleriz. Sonra bu dosyayı çalıştırır ve çalıştığı sunucu üstünde yetki yükselterek istediğimiz işlemleri yaparız.

---
# ETKİLERİ NELERDİR?

File uploadın etkisi iki adımda ölçülür;

1. Dosya yüklerken boyutu, adı, uzantısı v.b. özellikleri kontrol edilmeden yüklenebiliryor mu?
2. Yükleme başarılı olduktan sonra hangi işlemleri yapabiliyoruz?

En kötü senaryoda, dosyanın türü doğru şekilde doğrulanmaz ve sunucu yapılandırması belirli dosya türlerinin (.php ve .jsp gibi) kod olarak yürütülmesine izin verir. Bu durumda, biz sunucudan bizim makinamıza bağlantı açabilecek bir web kabuğu yükleyebilir ve uygulamanın yaşadığı sunucuda tam denetim sağlayabiliriz.

:::important
Web Kabuğu, bir saldırganın uzak bir sunucuda rastgele komutlar yürütmesini sağlayan kötü amaçlı bir komut dosyasıdır.
:::

---
# AÇIK NASIL ORTAYA ÇIKAR?

Bu açık tamamen developer'dan kaynaklıdır. Uygulamayı geliştirirken gerekli güvenlik önlemlerini almadığı için zafiyet ortaya çıkar.

Tabiki önlem alınmış olsa da gözden kaçan noktalar olabilir. Kullanılabilecek çok fazla dosya türü vardır bu yüzden hepsini kontrol edip yüklemeyi önlemek zor olacaktır bu yüzden BlackList kullanmak zafiyet doğurabilir. Bunun yerine WhiteList kullanıp bunun dışındakileri kabul etmemek daha doğru bir hamle olacaktır. 

Yükleme işlemi hem sunucu hem de tarayıcı tarafında kontrol edilmiyordur. Örneğin sadece tarayıcı tarafında bir kontrol yapılmıştır ve bu durum bir proxy ile istismar edilebilir. Uygulamaya bir proxy üzerinden gidince erişemiyor olmak gerekir.

Dosyanın yüklenmesi ve sunucuya erişme halinde dizinler arası gezişin kısıtlanması, belli başlı bazı komutların çalıştırılamaması gibi önlemler alınmalıdır. Yani sunucuda sıkılaştırma (hardening) yapılmış olmalıdır.

---
# WEB SUNUCULARI DOSYA İSTEKLERİNİ NASIL İŞLER?

Bunun öncesinde biraz HTTP metotlarını biliyor olmamız gerekiyor. GET, POST, OPTİONS, PUT, DELETE ve diğerleri… 

Sunucu, dosya uzantısını tanımlamak için istekteki yolu ayrıştırır. Daha sonra bunu, tipik olarak uzantılar ve MIME türleri arasında önceden yapılandırılmış eşlemelerin bir listesiyle karşılaştırarak, istenen dosyanın türünü belirlemek için kullanır. Bundan sonra ne olacağı, dosya türüne ve sunucunun yapılandırmasına bağlıdır.

NOT: HTTP metotlarını ve MIME türlerini farklı bir dosyada işleyeceğim.

- Bu dosya türü, bir görsel veya statik bir HTML sayfası gibi yürütülemez durumdaysa, sunucu dosyanın içeriğini istemciye bir HTTP yanıtında gönderebilir.

- Dosya türü bir PHP dosyası gibi yürütülebilir ise ve sunucu bu tür dosyaları yürütmek üzere yapılandırılmışsa, komut dosyasını çalıştırmadan önce HTTP isteğindeki başlıklara ve parametrelere dayalı olarak değişkenler atayacaktır. Ortaya çıkan çıktı daha sonra istemciye bir HTTP yanıtında gönderilebilir.

- Dosya türü yürütülebilirdir ama sunucu bu tür dosyaları yürütmek üzere yapılandırılmamıştır, bu durumda hata verir. Ancak bazı durumlarda dosyanın içeriği müşteriye düz metin olarak sunulabilir. Bu tür yanlış yapılandırmalar, zaman zaman kaynak kodunu ve diğer hassas bilgileri sızdırmak için kullanılabilir. Sızma testlerinde bu gibi durumlar da raporlanır. Bu nedenle `Content-Type` ya da `Header` bilgilerinin gözden geçirilmesi önerilir.

---
# EXPLOIT ETME

Web Shell'i sunucuya yükledikten sonra, sunucu üzerinde tam kontrole sahip olabileceğimizi söylemiştik. Bununla ilgili uygulama çalışmaları için hata türüne bağlı olarak farklı senaryolar sunan `PortSwigger` sitesini ve ayrıca HTTP trafiğini kontrol etmek için `BurpSuite` programını kullanacağız. Bunlar dışında da birçok zafiyetli, üzerinde test alıştırmaları yapmamızı sağlayan birçok uygulama mevcuttur.

### SINIRSIZ DOSYA YÜKLEMESİNDEN YARARLANMA

Burada sunucuya her türlü dosya yüklenebilir çünkü kontrol yoktur. Örneğin sunucunun dosya sisteminden rastgele dosyaları okumak için tek satırlık bir PHP kodu yeterli olacaktır.
```
<? php echo file_get_contents('path/to/target/file'); ?>
```
Biz şimdi uygula için aşağıdaki yolu vereceğiz.
```
<? php echo file_get_contents('home/carlos/secret'); ?>
```

Bu kodu kendi sistemimizde `exploit.php` adıyla kaydedip uygulamanın dosya yükleme kısmından bunu sisteme yükleyip istediğimiz dosyanın içeriğini görebiliriz.

Not: Lab çözümleri başka bir dosyada yazılıdır.

### HATALI DOSYA TÜRÜ DOĞRULAMA

HTML formları gönderirken, tarayıcınız genellikle sağlanan verileri `application/x-www-form-url-encoded` içerik türüyle bir `POST` istekte gönderir . Bu, adınız, adresiniz vb. gibi basit metinler göndermek için uygundur, ancak tam bir görüntü dosyası veya bir PDF belgesi gibi büyük miktarda ikili veri göndermek için uygun değildir. Bu durumda, içerik türü `multipart/form-data` tercih edilen yaklaşımdır.

Bir resim yüklemek, bunun bir açıklamasını sağlamak ve kullanıcı adınızı girmek için alanlar içeren bir form düşünün. Böyle bir form göndermek, şuna benzer bir istekle sonuçlanabilir:

![8.PNG](https://boostnote.io/api/teams/yWjikJ6g6/files/ca9a3c098b897824b474d7ebd0b51d7937441024a7411e6c7c496b220b12f3ea-8.PNG)

Görüldüğü gibi, mesaj gövdesi, formun girdilerinin her biri için ayrı bölümlere ayrılmıştır. Her parça, `Content-Disposition` ilgili olduğu giriş alanı hakkında bazı temel bilgiler sağlayan bir başlık içerir. Bu ayrı parçalar, sunucuya bu giriş kullanılarak gönderilen verilerin MIME türünü söyleyen kendi  `Content-Type` başlıklarını da içerebilir .

> Web sitelerinin dosya yüklemelerini doğrulamaya çalışmasının bir yolu, bu girdiye özgü `Content-Type` başlığının beklenen bir MIME türüyle eşleşip eşleşmediğini kontrol etmektir. Örneğin, sunucu yalnızca görüntü dosyaları bekliyorsa, yalnızca `image/jpeg` ve `image/png` gibi türlere izin verebilir. Bu başlığın değerine sunucu tarafından dolaylı olarak güvenildiğinde sorunlar ortaya çıkabilir. Dosya içeriğinin varsayılan MIME türüyle gerçekten eşleşip eşleşmediğini kontrol etmek için başka doğrulama gerçekleştirilmezse, bu savunma Burp Repeater gibi araçlar kullanılarak kolayca atlanabilir.

### ERİŞİLEBİLEN DİZİNLERLE DOSYA YÜRÜTME

İlk aşamada dosya yükleyemiyor olmayı bekliyoruz. Yüklediysek bu defa da sunucu üzerinde dizinler arası geçiş yapmayı bekliyoruz. Son kullanıcının sunucuda dosya yüklemesine izin verilen dizin için birçok güvenlik önlemi alınmış olabilir ve orada komut çalıştırmamıza izin verilmiyordur ama başka bir dizine dosyayı yüklersek ya da yüklemeyi başarabilirsek oradaki kontrol daha az olabilir ve komut çalıştırabiliriz. Tabi ki bunu yapabilmemiz için uygulamada `Directory Traversal` zafiyetinin olması gerekir.

> Konuyla ilgili daha detaylı anlatım lab çözümü dosyasında bulunmaktadır.

:::important
Tüm isteklerimizi aynı etki alanına gönderebilsek bile, bunun genellikle yük dengeleyici gibi bir tür ters proxy sunucusuna işaret ettiğini unutmamalıyız. İsteklerimiz genelde farklı şekilde yapılandırılabilen arka planda ek sunucular tarafından ele alınacaktır.
:::



## BLACKLIST TEHLİKESİ NEDİR?

Kötü amaçlı dosya yüklemeyi engellemenin en belirgin yollarından biri .php gibi potansiyel tehlike olan dosya uzantılarını kara listeye almaktır. Kara liste ilk bakışta güzeldir ama birçok uzantıyı yani dosya türünü listeye almayı atlayabiliriz. Bu nedenle beyaz liste (white list) oluşturmak daha iyidir. Örneğin .php uzantılı dosya yüklenmesini kara listeye ekleyerek engellemişsinizdir ama .php5, .shtml türlerinin yüklenmesini gözden kaçırmışsınızdır ve bunlarda uygulama üzerinde çalışıyordur. 

### SUNUCU YAPILANDIRMASINI GEÇERSİZ KILMA

Kullanılan web sunucuya göre bazı konfigürasyonlar yapılmaktadır. 

`Apache Web Server kurulmuşsa`
> /etc/apache2/apache2.conf 

altında bazı ayarlar yapılıyor. Kullanılan kütüphaneler vb. şeyler ekleniyor. 

Eğer 
`IIS Web Server` kurulmuşsa 

> web.config 

dosyası içerisinde mimeType’ları vs veriliyor. Bunlar dışında bazen de `.htaccess` dosyası içerisinde xx geleni yy yap. link.html’e gelirse linkdegil.html’e yönlendir vb. birtakım ayarlar yapılabiliyor. Bizde buralarda gözden kaçan ya da işimize yarayacak bazı ayarları kullanacağız.

Konunun diğer ayrıntıları için lab çalışmasına bakalım!

### HİLELİ (GİZLEYİCİ) DOSYA UZANTILARINI KULLANMA

En kapsamlı kara listeler bile, klasik şaşırtma teknikleri kullanılarak potansiyel olarak atlanabilir. Doğrulama kodunun büyük/küçük harfe duyarlı olduğunu ve `exploit.pHp`'nin aslında bir .php dosyası olduğunu fark etmediğini varsayalım. Daha sonra dosya uzantısını bir MIME türüyle eşleyen kod büyük/küçük harfe duyarlı değilse, bu tutarsızlık, sonunda sunucu tarafından yürütülebilecek doğrulamadan sonra kötü amaçlı PHP dosyalarını gizlice sokmanıza olanak tanır. 

Aşağıdaki teknikleri bu tarz hileler için kullanabiliriz.

- Birden fazla uzantı sağlayın. Dosya adını ayrıştırmak için kullanılan algoritmaya bağlı olarak, aşağıdaki dosya bir PHP dosyası veya JPG görüntüsü olarak yorumlanabilir: `exploit.php.jpg`
- Gönderdiğiniz dosyanın sonuna (.)nokta vb. şeyler ekleyerek çalışabilirliğini kontrol edebiliriz. Örn; `exploit.php.`
- Encoding yöntemlerini kullanarak (.)nokta (/)ters çizgi gibi değerleri değiştirip çalışabilirliği kontrol edebiliriz. Örn; `exploit%2Ephp`
- Dosya uzantısından önce (;) noktalı virgül, ekleyebiliriz. Noktalı virgül encode edilebiliriz ya da “null byte characters” dediğimiz karakterler eklenerek çalışabilirliği kontrol edebiliriz. Örn; `exploit.asp;.jpg` veya `exploit.asp%00.jpg`
- ASCII kodları ile de deneme yapabiliriz.
- Diğer seçeneklerden biri ise uzantının kaldırılması hali örneğin uygulama siz .php uzantılı bir dosya gönderdiğiniz de .php ifadesini kaldırıp sisteme alıyordur ama çalışabilir bir dosya olmuyordur. Siz bu dosyayı gönderirken `exploit.p.phphp` derseniz uygulama `.php` yazan yeri kaldırabilir ve bu kontrolü tekrar etmez ise sunucuya `exploit.php` dosyası yine yüklenir.

Uygulamalı anlatım lab kısmında!

### DOSYA İÇERİĞİNİN HATALI DOĞRULANMASI

`Content-Type` değerine güvenmek yerine gelen dosyanın yapısal olarak gerçekten jpeg ya da pdf mi olduğu da kontrol edilebilir. Bu diğer yöntemdeki gibi sadece uzantı kontrolünden daha iyidir. İkisi birlikte ise çok daha iyidir. Yine bu benzer bir yöntem de boyutunu kontrol etmektir.

Belirli dosya türleri üst bilgi veya alt bilgi de her zaman belirli bir bayt dizisi içeriyor. Örneğin bir jpeg dosyası FF D8 FF değeri ile başlıyor. Yüklenen dosya da bunlar kontrol edilerek zararlı yüklenmesi engellenebilir.

Bu yöntem de istismar edilebiliyor. Çünkü zararlı bir script ya da dosya bir jpeg içerisine bazı araçlar ile gömülebiliyor. 

Uygulama koşullarında sistem şöyle yürür:

- Sisteme jpeg ya da herhangi bir görüntü dosyası yükleyebildiniz diyelim ama zararlı olarak görünen dosyalara izin verilmedi.
- Bunu aşmanın yolu, görüntü dosyasının içine zararlı kod enjekte etmektir. Bunu lab kısmında anlatacağım.
