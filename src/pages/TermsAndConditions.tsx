import LegalDocument from "./LegalDocument";
import content from "virtual:terms-and-conditions";

const TermsAndConditions = () => (
  <LegalDocument title="Terms and Conditions" content={content} />
);

export default TermsAndConditions;