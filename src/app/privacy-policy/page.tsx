import Hero from "@/components/Hero";
import PageWrapper from "@/components/animations/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = {
  title: "Privacy Policy | Refracoat",
  description: "Refracoat's Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper className="min-h-screen bg-white">
      <Hero
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
      />

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <FadeIn direction="up">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 text-sm">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Data Protection Statement</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Refracoat ("we," "our," or "us") acts as a data controller and is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. This policy complies with applicable data protection laws, including Law No. 09-08 relating to the protection of individuals with regard to the processing of personal data (Loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel), enacted on February 18, 2009, and enforced by the Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel (CNDP).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Information Collection</h2>
              
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Categories of Personal Data Collected</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In accordance with Law No. 09-08, we collect the following categories of personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Identification Data:</strong> Name, email address, phone number, company name, and company identification number (ICE - Identifiant Commun de l'Entreprise)</li>
                <li><strong>Business and Professional Data:</strong> Company details, industry sector, project location, service requirements, and professional contact information</li>
                <li><strong>Communication Data:</strong> Messages, project descriptions, specifications, and any files you upload through our contact forms</li>
                <li><strong>Technical and Usage Data:</strong> IP address, browser type, device information, operating system, referral URLs, pages viewed, time spent on pages, and website usage data collected through cookies and analytics tools</li>
                <li><strong>Contractual Data:</strong> Information related to service agreements, quotations, invoices, and payment information</li>
              </ul>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Purpose of Collection</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We collect your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To process and manage project quotations and service requests</li>
                <li>To communicate with you about our services, projects, and business updates</li>
                <li>To improve our website functionality and user experience</li>
                <li>To comply with legal obligations and regulatory requirements</li>
                <li>To protect our legal rights and prevent fraud</li>
              </ul>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Legal Basis for Processing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As a data controller, we process your personal data based on the following legal grounds as defined in Law No. 09-08:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Explicit Consent:</strong> When you voluntarily provide information through our contact forms, you provide explicit consent for processing as required under Article 3 of Law No. 09-08</li>
                <li><strong>Contractual Necessity:</strong> To fulfill our obligations under service agreements and contracts</li>
                <li><strong>Legitimate Interests:</strong> To operate our business, improve our services, and maintain website security, provided such processing does not override your fundamental rights and freedoms</li>
                <li><strong>Legal Compliance:</strong> To meet our legal and regulatory obligations under Moroccan law</li>
                <li><strong>Public Interest:</strong> When processing is necessary for the performance of a task carried out in the public interest</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Information Use</h2>
              
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">How We Use Your Information</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your inquiries and service requests</li>
                <li>Send you technical information, project updates, and business communications</li>
                <li>Analyze website usage and trends to enhance user experience</li>
                <li>Ensure website security and prevent unauthorized access</li>
              </ul>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Data Retention Periods</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Specifically:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Contact Form Submissions:</strong> Retained for 3 years from the date of submission, unless you request earlier deletion</li>
                <li><strong>Marketing Communications:</strong> Retained until you opt-out or request deletion</li>
                <li><strong>Technical Data:</strong> Retained for up to 2 years for analytics and security purposes</li>
              </ul>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Third-Party Sharing and Data Processors</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Data Processors:</strong> With trusted third-party data processors who assist in operating our website and conducting business (e.g., hosting, email services, analytics), subject to strict data processing agreements that ensure compliance with Law No. 09-08 and CNDP requirements</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation, including requests from the CNDP or other competent authorities</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with prior notice to affected data subjects as required by law</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our clients and employees</li>
              </ul>
              <h4 className="font-display text-xl font-bold mb-3 text-gray-900 mt-6">Cross-Border Data Transfers</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In accordance with Law No. 09-08, any transfer of personal data outside the Kingdom of Morocco requires authorization from the CNDP, particularly if the destination country lacks adequate data protection measures. We will obtain such authorization when necessary and implement appropriate safeguards to protect your data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Data Security</h2>
              
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Technical and Organizational Security Measures</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In accordance with Article 6 of Law No. 09-08, we implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission (HTTPS) and encryption at rest for stored data</li>
                <li><strong>Access Controls:</strong> Secure server infrastructure with role-based access controls and authentication mechanisms</li>
                <li><strong>Security Assessments:</strong> Regular security audits, vulnerability assessments, and penetration testing</li>
                <li><strong>Data Minimization:</strong> Limited access to personal data on a need-to-know basis and principle of least privilege</li>
                <li><strong>Staff Training:</strong> Employee training on data protection, privacy, and compliance with Law No. 09-08 and CNDP guidelines</li>
                <li><strong>Incident Response:</strong> Procedures for detecting, reporting, and responding to personal data breaches in accordance with CNDP requirements</li>
              </ul>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Data Breach Notification</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In the event of a personal data breach that is likely to result in a high risk to your rights and freedoms, we will notify you and the CNDP without undue delay, in accordance with Law No. 09-08. The notification will include information about the nature of the breach, the categories of data affected, and the measures taken to address it.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                While we strive to protect your personal information using industry-standard technical and organizational measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining compliance with Law No. 09-08 and CNDP requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Data Subject Rights</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Under Law No. 09-08 and as enforced by the CNDP, you, as a data subject, have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Right of Access (Article 7):</strong> Request a copy of the personal data we hold about you, including information about the purposes of processing, categories of data, and recipients</li>
                <li><strong>Right to Rectification (Article 8):</strong> Request correction of inaccurate or incomplete personal data</li>
                <li><strong>Right to Erasure (Right to be Forgotten):</strong> Request deletion of your personal data under certain circumstances, including when data is no longer necessary for the purposes for which it was collected</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your data, particularly when the accuracy of the data is contested or processing is unlawful</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data in a structured, commonly used format to another data controller</li>
                <li><strong>Right to Object (Article 9):</strong> Object to processing of your data for legitimate interests or direct marketing purposes</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent, without affecting the lawfulness of processing based on consent before its withdrawal</li>
                <li><strong>Right to Lodge a Complaint:</strong> File a complaint with the CNDP if you believe your data protection rights have been violated</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To exercise any of these rights, please contact us through our contact page. We will respond to your request within 30 days as required by Law No. 09-08. If you are not satisfied with our response, you have the right to lodge a complaint with the CNDP.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Cookies and Tracking Technologies</h2>
              
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Cookie Usage</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. Cookies are small text files stored on your device when you visit our website.
              </p>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              </ul>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Managing Cookies</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. However, disabling certain cookies may affect website functionality. For more information, please refer to your browser's help documentation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Policy Updates</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Posting the updated policy on this page with a new "Last Updated" date</li>
                <li>Sending an email notification to registered users (if applicable)</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </section>

          </div>
        </FadeIn>
      </div>
    </PageWrapper>
  );
}

