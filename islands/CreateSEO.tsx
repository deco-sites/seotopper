import { useState, useCallback, useRef } from 'preact/hooks'

import Input from "../components/Input.tsx";

export default function Section() {
  const [ searchURL, setSearchURL ] = useState('')
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ canonicalURL, setCanonicalURL ] = useState('')
  const [ imageURL, setImageURL ] = useState('')
  const [ imageAltText, setImageAltText ] = useState('')
  const [ pageAuthor, setPageAuthor ] = useState('')
  const [ robots, setRobots ] = useState('')
  const [ URLSiteMap, setURLSiteMap ] = useState('')
  const [ themeColor, setThemeColor ] = useState('')
  const [ locale, setLocale ] = useState('')
  const [ pageSite, setPageSite ] = useState('')
  
  const doSearch = useCallback(async () => {
    try {
      const response = await fetch(searchURL)
      const html = await response.text()

      const parser = new DOMParser()
    
      const doc = parser.parseFromString(html, 'text/html');

      setTitle(doc.querySelector('title')?.innerText || '');
      setDescription(doc.querySelector('meta[name="description"]')?.getAttribute('content') || '');
      setImageURL(doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '');
    } catch (error) {
      console.log(error);
      
    }
  }, [searchURL])

  const iframe = useRef(null)

  const loadedURL = useCallback(() => {
    console.log(iframe.current);
    
  }, [iframe])

  return (
    <div className="w-full flex">
      <div
        style="width: 50%"
        class="resize-x flex-grow w-full mx-auto h-[calc(100vh-112px)] overflow-x-hidden overflow-y-scroll border-r border-accent p-4"
      >
        <div className="grid grid-cols-1 gap-8 w-full max-w-lg mx-auto py-10">
          <div className="flex gap-0 relative w-full max-w-sm">
            <input
              type="text"
              placeholder="https://deco.cx"
              className="input input-sm rounded input-bordered w-full "
              data-theme="black"
              value={searchURL}
              onInput={(ev: InputEvent) => setSearchURL((ev.target as HTMLInputElement).value)}
            />
            <button class="absolute right-1 top-1 btn btn-sm btn-primary -ml-2 h-6 min-h-6 py-0 text-xs" onClick={doSearch}>
              Fetch URL
            </button>
          </div>
          <Input formName="Title" formNamePlaceholder="Page title" value={title} setValue={setTitle} />
          <Input formName="Description" formNamePlaceholder="Page description" value={description} setValue={setDescription} />
          <Input formName="Canonical URL" formNamePlaceholder="Page URL" value={canonicalURL} setValue={setCanonicalURL} />
          <Input
            formName="Image URL"
            formNamePlaceholder="https://deco.cx/assets/image.jpg"
            value={imageURL}
            setValue={setImageURL}
          />
          <Input
            formName="Image ALT text"
            formNamePlaceholder="Image alt text"
            value={imageAltText}
            setValue={setImageAltText}
          />
          <Input formName="Page author" formNamePlaceholder="Page author" value={pageAuthor} setValue={setPageAuthor} />
          <Input formName="Robots" formNamePlaceholder="index, follow" value={robots} setValue={setRobots} />
          <Input
            formName="URL site map"
            formNamePlaceholder="https://deco.cx/sitemap.xml"
            value={URLSiteMap}
            setValue={setURLSiteMap}
          />
          <Input formName="Theme color" formNamePlaceholder="Page theme color" value={themeColor} setValue={setThemeColor} />
          <Input formName="Locale" formNamePlaceholder="Page locale" value={locale} setValue={setLocale} />
          <Input formName="Page site" formNamePlaceholder="Page site" value={pageSite} setValue={setPageSite} />
          <button class="btn btn-sm btn-secondary">Preview</button>
        </div>
      </div>
      <div
        style="width: 50%"
        class="flex-grow w-full mx-auto h-[calc(100vh-112px)] overflow-x-hidden overflow-y-scroll border-r border-accent p-4"
      >
        <iframe ref={iframe} onLoad={loadedURL} class="w-full h-full" src={searchURL} frameborder="0"></iframe>
        <div className="">
          {title}
          {description}
          {canonicalURL}
          {imageURL}
          {imageAltText}
          {pageAuthor}
          {robots}
          {URLSiteMap}
          {themeColor}
          {locale}
          {pageSite}
        </div>
      </div>
    </div>
  );
}
