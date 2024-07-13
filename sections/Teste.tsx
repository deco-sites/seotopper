import Test from "../islands/Test.tsx";

export default function Section() {
  return (
    <div className="w-full flex">
      <div
        style="width: 50%"
        class="resize-x flex-grow w-full mx-auto h-[calc(100vh-112px)] overflow-x-hidden overflow-y-scroll border-r border-accent p-4"
      >
        <div className="grid grid-cols-1 gap-8 w-full max-w-lg mx-auto py-10">
          <Test formName="Title" formNamePlaceholder="Page title" />
          <Test formName="Description" formNamePlaceholder="Page description" />
          <Test formName="Canonical URL" formNamePlaceholder="Page URL" />
          <Test
            formName="Image URL"
            formNamePlaceholder="https://deco.cx/assets/image.jpg"
          />
          <Test
            formName="Image ALT text"
            formNamePlaceholder="Image alt text"
          />
          <Test formName="Page author" formNamePlaceholder="Page author" />
          <Test formName="Robots" formNamePlaceholder="index, follow" />
          <Test
            formName="URL site map"
            formNamePlaceholder="https://deco.cx/sitemap.xml"
          />
          <Test formName="Theme color" formNamePlaceholder="Page theme color" />
          <Test formName="Locale" formNamePlaceholder="Page locale" />
          <Test formName="Page site" formNamePlaceholder="Page site" />
          <button class="btn btn-sm btn-secondary">Preview</button>
        </div>
      </div>
      <div
        style="width: 50%"
        class="flex-grow w-full mx-auto h-[calc(100vh-112px)] overflow-x-hidden overflow-y-scroll border-r border-accent p-4"
      >
        <div className=""></div>
      </div>
    </div>
  );
}
