import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup forms
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility (for signup)
  const [password, setPassword] = useState(''); // To track the password input
  const [confirmPassword, setConfirmPassword] = useState(''); // To track the confirm password input

  // Password validation rules
  const passwordRules = {
    minLength: password.length >= 8,
    hasLowerCase: /[a-z]/.test(password),
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
  };

  const isPasswordValid =
    passwordRules.minLength && passwordRules.hasLowerCase && passwordRules.hasUpperCase && passwordRules.hasNumber;

  if (!isOpen) return null; // If modal is not open, do not render anything

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-neutral-900 text-white rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose} // Callback to close the modal
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {isLogin ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Login</h2>
            <form className="space-y-4">
              <div>
                {/* Email field for login */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-100"
                />
              </div>
              <div className="relative">
                {/* Password field for login with visibility toggle */}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-full"
              >
                Login
              </button>
            </form>
            <div className="text-center">
              <button 
                className="text-white-600 hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Need help to create? Signup
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Signup</h2>
            <form className="space-y-4">
              <div>
                {/* Email field for signup */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                />
              </div>
              <div className="relative">
                {/* Password field for signup with visibility toggle */}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="relative">
                {/* Confirm password field for signup with visibility toggle */}
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle confirm password visibility
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <ul className="space-y-1 text-sm">
                <li className={passwordRules.minLength ? "text-green-500" : "text-red-500"}>
                  {passwordRules.minLength ? '✓ At least 8 characters' : '✗ At least 8 characters'}
                </li>
                <li className={passwordRules.hasLowerCase ? "text-green-500" : "text-red-500"}>
                  {passwordRules.hasLowerCase ? '✓ Contains lowercase letters' : '✗ Contains lowercase letters'}
                </li>
                <li className={passwordRules.hasUpperCase ? "text-green-500" : "text-red-500"}>
                  {passwordRules.hasUpperCase ? '✓ Contains uppercase letters' : '✗ Contains uppercase letters'}
                </li>
                <li className={passwordRules.hasNumber ? "text-green-500" : "text-red-500"}>
                  {passwordRules.hasNumber ? '✓ Contains numbers' : '✗ Contains numbers'}
                </li>
              </ul>
              <button
                type="submit"
                disabled={!isPasswordValid || confirmPassword !== password} // Disable button if password is not valid or passwords don't match
                className={`w-full ${isPasswordValid && confirmPassword === password ? 'bg-black' : 'bg-gray-500'} text-white py-2 rounded-lg`}
              >
                Create Account
              </button>
            </form>
            <div className="text-center">
              <button 
                className="text-white-600 hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Already have an account? Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
