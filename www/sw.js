// خدمة بسيطة تخلي المتصفح يعتبر الموقع تطبيق قابل للتثبيت. مفيش تخزين مؤقت، فالتحديثات بتوصل فورًا.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request)));
