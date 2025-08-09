"use client";
import Button from "@/components/atoms/Button";

export default function CharityTable({ charities, onDelete }) {
  return (
    <div className="bg-dark/90 shadow rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-dark/50 text-main text-left">
          <tr>
            <th className="p-3">Number</th>
            <th className="p-3">Logo</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {charities?.map((charity) => (
            <tr key={charity._id} className="border-t border-t-gray-400/20">
              <td className="p-3">{charity.number}</td>
              <td className="p-3">
                <img
                  src={charity.logo}
                  alt="logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </td>
              <td className="p-3">
                <Button onClick={() => onDelete(charity._id)}>Delete</Button>
              </td>
            </tr>
          ))}
          {charities?.length === 0 && (
            <tr>
              <td colSpan="3" className="p-3 text-center text-gray-500">
                No charities found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
