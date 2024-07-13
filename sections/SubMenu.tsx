interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Section({ name = "Seotopper" }: Props) {
  return (
    // data-theme="dark"
    <div
      class="bg-base-100 border-b border-zinc-800 h-14 w-full flex items-center justify-between px-4 gap-4"
      id="menu"
      data-theme="black"
    >
      <div class="flex items-center h-full gap-4 w-full">
        <div class="flex items-center gap-3">
          <img
            src="https://seotopper.netlify.app/assets/top.svg"
            class="max-w-full w-5"
            alt="Logo SeoTopper"
          />
          <span class="hidden md:block text-sm md:text-base font-medium">
            {name}
          </span>
        </div>

        <div className="flex gap-0 relative w-full max-w-sm">
          <input
            type="text"
            placeholder="https://deco.cx"
            className="input input-sm rounded input-bordered w-full "
            data-theme="black"
          />
          <button class="absolute right-1 top-1 btn btn-sm btn-primary -ml-2 h-6 min-h-6 py-0 text-xs">Fetch URL</button>
        </div>
      </div>

      <div className="flex gap-2">
        <button class="btn btn-sm btn-accent">Create</button>
        <button class="btn btn-sm btn-primary">Preview</button>
        <button class="btn btn-sm btn-primary">Export</button>
      </div>
    </div>
  );
}
