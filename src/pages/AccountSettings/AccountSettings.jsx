import { useState, useEffect } from 'react';
import {
  BsGoogle,
  BsFacebook,
  BsInstagram,
  BsLockFill,
  BsUnlock
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const AccountSettings = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // ⏪ Эгер remember me басылган болсо, сакталган emailди окуп ал
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Login failed');

      const data = await response.json();
      console.log('Login success:', data);

      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('refreshToken', data.refresh_token);

      // ✅ Remember Me сактоо
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      // ✅ Profile info
      const profileRes = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      });

      if (!profileRes.ok) throw new Error('Failed to fetch profile');

      const profile = await profileRes.json();
      console.log('User profile:', profile);

      // Example: navigate('/home');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4">
      <div className="flex flex-col md:flex-row max-w-[1015px] w-full shadow-lg rounded-lg overflow-hidden">

        {/* Left side */}
        <div
          className="hidden md:block"
          style={{
            width: '496px',
            height: '795px',
            backgroundImage: `url(/img/bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div className="absolute top-4 left-4 text-black text-[18px]  font-medium p-2 rounded">
            Welcome, Looks like <br /> you’re new here!
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center p-10 bg-[#E9EFFD] w-full max-w-[519px]">
          <h2 className="text-[40px] font-bold mb-2">Log In</h2>
          <p className="mb-6">
            New to Speak Up?{' '}
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </button>
          </p>

          <form onSubmit={handleSave} className="space-y-4">
            {/* Email input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your Email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 pr-10 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsUnlock /> : <BsLockFill />}
              </span>
            </div>

            {/* Remember me + forgot */}
            <div className="flex justify-between items-center text-sm mb-6">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                Remember Me
              </label>
              <button
                type="button"
                onClick={() => navigate('/respass')}
                className="text-gray-600 hover:text-blue-600"
              >
                Forget password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          {/* Social media */}
          <div className="mt-6 text-center text-gray-600 text-sm">
            Or continue with
            <div className="flex justify-center space-x-4 mt-2 text-xl">
              <span className="cursor-pointer hover:opacity-70"><BsGoogle /></span>
              <span className="cursor-pointer hover:opacity-70"><BsFacebook /></span>
              <span className="cursor-pointer hover:opacity-70"><BsInstagram /></span>
            </div>

            <p className="mt-4">
              Don’t have an Account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
