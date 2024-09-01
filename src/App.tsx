import Profile from "./Profile";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(false);
    }
  }, []);

  return (
    <main className={`flex items-center justify-center flex-col h-screen w-full dark:bg-gray-900 p-6 ${darkMode ? "dark" : ""} gap-3`}>
      <Profile />
      <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
    </main>
  );
}

export default App;
