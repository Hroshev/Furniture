const home = document.getElementById("home");
home.onclick = () => {
  const box = document.querySelector(".header");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const footerHome = document.getElementById("footerHome");
footerHome.onclick = () => {
  const box = document.querySelector(".header");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const shop = document.getElementById("shop");
shop.onclick = () => {
  const box = document.querySelector(".productSell");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const blog = document.getElementById("blog");
blog.onclick = () => {
  const box = document.querySelector(".blog");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const footerblog = document.getElementById("footerblog");
footerblog.onclick = () => {
  const box = document.querySelector(".blog");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const aboutUs = document.getElementById("aboutUs");
aboutUs.onclick = () => {
  const box = document.querySelector(".about");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const footerAboutUs = document.getElementById("footerAboutUs");
footerAboutUs.onclick = () => {
  const box = document.querySelector(".about");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const product = document.getElementById("product");
product.onclick = () => {
  const box = document.querySelector(".featured");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const footerProduct = document.getElementById("footerProduct");
footerProduct.onclick = () => {
  const box = document.querySelector(".featured");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};