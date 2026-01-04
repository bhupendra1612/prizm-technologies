"use client";

import { Shield, Mail, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPolicyPage() {
    const lastUpdated = "January 3, 2026";

    return (
        <>
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-b from-dark to-dark/95 text-white relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal className="text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <Shield size={18} className="text-accent" />
                                <span className="text-sm font-medium">Legal</span>
                            </div>
                            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
                                Privacy <span className="text-gradient">Policy</span>
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
                                        Welcome to Prizm Technologies (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://prizmtechnologies.in" className="text-primary hover:underline">prizmtechnologies.in</a> or engage with our digital marketing and development services.
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        By using our website or services, you agree to the collection and use of information in accordance with this policy.
                                    </p>
                                </div>

                                {/* Information We Collect */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Information We Collect</h2>

                                    <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Personal Information</h3>
                                    <p className="leading-relaxed">
                                        When you contact us through our website or engage our services, we may collect the following personal information:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Company name</li>
                                        <li>Project details and requirements</li>
                                        <li>Any other information you voluntarily provide through our contact forms</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Automatically Collected Information</h3>
                                    <p className="leading-relaxed">
                                        When you visit our website, we may automatically collect certain information about your device and browsing activity, including:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>IP address</li>
                                        <li>Browser type and version</li>
                                        <li>Operating system</li>
                                        <li>Pages visited and time spent on our website</li>
                                        <li>Referring website addresses</li>
                                    </ul>
                                </div>

                                {/* How We Use Your Information */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">How We Use Your Information</h2>
                                    <p className="leading-relaxed">
                                        We use the information we collect for the following purposes:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li>To respond to your inquiries and provide customer support</li>
                                        <li>To deliver the services you have requested</li>
                                        <li>To send you project updates and communications related to our services</li>
                                        <li>To improve our website and services</li>
                                        <li>To analyze website usage and trends</li>
                                        <li>To comply with legal obligations</li>
                                    </ul>
                                </div>

                                {/* Third-Party Services */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Third-Party Services</h2>
                                    <p className="leading-relaxed">
                                        We may use third-party services to help us operate our website and deliver our services. These services may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                                    </p>

                                    <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Form Submissions</h3>
                                    <p className="leading-relaxed">
                                        We use Formspree to process contact form submissions. When you submit a form on our website, your information is securely transmitted to our email. Please review <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Formspree&apos;s Privacy Policy</a> for more information.
                                    </p>

                                    <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Analytics (Future Implementation)</h3>
                                    <p className="leading-relaxed">
                                        In the future, we may implement analytics tools such as Google Analytics and Facebook Pixel to better understand how visitors interact with our website. When implemented, these tools will collect anonymous usage data to help us improve our services. We will update this policy accordingly when these tools are activated.
                                    </p>
                                </div>

                                {/* Cookies */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Cookies</h2>
                                    <p className="leading-relaxed">
                                        Currently, our website does not use cookies for tracking or advertising purposes. If we implement cookies in the future, we will update this Privacy Policy and provide you with appropriate notice and choices regarding their use.
                                    </p>
                                </div>

                                {/* Data Security */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Data Security</h2>
                                    <p className="leading-relaxed">
                                        We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                                    </p>
                                </div>

                                {/* Data Retention */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Data Retention</h2>
                                    <p className="leading-relaxed">
                                        We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When your information is no longer needed, we will securely delete or anonymize it.
                                    </p>
                                </div>

                                {/* Your Rights */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Your Rights</h2>
                                    <p className="leading-relaxed">
                                        Depending on your location, you may have certain rights regarding your personal information, including:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 space-y-2">
                                        <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
                                        <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
                                        <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
                                        <li><strong>Opt-out:</strong> You can opt out of receiving marketing communications from us at any time.</li>
                                    </ul>
                                    <p className="leading-relaxed mt-4">
                                        To exercise any of these rights, please contact us using the information provided below.
                                    </p>
                                </div>

                                {/* International Data Transfers */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">International Data Transfers</h2>
                                    <p className="leading-relaxed">
                                        As we serve clients globally (USA, UK, Europe, UAE, Australia, and other regions), your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                                    </p>
                                </div>

                                {/* Children's Privacy */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Children&apos;s Privacy</h2>
                                    <p className="leading-relaxed">
                                        Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete such information.
                                    </p>
                                </div>

                                {/* Changes to This Policy */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Changes to This Privacy Policy</h2>
                                    <p className="leading-relaxed">
                                        We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page with a new &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h2 className="text-2xl font-bold text-dark mb-4">Contact Us</h2>
                                    <p className="leading-relaxed mb-6">
                                        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
