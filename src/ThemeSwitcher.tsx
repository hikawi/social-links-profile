export default function ThemeSwitcher(props: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
  return (
    <button
      className="absolute bottom-4 z-10 bg-gray-200 dark:bg-gray-700 w-full md:w-fit dark:text-white p-3 rounded-lg font-bold text-sm motion-reduce:duration-0 duration-200 hover:bg-lime-600 hover:text-white dark:hover:bg-green-500 dark:hover:text-black"
      onClick={() => props.setDarkMode(!props.darkMode)}
    >
      {props.darkMode ? "Light mode" : "Dark mode"}
    </button>
  );
}
