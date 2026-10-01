import React, { useState } from "react";
import { CreditCard, Landmark, Smartphone } from "lucide-react";

interface CheckoutPaymentProps {
    paymentMethod: string;
    setPaymentMethod: (method: string) => void;
    setStep: (step: string) => void;
}

const CheckoutPayment: React.FC<CheckoutPaymentProps> = ({
    paymentMethod,
    setPaymentMethod,
    setStep,
}) => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("review");
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Payment Method</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            paymentMethod === "card"
                                ? "border-[#064DE8] bg-blue-50/50 text-[#064DE8]"
                                : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                    >
                        <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                            className="sr-only"
                        />
                        <CreditCard className="size-6 mb-2" />
                        <span className="text-xs font-semibold">Credit/Debit Card</span>
                    </label>

                    <label
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            paymentMethod === "bkash"
                                ? "border-[#064DE8] bg-blue-50/50 text-[#064DE8]"
                                : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                    >
                        <input
                            type="radio"
                            name="payment"
                            value="bkash"
                            checked={paymentMethod === "bkash"}
                            onChange={() => setPaymentMethod("bkash")}
                            className="sr-only"
                        />
                        <Smartphone className="size-6 mb-2" />
                        <span className="text-xs font-semibold">bKash / Mobile</span>
                    </label>

                    <label
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            paymentMethod === "bank"
                                ? "border-[#064DE8] bg-blue-50/50 text-[#064DE8]"
                                : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                    >
                        <input
                            type="radio"
                            name="payment"
                            value="bank"
                            checked={paymentMethod === "bank"}
                            onChange={() => setPaymentMethod("bank")}
                            className="sr-only"
                        />
                        <Landmark className="size-6 mb-2" />
                        <span className="text-xs font-semibold">Bank Transfer</span>
                    </label>
                </div>

                {paymentMethod === "card" && (
                    <div className="space-y-4 pt-2 border-t border-gray-100">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Card Number</label>
                            <input
                                type="text"
                                required
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="4242 •••• •••• 4242"
                                maxLength={19}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Expiration Date</label>
                                <input
                                    type="text"
                                    required
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                    placeholder="MM/YY"
                                    maxLength={5}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">CVC / Security Code</label>
                                <input
                                    type="text"
                                    required
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
                                    placeholder="123"
                                    maxLength={4}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {paymentMethod === "bkash" && (
                    <div className="p-4 bg-pink-50 border border-pink-100 rounded-xl text-xs text-pink-800 space-y-1">
                        <p className="font-semibold">bKash Merchant Payment</p>
                        <p>Merchant Number: 01700000000. You will be redirected or prompted for PIN on checkout.</p>
                    </div>
                )}

                {paymentMethod === "bank" && (
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 space-y-1">
                        <p className="font-semibold">Direct Bank Transfer</p>
                        <p>Make your payment directly into our bank account. Use your Order ID as reference.</p>
                    </div>
                )}

                <div className="pt-4 flex justify-between">
                    <button
                        type="button"
                        onClick={() => setStep("address")}
                        className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2.5 bg-[#064DE8] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Review Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPayment;
