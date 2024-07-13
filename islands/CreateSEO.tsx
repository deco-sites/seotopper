import { useEffect, useCallback, useRef, useState } from "preact/hooks";

import Input from "../components/Input.tsx";
import Select from "../components/Select.tsx";

export default function Section() {
  const [searchURL, setSearchURL] = useState("https://gus.vision/");
  
  const [config, setConfig] = useState({
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    title: "",
    description: "",
    canonicalURL: "",
    imageURL: "",
    imageAltText: "",
    favicon: "favicon.ico",
    pageAuthor: "",
    robots: "index, follow",
    themeColor: "",
    locale: "",
    pageSite: "",
  })

  const options = [
    "UTF-8", // Universal character set for almost all characters
    "ISO-8859-1", // Western European (Latin-1)
    "ISO-8859-2", // Central European (Latin-2)
    "ISO-8859-3", // South European (Latin-3)
    "ISO-8859-4", // North European (Latin-4)
    "ISO-8859-5", // Cyrillic (Latin/Cyrillic)
    "ISO-8859-6", // Arabic (Latin/Arabic)
    "ISO-8859-7", // Greek (Latin/Greek)
    "ISO-8859-8", // Hebrew (Latin/Hebrew)
    "ISO-8859-9", // Turkish (Latin-5)
    "ISO-8859-10", // Nordic (Latin-6)
    "ISO-8859-11", // Thai (Latin/Thai)
    "ISO-8859-13", // Baltic (Latin-7)
    "ISO-8859-14", // Celtic (Latin-8)
    "ISO-8859-15", // Western European with Euro (Latin-9)
    "ISO-8859-16", // South-Eastern European (Latin-10)
    "Windows-1250", // Central and Eastern European
    "Windows-1251", // Cyrillic
    "Windows-1252", // Western European
    "Windows-1253", // Greek
    "Windows-1254", // Turkish
    "Windows-1255", // Hebrew
    "Windows-1256", // Arabic
    "Windows-1257", // Baltic
    "Windows-1258", // Vietnamese
    "KOI8-R", // Russian
    "KOI8-U", // Ukrainian
    "GB18030", // Simplified Chinese
    "Big5", // Traditional Chinese
    "Shift_JIS", // Japanese
    "EUC-JP", // Japanese
    "EUC-KR", // Korean
  ];

  const robotsOptions = [
    "index, follow",
    "noindex, follow",
    "index, nofollow",
    "noindex, nofollow",
  ];

  const doSearch = useCallback(async () => {
    try {
      const response = await fetch(searchURL);
      const html = await response.text();

      const parser = new DOMParser();

      const doc = parser.parseFromString(html, "text/html");

      setConfig({ ...config, ...{ title: doc.querySelector("title")?.innerText || "" } });
      setConfig({ ...config, ...{
        description: doc.querySelector('meta[name="description"]')?.getAttribute(
          "content",
        ) || ""
      }})
      setConfig({ ...config, ...{
        imageURL: doc.querySelector('meta[property="og:image"]')?.getAttribute(
          "content",
        ) || "",
      }})
    } catch (error) {
      console.log(error);
    }
  }, [searchURL, config]);

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

  const importConfig = useCallback(() => {
    const input = document.createElement('input')

    input.type = 'file'

    input.onchange = () => {
      if (input.value && input.files) {
        const file = input.files[0]

        if (file) {
          const reader = new FileReader()

          reader.onloadend = () => {
            try {
              const data = JSON.parse(reader.result as string)
              
              setConfig({ ...config, ...data })
            } catch (error) {
              console.log('Invalid JSON', error)
            }
          }

          reader.onerror = () => {
            console.log('Failed to read file', reader.error);
          }

          reader.readAsText(file)
        }
      }
    }

    input.click()
  }, [config])

  const exportConfig = useCallback(() => {
    const link = document.createElement('a')

    link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(config))}`
    link.download = 'config.json'

    link.click()
  }, [config])

  useEffect(() => {
    localStorage.setItem('SEO:CONFIG', JSON.stringify(config))
  }, [config])

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
          <Select
            formName="Charset"
            formDescription="Specifies the character encoding for the HTML document, ensuring proper display of text."
            value={config.charset}
            setValue={(val: string) => setConfig({ ...config, ...{ charset: val } })}
            options={options}
          />

          <Input
            formName="Viewport"
            formNamePlaceholder="Page viewport"
            formType="text"
            formDescription="Controls the layout and scaling of a webpage on different devices, improving responsiveness and user experience."
            value={config.viewport}
            setValue={(val: string) => setConfig({ ...config, ...{ viewport: val } })}
          />
          <Input
            formName="Title"
            formNamePlaceholder="Page title"
            formType="text"
            formDescription="Defines the title of the HTML document, displaying text in the browser tab and aiding in search engine optimization (SEO)."
            value={config.title}
            setValue={(val: string) => setConfig({ ...config, ...{ title: val } })}
          />
          <Input
            formName="Description"
            formNamePlaceholder="Page description"
            formType="text"
            formDescription="Provides a concise summary of the webpage's content, often used by search engines to display in search results, enhancing click-through rates."
            value={config.description}
            setValue={(val: string) => setConfig({ ...config, ...{ description: val } })}
          />
          <Input
            formName="Canonical URL"
            formNamePlaceholder="Page URL"
            formType="text"
            formDescription="Specifies the preferred URL for a webpage, consolidating search engine ranking signals and avoiding duplicate content issues."
            value={config.canonicalURL}
            setValue={(val: string) => setConfig({ ...config, ...{ canonicalURL: val } })}
          />
          <Input
            formName="Image URL"
            formNamePlaceholder="https://deco.cx/assets/image.jpg"
            formType="text"
            formDescription="Specifies the image displayed when sharing the webpage on platforms like Facebook, enhancing visual appeal."
            value={config.imageURL}
            setValue={(val: string) => setConfig({ ...config, ...{ imageURL: val } })}
          />
          <Input
            formName="Image ALT text"
            formNamePlaceholder="Image alt text"
            formType="text"
            formDescription="Provides alternative text for the image specified in og:image, improving accessibility and SEO when shared on platforms supporting Open Graph."
            value={config.imageAltText}
            setValue={(val: string) => setConfig({ ...config, ...{ imageAltText: val } })}
          />
          <Input
            formName="Favicon"
            formNamePlaceholder="Favicon path"
            formType="text"
            formDescription="Specifies the favicon, enhancing website recognition in browsers and bookmarks."
            value={config.favicon}
            setValue={(val: string) => setConfig({ ...config, ...{ favicon: val } })}
          />
          <Input
            formName="Page author"
            formNamePlaceholder="Page author"
            formType="text"
            formDescription="Specifies the author of the webpage, providing attribution for content creation and ownership."
            value={config.pageAuthor}
            setValue={(val: string) => setConfig({ ...config, ...{ pageAuthor: val } })}
          />
          <Select
            formName="Robots"
            formDescription="Controls how search engines index and display content, influencing webpage visibility and accessibility in search results."
            value={config.robots}
            setValue={(val: string) => setConfig({ ...config, ...{ robots: val } })}
            options={robotsOptions}
          />
          <Input
            formName="Theme color"
            formNamePlaceholder="Page theme color"
            formType="color"
            formDescription="Defines the color theme for the browser's UI elements when a webpage is viewed on mobile devices, enhancing user experience and brand consistency."
            value={config.themeColor}
            setValue={(val: string) => setConfig({ ...config, ...{ themeColor: val } })}
          />
          <Input
            formName="Locale"
            formNamePlaceholder="Page locale"
            formType="text"
            formDescription="Defines the language and region of a webpage, aiding in content and regional settings adaptation."
            value={config.locale}
            setValue={(val: string) => setConfig({ ...config, ...{ locale: val } })}
          />
          <Input
            formName="Page site"
            formNamePlaceholder="Page site"
            formType="text"
            formDescription="The Twitter “@username” the card should be attributed to."
            value={config.pageSite}
            setValue={(val: string) => setConfig({ ...config, ...{ pageSite: val } })}
          />
          <button class="btn btn-sm btn-secondary">Preview</button>
          <div class="flex gap-2">
            <button class="flex-1 btn btn-sm btn-secondary" onClick={importConfig}>Import</button>
            <button class="flex-1 btn btn-sm btn-secondary" onClick={exportConfig}>Export</button>
          </div>
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
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">charset</span>=&quot;<span class="text-white">{config.charset}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">viewport</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.viewport}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>title<span class="text-zinc-400">&gt;</span><span class="text-white">{config.title}</span><span class="text-zinc-400">&lt;/</span>title<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>link <span class="text-zinc-300">rel</span>=&quot;<span class="text-white">canonical</span>&quot; <span class="text-zinc-300">href</span>=&quot;<span class="text-white">{config.canonicalURL}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>link <span class="text-zinc-300">rel</span>=&quot;<span class="text-white">icon</span>&quot; type=&quot;<span class="text-white">image/x-icon</span>&quot; <span class="text-zinc-300">href</span>=&quot;<span class="text-white">{config.favicon}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">robots</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.robots}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">description</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.description}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">author</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.pageAuthor}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">theme-color</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.themeColor}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <br />
            <span class="text-zinc-700">&lt;!-- Facebook Meta Tags --&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:url</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.canonicalURL}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:type</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">website</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:title</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.title}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:description</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.description}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:image</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.imageURL}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">property</span>=&quot;<span class="text-white">og:locale</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.locale}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <br />
            <span class="text-zinc-700">&lt;!-- Twitter Meta Tags --&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:card</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">summary</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:title</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.title}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:site</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.pageSite}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:description</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.description}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:image</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.imageURL}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
            <span class="text-zinc-400">&lt;</span>meta <span class="text-zinc-300">name</span>=&quot;<span class="text-white">twitter:image:alt</span>&quot; <span class="text-zinc-300">content</span>=&quot;<span class="text-white">{config.imageAltText}</span>&quot;<span class="text-zinc-400">&gt;</span><br />
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
