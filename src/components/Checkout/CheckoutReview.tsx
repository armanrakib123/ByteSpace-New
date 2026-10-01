import React from "react";
import type { Address, CartItem } from "../../types";
import { CheckCircle2, Loader2 } from "lucide-react";

interface CheckoutReviewProps {
    address: Address;
    items: CartItem[];
    handlePlaceOrder: () => Promise<void>;
    loading: boolean;
    total: number;
}

const CheckoutReview: React.FC<CheckoutReviewProps> = ({
    address,
    items,
    handlePlaceOrder,
    loading,
    total,
}) => {
    const currency = "$";

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Review Your Order</h2>

            {/* Address Summary */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 mb-2 text-[#064DE8]">
                    <CheckCircle2 className="size-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Billing Address</span>
                </div>
                <p className="text-sm font-medium text-gray-800">{address.address || "Address not provided"}</p>
                <p className="text-xs text-gray-500">
                    {[address.city, address.state, address.zip].filter(Boolean).join(", ")}
                </p>
            </div>

            {/* Enrolled Courses */}
            <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Enrolled Courses ({items.length})</h3>
                <div className="divide-y divide-gray-100">
                    {items.map((item) => (
                        <div key={item.product.id} className="py-3 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 min-w-0">
                                <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    onError={(e) => {
                                        e.currentTarget.src = "/images/course-1.jpg";
                                    }}
                                    className="size-12 rounded-lg object-cover shrink-0"
                                />
                                <div className="min-w-0">
                                    <h4 className="text-sm font-semibold text-gray-900 truncate">{item.product.name}</h4>
                                    <p className="text-xs text-gray-500">
                                        Qty: {item.quantity} • {item.product.category || "Course"}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right shrink-0">
                                <span className="text-sm font-bold text-gray-900">
                                    {currency}{(item.product.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Total Callout */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                    <span className="text-sm text-gray-500">Total Due Today</span>
                    <p className="text-2xl font-bold text-[#064DE8]">
                        {currency}{total.toFixed(2)}
                    </p>
                </div>

                <button
                    type="button"
                    disabled={loading}
                    onClick={handlePlaceOrder}
                    className="px-8 py-3 bg-[#064DE8] text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading && <Loader2 className="size-4 animate-spin" />}
                    Complete Enrollment
                </button>
            </div>
        </div>
    );
};

export default CheckoutReview;
