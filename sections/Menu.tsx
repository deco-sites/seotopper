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
      <div class="flex items-center h-full">
        <div class="flex items-center gap-3">
          <img
            src="https://seotopper.netlify.app/assets/top.svg"
            class="max-w-full w-6"
            alt="Logo SeoTopper"
          />
          <span class="hidden md:block text-sm md:text-base font-medium">
            {name}
          </span>
        </div>

        <div class="w-px bg-zinc-800 h-full mx-4"></div>
        <button class="btn btn-sm btn-primary">Primary</button>
      </div>
      <div class="flex">
        {
          /* <github-button
          type="stargazers"
          namespace="gustavoquinalha"
          repo="seotopper"
        >
        </github-button> */
        }
      </div>
    </div>
  );
}
