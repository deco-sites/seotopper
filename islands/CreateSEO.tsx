import { useCallback, useRef, useState } from "preact/hooks";

import Input from "../components/Input.tsx";

export default function Section() {
  const [searchURL, setSearchURL] = useState("https://gus.vision/");
  const [charset, setCharset] = useState("utf-8");
  const [viewport, setViewport] = useState(
    "width=device-width, initial-scale=1",
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [canonicalURL, setCanonicalURL] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageAltText, setImageAltText] = useState("");
  const [favicon, setFavicon] = useState("favicon.ico");
  const [pageAuthor, setPageAuthor] = useState("");
  const [robots, setRobots] = useState("index, follow");
  const [themeColor, setThemeColor] = useState("");
  const [locale, setLocale] = useState("");
  const [pageSite, setPageSite] = useState("");

  const doSearch = useCallback(async () => {
    try {
      const response = await fetch(searchURL);
      const html = await response.text();

      const parser = new DOMParser();

      const doc = parser.parseFromString(html, "text/html");

      setTitle(doc.querySelector("title")?.innerText || "");
      setDescription(
        doc.querySelector('meta[name="description"]')?.getAttribute(
          "content",
        ) || "",
      );
      setImageURL(
        doc.querySelector('meta[property="og:image"]')?.getAttribute(
          "content",
        ) || "",
      );
    } catch (error) {
      console.log(error);
    }
  }, [searchURL]);

  const copyContent = () => {
    console.log("copyContent");

    const divContent = document.getElementById("code")?.innerText;
    if (divContent) {
      navigator.clipboard.writeText(divContent).then(() => {
        console.log("Content copied to clipboard!");
      }).catch((err) => {
        console.error("Failed to copy: ", err);
      });
    }
  };

  const iframe = useRef(null);

  const loadedURL = useCallback(() => {
    console.log(iframe.current);
  }, [iframe]);

  return (
    <div className="w-full flex">
      <div
        style="width: 50%"
        class="resize-x flex-grow w-full mx-auto h-[calc(100vh-112px)] overflow-x-hidden overflow-y-scroll border-r border-accent p-4"
      >
        <div className="grid grid-cols-1 gap-8 w-full max-w-lg mx-auto py-10">
          <div className="flex flex-col gap-1 text-center w-full mx-auto bg-accent/30 border border-accent/40 rounded p-4 md:p-8 mb-4">
            <label class="text-center text-sm text-white">
              Preview, edit, and generate your metatags
            </label>
            <div className="flex gap-0 relative w-full mb-4">
              <input
                type="text"
                placeholder="https://deco.cx"
                className="input input-sm rounded input-bordered w-full "
                data-theme="black"
                value={searchURL}
                onInput={(ev: InputEvent) =>
                  setSearchURL((ev.target as HTMLInputElement).value)}
              />
              <button
                class="absolute right-1 top-1 btn btn-sm btn-primary -ml-2 h-6 min-h-6 py-0 text-xs"
                onClick={doSearch}
              >
                Fetch URL
              </button>
            </div>
          </div>

          <Input
            formName="Charset"
            formNamePlaceholder="Page charset"
            formDescription=""
            value={charset}
            setValue={setCharset}
          />
          <Input
            formName="Viewport"
            formNamePlaceholder="Page viewport"
            formDescription=""
            value={viewport}
            setValue={setViewport}
          />
          <Input
            formName="Title"
            formNamePlaceholder="Page title"
            formDescription=""
            value={title}
            setValue={setTitle}
          />
          <Input
            formName="Description"
            formNamePlaceholder="Page description"
            formDescription=""
            value={description}
            setValue={setDescription}
          />
          <Input
            formName="Canonical URL"
            formNamePlaceholder="Page URL"
            formDescription=""
            value={canonicalURL}
            setValue={setCanonicalURL}
          />
          <Input
            formName="Image URL"
            formNamePlaceholder="https://deco.cx/assets/image.jpg"
            formDescription=""
            value={imageURL}
            setValue={setImageURL}
          />
          <Input
            formName="Image ALT text"
            formNamePlaceholder="Image alt text"
            formDescription=""
            value={imageAltText}
            setValue={setImageAltText}
          />
          <Input
            formName="Favicon"
            formNamePlaceholder="Favicon path"
            formDescription=""
            value={favicon}
            setValue={setFavicon}
          />
          <Input
            formName="Page author"
            formNamePlaceholder="Page author"
            formDescription=""
            value={pageAuthor}
            setValue={setPageAuthor}
          />
          <Input
            formName="Robots"
            formNamePlaceholder="index, follow"
            formDescription=""
            value={robots}
            setValue={setRobots}
          />
          <Input
            formName="Theme color"
            formNamePlaceholder="Page theme color"
            formDescription=""
            value={themeColor}
            setValue={setThemeColor}
          />
          <Input
            formName="Locale"
            formNamePlaceholder="Page locale"
            formDescription=""
            value={locale}
            setValue={setLocale}
          />
          <Input
            formName="Page site"
            formNamePlaceholder="Page site"
            formDescription="The Twitter “@username” the card should be attributed to."
            value={pageSite}
            setValue={setPageSite}
          />
          <button class="btn btn-sm btn-secondary">Preview</button>
        </div>
      </div>
      <div
        style="width: 50%"
        class="flex-grow w-full mx-auto h-[calc(100vh-112px)] overflow-scroll border-r border-accent p-8"
      >
        <div className="text-zinc-600 relative">
          <button
            class="absolute right-1 top-1 btn btn-sm btn-primary"
            onClick={copyContent}
          >
            Copy
          </button>
          <pre>
            <code id="code">
            <span class="text-zinc-700">&lt;!-- HTML Meta Tags --&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">charset</span>=&quot;<span class="text-white">{charset}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">viewport</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{viewport}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>title<span class="text-zinc-400">&gt;</span><span class="text-white">{title}</span><span class="text-zinc-400">&lt;/</span>title<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>link <span class="text-zinc-300">rel</span>=&quot;<span class="text-white">canonical</span>&quot; <span class="text-zinc-300">href</span>=&quot;<span class="text-white">{canonicalURL}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>link <span class="text-zinc-300">rel</span>=&quot;<span class="text-white">icon</span>&quot; type=&quot;<span class="text-white">image/x-icon</span>&quot; <span class="text-zinc-300">href</span>=&quot;<span class="text-white">{favicon}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">robots</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{robots}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">description</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{description}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">author</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{pageAuthor}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">theme-color</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{themeColor}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <br />
            <span class="text-zinc-700">&lt;!-- Facebook Meta Tags --&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:url</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{canonicalURL}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:type</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">website</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:title</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{title}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:description</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{description}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:image</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{imageURL}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:locale</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{locale}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <br />
            <span class="text-zinc-700">&lt;!-- Twitter Meta Tags --&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:card</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">summary</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:title</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{title}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:site</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{pageSite}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:description</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{description}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:image</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{imageURL}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:image:alt</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{imageAltText}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-700">&lt;!-- Meta Tags Generated via SeoTopper --&gt;</span>
            </code>
          </pre>
        </div>

        <iframe
          ref={iframe}
          onLoad={loadedURL}
          class="w-full h-full mt-8 hidden"
          src={searchURL}
          frameborder="0"
        >
        </iframe>
      </div>
    </div>
  );
}
