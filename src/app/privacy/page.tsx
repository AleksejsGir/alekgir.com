'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Footer/Footer';
import { SEO_CONFIG } from '@/config/seo.config';

export default function PrivacyPolicy() {
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
                            <h1 className="heading-display mb-4">Privacy Policy</h1>
                            <p className="body-lg">
                                Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>

                        {/* Content */}
                        <div className="prose prose-invert prose-lg max-w-none space-y-8">

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    Welcome to {SEO_CONFIG.site.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href={SEO_CONFIG.site.url} className="text-primary hover:text-primary-light">{SEO_CONFIG.site.url}</a>.
                                </p>
                                <p className="text-text-secondary leading-relaxed mt-4">
                                    By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our website.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                                <p className="text-text-secondary leading-relaxed mb-4">
                                    We collect information that you voluntarily provide to us when you:
                                </p>
                                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                    <li>Fill out our contact form (name, email address, project details)</li>
                                    <li>Send us an email directly</li>
                                    <li>Interact with our website</li>
                                </ul>
                                <p className="text-text-secondary leading-relaxed mt-4">
                                    <strong className="text-white">Automatically Collected Information:</strong> When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. This is collected through Vercel Analytics for website performance monitoring.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                                <p className="text-text-secondary leading-relaxed mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Communicate with you about potential projects or collaborations</li>
                                    <li>Improve and optimize our website performance</li>
                                    <li>Analyze how visitors use our website</li>
                                    <li>Protect against fraudulent or illegal activity</li>
                                </ul>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Third Parties</h2>
                                <p className="text-text-secondary leading-relaxed mb-4">
                                    We may share your information with the following third-party service providers:
                                </p>
                                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                    <li><strong className="text-white">Vercel:</strong> Website hosting and analytics</li>
                                    <li><strong className="text-white">Resend:</strong> Email delivery service for contact form submissions</li>
                                </ul>
                                <p className="text-text-secondary leading-relaxed mt-4">
                                    These providers are bound by their own privacy policies and data protection obligations. We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    Our website uses minimal cookies necessary for functionality. Vercel Analytics collects anonymous, aggregated data about website usage. We do not use advertising cookies or third-party tracking cookies. You can disable cookies through your browser settings, though this may affect website functionality.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Contact form submissions are processed and not stored in a database beyond the email delivery.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights Under GDPR</h2>
                                <p className="text-text-secondary leading-relaxed mb-4">
                                    If you are a resident of the European Economic Area (EEA) or the United Kingdom, you have certain data protection rights under the General Data Protection Regulation (GDPR). These include the right to:
                                </p>
                                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                    <li>Access, update, or delete your personal information</li>
                                    <li>Rectify inaccurate or incomplete data</li>
                                    <li>Object to or restrict the processing of your personal data</li>
                                    <li>Request data portability</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                                <p className="text-text-secondary leading-relaxed mt-4">
                                    To exercise any of these rights, please contact us at <a href={`mailto:${SEO_CONFIG.contact.email}`} className="text-primary hover:text-primary-light">{SEO_CONFIG.contact.email}</a>.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">8. Security</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
                                </p>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    If you have questions or concerns about this Privacy Policy or our data practices, please contact:
                                </p>
                                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                    <p className="text-white font-bold">{SEO_CONFIG.site.author}</p>
                                    <p className="text-text-secondary">Email: <a href={`mailto:${SEO_CONFIG.contact.email}`} className="text-primary hover:text-primary-light">{SEO_CONFIG.contact.email}</a></p>
                                    <p className="text-text-secondary">Location: {SEO_CONFIG.location.region}, {SEO_CONFIG.location.country}</p>
                                </div>
                            </section>

                            <section className="card-base p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
                                </p>
                            </section>

                            <section className="card-base p-8 border-l-4 border-primary">
                                <h2 className="text-2xl font-bold text-white mb-4">11. StreamVox Privacy Addendum</h2>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    The following policies apply specifically to the usage of the StreamVox application, in compliance with Microsoft Store requirements.
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Microphone Usage</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            StreamVox requires access to your microphone to provide real-time speech-to-text and translation services.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Data Handling</h3>
                                        <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                            <li>Audio data is processed in real-time and sent to our transcription providers (Deepgram, Google Gemini) solely for the purpose of generating subtitles.</li>
                                            <li>We <strong>do not store</strong> your audio recordings on our servers.</li>
                                            <li>We <strong>do not share</strong> your voice data with third parties for marketing purposes.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
