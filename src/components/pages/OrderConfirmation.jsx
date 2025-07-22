import { useEffect } from "react";

function OrderConfirmation() {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col items-center gap-5">
        <img
          src="/icons/green_checkmark.svg"
          alt="Discover"
          height={75}
          width={75}
        />
        <div className="text-center">
          <h1>Thank you for your order!</h1>
          <p>An order summary has been sent to your email address</p>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
