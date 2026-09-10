import LegalDocument from "./LegalDocument";

const PrivacyPolicy = () => (
  <LegalDocument
    title="Privacy Policy"
    documentUrl={`${import.meta.env.BASE_URL}privacy-policy.docx`}
  />
);

export default PrivacyPolicy;