/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fddc08b810ec30b0033b856170d587d2"
  },
  {
    "url": "assets/css/0.styles.decfdbc3.css",
    "revision": "ba7a29b6535d48ba5657cfa9513fb2dc"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/dir_order.1c5c748e.png",
    "revision": "1c5c748ec3715979c79023acf86dffe1"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/image-20211213234338338.53ba1743.png",
    "revision": "53ba174363fc70a06bef6ab545f3ce42"
  },
  {
    "url": "assets/img/image-20211213234542977.1aa23f09.png",
    "revision": "1aa23f09587e2411c49fdd5472e9c4d6"
  },
  {
    "url": "assets/img/image-20211214234023098.9b2771d3.png",
    "revision": "9b2771d3c5617517f788d0057ba5d9c6"
  },
  {
    "url": "assets/img/image-20211221205550326.a7b9a244.png",
    "revision": "a7b9a2448cc0bfa72d39b075b9b9a245"
  },
  {
    "url": "assets/img/image-20211221210015059.cd09a8b9.png",
    "revision": "cd09a8b9e9c04154b545e48b844943a1"
  },
  {
    "url": "assets/img/image-20211221210155061.58275242.png",
    "revision": "582752425c075aeb57ebe0000fe3c897"
  },
  {
    "url": "assets/img/image-20220214224629562.c4425c9a.png",
    "revision": "c4425c9a75de3f2c086885a7c68c45c0"
  },
  {
    "url": "assets/img/tortoisegit.bdd5f7e7.png",
    "revision": "bdd5f7e7ca564176bb7444a92ea9f31f"
  },
  {
    "url": "assets/js/1.fa4fad4d.js",
    "revision": "2b371c7a3a70a0cc845ace8a44135c68"
  },
  {
    "url": "assets/js/10.95268dbc.js",
    "revision": "64b9d2a9c21b7362807d3e0aeb7a8fc0"
  },
  {
    "url": "assets/js/11.af248580.js",
    "revision": "cce6a905f9ea58e7840ac94d4e207975"
  },
  {
    "url": "assets/js/12.a8c7e50c.js",
    "revision": "1233885aa24d6adb385775ba9e6643e1"
  },
  {
    "url": "assets/js/13.c99eae79.js",
    "revision": "f73be71a9110f6f1edf64e79cd16eec9"
  },
  {
    "url": "assets/js/14.bd4eb5aa.js",
    "revision": "5c4ba985931093e07899b0bc1a3280b2"
  },
  {
    "url": "assets/js/15.12dbfe71.js",
    "revision": "1ddbac052f61505440070fdc371a9a71"
  },
  {
    "url": "assets/js/16.7c048357.js",
    "revision": "d5372704e5ab8cd63b67307e087fed2c"
  },
  {
    "url": "assets/js/17.6b90c8e3.js",
    "revision": "4987a6b939f1b2475a3c34c25f7976ee"
  },
  {
    "url": "assets/js/18.df42f922.js",
    "revision": "8b7e565ad8f617884edbecda2f85c34e"
  },
  {
    "url": "assets/js/19.221b6a54.js",
    "revision": "cc9b444e33307dbafe75cdb366590355"
  },
  {
    "url": "assets/js/20.a159c637.js",
    "revision": "7f17da57d2e4a004e4767b4817c30167"
  },
  {
    "url": "assets/js/21.0f601111.js",
    "revision": "6e13418c6307403a999aec06e58aa1d3"
  },
  {
    "url": "assets/js/3.95ae2c1e.js",
    "revision": "740cb20c61d8b29464ac1ec902d22d7a"
  },
  {
    "url": "assets/js/4.f3eb1b17.js",
    "revision": "c1b54e2c5ce7102d67315b4aa6fd43db"
  },
  {
    "url": "assets/js/5.ce01f792.js",
    "revision": "c7ac24ca3d3f48696e409db6080266d9"
  },
  {
    "url": "assets/js/6.983424bc.js",
    "revision": "f3c28130d393c5b38cb2f68f3ce8acbf"
  },
  {
    "url": "assets/js/7.294fb298.js",
    "revision": "7810da98f3969022bda9087b9b8334ca"
  },
  {
    "url": "assets/js/8.a887820c.js",
    "revision": "ba420db914516502738fedf63e667692"
  },
  {
    "url": "assets/js/9.0ae172be.js",
    "revision": "94ec849084bf6b9658e0b0a2b21d3590"
  },
  {
    "url": "assets/js/app.a8ba491f.js",
    "revision": "409976b82478c5c4c215ce50a5cd0a47"
  },
  {
    "url": "avatar.png",
    "revision": "f8da0bc8271a229144b9e4ca9cd21959"
  },
  {
    "url": "bg.jpg",
    "revision": "12331fb370f4be4af673a6f8b9a3025c"
  },
  {
    "url": "blog_tutorials/1_windows_install_yarn.html",
    "revision": "b88e88dad597345650370148440e5f71"
  },
  {
    "url": "blog_tutorials/2_configurate_vuepress.html",
    "revision": "2c2109d0b0daa4c9f605211dfd44b9f6"
  },
  {
    "url": "blog_tutorials/3_deploy_bolg.html",
    "revision": "e1a80b6c5f76485c98fc9af8dfc1cb34"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "69441440709a76c713793f69c3f47092"
  },
  {
    "url": "categories/index.html",
    "revision": "07c84d963ffc06eedce10922680157a2"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "88be48ac6bb443e038748a1f08360fbe"
  },
  {
    "url": "categories/python/index.html",
    "revision": "db03049f881f09122835f7f196807124"
  },
  {
    "url": "index.html",
    "revision": "8add00f4d4bd2c09cf35b37432a3055d"
  },
  {
    "url": "Java/1_first_learn_java.html",
    "revision": "414af64e6f4449e565212d0047ead86a"
  },
  {
    "url": "Java/2_java_data_struture.html",
    "revision": "578eda92e11c00d49587243edfe6eb58"
  },
  {
    "url": "Java/3_java_variable.html",
    "revision": "e5d440b07b21946f33b8bf91b6971a1f"
  },
  {
    "url": "Java/4_java_operator.html",
    "revision": "51b60a61e272706778a1a31d57281e2a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "a89f77f8bc5dc36ea48cb4cbb73b5952"
  },
  {
    "url": "logo.png",
    "revision": "b73c8811e3fcb145f1d02c5ad2c39431"
  },
  {
    "url": "python/python_ability_improvement.html",
    "revision": "09d0f00e9dd64f80701e95886ee13063"
  },
  {
    "url": "python/python_os_walk_method.html",
    "revision": "465bf2046817decdb1ec535e5cc8a287"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "bab7824e91abc2f9e411859dbbbc124e"
  },
  {
    "url": "tag/index.html",
    "revision": "33d5d9acfe7bdb456663a46b18b13795"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "4305269408932c9628f059f120bf9492"
  },
  {
    "url": "tag/python用法/index.html",
    "revision": "cf0bd2e9e330d49d9bc4c3f4942c8e6f"
  },
  {
    "url": "tag/软件工程能力/index.html",
    "revision": "a7ce3bd8a184cfe7514e7dc0c7367a0c"
  },
  {
    "url": "timeline/index.html",
    "revision": "ebc42bb9578ffc81876edc1d8ceeca6a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
