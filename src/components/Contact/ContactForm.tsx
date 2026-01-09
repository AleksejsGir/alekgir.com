'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ExclamationCircleIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { submitContactForm } from '@/lib/api';
import ProjectStyleCard from '@/components/shared/ui/ProjectStyleCard';
import {
  projectOptions,
  budgetOptions,
  projectTypeValues,
  budgetRangeValues
} from '@/data/contact-form';

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  projectType: z.enum(projectTypeValues),
  budgetRange: z.enum(budgetRangeValues),
  message: z.string().min(20, "Message must be at least 20 characters").max(2000),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Call actual backend API
      await submitContactForm(data);

      setIsSuccess(true);
      reset();

      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      // Handle API errors (e.g. validation error from backend or network issue)
      const errorMessage = err?.detail || err?.error || "Something went wrong. Please try again.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProjectStyleCard className="w-full h-full" contentClassName="p-6 md:p-10">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <AnimatePresence>
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <CheckCircleIcon className="w-12 h-12 text-emerald-400" />
            </div>
            <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Message Sent!</h3>
            <p className="text-lg text-text-secondary max-w-sm mx-auto">I&apos;ll get back to you within 24 hours to discuss your project.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-8 px-6 py-2 text-primary font-bold hover:text-white transition-colors border-b border-primary/30 hover:border-primary"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full gap-6 relative z-10">
            <h3 className="text-2xl font-black text-white mb-8 tracking-tight md:hidden">Send a Message</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wide ml-1">Name</label>
                <input
                  {...register('name')}
                  type="text"
                  className={clsx(
                    "w-full px-6 py-5 rounded-xl border outline-none transition-all duration-300 bg-white/[0.03] backdrop-blur-sm text-white placeholder:text-white/20",
                    "focus:bg-white/[0.05] focus:border-primary/50 focus:shadow-[0_0_20px_rgba(8,145,178,0.15)]",
                    errors.name ? "border-red-500/50 bg-red-500/5" : "border-primary/20 hover:border-primary/40"
                  )}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-2 text-xs font-bold text-red-400 flex items-center ml-1"><ExclamationCircleIcon className="w-4 h-4 mr-1" />{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wide ml-1">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  className={clsx(
                    "w-full px-6 py-5 rounded-xl border outline-none transition-all duration-300 bg-white/[0.03] backdrop-blur-sm text-white placeholder:text-white/20",
                    "focus:bg-white/[0.05] focus:border-primary/50 focus:shadow-[0_0_20px_rgba(8,145,178,0.15)]",
                    errors.email ? "border-red-500/50 bg-red-500/5" : "border-primary/20 hover:border-primary/40"
                  )}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-2 text-xs font-bold text-red-400 flex items-center ml-1"><ExclamationCircleIcon className="w-4 h-4 mr-1" />{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wide ml-1">Project Type</label>
                <select
                  {...register('projectType')}
                  className={clsx(
                    "w-full px-6 py-5 rounded-xl border outline-none transition-all appearance-none bg-no-repeat bg-white/[0.03] backdrop-blur-sm text-white",
                    "focus:bg-white/[0.05] focus:border-primary/50 focus:shadow-[0_0_20px_rgba(8,145,178,0.15)]",
                    errors.projectType ? "border-red-500/50 bg-red-500/5" : "border-primary/20 hover:border-primary/40"
                  )}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a1a1aa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundSize: `1.5em 1.5em` }}
                >
                  <option value="" className="bg-surface-light text-text-muted">Select a project type...</option>
                  {projectOptions.map(opt => (
                    <option key={opt.value} value={opt.value} className="bg-surface-light text-white">{opt.label}</option>
                  ))}
                </select>
                {errors.projectType && <p className="mt-2 text-xs font-bold text-red-400 flex items-center ml-1"><ExclamationCircleIcon className="w-4 h-4 mr-1" />{errors.projectType.message}</p>}
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budgetRange" className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wide ml-1">Budget Range</label>
                <select
                  {...register('budgetRange')}
                  className={clsx(
                    "w-full px-6 py-5 rounded-xl border outline-none transition-all appearance-none bg-no-repeat bg-white/[0.03] backdrop-blur-sm text-white",
                    "focus:bg-white/[0.05] focus:border-primary/50 focus:shadow-[0_0_20px_rgba(8,145,178,0.15)]",
                    errors.budgetRange ? "border-red-500/50 bg-red-500/5" : "border-primary/20 hover:border-primary/40"
                  )}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a1a1aa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundSize: `1.5em 1.5em` }}
                >
                  <option value="" className="bg-surface-light text-text-muted">Select a budget range...</option>
                  {budgetOptions.map(opt => (
                    <option key={opt.value} value={opt.value} className="bg-surface-light text-white">{opt.label}</option>
                  ))}
                </select>
                {errors.budgetRange && <p className="mt-2 text-xs font-bold text-red-400 flex items-center ml-1"><ExclamationCircleIcon className="w-4 h-4 mr-1" />{errors.budgetRange.message}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col flex-grow min-h-[200px]">
              <label htmlFor="message" className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wide ml-1">Message</label>
              <textarea
                {...register('message')}
                className={clsx(
                  "w-full h-full px-6 py-5 rounded-xl border outline-none transition-all resize-none bg-white/[0.03] backdrop-blur-sm text-white placeholder:text-white/20",
                  "focus:bg-white/[0.05] focus:border-primary/50 focus:shadow-[0_0_20px_rgba(8,145,178,0.15)]",
                  errors.message ? "border-red-500/50 bg-red-500/5" : "border-primary/20 hover:border-primary/40"
                )}
                placeholder="Tell me about your project goals, timeline, and requirements..."
              />
              {errors.message && <p className="mt-2 text-xs font-bold text-red-400 flex items-center ml-1"><ExclamationCircleIcon className="w-4 h-4 mr-1" />{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gradient-to-r from-primary to-primary-light rounded-xl font-black text-lg text-white shadow-[0_0_25px_rgba(8,145,178,0.4)] hover:shadow-[0_0_40px_rgba(8,145,178,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-70 disabled:grayscale border border-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message
                  <PaperAirplaneIcon className="w-6 h-6 ml-2 -rotate-45 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </motion.button>

            {error && (
              <div className="p-4 bg-red-500/10 text-red-400 rounded-xl flex items-center border border-red-500/20 text-sm font-medium">
                <ExclamationCircleIcon className="w-5 h-5 mr-2 shrink-0" />
                {error}
              </div>
            )}
          </form>
        )}
      </AnimatePresence>
    </ProjectStyleCard>
  );
}