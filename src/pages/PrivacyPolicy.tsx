import LegalDocument from "./LegalDocument";
import content from "virtual:privacy-policy";

const PrivacyPolicy = () => (
  <LegalDocument title="Privacy Policy" content={content} />
);

export default PrivacyPolicy;