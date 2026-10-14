function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart = [], product, qty) {
  const existingIndex = cart.findIndex((item) => item.id === product.id);
  const currentQty =  existingIndex !== -1 ? cart[existingIndex].quantity : 0;

  if (qty === 0) throw new RangeError("Количество не должно быть равно нулю");

  if( currentQty + qty > product.stock) throw new RangeError("Нет столько товара на складе");

  if (!cart.length) return [{ ...product, quantity: qty }];

  if (existingIndex !== -1) {
    const updatedCart = [...cart];
    updatedCart[existingIndex] = {
      ...updatedCart[existingIndex],
      quantity: updatedCart[existingIndex].quantity + qty,
    };
    return updatedCart;
  }

  return [...cart, { ...product, quantity: qty }];
}

function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = {
  addToCart /* changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal */,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
