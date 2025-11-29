import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
        const res = await fetch("https://dummyjson.com/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) throw new Error("Invalid credentials");

        const data = await res.json();

        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data));

        navigate("/home");
        } catch (err) {
        setError("Username atau password salah!");
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleLogin} className="w-[300px] flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Login</h1>

            <input
            type="text"
            placeholder="Username"
            className="border p-2"
            onChange={(e) => setUsername(e.target.value)}
            />

            <input
            type="password"
            placeholder="Password"
            className="border p-2"
            onChange={(e) => setPassword(e.target.value)}
            />

            <button
            type="submit"
            className="bg-black text-white p-2 cursor-pointer disabled:opacity-50"
            disabled={loading}
            >
            {loading ? "Logging in..." : "Login"}
            </button>

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
        </div>
        );
}