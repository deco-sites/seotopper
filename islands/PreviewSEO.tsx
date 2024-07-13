import { useRef } from "preact/hooks";

export default function PreviewSEO() {
  console.log('SEO:CONFIG');
  
  const data = localStorage.getItem('SEO:CONFIG')
  const config = useRef(!data ? {} : JSON.parse(data))

  return (
    <div class="text-zinc-200 gap-4 md:gap-8 h-full flex flex-col mb-4 md:mb-8 lg:mb-10 pb-4 md:pb-8 lg:pb-10 w-full">
      <div class="w-full max-w-xl">
        <div class="text-xs text-zinc-400 uppercase mb-2">
          Google
        </div>
        <div class="w-full p-4 border border-zinc-800 rounded overflow-hidden">
          <div class="text-base text-[#99c3ff]">
            {config.title || "Website title"}
          </div>
          <div class="text-xs text-zinc-400">
            {config.url || "https://url.com"}
          </div>
          <div class="text-sm text-zinc-300 mt-2">
            {config.description || "Website description"}
          </div>
        </div>
      </div>

      <div class="w-full max-w-lg">
        <div class="text-xs text-zinc-400 uppercase mb-2">
            Twitter
        </div>
        <div class="w-full border border-zinc-800 rounded overflow-hidden">
          <div class="bg-zinc-700 w-full h-64 min-h-64 overflow-hidden">
            <img
              src={config.urlImage}
              class="border-0 outline-none w-full min-h-64 h-64 object-cover object-center"
              width="100%"
            />
          </div>
          <div class="w-full flex flex-col gap-1 p-4">
            <div class="text-base text-zinc-200 font-medium">
              {config.title || "Website title"}
            </div>
            <div class="text-sm text-zinc-400">
              {config.description || "Website description"}
            </div>
            <div class="text-xs text-zinc-400 mt-2">
              {config.url || "https://url.com"}
            </div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-lg">
        <div class="text-xs text-zinc-400 uppercase mb-2">
          Facebook
        </div>
        <div class="w-full border border-zinc-800 rounded overflow-hidden">
          <div class="bg-zinc-700 w-full h-52 min-h-52 overflow-hidden">
            <img
              src={config.urlImage}
              class="border-0 outline-none w-full min-h-52 h-52 object-cover object-center"
              width="100%"
            />
          </div>
          <div class="w-full flex flex-col gap-1 p-4">
            <div class="text-xs text-zinc-400 uppercase">
              {config.url || "https://url.com"}
            </div>
            <div class="text-base text-zinc-200 font-medium">
              {config.title || "Website title"}
            </div>
            <div class="text-sm text-zinc-400">
              {config.description || "Website description"}
            </div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-xl">
        <div class="text-xs text-zinc-400 uppercase mb-2">
          Linkedin
        </div>
        <div class="w-full border border-zinc-800 rounded overflow-hidden">
          <div class="bg-zinc-700 w-full h-64 min-h-64 overflow-hidden">
            <img
              src={config.urlImage}
              class="border-0 outline-none w-full min-h-64 h-64 object-cover object-center"
              width="100%"
            />
          </div>
          <div class="w-full flex flex-col gap-1 p-4">
            <div class="text-sm text-zinc-200 font-medium">
              {config.title || "Website title"}
            </div>
            <div class="text-xs text-zinc-400">
              {config.url || "https://url.com"}
            </div>
          </div>
        </div>
      </div>

      <div class="min-h-4 md:min-h-8"></div>
    </div>
  );
}
