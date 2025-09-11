import { useNavigate } from "react-router-dom";

export default function NewPass() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            {/* Негизги форма */}
            <div className="flex max-w-[1015px] h-[795px] bg-white rounded-xl shadow-md overflow-hidden relative">

                {/* Сол жактагы сүрөт + текст */}
                <div className="w-[496px]  bg-cover bg-center p-8"
                    style={{
                        backgroundImage: "url('/img/bg.png')",
                    }}>
                    <p className="absolute top-6 left-6 text-gray-700 font-medium text-sm max-w-[200px] leading-relaxed">
                        Don’t worry , We are <br /> here help you to <br /> recover your <br />Password.
                    </p>
                </div>

                {/* Оң жактагы форма */}
                <div className="w-[519px] p-10   bg-[#E9EFFD] flex flex-col justify-center">
                    <h2 className="text-[32px] font-bold mb-6">Confirm new Password</h2>

                    <label className="text-sm text-gray-700 mb-2">Enter a new Password</label>
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full w-[336px] h-[48px] border border-gray-300 rounded-lg px-3 py-2 mb-4 text-sm focus:outline-none"
                    />

                    <label className="text-sm text-gray-700 mb-2">Confirm New Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full w-[336px] h-[48px] border border-gray-300 rounded-lg px-3 py-2 mb-6 text-sm focus:outline-none"
                    />

                    <button
                        // onClick={() => navigate("/accountSettings")}
                        className="w-full w-[336px] h-[48px] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    );
}
