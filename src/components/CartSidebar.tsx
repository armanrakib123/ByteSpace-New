import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

const CartSidebar: React.FC = () => {
    const currency = "$";
    const { items, updateQuantity, removeFromCart, cartTotal, isCartOpen, setIsCartOpen, cartCount } = useCart();
    const navigate = useNavigate();

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsCartOpen(false);
            }
        };

        if (isCartOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isCartOpen, setIsCartOpen]);

    if (!isCartOpen) return null;

    const grandTotal = cartTotal;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop / Overlay */}
            <div
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
                aria-hidden="true"
            />

            {/* Slide-out Sidebar Drawer */}
            <div
                role="dialog"
                aria-label="Your Cart"
                className="relative z-10 flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl animate-slide-in-right"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                        <ShoppingBag className="size-5 text-gray-900" strokeWidth={1.8} />
                        <h2 className="text-[17px] font-bold text-gray-900">Your Cart</h2>
                        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                            {cartCount} {cartCount === 1 ? "item" : "items"}
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsCartOpen(false)}
                        aria-label="Close cart"
                        className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                    >
                        <X className="size-5" strokeWidth={1.8} />
                    </button>
                </div>

                {/* Body: Items or Empty state */}
                <div className="flex-1 overflow-y-auto px-6 py-5">
                    {items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center pb-12">
                            {/* Empty Shopping Bag Icon matching user's image */}
                            <div className="mb-4 flex items-center justify-center">
                                <ShoppingBag
                                    className="size-20 text-gray-200 stroke-[1.2]"
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="text-[17px] font-semibold text-gray-800">
                                Your cart is empty
                            </h3>
                            <p className="mt-1 text-xs text-gray-400 max-w-[220px]">
                                Looks like you haven't added any courses to your cart yet.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsCartOpen(false);
                                    navigate("/courses");
                                }}
                                className="mt-5 rounded-full bg-[#064DE8] px-5 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                            >
                                Browse Courses
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.product.id}
                                    className="flex gap-3.5 rounded-xl border border-gray-100 bg-gray-50/70 p-3.5 transition hover:border-gray-200"
                                >
                                    {/* Course Thumbnail */}
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        onError={(e) => {
                                            e.currentTarget.src = "/images/course-1.jpg";
                                        }}
                                        className="size-16 rounded-lg object-cover shrink-0 bg-gray-100 border border-gray-100"
                                    />

                                    {/* Info */}
                                    <div className="flex flex-1 min-w-0 flex-col justify-between">
                                        <div>
                                            <div className="flex items-start justify-between gap-2">
                                                <h4 className="text-sm font-semibold text-gray-900 truncate">
                                                    {item.product.name}
                                                </h4>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCart(item.product.id)}
                                                    aria-label="Remove item"
                                                    className="text-gray-400 hover:text-red-500 transition-colors p-0.5 shrink-0"
                                                >
                                                    <Trash2 className="size-4" strokeWidth={1.8} />
                                                </button>
                                            </div>

                                            <p className="text-xs text-gray-500 mt-0.5">
                                                {currency}
                                                {item.product.price.toFixed(2)}
                                                {item.product.unit ? ` / ${item.product.unit}` : ""}
                                            </p>
                                        </div>

                                        {/* Quantity and Subtotal */}
                                        <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-gray-200/50">
                                            <div className="flex items-center gap-1.5">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                    aria-label="Decrease quantity"
                                                    className="flex size-6 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition"
                                                >
                                                    <Minus className="size-3" />
                                                </button>

                                                <span className="w-6 text-center text-xs font-semibold text-gray-800">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                    aria-label="Increase quantity"
                                                    className="flex size-6 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition"
                                                >
                                                    <Plus className="size-3" />
                                                </button>
                                            </div>

                                            <span className="text-sm font-bold text-gray-900">
                                                {currency}
                                                {(item.product.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer: Order Summary + Checkout */}
                {items.length > 0 && (
                    <div className="border-t border-gray-100 p-6 space-y-3 bg-white">
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>Subtotal</span>
                            <span className="font-semibold text-gray-900">
                                {currency}
                                {cartTotal.toFixed(2)}
                            </span>
                        </div>

                        <div className="flex justify-between text-sm text-gray-500">
                            <span>Course Access</span>
                            <span className="font-semibold text-green-600">Free / Lifetime</span>
                        </div>

                        <div className="flex justify-between border-t border-gray-100 pt-3 text-base font-bold text-gray-900">
                            <span>Total</span>
                            <span className="text-[#064DE8]">
                                {currency}
                                {grandTotal.toFixed(2)}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                setIsCartOpen(false);
                                navigate("/checkout");
                                window.scrollTo(0, 0);
                            }}
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#064DE8] py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.99]"
                        >
                            Proceed to Checkout
                            <ArrowRight className="size-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
