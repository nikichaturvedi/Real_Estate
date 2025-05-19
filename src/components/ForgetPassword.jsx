'use client';

import Link from 'next/link';
import {
  FaEnvelope,
  FaKey,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
      setMessage('');
      setTimeout(() => {
        setShowPopup(false);
        setStep(2);
      }, 2000);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      setStep(3);
      setMessage('');
    } else {
      setMessage('Invalid OTP. Please try again.');
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    setMessage('Password successfully reset.');
    setStep(1);
    setEmail('');
    setOtp('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const fadeVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  const isSuccess = message.toLowerCase().includes('success');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-6 transition-all duration-300">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Forgot Password?</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          {step === 1 && 'Enter your email to receive an OTP.'}
          {step === 2 && 'Enter the OTP sent to your email.'}
          {step === 3 && 'Set a new password.'}
        </p>

        {message && (
          <div
            className={`mb-4 flex items-center gap-2 justify-center text-sm text-center ${
              isSuccess ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {isSuccess ? (
              <FaCheckCircle className="text-green-600 text-lg" />
            ) : (
              <FaTimesCircle className="text-red-500 text-lg" />
            )}
            <span>{message}</span>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.form
              key="step1"
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleEmailSubmit}
              className="space-y-4"
            >
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4270a5] transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#527baa] text-white py-2 rounded-full hover:bg-[#406192] transition font-semibold"
              >
                Send Reset Link
              </button>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleOtpSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full text-center focus:outline-none focus:ring-2 focus:ring-[#4270a5]"
              />
              <button
                type="submit"
                className="w-full bg-[#527baa] text-white py-2 rounded-full hover:bg-[#406192] transition font-semibold"
              >
                Verify OTP
              </button>
            </motion.form>
          )}

          {step === 3 && (
            <motion.form
              key="step3"
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handlePasswordReset}
              className="space-y-4"
            >
              <div className="relative">
                <FaKey className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4270a5]"
                />
              </div>
              <div className="relative">
                <FaKey className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4270a5]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#4270a5] text-white py-2 rounded-full hover:bg-[#355c88] transition font-semibold"
              >
                Reset Password
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="text-sm text-center text-gray-600 mt-6">
          Remember your password?{' '}
          <Link href="/LogIn" className="text-[#4270a5] hover:underline font-medium">
            Go back to login
          </Link>
        </p>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-72">
              <FaCheckCircle className="text-green-500 text-3xl mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-[#4270a5]">OTP Sent</h3>
              <p className="text-sm text-gray-600">An OTP has been sent to your email.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
