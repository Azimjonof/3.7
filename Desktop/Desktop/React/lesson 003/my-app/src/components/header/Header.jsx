import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
    profession: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id && user.name && user.age && user.profession) {
      setUsers([...users, user]);
      setUser({ id: "", name: "", age: "", profession: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-md mx-auto mb-8"
      >
        <h2 className="text-xl font-bold mb-4">Foydalanuvchi qo‘shish</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="id"
            value={user.id}
            onChange={handleChange}
            placeholder="ID"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Ism"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
            placeholder="Yosh"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="profession"
            value={user.profession}
            onChange={handleChange}
            placeholder="Kasb"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Qo‘shish
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {users.map((u) => (
          <div key={u.id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{u.name}</h3>
            <p><span className="font-medium">ID:</span> {u.id}</p>
            <p><span className="font-medium">Yosh:</span> {u.age}</p>
            <p><span className="font-medium">Kasb:</span> {u.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
