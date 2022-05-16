import { useRecoilState } from "recoil";
import List from "../components/List";
import { theme } from "../store";

export default function Home() {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const defaultTheme = currentTheme === 'light' ? 'bg-white text-black' : 'bg-black text-white';
  return (
    <div className={`${defaultTheme} h-screen`}>
      <div className="container pt-16 mx-auto">
        <select name="" id="" value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <h1>You selected the {currentTheme} theme.</h1>
        <List />
      </div>
    </div>
  );
}
