
module.exports = function (steward) {
    const version = 1;
    const author = 'solobat';
    const name = 'Chrome Flags';
    const key = 'flag';
    const type = 'keyword';
    const icon = steward.chrome.extension.getURL('iconfont/chrome.svg');
    const title = 'Chrome Flags';
    const subtitle = 'search and open chrome flags';
    const commands = [{
        key,
        type,
        title,
        subtitle,
        icon
    }];
  
  	const chromeFlags = ["#enable-webassembly","#enable-devtools-experiments","#ntp-ui-md","#ignore-gpu-blacklist","#enable-canvas-2d-image-chromium","#disable-accelerated-2d-canvas","#composited-layer-borders","#overlay-strategies","#tint-gl-composited-content","#show-overdraw-feedback","#enable-draw-occlusion","#ui-disable-partial-swap","#enable-webrtc-remote-event-log","#enable-webrtc-srtp-aes-gcm","#enable-webrtc-srtp-encrypted-headers","#enable-webrtc-stun-origin","#WebRtcUseEchoCanceller3","#enable-webrtc-new-encode-cpu-load-estimator","#enable-nacl","#enable-nacl-debug","#force-pnacl-subzero","#nacl-debug-mask","#extension-apis","#extensions-on-chrome-urls","#enable-fast-unload","#enable-history-entry-requires-user-gesture","#disable-pushstate-throttle","#disable-hyperlink-auditing","#show-autofill-type-predictions","#save-page-as-mhtml","#mhtml-generator-option","#enable-quic","#disable-javascript-harmony-shipping","#enable-javascript-harmony","#enable-asm-webassembly","#enable-webassembly-streaming","#enable-webassembly-baseline","#enable-webassembly-threads","#shared-array-buffer","#enable-future-v8-vm-features","#enable-v8-orinoco","#disable-software-rasterizer","#enable-gpu-rasterization","#enable-oop-rasterization","#gpu-rasterization-msaa-sample-count","#enable-experimental-web-platform-features","#silent-debugger-extension-api","#enable-scroll-prediction","#top-chrome-md","#close-buttons-inactive-tabs","#new-tab-button-position","#single-tab-mode","#site-settings","#secondary-ui-md","#touch-events","#allow-nacl-socket-api","#disable-accelerated-video-decode","#debug-packed-apps","#automatic-password-generation","#PasswordForceSaving","#new-password-form-parsing","#enable-show-autofill-signatures","#AffiliationBasedMatching","#wallet-service-use-sandbox","#enable-navigation-tracing","#trace-upload-url","#enable-service-worker-script-full-code-cache","#enable-service-worker-servicification","#enable-pwa-full-code-cache","#enable-suggestions-with-substring-match","#lcd-text-aa","#enable-offer-store-unmasked-wallet-cards","#enable-offline-auto-reload","#enable-offline-auto-reload-visible-only","#show-saved-copy","#default-tile-width","#default-tile-height","#enable-simple-cache-backend","#device-discovery-notifications","#enable-print-preview-register-promos","#enable-spelling-feedback-field-trial","#enable-webgl-draft-extensions","#account-consistency","#enable-zero-copy","#bookmark-apps","#disable-hosted-apps-in-windows","#disable-hosted-app-shim-creation","#enable-hosted-app-quit-notification","#translate-ranker-enforcement","#translate","#enable-native-notifications","#in-product-help-demo-mode-choice","#num-raster-threads","#disable-cast-streaming-hw-encoding","#disable-threaded-scrolling","#extension-content-verification","#extension-active-script-permission","#enable-embedded-extension-options","#enable-message-center-new-style-notification","#enable-policy-tool","#enable-tab-audio-muting","#reduced-referrer-granularity","#committed-interstitials","#enable-site-per-process","#site-isolation-trial-opt-out","#enable-top-document-isolation","#enable-use-zoom-for-dsf","#enable-harfbuzz-rendertext","#allow-previews","#data-saver-server-previews","#ignore-previews-blocklist","#enable-data-reduction-proxy-server-experiment","#enable-client-lo-fi","#enable-noscript-previews","#enable-optimization-hints","#enable-heavy-page-capping","#allow-insecure-localhost","#enable-app-banners","#enable-experimental-app-banners","#bypass-app-banner-engagement-checks","#enable-desktop-pwas","#enable-desktop-pwas-link-capturing","#use-sync-sandbox","#load-media-router-component-extension","#media-router-cast-allow-all-ips","#mac-v2-sandbox","#mac-views-native-app-windows","#mac-views-task-manager","#show-all-dialogs-with-views-toolkit","#app-window-cycling","#views-browser-windows","#enable-gamepad-extensions","#enable-gamepad-vibration","#enable-webvr","#webxr","#webxr-gamepad-support","#webxr-orientation-sensor-device","#webxr-hit-test","#v8-cache-options","#keyboard-lock-api","#system-keyboard-lock","#save-previous-document-resources-until","#disallow-doc-written-script-loads","#enable-autofill-credit-card-upload","#safe-search-url-reporting","#force-ui-direction","#force-text-direction","#enable-origin-trials","#enable-brotli","#enable-image-capture-api","#automatic-tab-discarding","#tls13-variant","#enable-token-binding","#enable-scroll-anchor-serialization","#disable-audio-support-for-desktop-share","#tab-for-desktop-share","#user-activation-v2","#enable-webrtc-h264-with-openh264-ffmpeg","#protect-sync-credential","#ProtectSyncCredentialOnReauth","#PasswordExport","#PasswordImport","#enable-google-branded-context-menu","#enable-fullscreen-in-tab-detaching","#enable-content-fullscreen","#enable-fullscreen-toolbar-reveal","#remove-navigation-history","#passive-listener-default","#document-passive-event-listeners","#passive-event-listeners-due-to-fling","#enable-font-cache-scaling","#enable-framebusting-needs-sameorigin-or-usergesture","#web-payments","#web-payments-modifiers","#service-worker-payment-apps","#enable-web-payments-single-app-ui-skip","#just-in-time-service-worker-payment-app","#fill-on-account-select","#new-audio-rendering-mixing-strategy","#disable-background-video-track","#enable-new-remote-playback-pipeline","#enable-surfaces-for-videos","#enable-generic-sensor","#enable-generic-sensor-extra-classes","#expensive-background-timer-throttling","#enable-audio-focus","#enable-new-print-preview","#enable-nup-printing","#enable-cloud-printer-handler","#cross-process-guests","#enable-nostate-prefetch","#enable-autofill-credit-card-ablation-experiment","#enable-autofill-credit-card-local-card-migration","#enable-autofill-credit-card-upload-editable-cardholder-name","#enable-autofill-credit-card-upload-send-pan-first-six","#enable-autofill-credit-card-upload-update-prompt-explanation","#enable-autofill-native-dropdown-views","#enable-autofill-save-card-dialog-unlabeled-expiration-date","#enable-autofill-send-experiment-ids-in-payments-rpcs","#enable-zero-suggest-redirect-to-chrome","#left-to-right-urls","#omnibox-new-answer-layout","#omnibox-reverse-answers","#omnibox-rich-entity-suggestions","#omnibox-tail-suggestions","#omnibox-tab-switch-suggestions","#enable-new-app-menu-icon","#enable-speculative-service-worker-start-on-query-input","#tab-strip-keyboard-focus","#omnibox-display-title-for-current-url","#force-color-profile","#autoplay-policy","#force-effective-connection-type","#sampling-heap-profiler","#memlog","#memlog-keep-small-allocations","#memlog-sampling","#memlog-stack-mode","#omnibox-ui-elide-suggestion-url-after-host","#omnibox-ui-hide-steady-state-url-scheme-and-subdomains","#omnibox-ui-jog-textfield-on-popup","#omnibox-ui-show-suggestion-favicons","#omnibox-ui-max-autocomplete-matches","#omnibox-ui-vertical-margin","#omnibox-ui-swap-title-and-url","#use-suggestions-even-if-few","#use-new-accept-language-header","#use-google-local-ntp","#one-google-bar-on-local-ntp","#mac-rtl","#enable-picture-in-picture","#mac-touchbar","#dialog-touchbar","#network-service","#network-service-in-process","#out-of-blink-cors","#use-ddljson-api","#enable-resource-load-scheduler","#enable-async-image-decoding","#voice-search-on-local-ntp","#click-to-open-pdf","#direct-manipulation-stylus","#remove-deprecared-gaia-signin-endpoint","#doodles-on-local-ntp","#sound-content-setting","#enable-improved-language-settings","#enable-regional-locales-as-display-ui","#enable-module-scripts-dynamic-import","#enable-v8-context-snapshot","#enable-pixel-canvas-recording","#enable-parallel-downloading","#enable-html-base-username-detector","#mac-system-share-menu","#enable-new-preconnect","#enable-overflow-icons-for-media-controls","#enable-block-tab-unders","#top-sites-from-site-engagement","#enable-ntlm-v2","#enable-module-scripts-import-meta-url","#stop-in-background","#clipboard-content-setting","#enable-modern-media-controls","#enable-network-logging-to-file","#enable-mark-http-as","#enable-web-authentication-api","#enable-web-authentication-testing-api","#enable-web-authentication-ctap2-support","#enable-viz-display-compositor","#unified-consent","#simplify-https-indicator","#BundledConnectionHelp","#enable-signed-http-exchange","#enable-viz-hit-test-draw-quad","#pdf-isolation","#use-pdf-compositor-service-for-print","#mac-views-autofill-popup","#autofill-dynamic-forms","#autofill-prefilled-fields","#autofill-rationalize-repeated-server-predictions","#autofill-restrict-formless-form-extraction","#views-cast-dialog","#enable-emoji-context-menu","#SupervisedUserCommittedInterstitials","#enable-layered-api","#enable-layout-ng","#enable-lazy-frame-loading","#autofill-cache-query-responses","#autofill-enforce-min-required-fields-for-heuristics","#autofill-enforce-min-required-fields-for-query","#autofill-enforce-min-required-fields-for-upload","#single-click-autofill","#enable-sync-user-consent-separate-type","#enable-sync-uss-sessions","#enable-experimental-productivity-features","#ntp-backgrounds","#ntp-custom-links","#ntp-icons","#enable-recurrent-interstitial","#disallow-unsafe-http-downloads","#enable-websocket-auth-connection-reuse","#unsafely-treat-insecure-origin-as-secure","#enable-accessibility-object-model","#enable-autoplay-ignore-web-audio","#upcoming-ui-features","#enable-blink-heap-incremental-marking","#enable-css-fragment-identifiers","#enable-ephemeral-flash-permission","#infinite-session-restore","#page-almost-idle","#proactive-tab-freeze-and-discard","#site-characteristics-database","#enable-suggested-text-touch-bar","#gamepad-polling-rate","#allow-sxg-certs-without-extension","#enable-web-authentication-touch-id","#enable-autofill-account-wallet-storage","#enable-bloated-renderer-detection","#disable-webrtc-hw-decoding","#disable-webrtc-hw-encoding","#enable-webrtc-hw-h264-encoding","#enable-webrtc-hw-vp8-encoding","#smooth-scrolling","#enable-ble-advertising-in-apps","#disable-touch-adjustment","#enable-touch-drag-drop","#touch-selection-strategy","#enable-tcp-fast-open","#enable-memory-coordinator","#enable-md-incognito-ntp","#enable-autofill-credit-card-upload-google-pay-on-android-branding","#enable-experimental-fullscreen-exit-ui","#stop-non-timers-in-background"];

    function onInput(text, command) {
        const filterByName = suggestions => steward.util.getMatches(suggestions, text);
        const mapTo = key => item => {
            return {
                icon,
                key,
                title: item,
                desc: item,
              	universal: true,
                url: `chrome://flags${item}`
            }
        };

      	if (text.trim()) {
            return Promise.resolve(filterByName(chromeFlags).map(mapTo('url')));
        } else {
            return Promise.resolve(chromeFlags.map(mapTo('url')));
        }
    }

    function onEnter(item, command, query, shiftKey, list) {
        
    }

    return {
        author,
        version,
        name,
        category: 'browser',
        icon,
        title,
        commands,
        onInput,
        onEnter
    };
}