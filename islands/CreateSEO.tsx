import { useState } from 'preact/hooks'

import Input from "../components/Input.tsx";

export default function Section() {
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

  return (
    <div className="w-full flex">
      <div
        style="width: 50%"
        class="resize-x flex-grow w-full mx-auto h-[calc(100vh-112px)] overflow-x-hidden overflow-y-scroll border-r border-accent p-4"
      >
        <div className="grid grid-cols-1 gap-8 w-full max-w-lg mx-auto py-10">
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
