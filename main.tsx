import blog from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "cabbage",
  title: "My Blog",
  description: "The blog description.",
  avatar: "https://deno-avatar.deno.dev/avatar/83a531.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:745567906@qq.com" },
    { title: "GitHub", url: "https://github.com/cabbage" },
  ],
  lang: "zh",
});