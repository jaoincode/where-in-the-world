import { AiFillGithub } from "react-icons/ai";

function Social() {
  return (
    <a
      href="https://github.com/jaoincode"
      target="_blank"
      className="fixed bottom-5 left-5 w-10 h-10 bg-white rounded-full z-50 shadow-lg"
    >
      <AiFillGithub className="w-full h-full" />
    </a>
  );
}

export default Social;
