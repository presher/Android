<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Wingspan</title>
    <base href="/en/">    <meta
      id="id-app-description"
      name="Description"
      content="Wingspan is a cloud-first and mobile-first solution that enables organizations to focus on training their talent of today, to be ready for tomorrow."
    />
    <script>
      const open = XMLHttpRequest.prototype.open
      XMLHttpRequest.prototype.open = function (method, url, ...rest) {
        if (url.startsWith('assets')) {
          url = document.getElementsByTagName('base')[0].href + url
        }
        return open.call(this, method, url, ...rest)
      }
    </script>
    <meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link id="id-app-x-icon" rel="icon" type="x-icon" />
    <link id="id-app-fav-icon" rel="icon" type="image/png" href="favicon.png" />
    <link id="id-app-webmanifest" rel="manifest" />
    <meta id="id-app-theme-color" name="theme-color" content="#000" />
    <script async src="assets/common/lib/object-sizeof.js"></script>
  <link rel="stylesheet" href="libraries.65a701afce758c1bb8b9.css"><link rel="stylesheet" href="styles.f86a0ca1b8359e1ffcd1.css"></head>

  <body class="mat-app-background mat-body mat-typography custom-scroll">
    <ws-root>
      <style>
        .loader-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .loader-ripple {
          display: inline-block;
          position: relative;
          width: 84px;
          height: 84px;
        }

        .loader-ripple div {
          position: absolute;
          border: 4px solid #000;
          opacity: 1;
          border-radius: 50%;
          animation: loader-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        .loader-ripple div:nth-child(2) {
          animation-delay: -0.5s;
        }

        @keyframes loader-ripple {
          0% {
            top: 38px;
            left: 38px;
            width: 0;
            height: 0;
            opacity: 1;
          }

          100% {
            top: -1px;
            left: -1px;
            width: 78px;
            height: 78px;
            opacity: 0;
          }
        }
      </style>
      <div class="loader-container">
        <div class="loader-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </ws-root>
    <noscript>Please enable JavaScript to continue using this application.</noscript>
  <script src="runtime-es2015.6704d604fe4808cb54c7.js" type="module"></script><script src="runtime-es5.6704d604fe4808cb54c7.js" nomodule defer></script><script src="polyfills-es5.d4e93422f57eae40217a.js" nomodule defer></script><script src="polyfills-es2015.06b0dc62aa98235c9077.js" type="module"></script><script src="scripts.d35c035d85e45a814eaf.js" defer></script><script src="main-es2015.46539dd2b2b4456e8130.js" type="module"></script><script src="main-es5.46539dd2b2b4456e8130.js" nomodule defer></script></body>
  <script>
    var MATCHING_IE = navigator.userAgent.match(/(msie|trident(?=\/))\/?\s*(\d+)/i) || []
    if (/trident/i.test(MATCHING_IE[1])) {
      // tslint:disable-next-line: max-line-length
      document.body.innerHTML =
        '<h1 style="margin-top: 50px; text-align: center">IE 11 and lesser version browsers are not supported.</h1><h3 style="margin-top: 16px; text-align: center">For best experience, use Google Chrome</h3>'
    }
  </script>
</html>
