export default function PreviewTest(config?: any) {
  return (
    <div className="text-zinc-200 gap-4 md:gap-8 h-full flex flex-col mb-4 md:mb-8 lg:mb-10 pb-4 md:pb-8 lg:pb-10 w-full">
      <div className="w-full max-w-xl">
        <div className="text-xs text-zinc-400 uppercase mb-2">
          Google
        </div>
        <div className="w-full p-4 border border-zinc-800 rounded overflow-hidden">
          <div className="text-base text-[#99c3ff]">
            {config?.title || "Website title"}
          </div>
          <div className="text-xs text-zinc-400">
            {config?.url || "https://url.com"}
          </div>
          <div className="text-sm text-zinc-300 mt-2">
            {config?.description || "Website description"}
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg">
        <div className="text-xs text-zinc-400 uppercase mb-2">
          Twitter
        </div>
        <div className="w-full border border-zinc-800 rounded overflow-hidden">
          <div className="bg-primary w-full h-64 min-h-64 overflow-hidden">
            {config?.urlImage
              ? (
                <img
                  src={config?.urlImage}
                  className="border-0 outline-none w-full min-h-64 h-64 object-cover object-center"
                  width="100%"
                />
              )
              : ""}
          </div>
          <div className="w-full flex flex-col gap-1 p-4">
            <div className="text-base text-zinc-200 font-medium">
              {config?.title || "Website title"}
            </div>
            <div className="text-sm text-zinc-400">
              {config?.description || "Website description"}
            </div>
            <div className="text-xs text-zinc-400 mt-2">
              {config?.url || "https://url.com"}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg">
        <div className="text-xs text-zinc-400 uppercase mb-2">
          Facebook
        </div>
        <div className="w-full border border-zinc-800 rounded overflow-hidden">
          <div className="bg-primary w-full h-52 min-h-52 overflow-hidden">
            {config?.urlImage
              ? (
                <img
                  src={config?.urlImage}
                  className="border-0 outline-none w-full min-h-52 h-52 object-cover object-center"
                  width="100%"
                />
              )
              : ""}
          </div>
          <div className="w-full flex flex-col gap-1 p-4">
            <div className="text-xs text-zinc-400 uppercase">
              {config?.url || "https://url.com"}
            </div>
            <div className="text-base text-zinc-200 font-medium">
              {config?.title || "Website title"}
            </div>
            <div className="text-sm text-zinc-400">
              {config?.description || "Website description"}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-xl">
        <div className="text-xs text-zinc-400 uppercase mb-2">
          Linkedin
        </div>
        <div className="w-full border border-zinc-800 rounded overflow-hidden">
          <div className="bg-primary w-full h-64 min-h-64 overflow-hidden">
            {config?.urlImage
              ? (
                <img
                  src={config?.urlImage}
                  className="border-0 outline-none w-full min-h-64 h-64 object-cover object-center"
                  width="100%"
                />
              )
              : ""}
          </div>
          <div className="w-full flex flex-col gap-1 p-4">
            <div className="text-sm text-zinc-200 font-medium">
              {config?.title || "Website title"}
            </div>
            <div className="text-xs text-zinc-400">
              {config?.url || "https://url.com"}
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-4 md:min-h-8"></div>
    </div>
  );
}
