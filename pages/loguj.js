import React from "react";

function loguj() {
  return (
    <div className="text-3xl flex justify-center p-10 h-screen w-full">
      <div>
        <a href="http://mn-fliz.mil-tech.pl/admin">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Przejdz do panelu
          </button>
        </a>
      </div>
    </div>
  );
}

export default loguj;
