
import { useState } from "react";
import { User, Mail, Image, Phone, Lock, Calendar, MapPin } from "lucide-react";

export default function EditProfile() {
  const [name, setName] = useState("shadcn");
  const [email, setEmail] = useState("m@example.com");
  const [avatar, setAvatar] = useState("/avatars/shadcn.jpg");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Profile updated! (dummy)");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full mx-auto flex flex-col gap-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full flex flex-col gap-8">
          {/* Avatar & Basic Info */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative">
              <img src={avatar} alt="Avatar" className="w-32 h-32 rounded-full border-4 border-blue-200 object-cover" />
              <label className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                <Image className="w-5 h-5 text-white" />
                <input type="file" accept="image/*" className="hidden" onChange={e => {
                  if (e.target.files && e.target.files[0]) {
                    setAvatar(URL.createObjectURL(e.target.files[0]));
                  }
                }} />
              </label>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <label className="text-sm font-medium flex items-center gap-2"><User className="w-4 h-4" /> Name</label>
                <input value={name} onChange={e => setName(e.target.value)} className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="text-sm font-medium flex items-center gap-2"><Mail className="w-4 h-4" /> Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="text-sm font-medium flex items-center gap-2"><Phone className="w-4 h-4" /> Phone</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="text-sm font-medium flex items-center gap-2"><Calendar className="w-4 h-4" /> Date of Birth</label>
                <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium flex items-center gap-2"><MapPin className="w-4 h-4" /> Address</label>
                <input value={address} onChange={e => setAddress(e.target.value)} className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
            </div>
          </div>

          {/* Password Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div>
                <label className="text-sm font-medium flex items-center gap-2"><Lock className="w-4 h-4" /> Current Password</label>
                <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="text-sm font-medium flex items-center gap-2"><Lock className="w-4 h-4" /> New Password</label>
                <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="text-sm font-medium flex items-center gap-2"><Lock className="w-4 h-4" /> Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="px-8 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
