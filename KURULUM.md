# 🚀 Hızlı Kurulum Rehberi - Ozso Website

## ✅ Yapılması Gerekenler (ZORUNLU)

### 1️⃣ Telefon ve WhatsApp Numaralarını Güncelleyin

Aşağıdaki dosyalarda `+90 352 XXX XX XX` ve `905XXXXXXXXX` değerlerini kendi numaralarınızla değiştirin:

- `src/layouts/Layout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/CTAButtons.astro`
- `src/pages/index.astro`
- `src/pages/aksesuarlar.astro`
- `src/pages/hakkimizda.astro`

**Örnek:**
```javascript
const phoneNumber = '+90 352 123 45 67';     // Görünür telefon numarası
const whatsappNumber = '905321234567';        // WhatsApp numarası (+ işareti olmadan)
```

### 2️⃣ Email Adresini Güncelleyin

`src/components/Footer.astro` dosyasında:

```javascript
const email = 'bilgi@firmaniz.com.tr';
```

### 3️⃣ Google Ads Tracking Kodlarını Ekleyin

`src/layouts/Layout.astro` dosyasında Google Tag Manager bölümünü açın ve kendi kodlarınızı ekleyin.

**Adımlar:**
1. Google Ads hesabınızdan Conversion ID'lerinizi alın
2. GTM script etiketlerini aktif edin (yorum satırlarını kaldırın)
3. Conversion ID'leri trackPhoneClick() ve trackWhatsAppClick() fonksiyonlarına ekleyin

### 4️⃣ Domain Adınızı Güncelleyin

`astro.config.mjs` dosyasında:

```javascript
site: 'https://siteniz.com.tr'
```

### 5️⃣ Ürün Resimlerinizi Ekleyin

- Ürün fotoğraflarınızı `/public/images/` klasörüne yükleyin
- Optimize edilmiş JPEG veya WebP formatında olmalı
- Önerilen boyutlar: 800x600px (ürünler), 1920x1080px (hero)

## 🎨 İsteğe Bağlı Özelleştirmeler

### Renkleri Değiştirme

`tailwind.config.cjs` dosyasında primary renklerini değiştirebilirsiniz:

```javascript
primary: {
  500: '#0ea5e9',  // Ana renk
  600: '#0284c7',  // Hover rengi
}
```

### İçerikleri Düzenleme

Tüm metinler `.astro` dosyalarında doğrudan düzenlenebilir. HTML bilgisi yeterli.

## 📦 Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Siteyi tarayıcıda aç: http://localhost:4321
```

## 🚢 Canlıya Alma (Netlify - ÖNERİLEN)

1. Kodu GitHub'a yükleyin
2. Netlify.com'a gidin ve "New site from Git" tıklayın
3. GitHub repo'nuzu seçin
4. Build ayarları otomatik gelecek
5. "Deploy site" tıklayın
6. 2-3 dakika sonra siteniz hazır! 🎉

## 🔥 Canlıya Alırken Kontrol Listesi

- [ ] Telefon numaraları güncellendi
- [ ] WhatsApp numarası güncellendi
- [ ] Email adresi güncellendi
- [ ] Google Ads tracking kodları eklendi
- [ ] Domain adı güncellendi
- [ ] Ürün resimleri eklendi
- [ ] Mobilde test edildi
- [ ] Tüm linkler kontrol edildi
- [ ] Telefon ve WhatsApp butonları test edildi

## 📞 Test Etme

1. Siteyi mobil ve desktop'ta açın
2. Her sayfada telefon butonuna tıklayın
3. WhatsApp butonuna tıklayın
4. Google Ads'de conversion tracking'i kontrol edin

## ❓ Sık Sorulan Sorular

**S: Siteyi nasıl güncellerim?**
C: `.astro` dosyalarını düzenleyin, `npm run build` yapın ve tekrar deploy edin.

**S: Yeni sayfa nasıl eklerim?**
C: `src/pages/` klasörüne yeni `.astro` dosyası ekleyin.

**S: Resimler neden yüklenmiyor?**
C: Resimlerin `/public/images/` klasöründe olduğundan emin olun.

**S: Google Ads takibi çalışmıyor?**
C: Conversion ID'lerin doğru olduğundan ve GTM kodlarının aktif olduğundan emin olun.

## 🎯 Sonuç

Bu adımları tamamladıktan sonra:
✅ Siteniz Google Ads için optimize edilmiş
✅ Telefon ve WhatsApp conversion tracking aktif
✅ Mobil ve desktop'ta mükemmel görünüm
✅ Hızlı yükleme (< 1 saniye)
✅ SEO optimize

**Başarılar! 🚀**
