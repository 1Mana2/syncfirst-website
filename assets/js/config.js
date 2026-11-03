/* SyncFirst runtime configuration. No secrets belong in this file: it is public.
   formEndpoint: HTTPS URL of a form-handling service or your own backend that accepts a JSON POST
   (for example a Formspree/Getform endpoint or an API route). Leave empty until one is provisioned:
   the contact form then reports honestly that online sending is not enabled and offers an email fallback. */
window.SYNCFIRST_CONFIG = {
  formEndpoint: "",
  fallbackEmail: "info@syncfirst.com.sa"
};
