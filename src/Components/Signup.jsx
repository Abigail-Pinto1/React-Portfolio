import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, CheckCircle, ArrowRight } from "lucide-react";


export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  });
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const markTouched = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const emailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email), [form.email]);

  const passwordScore = useMemo(() => {
    // Simple strength check: length + mix of chars
    let score = 0;
    if (form.password.length >= 8) score++;
    if (/[A-Z]/.test(form.password)) score++;
    if (/[a-z]/.test(form.password)) score++;
    if (/[0-9]/.test(form.password)) score++;
    if (/[^A-Za-z0-9]/.test(form.password)) score++;
    return score; // 0 - 5
  }, [form.password]);

  const passwordMatch = form.password && form.password === form.confirm;

  const canSubmit =
    form.name.trim().length > 1 &&
    emailValid &&
    passwordScore >= 3 &&
    passwordMatch &&
    form.agree &&
    !submitting;

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, confirm: true, agree: true });
    if (!canSubmit) return;

    try {
      setSubmitting(true);
      setMessage(null);
      // Replace with your API call
      await new Promise((res) => setTimeout(res, 900));
      setMessage({ type: "success", text: "Account created! Redirecting..." });
    } catch (err) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const strengthLabel = ["Very weak", "Weak", "Okay", "Good", "Strong", "Excellent"][passwordScore];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-200 via-pink-100 to-indigo-100 dark:from-[#0f0a1f] dark:via-[#150b2e] dark:to-[#0b1022]" />
      <div className="absolute -top-48 -right-48 h-96 w-96 rounded-full blur-3xl opacity-40 bg-fuchsia-400/40" />
      <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full blur-3xl opacity-40 bg-indigo-400/40" />

      {/* Container */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: Marketing copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-white/10 dark:text-white/90">
              <CheckCircle className="h-3.5 w-3.5" />
              Join our community
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              Create your account
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
              Sign up to sync across devices, unlock pro features, and get updates. It's fast, secure, and free.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-200">
              {[
                "Real-time syncing across devices",
                "Private & secure — you control your data",
                "Export/import tasks anytime",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow">
                    <CheckCircle className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="order-1 lg:order-2"
          >
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-white/10 dark:ring-white/10">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 p-[2px]">
                  <div className="h-full w-full rounded-2xl bg-white/90 p-2 dark:bg-white/10" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Sign up</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">Start your journey in seconds</p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      onChange={onChange}
                      onBlur={markTouched}
                      value={form.name}
                      className="w-full rounded-xl border border-gray-200 bg-white/70 px-10 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none ring-2 ring-transparent transition focus:border-transparent focus:ring-fuchsia-500/30 dark:border-white/20 dark:bg-white/5 dark:text-white"
                      placeholder="Ada Lovelace"
                    />
                  </div>
                  {touched.name && form.name.trim().length <= 1 && (
                    <p className="mt-1 text-xs text-rose-600">Please enter your name.</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={onChange}
                      onBlur={markTouched}
                      value={form.email}
                      className="w-full rounded-xl border border-gray-200 bg-white/70 px-10 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none ring-2 ring-transparent transition focus:border-transparent focus:ring-fuchsia-500/30 dark:border-white/20 dark:bg-white/5 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                  {touched.email && !emailValid && (
                    <p className="mt-1 text-xs text-rose-600">Enter a valid email address.</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPw ? "text" : "password"}
                      autoComplete="new-password"
                      onChange={onChange}
                      onBlur={markTouched}
                      value={form.password}
                      className="w-full rounded-xl border border-gray-200 bg-white/70 px-10 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none ring-2 ring-transparent transition focus:border-transparent focus:ring-fuchsia-500/30 dark:border-white/20 dark:bg-white/5 dark:text-white"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((s) => !s)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/30 dark:hover:bg-white/10 dark:text-gray-300"
                      aria-label={showPw ? "Hide password" : "Show password"}
                    >
                      {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {/* Strength meter */}
                  <div className="mt-2">
                    <div className="flex h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-full flex-1 transition-all ${
                            i < passwordScore ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500" : "bg-transparent"
                          } ${i < 4 ? "mr-0.5" : ""}`}
                        />
                      ))}
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-300">{strengthLabel}</div>
                  </div>
                  {touched.password && passwordScore < 3 && (
                    <p className="mt-1 text-xs text-rose-600">Use at least 8 characters with a mix of letters, numbers, and a symbol.</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirm" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Confirm password
                  </label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      id="confirm"
                      name="confirm"
                      type={showPw2 ? "text" : "password"}
                      autoComplete="new-password"
                      onChange={onChange}
                      onBlur={markTouched}
                      value={form.confirm}
                      className="w-full rounded-xl border border-gray-200 bg-white/70 px-10 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none ring-2 ring-transparent transition focus:border-transparent focus:ring-fuchsia-500/30 dark:border-white/20 dark:bg-white/5 dark:text-white"
                      placeholder="Repeat password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw2((s) => !s)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/30 dark:hover:bg-white/10 dark:text-gray-300"
                      aria-label={showPw2 ? "Hide password" : "Show password"}
                    >
                      {showPw2 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {touched.confirm && !passwordMatch && (
                    <p className="mt-1 text-xs text-rose-600">Passwords do not match.</p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={form.agree}
                    onChange={onChange}
                    onBlur={markTouched}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-fuchsia-500"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-700 dark:text-gray-200">
                    I agree to the <a className="underline decoration-fuchsia-400 decoration-2 underline-offset-2 hover:text-fuchsia-600" href="#">Terms</a> and <a className="underline decoration-fuchsia-400 decoration-2 underline-offset-2 hover:text-fuchsia-600" href="#">Privacy Policy</a>.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/20 transition hover:from-fuchsia-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <div className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Creating account...
                    </div>
                  ) : (
                    <>
                      Create account
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
                  <span className="text-xs text-gray-500">or</span>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
                </div>

                {/* Socials (UI only) */}
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" className="rounded-xl border border-gray-200 bg-white/70 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                    Continue with Google
                  </button>
                  <button type="button" className="rounded-xl border border-gray-200 bg-white/70 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                    Continue with GitHub
                  </button>
                </div>

                {message && (
                  <div
                    className={`rounded-xl p-3 text-sm ${
                      message.type === "success"
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/30"
                        : "bg-rose-50 text-rose-700 ring-1 ring-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-500/30"
                    }`}
                  >
                    {message.text}
                  </div>
                )}
              </form>

              {/* Footer */}
              <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-300">
                Already have an account? <a href="#" className="font-medium text-fuchsia-700 underline decoration-fuchsia-400 decoration-2 underline-offset-2 hover:text-fuchsia-600">Sign in</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
