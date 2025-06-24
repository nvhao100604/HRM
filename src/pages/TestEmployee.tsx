import React, { useState } from "react";
import { FiEdit2, FiLogOut, FiCamera } from "react-icons/fi";

const AccountOverview = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [userData] = useState({
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    position: "Senior Developer",
    status: "Active",
    citizenId: "****-****-****-1234",
    userId: "UID98765432"
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle image upload logic here
      console.log("Image uploaded:", file);
    }
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    setShowLogoutModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 p-8">
          <div className="absolute top-4 right-4 space-x-4">
            <button
              onClick={() => setShowLogoutModal(true)}
              className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
            >
              <FiLogOut className="mr-2" />
              Logout
            </button>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                <img
                  src={userData.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";
                  }}
                />
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-200">
                <FiCamera className="text-white" />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500">Full Name</label>
                  <p className="text-gray-800 font-medium">{`${userData.firstName} ${userData.lastName}`}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Date of Birth</label>
                  <p className="text-gray-800 font-medium">{userData.dateOfBirth}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Gender</label>
                  <p className="text-gray-800 font-medium">{userData.gender}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <p className="text-gray-800 font-medium">{userData.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Phone</label>
                  <p className="text-gray-800 font-medium">{userData.phone}</p>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Professional Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500">Position</label>
                  <p className="text-gray-800 font-medium">{userData.position}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Status</label>
                  <span className={`px-3 py-1 rounded-full text-sm ${userData.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {userData.status}
                  </span>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Citizen ID</label>
                  <p className="text-gray-800 font-medium">{userData.citizenId}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">User ID</label>
                  <p className="text-gray-800 font-medium">{userData.userId}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200">
              <FiEdit2 className="mr-2" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to logout? This action cannot be undone.</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountOverview;