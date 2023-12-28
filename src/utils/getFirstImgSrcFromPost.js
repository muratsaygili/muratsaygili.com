export default function GetFirstImgSrcFromPost(node) {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.getElementsByTagName("img")[0].src;
  return node;
}