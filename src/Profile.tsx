function ProfileLink(props: { name: string; url: string }) {
  return (
    <a
      href={props.url}
      className="bg-gray-700 w-full p-3 rounded-lg font-bold text-sm motion-reduce:duration-0 duration-200 hover:bg-green-500 hover:text-black"
    >
      {props.name}
    </a>
  );
}

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 font-inter text-paragraph w-full md:w-[28rem] lg:w-96 text-white p-6 md:p-10 gap-6 text-center rounded-xl">
      <img src="/avatar-jessica.jpeg" alt="Jessica" className="rounded-full size-[5.5rem]" />
      <div>
        <h1 className="text-2xl">Jessica Randall</h1>
        <h2 className="text-sm text-green-500 font-bold">London, United Kingdom</h2>
      </div>
      <p className="text-sm">"Front-end developer and avid reader."</p>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <ProfileLink name="Github" url="https://github.com" />
        <ProfileLink name="Frontend Mentor" url="https://frontendmentor.io" />
        <ProfileLink name="LinkedIn" url="https://linkedin.com" />
        <ProfileLink name="Twitter" url="https://twitter.com" />
        <ProfileLink name="Instagram" url="https://instagram.com" />
      </div>
    </div>
  );
}
