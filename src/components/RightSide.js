import { loremIpsum } from "react-lorem-ipsum";

export default function RightSide() {
  
  return (
    <div className="text-wrapper">
      {loremIpsum({ p: 3 }).map((text,index) => (
      <div className="p-4 m-4 rounded-lg border border-zinc-500 dark:text-zinc-400 dark:bg-zinc-800 shadow-zinc-300 dark:shadow-zinc-600" key={index}>
        {text}
      </div>
    ))}
    </div>
  );
}
