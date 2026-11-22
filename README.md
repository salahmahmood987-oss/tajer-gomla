# تاجر جملة — تطبيق أندرويد (Capacitor)

تطبيق بيع بقالة بالجملة (B2B) — نسخة أندرويد من تطبيق الويب الحي
https://green-silence-6a5d.pages.dev/ (نفس الكود، نفس قاعدة البيانات Supabase).

- **Package:** `com.tajergomla.app` — الاسم: تاجر جملة
- **المصدر الحقيقي للكود:** `~/workspace/jumla-market/index.html` (تطبيق الويب).
  مجلد `www/` هنا **نسخة** من ملفات الويب الستة (index.html, manifest.json,
  sw.js, version.json, icon-192.png, icon-512.png) — أي تعديل على التطبيق
  يتعمل في `~/workspace/jumla-market/` الأول، وبعدين يتنسخ لـ `www/`.
- **فحص التحديث (dual-mode):** نفس `index.html` بيشتغل في المتصفح وفي التطبيق.
  في المتصفح بيفحص `version.json` النسبي وبيحدّث بإعادة التحميل؛ وفي التطبيق
  بيفحص `version.json` من GitHub raw وبيحمّل الـ APK ويثبّته (زي ind toktok).
- **التوقيع:** مفتاح debug ثابت `android/app/debug.keystore` (PKCS12، اتولد بـ
  openssl — كلمة السر `android` والاسم `androiddebugkey`) عشان بصمة التوقيع
  تبقى ثابتة في كل بناء، فالتحديثات تتثبت فوق النسخة القديمة من غير تعارض.
- **البناء:** GitHub Actions (`.github/workflows/build-apk.yml`) — Node 22 +
  JDK 21 + Android 36. البناء المحلي بـ Gradle مش شغال في الـ VM.

## إصدار نسخة جديدة (checklist)

1. عدّل التطبيق في `~/workspace/jumla-market/` (وزوّد `APP_VERSION` في index.html).
2. انسخ الملفات الستة لـ `www/` وحدّث `version.json` هنا (نفس رقم الإصدار).
3. ادفع لـ GitHub (`main`) وراقب الـ build.
4. نزّل الـ APK من الـ Artifacts، واحسب SHA-256.
5. ارفع `tajer-gomla-vX.Y.Z.apk` + `tajer-gomla-latest.apk` للريبو.
6. حدّث `version.json` في الريبو: `{version, apkUrl, sha256, notes}` وادفعه.
7. تحقق من اللينكات التلاتة (stable + versioned + version.json) — لازم الـ hash
   يطابق في التلاتة.

## اللينكات

- التطبيق الحي (ويب): https://green-silence-6a5d.pages.dev/
- الـ APK المستقر: https://raw.githubusercontent.com/salahmahmood987-oss/tajer-gomla/main/tajer-gomla-latest.apk
- فحص الإصدار: https://raw.githubusercontent.com/salahmahmood987-oss/tajer-gomla/main/version.json
