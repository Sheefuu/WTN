import LegalDocument from "./LegalDocument";
import documentUrl from "@/assets/WELCOMETONIGERIA LTD PRIVACY POLICY.docx";

const PrivacyPolicy = () => (
  <LegalDocument title="Privacy Policy" documentUrl={documentUrl} />
);

export default PrivacyPolicy;