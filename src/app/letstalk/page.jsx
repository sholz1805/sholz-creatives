"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MailOpen, MapPin, PhoneCall } from "lucide-react";
import { useSearchParams } from "next/navigation";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  useEffect(() => {
    const packageType = searchParams.get("type");
    const selectedPackage = searchParams.get("package");

    if (!selectedPackage) return;

    const serviceLabel =
      packageType === "branding"
        ? "brand-identity"
        : packageType === "event"
          ? "campaign"
          : packageType === "website"
            ? "website"
              : packageType === "social-content"
                ? "social-content"
          : "";

    setFormData((prev) => ({
      ...prev,
      service: prev.service || serviceLabel,
      message:
        prev.message ||
        `Interested package: ${selectedPackage}\nProject summary: `,
    }));
  }, [searchParams]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: "", message: "" });

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Unable to send message.");
        }

        setSubmitState({ type: "success", message: data.message });
        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        });
      })
      .catch((err) => {
        setSubmitState({
          type: "error",
          message: err.message || "Unable to send message right now.",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="brand-gradient min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-violet-200">Contact</p>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Book a strategy call.</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Share your goals and project scope. We will respond with the right next step within 24 to 48 hours.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(15,23,42,0.35)] lg:flex lg:items-stretch">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="brand-gradient p-6 text-white lg:w-1/3 lg:p-8"
          >
            <motion.div variants={itemVariants} className="mb-8 flex items-center">
              <div className="rounded-xl bg-white/5 p-4">
                <MapPin className="h-7 w-7 text-violet-200" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-white">Office</h3>
                <p className="text-slate-300">Lagos, Nigeria</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8 flex items-center">
              <div className="rounded-xl bg-white/5 p-4">
                <PhoneCall className="h-7 w-7 text-violet-200" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-slate-300">+2348086101156</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center">
              <div className="rounded-xl bg-white/5 p-4">
                <MailOpen className="h-7 w-7 text-violet-200" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-slate-300">sholzcreative@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 lg:w-2/3 lg:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {submitState.message && (
              <div
                className={`mb-5 rounded-xl px-4 py-3 text-sm ${
                  submitState.type === "success"
                    ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {submitState.message}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="block h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-gray-900 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-slate-700">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="block h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-gray-900 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm text-slate-700">
                  Service
                </label>
                <select
                  id="service"
                  required
                  className="block h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-gray-900 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="" className="text-gray-900">Select Service</option>
                  <option value="brand-identity" className="text-gray-900">Brand Identity</option>
                  <option value="website" className="text-gray-900">Website Design and Development</option>
                  <option value="social-content" className="text-gray-900">Social Content System</option>
                  <option value="campaign" className="text-gray-900">Campaign Assets</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="mb-1.5 block text-sm text-slate-700">
                  Budget Range
                </label>
                <select
                  id="budget"
                  required
                  className="block h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-gray-900 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="" className="text-gray-900">Budget Range</option>
                  <option value="under-1000" className="text-gray-900">Under $1,000</option>
                  <option value="1000-3000" className="text-gray-900">$1,000 - $3,000</option>
                  <option value="3000-7000" className="text-gray-900">$3,000 - $7,000</option>
                  <option value="7000-plus" className="text-gray-900">$7,000+</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="timeline" className="mb-1.5 block text-sm text-slate-700">
                  Timeline
                </label>
                <select
                  id="timeline"
                  required
                  className="block h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-gray-900 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                >
                  <option value="" className="text-gray-900">Timeline</option>
                  <option value="asap" className="text-gray-900">ASAP (1-2 weeks)</option>
                  <option value="month" className="text-gray-900">This month</option>
                  <option value="quarter" className="text-gray-900">Within this quarter</option>
                  <option value="exploring" className="text-gray-900">Just exploring</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm text-slate-700">
                  Project Goals and Current Challenge
                </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  className="block w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-gray-900 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="sm:col-span-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-brand-purple to-[#6428b7] px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:brightness-110 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    </div>
                  ) : (
                    "Send Project Brief"
                  )}
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
