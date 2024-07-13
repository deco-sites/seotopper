import { useSection } from "deco/hooks/useSection.ts";
import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log('click increment');
    setCount(count + 1)
  }

  function decrement() {
    console.log('click decrement');
    setCount(count - 1)
  }

  return (
    <div>
      <button
        onClick={decrement}
        class="btn btn-sm btn-circle btn-outline no-animation"
      >
        <span class="inline [.htmx-request_&]:hidden">
          -
        </span>
        <span class="loading loading-spinner hidden [.htmx-request_&]:inline" />
      </button>
      <span>{count}</span>
      <button
        onClick={increment}
        class="btn btn-sm btn-circle btn-outline no-animation"
      >
        <span class="inline [.htmx-request_&]:hidden">
          +
        </span>
        <span class="loading loading-spinner hidden [.htmx-request_&]:inline" />
      </button>
    </div>
  );
}