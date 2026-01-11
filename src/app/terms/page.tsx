'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Footer/Footer';
import { SEO_CONFIG } from '@/config/seo.config';

export default function TermsOfService() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Header */}
                        <div className="mb-12">
                            <Link
                                href="/"
                                className="inline-flex items-center text-text-secondary hover:text-primary transition-colors mb-6"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Home
                            </Link>
                            <h1 className="heading-display mb-4">Terms of Service</h1>
                            <p className="body-lg">
                                Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>

                        {/* Content */}
                        <div className="prose prose-invert prose-lg max-w-none space-y-8">

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    By accessing and using the website {SEO_CONFIG.site.url} (the &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you do not have permission to access the Site.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    This website serves as a professional portfolio and point of contact for {SEO_CONFIG.site.author}, a Full-Stack Developer based in the United Kingdom. The Site showcases previous work, skills, and provides a means to initiate professional communication.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
                                <p className="text-text-secondary leading-relaxed mb-4">
                                    Unless otherwise indicated, the Site and all content, including but not limited to:
                                </p>
                                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                    <li>Text, graphics, logos, and images</li>
                                    <li>Design, layout, and visual elements</li>
                                    <li>Source code and software</li>
                                    <li>Audio, video, and multimedia content</li>
                                </ul>
                                <p className="text-text-secondary leading-relaxed mt-4">
                                    are the exclusive property of {SEO_CONFIG.site.author} and are protected by copyright, trademark, and other intellectual property laws of the United Kingdom and international conventions.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">4. Portfolio Content</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    The projects and work samples displayed on this Site are presented for demonstration purposes. Some projects may be owned by third-party clients and are displayed with appropriate permissions. The inclusion of any project does not constitute an offer of services or a guarantee of availability for similar work.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
                                <p className="text-text-secondary leading-relaxed mb-4">
                                    You agree not to use the Site in any way that:
                                </p>
                                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                    <li>Violates any applicable law or regulation</li>
                                    <li>Infringes upon the rights of others</li>
                                    <li>Attempts to gain unauthorized access to any part of the Site</li>
                                    <li>Interferes with the proper functioning of the Site</li>
                                    <li>Transmits malicious code, viruses, or harmful data</li>
                                    <li>Collects or harvests information about other users</li>
                                    <li>Sends unsolicited communications or spam</li>
                                </ul>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Form Submissions</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    When you submit information through our contact form, you agree that the information provided is accurate and that you have the right to share it. We reserve the right to decline any inquiry at our sole discretion. Submission of a contact form does not create a binding agreement or contract for services.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    THE SITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                                </p>
                                <p className="text-text-secondary leading-relaxed mt-4">
                                    To the fullest extent permitted by applicable law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    To the maximum extent permitted by law, in no event shall {SEO_CONFIG.site.author} be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) the Site.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">9. External Links</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    The Site may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any such content, goods, or services.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    You agree to defend, indemnify, and hold harmless {SEO_CONFIG.site.author} from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of and access to the Site or your violation of these Terms.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after any revisions become effective, you agree to be bound by the revised terms.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    If you have any questions about these Terms, please contact:
                                </p>
                                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                    <p className="text-white font-bold">{SEO_CONFIG.site.author}</p>
                                    <p className="text-text-secondary">Email: <a href={`mailto:${SEO_CONFIG.contact.email}`} className="text-primary hover:text-primary-light">{SEO_CONFIG.contact.email}</a></p>
                                    <p className="text-text-secondary">Location: {SEO_CONFIG.location.region}, {SEO_CONFIG.location.country}</p>
                                </div>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">14. Severability</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
                                </p>
                            </section>

                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
