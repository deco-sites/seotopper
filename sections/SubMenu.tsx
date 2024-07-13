export default function Section() {
  return (
    <div
      class="bg-base-100 border-b border-accent h-14 w-full flex items-center justify-between px-4 gap-4"
      id="menu"
      data-theme="black"
    >
      <div className="flex gap-0 h-full">
        <button class="block h-full h-14 border-b hover:border-accent !border-white text-white btn-accent flex items-center justify-center text-center px-4 text-sm">Create</button>
        <button class="block h-full h-14 border-b hover:border-accent border-transparent btn-primary flex items-center justify-center text-center px-4 text-sm">Preview</button>
      </div>
    </div>
  );
}
