import { motion } from "framer-motion";
import { fadeUpVariant } from "../lib/animations";

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto bg-white min-h-screen">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-8 tracking-tight text-on-surface">
          Privacy Policy
        </h1>
        <p className="text-on-surface-variant mb-8 text-sm">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="prose prose-lg prose-slate text-on-surface/80 max-w-none space-y-6">
          <p>
            Welcome to Oh My Hindustan (OMH). We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about our policy, or our practices with regards to your personal information, 
            please contact us.
          </p>

          <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4 font-headline">1. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us when registering at the OMH platform expressing an interest 
            in obtaining information about us or our products and services, when participating in activities on the platform 
            (such as posting news or stories as a citizen journalist) or otherwise contacting us.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Info Provided by You:</strong> We collect names; phone numbers; email addresses; usernames; passwords; contact preferences; and other similar information.</li>
            <li><strong>Content You Provide:</strong> As a journalism platform, any stories, media, articles, and posts you submit will be collected and associated with your account.</li>
            <li><strong>Payment Information:</strong> To process your 60% creator revenue share, we may collect necessary payment data through our secure payment processors.</li>
          </ul>

          <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4 font-headline">2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our platform for a variety of business purposes described below. 
            We process your personal information for these purposes in reliance on our legitimate business interests, 
            in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>To manage user accounts and send administrative information to you.</li>
            <li>To post citizen journalism stories securely and associate them with their rightful authors.</li>
            <li>To deliver targeted compensation (the 60% revenue share) to our creators.</li>
          </ul>

          <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4 font-headline">3. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, 
            to protect your rights, or to fulfill business obligations. Because OMH operates on a strict zero hidden algorithm policy, 
            we do not sell your personal data to third-party ad brokers to manipulate your feed.
          </p>

          <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4 font-headline">4. Use of Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. 
            Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
          </p>

          <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4 font-headline">5. How Long Do We Keep Your Information?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, 
            unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
          </p>

          <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4 font-headline">6. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at support@itsomh.com or by post to our corporate office.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
