import Hero from "@/components/Hero";
import PageWrapper from "@/components/animations/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = {
  title: "Terms of Service | Refracoat",
  description: "Refracoat's Terms of Service - Legal terms and conditions for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <PageWrapper className="min-h-screen bg-white">
      <Hero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our website or services."
      />

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <FadeIn direction="up">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 text-sm">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Refracoat ("Company," "we," "us," or "our") regarding your access to and use of our website located at www.refracoat.com (the "Website") and our services (collectively, the "Services").
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                By accessing or using our Website or Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Website or Services. These Terms apply to all visitors, users, and others who access or use the Website or Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Use of Website and Services</h2>
              
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Eligibility</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You must be at least 18 years old and have the legal capacity to enter into contracts to use our Services. By using our Services, you represent and warrant that you meet these eligibility requirements.
              </p>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Permitted Use</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You may use our Website and Services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Use the Website or Services in any way that violates any applicable local, national, or international law or regulation</li>
                <li>Transmit any material that is defamatory, obscene, offensive, or otherwise objectionable</li>
                <li>Attempt to gain unauthorized access to any portion of the Website, other accounts, computer systems, or networks</li>
                <li>Interfere with or disrupt the Website or Services, or servers or networks connected to the Website</li>
                <li>Use any robot, spider, or other automatic device to access the Website for any purpose without our express written permission</li>
                <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Website or Services without our express written permission</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Website and its original content, features, and functionality are owned by Refracoat and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws, including but not limited to Moroccan Law No. 2-00 on Copyright and Related Rights (Loi n° 2-00 relative aux droits d'auteur et droits voisins) and Law No. 17-97 on the Protection of Industrial Property (Loi n° 17-97 relative à la protection de la propriété industrielle). All trademarks, service marks, and trade names are proprietary to Refracoat or their respective owners.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You may not modify, reproduce, distribute, create derivative works, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website without our prior written consent, except as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                <li>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
                <li>You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Service Agreements</h2>
              
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Quotations and Proposals</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All quotations, proposals, and estimates provided by Refracoat constitute an offer (offre) under Moroccan contract law and are valid for the period specified in the quotation or, if no period is specified, for 30 days from the date of issue. Prices and specifications are subject to change without notice until a formal service agreement (contrat de prestation de services) is executed. Acceptance of a quotation must be made in writing to constitute a binding contract.
              </p>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Service Contracts</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All services provided by Refracoat are subject to a separate written service agreement or contract. The terms of such agreements will supersede these Terms with respect to the specific services covered. In the absence of a specific service agreement, these Terms shall apply.
              </p>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Payment Terms</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Payment terms will be specified in the applicable service agreement. Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Invoices are due within 30 days of the invoice date (net 30 payment terms)</li>
                <li>Late payments may incur interest charges at the legal rate as permitted by Article 245 of the Moroccan Code of Obligations and Contracts, calculated from the due date until payment is received</li>
                <li>We reserve the right to suspend or terminate services for non-payment after written notice and a grace period as specified in the service agreement</li>
                <li>All prices are quoted in Moroccan Dirhams (MAD) unless otherwise specified, and are exclusive of applicable taxes (TVA/TVA) unless stated otherwise</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">User Content and Submissions</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When you submit information, files, or other content through our Website (including contact forms, project descriptions, or specifications), you grant Refracoat a non-exclusive, worldwide, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, adapt, publish, translate, and distribute such content for the purpose of providing our Services and responding to your inquiries.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You own or have the necessary rights to submit the content</li>
                <li>The content does not infringe any third-party rights, including intellectual property rights</li>
                <li>The content is accurate and not misleading</li>
                <li>The content does not contain any confidential or proprietary information belonging to third parties without authorization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Disclaimers and Limitations of Liability</h2>
              
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Website Disclaimer</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The information on this Website is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>The accuracy, completeness, or reliability of any information on the Website</li>
                <li>The uninterrupted or error-free operation of the Website</li>
                <li>The absence of viruses, malware, or other harmful components</li>
                <li>The security of information transmitted through the Website</li>
              </ul>

              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 mt-8">Limitation of Liability</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To the maximum extent permitted by applicable law, Refracoat shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Your use or inability to use the Website or Services</li>
                <li>Any unauthorized access to or use of our servers or any personal information stored therein</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</li>
                <li>Any interruption or cessation of transmission to or from the Website</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our total liability to you for all claims arising from or related to the use of the Website or Services shall not exceed the amount you paid to us, if any, in the 12 months preceding the claim, or 1,000 MAD, whichever is greater.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Indemnification</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Refracoat, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your access to or use of the Website or Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party right, including any intellectual property or privacy right</li>
                <li>Any content you submit, post, or transmit through the Website</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Termination</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may terminate or suspend your access to the Website or Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Website and Services will immediately cease.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All provisions of these Terms that by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Morocco, including but not limited to the Moroccan Civil Code (Code des Obligations et des Contrats), the Commercial Code, and other applicable Moroccan legislation, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Any disputes arising out of or relating to these Terms or the Website or Services shall be subject to the exclusive jurisdiction of the competent courts of El Jadida, Morocco, in accordance with Article 27 of the Moroccan Code of Civil Procedure (Code de Procédure Civile).
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In the event of any dispute, the parties agree to attempt to resolve the matter amicably through negotiation before initiating legal proceedings. If such negotiation fails, the dispute shall be resolved through the competent courts as specified above.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Changes to Terms</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                By continuing to access or use our Website or Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the Website and Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Severability</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. The invalid or unenforceable provision will be replaced with a valid, enforceable provision that most closely matches the intent of the original provision.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Entire Agreement</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Refracoat regarding the use of the Website and Services and supersede all prior agreements and understandings, whether written or oral.
              </p>
            </section>

          </div>
        </FadeIn>
      </div>
    </PageWrapper>
  );
}

