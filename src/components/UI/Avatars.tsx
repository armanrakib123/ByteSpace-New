
const avatars = [
  "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
  "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  "https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp",
  "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
  "https://img.daisyui.com/images/profile/demo/distracted2@192.webp",
];

export default function Avatars() {
  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <div
          key={avatar}
          className={`relative h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-gray-200 ${
            index ? "-ml-[7px]" : ""
          }`}
        >
          <img
            src={avatar}
            alt={`Avatar ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <span className="relative -ml-[7px] flex h-6 min-w-[29px] items-center justify-center rounded-full border-2 border-white bg-[#C7FF00] px-1 text-[7px] font-bold">
        26+
      </span>
    </div>
  );
}