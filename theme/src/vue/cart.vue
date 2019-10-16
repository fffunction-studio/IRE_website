<template>
  <div id="cart-app">
    <div class="cart-loader fixed inset-0 bg-white-50 z-10">
      <div class="flex w-full h-full items-center justify-center">
        <div class="italic text-lg md:text-xl xl:text-2xl underline-loop">Loading</div>
      </div>
    </div>

    <section v-if="isEmpty" class="section header-offset-extra">
      <div class="container">
        <div class="row">
          <div class="col mx-auto w-9/12 lg:w-10/12 text-lg md:text-xl xl:text-2xl">
            <p>Mhm. You have no items in your shopping cart…</p>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="!isEmpty"
      class="relative min-h-screen header-offset-extra pb-40 text-lg lg:text-xl xl:text-2xl"
    >
      <div class="container">
        <div v-for="(item, index) in items" class="product mb-12" v-bind:key="index">
          <div class="row">
            <div class="col ml-1/12 w-1/12 lg:w-1/24">
              <input
                class="w-full"
                type="number"
                v-model="item.amount"
                @change="updateOriginalAmount(index)"
              />
            </div>
            <div class="col w-2/12 lg:w-1/24 flex justify-center items-center">
              <div class="pb-1">
                <svg
                  width="12px"
                  height="10px"
                  viewBox="0 0 12 10"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="SHOP_CHECKOUT" transform="translate(-206.000000, -209.000000)">
                      <rect fill="#FFFFFF" x="0" y="0" width="1440" height="900" />
                      <g
                        id="Item-1"
                        transform="translate(152.000000, 200.000000)"
                        stroke="#000000"
                        stroke-linecap="square"
                      >
                        <g id="Cross" transform="translate(54.000000, 8.000000)">
                          <g transform="translate(0.750000, 0.750000)" id="Line-3">
                            <path d="M0.328125,0.328125 L9.96188617,9.96188617" />
                            <path
                              d="M0.328125,0.328125 L9.96188617,9.96188617"
                              transform="translate(5.250000, 5.250000) scale(1, -1) translate(-5.250000, -5.250000) "
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div class="col w-8/12 lg:w-10/12 italic">{{ item.name }}</div>
          </div>
          <div class="row">
            <div class="col ml-4/12 lg:ml-2/12">{{ item.cost }}</div>
          </div>
          <div class="row">
            <div
              v-bind:id="'product-' + index"
              class="col ml-4/12 lg:ml-2/12"
            >{{ appendChild('product-' + index, item.removeForm) }}</div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 w-full pb-20">
        <div class="container">
          <div class="row">
            <div class="col ml-1/12 w-3/12 lg:w-1/12">Subtotal</div>
            <div class="col w-3/12">{{ subtotalCost }}</div>
          </div>
          <div class="row">
            <div class="col ml-1/12 w-3/12 lg:w-1/12">Shipping</div>
            <div class="col w-3/12">{{ shippingCost }}</div>
          </div>
          <div class="row">
            <div class="col ml-1/12 w-3/12 lg:w-1/12">Total</div>
            <div class="col w-3/12">{{ totalCost }}</div>
            <div class="col w-4/12 lg:w-6/12 text-right">
              <div id="checkout">{{ appendChild('checkout', checkoutForm) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  data() {
    return {
      items: [],
      subtotalCost: "",
      shippingCost: "",
      totalCost: "",
      checkoutForm: "",
      isEmpty: false
    };
  },
  methods: {
    readCart() {
      let cart = document.querySelector(".shopping_cart");
      let empty = document.querySelector(".wp_cart_empty_cart_section");

      if (cart) {
        let itemElements = Array.from(
          cart.querySelectorAll("tr.wspsc_cart_item_thumb")
        );

        itemElements.forEach(element => {
          this.items.push(this.getItemFromElement(element));
        });

        this.subtotalCost = cart.querySelector(
          ".wspsc_cart_subtotal td:nth-child(2)"
        ).innerText;

        this.shippingCost = cart.querySelector(
          ".wspsc_cart_shipping td:nth-child(2)"
        ).innerText;

        this.totalCost = cart.querySelector(
          ".wspsc_cart_total td:nth-child(2)"
        ).innerText;

        this.checkoutForm = cart
          .querySelector(".wpspsc_checkout_form form")
          .cloneNode(true);
        this.checkoutForm.querySelector("input[type=image]").remove();

        let input = document.createElement("input");
        input.type = "submit";
        input.name = "submit";
        input.classList.add("button");
        input.value = "Checkout";
        this.checkoutForm.appendChild(input);
      } else if (empty) {
        this.isEmpty = true;
      }
    },

    hideLoader() {
      let loader = document.querySelector(".cart-loader")
      loader.classList.add('pointer-events-none')
      anime({
        targets: loader,
        opacity: 0,
        duration: 400,
        easing: "easeInOutCirc"
      });
    },

    showLoader() {
      let loader = document.querySelector(".cart-loader")
      loader.classList.remove('pointer-events-none')
      anime({
        targets: loader,
        opacity: 1,
        duration: 400,
        easing: "easeInOutCirc"
      });
    },

    getItemFromElement(element) {
      let name = element.querySelector(
        ".wspsc_cart_item_name_td .wp_cart_item_name"
      ).innerText;
      let amountInput = element.querySelector(
        ".wspsc_cart_qty_td .wspsc_cart_item_qty"
      );
      let amount = element.querySelector(
        ".wspsc_cart_qty_td .wspsc_cart_item_qty"
      ).value;
      let cost = element.querySelector("td:nth-child(3)").innerText;
      let removeForm = element
        .querySelector(".wp_cart_remove_item_form")
        .cloneNode(true);

      removeForm.querySelector("input[type=image]").remove();

      let input = document.createElement("input");
      input.type = "submit";
      input.value = "remove";
      input.classList.add("button");
      removeForm.appendChild(input);

      return {
        name: name,
        amountInput: amountInput,
        amount: amount,
        cost: cost,
        removeForm: removeForm
      };
    },

    appendChild(id, element) {
      this.$nextTick(() => {
        let parent = document.getElementById(id);
        if (element) {
          parent.appendChild(element);
        }
      });
    },

    updateOriginalAmount(index) {
      this.showLoader();

      if (!Number.parseInt(this.items[index].amount) > 0) {
        this.items[index].amount = 0;
      }

      this.items[index].amountInput.value = this.items[index].amount;

      let form = document.querySelector('form')
      form.submit()
    }
  },
  mounted() {
    this.readCart();
    this.hideLoader();
  }
};
</script>

<style>
</style>
