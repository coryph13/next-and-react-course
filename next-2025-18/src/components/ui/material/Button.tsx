'use client'

import { Button as MaterialButton } from "@material-tailwind/react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <MaterialButton size={`lg`} color="blue" onClick={() => alert('Кнопка нажата!')} className="px-6 py-3 rounded-lg mt-10">
      {children}
    </MaterialButton>
  );
}