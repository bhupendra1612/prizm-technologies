"use client";

import { FileText, Mail, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function TermsOfServicePage() {
    const lastUpdated = "January 3, 2026";

    return (
        <>
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-b from-dark to-dark/95 text-white relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal className="text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <FileText size={18} className="text-accent" />
                                <span className="text-sm font-medium">Legal</span>
                            </div>
                            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
                                Terms of <span className="text-gradient">Service</span>
                            </h1>
                            <p className="text-white/70 flex items-center justify-center gap-2">
                                <Calendar size={16} />
                                Last Updated: {lastUpdated}
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="prose prose-lg max-w-none text-gray-700">

                                {/* Introduction */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Introduction</h2>
                                    <p className="leading-relaxed">
                                        Welcome to Prizm Technologies. These Terms of Service (&quot;Terms&quot;) govern your use of our website <a href="https://prizmtechnologies.in" className="text-primary hover:underline">prizmtechnologies.in</a> and the digital marketing and development services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms.
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you should not use our website or services.
                                    </p>
                                </div>

                                {/* Services */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Our Services</h2>
                                    <p className="leading-relaxed">
                                        Prizm Technologies provides digital marketing and development services, including but not limited to:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>Custom Website Development (Next.js, Tailwind CSS, React)</li>
                                        <li>Mobile App Development (Android & iOS)</li>
                                        <li>SEO & Website Optimization</li>
                                        <li>WordPress to Custom Code Migration</li>
                                        <li>E-commerce Website Development</li>
                                        <li>UI/UX Design</li>
                                        <li>Website Maintenance & Support</li>
                                    </ul>
                                    <p className="leading-relaxed mt-4">
                                        The specific scope, deliverables, timeline, and pricing for each project will be outlined in a separate project proposal or agreement.
                                    </p>
                                </div>

                                {/* Client Responsibilities */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Client Responsibilities</h2>
                                    <p className="leading-relaxed">
                                        When engaging our services, you agree to:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>Provide accurate and complete information required for the project</li>
                                        <li>Respond to communications and requests for feedback in a timely manner</li>
                                        <li>Provide necessary access to accounts, hosting, or other resources as needed</li>
                                        <li>Review and approve deliverables within the agreed timeframe</li>
                                        <li>Make payments according to the agreed payment schedule</li>
                                        <li>Ensure that all content provided to us does not infringe on third-party rights</li>
                                    </ul>
                                </div>

                                {/* Payment Terms */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Payment Terms</h2>
                                    <p className="leading-relaxed">
                                        Payment terms will be specified in the project proposal or agreement. Generally:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>A deposit may be required before work begins</li>
                                        <li>Milestone payments may be scheduled throughout the project</li>
                                        <li>Final payment is due upon project completion and before final deliverables are released</li>
                                        <li>All prices are quoted in the currency specified in the proposal</li>
                                        <li>Late payments may result in project delays or suspension of services</li>
                                    </ul>
                                    <p className="leading-relaxed mt-4">
                                        We accept payments through bank transfer, PayPal, or other methods as agreed upon.
                                    </p>
                                </div>

                                {/* Intellectual Property */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Intellectual Property</h2>

                                    <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Client Materials</h3>
                                    <p className="leading-relaxed">
                                        You retain ownership of all content, materials, and intellectual property you provide to us for use in your project (logos, images, text, etc.).
                                    </p>

                                    <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Deliverables</h3>
                                    <p className="leading-relaxed">
                                        Upon full payment, you will own the final deliverables created specifically for your project. This includes custom code, designs, and other materials created exclusively for you.
                                    </p>

                                    <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Third-Party Components</h3>
                                    <p className="leading-relaxed">
                                        Projects may include third-party components (libraries, frameworks, plugins, stock images) that are subject to their own licenses. We will inform you of any such components and their licensing terms.
                                    </p>

                                    <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Portfolio Rights</h3>
                                    <p className="leading-relaxed">
                                        We reserve the right to display completed work in our portfolio and marketing materials unless otherwise agreed in writing.
                                    </p>
                                </div>

                                {/* Project Timeline */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Project Timeline & Revisions</h2>
                                    <p className="leading-relaxed">
                                        Project timelines are estimates based on the agreed scope of work. Delays may occur due to:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>Late feedback or approvals from the client</li>
                                        <li>Changes to project scope or requirements</li>
                                        <li>Delays in receiving required materials or access</li>
                                        <li>Unforeseen technical challenges</li>
                                    </ul>
                                    <p className="leading-relaxed mt-4">
                                        The number of revision rounds included in the project will be specified in the proposal. Additional revisions beyond the agreed scope may incur extra charges.
                                    </p>
                                </div>

                                {/* Confidentiality */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Confidentiality</h2>
                                    <p className="leading-relaxed">
                                        We respect the confidentiality of your business information. We will not disclose any confidential information shared with us during the course of our engagement to third parties without your consent, except as required by law.
                                    </p>
                                </div>

                                {/* Limitation of Liability */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Limitation of Liability</h2>
                                    <p className="leading-relaxed">
                                        To the maximum extent permitted by law:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>Our total liability for any claims arising from our services shall not exceed the total amount paid by you for the specific project</li>
                                        <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
                                        <li>We are not responsible for any loss of data, revenue, profits, or business opportunities</li>
                                        <li>We do not guarantee specific results from SEO or marketing services</li>
                                    </ul>
                                </div>

                                {/* Warranties & Disclaimers */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Warranties & Disclaimers</h2>
                                    <p className="leading-relaxed">
                                        We strive to deliver high-quality work that meets the agreed specifications. However:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>We do not guarantee that our services will be error-free or uninterrupted</li>
                                        <li>We are not responsible for issues caused by third-party services, hosting providers, or software</li>
                                        <li>Website performance may vary based on factors outside our control (hosting, traffic, etc.)</li>
                                        <li>We provide a reasonable warranty period for bug fixes after project completion, as specified in the proposal</li>
                                    </ul>
                                </div>

                                {/* Termination */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Termination</h2>
                                    <p className="leading-relaxed">
                                        Either party may terminate the engagement under the following conditions:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>By mutual written agreement</li>
                                        <li>If either party breaches these Terms and fails to remedy the breach within 14 days of written notice</li>
                                        <li>If the client fails to make payments as agreed</li>
                                    </ul>
                                    <p className="leading-relaxed mt-4">
                                        Upon termination, you will be responsible for payment for all work completed up to the termination date. Any deposits paid are non-refundable unless otherwise agreed.
                                    </p>
                                </div>

                                {/* Website Use */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Website Use</h2>
                                    <p className="leading-relaxed">
                                        When using our website, you agree not to:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>Use the website for any unlawful purpose</li>
                                        <li>Attempt to gain unauthorized access to any part of the website</li>
                                        <li>Interfere with or disrupt the website&apos;s functionality</li>
                                        <li>Copy, reproduce, or distribute any content without permission</li>
                                        <li>Submit false or misleading information through our forms</li>
                                    </ul>
                                </div>

                                {/* Governing Law */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Governing Law</h2>
                                    <p className="leading-relaxed">
                                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana, India.
                                    </p>
                                </div>

                                {/* Changes to Terms */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Changes to These Terms</h2>
                                    <p className="leading-relaxed">
                                        We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page with an updated &quot;Last Updated&quot; date. Your continued use of our website or services after any changes constitutes acceptance of the modified Terms.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Contact Us</h2>
                                    <p className="leading-relaxed mb-6">
                                        If you have any questions about these Terms of Service, please contact us:
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <Mail size={18} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Email</p>
                                                <a href="mailto:support@prizmtechnologies.in" className="text-primary hover:underline font-medium">
                                                    support@prizmtechnologies.in
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <MapPin size={18} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Address</p>
                                                <p className="font-medium text-dark">India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
