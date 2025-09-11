
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ResPass() {
//     const [showPopup, setShowPopup] = useState(false);
//     const navigate = useNavigate();

//     return (
//         <div className="relative flex items-center justify-center min-h-screen bg-gray-50">
//             {/* Негизги форма */}
//             <div className="z-10 flex max-w-[1015px] h-[795px] bg-white rounded-xl shadow-md overflow-hidden relative">
//                 {/* Сол сүрөттүү бөлүк */}
//                 <div
//                     className="w-[496px] bg-cover bg-center p-8 relative"
//                     style={{
//                         backgroundImage: "url('/img/bg.png')",
//                     }}
//                 >
//                     <p className="absolute top-6 left-6 text-gray-700 font-medium text-sm max-w-[200px] leading-relaxed">
//                         Don’t worry , We are <br /> here help you to <br /> recover your <br /> Password.
//                     </p>
//                 </div>

//                 {/* Оң форма бөлүгү */}
//                 <div className="w-[519px] p-10 bg-[#E9EFFD] flex flex-col justify-center text-center">
//                     <h2 className="text-[32px] font-bold mb-4">Reset Password</h2>
//                     <p className="text-gray-600 text-[16px] mb-6">
//                         Enter the email addresses or mobile <br /> number associated with your account.
//                     </p>

//                     <input
//                         type="text"
//                         placeholder="Enter Email or Mobile Number"
//                         className="w-[336px] ml-[50px] border border-gray-300 rounded-lg px-3 py-2 mb-4 text-sm focus:outline-none"
//                     />

//                     <button
//                         onClick={() => setShowPopup(true)}
//                         className="w-[336px] ml-[50px] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                     >
//                         CONTINUE
//                     </button>

//                     <p className="mt-4 text-sm text-gray-600 text-center">
//                         Return to{" "}
//                         <span
//                             onClick={() => navigate("/settings")}
//                             className="text-blue-600 hover:underline cursor-pointer"
//                         >
//                             Log in
//                         </span>
//                     </p>
//                 </div>
//             </div>

//             {/* Popup Overlay */}
//             {showPopup && (
//                 <>
//                     {/* Blur background */}
//                     <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-20" />

//                     {/* Popup window */}
//                     <div className="fixed inset-0 flex items-center justify-center z-30">
//                         <div className="bg-white w-[450px] rounded-xl shadow-lg relative px-6 py-8 text-center">
//                             {/* Close Icon */}
//                             <button
//                                 onClick={() => navigate("/settings")}
//                                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
//                             >
//                                 ×
//                             </button>

//                             {/* Check Icon */}
//                             <div className="flex items-center justify-center mb-4">
//                                 <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
//                                     <svg
//                                         className="w-6 h-6 text-white"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                                     </svg>
//                                 </div>
//                             </div>

//                             <h2 className="text-lg font-semibold mb-2">Link was sent</h2>
//                             <p className="text-gray-600 text-sm mb-6">
//                                 Please, check your inbox for a password reset link.
//                             </p>
//                             <button
//                                 onClick={() => navigate("/newpass")}
//                                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
//                             >
//                                 CONTINUE
//                             </button>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResPass() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/users");
      const users = await res.json();

      const found = users.find((user) => user.email === email.trim());

      if (found) {
        setShowPopup(true);
      } else {
        setError("This email does not exist in our database.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50">
      {/* Негизги форма */}
      <div className="z-10 flex max-w-[1015px] h-[795px] bg-white rounded-xl shadow-md overflow-hidden relative">
        {/* Сол сүрөт */}
        <div
          className="w-[496px] bg-cover bg-center p-8 relative"
          style={{
            backgroundImage: "url('/img/bg.png')",
          }}
        >
          <p className="absolute top-6 left-6 text-gray-700 font-medium text-sm max-w-[200px] leading-relaxed">
            Don’t worry, we are <br /> here to help you <br /> recover your password.
          </p>
        </div>

        {/* Оң форма */}
        <div className="w-[519px] p-10 bg-[#E9EFFD] flex flex-col justify-center text-center">
          <h2 className="text-[32px] font-bold mb-4">Reset Password</h2>
          <p className="text-gray-600 text-[16px] mb-6">
            Enter the email address associated with your account.
          </p>

          <input
            type="email"
            placeholder="Enter Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[336px] ml-[50px] border border-gray-300 rounded-lg px-3 py-2 mb-2 text-sm focus:outline-none"
          />

          {error && (
            <p className="text-red-600 text-sm mb-2 ml-[50px] text-left">{error}</p>
          )}

          <button
            onClick={handleContinue}
            disabled={!email || loading}
            className={`w-[336px] ml-[50px] py-2 rounded-lg font-medium transition ${
              email && !loading
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {loading ? "Checking..." : "CONTINUE"}
          </button>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Return to{" "}
            <span
              onClick={() => navigate("/settings")}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Log in
            </span>
          </p>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <>
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-20" />

          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white w-[450px] rounded-xl shadow-lg relative px-6 py-8 text-center">
              <button
                onClick={() => navigate("/settings")}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>

              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <h2 className="text-lg font-semibold mb-2">Link was sent</h2>
              <p className="text-gray-600 text-sm mb-6">
                Please, check your inbox for a password reset link.
              </p>
              <button
                onClick={() => navigate("/newpass")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
