import { ReactElement } from "react";

export default function Observer({ children }: { children: (IHasElement)[] }) {
  function callback() {
    alert("visible");
  }
  let options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  let observer = new IntersectionObserver(callback, options);


  children.forEach((element) => {
    observer.observe(element.element)
  });



  return <></>;
}
