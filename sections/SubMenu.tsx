export default function Section() {
  return (
    // data-theme="dark"
    <div
      class="bg-base-100 border-b border-accent h-14 w-full flex items-center justify-between px-4 gap-4"
      id="menu"
      data-theme="black"
    >
      <div className="flex gap-2">
        <button class="btn btn-sm btn-accent">Create</button>
        <button class="btn btn-sm btn-primary">Preview</button>
        <button class="btn btn-sm btn-primary">Export</button>
      </div>
    </div>
  );
}
