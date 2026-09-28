"use client";

import Script from "next/script";

const SILKTIDE_STYLESHEET =
  "https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.css";
const SILKTIDE_SCRIPT =
  "https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.js";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
const HAS_VALID_GA_ID =
  /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID ?? "") &&
  !GA_MEASUREMENT_ID.includes("XXXXXXXXXX");

function initializeGoogleAnalytics() {
  if (!HAS_VALID_GA_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

function initializeSilktideConsentManager() {
  window.silktideConsentManager?.init({
    backdrop: {
      show: true,
    },
    icon: {
      position: "bottomLeft",
    },
    prompt: {
      position: "bottomRight",
    },
    consentTypes: [
      {
        id: "essential",
        label: "Essential",
        description:
          "<p>These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.</p>",
        required: true,
      },
      {
        id: "analytics",
        label: "Analytics",
        description:
          "<p>These cookies help us improve the site by tracking which pages are most popular and how visitors move around the site.</p>",
        defaultValue: true,
        gtag: "analytics_storage",
        ...(HAS_VALID_GA_ID
          ? {
              scripts: [
                {
                  url: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
                  load: "async",
                },
              ],
              onAccept: initializeGoogleAnalytics,
            }
          : {}),
      },
      {
        id: "marketing",
        label: "Marketing",
        description:
          "<p>These cookies are used by us and our advertising partners to show you relevant ads on this site and elsewhere, and to measure how those campaigns perform.</p>",
        gtag: ["ad_storage", "ad_user_data", "ad_personalization"],
      },
    ],
    text: {
      prompt: {
        description:
          "<p>We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic.</p>",
        acceptAllButtonText: "Accept all",
        acceptAllButtonAccessibleLabel: "Accept all cookies",
        rejectNonEssentialButtonText: "Reject non-essential",
        rejectNonEssentialButtonAccessibleLabel:
          "Reject all non-essential cookies",
        preferencesButtonText: "Preferences",
        preferencesButtonAccessibleLabel: "Toggle preferences",
      },
      preferences: {
        title: "Customize your cookie preferences",
        description:
          "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
        saveButtonText: "Save and close",
        saveButtonAccessibleLabel: "Save your cookie preferences",
        creditLinkText: "Get this banner for free",
        creditLinkAccessibleLabel: "Get this banner for free",
      },
    },
  });
}

export default function CookieBanner() {
  return (
    <>
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        id="silktide-consent-manager-css"
        href={SILKTIDE_STYLESHEET}
        integrity="sha384-EdMq+R+YOnsbelo08wPenoTlnxbAyxI11NMIxzugx/qAsbh64KcOkqxYqq6pfvO/"
        crossOrigin="anonymous"
      />
      <style id="silktide-consent-manager-overrides">
        {`#stcm-wrapper {
  --boxShadow: -5px 5px 10px 0px #00000012, 0px 0px 50px 0px #0000001a;
  --fontFamily: Helvetica Neue, Segoe UI, Arial, sans-serif;
  --primaryColor: #0070F3;
  --backgroundColor: #ffffff;
  --textColor: #253b48;
  --backdropBackgroundColor: #00000033;
  --backdropBackgroundBlur: 0px;
  --iconColor: #253B48;
  --iconBackgroundColor: #FFFFFF;
}`}
      </style>
      <Script
        id="silktide-consent-manager-js"
        src={SILKTIDE_SCRIPT}
        integrity="sha384-5Pt34uiIbCsvfiiZXoLi4HRf/YBXjr9c8e+gYeVo9smUaInNHYVtc8NZ8wUnXJIq"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onLoad={initializeSilktideConsentManager}
      />
    </>
  );
}
