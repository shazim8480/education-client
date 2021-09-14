import React from "react";
import { useHistory } from "react-router";

const CheckoutDetails = () => {
  // subscription/payment btn onClick //
  let history = useHistory();
  const handleCheckout = () => {
    history.push("/");
  };
  return (
    <div className="flex items-center justify-center w-screen min-h-screen p-8 bg-hero font-body text-secondary">
      <div className="grid w-full max-w-screen-lg gap-8 lg:grid-cols-3 md:grid-cols-2">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-medium">Payment Method</h2>
          <div className="mt-4 bg-white rounded shadow-lg">
            <div className="flex items-center px-8 py-5">
              <input
                className="w-4 h-4 border-2 border-white rounded-full appearance-none ring-2 ring-blue-600 ring-opacity-100"
                type="radio"
              />
              <label className="ml-4 text-sm font-medium">PayPal</label>
            </div>
            <div className="border-t">
              <div className="flex items-center px-8 py-5">
                <input
                  className="w-4 h-4 bg-blue-600 border-2 border-white rounded-full appearance-none ring-2 ring-blue-600 ring-opacity-100"
                  type="radio"
                />
                <label className="ml-4 text-sm font-medium">Credit Card</label>
              </div>
              <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                <div className="col-span-2">
                  <label className="text-xs font-semibold" for="cardNumber">
                    Card number
                  </label>
                  <input
                    className="flex items-center w-full h-10 px-4 mt-1 text-sm border rounded"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="">
                  <label className="text-xs font-semibold" for="cardNumber">
                    Expiry Date
                  </label>
                  <input
                    className="flex items-center w-full h-10 px-4 mt-1 text-sm border rounded"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="">
                  <label className="text-xs font-semibold" for="cardNumber">
                    CVC/CVV
                  </label>
                  <input
                    className="flex items-center w-full h-10 px-4 mt-1 text-sm border rounded"
                    type="password"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-sm font-medium">Purchase Summary</h5>
          <div className="py-6 mt-4 bg-white rounded shadow-lg">
            <div className="px-8">
              <span className="text-lg font-bold tracking-wider text-red-500">
                Enterprise Package
              </span>
              <div className="flex items-end mt-4">
                {/* package/course name */}

                <select
                  className="-ml-1 text-sm font-medium focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="">Billed Monthly</option>
                  <option value="">Billed Annually</option>
                </select>
                <span className="ml-auto text-sm font-semibold">$49</span>
                <span className="mb-px text-xs text-gray-500">/mo</span>
              </div>
              <span className="mt-2 text-xs text-gray-500">
                Save 20% with annual billing
              </span>
            </div>
            <div className="px-8 mt-4">
              <div className="flex items-end justify-between">
                <span className="text-sm font-semibold">Tax</span>
                <span className="mb-px text-sm text-gray-500">10%</span>
              </div>
            </div>
            <div className="px-8 pt-4 mt-4 border-t">
              <div className="flex items-end justify-between">
                <span className="font-semibold">Grand Total (USD)</span>
                <span className="font-semibold">$54</span>
              </div>
              <span className="mt-2 text-xs text-gray-500">
                After 1 month free: $45/mo.
              </span>
            </div>
            <div className="flex items-center px-8 mt-8">
              <input id="termsConditions" type="checkbox" />
              <label
                className="ml-2 text-xs text-gray-500"
                for="termsConditions"
              >
                I agree to the terms and conditions.
              </label>
            </div>
            <div className="flex flex-col px-8 pt-4">
              <button
                onClick={handleCheckout}
                className="flex items-center justify-center w-full h-10 text-sm font-medium text-white rounded bg-secondary hover:bg-blue-900"
              >
                Start Subscription
              </button>
              <button className="mt-3 text-xs text-blue-500 underline">
                Have a coupon code?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
