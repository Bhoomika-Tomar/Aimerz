/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateLocalStorage() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  localStorage.setItem("cart", JSON.stringify(cart));
  updateNavCount();
}

function addToWishlist(product) {
  if (!wishlist.find((p) => p.id === product.id)) {
    wishlist.push(product);
    updateLocalStorage();
    alert("Item added to wishlist!");
  }
}

function addToCart(product) {
  const existing = cart.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  updateLocalStorage();
  alert("Item added to cart!");
}

function setupButtons() {
  document.querySelectorAll(".cart__btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productEl = btn.closest(".product__item");
      const product = {
        id: productEl.querySelector(".product__title").textContent.trim(),
        name: productEl.querySelector(".product__title").textContent.trim(),
        price: productEl.querySelector(".new__price").textContent.trim(),
        img: productEl.querySelector(".product__img").src,
      };
      addToCart(product);
    });
  });

  document.querySelectorAll(".product__actions .fi-rs-heart").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      const productEl = icon.closest(".product__item");
      const product = {
        id: productEl.querySelector(".product__title").textContent.trim(),
        name: productEl.querySelector(".product__title").textContent.trim(),
        price: productEl.querySelector(".new__price").textContent.trim(),
        img: productEl.querySelector(".product__img").src,
      };
      addToWishlist(product);
    });
  });
}

function renderList(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = "<tr><td colspan='5'>No items found</td></tr>";
    return;
  }

  container.innerHTML = list.map((item) => `
    <tr>
      <td><img src="${item.img}" class="table__img" /></td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.quantity || 1}</td>
      <td><button onclick="removeItem('${containerId}', '${item.id}')">Remove</button></td>
    </tr>
  `).join("");
}

function removeItem(type, id) {
  if (type === "wishlist-items") {
    wishlist = wishlist.filter((item) => item.id !== id);
  } else {
    cart = cart.filter((item) => item.id !== id);
  }
  updateLocalStorage();
  renderList(wishlist, "wishlist-items");
  renderList(cart, "cart-items");
}

function updateNavCount() {
  const cartCountEls = document.querySelectorAll(".header__action-btn[title='Cart'] .count");
  const wishlistCountEls = document.querySelectorAll(".header__action-btn[title='Wishlist'] .count");

  cartCountEls.forEach(el => el.textContent = cart.reduce((sum, p) => sum + (p.quantity || 1), 0));
  wishlistCountEls.forEach(el => el.textContent = wishlist.length);
}

document.addEventListener("DOMContentLoaded", () => {
  setupButtons();
  renderList(wishlist, "wishlist-items");
  renderList(cart, "cart-items");
  updateNavCount();
});
