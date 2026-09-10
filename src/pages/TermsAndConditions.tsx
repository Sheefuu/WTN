import LegalDocument from "./LegalDocument";
import documentUrl from "@/assets/WELCOMETONIGERIA LTD WEBSITE TERMS AND CONDITIONS OF USE.docx";

const TermsAndConditions = () => (
  <LegalDocument title="Terms and Conditions" documentUrl={documentUrl} />
);

export default TermsAndConditions;