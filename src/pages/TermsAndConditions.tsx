import LegalDocument from "./LegalDocument";

const TermsAndConditions = () => (
  <LegalDocument
    title="Terms and Conditions"
    documentUrl={`${import.meta.env.BASE_URL}termsandconditions.docx`}
  />
);

export default TermsAndConditions;