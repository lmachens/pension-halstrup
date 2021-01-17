export default async function markdownToHtml(markdown) {
  const [
    { default: remark },
    { default: html },
    { default: gfm },
  ] = await Promise.all([
    import("remark"),
    import("remark-html"),
    import("remark-gfm"),
  ]);

  const result = await remark().use(html).use(gfm).process(markdown);
  return result.toString();
}
