import React from "react";
import type { Address, User } from "../../types";

interface CheckoutAddressProps {
    address: Address;
    setAddress: React.Dispatch<React.SetStateAction<Address>>;
    setStep: (step: string) => void;
    user: User | null;
}

const CheckoutAddress: React.FC<CheckoutAddressProps> = ({ address, setAddress, setStep, user }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("payment");
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Billing & Contact Information</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            placeholder="John Doe"
                            defaultValue={user?.name || ""}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            defaultValue={user?.email || ""}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Street Address</label>
                    <input
                        type="text"
                        required
                        value={address.address}
                        onChange={(e) => setAddress({ ...address, address: e.target.value })}
                        placeholder="123 Academic Way, Apt 4B"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">City</label>
                        <input
                            type="text"
                            required
                            value={address.city}
                            onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            placeholder="Dhaka / New York"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">State / Province</label>
                        <input
                            type="text"
                            value={address.state || ""}
                            onChange={(e) => setAddress({ ...address, state: e.target.value })}
                            placeholder="Dhaka / NY"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Zip / Postal Code</label>
                        <input
                            type="text"
                            value={address.zip || ""}
                            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                            placeholder="1212"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="pt-4 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2.5 bg-[#064DE8] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Continue to Payment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutAddress;
