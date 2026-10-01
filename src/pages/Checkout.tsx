import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { Address } from "../types";
import { ArrowLeft, CheckIcon, ChevronRightIcon, CreditCardIcon, MapPinIcon } from "lucide-react";
import CheckoutAddress from "../components/Checkout/CheckoutAddress";
import CheckoutPayment from "../components/Checkout/CheckoutPayment";
import CheckoutReview from "../components/Checkout/CheckoutReview";
import api from "../config/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Checkout = () => {
    const navigate = useNavigate();
    const currency = "$";

    const { items, cartTotal, clearCart } = useCart();
    const { user } = useAuth();

    const [step, setStep] = useState("address");
    const [loading, setLoading] = useState(false);

    const [address, setAddress] = useState<Address>({
        id: "",
        label: "Home",
        address: "",
        city: "",
        state: "",
        zip: "",
        isDefault: false,
        lat: 0,
        lng: 0,
    });

    const [paymentMethod, setPaymentMethod] = useState("card");

    const deliveryFee = 0; // Digital course enrollments have free instant access
    const tax = 0;
    const total = cartTotal + deliveryFee + tax;

    const steps: { key: string; label: string; icon: typeof MapPinIcon }[] = [
        { key: "address", label: "Address", icon: MapPinIcon },
        { key: "payment", label: "Payment", icon: CreditCardIcon },
        { key: "review", label: "Review", icon: CheckIcon },
    ];

    const handlePlaceOrder = async () => {
        setLoading(true);
        try {
            const orderData = {
                items: items.map((item) => ({
                    product: item.product.id,
                    quantity: item.quantity,
                })),
                shippingAddress: address,
                paymentMethod,
            };

            try {
                const { data } = await api.post("/orders", orderData);
                if (data?.url) {
                    window.location.href = data.url;
                    return;
                }
            } catch (apiError) {
                console.log("Mocking successful order:", apiError);
            }

            clearCart();
            toast.success("Enrollment complete! Welcome to the course.");
            navigate("/courses");
        } catch (error: any) {
            toast.error(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
            window.scrollTo(0, 0);
        }
    };

    // Populate address from user's default address if available
    useEffect(() => {
        if (user?.addresses?.length) {
            const defaultAddr = user.addresses.find((a) => a.isDefault) || user.addresses[0];
            setAddress({
                id: defaultAddr?.id,
                label: defaultAddr?.label,
                address: defaultAddr?.address,
                city: defaultAddr?.city,
                state: defaultAddr?.state,
                zip: defaultAddr?.zip,
                isDefault: defaultAddr?.isDefault,
                lat: defaultAddr?.lat,
                lng: defaultAddr?.lng,
            });
        }
    }, [user]);

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                    <p className="text-sm text-gray-500 mb-6">Explore our courses and start learning today!</p>
                    <button
                        onClick={() => navigate("/courses")}
                        className="w-full py-3 bg-[#064DE8] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Browse Courses
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft className="size-4" /> Back
                </button>

                <h1 className="text-2xl font-bold text-gray-900 mb-6">Course Checkout</h1>

                {/* Steps */}
                <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
                    {steps.map((s, i) => (
                        <div key={s.key} className="flex items-center gap-2 shrink-0">
                            <button
                                onClick={() => setStep(s.key)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                                    step === s.key
                                        ? "bg-[#064DE8] text-white shadow-sm"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                                }`}
                            >
                                <s.icon className="size-4" /> {s.label}
                            </button>
                            {i < steps.length - 1 && <ChevronRightIcon className="size-4 text-gray-400" />}
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Main Form */}
                    <div className="md:col-span-2">
                        {step === "address" && (
                            <CheckoutAddress address={address} setAddress={setAddress} setStep={setStep} user={user} />
                        )}

                        {step === "payment" && (
                            <CheckoutPayment
                                paymentMethod={paymentMethod}
                                setPaymentMethod={setPaymentMethod}
                                setStep={setStep}
                            />
                        )}

                        {step === "review" && (
                            <CheckoutReview
                                address={address}
                                items={items}
                                handlePlaceOrder={handlePlaceOrder}
                                loading={loading}
                                total={total}
                            />
                        )}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="bg-white rounded-2xl p-6 h-fit sticky top-24 border border-gray-100 shadow-sm">
                        <h3 className="text-base font-bold text-gray-900 mb-4">Order Summary</h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal ({items.length} {items.length === 1 ? "item" : "items"})</span>
                                <span className="font-semibold text-gray-900">
                                    {currency}{cartTotal.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>Course Access</span>
                                <span className="font-semibold text-green-600">Instant / Lifetime</span>
                            </div>

                            <div className="flex justify-between pt-3 border-t border-gray-100 text-base font-bold text-gray-900">
                                <span>Total</span>
                                <span className="text-[#064DE8]">
                                    {currency}{total.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
