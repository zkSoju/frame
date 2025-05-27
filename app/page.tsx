import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="relative z-10 flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-start p-4">
          <p className="mb-6 text-8xl font-medium tracking-tighter text-white">
            frame
          </p>
          <a
            href="https://github.com/zkSoju/frame"
            target="_blank"
            className="group flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-lg transition duration-300 hover:border-white/20 hover:bg-white/10"
            rel="noreferrer"
          >
            <FaGithub className="text-lg" />
            <span>Use this template</span>
          </a>
        </div>
      </div>
    </div>
  );
}
