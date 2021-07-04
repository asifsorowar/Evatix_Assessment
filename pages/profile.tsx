import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { getUserFromServer, getUser } from "../service/authService";
import { editProfile, deleteProfile } from "../service/userService";
import Redirect from "../components/Redirect";

function Profile() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setBirth] = useState("");
  const [profession, setProfession] = useState("");
  const router = useRouter();

  const user = async () => {
    const { data: user, success } = await getUserFromServer();
    if (success) {
      setFullName(user?.full_name);
      setEmail(user?.email);
      setBirth(new Date(user?.date_of_birth).toDateString());
      setProfession(user?.profession);
    }
    if (!user && !success) return router.push("/");
  };

  useEffect(() => {
    user();
  }, [user]);

  const handleEdit = async (e) => {
    e.preventDefault();
    confirm("Click ok to change data?");

    const { success, message } = await editProfile({
      full_name,
      email,
      profession,
    });

    if (success) {
      return alert("Edited successfully");
    }
    if (!success && message) {
      return alert(message);
    } else {
      return alert("Ops!! something went wrong!!!");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    confirm("Are you sure to delete account?");

    const { success, message } = await deleteProfile();
    if (success) {
      alert("Account deleted!");
      return router.replace("/");
    }
    if (!success && message) {
      return alert(message);
    } else {
      return alert("Ops!! something went wrong!!!");
    }
  };

  if (!user) return <Redirect to="/" />;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Your Profile</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleEdit}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        onChange={(e) => setFullName(e.target.value)}
                        value={full_name}
                        className="form-input w-full text-gray-800"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        className="form-input w-full text-gray-800"
                        disabled
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="birth_date"
                      >
                        Date Of Birth <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="birth"
                        type="text"
                        value={date_of_birth}
                        className="form-input w-full text-gray-800"
                        disabled
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="profession"
                      >
                        Profession <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="profession"
                        type="text"
                        onChange={(e) => setProfession(e.target.value)}
                        value={profession}
                        className="form-input w-full text-gray-800"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                        Edit
                      </button>
                    </div>
                  </div>
                </form>
                <form>
                  <div className="flex flex-wrap -mx-3 m-3">
                    <div className="w-full px-3">
                      <button
                        className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center"
                        onClick={handleDelete}
                      >
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Delete
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
