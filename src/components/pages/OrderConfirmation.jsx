import { Link, useLocation } from "react-router-dom";

function OrderConfirmation() {
  const { state: order } = useLocation();
  const email = order?.email;
  const cart = order?.cart ?? [];
  const totalPrice = order?.totalPrice ?? 0;
  const tax = totalPrice * 0.085;
  const shipping = 4.99;

  return (
    <section className="flex justify-center px-5 md:px-10 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 gap-3">
          <img src="/icons/green_checkmark.svg" alt="Order confirmed" width={64} height={64} />
          <h1 className="text-2xl font-bold text-gray-800">Order Confirmed!</h1>
          {email && (
            <p className="text-sm text-gray-500">
              A confirmation has been sent to <span className="font-medium text-gray-700">{email}</span>
            </p>
          )}
          <p className="text-sm text-gray-500">Your order will arrive in <span className="font-medium text-gray-700">3–5 business days</span>.</p>
        </div>

        {/* Order Summary */}
        <div className="border border-gray-200 rounded-md p-6 mb-8">
          <h2 className="text-base font-semibold text-gray-800 mb-4">Order Summary</h2>

          {cart.length > 0 ? (
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.data.id} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.data.image}
                      alt={item.data.title}
                      className="w-14 h-14 object-contain border border-gray-200 rounded-md flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.data.title}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-800 flex-shrink-0">
                    ${(item.data.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 mb-6">No items found.</p>
          )}

          <hr className="border-gray-200 mb-4" />

          <div className="text-sm space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Estimated Taxes</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <hr className="border-gray-200 my-4" />

          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span>${(totalPrice + tax + shipping).toFixed(2)}</span>
          </div>
        </div>

        {/* Home link */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-6 py-2 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OrderConfirmation;
