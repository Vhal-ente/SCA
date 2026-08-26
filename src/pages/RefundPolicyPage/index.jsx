import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../TermsPage/terms.css";

const sections = [
  ["1. Tournament Entry Fees", ["Entry fees are generally refundable where:", ["SCA cancels the tournament.", "SCA is unable to provide the service paid for.", "A duplicate or incorrect payment has been confirmed.", "A refund is otherwise required under applicable Nigerian law."]]],
  ["2. Player Withdrawal", ["If you voluntarily withdraw from a tournament after registration, your entry fee may not be refundable where tournament preparations, brackets, allocations, or other services have already commenced.", "Where cancellation is allowed, any applicable conditions or administrative charges will be clearly communicated."]],
  ["3. Rescheduled Tournaments", ["If a tournament is rescheduled, your registration will normally remain valid for the new date.", "Where the new date is not reasonably suitable, you may contact SCA to request a refund."]],
  ["4. Disqualification", ["Players who are disqualified for cheating, fraud, misconduct, false information, or violation of tournament rules are not normally entitled to a refund.", "This does not affect rights that cannot legally be excluded."]],
  ["5. Failed Transactions", ["If your account is charged but registration is not completed, contact SCA with the relevant transaction details.", "We will verify the transaction with the payment provider and either confirm the registration or process the appropriate refund."]],
  ["6. Refund Processing", ["Approved refunds will normally be returned through the original payment method where possible.", "Processing times may depend on the payment provider or financial institution involved."]],
  ["7. Refund Requests", ["Refund requests should include:", ["Full name.", "Registered email address.", "Tournament or service name.", "Transaction reference.", "Reason for the request."], "Refund requests can be submitted through the contact information provided on the SCA website."]],
  ["8. Contact", ["For questions regarding refunds, contact SCA through the support details provided on our website."]],
];

export default function RefundPolicyPage() {
  return <div className="legal-page"><Navbar/><main><header className="legal-header"><div className="legal-container"><p className="eyebrow">Legal</p><h1>Refund Policy</h1><p className="legal-updated">Last Updated: August 2026</p><p>This Refund Policy applies to payments made for tournaments, leagues, registrations, and other paid services offered by Short Circuit Arena (“SCA”).</p><strong>Nothing in this policy limits any refund or consumer right available under applicable Nigerian law. The Federal Competition and Consumer Protection Commission states that consumers may have refund rights where services are not provided or where advance bookings are reasonably cancelled, subject to applicable conditions.</strong></div></header><article className="legal-container legal-content">{sections.map(([title, content]) => <section key={title}><h2>{title}</h2>{content.map((item, index) => Array.isArray(item) ? <ul key={index}>{item.map(entry => <li key={entry}>{entry}</li>)}</ul> : <p key={index}>{item}</p>)}</section>)}</article></main><Footer/></div>;
}
