/** @jsx h */

import blog, { h, ga, redirects } from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Cabbage",
  title: "Hero Blog",
  description: "天行健，君子以自强不息.",
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  footer: <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
  <p class="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
    <span>
      Powered by{" Cabbage "}
      <a class="inline-flex items-center gap-1 underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors" 
      href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2021010368号-1</a>
     
    </span>
  </p>
</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:745567906@qq.com" },
    { title: "GitHub", url: "https://github.com/Cabbage-Leon" },
  ],
  lang: "en",
  // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  dateFormat: (date) => new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
  favicon: "https://deno-avatar.deno.dev/avatar/blog.svg"
});
